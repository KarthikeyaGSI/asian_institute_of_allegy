"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DoctorAnchor() {
  return (
    <section className="bg-dark text-white py-24 md:py-32 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl max-w-md mx-auto lg:mx-0">
              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.05 }}
                viewport={{ once: true, margin: "-100px" }}
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
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
              Built from personal suffering. <br/>
              <span className="text-gray-400">Refined over 20+ years.</span> <br/>
              <span className="text-primary-accent">Trusted by 50,000+ patients.</span>
            </h2>

            <div className="space-y-2 mt-8">
              <p className="text-xl font-medium text-white">Dr. Vyakarnam Nageshwar</p>
              <p className="text-gray-400">Founder & Chief Immunologist</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
