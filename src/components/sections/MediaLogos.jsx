"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "Deccan Chronicle", src: "/images/DECCAN CHRONICLE.webp" },
  { name: "Telangana Today", src: "/images/TELANGANA TODAY.webp" },
  { name: "Hindustan Times", src: "/images/HINDUSTAN TIMES.webp" },
  { name: "TV9", src: "/images/TV9.webp" },
  { name: "WION news", src: "/images/WION news.webp" },
  { name: "TV5", src: "/images/TV5.webp" },
  { name: "TNEWS", src: "/images/TNEWS.webp" },
  { name: "zee news", src: "/images/zee news.webp" },
];

export default function MediaLogos() {
  // Triple the logos to ensure enough content for smooth loop
  const scrollingLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-16 relative bg-transparent">
      {/* Soft edge masking for premium feel */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-20 md:gap-32 whitespace-nowrap px-10"
        animate={{
          x: [0, -2240], // Calculated: 8 logos * (160px width + 120px gap) = 2240px
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {scrollingLogos.map((logo, index) => (
          <motion.div
            key={`${logo.name}-${index}`}
            className="relative flex-shrink-0"
            whileHover={{ 
              y: -12,
              transition: { type: "spring", stiffness: 300, damping: 15 }
            }}
          >
            <div className="relative w-32 h-16 md:w-44 md:h-24 flex items-center justify-center group">
              {/* Gold Shimmer Glow Effect */}
              <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/5 blur-2xl rounded-full transition-all duration-700 scale-150" />
              
              <div className="relative w-full h-full transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain filter brightness-95 contrast-90 group-hover:brightness-110 group-hover:contrast-110 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
