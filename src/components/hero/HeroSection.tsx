"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-electric/20 rounded-full blur-[100px] -z-10 animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-neon/20 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-brand-deep/20 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-electric"></span>
          <span className="text-xs font-medium text-brand-electric uppercase tracking-wider">
            Veynox Labs v2.0 is live
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto"
        >
          Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-brand-neon to-brand-electric bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">Smarter</span> Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          The all-in-one Inventory & Billing Management System designed for modern small businesses. Streamline operations, track stock, and manage payments with ease.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-bg-main font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
            Start Free Trial <ArrowRight size={18} />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-md flex items-center justify-center gap-2">
            Book a Demo
          </button>
        </motion.div>
      </div>

      {/* Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full max-w-6xl mx-auto mt-20 px-6 perspective-1000"
      >
        <div className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-bg-card backdrop-blur-xl shadow-2xl overflow-hidden transform-gpu hover:scale-[1.02] transition-transform duration-500">
          {/* Mac-like header */}
          <div className="h-12 border-b border-white/10 flex items-center px-4 bg-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="mx-auto text-xs font-medium text-text-secondary flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-md">
              app.veynoxlabs.com
            </div>
          </div>
          
          {/* Mockup content */}
          <div className="p-6 md:p-8 flex gap-6">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-48 gap-4 border-r border-white/10 pr-6">
              <div className="h-8 bg-white/10 rounded w-full mb-4"></div>
              <div className="h-6 bg-brand-electric/20 text-brand-electric rounded w-full flex items-center px-2 text-xs font-semibold">Dashboard</div>
              <div className="h-6 bg-white/5 rounded w-3/4"></div>
              <div className="h-6 bg-white/5 rounded w-5/6"></div>
              <div className="h-6 bg-white/5 rounded w-full"></div>
            </div>
            
            {/* Main Area */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white mb-1">Overview</h3>
                  <p className="text-sm text-text-secondary">Your business at a glance</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-neon/20 border border-brand-neon/40 flex items-center justify-center text-brand-neon">
                    <Users size={14} />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Total Revenue", value: "$45,231.89", trend: "+20.1%", icon: TrendingUp, color: "text-brand-electric" },
                  { label: "Active Users", value: "2,350", trend: "+15.2%", icon: Users, color: "text-brand-neon" },
                  { label: "Sales", value: "12,234", trend: "+5.4%", icon: BarChart3, color: "text-white" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary">{stat.label}</span>
                      <stat.icon size={16} className={stat.color} />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-brand-electric font-medium">{stat.trend} from last month</div>
                  </div>
                ))}
              </div>
              
              <div className="h-64 rounded-xl border border-white/5 bg-gradient-to-t from-brand-deep/10 to-transparent flex items-end p-4 gap-2">
                {/* Bar chart mockup */}
                {[40, 70, 45, 90, 65, 85, 100, 75, 50, 80, 60, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-brand-electric/40 rounded-t-sm hover:bg-brand-electric transition-colors" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
