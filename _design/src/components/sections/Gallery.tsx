'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const galleryImages = [
	{
		id: 1,
		src: 'https://images.unsplash.com/photo-1624958723474-09f80c559939?w=800&q=80',
		alt: 'Water Purifier System',
		category: 'Products',
	},
	{
		id: 2,
		src: 'https://images.unsplash.com/photo-1563351672-62b74891a28a?w=800&q=80',
		alt: 'UV Water Sterilizer',
		category: 'Products',
	},
	{
		id: 3,
		src: 'https://images.unsplash.com/photo-1585687433141-694dd0f4a8b5?w=800&q=80',
		alt: 'Water Testing',
		category: 'Services',
	},
	{
		id: 4,
		src: 'https://images.unsplash.com/photo-1581093458791-9d42cc030552?w=800&q=80',
		alt: 'Water Treatment Plant',
		category: 'Facilities',
	},
	{
		id: 5,
		src: 'https://images.unsplash.com/photo-1617900906639-cab7adceb499?w=800&q=80',
		alt: 'Maintenance Service',
		category: 'Services',
	},
	{
		id: 6,
		src: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800&q=80',
		alt: 'Laboratory Testing',
		category: 'Services',
	},
	{
		id: 7,
		src: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=800&q=80',
		alt: 'Water Quality Analysis',
		category: 'Services',
	},
	{
		id: 8,
		src: 'https://images.unsplash.com/photo-1527689638836-411945a2b57c?w=800&q=80',
		alt: 'Smart Water Monitoring',
		category: 'Products',
	},
	{
		id: 9,
		src: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80',
		alt: 'Corporate Office',
		category: 'Facilities',
	},
];

export default function Gallery() {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);
	const [filter, setFilter] = useState<string | null>(null);

	const filteredImages = filter
		? galleryImages.filter((img) => img.category === filter)
		: galleryImages;

	const openLightbox = (id: number) => {
		setSelectedImage(id);
	};

	const closeLightbox = () => {
		setSelectedImage(null);
	};

	const navigateImage = (direction: 'next' | 'prev') => {
		if (selectedImage === null) return;

		const currentIndex = filteredImages.findIndex(
			(img) => img.id === selectedImage
		);
		let newIndex;

		if (direction === 'next') {
			newIndex = (currentIndex + 1) % filteredImages.length;
		} else {
			newIndex =
				(currentIndex - 1 + filteredImages.length) % filteredImages.length;
		}

		setSelectedImage(filteredImages[newIndex].id);
	};

	const selectedImageData =
		selectedImage !== null
			? galleryImages.find((img) => img.id === selectedImage)
			: null;

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
							Our Gallery
						</h1>
						<p className='text-xl text-muted-foreground'>
							Explore our products, services, and facilities through our image
							gallery
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

			{/* Gallery Filter */}
			<section className='py-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-wrap justify-center gap-4 mb-12'>
						<Button
							variant={filter === null ? 'default' : 'outline'}
							className={filter === null ? 'bg-[#0099FF]' : ''}
							onClick={() => setFilter(null)}
						>
							All
						</Button>
						<Button
							variant={filter === 'Products' ? 'default' : 'outline'}
							className={filter === 'Products' ? 'bg-[#0099FF]' : ''}
							onClick={() => setFilter('Products')}
						>
							Products
						</Button>
						<Button
							variant={filter === 'Services' ? 'default' : 'outline'}
							className={filter === 'Services' ? 'bg-[#0099FF]' : ''}
							onClick={() => setFilter('Services')}
						>
							Services
						</Button>
						<Button
							variant={filter === 'Facilities' ? 'default' : 'outline'}
							className={filter === 'Facilities' ? 'bg-[#0099FF]' : ''}
							onClick={() => setFilter('Facilities')}
						>
							Facilities
						</Button>
					</div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
					>
						{filteredImages.map((image, index) => (
							<motion.div
								key={image.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className='relative group overflow-hidden rounded-lg shadow-lg'
							>
								<div className='relative h-64 w-full'>
									<Image
										src={image.src}
										alt={image.alt}
										fill
										className='object-cover transition-transform duration-500 group-hover:scale-110'
									/>
									<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center'>
										<button
											onClick={() => openLightbox(image.id)}
											className='bg-white text-[#0099FF] p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300'
										>
											<Expand className='h-5 w-5' />
										</button>
									</div>
								</div>
								<div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4'>
									<div className='text-white font-medium'>{image.alt}</div>
									<div className='text-white/70 text-sm'>{image.category}</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Lightbox */}
			{selectedImage !== null && selectedImageData && (
				<div className='fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4'>
					<div className='relative w-full max-w-5xl'>
						<button
							onClick={closeLightbox}
							className='absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors'
						>
							<X className='h-8 w-8' />
						</button>

						<div className='relative h-[70vh]'>
							<Image
								src={selectedImageData.src}
								alt={selectedImageData.alt}
								fill
								className='object-contain'
							/>
						</div>

						<div className='mt-4 text-white text-center'>
							<h3 className='text-xl font-semibold'>{selectedImageData.alt}</h3>
							<p className='text-gray-300'>{selectedImageData.category}</p>
						</div>

						<button
							onClick={() => navigateImage('prev')}
							className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors'
						>
							<ChevronLeft className='h-6 w-6' />
						</button>

						<button
							onClick={() => navigateImage('next')}
							className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors'
						>
							<ChevronRight className='h-6 w-6' />
						</button>
					</div>
				</div>
			)}
		</main>
	);
}
