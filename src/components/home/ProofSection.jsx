"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  { value: 50000, suffix: "+", label: "Patients from Kashmir to Dubai" },
  { value: 15, suffix: "k+", label: "SLIT Success Stories" },
  { value: 12, suffix: "+", label: "Countries" },
  { value: 100, suffix: "+", label: "Research" },
];

export default function ProofSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl text-center border border-gray-100 shadow-sm"
            >
              <div className="text-4xl md:text-5xl font-semibold text-gray-900 mb-2">
                <Counter end={stat.value} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <div className="text-gray-500 font-medium text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
