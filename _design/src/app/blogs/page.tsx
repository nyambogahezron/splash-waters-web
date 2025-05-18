'use client';

import { blogs } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
    return (
        <main className="bg-background min-h-screen pt-24">
            {/* Hero Section */}
            <section className="relative bg-[#F5F9FF] py-20">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <h1 className="mb-4 text-4xl font-bold text-[#0099FF]">Our Blog</h1>
                        <p className="text-muted-foreground text-xl">
                            Stay informed about water quality, purification technology, and sustainable practices
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
                            >
                                <Link href={`/blogs/${post.id}`}>
                                    <div className="relative h-48">
                                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                                        <div className="absolute top-4 right-4 rounded-full bg-[#0099FF] px-3 py-1 text-sm text-white">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-muted-foreground mb-4 flex items-center space-x-4 text-sm">
                                            <div className="flex items-center">
                                                <Calendar className="mr-1 h-4 w-4" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="mr-1 h-4 w-4" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <h3 className="text-foreground mb-2 text-xl font-semibold">{post.title}</h3>
                                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <User className="h-4 w-4 text-[#0099FF]" />
                                                <span className="text-muted-foreground text-sm">{post.author}</span>
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-[#0099FF]" />
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
