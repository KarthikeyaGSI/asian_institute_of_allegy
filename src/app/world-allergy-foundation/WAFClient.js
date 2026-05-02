"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Beaker, ShieldAlert, Leaf, Newspaper, ArrowRight, User, Briefcase, X, Maximize2 } from "lucide-react";
import MediaLogos from "@/components/sections/MediaLogos";
import Counter from "@/components/ui/Counter";


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
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-accent"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
  const [selectedImg, setSelectedImg] = useState(null);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImg(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Spacer for fixed Navbar */}
      <div className="h-[68px] md:h-[80px]" />

      <div data-header-theme="light">
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-64 h-64 md:w-80 md:h-80 mb-12 flex items-center justify-center perspective-1000 mx-auto"
              >
                <div className="relative w-full h-full mix-blend-multiply">
                  <Image
                    src="/images/world%20allergy%20foundation%20logo.jpeg"
                    alt="World Allergy Foundation Logo"
                    fill
                    className="object-contain cursor-zoom-in"
                    priority
                    onClick={() => setSelectedImg({ src: "/images/world allergy foundation logo.jpeg", alt: "World Allergy Foundation Logo" })}
                  />
                </div>
              </motion.div>
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Established 2024</span>
              <motion.h1 
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 font-heading"
              >
                {"World Allergy Foundation".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">

                Bridging clinical excellence, scientific research, and global public health awareness to solve the crisis of chronic inflammation.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => document.getElementById('workshop')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-primary text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all active:scale-95 shadow-xl"
                >
                  Join the Mission
                </button>
                <Link href="/clinical-success" className="px-8 py-4 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest text-xs border border-slate-200 hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                  View Success Stories
                </Link>
              </div>
            </div>
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
                  HPV Vaccination: <br /> <span className="text-red-600 font-medium italic">"NOT for All"</span>
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
                    alt="HPV Vaccination Safety Awareness Campaign"
                    fill
                    className="object-cover cursor-zoom-in"
                    onClick={() => setSelectedImg({ src: "/images/World-Allergy-Foundation-Flags-Yeast-Allergy-Risks-in-Indias-HPV-Vaccine-Drive-1275x768.png", alt: "HPV Vaccination Safety Awareness Campaign" })}
                  />
                </div>
                <p className="mt-6 text-xs text-slate-400 text-center font-medium italic">
                  The campaign highlights that HPV vaccination should not be universally administered without prior screening.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Avian Flu (H5N1) Advisory Section - PREMIUM REFINEMENT */}
        <section className="py-24 md:py-40 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="space-y-10 text-center">
              <div className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" /> Global Health Advisory
              </div>
              <h2 className="text-4xl md:text-7xl font-bold font-heading tracking-tight leading-[1.05] text-slate-900">
                H5N1: One <br /> <span className="text-primary italic font-medium underline decoration-primary/20 decoration-8 underline-offset-8">Mutation Away.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="space-y-6">
                  <p className="text-slate-600 leading-relaxed font-medium text-lg">
                    Recent reports from **Deccan Chronicle** highlight a critical emergence of Avian Flu (H5N1) in dairy animals. While human infections remain rare, the clinical severity is staggering.
                  </p>
                  <div className="p-8 bg-white/50 backdrop-blur-md rounded-[2rem] border border-slate-200/50 shadow-xl">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Fatality Rate</span>
                    <span className="text-4xl font-bold text-red-600"><Counter value="49" suffix="%" /> <span className="text-sm font-medium text-slate-500 ml-2">Global Average</span></span>
                  </div>
                </div>
                <div className="space-y-6 flex flex-col justify-center">
                  <p className="text-slate-500 text-lg leading-relaxed italic">
                    "With mortality exceeding 50% in symptomatic cases, the seriousness of this virus cannot be understated. We are monitoring the HPAI strains closely."
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <User size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 tracking-tight">Dr. Vyakarnam Nageshwar</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">President, World Allergy Foundation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {["Viral Pneumonia", "ARDS Risk", "Multi-organ Failure", "Dairy-to-Human Transfer"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-slate-100 rounded-lg text-[10px] md:text-[11px] font-bold text-slate-600 border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* Swaach Akash Abhiyan - DARK SECTION */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/10 opacity-30" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <span className="text-primary-accent font-bold tracking-[0.4em] uppercase text-xs">Pollution Monitoring</span>
              <h2 className="text-3xl md:text-6xl font-bold font-heading tracking-tight">Swaach Akash Abhiyan</h2>
              <p className="text-slate-300 text-xl font-medium leading-relaxed">
                A widespread periodic monitoring program across major Indian cities like **Hyderabad, Warangal, and throughout Telangana, India**. We collect real-time pollution data to develop city-specific strategies for respiratory health and allergy prevention.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square relative rounded-2xl overflow-hidden border border-white/10 group">
                  <Image src="/images/swatch1.jpg" alt="Pollution Study 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="aspect-square relative rounded-2xl overflow-hidden border border-white/10 group">
                  <Image src="/images/swatch2.jpg" alt="Pollution Study 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-video bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
              <Image
                src="/images/Work%20shop%20on%20allegy.jpeg"
                alt="Pollution Workshop"
                fill
                className="object-cover opacity-50"
              />
              <span className="relative z-10 text-xs font-bold uppercase tracking-[0.5em] text-white/50 text-center px-6">Field Research & Environmental Forensic Laboratory</span>
            </div>
          </div>
        </div>
      </section>

      <div data-header-theme="light">
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
      </div>

        {/* Surat Workshop Section */}
        <section className="py-24 md:py-32 bg-slate-50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#2563EB08_0%,transparent_50%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Medical Education</span>
              <h2 className="text-3xl md:text-6xl font-bold font-heading tracking-tight text-slate-900">Surat Clinical Workshop</h2>
              <p className="mt-6 text-slate-500 max-w-2xl mx-auto font-medium text-lg">
                World Allergy Foundation jointly conducted a high-impact session in Surat, Gujarat, empowering over **<Counter value="400" /> doctors** with advanced modalities of Allergies, Inflammation, and Immunotherapy.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { src: "/images/W1.jpg", span: "col-span-2 row-span-2" },
                { src: "/images/W2.jpg", span: "col-span-1 row-span-1" },
                { src: "/images/W3.jpg", span: "col-span-1 row-span-1" },
                { src: "/images/W4.jpg", span: "col-span-1 row-span-1" },
                { src: "/images/W5.jpg", span: "col-span-1 row-span-1" },
                { src: "/images/W6.jpg", span: "col-span-1 row-span-1" },
                { src: "/images/w7.jpg", span: "col-span-1 row-span-1" }
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className={`${img.span} relative aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm bg-white/5 group`}
                >
                  <Image
                    src={img.src}
                    alt={`Workshop image ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[1.5s] cursor-zoom-in"
                    onClick={() => setSelectedImg({ src: img.src, alt: `Surat Clinical Workshop Session ${idx + 1}` })}
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-0 border-[6px] border-white/10 rounded-2xl md:rounded-[2rem] pointer-events-none" />
                </motion.div>
              ))}
              <div className="col-span-1 flex items-center justify-center p-4 bg-primary/5 rounded-[2rem] border border-primary/10">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary text-center">Clinical Excellence <br /> Gujarat 2025</p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button 
                onClick={() => document.getElementById('workshop')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all active:scale-95 shadow-xl"
              >
                Request a Workshop for Your City
              </button>
            </div>
          </div>
        </section>


        {/* Aerobiology Legacy Section */}

        <section className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  <Beaker size={14} /> Scientific Legacy
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-heading leading-tight">
                  Pioneering <span className="text-primary">Aerobiology</span> <br /> in India
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Dr. Vyakarnam Nageshwar is among the elite few Medical Super Specialists in India dedicated to the field of Aerobiology.
                </p>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <p className="text-slate-600 italic leading-relaxed">
                    "His dedication to environmental immunology has earned him a place in the favored students list of **Dr. Sripad Agashe**, the Father of Indian Aerobiology, as documented in his seminal literature."
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-video relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm bg-white/5 group">
                  <Image
                    src="/images/Dr.Vyakarnam%20Nageshwar%20along%20with%20Dr.%20Sripad%20Agashe.jpg"
                    alt="Dr. Vyakarnam Nageshwar with Dr. Sripad Agashe - Father of Indian Aerobiology"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[2s] cursor-zoom-in"
                    onClick={() => setSelectedImg({ src: "/images/Dr.Vyakarnam Nageshwar along with Dr. Sripad Agashe.jpg", alt: "Dr. Vyakarnam Nageshwar with Dr. Sripad Agashe - Father of Indian Aerobiology" })}
                  />
                  <div className="absolute inset-0 border-[10px] border-white/5 rounded-[2rem] pointer-events-none" />
                </div>
                <p className="mt-6 text-xs text-slate-400 text-center font-medium italic">
                  National Conference at Mysore: Dr. Vyakarnam Nageshwar with Dr. Sripad Agashe.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Heritage & Legacy Section */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 w-full aspect-[4/5] md:aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200/50 backdrop-blur-sm bg-white/5 group">
                <Image
                  src="/images/Dr.Vyakarnam%20Nageshwar%20in%20his%20Medical%20%20College%20days%20in%20a%20public%20health%20event%20,%20along%20with%20%20his%20close%20associate%20&%20Guide%20FATHER%20OF%20TELANGANA%20STATE%20KALOJI%20NARAYANA%20RAO%20-%20THE%20PRAJA%20KAVI.jpg"
                  alt="Dr. Vyakarnam Nageshwar with Kaloji Narayana Rao - The Praja Kavi"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[2s] cursor-zoom-in"
                  onClick={() => setSelectedImg({ src: "/images/Dr.Vyakarnam Nageshwar in his Medical  College days in a public health event , along with  his close associate & Guide FATHER OF TELANGANA STATE KALOJI NARAYANA RAO - THE PRAJA KAVI.jpg", alt: "Dr. Vyakarnam Nageshwar with Kaloji Narayana Rao - The Praja Kavi" })}
                />
                <div className="absolute inset-0 border-[15px] border-white/10 rounded-[3rem] pointer-events-none" />
              </div>
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  Roots & Inspiration
                </div>
                <h2 className="text-3xl md:text-6xl font-bold font-heading tracking-tight text-slate-900 leading-[1.1]">The People's <br /> Physician.</h2>
                <p className="text-slate-600 text-lg font-medium leading-relaxed italic border-l-4 border-primary pl-6">
                  "Dr. Vyakarnam Nageshwar during his medical college days, participating in a transformative public health event alongside his close associate and guide."
                </p>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">Kaloji Narayana Rao</h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 block">The Praja Kavi | Father of Telangana State</p>
                  <p className="text-slate-500 leading-relaxed">
                    Dr.Vyakarnam Nageshwar in his Medical  College days in a public health event , along with  his close associate & Guide FATHER OF TELANGANA STATE KALOJI NARAYANA RAO - THE PRAJA KAVI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Green Channel Treaty Section - BENTO / GLASSMORPHISM STYLE */}
        <section className="py-24 md:py-40 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#2563EB15_0%,transparent_50%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-primary-accent font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Diplomatic Milestone</span>
              <h2 className="text-4xl md:text-7xl font-bold font-heading tracking-tight leading-tight text-white">The "Green Channel" <br /> <span className="text-primary-accent">Historic Treaty</span></h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Image Block - Bento Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 aspect-[16/10] relative rounded-[3rem] overflow-hidden shadow-2xl group border border-white/10"
              >
                <Image
                  src="/images/IK.webp"
                  alt="Historic Green Channel Treaty signing between India and Kenya for healthcare collaboration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 cursor-zoom-in"
                  onClick={() => setSelectedImg({ src: "/images/IK.webp", alt: "India-Kenya Green Channel Treaty Signing" })}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-xs font-black uppercase tracking-widest text-primary-accent mb-2">Global Cooperation</p>
                  <p className="text-xl font-medium leading-relaxed">India and Kenya Sign Historic MOU to Revolutionize Healthcare and Economic Development.</p>
                </div>
              </motion.div>

              {/* Info Blocks - Glassmorphism */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <h3 className="text-2xl font-bold mb-4 font-heading text-primary-accent">A Vision for <Counter value="14" suffix=" Million" /></h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    The Memorandum of Understanding (MOU) between WAF and the Lake Region Economic Bloc (LREB) of Kenya opens new avenues in medical tourism, capacity building, and research.
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem]">
                    <Globe className="text-primary-accent mb-4" size={24} />
                    <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-widest">Medical Tourism</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Seamless access to India's top specialists for African patients.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem]">
                    <Briefcase className="text-primary-accent mb-4" size={24} />
                    <h4 className="text-white font-bold text-sm mb-2 uppercase tracking-widest">Capacity Building</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">Specialized training for <Counter value="14000" /> healthcare professionals.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4">
              <div className="h-[1px] w-12 bg-white/10" /> Witnessed by Global Dignitaries <div className="h-[1px] w-12 bg-white/10" />
            </div>
          </div>
        </section>

        {/* International Diplomatic Presence */}
        <section className="py-24 bg-white overflow-hidden relative border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="flex-1 w-full aspect-video relative rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-200">
                <Image
                  src="/images/waf%20event%20senior%20deplomat%20hyd.jpg"
                  alt="Senior Diplomatic Officer from Ethiopia with Dr. Vyakarnam Nageshwar"
                  fill
                  className="object-cover object-top cursor-zoom-in"
                  onClick={() => setSelectedImg({ src: "/images/waf event senior deplomat hyd.jpg", alt: "International Diplomatic Presence: Ethiopia-India Collaboration" })}
                />
              </div>
              <div className="flex-1 space-y-8">
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Global Impact</span>
                <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight leading-tight">International <br /> Partnerships</h2>
                <p className="text-slate-600 text-xl font-medium leading-relaxed">
                  A **Senior Diplomatic Officer from Ethiopia** attending the World Allergy Foundation event in Hyderabad, fostering international clinical collaboration.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  These high-level interactions underscore WAF's commitment to sharing clinical breakthroughs in immunology with the global community, specifically focusing on region-specific allergen mapping.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Supreme Court Section */}
        <section className="py-24 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-200">
                  <Image
                    src="/images/SC.jpg"
                    alt="Dr. Vyakarnam Nageshwar at the Supreme Court of India in Delhi - Leading Allergy Advocacy"
                    fill
                    className="object-cover object-top cursor-zoom-in"
                    onClick={() => setSelectedImg({ src: "/images/SC.jpg", alt: "Policy Advocacy at the Supreme Court of India" })}
                  />
                </div>
              </motion.div>
              <div className="order-1 lg:order-2 space-y-8">
                <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  Legal & Policy Advocacy
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight">Supreme Court of India, Delhi</h2>
                <p className="text-slate-600 text-xl font-medium leading-relaxed">
                  Dr. Vyakarnam Nageshwar following an intensive interactive session on  Allergies & Immunology with senior Advocates at the Supreme Court.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  These sessions focus on the intersection of public health policy and legal frameworks to ensure better healthcare accessibility and awareness for allergic disorders at a national level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FTCCI Awareness Section */}
        <section className="py-24 bg-slate-50 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  Institutional Leadership
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight leading-tight">FTCCI Hyderabad: <br /> <span className="text-primary">Post-2020 Immune Trends</span></h2>
                <p className="text-slate-600 text-xl font-medium leading-relaxed italic">
                  "Changing Trends in Immune System Responses in Humans After 2020"
                </p>
                <p className="text-slate-500 leading-relaxed">
                  As President of the World Allergy Foundation, Dr. Vyakarnam Nageshwar delivered a keynote awareness session at the **Federation of Telangana Chambers of Commerce and Industry (FTCCI)**, addressing the evolving landscape of global immunity in the post-pandemic era.
                </p>
                <div className="pt-4">
                  <Link href="/gallery" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                    Explore Event Gallery <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-slate-200">
                  <Image
                    src="/images/ftcci.jpg"
                    alt="Dr. Vyakarnam Nageshwar at FTCCI Hyderabad - Post-2020 Immunity Keynote"
                    fill
                    className="object-cover cursor-zoom-in"
                    onClick={() => setSelectedImg({ src: "/images/ftcci.jpg", alt: "FTCCI Keynote: Changing Trends in Immunity Post-2020" })}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>




        {/* FTCCI Event Gallery - BENTO GRID REFINEMENT */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col items-center text-center mb-24">
              <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] mb-6">Impact Gallery</span>
              <h2 className="text-4xl md:text-7xl font-bold font-heading tracking-tight text-slate-900 leading-tight">FTCCI Hyderabad <br /> <span className="text-primary italic font-medium">In Action.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 auto-rows-[200px]">
              {/* Bento Grid layout */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-4 lg:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-xl border border-slate-100"
              >
                <Image src="/images/ft1.jpg" alt="FTCCI 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-2 lg:row-span-1 relative rounded-[2rem] overflow-hidden group shadow-xl border border-slate-100"
              >
                <Image src="/images/ft2.jpg" alt="FTCCI 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-3 lg:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-xl border border-slate-100"
              >
                <Image src="/images/ft3.jpg" alt="FTCCI 3" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-3 lg:row-span-1 relative rounded-[2rem] overflow-hidden group shadow-xl border border-slate-100"
              >
                <Image src="/images/ft4.jpg" alt="FTCCI 4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="lg:col-span-2 lg:row-span-1 relative rounded-[2rem] overflow-hidden group shadow-xl border border-slate-100"
              >
                <Image src="/images/ft5.jpg" alt="FTCCI 5" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="lg:col-span-3 lg:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-xl border border-slate-100"
              >
                <Image src="/images/ft6.jpg" alt="FTCCI 6" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="lg:col-span-2 lg:row-span-1 relative rounded-[2rem] overflow-hidden group shadow-xl border border-slate-100"
              >
                <Image src="/images/ft7.jpg" alt="FTCCI 7" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Impact & Media Gallery */}
        <section className="py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((num) => (
                <motion.div
                  key={`impact-${num}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: num * 0.1 }}
                  className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm bg-white/5 group"
                >
                  <Image
                  src={`/images/i${num}.jpg`}
                  alt={`Global Impact Image ${num}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[2s] cursor-zoom-in"
                  onClick={() => setSelectedImg({ src: `/images/i${num}.jpg`, alt: `Global Impact and Media Coverage - Image ${num}` })}
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 border-[8px] border-white/10 rounded-[2.5rem] pointer-events-none" />
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/gallery">
                <button className="px-8 py-4 bg-white text-dark rounded-full border border-slate-200 font-bold text-sm hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                  View All Images & Media Archives
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* World Allergy Week & Media Advisory Section */}
        <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-primary/5 opacity-20 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-20">
              <span className="text-primary-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Public Health Advocacy</span>
              <h2 className="text-3xl md:text-6xl font-bold font-heading tracking-tight mb-8 text-white">World Allergy Week 2025</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Leading the global conversation on allergic disorders through live interactive broadcasting and critical media advisories.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* TV9 Broadcast */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 relative group"
              >
                <div className="aspect-video relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/images/World%20Allergy%20Week%202025%20observed%20by%20Dr.Vyakarnam%20Nageshwar%20world%20Allergy%20Foundation%20by%20Broadcasting%20%20a%20LIVE%20interactive%20show%20about%20Alkergic%20disorders%20in%20TV9.jpg"
                    alt="TV9 Live Broadcast"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 cursor-zoom-in"
                    onClick={() => setSelectedImg({ src: "/images/World Allergy Week 2025 observed by Dr.Vyakarnam Nageshwar world Allergy Foundation by Broadcasting  a LIVE interactive show about Alkergic disorders in TV9.jpg", alt: "World Allergy Week 2025: Live Interactive Show on TV9" })}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-xl font-bold text-white">Interactive Session on Allergic Disorders</h3>
                  </div>
                </div>
              </motion.div>

              {/* Media Advisory 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative group h-full"
              >
                <div className="h-full aspect-[3/4] lg:aspect-auto relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/images/MA1.jpg"
                    alt="Media Advisory 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Media Advisory 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-1 relative group"
              >
                <div className="aspect-[3/4] relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/images/MA2.jpg"
                    alt="Media Advisory 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Media Context */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 bg-white/5 border border-white/10 p-10 md:p-16 rounded-[3rem] backdrop-blur-sm flex flex-col justify-center"
              >
                <h3 className="text-2xl md:text-4xl font-bold mb-6 font-heading text-primary-accent leading-tight">Critical Advisory: <br /> HMPV DOs & DONTs</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  World Allergy Foundation issued a specialized media advisory regarding Human Metapneumovirus (HMPV), providing the public with essential evidence-based guidelines to prevent respiratory complications.
                </p>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                  <div className="w-8 h-[1px] bg-white/20" /> Issued by WAF Advisory Board
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Media Partners & Recognition Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Media Impact</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">Widely Recognized by <br /> Global Media</h2>
              <MediaLogos />
            </div>

            <div className="mt-20 pt-20 border-t border-slate-100">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 mb-8">
                  <Newspaper className="text-primary" size={20} />
                  <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-400">Press Coverage</span>
                </div>
                <div className="relative aspect-[21/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-200 mb-10">
                  <Image
                    src="/images/Aswini-Allergy-Centre-Hyderabad-Achieves-National-Recognition-for-RootCause-Allergy-Management-1275x768.jpeg"
                    alt="National Recognition"
                    fill
                    className="object-cover cursor-zoom-in"
                    onClick={() => setSelectedImg({ src: "/images/Aswini-Allergy-Centre-Hyderabad-Achieves-National-Recognition-for-RootCause-Allergy-Management-1275x768.jpeg", alt: "National Recognition for Root-Cause Allergy Management" })}
                  />
                </div>
                <h4 className="text-2xl font-bold font-heading mb-6 italic text-slate-800">"A Referral Hub for Complex Allergy & Immunological Conditions."</h4>
                <p className="text-slate-500 font-medium leading-relaxed">Featured in CVR NEWS LIVE Analysis, European Sun Times, Deccan Herald, Deccan Chronicle, TV9 Telugu, and more.</p>
              </div>
            </div>
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
      </div>

      <Footer />
      
      {/* Premium Lightbox Experience */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[99999] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[85vh] aspect-auto rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg.src}
                alt={selectedImg.alt}
                width={1920}
                height={1080}
                className="w-full h-full object-contain"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium text-lg text-center">{selectedImg.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEO/AEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "World Allergy Foundation",
            "url": "https://asian-institute-of-allergy.vercel.app/world-allergy-foundation",
            "logo": "https://asian-institute-of-allergy.vercel.app/images/world%20allergy%20foundation%20logo.jpeg",
            "founder": {
              "@type": "Person",
              "name": "Dr. Vyakarnam Nageshwar"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "addressCountry": "India"
            },
            "description": "Global research and clinical foundation focused on environmental immunology and chronic allergy treatments.",
            "award": "National Recognition for Root-Cause Allergy Management"
          })
        }}
      />
    </main>
  );
}
