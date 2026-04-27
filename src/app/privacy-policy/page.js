"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Privacy Policy</h1>
          <p className="text-slate-500 mb-8 italic">Last Updated: April 27, 2026</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us when booking an appointment or contacting us through the website. This includes your name, phone number, email address, and any clinical notes you share.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">2. Use of Information</h2>
          <p>The information we collect is used solely for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scheduling and managing medical appointments.</li>
            <li>Responding to your inquiries and clinical follow-ups.</li>
            <li>Improving our website performance and patient experience.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">3. Medical Confidentiality</h2>
          <p>At Asian Institute of Allergy, we adhere to the highest standards of medical confidentiality. Your personal health information is protected and never shared with third parties for marketing purposes.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">4. Analytics & Tracking</h2>
          <p>We use tools like Google Tag Manager and Microsoft Clarity to understand how visitors interact with our site. This data is anonymized and used for technical optimization only.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4">5. Contact Us</h2>
          <p>If you have questions about this policy, please contact us at +91 80743 68748.</p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
