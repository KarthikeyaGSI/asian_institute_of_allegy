import DoctorClient from "./DoctorClient";

export const metadata = {
  title: "Dr. Vyakarnam Nageshwar | Chief Immunologist & Allergy Specialist",
  description: "Meet Dr. Vyakarnam Nageshwar, India's leading immunologist and allergy specialist with 20+ years of experience in root-cause diagnosis. Pioneer of SLIT in India and Founder of Asian Institute of Allergy.",
  keywords: ["Dr. Vyakarnam Nageshwar", "allergy specialist Hyderabad", "best immunologist India", "SLIT treatment expert", "asthma specialist"],
  openGraph: {
    title: "Dr. Vyakarnam Nageshwar | Chief Immunologist | Asian Institute of Allergy",
    description: "Expert immunology care and pioneering research in root-cause allergy treatment. Over 50,000 cases resolved through precision medicine.",
    images: ["/images/dr-nageswar.webp"],
  },
  alternates: {
    canonical: "https://asianinstituteofallergy.com/doctor",
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
              "@type": "Physician",
              "@id": "https://asianinstituteofallergy.com/doctor/#physician",
              "name": "Dr. Vyakarnam Nageshwar",
              "image": "https://asianinstituteofallergy.com/images/dr-nageswar.webp",
              "description": "Founder & Chief Immunologist at Asian Institute of Allergy. Expert in Sublingual Immunotherapy (SLIT) and root-cause allergy resolution.",
              "medicalSpecialty": "Immunology",
              "url": "https://asianinstituteofallergy.com/doctor",
              "worksFor": {
                "@type": "MedicalClinic",
                "name": "Asian Institute of Allergy",
                "url": "https://asianinstituteofallergy.com"
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
              "@type": "BreadcrumbList",
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
                  "name": "Our Doctor",
                  "item": "https://asianinstituteofallergy.com/doctor"
                }
              ]
            }
          ]),
        }}
      />
      <DoctorClient />
    </>
  );
}

