"use client";

import { useReveal } from "@/lib/useReveal";

const DILEMMAS = [
  {
    label: "THE TACTICAL DILEMMA",
    desc: "You know how to run a Meta ad, set up a HubSpot workflow, or prompt an AI engine. But you don't know how they mathematically impact your balance sheet."
  },
  {
    label: "THE ATTRIBUTION ILLUSION",
    desc: "Looking at isolated dashboard metrics is lying to yourself. If your blended CAC isn't dropping while your scale increases, your marketing isn't working."
  },
  {
    label: "THE PLAYBOOK OBSOLESCENCE",
    desc: "Copying yesterday's growth hacks from LinkedIn creators ensures you stay one step behind. Frameworks endure; tactics expire in 6 months."
  }
];

export default function ProblemSection() {
  const [ref, isVisible] = useReveal();

  return (
    <section 
      ref={ref} 
      className={`w-full border-b border-[#141414] py-24 md:py-32 bg-black reveal ${isVisible ? 'show' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 w-full items-start">
        {/* Left Grid Matrix Column */}
        <div className="md:col-span-1">
          {/* The Pinned Sticky Container */}
          <div className="sticky top-24 self-start space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tighter uppercase text-[#1526b4] leading-[1.05]">
              The Fragment Trap
            </h2>
            <p className="text-base font-normal leading-relaxed text-[#8e8e93] max-w-[280px]">
              Why 90% of digital marketing spend generates noise, not compounding growth.
            </p>
          </div>
        </div>
        
        {/* Right Grid Matrix Column */}
        <div className="md:col-span-2 flex flex-col justify-start divide-y divide-[#141414]">
          {DILEMMAS.map((item, index) => (
            <div 
              key={index} 
              className={`py-8 first:pt-0 last:pb-0 transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div>
                <h4 className={`font-extrabold tracking-[-0.04em] text-lg mb-2 leading-[1.0] transition-colors duration-500 ${
                  isVisible ? "text-white" : "text-[#48484a]"
                }`}>
                  {item.label}
                </h4>
                <p className="text-[#8e8e93] text-base leading-relaxed max-w-xl">
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
