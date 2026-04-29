"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/sections/BookingForm";
import { CheckCircle2, ArrowRight, ShieldCheck, Activity, Search } from "lucide-react";
import Image from "next/image";

export default function ConditionTemplate({ 
  title, 
  subtitle, 
  description, 
  image, 
  highlights, 
  faqs 
}) {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">{subtitle}</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight tracking-tighter mb-8">
                {title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-10">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#booking" className="btn-primary flex items-center gap-2">
                  Book Clinical Evaluation <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-200"
            >
              <Image 
                src={image} 
                alt={title} 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights / Features */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO / FAQ Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Knowledge Base</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-6">Expert Insights & FAQ</h2>
            <p className="text-slate-400 text-lg">Direct answers to the most common questions about {title.toLowerCase()}.</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <h4 className="text-xl font-bold text-primary-accent mb-4 flex items-start gap-3">
                  <Search size={20} className="shrink-0 mt-1" />
                  {faq.question}
                </h4>
                <p className="text-slate-300 leading-relaxed ml-8">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div id="booking">
        <BookingForm />
      </div>

      <Footer />
    </main>
  );
}
