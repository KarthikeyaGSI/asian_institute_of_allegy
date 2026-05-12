"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence, useScroll, useSpring as useMotionSpring } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Globe, Beaker, ShieldAlert, Leaf, Newspaper, ArrowRight, User, Briefcase, X, Maximize2, 
  Sparkles, Layers, Zap, ArrowUp 
} from "lucide-react";
import MediaLogos from "@/components/sections/MediaLogos";
import Counter from "@/components/ui/Counter";
import PhoneInput from "@/components/ui/PhoneInput";
import Magnetic from "@/components/motion/Magnetic";
import TextReveal from "@/components/motion/TextReveal";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { fadeInUp, staggerContainer, easeLuxury } from "@/components/motion/variants";

// 2026-Grade Tilt Component with Premium Springs
const Tilt = ({ children, className = "" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 160, damping: 20, mass: 0.5 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`perspective-1000 ${className}`}
    >
      <motion.div style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </motion.div>
  );
};


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
      : type === 'popup'
        ? `New Lead Capture from WAF Popup: ${formData.name}`
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
      <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading tracking-tight">
        {title.split('<br/>').map((part, i) => (
          <span key={i}>{part}{i < title.split('<br/>').length - 1 && <br />}</span>
        ))}
      </h3>
      <p className={type === 'workshop' ? "text-white/60 text-base md:text-lg mb-8 font-medium leading-relaxed" : "text-white/80 text-base md:text-lg mb-8 font-medium leading-relaxed"}>{description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="sr-only" htmlFor={`${type}-name`}>Name</label>
          <input
            id={`${type}-name`}
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your Name"
            className="w-full px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary-accent"
            required
          />
        </div>
        <div className="relative z-20">
          <PhoneInput
            value={formData.phone}
            onChange={(val) => setFormData({ ...formData, phone: val })}
            required
            dark={true}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={buttonStyle + " w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs transition-colors" + (isSubmitting ? " opacity-70 cursor-not-allowed" : "")}
        >
          {isSubmitting ? "Processing..." : buttonText} <ArrowRight size={16} />
        </button>
      </form>
    </div>
  );
};

export default function WorldAllergyFoundation() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(true); // Initialize as true to avoid flash, then check in useEffect
  
  const { scrollYProgress } = useScroll();
  const scaleX = useMotionSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check localStorage for popup suppression
    const lastSeen = localStorage.getItem('waf_popup_seen');
    const now = new Date().getTime();
    
    // Show again only after 24 hours
    if (!lastSeen || now - parseInt(lastSeen) > 24 * 60 * 60 * 1000) {
      setHasShownPopup(false);
    }
  }, []);

  const triggerPopup = () => {
    setIsPopupOpen(true);
    setHasShownPopup(true);
    localStorage.setItem('waf_popup_seen', new Date().getTime().toString());
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
      
      // Trigger popup at 40% scroll (within the requested 30-50% range)
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 40 && !hasShownPopup) {
        triggerPopup();
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShownPopup]);

  // Trigger popup after 9 seconds (within the requested 8-10s range)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        triggerPopup();
      }
    }, 9000);
    return () => clearTimeout(timer);
  }, [hasShownPopup]);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedImg(null);
        setIsPopupOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-primary selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      <Navbar />

      {/* Spacer for fixed Navbar */}
      <div className="h-[68px] md:h-[80px]" />

      <div data-header-theme="light">
        {/* 1. Hero Section */}
        <section className="pt-24 md:pt-40 pb-16 md:pb-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">
            <div className="flex flex-col items-center text-center">
              <Tilt className="mb-8 md:mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative w-48 h-48 md:w-80 md:h-80 flex items-center justify-center mx-auto"
                >
                  <div className="relative w-full h-full mix-blend-multiply">
                    <Image
                      src="/images/world%20allergy%20foundation%20logo.webp"
                      alt="World Allergy Foundation Logo"
                      fill
                      className="object-contain cursor-zoom-in"
                      priority
                      onClick={() => setSelectedImg({ src: "/images/world%20allergy%20foundation%20logo.webp", alt: "World Allergy Foundation Logo" })}
                    />
                  </div>
                </motion.div>
              </Tilt>
              <ScrollReveal delay={0.2} className="text-center">
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 block">Established 2024</span>
                <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tight mb-6 md:mb-8 font-heading leading-tight md:leading-none">
                  <TextReveal text="World Allergy Foundation" />
                </h1>
                <TextReveal 
                  text="Bridging clinical excellence, scientific research, and global public health awareness to solve the crisis of chronic inflammation."
                  className="text-lg md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-medium mx-auto px-4 md:px-0"
                  delay={0.6}
                />
                <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center gap-4 px-6 sm:px-0">
                  <Magnetic strength={0.2}>
                    <button 
                      onClick={() => document.getElementById('workshop')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-10 py-5 bg-primary text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all active:scale-95 shadow-[0_20px_40px_-15px_rgba(26,95,58,0.4)]"
                    >
                      Join the Mission
                    </button>
                  </Magnetic>
                  <Magnetic strength={0.2}>
                    <Link href="/clinical-success" className="px-10 py-5 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest text-[10px] border border-slate-200 hover:bg-slate-50 transition-all block text-center active:scale-95 shadow-sm">
                      View Patient Stories
                    </Link>
                  </Magnetic>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 2. Core Pillars */}
        <section className="py-20 md:py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {sections.map((s, idx) => (
                <ScrollReveal key={s.title} delay={idx * 0.1}>
                  <div className="group space-y-6">
                    <div className="w-16 h-16 bg-primary/5 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                      <s.icon size={32} aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading">{s.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium text-base md:text-lg">{s.content}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Green Channel Treaty Section */}
        <section className="py-24 md:py-40 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#2563EB15_0%,transparent_50%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                <span className="text-primary-accent font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Diplomatic Milestone</span>
                <h2 className="text-3xl md:text-8xl font-bold font-heading tracking-tight leading-tight text-white">The "Green Channel" <br /> <span className="text-primary-accent italic">Historic Treaty</span></h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
              <div className="lg:col-span-7">
                <Tilt>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="aspect-[16/10] relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl group border border-white/10"
                  >
                    <Image
                      src="/images/IK.webp"
                      alt="Historic Green Channel Treaty Signing between India and Kenya"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 cursor-zoom-in"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      onClick={() => setSelectedImg({ src: "/images/IK.webp", alt: "India-Kenya Green Channel Treaty Signing" })}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-accent mb-3 md:mb-4">Global Cooperation</p>
                      <p className="text-xl md:text-3xl font-bold leading-tight">India and Kenya Sign Historic MOU to Revolutionize Healthcare.</p>
                    </div>
                  </motion.div>
                </Tilt>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-8">
                <ScrollReveal delay={0.2}>
                  <div className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-primary-accent">A Vision for <Counter value="14" suffix=" Million" /></h3>
                    <p className="text-slate-400 leading-relaxed text-base md:text-lg font-medium">
                      The MOU between WAF and the Lake Region Economic Bloc (LREB) of Kenya opens new avenues in medical tourism and research.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  {[
                    { icon: Globe, title: "Medical Tourism", desc: "Seamless access to India's top specialists." },
                    { icon: Briefcase, title: "Capacity Building", desc: "Specialized training for 14,000+ professionals." }
                  ].map((item, idx) => (
                    <ScrollReveal key={item.title} delay={0.3 + idx * 0.1}>
                      <div className="glass-card p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] hover:bg-white/10 transition-colors h-full">
                        <item.icon className="text-primary-accent mb-6" size={32} aria-hidden="true" />
                        <h4 className="text-white font-bold text-sm mb-3 uppercase tracking-widest">{item.title}</h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. International Diplomatic Presence */}
        <section className="py-24 bg-white overflow-hidden relative border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row-reverse gap-12 md:gap-20 items-center">
              <div className="flex-1 w-full">
                <Tilt>
                  <div className="aspect-video relative rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_64px_128px_-32px_rgba(0,0,0,0.15)] ring-1 ring-slate-200">
                    <Image
                      src="/images/waf%20event%20senior%20deplomat%20hyd.webp"
                      alt="Senior Diplomatic Officer at World Allergy Foundation Hyderabad Event"
                      fill
                      className="object-cover object-top cursor-zoom-in"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onClick={() => setSelectedImg({ src: "/images/waf%20event%20senior%20deplomat%20hyd.webp", alt: "International Diplomatic Presence: Ethiopia-India Collaboration" })}
                    />
                  </div>
                </Tilt>
              </div>
              <div className="flex-1 space-y-8 md:space-y-10 text-left">
                <ScrollReveal>
                  <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Global Impact</span>
                  <h2 className="text-3xl md:text-7xl font-bold font-heading tracking-tight leading-tight">International <br /> <span className="text-primary italic">Partnerships.</span></h2>
                  <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed">
                    A Senior Diplomatic Officer from Ethiopia attending the World Allergy Foundation event, fostering international clinical collaboration.
                  </p>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                    These interactions underscore WAF's commitment to sharing clinical breakthroughs in immunology with the global community.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Supreme Court Section */}
        <section className="py-24 bg-slate-50 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <Tilt>
                  <div className="relative aspect-[3/4] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-slate-200">
                    <Image
                      src="/images/SC.webp"
                      alt="Dr. Vyakarnam Nageshwar providing policy advocacy at the Supreme Court of India"
                      fill
                      className="object-cover object-top cursor-zoom-in"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onClick={() => setSelectedImg({ src: "/images/SC.webp", alt: "Policy Advocacy at the Supreme Court of India" })}
                    />
                  </div>
                </Tilt>
              </div>
              <div className="order-1 lg:order-2 space-y-8 md:space-y-10 text-left">
                <ScrollReveal>
                  <div className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                    <ShieldAlert size={16} aria-hidden="true" /> Legal & Policy Advocacy
                  </div>
                  <h2 className="text-3xl md:text-7xl font-bold font-heading tracking-tight leading-tight">Supreme Court <br /> of India.</h2>
                  <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed">
                    Intensive interactive sessions on Allergies & Immunology with senior Advocates at the Supreme Court of India.
                  </p>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                    Focusing on the intersection of public health policy and legal frameworks to ensure healthcare accessibility nationwide.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Aerobiology Legacy Section */}
        <section className="py-24 md:py-40 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="space-y-8 md:space-y-10 text-left">
                <ScrollReveal>
                  <div className="inline-flex items-center gap-3 bg-amber-50 text-amber-700 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                    <Beaker size={16} aria-hidden="true" /> Scientific Legacy
                  </div>
                  <h2 className="text-3xl md:text-7xl font-bold tracking-tight font-heading leading-tight">
                    Pioneering <span className="text-primary italic">Aerobiology</span> in India.
                  </h2>
                  <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                    Dr. Vyakarnam Nageshwar is among the elite few Medical Super Specialists in India dedicated to the field of Aerobiology.
                  </p>
                  <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-sm">
                    <p className="text-slate-600 italic text-base md:text-xl leading-relaxed font-medium">
                      "His dedication has earned him a place in the favored students list of Dr. Sripad Agashe, the Father of Indian Aerobiology."
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div>
                <Tilt>
                  <div className="aspect-video relative rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-white/20 group bg-slate-100">
                    <Image
                      src="/images/Dr.Vyakarnam%20Nageshwar%20along%20with%20Dr.%20Sripad%20Agashe.webp"
                      alt="Dr. Vyakarnam Nageshwar with Dr. Sripad Agashe - Father of Indian Aerobiology"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-[2s] cursor-zoom-in"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onClick={() => setSelectedImg({ src: "/images/Dr.Vyakarnam%20Nageshwar%20along%20with%20Dr.%20Sripad%20Agashe.webp", alt: "Dr. Vyakarnam Nageshwar with Dr. Sripad Agashe - Father of Indian Aerobiology" })}
                    />
                  </div>
                </Tilt>
                <p className="mt-6 md:mt-8 text-[10px] md:text-sm text-slate-400 text-center font-bold uppercase tracking-widest">
                  National Conference: Mysore Legacy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Heritage & Legacy Section */}
        <section className="py-24 md:py-40 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 opacity-20" />
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
              <div className="flex-1 w-full">
                <Tilt>
                  <div className="aspect-square relative rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_64px_128px_-32px_rgba(0,0,0,0.5)] border border-white/10 group">
                    <Image
                      src="/images/kal.webp"
                      alt="Heritage: Dr. Vyakarnam Nageshwar during medical college with Kaloji Narayana Rao"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-[2s] cursor-zoom-in"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onClick={() => setSelectedImg({ src: "/images/kal.webp", alt: "Dr. Vyakarnam Nageshwar with Kaloji Narayana Rao - The Praja Kavi" })}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  </div>
                </Tilt>
              </div>
              <div className="flex-1 space-y-8 md:space-y-10 text-left">
                <ScrollReveal>
                  <div className="inline-flex items-center gap-3 bg-primary/20 text-primary-accent px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                    <Sparkles size={16} aria-hidden="true" /> Roots & Inspiration
                  </div>
                  <h2 className="text-3xl md:text-8xl font-bold font-heading tracking-tight leading-none text-white">The People's <br /> <span className="text-primary-accent italic">Physician.</span></h2>
                  <p className="text-slate-300 text-xl md:text-2xl font-medium leading-relaxed italic border-l-4 md:border-l-8 border-primary pl-6 md:pl-10">
                    "Participating in a transformative public health event alongside his close associate and guide, Kaloji Narayana Rao."
                  </p>
                  <div className="space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Kaloji Narayana Rao</h3>
                    <p className="text-primary-accent font-black uppercase tracking-[0.4em] text-[10px]">The Praja Kavi | Father of Telangana State</p>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                      This historic moment during Dr. Vyakarnam's medical college days shaped the foundation of his clinical empathy and public health mission.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 8. HPV Advocacy Campaign */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="space-y-8 md:space-y-10 text-left">
                <ScrollReveal>
                  <div className="inline-flex items-center gap-3 bg-red-50 text-red-600 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                    <ShieldAlert size={16} aria-hidden="true" /> Critical Advocacy
                  </div>
                  <h2 className="text-3xl md:text-7xl font-bold tracking-tight font-heading leading-tight">
                    HPV Vaccine: <br /> <span className="text-red-600 italic font-medium">"NOT for All."</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium italic">
                    "I urge you to prevent the calamity of flare-ups in Allergy & Autoimmune diseases."
                  </p>
                  <div className="p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-100">
                    <p className="text-[10px] font-black text-slate-900 mb-6 uppercase tracking-[0.3em]">WAF Policy Recommendations:</p>
                    <ul className="grid grid-cols-1 gap-4">
                      {["Mandatory pre-vaccination clinical screening", "Detailed yeast hypersensitivity audit", "National referral protocols to specialists", "Post-vaccination immune monitoring"].map((item) => (
                        <li key={item} className="flex items-center gap-4 text-slate-600 text-base md:text-lg font-medium">
                          <Zap size={16} className="text-red-500" aria-hidden="true" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

              <div>
                <Tilt>
                  <div className="aspect-video relative rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-slate-200 group">
                    <Image
                      src="/images/World-Allergy-Foundation-Flags-Yeast-Allergy-Risks-in-Indias-HPV-Vaccine-Drive-1275x768.webp"
                      alt="HPV Vaccine Safety Campaign by World Allergy Foundation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] cursor-zoom-in"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onClick={() => setSelectedImg({ src: "/images/World-Allergy-Foundation-Flags-Yeast-Allergy-Risks-in-Indias-HPV-Vaccine-Drive-1275x768.webp", alt: "HPV Vaccination Safety Awareness Campaign" })}
                    />
                  </div>
                </Tilt>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Avian Flu (H5N1) Advisory */}
        <section className="py-24 md:py-40 bg-slate-50 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="space-y-12 text-center">
                <div className="inline-flex items-center gap-3 bg-red-100 text-red-700 px-6 md:px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
                  <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse" /> Global Health Advisory
                </div>
                <h2 className="text-4xl md:text-9xl font-bold font-heading tracking-tighter leading-none text-slate-950">
                  H5N1: One <br /> <span className="text-primary italic font-medium underline decoration-primary/20 decoration-[10px] md:decoration-[16px] underline-offset-[12px] md:underline-offset-[20px]">Mutation Away.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-left mt-16 md:mt-20">
                  <div className="space-y-8">
                    <p className="text-slate-600 leading-relaxed font-medium text-xl md:text-2xl">
                      Recent reports highlight a critical emergence of Avian Flu in dairy animals.
                    </p>
                    <div className="p-10 md:p-12 bg-white rounded-[3rem] md:rounded-[4rem] border border-slate-200 shadow-2xl group hover:-translate-y-4 transition-transform duration-500">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 block mb-4">Fatality Indicator</span>
                      <span className="text-4xl md:text-6xl font-bold text-red-600">HIGH <span className="text-xs md:text-sm font-medium text-slate-500 ml-2 md:ml-4 tracking-widest uppercase">Clinical Risk</span></span>
                    </div>
                  </div>
                  <div className="space-y-10 flex flex-col justify-center">
                    <p className="text-slate-500 text-xl md:text-2xl leading-relaxed italic font-medium border-l-4 border-slate-200 pl-6 md:pl-10">
                      "With mortality being high in cases, the seriousness of this virus cannot be understated."
                    </p>
                    <div className="flex items-center gap-5 md:gap-6 pt-10 border-t border-slate-200">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-primary flex items-center justify-center text-white shadow-xl">
                        <User size={32} className="md:w-10 md:h-10" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">Dr. Vyakarnam Nageshwar</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black mt-2">President, WAF</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 10. COVID-19 Vaccination Advisory */}
        <section className="py-24 md:py-40 bg-white overflow-hidden relative border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <Tilt>
                  <div className="relative aspect-video rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-slate-200">
                    <Image
                      src="/images/covid-vaccination-advisory.webp"
                      alt="Advisory Messaging on Allergy Patients & COVID-19 Vaccination"
                      fill
                      className="object-cover cursor-zoom-in"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      onClick={() => setSelectedImg({ src: "/images/covid-vaccination-advisory.webp", alt: "COVID-19 Vaccination Advisory for Allergy Patients" })}
                    />
                  </div>
                </Tilt>
              </div>
              <div className="order-1 lg:order-2 space-y-8 md:space-y-10 text-left">
                <ScrollReveal>
                  <div className="inline-flex items-center gap-3 bg-primary/5 text-primary px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
                    <ShieldAlert size={16} aria-hidden="true" /> Global Health Advisory
                  </div>
                  <h2 className="text-3xl md:text-6xl font-bold font-heading tracking-tight leading-tight">
                    Advisory Messaging on <br /> <span className="text-primary italic">Allergy Patients & COVID-19.</span>
                  </h2>
                  <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed">
                    WAF has highlighted the importance of clinical consultation before vaccination in individuals with:
                  </p>
                  <div className="p-8 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-100">
                    <ul className="grid grid-cols-1 gap-4">
                      {[
                        "Severe allergic histories",
                        "Uncontrolled allergic conditions",
                        "Complex immunological disorders"
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-4 text-slate-600 text-base md:text-lg font-medium">
                          <div className="w-2 h-2 rounded-full bg-primary" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium italic border-l-4 border-primary pl-6">
                    "This messaging aligns with a general principle in medicine: High-risk patients should consult specialists before interventions."
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Transformation Stories */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Clinical Evidence</span>
                <h2 className="text-3xl md:text-8xl font-bold font-heading tracking-tight text-slate-950">Patient Results.</h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
              <Tilt>
                <div className="relative aspect-[4/3] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl ring-1 ring-slate-200 group cursor-zoom-in" onClick={() => setSelectedImg({ src: "/images/Before-and-after-treatment-of-chronic-skin-allergy-with-swelling-and-ulcers-resolved-after-immunotherapy-at-Aswini-Allergy-Centre-Hyderabad-1275x7.webp", alt: "Clinical Result showing skin allergy resolution at Aswini Allergy Centre" })}>
                  <Image
                    src="/images/Before-and-after-treatment-of-chronic-skin-allergy-with-swelling-and-ulcers-resolved-after-immunotherapy-at-Aswini-Allergy-Centre-Hyderabad-1275x7.webp"
                    alt="Clinical Result showing skin allergy resolution at Aswini Allergy Centre"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Tilt>

              <div className="space-y-8 md:space-y-10 text-left">
                <ScrollReveal>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading">Case Study: Mr. Raghukumar</h3>
                  <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed">
                    Battle with chronic skin ulcers and respiratory distress for nearly 40 years resolved in months.
                  </p>
                  <div className="space-y-8">
                    <p className="text-slate-500 italic text-lg md:text-xl leading-relaxed font-medium border-l-4 border-primary pl-6 md:pl-8">
                      "Identification of the immunological basis is the only path to permanent relief."
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["Targeted Avoidance", "Molecular Therapy"].map(tag => (
                        <div key={tag} className="px-6 md:px-8 py-3 md:py-4 bg-slate-50 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 border border-slate-100 text-center">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Swaach Akash Abhiyan */}
        <section className="py-24 md:py-40 bg-slate-950 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
              <div className="flex-1 space-y-10 text-left w-full">
                <ScrollReveal>
                  <span className="text-primary-accent font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Environmental Forensic</span>
                  <h2 className="text-3xl md:text-8xl font-bold font-heading tracking-tight text-white">Swaach Akash Abhiyan <br /> <span className="text-primary-accent italic">(Clean air Mission).</span></h2>
                  <p className="text-slate-300 text-xl md:text-2xl font-medium leading-relaxed">
                    A widespread monitoring program across Indian cities like Hyderabad and Warangal.
                  </p>
                  <div className="grid grid-cols-2 gap-4 md:gap-8">
                    <Tilt><div className="aspect-square relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl cursor-zoom-in" onClick={() => setSelectedImg({ src: "/images/swatch1.webp", alt: "Air Pollution Research Study 1" })}><Image src="/images/swatch1.webp" alt="Air Pollution Research Study 1" fill className="object-cover" sizes="(max-width: 768px) 45vw, 25vw" /></div></Tilt>
                    <Tilt><div className="aspect-square relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl cursor-zoom-in" onClick={() => setSelectedImg({ src: "/images/swatch2.webp", alt: "Air Pollution Research Study 2" })}><Image src="/images/swatch2.webp" alt="Air Pollution Research Study 2" fill className="object-cover" sizes="(max-width: 768px) 45vw, 25vw" /></div></Tilt>
                  </div>
                </ScrollReveal>
              </div>
              <div className="flex-1 w-full">
                <Tilt>
                  <div className="aspect-video relative rounded-[2rem] md:rounded-[5rem] overflow-hidden shadow-2xl border border-white/10 group cursor-zoom-in" onClick={() => setSelectedImg({ src: "/images/Work%20shop%20on%20allegy.webp", alt: "Field Research and Allergen Workshop" })}>
                    <Image src="/images/Work%20shop%20on%20allegy.webp" alt="Field Research and Allergen Workshop" fill className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.6em] md:tracking-[0.8em] text-white text-center px-6">Allergen Forensic Lab</span>
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Surat Workshop */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-24">
                <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Medical Education</span>
                <h2 className="text-3xl md:text-8xl font-bold font-heading tracking-tight text-slate-950">Clinical Workshop.</h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { src: "/images/W1.webp", span: "col-span-2 row-span-2" },
                { src: "/images/W2.webp", span: "col-span-1 row-span-1" },
                { src: "/images/W3.webp", span: "col-span-1 row-span-1" },
                { src: "/images/W4.webp", span: "col-span-1 row-span-1" }
              ].map((img, idx) => (
                <Tilt key={idx} className={img.span}>
                  <div className="relative h-full aspect-square rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 cursor-zoom-in" onClick={() => setSelectedImg({ src: img.src, alt: `Medical Education Workshop Session ${idx + 1}` })}>
                    <Image src={img.src} alt={`Medical Education Workshop Session ${idx + 1}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        </section>

        {/* 14. Team Section */}
        <section className="py-24 md:py-40 bg-white overflow-hidden border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-24">
                <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Our Leadership</span>
                <h2 className="text-3xl md:text-8xl font-bold font-heading tracking-tight text-slate-950">The Team.</h2>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
              {/* 1. Dr. Vyakarnam Nageshwar */}
              <ScrollReveal>
                <motion.div whileTap={{ scale: 0.99 }} className="group space-y-8">
                  <Tilt>
                    <div 
                      className="aspect-[4/5] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group-hover:shadow-primary/20 transition-all duration-700 cursor-zoom-in"
                      onClick={() => setSelectedImg({ src: "/images/dr-nageswar.webp", alt: "Dr. Vyakarnam Nageshwar" })}
                    >
                      <Image
                        src="/images/dr-nageswar.webp"
                        alt="Dr. Vyakarnam Nageshwar"
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </Tilt>
                  <div className="space-y-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-950">Dr. Vyakarnam Nageshwar</h3>
                    <p className="text-primary font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px]">MD, Founder & President</p>
                    <p className="text-slate-500 font-bold text-sm md:text-base px-2">Chief Immunologist: Asian Institute of Allergy</p>
                    <div className="space-y-3 pt-6 border-t border-slate-100 text-left">
                      {[
                        "Pioneer of Sublingual Immunotherapy (SLIT) in India.",
                        "Expert in Aerobiology and Molecular Immunology.",
                        "Over 50,000 cases resolved through precision medicine.",
                        "Dedicated to root-cause diagnosis of chronic inflammation.",
                        "Global advocate for allergy awareness and research."
                      ].map((point, idx) => (
                        <div key={idx} className="flex gap-3 text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                          <div className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* 2. Dr. Bhagheerathi Kalidass */}
              <ScrollReveal delay={0.1}>
                <motion.div whileTap={{ scale: 0.99 }} className="group space-y-8">
                  <Tilt>
                    <div 
                      className="aspect-[4/5] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group-hover:shadow-primary/20 transition-all duration-700 cursor-zoom-in"
                      onClick={() => setSelectedImg({ src: "/images/Dr.%20Bhagheerathi%20Kalidass.webp", alt: "Dr. Bhagheerathi Kalidass" })}
                    >
                      <Image
                        src="/images/Dr.%20Bhagheerathi%20Kalidass.webp"
                        alt="Dr. Bhagheerathi Kalidass"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </Tilt>
                  <div className="space-y-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-950">Dr. Bhagheerathi Kalidass</h3>
                    <p className="text-primary font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px]">MBBS DNB, CGMP, CFM</p>
                    <p className="text-slate-500 font-bold text-sm md:text-base px-2">Director: Asian Institute of Allergy Hyderabad</p>
                    <div className="space-y-3 pt-6 border-t border-slate-100 text-left">
                      {[
                        "Senior Radiologist with 15yrs+ experience.",
                        "Certified expert in Fetal Medicine.",
                        "Expert in Molecular Therapeutics.",
                        "Specialist in Stem cell therapy.",
                        "HOD of Chronic Inflammatory disorders unit."
                      ].map((point, idx) => (
                        <div key={idx} className="flex gap-3 text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                          <div className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* 3. Dr. Shivaranjani */}
              <ScrollReveal delay={0.2}>
                <motion.div whileTap={{ scale: 0.99 }} className="group space-y-8">
                  <Tilt>
                    <div 
                      className="aspect-[4/5] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group-hover:shadow-primary/20 transition-all duration-700 cursor-zoom-in"
                      onClick={() => setSelectedImg({ src: "/images/Dr Shivaranjani.webp", alt: "Dr. Shivaranjani" })}
                    >
                      <Image
                        src="/images/Dr Shivaranjani.webp"
                        alt="Dr. Shivaranjani"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </Tilt>

                  <div className="space-y-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-950">Dr. Shivaranjani</h3>
                    <p className="text-primary font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px]">Pharm D</p>
                    <p className="text-slate-500 font-bold text-sm md:text-base px-2">Advisor & Consultant: Drug Interactions</p>
                    
                    <div className="py-4 border-y border-slate-100 my-6">
                      <p className="text-slate-600 italic text-sm md:text-base leading-relaxed font-medium px-4">
                        "Every Step of Life matter, Every Learning point is a Guided Growth Factor."
                      </p>
                    </div>

                    <div className="space-y-3 pt-6 text-left">
                      {[
                        "Decade of Pharma industry experience.",
                        "Expert in Allergen Immunotherapy protocols.",
                        "Consultant: Drug Interactions.",
                        "Featured in Republic World Network among INDIA'S TOP 15 Visionary Entrepreneurs in 2026."
                      ].map((point, idx) => (
                        <div key={idx} className="flex gap-3 text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                          <div className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* 4. Dr. Kavya Lalam */}
              <ScrollReveal delay={0.3}>
                <motion.div whileTap={{ scale: 0.99 }} className="group space-y-8">
                  <Tilt>
                    <div 
                      className="aspect-[4/5] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group-hover:shadow-primary/20 transition-all duration-700 cursor-zoom-in"
                      onClick={() => setSelectedImg({ src: "/images/Dr. Kavya.webp", alt: "Dr. Kavya Lalam" })}
                    >
                      <Image
                        src="/images/Dr. Kavya.webp"
                        alt="Dr. Kavya Lalam"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </Tilt>

                  <div className="space-y-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-950">Dr. Kavya Lalam</h3>
                    <p className="text-primary font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px]">Physician Asst.</p>
                    <p className="text-slate-500 font-bold text-sm md:text-base px-2">Expert in Immune Nutrition & Functional Medicine</p>
                    
                    <div className="space-y-3 pt-6 border-t border-slate-100 text-left">
                      <p className="text-slate-600 text-[11px] md:text-xs leading-relaxed font-medium italic">
                        Dr. Kavya Lalam is a Doctorate in Immune Nutrition and Functional Medicine Expert at Ashwini Allergy Center.
                      </p>
                      {[
                        "Specializes in nutritional approaches for chronic inflammation.",
                        "Focus areas include Allergic Rhinitis, Urticaria, and Psoriasis.",
                        "Expertise in childhood allergic manifestations.",
                        "Integrates personalized nutrition with functional medicine."
                      ].map((point, idx) => (
                        <div key={idx} className="flex gap-3 text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                          <div className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* 5. Mr. Sivakumar Thotapalli */}
              <ScrollReveal delay={0.4}>
                <motion.div whileTap={{ scale: 0.99 }} className="group space-y-8">
                  <Tilt>
                    <div 
                      className="aspect-[4/5] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group-hover:shadow-primary/20 transition-all duration-700 cursor-zoom-in"
                      onClick={() => setSelectedImg({ src: "/images/Sivakumar.webp", alt: "Mr. Sivakumar Thotapalli" })}
                    >
                      <Image
                        src="/images/Sivakumar.webp"
                        alt="Mr. Sivakumar Thotapalli"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </Tilt>

                  <div className="space-y-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-950">Mr. Sivakumar Thotapalli</h3>
                    <p className="text-primary font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px]">Public Health Advisor</p>
                    <p className="text-slate-500 font-bold text-sm md:text-base px-2">Global Health & Policy Advocate</p>
                    <div className="space-y-3 pt-6 border-t border-slate-100 text-left">
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium italic text-center">
                        "Contributing an international perspective to allergy awareness."
                      </p>
                      <div className="space-y-2">
                        <p className="text-slate-600 text-[11px] md:text-xs leading-relaxed">
                          Supports initiatives related to allergy awareness and preventive healthcare.
                        </p>
                        <p className="text-slate-600 text-[11px] md:text-xs leading-relaxed">
                          Engaged in global platforms like the World Health Summit, G20, G7, SDG summit, HLPF event, COP and COY.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* 6. Vyakaranam Padma */}
              <ScrollReveal delay={0.5}>
                <motion.div whileTap={{ scale: 0.99 }} className="group space-y-8">
                  <Tilt>
                    <div 
                      className="aspect-[4/5] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 group-hover:shadow-primary/20 transition-all duration-700 cursor-zoom-in"
                      onClick={() => setSelectedImg({ src: "/images/Padma%20Vyakarnam.webp", alt: "Ms. Vyakaranam Padma" })}
                    >
                      <Image
                        src="/images/Padma%20Vyakarnam.webp"
                        alt="Ms. Vyakaranam Padma"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </Tilt>
                  <div className="space-y-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-950">Vyakaranam Padma</h3>
                    <p className="text-primary font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px]">Senior Advisor – Legal</p>
                    <p className="text-slate-500 font-bold text-sm md:text-base px-2">Medico-Legal, IP & Cyber Law</p>
                    <div className="space-y-3 pt-6 border-t border-slate-100 text-left">
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium italic text-center">
                        "Nearly two decades of experience across medico-legal matters and cyber law."
                      </p>
                      <div className="space-y-2">
                        <p className="text-slate-600 text-[11px] md:text-xs leading-relaxed">
                          Ms. Padma holds an LL.M. and PG Diploma in Cybersecurity and IPR.
                        </p>
                        <p className="text-slate-600 text-[11px] md:text-xs leading-relaxed">
                          Worked extensively on healthcare dispute resolution and patents.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 15. Republic World Network Feature */}
        <section className="py-24 md:py-40 bg-white overflow-hidden relative border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-24">
                <span className="text-primary font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Global Recognition</span>
                <h2 className="text-3xl md:text-8xl font-bold font-heading tracking-tight text-slate-950 leading-none">Republic World <br /> <span className="text-primary italic">Network.</span></h2>
                <p className="mt-8 text-xl md:text-3xl font-bold text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Featured among INDIA'S TOP 15 <span className="text-primary">Visionary Entrepreneurs</span> in 2026.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {[
                { src: "/images/republic tv featured.jpg", alt: "Republic World Network: Visionary Entrepreneurs 2026" },
                { src: "/images/republic tv featured 2.jpg", alt: "Republic World Network: Recognition of Excellence" }
              ].map((img, idx) => (
                <ScrollReveal key={idx} delay={0.2 * idx}>
                  <Tilt>
                    <div 
                      className="aspect-video relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_64px_128px_-32px_rgba(0,0,0,0.15)] ring-1 ring-slate-200 group cursor-zoom-in"
                      onClick={() => setSelectedImg({ src: img.src, alt: img.alt })}
                    >
                      <Image 
                        src={img.src} 
                        alt={img.alt} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </Tilt>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 16. Media Recognition */}
        <section className="py-24 md:py-40 bg-slate-950 text-white relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-24">
                <span className="text-primary-accent font-black tracking-[0.5em] uppercase text-[10px] mb-6 block">Global Presence</span>
                <h2 className="text-3xl md:text-8xl font-bold font-heading tracking-tight text-white leading-none">World Heritage <br /> <span className="text-primary-accent italic">Week 2025.</span></h2>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="lg:col-span-1">
                <Tilt>
                  <div 
                    className="aspect-[4/5] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group cursor-zoom-in"
                    onClick={() => setSelectedImg({ 
                      src: "/images/World%20Allergy%20Week%202025%20observed%20by%20Dr.Vyakarnam%20Nageshwar%20world%20Allergy%20Foundation%20by%20Broadcasting%20%20a%20LIVE%20interactive%20show%20about%20Alkergic%20disorders%20in%20TV9.webp", 
                      alt: "Dr. Vyakarnam Nageshwar broadcasting LIVE for World Heritage Week on TV9" 
                    })}
                  >
                    <Image 
                      src="/images/World%20Allergy%20Week%202025%20observed%20by%20Dr.Vyakarnam%20Nageshwar%20world%20Allergy%20Foundation%20by%20Broadcasting%20%20a%20LIVE%20interactive%20show%20about%20Alkergic%20disorders%20in%20TV9.webp" 
                      alt="Dr. Vyakarnam Nageshwar broadcasting LIVE for World Heritage Week on TV9" 
                      fill 
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                </Tilt>
              </div>
              <div className="lg:col-span-1">
                <Tilt>
                  <div 
                    className="aspect-[3/4] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 cursor-zoom-in"
                    onClick={() => setSelectedImg({ src: "/images/MA1.webp", alt: "Health Advisory and Clinical Insights - Page 1" })}
                  >
                    <Image src="/images/MA1.webp" alt="Health Advisory Page 1" fill className="object-contain bg-white" sizes="(max-width: 1024px) 100vw, 33vw" />
                  </div>
                </Tilt>
              </div>
              <div className="lg:col-span-1">
                <Tilt>
                  <div 
                    className="aspect-[3/4] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 cursor-zoom-in"
                    onClick={() => setSelectedImg({ src: "/images/MA2.webp", alt: "Health Advisory and Clinical Insights - Page 2" })}
                  >
                    <Image src="/images/MA2.webp" alt="Health Advisory Page 2" fill className="object-contain bg-white" sizes="(max-width: 1024px) 100vw, 33vw" />
                  </div>
                </Tilt>
              </div>
            </div>
            
            <div className="mt-20 md:mt-32 pt-20 md:pt-32 border-t border-white/10">
              <ScrollReveal>
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-12 uppercase tracking-[0.4em] text-white/40">Recognized By</h3>
                  <MediaLogos />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 16. CTA */}
        <section id="workshop" className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <Tilt className="h-full">
                <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-white relative overflow-hidden h-full">
                  <WAFActionForm
                    type="workshop"
                    title="Invite a <br/> Workshop."
                    description="Bring world-class clinical insights to your institution."
                    buttonText="Request Session"
                    buttonStyle="bg-white text-black hover:bg-primary-accent"
                  />
                </div>
              </Tilt>
              <Tilt className="h-full">
                <div className="bg-primary rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-white relative overflow-hidden h-full">
                  <WAFActionForm
                    type="contribute"
                    title="Fuel the <br/> Research."
                    description="Support clinical research and environmental mapping."
                    buttonText="Contribute Now"
                    buttonStyle="bg-black text-white hover:bg-white hover:text-black"
                  />
                </div>
              </Tilt>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-[90] p-4 bg-primary text-white rounded-full shadow-2xl hover:bg-slate-900 transition-colors active:scale-90 md:active:scale-95"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}

        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[99999] bg-slate-950/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.button 
              aria-label="Close image preview"
              className="absolute top-6 right-6 md:top-12 md:right-12 text-white/50 hover:text-white" 
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </motion.button>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative max-w-7xl w-full max-h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10" onClick={e => e.stopPropagation()}>
              <Image src={selectedImg.src} alt={selectedImg.alt} width={1920} height={1080} className="w-full h-full object-contain" />
              <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12 text-center text-white text-sm md:text-xl font-bold tracking-tight bg-black/40 backdrop-blur-md py-4 rounded-2xl">{selectedImg.alt}</div>
            </motion.div>
          </motion.div>
        )}

        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] bg-slate-950/40 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsPopupOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative max-w-lg w-full bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="text-primary-accent" size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">Join the Mission</h3>
                <p className="text-white/60 text-sm md:text-base">Get the latest clinical breakthroughs and research updates directly.</p>
              </div>

              <WAFActionForm
                type="popup"
                title=""
                description=""
                buttonText="Connect with WAF"
                buttonStyle="bg-primary text-white hover:bg-primary-accent"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "World Allergy Foundation",
            "alternateName": "WAF",
            "url": "https://asian-institute-of-allergy.vercel.app/world-allergy-foundation",
            "logo": "https://asian-institute-of-allergy.vercel.app/images/world%20allergy%20foundation%20logo.webp",
            "founder": { 
              "@type": "Person", 
              "name": "Dr. Vyakarnam Nageshwar",
              "jobTitle": "President",
              "description": "Pioneer in Aerobiology and Molecular Immunology."
            },
            "member": [
              {
                "@type": "Person",
                "name": "Dr. Bhagheerathi Kalidass",
                "jobTitle": "Director",
                "description": "Expert in Molecular Therapeutics and Radiology."
              },
              {
                "@type": "Person",
                "name": "Dr. Shivaranjani",
                "jobTitle": "Advisor & Consultant",
                "description": "Specialist in Drug Interactions."
              },
              {
                "@type": "Person",
                "name": "Dr. Kavya Lalam",
                "jobTitle": "Physician Asst.",
                "description": "Doctorate in Immune Nutrition and Functional Medicine."
              },
              {
                "@type": "Person",
                "name": "Mr. Sivakumar Thotapalli",
                "jobTitle": "Public Health Advisor",
                "description": "Global Health & Policy Advocate."
              },
              {
                "@type": "Person",
                "name": "Vyakaranam Padma",
                "jobTitle": "Senior Advisor",
                "description": "Medico-Legal and IP Law Specialist."
              }
            ],
            "description": "Global research and clinical foundation focused on environmental immunology, chronic inflammation mapping (Swaach Akash Abhiyan), and health advocacy.",
            "knowsAbout": [
              "Environmental Immunology",
              "Aerobiology",
              "Molecular Therapeutics",
              "HPV Vaccine Safety",
              "H5N1 Avian Flu Policy"
            ],
            "areaServed": "Global",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "addressCountry": "India"
            }
          })
        }}
      />
    </main>
  );
}
