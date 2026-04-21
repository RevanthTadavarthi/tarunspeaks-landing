"use client";

import { useReveal } from "@/lib/useReveal";

export default function WhatYoullGetCards() {
  const [ref, isVisible] = useReveal();

  const items = [
    {
      number: "01",
      title: "Portfolio-Ready Projects",
      desc: "Content strategies, content calendars, and full campaigns you built yourself. Things you can show in an interview or to a client.",
      icon: "🎯",
    },
    {
      number: "02",
      title: "1:1 Mentorship & Feedback",
      desc: "Direct access to Tarun and the team. Real feedback on your actual work — not generic advice. Direction when you are stuck.",
      icon: "🎓",
    },
    {
      number: "03",
      title: "Job Access + Community",
      desc: "100% job and internship support. Access to the TarunSpeaks Jobs Community — real verified opportunities from top brands and agencies.",
      icon: "💼",
    },
  ];

  return (
    <section ref={ref} className={`py-16 md:pt-12 md:pb-24 px-5 md:px-10 reveal ${isVisible ? 'show' : ''}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] mb-4 font-semibold">
            WHAT YOU'LL GET
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.10] text-[#FFFFFF]">
            Walk away with three things.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="card flex flex-col text-left !bg-white/[0.03] !border-white/[0.08] !rounded-[20px] p-[32px] min-h-[260px] !transition-none hover:translate-y-0"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="text-[28px] leading-none">{item.icon}</div>
              <div className="text-[11px] uppercase text-white/20 font-semibold mt-[16px] tracking-widest">
                {item.number}
              </div>
              <h3 className="text-white font-bold text-[20px] mt-[8px] leading-tight">
                {item.title}
              </h3>
              <p className="text-white/60 text-[16px] leading-[1.65] mt-[12px] flex-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
