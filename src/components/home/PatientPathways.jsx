"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const pathways = [
  {
    title: "Respiratory",
    symptoms: ["Wheezing", "Shortness of breath", "Chronic cough"],
    approach: "PFT + SLIT for long-term asthma control.",
  },
  {
    title: "Skin & Immune",
    symptoms: ["Itchy rashes", "Swelling", "Eczema flare-ups"],
    approach: "Identify triggers + Immune system training.",
  },
  {
    title: "ENT",
    symptoms: ["Blocked nose", "Sneezing", "Sinus headaches"],
    approach: "Allergen neutralization + Endoscopy.",
  },
  {
    title: "Complex",
    symptoms: ["Food allergies", "Drug sensitivity", "Autoimmune"],
    approach: "Advanced diagnostics + Clinical monitoring.",
  },
];

export default function PatientPathways() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-custom">
        <div className="mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">Patient Pathways</h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            We don&apos;t just treat symptoms. We map out your journey to recovery based on your specific immunological profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {pathways.map((path, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
              className="card flex flex-col h-full relative group glass-card"
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors duration-500 pointer-events-none group-hover:shadow-[0_0_20px_rgba(26,95,58,0.1)]" />
              
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">{path.title}</h3>
              <ul className="space-y-3 mb-8 flex-1">
                {path.symptoms.map((symptom, j) => (
                  <li key={j} className="text-gray-600 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-primary transition-colors" />
                    {symptom}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-100 mb-6">
                <p className="text-gray-900 font-medium text-sm">{path.approach}</p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:underline"
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
