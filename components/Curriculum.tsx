"use client";

import { useState } from "react";
import { useReveal } from "@/lib/useReveal";

/**
 * Curriculum Component
 * 
 * This component displays all the modules and topics covered in the course.
 * It uses an accordion format where users can expand each module to see its contents.
 * The curriculum information is sourced from the PDF document.
 */
export default function Curriculum() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [sectionRef, isSectionVisible] = useReveal();

  const stages = [
    {
      title: "Stage 1 — Build Your Marketing Foundation",
      tagline: "Stop thinking like a content executor. Start thinking like a strategist.",
      topics: [
        "What marketing really means (beyond buzzwords)",
        "4Ps & marketing types",
        "Branding: colours, fonts, positioning",
        "Build your own brand name, logo & tagline",
        "Copywriting basics & design principles that convert",
      ],
    },
    {
      title: "Stage 2 — Master Organic Growth",
      tagline: "You understand how to build attention intentionally.",
      topics: [
        "Instagram, Facebook & LinkedIn content strategies",
        "Reels, Stories, Lives, Posts & platform algorithms",
        "Influencer marketing — strategy to execution",
        "Video marketing: tools, frameworks & formats",
        "Moment marketing + content repurposing",
        "Social media tools & platform comparison",
      ],
    },
    {
      title: "Stage 3 — Run Performance-Driven Campaigns",
      tagline: "You connect content to conversions.",
      topics: [
        "SEO foundations: on-page, off-page, tools (SEMrush, Ahrefs)",
        "SEM strategy & Google Ads campaign creation",
        "Meta Ads — Facebook & Instagram",
        "A/B testing, audience targeting & high-converting ad copy",
        "Performance marketing metrics & dashboards",
      ],
    },
    {
      title: "Stage 4 — Control the Conversation",
      tagline: "You manage not just growth, but trust.",
      topics: [
        "Social listening vs monitoring",
        "Tools: Brand24, Google Alerts, SimilarWeb",
        "Sentiment analysis & crisis response",
        "Content distribution: organic + paid funnels",
        "Building repeatable visibility systems",
      ],
    },
    {
      title: "Stage 5 — Go AI-First",
      tagline: "You operate like a 2026 marketer — faster, sharper, system-driven.",
      topics: [
        "AI-led marketing strategy with ChatGPT & NotebookLM",
        "Designing an AI-powered content engine",
        "Building your personal brand in the era of AI",
        "Launching a lean, smart AI-first agency",
        "Client outreach, proposal creation & landing pages",
        "Turning followers into clients or career leads",
      ],
    },
    {
      title: "Bonus — Guest Masterclasses (7+ sessions)",
      tagline: "Learn from the top 1% practitioners in the industry.",
      topics: [
        "Akshay Gurnani — Co-founder & Former CEO, Schbang",
        "Bhawna Sethi — Founder, Letsinfluence.io",
        "Vanshikaa Oberoi — Founder & Chief Brand Strategist, The Fingerprint Labs",
        "Deep Mehta — Co-founder, Digichefs",
        "Pranita Bajoria — @Mad.AdWoman, 76K+ on Instagram",
        "Divyank Jain — Co-founder, The Wise Idiot",
        "Nandikaa Sachdev — Brand Marketing, Pilgrim (ex-Nua, FCBKinnect)",
        "Piyush Kukreja — Podcast Host, CEO, Piyush Kukreja Digital",
        "Neel Mehra — Advisor-in-Chief, Avinser Advisory",
        "Apeksha Gupta — Co-founder, Foldr.studio",
        "Arpit Soni — Creative Director (Google, Disney+ Hotstar)",
        "Rishi Nagar — Founder & CEO, SuperShyft",
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="curriculum" className={`pt-8 pb-20 px-4 sm:px-6 lg:px-8 reveal ${isSectionVisible ? 'show' : ''}`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] mb-3 font-semibold">
            CURRICULUM
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary">
            Course Curriculum
          </h2>
        </div>
        <div className="space-y-4 mb-10">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenModule(openModule === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
                aria-expanded={openModule === index}
              >
                <span className="font-semibold text-primary text-lg">{stage.title}</span>
                <span className="text-accent text-2xl">
                  {openModule === index ? "−" : "+"}
                </span>
              </button>
              {openModule === index && (
                <div className="px-6 pb-4">
                  <div className="text-[#00bf63] font-medium mb-4 pb-4 border-b border-white/10">
                    {stage.tagline}
                  </div>
                  <ul className="space-y-2">
                    {stage.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-primary/80 flex items-start">
                        <span className="text-secondary mr-3 mt-0.5 opacity-60">✦</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-[13px] md:text-[14px] text-white/45 tracking-wide uppercase font-medium">
            70+ hours live (weekends only) · 30+ hours AI-driven implementation · Limited to 30 members
          </p>
        </div>
      </div>
    </section>
  );
}

