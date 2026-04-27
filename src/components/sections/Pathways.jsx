"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Wind, Zap } from "lucide-react";
import Link from "next/link";

const pathways = [
  {
    title: "Respiratory",
    icon: Wind,
    trigger: "Dust, Pollen, Weather",
    cause: "Immune over-reaction in lungs",
    fix: "PFT Diagnosis + SLIT Training",
  },
  {
    title: "Skin",
    icon: ShieldCheck,
    trigger: "Contact, Food, Stress",
    cause: "Dermal barrier dysfunction",
    fix: "Patch Testing + Immunotherapy",
  },
  {
    title: "ENT / Sinus",
    icon: Activity,
    trigger: "Fragrance, Cold, Smog",
    cause: "Nasal mucosa inflammation",
    fix: "Endoscopy + Targeted Treatment",
  },
  {
    title: "Complex",
    icon: Zap,
    trigger: "Multiple / Unknown",
    cause: "Deep systemic dysfunction",
    fix: "Advanced Clinical Modulation",
  },
];

export default function Pathways() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Is this for me?</span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-slate-900">Patient Pathways</h2>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            We identify your specific triggers and treat the underlying immune dysfunction, not just the temporary symptoms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pathways.map((path, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-none border border-slate-100 flex flex-col group hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <path.icon size={32} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 leading-tight">{path.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-6 mb-10">
                <div>
                   <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Primary Trigger</span>
                   <p className="text-slate-900 font-semibold text-lg">{path.trigger}</p>
                </div>
                <div>
                   <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Likely Cause</span>
                   <p className="text-slate-600 text-base">{path.cause}</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10">
                   <span className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Root-Cause Fix</span>
                   <p className="text-primary font-bold text-base">{path.fix}</p>
                </div>
              </div>

              <div className="mt-auto space-y-6">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-slate-900/10"
                >
                  Start Recovery Plan
                </Link>

                <div className="space-y-2">
                  {[
                    "Direct specialist consultation",
                    "No long-term medication dependency",
                    "Personalized treatment plan"
                  ].map((item, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-bold text-slate-500">
                      <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-primary">✔</div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
