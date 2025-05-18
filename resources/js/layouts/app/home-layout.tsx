import Navbar from '@/components/h0me-navbar';
import Footer from '@/components/sections/Footer';
import React from 'react';
import { Toaster } from 'sonner';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-background min-h-screen w-full overflow-x-hidden">
            <Navbar />
            {children}
            <Footer />
            <Toaster />
        </main>
    );
}
