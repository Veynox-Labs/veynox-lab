"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "Perfect for new businesses just getting off the ground.",
    features: [
      "Up to 1,000 SKUs",
      "Basic inventory tracking",
      "Standard email support",
      "1 User account"
    ],
    highlighted: false,
    cta: "Start Free Trial"
  },
  {
    name: "Business",
    price: "$79",
    period: "/mo",
    description: "The complete solution for growing retail operations.",
    features: [
      "Unlimited SKUs",
      "Advanced analytics & reporting",
      "Automated billing system",
      "Priority 24/7 support",
      "Up to 5 User accounts"
    ],
    highlighted: true,
    cta: "Get Started"
  },
  {
    name: "Premium",
    price: "$199",
    period: "/mo",
    description: "Enterprise-grade tools for scaling companies.",
    features: [
      "Everything in Business",
      "Custom API integrations",
      "Dedicated account manager",
      "Unlimited User accounts",
      "Multi-location support"
    ],
    highlighted: false,
    cta: "Contact Sales"
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Simple, transparent pricing
          </motion.h2>
          <p className="text-lg text-text-secondary">No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl flex flex-col h-full ${
                plan.highlighted 
                  ? "bg-bg-main border-2 border-brand-electric shadow-[0_0_40px_rgba(29,161,255,0.15)]" 
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-electric to-brand-neon rounded-full text-xs font-bold text-white uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-text-secondary h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-heading font-bold text-white">{plan.price}</span>
                  <span className="text-text-secondary">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                    <Check size={16} className={plan.highlighted ? "text-brand-electric" : "text-brand-neon"} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-brand-electric to-brand-neon text-white hover:shadow-[0_0_20px_rgba(29,161,255,0.4)]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
