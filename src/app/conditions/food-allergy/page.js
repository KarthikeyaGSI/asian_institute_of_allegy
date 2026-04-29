import ConditionTemplate from "@/components/sections/ConditionTemplate";
import { Search, Zap, Activity } from "lucide-react";

export const metadata = {
  title: "Food Allergy Testing & Treatment Hyderabad | Root-Cause Care",
  description: "Advanced diagnostic mapping for food sensitivities and allergies in Hyderabad. Expert clinical management by Dr. Vyakarnam.",
  keywords: "food allergy testing Hyderabad, nut allergy treatment, gluten sensitivity, Dr. Vyakarnam, allergen forensic lab",
};

export default function FoodAllergyPage() {
  const highlights = [
    {
      iconName: "search",
      title: "Molecular Mapping",
      desc: "Precision testing to distinguish between true food allergies and sensitivities, identifying exact protein triggers."
    },
    {
      iconName: "activity",
      title: "Gut-Immune Axis",
      desc: "Addressing the relationship between your digestive health and systemic immune responses for better tolerance."
    },
    {
      iconName: "zap",
      title: "Safety Protocols",
      desc: "Providing comprehensive avoidance strategies and emergency preparedness while working towards oral tolerance."
    }
  ];

  const faqs = [
    {
      question: "What is the difference between food allergy and intolerance?",
      answer: "A food allergy involves an immune system reaction that can be life-threatening, while intolerance usually involves the digestive system. We use molecular diagnostics to provide a definitive answer."
    },
    {
      question: "Can children outgrow food allergies with treatment?",
      answer: "Many children can develop tolerance through scientifically guided protocols and early intervention. Our goal is to expand the diet safely while monitoring immune markers."
    },
    {
      question: "Why is yeast allergy screening important?",
      answer: "Dr. Vyakarnam's research has identified a high prevalence of yeast hypersensitivity in India, which can complicate other allergies and even impact vaccine safety. We are one of the few labs screening for this specifically."
    }
  ];

  return (
    <ConditionTemplate 
      title="Food Allergy"
      subtitle="Eat With Confidence"
      description="Precision identification of hidden food triggers. We map your biological response to proteins to keep you safe and healthy."
      image="/images/Work shop on allegy.jpeg"
      highlights={highlights}
      faqs={faqs}
    />
  );
}
