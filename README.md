# Petra — Handwerker site template

A [Next.js](https://nextjs.org) starter for **German craftsmen websites** (Handwerksbetriebe). Audience, copy guardrails, SEO scaffolding, and legal pages are tuned for trades targeting customers in Germany.

---

## Everything in this repo is a placeholder

The shipped site is a **functional template**, not a configured site. Every name, address, phone number, price, postcode, project, testimonial, and registry number is filler. Deploying as-is would publish a site under "Petra Handwerk GmbH" at "Musterstraße 12, 10115 Berlin" with the phone number `030 1234567` and an "184 Bewertungen" rating that does not exist.

Before anything goes live:

1. **Replace every placeholder** (see the inventory below — none may remain).
2. **Delete the pages and sections that don't fit** this Betrieb's use case (a small Schreinerei does not need `/notdienst`; a Notdienst-driven SHK-Betrieb might want it on the homepage hero instead).
3. **Fill `.agents/product-marketing-context.md`** — the marketing skills (`copywriting`, `programmatic-seo`, `seo-audit`) read this file first; stale `TODO`s leak straight into output.
4. **Verify legal pages** against the actual Betrieb's data (Impressum is liable, not decorative).

---

## Structure

```
app/
  layout.tsx              site shell (lang="de", fonts, header, footer)
  page.tsx                home — hero, trust strip, services, process,
                          Referenzen preview, testimonials, Notdienst,
                          pricing, FAQ, CTA
  globals.css             design tokens (neutral by default; --brand and
                          --signal slots intended to be overridden per Betrieb)
  leistungen/page.tsx     services overview with anchored sections
                          (#sanierung, #reparatur, #beratung, #notdienst)
  referenzen/page.tsx     project portfolio (feature row + pair + triple bands)
  notdienst/page.tsx      emergency-service landing (phone-first)
  about/page.tsx          Über uns — story, values, timeline, team
  contact/page.tsx        Kontakt — phone-first, form, photo upload, DSGVO consent
  impressum/page.tsx      § 5 TMG, registry, USt-IdNr, berufsrechtliche Angaben
  datenschutz/page.tsx    DSGVO/BDSG/TTDSG scaffold
  agb/page.tsx            Werkvertrags-AGB scaffold (optional but recommended)
  blog/                   MDX blog index + dynamic [slug] route
  not-found.tsx           404
  error.tsx               error boundary
  loading.tsx             loading state

components/
  site-header.tsx         sticky header, phone CTA, Notdienst pill, mobile sheet
  site-footer.tsx         contact, services, opening hours, trust strip, legal links
  page-shell.tsx          standard wrapper for prose-style pages (blog, legal)
  image-placeholder.tsx   diagonal-line placeholder for missing imagery
  ui/                     shadcn/ui primitives

content/
  blog/                   one MDX file per post; filename = slug

mdx-components.tsx        global MDX typography for the blog
lib/blog.ts               filesystem-based post loader

.agents/                  agent context (CLAUDE.md, PRODUCT.md, DESIGN.md,
                          product-marketing-context.md, skills)
AGENTS.md / CLAUDE.md     working rules for AI agents in this repo
PRODUCT.md                strategic design intent (audience, anti-references, principles)
DESIGN.md                 visual scaffold (tokens, typography, anti-patterns)
```

### What each route is for, and when to delete it

| Route          | Keep when                                                   | Delete when                                                      |
| -------------- | ----------------------------------------------------------- | ---------------------------------------------------------------- |
| `/leistungen`  | Always — every Betrieb needs a services overview.           | Never. Restructure sections to match the actual trade.           |
| `/referenzen`  | The Betrieb has photos of completed projects.               | No project photography is or will be available.                  |
| `/notdienst`   | Notdienst is genuinely offered.                             | No emergency service — also set `hasNotdienst = false` in `site-header.tsx` and remove the Notdienst strip from `page.tsx`. |
| `/about`       | Always — Meister, team, founding year build trust.          | Never. Rewrite, do not remove.                                   |
| `/contact`     | Always — primary conversion path.                           | Never.                                                           |
| `/blog`        | Ratgeber / SEO content is part of the strategy.             | The Betrieb won't produce content; remove the route and the nav link in `site-header.tsx` and `site-footer.tsx`. |
| `/impressum`   | Always — § 5 TMG.                                           | Never (legal requirement).                                       |
| `/datenschutz` | Always — DSGVO/BDSG.                                        | Never (legal requirement).                                       |
| `/agb`         | Recommended for Werkvertrag-Betriebe.                       | Pure Reparatur-Betrieb without standing terms; remove the route and the footer link. |

---

## Placeholder inventory

Search-and-replace before launch. Treat the table as a checklist; do not leave any of these in production.

| Placeholder                                | Where                                                                |
| ------------------------------------------ | -------------------------------------------------------------------- |
| `Petra` / `Petra Handwerk GmbH`            | `app/layout.tsx`, header, footer, impressum, datenschutz, agb        |
| `030 1234567` / `tel:+493012345678`        | header, footer, every page with a phone CTA                          |
| `hallo@petra.example`                      | footer, contact, impressum, datenschutz                              |
| `Musterstraße 12, 10115 Berlin`            | footer, contact, impressum, datenschutz                              |
| `Max Mustermann` / `Sabine Mustermann` / … | `app/about/page.tsx`, `app/impressum/page.tsx`                       |
| `Maurer- und Betonbauermeister`            | `app/impressum/page.tsx`, `app/about/page.tsx`                       |
| Registry: `HRB 000000`, `DE000000000`, `000-000` | `app/impressum/page.tsx`                                       |
| `Handwerkskammer Berlin, Blücherstraße 68` | `app/impressum/page.tsx`                                             |
| Berlin / Brandenburg Stadtteil names       | home FAQ, referenzen, about                                          |
| `Familienbetrieb seit 1962` / `2013`       | home, footer, about timeline                                         |
| `4,9 / 5` · `184 Bewertungen`              | home hero, about trust strip                                         |
| Testimonials (`Familie Müller`, `Hausverwaltung Bergmann`) | `app/page.tsx`                                       |
| Prices (`78 €/h`, `120 €`, `18.400 €`, …)  | `app/page.tsx`, `app/leistungen/page.tsx`, `app/notdienst/page.tsx`  |
| `hasNotdienst = true`                      | `components/site-header.tsx` — toggle to `false` if no Notdienst     |
| Brand color (currently neutral)            | `--brand` / `--signal` in `app/globals.css`                          |
| Project image placeholders                 | `components/image-placeholder.tsx` is rendered everywhere — replace with real photos in `public/` |
| Blog placeholder                           | `content/blog/willkommen.mdx`                                        |

### Quick grep before deploy

```bash
# Should each return zero hits before launch
grep -r "Musterstraße" app/ components/
grep -r "030 1234567" app/ components/
grep -r "Max Mustermann" app/
grep -r "HRB 000000" app/
grep -r "petra.example" app/ components/
grep -r "TODO" .agents/product-marketing-context.md
```

---

## Design tokens

The starter ships **fully neutral** (achromatic shadcn defaults). To brand a cloned instance, override these four lines in `app/globals.css`:

```css
:root {
  --brand: oklch(0.55 0.14 50);          /* CTA color; pick OKLCH at clone-time */
  --brand-foreground: oklch(0.985 0 0);
  --brand-soft: oklch(0.95 0.04 70);     /* subtle brand-tinted surface */
  --signal: oklch(0.55 0.22 27);         /* Notdienst / emergency red */
}
```

Every `bg-brand`, `text-brand`, `bg-signal` etc. in the codebase resolves through these tokens — no other file needs to change. Dark-mode equivalents live under `.dark` in the same file.

For the typography, spacing, and anti-pattern rules this template follows, read `DESIGN.md`. For the audience, anti-references, and brand-personality rules, read `PRODUCT.md`.

---

## First-run workflow

1. **Clone, install, run dev.**
   ```bash
   bun install
   bun run dev
   ```
2. **Fill `.agents/product-marketing-context.md`** — replace every `TODO` (Gewerk, Standort, Leistungen, Meisterstatus, Differenzierung, proof points, Impressum-Daten).
3. **Decide which routes to keep** (table above). Delete the rest — directory plus footer/header links plus any homepage section that points to them.
4. **Pick a brand color** and update the four `--brand*` / `--signal` tokens in `globals.css`. Verify contrast with WCAG 2.2 AA on CTAs and small text.
5. **Replace every entry in the placeholder inventory** above. Run the grep checks at the bottom of that table — they must all return zero.
6. **Replace `<ImagePlaceholder />` usages with real photos.** Drop them in `public/` and use `next/image`. Stock photos are explicitly forbidden for this audience (see `PRODUCT.md` anti-references).
7. **Audit Impressum and Datenschutz** against the Betrieb's real data and the latest § 5 TMG / DSGVO guidance. Have a Fachanwältin / Fachanwalt review AGB before publishing.
8. **Seed the blog** — delete `content/blog/willkommen.mdx` and add the first real Ratgeber articles. See the *Creating a blog article* section in `AGENTS.md`.
9. **Set up the Google Business Profile** and link it from the footer trust strip. For Handwerker sites it's the single most important SEO asset.

---

## Pre-launch checklist

- [ ] No `TODO` left in `.agents/product-marketing-context.md`
- [ ] Every placeholder in the inventory replaced; grep checks return zero
- [ ] `hasNotdienst` flag matches the actual offering
- [ ] Routes that don't fit the Betrieb are deleted (directories, footer links, header nav, homepage references)
- [ ] Impressum verified against current HwO and § 5 TMG
- [ ] Datenschutzerklärung lists every actually-used tool (analytics, maps, embeds)
- [ ] AGB reviewed by a Fachanwältin / Fachanwalt (or removed if unused)
- [ ] All `<ImagePlaceholder />` replaced with real photographs
- [ ] Google Business Profile claimed and linked
- [ ] WCAG 2.2 AA contrast verified on CTAs, body, and the Notdienst pill
- [ ] `bun run build` is clean; `bun run lint` introduces no new errors

---

## Getting started

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # production build
bun run lint     # ESLint
```

Stack: Next.js 16 (App Router, Turbopack), React 19, Tailwind v4, shadcn/ui over `@base-ui/react`, `@next/mdx` for the blog, Geist + Geist Mono via `next/font` (self-hosted, DSGVO-friendly).

For agent-driven work in this repo, read `AGENTS.md` (working rules) and the skills referenced in `skills-lock.json`.
