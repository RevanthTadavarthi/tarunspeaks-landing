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
      className={`w-full border-b border-[#1b1b1b] py-24 md:py-32 bg-black reveal ${isVisible ? 'show' : ''}`}
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        {/* Left Column: Pinned Sticky Container */}
        <div className="md:col-span-1 self-stretch">
          <div className="md:sticky md:top-24 self-start space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-[-0.04em] leading-[1.0] uppercase text-[#1526b4]">
              Designed for those who lead growth
            </h2>
            <p className="text-[#8e8e93] text-base leading-[1.65] max-w-[280px]">
              If you see your daily friction points outlined below, this system was custom-engineered to solve your structural growth bottlenecks.
            </p>
          </div>
        </div>

        {/* Right Column: Clean alternating widescreen text rows */}
        <div className="md:col-span-2 flex flex-col divide-y divide-[#1b1b1b]">
          {personas.map((persona, index) => (
            <div 
              key={index} 
              className={`p-8 flex flex-col space-y-4 rounded-none transition-colors duration-300 ${
                index % 2 === 0 ? "bg-[#0d0d0d]" : "bg-black"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-[#8e8e93] font-mono text-xs uppercase tracking-wider">
                  [{String(index + 1).padStart(2, "0")}] {persona.label}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-[-0.04em] leading-[1.0] uppercase">
                {persona.title}
              </h3>
              <p className="text-[#8e8e93] text-base leading-[1.65] italic">
                "{persona.empathy}"
              </p>
              <p className="text-white text-base leading-[1.65]">
                {persona.pivot}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
