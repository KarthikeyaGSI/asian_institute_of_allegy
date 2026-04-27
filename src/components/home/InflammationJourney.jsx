"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const nodes = [
  "Allergy",
  "Chronic Inflammation",
  "Autoimmune",
  "Metabolic"
];

export default function InflammationJourney() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="bg-dark py-[80px] md:py-[120px] overflow-hidden text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* LEFT: Content */}
          <div className="flex-1 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-5xl font-semibold mb-12 text-white">
                Inflammation is not isolated. <br className="hidden md:block"/>
                <span className="text-gray-400">It evolves.</span>
              </h2>

              <div className="space-y-8 relative pl-6">
                <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-gray-800" />
                
                {nodes.map((node, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0.2, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: i * 0.25, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    <div className="absolute -left-[30px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-dark border-4 border-primary shadow-[0_0_15px_#1A5F3A]" />
                    <p className="text-xl md:text-2xl font-medium text-gray-200">{node}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Video Parallax */}
          <div className="flex-1 order-1 md:order-2 w-full md:block">
            <motion.div 
              style={{ y: videoY }}
              className="relative w-full aspect-[4/5] md:aspect-square rounded-[20px] overflow-hidden shadow-xl"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/_INFLAMMATION%20VIDEO%20(Scientific%20Section).mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[rgba(0,255,150,0.08)] pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
