import ConditionTemplate from "@/components/sections/ConditionTemplate";
import { ShieldCheck, Activity, Zap } from "lucide-react";

export const metadata = {
  title: "Autoimmune Disorder Treatment Hyderabad | Clinical Immunology",
  description: "Specialized care for complex autoimmune conditions and systemic inflammation. Led by world-renowned immunologist Dr. Vyakarnam.",
  keywords: "autoimmune treatment Hyderabad, clinical immunology India, chronic inflammation, Dr. Vyakarnam, systemic immune dysfunction",
};

export default function AutoimmunePage() {
  const highlights = [
    {
      iconName: "activity",
      title: "Systemic Mapping",
      desc: "Comprehensive evaluation of inflammatory markers to understand why the immune system is attacking the body's own tissues."
    },
    {
      iconName: "zap",
      title: "Immune Modulation",
      desc: "Advanced protocols focused on balancing the immune system rather than just suppressing it with broad-spectrum steroids."
    },
    {
      iconName: "shield",
      title: "Precision Recovery",
      desc: "Tailored clinical pathways that address the root cause of systemic dysfunction for patients with complex cases."
    }
  ];

  const faqs = [
    {
      question: "How is your approach to autoimmune disease different?",
      answer: "Most traditional treatments focus on global immune suppression, which can have significant side effects. We focus on immune modulation—identifying the specific triggers and correcting the underlying dysfunction."
    },
    {
      question: "Can root-cause treatment help with chronic inflammation?",
      answer: "Yes. By identifying environmental and biological 'insults' to the immune system, we can reduce the overall inflammatory load, leading to significant symptom improvement and better quality of life."
    },
    {
      question: "Do you treat rare immunological conditions?",
      answer: "Yes, Dr. Vyakarnam is a specialist in complex and rare immunological cases that have not responded to standard clinical protocols."
    }
  ];

  return (
    <ConditionTemplate 
      title="Autoimmune Care"
      subtitle="Restore Systemic Balance"
      description="Specialized clinical immunology for treatment-resistant autoimmune conditions. We focus on modulating the immune response for long-term stability."
      image="/images/dr-nageswar.webp"
      highlights={highlights}
      faqs={faqs}
    />
  );
}
