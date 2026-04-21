/**
 * LearningJourney Component
 * 
 * This component visualizes the 5-stage learning journey that students will go through.
 * Each stage represents a phase of the course, from foundation to mastery.
 * The stages are displayed in a horizontal timeline format.
 */
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
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white">
          Your Complete Learning Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col"
            >
              {/* Desktop horizontal dashed connector line */}
              {index < stages.length - 1 && (
                <div className="hidden md:block absolute top-[46px] left-[46px] w-[calc(100%+24px)] border-t border-dashed border-white/15 -z-10" />
              )}
              
              <div className="card h-full p-6 transition-transform hover:-translate-y-1 flex flex-col items-start text-left min-h-[220px]">
                {/* Circular Number Indicator */}
                <div 
                  className="flex items-center justify-center w-[44px] h-[44px] shrink-0 rounded-full bg-[#1526b4] text-white text-[16px] font-bold mb-4"
                >
                  {stage.number}
                </div>
                
                {/* Stage Title */}
                <h3 className="text-white font-bold text-[16px] leading-tight mb-2">
                  {stage.title}
                </h3>
                
                {/* Outcome Tagline */}
                <p className="text-[#00bf63] text-[14px] font-medium leading-[1.5]">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

