"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Wind, Zap } from "lucide-react";
import Link from "next/link";

const pathways = [
  {
    title: "Respiratory Health",
    icon: Wind,
    symptoms: ["Asthma", "Chronic Bronchitis", "Breathlessness"],
    approach: "PFT + SLIT for long-term asthma control.",
    oneRoof: "Get your PFT, Allergy Testing, and Immunotherapy plan in one visit.",
  },
  {
    title: "Skin & Immune",
    icon: ShieldCheck,
    symptoms: ["Urticaria (Hives)", "Eczema", "Contact Dermatitis"],
    approach: "Identify triggers + Immune system training.",
    oneRoof: "Complete diagnosis, patch testing, and treatment plan under one roof.",
  },
  {
    title: "ENT / Sinus",
    icon: Activity,
    symptoms: ["Allergic Rhinitis", "Nasal Polyps", "Chronic Sinusitis"],
    approach: "Allergen neutralization + Endoscopy.",
    oneRoof: "Endoscopy, allergy screening, and personalized care in a single visit.",
  },
  {
    title: "Complex Autoimmune",
    icon: Zap,
    symptoms: ["Food Allergies", "Drug Reactions", "Systemic Inflammation"],
    approach: "Advanced diagnostics + Clinical monitoring.",
    oneRoof: "Comprehensive systemic evaluation and ongoing follow-ups in one place.",
  },
];

export default function Pathways() {
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Clinical Approach</span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-gray-900">Patient Pathways</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            We do not just treat symptoms. We map out your journey to recovery based on your specific immunological profile.
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
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col group hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <path.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{path.title}</h3>
              </div>
              
              <div className="mb-8">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Common Presentations</p>
                <div className="flex flex-wrap gap-2">
                  {path.symptoms.map((symptom, j) => (
                    <span key={j} className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-100">
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl mb-8 flex-1 border border-gray-100 flex flex-col">
                <div className="mb-6">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Our Protocol</p>
                  <p className="text-gray-900 font-semibold">{path.approach}</p>
                </div>
                
                <div className="bg-primary/5 p-4 rounded-xl border border-primary/10 flex gap-3 items-start mt-auto">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(26,95,58,0.4)]" />
                  <div>
                    <span className="block text-[11px] font-bold text-primary uppercase tracking-wider mb-1">All-In-One Care</span>
                    <p className="text-primary font-medium text-sm leading-tight">{path.oneRoof}</p>
                  </div>
                </div>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center justify-between w-full text-primary font-bold text-lg group-hover:text-[#154d2e] transition-colors"
              >
                <span>Start Recovery Plan</span>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <ArrowRight size={20} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
