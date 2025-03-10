'use client';

import { motion } from 'framer-motion';
import { Trash2, ShoppingCart, Plus, Minus, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/context/GlobalContext';

export default function Cart() {
	const { items, removeFromCart, updateQuantity, total } = useGlobalContext();
	const shipping = 25;
	const tax = total * 0.08;
	const finalTotal = total + shipping + tax;

	return (
		<main className='min-h-screen pt-24 bg-background'>
			{/* Hero Section */}
			<section className='relative py-20 bg-[#F5F9FF]'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-center max-w-3xl mx-auto'
					>
						home / cart
					</motion.div>
				</div>
			</section>

			{/* Cart Content */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					{items.length > 0 ? (
						<div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
							{/* Cart Items */}
							<div className='lg:col-span-2'>
								<div className='bg-white rounded-lg shadow-md overflow-hidden'>
									<div className='p-6 border-b'>
										<div className='flex items-center justify-between'>
											<h2 className='text-2xl font-semibold text-foreground'>
												Shopping Cart
											</h2>
											<div className='text-muted-foreground'>
												{items.length} Items
											</div>
										</div>
									</div>

									<div className='divide-y'>
										{items.map((item, index) => (
											<motion.div
												key={item.id}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: index * 0.1 }}
												className='p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6'
											>
												<div className='relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0'>
													<Image
														src={item.image}
														alt={item.name}
														fill
														className='object-cover'
													/>
												</div>

												<div className='flex-grow'>
													<h3 className='text-lg font-semibold text-foreground'>
														{item.name}
													</h3>
													<p className='text-muted-foreground mb-2'>
														{item.description}
													</p>
													<div className='flex items-center space-x-4'>
														<div className='flex items-center border rounded-md'>
															<button
																onClick={() =>
																	updateQuantity(item.id, item.quantity - 1)
																}
																className='px-3 py-1 text-gray-600 hover:bg-gray-100'
															>
																<Minus className='h-4 w-4' />
															</button>
															<span className='px-3 py-1'>{item.quantity}</span>
															<button
																onClick={() =>
																	updateQuantity(item.id, item.quantity + 1)
																}
																className='px-3 py-1 text-gray-600 hover:bg-gray-100'
															>
																<Plus className='h-4 w-4' />
															</button>
														</div>

														<button
															onClick={() => removeFromCart(item.id)}
															className='text-red-500 hover:text-red-700 flex items-center'
														>
															<Trash2 className='h-4 w-4 mr-1' />
															<span>Remove</span>
														</button>
													</div>
												</div>

												<div className='text-xl font-bold text-foreground'>
													${(item.price * item.quantity).toFixed(2)}
												</div>
											</motion.div>
										))}
									</div>

									<div className='p-6 bg-gray-50'>
										<Link
											href='/products'
											className='text-[#0099FF] hover:underline flex items-center'
										>
											<ArrowRight className='h-4 w-4 mr-2 rotate-180' />
											Continue Shopping
										</Link>
									</div>
								</div>
							</div>

							{/* Order Summary */}
							<div>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
									className='bg-white rounded-lg shadow-md p-6 sticky top-24'
								>
									<h2 className='text-xl font-semibold text-foreground mb-6'>
										Order Summary
									</h2>

									<div className='space-y-4 mb-6'>
										<div className='flex justify-between'>
											<span className='text-muted-foreground'>Subtotal</span>
											<span className='font-medium'>${total.toFixed(2)}</span>
										</div>
										<div className='flex justify-between'>
											<span className='text-muted-foreground'>Shipping</span>
											<span className='font-medium'>
												${shipping.toFixed(2)}
											</span>
										</div>
										<div className='flex justify-between'>
											<span className='text-muted-foreground'>Tax</span>
											<span className='font-medium'>${tax.toFixed(2)}</span>
										</div>
										<div className='border-t pt-4 mt-4'>
											<div className='flex justify-between'>
												<span className='font-semibold'>Total</span>
												<span className='font-bold text-xl text-[#0099FF]'>
													${finalTotal.toFixed(2)}
												</span>
											</div>
										</div>
									</div>

									<Button
										className='w-full bg-[#0099FF] hover:bg-blue-600 flex items-center justify-center space-x-2'
										asChild
									>
										<Link href='/checkout'>
											<ShoppingCart className='h-4 w-4 mr-2' />
											Proceed to Checkout
										</Link>
									</Button>
								</motion.div>
							</div>
						</div>
					) : (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className='text-center py-12'
						>
							<div className='w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6'>
								<ShoppingCart className='h-12 w-12 text-muted-foreground' />
							</div>
							<h2 className='text-2xl font-semibold text-foreground mb-4'>
								Your cart is empty
							</h2>
							<p className='text-muted-foreground mb-8 max-w-md mx-auto'>
								Looks like you havent added any products to your cart yet.
								Explore our products to find the perfect water purification
								solution for your needs.
							</p>
							<Button className='bg-[#0099FF] hover:bg-blue-600' asChild>
								<Link href='/products'>Browse Products</Link>
							</Button>
						</motion.div>
					)}
				</div>
			</section>
		</main>
	);
}
