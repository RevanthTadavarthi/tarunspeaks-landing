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
      className={`w-full border-b border-[#1b1b1b] py-24 md:py-32 bg-black reveal ${isVisible ? 'show' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        {/* Left Grid Matrix Column */}
        <div className="md:col-span-1">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#00bf63] mb-4 uppercase block">
            THE PROBLEM //
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-[#ffffff] leading-[1.05] uppercase">
            The Fragment Trap
          </h2>
          <p className="text-[#8e8e93] text-sm leading-relaxed mt-4">
            Why 90% of digital marketing spend generates noise, not compounding growth.
          </p>
        </div>
        
        {/* Right Grid Matrix Column */}
        <div className="md:col-span-2 flex flex-col justify-start">
          {DILEMMAS.map((item) => (
            <div key={item.id} className="border-b border-[#222222] py-6 first:pt-0 last:border-b-0 flex gap-6 items-start">
              <span className="font-mono text-xs text-[#00bf63] pt-0.5">{item.id} //</span>
              <div>
                <h4 className="font-bold tracking-tighter text-base text-white mb-2 leading-[1.05]">
                  {item.label}
                </h4>
                <p className="text-[#8e8e93] text-sm md:text-base leading-relaxed tracking-normal max-w-xl">
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
