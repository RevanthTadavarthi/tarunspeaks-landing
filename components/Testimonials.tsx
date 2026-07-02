"use client";

import { useReveal } from "@/lib/useReveal";

interface TestimonialsProps {
  id?: string;
}

export default function Testimonials({ id }: TestimonialsProps) {
  const [sectionRef, isSectionVisible] = useReveal();

  const testimonials = [
    {
      name: "Ravi",
      role: "Ad Factors PR",
      content: "All students, freshers, small and medium size business owners and anyone interested in entering the digital marketing field — go ahead and take this course. His sessions are not only informative but also very power-packed. You will not regret it at all.",
    },
    {
      name: "Ritika",
      role: "Roongta Capital",
      content: "It was all worth it. I would really recommend this course for all those who want to pursue or learn digital marketing. Anyone can join this course — businessmen, homemakers, students etc.",
    },
    {
      name: "Fenil",
      role: "White Rivers Media",
      content: "All sessions were interactive with insightful knowledge. Every topic was explained with great examples that one could easily understand. It's an incredible course to kickstart your career in Digital Marketing.",
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      id={id || "testimonials"} 
      className={`py-24 md:py-32 px-6 bg-black border-b border-[#1b1b1b] reveal ${isSectionVisible ? 'show' : ''}`}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
        {/* Left Column: Title */}
        <div className="md:col-span-1">
          <div className="md:sticky md:top-24 self-start space-y-4">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-[-0.04em] leading-[1.0] text-white uppercase">
              What Students Say
            </h2>
            <p className="text-[#8e8e93] text-base leading-[1.65] max-w-[280px]">
              Real reviews from practitioners and operators who completed the program.
            </p>
          </div>
        </div>

        {/* Right Column: Stacked Quotes */}
        <div className="md:col-span-2 space-y-16">
          {testimonials.map((item, idx) => (
            <div key={idx} className="space-y-4 border-b border-[#1b1b1b] pb-12 last:pb-0 last:border-b-0">
              <p className="text-white text-lg md:text-xl leading-relaxed italic font-light">
                "{item.content}"
              </p>
              <div className="font-mono text-xs uppercase tracking-wider text-[#8e8e93]">
                — {item.name} // <span className="text-[#555555]">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
