"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Phase 1
import Hero from "@/components/sections/Hero";
import GuidedEntry from "@/components/sections/GuidedEntry";
import DiagnosticQuiz from "@/components/sections/DiagnosticQuiz";
import SLITScience from "@/components/sections/SLITScience";
import ResolutionPath from "@/components/sections/ResolutionPath";
import { useState } from "react";

// Phase 2
import Comparison from "@/components/sections/Comparison";
import Pathways from "@/components/sections/Pathways";
import Science from "@/components/sections/Science";

// Phase 3
import Authority from "@/components/sections/Authority";
import Testimonials from "@/components/sections/Testimonials";
import BookingForm from "@/components/sections/BookingForm";

import StickyBottomBar from "@/components/layout/StickyBottomBar";

export default function Home() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

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
      
      <Footer />
      <StickyBottomBar />
    </motion.main>
  );
}
