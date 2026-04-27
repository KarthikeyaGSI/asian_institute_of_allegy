import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/home/ContactForm";

export default function AsthmaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="container-custom">
          <h1 className="text-5xl font-bold mb-8">Allergic Asthma Treatment</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            At the Asian Institute, we don&apos;t just manage asthma symptoms. We identify the environmental and biological triggers causing your inflammation and use immunotherapy to train your immune system for long-term relief.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">Diagnosis</h3>
              <p className="text-gray-600">Advanced Pulmonary Function Tests (PFT) and precise allergen identification.</p>
            </div>
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h3 className="text-2xl font-bold mb-4 text-primary">Root-Cause Fix</h3>
              <p className="text-gray-600">Personalized Sublingual Immunotherapy (SLIT) to reduce drug dependency.</p>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
