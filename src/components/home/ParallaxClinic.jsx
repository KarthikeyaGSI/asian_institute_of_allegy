"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxClinic() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="container-custom">
        <div ref={containerRef} className="relative aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl">
          <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src="/images/clinic.webp"
              alt="Asian Institute Clinic Interior"
              fill
              className="object-cover scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">World-Class Facilities</h3>
              <p className="text-lg md:text-xl font-medium opacity-80">Precision Diagnostics. Root-Cause Healing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
