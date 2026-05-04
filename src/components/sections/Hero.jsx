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
          preload="none"
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

      {/* 📝 CONTENT - Strict Left Alignment */}
      <div className="relative z-[2] container-custom pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Content Column */}
          <div className="w-full lg:max-w-[600px] text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-bold font-heading leading-[0.95] tracking-tighter mb-8"
            >
              We find the <br/>
              <span className="text-primary">root cause.</span> <br/>
              We fix it for good.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-white/80 font-medium mb-12 max-w-[520px] mx-auto lg:mx-0 leading-relaxed"
            >
              Root-cause diagnosis for chronic allergy, asthma, and immune disorders.
            </motion.p>

            {/* CTA STACK */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center lg:justify-start"
            >
              <Link
                href="/#contact"
                className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-dark hover:scale-105 transition-all shadow-2xl shadow-primary/20 w-full sm:w-auto text-center"
              >
                Start Root-Cause Diagnosis
              </Link>
              <Link
                href="https://wa.me/918074368748"
                target="_blank"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-3"
              >
                <MessageCircle size={22} className="text-[#25D366]" />
                WhatsApp Specialist
              </Link>
            </motion.div>

            {/* TRUST STACK (Under CTA) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[11px] font-black uppercase tracking-[0.2em] text-white/40"
            >
              <span className="flex items-center gap-2">
                <span className="text-primary">✔</span> 15 min callback
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary">✔</span> Specialist review
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary">✔</span> No waiting
              </span>
            </motion.div>
          </div>

          {/* Right Visual Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[450px] h-[550px] rounded-[4rem] overflow-hidden border-2 border-white/10 shadow-2xl ring-1 ring-white/5">
              <Image 
                src="/images/dr-nageswar.webp"
                alt="Dr. Vyakarnam Nageshwar"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
                 <p className="text-3xl font-black text-white">50k+</p>
                 <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-1">Patients Treated Globally</p>
              </div>
            </div>
            {/* Decorative blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-accent/10 rounded-full blur-[100px] -z-10" />
          </motion.div>

        </div>
      </div>

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
