import Image from "next/image";

interface InstructorCardProps {
  id?: string;
}

export default function InstructorCard({ id }: InstructorCardProps) {
  return (
    <section id={id || "instructor"} className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] mb-3 font-mono font-semibold">
            INSTRUCTOR //
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tighter leading-none text-white text-center">
            Tarun is not just a trainer — he's a marketing practitioner.
          </h2>
        </div>
        <div className="border-t border-[#1b1b1b] pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Instructor Image */}
            <div className="relative aspect-square rounded-none overflow-hidden border border-[#1b1b1b]">
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
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-4 uppercase">Tarun Makhija</h3>
                <p className="text-[#8e8e93] text-base leading-[1.65] mb-6">
                  10+ years of hands-on experience building brands, designing campaigns, and leading strategy across sectors. Chief Educator & CEO of TarunSpeaks. Co-founded Big Mouth Digital & Media. Every session in RMDM is built from real campaign work — not textbooks.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-transparent border border-[#1b1b1b] rounded-none px-3 py-1 text-xs text-[#8e8e93] font-mono">
                    BW Marketing 30 Under 30, 2023
                  </span>
                  <span className="bg-transparent border border-[#1b1b1b] rounded-none px-3 py-1 text-xs text-[#8e8e93] font-mono">
                    Graphy by Unacademy — Top 50, October 2021
                  </span>
                  <span className="bg-transparent border border-[#1b1b1b] rounded-none px-3 py-1 text-xs text-[#8e8e93] font-mono">
                    Spotify / Anchor — Voice of Anchor
                  </span>
                  <span className="bg-transparent border border-[#1b1b1b] rounded-none px-3 py-1 text-xs text-[#8e8e93] font-mono">
                    Pepper Content — The Next Big Creator, 2021
                  </span>
                </div>
              </div>

              {/* Stats Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-transparent border border-[#1b1b1b] rounded-none px-4 py-2">
                  <div className="text-[#00bf63] font-mono font-bold">28,300+</div>
                  <div className="text-xs text-[#8e8e93] uppercase font-mono mt-0.5">Trained</div>
                </div>
                <div className="bg-transparent border border-[#1b1b1b] rounded-none px-4 py-2">
                  <div className="text-[#00bf63] font-mono font-bold">300+</div>
                  <div className="text-xs text-[#8e8e93] uppercase font-mono mt-0.5">Brands</div>
                </div>
                <div className="bg-transparent border border-[#1b1b1b] rounded-none px-4 py-2">
                  <div className="text-[#00bf63] font-mono font-bold">BW 30</div>
                  <div className="text-xs text-[#8e8e93] uppercase font-mono mt-0.5">Under 30</div>
                </div>
                <div className="bg-transparent border border-[#1b1b1b] rounded-none px-4 py-2">
                  <div className="text-[#00bf63] font-mono font-bold">10+</div>
                  <div className="text-xs text-[#8e8e93] uppercase font-mono mt-0.5">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
