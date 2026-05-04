"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Zap, Search, Activity } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Smooth reveal for content
    gsap.from(".step-item", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".step-item",
        start: "top 80%",
      }
    });

    // Parallax for video
    gsap.to(videoRef.current, {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <section id="research" ref={containerRef} className="bg-[#0B0F0E] py-24 md:py-40 overflow-hidden text-white relative scroll-mt-24">
      {/* Background ambient glow - Claude style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* CONTENT: THE LOGIC */}
          <div ref={contentRef} className="flex-1 order-2 lg:order-1">
            <div className="max-w-xl">
              <span className="text-primary-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Methodology</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-12 leading-[1.1] tracking-tight">
                Root-cause resolution. <br/>
                <span className="text-slate-500">Not symptom management.</span>
              </h2>

              <div className="space-y-16 relative pl-8">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gradient-to-b from-primary-accent/50 via-primary-accent/10 to-transparent" />
                
                {steps.map((step, i) => (
                  <div key={i} className="step-item relative z-10 group glass-card">
                    {/* Bullet - Premium glow */}
                    <div className="absolute -left-[40px] top-1.5 w-4 h-4 rounded-full bg-dark border-4 border-primary-accent shadow-[0_0_20px_rgba(0,255,150,0.4)] group-hover:scale-125 transition-transform duration-300" />
                    
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary-accent/10 text-primary-accent">
                          <step.icon size={20} />
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">{step.title}</h3>
                      </div>
                      <p className="text-primary-accent/80 font-bold text-xs uppercase tracking-widest">{step.label}</p>
                      <p className="text-slate-300 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* VIDEO: THE SCIENCE */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative">
              {/* Glass Frame - Claude inspired */}
              <div className="absolute -inset-6 border border-white/5 rounded-3xl backdrop-blur-sm pointer-events-none" />
              
              <div 
                ref={videoRef}
                className="relative w-full aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover opacity-70 transition-opacity duration-1000 hover:opacity-90"
                >
                  <source src="/_INFLAMMATION%20VIDEO%20(Scientific%20Section).mp4" type="video/mp4" />
                </video>
                
                {/* Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex flex-col gap-3 md:gap-4">
                   <div className="flex items-center gap-3">
                      <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-primary-accent animate-pulse" />
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-white/40">Inflammatory Spectrum</span>
                   </div>
                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-black uppercase tracking-tighter text-white/30 border-t border-white/5 pt-4">
                      <span className="text-primary-accent">Allergic</span>
                      <span>Autoimmune</span>
                      <span>Metabolic</span>
                      <span>Metastatic</span>
                   </div>
                   <p className="text-xs md:text-sm font-medium text-white/70 leading-relaxed line-clamp-3 md:line-clamp-none">
                      "Inflammatory disease exists on a continuum. We evaluate and differentiate these complex pathways at Dr. Vyakarnam's desk."
                   </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
