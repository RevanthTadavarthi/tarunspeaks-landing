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
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none w-full">
      <div
        className={clsx(
          "w-full transition-all duration-300 ease-in-out pointer-events-auto",
          isScrolled
            ? "bg-black/70 backdrop-blur-md border border-[#1b1b1b] rounded-md mx-auto max-w-5xl mt-4 px-6 py-3"
            : "bg-transparent border border-transparent px-6 py-5"
        )}
      >
        <div className="mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/tarunspeaks logo resized 320x80.png"
              alt="TarunSpeaks"
              width={140}
              height={35}
              className="object-contain"
              priority
            />
          </Link>

          {/* Nav links and CTA */}
          <nav className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-6">
              {["Curriculum", "Instructor", "Testimonials", "Pricing", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 text-sm md:text-base tracking-tight transition-colors duration-200 hover:text-[#1526b4]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <Link href="#apply" className="inline-flex items-center">
              <span
                className="px-6 py-3 bg-[#1526b4] text-white font-mono text-xs uppercase tracking-wider rounded-md transition-all hover:bg-[#1526b4]/90 text-center block h-auto"
                role="button"
              >
                Apply for Batch 14
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
