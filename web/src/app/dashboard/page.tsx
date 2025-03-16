"use client";

import { motion } from "framer-motion";
import { Package, ShoppingCart, FileText, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { icon: Package, label: "Total Products", value: "24" },
    { icon: ShoppingCart, label: "Total Orders", value: "156" },
    { icon: FileText, label: "Blog Posts", value: "12" },
    { icon: TrendingUp, label: "Revenue", value: "$12,450" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
              </div>
              <div className="w-12 h-12 bg-[#0099FF]/10 rounded-full flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-[#0099FF]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium text-gray-900">New order #1234</p>
                    <p className="text-sm text-gray-600">2 hours ago</p>
                  </div>
                  <span className="px-3 py-1 text-sm text-[#0099FF] bg-[#0099FF]/10 rounded-full">
                    Completed
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}