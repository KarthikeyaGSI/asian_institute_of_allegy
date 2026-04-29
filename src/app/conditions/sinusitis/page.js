import ConditionTemplate from "@/components/sections/ConditionTemplate";
import { Activity, Wind, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Chronic Sinusitis & Rhinitis Treatment Hyderabad | Root-Cause Care",
  description: "End the cycle of nasal congestion and sinus pain. Root-cause treatment for Allergic Rhinitis in Hyderabad using precision immunotherapy.",
  keywords: "sinusitis treatment Hyderabad, allergic rhinitis specialist, sinus pain relief, Dr. Vyakarnam, immunotherapy for sinus",
};

export default function SinusitisPage() {
  const highlights = [
    {
      iconName: "activity",
      title: "Mucosal Analysis",
      desc: "Deep diagnostic evaluation of the nasal mucosa to identify specific environmental triggers like dust mites and pollen."
    },
    {
      iconName: "wind",
      title: "Airway Clearing",
      desc: "Moving beyond temporary nasal sprays to address the inflammatory basis of your sinus blockage."
    },
    {
      iconName: "shield",
      title: "Long-term Resolution",
      desc: "SLIT protocols that desensitize your immune system to airborne allergens, providing permanent relief from chronic rhinitis."
    }
  ];

  const faqs = [
    {
      question: "Why do nasal sprays only provide temporary relief?",
      answer: "Nasal sprays treat the symptom (inflammation/swelling) but not the cause (immune hypersensitivity). Once the spray wears off, the body reacts again to the same triggers. Our immunotherapy treats the 'why' behind the reaction."
    },
    {
      question: "How is allergic rhinitis linked to asthma?",
      answer: "This is known as the 'United Airway' concept. Inflammation in the nose often leads to inflammation in the lungs. By treating your sinusitis at the root, we often prevent the progression to asthma."
    },
    {
      question: "Are there any side effects to Sinus Immunotherapy?",
      answer: "Sublingual Immunotherapy (SLIT) is extremely safe and non-invasive. Unlike injections, it has a negligible risk of systemic reactions and can be administered safely at home under our guidance."
    }
  ];

  return (
    <ConditionTemplate 
      title="Sinusitis & Rhinitis"
      subtitle="Clear Your Airway"
      description="Stop living with a blocked nose and constant headaches. We identify your environmental triggers to provide a permanent clinical fix."
      image="/images/World-Allergy-Foundation-Flags-Yeast-Allergy-Risks-in-Indias-HPV-Vaccine-Drive-1275x768.png" 
      highlights={highlights}
      faqs={faqs}
    />
  );
}
