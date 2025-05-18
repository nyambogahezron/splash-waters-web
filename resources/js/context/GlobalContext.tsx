import { CartItem, Product } from '@/types';
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

interface GlobalContextType {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    total: number;
}

const GlobalContext = createContext<GlobalContextType>({
    items: [],
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
    total: 0,
});

export const useGlobalContext = () => useContext(GlobalContext);

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    console.log('GlobalContextProvider', items);

    useEffect(() => {
        // Load cart from localStorage on mount
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setItems(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        // Save cart to localStorage whenever it changes
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const addToCart = (product: Product) => {
        setItems((currentItems) => {
            const existingItem = currentItems.find((item) => item.id === product.id);

            if (existingItem) {
                toast.success('Item quantity updated in cart');
                return currentItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
            }

            toast.success('Item added to cart');
            return [...currentItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setItems((currentItems) => currentItems.filter((item) => item.id !== productId));
        toast.success('Item removed from cart');
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) return;

        setItems((currentItems) => currentItems.map((item) => (item.id === productId ? { ...item, quantity } : item)));
        toast.success('Cart updated');
    };

    const clearCart = () => {
        setItems([]);
        toast.success('Cart cleared');
    };

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <GlobalContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                total,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
