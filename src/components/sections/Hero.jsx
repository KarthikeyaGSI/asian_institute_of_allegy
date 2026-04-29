"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Trigger entry animation
    setIsLoaded(true);

    // Initial check and scroll fade effect
    const handleCheck = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleCheck();
    window.addEventListener("resize", handleCheck);
    window.addEventListener("scroll", handleCheck);
    return () => {
      window.removeEventListener("resize", handleCheck);
      window.removeEventListener("scroll", handleCheck);
    };
  }, []);

  return (
    <section 
      className={`relative h-[100dvh] w-full overflow-hidden flex items-end px-6 pt-32 pb-12 md:px-20 text-white transition-all duration-700 ease-in-out ${
        isScrolled ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
      }`}
    >
      {/* 🎥 VIDEO - Centered and Shifted */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute top-1/2 left-1/2 
          w-full 
          h-full 
          object-cover 
          -translate-x-1/2 -translate-y-1/2 
          z-0 
          transition-transform duration-[12000ms] linear 
          ${isLoaded ? "scale-[1.15]" : "scale-100"}
        `}
        style={{
          objectPosition: "center"
        }}
      >
        <source src="/_HERO%20VIDEO%20(Breathing%20Cinematic).mp4" type="video/mp4" />
        <track kind="captions" src="" label="English" />
      </video>

      {/* 🎨 OVERLAY - Readable Left, Clear Right */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: isMobile 
            ? "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)" 
            : "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.12) 70%, rgba(0,0,0,0) 100%)"
        }}
      />

        {/* 📝 CONTENT */}
        <div className="relative z-[2] max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-end gap-12">
          
          {/* Main Copy (8 columns) */}
          <div className="lg:col-span-8 w-full space-y-10 md:space-y-12">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[36px] sm:text-[48px] md:text-[68px] font-bold leading-[1.1] tracking-tight font-heading"
              >
                We find the <span className="text-[#A3E635]">root cause</span>.<br />
                We fix it for good.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="mt-6 md:mt-8 text-[17px] md:text-[21px] text-white/90 font-medium leading-relaxed max-w-[520px]"
              >
                India's specialized institute focused on root-cause diagnosis.
                Personalized care for patients aged 2 to 80.
              </motion.p>
            </div>

            {/* 🔘 BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/#contact"
                className="bg-primary text-white px-10 md:px-12 py-5 md:py-4 rounded-full font-bold transition-all duration-300 hover:bg-primary-dark hover:scale-105 active:scale-95 text-center shadow-xl flex items-center justify-center gap-3"
              >
                Start Root-Cause Diagnosis
              </Link>
              <Link
                href="https://wa.me/918074368748?text=Hi, I'd like to start my root-cause evaluation."
                target="_blank"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 md:px-12 py-5 md:py-4 rounded-full font-bold transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-3"
              >
                <MessageCircle size={22} className="text-[#25D366]" />
                WhatsApp Specialist
              </Link>
            </motion.div>

            {/* 📍 POINTS & TRUST BADGE */}
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                className="flex flex-col gap-3 text-[13px] font-bold text-white/60 uppercase tracking-widest"
              >
                <span className="flex items-center gap-3">
                  <span className="text-primary-accent text-xl leading-none">•</span> 15 min callback
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-primary-accent text-xl leading-none">•</span> Specialist review
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-primary-accent text-xl leading-none">•</span> No waiting
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="flex items-center gap-5 bg-white/5 border border-white/10 px-8 py-5 rounded-3xl backdrop-blur-xl w-fit"
              >
                <div className="text-primary-accent">
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <p className="text-3xl font-black text-white leading-none">50k+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-1.5">Patients Treated</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* DOCTOR TRUST PORTRAIT (4 columns) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="flex flex-row lg:flex-col items-center gap-5 bg-white/5 lg:bg-white/5 p-5 lg:p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md"
            >
              <div className="relative w-20 h-20 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-primary-accent shadow-2xl shrink-0">
                <Image 
                  src="/images/dr-nageswar.jpeg"
                  alt="Dr. Vyakarnam"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80px, 160px"
                />
              </div>
              <div className="text-left lg:text-center">
                <p className="text-base lg:text-lg font-bold text-white tracking-tight">Dr. Vyakarnam</p>
                <p className="text-[10px] lg:text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mt-1">Chief Immunologist</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CERTIFICATION LOGO STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-7xl px-8 hidden md:flex items-center justify-between border-t border-white/5 pt-8"
        >
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mr-8">Affiliations</div>
          <div className="flex items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <span className="text-white font-bold tracking-tighter text-lg">CMC VELLORE</span>
             <span className="text-white font-bold tracking-tighter text-lg">PATEL CHEST</span>
             <span className="text-white font-bold tracking-tighter text-lg">VATICAN RECOGNITION</span>
             <span className="text-white font-bold tracking-tighter text-lg">WAO WORLDWIDE</span>
          </div>
        </motion.div>
    </section>
  );
}
