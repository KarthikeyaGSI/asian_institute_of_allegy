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
              <div className="bg-primary p-1.5 rounded-lg">
                <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight text-primary">
                Asian Institute
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed">
              Centre of Excellence for Allergy, Asthma & Immunology. 
              Dedicated to root-cause treatment and long-term relief.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <span className="text-gray-600">
                  Uppal Bhagayat, Hyderabad, Telangana, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <Link href="tel:+918074368748" className="text-gray-600 hover:text-primary">
                  +91 80743 68748
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="text-gray-600">contact@asianallergy.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <div className="grid grid-cols-1 gap-3">
              <Link href="#how-we-help" className="text-gray-500 hover:text-primary transition-colors">How We Help</Link>
              <Link href="#doctor" className="text-gray-500 hover:text-primary transition-colors">Our Specialists</Link>
              <Link href="#research" className="text-gray-500 hover:text-primary transition-colors">Research Foundation</Link>
              <Link href="#contact" className="text-gray-500 hover:text-primary transition-colors">Book Appointment</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Asian Institute of Allergy, Asthma & Immunology. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
