"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await register(email, password, name);
    if (success) {
      router.push('/');
    }

    setIsLoading(false);
  };

  return (
    <main className="min-h-screen pt-24 bg-background">
      <section className="relative py-20 bg-[#F5F9FF]">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-[#0099FF]">Create Account</h1>
              <p className="text-muted-foreground mt-2">
                Sign up to get started with our services
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF] pl-10"
                    placeholder="Enter your name"
                    required
                  />
                  <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF] pl-10"
                    placeholder="Enter your email"
                    required
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0099FF] pl-10"
                    placeholder="Choose a password"
                    required
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#0099FF] hover:bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  'Create Account'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="text-[#0099FF] hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" className="w-full">
            <path
              fill="white"
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
    </main>
  );
}