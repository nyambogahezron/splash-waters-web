'use client';
import { useGlobalContext } from '@/context/GlobalContext';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Droplets, ShoppingCart } from 'lucide-react';
import React from 'react';
import ThemeToggle from './ThemeToggle';

const SCREEN = window.innerWidth;

export default function Navbar() {
    const [isNavbarOffView, setIsNavbarOffView] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const links = [
        {
            href: '/',
            label: 'Home',
        },
        {
            href: '/about',
            label: 'About',
        },
        {
            href: '/products',
            label: 'Products',
        },
        {
            href: '/blogs',
            label: 'Blogs',
        },
        {
            href: '/#contact',
            label: 'Contact',
        },
    ];

    const { items, total } = useGlobalContext();

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    //set isNavbarOffView to true always on mobile
    React.useEffect(() => {
        if (window.innerWidth < 768) {
            setIsNavbarOffView(true);
        }
    }, []);

    const onScroll = React.useCallback(() => {
        const { scrollY } = window;
        if (SCREEN < 768) {
            setIsNavbarOffView(true);
            return;
        }
        setIsNavbarOffView(scrollY > 35);
    }, []);

    React.useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [onScroll]);

    return (
        <motion.nav
            animate={{
                width: isNavbarOffView ? '100%' : '80%',
                y: isNavbarOffView ? 0 : 10,
                opacity: isNavbarOffView ? 1 : 1,
                boxShadow: isNavbarOffView ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : '',
                top: isNavbarOffView ? 0 : 30,
                left: 0,
                right: 0,
                zIndex: 50,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-background fixed top-0 right-0 left-0 z-50 mx-auto shadow-sm md:fixed md:w-full"
        >
            <div className="mx-auto max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <Droplets className="text-blue h-8 w-8" />
                        <span className="hidden text-xl font-bold text-gray-900 md:block dark:text-white">Water Splash</span>
                    </Link>

                    <div className="hidden items-center space-x-8 md:flex">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                prefetch
                                className="hover:text-blue text-gray-700 dark:text-white dark:hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <Link href="/cart" className="relative mt-2">
                            <button className="relative">
                                <ShoppingCart className="text-accent-foreground h-6 w-6" />
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#0099FF] text-xs text-white">
                                    {itemCount}
                                </span>
                            </button>
                        </Link>
                        <div className="text-accent-DEFAULT hidden md:block">
                            Total <span className="font-semibold">${total.toFixed(2)}</span>{' '}
                        </div>

                        <ThemeToggle />

                        {/* Mobile menu button */}
                        <button className="flex items-center md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="border-t py-4 md:hidden">
                        <div className="flex flex-col space-y-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    prefetch
                                    className="hover:text-blue mb-2 text-gray-700 dark:text-white dark:hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </motion.nav>
    );
}
