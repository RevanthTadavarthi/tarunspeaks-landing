"use client";

import { HoverEffect } from "./hover-effect";

/**
 * HoverEffectDemo Component
 * 
 * A demo component showcasing the HoverEffect with example projects.
 * 
 * USAGE:
 * 
 * 1. In a Server Component (using dynamic import):
 * 
 *    import dynamic from "next/dynamic";
 *    const HoverEffectDemo = dynamic(
 *      () => import("@/components/ui/hover-effect-demo"),
 *      { ssr: false }
 *    );
 * 
 *    export default function Page() {
 *      return (
 *        <>
 *          <HoverEffectDemo />
 *        </>
 *      );
 *    }
 * 
 * 2. In a Client Component (direct import):
 * 
 *    import HoverEffectDemo from "@/components/ui/hover-effect-demo";
 * 
 *    export default function ClientPage() {
 *      return <HoverEffectDemo />;
 *    }
 * 
 * You can also import just the demoProjects data:
 * 
 *    import { demoProjects } from "@/components/ui/hover-effect-demo";
 */

export const demoProjects = [
  {
    title: "Stripe",
    description: "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description: "Streaming service with award-winning TV shows and movies.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description: "Search & ad leader with many internet products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description: "Social apps and virtual-reality products.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description: "E-commerce, cloud computing, and more.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description: "Software, cloud services, and developer tools.",
    link: "https://microsoft.com",
  },
];

export default function HoverEffectDemo() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <HoverEffect items={demoProjects} />
    </section>
  );
}
