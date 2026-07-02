"use client";

import React from "react";
import { useReveal } from "@/lib/useReveal";

const journeyPhases = [
  {
    phase: "PHASE I",
    timeframe: "Weeks 01 — 04",
    milestone: "Framework Reconstruction",
    description: "Stripping back fragmented platform views. Forcing core structural competence in unit economics, first-party data plumbing, and programmatic attribution tracking maps.",
    metric: "Output: A production-ready strategic tracking architecture."
  },
  {
    phase: "PHASE II",
    timeframe: "Weeks 05 — 08",
    milestone: "The Acquisition Machinery",
    description: "Orchestrating interconnected paid acquisition systems. Engineering loops where content supply channels feed high-intent performance vectors seamlessly without layout friction.",
    metric: "Output: Live distribution stress-tests on real channels."
  },
  {
    phase: "PHASE III",
    timeframe: "Weeks 09 — 12",
    milestone: "System Scale & Optimization",
    description: "Deploying lifecycle retention models and product-led loops. Transitioning into cross-functional management models required to direct professional multi-tier execution terms.",
    metric: "Output: A custom 90-day execution manual tailored to your venture."
  }
];

interface LearningJourneyProps {
  id?: string;
}

export default function LearningJourney({ id }: LearningJourneyProps) {
  const [ref, isVisible] = useReveal();

  return (
    <section 
      ref={ref}
      id={id || "journey"} 
      className={`w-full border-b border-[#1b1b1b] py-24 md:py-32 bg-black reveal ${isVisible ? 'show' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-6 w-full block md:grid md:grid-cols-4 gap-8 md:gap-12 items-start">
        
        {/* Left Informational Block Anchor */}
        <div className="md:col-span-1 md:sticky md:top-24 space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tighter leading-none text-[#1526b4]">
            The Execution Trajectory
          </h2>
          <p className="text-xs font-mono text-[#8e8e93] uppercase tracking-wider">A Linear Roadmap. No Fallbacks.</p>
        </div>

        {/* Right Map Stream Axis */}
        <div className="md:col-span-3 relative pl-6 border-l border-[#1b1b1b] space-y-24">
          
          {journeyPhases.map((item, index) => (
            <div key={index} className="relative group space-y-4">
              
              {/* Geometric Directional Node Element */}
              <div className="absolute -left-[31px] top-1 bg-black border border-[#1b1b1b] w-[11px] h-[11px] group-hover:border-[#1526b4] transition-colors duration-200" />

              {/* Stark Minimal Textual Headers */}
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4 leading-none">
                <span className="text-xs font-mono font-bold tracking-widest text-[#ffffff] uppercase">
                  {item.phase}
                </span>
                <span className="text-xs font-mono text-[#444444] tracking-tight">
                  {item.timeframe}
                </span>
              </div>

              {/* Dynamic Milestone Stack */}
              <div className="max-w-xl space-y-2">
                <h3 className="text-xl md:text-2xl font-extrabold tracking-[-0.04em] leading-[1.0] text-white uppercase">
                  {item.milestone}
                </h3>
                <p className="text-[#8e8e93] text-base leading-[1.65]">
                  {item.description}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase text-[#00bf63] tracking-tight">
                    {item.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Explicit Minimal Arrow Baseline Terminal Indicator */}
          <div className="absolute -left-[10px] bottom-0 transform translate-y-full flex flex-col items-center">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1b1b1b]">
              <path d="M9.5 19L0.406734 3.25L18.5933 3.25L9.5 19Z" fill="currentColor"/>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
