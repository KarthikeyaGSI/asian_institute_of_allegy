"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Phase 1 (Static - Above the fold)
import Hero from "@/components/sections/Hero";
import GuidedEntry from "@/components/sections/GuidedEntry";

// Phase 2 (Dynamic)
const Comparison = dynamic(() => import("@/components/sections/Comparison"), { ssr: true });
const SLITScience = dynamic(() => import("@/components/sections/SLITScience"), { ssr: true });
const ResolutionPath = dynamic(() => import("@/components/sections/ResolutionPath"), { ssr: true });
const Pathways = dynamic(() => import("@/components/sections/Pathways"), { ssr: false }); // GSAP needs client side
const Science = dynamic(() => import("@/components/sections/Science"), { ssr: true });

// Phase 3 (Dynamic)
const Authority = dynamic(() => import("@/components/sections/Authority"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: true });
const BookingForm = dynamic(() => import("@/components/sections/BookingForm"), { ssr: true });
const DiagnosticQuiz = dynamic(() => import("@/components/sections/DiagnosticQuiz"), { ssr: false });
const LocationSection = dynamic(() => import("@/components/home/LocationSection"), { ssr: true });

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBottomBar from "@/components/layout/StickyBottomBar";

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsQuizOpen(true);
    window.addEventListener("open-quiz", handleOpen);
    return () => window.removeEventListener("open-quiz", handleOpen);
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen bg-white text-gray-900 selection:bg-primary selection:text-white overflow-x-hidden"
    >
      <Navbar />
      
      {/* PHASE 1: THE TRUST LAYER */}
      <Hero />
      <GuidedEntry onStartQuiz={() => setIsQuizOpen(true)} />
      
      <DiagnosticQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      
      {/* PHASE 2: THE LOGIC LAYER */}
      <Comparison />
      <SLITScience />
      <ResolutionPath />
      <Pathways />
      <Science />
      
      {/* PHASE 3: THE AUTHORITY LAYER */}
      <Authority />
      <Testimonials />
      <BookingForm onStartQuiz={() => setIsQuizOpen(true)} />
      <LocationSection />
      <Footer />
      <StickyBottomBar />
    </motion.main>
  );
}
