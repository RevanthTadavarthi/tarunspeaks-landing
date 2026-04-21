"use client";

import { useReveal } from "@/lib/useReveal";

export default function WhoIsItFor() {
  const [ref, isVisible] = useReveal();

  const personas = [
    {
      label: "Students & freshers",
      title: "You're about to enter the industry.",
      empathy: "Every job posting asks for 2 years of experience. You have zero. You're applying anyway and getting ignored.",
      pivotStart: "RMDM gives you the ",
      pivotHighlight: "portfolio and campaign experience",
      pivotEnd: " to skip that wall entirely.",
    },
    {
      label: "Working professionals",
      title: "You're doing marketing but not leading it.",
      empathy: "You execute tasks. But when someone asks you to build a strategy from scratch, you freeze. You've never been taught the system.",
      pivotStart: "RMDM gives you the ",
      pivotHighlight: "strategic framework",
      pivotEnd: " to go from executor to the person who owns the room.",
    },
    {
      label: "Freelancers",
      title: "You win clients on instinct.",
      empathy: "You deliver good work but you can't explain why it works. Clients sense it and push back on your rates.",
      pivotStart: "RMDM gives you the ",
      pivotHighlight: "language and system",
      pivotEnd: " to charge what your work is actually worth.",
    },
    {
      label: "Entrepreneurs",
      title: "You're doing your own marketing.",
      empathy: "You post. You boost. You try things. Nothing compounds. You can't afford to hire a CMO but you need one.",
      pivotStart: "RMDM teaches you to ",
      pivotHighlight: "think like a CMO",
      pivotEnd: " — not just a person who makes content.",
    },
  ];

  return (
    <section ref={ref} className={`pt-12 pb-24 px-5 md:px-10 reveal ${isVisible ? 'show' : ''}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <div className="text-[11px] uppercase tracking-widest text-[#1526b4] mb-4 font-semibold">
            Who this is for
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.10] text-[#FFFFFF] mb-6">
            This cohort is built for four kinds of people.
          </h2>
          <p className="text-[17px] md:text-[19px] leading-[1.65] text-white/45 max-w-[800px] mx-auto">
            If you see yourself below — you're exactly who we designed this for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {personas.map((persona, index) => (
            <div 
              key={index} 
              className="card group !rounded-l-none !rounded-r-[20px] transition-all duration-200"
              style={{ 
                animationDelay: `${index * 100}ms`,
                borderLeft: '3px solid #1526b4'
              }}
            >
              {/* Internal hover style injected for the border transition */}
              <style jsx>{`
                .card:hover {
                  border-left-color: #00bf63 !important;
                }
              `}</style>

              <div className="text-[#1526b4] text-[11px] uppercase font-semibold tracking-widest mb-3">
                {persona.label}
              </div>
              
              <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-6">
                {persona.title}
              </h3>
              
              <div className="h-[1px] w-full bg-white/5 mb-6"></div>
              
              <p className="italic text-white/45 text-[17px] leading-[1.65] mb-6">
                "{persona.empathy}"
              </p>
              
              <div className="h-[1px] w-full bg-white/5 mb-6"></div>
              
              <p className="text-white/70 text-[17px] leading-[1.65]">
                {persona.pivotStart}
                <strong className="text-[#00bf63] font-semibold">{persona.pivotHighlight}</strong>
                {persona.pivotEnd}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
