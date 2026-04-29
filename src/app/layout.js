import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/effects/SmoothScroll";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import PremiumCursor from "@/components/effects/PremiumCursor";
import NotificationTriggers from "@/components/ui/NotificationTriggers";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Asian Institute of Allergy, Asthma & Immunology | Centre of Excellence",
  description: "India's leading institute for root-cause allergy treatment. Specialist care for Asthma, Eczema, and Immunological disorders in Hyderabad. Led by Dr. Vyakarnam Nageshwar, providing Sublingual Immunotherapy (SLIT) for permanent relief to 50,000+ patients.",
  keywords: "allergy treatment Hyderabad, asthma specialist India, immunotherapy centre, Dr. Vyakarnam Nageshwar, root cause allergy diagnosis, sublingual immunotherapy SLIT, skin allergy treatment, chronic sinusitis relief",
  openGraph: {
    title: "Asian Institute of Allergy & Immunology | Root-Cause Excellence",
    description: "Resolving chronic allergic conditions for 20+ years. Advanced diagnostic protocols and permanent immunotherapy solutions.",
    url: "https://asianinstituteofallergy.com",
    siteName: "Asian Institute of Allergy",
    images: [
      {
        url: "/images/dr-nageswar.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Vyakarnam Nageshwar - Asian Institute of Allergy",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asian Institute of Allergy | India's Root-Cause Specialists",
    description: "Expert immunology care and SLIT treatment for chronic conditions.",
    images: ["/images/dr-nageswar.jpeg"],
  },
  alternates: {
    canonical: "https://asianinstituteofallergy.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased scroll-smooth`}>
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

