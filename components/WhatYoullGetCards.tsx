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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="0" ry="0" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
  ];

  return (
    <section id={id} ref={ref} className={`py-16 md:pt-12 md:pb-24 px-5 md:px-10 reveal ${isVisible ? 'show' : ''}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] mb-4 font-semibold">
            WHAT YOU'LL GET
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.10] text-white">
            Walk away with three things.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#222222]">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#141414] p-8 flex flex-col text-left min-h-[260px] border-b md:border-b-0 md:border-r border-[#222222] last:border-b-0 last:border-r-0 rounded-none"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="text-white shrink-0">
                {item.icon}
              </div>
              <div className="text-[11px] font-mono text-[#8e8e93] font-semibold mt-6 tracking-widest">
                {item.number} //
              </div>
              <h3 className="text-white font-bold text-[20px] mt-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-[#8e8e93] text-sm md:text-base leading-[1.65] mt-4 flex-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
