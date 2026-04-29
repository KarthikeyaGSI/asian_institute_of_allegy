"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BookingForm({ onStartQuiz }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    condition: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3c43e0ba-47fb-424c-9103-345682cc4a5a",
          subject: `New Clinical Inquiry: ${formData.name}`,
          from_name: "AIA Official Website",
          name: formData.name,
          phone: formData.phone,
          condition: formData.condition,
          message: `Patient Name: ${formData.name}\nPhone: ${formData.phone}\nPrimary Condition: ${formData.condition}`,
          botcheck: ""
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      // Fallback: If Web3Forms fails, redirect to WhatsApp
      window.location.href = `https://wa.me/918074368748?text=${encodeURIComponent(`Hi, I'm ${formData.name}. I'd like to book an evaluation for ${formData.condition}.`)}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-muted py-24 md:py-32 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl shadow-primary/10 border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          
          <div className="p-10 md:p-16 flex-1 bg-primary text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10">
              <span className="text-primary-accent font-bold tracking-widest uppercase text-sm mb-4 block">Frictionless Booking</span>
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
                Get a callback within 15 minutes.
              </h2>
              <p className="text-white/80 text-lg mb-10 leading-relaxed">
                Skip the waiting room. Speak directly with our care coordinators to schedule your comprehensive evaluation.
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

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-10 md:p-16 flex-1 bg-white flex flex-col justify-center min-h-[500px]"
          >
            {!isSubmitted ? (
              <div className="space-y-8">
                <button 
                  onClick={onStartQuiz}
                  className="w-full p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all group text-left flex items-center justify-between"
                >
                  <div className="max-w-[80%]">
                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Unsure of your condition?</p>
                    <p className="text-sm font-bold text-slate-700">Start our 2-minute diagnostic assessment instead.</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight size={20} />
                  </div>
                </button>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                  <div className="relative flex justify-center text-xs uppercase tracking-widest font-black text-slate-300">
                    <span className="bg-white px-4">Or Quick Booking</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="full-name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input 
                      id="full-name"
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-slate-50/50"
                      placeholder="+91"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="condition" className="block text-sm font-bold text-slate-700 mb-2">Primary Condition</label>
                    <select 
                      id="condition"
                      value={formData.condition}
                      onChange={(e) => setFormData({...formData, condition: e.target.value})}
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-slate-50/50 text-slate-700 appearance-none"
                      required
                    >
                      <option value="" disabled>Select an option</option>
                      <option value="Asthma">Breathing Issues / Asthma</option>
                      <option value="Skin Allergy">Skin Allergies / Eczema</option>
                      <option value="Sinus">Sinus / ENT Issues</option>
                      <option value="Autoimmune">Complex / Autoimmune</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-primary text-white py-5 rounded-2xl font-bold shadow-2xl shadow-primary/20 hover:bg-[#154d2e] transition-all text-lg ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                        {isSubmitting ? "Processing..." : "Request Complete Evaluation"}
                    </motion.button>
                  </div>
                </form>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8"
              >
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary ring-4 ring-primary/10">
                  <Image 
                    src="/images/dr-nageswar.jpeg" 
                    alt="Dr. Vyakarnam"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2 font-heading tracking-tight">Evaluation Confirmed.</h3>
                  <p className="text-slate-600 font-medium">Expect a call from our specialists within <span className="text-primary font-bold">15 minutes</span>.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Next Steps</p>
                  <div className="space-y-3 text-sm font-medium text-slate-700">
                    <div className="flex gap-3"><div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-[10px]">1</div>Reviewing your condition profile</div>
                    <div className="flex gap-3"><div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-[10px]">2</div>Verifying specialist availability</div>
                    <div className="flex gap-3"><div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-[10px]">3</div>Coordinating your clinical recovery path</div>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/918074368748?text=${encodeURIComponent("Hi, I just submitted my evaluation form. I'd like to expedite my root-cause diagnosis.")}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                >
                  Want to expedite via WhatsApp? Click here.
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

