"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PremiumCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const xSetter = gsap.quickSetter(cursor, "x", "px");
    const ySetter = gsap.quickSetter(cursor, "y", "px");
    const xFollowerSetter = gsap.quickSetter(follower, "x", "px");
    const yFollowerSetter = gsap.quickSetter(follower, "y", "px");

    const moveCursor = (e) => {
      xSetter(e.clientX);
      ySetter(e.clientY);
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    const onMouseEnter = () => {
      gsap.to(follower, { scale: 1.5, backgroundColor: "rgba(163, 230, 53, 0.1)", borderColor: "rgba(163, 230, 53, 0.5)", duration: 0.3 });
    };

    const onMouseLeave = () => {
      gsap.to(follower, { scale: 1, backgroundColor: "transparent", borderColor: "rgba(163, 230, 53, 0.2)", duration: 0.3 });
    };

    window.addEventListener("mousemove", moveCursor);
    
    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary-accent rounded-full pointer-events-none z-[10000] hidden lg:block mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-primary-accent/20 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
