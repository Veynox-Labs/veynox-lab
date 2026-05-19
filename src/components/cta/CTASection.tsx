"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-main border-y border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-brand-electric/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-px bg-gradient-to-b from-brand-electric/50 via-brand-neon/20 to-transparent">
          <div className="rounded-[23px] bg-bg-secondary/90 backdrop-blur-xl p-10 md:p-16 text-center border border-white/5 relative overflow-hidden">
            {/* Inner subtle glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-neon/30 rounded-full blur-[50px]"></div>

            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
              Let’s Build Something <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric to-brand-neon">
                Exceptional
              </span>
            </h2>

            <p className="text-text-secondary text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Ready to elevate your digital presence? Partner with Veynox Labs
              and turn your vision into a stunning reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="cursor-pointer w-full sm:w-auto px-8 py-4 rounded-full bg-white text-bg-main font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-lg">
                Start Your Project <ArrowRight size={20} />
              </button>
              <button className="cursor-pointer w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-md flex items-center justify-center gap-2 text-lg">
                <MessageSquare size={20} /> Book a Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
