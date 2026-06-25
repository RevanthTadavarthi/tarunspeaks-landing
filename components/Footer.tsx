"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/white logo.svg" 
                alt="TarunSpeaks" 
                width={200} 
                height={50} 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-white/80 text-lg font-medium mb-6">
              Real Marketing. Real Results. 90 Days.
            </p>
            <p className="text-white/50 text-sm max-w-sm">
              We turn ambitious individuals into performance-driven marketers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-white/50 text-[14px]">
              <li>
                <Link href="#curriculum" className="hover:text-white transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="#instructor" className="hover:text-white transition-colors">
                  Instructor
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get in touch</h3>
            <div className="mb-6">
              <a 
                href="mailto:teamtarunspeaks@gmail.com" 
                className="text-white/50 hover:text-white text-[14px] transition-colors"
              >
                teamtarunspeaks@gmail.com
              </a>
            </div>
            
            <h3 className="text-white font-semibold mb-6">Socials</h3>
            <ul className="space-y-4 text-white/50 text-[14px]">
              <li>
                <a 
                  href="https://instagram.com/tarunspeaks" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/tarunmakhija" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@tarunspeaks" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Grid */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/40 text-[13px]">
            © 2026 TarunSpeaks. All rights reserved.
          </p>
          <p className="text-white/30 text-[12px] max-w-lg">
            RMDM is an educational programme. Results vary based on individual effort and market conditions.
          </p>
        </div>
      </div>
    </footer>
  );
}
