"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Phase 1 (Static - Above the fold)
import Hero from "@/components/sections/Hero";


// Phase 2 (Dynamic)
const ProblemGap = dynamic(() => import("@/components/sections/ProblemGap"), { ssr: true });
const DecisionEntry = dynamic(() => import("@/components/sections/DecisionEntry"), { ssr: true });
const Comparison = dynamic(() => import("@/components/sections/Comparison"), { ssr: true });
const Science = dynamic(() => import("@/components/sections/Science"), { ssr: true });

// Phase 3 (Dynamic)
const Pathways = dynamic(() => import("@/components/sections/Pathways"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { ssr: true });
const Authority = dynamic(() => import("@/components/sections/Authority"), { ssr: true });
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
      
      {/* 1. HERO (Trust + Action) */}
      <Hero />

      {/* 2. PROBLEM → GAP (Emotional Hook) */}
      <ProblemGap />

      {/* 3. DECISION ENTRY (Conversion Engine) */}
      <DecisionEntry />

      {/* 4. CORE DIFFERENCE (Kill Confusion) */}
      <Comparison />

      {/* 5. SCIENCE (Simplified) */}
      <Science />

      {/* 6. PATHWAYS (Conversion Layer) */}
      <Pathways />

      {/* 7. PROOF (Trust) */}
      <div data-header-theme="light">
        <Testimonials />
      </div>

      {/* 8. DOCTOR (Authority) */}
      <Authority />

      {/* 9. FINAL CTA (Action) */}
      <BookingForm onStartQuiz={() => setIsQuizOpen(true)} />

      {/* 10. LOCATION + FOOTER */}
      <div data-header-theme="light">
        <LocationSection />
      </div>

      <DiagnosticQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      
      <Footer />
      <StickyBottomBar />
    </motion.main>
  );
}
