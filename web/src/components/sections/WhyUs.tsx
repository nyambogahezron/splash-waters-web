'use client';

import { Award, Users, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyUs() {
	const whyUsPoints = [
		{
			icon: <Award className='w-6 h-6' />,
			title: '15+ Years Experience',
			description: 'Trusted by thousands of households',
		},
		{
			icon: <Users className='w-6 h-6' />,
			title: 'Expert Team',
			description: 'Certified water quality specialists',
		},
		{
			icon: <Clock className='w-6 h-6' />,
			title: '24/7 Support',
			description: 'Round-the-clock customer service',
		},
		{
			icon: <Shield className='w-6 h-6' />,
			title: 'Quality Guaranteed',
			description: 'ISO certified purification systems',
		},
	];
	return (
		<section className='py-20 relative overflow-hidden'>
			<div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-2xl font-semibold text-blue uppercase'
					>
						Why Choose Us
					</motion.h2>
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className='text-4xl font-bold text-foreground mt-2'
					>
						The Trusted Name in Water <br />{' '}
						<span className='ml-2 text-orange-600'> Purification</span>
						<span className='ml-2 '>&</span>{' '}
						<span className='ml-2 text-orange-600'>Products</span>
					</motion.h3>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{whyUsPoints.map((point, index) => (
						<motion.div
							key={point.title}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className='text-center'
						>
							<div className='w-16 h-16 mx-auto bg-border rounded-full flex items-center justify-center text-blue mb-4'>
								{point.icon}
							</div>
							<h4 className='text-xl font-semibold text-foreground mb-2'>
								{point.title}
							</h4>
							<p className='text-muted-foreground'>{point.description}</p>
						</motion.div>
					))}
				</div>
			</div>
			<div className='max-w-7xl mx-auto px-4 mt-20 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='space-y-6'
					>
						<h2 className='text-2xl font-semibold text-blue'>
							Our Products Qualities
						</h2>
						<h3 className='text-4xl font-bold text-muted-foreground'>
							Need Water{' '}
							<span className='text-orange-600 ml-1 font-extrabold'>
								Distribution
							</span>{' '}
							to your event <span className='ml-1 font-extrabold '>?</span>
						</h3>
						<p className='text-muted-foreground'>
							Vivamus non posuere nisl, id auctor ligula. Phasellus into vitae
							lobortis nisi, ut aliquam mauris. Crazy vitae erosers metus.
							Suspendisse imperdiet massa metus, lacinia and.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className='space-y-6'
					>
						<div className='bg-primary-foreground p-6 rounded-lg flex items-start space-x-4'>
							<div className='flex-shrink-0'>
								<div className='w-12 h-12 bg-blue rounded-full flex items-center justify-center'>
									<svg
										className='w-6 h-6 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M13 10V3L4 14h7v7l9-11h-7z'
										/>
									</svg>
								</div>
							</div>
							<div>
								<h4 className='text-sm font-semibold text-blue'>Same Day</h4>
								<h5 className='text-xl font-bold text-text mb-2'>Delivery</h5>
								<p className='text-gray-600 dark:text-white'>
									Vivamus non posuere nislid auctor ligula.
								</p>
							</div>
						</div>

						<div className='bg-primary-foreground p-6 rounded-lg flex items-start space-x-4'>
							<div className='flex-shrink-0'>
								<div className='w-12 h-12 bg-blue rounded-full flex items-center justify-center'>
									<svg
										className='w-6 h-6 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</div>
							</div>
							<div>
								<h4 className='text-sm font-semibold text-blue'>No Call Out</h4>
								<h5 className='text-xl font-bold text-text mb-2'>Prices</h5>
								<p className='text-gray-600 dark:text-white'>
									Vivamus non posuere nislid auctor ligula.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
