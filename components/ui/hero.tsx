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
  gradient?: boolean
  blur?: boolean
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
      gradient = true,
      blur = true,
      title = (
        <>
          <span className="block text-white">Stop learning marketing in fragments.</span>
          <span className="block">
            Start operating at a <span className="bg-gradient-to-r from-[#00bf63] to-[#059669] bg-clip-text text-transparent">systems level.</span>
          </span>
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
          "relative z-0 flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-black",
          "pt-16 pb-8",
          className
        )}
        {...props}
      >
        {gradient && (
          <div className="absolute top-0 isolate z-0 flex w-screen items-start justify-center">
            {blur && (
              <div className="absolute top-0 z-50 h-48 w-screen opacity-10 backdrop-blur-md" />
            )}

            {/* Main glow */}
            <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-[#1526b4]/40 opacity-80 blur-3xl" />

            {/* Lamp effect (animated) */}
            <motion.div
              initial={{ width: "8rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "16rem" }}
              className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-[#1526b4]/50 blur-2xl"
            />

            {/* Top line */}
            <motion.div
              initial={{ width: "15rem" }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
              whileInView={{ width: "30rem" }}
              className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-[#1526b4]/40"
            />
          </div>
        )}

        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-50 container flex flex-col items-center text-center max-w-[900px] px-5 md:px-10 py-6 mx-auto"
        >
          <div className="flex flex-col items-center justify-center w-full">
            {/* Batch Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00bf63] animate-pulse"></span>
              <span className="text-sm text-white/60 tracking-widest uppercase">
                Batch 14 · Now Enrolling · 30 Seats Only
              </span>
            </div>

            <h1
              className={cn(
                "text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.02em] leading-[1.04]",
                titleClassName,
              )}
            >
              {title}
            </h1>

            {subtitle && (
              <p className={cn("mt-4 text-lg md:text-[19px] text-white/65 max-w-[800px] mx-auto leading-[1.65]", subtitleClassName)}>
                {subtitle}
              </p>
            )}



            {actions && actions.length > 0 && (
              <div className={cn("mt-6 flex flex-wrap justify-center gap-4", actionsClassName)}>
                {actions.map((action, index) => (
                  <Button 
                    key={index} 
                    variant={action.variant as any} 
                    asChild
                    className={action.variant === "default" 
                      ? "bg-[#1526b4] hover:bg-[#1526b4] hover:scale-[1.04] transition-transform rounded-full px-8 py-3.5 text-[17px] shadow-[0_8px_30px_rgba(21,38,180,0.40)] font-semibold h-auto min-h-[52px]" 
                      : action.variant === "outline" 
                      ? "border border-white/20 hover:bg-white/8 rounded-full px-7 py-3.5 text-[17px] font-medium h-auto bg-transparent min-h-[52px]" 
                      : ""}
                  >
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </section>
    )
  },
)

Hero.displayName = "Hero"

export { Hero }
export default Hero

