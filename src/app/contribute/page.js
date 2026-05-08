"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, ShieldCheck, Globe2, ArrowRight, MessageSquare } from "lucide-react";
import PhoneInput from "@/components/ui/PhoneInput";

export default function ContributePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "General Support"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "3c43e0ba-47fb-424c-9103-345682cc4a5a",
          subject: `New Contribution Interest from ${formData.name}`,
          from_name: "WAF Contribution Form",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          interest: formData.interest,
        }),
      });

      const result = await response.json();

      if (result.success) {
        const waMessage = encodeURIComponent(
          `Hello World Allergy Foundation,\n\nI am interested in contributing.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Interest:* ${formData.interest}\n\nPlease let me know how I can help.`
        );
        window.location.href = `https://wa.me/918074368748?text=${waMessage}`;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      window.location.href = "https://wa.me/918074368748";
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Heart className="text-primary-accent" size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Support the Mission</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight tracking-tighter">
                Fueling the <br />
                <span className="text-primary-accent italic">Future of Health.</span>
              </h1>
              
              <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                Your contribution enables us to map environmental allergens, fund clinical trials for treatment-resistant conditions, and bring awareness to millions.
              </p>

              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Clinical Research", desc: "Funding evidence-based therapies for autoimmune diseases." },
                  { icon: Globe2, title: "National Awareness", desc: "Digital campaigns reaching millions across India." },
                  { icon: MessageSquare, title: "Specialist Support", desc: "Direct specialist review for those in need." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary-accent shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
                {/* Glassmorphic highlights */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <h2 className="text-3xl font-bold mb-8 text-center">Inquiry for Contribution</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Dr. Sameer Khan"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary-accent/50 focus:outline-none transition-all placeholder:text-white/20"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 relative z-20">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Phone</label>
                      <PhoneInput
                        value={formData.phone}
                        onChange={(val) => setFormData({ ...formData, phone: val })}
                        required
                        dark={true}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Email</label>
                      <input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary-accent/50 focus:outline-none transition-all placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">I'm Interested In</label>
                    <select 
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary-accent/50 focus:outline-none transition-all appearance-none text-white"
                    >
                      <option className="bg-black" value="General Support">General Support</option>
                      <option className="bg-black" value="Clinical Research">Clinical Research Fund</option>
                      <option className="bg-black" value="Awareness Campaign">Awareness Campaign</option>
                      <option className="bg-black" value="Institutional Partnership">Institutional Partnership</option>
                    </select>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 rounded-2xl bg-primary-accent text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-all shadow-xl shadow-primary-accent/20 flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? "Processing..." : "Submit Inquiry"}
                    {!isSubmitting && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                  </button>

                  <p className="text-[9px] text-center text-white/30 uppercase tracking-[0.3em] mt-4 font-medium">
                    Confidential Submission • Secure Processing
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
