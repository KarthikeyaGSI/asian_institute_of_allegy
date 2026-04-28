import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    question: "Where is it most active?",
    options: ["Breathing", "Skin", "Sinus", "Multiple"],
  },
  {
    question: "How long?",
    options: ["< 6 months", "1–2 years", "3+ years"],
  },
  {
    question: "Do symptoms return?",
    options: ["Frequently", "Sometimes", "Rarely"],
  },
  {
    question: "Are you using medication regularly?",
    options: ["Yes", "Sometimes", "No"],
  },
];

export default function QuizModal({ isOpen, onClose }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleSelect = (option) => {
    const newAnswers = [...answers];
    newAnswers[current] = option;
    setAnswers(newAnswers);
    if (current < steps.length - 1) {
      setCurrent(current + 1);
    } else {
      // finished
      setCurrent(steps.length);
    }
  };

  const reset = () => {
    setCurrent(0);
    setAnswers([]);
    onClose();
  };

  const progress = ((current + 1) / steps.length) * 100;

  return (
    <>{isOpen && (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-lg w-full max-w-2xl mx-4 p-6 relative"
        >
          {/* Close button */}
          <button
            onClick={reset}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          >✕</button>

          {/* Progress bar */}
          <div className="h-1 bg-gray-200 rounded mb-6 overflow-hidden">
            <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
          </div>

          {/* Question */}
          {current < steps.length ? (
            <>
              <h2 className="text-2xl font-semibold mb-4">
                {steps[current].question}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {steps[current].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelect(opt)}
                    className="p-4 border rounded hover:shadow-lg transition"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold mb-2">
                You may be dealing with chronic allergic inflammation.
              </h3>
              <p className="mb-4">Our analysis suggests your current treatment might not target the root cause.</p>
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-accent"
              >
                Get a complete allergy evaluation
              </a>
            </div>
          )}
        </motion.div>
      </div>
    )}</>
  );
}
