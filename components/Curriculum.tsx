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
    <section ref={ref} id={id || "curriculum"} className={`py-24 px-6 max-w-6xl mx-auto border-b border-[#222222] reveal ${isVisible ? 'show' : ''}`}>
      <div className="mb-16">
        <span className="font-mono text-xs text-[#1526b4] tracking-[0.1em] uppercase mb-3 block">
          CURRICULUM
        </span>
        <h2 className="text-3xl font-bold uppercase tracking-tight text-white">The System Archetype</h2>
        <p className="text-[#8e8e93] mt-2">4 Modules. Deep execution. Zero high-level fluff.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#222222]">
        {MODULES.map((mod) => (
          <div key={mod.num} className="bg-[#141414] p-8 border border-[#222222] flex flex-col justify-between rounded-none">
            <div>
              <span className="font-mono text-xs text-[#8e8e93] block mb-4">{mod.num} //</span>
              <h3 className="text-xl font-bold mb-4 text-white">{mod.title}</h3>
              <p className="text-xs font-mono text-[#8e8e93] mb-6">
                <span className="text-white block uppercase tracking-wider mb-1">Frameworks:</span>
                {mod.frameworks}
              </p>
            </div>
            <div className="border-t border-[#222222] pt-4 mt-auto">
              <span className="text-[#00bf63] text-xs font-mono block uppercase tracking-wider mb-1">Core Deliverable:</span>
              <p className="text-sm text-white font-medium">{mod.output}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
