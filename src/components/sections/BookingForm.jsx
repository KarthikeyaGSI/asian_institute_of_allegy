"use client";

import { motion } from "framer-motion";

export default function BookingForm() {
  return (
    <section id="contact" className="bg-muted py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* LEFT (Value Prop) */}
          <div className="p-10 md:p-16 flex-1 bg-primary text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10">
              <span className="text-primary-accent font-bold tracking-widest uppercase text-sm mb-4 block">Frictionless Booking</span>
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
                Get a callback within 15 minutes.
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Skip the waiting room. Speak directly with our care coordinators to schedule your comprehensive evaluation and take the first step toward long-term control.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-primary-accent shrink-0">
                    1
                  </div>
                  <span className="font-medium text-lg">Submit your details</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-primary-accent shrink-0">
                    2
                  </div>
                  <span className="font-medium text-lg">Receive a callback in 15 mins</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-primary-accent shrink-0">
                    3
                  </div>
                  <span className="font-medium text-lg">Meet the specialists</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT (Form) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-10 md:p-16 flex-1 bg-white flex flex-col justify-center"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50/50"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50/50"
                  placeholder="+91"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Primary Condition</label>
                <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-gray-50/50 text-gray-700 appearance-none">
                  <option value="" disabled selected>Select an option</option>
                  <option>Breathing Issues / Asthma</option>
                  <option>Skin Allergies / Eczema</option>
                  <option>Sinus / ENT Issues</option>
                  <option>Complex / Autoimmune</option>
                </select>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg hover:bg-[#154d2e] transition-colors mt-4 text-lg"
              >
                Request Complete Evaluation
              </motion.button>
              
              <div className="pt-6 mt-6 border-t border-gray-100">
                <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Secure & Confidential
                </p>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
