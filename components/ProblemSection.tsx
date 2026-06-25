"use client";

import { useReveal } from "@/lib/useReveal";

const DILEMMAS = [
  {
    id: "01",
    label: "THE TACTICAL DILEMMA",
    desc: "You know how to run a Meta ad, set up a HubSpot workflow, or prompt an AI engine. But you don't know how they mathematically impact your balance sheet."
  },
  {
    id: "02",
    label: "THE ATTRIBUTION ILLUSION",
    desc: "Looking at isolated dashboard metrics is lying to yourself. If your blended CAC isn't dropping while your scale increases, your marketing isn't working."
  },
  {
    id: "03",
    label: "THE PLAYBOOK OBSOLESCENCE",
    desc: "Copying yesterday's growth hacks from LinkedIn creators ensures you stay one step behind. Frameworks endure; tactics expire in 6 months."
  }
];

export default function ProblemSection() {
  const [ref, isVisible] = useReveal();

  return (
    <section 
      ref={ref} 
      className={`py-24 px-6 max-w-6xl mx-auto border-b border-[#222222] reveal ${isVisible ? 'show' : ''}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Sticky Section Layout */}
        <div className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
          <span className="font-mono text-xs text-[#00bf63] tracking-[0.1em] uppercase mb-3 block">
            THE PROBLEM
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-white mb-4">
            The Fragment Trap
          </h2>
          <p className="text-[#8e8e93] text-sm md:text-base leading-relaxed">
            Why 90% of digital marketing spend generates noise, not compounding growth.
          </p>
        </div>
        
        {/* Right Column: Vertical Sequence with dividers */}
        <div className="lg:col-span-2 divide-y divide-[#222222]">
          {DILEMMAS.map((item) => (
            <div key={item.id} className="py-8 first:pt-0 last:pb-0 flex gap-6 items-start">
              <span className="font-mono text-xs text-[#00bf63] pt-1">{item.id} //</span>
              <div>
                <h4 className="font-bold tracking-wide text-sm uppercase text-white mb-2">
                  {item.label}
                </h4>
                <p className="text-[#8e8e93] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
