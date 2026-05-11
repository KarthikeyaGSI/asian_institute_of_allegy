import TreatmentsClient from "./TreatmentsClient";

export const metadata = {
  title: "Advanced Allergy & Immunotherapy Treatments | SLIT Experts",
  description: "Advanced allergy and immunotherapy treatments in Hyderabad. Specialized in Sublingual Immunotherapy (SLIT), precision diagnostics, and root-cause resolution for asthma and allergic rhinitis.",
  keywords: ["SLIT treatment Hyderabad", "sublingual immunotherapy India", "allergy drops", "asthma treatment", "permanent allergy relief"],
  openGraph: {
    title: "Advanced Allergy & Immunotherapy Treatments | Asian Institute of Allergy",
    description: "Treating the cause, not just the symptom. Advanced immunological protocols and needle-free SLIT for long-term immunity.",
    images: ["/images/dr-nageswar.webp"],
  },
  alternates: {
    canonical: "https://asianinstituteofallergy.com/treatments",
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
              "@type": "MedicalWebPage",
              "@id": "https://asianinstituteofallergy.com/treatments/#webpage",
              "url": "https://asianinstituteofallergy.com/treatments",
              "name": "Advanced Allergy & Immunotherapy Treatments",
              "description": "Comprehensive guide to Sublingual Immunotherapy (SLIT) and molecular diagnostics for chronic allergy resolution.",
              "breadcrumb": { "@id": "https://asianinstituteofallergy.com/treatments/#breadcrumb" }
            },
            {
              "@context": "https://schema.org",
              "@type": "MedicalProcedure",
              "name": "Sublingual Immunotherapy (SLIT)",
              "description": "A needle-free treatment for allergies that involves placing drops under the tongue to desensitize the immune system.",
              "preparation": "Clinical evaluation and allergen sensitivity mapping.",
              "procedureType": "Immunotherapy",
              "relevantSpecialty": {
                "@type": "MedicalSpecialty",
                "name": "Immunology"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://asianinstituteofallergy.com/treatments/#breadcrumb",
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
                  "name": "Treatments",
                  "item": "https://asianinstituteofallergy.com/treatments"
                }
              ]
            }
          ]),
        }}
      />
      <TreatmentsClient />
    </>
  );
}

