"use client";

import { useReveal } from "@/lib/useReveal";

const MODULES = [
  {
    title: "Performance Marketing & Data Foundations",
    frameworks: "Advanced Attribution Modeling, First-Party Data Architecture, Cohort Analysis & LTV Forecasting",
    output: "True profitability tracking dashboard independent of platform vanity data."
  },
  {
    title: "Content Strategy & Brand Systems",
    frameworks: "The Narrative Hook Framework, Content Supply Chain Automation, Viral Distribution Mechanics",
    output: "Repeatable brand engine designed to feed paid funnels organically."
  },
  {
    title: "Growth Loops & Product-Led Marketing",
    frameworks: "Acquisition vs. Retention Loops, Referral Mechanics, Friction-Reduction Frameworks",
    output: "Self-sustaining framework that lowers structural reliance on scaling paid spend."
  },
  {
    title: "Marketing Operations & Leadership",
    frameworks: "Growth Team Structuring, Budget Allocation Models, Tech Stack Orchestration",
    output: "A tailored 90-day execution roadmap."
  }
];

interface CurriculumProps {
  id?: string;
}

export default function Curriculum({ id }: CurriculumProps) {
  const [ref, isVisible] = useReveal();

  return (
    <section 
      ref={ref} 
      id={id || "curriculum"} 
      className={`w-full border-b border-[#1b1b1b] py-24 md:py-32 bg-black reveal ${isVisible ? 'show' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        {/* Left Column: Pinned Sticky */}
        <div className="md:col-span-1 self-stretch">
          <div className="md:sticky md:top-24 self-start space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-[-0.04em] leading-[1.0] uppercase text-[#1526b4]">
              System Archetype
            </h2>
            <p className="text-[#8e8e93] text-base leading-[1.65] max-w-[280px]">
              4 Modules. Deep execution. Zero high-level fluff.
            </p>
          </div>
        </div>

        {/* Right Column: Clean widescreen alternating rows */}
        <div className="md:col-span-2 flex flex-col divide-y divide-[#1b1b1b]">
          {MODULES.map((mod, index) => (
            <div 
              key={index} 
              className={`p-8 flex flex-col space-y-4 rounded-none transition-colors duration-300 ${
                index % 2 === 0 ? "bg-[#080808]" : "bg-black"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-[#8e8e93] font-mono text-xs uppercase tracking-wider">
                  Module 0{index + 1}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-[-0.04em] leading-[1.0] uppercase">
                {mod.title}
              </h3>
              <p className="text-[#8e8e93] text-base leading-[1.65]">
                <span className="text-white font-mono text-sm uppercase block mb-1">Frameworks:</span>
                {mod.frameworks}
              </p>
              <p className="text-[#8e8e93] text-base leading-[1.65]">
                <span className="text-white font-mono text-sm uppercase block mb-1">Deliverable:</span>
                {mod.output}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
