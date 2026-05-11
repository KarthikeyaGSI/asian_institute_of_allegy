import WAFClient from "./WAFClient";

export const metadata = {
  title: "World Allergy Foundation | Global Leadership in Permanent Relief",
  description: "The world's leading foundation for root-cause allergy research and environmental mapping. Led by Dr. Vyakarnam Nageshwar, WAF is pioneering permanent clinical relief for chronic inflammatory disorders globally.",
  keywords: [
    "World Allergy Foundation",
    "best allergy clinic in the world",
    "Dr. Vyakarnam Nageshwar",
    "global immunology research",
    "Swaach Akash Abhiyan",
    "permanent allergy relief",
    "international allergy advocacy",
    "molecular therapeutics",
    "root cause diagnosis",
    "world-class clinical research",
    "allergy foundation India"
  ],
  authors: [{ name: "Asian Institute of Allergy" }, { name: "Dr. Vyakarnam Nageshwar" }],
  openGraph: {
    title: "World Allergy Foundation | Pioneering Global Immunology Research",
    description: "Bridging the gap between clinical excellence and global health policy. Exploring the intersection of environment, genetics, and inflammation for permanent recovery.",
    url: "https://asianinstituteofallergy.com/world-allergy-foundation",
    siteName: "World Allergy Foundation",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/world%20allergy%20foundation%20logo.webp",
        width: 1200,
        height: 630,
        alt: "World Allergy Foundation Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Allergy Foundation | Global Health Leadership",
    description: "Scientific breakthroughs in Aerobiology and Molecular Immunology led by Dr. Vyakarnam Nageshwar.",
    images: ["/images/world%20allergy%20foundation%20logo.webp"],
  },
  alternates: {
    canonical: "https://asianinstituteofallergy.com/world-allergy-foundation",
  },
  other: {
    "google-site-verification": "verification_token",
    "theme-color": "#1a5f3a",
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "NGO",
              "@id": "https://asianinstituteofallergy.com/world-allergy-foundation/#foundation",
              "name": "World Allergy Foundation",
              "alternateName": "WAF",
              "url": "https://asianinstituteofallergy.com/world-allergy-foundation",
              "logo": "https://asianinstituteofallergy.com/images/world%20allergy%20foundation%20logo.webp",
              "description": "A global foundation dedicated to root-cause allergy research, environmental mapping, and permanent clinical relief for chronic inflammatory disorders.",
              "founder": {
                "@type": "Person",
                "name": "Dr. Vyakarnam Nageshwar"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "addressCountry": "India"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://asianinstituteofallergy.com/world-allergy-foundation/#webpage",
              "url": "https://asianinstituteofallergy.com/world-allergy-foundation",
              "name": "World Allergy Foundation Research and Advocacy",
              "isPartOf": { "@id": "https://asianinstituteofallergy.com/#website" },
              "about": { "@id": "https://asianinstituteofallergy.com/world-allergy-foundation/#foundation" },
              "breadcrumb": { "@id": "https://asianinstituteofallergy.com/world-allergy-foundation/#breadcrumb" }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://asianinstituteofallergy.com/world-allergy-foundation/#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://asianinstituteofallergy.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "World Allergy Foundation",
                  "item": "https://asianinstituteofallergy.com/world-allergy-foundation"
                }
              ]
            }
          ]),
        }}
      />
      <WAFClient />
    </>
  );
}

