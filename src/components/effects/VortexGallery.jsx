"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const VortexGallery = ({ images = [] }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="h-[200vh] relative w-full overflow-hidden bg-slate-950">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center perspective-1000">
        <motion.div 
          style={{ 
            rotateX: mousePosition.y, 
            rotateY: mousePosition.x,
            transformStyle: "preserve-3d"
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {images.map((img, i) => (
            <VortexImage 
              key={i} 
              src={img.src} 
              index={i} 
              total={images.length} 
              progress={scrollYProgress} 
            />
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)] pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
};

const VortexImage = ({ src, index, total, progress }) => {
  // Each image has a different offset in the "tunnel"
  const offset = index / total;
  
  // Depth animation based on scroll progress
  // We want images to come from far (z: -2000) to near (z: 1000)
  const z = useTransform(
    progress,
    [0, 1],
    [-2000 + offset * 3000, 1000 + offset * 3000]
  );
  
  // Opacity fade in and out
  const opacity = useTransform(
    progress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  // Position them in a circle/vortex pattern
  const angle = (index / total) * Math.PI * 2;
  const radius = 300;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      style={{
        z,
        opacity,
        x,
        y,
        position: "absolute",
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale: 1.1, filter: "brightness(1.5) drop-shadow(0 0 20px rgba(26,95,58,0.5))" }}
      className="w-64 h-80 rounded-2xl overflow-hidden border border-white/10"
    >
      <Image
        src={src}
        alt={`Vortex Gallery Image ${index}`}
        fill
        className="object-cover"
        sizes="256px"
      />
    </motion.div>
  );
};

export default VortexGallery;
