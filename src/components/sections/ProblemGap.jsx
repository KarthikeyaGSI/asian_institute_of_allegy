"use client";

import { motion } from "framer-motion";

export default function ProblemGap() {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden border-b border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-[520px]">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8"
            >
              Millions suffer. <br/>
              <span className="text-gray-400">Few find the cause.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-600 font-medium leading-relaxed mb-6"
            >
              Most treatments manage symptoms. <br/>
              They don’t solve the cause.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <p className="text-sm font-bold text-slate-600 uppercase tracking-widest">The Symptom Trap</p>
            </motion.div>
          </div>

          {/* Right Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />
              <p className="text-5xl md:text-6xl font-bold font-heading mb-4">35Cr+</p>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-white/40 leading-relaxed">
                Allergy patients <br/> in India today
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white text-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <p className="text-5xl md:text-6xl font-bold font-heading mb-4 text-red-500">&lt;100</p>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 leading-relaxed">
                Specialized <br/> Immunologists
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
