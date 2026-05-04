"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, CheckCircle2, ChevronDown } from "lucide-react";
import Magnetic from "@/components/effects/Magnetic";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const { scrollY } = useScroll();

  // 🎭 SCROLL TRANSFORMATIONS
  // Video scales up and fades slightly as we scroll
  const videoScale = useTransform(scrollY, [0, 1000], [1.05, 1.3]);
  const videoOpacity = useTransform(scrollY, [0, 800], [1, 0.4]);
  
  // Content lifts and fades out
  const contentY = useTransform(scrollY, [0, 500], [0, -100]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  // Indicator fades out quickly
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
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center text-white"
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
          preload="auto"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        >
          <source src="/_HERO%20VIDEO%20(Breathing%20Cinematic).mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* 🎨 OVERLAY - Precise Gradient Specs */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: isMobile 
            ? "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%)" 
            : "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.2) 100%)"
        }}
      />

      {/* 📝 CONTENT - Strict Left Alignment & Scroll Reveal */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-[2] w-full pt-[110px] lg:pt-[120px] pb-24 lg:pb-0 px-5 lg:pl-[100px] lg:pr-[40px]"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          
          {/* Text Content Block */}
          <div className="w-full max-w-full lg:max-w-[560px] flex flex-col items-start text-left"> 
            <div className="w-full">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[32px] sm:text-[36px] lg:text-[64px] font-bold leading-[1.2] lg:leading-[1.1] tracking-tight font-heading text-left"
              >
                We find the <span className="text-[#A3E635]">root cause</span>.<br />
                We fix it for good.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 lg:mt-8 text-[15px] sm:text-[16px] lg:text-[18px] leading-[24px] lg:leading-relaxed text-white/90 font-medium text-left"
              >
                India's specialized institute focused on root-cause diagnosis.
                Personalized care for patients aged 2 to 80.
              </motion.p>
            </div>

            {/* 🔘 BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-8 w-full lg:w-auto"
            >
              <Magnetic>
                <Link
                  href="/#contact"
                  className="bg-primary text-white w-full sm:w-auto px-10 lg:px-12 h-[52px] lg:h-auto lg:py-5 rounded-[12px] lg:rounded-full font-bold transition-all duration-300 hover:bg-primary-dark hover:scale-105 active:scale-95 text-center shadow-2xl flex items-center justify-center gap-3"
                >
                  Start Root-Cause Diagnosis
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="https://wa.me/918074368748?text=Hi, I'd like to start my root-cause evaluation."
                  target="_blank"
                  aria-label="Contact Specialist on WhatsApp"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white w-full sm:w-auto px-10 lg:px-12 h-[52px] lg:h-auto lg:py-5 rounded-[12px] lg:rounded-full font-bold transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-3 mt-1 sm:mt-0"
                >
                  <MessageCircle size={22} className="text-[#25D366]" />
                  WhatsApp Specialist
                </Link>
              </Magnetic>
            </motion.div>

            {/* 📍 POINTS & TRUST BADGE */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-16 mt-8 lg:mt-14 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col gap-3 lg:gap-4 text-[12px] lg:text-[13px] font-bold text-white/60 uppercase tracking-widest"
              >

                <span className="flex items-center gap-3">
                  <span className="text-primary-accent text-xl leading-none">•</span> Specialist review
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-primary-accent text-xl leading-none">•</span> ERASE CONFUSION = GET CLARITY
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                className="flex items-center gap-5 bg-white/5 border border-white/10 px-8 py-5 rounded-3xl backdrop-blur-xl w-full lg:w-fit"
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

            {/* DOCTOR TRUST PORTRAIT - Optimized for Relative Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-row lg:flex-col items-center gap-5 bg-white/5 p-5 lg:p-8 rounded-[1.5rem] lg:rounded-[2.5rem] border border-white/10 backdrop-blur-md w-full lg:w-auto mt-12 lg:mt-0 lg:ml-auto lg:self-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative w-16 h-16 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-primary-accent shadow-2xl shrink-0">
                <Image 
                  src="/images/dr-nageswar.webp"
                  alt="Dr. Vyakarnam Nageshwar - Chief Immunologist"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80px, 160px"
                />
              </div>
              <div className="text-left lg:text-center relative z-10">
                <p className="text-base lg:text-xl font-bold text-white tracking-tight">Dr. Vyakarnam</p>
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
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-primary-accent transition-colors">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-bottom from-primary-accent to-transparent" />
        <ChevronDown size={20} className="text-primary-accent mt-[-4px]" />
      </motion.button>

      {/* CERTIFICATION LOGO STRIP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-7xl px-8 hidden md:flex items-center justify-between border-t border-white/5 pt-8"
      >
        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mr-8">Affiliations</div>
        <div className="flex items-center gap-12">

           <span className="text-white/30 font-bold tracking-tighter text-lg hover:text-primary-accent hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.8)] transition-all duration-300 cursor-default uppercase">PATEL CHEST</span>
           <span className="text-white/30 font-bold tracking-tighter text-lg hover:text-primary-accent hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.8)] transition-all duration-300 cursor-default uppercase">CVR NEWS LIVE</span>

           <span className="text-white/30 font-bold tracking-tighter text-lg hover:text-primary-accent hover:drop-shadow-[0_0_10px_rgba(163,230,53,0.8)] transition-all duration-300 cursor-default uppercase">WAO WORLDWIDE</span>
        </div>
      </motion.div>
    </section>
  );
}
