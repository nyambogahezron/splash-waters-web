'use client';

import { motion } from 'framer-motion';
import {
	CreditCard,
	ShieldCheck,
	ChevronDown,
	ChevronUp,
	Check,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Sample cart items
const cartItems = [
	{
		id: 1,
		name: 'Premium Water Purifier',
		image:
			'https://images.unsplash.com/photo-1624958723474-09f80c559939?w=800&q=80',
		price: 599,
		quantity: 1,
	},
	{
		id: 2,
		name: 'UV Water Sterilizer',
		image:
			'https://images.unsplash.com/photo-1563351672-62b74891a28a?w=800&q=80',
		price: 299,
		quantity: 2,
	},
	{
		id: 3,
		name: 'Smart Water Softener',
		image:
			'https://images.unsplash.com/photo-1585687433141-694dd0f4a8b5?w=800&q=80',
		price: 499,
		quantity: 1,
	},
];

export default function Checkout() {
	const [showOrderSummary, setShowOrderSummary] = useState(false);

	const subtotal = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const shipping = 25;
	const tax = subtotal * 0.08;
	const total = subtotal + shipping + tax;

	return (
		<main className='min-h-screen pt-24 bg-background'>
			{/* Hero Section */}
			<section className='relative py-12 bg-[#F5F9FF]'>
				<div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-center max-w-3xl mx-auto'
					>
						<h1 className='text-4xl font-bold text-[#0099FF] mb-4'>Checkout</h1>
						<p className='text-xl text-muted-foreground'>
							Complete your purchase securely
						</p>
					</motion.div>
				</div>

				{/* Wave decoration */}
				<div className='absolute bottom-0 left-0 right-0'>
					<svg viewBox='0 0 1440 100' className='w-full'>
						<path
							fill='white'
							fillOpacity='1'
							d='M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
						></path>
					</svg>
				</div>
			</section>

			{/* Checkout Content */}
			<section className='py-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
						{/* Checkout Form */}
						<div className='lg:col-span-2 space-y-8'>
							{/* Contact Information */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}
								className='bg-white rounded-lg shadow-md p-6'
							>
								<h2 className='text-xl font-semibold text-foreground mb-6'>
									Contact Information
								</h2>

								<div className='space-y-4'>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
										<div>
											<label
												htmlFor='firstName'
												className='block text-sm font-medium text-gray-700 mb-1'
											>
												First Name
											</label>
											<input
												type='text'
												id='firstName'
												className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
											/>
										</div>
										<div>
											<label
												htmlFor='lastName'
												className='block text-sm font-medium text-gray-700 mb-1'
											>
												Last Name
											</label>
											<input
												type='text'
												id='lastName'
												className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-gray-700 mb-1'
										>
											Email Address
										</label>
										<input
											type='email'
											id='email'
											className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
										/>
									</div>

									<div>
										<label
											htmlFor='phone'
											className='block text-sm font-medium text-gray-700 mb-1'
										>
											Phone Number
										</label>
										<input
											type='tel'
											id='phone'
											className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
										/>
									</div>
								</div>
							</motion.div>

							{/* Shipping Address */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className='bg-white rounded-lg shadow-md p-6'
							>
								<h2 className='text-xl font-semibold text-foreground mb-6'>
									Shipping Address
								</h2>

								<div className='space-y-4'>
									<div>
										<label
											htmlFor='address'
											className='block text-sm font-medium text-gray-700 mb-1'
										>
											Street Address
										</label>
										<input
											type='text'
											id='address'
											className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
										/>
									</div>

									<div>
										<label
											htmlFor='apartment'
											className='block text-sm font-medium text-gray-700 mb-1'
										>
											Apartment, Suite, etc. (optional)
										</label>
										<input
											type='text'
											id='apartment'
											className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
										/>
									</div>

									<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
										<div>
											<label
												htmlFor='city'
												className='block text-sm font-medium text-gray-700 mb-1'
											>
												City
											</label>
											<input
												type='text'
												id='city'
												className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
											/>
										</div>
										<div>
											<label
												htmlFor='state'
												className='block text-sm font-medium text-gray-700 mb-1'
											>
												State
											</label>
											<select
												id='state'
												className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
											>
												<option value=''>Select State</option>
												<option value='NY'>New York</option>
												<option value='CA'>California</option>
												<option value='TX'>Texas</option>
												<option value='FL'>Florida</option>
											</select>
										</div>
										<div>
											<label
												htmlFor='zip'
												className='block text-sm font-medium text-gray-700 mb-1'
											>
												ZIP Code
											</label>
											<input
												type='text'
												id='zip'
												className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
											/>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Payment Method */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className='bg-white rounded-lg shadow-md p-6'
							>
								<h2 className='text-xl font-semibold text-foreground mb-6'>
									Payment Method
								</h2>

								<div className='space-y-6'>
									<div className='flex items-center space-x-3 p-4 border border-[#0099FF] rounded-md bg-[#0099FF]/5'>
										<input
											type='radio'
											id='creditCard'
											name='paymentMethod'
											className='h-4 w-4 text-[#0099FF]'
											defaultChecked
										/>
										<label htmlFor='creditCard' className='flex items-center'>
											<CreditCard className='h-5 w-5 mr-2 text-[#0099FF]' />
											<span>Credit / Debit Card</span>
										</label>
									</div>

									<div className='space-y-4 pl-7'>
										<div>
											<label
												htmlFor='cardNumber'
												className='block text-sm font-medium text-gray-700 mb-1'
											>
												Card Number
											</label>
											<input
												type='text'
												id='cardNumber'
												placeholder='1234 5678 9012 3456'
												className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
											/>
										</div>

										<div className='grid grid-cols-2 gap-4'>
											<div>
												<label
													htmlFor='expiry'
													className='block text-sm font-medium text-gray-700 mb-1'
												>
													Expiry Date
												</label>
												<input
													type='text'
													id='expiry'
													placeholder='MM/YY'
													className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
												/>
											</div>
											<div>
												<label
													htmlFor='cvv'
													className='block text-sm font-medium text-gray-700 mb-1'
												>
													CVV
												</label>
												<input
													type='text'
													id='cvv'
													placeholder='123'
													className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor='nameOnCard'
												className='block text-sm font-medium text-gray-700 mb-1'
											>
												Name on Card
											</label>
											<input
												type='text'
												id='nameOnCard'
												className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
											/>
										</div>
									</div>

									<div className='flex items-center space-x-3 p-4 border border-gray-200 rounded-md'>
										<input
											type='radio'
											id='paypal'
											name='paymentMethod'
											className='h-4 w-4 text-[#0099FF]'
										/>
										<label htmlFor='paypal' className='flex items-center'>
											<Image
												src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png'
												alt='PayPal'
												width={80}
												height={20}
											/>
										</label>
									</div>
								</div>
							</motion.div>

							{/* Mobile Order Summary Toggle */}
							<div className='lg:hidden'>
								<button
									onClick={() => setShowOrderSummary(!showOrderSummary)}
									className='w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-md'
								>
									<div className='flex items-center'>
										<span className='font-semibold'>Order Summary</span>
										<span className='ml-2 text-[#0099FF] font-bold'>
											${total.toFixed(2)}
										</span>
									</div>
									{showOrderSummary ? (
										<ChevronUp className='h-5 w-5' />
									) : (
										<ChevronDown className='h-5 w-5' />
									)}
								</button>
							</div>

							{/* Place Order Button */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								className='mt-8'
							>
								<Button className='w-full bg-[#0099FF] hover:bg-blue-600 py-6 text-lg'>
									Place Order
								</Button>

								<div className='flex items-center justify-center mt-4 text-sm text-muted-foreground'>
									<ShieldCheck className='h-4 w-4 mr-2 text-green-500' />
									<span>Your payment information is secure and encrypted</span>
								</div>
							</motion.div>
						</div>

						{/* Order Summary */}
						<div
							className={`lg:block ${showOrderSummary ? 'block' : 'hidden'}`}
						>
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
									{cartItems.map((item) => (
										<div key={item.id} className='flex items-start space-x-4'>
											<div className='relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0'>
												<Image
													src={item.image}
													alt={item.name}
													fill
													className='object-cover'
												/>
												<div className='absolute top-0 right-0 bg-gray-800 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs'>
													{item.quantity}
												</div>
											</div>
											<div className='flex-grow'>
												<h3 className='text-sm font-medium'>{item.name}</h3>
												<p className='text-xs text-muted-foreground'>
													Water Purification System
												</p>
											</div>
											<div className='text-sm font-semibold'>
												${(item.price * item.quantity).toFixed(2)}
											</div>
										</div>
									))}
								</div>

								<div className='border-t pt-4 space-y-2'>
									<div className='flex justify-between text-sm'>
										<span className='text-muted-foreground'>Subtotal</span>
										<span>${subtotal.toFixed(2)}</span>
									</div>
									<div className='flex justify-between text-sm'>
										<span className='text-muted-foreground'>Shipping</span>
										<span>${shipping.toFixed(2)}</span>
									</div>
									<div className='flex justify-between text-sm'>
										<span className='text-muted-foreground'>Tax</span>
										<span>${tax.toFixed(2)}</span>
									</div>
								</div>

								<div className='border-t mt-4 pt-4'>
									<div className='flex justify-between'>
										<span className='font-semibold'>Total</span>
										<span className='font-bold text-xl text-[#0099FF]'>
											${total.toFixed(2)}
										</span>
									</div>
								</div>

								{/* Promo Code */}
								<div className='mt-6'>
									<div className='flex space-x-2'>
										<input
											type='text'
											placeholder='Promo Code'
											className='flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
										/>
										<Button variant='outline' className='rounded-l-none'>
											Apply
										</Button>
									</div>
								</div>

								{/* Secure Checkout */}
								<div className='mt-6 bg-gray-50 p-4 rounded-md'>
									<div className='flex items-center space-x-2 mb-2'>
										<ShieldCheck className='h-5 w-5 text-green-500' />
										<span className='font-medium'>Secure Checkout</span>
									</div>
									<p className='text-sm text-muted-foreground'>
										Your payment information is processed securely. We do not
										store credit card details.
									</p>
								</div>

								{/* Satisfaction Guarantee */}
								<div className='mt-4 flex items-start space-x-2'>
									<Check className='h-5 w-5 text-[#0099FF] mt-0.5' />
									<p className='text-sm text-muted-foreground'>
										30-day satisfaction guarantee. If you&apos;re not completely
										satisfied, return for a full refund.
									</p>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
