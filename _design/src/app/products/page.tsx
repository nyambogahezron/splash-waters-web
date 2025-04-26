'use client';

import ProductCard from '@/components/ProductCard';
import { motion } from 'framer-motion';

const products = [
	{
		name: 'Premium Water Purifier',
		image:
			'https://plus.unsplash.com/premium_photo-1705969351341-f34f843d7a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww',
		price: '$599',
		description: 'Advanced 7-stage filtration system',
	},
	{
		name: 'UV Water Sterilizer',
		image:
			'https://plus.unsplash.com/premium_photo-1705969351341-f34f843d7a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww',
		price: '$299',
		description: '99.99% bacteria elimination',
	},
	{
		name: 'Smart Water Softener',
		image:
			'https://plus.unsplash.com/premium_photo-1705969351341-f34f843d7a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww',
		price: '$499',
		description: 'IoT-enabled water softening',
	},
];

export default function Products() {
	return (
		<section className='py-20 bg-transparent relative overflow-hidden'>
			{/* background blur */}
			<div className='absolute -bottom-6 -right-6 w-full h-full bg-blue/5 rounded-full blur-3xl opacity-55 z-0'></div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='text-center mb-16'>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-2xl font-semibold text-blue uppercase'
					>
						Our Products
					</motion.h2>
					<motion.h3
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className='text-4xl font-bold text-foreground mt-2'
					>
						Featured Water <br />
						<span className='text-orange-600 ml-1 font-extrabold'>
							Purification Systems
						</span>{' '}
						<strong>&</strong>
						<span className='text-orange-600 ml-2 font-extrabold'>Drinks</span>
					</motion.h3>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{products.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
			</div>
		</section>
	);
}
