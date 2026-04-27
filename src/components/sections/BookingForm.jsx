"use client";

import { motion } from "framer-motion";

export default function BookingForm() {
  return (
    <section id="contact" className="bg-muted py-24 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          
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
                {[
                    "Submit your details",
                    "Receive a callback in 15 mins",
                    "Meet the specialists"
                ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-primary-accent shrink-0 font-bold">
                            {i + 1}
                        </div>
                        <span className="font-medium text-lg">{step}</span>
                    </div>
                ))}
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
                <label htmlFor="full-name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input 
                  id="full-name"
                  type="text" 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-slate-50/50"
                  placeholder="e.g. Rahul Sharma"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                <input 
                  id="phone"
                  type="tel" 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-slate-50/50"
                  placeholder="+91"
                  required
                />
              </div>
              <div>
                <label htmlFor="condition" className="block text-sm font-bold text-slate-700 mb-2">Primary Condition</label>
                <select 
                  id="condition"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-slate-50/50 text-slate-700 appearance-none"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select an option</option>
                  <option>Breathing Issues / Asthma</option>
                  <option>Skin Allergies / Eczema</option>
                  <option>Sinus / ENT Issues</option>
                  <option>Complex / Autoimmune</option>
                </select>
              </div>
              <div className="space-y-4">
                <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    aria-label="Request Complete Evaluation"
                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold shadow-2xl shadow-primary/20 hover:bg-[#154d2e] transition-all text-lg"
                >
                    Request Complete Evaluation
                </motion.button>
                
                <div className="flex flex-col gap-2 pt-2">
                  {[
                    "Direct specialist consultation",
                    "No long-term medication dependency",
                    "Personalized treatment plan"
                  ].map((item, j) => (
                    <div key={j} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-primary">✔</div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 mt-6 border-t border-slate-100">
                <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Secure & Confidential Clinical Inquiry
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
