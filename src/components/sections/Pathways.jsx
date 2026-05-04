"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, Wind, Zap } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const pathways = [
  {
    title: "Respiratory",
    icon: Wind,
    trigger: "Dust, Pollen, Weather",
    cause: "Immune over-reaction in lungs",
    fix: "PFT Diagnosis + SLIT Training",
    desc: "Addressing asthma, rhinitis, and chronic obstructive patterns at the source."
  },
  {
    title: "Skin & Dermal",
    icon: ShieldCheck,
    trigger: "Contact, Food, Stress",
    cause: "Dermal barrier dysfunction",
    fix: "Patch Testing + Immunotherapy",
    desc: "Resolution for urticaria, eczema, and long-standing inflammatory rashes."
  },
  {
    title: "ENT / Sinus",
    icon: Activity,
    trigger: "Fragrance, Cold, Smog",
    cause: "Nasal mucosa inflammation",
    fix: "Endoscopy + Targeted Treatment",
    desc: "Clearing the pathways to breathe naturally without constant medication."
  },
  {
    title: "Systemic Autoimmune",
    icon: Zap,
    trigger: "Multiple / Unknown",
    cause: "Deep systemic dysfunction",
    fix: "Advanced Clinical Modulation",
    desc: "Treating the most complex, treatment-resistant immunological challenges."
  },
];

export default function Pathways() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const sections = gsap.utils.toArray(".pathway-card");
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          start: "top top",
          end: () => `+=${sections.length * 100}%`,
          pinSpacing: true,
        }
      });
    });

    return () => mm.revert();
  }, { scope: triggerRef });

  return (
    <section ref={triggerRef} className="bg-slate-950 py-24 md:py-0 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1a5f3a15_0%,transparent_50%)]" />
      
      <div className="flex flex-col md:flex-row h-auto md:h-screen items-center">
        {/* Intro Slide */}
        <div className="pathway-card min-w-full md:h-full flex items-center px-6 md:px-24 mb-24 md:mb-0">
          <div className="max-w-4xl">
            <span className="text-primary-accent font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Diagnostic Compass</span>
            <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter font-heading">
              Choose your <br/>
              <span className="text-gray-500 italic">recovery path.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-2xl font-medium max-w-2xl leading-relaxed">
              We identify your specific triggers and treat the underlying immune dysfunction, not just the temporary symptoms.
            </p>
            <div className="mt-12 hidden md:flex items-center gap-4 text-white/20">
               <span className="text-xs font-bold uppercase tracking-widest">Scroll to explore</span>
               <div className="w-12 h-px bg-white/20" />
               <ArrowRight size={16} />
            </div>
          </div>
        </div>

        {/* Dynamic Cards */}
        {pathways.map((path, i) => (
          <div key={i} className="pathway-card min-w-full md:min-w-[70vw] md:h-full flex items-center px-6 md:px-12 mb-12 md:mb-0">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] md:rounded-[3.rem] p-8 md:p-16 w-full max-w-4xl backdrop-blur-sm group hover:border-primary-accent/30 transition-colors duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-[2rem] bg-white/5 text-primary-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <path.icon size={40} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-heading">{path.title}</h3>
                </div>

              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div className="space-y-8">
                  <div>
                     <span className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Condition</span>
                     <p className="text-white font-semibold text-2xl">{path.title}</p>
                  </div>
                  <div>
                     <span className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Trigger</span>
                     <p className="text-white font-semibold text-2xl">{path.trigger}</p>
                  </div>
                </div>
                
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 space-y-6 flex flex-col justify-center">
                  <div>
                    <span className="block text-[10px] font-bold text-primary-accent uppercase tracking-widest mb-3">Fix</span>
                    <p className="text-white font-bold text-2xl leading-tight">{path.fix}</p>
                  </div>
                </div>
              </div>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center w-full bg-primary-accent text-black py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-primary-accent/10 transition-all active:scale-95"
              >
                [ Start recovery plan ]
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

