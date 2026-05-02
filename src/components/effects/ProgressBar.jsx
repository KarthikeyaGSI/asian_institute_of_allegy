"use client";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollHeight = docHeight - winHeight;
      
      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }
      
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    // Initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[9999] bg-white/5 backdrop-blur-sm pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary-accent to-amber-400 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
