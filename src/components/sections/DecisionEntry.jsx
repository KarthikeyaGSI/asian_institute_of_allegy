"use client";

import { motion } from "framer-motion";
import { Wind, ShieldCheck, Activity, Zap, ArrowRight } from "lucide-react";

const cards = [
  {
    id: "breathing",
    title: "Breathing issues",
    description: "Asthma, wheezing, or chronic cough.",
    icon: Wind,
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: "skin",
    title: "Skin allergies",
    description: "Eczema, hives, or persistent itching.",
    icon: ShieldCheck,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    id: "sinus",
    title: "Sinus / ENT",
    description: "Frequent sneezing, cold, or sinus pain.",
    icon: Activity,
    color: "bg-amber-50 text-amber-600"
  },
  {
    id: "chronic",
    title: "Chronic / autoimmune",
    description: "Systemic issues or immune dysfunction.",
    icon: Zap,
    color: "bg-purple-50 text-purple-600"
  }
];

export default function DecisionEntry() {
  const handleStartEvaluation = () => {
    window.dispatchEvent(new CustomEvent("open-quiz"));
  };

  return (
    <section className="bg-slate-50/50 py-20 md:py-32">
      <div className="container-custom">
        <div className="max-w-[600px] mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4"
          >
            Tell us what you're experiencing
          </motion.h2>
          <p className="text-lg text-slate-500 font-medium">This is your first step toward root-cause resolution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={handleStartEvaluation}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 cursor-pointer group flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <card.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                {card.description}
              </p>
              
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary pt-6 border-t border-slate-50">
                Start evaluation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
