"use client";

import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";

const testimonials = [
  {
    name: "Aman Verma",
    condition: "Severe Allergic Asthma",
    outcome: "From 5 inhalers a day to zero in 8 months.",
    quote: "I had spent 12 years just managing symptoms. The Asian Institute was the first place that actually looked for the 'Why'. Immunotherapy changed my life."
  },
  {
    name: "Priya Reddy",
    condition: "Chronic Skin Hives",
    outcome: "Permanent resolution after 4 years of failed treatments.",
    quote: "The root-cause approach is real. I stopped reacting to triggers that used to send me to the ER. Truly scientific care."
  },
  {
    name: "Dr. K. Sharma",
    condition: "Chronic Sinusitis",
    outcome: "Regained sense of smell and clear breathing.",
    quote: "As a doctor myself, I appreciate the evidence-based protocols used here. They don't just give you a prescription; they give you a cure."
  }
];

const videoTestimonials = [
  "qv1NJ1PDEXA",
  "10fIm_am9k8",
  "Hppih_IZeCo",
  "_mqPWMwwJzA",
  "3qslDhkaUKI",
  "URLAVakbZ8M",
  "FepgsMC8sv0",
  "W7IBuqq2BlE",
  "udBxN633PI0",
  "uA8Akbp-22Y",
  "sXsNYSpMkhw",
  "Ckhopz9Mjac"
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main High-Authority Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <Quote size={60} className="text-primary/10 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight italic">
            &ldquo;As a doctor myself, I appreciate the evidence-based protocols here. They don&apos;t just give you a prescription; they give you a cure.&rdquo;
          </h2>
          <div className="mt-8">
            <p className="text-xl font-bold text-slate-900">Dr. K. Sharma</p>
            <p className="text-primary font-bold uppercase tracking-widest text-xs mt-1">Chronic Sinusitis Patient</p>
          </div>
        </motion.div>

        {/* 3 Video Thumbnails in a wide-format row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoTestimonials.slice(0, 3).map((videoId, i) => (
            <motion.div
              key={videoId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-video rounded-3xl overflow-hidden bg-slate-100 shadow-2xl shadow-primary/5 group"
            >
               <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?si=JsOgNjXXEZnX5Lf8`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-400 font-medium italic">...and many more lives transformed through root-cause resolution.</p>
        </div>
      </div>
    </section>
  );
}
