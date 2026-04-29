import ConditionTemplate from "@/components/sections/ConditionTemplate";
import { ShieldCheck, Search, Zap } from "lucide-react";

export const metadata = {
  title: "Chronic Eczema & Skin Allergy Treatment Hyderabad | AIA",
  description: "Advanced root-cause treatment for Eczema, Urticaria, and chronic skin allergies in Hyderabad. Led by Dr. Vyakarnam Nageshwar with precision immunotherapy.",
  keywords: "eczema treatment Hyderabad, skin allergy specialist, urticaria relief, Dr. Vyakarnam Nageshwar, immunotherapy for skin allergy",
};

export default function EczemaPage() {
  const highlights = [
    {
      iconName: "search",
      title: "Dermal Diagnostics",
      desc: "Precise patch testing and molecular screening to identify contact and systemic triggers for skin inflammation."
    },
    {
      iconName: "zap",
      title: "Inflammation Control",
      desc: "Using molecular hydrogen therapy and targeted clinical protocols to resolve deep-seated dermal flare-ups."
    },
    {
      iconName: "shield",
      title: "Barrier Restoration",
      desc: "Immunotherapy protocols that strengthen the body's internal defense, leading to clear, healthy skin from within."
    }
  ];

  const faqs = [
    {
      question: "Why do my skin allergies keep coming back?",
      answer: "Most treatments only address the surface symptoms with steroid creams. Skin allergies recur because the underlying immune hypersensitivity remains. Our root-cause approach identifies the biological trigger and desensitizes your system."
    },
    {
      question: "What is the role of immunotherapy in Eczema?",
      answer: "Immunotherapy (SLIT) trains your immune system to stop overreacting to allergens that cause skin flare-ups, providing a long-term solution rather than a temporary fix."
    },
    {
      question: "How long does it take to see results for chronic urticaria?",
      answer: "While every patient is different, most experience significant resolution within 3 to 6 months of our scientifically guided immunotherapy and lifestyle modulation protocols."
    }
  ];

  return (
    <ConditionTemplate 
      title="Eczema & Skin Allergy"
      subtitle="Restore Your Skin"
      description="Stop managing rashes with temporary creams. We identify the immunological basis of your skin condition for permanent clinical resolution."
      image="/images/Before-and-after-treatment-of-chronic-skin-allergy-with-swelling-and-ulcers-resolved-after-immunotherapy-at-Aswini-Allergy-Centre-Hyderabad-1275x7.png"
      highlights={highlights}
      faqs={faqs}
    />
  );
}
