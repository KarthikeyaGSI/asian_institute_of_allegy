"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, CheckCircle2 } from "lucide-react";

export default function Authority() {
  return (
    <section id="doctor" className="bg-dark text-white py-24 md:py-32 overflow-hidden relative scroll-mt-24">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* DOCTOR ANCHOR & PROOF */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl max-w-md mx-auto lg:mx-0 ring-1 ring-white/10">
              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image 
                  src="/images/dr-nageswar.webp" 
                  alt="Dr. Vyakarnam" 
                  fill 
                  className="object-cover object-top"
                  sizes="(max-w-768px) 100vw, 400px"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <p className="text-2xl font-bold text-white mb-1 font-heading">Dr. Vyakarnam</p>
                <p className="text-gray-400 font-medium">Founder & Chief Immunologist</p>
              </div>
            </div>
            
            {/* Accreditation Badges */}

          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 space-y-10"
          >
            <div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Mission</span>
              <h2 className="text-3xl md:text-7xl font-bold leading-[1.1] text-white tracking-tight font-heading">
                A Journey Rooted in <br/>
                <span className="text-slate-500">Suffering & Hope.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-medium">
              <p>
                Dr. Vyakarnam battled childhood asthma and allergic rhinitis himself. He transformed his personal suffering into a lifelong mission—to uncover the root causes for the 40 crore Indians who suffer silently.
              </p>
              <p>
                From training at Patel Chest Institute to initiating India&apos;s first Allergen Forensic Laboratory, he has redefined allergy care through environmental aerobiology and precision diagnosis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-white/5">
              <div>
                <span className="block text-4xl md:text-5xl font-bold text-white mb-2 font-heading tracking-tight">50k+</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">International patients</span>
              </div>
              <div>
                <span className="block text-4xl md:text-5xl font-bold text-primary-accent mb-2 font-heading tracking-tight">15k+</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">SLIT Patients Treated</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GLOBAL STANDARDS (Foundation) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[3rem] backdrop-blur-sm relative overflow-hidden group"
        >
          <div className="absolute right-0 top-0 text-white/5 -translate-y-1/4 translate-x-1/4 group-hover:scale-110 transition-transform duration-1000">
            <Globe size={400} strokeWidth={1} />
          </div>
          
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-primary-accent/20 flex items-center justify-center text-primary-accent">
                <Globe size={18} />
              </div>
              <span className="text-primary-accent font-bold tracking-[0.3em] uppercase text-xs">Global Authority</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white font-heading">
              The Iconic Hope for <br/> 40 Crore Indians.
            </h3>
             <div className="flex flex-col md:flex-row gap-10 mb-12">
               <div className="flex-1">
                  <span className="block text-4xl font-bold text-white mb-2 font-heading tracking-tight">50,000+</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Complex Cases Solved</span>
               </div>
               <div className="flex-1">
                  <span className="block text-4xl font-bold text-primary-accent mb-2 font-heading tracking-tight">15k+</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">SLIT Patients Treated</span>
               </div>
            </div>

            <Link 
              href="/world-allergy-foundation"
              className="inline-flex items-center gap-2 bg-white text-dark px-8 py-4 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors"
            >
              Explore Foundation Research <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
