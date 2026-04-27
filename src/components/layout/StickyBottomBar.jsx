"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function StickyBottomBar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling past hero (approx 600px)
    if (latest > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:hidden"
    >
      <div className="flex px-4 py-3 gap-3">
        <Link 
          href="#contact"
          className="flex-1 bg-primary text-white py-3 rounded-xl flex items-center justify-center gap-2 font-medium"
        >
          <Calendar size={18} />
          Book
        </Link>
        <Link 
          href="tel:+918074368748"
          className="flex-1 border border-gray-200 text-gray-900 py-3 rounded-xl flex items-center justify-center gap-2 font-medium bg-gray-50"
        >
          <Phone size={18} />
          Call
        </Link>
      </div>
    </motion.div>
  );
}
