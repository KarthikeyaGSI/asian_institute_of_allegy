"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, CheckCircle2, ChevronDown } from "lucide-react";
import Magnetic from "@/components/effects/Magnetic";
import Antigravity from "@/components/effects/Antigravity";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const { scrollY } = useScroll();

  // 🎭 SCROLL TRANSFORMATIONS
  const videoScale = useTransform(scrollY, [0, 1000], [1.05, 1.3]);
  const videoOpacity = useTransform(scrollY, [0, 800], [1, 0.4]);
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const indicatorOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-dark overflow-hidden flex items-center text-white"
    >

      {/* 🎥 VIDEO - Cinematic Parallax Background */}
      <motion.div 
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        >
          <source src="/_HERO%20VIDEO%20(Breathing%20Cinematic).mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* 🌌 ANTIGRAVITY PARTICLES */}
      <Antigravity particleColor="#1A5F3A" count={isMobile ? 30 : 60} />

      {/* 🎨 OVERLAY - Precise Gradient Specs */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: isMobile 
            ? "linear-gradient(to bottom, rgba(5,7,5,0.85) 0%, rgba(5,7,5,0.4) 100%)" 
            : "linear-gradient(90deg, rgba(5,7,5,0.9) 0%, rgba(5,7,5,0.6) 45%, rgba(5,7,5,0.2) 100%)"
        }}
      />

      {/* 📝 CONTENT - Strict Left Alignment & Scroll Reveal */}
      <motion.div 
        style={{ 
          opacity: contentOpacity,
          y: contentY // Scroll parallax
        }}
        className="relative z-[2] w-full pt-[110px] lg:pt-[120px] pb-24 lg:pb-0 px-5 lg:pl-[100px] lg:pr-[40px]"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Core Message */}
          <div className="w-full lg:flex-1 flex flex-col items-start text-left"> 
            <div className="w-full">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[32px] sm:text-[40px] lg:text-[72px] font-bold leading-[1.1] tracking-tight font-heading text-left"
              >
                We find the <span className="text-primary italic">root cause</span>.<br />
                We fix it for good.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 lg:mt-8 text-[16px] lg:text-[20px] leading-relaxed text-white/90 font-medium text-left max-w-[500px]"
              >
                The world's specialized institute focused on permanent root-cause diagnosis. 
                Personalized clinical care for all ages.
              </motion.p>
            </div>

            {/* 🔘 BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mt-10 w-full lg:w-auto"
            >
              <Magnetic>
                <Link
                  href="/#contact"
                  className="bg-primary text-white w-full sm:w-auto px-10 lg:px-12 h-[56px] lg:h-auto lg:py-5 rounded-[12px] lg:rounded-full font-bold transition-all duration-300 hover:bg-primary-dark hover:scale-105 active:scale-95 text-center shadow-2xl flex items-center justify-center gap-3"
                >
                  Start Root-Cause Diagnosis
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="https://wa.me/918074368748?text=Hi, I'd like to start my root-cause evaluation."
                  target="_blank"
                  aria-label="Contact Specialist on WhatsApp"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white w-full sm:w-auto px-10 lg:px-12 h-[56px] lg:h-auto lg:py-5 rounded-[12px] lg:rounded-full font-bold transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-3"
                >
                  <MessageCircle size={22} className="text-[#25D366]" />
                  WhatsApp Specialist
                </Link>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-6 mt-12 text-[11px] lg:text-[13px] font-bold text-white/50 uppercase tracking-widest"
            >
              <span className="flex items-center gap-3">
                <span className="text-primary text-xl leading-none">•</span> Specialist review
              </span>
              <span className="flex items-center gap-3">
                <span className="text-primary text-xl leading-none">•</span> PRECISION DIAGNOSIS
              </span>
            </motion.div>
          </div>

          {/* Right Column: Trust Indicators */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-8 lg:gap-12 mt-12 lg:mt-0">
            {/* 📍 PATIENTS BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="flex items-center gap-6 bg-white/5 border border-white/10 px-10 py-6 rounded-[2rem] backdrop-blur-xl w-full lg:w-[320px] clinical-pulse"
            >
              <div className="text-primary">
                <CheckCircle2 size={40} />
              </div>
              <div>
                <p className="text-4xl font-black text-white leading-none">50k+</p>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 mt-2">Patients Treated Globally</p>
              </div>
            </motion.div>

            {/* DOCTOR TRUST PORTRAIT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 bg-white/5 p-6 lg:p-8 rounded-[2rem] lg:rounded-[3rem] border border-white/10 backdrop-blur-md w-full lg:w-[320px] relative overflow-hidden group scanning-line"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-primary shadow-2xl shrink-0">
                <Image 
                  src="/images/dr-nageswar.webp"
                  alt="Dr. Vyakarnam Nageshwar - Chief Immunologist"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  sizes="100px"
                />
              </div>
              <div className="text-left">
                <p className="text-lg lg:text-xl font-bold text-white tracking-tight">Dr. Vyakarnam</p>
                <p className="text-[10px] lg:text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mt-1">Chief Immunologist</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 🖱️ INTERACTIVE SCROLL INDICATOR */}
      <motion.button
        onClick={scrollToNext}
        style={{ opacity: indicatorOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-primary transition-colors">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-bottom from-primary to-transparent" />
        <ChevronDown size={20} className="text-primary mt-[-4px]" />
      </motion.button>

      {/* CERTIFICATION LOGO STRIP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-8 flex items-center justify-center md:justify-between border-t border-white/10 pt-8"
      >
        <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mr-4 md:mr-8 hidden sm:block">Affiliations</div>
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
           <span className="text-white/60 font-bold tracking-tighter text-sm md:text-lg hover:text-primary hover:drop-shadow-[0_0_10px_rgba(45,90,39,0.8)] transition-all duration-300 cursor-default uppercase">PATEL CHEST</span>
           <span className="text-white/60 font-bold tracking-tighter text-sm md:text-lg hover:text-primary hover:drop-shadow-[0_0_10px_rgba(45,90,39,0.8)] transition-all duration-300 cursor-default uppercase">CVR NEWS LIVE</span>
           <span className="text-white/60 font-bold tracking-tighter text-sm md:text-lg hover:text-primary hover:drop-shadow-[0_0_10px_rgba(45,90,39,0.8)] transition-all duration-300 cursor-default uppercase">WAO WORLDWIDE</span>
        </div>
      </motion.div>
    </section>
  );
}
