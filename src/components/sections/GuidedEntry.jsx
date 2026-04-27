"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, ShieldCheck, Activity, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const options = [
  {
    id: "breathing",
    title: "Breathing Issues",
    icon: Wind,
    cause: "Usually dust mites, pollen, or allergic asthma triggers.",
    approach: "PFT Diagnosis + Personalized SLIT (Immunotherapy).",
    oneRoof: "Get your PFT, Allergy Testing, and Immunotherapy plan in one visit.",
  },
  {
    id: "skin",
    title: "Skin Allergies",
    icon: ShieldCheck,
    cause: "Commonly Eczema, Hives, or Contact Dermatitis.",
    approach: "Patch Testing + Barrier Restoration + Immune Training.",
    oneRoof: "Complete diagnosis, patch testing, and treatment plan under one roof.",
  },
  {
    id: "ent",
    title: "Sinus / ENT",
    icon: Activity,
    cause: "Chronic Sinusitis, Allergic Rhinitis, or Nasal Polyps.",
    approach: "Endoscopic Assessment + Targeted Allergen Neutralization.",
    oneRoof: "Endoscopy, allergy screening, and personalized care in a single visit.",
  },
  {
    id: "chronic",
    title: "Chronic / Autoimmune",
    icon: Zap,
    cause: "Complex inflammatory responses and immune dysfunction.",
    approach: "Systemic Diagnosis + Advanced Immunomodulation.",
    oneRoof: "Comprehensive systemic evaluation and ongoing follow-ups in one place.",
  },
];

export default function GuidedEntry() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="how-we-help" className="bg-gray-50 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Guided Entry</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">What are you dealing with?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Select your primary concern to see our root-cause approach.</p>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {options.map((option, index) => {
            const isExpanded = expandedId === option.id;
            
            return (
              <motion.div
                key={option.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col transition-all duration-500 ${
                  isExpanded ? "lg:col-span-2 lg:row-span-1" : "lg:col-span-1"
                }`}
              >
                <motion.div
                  layout
                  onClick={() => setExpandedId(isExpanded ? null : option.id)}
                  className={`bg-white rounded-3xl p-8 cursor-pointer h-full flex flex-col transition-all duration-300 relative group ${
                    isExpanded 
                      ? "ring-2 ring-primary shadow-2xl shadow-primary/10" 
                      : "shadow-none border border-gray-100 hover:ring-2 hover:ring-primary/50 hover:shadow-2xl hover:shadow-primary/5"
                  }`}
                >
                  <motion.div layout className="flex items-center gap-6 mb-6">
                    <div className={`p-5 rounded-2xl transition-all duration-500 ${isExpanded ? "bg-primary text-white shadow-[0_0_25px_rgba(26,95,58,0.4)]" : "bg-gray-50 text-primary group-hover:bg-primary group-hover:text-white"}`}>
                      <option.icon size={32} />
                    </div>
                    <h3 className={`text-2xl font-bold transition-colors duration-500 ${isExpanded ? "text-primary" : "text-gray-900"}`}>{option.title}</h3>
                  </motion.div>

                  <AnimatePresence mode="wait">
                    {isExpanded ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-gray-100 mt-2 space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="space-y-4">
                                <div>
                                  <span className="block text-xs uppercase tracking-widest text-primary font-bold mb-2">Likely Cause</span>
                                  <p className="text-gray-600 text-base leading-relaxed">{option.cause}</p>
                                </div>
                                <div>
                                  <span className="block text-xs uppercase tracking-widest text-primary font-bold mb-2">Our Approach</span>
                                  <p className="text-gray-900 font-bold text-base leading-relaxed">{option.approach}</p>
                                </div>
                             </div>
                             <div className="space-y-6">
                                <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
                                  <span className="block text-xs uppercase tracking-widest text-primary font-bold mb-2">All-in-One Care</span>
                                  <p className="text-primary font-medium text-sm leading-relaxed">{option.oneRoof}</p>
                                </div>
                                <Link 
                                  href="#contact"
                                  className="inline-flex items-center justify-center w-full gap-3 text-white bg-primary px-6 py-4 rounded-2xl font-bold text-base hover:bg-[#154d2e] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-primary/20"
                                  onClick={(e) => {
                                      e.stopPropagation();
                                  }}
                                >
                                  Explore Pathway <ArrowRight size={20} />
                                </Link>
                             </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform"
                      >
                        Select concern <ArrowRight size={16} className="ml-2" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
