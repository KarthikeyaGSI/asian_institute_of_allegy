"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/Asian.jpeg", title: "Asian Institute Entrance" },
  { src: "/images/Aswini-Allergy-Centre-Hyderabad-Achieves-National-Recognition-for-RootCause-Allergy-Management-1275x768.jpeg", title: "National Recognition" },
  { src: "/images/Before-and-after-treatment-of-chronic-skin-allergy-with-swelling-and-ulcers-resolved-after-immunotherapy-at-Aswini-Allergy-Centre-Hyderabad-1275x7.png", title: "Clinical Success Story" },
  { src: "/images/Work shop on allegy.jpeg", title: "Allergy Workshop" },
  { src: "/images/World-Allergy-Foundation-Flags-Yeast-Allergy-Risks-in-Indias-HPV-Vaccine-Drive-1275x768.png", title: "World Allergy Foundation" },
  { src: "/images/allergy-hospital-in-hyderabad.webp", title: "Hospital View" },
  { src: "/images/asianinstituteof allergy.jpeg", title: "Institute Facility" },
  { src: "/images/aswiniallergycentre1.jpg", title: "Clinic Reception" },
  { src: "/images/aswiniallergycentre2.jpg", title: "Diagnostics Lab" },
  { src: "/images/aswiniallergycentre3.jpg", title: "Patient Care" },
  { src: "/images/aswiniallergycentre7.jpg", title: "Specialist Wing" },
  { src: "/images/best-allergy-hospital.webp", title: "Centre of Excellence" },
  { src: "/images/event.jpeg", title: "Medical Conference" },
  { src: "/images/inside.jpeg", title: "Advanced Treatment Room" },
  { src: "/images/kcr-at-hospital.webp", title: "Dignitary Visit" },
  { src: "/images/research.jpeg", title: "Clinical Research" },
  { src: "/images/dr-nageswar.webp", title: "Dr. Vyakarnam Nageshwar" },
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-white font-bold text-xl">{img.title}</p>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-2">Asian Institute of Allergy</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
