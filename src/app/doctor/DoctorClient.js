"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Authority from "@/components/sections/Authority";
import { motion } from "framer-motion";

export default function DoctorClient() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <div className="pt-20">
        <Authority />
      </div>
      {/* Additional Doctor Specific Content can go here */}
      <Footer />
    </main>
  );
}
