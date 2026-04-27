"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const leftItems = [
  "Temporary relief via Antihistamines",
  "Lifelong dependence on Inhalers",
  "Treats the symptoms, not the cause",
  "Trial & error with multiple doctors"
];

const rightItems = [
  "Root-cause resolution via SLIT",
  "Immune system retraining",
  "Long-term control and prevention",
  "All-in-one specialist care"
];

export default function Comparison() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">The Choice</span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">Why we are different</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Standard treatments manage your symptoms day by day. We aim to train your immune system to stop reacting altogether.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-slate-100">
          
          {/* LEFT (Standard Care) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-50 text-gray-900 p-10 md:p-16 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                <X size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Standard Care</h3>
            </div>
            <ul className="space-y-6">
              {leftItems.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg text-gray-600 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT (Asian Institute) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="bg-primary text-white p-10 md:p-16 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shadow-sm">
                  <Check size={24} />
                </div>
                <h3 className="text-2xl font-bold">Asian Institute</h3>
              </div>
              <ul className="space-y-6">
                {rightItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-medium text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
