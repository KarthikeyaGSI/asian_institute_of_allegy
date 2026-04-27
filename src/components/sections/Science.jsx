"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Zap, Search, Activity } from "lucide-react";

const steps = [
  {
    title: "Identify",
    label: "Root-Cause Discovery",
    description: "Advanced diagnostics (PFT, Skin Prick, Component-resolved) to find exactly what triggers your immune system.",
    icon: Search
  },
  {
    title: "Understand",
    label: "Immune Logic",
    description: "We don't just see symptoms; we map your inflammatory pathway to understand why your body is over-reacting.",
    icon: Activity
  },
  {
    title: "Re-train",
    label: "Immunotherapy (SLIT)",
    description: "Gradually exposing your body to allergens to build permanent tolerance. Real-world training for your immune system.",
    icon: Zap
  }
];

export default function Science() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={containerRef} className="bg-[#0B0F0E] py-24 md:py-40 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* CONTENT: THE LOGIC */}
          <div className="flex-1 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-primary-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Methodology</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-12 leading-tight">
                Root-cause resolution. <br/>
                <span className="text-gray-500">Not symptom management.</span>
              </h2>

              <div className="space-y-12 relative pl-8">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-px bg-white/10" />
                
                {steps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    {/* Bullet */}
                    <div className="absolute -left-[40px] top-1.5 w-4 h-4 rounded-full bg-dark border-4 border-primary-accent shadow-[0_0_15px_rgba(0,255,150,0.4)]" />
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <step.icon className="text-primary-accent" size={20} />
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{step.title}</h3>
                      </div>
                      <p className="text-primary-accent/80 font-bold text-xs uppercase tracking-widest">{step.label}</p>
                      <p className="text-gray-400 text-lg leading-relaxed max-w-md">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* VIDEO: THE SCIENCE */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-white/5 rounded-3xl pointer-events-none" />
              
              <motion.div 
                style={{ y: videoY }}
                className="relative w-full aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              >
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                  >
                    <source src="/_INFLAMMATION%20VIDEO%20(Scientific%20Section).mp4" type="video/mp4" />
                  </video>
                </motion.div>
                
                {/* Scientific HUD Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-10 left-10 flex items-center gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-accent animate-pulse shadow-[0_0_10px_#1A5F3A]" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">Scientific Immune Spectrum</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
