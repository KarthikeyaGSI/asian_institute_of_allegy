"use client";

import React from "react";
import { motion } from "framer-motion";

const MotionTiles = ({ rows = 4, cols = 8, color = "#1A5F3A" }) => {
  return (
    <div 
      className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <Tile key={i} color={color} />
      ))}
    </div>
  );
};

const Tile = ({ color }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ 
        duration: 2, 
        delay: Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="border-[0.5px] border-slate-200"
      style={{ backgroundColor: Math.random() > 0.8 ? color : "transparent" }}
    />
  );
};

export default MotionTiles;
