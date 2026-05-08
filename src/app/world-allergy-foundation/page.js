import WAFClient from "./WAFClient";

export const metadata = {
  title: "World Allergy Foundation (WAF) | Dr. Vyakarnam Nageshwar | Global Immunology",
  description: "Official portal of the World Allergy Foundation (WAF). Led by Dr. Vyakarnam Nageshwar, WAF focuses on clinical research, environmental mapping (Swaach Akash Abhiyan), and international immunology advocacy. Discover evidence-based therapies for chronic inflammatory disorders.",
  keywords: [
    "World Allergy Foundation", 
    "Dr. Vyakarnam Nageshwar", 
    "Dr. Bhagheerathi Kalidass",
    "Swaach Akash Abhiyan Clean Air Mission", 
    "Green Channel Treaty India Kenya", 
    "Aerobiology India Scientific Legacy",
    "HPV Vaccine Safety Advisory India",
    "H5N1 Avian Flu Global Health Advisory",
    "Molecular Therapeutics for Allergy",
    "Chronic Inflammatory Disorders Treatment Hyderabad"
  ],
  authors: [{ name: "Asian Institute of Allergy" }],
  openGraph: {
    title: "World Allergy Foundation | Pioneering Global Immunology Research",
    description: "Bridging the gap between clinical excellence and global health policy. Exploring the intersection of environment, genetics, and inflammation.",
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
    "google-site-verification": "verification_token", // Placeholder for actual verification
    "theme-color": "#1a5f3a",
  }
};

export default function Page() {
  return <WAFClient />;
}
