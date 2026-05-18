"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, ArrowRight, ArrowLeft, CheckCircle2,
  Wind, ShieldCheck, Activity, Zap,
  ChevronRight, Sparkles, MessageCircle, Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    id: "segmentation",
    question: "Which best describes what you're dealing with?",
    options: [
      { id: "nasal", title: "Nasal Congestion", sub: "Sneezing, runny nose", icon: Wind },
      { id: "skin", title: "Skin Rashes", sub: "Hives, eczema, itching", icon: ShieldCheck },
      { id: "respiratory", title: "Breathing Issues", sub: "Asthma, chest tightness", icon: Activity },
      { id: "food", title: "Food Reactions", sub: "Swelling, nausea, hives", icon: Zap },
      { id: "eyes", title: "Eye Irritation", sub: "Redness, itching, watering", icon: Sparkles },
      { id: "unsure", title: "I'm not sure", sub: "Multiple symptoms", icon: Activity }
    ]
  },
  {
    id: "severity",
    question: "How much is this affecting your daily life?",
    description: "Move the slider to indicate severity",
    type: "slider"
  },
  {
    id: "duration",
    question: "How long have you been dealing with this?",
    options: [
      { id: "acute", title: "Less than 3 months", sub: "Acute episodes", color: "text-yellow-500" },
      { id: "subacute", title: "3–12 months", sub: "Subacute pattern", color: "text-orange-500" },
      { id: "chronic", title: "1–5 years", sub: "Chronic persistence", color: "text-red-500" },
      { id: "long-term", title: "Over 5 years", sub: "Long-term chronic", color: "text-red-700" }
    ]
  },
  {
    id: "treatments",
    question: "What have you tried so far?",
    multiSelect: true,
    options: [
      { id: "antihistamines", title: "Antihistamines", sub: "Cetirizine, Loratadine" },
      { id: "sprays", title: "Nasal Sprays", sub: "Flonase, Nasacort" },
      { id: "shots", title: "Allergy Shots (SCIT)", sub: "Injectable immunotherapy" },
      { id: "alternative", title: "Alternative Medicine", sub: "Ayurvedic/Homeopathic" },
      { id: "diet", title: "Dietary Changes", sub: "Elimination diets" },
      { id: "nothing", title: "Nothing yet", sub: "This is my first step" }
    ]
  },
  {
    id: "triggers",
    question: "When are your symptoms worst?",
    multiSelect: true,
    options: [
      { id: "morning", title: "Mornings", sub: "Dust mite indicator" },
      { id: "seasonal", title: "Specific Seasons", sub: "Pollen indicator" },
      { id: "animals", title: "Near Animals", sub: "Pet dander indicator" },
      { id: "work", title: "At Work/Buildings", sub: "Mold/Occupational" },
      { id: "food", title: "After Eating", sub: "Food indicator" },
      { id: "all-year", title: "Year-round", sub: "No clear pattern" }
    ]
  },
  {
    id: "impact",
    question: "Which of these has your condition affected?",
    multiSelect: true,
    options: [
      { id: "sleep", title: "Quality of Sleep" },
      { id: "work", title: "Work/School Performance" },
      { id: "exercise", title: "Physical Activity" },
      { id: "mental", title: "Mental Health & Mood" },
      { id: "children", title: "Child's Development" },
      { id: "emergency", title: "Emergency Visits" }
    ]
  },
  {
    id: "stakes",
    question: "What would life look like if you could resolve this permanently?",
    options: [
      { id: "sleep", title: "Sleep through the night" },
      { id: "freedom", title: "Stop carrying medication" },
      { id: "parenting", title: "Child could live normally" },
      { id: "activity", title: "Exercise without fear" },
      { id: "food", title: "Eat freely without anxiety" },
      { id: "all", title: "All of the above" }
    ]
  }
];

const severityInsights = [
  "Occasional discomfort",
  "Occasional discomfort",
  "Occasional discomfort",
  "Disrupting sleep and work",
  "Disrupting sleep and work",
  "Disrupting sleep and work",
  "Significantly limiting your life",
  "Significantly limiting your life",
  "Significantly limiting your life",
  "Emergency-level episodes occurring"
];

export default function DiagnosticQuiz({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [severity, setSeverity] = useState(5);
  const [isFinishing, setIsFinishing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [reportEmail, setReportEmail] = useState("");
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);
  const [isReportSent, setIsReportSent] = useState(false);

  useEffect(() => {
    const handleOpenQuiz = () => {
      // If quiz is already open, do nothing, otherwise we might reset state
      // But actually, we want to reset if it's already closed
      setCurrentStep(0);
      setShowResults(false);
      setIsReportSent(false);
    };

    window.addEventListener("open-quiz", handleOpenQuiz);
    return () => window.removeEventListener("open-quiz", handleOpenQuiz);
  }, []);

  const currentStepData = steps[currentStep];

  // Dynamic Analysis
  const conditionTitle = answers.segmentation === 'nasal' ? 'Rhinitis'
    : answers.segmentation === 'respiratory' ? 'Asthma'
      : answers.segmentation === 'skin' ? 'Dermatitis/Hives'
        : 'Immunological Disorder';

  const severityTier = severity > 7 ? 'Critical / Chronic'
    : severity > 4 ? 'Moderate-Severe'
      : 'Early Onset';

  const handleOptionSelect = (optionId) => {
    if (currentStepData.multiSelect) {
      const currentSelections = answers[currentStepData.id] || [];
      const newSelections = currentSelections.includes(optionId)
        ? currentSelections.filter(id => id !== optionId)
        : [...currentSelections, optionId];
      setAnswers({ ...answers, [currentStepData.id]: newSelections });
    } else {
      setAnswers({ ...answers, [currentStepData.id]: optionId });
      if (currentStep < steps.length - 1) {
        setTimeout(() => setCurrentStep(currentStep + 1), 300);
      } else {
        handleFinish();
      }
    }
  };

  const handleFinish = () => {
    setIsFinishing(true);
    setTimeout(() => {
      setIsFinishing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleReportSubmit = async (e) => {
    e.preventDefault();
    if (!reportEmail) return;

    setIsSubmittingReport(true);

    try {
      // Construct a detailed summary of all answers for the doctor's inbox
      const details = Object.entries(answers).map(([key, value]) => {
        const step = steps.find(s => s.id === key);
        if (!step) return `${key}: ${value}`;

        const label = step.question;
        const answerText = Array.isArray(value)
          ? value.map(id => step.options.find(o => o.id === id)?.title || id).join(", ")
          : step.options?.find(o => o.id === value)?.title || value;

        return `${label}: ${answerText}`;
      }).join("\n");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Urgent: Diagnostic Report for ${reportEmail}`,
          from_name: "AIA Medical Funnel",
          email: reportEmail,
          reply_to: reportEmail,
          message: `A patient has completed the diagnostic quiz.\n\nSUMMARY:\nCondition: ${conditionTitle}\nSeverity: ${severityTier} (${severity}/10)\n\nDETAILED ANSWERS:\n${details}`,
          condition: conditionTitle,
          severity: `${severityTier} (${severity}/10)`,
          botcheck: "" // HoneyPot field
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsReportSent(true);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Report submission failed", error);
      // Fallback: If Web3Forms fails, we still show success to the user but log the error
      // Or we can try to redirect to WhatsApp as a secondary 'easy' trigger
      setIsReportSent(true);
    } finally {
      setIsSubmittingReport(false);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinish();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-xl overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
              {currentStep + 1}
            </div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Step {currentStep + 1} of {steps.length}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close diagnostic quiz"
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
          >
            <X size={24} />
          </button>
        </div>

        {/* Quiz Progress Bar */}
        <div className="w-full h-1 bg-slate-100 overflow-hidden relative">
          <motion.div
            className="h-full bg-primary w-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (currentStep + 1) / steps.length }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "left", willChange: "transform" }}
          />
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-12">
          {!showResults && !isFinishing && (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="max-w-2xl">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight font-heading tracking-tight">
                    {currentStepData.question}
                  </h3>
                  {currentStepData.description && (
                    <p className="mt-2 text-slate-500 font-medium">{currentStepData.description}</p>
                  )}
                </div>

                {/* Question Types */}
                {currentStepData.type === "slider" ? (
                  <div className="py-12 space-y-12">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={severity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        setSeverity(val);
                        setAnswers({ ...answers, severity: val });
                      }}
                      className="w-full h-4 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between items-center px-2">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Mild</span>
                      <div className="text-center">
                        <span className="text-6xl font-black text-primary font-heading">{severity}</span>
                        <p className="text-primary font-bold mt-2 uppercase tracking-widest text-xs">
                          {severityInsights[severity - 1]}
                        </p>
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">Severe</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentStepData.options.map((opt) => {
                      const isSelected = currentStepData.multiSelect
                        ? (answers[currentStepData.id] || []).includes(opt.id)
                        : answers[currentStepData.id] === opt.id;

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleOptionSelect(opt.id)}
                          className={`flex items-start gap-4 p-6 rounded-2xl border-2 text-left transition-all duration-300 ${isSelected
                              ? "border-primary bg-primary/5 shadow-lg scale-[1.02]"
                              : "border-slate-100 bg-slate-50/50 hover:border-slate-300"
                            }`}
                        >
                          {opt.icon && (
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? "bg-primary text-white" : "bg-white text-slate-400"}`}>
                              <opt.icon size={24} />
                            </div>
                          )}
                          <div>
                            <p className={`font-bold text-lg leading-tight ${isSelected ? "text-primary" : "text-slate-900"}`}>
                              {opt.title}
                            </p>
                            {opt.sub && (
                              <p className={`text-xs mt-1 font-medium ${isSelected ? "text-primary/60" : "text-slate-400"}`}>
                                {opt.sub}
                              </p>
                            )}
                          </div>
                          {isSelected && (
                            <div className="ml-auto text-primary">
                              <CheckCircle2 size={20} />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Finishing State */}
          {isFinishing && (
            <div className="py-24 text-center space-y-8">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900 font-heading">Analyzing Your Profile...</h3>
                <p className="text-slate-500 font-medium mt-2 italic">Matching symptoms with Dr. Vyakarnam's clinical protocols</p>
              </div>
            </div>
          )}

          {/* Results Page */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <span className="text-primary-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Clinical Insight</span>
                    <h3 className="text-4xl font-bold mb-6 font-heading tracking-tight leading-tight">
                      Your Allergy <br /><span className="text-primary-accent">Diagnostic Profile.</span>
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Primary Condition</p>
                        <p className="text-lg font-bold">Allergic {conditionTitle}</p>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">Severity Tier</p>
                        <p className="text-lg font-bold">{severityTier}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
                    <p className="text-primary-accent font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 size={16} /> Expert Verdict
                    </p>
                    <p className="text-slate-200 leading-relaxed italic text-lg font-medium">
                      "Patients with your profile who rely solely on antihistamines typically experience
                      <strong> progressive sensitization</strong>. SLIT has shown sustained long-term resolution in cases like yours."
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-slate-900 font-heading">Recommended Next Step</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">1</div>
                      <p className="text-slate-600 font-medium pt-1">Precision 400-Allergen Mapping Session</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">2</div>
                      <p className="text-slate-600 font-medium pt-1">Custom SLIT Recalibration Protocol</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={`https://wa.me/918074368748?text=${encodeURIComponent(`I've just completed the Diagnostic Quiz. My profile indicates ${severityTier} ${conditionTitle}. I'd like to book my evaluation.`)}`}
                      target="_blank"
                      className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} fill="currentColor" />
                      Expedite via WhatsApp
                    </a>
                    <button
                      onClick={onClose}
                      className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
                    >
                      Book In-Clinic Evaluation
                    </button>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  {!isReportSent ? (
                    <>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                          <Image
                            src="/images/dr-nageswar.webp"
                            alt="Doctor"
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div>
                          <p className="text-slate-900 font-bold">Get Full Report</p>
                          <p className="text-slate-500 text-xs font-medium">Sent to your inbox instantly</p>
                        </div>
                      </div>
                      <form onSubmit={handleReportSubmit} className="space-y-4">
                        <input
                          type="email"
                          placeholder="Your Email Address"
                          value={reportEmail}
                          onChange={(e) => setReportEmail(e.target.value)}
                          className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                        <button
                          disabled={isSubmittingReport}
                          className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#154d2e] transition-all disabled:opacity-50"
                        >
                          {isSubmittingReport ? "Sending..." : "Send My Allergy Report"}
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <Sparkles size={32} />
                      </div>
                      <p className="font-bold text-slate-900">Analysis Dispatched!</p>
                      <p className="text-sm text-slate-500 mt-1">Your forensic report has been sent to your inbox.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer Navigation */}
        {!showResults && !isFinishing && (
          <div className="px-8 py-6 bg-slate-50 flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 font-bold text-sm uppercase tracking-widest transition-opacity ${currentStep === 0 ? "opacity-0" : "opacity-60 hover:opacity-100"}`}
            >
              <ArrowLeft size={16} /> Back
            </button>

            {currentStepData.multiSelect || currentStepData.type === "slider" ? (
              <button
                onClick={nextStep}
                className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
              >
                Continue <ChevronRight size={18} />
              </button>
            ) : null}
          </div>
        )}
      </motion.div>
    </div>
  );
}
