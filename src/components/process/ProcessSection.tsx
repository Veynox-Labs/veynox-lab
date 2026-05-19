"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    description: "We dive deep into your brand, audience, and goals to build a solid strategic foundation.",
    icon: Search,
  },
  {
    id: "02",
    title: "Design",
    description: "We craft stunning, user-centric interfaces that align with your modern brand identity.",
    icon: PenTool,
  },
  {
    id: "03",
    title: "Development",
    description: "Our engineers build scalable, fast, and responsive digital solutions using modern tech stacks.",
    icon: Code,
  },
  {
    id: "04",
    title: "Launch",
    description: "We deploy your project seamlessly and ensure everything runs perfectly in production.",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 relative bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-neon">Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            A streamlined approach to transforming your vision into reality.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-electric/50 to-transparent"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-bg-secondary border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(29,161,255,0.1)] group">
                  <div className="absolute inset-0 rounded-full bg-brand-electric/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <step.icon className="text-brand-electric" size={32} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-brand-electric to-brand-neon flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {step.id}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-[250px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
