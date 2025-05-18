import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { Clock, Droplets, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0A1F44] text-white">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <Droplets className="h-8 w-8 text-[#0099FF]" />
                            <span className="text-xl font-bold">Water Purifier</span>
                        </div>
                        <p className="text-gray-300">
                            Providing clean water solutions since 2010. Our mission is to ensure everyone has access to safe, pure water.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="rounded-full bg-[#0099FF]/20 p-2 transition-colors hover:bg-[#0099FF]/40">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-[#0099FF]/20 p-2 transition-colors hover:bg-[#0099FF]/40">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-[#0099FF]/20 p-2 transition-colors hover:bg-[#0099FF]/40">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-[#0099FF]/20 p-2 transition-colors hover:bg-[#0099FF]/40">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-6 border-b border-[#0099FF]/30 pb-2 text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="flex items-center text-gray-300 transition-colors hover:text-[#0099FF]">
                                    <span className="mr-2">›</span> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="flex items-center text-gray-300 transition-colors hover:text-[#0099FF]">
                                    <span className="mr-2">›</span> About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="flex items-center text-gray-300 transition-colors hover:text-[#0099FF]">
                                    <span className="mr-2">›</span> Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="flex items-center text-gray-300 transition-colors hover:text-[#0099FF]">
                                    <span className="mr-2">›</span> Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="flex items-center text-gray-300 transition-colors hover:text-[#0099FF]">
                                    <span className="mr-2">›</span> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-6 border-b border-[#0099FF]/30 pb-2 text-lg font-semibold">Our Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#" className="flex items-center text-gray-300 transition-colors hover:text-[#0099FF]">
                                    <span className="mr-2">›</span> Water Filtration
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center text-gray-300 transition-colors hover:text-[#0099FF]">
                                    <span className="mr-2">›</span> UV Purification
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center text-gray-300 transition-colors hover:text-[#0099FF]">
                                    <span className="mr-2">›</span> Water Testing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center text-gray-300 transition-colors hover:text-[#0099FF]">
                                    <span className="mr-2">›</span> Softener Systems
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center text-gray-300 transition-colors hover:text-[#0099FF]">
                                    <span className="mr-2">›</span> Maintenance
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-6 border-b border-[#0099FF]/30 pb-2 text-lg font-semibold">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="mt-0.5 h-5 w-5 text-[#0099FF]" />
                                <span className="text-gray-300">123 Water Street, Pureville, NY 10001, USA</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-[#0099FF]" />
                                <span className="text-gray-300">+1 (123) 456-7890</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-[#0099FF]" />
                                <span className="text-gray-300">info@waterpurifier.com</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Clock className="h-5 w-5 text-[#0099FF]" />
                                <span className="text-gray-300">Mon-Fri: 9AM - 6PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div className="border-t border-gray-800">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                        <div>
                            <h3 className="mb-2 text-lg font-semibold">Subscribe to Our Newsletter</h3>
                            <p className="text-gray-300">Stay updated with our latest news and offers</p>
                        </div>
                        <div className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 rounded-l-md border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                            />
                            <Button className="rounded-r-md bg-[#0099FF] hover:bg-blue-600">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-[#061530] py-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Water Purifier. All rights reserved.</p>
                        <div className="mt-4 flex space-x-6 md:mt-0">
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#0099FF]">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#0099FF]">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-[#0099FF]">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
