"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, X } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";
import TextReveal from "@/components/motion/TextReveal";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { fadeInUp, easeLuxury } from "@/components/motion/variants";

// 2026-Grade Tilt Component with Premium Springs
const Tilt = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 160, damping: 20, mass: 0.5 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`perspective-1000 ${className}`}
    >
      <motion.div style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </motion.div>
  );
};

const leftItems = [
  "Meds like Cetirizine, Allegra",
  "Nasal Sprays & Inhalers",
  "Short-term symptomatic relief",
  "High rate of recurrence"
];

const rightItems = [
  "Allergen-specific SLIT",
  "Root-cause diagnosis (Skin Prick)",
  "Permanent Immune Retraining",
  "Tailored to ages 2 to 80"
];

export default function Comparison() {
  return (
    <section id="comparison" className="bg-white py-24 md:py-32 overflow-hidden border-b border-gray-100 relative">
       {/* Ambient background blur */}
      <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <ScrollReveal>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The clinical difference</span>
            <h2 className="text-3xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-slate-900 font-heading">
              <TextReveal text="Root-cause resolution." /> <br/> 
              <TextReveal text="Not temporary relief." className="text-slate-400 font-medium italic" delay={0.4} />
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                Applying treatment without a "silent conversation" with the sufferer will only lead to the rebound of diseases. At the Asian Institute of Allergy, every patient has their own treatment protocol.
              </p>
              
              <div className="bg-slate-50/50 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-slate-100 text-left relative overflow-hidden group">
                 <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                 <p className="text-lg md:text-2xl text-slate-900 font-bold leading-relaxed relative z-10">
                  "The key to each patient's success is a clinical interaction that may last from <span className="text-primary underline decoration-primary/20 underline-offset-8">45 minutes to 1.5 hours</span>—just to know exactly how their disease started."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* LEFT (Standard Care) */}
          <Tilt>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 flex flex-col justify-center rounded-[3rem] border border-slate-100 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.08)] relative h-full group"
            >
              <div className="absolute top-0 right-0 p-8">
                <X size={80} className="text-slate-100/50 group-hover:text-red-100/50 transition-colors" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 shadow-sm">
                    <X size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 font-heading">Standard Care</h3>
                </div>
                <ul className="space-y-8">
                  {leftItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-5 text-lg text-slate-500 font-medium">
                      <div className="w-2 h-2 rounded-full bg-red-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Tilt>

          {/* RIGHT (Asian Institute) */}
          <Tilt>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-10 md:p-16 flex flex-col justify-center rounded-[3rem] shadow-[0_32px_64px_-24px_rgba(26,95,58,0.3)] relative h-full overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-primary-accent shadow-xl border border-white/10">
                    <Check size={28} />
                  </div>
                  <h3 className="text-3xl font-bold font-heading">Asian Institute</h3>
                </div>
                <ul className="space-y-8">
                  {rightItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-5 text-lg font-medium text-white/90">
                      <div className="w-2 h-2 rounded-full bg-primary-accent shrink-0 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-10 border-t border-white/10">
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4 block">Stage Evaluation</p>
                   <p className="text-sm font-medium text-white/70 leading-relaxed italic">
                    "Our team is trained to identify exactly which stage of the immunological cascade you are in and perform a clinical reset."
                   </p>
                </div>
              </div>
            </motion.div>
          </Tilt>

        </div>
      </div>
    </section>
  );
}
