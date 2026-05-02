"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Quote, ArrowRight, UserCheck, Activity, ShieldCheck, Microscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    name: "Mr. Raghukumar",
    age: "57",
    condition: "Chronic Skin Allergy & Ulcers",
    duration: "40 Years of Suffering",
    result: "Complete resolution in 3 months",
    quote: "Unless the root cause—the immunological basis—is identified, patients remain dependent on temporary relief like steroids.",
    treatment: "Molecular Hydrogen + Targeted SLIT",
    image: "/images/Before-and-after-treatment-of-chronic-skin-allergy-with-swelling-and-ulcers-resolved-after-immunotherapy-at-Aswini-Allergy-Centre-Hyderabad-1275x7.png"
  },
  {
    name: "Master Aryan",
    age: "8",
    condition: "Severe Allergic Asthma",
    duration: "Frequent Hospitalizations",
    result: "Inhaler-free for 18 months",
    quote: "My son can now play football without fear. The sublingual drops changed our lives forever.",
    treatment: "Environmental Mapping + SLIT",
    image: "/images/Work shop on allegy.jpeg"
  }
];

export default function ClinicalSuccessPage() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Evidence of Excellence</span>
            <h1 className="text-5xl md:text-8xl font-bold font-heading tracking-tighter mb-8 leading-[0.9]">
              Transformation <br/>
              <span className="text-primary italic">Stories.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Real results for real patients. Explore how our root-cause clinical protocols have resolved decades of chronic suffering.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-custom">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Patients Treated", value: "50,000+" },
                { label: "Patient Stories", value: "15,000+" },
                { label: "Years Excellence", value: "20+" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                   <p className="text-4xl font-bold text-slate-900 font-heading mb-1">{stat.value}</p>
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-24 md:py-32">
        <div className="container-custom space-y-24 md:space-y-48">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full relative">
                 <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 ring-1 ring-slate-200">
                    <Image 
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                 </div>
                 {/* Decorative elements */}
                 <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-0" />
                 <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary-accent/10 rounded-full blur-2xl -z-0" />
              </div>

              {/* Content Side */}
              <div className="flex-1 space-y-10">
                 <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest">
                       <UserCheck size={14} /> Case ID: {idx + 1}0492
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight">{story.name}, {story.age}</h2>
                    <p className="text-2xl font-bold text-primary italic">{story.condition}</p>
                 </div>

                 <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100">
                    <div>
                       <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Before AIA</span>
                       <p className="text-slate-700 font-bold">{story.duration}</p>
                    </div>
                    <div>
                       <span className="block text-[10px] font-bold text-primary uppercase tracking-widest mb-2">Clinical Outcome</span>
                       <p className="text-slate-700 font-bold">{story.result}</p>
                    </div>
                 </div>

                 <div className="relative">
                    <Quote className="absolute -top-6 -left-6 text-primary/10 w-20 h-20 -z-0" />
                    <p className="text-2xl font-medium text-slate-600 italic leading-relaxed relative z-10">
                       "{story.quote}"
                    </p>
                 </div>

                 <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 space-y-4">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Protocol Used:</span>
                    <div className="flex items-center gap-4 text-slate-900 font-bold">
                       <ShieldCheck className="text-primary" />
                       {story.treatment}
                    </div>
                 </div>

                 <Link 
                    href="/#contact"
                    className="btn-primary inline-flex items-center gap-3"
                 >
                    Start Your Recovery Story <ArrowRight size={18} />
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a5f3a20_0%,transparent_50%)]" />
        <div className="container-custom relative z-10 text-center">
           <div className="inline-flex items-center gap-4 mb-12">
              <Microscope className="text-primary-accent" size={24} />
              <span className="text-xs font-black uppercase tracking-[0.5em] text-white/40">Clinical Validation</span>
           </div>
           <h3 className="text-3xl md:text-5xl font-bold font-heading mb-12 italic">"A Referral Hub for Complex Allergy & Immunological Conditions."</h3>
           <div className="flex flex-wrap justify-center gap-12 opacity-30">
              <span className="font-bold">TV9 TELUGU</span>
              <span className="font-bold">DECCAN CHRONICLE</span>
              <span className="font-bold">EUROPEAN SUN TIMES</span>
              <span className="font-bold">DECCAN HERALD</span>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
