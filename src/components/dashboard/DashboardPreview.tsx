"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Reduce manual data entry by 80%",
  "Prevent stockouts with predictive AI",
  "Improve cash flow with faster billing",
  "Unify your team on a single platform"
];

export default function DashboardPreview() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Built for businesses that demand <span className="text-brand-electric">excellence</span>.
              </h2>
              <p className="text-lg text-text-secondary">
                We designed Veynox Labs from the ground up to solve the most frustrating aspects of running a small to medium enterprise. No more spreadsheet chaos.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white font-medium"
                >
                  <CheckCircle2 className="text-brand-neon" size={20} />
                  {benefit}
                </motion.li>
              ))}
            </ul>

            <button className="px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/10">
              Learn more about our technology
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Soft glow behind the UI element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-deep/30 blur-[80px] -z-10 rounded-full" />
            
            <div className="relative rounded-2xl border border-white/10 bg-bg-main p-6 shadow-2xl overflow-hidden">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <h3 className="font-bold text-white">Recent Transactions</h3>
                  <button className="text-sm text-brand-electric">View All</button>
                </div>
                
                {[
                  { name: "Acme Corp", date: "Today, 10:23 AM", amount: "+$2,450.00", status: "Completed" },
                  { name: "Globex Inc", date: "Yesterday, 2:45 PM", amount: "+$8,920.00", status: "Completed" },
                  { name: "Soylent Corp", date: "Oct 12, 9:15 AM", amount: "+$1,200.00", status: "Pending" },
                ].map((tx, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-electric/10 flex items-center justify-center text-brand-electric font-bold">
                        {tx.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-white text-sm">{tx.name}</div>
                        <div className="text-xs text-text-secondary">{tx.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-white text-sm">{tx.amount}</div>
                      <div className={`text-xs ${tx.status === "Completed" ? "text-green-400" : "text-yellow-400"}`}>
                        {tx.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
