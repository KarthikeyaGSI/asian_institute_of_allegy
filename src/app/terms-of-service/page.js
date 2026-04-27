"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <div className="h-[80px] md:h-[100px]" />
      
      <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate lg:prose-xl max-w-none"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Terms of Service</h1>
          <p className="text-slate-500 mb-8 italic">Last Updated: April 27, 2026</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">1. Medical Disclaimer</h2>
          <p className="bg-slate-50 p-6 border-l-4 border-primary rounded-r-xl">
            <strong>Important:</strong> The content on this website is for informational purposes only and does not constitute professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified health provider with any questions you may have regarding a medical condition.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">2. Appointment Booking</h2>
          <p>Requesting an appointment through this website does not guarantee a scheduled time until confirmed by our staff via phone or email.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">3. Use of Website</h2>
          <p>By using this website, you agree to provide accurate information and refrain from any activity that interferes with the site's operation or security.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">4. Intellectual Property</h2>
          <p>All content, including clinical research, logos, and case studies, is the property of Asian Institute of Allergy and may not be reproduced without explicit written consent.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">5. Limitation of Liability</h2>
          <p>Asian Institute of Allergy shall not be liable for any direct or indirect damages resulting from the use of information provided on this platform.</p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
