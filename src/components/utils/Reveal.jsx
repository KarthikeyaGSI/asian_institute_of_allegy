"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = document.querySelectorAll(".fade-up");
      
      elements.forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return null;
}
