import React from "react";

/**
 * Premium Hero component
 * - Uses Tailwind utility classes only
 * - Glass frame for image, gradient spotlight, large typography
 * - Safe and resilient: no external libs, simple JSX
 */

export default function Hero() {
  return (
    <section aria-label="Hero" className="min-h-[90vh] w-full flex items-center justify-center bg-black relative overflow-hidden">
      {/* Left gradient spotlight */}
      <div className="absolute left-0 top-0 h-full w-1/2 pointer-events-none">
        <div
          aria-hidden
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(21,38,180,0.12) 0%, rgba(21,38,180,0.06) 25%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* TEXT AREA - 55% */}
        <div className="w-full lg:w-[55%] text-left">
          {/* Headline */}
          <h1 className="text-white font-extrabold leading-[1.05] tracking-tight text-5xl md:text-6xl xl:text-7xl">
            Get Job-Ready in 100 Hours — Live, Mentor-Led Digital Marketing
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-lg md:text-xl max-w-[550px]">
            Practical, AI-integrated training by Tarun. 70h live + 30h recorded.
            Next cohort starts <span className="text-[#00bf63] font-semibold">10 Jan 2026</span>.
          </p>

          {/* CTA block */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#pricing"
              className="inline-block bg-[#1526b4] text-white rounded-full px-8 py-3 shadow-[0_8px_30px_rgba(21,38,180,0.35)] transform transition duration-200 hover:scale-[1.04] focus:outline-none focus:ring-4 focus:ring-[#1526b4]/20"
            >
              Apply Now
            </a>

            <a
              href="/syllabus.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-white/20 text-white/90 rounded-full px-7 py-3 backdrop-blur-sm hover:bg-white/10 transition"
            >
              Download Syllabus
            </a>
          </div>

          {/* Microtext */}
          <p className="mt-4 text-sm text-white/60">
            Next cohort starts <span className="text-[#00bf63] font-medium">10 Jan 2026</span> — Limited seats
            available.
          </p>
        </div>

        {/* IMAGE AREA - 45% */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
          <div
            className="relative rounded-3xl overflow-hidden border border-white/5 shadow-xl ring-[0.4px] ring-[#1526b4]/30 transform transition-all duration-300 hover:-translate-y-1"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))" }}
          >
            <div className="p-4 bg-gradient-to-br from-black/60 to-transparent">
              <img
                src="/tarun-hero.png"
                alt="Tarun - Instructor"
                className="w-[360px] h-[360px] object-cover rounded-2xl block"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
