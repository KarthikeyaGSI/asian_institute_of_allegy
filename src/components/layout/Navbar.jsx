"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "How we help", href: "#how-we-help" },
  { name: "Doctor", href: "#doctor" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[999] px-4 py-6 md:px-8 flex justify-center">
      <motion.nav
        initial={false}
        animate={{
          width: scrolled ? "95%" : "100%",
          maxWidth: scrolled ? "1000px" : "1400px",
          backgroundColor: scrolled ? "rgba(15, 15, 15, 0.9)" : "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          paddingLeft: scrolled ? "24px" : "32px",
          paddingRight: scrolled ? "8px" : "32px",
          borderRadius: scrolled ? "999px" : "24px",
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between h-[64px] border border-white/10 shadow-2xl overflow-hidden relative z-[1001]"
      >
        {/* Left Side Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-bold text-white/70 hover:text-white transition-colors tracking-widest uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link href="/" className="flex flex-col items-center group md:absolute md:left-1/2 md:-translate-x-1/2">
          <span className="text-xl md:text-2xl font-bold text-white tracking-tighter uppercase">
            Asian Institute
          </span>
          <span className="text-[8px] text-white/50 font-bold uppercase tracking-[0.3em] -mt-1">Centre of Excellence</span>
        </Link>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 md:gap-6">
          <Link
            href="#contact"
            className="hidden md:block text-[13px] font-bold text-white/70 hover:text-white transition-colors tracking-widest uppercase"
          >
            Contact
          </Link>
          
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-white text-black text-[12px] font-black uppercase tracking-wider hover:scale-[1.05] transition-all"
          >
            Book Consultation
          </Link>

          {/* Grid Toggle */}
          <button className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <LayoutGrid size={18} />
          </button>

          {/* Mobile Menu */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-[90px] left-4 right-4 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 z-[1000]"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-white uppercase tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Link
                href="#contact"
                className="bg-primary text-white py-4 rounded-full font-bold text-center text-lg uppercase tracking-widest shadow-xl shadow-primary/20"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
