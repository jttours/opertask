# PRD — OperTask Marketing Website

## 1. Feature Overview

Build a 4-page marketing website for OperTask, an AI automation and workflow implementation firm targeting small and mid-sized businesses. The site must establish professional credibility, clearly explain the core offer (Automation Blueprint — $397), and drive two conversion actions: booking a paid Blueprint session or booking a free Workflow Fit Call. The site is built with Next.js 15, Tailwind CSS, and Framer Motion. No CMS, no database, no authentication. Pure static marketing site deployed on Vercel.

---

## 2. Problem Statement

OperTask has no online presence. Potential clients who receive outreach or referrals have nowhere to verify credibility, understand the offer, or book a session. Without a website, the business cannot scale beyond direct personal introductions. The site must work as a 24/7 sales tool that qualifies, informs, and converts visitors without requiring the founder's involvement.

---

## 3. Goals

- Launch a professional, credible website that reflects the OperTask brand identity
- Clearly communicate the Automation Blueprint offer and its value
- Drive bookings via two CTAs: paid Blueprint ($397) and free Workflow Fit Call
- Establish founder credibility through the About page
- Work flawlessly on mobile and desktop
- Load fast (Vercel edge, static pages, no unnecessary JS)

---

## 4. Non-Goals

- No blog or content section at launch
- No case studies or portfolio (added later after first clients)
- No client portal or authentication
- No CMS — all content is hardcoded in components
- No contact form — bookings go through Calendly only
- No analytics integration at launch (added later)
- No multi-language support

---

## 5. User Stories

- As a potential client referred by word of mouth, I want to visit the website and immediately understand what OperTask does and who it is for, so I can decide whether to book a call.
- As a small business owner with admin pain, I want to see the specific workflows OperTask automates, so I can recognize my own problems in the offer.
- As a skeptical buyer, I want to read about the founder's background, so I can trust that the person delivering the work understands my business.
- As a ready-to-buy visitor, I want to book the Automation Blueprint directly with payment, so I can start immediately.
- As a not-yet-ready visitor, I want to book a free 20-minute call to ask questions first, so I can lower my risk before committing $397.

---

## 6. Functional Requirements

### Navigation
- FR1: Sticky top navigation bar visible on all pages on scroll
- FR2: Nav contains: OperTask logo (left), links to Blueprint and About (center), primary CTA button "Book Blueprint" (right)
- FR3: On mobile, nav collapses to a hamburger menu
- FR4: Nav CTA button links to the booking page

### Home Page (`/`)
- FR5: Hero section with headline, subheadline, primary CTA button, secondary text link
- FR6: Primary CTA: "Book an Automation Blueprint — $397" (links to `/booking`)
- FR7: Secondary CTA text link: "Not ready? Start with a free Workflow Fit Call →" (links to `/booking#fit-call`)
- FR8: Problem section listing 5 specific pain points as styled items with ✗ prefix
- FR9: Blueprint process section showing all 5 steps: Map, Identify, Score, Roadmap, Walkthrough — each with a number, title, and one-line description. Steps animate in sequentially on scroll.
- FR10: Tools section — a horizontal row of logos/names of tools OperTask works with: Make.com, HubSpot, QuickBooks, Monday.com, Zapier, Shopify, Gmail
- FR11: Industries section — framed as social proof: "Teams across these industries use OperTask" with 6 industry badges: Accounting & Bookkeeping, Travel & Tourism, E-commerce, Professional Services, Sales Teams, Operations-Heavy SMBs
- FR12: Second CTA block (after industries): both CTAs visible — primary button + secondary text link
- FR13: Footer with logo, tagline, links to Blueprint / About / Booking, and copyright line

### Automation Blueprint Page (`/blueprint`)
- FR14: Hero with page title "Automation Blueprint" and one-paragraph description of the offer
- FR15: "What you receive" section — checklist of 5 deliverables matching the Blueprint process steps
- FR16: The 5-step process displayed as a vertical timeline with step number, title, and 2-sentence description for each
- FR17: Pricing block: "$397" prominently displayed, "Full fee credited toward your implementation project" in a highlighted callout
- FR18: Social proof line: "Personally delivered by our founder — you will not be handed off to a junior or a template."
- FR19: Single booking CTA: "Book your Automation Blueprint — $397" linking to `/booking`
- FR20: Secondary text link: "Prefer to ask questions first? Book a free Workflow Fit Call →" linking to `/booking#fit-call`

### About Page (`/about`)
- FR21: Founder name, title, and professional photo placeholder (shows a styled placeholder box until real photo is added)
- FR22: 3-paragraph bio covering: professional background (accounting, travel ops, CRM, automation tools), what led to founding OperTask, and personal approach to client work
- FR23: Key line displayed prominently: "Before OperTask, I spent years inside accounting, travel operations, and e-commerce businesses — which means I understand the actual workflows your team runs daily, not just the theory."
- FR24: "Tools I work with" section — same tools row as homepage
- FR25: CTA at bottom: "Ready to work together? Book an Automation Blueprint →" linking to `/booking`

### Booking Page (`/booking`)
- FR26: Minimal page — no main navigation links, only OperTask logo
- FR27: Two booking options displayed as cards side by side (stacked on mobile):
  - Card 1 (primary): "Automation Blueprint — $397" with description and Calendly embed
  - Card 2 (secondary): "Workflow Fit Call — Free · 20 minutes" with description and Calendly embed
- FR28: Card 1 anchor: `id="blueprint"`, Card 2 anchor: `id="fit-call"` — so direct links scroll to the right card
- FR29: One trust line below both cards: "Every Blueprint is personally delivered by our founder."
- FR30: Calendly embeds use inline embed (not popup) so the booking form is visible immediately

### Design System
- FR31: Color tokens match brand guide exactly:
  - `--bg: #0F1419` (page background)
  - `--bg-2: #141A21` (card/surface)
  - `--bg-3: #1F2630` (secondary surface)
  - `--ink: #E6E5DC` (primary text)
  - `--ink-2: #A8ADA3` (secondary text)
  - `--ink-3: #6B7785` (muted/metadata)
  - `--accent: #88C0A8` (mint — primary accent)
- FR32: Fonts loaded from Google Fonts: JetBrains Mono (500, 700) for headings/wordmark, Work Sans (400, 500, 600) for body copy
- FR33: The letter "O" in the OperTask wordmark always renders in `--accent` (mint), the rest in `--ink`
- FR34: Framer Motion used for: scroll-triggered section entrances, Blueprint process step sequential reveal, hero text entrance
- FR35: All pages are fully responsive — mobile breakpoint at 768px

---

## 7. Data Requirements

All content is static — hardcoded in React components. No external data sources, APIs, or databases required at launch.

Content to be hardcoded:
- All page copy (hero, problem points, process steps, bio text)
- Tool names and any SVG icons/logos
- Industry badge labels
- Pricing ($397)
- Calendly embed URLs (placeholder until real Calendly account is created)

---

## 8. UI/UX

**Design system:** Dark-first. Background `#0F1419`. Accent mint `#88C0A8`. Typography JetBrains Mono for display, Work Sans for prose. See brand guide: `/Users/omaratallah/Downloads/OperTask Brand Guide.html`

**Layout principles:**
- Max content width: 1180px centered
- Generous vertical spacing between sections (80–120px)
- Cards and surfaces use `#141A21` background with `1px solid #1F2630` border
- No gradients on brand surfaces
- Mint used sparingly — one accent moment per section maximum

**Animation principles (Framer Motion):**
- Sections fade up on scroll entry (`opacity: 0 → 1`, `y: 24 → 0`, `duration: 0.5`)
- Blueprint process steps reveal sequentially with 0.15s stagger
- Hero text animates in on page load
- No looping animations except the blinking cursor on the hero wordmark

**CTA hierarchy:**
- Primary button: mint background `#88C0A8`, dark text `#0F1419`, no border-radius or a subtle 4px radius
- Secondary CTA: plain text link with `→` arrow, mint color, no background

---

## 9. Edge Cases

- EC1: Calendly embeds must not break the page if Calendly JS fails to load — show a fallback link to the booking URL
- EC2: Tool logos that cannot be sourced as SVG should fall back to clean text badges
- EC3: Founder photo placeholder must look intentional (styled box, not broken image)
- EC4: On very small screens (< 375px), the hero headline must not overflow — use `text-wrap: balance`
- EC5: The sticky nav must not obscure section anchors when navigating from `/booking#fit-call` — offset scroll by nav height

---

## 10. Success Criteria

- SC1: All 4 pages render without console errors in Chrome, Safari, and Firefox
- SC2: Lighthouse performance score ≥ 90 on mobile
- SC3: All CTA buttons and links navigate to the correct destination
- SC4: Booking page Calendly embeds load and display correctly
- SC5: Blueprint process steps animate sequentially on scroll
- SC6: Site is fully usable on iPhone SE screen width (375px)
- SC7: Nav remains sticky and visible after 500px of scroll on all pages
- SC8: `/booking#fit-call` anchor scrolls correctly to the Fit Call card
