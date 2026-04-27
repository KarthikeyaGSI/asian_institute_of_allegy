"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative h-[100vh] w-full overflow-hidden bg-dark flex items-center">
        {/* Background Video with subtle zoom animation */}
        <motion.div 
          animate={{ scale: [1, 1.05] }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center"
            poster="/images/best-allergy-hospital.webp"
          >
            <source src="/_HERO%20VIDEO%20(Breathing%20Cinematic).mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Cinematic Dark Gradient Overlay (35%) */}
        <div className="absolute inset-0 bg-black/35 md:bg-gradient-to-r md:from-[rgba(0,0,0,0.55)] md:to-[rgba(0,0,0,0.15)] pointer-events-none" />

        {/* Content - Positioned on the left as requested */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-left mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-white max-w-3xl"
          >
            We find what&apos;s causing it. <br />
            <span className="text-primary-accent">Then we treat it properly.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-gray-200 text-lg md:text-2xl font-medium max-w-2xl"
          >
            Root-cause care for allergy, asthma, and immune disorders. Stop running between hospitals.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="bg-primary text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 ease-out hover:bg-[#154d2e] hover:-translate-y-1 text-center shadow-lg group">
                <span className="block text-lg">Book Evaluation</span>
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-6 text-white/80 text-sm font-medium">
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary-accent">✔</div>
                15 min callback
              </span>
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary-accent">✔</div>
                Direct specialist review
              </span>
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary-accent">✔</div>
                No waiting
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="bg-white py-24 md:py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                Millions suffer in silence. <br/>
                <span className="text-slate-400">Very few ever get the right diagnosis.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                The standard healthcare loop is designed for temporary relief, not resolution. This systemic gap leaves millions of patients trapped in a cycle of failed treatments and recurring symptoms.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4 h-full"
            >
              {/* Left Side: Faded Patients */}
              <div className="bg-slate-50 rounded-3xl p-8 flex flex-col justify-center items-center text-center border border-slate-100 opacity-60">
                <div className="mb-4 flex flex-wrap justify-center gap-1 opacity-20">
                   {[...Array(12)].map((_, i) => (
                     <div key={i} className="w-4 h-4 rounded-full bg-slate-900" />
                   ))}
                </div>
                <span className="block text-4xl md:text-5xl font-bold text-slate-900 mb-2">35Cr+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Patients</span>
              </div>

              {/* Right Side: Bold Green Specialists */}
              <div className="bg-primary rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-2xl shadow-primary/20">
                <div className="mb-4 flex gap-1">
                   <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>
                <span className="block text-4xl md:text-5xl font-bold text-white mb-2">Under 100</span>
                <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Specialists</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
