"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ParticlesSphere = ({ count = 200, color = "#1A5F3A" }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.current = [];
      const radius = 250;
      for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        
        particles.current.push({
          x: radius * Math.cos(theta) * Math.sin(phi),
          y: radius * Math.sin(theta) * Math.sin(phi),
          z: radius * Math.cos(phi),
          baseX: radius * Math.cos(theta) * Math.sin(phi),
          baseY: radius * Math.sin(theta) * Math.sin(phi),
          baseZ: radius * Math.cos(phi),
          size: Math.random() * 2 + 1,
        });
      }
    };

    const rotateX = (angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      particles.current.forEach((p) => {
        const y = p.y * cos - p.z * sin;
        const z = p.y * sin + p.z * cos;
        p.y = y;
        p.z = z;
      });
    };

    const rotateY = (angle) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      particles.current.forEach((p) => {
        const x = p.x * cos - p.z * sin;
        const z = p.x * sin + p.z * cos;
        p.x = x;
        p.z = z;
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const perspective = 800;

      rotateX(0.005);
      rotateY(0.005);

      // Sort by Z for depth
      particles.current.sort((a, b) => b.z - a.z);

      particles.current.forEach((p) => {
        const scale = perspective / (perspective + p.z);
        const drawX = centerX + p.x * scale;
        const drawY = centerY + p.y * scale;
        
        const alpha = (p.z + 250) / 500; // Depth-based opacity

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = Math.max(0.1, alpha);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-40"
    />
  );
};

export default ParticlesSphere;
