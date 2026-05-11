import SuccessClient from "./SuccessClient";

export const metadata = {
  title: "Clinical Success Stories | Permanent Allergy Relief Results",
  description: "Real transformation stories of patients who found permanent relief from chronic allergies and asthma at the Asian Institute of Allergy through SLIT and root-cause resolution.",
  keywords: ["allergy success stories", "asthma recovery stories India", "SLIT patient reviews", "immunotherapy results", "permanent allergy relief testimonials"],
  openGraph: {
    title: "Clinical Success Stories | Asian Institute of Allergy",
    description: "Over 50,000 patients treated with precision root-cause allergy management. Read about their journey to recovery.",
    images: ["/images/dr-nageswar.webp"],
  },
  alternates: {
    canonical: "https://asianinstituteofallergy.com/clinical-success",
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
              "@type": "CollectionPage",
              "@id": "https://asianinstituteofallergy.com/clinical-success/#webpage",
              "url": "https://asianinstituteofallergy.com/clinical-success",
              "name": "Clinical Success Stories and Patient Testimonials",
              "description": "A collection of real-world patient outcomes and clinical success stories in treating chronic allergy and asthma.",
              "breadcrumb": { "@id": "https://asianinstituteofallergy.com/clinical-success/#breadcrumb" }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "@id": "https://asianinstituteofallergy.com/clinical-success/#breadcrumb",
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
                  "name": "Clinical Success",
                  "item": "https://asianinstituteofallergy.com/clinical-success"
                }
              ]
            }
          ]),
        }}
      />
      <SuccessClient />
    </>
  );
}

