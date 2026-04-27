"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Phase 1
import Hero from "@/components/sections/Hero";
import GuidedEntry from "@/components/sections/GuidedEntry";

// Phase 2
import Comparison from "@/components/sections/Comparison";
import Pathways from "@/components/sections/Pathways";

// Existing components (Phase 3 & Legacy)
import InflammationJourney from "@/components/home/InflammationJourney";
import DoctorAnchor from "@/components/home/DoctorAnchor";
import Testimonials from "@/components/home/Testimonials";
import ProofSection from "@/components/home/ProofSection";
import FoundationSection from "@/components/home/FoundationSection";
import ContactForm from "@/components/home/ContactForm";
import LocationSection from "@/components/home/LocationSection";
import StickyBottomBar from "@/components/layout/StickyBottomBar";

export default function Home() {
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
      <GuidedEntry />
      
      {/* PHASE 2: THE LOGIC LAYER */}
      <Comparison />
      <Pathways />
      
      {/* 
        Below are the legacy components.
        These will be progressively replaced by Phase 3 (Authority, BookingForm) components.
      */}
      <InflammationJourney />
      <DoctorAnchor />
      <Testimonials />
      <ProofSection />
      <FoundationSection />
      <ContactForm />
      <LocationSection />
      
      <Footer />
      <StickyBottomBar />
    </motion.main>
  );
}
