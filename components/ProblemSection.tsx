"use client";

import { useEffect, useRef, useState } from "react";
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
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = container.querySelectorAll(".dilemma-item");
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIdx(index);
          }
        });
      },
      {
        rootMargin: "-30% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    items.forEach((item) => observer.observe(item));
    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [isVisible]);

  return (
    <section 
      ref={ref} 
      className={`w-full border-b border-[#1b1b1b] py-24 md:py-32 bg-black reveal ${isVisible ? 'show' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-6 w-full block md:grid md:grid-cols-3 gap-8 md:gap-12 items-start">
        {/* Mobile Sticky Banner (only visible on mobile) */}
        <div className="block md:hidden sticky top-16 bg-[#0d0d0d]/90 backdrop-blur-md z-40 py-4 border-b border-[#141414] w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tighter leading-none text-[#1526b4]">
            The Fragment Trap
          </h2>
        </div>

        {/* Desktop Left Column (only visible on desktop) */}
        <div className="md:col-span-1 md:sticky md:top-24 self-start hidden md:block">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tighter leading-none text-[#1526b4]">
              The Fragment Trap
            </h2>
            <p className="text-[#8e8e93] text-base leading-[1.65] max-w-[280px]">
              Why 90% of digital marketing spend generates noise, not compounding growth.
            </p>
          </div>
        </div>
        
        {/* Right Grid Matrix Column */}
        <div ref={containerRef} className="md:col-span-2 flex flex-col justify-start space-y-24 md:space-y-40">
          {DILEMMAS.map((item, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`dilemma-item transition-all duration-500 ease-out ${
                activeIdx === index ? "opacity-100 scale-100" : "opacity-20"
              }`}
            >
              <div>
                <h4 className="font-extrabold tracking-[-0.04em] text-lg mb-2 leading-[1.0] text-white">
                  {item.label}
                </h4>
                <p className="text-[#8e8e93] text-base leading-[1.65] max-w-xl">
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
