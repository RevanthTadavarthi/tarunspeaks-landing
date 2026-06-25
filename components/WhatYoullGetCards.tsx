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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00bf63]">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "1:1 Mentorship & Feedback",
      desc: "Direct access to Tarun and the team. Real feedback on your actual work — not generic advice. Direction when you are stuck.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00bf63]">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2.5 3.5 6 3.5s6-1.5 6-3.5v-5" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Job Access + Community",
      desc: "100% job and internship support. Access to the TarunSpeaks Jobs Community — real verified opportunities from top brands and agencies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00bf63]">
          <rect x="2" y="7" width="20" height="14" rx="0" ry="0" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`w-full border-b border-[#1b1b1b] py-24 md:py-32 bg-black reveal ${isVisible ? 'show' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        {/* Left Grid Matrix Column */}
        <div className="md:col-span-1">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#00bf63] mb-4 uppercase block">
            WHAT YOU GET //
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-[#ffffff] leading-[1.05] uppercase">
            Deliverables
          </h2>
          <p className="text-[#8e8e93] text-sm leading-relaxed mt-4">
            Walk away with three concrete outcomes designed to accelerate your operating power.
          </p>
        </div>

        {/* Right Grid Matrix Column */}
        <div className="md:col-span-2 flex flex-col justify-start">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-[#222222] py-6 first:pt-0 last:border-b-0 flex gap-6 items-start"
            >
              <div className="pt-1.5 shrink-0">
                {item.icon}
              </div>
              <div>
                <span className="font-mono text-xs text-[#8e8e93] block mb-1">{item.number} //</span>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tighter leading-[1.05]">
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
