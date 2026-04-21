export default function MentorsGrid({ id }: { id?: string }) {
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
    <section id={id} className="pt-8 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] mb-3 font-semibold">
            NETWORK
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white">
            Top 1% Mentors from Tarun's Network
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, index) => {
            const initial = mentor.name.charAt(0).toUpperCase();
            return (
              <div
                key={index}
                className="card flex items-center p-6 bg-white/[0.03] border border-white/[0.06] rounded-[20px] transition-transform hover:-translate-y-1 hover:border-[#1526b4]/50"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#1526b4] text-white font-bold text-lg mr-4">
                  {initial}
                </div>
                <div>
                  <h3 className="font-bold text-white text-[18px] leading-tight mb-1">{mentor.name}</h3>
                  <p className="text-[14px] text-white/60 leading-snug">{mentor.role}</p>
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

