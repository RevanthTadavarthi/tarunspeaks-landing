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
      pivot: "RMDM gives you the language and system to charge what your work is worth.",
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
      className={`w-full border-b border-[#141414] py-24 md:py-32 bg-black reveal ${isVisible ? 'show' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        {/* Left Column: Pinned Sticky Container */}
        <div className="md:col-span-1 self-stretch">
          <div className="sticky top-24 self-start space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tighter uppercase text-[#1526b4] leading-[1.05]">
              Designed for those who lead growth
            </h2>
            <p className="text-base font-normal leading-relaxed text-[#8e8e93] max-w-[280px]">
              If you see your daily friction points outlined below, this system was custom-engineered to solve your structural growth bottlenecks.
            </p>
          </div>
        </div>

        {/* Right Column: 2x2 Grid of Persona Cards (Restored layout) */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {personas.map((persona, index) => (
            <div 
              key={index} 
              className="bg-[#141414] border border-[#222222] border-l-2 border-l-[#1526b4] p-6 rounded-none transition-colors duration-300 hover:border-l-[#00bf63] flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <div className="text-[#1526b4] text-[11px] font-mono uppercase font-bold tracking-widest mb-2">
                  {persona.label}
                </div>
                <h3 className="text-lg font-bold text-white mb-4 tracking-tighter leading-[1.1] uppercase">
                  {persona.title}
                </h3>
                <div className="border-l border-white/10 pl-3 mb-4">
                  <p className="italic text-white/45 text-xs leading-relaxed">
                    "{persona.empathy}"
                  </p>
                </div>
              </div>
              <p className="text-[#8e8e93] text-sm leading-relaxed mt-auto pt-4 border-t border-[#141414]">
                {persona.pivot}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
