"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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

export default function Testimonials() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Success Stories</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-6">Real Outcomes.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">See how root-cause resolution transforms lives for those who have failed standard care.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 flex flex-col relative group hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={40} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-xl font-medium text-gray-900 mb-8 leading-relaxed flex-1 italic">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-gray-200 mt-auto">
                <p className="text-lg font-bold text-gray-900">{item.name}</p>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mt-1">{item.condition}</p>
                <div className="bg-primary/5 px-3 py-1 rounded-full inline-block mt-3 border border-primary/10">
                   <p className="text-[11px] font-bold text-primary uppercase tracking-widest">{item.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
