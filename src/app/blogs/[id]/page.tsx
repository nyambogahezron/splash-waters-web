'use client';

import { motion } from 'framer-motion';
import {
	Calendar,
	Clock,
	ArrowLeft,
	Facebook,
	Twitter,
	Linkedin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const blogPosts = {
	1: {
		title: 'Understanding Water Quality Parameters',
		content: `
      Water quality is determined by various parameters that indicate its safety and suitability for different uses. Understanding these parameters is crucial for maintaining healthy water systems and ensuring safe drinking water.

      ## Key Water Quality Parameters

      ### 1. pH Level
      The pH level indicates the acidity or alkalinity of water. Ideal drinking water should have a pH between 6.5 and 8.5. Values outside this range can affect the taste and safety of water.

      ### 2. Total Dissolved Solids (TDS)
      TDS measures the total amount of dissolved substances in water, including minerals, salts, and metals. While some minerals are beneficial, high TDS levels can affect water taste and quality.

      ### 3. Turbidity
      Turbidity measures water clarity. High turbidity can indicate the presence of particles that may harbor harmful microorganisms or affect the effectiveness of disinfection processes.

      ## Impact on Health

      Understanding these parameters is essential because they directly affect:
      - Water taste and odor
      - Effectiveness of water treatment processes
      - Potential health risks
      - Equipment longevity

      ## Modern Monitoring Solutions

      Today's water purification systems use advanced sensors and real-time monitoring to track these parameters continuously. This ensures:
      - Consistent water quality
      - Early detection of issues
      - Optimal system performance
      - Compliance with safety standards
    `,
		image:
			'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&q=80',
		date: 'March 15, 2024',
		readTime: '5 min read',
		author: 'Dr. Sarah Johnson',
		category: 'Water Quality',
		authorImage:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
	},
	2: {
		title: 'The Future of Water Purification Technology',
		content: `
      Explore the cutting-edge innovations shaping the future of water purification technology. From AI-driven systems to nanotechnology filters, discover how these advancements are revolutionizing water treatment.
    `,
		image:
			'https://images.unsplash.com/photo-1527689638836-411945a2b57c?w=800&q=80',
		date: 'March 12, 2024',
		readTime: '8 min read',
		author: 'Michael Chen',
		category: 'Technology',
		authorImage:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
	},
	3: {
		title: 'Sustainable Water Management Practices',
		content: `
      Learn about sustainable approaches to water management and how modern purification systems contribute to environmental conservation.
    `,
		image:
			'https://images.unsplash.com/photo-1581093458791-9d42cc030552?w=800&q=80',
		date: 'March 10, 2024',
		readTime: '6 min read',
		author: 'Emma Wilson',
		category: 'Sustainability',
		authorImage:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
	},
	4: {
		title: 'Maintaining Your Water Purifier',
		content: `
      Essential tips and best practices for maintaining your water purification system to ensure optimal performance and longevity.
    `,
		image:
			'https://images.unsplash.com/photo-1617900906639-cab7adceb499?w=800&q=80',
		date: 'March 8, 2024',
		readTime: '4 min read',
		author: 'Robert Miller',
		category: 'Maintenance',
		authorImage:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
	},
};

export async function generateStaticParams() {
	return Object.keys(blogPosts).map((id) => ({
		id: id.toString(),
	}));
}

export default function BlogPost({ params }: { params: { id: string } }) {
	const post = blogPosts[params.id as keyof typeof blogPosts];

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<main className='min-h-screen pt-24 bg-background'>
			{/* Hero Section */}
			<section className='relative py-20 bg-[#F5F9FF]'>
				<div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<Link
						href='/blog'
						className='inline-flex items-center text-[#0099FF] mb-8 hover:underline'
					>
						<ArrowLeft className='w-4 h-4 mr-2' />
						Back to Blog
					</Link>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className='bg-white rounded-lg shadow-xl overflow-hidden'>
							<div className='relative h-[400px]'>
								<Image
									src={post.image}
									alt={post.title}
									fill
									className='object-cover'
								/>
								<div className='absolute top-4 right-4 bg-[#0099FF] text-white px-3 py-1 rounded-full'>
									{post.category}
								</div>
							</div>

							<div className='p-8'>
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

								<h1 className='text-4xl font-bold text-foreground mb-6'>
									{post.title}
								</h1>

								<div className='flex items-center space-x-4 mb-8'>
									<Image
										src={post.authorImage}
										alt={post.author}
										width={48}
										height={48}
										className='rounded-full'
									/>
									<div>
										<div className='font-semibold'>{post.author}</div>
										<div className='text-sm text-muted-foreground'>
											Water Quality Expert
										</div>
									</div>
								</div>

								<div className='prose prose-blue max-w-none'>
									{post.content.split('\n').map((paragraph, index) => (
										<p key={index} className='mb-4'>
											{paragraph}
										</p>
									))}
								</div>

								{/* Share Section */}
								<div className='mt-12 pt-8 border-t'>
									<div className='flex items-center justify-between'>
										<div className='text-lg font-semibold'>
											Share this article
										</div>
										<div className='flex space-x-4'>
											<Button variant='outline' size='icon'>
												<Facebook className='w-4 h-4' />
											</Button>
											<Button variant='outline' size='icon'>
												<Twitter className='w-4 h-4' />
											</Button>
											<Button variant='outline' size='icon'>
												<Linkedin className='w-4 h-4' />
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
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
		</main>
	);
}
