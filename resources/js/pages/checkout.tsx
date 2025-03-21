import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/context/GlobalContext';
import HomeLayout from '@/layouts/app/home-layout';
import { motion } from 'framer-motion';
import { Check, ChevronDown, ChevronUp, CreditCard, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function Checkout() {
    const [showOrderSummary, setShowOrderSummary] = useState(false);
    const { items: cartItems, total } = useGlobalContext();

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 25;
    const tax = subtotal * 0.08;

    return (
        <HomeLayout>
            <main className="bg-background min-h-screen pt-24">
                {/* Hero Section */}
                <section className="relative bg-[#F5F9FF] py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <h1 className="mb-4 text-4xl font-bold text-[#0099FF]">Checkout</h1>
                            <p className="text-muted-foreground text-xl">Complete your purchase securely</p>
                        </motion.div>
                    </div>
                </section>

                {/* Checkout Content */}
                <section className="py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                            {/* Checkout Form */}
                            <div className="space-y-8 lg:col-span-2">
                                {/* Contact Information */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="rounded-lg bg-white p-6 shadow-md"
                                >
                                    <h2 className="text-foreground mb-6 text-xl font-semibold">Contact Information</h2>

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Shipping Address */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="rounded-lg bg-white p-6 shadow-md"
                                >
                                    <h2 className="text-foreground mb-6 text-xl font-semibold">Shipping Address</h2>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">
                                                Street Address
                                            </label>
                                            <input
                                                type="text"
                                                id="address"
                                                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="apartment" className="mb-1 block text-sm font-medium text-gray-700">
                                                Apartment, Suite, etc. (optional)
                                            </label>
                                            <input
                                                type="text"
                                                id="apartment"
                                                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                            <div>
                                                <label htmlFor="city" className="mb-1 block text-sm font-medium text-gray-700">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="state" className="mb-1 block text-sm font-medium text-gray-700">
                                                    State
                                                </label>
                                                <select
                                                    id="state"
                                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                                >
                                                    <option value="">Select State</option>
                                                    <option value="NY">New York</option>
                                                    <option value="CA">California</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="FL">Florida</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="zip" className="mb-1 block text-sm font-medium text-gray-700">
                                                    ZIP Code
                                                </label>
                                                <input
                                                    type="text"
                                                    id="zip"
                                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Payment Method */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="rounded-lg bg-white p-6 shadow-md"
                                >
                                    <h2 className="text-foreground mb-6 text-xl font-semibold">Payment Method</h2>

                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-3 rounded-md border border-[#0099FF] bg-[#0099FF]/5 p-4">
                                            <input
                                                type="radio"
                                                id="creditCard"
                                                name="paymentMethod"
                                                className="h-4 w-4 text-[#0099FF]"
                                                defaultChecked
                                            />
                                            <label htmlFor="creditCard" className="flex items-center">
                                                <CreditCard className="mr-2 h-5 w-5 text-[#0099FF]" />
                                                <span>Credit / Debit Card</span>
                                            </label>
                                        </div>

                                        <div className="space-y-4 pl-7">
                                            <div>
                                                <label htmlFor="cardNumber" className="mb-1 block text-sm font-medium text-gray-700">
                                                    Card Number
                                                </label>
                                                <input
                                                    type="text"
                                                    id="cardNumber"
                                                    placeholder="1234 5678 9012 3456"
                                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="expiry" className="mb-1 block text-sm font-medium text-gray-700">
                                                        Expiry Date
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="expiry"
                                                        placeholder="MM/YY"
                                                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="cvv" className="mb-1 block text-sm font-medium text-gray-700">
                                                        CVV
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="cvv"
                                                        placeholder="123"
                                                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="nameOnCard" className="mb-1 block text-sm font-medium text-gray-700">
                                                    Name on Card
                                                </label>
                                                <input
                                                    type="text"
                                                    id="nameOnCard"
                                                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3 rounded-md border border-gray-200 p-4">
                                            <input type="radio" id="paypal" name="paymentMethod" className="h-4 w-4 text-[#0099FF]" />
                                            <label htmlFor="paypal" className="flex items-center">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
                                                    alt="PayPal"
                                                    width={80}
                                                    height={20}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Mobile Order Summary Toggle */}
                                <div className="lg:hidden">
                                    <button
                                        onClick={() => setShowOrderSummary(!showOrderSummary)}
                                        className="flex w-full items-center justify-between rounded-lg bg-white p-4 shadow-md"
                                    >
                                        <div className="flex items-center">
                                            <span className="font-semibold">Order Summary</span>
                                            <span className="ml-2 font-bold text-[#0099FF]">${total.toFixed(2)}</span>
                                        </div>
                                        {showOrderSummary ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                    </button>
                                </div>

                                {/* Place Order Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-8"
                                >
                                    <Button className="w-full bg-[#0099FF] py-6 text-lg hover:bg-blue-600">Place Order</Button>

                                    <div className="text-muted-foreground mt-4 flex items-center justify-center text-sm">
                                        <ShieldCheck className="mr-2 h-4 w-4 text-green-500" />
                                        <span>Your payment information is secure and encrypted</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Order Summary */}
                            <div className={`lg:block ${showOrderSummary ? 'block' : 'hidden'}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="sticky top-24 rounded-lg bg-white p-6 shadow-md"
                                >
                                    <h2 className="text-foreground mb-6 text-xl font-semibold">Order Summary</h2>

                                    <div className="mb-6 space-y-4">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex items-start space-x-4">
                                                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                                                    <img src={item.image} alt={item.name} className="object-cover" />
                                                    <div className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 text-xs text-white">
                                                        {item.quantity}
                                                    </div>
                                                </div>
                                                <div className="flex-grow">
                                                    <h3 className="text-sm font-medium">{item.name}</h3>
                                                    <p className="text-muted-foreground text-xs">Water Purification System</p>
                                                </div>
                                                <div className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-2 border-t pt-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Subtotal</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Shipping</span>
                                            <span>${shipping.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Tax</span>
                                            <span>${tax.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 border-t pt-4">
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Total</span>
                                            <span className="text-xl font-bold text-[#0099FF]">${total.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {/* Promo Code */}
                                    <div className="mt-6">
                                        <div className="flex space-x-2">
                                            <input
                                                type="text"
                                                placeholder="Promo Code"
                                                className="flex-grow rounded-l-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#0099FF] focus:outline-none"
                                            />
                                            <Button variant="outline" className="rounded-l-none">
                                                Apply
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Secure Checkout */}
                                    <div className="mt-6 rounded-md bg-gray-50 p-4">
                                        <div className="mb-2 flex items-center space-x-2">
                                            <ShieldCheck className="h-5 w-5 text-green-500" />
                                            <span className="font-medium">Secure Checkout</span>
                                        </div>
                                        <p className="text-muted-foreground text-sm">
                                            Your payment information is processed securely. We do not store credit card details.
                                        </p>
                                    </div>

                                    {/* Satisfaction Guarantee */}
                                    <div className="mt-4 flex items-start space-x-2">
                                        <Check className="mt-0.5 h-5 w-5 text-[#0099FF]" />
                                        <p className="text-muted-foreground text-sm">
                                            30-day satisfaction guarantee. If youre not completely satisfied, return for a full refund.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </HomeLayout>
    );
}
