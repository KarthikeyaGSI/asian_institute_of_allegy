"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring as useMotionSpring } from "framer-motion";
import { X, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

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
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", condition: "General Inquiry" });

  const { scrollYProgress } = useScroll();
  const scaleX = useMotionSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check localStorage for AIA popup suppression
    const lastSeen = localStorage.getItem('aia_popup_seen');
    const now = new Date().getTime();
    
    // Show again only after 24 hours
    if (!lastSeen || now - parseInt(lastSeen) > 24 * 60 * 60 * 1000) {
      setHasShownPopup(false);
    }
  }, []);

  const triggerPopup = () => {
    setIsPopupOpen(true);
    setHasShownPopup(true);
    localStorage.setItem('aia_popup_seen', new Date().getTime().toString());
  };

  useEffect(() => {
    const handleScroll = () => {
      // Trigger popup at 40% scroll
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 40 && !hasShownPopup) {
        triggerPopup();
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShownPopup]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        triggerPopup();
      }
    }, 9000);
    return () => clearTimeout(timer);
  }, [hasShownPopup]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "3c43e0ba-47fb-424c-9103-345682cc4a5a",
          subject: `New AIA Lead from Popup: ${formData.name}`,
          from_name: "Asian Institute of Allergy",
          name: formData.name,
          phone: formData.phone,
          condition: formData.condition,
          message: `Lead from Asian Institute Popup.\nName: ${formData.name}\nPhone: ${formData.phone}\nCondition: ${formData.condition}`
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => setIsPopupOpen(false), 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      window.location.href = `https://wa.me/918074368748?text=${encodeURIComponent(`Hi, I'm ${formData.name}. I'd like to book an evaluation.`)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

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
      
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      
      {/* PHASE 1: THE TRUST LAYER */}
      <Hero />

      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative max-w-lg w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>
              
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8 relative z-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 font-heading tracking-tight">Root-Cause Evaluation</h3>
                    <p className="text-slate-500 text-sm md:text-base font-medium">Join 50,000+ patients who found permanent relief.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div>
                      <input
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Full Name"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone Number"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-[#154d2e] transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70"
                    >
                      {isSubmitting ? "Processing..." : "Get Started Now"} <Zap size={18} fill="currentColor" />
                    </button>
                    <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-4">
                      Fastest Path to Recovery • No Waiting List
                    </p>
                  </form>
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    <ShieldCheck size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received.</h3>
                  <p className="text-slate-600 font-medium">Our clinical coordinator will call you within 24 hours.</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
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
