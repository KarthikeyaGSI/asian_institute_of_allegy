"use client";

import { motion } from "framer-motion";
import { revealVariant } from "./variants";

/**
 * ScrollReveal component for elegant section entries.
 * Patterns: opacity, y-offset, scale, and blur.
 */
export default function ScrollReveal({ children, delay = 0, className = "", once = true }) {
  return (
    <motion.div
      variants={revealVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
