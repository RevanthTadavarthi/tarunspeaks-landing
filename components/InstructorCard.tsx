import Image from "next/image";

/**
 * InstructorCard Component
 * 
 * This component showcases the main instructor, Tarun.
 * It includes his photo, bio, and key achievements/statistics.
 * This helps build credibility and trust in the course instructor.
 */
interface InstructorCardProps {
  id?: string;
}

export default function InstructorCard({ id }: InstructorCardProps) {
  return (
    <section id={id || "instructor"} className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] mb-3 font-semibold">
            INSTRUCTOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary">
            Tarun is not just a trainer — he's a marketing practitioner.
          </h2>
        </div>
        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Instructor Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-accent/30">
              <Image
                src="/tarun-hero.png"
                alt="Tarun - Digital Marketing Expert and Instructor"
                fill
                className="object-cover"
              />
            </div>

            {/* Instructor Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4">Tarun</h3>
                <p className="text-primary/80 leading-relaxed mb-6">
                  10+ years of hands-on experience building brands, designing campaigns, and leading strategy across sectors. Chief Educator & CEO of TarunSpeaks. Co-founded Big Mouth Digital & Media. Every session in RMDM is built from real campaign work — not textbooks.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/60">
                    BW Marketing 30 Under 30, 2023
                  </span>
                  <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/60">
                    Graphy by Unacademy — Top 50, October 2021
                  </span>
                  <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/60">
                    Spotify / Anchor — Voice of Anchor
                  </span>
                  <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/60">
                    Pepper Content — The Next Big Creator, 2021
                  </span>
                </div>
              </div>

              {/* Stats Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-secondary/20 border border-secondary/30 rounded-lg px-4 py-2">
                  <div className="text-secondary font-bold">28,300+</div>
                  <div className="text-xs text-primary/70">Trained</div>
                </div>
                <div className="bg-secondary/20 border border-secondary/30 rounded-lg px-4 py-2">
                  <div className="text-secondary font-bold">300+</div>
                  <div className="text-xs text-primary/70">Brands</div>
                </div>
                <div className="bg-secondary/20 border border-secondary/30 rounded-lg px-4 py-2">
                  <div className="text-secondary font-bold">BW 30</div>
                  <div className="text-xs text-primary/70">Under 30</div>
                </div>
                <div className="bg-secondary/20 border border-secondary/30 rounded-lg px-4 py-2">
                  <div className="text-secondary font-bold">10+</div>
                  <div className="text-xs text-primary/70">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

