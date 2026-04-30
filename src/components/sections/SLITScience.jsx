"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, ShieldAlert, CheckCircle2, 
  ArrowRight, Info, MinusCircle, 
  PlusCircle, FlaskConical, Microscope
} from "lucide-react";

const mechanismData = {
  antihistamines: {
    title: "Symptom Suppressors",
    subtitle: "Temporary relief, permanent dependency",
    points: [
      { text: "Blocks receptors, not the cause", icon: <MinusCircle className="text-red-500" /> },
      { text: "Diminishing returns over time", icon: <MinusCircle className="text-red-500" /> },
      { text: "Side effects (drowsiness, brain fog)", icon: <MinusCircle className="text-red-500" /> },
      { text: "Allergy worsens every season", icon: <MinusCircle className="text-red-500" /> }
    ],
    outcome: "Lifetime Medication",
    color: "bg-red-500/10 border-red-500/20"
  },
  slit: {
    title: "Immune Re-educators",
    subtitle: "Permanent resolution at the source",
    points: [
      { text: "Reprograms immune T-cells", icon: <PlusCircle className="text-primary-accent" /> },
      { text: "No needles, 30s home routine", icon: <PlusCircle className="text-primary-accent" /> },
      { text: "Resolves the underlying cause", icon: <PlusCircle className="text-primary-accent" /> },
      { text: "clinical relief(long term sustained) in 6-12 months", icon: <PlusCircle className="text-primary-accent" /> }
    ],
    outcome: "Medication Freedom",
    color: "bg-primary-accent/10 border-primary-accent/20"
  }
};

export default function SLITScience() {
  const [activeMode, setActiveMode] = useState("slit");

  return (
    <section className="bg-dark py-24 md:py-48 overflow-hidden relative">
      {/* Background Cinematic Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-primary-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* LEFT: THE STORY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary-accent/20 flex items-center justify-center text-primary-accent">
                <Microscope size={20} />
              </div>
              <span className="text-primary-accent font-bold tracking-[0.4em] uppercase text-xs">The Science of SLIT</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1] tracking-tighter font-heading mb-10">
              The No-Needle <br/>
              <span className="text-gray-500">Resolution.</span>
            </h2>
            
            <p className="text-xl text-slate-400 leading-relaxed font-medium mb-12 max-w-xl">
              Allergies aren&apos;t just symptoms; they are biological misinformation. 
              Sublingual Immunotherapy (SLIT) doesn&apos;t block the alarm—it fixes the system.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white shrink-0">
                  <span className="font-bold">01</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Immune Recognition</h4>
                  <p className="text-slate-500 text-sm">Calibration doses placed under the tongue engage specialized dendritic cells.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white shrink-0">
                  <span className="font-bold">02</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">T-Cell Reprogramming</h4>
                  <p className="text-slate-500 text-sm">Regulatory T-cells learn to recognize allergens as harmless, decreasing IgE levels.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white shrink-0">
                  <span className="font-bold">03</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Permanent Tolerance</h4>
                  <p className="text-slate-500 text-sm">The body stops overreacting. Symptoms resolve naturally without daily medication.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: THE COMPARISON TOGGLE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl">
              {/* Toggle Switch */}
              <div className="flex p-2 bg-black/40 rounded-2xl mb-12 gap-2">
                <button
                  onClick={() => setActiveMode("antihistamines")}
                  className={`flex-1 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeMode === 'antihistamines' ? 'bg-red-500 text-white shadow-xl' : 'text-white/40 hover:text-white'}`}
                >
                  Antihistamines
                </button>
                <button
                  onClick={() => setActiveMode("slit")}
                  className={`flex-1 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${activeMode === 'slit' ? 'bg-primary text-white shadow-xl' : 'text-white/40 hover:text-white'}`}
                >
                  SLIT Immunotherapy
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMode}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 font-heading tracking-tight">
                      {mechanismData[activeMode].title}
                    </h3>
                    <p className="text-slate-400 font-medium">{mechanismData[activeMode].subtitle}</p>
                  </div>

                  <div className="space-y-4">
                    {mechanismData[activeMode].points.map((point, i) => (
                      <div key={i} className="flex items-center gap-4 text-white font-medium bg-white/5 p-4 rounded-xl border border-white/5">
                        {point.icon}
                        <span className="text-sm">{point.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`mt-12 p-8 rounded-3xl border text-center ${mechanismData[activeMode].color}`}>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-2">Final Outcome</p>
                    <p className="text-4xl font-bold text-white font-heading">{mechanismData[activeMode].outcome}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Scientific Decorative Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-primary-accent p-6 rounded-3xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center text-black">
                  <Zap size={24} />
                </div>
                <div>
                  <p className="text-black font-black text-xl leading-none">87%</p>
                  <p className="text-black/60 text-[10px] font-bold uppercase tracking-widest mt-1">Resolution Rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
