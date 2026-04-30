import WAFClient from "./WAFClient";

export const metadata = {
  title: "Research & Global Allergy Studies",
  description: "World Allergy Foundation (WAF) bridges clinical practice and scientific literature. Focused on evidence-based therapies for treatment-resistant conditions.",
  openGraph: {
    title: "Research & Global Allergy Studies | Asian Institute",
    description: "Bridging clinical excellence, scientific research, and global public health awareness.",
  }
};

export default function Page() {
  return <WAFClient />;
}
