"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "How We Help", href: "#how-we-help" },
  { name: "Doctor", href: "#doctor" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl shadow-sm py-4 border-b border-gray-100" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-primary p-2 rounded-xl transition-transform group-hover:rotate-[15deg]">
            <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl tracking-tighter text-primary leading-none">
              Asian Institute
            </span>
            <span className={`text-[10px] uppercase tracking-[0.3em] font-bold mt-1 transition-opacity duration-500 ${scrolled ? "opacity-40" : "opacity-60"}`}>
              Centre of Excellence
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="tel:+918074368748"
            className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-primary-dark transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
          >
            <Phone size={16} />
            Contact Specialist
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-3 rounded-xl bg-gray-100 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="tel:+918074368748"
                className="flex items-center justify-center gap-3 bg-primary text-white p-6 rounded-2xl font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={20} />
                Contact Specialist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
