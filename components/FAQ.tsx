"use client";

import { useState } from "react";

/**
 * FAQ Component
 * 
 * This component displays frequently asked questions in an accordion format.
 * Users can expand each question to see the answer.
 * The questions and answers are based on common concerns about the course.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What does the application process involve?",
      answer:
        "You fill a short form with your background and goals. Our team calls you within 48 hours for a 15–20 minute conversation to understand if RMDM is the right fit for you right now. If accepted, you receive a confirmation and payment details. Not every applicant is accepted — we want each cohort to be the right mix of people.",
    },
    {
      question: "Do I need prior experience in marketing?",
      answer:
        "No. RMDM starts from first principles before building into strategy and execution. We've had students who had never run a single ad come out managing full campaigns. What matters more is your commitment and clarity of goal — which is why we have the interview.",
    },
    {
      question: "I work full-time. Can I manage weekend sessions?",
      answer:
        "Yes — that's exactly what the weekend format is designed for. Live sessions happen only on Saturday and Sunday, typically 2–3 hours each. You also get 30 hours of recorded content to catch up at your own pace if you miss a session.",
    },
    {
      question: "What makes this different from a ₹5,000 online course?",
      answer:
        "The cohort size (30 people), the live format, the 1:1 feedback, the application process, and the fact that Tarun has worked with 300+ real brands. You're not watching videos — you're building real work with a practitioner in the room, alongside peers who were selected for the same reason you were.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes. Upon completion you receive a TarunSpeaks certificate you can add to your LinkedIn profile and resume.",
    },
    {
      question: "Is there a scholarship or EMI option?",
      answer:
        "Yes to both. Merit-based scholarships up to ₹17,000 are available based on an eligibility test score. EMI plans at 0% interest are available for 3, 6, 9, and 12 months. Both are discussed during or after your interview call.",
    },
  ];

  return (
    <section id="faq" className="pt-12 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] mb-3 font-semibold">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-accent/10 border border-accent/30 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-primary text-lg pr-4">{faq.question}</span>
                <span className="text-accent text-2xl flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-primary/80 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

