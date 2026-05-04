"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Phase 1 (Static - Above the fold)
import Hero from "@/components/sections/Hero";


// Loading Skeleton Component
const Skeleton = ({ height = "600px" }) => (
  <div 
    style={{ minHeight: height }} 
    className="w-full bg-slate-50 animate-pulse flex items-center justify-center"
  >
    <div className="w-20 h-20 border-4 border-primary/10 border-t-primary rounded-full animate-spin" />
  </div>
);

// Phase 2 (Dynamic)
const Comparison = dynamic(() => import("@/components/sections/Comparison"), { 
  ssr: true,
  loading: () => <Skeleton height="800px" />
});
const SLITScience = dynamic(() => import("@/components/sections/SLITScience"), { 
  ssr: true,
  loading: () => <Skeleton height="600px" />
});

const Pathways = dynamic(() => import("@/components/sections/Pathways"), { 
  ssr: false,
  loading: () => <Skeleton height="700px" />
});
const Science = dynamic(() => import("@/components/sections/Science"), { 
  ssr: true,
  loading: () => <Skeleton height="600px" />
});

// Phase 3 (Dynamic)
const Authority = dynamic(() => import("@/components/sections/Authority"), { 
  ssr: true,
  loading: () => <Skeleton height="500px" />
});
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { 
  ssr: true,
  loading: () => <Skeleton height="600px" />
});
const BookingForm = dynamic(() => import("@/components/sections/BookingForm"), { 
  ssr: true,
  loading: () => <Skeleton height="600px" />
});
const DiagnosticQuiz = dynamic(() => import("@/components/sections/DiagnosticQuiz"), { ssr: false });
const LocationSection = dynamic(() => import("@/components/home/LocationSection"), { 
  ssr: true,
  loading: () => <Skeleton height="500px" />
});

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

      
      <DiagnosticQuiz isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
      
      {/* PHASE 2: THE LOGIC LAYER */}
      <Comparison />
      <SLITScience />

      <Pathways />
      <Science />
      
      {/* PHASE 3: THE AUTHORITY LAYER */}
      <Authority />
      <div data-header-theme="light">
        <Testimonials />
      </div>
      <BookingForm onStartQuiz={() => setIsQuizOpen(true)} />
      <div data-header-theme="light">
        <LocationSection />
      </div>
      <Footer />
      <StickyBottomBar />
    </motion.main>
  );
}
