"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Search, Droplets, ShieldCheck, 
  Sparkles, Star, ArrowDown, MapPin
} from "lucide-react";

const timelineSteps = [
  {
    id: "mapping",
    label: "WEEK 1-2",
    title: "Precision Trigger Mapping",
    description: "400-allergen precision panel + environmental trigger audit.",
    feeling: "I finally know EXACTLY what's causing this",
    icon: <Search size={24} />,
    color: "bg-blue-500"
  },
  {
    id: "recalibration",
    label: "MONTH 1-3",
    title: "Immune Recalibration",
    description: "Daily sublingual drops + dose escalation protocol.",
    feeling: "My morning symptoms have significantly improved",
    icon: <Droplets size={24} />,
    color: "bg-indigo-500"
  },
  {
    id: "tolerance",
    label: "MONTH 3-6",
    title: "Tolerance Building",
    description: "Maintenance dose established + trigger reintroduction testing.",
    feeling: "I slept through the night without medication",
    icon: <ShieldCheck size={24} />,
    color: "bg-primary"
  },
  {
    id: "resolution",
    label: "MONTH 6-12",
    title: "Permanent Resolution",
    description: "Immune tolerance confirmed + medication dependency eliminated.",
    feeling: "I don't think about allergies anymore",
    icon: <Sparkles size={24} />,
    color: "bg-primary-accent"
  },
  {
    id: "protected",
    label: "YEAR 2+",
    title: "Protected Life",
    description: "Most patients maintain symptom freedom for 5+ years.",
    feeling: "Living freely, breathing naturally",
    icon: <Star size={24} />,
    color: "bg-amber-400"
  }
];

export default function ResolutionPath() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">The Journey</span>
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1] tracking-tighter font-heading mb-8">
            Your Path to <br/>
            <span className="text-gray-400 font-normal italic">Resolution.</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            A chronic allergy sufferer has been disappointed before. 
            We show you the map before you commit.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-24 relative z-10">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className={`p-10 rounded-[3rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">
                      {step.label}
                    </span>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 font-heading tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                      {step.description}
                    </p>
                    <div className={`inline-flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm border border-slate-100 ${i % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <p className="text-xs font-bold text-slate-900 italic">&ldquo;{step.feeling}&rdquo;</p>
                    </div>
                  </div>
                </div>

                {/* Connector/Icon */}
                <div className="relative shrink-0">
                  <div className={`w-20 h-20 rounded-3xl ${step.color} text-white flex items-center justify-center shadow-2xl relative z-10 scale-90 lg:scale-100 transition-transform`}>
                    {step.icon}
                  </div>
                  {i < timelineSteps.length - 1 && (
                    <div className="absolute top-24 left-1/2 -translate-x-1/2 text-slate-200 hidden lg:block">
                      <ArrowDown size={32} strokeWidth={1} />
                    </div>
                  )}
                </div>

                {/* Empty Spacer for desktop */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <Link 
            href="/#contact"
            className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-[2rem] font-bold text-lg hover:bg-primary transition-all shadow-2xl shadow-primary/20 active:scale-95"
          >
            <MapPin size={24} />
            Secure My Week 1 Appointment
          </Link>
          <p className="mt-8 text-slate-400 font-medium">Most SLIT patients maintain symptom freedom for 5+ years.</p>
        </motion.div>
      </div>
    </section>
  );
}
