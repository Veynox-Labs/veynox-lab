"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "fintech",
    title: "Nexus Finance",
    category: "Fintech Platform",
    image: "bg-gradient-to-br from-indigo-900 to-purple-900",
  },
  {
    id: "saas",
    title: "CloudSync",
    category: "SaaS Dashboard",
    image: "bg-gradient-to-br from-blue-900 to-cyan-900",
  },
  {
    id: "ecommerce",
    title: "Aura Aesthetics",
    category: "E-Commerce",
    image: "bg-gradient-to-br from-rose-900 to-orange-900",
  },
  {
    id: "agency",
    title: "Studio Minimal",
    category: "Creative Agency",
    image: "bg-gradient-to-br from-slate-800 to-slate-900",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 relative overflow-hidden bg-bg-secondary/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-electric to-brand-neon">
                Work
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-text-secondary text-lg">
              A selection of our recent projects showcasing our expertise in
              design and development.
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium whitespace-nowrap">
            View All Projects <ArrowUpRight size={18} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer">
              <div
                className={`relative w-full aspect-video rounded-2xl overflow-hidden mb-6 ${project.image} border border-white/10`}>
                {/* Abstract mockup representation instead of real image for now */}
                <div className="absolute inset-4 rounded-xl bg-bg-main/50 backdrop-blur-md border border-white/10 transform group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                  <div className="h-8 border-b border-white/10 flex items-center px-4 bg-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    </div>
                  </div>
                  <div className="p-6 opacity-50 flex items-center justify-center h-full">
                    <span className="font-heading text-2xl tracking-widest text-white/50 uppercase">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-electric/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white text-brand-deep flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-electric transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
