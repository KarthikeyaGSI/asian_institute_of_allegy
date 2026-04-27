"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative h-[100vh] w-full overflow-hidden bg-dark flex items-center">
        {/* Optimized Image Background instead of Video for <2.5s LCP */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/best-allergy-hospital.webp"
            alt="Asian Institute of Allergy"
            fill
            priority
            className="object-cover object-center scale-105"
          />
        </div>

        {/* Critical Overlay */}
        <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-[rgba(0,0,0,0.65)] md:to-[rgba(0,0,0,0.2)] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-left mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-white max-w-3xl"
          >
            Most treatments manage symptoms. <br />
            <span className="text-primary-accent">We solve the &quot;why.&quot;</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-gray-200 text-lg md:text-2xl font-medium max-w-2xl"
          >
            Root-cause care for allergy, asthma, and immune disorders. Stop running between hospitals.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link href="#contact" className="bg-primary text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 ease-out hover:bg-[#154d2e] hover:-translate-y-1 text-center shadow-lg">
              <span className="block text-lg">Book Evaluation</span>
              <span className="block text-xs text-white/80 font-normal mt-0.5">(15 min callback)</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Market Gap Section */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Why standard care fails.
              </h2>
              <p className="text-lg text-gray-600">
                In India, over <strong className="text-gray-900">35 Crore patients</strong> suffer from allergies and immune disorders. Yet, there are fewer than <strong className="text-gray-900">100 dedicated specialists</strong>. This massive specialist gap forces patients into a cycle of temporary relief—antihistamines and inhalers—without ever addressing the root cause.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center justify-between mb-8">
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl font-bold text-gray-900">35Cr+</span>
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Patients</span>
                </div>
                <div className="text-primary text-2xl font-light">vs</div>
                <div className="text-center">
                  <span className="block text-4xl md:text-5xl font-bold text-primary">&lt;100</span>
                  <span className="text-sm font-medium text-primary/70 uppercase tracking-wider">Specialists</span>
                </div>
              </div>
              <p className="text-center text-gray-600 text-sm font-medium">
                The Specialist Gap is why you haven&apos;t found a permanent solution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
