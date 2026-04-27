"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ease-out ${
        scrolled 
          ? "bg-[rgba(255,255,255,0.65)] backdrop-blur-[12px] py-3 border-b border-[rgba(0,0,0,0.06)] shadow-none" 
          : "bg-transparent py-6 border-transparent shadow-none"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div 
            className={`transition-all duration-500 ease-out ${
              scrolled ? "scale-[0.97]" : "scale-100"
            }`}
          >
            {/* Subtle logo mark */}
            <div className={`p-2 rounded-xl transition-colors duration-500 ${scrolled ? "bg-[#0B0F0E]" : "bg-white/20"}`}>
              <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center border-white`}>
                <div className={`w-2 h-2 rounded-full bg-white`} />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-2xl tracking-tight leading-none transition-colors duration-500 ${scrolled ? "text-[#0B0F0E]" : "text-white"}`}>
              Asian Institute
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold mt-1 transition-all duration-500 ${scrolled ? "text-[#0B0F0E]/70" : "text-white/70"}`}>
              Centre of Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-500 relative group ${scrolled ? "text-[#0B0F0E] hover:text-primary" : "text-white hover:text-white"}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${scrolled ? "bg-primary" : "bg-white"}`} />
            </Link>
          ))}
          
          <Link
            href="#contact"
            className={`px-8 py-3 rounded-xl font-medium transition-all duration-500 ease-out ${
              scrolled 
                ? "bg-primary text-white hover:bg-[#154d2e] hover:scale-[0.97] shadow-none border border-transparent" 
                : "bg-transparent text-white border border-white/50 hover:bg-white/10 hover:scale-[0.97]"
            }`}
          >
            Book
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 rounded-xl transition-colors duration-500 ${scrolled ? "bg-transparent text-[#0B0F0E]" : "bg-transparent text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-[12px] border-t border-[rgba(0,0,0,0.06)] shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-semibold text-[#0B0F0E]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="flex items-center justify-center gap-3 bg-primary text-white p-4 rounded-xl font-medium text-lg mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
