"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-dark flex items-center">
      
      {/* Video Background */}
      <motion.div
        animate={{ scale: [1, 1.05] }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero.png" // Mobile fallback/poster
          className="w-full h-full object-cover object-center"
        >
          <source src="/_HERO%20VIDEO%20(Breathing%20Cinematic).mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Critical Overlay */}
      {/* Desktop: 0.55 to 0.15 Left->Right, Mobile: flat 0.35 or reduced gradient */}
      <div className="absolute inset-0 bg-black/35 md:bg-gradient-to-r md:from-[rgba(0,0,0,0.55)] md:to-[rgba(0,0,0,0.15)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[600px] pl-[24px] md:pl-[80px] text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-semibold leading-[1.1] text-white"
        >
          You don&apos;t need more treatment. <br />
          <span className="text-primary-accent">You need the right diagnosis.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-gray-200 text-lg md:text-xl font-medium"
        >
          Root-cause care for allergy, asthma and immune disorders.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link href="#contact" className="bg-primary text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 ease-out hover:bg-[#154d2e] hover:-translate-y-1 text-center">
            <span className="block text-lg">Book Consultation</span>
            <span className="block text-xs text-white/70 font-normal mt-0.5">(15 min callback)</span>
          </Link>

          <Link href="tel:+918074368748" className="border border-white/30 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 ease-out hover:bg-white/10 hover:-translate-y-1 flex items-center justify-center">
            Call Now
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
