import SuccessClient from "./SuccessClient";

export const metadata = {
  title: "Clinical Patient Stories",
  description: "Real transformation stories of patients who found permanent relief from chronic allergies and asthma at the Asian Institute of Allergy.",
  openGraph: {
    title: "Clinical Patient Stories | Asian Institute",
    description: "50,000+ patients treated with precision root-cause allergy management.",
  }
};

export default function Page() {
  return <SuccessClient />;
}
