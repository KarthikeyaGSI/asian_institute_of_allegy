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
  },
  {
    id: "skin",
    title: "Skin Allergies",
    icon: ShieldCheck,
    cause: "Commonly Eczema, Hives, or Contact Dermatitis.",
    approach: "Patch Testing + Barrier Restoration + Immune Training.",
  },
  {
    id: "ent",
    title: "Sinus / ENT",
    icon: Activity,
    cause: "Chronic Sinusitis, Allergic Rhinitis, or Nasal Polyps.",
    approach: "Endoscopic Assessment + Targeted Allergen Neutralization.",
  },
  {
    id: "chronic",
    title: "Chronic / Autoimmune",
    icon: Zap,
    cause: "Complex inflammatory responses and immune dysfunction.",
    approach: "Systemic Diagnosis + Advanced Immunomodulation.",
  },
];

export default function GuidedEntry() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="how-we-help" className="bg-white py-24 md:py-32">
      <div className="container-custom">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">What are you dealing with?</h2>
        </div>

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
                  className={`card cursor-pointer h-full flex flex-col ${
                    isExpanded ? "ring-2 ring-primary border-transparent" : "hover:shadow-xl hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-xl transition-colors duration-300 ${isExpanded ? "bg-primary text-white shadow-[0_0_15px_rgba(26,95,58,0.5)]" : "bg-gray-50 text-primary group-hover:bg-primary/10"}`}>
                      <option.icon size={28} />
                    </div>
                    <h3 className="text-xl font-semibold">{option.title}</h3>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
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
                          <Link 
                            href="#contact"
                            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline mt-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Get Treatment <ArrowRight size={16} />
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
