"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface HeroAction {
  label: string
  href: string
  variant?: "default" | "outline" | "ghost" | "link" | "secondary"
}

export interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  className?: string
  title?: React.ReactNode
  subtitle?: React.ReactNode
  actions?: HeroAction[]
  titleClassName?: string
  subtitleClassName?: string
  actionsClassName?: string
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      title = (
        <>
          You know the tools. <br />
          <span className="text-[#555555]">Nobody taught you the system.</span>
        </>
      ),
      subtitle = (
        <>
          A 90-day, cohort-based, AI-first career accelerator by Tarun Makhija — built from real campaigns, real failures, and real market experience. Not a course. A system.
        </>
      ),
      actions = [
        { label: "Apply for Batch 14 →", href: "#apply", variant: "default" },
        { label: "Download Syllabus", href: "/syllabus.pdf", variant: "outline" },
      ],
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-black border-b border-[#141414] py-20 px-6",
          className
        )}
        {...props}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="relative z-10 flex flex-col items-center text-center max-w-[900px] mx-auto w-full"
        >
          {/* Primary Editorial Heading */}
          <h1
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.0] text-white mb-8 max-w-4xl",
              titleClassName,
            )}
          >
            {title}
          </h1>

          {/* Subtext */}
          {subtitle && (
            <p className={cn("text-[#8e8e93] text-base leading-[1.65] max-w-xl mb-10 mx-auto", subtitleClassName)}>
              {subtitle}
            </p>
          )}

          {/* CTAs Row */}
          {actions && actions.length > 0 && (
            <div className={cn("flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto mb-10", actionsClassName)}>
              {actions.map((action, index) => (
                <Button 
                  key={index} 
                  variant={action.variant as any} 
                  asChild
                  className={action.variant === "default" 
                    ? "px-6 py-3 bg-[#1526b4] text-white font-mono text-xs uppercase tracking-wider rounded-md transition-all hover:bg-[#1526b4]/90 w-full md:w-auto text-center block border border-[#1526b4] h-auto" 
                    : "px-6 py-3 border border-white/20 text-white font-mono text-xs uppercase tracking-wider rounded-md transition-all hover:bg-white/10 w-full md:w-auto text-center block bg-transparent h-auto"}
                >
                  <Link href={action.href}>{action.label}</Link>
                </Button>
              ))}
            </div>
          )}

          {/* Inline Metadata */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-[11px] font-mono text-[#8e8e93] border-t border-[#141414] pt-6 w-full max-w-[600px] mt-2">
            <div>
              <span className="text-white font-bold">13 BATCHES</span> COMPLETED
            </div>
            <div className="hidden sm:block w-[1px] h-3 bg-[#141414]"></div>
            <div>
              <span className="text-white font-bold">28,300+</span> OPERATORS TRAINED
            </div>
            <div className="hidden sm:block w-[1px] h-3 bg-[#141414]"></div>
            <div>
              <span className="text-[#00bf63] font-bold">30 SEATS</span> STRICTLY LIMITED
            </div>
          </div>
        </motion.div>
      </section>
    )
  },
)

Hero.displayName = "Hero"

export { Hero }
export default Hero
