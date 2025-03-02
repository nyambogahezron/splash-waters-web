'use client';

import {
	Droplets,
	Mail,
	Phone,
	MapPin,
	Clock,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Footer() {
	return (
		<footer className='bg-[#0A1F44] text-white'>
			{/* Main Footer */}
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{/* Company Info */}
					<div className='space-y-6'>
						<div className='flex items-center space-x-2'>
							<Droplets className='h-8 w-8 text-[#0099FF]' />
							<span className='text-xl font-bold'>Water Purifier</span>
						</div>
						<p className='text-gray-300'>
							Providing clean water solutions since 2010. Our mission is to
							ensure everyone has access to safe, pure water.
						</p>
						<div className='flex space-x-4'>
							<Link
								href='#'
								className='bg-[#0099FF]/20 p-2 rounded-full hover:bg-[#0099FF]/40 transition-colors'
							>
								<Facebook className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='bg-[#0099FF]/20 p-2 rounded-full hover:bg-[#0099FF]/40 transition-colors'
							>
								<Twitter className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='bg-[#0099FF]/20 p-2 rounded-full hover:bg-[#0099FF]/40 transition-colors'
							>
								<Instagram className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='bg-[#0099FF]/20 p-2 rounded-full hover:bg-[#0099FF]/40 transition-colors'
							>
								<Linkedin className='h-5 w-5' />
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-lg font-semibold mb-6 border-b border-[#0099FF]/30 pb-2'>
							Quick Links
						</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='/'
									className='text-gray-300 hover:text-[#0099FF] transition-colors flex items-center'
								>
									<span className='mr-2'>›</span> Home
								</Link>
							</li>
							<li>
								<Link
									href='/about'
									className='text-gray-300 hover:text-[#0099FF] transition-colors flex items-center'
								>
									<span className='mr-2'>›</span> About Us
								</Link>
							</li>
							<li>
								<Link
									href='/products'
									className='text-gray-300 hover:text-[#0099FF] transition-colors flex items-center'
								>
									<span className='mr-2'>›</span> Products
								</Link>
							</li>
							<li>
								<Link
									href='/blog'
									className='text-gray-300 hover:text-[#0099FF] transition-colors flex items-center'
								>
									<span className='mr-2'>›</span> Blog
								</Link>
							</li>
							<li>
								<Link
									href='/contact'
									className='text-gray-300 hover:text-[#0099FF] transition-colors flex items-center'
								>
									<span className='mr-2'>›</span> Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className='text-lg font-semibold mb-6 border-b border-[#0099FF]/30 pb-2'>
							Our Services
						</h3>
						<ul className='space-y-3'>
							<li>
								<Link
									href='#'
									className='text-gray-300 hover:text-[#0099FF] transition-colors flex items-center'
								>
									<span className='mr-2'>›</span> Water Filtration
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-300 hover:text-[#0099FF] transition-colors flex items-center'
								>
									<span className='mr-2'>›</span> UV Purification
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-300 hover:text-[#0099FF] transition-colors flex items-center'
								>
									<span className='mr-2'>›</span> Water Testing
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-300 hover:text-[#0099FF] transition-colors flex items-center'
								>
									<span className='mr-2'>›</span> Softener Systems
								</Link>
							</li>
							<li>
								<Link
									href='#'
									className='text-gray-300 hover:text-[#0099FF] transition-colors flex items-center'
								>
									<span className='mr-2'>›</span> Maintenance
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className='text-lg font-semibold mb-6 border-b border-[#0099FF]/30 pb-2'>
							Contact Info
						</h3>
						<ul className='space-y-4'>
							<li className='flex items-start space-x-3'>
								<MapPin className='h-5 w-5 text-[#0099FF] mt-0.5' />
								<span className='text-gray-300'>
									123 Water Street, Pureville, NY 10001, USA
								</span>
							</li>
							<li className='flex items-center space-x-3'>
								<Phone className='h-5 w-5 text-[#0099FF]' />
								<span className='text-gray-300'>+1 (123) 456-7890</span>
							</li>
							<li className='flex items-center space-x-3'>
								<Mail className='h-5 w-5 text-[#0099FF]' />
								<span className='text-gray-300'>info@waterpurifier.com</span>
							</li>
							<li className='flex items-center space-x-3'>
								<Clock className='h-5 w-5 text-[#0099FF]' />
								<span className='text-gray-300'>Mon-Fri: 9AM - 6PM</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Newsletter */}
			<div className='border-t border-gray-800'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
						<div>
							<h3 className='text-lg font-semibold mb-2'>
								Subscribe to Our Newsletter
							</h3>
							<p className='text-gray-300'>
								Stay updated with our latest news and offers
							</p>
						</div>
						<div className='flex space-x-2'>
							<input
								type='email'
								placeholder='Your email address'
								className='flex-1 px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#0099FF]'
							/>
							<Button className='bg-[#0099FF] hover:bg-blue-600 rounded-r-md'>
								Subscribe
							</Button>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright */}
			<div className='bg-[#061530] py-4'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<p className='text-gray-400 text-sm'>
							© {new Date().getFullYear()} Water Purifier. All rights reserved.
						</p>
						<div className='flex space-x-6 mt-4 md:mt-0'>
							<Link
								href='#'
								className='text-gray-400 hover:text-[#0099FF] text-sm'
							>
								Privacy Policy
							</Link>
							<Link
								href='#'
								className='text-gray-400 hover:text-[#0099FF] text-sm'
							>
								Terms of Service
							</Link>
							<Link
								href='#'
								className='text-gray-400 hover:text-[#0099FF] text-sm'
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
