"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
        poster="/images/best-allergy-hospital.webp"
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

      {/* Mobile-specific control layer */}
      <div className="block md:hidden absolute inset-0 z-[0]" />

      {/* 🎨 OVERLAY - Readable Left, Clear Right */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.12) 70%, rgba(0,0,0,0) 100%)"
        }}
      />

      {/* 📝 CONTENT */}
      <div className="relative z-[2] max-w-[600px] w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[32px] md:text-[64px] font-bold leading-[1.15] md:leading-[1.1] tracking-tight font-heading"
        >
          Find the root cause.<br />
          Fix it for good.
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

        {/* 🔘 BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-[18px] md:mt-10"
        >
          <Link
            href="/#contact"
            className="block md:inline-block w-full md:w-auto bg-[#1f7a4c] text-white px-12 py-[16px] md:py-5 rounded-full font-semibold transition-all duration-300 hover:bg-[#155d3a] hover:scale-105 active:scale-95 text-center shadow-xl"
          >
            Book Evaluation
          </Link>
        </motion.div>

        {/* 📍 POINTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-[14px] md:mt-8 flex flex-col gap-[6px] md:gap-3 text-[12px] md:text-[14px] font-medium text-white/60"
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
      </div>
    </section>
  );
}
