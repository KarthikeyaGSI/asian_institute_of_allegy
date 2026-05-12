"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "Deccan Chronicle", src: "/images/DECCAN%20CHRONICLE.webp" },
  { name: "Telangana Today", src: "/images/TELANGANA%20TODAY.webp" },
  { name: "Hindustan Times", src: "/images/HINDUSTAN%20TIMES.webp" },
  { name: "TV9", src: "/images/TV9.webp" },
  { name: "WION news", src: "/images/WION%20news.webp" },
  { name: "TV5", src: "/images/TV5.webp" },
  { name: "TNEWS", src: "/images/TNEWS.webp" },
  { name: "zee news", src: "/images/zee%20news.webp" },
];

export default function MediaLogos() {
  // Triple the logos to ensure enough content for smooth loop
  const scrollingLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-16 relative bg-transparent">
      {/* Soft edge masking for premium feel */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex-shrink-0"
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
            >
              <div className="relative w-full h-12 md:h-16 flex items-center justify-center group">
                <div className="relative w-full h-full transition-all duration-500">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
