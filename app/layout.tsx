import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roadmap to Digital Marketing 2.0 | TarunSpeaks",
  description: "Get Job-Ready in 100 Hours — Live, Mentor-Led Digital Marketing Training by Tarun. Practical, AI-integrated training with 70h live + 30h recorded sessions.",
  keywords: "digital marketing course, online marketing training, digital marketing certification, TarunSpeaks, RMDM",
  authors: [{ name: "TarunSpeaks" }],
  openGraph: {
    title: "Roadmap to Digital Marketing 2.0 | TarunSpeaks",
    description: "Get Job-Ready in 100 Hours — Live, Mentor-Led Digital Marketing Training",
    type: "website",
    images: [
      {
        url: "/tarun-hero.png",
        width: 1200,
        height: 630,
        alt: "TarunSpeaks Digital Marketing Course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadmap to Digital Marketing 2.0 | TarunSpeaks",
    description: "Get Job-Ready in 100 Hours — Live, Mentor-Led Digital Marketing Training",
    images: ["/tarun-hero.png"],
  },
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

