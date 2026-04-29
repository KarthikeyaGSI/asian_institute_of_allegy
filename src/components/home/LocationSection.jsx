"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="bg-slate-50 py-24 md:py-32 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Centre of Excellence</span>
              <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tight mb-6">Visit our <br/> <span className="text-primary italic">Clinical Hub</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md font-medium">
                Our specialized allergy facility is located in Khajaguda, Hyderabad, serving patients from Gachibowli, Madhapur, and beyond.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Our Address</h4>
                  <p className="text-slate-500 text-sm">Aswini Allergy Centre, Khajaguda, <br/> Hyderabad, Telangana 500075</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Timings</h4>
                    <p className="text-slate-500 text-xs">Mon - Sat: 9 AM - 8 PM</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Helpline</h4>
                    <p className="text-slate-500 text-xs">+91 80743 68748</p>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/YourMapID" 
              target="_blank"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Directions <Navigation size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.135246733221!2d78.3687353!3d17.4053228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f0b2f1e27f%3A0x6b3b2c2f2b2b2b2b!2sKhajaguda!5e0!3m2!1sen!2sin!4v1714156942055!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
