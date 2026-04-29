"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function StickyBottomBar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling past hero
    if (latest > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ y: 120 }}
      animate={{ y: isVisible ? 0 : 120 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
    >
      <div className="bg-white/95 backdrop-blur-2xl border border-gray-100 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-2.5 flex gap-2.5">
        <Link 
          href="https://wa.me/918074368748?text=Hi, I'd like to start my root-cause evaluation."
          target="_blank"
          className="flex-1 bg-[#25D366] text-white py-4 rounded-[1.5rem] flex items-center justify-center gap-2 font-black text-[11px] uppercase tracking-wider active:scale-95 transition-transform"
        >
          <MessageCircle size={20} fill="currentColor" />
          WhatsApp
        </Link>
        <Link 
          href="#contact"
          className="flex-[2] bg-primary text-white py-4 rounded-[1.5rem] flex items-center justify-center gap-2 font-black text-[11px] uppercase tracking-wider shadow-lg shadow-primary/20 active:scale-95 transition-transform"
        >
          <Calendar size={20} />
          Start Evaluation
        </Link>
      </div>
    </motion.div>
  );
}
