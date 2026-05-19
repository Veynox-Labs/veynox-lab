"use client";

import { motion } from "framer-motion";
import { Globe, Rocket, Briefcase, PenTool } from "lucide-react";

const services = [
  {
    id: "landing-pages",
    title: "Business Landing Pages",
    description:
      "High-converting, beautiful landing pages designed to capture leads and showcase your products.",
    icon: Globe,
    color: "from-brand-electric to-brand-neon",
  },
  {
    id: "startup-websites",
    title: "Startup Websites",
    description:
      "Full-scale marketing websites with complex animations and perfect performance for tech startups.",
    icon: Rocket,
    color: "from-brand-neon to-brand-dark",
  },
  {
    id: "portfolio",
    title: "Portfolio Websites",
    description:
      "Premium personal branding websites for founders, creators, and modern entrepreneurs.",
    icon: Briefcase,
    color: "from-brand-electric to-brand-deep",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "User-centric interface design focusing on seamless experiences and elegant aesthetics.",
    icon: PenTool,
    color: "from-brand-deep to-brand-neon",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-bg-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-electric to-brand-neon">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary text-lg">
            We deliver premium digital solutions tailored to elevate your brand
            and drive results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl p-px overflow-hidden bg-linear-to-b from-white/10 to-transparent hover:from-brand-electric/50 hover:to-brand-neon/50 transition-all duration-500">
              <div className="relative h-full bg-bg-secondary rounded-2xl p-8 backdrop-blur-sm z-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-2xl -mr-10 -mt-10"></div>

                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center bg-linear-to-br ${service.color} mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="text-white" size={28} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                  {service.title}
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
