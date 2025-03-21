import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Phone, Send, User } from 'lucide-react';

export default function Contact() {
    return (
        <main className="bg-background min-h-screen pt-24" id="contact">
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
                        <h1 className="mb-4 text-4xl font-bold text-[#0099FF]">Contact Us</h1>
                        <p className="text-muted-foreground text-xl">We&apos;re here to help with all your water purification needs</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="rounded-lg bg-white p-8 text-center shadow-lg"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0099FF]/10">
                                <Phone className="h-8 w-8 text-[#0099FF]" />
                            </div>
                            <h3 className="mb-4 text-xl font-semibold">Phone</h3>
                            <p className="text-muted-foreground mb-4">Our customer service team is ready to assist you</p>
                            <a href="tel:+11234567890" className="font-semibold text-[#0099FF] hover:underline">
                                +1 (123) 456-7890
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="rounded-lg bg-white p-8 text-center shadow-lg"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0099FF]/10">
                                <Mail className="h-8 w-8 text-[#0099FF]" />
                            </div>
                            <h3 className="mb-4 text-xl font-semibold">Email</h3>
                            <p className="text-muted-foreground mb-4">Send us an email and we&apos;ll get back to you</p>
                            <a href="mailto:info@waterpurifier.com" className="font-semibold text-[#0099FF] hover:underline">
                                info@waterpurifier.com
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="rounded-lg bg-white p-8 text-center shadow-lg"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0099FF]/10">
                                <MapPin className="h-8 w-8 text-[#0099FF]" />
                            </div>
                            <h3 className="mb-4 text-xl font-semibold">Location</h3>
                            <p className="text-muted-foreground mb-4">Visit our headquarters</p>
                            <p className="font-semibold text-[#0099FF]">123 Water Street, Pureville, NY 10001, USA</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form and Map */}
            <section className="bg-muted/30 relative py-20">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="rounded-lg bg-white p-8 shadow-xl"
                        >
                            <h2 className="text-foreground mb-6 text-3xl font-bold">Get In Touch</h2>
                            <p className="text-muted-foreground mb-8">
                                Have questions about our products or services? Fill out the form below and our team will get back to you as soon as
                                possible.
                            </p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">
                                            Your Name
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="name"
                                                type="text"
                                                className="w-full rounded-md border border-gray-300 px-4 py-3 pl-10 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                                placeholder="John Doe"
                                            />
                                            <User className="text-muted-foreground absolute top-3.5 left-3 h-4 w-4" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Your Email
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="email"
                                                type="email"
                                                className="w-full rounded-md border border-gray-300 px-4 py-3 pl-10 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                                placeholder="john@example.com"
                                            />
                                            <Mail className="text-muted-foreground absolute top-3.5 left-3 h-4 w-4" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        Subject
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="subject"
                                            type="text"
                                            className="w-full rounded-md border border-gray-300 px-4 py-3 pl-10 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                            placeholder="How can we help you?"
                                        />
                                        <MessageSquare className="text-muted-foreground absolute top-3.5 left-3 h-4 w-4" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>

                                <Button className="flex w-full items-center justify-center space-x-2 bg-[#0099FF] hover:bg-blue-600">
                                    <Send className="h-4 w-4" />
                                    <span>Send Message</span>
                                </Button>
                            </form>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="overflow-hidden rounded-lg bg-white shadow-xl">
                                <div className="relative h-[400px]">
                                    <img
                                        src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80"
                                        alt="Office Location"
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="rounded-lg bg-white p-6 shadow-xl">
                                <h3 className="mb-4 text-xl font-semibold">Business Hours</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Monday - Friday</span>
                                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Saturday</span>
                                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Sunday</span>
                                        <span className="font-medium">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="mb-4 text-3xl font-bold text-[#0099FF]">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">Find answers to common questions about our products and services</p>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="rounded-lg bg-white p-6 shadow-md"
                        >
                            <h3 className="mb-2 text-lg font-semibold">How often should I replace my water filter?</h3>
                            <p className="text-muted-foreground">
                                Most water filters should be replaced every 3-6 months, depending on usage and water quality. Our smart systems will
                                notify you when its time for a replacement.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="rounded-lg bg-white p-6 shadow-md"
                        >
                            <h3 className="mb-2 text-lg font-semibold">Do you offer installation services?</h3>
                            <p className="text-muted-foreground">
                                Yes, we provide professional installation services for all our water purification systems. Our certified technicians
                                ensure proper setup and optimal performance.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="rounded-lg bg-white p-6 shadow-md"
                        >
                            <h3 className="mb-2 text-lg font-semibold">What contaminants do your systems remove?</h3>
                            <p className="text-muted-foreground">
                                Our advanced purification systems remove up to 99.99% of contaminants, including bacteria, viruses, heavy metals,
                                chlorine, pesticides, and other harmful substances.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="rounded-lg bg-white p-6 shadow-md"
                        >
                            <h3 className="mb-2 text-lg font-semibold">Do you offer maintenance services?</h3>
                            <p className="text-muted-foreground">
                                Yes, we provide comprehensive maintenance services to ensure your water purification system continues to operate at
                                peak efficiency. We recommend annual maintenance checks.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#0099FF] py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-4 text-3xl font-bold text-white"
                        >
                            Ready to Experience Pure Water?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mx-auto mb-8 max-w-2xl text-white/80"
                        >
                            Contact us today to learn more about our water purification solutions and how they can benefit your home or business.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Button className="bg-white px-8 py-6 text-lg text-[#0099FF] hover:bg-gray-100">Get a Free Consultation</Button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
