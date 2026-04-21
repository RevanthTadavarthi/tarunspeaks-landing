// components/Navbar.tsx
"use client"

import Image from "next/image"

import Link from "next/link"

import React, { useState, useEffect } from "react"

import clsx from "clsx"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show glassmorphism when scrolled past 100px (or adjust as needed)
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-[5px] z-50 pointer-events-none">
      {/* Outer container with logo, nav pill, and CTA */}
      <div className="mx-auto max-w-[1400px] px-6 flex items-center justify-between pointer-events-auto">
        {/* Logo - positioned above heading, slightly to the right of left edge */}
        <Link href="/" className="flex items-center shrink-0 ml-4 md:ml-8 lg:ml-12">
          <div
            className={clsx(
              "relative flex items-center justify-center rounded-[12px] py-[8px] px-[16px] transition-all duration-300 ease",
              isScrolled
                ? "bg-white/[0.06] border border-white/[0.12] backdrop-blur-[12px]"
                : "bg-transparent border border-transparent backdrop-blur-none"
            )}
          >
            {/* PNG logo - 160x40 display size */}
            <Image
              src="/tarunspeaks logo resized 320x80.png"
              alt="TarunSpeaks"
              width={160}
              height={40}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Center glass pill that holds nav links and CTA - no gaps */}
        <nav
          aria-label="Primary"
          className="relative flex items-center justify-center"
        >
          {/* the pill */}
          <div
            className={clsx(
              "md:px-6 md:py-1.5 flex items-center justify-center gap-0 md:rounded-[999px]",
              // glass effect, subtle gradient/spotlight, thin border on desktop only
              "md:backdrop-blur-sm md:bg-black/30 md:border-[0.8px] md:border-white/10",
              "md:shadow-[0_15px_50px_rgba(21,38,180,0.06)]"
            )}
          >
            {/* Nav links - no gaps between items */}
            <ul className="hidden md:flex items-center">
              {["Curriculum", "Instructor", "Testimonials", "Pricing", "FAQ"].map((item, index) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={clsx(
                      "text-white/80 text-sm md:text-base tracking-tight transition-colors duration-200 hover:text-[#1526b4]",
                      index > 0 && "ml-6 md:ml-8"
                    )}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Apply CTA - inside the glass nav structure */}
            <div className="flex items-center shrink-0 ml-0 md:ml-8">
              <Link href="#apply" className="inline-flex items-center">
                <span
                  className="rounded-full px-4 py-2 md:px-8 md:py-[14px] bg-[#1526b4] text-white text-sm md:text-base font-medium shadow-[0_10px_30px_rgba(21,38,180,0.28)] transition-transform duration-200 hover:scale-[1.03]"
                  role="button"
                >
                  Apply for Batch 14
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
