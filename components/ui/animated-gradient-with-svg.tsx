// /components/ui/animated-gradient-with-svg.tsx

"use client";

import React, { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // keep using your cn util
import { useDimensions } from "@/components/hooks/use-debounced-dimensions";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
  className?: string;
}

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dimensions = useDimensions(containerRef);

  const circleSize = useMemo(
    () => Math.max(dimensions.width || 0, dimensions.height || 0) || 800,
    [dimensions.width, dimensions.height]
  );

  const blurClass =
    blur === "light" ? "blur-2xl" : blur === "medium" ? "blur-3xl" : "blur-[100px]";

  // Memoize circle positions and properties to prevent regeneration on every render
  const circles = useMemo(() => {
    return colors.map((color, index) => {
      // Use a seed-based approach for consistent randomness
      const seed = index * 1000;
      const random1 = (seed % 100) / 100;
      const random2 = ((seed * 7) % 100) / 100;
      const random3 = ((seed * 13) % 100) / 100;
      const random4 = ((seed * 17) % 100) / 100;
      const random5 = ((seed * 19) % 100) / 100;
      const random6 = ((seed * 23) % 100) / 100;
      const random7 = ((seed * 29) % 100) / 100;
      const random8 = ((seed * 31) % 100) / 100;
      const random9 = ((seed * 37) % 100) / 100;
      
      const w = Math.max(200, circleSize * (0.4 + random1 * 0.4));
      const h = w;
      const top = random2 * 60;
      const left = random3 * 80;
      
      return {
        color,
        w,
        h,
        top,
        left,
        // Use larger values for more visible movement (range: -1 to 1)
        tx1: (random4 - 0.5) * 2,
        ty1: (random5 - 0.5) * 2,
        tx2: (random6 - 0.5) * 2,
        ty2: (random7 - 0.5) * 2,
        tx3: (random8 - 0.5) * 2,
        ty3: (random9 - 0.5) * 2,
        tx4: (random1 - 0.5) * 2,
        ty4: (random2 - 0.5) * 2,
      };
    });
  }, [colors, circleSize]);

  const animationDuration = Math.max(10, 30 / Math.max(0.5, speed));

  return (
    <div ref={containerRef} className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div className={cn(`absolute inset-0`, blurClass)}>
        {circles.map((circle, index) => {
          // Create animation variants for Framer Motion
          const animationVariants = {
            animate: {
              x: [
                circle.tx1 * 100,
                circle.tx2 * 100,
                circle.tx3 * 100,
                circle.tx4 * 100,
                circle.tx1 * 100,
              ],
              y: [
                circle.ty1 * 100,
                circle.ty2 * 100,
                circle.ty3 * 100,
                circle.ty4 * 100,
                circle.ty1 * 100,
              ],
              transition: {
                duration: animationDuration,
                repeat: Infinity,
                ease: [0.445, 0.05, 0.55, 0.95],
              },
            },
          };

          return (
            <motion.svg
              key={`${circle.color}-${index}`}
              className="absolute"
              style={{
                top: `${circle.top}%`,
                left: `${circle.left}%`,
              }}
              initial={{ x: circle.tx1 * 100, y: circle.ty1 * 100 }}
              width={circle.w}
              height={circle.h}
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
              variants={animationVariants}
              animate="animate"
            >
              <circle
                cx="50"
                cy="50"
                r="50"
                fill={circle.color}
                className="opacity-60"
              />
            </motion.svg>
          );
        })}
      </div>
    </div>
  );
};

