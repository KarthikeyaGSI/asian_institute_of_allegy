"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const SpotlightGallery = ({ images = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-white">
      {images.map((img, i) => (
        <SpotlightCard key={i} img={img} />
      ))}
    </div>
  );
};

const SpotlightCard = ({ img }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-full rounded-3xl bg-slate-100 overflow-hidden group cursor-pointer border border-slate-200"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-2xl bg-white shadow-lg overflow-hidden"
      >
        <Image
          src={img.src}
          alt={img.alt || "Spotlight Image"}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Spotlight Overlay */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: useTransform(
              [x, y],
              ([latestX, latestY]) => `radial-gradient(circle at ${(latestX + 0.5) * 100}% ${(latestY + 0.5) * 100}%, transparent 0%, rgba(0,0,0,0.3) 100%)`
            )
          }}
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white font-bold text-xl">{img.title}</h3>
          <p className="text-white/70 text-sm">{img.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SpotlightGallery;
