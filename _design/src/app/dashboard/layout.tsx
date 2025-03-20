"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  FileText,
  LogOut
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Package, label: "Products", href: "/dashboard/products" },
    { icon: ShoppingCart, label: "Orders", href: "/dashboard/orders" },
    { icon: FileText, label: "Blog Posts", href: "/dashboard/blog" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#0099FF]">Dashboard</h2>
          <p className="text-gray-600 text-sm mt-1">Welcome, {user.name}</p>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#0099FF] transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <button
            onClick={() => {
              logout();
              router.push('/login');
            }}
            className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {children}
      </main>
    </div>
  );
}