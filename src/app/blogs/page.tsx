'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
	{
		id: 1,
		title: 'Understanding Water Quality Parameters',
		excerpt:
			'Learn about the key parameters that determine water quality and how they affect your health.',
		image:
			'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&q=80',
		date: 'March 15, 2024',
		readTime: '5 min read',
		author: 'Dr. Sarah Johnson',
		category: 'Water Quality',
	},
	{
		id: 2,
		title: 'The Future of Water Purification Technology',
		excerpt:
			'Explore the latest innovations in water purification and what they mean for household water treatment.',
		image:
			'https://images.unsplash.com/photo-1527689638836-411945a2b57c?w=800&q=80',
		date: 'March 12, 2024',
		readTime: '8 min read',
		author: 'Michael Chen',
		category: 'Technology',
	},
	{
		id: 3,
		title: 'Sustainable Water Management Practices',
		excerpt:
			'Discover how modern water purification systems contribute to environmental sustainability.',
		image:
			'https://images.unsplash.com/photo-1581093458791-9d42cc030552?w=800&q=80',
		date: 'March 10, 2024',
		readTime: '6 min read',
		author: 'Emma Wilson',
		category: 'Sustainability',
	},
	{
		id: 4,
		title: 'Maintaining Your Water Purifier',
		excerpt:
			'Essential maintenance tips to keep your water purification system running efficiently.',
		image:
			'https://images.unsplash.com/photo-1617900906639-cab7adceb499?w=800&q=80',
		date: 'March 8, 2024',
		readTime: '4 min read',
		author: 'Robert Miller',
		category: 'Maintenance',
	},
];

export default function Blog() {
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
						<h1 className='text-4xl font-bold text-[#0099FF] mb-4'>Our Blog</h1>
						<p className='text-xl text-muted-foreground'>
							Stay informed about water quality, purification technology, and
							sustainable practices
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

			{/* Blog Posts Grid */}
			<section className='py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{blogPosts.map((post, index) => (
							<motion.div
								key={post.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className='bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
							>
								<Link href={`/blog/${post.id}`}>
									<div className='relative h-48'>
										<Image
											src={post.image}
											alt={post.title}
											fill
											className='object-cover'
										/>
										<div className='absolute top-4 right-4 bg-[#0099FF] text-white px-3 py-1 rounded-full text-sm'>
											{post.category}
										</div>
									</div>
									<div className='p-6'>
										<div className='flex items-center space-x-4 text-sm text-muted-foreground mb-4'>
											<div className='flex items-center'>
												<Calendar className='w-4 h-4 mr-1' />
												{post.date}
											</div>
											<div className='flex items-center'>
												<Clock className='w-4 h-4 mr-1' />
												{post.readTime}
											</div>
										</div>
										<h3 className='text-xl font-semibold text-foreground mb-2'>
											{post.title}
										</h3>
										<p className='text-muted-foreground mb-4'>{post.excerpt}</p>
										<div className='flex items-center justify-between'>
											<div className='flex items-center space-x-2'>
												<User className='w-4 h-4 text-[#0099FF]' />
												<span className='text-sm text-muted-foreground'>
													{post.author}
												</span>
											</div>
											<ArrowRight className='w-5 h-5 text-[#0099FF]' />
										</div>
									</div>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
