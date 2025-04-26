'use client';

import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/types';
import { useGlobalContext } from '@/context/GlobalContext';

interface ProductCardProps {
	product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
	const { addToCart } = useGlobalContext();

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className='bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
		>
			<div className='relative h-48'>
				<Image
					src={product.image}
					alt={product.name}
					fill
					className='object-cover'
				/>
				{product.category && (
					<div className='absolute top-4 right-4 bg-[#0099FF] text-white px-3 py-1 rounded-full text-sm'>
						{product.category}
					</div>
				)}
			</div>
			<div className='p-6'>
				<h4 className='text-xl font-semibold text-foreground mb-2'>
					{product.name}
				</h4>
				<p className='text-muted-foreground mb-4'>{product.description}</p>
				<div className='flex items-center justify-between'>
					<span className='text-2xl font-bold text-[#0099FF]'>
						${product.price}
					</span>
					<Button
						onClick={() => addToCart(product)}
						className='bg-[#0099FF] hover:bg-blue-600 text-white flex items-center space-x-2'
					>
						<ShoppingCart className='h-4 w-4' />
						<span>Add to Cart</span>
					</Button>
				</div>
			</div>
		</motion.div>
	);
}
