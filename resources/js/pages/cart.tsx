import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/context/GlobalContext';
import HomeLayout from '@/layouts/app/home-layout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';

export default function Cart() {
    const { items, removeFromCart, updateQuantity, total } = useGlobalContext();
    const shipping = 25;
    const tax = total * 0.08;
    const finalTotal = total + shipping + tax;

    return (
        <HomeLayout>
            <main className="bg-background min-h-screen pt-24">
                {/* Hero Section */}
                <section className="relative bg-[#F5F9FF] py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            home / cart
                        </motion.div>
                    </div>
                </section>

                {/* Cart Content */}
                <section className="py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {items.length > 0 ? (
                            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                                {/* Cart Items */}
                                <div className="lg:col-span-2">
                                    <div className="overflow-hidden rounded-lg bg-white shadow-md">
                                        <div className="border-b p-6">
                                            <div className="flex items-center justify-between">
                                                <h2 className="text-foreground text-2xl font-semibold">Shopping Cart</h2>
                                                <div className="text-muted-foreground">{items.length} Items</div>
                                            </div>
                                        </div>

                                        <div className="divide-y">
                                            {items.map((item, index) => (
                                                <motion.div
                                                    key={item.id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center"
                                                >
                                                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                                                        <img src={item.image} alt={item.name} className="object-cover" />
                                                    </div>

                                                    <div className="flex-grow">
                                                        <h3 className="text-foreground text-lg font-semibold">{item.name}</h3>
                                                        <p className="text-muted-foreground mb-2">{item.description}</p>
                                                        <div className="flex items-center space-x-4">
                                                            <div className="flex items-center rounded-md border">
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                                                >
                                                                    <Minus className="h-4 w-4" />
                                                                </button>
                                                                <span className="px-3 py-1">{item.quantity}</span>
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                                                >
                                                                    <Plus className="h-4 w-4" />
                                                                </button>
                                                            </div>

                                                            <button
                                                                onClick={() => removeFromCart(item.id)}
                                                                className="flex items-center text-red-500 hover:text-red-700"
                                                            >
                                                                <Trash2 className="mr-1 h-4 w-4" />
                                                                <span>Remove</span>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="text-foreground text-xl font-bold">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="bg-gray-50 p-6">
                                            <Link href="/products" className="flex items-center text-[#0099FF] hover:underline">
                                                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                                                Continue Shopping
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Order Summary */}
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="sticky top-24 rounded-lg bg-white p-6 shadow-md"
                                    >
                                        <h2 className="text-foreground mb-6 text-xl font-semibold">Order Summary</h2>

                                        <div className="mb-6 space-y-4">
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Subtotal</span>
                                                <span className="font-medium">${total.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Shipping</span>
                                                <span className="font-medium">${shipping.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Tax</span>
                                                <span className="font-medium">${tax.toFixed(2)}</span>
                                            </div>
                                            <div className="mt-4 border-t pt-4">
                                                <div className="flex justify-between">
                                                    <span className="font-semibold">Total</span>
                                                    <span className="text-xl font-bold text-[#0099FF]">${finalTotal.toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Button className="flex w-full items-center justify-center space-x-2 bg-[#0099FF] hover:bg-blue-600" asChild>
                                            <Link href="/checkout">
                                                <ShoppingCart className="mr-2 h-4 w-4" />
                                                Proceed to Checkout
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </div>
                            </div>
                        ) : (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
                                <div className="bg-muted mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full">
                                    <ShoppingCart className="text-muted-foreground h-12 w-12" />
                                </div>
                                <h2 className="text-foreground mb-4 text-2xl font-semibold">Your cart is empty</h2>
                                <p className="text-muted-foreground mx-auto mb-8 max-w-md">
                                    Looks like you havent added any products to your cart yet. Explore our products to find the perfect water
                                    purification solution for your needs.
                                </p>
                                <Button className="bg-[#0099FF] hover:bg-blue-600" asChild>
                                    <Link href="/products">Browse Products</Link>
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>
        </HomeLayout>
    );
}
