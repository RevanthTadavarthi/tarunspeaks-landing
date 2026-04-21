"use client";

import { useReveal } from "@/lib/useReveal";

interface AlumniLogosProps {
  id?: string;
}

export default function AlumniLogos({ id }: AlumniLogosProps) {
  const [sectionRef, isVisible] = useReveal();

  const companies = [
    "Nykaa",
    "ICICI Bank",
    "ITC",
    "Disney+ Hotstar",
    "White Rivers Media",
    "Pilgrim",
  ];

  const Tile = ({ company }: { company: string }) => (
    <div className="inline-flex items-center justify-center gap-[12px] h-[80px] min-w-[200px] py-[16px] px-[32px] mr-[24px] bg-transparent border border-[rgba(255,255,255,0.10)] rounded-[12px] transition-colors duration-200 hover:border-[rgba(255,255,255,0.25)] group/tile cursor-default">
      <span className="text-white/60 text-[16px] tracking-wide font-medium whitespace-nowrap transition-colors duration-200 group-hover/tile:text-white/90">
        {company}
      </span>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id={id || "alumni"}
      className={`py-16 overflow-hidden reveal ${isVisible ? 'show' : ''}`}
    >
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }
      `}</style>
      
      {/* Header section (max-width bounded) */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-[40px]">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] mb-3 font-semibold">
            ALUMNI
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary">
            Where our alumni work
          </h2>
        </div>
      </div>

      {/* Marquee bleeds full width */}
      <div 
        className="relative flex w-full"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)"
        }}
      >
        <div className="group w-full flex overflow-hidden">
          <div className="flex w-max animate-scroll-left group-hover:[animation-play-state:paused]">
            <div className="flex">
              {companies.map((company, index) => <Tile key={`a1-${index}`} company={company} />)}
            </div>
            {/* Array strictly duplicated to map precisely to the 50% transform infinite cycle layout */}
            <div className="flex">
              {companies.map((company, index) => <Tile key={`a2-${index}`} company={company} />)}
            </div>
            {/* Adding a 3rd and 4th duplicate ensures safety bounds on ultra-wides since -50% shifts 2 arrays off */}
            <div className="flex">
              {companies.map((company, index) => <Tile key={`a3-${index}`} company={company} />)}
            </div>
            <div className="flex">
              {companies.map((company, index) => <Tile key={`a4-${index}`} company={company} />)}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer section (max-width bounded) */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-[32px]">
        <p className="text-[13px] text-white/25 text-center max-w-[600px] mx-auto leading-relaxed">
          Previous achievements do not ensure future results. Securing employment or internships is contingent upon individual qualifications, experience, and personal effort.
        </p>
      </div>
    </section>
  );
}
