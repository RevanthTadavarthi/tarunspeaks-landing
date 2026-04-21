import React from "react"
import dynamic from "next/dynamic"

import Navbar from "@/components/Navbar"
const TrustStripWithReveal = dynamic(() => import("@/components/TrustStripWithReveal"), { ssr: false })
import ProblemSection from "@/components/ProblemSection"
import WhoIsItFor from "@/components/WhoIsItFor"
import WhatYoullGetCards from "@/components/WhatYoullGetCards"
import LearningJourney from "@/components/LearningJourney"
import Curriculum from "@/components/Curriculum"
import ToolsGrid from "@/components/ToolsGrid"
import CountdownScarcity from "@/components/CountdownScarcity"
import InstructorCard from "@/components/InstructorCard"
import MentorsGrid from "@/components/MentorsGrid"
import AlumniLogos from "@/components/AlumniLogos"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"

// ⬇️ new hero from shadcn-style component
import { Hero } from "@/components/ui/hero"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        {/* Premium Hero */}
        <Hero />

        {/* Trust / numbers strip */}
        <TrustStripWithReveal />

        <ProblemSection />
        <WhoIsItFor />

        {/* Key Outcomes */}
        <WhatYoullGetCards />

        {/* Learning journey / roadmap */}
        <LearningJourney />

        {/* Curriculum accordion */}
        <Curriculum />

        {/* Tools & platforms grid */}
        <ToolsGrid />

        {/* Instructor highlight */}
        <InstructorCard id="instructor" />

        {/* Mentors & alumni */}
        <MentorsGrid />
        <AlumniLogos />

        {/* <CountdownScarcity /> */}

        {/* Social proof */}
        <Testimonials />

        {/* Pricing + timer/offer */}
        <Pricing />

        {/* FAQs */}
        <FAQ />

        {/* Application Form */}
        <FinalCTA id="apply" />
      </main>
      <Footer />
    </>
  )
}
