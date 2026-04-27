import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tight text-primary font-heading">
                Asian Institute
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed font-medium">
              Global Centre of Excellence for Allergy & Immunological Research. 
              Specialized in root-cause resolution through Sublingual Immunotherapy (SLIT).
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg font-heading">Our Locations</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <span className="block font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Centre 1 (Primary)</span>
                  <span className="text-slate-600 text-sm">
                    Khajaguda, Hyderabad, Telangana
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 shrink-0" size={22} />
                <div>
                  <span className="block font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Centre 2</span>
                  <span className="text-slate-600 text-sm">
                    Uppal Bhagayat, Hyderabad, Telangana
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <Phone className="text-primary shrink-0" size={20} />
                <Link href="tel:+918074368748" className="text-slate-600 font-bold hover:text-primary">
                  +91 80743 68748
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <div className="grid grid-cols-1 gap-3">
              <Link href="#how-we-help" className="text-gray-500 hover:text-primary transition-colors">How We Help</Link>
              <Link href="#doctor" className="text-gray-500 hover:text-primary transition-colors">Our Specialists</Link>
              <Link href="/world-allergy-foundation" className="text-gray-500 hover:text-primary transition-colors">Research Foundation</Link>
              <Link href="#contact" className="text-gray-500 hover:text-primary transition-colors">Book Appointment</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© {new Date().getFullYear()} Asian Institute of Allergy. All rights reserved.</p>
            <span className="hidden md:block text-slate-200">|</span>
            <Link 
              href="https://linktr.ee/karthikeyathallapally" 
              target="_blank" 
              className="font-bold text-primary hover:underline transition-all"
            >
              Developed by Marketing ko labs
            </Link>
          </div>
          <div className="flex gap-8 font-medium">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
