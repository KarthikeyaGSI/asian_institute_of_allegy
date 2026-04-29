"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Trigger entry animation
    setIsLoaded(true);

    // Scroll fade effect
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      className={`relative h-screen w-full overflow-hidden flex items-end px-[20px] pt-[24px] pb-[32px] md:px-[80px] text-white transition-all duration-700 ease-in-out ${
        isScrolled ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
      }`}
    >
      {/* 🎥 VIDEO ZOOM */}
      <motion.div
        initial={{ scale: 1, x: "-50%", y: "-50%" }}
        animate={isLoaded ? { scale: 1.05 } : {}}
        transition={{ duration: 12, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[120%] h-[120%] md:w-[110%] md:h-[110%] z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-right md:object-center opacity-100"
        >
          <source src="/_HERO%20VIDEO%20(Breathing%20Cinematic).mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* 🎨 OVERLAY */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.25) 100%)"
        }}
      />

      {/* 🏥 NAV / LOGO */}
      <header className="absolute top-[16px] left-[20px] md:left-[80px] z-[2]">
        <Link href="/">
          <Image 
            src="/images/asian institute of allergy logo.jpg" 
            alt="Asian Institute of Allergy" 
            width={140} 
            height={40}
            className="h-[28px] md:h-[32px] w-auto object-contain"
          />
        </Link>
      </header>

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
