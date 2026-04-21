"use client";

import { useReveal } from "@/lib/useReveal";
import { HoverEffect, Card, CardTitle, CardDescription } from "@/components/ui/hover-effect";

/**
 * Outcomes Component
 * 
 * This section highlights the three main outcomes students can expect from the course:
 * 1. Hands-on projects - real-world experience
 * 2. 1:1 mentorship - personalized guidance
 * 3. Job assistance - career support
 * 
 * Each outcome is displayed in a card format with hover effects and links to relevant sections.
 */
export default function Outcomes() {
  const [sectionRef, isSectionVisible] = useReveal();
  const outcomes = [
    {
      title: "Hands-on Projects",
      description: "Work on real-world projects that you can showcase in your portfolio. Build practical skills through industry-relevant assignments.",
      link: "#curriculum",
      icon: "🎯",
    },
    {
      title: "1:1 Mentorship",
      description: "Get personalized guidance from experienced mentors. Receive feedback and support tailored to your learning journey.",
      link: "#instructor",
      icon: "🎯",
    },
    {
      title: "Job Assistance",
      description: "Access career support including resume reviews, interview preparation, and job placement assistance to land your dream role.",
      link: "#pricing",
      icon: "🎯",
    },
  ];

  return (
    <section ref={sectionRef} className={`py-20 px-4 sm:px-6 lg:px-8 reveal ${isSectionVisible ? 'show' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
          What You&apos;ll Get
        </h2>
        <HoverEffect 
          items={outcomes}
          className="py-0"
        />
      </div>
    </section>
  );
}

