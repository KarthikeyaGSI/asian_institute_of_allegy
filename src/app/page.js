import HomeClient from "./HomeClient";

export const metadata = {
  title: "Best Allergy Clinic in the World | Permanent Root-Cause Relief",
  description: "Recognized as a leading global institute for permanent allergy relief. Specializing in root-cause diagnosis and advanced immunotherapy for Asthma, Eczema, and Skin Allergies. Join 50,000+ patients who found clinical recovery with India's expert immunologists.",
  keywords: [
    "best allergy clinic in the world",
    "root cause allergy treatment",
    "permanent allergy relief",
    "best immunologist in India",
    "chronic allergy recovery",
    "advanced asthma treatment",
    "eczema root cause cure",
    "molecular allergy diagnosis",
    "world-class allergy center",
    "immunotherapy for allergies"
  ],
  openGraph: {
    title: "Best Allergy Clinic in the World | Permanent Root-Cause Relief",
    description: "Resolving chronic allergic conditions for 20+ years. Advanced diagnostic protocols and permanent immunotherapy solutions for patients worldwide.",
  },
  alternates: {
    canonical: "https://asianinstituteofallergy.com",
  }
};

export default function Page() {
  return <HomeClient />;
}
