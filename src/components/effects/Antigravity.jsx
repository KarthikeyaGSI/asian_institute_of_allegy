"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Antigravity = ({ 
  count = 50, 
  particleColor = "#1A5F3A", 
  particleSize = 3, 
  repelRadius = 150, 
  repelStrength = 0.5 
}) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: -1000, y: -1000 });

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
      for (let i = 0; i < count; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          originX: 0,
          originY: 0,
          size: Math.random() * particleSize + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.5 + 0.2,
        });
        particles.current[i].originX = particles.current[i].x;
        particles.current[i].originY = particles.current[i].y;
      }
    };

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        // Calculate distance from mouse
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < repelRadius) {
          const force = (repelRadius - distance) / repelRadius;
          const moveX = (dx / distance) * force * repelRadius * repelStrength;
          const moveY = (dy / distance) * force * repelRadius * repelStrength;
          
          p.x -= moveX;
          p.y -= moveY;
        } else {
          // Slowly return to origin/drift
          p.x += (p.originX - p.x) * 0.05 + p.vx;
          p.y += (p.originY - p.y) * 0.05 + p.vy;
          
          // Small random drift
          p.originX += p.vx;
          p.originY += p.vy;

          // Boundary check
          if (p.originX < 0 || p.originX > canvas.width) p.vx *= -1;
          if (p.originY < 0 || p.originY > canvas.height) p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, particleColor, particleSize, repelRadius, repelStrength]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default Antigravity;
