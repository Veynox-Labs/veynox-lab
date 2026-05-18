"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Veynox Labs completely transformed how we manage our inventory. We've reduced lost stock by 95% in just three months.",
    author: "Sarah Jenkins",
    role: "Operations Manager, TechFlow",
    avatar: "SJ"
  },
  {
    quote: "The billing system is incredibly intuitive. It saves my team hours every week, allowing us to focus on growing the business.",
    author: "David Chen",
    role: "CEO, Nexa Retail",
    avatar: "DC"
  },
  {
    quote: "Setup took minutes, not days. The analytics dashboard gives me a clear view of our financial health at any moment.",
    author: "Elena Rodriguez",
    role: "Founder, Bloom Logistics",
    avatar: "ER"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Loved by forward-thinking teams
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6 text-brand-neon">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg text-white mb-8 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-electric to-brand-neon flex items-center justify-center text-white font-bold shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{testimonial.author}</div>
                  <div className="text-xs text-text-secondary">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
