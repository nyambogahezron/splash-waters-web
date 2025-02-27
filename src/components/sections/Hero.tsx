'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
		<section className='flex relative bg-[#d7eeff] overflow-x-hidden min-h-[calc(100dvh-(5rem))] justify-center items-center '>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 items-center justify-center flex relative'>
				<div className='relative'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={currentSlide}
							className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100dvh-(5rem))] relative'
						>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.3 }}
								className='space-y-6 pl-8'
							>
								<h1 className='text-5xl md:text-6xl mt-20 md:-mt-20 font-bold text-gray-900 mb-6'>
									{heroSlides[currentSlide].title}
								</h1>
								<p className='text-lg text-gray-600 mb-8'>
									{heroSlides[currentSlide].description}
								</p>
								<Button
									size='lg'
									className='bg-blue hover:bg-blue-600 text-white px-10 py-6 transition-all hover:shadow-lg hover:bg-blue-600 hover:border-white'
								>
									Find Solution
								</Button>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.5 }}
								className='relative h-[90%] overflow-hidden'
							>
								<Image
									src={heroSlides[currentSlide].image}
									alt='Water Purifier'
									width={600}
									height={550}
									className='rounded-lg w-full h-full object-cover'
								/>
								<div className='absolute inset-0 bg-blue-500  rounded-lg'></div>
							</motion.div>
						</motion.div>
					</AnimatePresence>

					{/*  slider controls */}
					{/* prev */}
					<button
						onClick={prevSlide}
						className='absolute -left-14 top-1/3 mt-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors'
					>
						<svg
							className='w-8 h-8 text-blue'
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
						className='absolute -right-14 t-4 top-1/3 mt-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors'
					>
						<svg
							className='w-8 h-8 text-blue'
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

					<div className='absolute bottom-24 left-1/4 transform -translate-x-1/2 flex space-x-2'>
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

			{/* Wave decoration */}
			<div className='absolute bottom-0 left-0 right-0'>
				<svg viewBox='0 0 1440 200' className='w-full'>
					<path
						fill='white'
						fillOpacity='1'
						d='M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
					></path>
				</svg>
			</div>
		</section>
	);
}
