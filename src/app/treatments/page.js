import TreatmentsClient from "./TreatmentsClient";

export const metadata = {
  title: "Allergy & Immunotherapy Treatments",
  description: "Advanced allergy and immunotherapy treatments. From Sublingual Immunotherapy (SLIT) to molecular diagnostics for permanent clinical resolution.",
  openGraph: {
    title: "Allergy & Immunotherapy Treatments | Asian Institute",
    description: "Treating the cause, not just the symptom. Advanced immunological protocols.",
  }
};

export default function Page() {
  return <TreatmentsClient />;
}
