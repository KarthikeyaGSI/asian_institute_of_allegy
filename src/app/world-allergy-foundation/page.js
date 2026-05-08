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
    "world-class clinical research"
  ],
  authors: [{ name: "Asian Institute of Allergy" }],
  openGraph: {
    title: "World Allergy Foundation | Pioneering Global Immunology Research",
    description: "Bridging the gap between clinical excellence and global health policy. Exploring the intersection of environment, genetics, and inflammation for permanent recovery.",
    url: "https://asian-institute-of-allergy.vercel.app/world-allergy-foundation",
    siteName: "World Allergy Foundation",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/world allergy foundation logo.webp",
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
    images: ["/images/world allergy foundation logo.webp"],
  },
  alternates: {
    canonical: "/world-allergy-foundation",
  },
  other: {
    "google-site-verification": "verification_token",
    "theme-color": "#1a5f3a",
  }
};

export default function Page() {
  return <WAFClient />;
}
