'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import { Loader2, Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const success = await login(email, password);
        if (success) {
            router.push('/');
        }

        setIsLoading(false);
    };

    return (
        <main className="bg-background min-h-screen pt-24">
            <section className="relative bg-[#F5F9FF] py-20">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
                <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-lg bg-white p-8 shadow-xl"
                    >
                        <div className="mb-8 text-center">
                            <h1 className="text-2xl font-bold text-[#0099FF]">Welcome Back</h1>
                            <p className="text-muted-foreground mt-2">Sign in to your account to continue</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full rounded-md border border-gray-300 px-4 py-2 pl-10 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                        placeholder="Enter your email"
                                        required
                                    />
                                    <Mail className="text-muted-foreground absolute top-2.5 left-3 h-5 w-5" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full rounded-md border border-gray-300 px-4 py-2 pl-10 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <Lock className="text-muted-foreground absolute top-2.5 left-3 h-5 w-5" />
                                </div>
                            </div>

                            <Button type="submit" className="w-full bg-[#0099FF] hover:bg-blue-600" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-muted-foreground">
                                Don&apost have an account?{' '}
                                <Link href="/register" className="text-[#0099FF] hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
