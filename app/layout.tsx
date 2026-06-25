import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "RMDM by TarunSpeaks — Real Marketing. Real Results. 90 Days.",
  description: "A 90-day cohort-based marketing accelerator by Tarun Makhija. Learn content strategy, performance marketing, and AI-first workflows. Batch 14 now enrolling. Only 30 seats.",
  openGraph: {
    title: "RMDM by TarunSpeaks — Batch 14 Now Enrolling",
    description: "Stop learning marketing in fragments. Join 28,300+ learners. Apply for Batch 14.",
    url: "https://your-netlify-url.netlify.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RMDM by TarunSpeaks — Batch 14",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RMDM by TarunSpeaks",
    description: "Stop learning marketing in fragments. Apply for Batch 14.",
    images: ["/og-image.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Preconnect - Improves font loading performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts - Inter for body text, Playfair Display for hero accent */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        
        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Roadmap to Digital Marketing 2.0",
              "description": "Practical, AI-integrated training by Tarun. 70h live + 30h recorded sessions.",
              "provider": {
                "@type": "Organization",
                "name": "TarunSpeaks",
                "url": "https://tarunspeaks.com",
              },
              "courseCode": "RMDM",
              "educationalCredentialAwarded": "Certificate",
              "timeRequired": "PT100H",
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "online",
                "startDate": process.env.NEXT_PUBLIC_COHORT_START || "2026-01-10",
              },
              "instructor": {
                "@type": "Person",
                "name": "Tarun",
                "description": "Digital Marketing Expert, BW 30 under 30",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

