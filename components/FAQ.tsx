"use client";

import { useState } from "react";

interface FAQProps {
  id?: string;
}

export default function FAQ({ id }: FAQProps) {
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
    <section 
      id={id || "faq"} 
      className="w-full border-b border-[#1b1b1b] py-24 md:py-32 bg-black"
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        {/* Left Grid Matrix Column */}
        <div className="md:col-span-1">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-[#ffffff] leading-[1.05] uppercase">
            Questions
          </h2>
          <p className="text-[#8e8e93] text-sm leading-relaxed mt-4">
            Everything you need to know about the admission process, program format, and scholarship pathways.
          </p>
        </div>

        {/* Right Grid Matrix Column */}
        <div className="md:col-span-2 flex flex-col justify-start">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#222222] py-6 first:pt-0 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-white text-base md:text-lg tracking-tighter leading-[1.05] pr-4">
                  {faq.question}
                </span>
                <span className="text-[#1526b4] text-xl font-mono flex-shrink-0">
                  {openIndex === index ? "[-]" : "[+]"}
                </span>
              </button>
              {openIndex === index && (
                <div className="pt-4">
                  <p className="text-[#8e8e93] text-sm md:text-base leading-relaxed tracking-normal max-w-xl">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
