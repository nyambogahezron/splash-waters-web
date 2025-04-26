'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Calendar, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

type props = {
    post: {
        title: string;
        content: string;
        image: string;
        date: string;
        readTime: string;
        author: string;
        category: string;
        authorImage: string;
    };
};

export default function ReadBlog({ post }: props) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="relative h-[400px]">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 right-4 rounded-full bg-[#0099FF] px-3 py-1 text-white">{post.category}</div>
                </div>

                <div className="p-8">
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

                    <h1 className="text-foreground mb-6 text-4xl font-bold">{post.title}</h1>

                    <div className="mb-8 flex items-center space-x-4">
                        <Image src={post.authorImage} alt={post.author} width={48} height={48} className="rounded-full" />
                        <div>
                            <div className="font-semibold">{post.author}</div>
                            <div className="text-muted-foreground text-sm">Water Quality Expert</div>
                        </div>
                    </div>

                    <div className="prose prose-blue max-w-none">
                        {post.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Share Section */}
                    <div className="mt-12 border-t pt-8">
                        <div className="flex items-center justify-between">
                            <div className="text-lg font-semibold">Share this article</div>
                            <div className="flex space-x-4">
                                <Button variant="outline" size="icon">
                                    <Facebook className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Twitter className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Linkedin className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
