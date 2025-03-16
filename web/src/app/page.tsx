'use client';

import AboutUs from '@/components/sections/AboutUs';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';

export default function Home() {
    return (
        <main className="bg-background min-h-screen w-full overflow-x-hidden">
            <Hero />
            <AboutUs />
            <Products />
            <Contact />
        </main>
    );
}
