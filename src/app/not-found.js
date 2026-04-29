import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-accent animate-pulse">
            <Search size={40} />
          </div>
        </div>
        
        <h1 className="text-8xl md:text-9xl font-bold font-heading text-white/10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          404
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading tracking-tight">
          Diagnosis: <span className="text-primary-accent italic">Lost Pathway</span>
        </h2>
        
        <p className="text-xl text-white/60 mb-12 leading-relaxed">
          The clinical data you&apos;re looking for isn&apos;t here. Let&apos;s get you back to the Institute for a proper evaluation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-2xl font-bold transition-all hover:bg-[#154d2e] hover:scale-105"
          >
            <ArrowLeft size={20} /> Back to Institute
          </Link>
          <Link 
            href="/world-allergy-foundation" 
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold transition-all hover:bg-white/10 hover:scale-105"
          >
            Visit Foundation
          </Link>
        </div>
      </div>
    </main>
  );
}
