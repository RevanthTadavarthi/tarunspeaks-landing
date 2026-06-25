"use client";

import { useReveal } from "@/lib/useReveal";

interface WhoIsItForProps {
  id?: string;
}

export default function WhoIsItFor({ id }: WhoIsItForProps) {
  const [ref, isVisible] = useReveal();

  const personas = [
    {
      label: "Students & freshers",
      title: "You're about to enter the industry.",
      empathy: "Every job posting asks for 2 years of experience. You have zero. You're applying anyway and getting ignored.",
      pivot: "RMDM gives you the portfolio and campaign experience to skip that wall entirely.",
    },
    {
      label: "Working professionals",
      title: "You're doing marketing but not leading it.",
      empathy: "You execute tasks. But when someone asks you to build a strategy from scratch, you freeze. You've never been taught the system.",
      pivot: "RMDM gives you the strategic framework to go from executor to the person who owns the room.",
    },
    {
      label: "Freelancers",
      title: "You win clients on instinct.",
      empathy: "You deliver good work but you can't explain why it works. Clients sense it and push back on your rates.",
      pivot: "RMDM gives you the language and system to charge what your work is actually worth.",
    },
    {
      label: "Entrepreneurs",
      title: "You're doing your own marketing.",
      empathy: "You post. You boost. You try things. Nothing compounds. You can't afford to hire a CMO but you need one.",
      pivot: "RMDM teaches you to think like a CMO — not just a person who makes content.",
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
            WHO IT IS FOR //
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-[#ffffff] leading-[1.05] uppercase">
            Audience Cohort
          </h2>
          <p className="text-[#8e8e93] text-sm leading-relaxed mt-4">
            If you see yourself here, you are exactly who we designed this system for.
          </p>
        </div>

        {/* Right Grid Matrix Column */}
        <div className="md:col-span-2 flex flex-col justify-start">
          {personas.map((persona, index) => (
            <div 
              key={index} 
              className="border-b border-[#222222] py-6 first:pt-0 last:border-b-0 flex gap-6 items-start"
            >
              <span className="font-mono text-xs text-[#00bf63] pt-0.5">0{index + 1} //</span>
              <div className="w-full">
                <div className="text-[#1526b4] text-[11px] font-mono uppercase font-semibold tracking-widest mb-1">
                  {persona.label}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tighter leading-[1.05]">
                  {persona.title}
                </h3>
                <p className="italic text-white/45 text-sm mb-3">
                  "{persona.empathy}"
                </p>
                <p className="text-[#8e8e93] text-sm md:text-base leading-relaxed tracking-normal max-w-xl">
                  {persona.pivot}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
