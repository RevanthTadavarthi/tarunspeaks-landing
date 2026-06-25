"use client";

interface LearningJourneyProps {
  id?: string;
}

export default function LearningJourney({ id }: LearningJourneyProps) {
  const stages = [
    {
      number: "01",
      title: "Build Your Marketing Foundation",
      description: "Stop thinking like a content executor. Start thinking like a strategist.",
    },
    {
      number: "02",
      title: "Master Organic Growth",
      description: "You understand how to build attention intentionally.",
    },
    {
      number: "03",
      title: "Run Performance-Driven Campaigns",
      description: "You connect content to conversions.",
    },
    {
      number: "04",
      title: "Control the Conversation",
      description: "You manage not just growth, but trust.",
    },
    {
      number: "05",
      title: "Go AI-First",
      description: "You operate like a 2026 marketer — faster, sharper, system-driven.",
    },
  ];

  return (
    <section id={id} className="py-24 px-6 bg-black border-b border-[#1b1b1b]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#00bf63] mb-4 uppercase block">
            THE ACCELERATOR //
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-white uppercase leading-[1.05]">
            Learning Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-[#222222]">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-[#141414] p-6 border-b md:border-b-0 md:border-r border-[#222222] last:border-b-0 last:border-r-0 rounded-none flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <div className="font-mono text-xs text-[#00bf63] mb-4">
                  {stage.number} //
                </div>
                <h3 className="text-white font-bold text-[15px] leading-tight mb-2 uppercase tracking-tight">
                  {stage.title}
                </h3>
              </div>
              <p className="text-[#8e8e93] text-xs leading-relaxed font-mono mt-auto">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
