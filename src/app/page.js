import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import GuidedEntry from "@/components/home/GuidedEntry";
import ProblemSolution from "@/components/home/ProblemSolution";
import PatientPathways from "@/components/home/PatientPathways";
import InflammationJourney from "@/components/home/InflammationJourney";
import OneRoof from "@/components/home/OneRoof";
import DoctorAnchor from "@/components/home/DoctorAnchor";
import Testimonials from "@/components/home/Testimonials";
import ProofSection from "@/components/home/ProofSection";
import FoundationSection from "@/components/home/FoundationSection";
import ContactForm from "@/components/home/ContactForm";
import LocationSection from "@/components/home/LocationSection";
import StickyBottomBar from "@/components/layout/StickyBottomBar";
import Reveal from "@/components/utils/Reveal";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-gray-900 selection:bg-primary selection:text-white overflow-x-hidden">
      <Reveal />
      <Navbar />
      
      <Hero />
      <GuidedEntry />
      <ProblemSolution />
      <PatientPathways />
      <InflammationJourney />
      <OneRoof />
      <DoctorAnchor />
      <Testimonials />
      <ProofSection />
      <FoundationSection />
      <ContactForm />
      <LocationSection />
      
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
