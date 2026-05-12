"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Magnetic component for premium tactile interactions.
 * Inspired by Apple Vision Pro and high-end WebGL studios.
 */
export default function Magnetic({ children, strength = 0.5, className = "" }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 160, damping: 18, mass: 0.7 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    
    x.set(deltaX * strength);
    y.set(deltaY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={`relative inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
