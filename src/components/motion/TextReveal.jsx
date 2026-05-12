"use client";

import { motion } from "framer-motion";
import { textReveal, staggerContainer } from "./variants";

/**
 * Cinematic Text Reveal component.
 * Animates text word-by-word with masked upward motion and blur interpolation.
 */
export default function TextReveal({ text, className = "", delay = 0 }) {
  const words = text.split(" ");

  return (
    <motion.span
      variants={staggerContainer(0.06, delay)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] py-[0.1em] -my-[0.1em]">
          <motion.span
            variants={textReveal}
            className="inline-block origin-bottom"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
