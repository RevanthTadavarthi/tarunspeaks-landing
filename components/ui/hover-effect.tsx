"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { AnimatePresence, motion } from "framer-motion";

import Link from "next/link";

import { useState } from "react";

/**
 * HoverEffect
 * - Client component because it uses state & framer-motion
 * - Expects `items` prop (array of { title, description, link })
 */
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Helper function to check if link is external
  const isExternalLink = (url: string) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const external = isExternalLink(item.link);
        const ariaLabel = `${item.title}${item.description ? `: ${item.description}` : ""}`;

        return (
          <Link
            href={item?.link}
            key={item?.link + idx}
            className="relative group block h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={ariaLabel}
            {...(external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full rounded-2xl z-10"
                style={{ 
                  background: "linear-gradient(135deg, rgba(21, 38, 180, 0.2) 0%, rgba(21, 38, 180, 0.1) 100%)",
                  backdropFilter: "blur(4px)",
                }}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.14 } }}
                exit={{ opacity: 0, transition: { duration: 0.12, delay: 0.05 } }}
              />
            )}
          </AnimatePresence>

          <Card className="relative z-20">
            <div className="p-6">
              {item.icon && (
                <div className="text-4xl mb-4">{item.icon}</div>
              )}
              <CardTitle className="text-2xl md:text-xl lg:text-2xl">
                {item.title}
              </CardTitle>
              <CardDescription className="mt-4">
                {item.description}
              </CardDescription>
            </div>
          </Card>
        </Link>
        );
      })}
    </div>
  );
};

/* Card primitive - Premium glassmorphic frame */
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-0 overflow-hidden relative",
        // Glassmorphic base
        "bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02]",
        "backdrop-blur-xl backdrop-saturate-150",
        // Border with subtle glow
        "border border-white/10",
        "shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_0_rgba(255,255,255,0.1)]",
        // Hover effects
        "group-hover:border-white/20 group-hover:shadow-[0_8px_32px_0_rgba(21,38,180,0.25),inset_0_1px_0_0_rgba(255,255,255,0.15)]",
        "transition-all duration-300 ease-out",
        className
      )}
      style={{
        // Additional glassmorphic enhancement
        background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 100%)",
      }}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-white font-bold tracking-wide", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-white/80 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
