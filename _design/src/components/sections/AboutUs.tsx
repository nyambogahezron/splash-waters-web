'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Services from './Services';
import WhyUs from './WhyUs';

export default function AboutSection() {
    return (
        <main className="bg-background max-w-8xl mx-auto min-h-screen">
            {/* About Section */}
            <section className="relative overflow-hidden py-20">
                {/* background  */}
                <div className="bg-blue/5 absolute inset-0 opacity-5"></div>
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 items-center gap-1 md:gap-10 lg:grid-cols-2"
                    >
                        <div className="relative">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="overflow-hidden rounded-lg md:ml-28"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=800&q=80"
                                    alt="About Us"
                                    width={600}
                                    height={400}
                                    className="object-cover"
                                />
                            </motion.div>
                            <div className="bg-blue/10 absolute -right-6 -bottom-6 h-full w-full rounded-full blur-3xl"></div>
                        </div>
                        <div className="space-y-6">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-blue text-2xl font-semibold uppercase"
                            >
                                About Us
                            </motion.h2>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-foreground max-w-[600px] text-4xl leading-[50px] font-bold"
                            >
                                Providing
                                <span className="ml-1 text-orange-600">Clean Water</span> Solutions Since 2022
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-muted-foreground max-w-[700px] leading-8"
                            >
                                Splash Water is a leading provider of water purification systems for residential and commercial use. Our mission is to
                                provide you with clean, safe, and great-tasting water for your home or business. We offer a wide range of products and
                                services designed to meet your specific needs and budget. We are committed to providing you with the highest quality
                                products and services at competitive prices. Our team of experts is dedicated to helping you find the right solution
                                for your water purification needs. Whether you need a new water filter, UV purification system, or water softener, we
                                have you covered. Contact us today to learn more about our products and services.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="grid grid-cols-2 gap-4 pt-4"
                            >
                                <div className="flex items-center space-x-2">
                                    <Check className="text-blue" />
                                    <span>Certified Products</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Check className="text-blue" />
                                    <span>Expert Installation</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Check className="text-blue" />
                                    <span>24/7 Support</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Check className="text-blue" />
                                    <span>Quality Guarantee</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <Services />

            {/* Why Us Section */}
            <WhyUs />
        </main>
    );
}
