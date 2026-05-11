# Product

## Register

brand

## Users

German homeowners and renters (35–70) searching for a local Handwerksbetrieb (Maler, Elektriker, SHK, Schreiner, Dachdecker, Fliesenleger, Zimmerer, GaLaBau, etc.). They land here from a Google search like "Dachdecker Köln" or "Heizung defekt Notdienst" — usually under time pressure (broken heater, leak, deadline) or planning a Sanierung. Secondary: Hausverwaltungen, kleinere Gewerbekunden in der Region.

The job to be done is "find a craftsman I can trust, near me, who picks up the phone today." The decision is rarely comparison-shopped on the website itself — the site has to surface trust signals fast and make the phone call obvious. Most visitors are on mobile, scanning, not reading.

## Product Purpose

Convert local search traffic into phone calls and quote requests for a single Handwerksbetrieb. Each cloned instance becomes that one Betrieb's site — the template's job is to give every cloned site a high-converting baseline (clear CTAs, fast trust signals, German legal compliance, local SEO scaffolding) without looking like ten thousand other Handwerker-Templates. Success is measured in phone clicks and Angebot-Anfragen, not page views.

## Brand Personality

Three words: **competent, regional, trustworthy.** Sounds like a Meister explaining a job at the Küchentisch — sachlich, plain-spoken, never agency-slick. "Sie" als Anrede. Regional flavor when the cloned instance has one. The interface should feel like the Betrieb itself: well-organized, takes pride in the work, has nothing to hide. Confidence comes from specificity (real Meister-Eintrag, real Postleitzahlen, real Kundenstimmen with full names), not adjectives.

## Anti-references

- **MyHammer / Check24 Profis / Aroundhome aesthetic** — the platform-marketplace look (loud orange/blue CTAs, generic stock photos of smiling tradespeople, "Jetzt vergleichen!"). The whole point of having an own site is to not look like one of these.
- **Generic Handwerker-Wordpress-Templates** — the cliché stack of stock-photo header carousel, "Über uns" with team in matching polo shirts, a "Leistungen" grid of identical cards with icons, parallax scrolling. Every German Maler/Elektriker/Dachdecker site uses this. Reflex-reject.
- **Agency / SaaS landing aesthetic** — gradient hero blobs, "Crafted with passion", glassmorphism cards, hero-metric template (big number / small label / supporting stats), Anglicisms ("Solutions", "Services"). Wrong audience, wrong register.
- **Hero-metric and identical-card-grid templates** generally.
- Stock-photo people. If a real Meister-portrait is unavailable, prefer no photo to a stock one.

## Design Principles

1. **Trust through specificity, not adjectives.** Every claim earns its place by being concrete: real Meistereintrag-Nummer, real Stadtteile in the Einzugsgebiet, real Kundenstimmen with full names, real Gründungsjahr. "Qualität und Zuverlässigkeit" is what every competitor says — strip it.
2. **The phone number is the product.** Tel-link visible above the fold on every page, especially on mobile. Quote-request form is secondary, not a substitute. Treat any layout choice that buries the phone CTA as a bug.
3. **Local before clever.** Geo-modify everything (titles, H1s, alt text, schema, body copy). The site exists to win one Postleitzahlen-Cluster, not the internet. Generic copy is dead copy.
4. **Plain over polished.** Sachlich German prose. No hype words ("innovativ", "ganzheitlich", "Premium-Lösung"), no Anglicisms, no em dashes. Sentences a Kunde scans on a phone in 10 seconds.
5. **Trust strip earns the fold.** Meisterbetrieb / Innung / HwK-Eintrag / Google-Bewertungen need a visible home — typically near the primary CTA and in the footer. Not buried.

## Accessibility & Inclusion

- **WCAG 2.2 AA** as baseline. Color contrast on CTAs and body copy non-negotiable; this audience skews older.
- **Mobile-first.** Most users arrive on a phone, often outdoors or in hectic moments. Tap targets ≥44px, no hover-only affordances, font-size ≥16px in body.
- **Reduced motion** respected (`prefers-reduced-motion`). Decorative motion is already de-emphasized in the brand.
- **German keyboard / screen-reader users:** form labels in German, error messages in German, language attribute set on `<html>`.
- **Older users:** generous line-height, no thin-weight body text on near-white backgrounds, no auto-advancing carousels as primary content.
- **DSGVO / TTDSG:** no third-party fonts/maps/analytics without consent. This is an accessibility-of-trust concern as much as a legal one.

---

> **Note for cloned instances:** this PRODUCT.md is the starter-template default. When a real Handwerksbetrieb clones this repo, re-run `/impeccable teach` so register, users, brand personality, and anti-references reflect the specific Gewerk, Region, and Betrieb. Cross-check against `.agents/product-marketing-context.md` (which holds the per-Betrieb marketing facts) — that file fills in the concrete TODOs (Trade, Stadt, services, proof points, Impressum data); this file holds the strategic design intent.
