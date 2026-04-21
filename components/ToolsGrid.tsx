"use client";

import { useReveal } from "@/lib/useReveal";
import Image from "next/image";

const row1 = [
  { name: "ChatGPT", icon: "🤖" },
  { name: "Google Analytics", icon: "📊" },
  { name: "SEMrush", icon: "🔍" },
  { name: "Ahrefs", icon: "🔗" },
  { name: "Canva", icon: "🎨", imageIcon: "/canva logo.jpg" },
  { name: "NotJust Analytics", icon: "📱" },
  { name: "SimilarWeb", icon: "📈" },
  { name: "Pingdom", icon: "🏓" },
  { name: "Meta Ads (Instagram)", icon: "📸" },
  { name: "Meta", icon: "♾️", imageIcon: "/meta.jpg" },
];

const row2 = [
  { name: "HypeAuditor", icon: "👥" },
  { name: "SocialBlade", icon: "📉" },
  { name: "Google Ads", icon: "💰" },
  { name: "Yoast SEO", icon: "⚡" },
  { name: "WordPress.com", icon: "🌐" },
  { name: "Typeform", icon: "📝" },
  { name: "Copy.ai", icon: "✍️" },
  { name: "Bitly", icon: "🔗" },
  { name: "Pexels", icon: "🖼️" },
  { name: "NotebookLM", icon: "📓" },
];

const Tile = ({ tool }: { tool: any }) => (
  <div className="flex items-center gap-[12px] bg-white/[0.03] border border-white/[0.08] rounded-[14px] py-[16px] px-[24px] min-w-[170px] transition-colors duration-200 hover:border-[#1526b4]/50 hover:bg-white/[0.06] cursor-default shrink-0">
    <div className="text-[24px] leading-none text-center flex items-center justify-center">
      {tool.imageIcon ? (
        <Image 
          src={tool.imageIcon} 
          alt={tool.name} 
          width={tool.name === 'Canva' ? 36 : 24} 
          height={tool.name === 'Canva' ? 36 : 24} 
          className="rounded object-cover" 
        />
      ) : (
        tool.icon
      )}
    </div>
    <div className="text-white/70 text-[15px] font-medium leading-none whitespace-nowrap">
      {tool.name}
    </div>
  </div>
);

export default function ToolsGrid() {
  const [ref, isVisible] = useReveal();

  return (
    <section ref={ref} className={`py-16 lg:py-24 bg-black overflow-hidden reveal ${isVisible ? 'show' : ''}`}>
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
        <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-bold leading-[1.10] text-[#FFFFFF] text-center">
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
            {/* Third duplicate blocks any gaps on ultrawide monitors perfectly */}
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
            {/* Third duplicate blocks any gaps on ultrawide monitors perfectly */}
            <div className="flex gap-[12px] pr-[12px]">
              {row2.map((tool, idx) => <Tile key={`r2-3-${idx}`} tool={tool} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
