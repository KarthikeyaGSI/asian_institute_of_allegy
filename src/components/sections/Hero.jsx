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
      className={`relative h-screen w-full overflow-hidden flex items-end px-[20px] pt-[24px] pb-[32px] md:px-[80px] text-white transition-all duration-700 ease-in-out ${
        isScrolled ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
      }`}
    >
      {/* 🎥 VIDEO - Centered and Shifted */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute top-1/2 left-1/2 
          w-full 
          h-full 
          object-cover 
          -translate-x-1/2 -translate-y-1/2 
          z-0 
          transition-transform duration-[12000ms] linear 
          ${isLoaded ? "scale-[1.05]" : "scale-100"}
        `}
        style={{
          objectPosition: isMobile ? "55% center" : "center"
        }}
      >
        <source src="/_HERO%20VIDEO%20(Breathing%20Cinematic).mp4" type="video/mp4" />
      </video>

      {/* 🎨 OVERLAY - Readable Left, Clear Right */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.12) 70%, rgba(0,0,0,0) 100%)"
        }}
      />

        {/* 📝 CONTENT */}
        <div className="relative z-[2] max-w-[800px] w-full flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[32px] md:text-[64px] font-bold leading-[1.15] md:leading-[1.1] tracking-tight font-heading"
            >
              We find the <span className="text-[#A3E635]">root cause</span>.<br />
              We fix it for good.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="mt-3 md:mt-6 text-[15px] md:text-[20px] text-white/85 font-medium leading-relaxed max-w-[480px]"
            >
              One of the few specialized institutes focused on root-cause diagnosis.
              Personalized care for patients aged 2 to 80.
            </motion.p>

            {/* 🔘 BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-[18px] md:mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/#contact"
                className="bg-[#1f7a4c] text-white px-8 md:px-10 py-[16px] md:py-4 rounded-full font-bold transition-all duration-300 hover:bg-[#155d3a] hover:scale-105 active:scale-95 text-center shadow-xl flex items-center justify-center gap-2"
              >
                Start Root-Cause Diagnosis
              </Link>
              <Link
                href="https://wa.me/918074368748?text=Hi, I'd like to start my root-cause evaluation."
                target="_blank"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 md:px-10 py-[16px] md:py-4 rounded-full font-bold transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} className="text-[#25D366]" />
                WhatsApp Specialist
              </Link>
            </motion.div>

            {/* 📍 POINTS & TRUST BADGE */}
            <div className="mt-[24px] md:mt-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                className="flex flex-col gap-[6px] md:gap-3 text-[12px] md:text-[13px] font-bold text-white/60 uppercase tracking-widest"
              >
                <span className="flex items-center gap-2">
                  <span className="text-[#1f7a4c]">●</span> 15 min callback
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[#1f7a4c]">●</span> Specialist review
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-[#1f7a4c]">●</span> No waiting
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl"
              >
                <div className="text-primary-accent">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <p className="text-xl font-black text-white leading-none">50k+</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/40 mt-1">Patients Treated</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* DOCTOR TRUST PORTRAIT (Floating Desktop, Stacks Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:flex flex-col items-center gap-4"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary-accent shadow-2xl">
              <Image 
                src="/images/dr-nageswar.jpeg"
                alt="Dr. Vyakarnam Nageshwar"
                fill
                className="object-cover object-top"
                sizes="128px"
              />
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-white tracking-tight">Dr. V. Nageshwar</p>
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mt-0.5">Chief Immunologist</p>
            </div>
          </motion.div>
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
