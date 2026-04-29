"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, LayoutGrid, Globe, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Treatments", href: "/treatments" },
  { name: "Success Stories", href: "/clinical-success" },
  { name: "World Allergy Foundation", href: "/world-allergy-foundation" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const isWAF = pathname === "/world-allergy-foundation";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[999] px-4 py-6 md:px-8 flex justify-center">
      <motion.nav
        initial={false}
        animate={{
          width: isScrolled ? "92%" : "100%",
          maxWidth: isScrolled ? "1200px" : "1440px",
          backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.98)" : isWAF ? "rgba(10, 10, 10, 0.8)" : "rgba(15, 15, 15, 0.05)",
          backdropFilter: isScrolled ? "blur(32px)" : "blur(16px)",
          borderRadius: isScrolled ? "999px" : "0px",
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-2 lg:grid-cols-3 items-center h-[64px] md:h-[80px] border border-white/10 shadow-2xl relative z-[1001] px-6 md:px-10 overflow-visible"
      >
        {/* Left Side Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 ${
                pathname === link.href ? "text-primary-accent" : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link href="/" className="flex items-center justify-self-center group">
          <div className={`bg-white rounded-2xl shadow-2xl ring-1 ring-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 ${
            isScrolled ? "p-1.5 md:p-2" : "p-2 md:p-3"
          }`}>
            <Image 
              src="/images/asian institute of allergy logo.jpg" 
              alt="Asian Institute of Allergy" 
              width={200} 
              height={200}
              className={`w-auto object-contain transition-all duration-500 ${
                isScrolled ? "h-[45px] md:h-[65px]" : "h-[60px] md:h-[90px]"
              }`}
              priority
            />
          </div>
        </Link>

        {/* Right Side Actions */}
        <div className="flex items-center gap-1 md:gap-4 justify-end">
          <Link
            href="/#contact"
            className="hidden xl:block text-[11px] font-black text-white/80 hover:text-white transition-colors tracking-[0.2em] uppercase"
          >
            Contact
          </Link>
          
          <Link
            href={isWAF ? "/contribute" : "/#contact"}
            className="px-6 md:px-8 py-2.5 md:py-3.5 rounded-full bg-white text-black text-[9px] md:text-[11px] font-black uppercase tracking-widest hover:bg-primary-accent hover:text-black transition-all shadow-xl hover:scale-105 active:scale-95"
          >
            {isWAF ? "Contribute Now" : "Book Evaluation"}
          </Link>

          {/* Mode Toggle Switch */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full p-1 border border-white/10">
            <Link 
              href="/"
              aria-label="Switch to Asian Institute"
              className={`p-2 rounded-full transition-all ${!isWAF ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white"}`}
            >
              <Building2 size={14} />
            </Link>
            <Link 
              href="/world-allergy-foundation"
              aria-label="Switch to World Allergy Foundation"
              className={`p-2 rounded-full transition-all ${isWAF ? "bg-primary text-white shadow-lg" : "text-white/40 hover:text-white"}`}
            >
              <Globe size={14} />
            </Link>
          </div>

          {/* Mobile Menu */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-[100px] left-4 right-4 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 z-[1000] shadow-2xl"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-bold text-white uppercase tracking-tighter"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="h-px bg-white/10 my-4" />
              
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  href="/"
                  className={`flex flex-col items-center p-4 rounded-3xl border transition-all ${!isWAF ? "bg-white text-black border-white" : "bg-white/5 text-white/40 border-white/10"}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Building2 size={24} className="mb-2" />
                  <span className="text-[10px] font-black uppercase">Institute</span>
                </Link>
                <Link 
                  href="/world-allergy-foundation"
                  className={`flex flex-col items-center p-4 rounded-3xl border transition-all ${isWAF ? "bg-primary text-white border-primary" : "bg-white/5 text-white/40 border-white/10"}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Globe size={24} className="mb-2" />
                  <span className="text-[10px] font-black uppercase">Foundation</span>
                </Link>
              </div>

              <Link
                href={isWAF ? "/contribute" : "/#contact"}
                className="bg-primary-accent text-black py-5 rounded-full font-black text-center text-lg uppercase tracking-widest shadow-xl shadow-primary-accent/20"
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

