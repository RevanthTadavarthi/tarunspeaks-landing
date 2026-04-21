// components/TrustStripWithReveal.tsx

"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import CountUp, { useCountUp } from "react-countup";

const AnimatedNumber = ({ value, suffix, duration }: { value: number; suffix?: string; duration: number }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  useCountUp({
    ref: countRef,
    end: value,
    suffix: suffix || "",
    duration: duration,
    separator: ",",
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });
  return <span ref={countRef} />;
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const statVariants = (reduced: boolean): Variants =>
  reduced
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
      };

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number; // countup duration
};

export default function TrustStripWithReveal() {
  const stats: Stat[] = [
    { value: 28300, suffix: "+", label: "Learners", duration: 2.2 },
    { value: 2100, suffix: "+", label: "Sessions", duration: 1.8 },
    { value: 300, suffix: "+", label: "Brands", duration: 1.6 },
  ];

  // Respect system reduced-motion
  const prefersReduced = useReducedMotion();

  // Perf: disable heavy animated gradient on small screens
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Helper to render number — uses CountUp if animations allowed
  const renderNumber = (value: number, suffix?: string, duration = 2) => {
    if (prefersReduced) {
      // If user requests reduced motion, show formatted final number without animation
      return (
        <span>
          {value.toLocaleString()}
          {suffix || ""}
        </span>
      );
    }

    return (
      <AnimatedNumber value={value} suffix={suffix} duration={duration} />
    );
  };

  return (
    <section 
      className="relative overflow-hidden bg-black min-h-[200px]"
      style={{ backgroundImage: "radial-gradient(ellipse 600px 300px at 50% 50%, rgba(0,191,99,0.08) 0%, transparent 70%)" }}
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 md:pt-16 pb-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center"
          variants={containerVariants}
          initial={prefersReduced ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center"
              variants={statVariants(prefersReduced ?? false)}
            >
              <motion.div
                whileHover={(prefersReduced ?? false) ? {} : { scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#00bf63] leading-tight"
                aria-hidden={prefersReduced ? true : false}
              >
                {renderNumber(s.value, s.suffix, s.duration)}
              </motion.div>

              <div className="mt-2 text-zinc-300 text-lg">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

