import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';

type Product = {
	name: string;
	image: string;
	price: string;
	description: string;
};

export default function ProductCard({ product }: { product: Product }) {
	return (
		<div
			key={product.name}
			className='bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-[450px] flex flex-col border'
		>
			<div className='relative h-[300px]'>
				<Image
					src={product.image}
					alt={product.name}
					fill
					className='object-cover transition-all hover:scale-105'
				/>
			</div>
			<div className='px-4 py-5'>
				<h4 className='text-lg font-semibold text-foreground mb-2'>
					{product.name}
				</h4>
				<p className='text-muted-foreground mb-3 text-sm'>
					{product.description.length > 100
						? product.description.slice(0, 100) + '...'
						: product.description}
				</p>
				<div className='flex items-center justify-between'>
					<span className='text-2xl font-bold text-blue'>{product.price}</span>
					<Button variant='outline' className=' hover:text-blue'>
						<ShoppingCart size={24} />
					</Button>
				</div>
			</div>
		</div>
	);
}
