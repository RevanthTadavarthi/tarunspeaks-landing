"use client";

import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

/**
 * Testimonials Component
 * 
 * This component displays student testimonials in a carousel format.
 * It shows reviews from past students (Ravi, Ritika, Fenil) to build social proof.
 * Users can navigate through testimonials using previous/next buttons.
 */
export default function Testimonials() {
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
    <section ref={sectionRef} id="testimonials" className={`pt-20 pb-12 px-4 sm:px-6 lg:px-8 reveal ${isSectionVisible ? 'show' : ''}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] mb-3 font-semibold">
            REVIEWS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary">
            What Students Say
          </h2>
        </div>
        <div className="card p-8 md:p-12 relative">
          {/* Testimonial Content */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#1526b4] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              {testimonials[currentIndex].name.charAt(0)}
            </div>
            <p className="text-lg text-primary/90 leading-relaxed mb-6 italic">
              "{testimonials[currentIndex].content}"
            </p>
            <div>
              <div className="font-semibold text-primary text-xl mb-1">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-primary/70">{testimonials[currentIndex].role}</div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="bg-accent/20 hover:bg-accent/30 border border-accent/30 rounded-lg p-3 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent ${
                    index === currentIndex ? "bg-secondary" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="bg-accent/20 hover:bg-accent/30 border border-accent/30 rounded-lg p-3 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

