'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    register: (email: string, password: string, name: string) => Promise<boolean>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    login: async () => false,
    register: async () => false,
    logout: () => {},
    isLoading: true,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user exists in localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
            // For demo purposes, we'll use a simple check
            const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
            const user = storedUsers.find((u: any) => u.email === email && u.password === password);

            if (user) {
                const userData = {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                };
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));
                toast.success('Successfully logged in');
                return true;
            } else {
                toast.error('Invalid credentials');
                return false;
            }
        } catch (error) {
            toast.error('Login failed');
            return false;
        }
    };

    const register = async (email: string, password: string, name: string) => {
        try {
            const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

            // Check if user already exists
            if (storedUsers.some((u: any) => u.email === email)) {
                toast.error('User already exists');
                return false;
            }

            const newUser = {
                id: Date.now().toString(),
                email,
                password,
                name,
            };

            storedUsers.push(newUser);
            localStorage.setItem('users', JSON.stringify(storedUsers));

            const userData = {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name,
            };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));

            toast.success('Successfully registered');
            return true;
        } catch (error) {
            toast.error('Registration failed');
            console.log(error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        toast.success('Successfully logged out');
    };

    return <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>{children}</AuthContext.Provider>;
}
