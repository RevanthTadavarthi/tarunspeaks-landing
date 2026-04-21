# RMDM Landing Page — Product Requirements Document
**TarunSpeaks · Batch 14 · Conversion-First Design**

| Field | Value |
|-------|-------|
| Product | Roadmap to Digital Marketing 2.0 — Landing Page |
| Version | 1.0 |
| Batch | Batch 14 (April 2026) |
| Stack | Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Stripe |
| Primary CTA | Apply for Batch 14 |
| Price Point | ₹97,000 (all taxes included) |
| Design References | GrowthX.club · GrowthSchool.io |
| Status | Ready for Development |

---

## 1. Overview

This document defines the complete product requirements for the RMDM landing page — a single-page, conversion-first website for the Roadmap to Digital Marketing 2.0 program by TarunSpeaks. It covers page structure, section-by-section copy direction, design system, component inventory, and build instructions.

### 1.1 Product Goal

Drive one action: **Apply for Batch 14**. Everything on the page exists to earn that click. Not enrollment directly — the application is the conversion event. Acceptance and payment happen after the interview.

### 1.2 What This Is Not

- Not a general marketing website
- Not a course catalogue page
- Not an enrollment checkout page (Stripe kept in codebase but not wired to any public CTA)

### 1.3 Design Philosophy

Inspired by GrowthX.club and GrowthSchool.io — premium dark aesthetics, editorial typography, minimal chrome, single strong CTA per section.

- **Clarity over creativity** — every word earns its place
- **Outcomes before features** — lead with what the learner becomes, not what we teach
- **Proof before price** — trust must be built before the ₹97K ask
- **One CTA, everywhere** — Apply for Batch 14, always

---

## 2. Emotional Arc & Conversion Logic

A landing page at ₹97,000 is not a scroll. It is a conversation. The visitor arrives skeptical. The page must move them through six emotional states before asking for anything.

| Phase | Emotional Job | Sections |
|-------|--------------|----------|
| HOOK | Stop the scroll. Create instant relevance. | Navbar, Hero, Trust Strip |
| PAIN | Make them feel the problem they have been ignoring. | Problem Section, Who This Is For |
| SOLUTION | Show them the system, not just the syllabus. | What You'll Get, Learning Journey, Curriculum |
| PROOF | Remove doubt with volume + specificity. | Tools Grid, Scarcity, Instructor, Mentors, Testimonials, Alumni |
| CLOSE | Remove the last objections. Make the ask. | Pricing, FAQ, Final CTA |
| EXIT | Give them a way to stay in touch. | Footer |

**Key principle:** Never ask for money before you have earned trust. The pricing section appears after 12 sections of value delivery.

### 2.1 The Application Funnel

The CTA does not take a visitor directly to payment. It takes them into a structured three-step admission process. Tarun is not selling seats — he is selecting members.

| Step | Action | What it signals |
|------|--------|----------------|
| Step 1 — Apply | Visitor fills short application form (name, email, phone, role, goal, source) | Commitment filter — passive browsers self-select out |
| Step 2 — Telephonic Interview | TarunSpeaks team calls within 24–48 hours. 15–20 min conversation about goals and fit. | Authority signal — you don't get interviewed for programs nobody wants |
| Step 3 — Accept or Reject | Written acceptance or 'not right now' with reason and next steps | Exclusivity proof — real rejections make real acceptances meaningful |

**Why this works at ₹97K:**
- Perceived selectivity: "only 30 people, and not everyone who applies gets in" beats "only 30 seats"
- Reduces buyer's remorse: accepted candidates feel chosen, not sold to
- Positions Tarun as a curator, not a seller — same positioning as GrowthX
- Creates a demand signal: interviews imply more applications than seats

**Critical condition:** Rejections must be real. If every applicant gets accepted, the selectivity signal collapses.

**Rejection criteria:**
- Not enough time for weekend sessions
- Too early in career — better served by next batch
- Goals better served by a different format

**How the funnel changes the page:**
- Primary CTA everywhere: "Apply for Batch 14" (never "Buy Now", "Pay Now", "Enrol")
- FinalCTA section hosts the application form, not a booking button
- Pricing section CTA: "Apply for Batch 14" — payment comes after acceptance
- FAQ gains: "What does the application process involve?"

---

## 3. Design System

### 3.1 Color Tokens

| Token | Value & Usage |
|-------|--------------|
| bg / background | #000000 — page background |
| primary | #FFFFFF — all primary text |
| accent | #1526b4 — CTAs, highlights, active states, borders |
| secondary | #00bf63 — outcome callouts, checkmarks, animated stats |
| surface | rgba(255,255,255,0.04) — card backgrounds |
| border-subtle | rgba(255,255,255,0.08) — card borders at rest |
| border-active | #1526b4 at 60% opacity — hover / open accordion |

### 3.2 Typography

| Use | Spec |
|-----|------|
| Display headline (Hero H1) | Extrabold, 68–80px, line-height 1.04, tracking -0.02em |
| Section heading (H2) | Bold, 40–48px, line-height 1.10 |
| Card title (H3) | Semibold, 22–26px |
| Body text | Regular, 17–19px, line-height 1.65, white/65 |
| Label / badge | Semibold, 11–13px, uppercase, letter-spacing 0.1em |
| Micro-copy | Regular, 13–14px, white/45 |

### 3.3 Component Tokens

- **Card:** bg rgba(255,255,255,0.03), border 1px rgba(255,255,255,0.08), border-radius 16px, padding 32px
- **Card hover:** border-color #1526b4 at 50%, translateY(-4px), transition 220ms ease
- **Primary button:** bg #1526b4, rounded-full, px-8 py-3.5, shadow 0 8px 30px rgba(21,38,180,0.40), hover scale(1.04)
- **Secondary button:** border 1px white/20, rounded-full, px-7 py-3.5, hover bg white/8
- **Section padding:** py-24 desktop, py-16 mobile
- **Max content width:** 1200px centered

---

## 4. Global CSS Context — Read Before Building

`globals.css` already defines the following. All new components must use these — do not reinvent them.

| Token / Class | Value |
|--------------|-------|
| `.card` | bg rgba(255,255,255,0.03) · backdrop-filter blur(6px) · border 1px rgba(255,255,255,0.06) · border-radius 20px · padding 1.5rem · box-shadow 0 8px 30px rgba(0,0,0,0.6) |
| `.reveal` / `.reveal.show` | Fade-up scroll animation — opacity 0→1, translateY 8px→0, transition 0.6s ease. Use with useReveal hook. DO NOT add Framer Motion for reveal — already handled. |
| `bg-bg` | Tailwind token = #000000 |
| `text-primary` | Tailwind token = #FFFFFF |
| `accent` | Tailwind token = #1526b4 |
| `secondary` | Tailwind token = #00bf63 |
| Base font | Inter — **18px base. 1rem = 18px in this project, not 16px.** |
| h1–h6 | Already sized in globals.css — do not override with custom font-size on headings |

**Performance note:** `backdrop-filter: blur(6px)` on `.card` is expensive. If more than 4 cards are visible simultaneously on mobile (ProblemSection, WhoIsItFor), test on mid-range Android. If frame rate drops, remove backdrop-filter from those specific cards only.

**`useReveal` hook** is at `lib/useReveal.tsx`. Returns `[ref, isVisible]`. Attach ref to section element, add `reveal` class, conditionally add `show` class when isVisible is true. IntersectionObserver threshold: 0.2, rootMargin: "0px 0px -50px 0px".

---

## 5. Page Structure — 18 Sections

---

### Section 01 · Navbar
**File:** `Navbar.tsx` · **Status:** EXISTS — minor update

**Purpose:** Persistent orientation anchor. Glassmorphism after 100px scroll.

**Layout:**
- Left: TarunSpeaks logo (`/public/tarunspeaks logo resized 320x80.png`, 160×40)
- Center: Glass pill — nav links: Curriculum, Instructor, Testimonials, Pricing, FAQ
- Right: "Apply for Batch 14" blue pill button

**Updates needed:**
- Change CTA text from "Apply Now" to "Apply for Batch 14"
- CTA links to `#apply` (application form at bottom of page)

---

### Section 02 · Hero
**File:** `components/ui/hero` (shadcn-style) · **Status:** UPDATE

**Purpose:** Visitor decides in 3 seconds whether to stay. Must name their exact problem and promise the transformation.

**LAYOUT DECISION — Full-width text, no image:**
An action photo of Tarun on stage is not currently available. A standard headshot next to "Stop learning in fragments" creates a tone mismatch — the copy is kinetic, a headshot is static.

- **REMOVE** the 55/45 split layout
- **Go full-width centred text** — editorial style, same as GrowthX hero
- Tarun's headshot moves to InstructorCard section
- Max width: 900px centred

**When an action photo becomes available:** Reintroduce 55/45 split. Portrait crop (3:4 ratio, tall not square). Remove glass frame. Sit image directly on dark bg with bottom vignette. Never use a standard headshot in the hero.

**Batch badge (top-centred):**
```
● Batch 14  ·  Now Enrolling  ·  30 Seats Only
```
Green pulse dot, pill border, white/70 text

**Headline:**
```
Stop learning marketing in fragments.
Start operating at a systems level.
```
Line 1: white. "systems level" in #00bf63 gradient.

**Sub-copy:**
> A 90-day, cohort-based, AI-first career accelerator by Tarun Makhija — built from real campaigns, real failures, and real market experience. Not a course. A system.

**Trust micro-row (below sub-copy, centred):**
`✦ 28,300+ trained  ✦ 300+ brands  ✦ BW Marketing 30 Under 30`
— white/45, 13px

**CTAs (centred row):**
- Primary: "Apply for Batch 14 →" — blue pill, shadow glow, links to `#apply`
- Secondary: "Download Syllabus" — ghost outline pill, links to `/syllabus.pdf`

**Background:** black + blue radial gradient from centre-top + grain noise overlay at 3% opacity

**Updates needed:**
- Replace headline with transformation copy above
- Remove 55/45 split — full-width centred layout
- Batch badge: Batch 14
- Primary CTA: "Apply for Batch 14 →"
- Trust micro-row: 28,300+ (not 27,000)

---

### Section 03 · Trust Strip
**File:** `TrustStripWithReveal.tsx` · **Status:** UPDATE — stats only

**Stats (updated from Company Profile 2026):**

| Stat | Value |
|------|-------|
| Individuals Trained | 28,300+ |
| Training Sessions Conducted | 2,100+ |
| Brands Trained & Consulted | 300+ |

**Behaviour:** Count-up animation on scroll (react-countup). Green numbers, white labels. Animated gradient bg already implemented.

**Updates needed:**
- Change 27,000+ → 28,300+
- Change 1,800+ → 2,100+
- **Delete** `TrustStrip.tsx` and `TrustStripWithGradient.tsx` — use only `TrustStripWithReveal.tsx`

---

### Section 04 · Problem Section
**File:** `ProblemSection.tsx` · **Status:** ⚠️ NEW COMPONENT

**Purpose:** Most important missing section. Name the pain so precisely the reader thinks "this is about me." Cannot sell solution before the person feels the problem.

**Section tag:** "The problem"

**Headline:**
```
Most people learn marketing in pieces.
```

**Subtext (below headline):**
> A little SEO. Some Reels. A Meta ads tutorial. Random AI tools. But real businesses don't grow in fragments — they grow through connected systems.

**Three pain cards — 3-column grid desktop, 1 column mobile:**

| # | Title | Quote copy |
|---|-------|-----------|
| 01 | The fragment trap | "You've consumed 100 pieces of content about marketing. You still can't build a campaign from scratch." |
| 02 | No system, no clarity | "You know tools. You don't know how they connect. Strategy feels like guesswork and you can't explain your decisions." |
| 03 | Can't measure results | "You post, you run ads, you try things. But you don't know what's working or why. Every month feels like starting over." |

**Card design:**
- Use `.card` class from globals.css
- Number label: 11px, uppercase, white/20
- Title: bold white
- Quote: italic, white/50, `border-left: 2px solid rgba(21,38,180,0.5)`, padding-left 14px
- **NO hover effects** — pain cards are mirrors, not interactive elements

**Transition line (centred below cards):**
> That's the difference between a content executor and a strategic marketer. **RMDM closes that gap — in 90 days.**

**Animation:**
- Use `useReveal` hook on section element — `.reveal` / `.reveal.show` classes
- Card stagger: CSS `animation-delay` inline (0ms, 120ms, 240ms) — no Framer Motion needed

---

### Section 05 · Who This Is For
**File:** `WhoIsItFor.tsx` · **Status:** ⚠️ NEW COMPONENT

**Purpose:** Self-identification moment. The visitor must see themselves before you pitch anything.

**Section tag:** "Who this is for"

**Headline:** "This cohort is built for four kinds of people."

**Sub-label:** "If you see yourself below — you're exactly who we designed this for." — white/45

**2×2 grid of persona cards — desktop, 1 column mobile:**

**Card design — critical details:**
- Base: `.card` class
- Override border-left: `border-left: 3px solid #1526b4`
- Border-radius: `border-radius: 0 20px 20px 0` — NO radius on left side (single-sided border rule)
- On hover: `border-left-color` transitions to `#00bf63` — self-identification signal. `transition: border-left-color 200ms ease`
- Structure per card: label (uppercase blue 11px) → title (bold white ~20px) → divider (1px white/6) → empathy copy (italic white/45) → divider → solution pivot (white/70 with key phrase in #00bf63)
- **Empathy copy BEFORE solution pivot** — non-negotiable. Lead with the mirror, then the answer.
- No CTA inside cards — identification phase only

**Four persona cards — exact copy:**

**Card 1 — Students & freshers**
- Title: "You're about to enter the industry."
- Empathy: "Every job posting asks for 2 years of experience. You have zero. You're applying anyway and getting ignored."
- Pivot: "RMDM gives you the **portfolio and campaign experience** to skip that wall entirely."

**Card 2 — Working professionals**
- Title: "You're doing marketing but not leading it."
- Empathy: "You execute tasks. But when someone asks you to build a strategy from scratch, you freeze. You've never been taught the system."
- Pivot: "RMDM gives you the **strategic framework** to go from executor to the person who owns the room."

**Card 3 — Freelancers**
- Title: "You win clients on instinct."
- Empathy: "You deliver good work but you can't explain why it works. Clients sense it and push back on your rates."
- Pivot: "RMDM gives you the **language and system** to charge what your work is actually worth."

**Card 4 — Entrepreneurs**
- Title: "You're doing your own marketing."
- Empathy: "You post. You boost. You try things. Nothing compounds. You can't afford to hire a CMO but you need one."
- Pivot: "RMDM teaches you to **think like a CMO** — not just a person who makes content."

**Animation:** useReveal on section, CSS animation-delay stagger 0ms / 100ms / 200ms / 300ms

---

### Section 06 · What You'll Get
**File:** `WhatYoullGetCards.tsx` · **Status:** EXISTS — minor copy update

**Note:** Currently imported as `Outcomes` in `page.tsx`. Swap import to `WhatYoullGetCards`.

**Three cards:**

| Card | Title | Body |
|------|-------|------|
| 1 | Portfolio-Ready Projects | Content strategies, content calendars, and full campaigns you built yourself. Things you can show in an interview or to a client. |
| 2 | 1:1 Mentorship & Feedback | Direct access to Tarun and the team. Real feedback on your actual work — not generic advice. Direction when you are stuck. |
| 3 | Job Access + Community | 100% job and internship support. Access to the TarunSpeaks Jobs Community — real verified opportunities from top brands and agencies. |

**Updates needed:**
- Swap import in page.tsx from Outcomes to WhatYoullGetCards
- Update card copy to match above
- Ensure icon files exist at `/public/icons/target.svg`, `mentor.svg`, `job.svg` — use emoji fallback if not

---

### Section 07 · Learning Journey
**File:** `LearningJourney.tsx` · **Status:** UPDATE — stage names and outcomes

**Five stages — real names from brochure:**

| Stage | Title | Outcome tagline |
|-------|-------|----------------|
| Stage 1 | Build Your Marketing Foundation | Stop thinking like a content executor. Start thinking like a strategist. |
| Stage 2 | Master Organic Growth | You understand how to build attention intentionally. |
| Stage 3 | Run Performance-Driven Campaigns | You connect content to conversions. |
| Stage 4 | Control the Conversation | You manage not just growth, but trust. |
| Stage 5 | Go AI-First | You operate like a 2026 marketer — faster, sharper, system-driven. |

**Design:** Horizontal timeline desktop, vertical mobile. Stage number in blue box, title white, outcome tagline in green. Connector line white/20.

---

### Section 08 · Curriculum
**File:** `Curriculum.tsx` · **Status:** UPDATE — replace all content

**Structure:** 5 stage accordions + 1 Bonus accordion. First accordion open by default. Each shows outcome tagline in green when expanded.

**Stage 1 — Build Your Marketing Foundation**
- What marketing really means (beyond buzzwords)
- 4Ps & marketing types
- Branding: colours, fonts, positioning
- Build your own brand name, logo & tagline
- Copywriting basics & design principles that convert

**Stage 2 — Master Organic Growth**
- Instagram, Facebook & LinkedIn content strategies
- Reels, Stories, Lives, Posts & platform algorithms
- Influencer marketing — strategy to execution
- Video marketing: tools, frameworks & formats
- Moment marketing + content repurposing
- Social media tools & platform comparison

**Stage 3 — Run Performance-Driven Campaigns**
- SEO foundations: on-page, off-page, tools (SEMrush, Ahrefs)
- SEM strategy & Google Ads campaign creation
- Meta Ads — Facebook & Instagram
- A/B testing, audience targeting & high-converting ad copy
- Performance marketing metrics & dashboards

**Stage 4 — Control the Conversation**
- Social listening vs monitoring
- Tools: Brand24, Google Alerts, SimilarWeb
- Sentiment analysis & crisis response
- Content distribution: organic + paid funnels
- Building repeatable visibility systems

**Stage 5 — Go AI-First**
- AI-led marketing strategy with ChatGPT & NotebookLM
- Designing an AI-powered content engine
- Building your personal brand in the era of AI
- Launching a lean, smart AI-first agency
- Client outreach, proposal creation & landing pages
- Turning followers into clients or career leads

**Bonus — Guest Masterclasses (7+ sessions):**
- Akshay Gurnani — Co-founder & Former CEO, Schbang
- Bhawna Sethi — Founder, Letsinfluence.io
- Vanshikaa Oberoi — Founder & Chief Brand Strategist, The Fingerprint Labs
- Deep Mehta — Co-founder, Digichefs
- Pranita Bajoria — @Mad.AdWoman, 76K+ on Instagram
- Divyank Jain — Co-founder, The Wise Idiot
- Nandikaa Sachdev — Brand Marketing, Pilgrim (ex-Nua, FCBKinnect)
- Piyush Kukreja — Podcast Host, CEO, Piyush Kukreja Digital
- Neel Mehra — Advisor-in-Chief, Avinser Advisory
- Apeksha Gupta — Co-founder, Foldr.studio
- Arpit Soni — Creative Director (Google, Disney+ Hotstar)
- Rishi Nagar — Founder & CEO, SuperShyft

**Footer note:** "70+ hours live (weekends only) · 30+ hours AI-driven implementation · Limited to 30 members"

---

### Section 09 · Tools Grid
**File:** `ToolsGrid.tsx` · **Status:** UPDATE — replace tool list

**Full tools list from brochure:**
ChatGPT · NotebookLM · Copy.ai · Google Analytics · SEMrush · Ahrefs · SimilarWeb · HypeAuditor · SocialBlade · Google Ads · Meta Ads Manager · Canva · Yoast SEO · Bitly · Pingdom · Typeform · Pexels · NotJust Analytics

**Grid:** 6 columns desktop, 4 tablet, 3 mobile. Each tile: tool name, emoji/icon, card surface bg, hover border-blue.

---

### Section 10 · Scarcity Bar
**File:** `CountdownScarcity.tsx` · **Status:** EXISTS — ADD to page.tsx (currently missing)

**Purpose:** Urgency trigger between proof and pricing.

**Copy:**
- Large number: seats remaining (from `NEXT_PUBLIC_RESERVED`)
- Label: "Seats remaining for Batch 14"
- Progress bar: % of 30 seats reserved
- Sub-label: "X of 30 seats already reserved — cohort closes when full"

**Updates needed:** Add `<CountdownScarcity />` to `page.tsx` between AlumniLogos and Pricing.

---

### Section 11 · Instructor Card
**File:** `InstructorCard.tsx` · **Status:** UPDATE

**Note:** Remove the container wrapper div currently wrapping this in `page.tsx`:
```tsx
// REMOVE this wrapper:
<section className="container mx-auto px-6 lg:px-24 py-16">
  <InstructorCard />
</section>
// Let InstructorCard handle its own padding
```

**Headline:** "Tarun is not just a trainer — he's a marketing practitioner."

**Bio copy:**
> 10+ years of hands-on experience building brands, designing campaigns, and leading strategy across sectors. Chief Educator & CEO of TarunSpeaks. Co-founded Big Mouth Digital & Media. Every session in RMDM is built from real campaign work — not textbooks.

**Credential badges (4):**

| Badge | Label |
|-------|-------|
| BW Businessworld | BW Marketing 30 Under 30, 2023 |
| Graphy by Unacademy | Top 50, October 2021 |
| Spotify / Anchor | Voice of Anchor |
| Pepper Content | The Next Big Creator, 2021 |

**Stats:** 28,300+ Trained · 300+ Brands · BW 30 Under 30 · 10+ Years

**Updates needed:**
- Stat: 27K → 28,300+
- Bio: replace generic copy with practitioner-focused copy above
- Add credential badge row

---

### Section 12 · Mentors Grid
**File:** `MentorsGrid.tsx` · **Status:** UPDATE — replace all placeholder content

**Headline:** "Top 1% Mentors from Tarun's Network"

**12 mentors — real data:**

| Name | Role & Company |
|------|---------------|
| Akshay Gurnani | Co-founder & Former CEO, Schbang |
| Vanshikaa Oberoi | Founder & Chief Brand Strategist, The Fingerprint Labs |
| Bhawna Sethi | Founder, Letsinfluence.io |
| Pranita Bajoria | @Mad.AdWoman · 76K+ on Instagram |
| Divyank Jain | Co-founder, The Wise Idiot |
| Nandikaa Sachdev | Brand Marketing, Pilgrim · Ex-Nua, FCBKinnect |
| Deep Mehta | Co-founder, Digichefs |
| Apeksha Gupta | Co-founder, Foldr.studio |
| Piyush Kukreja | Podcast Host & CEO, Piyush Kukreja Digital |
| Neel Mehra | Advisor-in-Chief, Avinser Advisory |
| Arpit Soni | Creative Director · Google, Disney+ Hotstar |
| Rishi Nagar | Founder & CEO, SuperShyft |

**Card design:** Name (bold white), Role (white/60), Company (white/40). Initials circle placeholder (blue bg, white text) until real photos are provided. Grid: 3 columns desktop, 2 tablet, 1 mobile.

---

### Section 13 · Testimonials
**File:** `Testimonials.tsx` · **Status:** UPDATE — replace fabricated quotes with real ones

**Three real quotes from brochure:**

**Ravi — Ad Factors PR**
> "All students, freshers, small and medium size business owners and anyone interested in entering the digital marketing field — go ahead and take this course. His sessions are not only informative but also very power-packed. You will not regret it at all."

**Ritika — Roongta Capital**
> "It was all worth it. I would really recommend this course for all those who want to pursue or learn digital marketing. Anyone can join this course — businessmen, homemakers, students etc."

**Fenil — White Rivers Media**
> "All sessions were interactive with insightful knowledge. Every topic was explained with great examples that one could easily understand. It's an incredible course to kickstart your career in Digital Marketing."

**Design updates:**
- Replace emoji avatar with initials circle (first letter of name, blue bg)
- Show employer name below person's name — this is the trust element
- Keep existing carousel structure

---

### Section 14 · Alumni Companies
**File:** `AlumniLogos.tsx` · **Status:** UPDATE

**Headline:** "Where our alumni work"

**Six companies:**
Nykaa · ICICI Bank · ITC · Disney+ Hotstar · White Rivers Media · Pilgrim

Logo files to add at `/public/alumni/` — use text-only tiles until available.

**Disclaimer (small text below grid):**
> Previous achievements do not ensure future results. Securing employment or internships is contingent upon individual qualifications, experience, and personal effort.

---

### Section 15 · Pricing
**File:** `Pricing.tsx` · **Status:** UPDATE

**Price display:** ₹97,000 (inclusive of all taxes) — large, white, bold. Sub-label: "One-time payment · Lifetime access to materials"

**Scholarship tiers:**

| Tier | Score Required | Amount |
|------|---------------|--------|
| Tier 1 | 85%+ on eligibility test | ₹7,000 off |
| Tier 2 | 95%+ on eligibility test | ₹12,000 off |
| Tier 3 | 100% on eligibility test | ₹17,000 off |

**What's included:**
- 70+ hours of live weekend sessions
- 30+ hours of AI-powered recorded content
- 1:1 guidance from Tarun and the team
- Access to 12 industry mentor masterclasses
- Portfolio projects — content strategies, calendars, campaigns
- 100% job and internship support
- TarunSpeaks Jobs Community — verified opportunities
- Lifetime access to all course materials

**CTAs:**
- Primary: "Apply for Batch 14 →" — links to `#apply`
- Secondary: "View EMI Plans" — opens EMIModal

**Important:** Stripe checkout is NOT triggered from this section. Payment details sent manually after acceptance.

**Urgency:** Countdown timer to application deadline. "Applications close once 30 candidates are accepted."

**Updates needed:**
- Primary CTA: "Pay Now" → "Apply for Batch 14 →"
- Remove Stripe trigger from primary CTA
- Add scholarship tiers
- Update countdown to application deadline

---

### Section 16 · FAQ
**File:** `FAQ.tsx` · **Status:** UPDATE — replace all questions

**Six objection-busting FAQs:**

**Q: What does the application process involve?**
You fill a short form with your background and goals. Our team calls you within 48 hours for a 15–20 minute conversation to understand if RMDM is the right fit for you right now. If accepted, you receive a confirmation and payment details. Not every applicant is accepted — we want each cohort to be the right mix of people.

**Q: Do I need prior experience in marketing?**
No. RMDM starts from first principles before building into strategy and execution. We've had students who had never run a single ad come out managing full campaigns. What matters more is your commitment and clarity of goal — which is why we have the interview.

**Q: I work full-time. Can I manage weekend sessions?**
Yes — that's exactly what the weekend format is designed for. Live sessions happen only on Saturday and Sunday, typically 2–3 hours each. You also get 30 hours of recorded content to catch up at your own pace if you miss a session.

**Q: What makes this different from a ₹5,000 online course?**
The cohort size (30 people), the live format, the 1:1 feedback, the application process, and the fact that Tarun has worked with 300+ real brands. You're not watching videos — you're building real work with a practitioner in the room, alongside peers who were selected for the same reason you were.

**Q: Will I get a certificate?**
Yes. Upon completion you receive a TarunSpeaks certificate you can add to your LinkedIn profile and resume.

**Q: Is there a scholarship or EMI option?**
Yes to both. Merit-based scholarships up to ₹17,000 are available based on an eligibility test score. EMI plans at 0% interest are available for 3, 6, 9, and 12 months. Both are discussed during or after your interview call.

---

### Section 17 · Application Form
**File:** `FinalCTA.tsx` · **Status:** ⚠️ NEW COMPONENT — id="apply"

**Purpose:** Bottom-of-page conversion. Entry point to the application funnel. Short form that collects enough for a meaningful 15-minute interview.

**Three UI states — useState: 'form' | 'loading' | 'success'**

#### State 1 — Form (default)

**Section tag:** "Apply" (centred)

**Headline (centred):**
```
Ready to stop learning in fragments?
Apply for Batch 14. We'll be in touch within 48 hours.
```

**Process strip (centred, above form):**
```
[1] Apply  ——  [2] Interview call  ——  [3] Decision
```
Step 1 active (blue), Steps 2–3 future (dim white). Connected by 1px white/10 line.

**Form card:** `.card` class, max-width 580px centred, padding 36px

**Form fields in order:**

| Field | Type | Notes |
|-------|------|-------|
| Full name + Phone number | text + tel, two columns | Both required. Phone used for interview call. |
| Email address | email | Required. Full width. |
| I am currently a | select | Required. Options: Student / Working Professional / Freelancer / Entrepreneur / Other |
| What do you want to be able to do after RMDM? | textarea | Required. maxlength 200. Live char counter "X / 200" bottom right. |
| How did you hear about us? | select | Not required. Options: Instagram / LinkedIn / Word of mouth / Google / Other |

**Input styling:**
- Background: rgba(255,255,255,0.05)
- Border: 1px solid rgba(255,255,255,0.10)
- Border-radius: 8px (not 20px — tighter than cards)
- Padding: 11px 14px
- Focus: border-color #1526b4 + bg rgba(21,38,180,0.06)
- Text: white/80 value, white/30 placeholder

**Submit button:** Full width, rounded-full, bg #1526b4, padding 15px 24px, font-weight 700. Text: "Submit application →"

**Below form:**
- Small white/25: "Applications are reviewed manually. Not everyone is accepted — we want each cohort to be the right fit."
- White/30 underline link: "Download the syllabus first →" → /syllabus.pdf

#### State 2 — Loading
- Disable all inputs and button
- Button shows spinner + "Submitting..." text
- No layout shift

#### State 3 — Success (fade in, replaces form)

Green-tinted card:
- bg: rgba(0,96,58,0.12)
- border: 1px solid rgba(0,191,99,0.25)
- Title: "Application received."
- Body: "We've got your details. Someone from the TarunSpeaks team will call you within 48 hours."

Three numbered steps inside dark inner card:
1. **Check your phone.** We'll call the number you provided — usually within 24–48 hours on working days.
2. **15-minute conversation.** No prep needed. We just want to understand your goals and whether RMDM is the right fit right now.
3. **You'll hear back.** Accepted candidates receive payment details and a confirmed seat. All others get honest feedback and next steps.

#### Notion Integration — update /api/leads

Create a Notion database called **"RMDM Applications"** with these properties:

| Property | Notion type | Notes |
|----------|------------|-------|
| Name | Title | Applicant full name |
| Email | Email | |
| Phone | Phone number | Interview contact |
| Role | Select | Student / Working Professional / Freelancer / Entrepreneur / Other |
| Goal | Rich text | Textarea response |
| Source | Select | Instagram / LinkedIn / Word of mouth / Google / Other |
| Status | Select | Default: "Applied" · Team updates: "Called" / "Accepted" / "Rejected" |
| Applied at | Date | Auto-set to submission timestamp |
| Batch | Select | Default: "Batch 14" |

- Env var: `NOTION_API_KEY` — Notion integration token
- Env var: `NOTION_DATABASE_ID` — ID from database URL
- On successful Notion write: return 200
- On failure: return 500 with error message
- Local dev fallback: keep `seed/leads.json` write (check `NODE_ENV !== 'production'`)

**Stripe note:** NOT triggered from any public CTA. Stripe route stays in codebase for future use only.

---

### Section 18 · Footer
**File:** `Footer.tsx` · **Status:** UPDATE

**Three columns:**
- Contact: teamtarunspeaks@gmail.com · Ansh: +91 7565 900 500 · Tarun: +91 977 022 3646
- Quick links: Curriculum · Instructor · Testimonials · Pricing · FAQ
- Social: www.tarunmakhija.in · LinkedIn · Instagram · YouTube

**Copyright:** © 2026 TarunSpeaks. All rights reserved.

---

## 6. Page Assembly — app/page.tsx

**Two bugs in current page.tsx to fix first:**
1. `Outcomes` is imported — swap to `WhatYoullGetCards`
2. `InstructorCard` is wrapped in a custom container div — remove it, let the component handle its own padding
3. `CountdownScarcity` is missing — add between AlumniLogos and Pricing

**Target assembly order:**

```tsx
import Navbar from "@/components/Navbar"
import { Hero } from "@/components/ui/hero"
import dynamic from "next/dynamic"
const TrustStripWithReveal = dynamic(() => import("@/components/TrustStripWithReveal"), { ssr: false })
import ProblemSection from "@/components/ProblemSection"        // NEW
import WhoIsItFor from "@/components/WhoIsItFor"                // NEW
import WhatYoullGetCards from "@/components/WhatYoullGetCards"  // was Outcomes
import LearningJourney from "@/components/LearningJourney"
import Curriculum from "@/components/Curriculum"
import ToolsGrid from "@/components/ToolsGrid"
import CountdownScarcity from "@/components/CountdownScarcity"  // was missing
import InstructorCard from "@/components/InstructorCard"
import MentorsGrid from "@/components/MentorsGrid"
import AlumniLogos from "@/components/AlumniLogos"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"                    // NEW
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        <Hero />
        <TrustStripWithReveal />
        <ProblemSection />
        <WhoIsItFor />
        <WhatYoullGetCards id="outcomes" />
        <LearningJourney id="journey" />
        <Curriculum id="curriculum" />
        <ToolsGrid id="tools" />
        <InstructorCard id="instructor" />
        <MentorsGrid id="mentors" />
        <CountdownScarcity />
        <Testimonials id="testimonials" />
        <AlumniLogos id="alumni" />
        <Pricing id="pricing" />
        <FAQ id="faq" />
        <FinalCTA id="apply" />
      </main>
      <Footer />
    </>
  )
}
```

---

## 7. Environment Variables

| Variable | Value / Notes |
|----------|--------------|
| NEXT_PUBLIC_COHORT_START | ISO date string — e.g. 2026-04-28T00:00:00Z |
| NEXT_PUBLIC_TOTAL_SEATS | 30 |
| NEXT_PUBLIC_RESERVED | Number of seats already reserved — update in real time |
| NEXT_PUBLIC_PRICE | 97000 |
| NEXT_PUBLIC_CURRENCY | INR |
| NOTION_API_KEY | Notion integration token from Notion Developers dashboard |
| NOTION_DATABASE_ID | ID of "RMDM Applications" database from Notion URL |
| STRIPE_SECRET | Kept in codebase — not wired to any public CTA |
| STRIPE_WEBHOOK_SECRET | Kept in codebase — not wired to any public CTA |

---

## 8. Assets Checklist

| Asset | Path | Status |
|-------|------|--------|
| TarunSpeaks logo | /public/tarunspeaks logo resized 320x80.png | EXISTS |
| Tarun headshot | /public/tarun-hero.png | EXISTS — used in InstructorCard only |
| Syllabus PDF | /public/syllabus.pdf | TO ADD |
| Tool icons | /public/tools/*.svg | TO ADD — emoji fallback for now |
| Alumni logos | /public/alumni/*.svg | TO ADD — text tile fallback for now |
| Mentor avatars | /public/mentors/*.jpg | TO ADD — initials circle fallback |
| What You'll Get icons | /public/icons/target.svg, mentor.svg, job.svg | TO ADD |

---

## 9. Build Priority Order

### P0 — Fix and ship immediately

1. Fix `page.tsx`: swap Outcomes → WhatYoullGetCards, remove InstructorCard wrapper, add CountdownScarcity
2. Update Hero: transformation copy, remove image, full-width centred, "Apply for Batch 14" CTA, Batch 14 badge
3. Update TrustStrip: 28,300+ · 2,100+. Delete TrustStrip.tsx and TrustStripWithGradient.tsx
4. Update FAQ: replace all 6 questions with objection-busting versions above

### P1 — Build next

5. Build ProblemSection.tsx — pain articulation (Section 4 + Section 5.1 spec)
6. Build WhoIsItFor.tsx — self-identification (Section 5 + Section 5.2 spec)
7. Update Curriculum.tsx — replace with real 5-stage content + bonus mentors
8. Update MentorsGrid.tsx — replace placeholders with 12 real mentors

### P2 — Content updates

9. Update LearningJourney.tsx — real stage names and outcome taglines
10. Update Testimonials.tsx — real quotes + employer attribution
11. Update InstructorCard.tsx — real bio, 28,300+ stat, credential badges, remove wrapper in page.tsx
12. Update AlumniLogos.tsx — 6 real company names, add disclaimer
13. Update Pricing.tsx — CTA to "Apply for Batch 14", scholarship tiers, decouple Stripe

### P3 — Polish and wire

14. Build FinalCTA.tsx — application form with 3 UI states (Section 5.3 spec)
15. Update /api/leads — add Notion integration (NOTION_API_KEY + NOTION_DATABASE_ID)
16. Add NOTION_API_KEY and NOTION_DATABASE_ID to .env.local and Vercel env vars
17. Test full flow end-to-end: form → Notion database → success state
18. Add action photo to hero when available (see Section 4, S02)

---

## 10. Copy Rules

1. **Primary CTA is always:** "Apply for Batch 14" — never "Buy Now", "Pay Now", "Enrol", "Register"
2. **Always say "cohort"** — never "course", "class", or "programme" in hero/problem sections
3. **Always say "system" or "accelerator"** — never "course" in hero or problem sections
4. **Always say "Batch 14"** — never "next batch" or "upcoming cohort"
5. **Always say "28,300+"** — never "27,000+" or "27K+"
6. **Always say "accepted" / "selected"** — never "enrolled" or "signed up"
7. **Never use "learn" without an outcome** — "learn X so you can Y"
8. **Never promise a job** — say "job assistance" and "access to opportunities"
9. **Never mention payment before the interview step** in any section heading or CTA
10. **Sentences under 20 words** — this is a landing page, not an essay
11. **Numbers beat adjectives** — "100 hours" beats "intensive", "30 seats" beats "exclusive"

---

## 11. Design Reference Notes

### From GrowthX.club
- Dark background with near-zero chrome — content is the design
- Strong single-line editorial headline — short, direct, present tense
- Minimal section headers — bold label, no decoration
- Very generous whitespace between sections — breathing room is a luxury signal
- Mobile-first — everything stacks cleanly

### From GrowthSchool.io
- Outcome-first framing — "what you'll be able to do" before "what we teach"
- Proof woven throughout, not just in one testimonials block
- Clean pill CTAs in nav

### Brand-specific for RMDM
- Use #1526b4 blue sparingly — accent, not background fill
- Green (#00bf63) is for outcomes, success signals, stats — not CTAs
- Tarun's photos: always engaging with audience, never studio headshots

---

*End of Document — RMDM Landing Page PRD v3 FINAL · TarunSpeaks*
