# Design

> **Status:** starter-template baseline. This DESIGN.md captures the *neutral* visual scaffold every cloned Petra instance starts from. Per-Betrieb identity (brand color, headline typeface, photographic direction) is layered on top during clone-time customization. Re-run `/impeccable document` after the per-Betrieb tokens land so this file reflects the real system.

---

## Visual theme

A neutral, near-monochromatic shadcn-default surface in OKLCH, intended as a quiet stage that recedes behind real content (Meister-portrait, Referenz-Projekt-Fotos, Kundenstimmen, phone CTA). The starter is deliberately under-styled so that each cloned Betrieb's brand color, regional flavor, and proof points carry the visual weight rather than the chrome. Light theme is the default; dark theme is wired up but not the primary surface — most German Handwerker-Kunden land here mid-day on mobile in daylight.

The aesthetic target for the cloned, branded version is **regional-craftsmanship-modern**: sturdy, sachlich, plain. Closer to a well-made tool catalogue or a regional bakery's site than to a SaaS landing. Avoid both reflexes: the generic Handwerker-Wordpress-Template (stock-photo carousel + icon-card grid) and the agency-SaaS lane (gradient hero + glassmorphism).

## Color

**Strategy:** Restrained, with room to escalate to Committed once a Betrieb's brand color is set.

**Color space:** OKLCH throughout. No `#000` or `#fff`; neutrals are tinted toward the brand hue (chroma 0.005–0.01) once defined. Today the starter ships fully achromatic (chroma 0).

### Light theme (default, `:root`)

| Role                     | Token                     | Value                              |
| ------------------------ | ------------------------- | ---------------------------------- |
| Background               | `--background`            | `oklch(1 0 0)`                     |
| Foreground               | `--foreground`            | `oklch(0.145 0 0)`                 |
| Card / popover surface   | `--card`, `--popover`     | `oklch(1 0 0)`                     |
| Primary                  | `--primary`               | `oklch(0.205 0 0)` (near-black)    |
| Primary foreground       | `--primary-foreground`    | `oklch(0.985 0 0)`                 |
| Secondary / muted / accent surfaces | `--secondary`, `--muted`, `--accent` | `oklch(0.97 0 0)` |
| Muted foreground         | `--muted-foreground`      | `oklch(0.556 0 0)`                 |
| Border / input           | `--border`, `--input`     | `oklch(0.922 0 0)`                 |
| Ring (focus)             | `--ring`                  | `oklch(0.708 0 0)`                 |
| Destructive              | `--destructive`           | `oklch(0.577 0.245 27.325)`        |

### Dark theme (`.dark`)

Inverts background/foreground, lifts surface tones, and uses transparent-white for `--border` and `--input` (`oklch(1 0 0 / 10%)` and `/ 15%`). `--primary` flips to a near-white. Charts and sidebar tokens follow the same neutral ladder.

### Per-Betrieb extension (TODO at clone-time)

Pick a single brand accent in OKLCH at clone-time. Wire it into `--primary` (or a new `--brand` token if `--primary` should remain near-black for body type). Reduce chroma toward the lightness extremes. The "≤10% accent" rule of Restrained applies — the accent is for CTAs, focus rings, and headline emphasis, not for filling cards.

## Typography

**Sans:** [Geist](https://vercel.com/font) (next/font, `--font-sans`). Used for body and headings until a Betrieb-specific headline face is chosen.
**Mono:** [Geist Mono](https://vercel.com/font) (next/font, `--font-geist-mono`). Used for tabular data, metadata, code blocks in the Ratgeber.
**Heading face:** currently aliased to `--font-sans` via `--font-heading: var(--font-sans)`. Per-Betrieb instances may swap in a more characterful headline face (a regional-feeling grotesque or a sturdy serif) — keep body on Geist for legibility.

**Hierarchy:** scale + weight contrast, ≥1.25 ratio between steps. Body copy capped at 65–75ch (the MDX prose styles in `mdx-components.tsx` enforce this for the blog). No flat scales.

**Anti-patterns banned:** gradient text via `background-clip: text`. No em dashes; use commas, colons, semicolons, periods, or parentheses.

## Spacing & layout

**Radius scale:** built on `--radius: 0.625rem` with multipliers via `@theme inline`:

| Token          | Multiplier | Computed     |
| -------------- | ---------- | ------------ |
| `--radius-sm`  | 0.6        | 0.375rem     |
| `--radius-md`  | 0.8        | 0.5rem       |
| `--radius-lg`  | 1.0        | 0.625rem     |
| `--radius-xl`  | 1.4        | 0.875rem     |
| `--radius-2xl` | 1.8        | 1.125rem     |
| `--radius-3xl` | 2.2        | 1.375rem     |
| `--radius-4xl` | 2.6        | 1.625rem     |

**Spacing:** Tailwind v4 default scale. Vary spacing across sections for rhythm — same padding everywhere is monotony.

**Container discipline:** don't wrap everything in a max-width container by reflex. Hero, trust-strip, and full-bleed image bands often want to break out. The `PageShell` component is the standard wrapper for typical content pages.

**Card discipline:** cards are the lazy answer; use only when they're truly the best affordance. Nested cards are always wrong. The `Leistungen-Übersicht` and `Referenzen` patterns will tempt card-grids — resist identical-card-grid templates and prefer asymmetric or list layouts where possible.

## Components

Built on **shadcn/ui** (`components/ui/`) over Tailwind v4 + `tw-animate-css`. Custom components in `components/`:

- `site-header.tsx`, `site-footer.tsx` — site chrome
- `page-shell.tsx` — standard page container (used by blog posts via `app/blog/[slug]/page.tsx`)
- `image-placeholder.tsx` — placeholder for missing imagery during template-stage

shadcn primitives present in the starter: button, card, input, form, dialog, sheet, drawer, dropdown-menu, navigation-menu, accordion, tabs, table, toast/sonner, badge, avatar, calendar, command (cmdk), carousel (embla), chart (recharts), date-picker, otp-input, resizable, vaul drawer, and more. Treat them as a toolbox — pull only what each clone actually needs; a Maler-Betrieb does not need a chart component.

## Motion

- Don't animate CSS layout properties.
- Ease-out with exponential curves (ease-out-quart / quint / expo). No bounce, no elastic.
- Decorative motion stays modest. Older users and `prefers-reduced-motion` matter for this audience.
- `tw-animate-css` is available for entrance animations; reach for it sparingly.

## Iconography

- **lucide-react** is the icon set. One stroke weight throughout. Consistent sizing (16, 20, 24).
- No mixing icon sets. No emoji as icons in chrome.

## Imagery

- Real Meister-portraits and Referenz-Fotos (before/after where the Gewerk allows) over stock. Stock photos hurt trust on this audience and are an explicit anti-reference.
- Blog images live under `public/blog/<slug>/`.
- Set `loading="lazy"` and explicit `width`/`height` on non-hero images.

## Themes

Both light and dark are wired (via `next-themes` + the `.dark` class variant). **Default to light** for cloned Betrieb instances unless the physical scene forces otherwise. Most users arrive mid-day, on mobile, in daylight, on a public-facing brand page. A 2am observability dashboard would justify dark; a Dachdecker website does not.

## Anti-patterns (project-specific bans, in addition to the impeccable shared bans)

- Side-stripe `border-left` accents on alert/callout components.
- Gradient text on H1/hero (banned globally; called out here because Handwerker templates love it).
- Glassmorphism on hero or trust-strip.
- Hero-metric template ("12 Jahre Erfahrung / 500+ Kunden / 5★ Bewertung" in three big-number columns).
- Identical card grids for Leistungen — vary card sizes, add a featured Leistung treatment, or use a list pattern.
- Modals as the first-thought CTA. Inline forms or dedicated pages convert better and are friendlier on mobile.
- Auto-advancing carousels as primary content.

---

> **Cloned-instance follow-up:** when a Betrieb is onboarded, run `/impeccable teach` (refresh PRODUCT.md anti-references and brand personality), then `/impeccable document` (refresh DESIGN.md with the per-Betrieb brand color, headline face, and any added components). The starter file above describes the unbranded baseline, not the final Betrieb-specific system.
