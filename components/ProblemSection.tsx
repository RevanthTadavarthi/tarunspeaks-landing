"use client";

import { useReveal } from "@/lib/useReveal";

export default function ProblemSection() {
  const [ref, isVisible] = useReveal();

  const cards = [
    {
      number: "01",
      title: "The fragment trap",
      quote: "You've consumed 100 pieces of content about marketing. You still can't build a campaign from scratch.",
    },
    {
      number: "02",
      title: "No system, no clarity",
      quote: "You know tools. You don't know how they connect. Strategy feels like guesswork and you can't explain your decisions.",
    },
    {
      number: "03",
      title: "Can't measure results",
      quote: "You post, you run ads, you try things. But you don't know what's working or why. Every month feels like starting over.",
    },
  ];

  return (
    <section ref={ref} className={`pt-6 pb-24 px-5 md:px-10 reveal ${isVisible ? 'show' : ''}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <div className="text-[11px] uppercase tracking-widest text-white/50 mb-4 font-semibold">
            The problem
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.10] text-[#FFFFFF] mb-6">
            Most people learn marketing in pieces.
          </h2>
          <p className="text-[17px] md:text-[19px] leading-[1.65] text-white/65 max-w-[800px] mx-auto">
            A little SEO. Some Reels. A Meta ads tutorial. Random AI tools. But real businesses don't grow in fragments — they grow through connected systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="card !transition-none hover:translate-y-0 hover:border-white/6 hover:!border-white/6"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="text-[11px] uppercase tracking-widest text-white/20 font-semibold mb-3">
                {card.number}
              </div>
              <h3 className="text-[22px] md:text-[26px] font-semibold text-white mb-6">
                {card.title}
              </h3>
              <div className="pl-[14px] border-l-[2px] border-[rgba(21,38,180,0.5)]">
                <p className="italic text-white/50 text-[17px] leading-[1.65]">
                  "{card.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[17px] md:text-[19px] text-white/70 max-w-[800px] mx-auto leading-[1.65]">
            That's the difference between a content executor and a strategic marketer. <span className="text-[#00bf63] font-medium">RMDM closes that gap — in 90 days.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
