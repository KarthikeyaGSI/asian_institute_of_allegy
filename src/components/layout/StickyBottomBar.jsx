"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
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
      <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-2.5 flex gap-2.5">
        <Link 
          href="#contact"
          className="flex-[2] bg-primary text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm shadow-lg shadow-primary/20 active:scale-95 transition-transform"
        >
          <Calendar size={18} />
          Book Evaluation
        </Link>
        <Link 
          href="tel:+918074368748"
          className="flex-1 bg-gray-900 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm active:scale-95 transition-transform"
        >
          <Phone size={18} />
          Call
        </Link>
      </div>
    </motion.div>
  );
}
