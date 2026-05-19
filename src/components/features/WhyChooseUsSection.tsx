"use client";

import { motion } from "framer-motion";
import { Zap, Layout, Smartphone, Cloud, Target } from "lucide-react";

const features = [
  {
    title: "Modern UI/UX",
    description: "Beautiful, intuitive designs that engage users and elevate your brand identity.",
    icon: Layout,
  },
  {
    title: "Fast Performance",
    description: "Optimized for speed and SEO, ensuring lightning-fast load times globally.",
    icon: Zap,
  },
  {
    title: "Responsive Development",
    description: "Flawless experiences across all devices, from desktop to mobile.",
    icon: Smartphone,
  },
  {
    title: "Startup-Focused Design",
    description: "Tailored aesthetics specifically engineered for modern tech companies and SaaS.",
    icon: Target,
  },
  {
    title: "Cloud-Ready Deployment",
    description: "Secure and scalable architecture ready to handle your business growth.",
    icon: Cloud,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-bg-secondary/30">
      {/* Background Elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-dark/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                <span className="text-xs font-medium text-brand-neon uppercase tracking-wider">
                  Why Choose Veynox Labs
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Built for the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-neon">Modern Web</span>
              </h2>
              <p className="text-text-secondary text-lg mb-8 max-w-lg">
                We don&apos;t just build websites; we craft digital experiences that drive growth, engage users, and position your brand as an industry leader.
              </p>
              
              <ul className="space-y-6">
                {features.slice(0, 3).map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <feature.icon className="text-brand-electric" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                      <p className="text-text-secondary text-sm">{feature.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Content / Additional Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {features.map((feature, idx) => (
               <motion.div
                key={`grid-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors"
               >
                 <feature.icon className="text-brand-neon mb-4" size={28} />
                 <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                 <p className="text-text-secondary text-xs leading-relaxed">{feature.description}</p>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
