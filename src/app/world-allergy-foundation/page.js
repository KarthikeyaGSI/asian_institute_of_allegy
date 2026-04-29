"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Beaker, ShieldAlert, Leaf, Newspaper, ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Clinical Research",
    icon: Beaker,
    content: "Established in 2024, WAF bridges clinical practice and scientific literature. Led by Dr. Vyakarnam and Dr. Bhagheerathi, we focus on evidence-based therapies for treatment-resistant autoimmune and allergic conditions."
  },
  {
    title: "National Awareness",
    icon: Globe,
    content: "Our campaigns reach millions across India through digital media and public health sessions, focusing on early recognition and preventive care for allergic diseases."
  },
  {
    title: "Environmental Mapping",
    icon: Leaf,
    content: "Through the 'Allergen Forensic Laboratory', we integrate botany and clinical immunology to identify region-specific triggers like pollen and pollutants."
  }
];

const WAFActionForm = ({ type, title, description, buttonText, buttonStyle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = type === 'workshop' 
      ? `New Workshop Request from ${formData.name}`
      : `New Contribution Inquiry from ${formData.name}`;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "3c43e0ba-47fb-424c-9103-345682cc4a5a",
          subject: subject,
          from_name: "WAF Foundation",
          name: formData.name,
          phone: formData.phone,
        }),
      });

      const result = await response.json();

      if (result.success) {
        const waMessage = encodeURIComponent(
          `Hello World Allergy Foundation,\n\nI would like to ${type === 'workshop' ? 'request a workshop' : 'contribute to the foundation'}.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n\nPlease contact me.`
        );
        window.location.href = `https://wa.me/918074368748?text=${waMessage}`;
      } else {
        alert("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Redirecting to WhatsApp directly...");
      window.location.href = "https://wa.me/918074368748";
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative z-10 w-full">
      <span className={type === 'workshop' ? "text-primary-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block" : "text-white/40 font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block"}>{type === 'workshop' ? 'Educational Outreach' : 'Support the Mission'}</span>
      <h3 className="text-4xl font-bold mb-6 font-heading tracking-tight" dangerouslySetInnerHTML={{ __html: title }} />
      <p className={type === 'workshop' ? "text-white/60 text-lg mb-8 font-medium leading-relaxed" : "text-white/80 text-lg mb-8 font-medium leading-relaxed"}>{description}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Your Name" 
            className="w-full px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-accent"
            required
          />
        </div>
        <div>
          <input 
            type="tel" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            placeholder="Phone Number" 
            className="w-full px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-accent"
            required
          />
        </div>
        <button 
          type="submit"
          disabled={isSubmitting}
          className={buttonStyle + " w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-colors" + (isSubmitting ? " opacity-70 cursor-not-allowed" : "")}
        >
          {isSubmitting ? "Processing..." : buttonText} <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
};

export default function WorldAllergyFoundation() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      
      {/* Spacer for fixed Navbar */}
      <div className="h-[68px] md:h-[80px]" />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-40 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative w-32 h-32 mb-8 rounded-3xl shadow-xl ring-1 ring-slate-200 bg-white flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/WAF%20logo.jpg" 
                  alt="WAF Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Established 2024</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 font-heading">
              World Allergy <br/> Foundation
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
              Bridging clinical excellence, scientific research, and global public health awareness to solve the crisis of chronic inflammation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {sections.map((s, idx) => (
              <motion.div 
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <s.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold font-heading">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{s.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HPV Advocacy Campaign */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                <ShieldAlert size={14} /> Critical Advocacy
              </div>
              <h2 className="text-3xl md:text-6xl font-bold tracking-tight font-heading leading-tight">
                HPV Vaccination: <br/> <span className="text-red-600 font-medium italic">"NOT for All"</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium italic">
                "As a medically qualified citizen, I urge you to potentially prevent the calamity of flare-ups in Allergy & Autoimmune diseases." — Dr. Vyakarnam
              </p>
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">The Scientific Concern:</h4>
                <p className="text-slate-600 leading-relaxed">
                  While HPV vaccination is key for cancer prevention, WAF highlights risks associated with yeast-based recombinant vaccines. Research at Aswini Allergy Centre found a **40% yeast hypersensitivity prevalence** in screened patients.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <p className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-widest">WAF Recommendations:</p>
                <ul className="space-y-3">
                  {["Mandatory pre-vaccination clinical screening", "Detailed history for yeast hypersensitivity", "National referral protocols to specialists", "Strengthened post-vaccination monitoring"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-slate-200">
                <Image 
                  src="/images/World-Allergy-Foundation-Flags-Yeast-Allergy-Risks-in-Indias-HPV-Vaccine-Drive-1275x768.png" 
                  alt="HPV Campaign" 
                  fill 
                  className="object-cover"
                />
              </div>
              <p className="mt-6 text-xs text-slate-400 text-center font-medium italic">
                The campaign highlights that HPV vaccination should not be universally administered without prior screening.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Swaach Akash Abhiyan */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/10 opacity-30" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <span className="text-primary-accent font-bold tracking-[0.4em] uppercase text-xs">Pollution Monitoring</span>
              <h2 className="text-3xl md:text-6xl font-bold font-heading tracking-tight">Swaach Akash Abhiyan</h2>
              <p className="text-slate-300 text-xl font-medium leading-relaxed">
                A widespread periodic monitoring program across major Indian cities like Hyderabad and Warangal. We collect real pollution data to develop city-specific strategies for respiratory health.
              </p>
              <div className="flex items-center gap-4">
                <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/10 text-sm font-bold uppercase tracking-widest">Hyderabad Study</div>
                <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/10 text-sm font-bold uppercase tracking-widest">Warangal Study</div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-video bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
               <Image 
                 src="/images/Work shop on allegy.jpeg" 
                 alt="Pollution Workshop" 
                 fill 
                 className="object-cover opacity-50"
               />
               <span className="relative z-10 text-xs font-bold uppercase tracking-[0.5em] text-white/50">Field Research in Progress</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-20">
             <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4">Clinical Evidence</span>
             <h2 className="text-3xl md:text-6xl font-bold font-heading tracking-tight text-slate-900">Transformation Stories</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-200"
            >
              <Image 
                src="/images/Before-and-after-treatment-of-chronic-skin-allergy-with-swelling-and-ulcers-resolved-after-immunotherapy-at-Aswini-Allergy-Centre-Hyderabad-1275x7.png" 
                alt="Case Study" 
                fill 
                className="object-cover"
              />
            </motion.div>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-bold font-heading">The Case of Mr. Raghukumar</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                A 57-year-old government teacher from Khammam who battled chronic skin rashes and breathing issues for nearly **40 years**. 
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-primary rounded-full" />
                  <p className="text-slate-500 italic leading-relaxed">
                    "Unless the root cause—the immunological basis—is identified, patients remain dependent on temporary relief like steroids." — Dr. Vyakarnam
                  </p>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Within three months of scientifically guided immunotherapy and molecular hydrogen therapy, his decades-old ulcers resolved and swelling vanished completely.
                </p>
              </div>
              <div className="pt-6">
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Treatment Framework:</div>
                <div className="flex flex-wrap gap-3">
                   <span className="px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-600 border border-slate-100">Targeted Avoidance</span>
                   <span className="px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-600 border border-slate-100">Sublingual Immunotherapy</span>
                   <span className="px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-bold text-slate-600 border border-slate-100">Molecular Hydrogen Therapy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Footer */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 mb-12">
            <Newspaper className="text-primary" size={20} />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Global Recognition</span>
          </div>
          <div className="relative aspect-[21/9] w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-slate-200 mb-12">
            <Image 
              src="/images/Aswini-Allergy-Centre-Hyderabad-Achieves-National-Recognition-for-RootCause-Allergy-Management-1275x768.jpeg" 
              alt="National Recognition" 
              fill 
              className="object-cover"
            />
          </div>
          <h4 className="text-2xl font-bold font-heading mb-6 italic">"A Referral Hub for Complex Allergy & Immunological Conditions."</h4>
          <p className="text-slate-500 font-medium">Featured in European Sun Times, Deccan Herald, Deccan Chronicle, TV9 Telugu, and more.</p>
        </div>
      </section>

      {/* NEW: INVITE WORKSHOP & CONTRIBUTE */}
      <section id="workshop" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Invite Workshop */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />
              <WAFActionForm 
                type="workshop"
                title="Invite us to organize <br/> a workshop"
                description="Bring world-class allergy awareness to your institution, corporate office, or community center. We provide clinical insights and preventive strategies."
                buttonText="Request Workshop"
                buttonStyle="bg-white text-black hover:bg-primary-accent hover:text-white"
              />
            </motion.div>

            {/* Contribute */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />
              <WAFActionForm 
                type="contribute"
                title="Contribute to the <br/> Foundation"
                description="Your support fuels our clinical research, environmental mapping, and awareness campaigns for a healthier, allergy-free India."
                buttonText="Get Involved"
                buttonStyle="bg-black text-white hover:bg-white hover:text-black"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>

  );
}
