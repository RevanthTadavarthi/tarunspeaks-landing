"use client";

import { useState } from "react";
import Link from "next/link";
import EMIModal from "./EMIModal";
import { useReveal } from "@/lib/useReveal";

interface PricingProps {
  id?: string;
}

export default function Pricing({ id }: PricingProps) {
  const [showEMIModal, setShowEMIModal] = useState(false);
  const [sectionRef, isVisible] = useReveal();

  const inclusions = [
    "70+ hours of live weekend sessions",
    "30+ hours of AI-powered recorded content",
    "1:1 guidance from Tarun and the team",
    "Access to 12 industry mentor masterclasses",
    "Portfolio projects — content strategies, calendars, campaigns",
    "100% job and internship support",
    "TarunSpeaks Jobs Community — verified opportunities",
    "Lifetime access to all course materials",
  ];

  return (
    <>
      <section
        ref={sectionRef}
        id={id || "pricing"}
        className={`pt-12 lg:pt-16 pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 reveal ${isVisible ? 'show' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          {/* Section Header */}
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] font-semibold mb-4">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-white">
            The investment.
          </h2>
          <div className="text-white/45 text-center mb-16">
            One-time payment · Lifetime access to all materials
          </div>

          {/* Pricing Display */}
          <div className="flex flex-col items-center mb-12">
            <div className="text-[36px] text-white/30 line-through text-center leading-none mb-2">
              ₹1,50,000
            </div>
            <div className="text-[72px] text-white font-extrabold text-center leading-none mb-4 tracking-tight">
              ₹97,000
            </div>
            <div className="text-[13px] text-white/30 text-center">
              Inclusive of all taxes · Save ₹53,000
            </div>
          </div>

          {/* What's Included */}
          <div className="w-full max-w-4xl mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <svg className="w-5 h-5 text-[#00bf63] mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scholarship Tiers */}
          <div className="w-full max-w-4xl mb-12">
            <div className="text-white/45 text-center mb-8">
              Merit-based scholarships available
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center p-8">
                <div className="text-[#1526b4] uppercase text-[11px] font-semibold tracking-wider mb-2">
                  Tier 1
                </div>
                <div className="text-white/70 mb-4 text-sm">
                  85%+ on eligibility test
                </div>
                <div className="text-[#00bf63] font-bold text-2xl">
                  ₹7,000 off
                </div>
              </div>
              <div className="card text-center p-8">
                <div className="text-[#1526b4] uppercase text-[11px] font-semibold tracking-wider mb-2">
                  Tier 2
                </div>
                <div className="text-white/70 mb-4 text-sm">
                  95%+ on eligibility test
                </div>
                <div className="text-[#00bf63] font-bold text-2xl">
                  ₹12,000 off
                </div>
              </div>
              <div className="card text-center p-8">
                <div className="text-[#1526b4] uppercase text-[11px] font-semibold tracking-wider mb-2">
                  Tier 3
                </div>
                <div className="text-white/70 mb-4 text-sm">
                  100% on eligibility test
                </div>
                <div className="text-[#00bf63] font-bold text-2xl">
                  ₹17,000 off
                </div>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="text-white/40 text-[14px] text-center mb-12">
            Applications close once 30 candidates are accepted. Batch 14 — April 2026.
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 w-full max-w-[280px]">
            <Link
              href="#apply"
              className="bg-[#1526b4] text-white rounded-full px-8 py-3.5 font-bold text-center transition-transform duration-200 hover:scale-[1.04] flex items-center justify-center whitespace-nowrap"
              style={{ boxShadow: "0 8px 30px rgba(21,38,180,0.40)" }}
            >
              Apply for Batch 14 →
            </Link>
            <button
              onClick={() => setShowEMIModal(true)}
              className="border border-white/20 text-white rounded-full px-7 py-3.5 font-bold text-center transition-colors duration-200 hover:bg-white/8 flex items-center justify-center whitespace-nowrap"
            >
              View EMI Plans
            </button>
          </div>
        </div>
      </section>

      {/* EMI Modal */}
      {showEMIModal && <EMIModal onClose={() => setShowEMIModal(false)} />}
    </>
  );
}

