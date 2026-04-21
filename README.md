# RMDM Landing Page - TarunSpeaks

A premium one-page Next.js 14 landing page for the "Roadmap to Digital Marketing 2.0" course by TarunSpeaks.

## 📋 Content Source

**Important:** The course copy, curriculum, outcomes, mentors, testimonials, and pricing information used in this landing page were sourced from the PDF document "Roadmap to Digital Marketing 2.0". This includes:

- Course curriculum and module structure
- Learning outcomes and benefits
- Mentor information
- Student testimonials (Ravi, Ritika, Fenil)
- Pricing and scholarship details
- Statistics (27,000+ learners, 1,800+ sessions, 300+ brands)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your Stripe keys:
   ```
   STRIPE_SECRET=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

3. **Add assets to `/public` folder:**
   - `logo-dark.png` → Use "TS NEW LOGO BLUE.png"
   - `logo-white.png` → Use "white logo.png"
   - `tarun-hero.jpg` → Use "tarun.jpg" or "IMG_7262-removebg-preview.png"
   - `syllabus.pdf` → Replace with actual syllabus PDF when available
   - `hashtag.png` → Use #TARUNSPEAKS branding image(s)

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design Tokens

The landing page uses a black-first premium design with the following color tokens:

- **Background:** `#000000` (black)
- **Primary Text:** `#FFFFFF` (white)
- **Secondary Text/Success:** `#00bf63` (green)
- **Accent/Aesthetics:** `#1526b4` (blue)

These are configured in `tailwind.config.ts` and can be customized there.

## 📁 Project Structure

```
rmdm-landing-tarunspeaks/
├── app/
│   ├── api/
│   │   ├── create-checkout-session/  # Stripe payment integration
│   │   ├── webhook/                  # Stripe webhook handler
│   │   └── leads/                    # Lead form submission
│   ├── success/                      # Payment success page
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout with SEO
│   └── page.tsx                      # Main landing page
├── components/
│   ├── Navbar.tsx                    # Sticky navigation
│   ├── Hero.tsx                      # Hero section with CTA
│   ├── TrustStrip.tsx                # Trust indicators
│   ├── Outcomes.tsx                  # Course outcomes
│   ├── LearningJourney.tsx          # 5-stage journey
│   ├── Curriculum.tsx                # Course modules
│   ├── ToolsGrid.tsx                 # Marketing tools
│   ├── InstructorCard.tsx            # Instructor profile
│   ├── MentorsGrid.tsx               # Mentor team
│   ├── AlumniLogos.tsx               # Company logos
│   ├── Testimonials.tsx              # Student reviews
│   ├── Pricing.tsx                   # Pricing section
│   ├── EMIModal.tsx                  # EMI payment options
│   ├── CountdownScarcity.tsx         # Urgency indicators
│   ├── FAQ.tsx                       # Frequently asked questions
│   └── Footer.tsx                    # Footer with contact info
├── public/                           # Static assets
└── seed/                             # Lead storage (dev only)
```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_COHORT_START` | Cohort start date (ISO format) | `2026-01-10T00:00:00Z` |
| `NEXT_PUBLIC_TOTAL_SEATS` | Total available seats | `30` |
| `NEXT_PUBLIC_RESERVED` | Number of reserved seats | `0` |
| `NEXT_PUBLIC_PRICE` | Course price in paisa/cents | `97000` |
| `NEXT_PUBLIC_CURRENCY` | Currency code | `INR` |
| `STRIPE_SECRET` | Stripe secret key | (required for payments) |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret | (required for webhooks) |

## 💳 Stripe Integration

### Testing Payments

1. **Get test API keys:**
   - Sign up at [Stripe Dashboard](https://dashboard.stripe.com)
   - Go to Developers → API keys
   - Copy your test secret key (starts with `sk_test_`)

2. **Add to environment:**
   ```bash
   STRIPE_SECRET=sk_test_...
   ```

3. **Test checkout:**
   - Use test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any 3-digit CVC

### Testing Webhooks Locally

1. **Install Stripe CLI:**
   ```bash
   # macOS
   brew install stripe/stripe-cli/stripe
   
   # Windows (using Scoop)
   scoop install stripe
   ```

2. **Login to Stripe:**
   ```bash
   stripe login
   ```

3. **Forward webhooks to local server:**
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```

4. **Copy the webhook signing secret** and add it to `.env.local`:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

5. **Trigger test events:**
   ```bash
   stripe trigger checkout.session.completed
   ```

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

3. **Configure Stripe Webhooks:**
   - In Stripe Dashboard → Developers → Webhooks
   - Add endpoint: `https://your-domain.com/api/webhook`
   - Select events: `checkout.session.completed`, `payment_intent.succeeded`
   - Copy webhook signing secret to Vercel environment variables

### Deployment Checklist

- [ ] All environment variables set in production
- [ ] Stripe keys configured (use live keys for production)
- [ ] Webhook endpoint configured in Stripe Dashboard
- [ ] All assets uploaded to `/public` folder
- [ ] Syllabus PDF replaced with actual file
- [ ] Test payment flow end-to-end
- [ ] Test webhook events
- [ ] Verify SEO metadata
- [ ] Check mobile responsiveness
- [ ] Test all form submissions

## 📝 Component Documentation

Each component file includes plain-English comments explaining:
- What the component does
- How it fits into the overall page
- Key features and functionality

This makes it easy for non-developers to understand the codebase structure.

## 🐛 Troubleshooting

### Images not loading
- Ensure all image files are in the `/public` folder
- Check file names match exactly (case-sensitive)
- Verify image formats are supported (PNG, JPG, JPEG)

### Stripe payment not working
- Verify `STRIPE_SECRET` is set in `.env.local`
- Check you're using test keys for development
- Ensure API route is accessible (check browser console)

### Webhook not receiving events
- Verify `STRIPE_WEBHOOK_SECRET` is set
- Check webhook endpoint URL is correct
- Use Stripe CLI for local testing
- Check server logs for errors

## 📄 License

This project is proprietary and confidential.

## 👥 Support

For questions or issues, contact: **teamtarunspeaks@gmail.com**

---

**Note:** This landing page was scaffolded with course content sourced from "Roadmap to Digital Marketing 2.0" PDF document.

