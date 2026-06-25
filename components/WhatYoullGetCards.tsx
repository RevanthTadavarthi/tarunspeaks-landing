"use client";

import { useReveal } from "@/lib/useReveal";

interface WhatYoullGetCardsProps {
  id?: string;
}

export default function WhatYoullGetCards({ id }: WhatYoullGetCardsProps) {
  const [ref, isVisible] = useReveal();

  const items = [
    {
      number: "01",
      title: "Portfolio-Ready Projects",
      desc: "Content strategies, content calendars, and full campaigns you built yourself. Things you can show in an interview or to a client.",
    },
    {
      number: "02",
      title: "1:1 Mentorship & Feedback",
      desc: "Direct access to Tarun and the team. Real feedback on your actual work — not generic advice. Direction when you are stuck.",
    },
    {
      number: "03",
      title: "Job Access + Community",
      desc: "100% job and internship support. Access to the TarunSpeaks Jobs Community — real verified opportunities from top brands and agencies.",
    },
  ];

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`w-full border-b border-[#1b1b1b] py-24 md:py-32 bg-black reveal ${isVisible ? 'show' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        {/* Left Column: Stark & Elegant */}
        <div className="md:col-span-1">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#00bf63] mb-4 block">
            // DELIVERABLES
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tighter text-[#ffffff] leading-[1.05] uppercase">
            Outcomes
          </h2>
          <div className="h-[1px] w-12 bg-[#1526b4] my-6"></div>
          <p className="text-[#8e8e93] text-sm leading-relaxed max-w-xs">
            Walk away with three concrete outcomes designed to accelerate your operating power.
          </p>
        </div>

        {/* Right Column: Clean wide stacked list to break the column rhythm */}
        <div className="md:col-span-2 space-y-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-[#1b1b1b] pb-8 last:pb-0 last:border-b-0 flex gap-6 items-start"
            >
              <span className="font-mono text-xs text-[#00bf63] pt-1">{item.number} //</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tighter leading-[1.05]">
                  {item.title}
                </h3>
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
