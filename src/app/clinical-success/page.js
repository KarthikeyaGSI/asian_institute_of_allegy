import SuccessClient from "./SuccessClient";

export const metadata = {
  title: "Clinical Success Stories",
  description: "Real transformation stories of patients who found permanent relief from chronic allergies and asthma at the Asian Institute of Allergy.",
  openGraph: {
    title: "Clinical Success Stories | Asian Institute",
    description: "50,000+ patients treated with a 95%+ success rate in root-cause allergy management.",
  }
};

export default function Page() {
  return <SuccessClient />;
}
