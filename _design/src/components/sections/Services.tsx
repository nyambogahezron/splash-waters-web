'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Filter, Zap, Gauge } from 'lucide-react';

export default function Services() {
	const services = [
		{
			icon: <Filter className='w-6 h-6' />,
			title: 'Water Filtration',
			description: 'Advanced filtration systems for crystal clear water',
		},
		{
			icon: <Zap className='w-6 h-6' />,
			title: 'UV Purification',
			description: 'Eliminate harmful bacteria with UV technology',
		},
		{
			icon: <Gauge className='w-6 h-6' />,
			title: 'Water Testing',
			description: 'Regular quality checks for safe drinking water',
		},
		{
			icon: <Droplets className='w-6 h-6' />,
			title: 'Softener Systems',
			description: 'Remove hard water minerals effectively',
		},
	];

	return (
		<section className='py-20 bg-background relative overflow-hidden'>
			<div className='absolute -bottom-6 -right-6 w-full h-full bg-blue/5 rounded-full blur-3xl opacity-65'></div>

			<div className='absolute inset-0 bg-gradient-to-b from-transparent to-background/20'></div>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-2xl font-bold text-blue uppercase'
					>
						Our Services
					</motion.h2>
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className='text-3xl font-bold text-foreground mt-3'
					>
						Comprehensive Water Solutions
					</motion.h3>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className='bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-blue/5'
						>
							<div className='w-12 h-12 bg-border rounded-lg flex items-center justify-center text-blue font-medium mb-4'>
								{service.icon}
							</div>
							<h4 className='text-lg  text-orange-600 font-semibold text-foreground mb-2'>
								{service.title}
							</h4>
							<p className='text-muted-foreground font-semibold text-sm'>
								{service.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
