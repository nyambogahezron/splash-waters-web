'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const heroSlides = [
	{
		title: 'Professionally treated water, all over the house',
		description:
			'Vivamus non posuere nisl, id auctor ligula. vitae lobortis nisi',
		image:
			'https://images.unsplash.com/photo-1553564552-02656d6a2390?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D',
	},
	{
		title: 'Advanced Water Purification Technology',
		description:
			'State-of-the-art filtration systems for the purest water quality',
		image:
			'https://plus.unsplash.com/premium_photo-1705969351341-f34f843d7a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww',
	},
	{
		title: 'Smart Water Management Solutions',
		description: 'Intelligent monitoring and control for optimal water quality',
		image:
			'https://images.unsplash.com/photo-1563351672-62b74891a28a?w=800&q=80',
	},
];

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
		}, 10000);

		return () => clearInterval(timer);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + heroSlides.length) % heroSlides.length
		);
	};

	return (
		<section className='flex relative bg-background overflow-hidden h-[calc(100dvh-(5rem))] w-screen justify-center items-center '>
			<div className='absolute -right-6 w-full h-full bg-blue/10 rounded-full blur-3xl'></div>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 items-center justify-center flex relative'>
				<div className='relative'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={currentSlide}
							className='flex w-screen items-center h-[calc(100dvh-(5rem))] relative'
						>
							{/* hero text  */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.3 }}
								className='md:space-y-6 pl-8 py-2 absolute bottom-[35%] md:bottom-1/2 left-0 md:left-96 max-w-[800px] z-10'
							>
								<h1 className='text-3xl md:text-6xl font-bold text-text mb-6'>
									{heroSlides[currentSlide].title}
								</h1>
								<p className='text-lg text-white mb-14'>
									{heroSlides[currentSlide].description}
								</p>
								<button className='bg-blue hover:bg-transparent  text-white px-10 py-4 transition-all hover:shadow-lg hover:bg-blue-600 rounded-lg'>
									Find Solution
								</button>
							</motion.div>

							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className='relative h-full overflow-hidden w-full'
							>
								<Image
									src={heroSlides[currentSlide].image}
									alt='Water Purifier'
									width={800}
									height={550}
									className='w-full h-full object-cover object-center opacity-90 dark:opacity-30'
								/>
								<div className='absolute inset-0 w-full h-full bg-transparent dark:bg-blue/10 rounded-full blur-3xl'></div>
							</motion.div>
						</motion.div>
					</AnimatePresence>

					{/*  slider controls */}
					{/* prev */}
					<button
						onClick={prevSlide}
						className='absolute left-[73%] md:left-14 top-[95%] md:top-1/2  md:-mt-14 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors '
					>
						<svg
							className='w-5 h-5 md:w-8 md:h-8 text-blue'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M15 19l-7-7 7-7'
							/>
						</svg>
					</button>

					{/* next */}
					<button
						onClick={nextSlide}
						className='absolute right-4 md:right-14 top-[95%] md:top-1/2 md:-mt-14 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors '
					>
						<svg
							className='w-5 h-5 md:w-8 md:h-8 text-blue'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5l7 7-7 7'
							/>
						</svg>
					</button>

					{/* slide indicators */}

					<div className='absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2'>
						{heroSlides.map((_, index) => (
							<button
								key={index}
								className={`w-2 h-2 rounded-full transition-all duration-300 ${
									currentSlide === index ? 'bg-blue w-4' : 'bg-gray-300'
								}`}
								onClick={() => setCurrentSlide(index)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
