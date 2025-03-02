'use client';

import AboutUs from '@/components/sections/AboutUs';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';
import HomeHeader from '@/components/sections/HomeHeader';
import Products from '@/components/sections/Products';

export default function Home() {
	return (
		<main className='min-h-screen bg-background w-full overflow-x-hidden'>
			<HomeHeader />
			<Hero />
			<AboutUs />
			<Products />
			<Contact />
			<Footer />
		</main>
	);
}
