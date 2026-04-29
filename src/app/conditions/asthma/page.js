import ConditionTemplate from "@/components/sections/ConditionTemplate";
import { Wind, Activity, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Advanced Allergic Asthma Treatment Hyderabad | Root-Cause Care",
  description: "Specialized allergic asthma treatment in Hyderabad using Sublingual Immunotherapy (SLIT). Identify triggers with PFT and resolve asthma at the root cause.",
  keywords: "asthma treatment Hyderabad, allergic asthma specialist, Dr. Vyakarnam Nageshwar, immunotherapy for asthma, PFT test Hyderabad",
};

export default function AsthmaPage() {
  const highlights = [
    {
      icon: Wind,
      title: "Trigger Identification",
      desc: "Advanced Pulmonary Function Tests (PFT) and allergen forensic mapping to find exactly what sets off your asthma."
    },
    {
      icon: Activity,
      title: "Lung Modulation",
      desc: "Moving beyond inhalers to modulate the immune system's response to environmental pollutants and pollens."
    },
    {
      icon: ShieldCheck,
      title: "Permanent Relief",
      desc: "Sublingual Immunotherapy (SLIT) protocols designed to provide long-term resolution without steroid dependency."
    }
  ];

  const faqs = [
    {
      question: "Can allergic asthma be cured permanently?",
      answer: "While traditional medicine focuses on management via inhalers, our root-cause approach using Sublingual Immunotherapy (SLIT) aims to desensitize the immune system, leading to long-term resolution and significantly reduced drug dependency."
    },
    {
      question: "How is root-cause asthma diagnosis different?",
      answer: "We don't just look at the lungs. We analyze environmental aerobiology, identify specific regional triggers in Hyderabad, and use molecular diagnostics to understand the biological basis of your inflammation."
    },
    {
      question: "Is immunotherapy safe for children with asthma?",
      answer: "Yes, our SLIT protocols are non-invasive, needle-free, and highly effective for patients as young as 2 years old, helping them grow up without the limitations of chronic asthma."
    }
  ];

  return (
    <ConditionTemplate 
      title="Allergic Asthma"
      subtitle="Breathe Naturally"
      description="India's leading centre for root-cause asthma resolution. We move beyond temporary inhalers to fix the underlying immune dysfunction."
      image="/images/Work shop on allegy.jpeg"
      highlights={highlights}
      faqs={faqs}
    />
  );
}
