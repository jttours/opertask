# Tasks — OperTask Marketing Website
# Based on: prd-opertask-website.md

## Tasks

- [x] 1.0 Project Setup & Design System
  - [x] 1.1 Configure Tailwind with OperTask brand tokens (colors, fonts, spacing)
  - [x] 1.2 Add Google Fonts: JetBrains Mono + Work Sans via next/font
  - [x] 1.3 Build `<Logo />` component — wordmark with "O" in mint, rest in ink
  - [x] 1.4 Build `<Button />` component — primary (mint bg) and secondary (text link) variants
  - [x] 1.5 Build `<Nav />` component — sticky, logo left, links center, CTA right, mobile hamburger
  - [x] 1.6 Build `<Footer />` component — logo, tagline, nav links, copyright
  - [x] 1.7 Install and configure Framer Motion
  - [x] 1.8 Create `<FadeUp />` wrapper component for scroll-triggered section entrances

- [x] 2.0 Home Page (`/`)
  - [x] 2.1 Build Hero section — headline, subheadline, primary CTA button, secondary text link, hero wordmark with blinking cursor animation
  - [x] 2.2 Build Problem section — 5 pain points with ✗ prefix, styled list
  - [x] 2.3 Build Blueprint Process section — 5 steps with sequential scroll-triggered reveal using Framer Motion stagger
  - [x] 2.4 Build Tools section — horizontal row with Make.com, HubSpot, QuickBooks, Monday.com, Zapier, Shopify, Gmail
  - [x] 2.5 Build Industries section — 6 styled badges framed as social proof
  - [x] 2.6 Build second CTA block — both primary and secondary CTA
  - [x] 2.7 Assemble full Home page with all sections in correct order, verify scroll and spacing

- [x] 3.0 Automation Blueprint Page (`/blueprint`)
  - [x] 3.1 Build page hero — title and description paragraph
  - [x] 3.2 Build "What you receive" checklist — 5 deliverable items
  - [x] 3.3 Build 5-step vertical timeline — step number, title, 2-sentence description each
  - [x] 3.4 Build pricing block — $397 display, credit mechanic callout, founder delivery line
  - [x] 3.5 Add CTA section — primary booking button + secondary fit call text link
  - [x] 3.6 Assemble full Blueprint page, verify all sections render correctly

- [x] 4.0 About Page (`/about`)
  - [x] 4.1 Build founder section — styled photo placeholder, name, title
  - [x] 4.2 Write and render 3-paragraph founder bio with key credibility line displayed prominently
  - [x] 4.3 Add "Tools I work with" section — reuse tools row component from homepage
  - [x] 4.4 Add bottom CTA — link to `/booking`
  - [x] 4.5 Assemble full About page, verify layout and spacing

- [x] 5.0 Booking Page (`/booking`)
  - [x] 5.1 Build minimal page layout — logo only, no full nav
  - [x] 5.2 Build Blueprint booking card — title, price, description, Calendly inline embed placeholder, `id="blueprint"` anchor
  - [x] 5.3 Build Fit Call booking card — title, free label, description, Calendly inline embed placeholder, `id="fit-call"` anchor
  - [x] 5.4 Add trust line below both cards
  - [x] 5.5 Verify `/booking#fit-call` anchor scroll works correctly with nav height offset
  - [x] 5.6 Add Calendly fallback — if embed fails to load, show a direct booking link

- [x] 6.0 Responsiveness & Polish
  - [x] 6.1 Test and fix all pages at 375px (iPhone SE) — hero, nav, cards, process steps
  - [x] 6.2 Test and fix all pages at 768px (tablet)
  - [x] 6.3 Verify sticky nav works on all pages and does not cover anchor targets
  - [x] 6.4 Add page-level metadata (title, description) to all 4 pages using Next.js Metadata API
  - [x] 6.5 Add favicon — mint "OT" icon (32×32 SVG)
  - [x] 6.6 Run Lighthouse on homepage — fix any issues until mobile score ≥ 90

- [ ] 7.0 Deployment
  - [ ] 7.1 Push project to a new GitHub repository
  - [ ] 7.2 Connect repository to Vercel and deploy
  - [ ] 7.3 Connect opertask.com domain (or working domain) in Vercel DNS settings
  - [ ] 7.4 Verify all pages load correctly on live URL
  - [ ] 7.5 Test all CTAs and booking links on live deployment

---

## Relevant Files

- `app/layout.tsx` — root layout with Nav, Footer, font setup
- `app/page.tsx` — Home page
- `app/blueprint/page.tsx` — Automation Blueprint page
- `app/about/page.tsx` — About page
- `app/booking/page.tsx` — Booking page
- `components/Logo.tsx` — OperTask wordmark component
- `components/Nav.tsx` — sticky navigation bar
- `components/Footer.tsx` — site footer
- `components/Button.tsx` — primary and secondary CTA button variants
- `components/FadeUp.tsx` — Framer Motion scroll entrance wrapper
- `components/BlueprintSteps.tsx` — 5-step process with staggered animation
- `components/ToolsRow.tsx` — horizontal tools logos row
- `components/IndustryBadges.tsx` — industry social proof badges
- `components/BookingCard.tsx` — Calendly embed card for booking page
- `tailwind.config.ts` — extended with OperTask brand tokens
- `app/globals.css` — CSS custom properties and base styles

---

## Developer Notes

- Dark-first design. Background `#0F1419`. Never use pure `#000000`.
- Mint `#88C0A8` is scarce — one accent moment per section. Never two.
- The "O" in every OperTask wordmark renders in mint. This is non-negotiable.
- Framer Motion: sections use `fadeUp` (opacity 0→1, y 24→0, duration 0.5). Blueprint steps stagger at 0.15s intervals.
- All Calendly embed URLs are placeholders until the founder creates the Calendly account. Use `https://calendly.com/opertask/blueprint` and `https://calendly.com/opertask/fit-call` as placeholders.
- No gradients on brand surfaces per the brand guide rules.
- Font loading: use `next/font/google` for both JetBrains Mono and Work Sans — do not use a `<link>` tag in the head.
- Tailwind custom tokens to add: `bg-ground`, `bg-surface`, `bg-raised`, `text-ink`, `text-ink-2`, `text-ink-3`, `text-accent`.
