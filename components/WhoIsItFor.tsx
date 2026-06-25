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
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Stark & Elegant Intro Header without repetitive green tags */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white leading-[1.05] uppercase">
            Designed for those who lead growth.
          </h2>
          <p className="text-[#8e8e93] text-sm md:text-base leading-relaxed mt-4">
            If you see your daily friction points outlined below, this system was custom-engineered to solve your structural growth bottlenecks.
          </p>
        </div>

        {/* Staggered Asymmetric Rows (Breaking layout repetition) */}
        <div className="space-y-16">
          {personas.map((persona, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-5 gap-8 items-start pt-12 border-t border-[#1b1b1b] first:pt-0 first:border-t-0`}
              >
                {/* Asymmetric Label column (2/5) */}
                <div className={`md:col-span-2 ${isEven ? "md:order-1" : "md:order-2"}`}>
                  <span className="font-mono text-xs text-[#00bf63] tracking-widest uppercase block mb-2">
                    {persona.label} // 0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tighter leading-[1.1]">
                    {persona.title}
                  </h3>
                </div>

                {/* Asymmetric Detail column (3/5) */}
                <div className={`md:col-span-3 ${isEven ? "md:order-2" : "md:order-1"} space-y-4`}>
                  <div className="border-l border-[#1526b4] pl-4 py-1">
                    <p className="italic text-white/45 text-sm leading-relaxed">
                      "{persona.empathy}"
                    </p>
                  </div>
                  <p className="text-[#8e8e93] text-sm md:text-base leading-relaxed">
                    {persona.pivot}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
