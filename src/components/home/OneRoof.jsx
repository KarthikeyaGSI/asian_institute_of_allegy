"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OneRoof() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        y: -50,
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
    <section className="bg-muted py-24 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-6xl font-semibold mb-6">
              No running between hospitals
            </h2>
            <div className="flex flex-col gap-4 text-xl md:text-2xl text-gray-600 font-medium my-8">
              <span className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full"/> Diagnosis</span>
              <span className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full"/> Treatment</span>
              <span className="flex items-center gap-3"><div className="w-2 h-2 bg-primary rounded-full"/> Follow-up</span>
            </div>
            <p className="text-2xl font-semibold text-primary">All in one place.</p>
          </motion.div>

          {/* IMAGE */}
          <div className="order-1 lg:order-2" ref={containerRef}>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
              <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                <Image 
                  src="/images/clinic.png" 
                  alt="Clinic Facilities" 
                  fill 
                  className="object-cover scale-105"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
