'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function About() {
	return (
		<main className='min-h-screen pt-24 bg-background'>
			{/* Products Section */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className='space-y-6'
						>
							<h1 className='text-3xl font-bold text-[#0099FF]'>PRODUCTS</h1>
							<h2 className='text-4xl font-bold text-foreground'>
								Water Purifier Pro Series
							</h2>

							<p className='text-muted-foreground'>
								Experience unparalleled water purification with our advanced Pro
								Series system. Designed for maximum efficiency and reliability,
								this system sets new standards in water treatment technology.
							</p>

							<ul className='space-y-4'>
								<li className='flex items-center space-x-3'>
									<div className='w-2 h-2 bg-[#0099FF] rounded-full' />
									<span>
										Advanced 7-stage filtration process for superior
										purification
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<div className='w-2 h-2 bg-[#0099FF] rounded-full' />
									<span>
										Smart monitoring system with real-time water quality
										analysis
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<div className='w-2 h-2 bg-[#0099FF] rounded-full' />
									<span>
										Energy-efficient operation with minimal maintenance required
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<div className='w-2 h-2 bg-[#0099FF] rounded-full' />
									<span>
										Certified to remove 99.99% of harmful contaminants
									</span>
								</li>
								<li className='flex items-center space-x-3'>
									<div className='w-2 h-2 bg-[#0099FF] rounded-full' />
									<span>
										IoT-enabled with mobile app control and monitoring
									</span>
								</li>
							</ul>

							<Button className='flex items-center space-x-2 bg-[#0099FF] hover:bg-blue-600'>
								<Download className='w-4 h-4' />
								<span>TECHNICAL DETAILS</span>
							</Button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className='relative'
						>
							<Image
								src='https://images.unsplash.com/photo-1624958723474-09f80c559939?w=800&q=80'
								alt='Water Purifier Pro Series'
								width={600}
								height={400}
								className='rounded-lg shadow-xl'
							/>
							<div className='absolute -bottom-6 -right-6 w-48 h-48 bg-[#0099FF]/10 rounded-full blur-3xl' />
						</motion.div>
					</div>
				</div>
			</section>

			{/* Add-on Modules Section */}
			<section className='py-20 bg-muted/30'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='mb-12'
					>
						<h2 className='text-3xl font-bold text-[#0099FF]'>
							ADD-ON MODULES
						</h2>
					</motion.div>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							className='relative'
						>
							<Image
								src='https://images.unsplash.com/photo-1585687433141-694dd0f4a8b5?w=800&q=80'
								alt='Multisampling Module'
								width={600}
								height={400}
								className='rounded-lg shadow-xl'
							/>
							<div className='absolute -bottom-6 -left-6 w-48 h-48 bg-[#0099FF]/10 rounded-full blur-3xl' />
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='space-y-6'
						>
							<h3 className='text-2xl font-bold text-foreground'>
								Multisampling Module
							</h3>
							<p className='text-muted-foreground'>
								Enhance your water purification system with our advanced
								Multisampling Module. This innovative addition allows for
								continuous monitoring and analysis of multiple water quality
								parameters simultaneously, ensuring optimal purification
								performance and water safety.
							</p>

							<Button
								variant='outline'
								className='hover:bg-[#0099FF] hover:text-white'
							>
								Find out more
							</Button>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Wave decoration */}
			<div className='relative'>
				<svg viewBox='0 0 1440 200' className='w-full'>
					<path
						fill='white'
						fillOpacity='1'
						d='M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
					></path>
				</svg>
			</div>
		</main>
	);
}
