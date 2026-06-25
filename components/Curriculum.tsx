"use client";

import { useReveal } from "@/lib/useReveal";

const MODULES = [
  {
    num: "M1",
    title: "Performance Marketing & Data Foundations",
    frameworks: "Advanced Attribution Modeling, First-Party Data Architecture, Cohort Analysis & LTV Forecasting",
    output: "True profitability tracking dashboard independent of platform vanity data."
  },
  {
    num: "M2",
    title: "Content Strategy & Brand Systems",
    frameworks: "The Narrative Hook Framework, Content Supply Chain Automation, Viral Distribution Mechanics",
    output: "Repeatable brand engine designed to feed paid funnels organically."
  },
  {
    num: "M3",
    title: "Growth Loops & Product-Led Marketing",
    frameworks: "Acquisition vs. Retention Loops, Referral Mechanics, Friction-Reduction Frameworks",
    output: "Self-sustaining framework that lowers structural reliance on scaling paid spend."
  },
  {
    num: "M4",
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
        {/* Left Grid Matrix Column */}
        <div className="md:col-span-1">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#00bf63] mb-4 uppercase block">
            CURRICULUM //
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-[#ffffff] leading-[1.05] uppercase">
            System Archetype
          </h2>
          <p className="text-[#8e8e93] text-sm leading-relaxed mt-4">
            4 Modules. Deep execution. Zero high-level fluff.
          </p>
        </div>

        {/* Right Grid Matrix Column */}
        <div className="md:col-span-2 flex flex-col justify-start">
          {MODULES.map((mod) => (
            <div 
              key={mod.num} 
              className="border-b border-[#222222] py-6 first:pt-0 last:border-b-0 flex gap-6 items-start"
            >
              <span className="font-mono text-xs text-[#8e8e93] pt-0.5">{mod.num} //</span>
              <div className="w-full">
                <h3 className="text-lg font-bold text-white mb-2 tracking-tighter leading-[1.05]">
                  {mod.title}
                </h3>
                <p className="text-xs font-mono text-[#8e8e93] mb-3 uppercase tracking-wider">
                  <span className="text-white">Frameworks: </span>{mod.frameworks}
                </p>
                <div className="text-xs font-mono text-[#00bf63] uppercase tracking-wider">
                  <span className="text-[#8e8e93]">Deliverable: </span>{mod.output}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
