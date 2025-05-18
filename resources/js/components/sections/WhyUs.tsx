import { motion } from 'framer-motion';
import { Award, Clock, Shield, Users } from 'lucide-react';

export default function WhyUs() {
    const whyUsPoints = [
        {
            icon: <Award className="h-6 w-6" />,
            title: '15+ Years Experience',
            description: 'Trusted by thousands of households',
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: 'Expert Team',
            description: 'Certified water quality specialists',
        },
        {
            icon: <Clock className="h-6 w-6" />,
            title: '24/7 Support',
            description: 'Round-the-clock customer service',
        },
        {
            icon: <Shield className="h-6 w-6" />,
            title: 'Quality Guaranteed',
            description: 'ISO certified purification systems',
        },
    ];
    return (
        <section className="relative overflow-hidden py-20">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue text-2xl font-semibold uppercase"
                    >
                        Why Choose Us
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground mt-2 text-4xl font-bold"
                    >
                        The Trusted Name in Water <br /> <span className="ml-2 text-orange-600"> Purification</span>
                        <span className="ml-2">&</span> <span className="ml-2 text-orange-600">Products</span>
                    </motion.h3>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {whyUsPoints.map((point, index) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="bg-border text-blue mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                                {point.icon}
                            </div>
                            <h4 className="text-foreground mb-2 text-xl font-semibold">{point.title}</h4>
                            <p className="text-muted-foreground">{point.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                        <h2 className="text-blue text-2xl font-semibold">Our Products Qualities</h2>
                        <h3 className="text-muted-foreground text-4xl font-bold">
                            Need Water <span className="ml-1 font-extrabold text-orange-600">Distribution</span> to your event{' '}
                            <span className="ml-1 font-extrabold">?</span>
                        </h3>
                        <p className="text-muted-foreground">
                            Vivamus non posuere nisl, id auctor ligula. Phasellus into vitae lobortis nisi, ut aliquam mauris. Crazy vitae erosers
                            metus. Suspendisse imperdiet massa metus, lacinia and.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="bg-primary-foreground flex items-start space-x-4 rounded-lg p-6">
                            <div className="flex-shrink-0">
                                <div className="bg-blue flex h-12 w-12 items-center justify-center rounded-full">
                                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-blue text-sm font-semibold">Same Day</h4>
                                <h5 className="text-text mb-2 text-xl font-bold">Delivery</h5>
                                <p className="text-gray-600 dark:text-white">Vivamus non posuere nislid auctor ligula.</p>
                            </div>
                        </div>

                        <div className="bg-primary-foreground flex items-start space-x-4 rounded-lg p-6">
                            <div className="flex-shrink-0">
                                <div className="bg-blue flex h-12 w-12 items-center justify-center rounded-full">
                                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-blue text-sm font-semibold">No Call Out</h4>
                                <h5 className="text-text mb-2 text-xl font-bold">Prices</h5>
                                <p className="text-gray-600 dark:text-white">Vivamus non posuere nislid auctor ligula.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
