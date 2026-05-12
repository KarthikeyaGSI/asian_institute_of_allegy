"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Zap, ShieldAlert, CheckCircle2, 
  ArrowRight, Info, MinusCircle, 
  PlusCircle, FlaskConical, Microscope
} from "lucide-react";

const Tilt = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`perspective-1000 ${className}`}
    >
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
};

const FadeInBlur = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

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
    <section id="slit-science" className="bg-dark py-24 md:py-48 overflow-hidden relative">
      {/* Background Cinematic Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-primary-accent/15 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* LEFT: THE STORY */}
          <FadeInBlur>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary-accent/20 flex items-center justify-center text-primary-accent border border-primary-accent/10">
                  <Microscope size={24} />
                </div>
                <span className="text-primary-accent font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">The Science of SLIT</span>
              </div>
              
              <h2 className="text-4xl md:text-8xl font-bold text-white leading-none tracking-tighter font-heading mb-10">
                The No-Needle <br/>
                <span className="text-gray-600 italic">Resolution.</span>
              </h2>
              
              <p className="text-lg md:text-2xl text-slate-400 leading-relaxed font-medium mb-16 max-w-xl">
                Allergies aren't just symptoms; they are biological misinformation. 
                Sublingual Immunotherapy (SLIT) doesn't block the alarm—it fixes the system.
              </p>

              <div className="space-y-12 relative">
                 {/* Timeline Line */}
                 <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-primary-accent/50 to-transparent" />
                 
                {[
                  { id: "01", title: "Immune Recognition", desc: "Calibration doses placed under the tongue engage specialized dendritic cells." },
                  { id: "02", title: "T-Cell Reprogramming", desc: "Regulatory T-cells learn to recognize allergens as harmless, decreasing IgE levels." },
                  { id: "03", title: "Permanent Tolerance", desc: "The body stops overreacting. Symptoms resolve naturally without daily medication." }
                ].map((item) => (
                  <div key={item.id} className="flex gap-10 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <span className="font-bold text-sm">{item.id}</span>
                    </div>
                    <div className="pt-1">
                      <h4 className="text-white font-bold text-xl mb-3 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-base leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInBlur>

          {/* RIGHT: THE COMPARISON TOGGLE */}
          <Tilt>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] md:rounded-[4rem] p-8 md:p-16 backdrop-blur-3xl shadow-[0_64px_128px_-32px_rgba(0,0,0,0.5)]">
                {/* Toggle Switch */}
                <div className="flex p-2 bg-black/40 rounded-2xl mb-12 gap-2 border border-white/5">
                  <button
                    onClick={() => setActiveMode("antihistamines")}
                    className={`flex-1 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeMode === 'antihistamines' ? 'bg-red-500 text-white shadow-xl' : 'text-white/40 hover:text-white'}`}
                  >
                    Antihistamines
                  </button>
                  <button
                    onClick={() => setActiveMode("slit")}
                    className={`flex-1 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${activeMode === 'slit' ? 'bg-primary text-white shadow-xl' : 'text-white/40 hover:text-white'}`}
                  >
                    SLIT Immunotherapy
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMode}
                    initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
                    transition={{ duration: 0.4 }}
                    className="space-y-10"
                  >
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-3 font-heading tracking-tight">
                        {mechanismData[activeMode].title}
                      </h3>
                      <p className="text-slate-400 text-lg font-medium">{mechanismData[activeMode].subtitle}</p>
                    </div>

                    <div className="space-y-4">
                      {mechanismData[activeMode].points.map((point, i) => (
                        <div key={i} className="flex items-center gap-5 text-white font-medium bg-white/[0.03] p-5 rounded-2xl border border-white/5 hover:bg-white/[0.06] transition-colors">
                          {point.icon}
                          <span className="text-base">{point.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`mt-16 p-10 rounded-[2.5rem] border text-center relative overflow-hidden group ${mechanismData[activeMode].color}`}>
                      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-3 relative z-10">Final Clinical Outcome</p>
                      <p className="text-3xl md:text-5xl font-bold text-white font-heading tracking-tight relative z-10">{mechanismData[activeMode].outcome}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
