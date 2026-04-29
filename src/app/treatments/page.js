"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Beaker, ShieldCheck, Zap, Activity, ArrowRight, Microchip } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const treatments = [
  {
    title: "Sublingual Immunotherapy (SLIT)",
    subtitle: "The Needle-Free Permanent Fix",
    description: "A clinically proven, non-invasive treatment that trains your immune system to tolerate allergens, addressing the root cause rather than just suppressing symptoms.",
    icon: ShieldCheck,
    features: ["Safe for ages 2-80", "Administered at home", "No steroid dependency", "95%+ Success Rate"],
    color: "bg-primary"
  },
  {
    title: "Molecular Diagnostics",
    subtitle: "Precision Identification",
    description: "Advanced allergen forensic laboratory tests that identify the exact proteins causing your inflammatory response across 300+ triggers.",
    icon: Microchip,
    features: ["Component-resolved diagnostics", "Cross-reactivity analysis", "Hyderabad regional mapping", "Evidence-based results"],
    color: "bg-slate-900"
  },
  {
    title: "Molecular Hydrogen Therapy",
    subtitle: "Cellular Inflammation Control",
    description: "Cutting-edge adjunctive therapy that neutralizes toxic free radicals and reduces deep systemic inflammation in complex autoimmune cases.",
    icon: Zap,
    features: ["Antioxidant boost", "Immune modulation", "Safe and natural", "Supports SLIT recovery"],
    color: "bg-primary-accent"
  }
];

export default function TreatmentsPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-accent font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Protocols</span>
            <h1 className="text-5xl md:text-8xl font-bold font-heading tracking-tighter mb-8">
              Treating the <span className="text-primary-accent">Cause</span>, <br/>
              Not the Symptom.
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We combine world-class immunology research with precision diagnostics to provide permanent clinical resolution for chronic conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {treatments.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center p-8 md:p-16 rounded-[3rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all duration-700`}
              >
                <div className="flex-1 space-y-8">
                  <div className={`w-16 h-16 rounded-2xl ${t.color} text-white flex items-center justify-center shadow-xl`}>
                    <t.icon size={32} />
                  </div>
                  <div>
                    <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">{t.subtitle}</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">{t.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {t.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {t.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs group pt-4"
                  >
                    Discuss this protocol <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
                
                <div className="flex-1 w-full relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl">
                   <div className={`absolute inset-0 ${t.color} opacity-10`} />
                   <Image 
                     src={idx === 0 ? "/images/dr-nageswar.jpeg" : idx === 1 ? "/images/Work shop on allegy.jpeg" : "/images/World-Allergy-Foundation-Flags-Yeast-Allergy-Risks-in-Indias-HPV-Vaccine-Drive-1275x768.png"}
                     alt={t.title}
                     fill
                     className="object-cover"
                   />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Trust Strip */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12 opacity-50 grayscale">
              <span className="text-sm font-black uppercase tracking-[0.4em]">Global Recognition</span>
              <div className="flex flex-wrap justify-center gap-12 font-heading font-black text-2xl">
                 <span>CMC VELLORE</span>
                 <span>PATEL CHEST</span>
                 <span>VATICAN</span>
                 <span>WAO WORLDWIDE</span>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
