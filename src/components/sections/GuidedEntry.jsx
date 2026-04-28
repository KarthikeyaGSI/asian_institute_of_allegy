"use client";

import { motion } from "framer-motion";
import { ArrowRight, UserPlus, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

const options = [
  {
    id: "new-patient",
    title: "I am a new patient",
    subtitle: "First-time clinical workup",
    description: "Start here if you have chronic symptoms but no definitive diagnosis.",
    icon: UserPlus,
    color: "bg-primary",
  },
  {
    id: "returning",
    title: "I have a diagnosis",
    subtitle: "Seeking second opinion",
    description: "For those already diagnosed but seeking long-term resolution via SLIT.",
    icon: Clock,
    color: "bg-slate-900",
  }
];

export default function GuidedEntry() {
  return (
    <section id="how-we-help" className="bg-white py-32 md:py-48 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Sparkles size={20} />
              </div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Guided Entry</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tighter font-heading mb-8 transform hover:-translate-y-1 hover:shadow-[0_0_10px_rgba(0,255,0,0.5)]">
              Tell us what you're experiencing.<br/>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-xl">
              Select your current situation to see the most relevant diagnostic pathway and treatment timeline.
            </p>
          </motion.div>
          
          <div className="hidden lg:flex justify-end">
             <div className="w-32 h-32 rounded-full border border-slate-100 flex items-center justify-center animate-spin-slow">
                <div className="w-2 h-2 bg-primary rounded-full" />
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {options.map((opt, i) => (
            <Link key={opt.id} href="/#contact" className="group">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-slate-50 rounded-[3rem] p-10 md:p-16 overflow-hidden border border-slate-100 group-hover:border-primary/20 group-hover:bg-white transition-all duration-700"
              >
                {/* Background Accent */}
                <div className={`absolute top-0 right-0 w-64 h-64 ${opt.color} opacity-[0.02] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-20 h-20 rounded-3xl ${opt.color} text-white flex items-center justify-center mb-10 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                    <opt.icon size={36} />
                  </div>
                  
                  <span className="text-primary font-bold tracking-widest uppercase text-[10px] mb-4 block">{opt.subtitle}</span>
                  <h3 className="text-4xl font-bold text-slate-900 mb-6 font-heading tracking-tight">{opt.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 max-w-sm">
                    {opt.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-4 text-slate-900 font-black uppercase tracking-widest text-xs">
                    <span>Explore Pathway</span>
                    <div className="w-10 h-px bg-slate-200 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
