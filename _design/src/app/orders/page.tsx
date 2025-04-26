'use client';

import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Truck } from 'lucide-react';
import Image from 'next/image';

interface Order {
    id: string;
    date: string;
    total: number;
    status: 'pending' | 'processing' | 'completed' | 'cancelled';
    items: {
        id: number;
        name: string;
        quantity: number;
        price: number;
        image: string;
    }[];
}

export default function UserOrders() {
    const { user } = useAuth();

    if (!user) {
        return (
            <main className="bg-background min-h-screen pt-24">
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="mb-4 text-4xl font-bold text-[#0099FF]">My Orders</h1>
                            <p className="text-muted-foreground text-xl">Please sign in to view your orders</p>

                            <div className="mt-8">
                                <button className="btn-primary" onClick={() => {}}>
                                    Sign In
                                </button>

                                <button className="btn-secondary ml-4" onClick={() => {}}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    // Sample orders data - in a real app, this would come from an API
    const orders: Order[] = [
        {
            id: 'ORD-001',
            date: '2024-03-15',
            total: 899,
            status: 'completed',
            items: [
                {
                    id: 1,
                    name: 'Premium Water Purifier',
                    quantity: 1,
                    price: 599,
                    image: 'https://images.unsplash.com/photo-1624958723474-09f80c559939?w=800&q=80',
                },
                {
                    id: 2,
                    name: 'UV Water Sterilizer',
                    quantity: 1,
                    price: 299,
                    image: 'https://images.unsplash.com/photo-1563351672-62b74891a28a?w=800&q=80',
                },
            ],
        },
        {
            id: 'ORD-002',
            date: '2024-03-14',
            total: 599,
            status: 'processing',
            items: [
                {
                    id: 3,
                    name: 'Smart Water Softener',
                    quantity: 1,
                    price: 599,
                    image: 'https://images.unsplash.com/photo-1585687433141-694dd0f4a8b5?w=800&q=80',
                },
            ],
        },
    ];

    const getStatusIcon = (status: Order['status']) => {
        switch (status) {
            case 'pending':
                return <Package className="h-5 w-5" />;
            case 'processing':
                return <Truck className="h-5 w-5" />;
            case 'completed':
                return <CheckCircle className="h-5 w-5" />;
            default:
                return <Package className="h-5 w-5" />;
        }
    };

    const getStatusColor = (status: Order['status']) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'processing':
                return 'bg-blue-100 text-blue-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

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
                        <h1 className="mb-4 text-4xl font-bold text-[#0099FF]">My Orders</h1>
                        <p className="text-muted-foreground text-xl">Track and manage your orders</p>
                    </motion.div>
                </div>
            </section>

            {/* Orders List */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {orders.map((order, index) => (
                            <motion.div
                                key={order.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="overflow-hidden rounded-lg bg-white shadow-md"
                            >
                                {/* Order Header */}
                                <div className="border-b p-6">
                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                                            <p className="text-sm text-gray-500">Placed on {order.date}</p>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <span
                                                className={`flex items-center space-x-2 rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(order.status)}`}
                                            >
                                                {getStatusIcon(order.status)}
                                                <span className="ml-2">{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                                            </span>
                                            <span className="text-lg font-bold text-[#0099FF]">${order.total}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Order Items */}
                                <div className="divide-y">
                                    {order.items.map((item) => (
                                        <div key={item.id} className="flex items-center space-x-6 p-6">
                                            <div className="relative h-20 w-20 flex-shrink-0">
                                                <Image src={item.image} alt={item.name} fill className="rounded-lg object-cover" />
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                                                <p className="text-gray-500">Quantity: {item.quantity}</p>
                                            </div>
                                            <div className="text-lg font-semibold text-gray-900">${item.price}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
