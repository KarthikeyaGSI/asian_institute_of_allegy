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
    <section id="how-we-help" className="bg-gray-50 py-24 md:py-32">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => {
            const isExpanded = expandedId === option.id;
            
            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="flex flex-col"
              >
                <motion.div
                  whileHover={!isExpanded ? { y: -8 } : {}}
                  onClick={() => setExpandedId(isExpanded ? null : option.id)}
                  className={`bg-white rounded-2xl p-6 cursor-pointer h-full flex flex-col transition-all duration-300 ${
                    isExpanded ? "ring-2 ring-primary shadow-xl" : "shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-xl transition-colors duration-300 ${isExpanded ? "bg-primary text-white shadow-[0_0_15px_rgba(26,95,58,0.5)]" : "bg-gray-50 text-primary"}`}>
                      <option.icon size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.4, ease: "easeOut" }}
                         className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-100 mt-2 space-y-4">
                          <div>
                            <span className="block text-xs uppercase tracking-widest text-primary font-bold mb-1">Likely Cause</span>
                            <p className="text-gray-600 text-sm">{option.cause}</p>
                          </div>
                          <div>
                            <span className="block text-xs uppercase tracking-widest text-primary font-bold mb-1">Our Approach</span>
                            <p className="text-gray-900 font-medium text-sm">{option.approach}</p>
                          </div>
                          <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                            <span className="block text-[11px] uppercase tracking-wider text-primary font-bold mb-1">All-in-One Care</span>
                            <p className="text-primary font-medium text-xs">{option.oneRoof}</p>
                          </div>
                          <Link 
                            href="#contact"
                            className="inline-flex items-center justify-center w-full gap-2 text-white bg-primary px-4 py-3 rounded-xl font-bold text-sm hover:bg-[#154d2e] transition-colors mt-2"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                          >
                            Explore Pathway <ArrowRight size={16} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
