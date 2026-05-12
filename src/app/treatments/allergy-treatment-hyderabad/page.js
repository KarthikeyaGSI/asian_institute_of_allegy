"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import BookingForm from "@/components/sections/BookingForm";
import Authority from "@/components/sections/Authority";
import Testimonials from "@/components/sections/Testimonials";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Award, Users } from "lucide-react";
import Image from "next/image";

export default function HyderabadLandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Specialized Hero */}
      <section className="pt-32 pb-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <MapPin className="text-primary-accent" size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Specialized Care in Hyderabad</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-heading tracking-tight leading-[1] mb-8">
              Advanced Allergy Treatment <br />
              <span className="text-primary-accent italic">in Hyderabad.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-medium mb-12 max-w-2xl">
              Access India's most advanced SLIT protocols and Allergen Forensic Laboratory at the Asian Institute of Allergy, Hyderabad.
            </p>
            <div className="flex flex-wrap gap-6">
               <div className="flex items-center gap-3">
                  <ShieldCheck className="text-primary-accent" size={20} />
                  <span className="text-sm font-bold">Board Certified Specialists</span>
               </div>
               <div className="flex items-center gap-3">
                  <Award className="text-primary-accent" size={20} />
                  <span className="text-sm font-bold">50,000+ Success Stories</span>
               </div>
               <div className="flex items-center gap-3">
                  <Users className="text-primary-accent" size={20} />
                  <span className="text-sm font-bold">International Protocols</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading">Why Choose Us for Allergy Treatment in Hyderabad?</h2>
               <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Hyderabad's unique environmental conditions, from high pollen counts to urban pollutants, require a specialized forensic approach to allergy management. 
                  Unlike traditional clinics that rely solely on symptom-suppressing medication, the Asian Institute of Allergy focuses on **Root-Cause Resolution**.
               </p>
               <div className="space-y-6">
                  {[
                    { title: "Precision Diagnostics", desc: "Our laboratory maps over 400 environmental triggers specific to the Deccan region." },
                    { title: "SLIT Specialization", desc: "Pioneering Sublingual Immunotherapy for long-term clinical recovery without injections." },
                    { title: "Pediatric Expertise", desc: "Specialized protocols for childhood allergies and asthma." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 transition-all">
                       <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 font-bold text-xl">
                          {i + 1}
                       </div>
                       <div>
                          <h3 className="font-bold text-xl text-slate-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <Image 
                    src="/images/waf%20event%20senior%20deplomat%20hyd.webp" 
                    alt="Clinical Excellence Hyderabad" 
                    fill 
                    className="object-cover"
                  />
               </div>
               <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-xs">
                  <p className="text-primary font-black text-4xl mb-2">98%</p>
                  <p className="text-slate-600 font-bold text-sm">Patient satisfaction rate for chronic respiratory cases in Hyderabad.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Authority />
      
      <div data-header-theme="light">
        <Testimonials />
      </div>

      <BookingForm />

      <Footer />
    </main>
  );
}
