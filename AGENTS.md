<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Template purpose and audience

This repo is the starter template that gets cloned for each new **Handwerksbetrieb** (German craftsmen business) website. The audience is **homeowners and renters in Germany**, age 35 – 70, who land here from a Google search for a local trade ("Dachdecker Köln", "Heizung defekt Notdienst") and decide within seconds whether to pick up the phone.

**This is not a SaaS site, a portfolio for a creative studio, an AI product, or a developer tool.** Every default in this template — copy register, density, color, typography, structure — points away from those categories. Reflexes that would be right for those audiences are wrong here. Stay aware of which audience you are designing and writing for.

Strategic intent, anti-references, and audience details live in `PRODUCT.md`. Read it before any non-trivial design or copy work — it tells you what to avoid (MyHammer aesthetic, generic Handwerker-Wordpress templates, agency/SaaS landing pages, hero-metric template, stock photos of smiling tradespeople).

Visual scaffold and design tokens live in `DESIGN.md`.

Per-Betrieb facts (trade, location, services, proof points, Impressum data) live in `.agents/product-marketing-context.md`.

# Working on a cloned instance

When this template is cloned for a real Betrieb, almost everything you see in `app/` is placeholder. The phone number, address, owner name, Stadtteile, prices, testimonials, project titles, opening hours, Google rating, registry numbers, and team members are all filler. Treat the template as scaffolding to **adapt**, not as content to ship.

## Rule 1: never ship placeholders

When you change any file the user looks at, the result must contain **only factual information about the real Betrieb**, taken from the user's input or from `.agents/product-marketing-context.md`. Do not carry forward template copy as if it were true. Do not invent plausible-sounding facts to fill a section — invented numbers, invented testimonials, invented registry numbers, invented Stadtteile, and invented "Familienbetrieb seit 1962" claims are worse than blanks.

If a fact is missing, you have three options, in this order:

1. **Ask the user for it** (one focused question, not a wall of forms).
2. **Cut the section** that depends on the missing fact. A site with five honest sections beats a site with seven sections half of which are filler.
3. **Mark it as a `TODO` the user must fill in** before launch (only when the section is structurally required, e.g. Impressum, and a blank field would be obvious). Never leave a `TODO` in customer-facing prose.

Common placeholders to grep for and remove from any output you produce: `Musterstraße`, `030 1234567`, `Max Mustermann`, `HRB 000000`, `DE000000000`, `petra.example`, `184 Bewertungen`, `Familie Müller`, `Hausverwaltung Bergmann`, `Familienbetrieb seit 1962`, `Maurer- und Betonbauermeister`. The `README.md` has the full inventory and a grep block.

## Rule 2: adapt the structure, do not preserve it

The current page set (`/`, `/leistungen`, `/referenzen`, `/notdienst`, `/about`, `/contact`, `/blog`, `/impressum`, `/datenschutz`, `/agb`) is a **superset**, not a recommendation. Cut routes that do not match the Betrieb and rewire the navigation:

- No emergency service? Delete `app/notdienst/`, set `hasNotdienst = false` in `components/site-header.tsx`, and remove the Notdienst strip from `app/page.tsx`.
- No project photography? Delete `app/referenzen/`, drop the home-page Referenzen preview, remove footer/header links.
- No blog content planned? Delete `app/blog/`, remove the nav link, remove `content/blog/`.
- No standing AGB? Delete `app/agb/` and the footer link.

The same applies inside pages. Sections (services list, process steps, FAQ, testimonials, pricing table, trust strip) are blocks you assemble per Betrieb, not a fixed lineup to fill in. Drop any block that has nothing real behind it. Reorder when the Betrieb's strongest proof point belongs higher up (a 60-year Familienbetrieb leads with that; a freshly-trained Meister leads with the Innung-Eintrag, not the founding year).

## Rule 3: design and copy serve the audience

The five design principles from `PRODUCT.md`:

1. **Trust through specificity, not adjectives.** Real Postleitzahlen, real Meistereintrag-Nummer, real Kundenstimmen with full names, real founding year. "Qualität und Zuverlässigkeit" is what every competitor says — strip it.
2. **The phone number is the product.** Tel-link above the fold on every page, especially on mobile. Quote-request form is secondary.
3. **Local before clever.** Geo-modify titles, H1s, alt text, schema, body copy. The site exists to win one Postleitzahl-Cluster.
4. **Plain over polished.** Sachlich German prose. No hype words ("innovativ", "ganzheitlich", "Premium-Lösung"), no Anglicisms ("Solutions", "Services", "crafted with passion"), no em dashes. Sentences a Kunde scans on a phone in 10 seconds.
5. **Trust strip earns the fold.** Meisterbetrieb · Innung · HwK-Eintrag · Google-Bewertungen visible near the primary CTA and in the footer.

The accompanying design reflexes (from `DESIGN.md`):

- **Sturdy, regional, plain.** Closer to a well-made tool catalogue or a regional bakery's site than to a SaaS landing.
- **Light theme is the default.** Most users arrive mid-day on mobile in daylight. Dark mode is wired up but not the primary surface.
- **No identical-card grids** for Leistungen. Vary card sizes; use a featured-plus-list or asymmetric layout.
- **No hero-metric template** ("12 Jahre / 500 Kunden / 5 ★" in three big-number columns).
- **No glassmorphism, no gradient text, no side-stripe accents, no auto-advancing carousels, no modal-first CTAs.**
- **Stock photos are forbidden.** A solid placeholder is better than a generic Shutterstock tradesman. Use `components/image-placeholder.tsx` where real images are not yet available.

Apply these by reflex. If you find yourself about to write "Crafted with passion since 2013" or build a three-up icon grid of Leistungen, stop — those are the wrong-audience reflexes.

# Which skill to invoke when

Skills live under `.agents/skills/` and are listed in `skills-lock.json`. Pick the right one before doing the work — they encode rules that bare prompts skip.

| Task                                                              | Skill                  |
| ----------------------------------------------------------------- | ---------------------- |
| Any visual design, layout, redesign, component-building, polish, animation, copy-quality-on-a-page | `impeccable` (register: brand) |
| Writing or rewriting page copy (Home, Leistungen, Über uns, etc.) | `copywriting`          |
| Creating many Stadt × Leistung or Leistung × Stadtteil pages      | `programmatic-seo`     |
| Auditing or fixing existing SEO (meta, schema, indexing)          | `seo-audit`            |
| Adding Schema.org markup (`LocalBusiness`, `Service`, etc.)       | `schema-markup` (if available) |
| AI-search / LLM-discoverability work                              | `ai-seo` (if available) |
| Writing a blog post                                               | `copywriting` for the body, then `seo-audit` if SEO is the goal — see the blog section below |

For the `impeccable` skill specifically: this template's register is `brand` (design IS the product on a marketing surface). PRODUCT.md and DESIGN.md are kept current in this repo; `impeccable` will load them. Do not let `impeccable` drift into editorial-typographic, Stripe-minimal, Liquid-Death-maximalist, or SaaS-landing aesthetic lanes — none of those fit this audience.

For `copywriting` and `programmatic-seo`: both read `.agents/product-marketing-context.md` first. If load-bearing fields are still `TODO`, prompt the user to fill them before drafting. Do not invent.

For everything else: do the obvious sober thing. Refactors, type errors, build fixes, dependency bumps, and small bug fixes do not need a skill — just fix them.

# Creating a blog article

The blog is wired up as MDX. Each post is a single `.mdx` file in `content/blog/`. The filename is the URL slug (`content/blog/dachreinigung-kosten.mdx` → `/blog/dachreinigung-kosten`). The index at `/blog` and the per-post route at `/blog/[slug]` pick up new files automatically — no registry to update.

**Workflow when the user asks for a new article:**

1. **Confirm the topic and intent** if not obvious. Articles for craftsmen sites should target a real customer search (Ratgeber, Kostenfrage, Projekt-Einblick). If the user gave you a keyword, treat it as the search intent.
2. **Read `.agents/product-marketing-context.md`** before drafting — Gewerk, Standort, Leistungen, Tonalität, Differenzierung. If load-bearing fields are still `TODO`, ask the user to fill them in first.
3. **Draft the body using the `copywriting` skill.** It enforces clarity, specificity, customer language, and the right tone. For SEO-driven topics (Stadt × Leistung pages, ranking-Ratgeber), use `programmatic-seo` instead. After a draft, run `seo-audit` if SEO is the goal.
4. **Write the file as MDX** at `content/blog/<slug>.mdx`. The slug must be lowercase, ASCII, hyphen-separated, and reflect the primary search term in German (e.g. `fassadenanstrich-altbau-berlin.mdx`, not `mein-erster-post.mdx`).
5. **Front-matter is exported as `metadata`** (not YAML — `@next/mdx` doesn't parse YAML frontmatter here). The shape is enforced by `lib/blog.ts` (`PostMetadata`):

   ```mdx
   export const metadata = {
     title: "Fassadenanstrich im Altbau: Worauf es in Berlin ankommt",
     description:
       "Was Altbau-Fassaden in Berlin besonders macht, welche Farben halten und wie ein Festpreis-Angebot zustande kommt.",
     publishedAt: "2026-05-08",      // ISO date — sorts the index, descending
     updatedAt: "2026-05-12",         // optional
     author: "Max Mustermann",        // optional
     tags: ["Fassade", "Altbau"],     // optional
     draft: false,                    // optional — drafts only show in dev
   };

   Body starts here as normal Markdown / MDX.
   ```

   - `title` and `description` are reused as the `<title>` and meta description (see `app/blog/[slug]/page.tsx`). Keep `title` ≤ 60 chars, `description` ≤ 155 chars.
   - **Don't** repeat the H1 in the body — `PageShell` already renders the title from `metadata.title`. Start the body with prose or an `## H2`.
6. **Use the global MDX components** in `mdx-components.tsx` for typography. Internal links work as plain Markdown links (`[Kontakt](/contact)`) and route through `next/link` automatically. For images, drop them in `public/blog/<slug>/...` and reference with `![alt](/blog/<slug>/foo.jpg)`.
7. **End with a soft CTA** to `/contact` or a phone link — the site's primary conversion goals.
8. **Verify** with `bun run dev` (or `next build`) that the new post appears in `/blog` and renders at `/blog/<slug>`.

**Don't** create a page file under `app/blog/` for a new post — the dynamic route handles it. **Don't** add the post to a manual list — the index reads `content/blog/` from disk.
