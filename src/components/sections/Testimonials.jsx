"use client";

import { motion } from "framer-motion";
import { Quote, Play, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const categories = [
  { id: "all", label: "All Cases" },
  { id: "rhinitis", label: "Rhinitis / Sinus" },
  { id: "asthma", label: "Asthma" },
  { id: "skin", label: "Skin / Hives" },
  { id: "food", label: "Food Allergy" }
];

const testimonials = [
  {
    name: "Raghukumar",
    age: 52,
    location: "Andhra Pradesh",
    category: "skin",
    duration: "40 years",
    previous: "Lifetime of steroid creams & dependency",
    outcome: "Complete skin resolution",
    quote: "I had spent 40 years just managing symptoms. The Asian Institute was the first place that actually looked for the 'Why'. Immunotherapy changed my life.",
    videoId: "qv1NJ1PDEXA",
    metrics: [10, 9, 6, 3, 0]
  },
  {
    name: "Sadik Ali",
    age: 48,
    location: "Karnataka",
    category: "rhinitis",
    duration: "15+ years",
    previous: "Chronic respiratory & nasal allergies",
    outcome: "Total clinical resolution",
    quote: "After 15 years of struggling, the personalized treatment at Aswini Allergy finally cured my condition completely. I can breathe freely now.",
    videoId: "fKIYdV3SABc",
    metrics: [10, 7, 3, 1, 0]
  },
  {
    name: "Respiratory Success",
    age: 39,
    location: "Hyderabad",
    category: "rhinitis",
    duration: "Long-term suffering",
    previous: "Persistent breathing & sinus difficulties",
    outcome: "Full respiratory recovery",
    quote: "The advanced diagnostic protocols in Hyderabad provided the answers I couldn't find anywhere else for years. My quality of life has returned.",
    videoId: "hfX_xvm5lgc",
    metrics: [10, 8, 5, 2, 0]
  },
  {
    name: "Kenyan Citizen",
    age: 42,
    location: "Kenya",
    category: "rhinitis",
    duration: "Chronic case",
    previous: "Multiple failed treatments abroad",
    outcome: "International success story",
    quote: "I traveled from Kenya for this specialized treatment, and the results have been life-changing. My long-standing allergy problems are finally gone.",
    videoId: "oyo1ApTC0mc",
    metrics: [10, 6, 4, 1, 0]
  },
  {
    name: "Baby Akshara",
    age: 7,
    location: "Hyderabad",
    category: "asthma",
    duration: "5 years",
    previous: "Severe pediatric asthma & chronic attacks",
    outcome: "No inhalers, normal childhood",
    quote: "We were scared for our daughter's future. The evidence-based protocols used here didn't just give her a prescription; they gave her a childhood.",
    videoId: "Hppih_IZeCo",
    metrics: [10, 7, 4, 1, 0]
  }
];

function SeverityChart({ metrics }) {
  return (
    <div className="space-y-1.5 mt-6">
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Severity Trend</p>
      {["Before", "Month 3", "Month 6", "Today"].map((label, i) => (
        <div key={label} className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-slate-500 w-16">{label}</span>
          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ width: `${(metrics[i] / 10) * 100}%`, transformOrigin: "left" }}
              className="h-full bg-primary origin-left"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function TestimonialCard({ item, i }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: i * 0.05,
        layout: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        y: { duration: 0.4 }
      }}
      style={{ willChange: "transform, opacity" }}
      className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col group"
    >
      {/* Video Section */}
      <div className="relative aspect-video bg-slate-100 overflow-hidden cursor-pointer" onClick={() => setIsPlaying(true)}>
        {!isPlaying ? (
          <>
            <Image
              src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-w-768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                <Play fill="currentColor" size={24} className="ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 flex gap-2">
               <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                 {item.category}
               </span>
            </div>
          </>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
            title="Video testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-1">
        <div className="mb-6">
          <p className="text-xl font-bold text-slate-900 mb-1">{item.name}</p>
          <p className="text-xs font-medium text-slate-400">{item.age} years • {item.location}</p>
        </div>

        <div className="space-y-4 mb-8">
           <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                 <Clock size={14} />
              </div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Duration</p>
                 <p className="text-sm font-bold text-slate-700">{item.duration} suffering</p>
              </div>
           </div>
           <div className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                 <ShieldCheck size={14} />
              </div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Outcome</p>
                 <p className="text-sm font-bold text-primary">{item.outcome}</p>
              </div>
           </div>
        </div>

        <blockquote className="text-slate-600 font-medium italic leading-relaxed text-sm border-l-2 border-primary/20 pl-4">
          &ldquo;{item.quote}&rdquo;
        </blockquote>

        <SeverityChart metrics={item.metrics} />
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTestimonials = activeFilter === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);



  const schemaData = testimonials.map(item => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": item.name
        },
        "reviewBody": item.quote,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "itemReviewed": {
          "@type": "MedicalBusiness",
          "name": "Asian Institute of Allergy",
          "image": "https://asianinstituteofallergy.com/logo.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressCountry": "IN"
          }
        }
      },
      {
        "@type": "VideoObject",
        "name": `${item.name} Patient Success Story`,
        "description": `Clinical success story of ${item.name} who recovered from ${item.category} allergy at the Asian Institute of Allergy.`,
        "thumbnailUrl": [
          `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`,
          `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`
        ],
        "uploadDate": "2024-01-01T08:00:00+08:00",
        "embedUrl": `https://www.youtube.com/embed/${item.videoId}`,
        "publisher": {
          "@type": "Organization",
          "name": "Asian Institute of Allergy",
          "logo": {
            "@type": "ImageObject",
            "url": "https://asianinstituteofallergy.com/logo.png"
          }
        }
      }
    ]
  }));

  return (
    <section className="bg-slate-50/50 py-24 md:py-32 overflow-hidden border-t border-slate-100">
      {/* SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Patient Proof</span>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1] tracking-tighter font-heading mb-8">
              Relevant Proof. <br/>
              <span className="text-gray-400">Real Outcomes.</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              See how patients with your specific condition achieved long-term resolution.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                  activeFilter === cat.id 
                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105" 
                    : "bg-white text-slate-400 border border-slate-200 hover:border-slate-400"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((item, i) => (
            <TestimonialCard key={item.name} item={item} i={i} />
          ))}
        </div>

        <div className="mt-20 text-center">
           <div className="inline-flex items-center gap-8 p-6 bg-white rounded-3xl border border-slate-100">

             <div className="text-left">
                <p className="text-sm font-bold text-slate-900">Join 50,000+ Patient Stories</p>
                <p className="text-xs text-slate-500">International patients</p>
             </div>
             <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all">
                Start My Journey
             </a>
           </div>
        </div>
      </div>
    </section>
  );
}

