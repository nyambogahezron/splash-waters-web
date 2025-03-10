'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Contact() {
	return (
		<main className='min-h-screen pt-24 bg-background'>
			{/* Hero Section */}
			<section className='relative py-20 bg-[#F5F9FF]'>
				<div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-center max-w-3xl mx-auto'
					>
						<h1 className='text-4xl font-bold text-[#0099FF] mb-4'>
							Contact Us
						</h1>
						<p className='text-xl text-muted-foreground'>
							We&apos;re here to help with all your water purification needs
						</p>
					</motion.div>
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

			{/* Contact Info Cards */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className='bg-white rounded-lg shadow-lg p-8 text-center'
						>
							<div className='w-16 h-16 bg-[#0099FF]/10 rounded-full flex items-center justify-center mx-auto mb-6'>
								<Phone className='h-8 w-8 text-[#0099FF]' />
							</div>
							<h3 className='text-xl font-semibold mb-4'>Phone</h3>
							<p className='text-muted-foreground mb-4'>
								Our customer service team is ready to assist you
							</p>
							<a
								href='tel:+11234567890'
								className='text-[#0099FF] font-semibold hover:underline'
							>
								+1 (123) 456-7890
							</a>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className='bg-white rounded-lg shadow-lg p-8 text-center'
						>
							<div className='w-16 h-16 bg-[#0099FF]/10 rounded-full flex items-center justify-center mx-auto mb-6'>
								<Mail className='h-8 w-8 text-[#0099FF]' />
							</div>
							<h3 className='text-xl font-semibold mb-4'>Email</h3>
							<p className='text-muted-foreground mb-4'>
								Send us an email and we&apos;ll get back to you
							</p>
							<a
								href='mailto:info@waterpurifier.com'
								className='text-[#0099FF] font-semibold hover:underline'
							>
								info@waterpurifier.com
							</a>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
							className='bg-white rounded-lg shadow-lg p-8 text-center'
						>
							<div className='w-16 h-16 bg-[#0099FF]/10 rounded-full flex items-center justify-center mx-auto mb-6'>
								<MapPin className='h-8 w-8 text-[#0099FF]' />
							</div>
							<h3 className='text-xl font-semibold mb-4'>Location</h3>
							<p className='text-muted-foreground mb-4'>
								Visit our headquarters
							</p>
							<p className='text-[#0099FF] font-semibold'>
								123 Water Street, Pureville, NY 10001, USA
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Contact Form and Map */}
			<section className='py-20 bg-muted/30 relative'>
				<div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='bg-white rounded-lg shadow-xl p-8'
						>
							<h2 className='text-3xl font-bold text-foreground mb-6'>
								Get In Touch
							</h2>
							<p className='text-muted-foreground mb-8'>
								Have questions about our products or services? Fill out the form
								below and our team will get back to you as soon as possible.
							</p>

							<form className='space-y-6'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<div className='space-y-2'>
										<label htmlFor='name' className='text-sm font-medium'>
											Your Name
										</label>
										<div className='relative'>
											<input
												id='name'
												type='text'
												className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF] pl-10'
												placeholder='John Doe'
											/>
											<User className='absolute left-3 top-3.5 h-4 w-4 text-muted-foreground' />
										</div>
									</div>

									<div className='space-y-2'>
										<label htmlFor='email' className='text-sm font-medium'>
											Your Email
										</label>
										<div className='relative'>
											<input
												id='email'
												type='email'
												className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF] pl-10'
												placeholder='john@example.com'
											/>
											<Mail className='absolute left-3 top-3.5 h-4 w-4 text-muted-foreground' />
										</div>
									</div>
								</div>

								<div className='space-y-2'>
									<label htmlFor='subject' className='text-sm font-medium'>
										Subject
									</label>
									<div className='relative'>
										<input
											id='subject'
											type='text'
											className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF] pl-10'
											placeholder='How can we help you?'
										/>
										<MessageSquare className='absolute left-3 top-3.5 h-4 w-4 text-muted-foreground' />
									</div>
								</div>

								<div className='space-y-2'>
									<label htmlFor='message' className='text-sm font-medium'>
										Message
									</label>
									<textarea
										id='message'
										rows={5}
										className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
										placeholder='Tell us more about your inquiry...'
									></textarea>
								</div>

								<Button className='w-full bg-[#0099FF] hover:bg-blue-600 flex items-center justify-center space-x-2'>
									<Send className='h-4 w-4' />
									<span>Send Message</span>
								</Button>
							</form>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='space-y-8'
						>
							<div className='bg-white rounded-lg shadow-xl overflow-hidden'>
								<div className='relative h-[400px]'>
									<Image
										src='https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80'
										alt='Office Location'
										fill
										className='object-cover'
									/>
								</div>
							</div>

							<div className='bg-white rounded-lg shadow-xl p-6'>
								<h3 className='text-xl font-semibold mb-4'>Business Hours</h3>
								<div className='space-y-3'>
									<div className='flex justify-between items-center'>
										<span className='text-muted-foreground'>
											Monday - Friday
										</span>
										<span className='font-medium'>9:00 AM - 6:00 PM</span>
									</div>
									<div className='flex justify-between items-center'>
										<span className='text-muted-foreground'>Saturday</span>
										<span className='font-medium'>10:00 AM - 4:00 PM</span>
									</div>
									<div className='flex justify-between items-center'>
										<span className='text-muted-foreground'>Sunday</span>
										<span className='font-medium'>Closed</span>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-20'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-center mb-12'
					>
						<h2 className='text-3xl font-bold text-[#0099FF] mb-4'>
							Frequently Asked Questions
						</h2>
						<p className='text-muted-foreground'>
							Find answers to common questions about our products and services
						</p>
					</motion.div>

					<div className='space-y-6'>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className='bg-white rounded-lg shadow-md p-6'
						>
							<h3 className='text-lg font-semibold mb-2'>
								How often should I replace my water filter?
							</h3>
							<p className='text-muted-foreground'>
								Most water filters should be replaced every 3-6 months,
								depending on usage and water quality. Our smart systems will
								notify you when its time for a replacement.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className='bg-white rounded-lg shadow-md p-6'
						>
							<h3 className='text-lg font-semibold mb-2'>
								Do you offer installation services?
							</h3>
							<p className='text-muted-foreground'>
								Yes, we provide professional installation services for all our
								water purification systems. Our certified technicians ensure
								proper setup and optimal performance.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
							className='bg-white rounded-lg shadow-md p-6'
						>
							<h3 className='text-lg font-semibold mb-2'>
								What contaminants do your systems remove?
							</h3>
							<p className='text-muted-foreground'>
								Our advanced purification systems remove up to 99.99% of
								contaminants, including bacteria, viruses, heavy metals,
								chlorine, pesticides, and other harmful substances.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
							className='bg-white rounded-lg shadow-md p-6'
						>
							<h3 className='text-lg font-semibold mb-2'>
								Do you offer maintenance services?
							</h3>
							<p className='text-muted-foreground'>
								Yes, we provide comprehensive maintenance services to ensure
								your water purification system continues to operate at peak
								efficiency. We recommend annual maintenance checks.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-[#0099FF]'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='text-3xl font-bold text-white mb-4'
						>
							Ready to Experience Pure Water?
						</motion.h2>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className='text-white/80 mb-8 max-w-2xl mx-auto'
						>
							Contact us today to learn more about our water purification
							solutions and how they can benefit your home or business.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							<Button className='bg-white text-[#0099FF] hover:bg-gray-100 px-8 py-6 text-lg'>
								Get a Free Consultation
							</Button>
						</motion.div>
					</div>
				</div>
			</section>
		</main>
	);
}
