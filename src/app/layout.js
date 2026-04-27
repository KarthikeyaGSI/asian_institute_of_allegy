import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Asian Institute of Allergy, Asthma & Immunology | Centre of Excellence",
  description: "Root-cause treatment for chronic allergic and immunological disorders. Led by Dr. Vyakarnam Nageshwar with 20+ years of expertise.",
  keywords: "allergy treatment, asthma clinic, immunotherapy, immunology, Dr. Vyakarnam Nageshwar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-body">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Asian Institute of Allergy",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressCountry: "India"
              },
              medicalSpecialty: ["Allergy", "Immunology", "Pulmonology"]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Vyakarnam Nageshwar",
              medicalSpecialty: "Immunology",
              worksFor: {
                "@type": "MedicalClinic",
                name: "Asian Institute of Allergy"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
