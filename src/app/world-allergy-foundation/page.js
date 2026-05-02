import WAFClient from "./WAFClient";

export const metadata = {
  title: "World Allergy Foundation | Clinical Research & Global Immunology Advocacy",
  description: "Explore the World Allergy Foundation (WAF) led by Dr. Vyakarnam Nageshwar. Bridging clinical excellence, environmental mapping (Swaach Akash Abhiyan), and global health studies in Hyderabad, India.",
  keywords: ["World Allergy Foundation", "Dr. Vyakarnam Nageshwar", "H5N1 Advisory India", "Allergy Research Hyderabad", "Green Channel Treaty India Kenya", "Environmental Immunology", "Swaach Akash Abhiyan", "Immunotherapy Patient Stories"],
  authors: [{ name: "Asian Institute of Allergy" }],
  openGraph: {
    title: "World Allergy Foundation | Clinical Research & Global Immunology Advocacy",
    description: "Bridging clinical practice and global health literature through evidence-based research and advocacy.",
    url: "https://asian-institute-of-allergy.vercel.app/world-allergy-foundation",
    siteName: "Asian Institute of Allergy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Allergy Foundation | Global Research Hub",
    description: "Leading the conversation on chronic inflammation and environmental immunology.",
  },
  alternates: {
    canonical: "/world-allergy-foundation",
  }
};

export default function Page() {
  return <WAFClient />;
}
