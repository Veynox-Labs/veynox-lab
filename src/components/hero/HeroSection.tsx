"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, PenTool, MonitorSmartphone, Cloud, Sparkles } from "lucide-react";
import Image from "next/image";
import TechWaterfall from "./TechWaterfall";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center">
      {/* Ambient Tech Waterfall Background */}
      <TechWaterfall />

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
            Premium Digital Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-white mb-6 leading-tight max-w-5xl mx-auto"
        >
          Crafting Modern Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-brand-neon to-brand-electric bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">Experiences</span> for Growing Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          We design and develop premium websites, landing pages, and digital experiences that help businesses stand out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-bg-main font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
            Start Your Project <ArrowRight size={18} />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-md flex items-center justify-center gap-2">
            Book a Consultation
          </button>
        </motion.div>
      </div>

      {/* Centerpiece Mockup with Floating Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full max-w-5xl mx-auto mt-24 px-6 relative"
      >
        {/* Main Mockup Container */}
        <div className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-bg-card backdrop-blur-xl shadow-2xl overflow-hidden transform-gpu hover:scale-[1.01] transition-transform duration-500 z-10">
          {/* Browser-style Header */}
          <div className="h-12 border-b border-white/10 flex items-center px-4 bg-white/5 relative">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-red-500/80 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-yellow-500/80 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-green-500/80 transition-colors" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 text-xs font-medium text-text-secondary bg-white/5 px-6 py-1.5 rounded-md flex items-center gap-2">
              veynoxlabs.com
            </div>
          </div>
          
          {/* Main Image */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <Image 
              src="/hero-mockup.png"
              alt="Premium Dashboard Mockup"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Subtle overlay to blend perfectly with dark mode */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main/80 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Floating Card 1: UI/UX Design (Top Left) */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute -left-2 md:-left-12 top-10 md:top-20 z-20 w-48 md:w-56 p-4 rounded-xl bg-bg-main/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)] shadow-brand-neon/10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-neon/20 flex items-center justify-center text-brand-neon">
              <PenTool size={18} />
            </div>
            <div>
              <p className="text-white text-sm font-bold">UI/UX Design</p>
              <p className="text-text-secondary text-xs">Pixel-perfect</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Card 2: Responsive Development (Bottom Left) */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
          className="absolute -left-6 md:-left-16 bottom-10 md:bottom-20 z-20 w-52 md:w-60 p-4 rounded-xl bg-bg-main/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)] shadow-brand-electric/10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-electric/20 flex items-center justify-center text-brand-electric">
              <MonitorSmartphone size={18} />
            </div>
            <div>
              <p className="text-white text-sm font-bold">Responsive Dev</p>
              <p className="text-text-secondary text-xs">Seamless on all devices</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Card 3: Cloud Deployment (Top Right) */}
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
          className="absolute -right-4 md:-right-12 top-4 md:top-12 z-20 w-48 md:w-56 p-4 rounded-xl bg-bg-main/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)] shadow-brand-deep/10"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-deep/30 flex items-center justify-center text-brand-electric">
              <Cloud size={18} />
            </div>
            <div>
              <p className="text-white text-sm font-bold">Cloud Ready</p>
              <p className="text-text-secondary text-xs">Zero downtime</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Card 4: Startup Branding (Bottom Right) */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1.5 }}
          className="absolute -right-6 md:-right-16 bottom-16 md:bottom-24 z-20 w-52 md:w-64 p-4 rounded-xl bg-bg-main/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)] shadow-white/5"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-white text-sm font-bold">Startup Branding</p>
              <p className="text-text-secondary text-xs">Stand out visually</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#services" className="flex flex-col items-center gap-2 text-text-secondary hover:text-white transition-colors cursor-pointer group">
          <span className="text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-10 h-16 rounded-full border border-white/20 flex items-start justify-center p-2 bg-white/5 backdrop-blur-sm group-hover:border-brand-electric/50 transition-colors"
          >
            <ChevronDown className="text-brand-electric" size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
