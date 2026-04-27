"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I can finally breathe without depending on inhalers.",
    author: "A.K.",
    condition: "Chronic Asthma Patient"
  },
  {
    quote: "After 10 years of severe eczema, my skin is finally clear.",
    author: "M.S.",
    condition: "Atopic Dermatitis Patient"
  },
  {
    quote: "The root-cause approach changed my life. No more sinus headaches.",
    author: "R.V.",
    condition: "Chronic Sinusitis Patient"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="p-10 border border-gray-100 rounded-3xl bg-gray-50 flex flex-col h-full"
            >
              <p className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-10 flex-1">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900">&mdash; {item.author}</p>
                <p className="text-gray-500 text-sm mt-1">{item.condition}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
