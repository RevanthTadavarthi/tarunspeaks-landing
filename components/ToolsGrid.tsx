"use client";

import { useReveal } from "@/lib/useReveal";
import Image from "next/image";

// Abstract inline SVG with stroke-width="1.5" and stroke="currentColor"
const ToolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00bf63]">
    <rect x="3" y="3" width="18" height="18" rx="0" ry="0" />
    <path d="M9 3v18" />
    <path d="M15 3v18" />
    <path d="M3 9h18" />
    <path d="M3 15h18" />
  </svg>
);

const row1 = [
  { name: "ChatGPT", customIcon: true },
  { name: "Google Analytics", customIcon: true },
  { name: "SEMrush", customIcon: true },
  { name: "Ahrefs", customIcon: true },
  { name: "Canva", imageIcon: "/canva logo.jpg" },
  { name: "NotJust Analytics", customIcon: true },
  { name: "SimilarWeb", customIcon: true },
  { name: "Pingdom", customIcon: true },
  { name: "Meta Ads (Instagram)", customIcon: true },
  { name: "Meta", imageIcon: "/meta.jpg" },
];

const row2 = [
  { name: "HypeAuditor", customIcon: true },
  { name: "SocialBlade", customIcon: true },
  { name: "Google Ads", customIcon: true },
  { name: "Yoast SEO", customIcon: true },
  { name: "WordPress.com", customIcon: true },
  { name: "Typeform", customIcon: true },
  { name: "Copy.ai", customIcon: true },
  { name: "Bitly", customIcon: true },
  { name: "Pexels", customIcon: true },
  { name: "NotebookLM", customIcon: true },
];

const Tile = ({ tool }: { tool: any }) => (
  <div className="flex items-center gap-[12px] bg-[#141414] border border-[#222222] rounded-none py-[16px] px-[24px] min-w-[170px] transition-colors duration-200 hover:border-[#1526b4]/50 hover:bg-[#1a1a1a] cursor-default shrink-0">
    <div className="text-[24px] leading-none text-center flex items-center justify-center">
      {tool.imageIcon ? (
        <Image 
          src={tool.imageIcon} 
          alt={tool.name} 
          width={tool.name === 'Canva' ? 36 : 24} 
          height={tool.name === 'Canva' ? 36 : 24} 
          className="rounded-none object-cover" 
        />
      ) : (
        <ToolIcon />
      )}
    </div>
    <div className="text-white/70 text-[14px] font-mono leading-none whitespace-nowrap">
      {tool.name}
    </div>
  </div>
);

interface ToolsGridProps {
  id?: string;
}

export default function ToolsGrid({ id }: ToolsGridProps) {
  const [ref, isVisible] = useReveal();

  return (
    <section ref={ref} id={id} className={`py-16 lg:py-24 bg-black overflow-hidden reveal ${isVisible ? 'show' : ''}`}>
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>

      {/* Header aligned safely within central constraints */}
      <div className="max-w-[1200px] mx-auto flex flex-col items-center mb-16 px-5 md:px-10">
        <div className="text-[11px] uppercase tracking-[0.12em] text-[#1526b4] mb-4 font-semibold text-center">
          TOOLS
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold tracking-[-0.04em] leading-[1.0] text-[#FFFFFF] text-center">
          20 tools. Real workflows.
        </h2>
      </div>

      {/* Edge-masked Marquee Container spanning full viewport */}
      <div 
        className="relative flex flex-col gap-[12px] w-full"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)"
        }}
      >
        {/* Row 1: Scrolling Left */}
        <div className="group w-full flex overflow-hidden">
          <div className="flex w-max animate-scroll-left group-hover:[animation-play-state:paused]">
            <div className="flex gap-[12px] pr-[12px]">
              {row1.map((tool, idx) => <Tile key={`r1-1-${idx}`} tool={tool} />)}
            </div>
            <div className="flex gap-[12px] pr-[12px]">
              {row1.map((tool, idx) => <Tile key={`r1-2-${idx}`} tool={tool} />)}
            </div>
            <div className="flex gap-[12px] pr-[12px]">
              {row1.map((tool, idx) => <Tile key={`r1-3-${idx}`} tool={tool} />)}
            </div>
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="group w-full flex overflow-hidden">
          <div className="flex w-max animate-scroll-right group-hover:[animation-play-state:paused]">
            <div className="flex gap-[12px] pr-[12px]">
              {row2.map((tool, idx) => <Tile key={`r2-1-${idx}`} tool={tool} />)}
            </div>
            <div className="flex gap-[12px] pr-[12px]">
              {row2.map((tool, idx) => <Tile key={`r2-2-${idx}`} tool={tool} />)}
            </div>
            <div className="flex gap-[12px] pr-[12px]">
              {row2.map((tool, idx) => <Tile key={`r2-3-${idx}`} tool={tool} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
