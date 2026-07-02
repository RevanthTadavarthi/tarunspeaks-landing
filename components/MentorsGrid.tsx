"use client";

interface MentorsGridProps {
  id?: string;
}

export default function MentorsGrid({ id }: MentorsGridProps) {
  const mentors = [
    { name: "Akshay Gurnani", role: "Co-founder & Former CEO", company: "Schbang" },
    { name: "Vanshikaa Oberoi", role: "Founder & Chief Brand Strategist", company: "The Fingerprint Labs" },
    { name: "Bhawna Sethi", role: "Founder", company: "Letsinfluence.io" },
    { name: "Pranita Bajoria", role: "@Mad.AdWoman", company: "76K+ on Instagram" },
    { name: "Divyank Jain", role: "Co-founder", company: "The Wise Idiot" },
    { name: "Nandikaa Sachdev", role: "Brand Marketing", company: "Pilgrim · Ex-Nua, FCBKinnect" },
    { name: "Deep Mehta", role: "Co-founder", company: "Digichefs" },
    { name: "Apeksha Gupta", role: "Co-founder", company: "Foldr.studio" },
    { name: "Piyush Kukreja", role: "Podcast Host & CEO", company: "Piyush Kukreja Digital" },
    { name: "Neel Mehra", role: "Advisor-in-Chief", company: "Avinser Advisory" },
    { name: "Arpit Soni", role: "Creative Director", company: "Google, Disney+ Hotstar" },
    { name: "Rishi Nagar", role: "Founder & CEO", company: "SuperShyft" },
  ];

  return (
    <section id={id} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] mb-3 font-mono font-semibold">
            NETWORK //
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tighter leading-none text-white text-center">
            Top 1% Mentors from Tarun's Network
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => {
            const initial = mentor.name.charAt(0).toUpperCase();
            return (
              <div
                key={index}
                className="flex items-center p-6 bg-black border border-[#1b1b1b] rounded-none"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-none bg-[#1526b4] text-white font-mono font-bold text-lg mr-4">
                  {initial}
                </div>
                <div>
                  <h3 className="font-bold text-white text-[18px] leading-tight mb-1">{mentor.name}</h3>
                  <p className="text-[14px] text-[#8e8e93] leading-snug">{mentor.role}</p>
                  <p className="text-[13px] text-white/40 leading-snug mt-0.5">{mentor.company}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
