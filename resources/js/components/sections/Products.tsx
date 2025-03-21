'use client';

import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import ProductCard from '../ProductCard';
import { Button } from '../ui/button';

const products = [
    {
        id: 1,
        name: 'Premium Water Purifier',
        image: 'https://plus.unsplash.com/premium_photo-1705969351341-f34f843d7a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww',
        price: 599,
        description: 'Advanced 7-stage filtration system',
    },
    {
        id: 2,
        name: 'UV Water Sterilizer',
        image: 'https://plus.unsplash.com/premium_photo-1705969351341-f34f843d7a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww',
        price: 299,
        description: '99.99% bacteria elimination',
    },
    {
        id: 3,
        name: 'Smart Water Softener',
        image: 'https://plus.unsplash.com/premium_photo-1705969351341-f34f843d7a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww',
        price: 499,
        description: 'IoT-enabled water softening',
    },
];

export default function Products() {
    return (
        <section className="relative overflow-hidden bg-transparent py-20">
            {/* background blur */}
            <div className="bg-blue/5 absolute -right-6 -bottom-6 z-0 h-full w-full rounded-full opacity-55 blur-3xl"></div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue text-2xl font-semibold uppercase"
                    >
                        Our Products
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground mt-2 text-4xl font-bold"
                    >
                        Featured Water <br />
                        <span className="ml-1 font-extrabold text-orange-600">Purification Systems</span> <strong>&</strong>
                        <span className="ml-2 font-extrabold text-orange-600">Drinks</span>
                    </motion.h3>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>

                {/* view all btn */}
                <div className="mx-auto flex w-full items-center justify-center">
                    <Link href={'/products'}>
                        <Button className="text-text border-blue hover:bg-blue my-20 h-14 border bg-transparent px-14 py-4 font-bold capitalize transition-all hover:border-white hover:text-base">
                            View All Products
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
