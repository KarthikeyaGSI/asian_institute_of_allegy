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
  description: "India's specialized Centre of Excellence for Chronic Allergy, Asthma & Immunology. We resolve chronic conditions by identifying the root-cause using precision diagnostics and Sublingual Immunotherapy (SLIT). Directed by Dr. Vyakarnam Nageshwar.",
  keywords: "chronic allergy resolution, SLIT immunotherapy benefits, asthma root cause treatment, permanent allergy relief Hyderabad, Dr. Vyakarnam Nageshwar immunology, environmental trigger mapping, H5N1 global health advisory 2025, HPV vaccine immune safety, immunotherapy success rate India, best allergy doctor Hyderabad",
  authors: [{ name: "Dr. Vyakarnam Nageshwar", url: "https://asianinstituteofallergy.com/doctor" }],
  creator: "Dr. Vyakarnam Nageshwar",
  publisher: "Asian Institute of Allergy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Asian Institute of Allergy | Science of Permanent Immune Relief",
    description: "Don't just mask symptoms. Our clinical protocols identify 'why' your immune system overreacts. Advanced SLIT solutions for long-term health freedom.",
    url: "https://asianinstituteofallergy.com",
    siteName: "Asian Institute of Allergy",
    images: [
      {
        url: "/images/dr-nageswar.webp",
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
    title: "Asian Institute of Allergy | Root-Cause Resolution Experts",
    description: "Resolving chronic respiratory and skin allergies through precision immunology.",
    images: ["/images/dr-nageswar.webp"],
  },
  alternates: {
    canonical: "https://asianinstituteofallergy.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KSP285ZG');`,
          }}
        />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
      </head>
      <body className="min-h-full flex flex-col font-body overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSP285ZG"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <SmoothScroll>
          <ProgressBar />
          <NoiseOverlay />
          <PremiumCursor />
          <NotificationTriggers />
          {children}
        </SmoothScroll>

        {/* Unified Structured Data for GEO/AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "MedicalClinic",
                "@id": "https://asianinstituteofallergy.com/#clinic",
                "name": "Asian Institute of Allergy",
                "alternateName": "AIA Hyderabad",
                "url": "https://asianinstituteofallergy.com",
                "logo": "https://asianinstituteofallergy.com/images/asian%20institute%20of%20allergy%20logo.webp",
                "image": "https://asianinstituteofallergy.com/images/dr-nageswar.webp",
                "description": "India's specialized Centre of Excellence for Chronic Allergy, Asthma & Immunology.",
                "telephone": "+91-8074368748",
                "priceRange": "$$",
                "medicalSpecialty": ["Allergy", "Immunology", "Pulmonology"],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Khajaguda",
                  "addressLocality": "Hyderabad",
                  "addressRegion": "Telangana",
                  "postalCode": "500075",
                  "addressCountry": "India"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "17.4123", 
                  "longitude": "78.3610"
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "10:00",
                    "closes": "19:00"
                  }
                ],
                "sameAs": [
                  "https://www.facebook.com/AsianInstituteOfAllergy",
                  "https://www.instagram.com/asianinstituteofallergy",
                  "https://www.youtube.com/@AsianInstituteOfAllergy"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Physician",
                "@id": "https://asianinstituteofallergy.com/#doctor",
                "name": "Dr. Vyakarnam Nageshwar",
                "jobTitle": "Chief Immunologist",
                "image": "https://asianinstituteofallergy.com/images/dr-nageswar.webp",
                "medicalSpecialty": "Immunology",
                "url": "https://asianinstituteofallergy.com/doctor",
                "worksFor": { "@id": "https://asianinstituteofallergy.com/#clinic" }
              },
              {
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
                    "name": "What is Sublingual Immunotherapy (SLIT)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "SLIT is a needle-free, safe alternative to allergy shots. It involves placing allergen drops under the tongue to desensitize the immune system over time, addressing the root cause rather than just masking symptoms."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is the Asian Institute of Allergy different?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We provide a 45-90 minute clinical evaluation to map environmental triggers and identify immune 'why'. We focus on permanent resolution rather than life-long symptom management."
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://asianinstituteofallergy.com"
                  }
                ]
              }
            ]),
          }}
        />
      </body>
    </html>
  );
}

