"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FoundationSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-primary text-white p-12 md:p-20 rounded-3xl"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-semibold mb-8">
              Research & Global Standards
            </h2>
            <ul className="space-y-4 mb-10 text-lg text-primary-accent opacity-90">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full"/> Environmental studies</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full"/> Awareness programs</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-white rounded-full"/> Evidence-based protocols</li>
            </ul>
            <Link 
              href="#waf"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-medium transition-all hover:bg-gray-50 active:scale-95"
            >
              Visit World Allergy Foundation <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
