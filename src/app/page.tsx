'use client';

import AboutUs from '@/components/sections/AboutUs';
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
		</main>
	);
}
