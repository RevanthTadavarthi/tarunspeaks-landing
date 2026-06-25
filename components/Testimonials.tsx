"use client";

import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

interface TestimonialsProps {
  id?: string;
}

export default function Testimonials({ id }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} id={id || "testimonials"} className={`py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black reveal ${isSectionVisible ? 'show' : ''}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] mb-3 font-mono font-semibold">
            REVIEWS //
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white uppercase tracking-tight">
            What Students Say
          </h2>
        </div>
        <div className="bg-[#141414] border border-[#222222] p-8 md:p-12 relative rounded-none">
          {/* Testimonial Content */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-none bg-[#1526b4] text-white flex items-center justify-center text-2xl font-mono font-bold mx-auto mb-6">
              {testimonials[currentIndex].name.charAt(0)}
            </div>
            <p className="text-lg text-white leading-relaxed mb-6 italic">
              "{testimonials[currentIndex].content}"
            </p>
            <div>
              <div className="font-bold text-white text-xl mb-1 uppercase tracking-wide">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-[#8e8e93] font-mono text-sm">{testimonials[currentIndex].role}</div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-transparent hover:bg-white/5 border border-[#222222] rounded-none p-3 transition-colors text-white font-mono focus:outline-none"
              aria-label="Previous testimonial"
            >
              [PREV]
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-none transition-all focus:outline-none ${
                    index === currentIndex ? "bg-[#1526b4]" : "bg-[#222222]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="bg-transparent hover:bg-white/5 border border-[#222222] rounded-none p-3 transition-colors text-white font-mono focus:outline-none"
              aria-label="Next testimonial"
            >
              [NEXT]
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
