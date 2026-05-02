"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, LayoutGrid, Globe, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Magnetic from "@/components/effects/Magnetic";

const navLinks = [
  { name: "Treatments", href: "/treatments" },
  { name: "Patient Stories", href: "/clinical-success" },
  { name: "World Allergy Foundation", href: "/world-allergy-foundation" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerTheme, setHeaderTheme] = useState("dark"); // Default dark for Hero
  const pathname = usePathname();
  
  const isWAF = pathname === "/world-allergy-foundation";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);

      // Simple Y-based or Observer-based theme detection
      // We will look for elements with data-header-theme="light"
      const lightSections = document.querySelectorAll('[data-header-theme="light"]');
      let currentTheme = "dark";

      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If a light section is currently under the header (top ~0 to 80px)
        if (rect.top <= 80 && rect.bottom >= 80) {
          currentTheme = "light";
        }
      });

      setHeaderTheme(currentTheme);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isLight = headerTheme === "light";

  return (
    <div className="fixed top-0 left-0 w-full z-[999] px-4 py-6 md:px-8 flex justify-center">
      <motion.nav
        initial={false}
        animate={{
          width: isScrolled ? "92%" : "100%",
          maxWidth: isScrolled ? "1200px" : "1440px",
          backgroundColor: isScrolled 
            ? (isLight ? "rgba(255, 255, 255, 0.98)" : "rgba(10, 10, 10, 0.98)")
            : isWAF 
              ? (isLight ? "rgba(255, 255, 255, 0.95)" : "rgba(10, 10, 10, 0.8)")
              : (isLight ? "rgba(255, 255, 255, 0.1)" : "rgba(15, 15, 15, 0.1)"),
          backdropFilter: isScrolled ? "blur(32px)" : "blur(16px)",
          borderRadius: isScrolled ? "999px" : "0px",
          borderColor: isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-[1001] border shadow-2xl overflow-visible h-[64px] lg:h-[80px] flex items-center"
      >
        {/* --- MOBILE & TABLET LAYOUT (≤1024px) --- */}
        <div className="flex lg:hidden items-center justify-between w-full px-4 h-full">
          {/* Logo: Left Aligned, Small Scale */}
          <Link href="/" className="flex items-center group cursor-pointer relative z-10">
            <div className={`rounded-xl shadow-lg transition-all duration-500 bg-white p-1 ${
              isLight ? "ring-1 ring-slate-200" : "ring-1 ring-white/10"
            }`}>
              <Image 
                src="/images/asian institute of allergy logo.jpg" 
                alt="Asian Institute of Allergy" 
                width={120} 
                height={120}
                className="h-[32px] w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Actions: CTA + Menu icon (Right) */}
          <div className="flex items-center gap-2 relative z-10">
            <Link
              href={isWAF ? "/contribute" : "/#contact"}
              className={`px-3.5 h-[36px] rounded-full text-[12px] font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center whitespace-nowrap ${
                isLight ? "bg-slate-900 text-white hover:bg-primary" : "bg-white text-black hover:bg-primary-accent"
              }`}
            >
              {isWAF ? "Contribute" : "Book Evaluation"}
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isLight ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* --- DESKTOP LAYOUT (≥1024px) --- */}
        <div className="hidden lg:flex items-center justify-between w-full px-10 h-full relative">
          {/* Left: Navigation Links */}
          <div className={`flex items-center transition-all duration-500 ${isScrolled ? "gap-2 xl:gap-6" : "gap-4 xl:gap-8"}`}>
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[9px] xl:text-[11px] font-black tracking-tighter xl:tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap ${
                  pathname === link.href 
                    ? "text-primary-accent" 
                    : (isLight ? "text-slate-900/60 hover:text-slate-900" : "text-white/80 hover:text-white")
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center: Centered Logo (Absolute positioned for mathematical centering) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Link href="/" className="flex items-center group cursor-pointer pointer-events-auto">
              <div className={`rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 flex items-center justify-center bg-white ${
                isLight ? "ring-1 ring-slate-200" : "ring-1 ring-white/10"
              } ${
                isScrolled ? "p-1 md:p-1.5" : "p-1.5 md:p-2"
              }`}>
                <Image 
                  src="/images/asian institute of allergy logo.jpg" 
                  alt="Asian Institute of Allergy" 
                  width={200} 
                  height={200}
                  className={`w-auto object-contain transition-all duration-500 ${
                    isScrolled ? "h-[55px] md:h-[70px]" : "h-[85px] md:h-[110px]"
                  }`}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className={`hidden xl:block text-[11px] font-black transition-colors tracking-[0.2em] uppercase ${
                isLight ? "text-slate-900/60 hover:text-slate-900" : "text-white/80 hover:text-white"
              }`}
            >
              Contact
            </Link>
            
            <Magnetic>
              <Link
                href={isWAF ? "/contribute" : "/#contact"}
                className={`px-8 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-xl hover:scale-105 active:scale-95 ${
                  isLight ? "bg-slate-900 text-white hover:bg-primary" : "bg-white text-black hover:bg-primary-accent"
                }`}
              >
                {isWAF ? "Contribute Now" : "Book Evaluation"}
              </Link>
            </Magnetic>

            <div className={`flex items-center rounded-full p-1 border transition-colors ${
              isLight ? "bg-slate-900/5 border-slate-900/10" : "bg-white/5 border-white/10"
            }`}>
              <Link 
                href="/"
                className={`p-2 rounded-full transition-all ${!isWAF 
                  ? (isLight ? "bg-slate-900 text-white" : "bg-white text-black shadow-lg") 
                  : "text-slate-400 hover:text-slate-900"}`}
              >
                <Building2 size={14} />
              </Link>
              <Link 
                href="/world-allergy-foundation"
                className={`p-2 rounded-full transition-all ${isWAF 
                  ? "bg-primary text-white shadow-lg" 
                  : (isLight ? "text-slate-400 hover:text-slate-900" : "text-white/40 hover:text-white")}`}
              >
                <Globe size={14} />
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`lg:hidden absolute top-[100px] left-4 right-4 backdrop-blur-3xl border rounded-[2.5rem] p-10 z-[1000] shadow-2xl ${
              isLight ? "bg-white/95 border-slate-200" : "bg-black/95 border-white/10"
            }`}
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-3xl font-bold uppercase tracking-tighter ${
                    isLight ? "text-slate-900" : "text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className={`h-px my-4 ${isLight ? "bg-slate-200" : "bg-white/10"}`} />
              
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  href="/"
                  className={`flex flex-col items-center p-4 rounded-3xl border transition-all ${
                    !isWAF 
                      ? (isLight ? "bg-slate-900 text-white border-slate-900" : "bg-white text-black border-white") 
                      : (isLight ? "bg-slate-100 text-slate-400 border-slate-200" : "bg-white/5 text-white/40 border-white/10")
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Building2 size={24} className="mb-2" />
                  <span className="text-[10px] font-black uppercase">Institute</span>
                </Link>
                <Link 
                  href="/world-allergy-foundation"
                  className={`flex flex-col items-center p-4 rounded-3xl border transition-all ${
                    isWAF 
                      ? "bg-primary text-white border-primary" 
                      : (isLight ? "bg-slate-100 text-slate-400 border-slate-200" : "bg-white/5 text-white/40 border-white/10")
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Globe size={24} className="mb-2" />
                  <span className="text-[10px] font-black uppercase">Foundation</span>
                </Link>
              </div>

              <Link
                href={isWAF ? "/contribute" : "/#contact"}
                className={`py-5 rounded-full font-black text-center text-lg uppercase tracking-widest shadow-xl ${
                  isLight ? "bg-slate-900 text-white" : "bg-primary-accent text-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {isWAF ? "Contribute Now" : "Book Evaluation"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

