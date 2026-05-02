import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/effects/SmoothScroll";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import PremiumCursor from "@/components/effects/PremiumCursor";
import NotificationTriggers from "@/components/ui/NotificationTriggers";
import ProgressBar from "@/components/effects/ProgressBar";
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Asian Institute of Allergy | Root-Cause Clinical Excellence",
    template: "%s | Asian Institute of Allergy"
  },
  description: "India's leading Centre of Excellence for Chronic Allergy, Asthma & Immunology. Specializing in permanent clinical relief through root-cause diagnosis and SLIT immunotherapy. 50,000+ success stories.",
  keywords: "chronic allergy treatment, asthma specialist Hyderabad, permanent allergy relief, root cause immunology, SLIT treatment India, environmental allergy mapping, H5N1 global health advisory, HPV vaccine safety research, Dr. Vyakarnam Nageshwar, seasonal allergy trends 2025",
  openGraph: {
    title: "Asian Institute of Allergy | The Science of Permanent Relief",
    description: "Don't just suppress symptoms. We identify and resolve the root cause of your allergies. Advanced diagnostic protocols for patients aged 2 to 80.",
    url: "https://asianinstituteofallergy.com",
    siteName: "Asian Institute of Allergy",
    images: [
      {
        url: "/images/dr-nageswar.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Vyakarnam - Chief Immunologist at Asian Institute of Allergy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asian Institute of Allergy | Root-Cause Specialists",
    description: "Advanced immunology care and permanent SLIT treatment for chronic conditions.",
    images: ["/images/dr-nageswar.jpeg"],
  },
  alternates: {
    canonical: "https://asianinstituteofallergy.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Microsoft Clarity */}
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wi9q44yos5");
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KSP285ZG');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-body overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSP285ZG"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <SmoothScroll>
          <ProgressBar />
          <NoiseOverlay />
          <PremiumCursor />
          <NotificationTriggers />
          {children}
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Asian Institute of Allergy",
              medicalSpecialty: ["Allergy", "Immunology", "Pulmonology"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Khajaguda",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                postalCode: "500075",
                addressCountry: "India"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Vyakarnam",
              medicalSpecialty: "Immunology",
              worksFor: {
                "@type": "MedicalClinic",
                name: "Asian Institute of Allergy"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Can allergies be cured permanently?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, at the Asian Institute of Allergy, we focus on root-cause diagnosis and Sublingual Immunotherapy (SLIT) to train the immune system, providing long-term clinical relief from chronic allergies."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is root-cause allergy diagnosis?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Root-cause diagnosis involves understanding a patient's individual immune response through extensive clinical interaction (45-90 minutes) to identify why the disease started, rather than just treating symptoms."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is immunotherapy safe for children?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Sublingual Immunotherapy (SLIT) is a safe, needle-free, and effective treatment option for patients as young as 2 years old, helping them develop natural immunity against allergens."
                  }
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}

