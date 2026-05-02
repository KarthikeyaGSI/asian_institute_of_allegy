"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Maximize2, Plus } from "lucide-react";

const images = [
  { src: "/images/Asian.webp", title: "Asian Institute Entrance" },
  { src: "/images/Aswini-Allergy-Centre-Hyderabad-Achieves-National-Recognition-for-RootCause-Allergy-Management-1275x768.webp", title: "National Recognition" },
  { src: "/images/Before-and-after-treatment-of-chronic-skin-allergy-with-swelling-and-ulcers-resolved-after-immunotherapy-at-Aswini-Allergy-Centre-Hyderabad-1275x7.webp", title: "Clinical Recovery Story" },
  { src: "/images/Work shop on allegy.webp", title: "Allergy Workshop" },
  { src: "/images/World-Allergy-Foundation-Flags-Yeast-Allergy-Risks-in-Indias-HPV-Vaccine-Drive-1275x768.webp", title: "World Allergy Foundation" },
  { src: "/images/allergy-hospital-in-hyderabad.webp", title: "Hospital View" },
  { src: "/images/asianinstituteof allergy.webp", title: "Institute Facility" },
  { src: "/images/aswiniallergycentre1.webp", title: "Clinic Reception" },
  { src: "/images/aswiniallergycentre2.webp", title: "Diagnostics Lab" },
  { src: "/images/aswiniallergycentre3.webp", title: "Patient Care" },
  { src: "/images/aswiniallergycentre7.webp", title: "Specialist Wing" },
  { src: "/images/best-allergy-hospital.webp", title: "Centre of Excellence" },
  { src: "/images/event.webp", title: "Medical Conference" },
  { src: "/images/inside.webp", title: "Advanced Treatment Room" },
  { src: "/images/kcr-at-hospital.webp", title: "Dignitary Visit" },
  { src: "/images/research.webp", title: "Clinical Research" },
  { src: "/images/dr-nageswar.webp", title: "Dr. Vyakarnam" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="h-[80px] md:h-[100px]" />

      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Visual Journey
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-heading text-slate-900 tracking-tight"
          >
            Institute Gallery
          </motion.h1>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative group cursor-pointer break-inside-avoid rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src={img.src}
                alt={img.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Plus className="text-white" size={32} />
                </div>
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                   <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.4em] whitespace-nowrap">Asian Institute • Global Excellence</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
