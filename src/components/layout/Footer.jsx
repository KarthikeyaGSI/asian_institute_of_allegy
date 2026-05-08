import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="bg-white p-4 md:p-6 rounded-[2rem] shadow-xl border border-gray-100 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <Image 
                  src="/images/asian%20institute%20of%20allergy%20logo.webp" 
                  alt="Asian Institute of Allergy" 
                  width={250} 
                  height={250}
                  className="h-[120px] md:h-[180px] w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-600 leading-relaxed font-medium">
              Global Centre of Excellence for Allergy & Immunological Research. 
              Specialized in root-cause resolution through Sublingual Immunotherapy (SLIT).
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg font-heading text-slate-900">Our Locations</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <span className="block font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Centre 1 (Primary)</span>
                  <span className="text-slate-700 text-sm">
                    Khajaguda, Hyderabad, Telangana
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <span className="block font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Centre 2</span>
                  <span className="text-slate-700 text-sm">
                    Uppal Bhagayat, Hyderabad, Telangana
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <Phone className="text-primary shrink-0" size={20} />
                <Link href="tel:+918074368748" className="text-slate-700 font-bold hover:text-primary transition-colors">
                  +91 80743 68748
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-slate-900">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/treatments" className="text-slate-700 font-medium hover:text-primary transition-colors">Advanced Treatments</Link>
              <Link href="/clinical-success" className="text-slate-700 font-medium hover:text-primary transition-colors">Patient Stories</Link>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-quiz"))}
                className="text-left text-slate-700 font-medium hover:text-primary transition-colors cursor-pointer"
              >
                Free Diagnostic Report
              </button>
              <Link href="/world-allergy-foundation" className="text-slate-700 font-medium hover:text-primary transition-colors">World Allergy Foundation</Link>
              <Link href="/gallery" className="text-slate-700 font-medium hover:text-primary transition-colors">Institute Gallery</Link>
              <Link href="/contribute" className="text-slate-700 font-medium hover:text-primary transition-colors">Support & Contribute</Link>
              <Link href="/#contact" className="text-slate-700 font-medium hover:text-primary transition-colors">Book Appointment</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-600">
          <div className="flex flex-col md:flex-row items-center gap-4 font-medium">
            <p>© {new Date().getFullYear()} Asian Institute of Allergy. All rights reserved.</p>
            <span className="hidden md:block text-slate-300">|</span>
            <Link 
              href="https://linktr.ee/karthikeyathallapally" 
              target="_blank" 
              className="font-bold text-primary hover:underline transition-all"
            >
              Developed by Marketing ko labs
            </Link>
          </div>
          <div className="flex gap-8 font-bold">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
