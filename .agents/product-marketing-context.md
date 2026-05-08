# Product Marketing Context

This template powers websites for **German craftsmen / Handwerksbetriebe** (Maler, Elektriker, Sanitär & Heizung, Schreiner, Dachdecker, Fliesenleger, Zimmerer, Garten- und Landschaftsbau, etc.). All copy, SEO, and marketing-page work must read this file first.

> **Owner:** before generating any copy or SEO work, replace every `TODO` with real content. Lines marked **DEFAULT** can be kept if they apply, otherwise overwrite them.

---

## Audience: who the site is *for*

The website's job is to convert prospective **customers in Germany** searching for a local craftsman into phone calls, quote requests, or appointment bookings.

- **Primary audience — DEFAULT:** Hausbesitzer und Mieter in Deutschland (35–70), often deciding under time pressure (broken heater, leak, renovation deadline) or planning a renovation/Sanierung.
- **Secondary audience — DEFAULT:** Hausverwaltungen, Immobilienmakler, kleinere Gewerbekunden in der Region.
- **Decision drivers (DEFAULT, in order):**
  1. Lokale Nähe ("um die Ecke", schnell vor Ort)
  2. Vertrauen (Meisterbetrieb, Familienbetrieb, Bewertungen, Empfehlungen)
  3. Erreichbarkeit & Reaktionszeit (ruft zurück, kommt zeitnah)
  4. Preisklarheit (Festpreis, kostenloses Angebot, transparente Stundensätze)
  5. Qualität & Garantie (Gewährleistung, saubere Arbeit, Aufräumen nach dem Job)
- **Typical objections:**
  - "Zu teuer / undurchsichtige Preise"
  - "Termin in zwei Monaten — zu lange"
  - "Schon mal mit Handwerkern schlechte Erfahrung gemacht"
  - "Kommt der überhaupt zurück, wenn was nicht passt?"

## Owner: the Handwerksbetrieb running the site

- **Trade (Gewerk):** TODO — e.g. Malerbetrieb, Elektroinstallation, SHK, Schreinerei, Dachdeckerei
- **Master craftsman status:** TODO — Meisterbetrieb? Innungsmitglied? Eingetragen in der Handwerksrolle? (these are strong trust signals — surface them prominently)
- **Founded / years in business:** TODO
- **Team size:** TODO (Familienbetrieb / Kleinbetrieb / mittelständisch)
- **Service area (Einzugsgebiet):** TODO — list city + surrounding Landkreise/Postleitzahlen. Local SEO depends on this being concrete.
- **Languages spoken:** TODO — DEFAULT: Deutsch (add others if relevant for migrant communities or border regions)

## Services (Leistungen)

- **Primary services:** TODO — list 3–7 concrete offerings using the terms customers actually search for (e.g. "Innenanstrich", "Fassadenanstrich", "Tapezieren", "Lackierarbeiten" — not "individuelle Wandgestaltungslösungen")
- **Notdienst / Emergency service:** TODO — yes/no, hours, surcharge?
- **Service we explicitly do *not* offer:** TODO — saying no helps SEO and saves bad-fit calls

## Pricing & quoting

- **Pricing model — DEFAULT:** Kostenloses Angebot nach Vor-Ort-Termin / Aufmaß. Festpreis nach Angebot. Stundenlohn nur für kleine Reparaturen.
- **Adjust:** TODO — confirm or change. Mention if Anfahrtspauschale applies.
- **Förderung / subsidies:** TODO — relevant for Sanierung-trades (BAFA, KfW). If yes, mention support with applications as a service.

## Differentiation

- **What makes this Betrieb different from the next one in the same Postleitzahl?** TODO — be specific. "Qualität und Zuverlässigkeit" is what every competitor claims; find the actual edge (e.g. "Termine innerhalb von 5 Werktagen", "Festpreis schriftlich vor Arbeitsbeginn", "drei Generationen Familienbetrieb seit 1962", "spezialisiert auf Altbau in [Stadt]").
- **Main competitors:**
  - Lokale Mitbewerber im gleichen Gewerk
  - Plattformen: MyHammer, Check24 Profis, Aroundhome, Blauarbeit
  - Larger franchise/chain operators where applicable

## Proof points (Vertrauenssignale)

Surface these wherever possible — on hero, near CTAs, and in footer trust strip:

- **Meisterbetrieb-Siegel / Innungs-Logo** — TODO
- **Handwerkskammer-Mitgliedschaft + Eintragsnummer** — TODO
- **Google Business Profile rating + review count** — TODO (link to GBP)
- **Years in business / Familienbetrieb seit XXXX** — TODO
- **Testimonials / Kundenstimmen:** TODO — prefer named local customers ("Familie Müller, Köln-Ehrenfeld") over generic "Anna R."
- **Referenzprojekte / case photos:** TODO — before/after shots are gold for trade websites
- **Gewährleistung/Garantie:** TODO — state the duration (gesetzlich 2 Jahre? freiwillig länger?)

## Tone & voice

- **Default tone:** plain-spoken, sachlich, regional, vertrauenserweckend. Sounds like a competent Meister talking to a Kunde at the Küchentisch — not like an agency brochure.
- **What to avoid:**
  - Anglicisms ("Solutions", "Services", "Crafted with passion") — translate to German equivalents
  - Hype words: "innovativ", "revolutionär", "ganzheitlich", "Premium-Lösung"
  - Overlong sentences — Handwerker-Kunden scan, they don't read
  - Stock-photo aesthetics in copy ("Unser dynamisches Team aus Spezialisten…")
- **Address form (Anrede):** DEFAULT: "Sie". Switch to "Du" only if explicitly requested and audience matches (rare for trades).
- **Regional flavor:** TODO — mention Bundesland / Stadt naturally. A Bayerischer Schreiner sounds different from a Hamburger Dachdecker.

## Conversion goals

- **Primary action — DEFAULT:** Phone call (`tel:`-Link prominent, mobile-friendly). Most Handwerker-Kunden still convert by phone.
- **Secondary action — DEFAULT:** Quote request form ("Kostenloses Angebot anfragen") with photo upload for damage cases.
- **Tertiary:** WhatsApp / SMS contact, callback request.
- **Anti-pattern:** generic "Contact us" form buried in footer. Calls + a single clear quote-request CTA convert far better.

## Local SEO priorities

This is where craftsmen websites win or lose. Optimize accordingly.

- **Geographic focus — DEFAULT:** local. Geo-modify everything: page titles, H1s, meta descriptions, alt text, schema.
- **Primary keyword pattern — DEFAULT:** `[Gewerk] + [Stadt]` and `[Gewerk] + [Stadt] + [Stadtteil/Landkreis]` (e.g. "Maler Köln", "Elektriker Köln-Ehrenfeld", "Heizungsbauer Landkreis Mettmann").
- **Service+location pages:** strong candidate for `programmatic-seo` if the Einzugsgebiet covers many Stadtteile/Orte. Each page must have unique content per location, not just swapped variables.
- **"In der Nähe" / "Notdienst" intent:** include nearby-search and emergency variants if applicable.
- **Schema markup — required:**
  - `LocalBusiness` (or specific subtype like `Plumber`, `Electrician`, `RoofingContractor`, `HVACBusiness`, `HousePainter`)
  - `PostalAddress` with full Adresse
  - `OpeningHoursSpecification`
  - `AggregateRating` if real reviews exist
  - `Service` entries for each Leistung
- **Google Business Profile:** the single most important SEO asset for a Handwerksbetrieb — confirm it's claimed, complete, and linked from the site (TODO: link).
- **Backlinks that matter:** Innung, Handwerkskammer-Verzeichnis, lokale Branchenbücher (Das Örtliche, Gelbe Seiten, 11880), regionale Presse, Lieferanten-Seiten.

## German legal & compliance (non-negotiable)

These are legal requirements in Germany, not nice-to-haves:

- **Impressum (§ 5 TMG):** required. Must include full Name, Anschrift, Kontakt, Handelsregister/Handwerksrolle-Eintrag (where applicable), USt-IdNr., berufsrechtliche Angaben (Kammer, gesetzliche Berufsbezeichnung + verleihender Staat). Linked from every page.
- **Datenschutzerklärung (DSGVO/BDSG):** required. Cover contact form, cookies, analytics, embedded maps, fonts (no Google Fonts hot-loading without consent).
- **Cookie consent:** required for any non-essential tracking (TTDSG). Use a compliant banner.
- **Form handling:** explicit consent checkbox for processing inquiry data + link to Datenschutz.
- **AGB:** optional but recommended for service businesses.

## Content patterns that work for craftsmen sites

- **Leistungen-Übersicht** with one detail page per service
- **Standorte / Einzugsgebiet** page or service+location pSEO grid
- **Referenzen** with project photos (before/after where possible)
- **Über uns** featuring the Meister + team, with real photos (stock photos hurt trust here)
- **Notdienst** page if applicable, with phone CTA above the fold
- **Ratgeber / Blog**: "Wann muss ich [X] machen?", "Kosten für [Leistung] in [Stadt]", "[Förderung] beantragen" — strong informational SEO, builds topical authority and captures top-of-funnel.
- **FAQ** answering price ranges, response times, warranty, payment terms — also feeds FAQ schema.

## What to fill in per project (checklist)

When this template is cloned for a new Handwerksbetrieb, replace TODOs in:

- [ ] Owner section (trade, master status, location, team)
- [ ] Services list with real Leistungen
- [ ] Pricing model
- [ ] Differentiation — actual specifics, not generics
- [ ] Proof points with real numbers, names, certifications
- [ ] Tone — confirm "Sie", regional flavor
- [ ] Local SEO — concrete Stadt/Region/Postleitzahlen
- [ ] Compliance — Impressum data ready before launch
