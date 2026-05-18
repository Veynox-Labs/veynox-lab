"use client";

import { motion } from "framer-motion";
import { PackageSearch, CreditCard, PieChart, Cloud, BellRing, FileText } from "lucide-react";

const features = [
  {
    title: "Inventory Management",
    description: "Track stock levels in real-time. Receive automated alerts when items run low.",
    icon: PackageSearch,
    color: "text-brand-electric",
    bg: "bg-brand-electric/10"
  },
  {
    title: "Billing System",
    description: "Generate professional invoices in seconds. Process payments seamlessly.",
    icon: CreditCard,
    color: "text-brand-neon",
    bg: "bg-brand-neon/10"
  },
  {
    title: "Analytics Dashboard",
    description: "Gain actionable insights into your business performance and sales trends.",
    icon: PieChart,
    color: "text-brand-deep",
    bg: "bg-brand-deep/10"
  },
  {
    title: "Cloud Access",
    description: "Access your business data from anywhere, on any device, securely in the cloud.",
    icon: Cloud,
    color: "text-brand-electric",
    bg: "bg-brand-electric/10"
  },
  {
    title: "Smart Alerts",
    description: "Never miss a beat with customizable notifications for important events.",
    icon: BellRing,
    color: "text-brand-neon",
    bg: "bg-brand-neon/10"
  },
  {
    title: "Comprehensive Reporting",
    description: "Export detailed tax-ready reports and share them with your team easily.",
    icon: FileText,
    color: "text-brand-deep",
    bg: "bg-brand-deep/10"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-neon">scale</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto"
          >
            Veynox Labs provides a comprehensive suite of tools designed to handle the complexities of modern business operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${feature.bg} ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-electric/30 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
