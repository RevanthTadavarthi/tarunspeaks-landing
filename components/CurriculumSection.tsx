"use client";

import { useState } from "react";

const curriculumData = {
  m1: {
    label: "Module 01",
    title: "Performance Marketing & Data Foundations",
    focus: "Moving past basic platform setups into deep unit economics.",
    frameworks: ["Advanced Attribution Modeling", "First-Party Data Architecture", "Cohort Analysis & LTV Forecasting"],
    output: "A bulletproof dashboard that tracks true profitability, not vanity metrics."
  },
  m2: {
    label: "Module 02",
    title: "Content Strategy & Brand Systems",
    focus: "Structural storytelling engineered for modern distribution channels.",
    frameworks: ["The Narrative Hook Framework", "Content Supply Chain Automation", "Viral Distribution Mechanics"],
    output: "A repeatable content engine that feeds your performance funnels organically."
  },
  m3: {
    label: "Module 03",
    title: "Growth Loops & Product-Led Marketing",
    focus: "Engineering loops where every user acquired naturally brings in the next.",
    frameworks: ["Acquisition vs. Retention Loops", "Referral Mechanics", "Friction-Reduction Frameworks"],
    output: "A self-sustaining growth model that lowers your reliance on paid media."
  },
  m4: {
    label: "Module 04",
    title: "Marketing Operations & Leadership",
    focus: "Managing the cross-functional machinery required to run an elite growth team.",
    frameworks: ["Growth Team Structuring", "Budget Allocation Models", "Tech Stack Orchestration"],
    output: "A 90-day execution blueprint custom-built for your company’s current scale."
  }
};

interface CurriculumSectionProps {
  id?: string;
}

export default function CurriculumSection({ id }: CurriculumSectionProps) {
  const [activeTab, setActiveTab] = useState<keyof typeof curriculumData>("m1");
  const current = curriculumData[activeTab];

  return (
    <section id={id || "curriculum"} className="w-full border-b border-[#1b1b1b] py-24 md:py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start w-full">
        
        {/* Left Interactive Controller Column */}
        <div className="md:col-span-1 md:sticky md:top-24 space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.04em] leading-[1.0] uppercase text-[#1526b4] mb-2">
              The System Archetype
            </h2>
            <p className="text-xs font-mono text-[#8e8e93] uppercase tracking-wider">4 Core Modules. Zero Fluff.</p>
          </div>
          
          {/* Stark Vertical Trigger Stack */}
          <div className="flex flex-col space-y-4 border-l border-[#1b1b1b] pl-0">
            {Object.entries(curriculumData).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as keyof typeof curriculumData)}
                className={`text-left text-base font-bold tracking-tight uppercase transition-colors duration-200 py-1 pl-4 border-l-2 -ml-[1px] ${
                  activeTab === key 
                    ? "text-white border-[#1526b4]" 
                    : "text-[#444444] border-transparent hover:text-[#8e8e93]"
                }`}
              >
                {value.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Replacement Pane */}
        <div className="md:col-span-2 min-h-[300px] space-y-8 border-t border-[#1b1b1b] pt-6 md:border-t-0 md:pt-0">
          <div>
            <span className="text-xs font-mono text-[#8e8e93] uppercase tracking-widest block mb-2">// Active Module Framework</span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white leading-tight">
              {current.title}
            </h3>
          </div>
          
          <div className="space-y-6 text-base text-[#8e8e93] leading-[1.65] max-w-xl">
            <p className="text-white font-medium">{current.focus}</p>
            
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#444444] block">Core Architectural Frameworks:</span>
              <ul className="space-y-1 border-l border-[#1b1b1b] pl-4 font-mono text-sm text-[#8e8e93]">
                {current.frameworks.map((f, i) => (
                  <li key={i}>→ {f}</li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#141414]">
              <span className="text-xs font-mono uppercase text-[#8e8e93] block mb-1">Tangible Output:</span>
              <p className="text-sm font-medium text-white bg-[#141414] p-4 border border-[#222222] rounded-none">
                {current.output}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
