import DoctorClient from "./DoctorClient";

export const metadata = {
  title: "Dr. Vyakarnam Nageshwar | Allergy Specialist",
  description: "Meet Dr. Vyakarnam Nageshwar, India's leading immunologist and allergy specialist with 20+ years of experience in root-cause diagnosis.",
  openGraph: {
    title: "Dr. Vyakarnam Nageshwar | Allergy Specialist | Asian Institute",
    description: "Expert immunology care and pioneering research in allergy treatment.",
  }
};

export default function Page() {
  return <DoctorClient />;
}
