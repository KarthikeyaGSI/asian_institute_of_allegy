"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Wind, Microscope, Leaf, Zap, ShieldAlert, MicroscopeIcon as Microscope2 } from "lucide-react";

const allergens = [
  {
    id: "pollen",
    title: "Pollen Grains",
    scientific: "Anemophilous Grains",
    particleSize: "15-50 microns",
    season: "Seasonal (Spring/Rainy)",
    source: "Grasses, Weeds, Trees",
    impact: "Allergic Rhinitis, Conjunctivitis",
    color: "bg-amber-500",
    icon: Leaf,
    details: "Aerobiological mapping shows these particles can travel hundreds of kilometers before causing symptoms."
  },
  {
    id: "mites",
    title: "Dust Mites",
    scientific: "Dermatophagoides",
    particleSize: "10-40 microns",
    season: "Perennial (Year-round)",
    source: "Domestic textiles, upholstery",
    impact: "Asthma, Eczema Flare-ups",
    color: "bg-blue-500",
    icon: Wind,
    details: "Found in almost every household, these microscopic organisms are the leading cause of chronic asthma in India."
  },
  {
    id: "mold",
    title: "Fungal Spores",
    scientific: "Alternaria / Aspergillus",
    particleSize: "3-10 microns",
    season: "Monsoon / High Humidity",
    source: "Damp walls, decaying matter",
    impact: "Sinusitis, Hypersensitivity",
    color: "bg-emerald-500",
    icon: Microscope,
    details: "Highly resilient particles that can penetrate deep into the lower respiratory tract due to their minute size."
  },
  {
    id: "pollutants",
    title: "Particulates",
    scientific: "PM 2.5 / PM 10",
    particleSize: "< 2.5 microns",
    season: "Winter / Urban Peaks",
    source: "Vehicular exhaust, construction",
    impact: "Systemic Inflammation",
    color: "bg-slate-500",
    icon: ShieldAlert,
    details: "Acts as a carrier for allergens, enhancing their potency and bypassing the body's natural filtering systems."
  }
];

export default function AllergenExplorer() {
  const [active, setActive] = useState(allergens[0]);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          <div className="flex-1 space-y-10">
            <div>
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Forensic Laboratory</span>
              <h2 className="text-4xl md:text-6xl font-bold font-heading leading-tight tracking-tighter text-slate-900">
                The Invisible <br />
                <span className="text-primary italic">Forensic Map.</span>
              </h2>
              <p className="mt-6 text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                Our lab integrates botany and clinical immunology to map the exact microscopic triggers causing your chronic inflammation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {allergens.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item)}
                  className={`p-6 rounded-3xl border-2 text-left transition-all duration-500 flex flex-col gap-4 group ${
                    active.id === item.id 
                      ? "border-primary bg-primary/5 shadow-xl shadow-primary/10" 
                      : "border-slate-100 hover:border-slate-300 bg-slate-50/50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                    active.id === item.id ? "bg-primary text-white" : "bg-white text-slate-400 group-hover:text-primary"
                  }`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className={`font-bold text-lg ${active.id === item.id ? "text-primary" : "text-slate-900"}`}>{item.title}</p>
                    <p className="text-xs font-medium text-slate-400">{item.scientific}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
              >
                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-64 h-64 ${active.color} opacity-20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3`} />
                
                <div className="relative z-10 space-y-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className={`w-14 h-14 rounded-2xl ${active.color} flex items-center justify-center shadow-2xl`}>
                          <active.icon size={28} />
                       </div>
                       <div>
                          <h3 className="text-2xl font-bold font-heading">{active.title}</h3>
                          <p className="text-white/40 text-xs font-black uppercase tracking-widest">{active.scientific}</p>
                       </div>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10">
                      ID: {active.id.toUpperCase()}-XFL
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-1">
                        <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Forensic Size</p>
                        <p className="text-xl font-bold">{active.particleSize}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Active Season</p>
                        <p className="text-xl font-bold">{active.season}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Primary Source</p>
                        <p className="text-sm font-medium text-white/80">{active.source}</p>
                     </div>
                     <div className="space-y-1">
                        <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">Clinical Impact</p>
                        <p className="text-sm font-medium text-primary-accent">{active.impact}</p>
                     </div>
                  </div>

                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl italic text-sm md:text-base text-white/70 leading-relaxed font-medium">
                     "{active.details}"
                  </div>

                  <button className="w-full py-4 rounded-xl bg-white text-slate-900 font-black uppercase tracking-widest text-[10px] hover:bg-primary-accent transition-colors flex items-center justify-center gap-3">
                     Explore Clinical Protocol <Microscope2 size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
