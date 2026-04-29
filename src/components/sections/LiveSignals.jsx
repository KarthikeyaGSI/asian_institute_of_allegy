"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Circle, Users, Calendar, Clock } from "lucide-react";

export default function LiveSignals() {
  const [activeSignal, setActiveSignal] = useState(0);
  const [isClinicOpen, setIsClinicOpen] = useState(true);

  // Rotate signals every 8 seconds
  const signals = [
    {
      id: "availability",
      icon: <Circle size={10} className="fill-emerald-500 text-emerald-500 animate-pulse" />,
      text: "Dr. Vyakarnam is currently in session",
      subtext: "Next slot: Today, 4:30 PM",
      action: "Secure Slot"
    },
    {
      id: "social-proof-1",
      icon: <Users size={14} className="text-primary-accent" />,
      text: "Rahul M. from Hyderabad just booked",
      subtext: "Trigger mapping session",
      action: "Join Them"
    },
    {
      id: "callback",
      icon: <Clock size={14} className="text-primary-accent" />,
      text: "Average callback time: 14 mins",
      subtext: "Live support active",
      action: "Request Call"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % signals.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [signals.length]);

  return (
    <div className="fixed bottom-8 left-8 z-[90] hidden lg:block">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSignal}
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 20, scale: 0.95 }}
          className="bg-slate-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[320px]"
        >
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
            {signals[activeSignal].icon}
          </div>
          <div className="flex-1">
            <p className="text-white font-bold text-sm leading-tight">
              {signals[activeSignal].text}
            </p>
            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">
              {signals[activeSignal].subtext}
            </p>
          </div>
          <a 
            href="#contact"
            className="px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-[10px] font-bold text-white uppercase tracking-widest transition-colors"
          >
            {signals[activeSignal].action}
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
