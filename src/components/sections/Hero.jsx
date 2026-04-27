"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    const button = buttonRef.current;
    if (!button) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    button.addEventListener("mousemove", onMouseMove);
    button.addEventListener("mouseleave", onMouseLeave);

    return () => {
      button.removeEventListener("mousemove", onMouseMove);
      button.removeEventListener("mouseleave", onMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <>
      <section ref={containerRef} className="relative h-[100vh] w-full overflow-hidden bg-dark flex items-center">
        {/* Background Video with subtle zoom animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [1, 1.05] }}
          transition={{ 
            opacity: { duration: 2.5, ease: "easeOut" },
            scale: { duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center opacity-80"
          >
            <source src="/_HERO%20VIDEO%20(Breathing%20Cinematic).mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Cinematic Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-left mt-16">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0.01, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[1] md:leading-[0.9] text-white tracking-tight font-heading">
                We find what&apos;s <br className="hidden sm:block" />
                <span className="text-primary-accent italic font-light">causing it.</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 md:mt-10 text-slate-300 text-lg sm:text-2xl md:text-4xl font-medium max-w-3xl leading-snug md:leading-tight"
            >
              One of the few specialized institutes globally. <br className="hidden md:block" />
              Addressing the root cause for patients aged 2 to 80.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 flex flex-col gap-10"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  href="/#contact" 
                  ref={buttonRef}
                  className="bg-primary text-white px-12 py-6 rounded-full font-black uppercase tracking-widest transition-all duration-500 ease-out hover:bg-primary-accent hover:text-black text-center shadow-2xl shadow-primary/30 group relative overflow-hidden"
                >
                  <span className="relative z-10 text-lg">Book Evaluation</span>
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-10 text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
                {[
                  "15 min callback",
                  "Direct specialist review",
                  "No waiting"
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-accent shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scarcity Section - Refined Claude Design */}
      <section className="bg-white py-32 md:py-48 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(26,95,58,0.02)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">The Specialist Gap</span>
              <h2 className="text-5xl md:text-7xl font-semibold text-slate-900 mb-8 leading-[1.05] tracking-tight">
                Millions suffer. <br/>
                <span className="text-slate-300">Very few are diagnosed.</span>
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium">
                The standard healthcare loop is designed for temporary relief, not resolution. This systemic gap leaves millions of patients trapped in a cycle of failed treatments and recurring symptoms.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-6 h-full"
            >
              <div className="bg-slate-50 rounded-3xl p-10 flex flex-col justify-center items-center text-center border border-slate-100 group hover:border-slate-200 transition-colors">
                <span className="block text-5xl md:text-6xl font-bold text-slate-900 mb-4 opacity-40 group-hover:opacity-100 transition-opacity">35Cr+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">Patients</span>
              </div>

              <div className="bg-primary rounded-3xl p-10 flex flex-col justify-center items-center text-center shadow-2xl shadow-primary/20 group hover:scale-[1.02] transition-transform">
                <span className="block text-5xl md:text-6xl font-bold text-white mb-4">Under 100</span>
                <span className="text-xs font-bold text-white/60 uppercase tracking-[0.3em]">Specialists</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
