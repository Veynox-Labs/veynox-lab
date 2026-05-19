"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Veynox Labs completely transformed our digital presence. The new platform they built is not only stunning but highly functional. Our conversion rates have doubled since launch.",
    author: "Sarah Jenkins",
    role: "Founder, TechFlow",
    initials: "SJ",
  },
  {
    quote: "Working with this team was seamless. They understood our modern aesthetic requirements perfectly and delivered a product that exceeded our expectations.",
    author: "David Chen",
    role: "CEO, Nexus Finance",
    initials: "DC",
  },
  {
    quote: "The attention to detail and animations they added to our landing page made us stand out in a crowded market. Truly a premium agency experience.",
    author: "Elena Rodriguez",
    role: "Marketing Director, Aura",
    initials: "ER",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative bg-bg-main overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-neon">Success</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 relative group hover:bg-white/10 transition-colors"
            >
              <Quote className="text-brand-electric/30 mb-6 w-10 h-10 group-hover:text-brand-electric transition-colors" />
              <p className="text-text-secondary text-base leading-relaxed mb-8">
                &quot;{testimonial.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-deep to-brand-neon flex items-center justify-center text-white font-bold border-2 border-white/10">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.author}</h4>
                  <p className="text-brand-electric text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
