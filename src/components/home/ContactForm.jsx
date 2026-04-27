"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-muted py-24 md:py-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          <div className="p-10 md:p-16 flex-1 bg-primary text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Get a callback within 15 minutes
            </h2>
            <p className="text-primary-accent text-lg">
              Speak directly with our care coordinators to understand the right next step for your condition.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-10 md:p-16 flex-1"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Condition (Optional)</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white">
                  <option>Select an option</option>
                  <option>Breathing Issues / Asthma</option>
                  <option>Skin Allergies</option>
                  <option>Sinus / ENT</option>
                  <option>Other</option>
                </select>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="w-full bg-primary text-white py-4 rounded-xl font-medium shadow-lg hover:bg-primary-dark transition-colors"
              >
                Request Callback
              </motion.button>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 font-medium border-t border-gray-100 gap-2">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"/> No waiting</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"/> Direct specialist review</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"/> Personalized diagnosis</span>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
