"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const leftItems = [
  "Temporary relief",
  "Medicines for life",
  "Recurring symptoms",
  "Trial & error"
];

const rightItems = [
  "Root-cause treatment",
  "Immunotherapy",
  "Long-term control",
  "Scientific diagnosis"
];

export default function ProblemSolution() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-muted py-24 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div ref={containerRef} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          
          {/* LEFT (Dark) */}
          <motion.div 
            initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
            animate={isInView ? { x: 0, opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-dark text-white p-10 md:p-16 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-400">Traditional Experience</h3>
            <ul className="space-y-6">
              {leftItems.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT (Light) */}
          <motion.div 
            initial={{ x: 100, opacity: 0, filter: "blur(10px)" }}
            animate={isInView ? { x: 0, opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="bg-white text-gray-900 p-10 md:p-16 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-8 text-primary">The Asian Institute Way</h3>
            <ul className="space-y-6">
              {rightItems.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
