"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

export default function Authority() {
  return (
    <section id="doctor" className="bg-dark text-white py-24 md:py-32 overflow-hidden relative scroll-mt-24">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* DOCTOR ANCHOR & PROOF */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl max-w-md mx-auto lg:mx-0 ring-1 ring-white/10">
              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 10, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image 
                  src="/images/Dr.jpeg" 
                  alt="Dr. Vyakarnam Nageshwar" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <p className="text-2xl font-bold text-white mb-1">Dr. Vyakarnam Nageshwar</p>
                <p className="text-gray-400 font-medium">Founder & Chief Immunologist</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 space-y-8"
          >
            <span className="text-primary-accent font-bold tracking-widest uppercase text-sm mb-2 block">The Authority</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-white">
              Built to solve complex, <br/>
              <span className="text-gray-400">treatment-resistant cases.</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed font-medium">
              We specialize in the cases where others have failed. Our protocols are designed specifically for patients who have tried standard care without success.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <span className="block text-4xl md:text-5xl font-bold text-white mb-1">50k+</span>
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Patients Treated</span>
              </div>
              <div>
                <span className="block text-4xl md:text-5xl font-bold text-primary-accent mb-1">15k+</span>
                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">SLIT Successes</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GLOBAL STANDARDS (Foundation) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-3xl backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 text-white/5 -translate-y-1/4 translate-x-1/4">
            <Globe size={300} strokeWidth={1} />
          </div>
          
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-primary-accent" size={24} />
              <span className="text-primary-accent font-bold tracking-widest uppercase text-sm">Global Network</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              Integrated with the World Allergy Foundation
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Our clinical protocols aren&apos;t just local; they are rooted in global research networks. We align our immune retraining and diagnostic standards with the world&apos;s leading immunological frameworks.
            </p>
            <Link 
              href="/world-allergy-foundation"
              className="inline-flex items-center gap-2 bg-white text-dark px-8 py-4 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors"
            >
              Explore Our Global Reach <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
