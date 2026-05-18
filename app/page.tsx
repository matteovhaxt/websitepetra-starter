import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Hammer,
  HandCoins,
  Phone,
  Quote,
  ShieldCheck,
  Siren,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { cn } from "@/lib/utils";

const trustStrip = [
  { label: "Meisterbetrieb", sub: "Eingetragen seit 2013" },
  { label: "Innung Berlin", sub: "Aktives Mitglied" },
  { label: "Familienbetrieb", sub: "In zweiter Generation" },
  { label: "4,9 / 5 ★", sub: "auf Google · 184 Bewertungen" },
];

const services = [
  {
    icon: Hammer,
    title: "Sanierung & Modernisierung",
    body: "Vom Aufmaß bis zur Abnahme — wir planen den Ablauf so, dass Sie im Haus weiter wohnen können.",
    href: "/leistungen#sanierung",
    featured: true,
  },
  {
    icon: Wrench,
    title: "Reparatur",
    body: "Tropft, klemmt, sitzt nicht mehr richtig? Wir kommen, schauen, machen.",
    href: "/leistungen#reparatur",
  },
  {
    icon: ClipboardList,
    title: "Beratung & Aufmaß",
    body: "Kostenloser Vor-Ort-Termin. Sie bekommen einen schriftlichen Festpreis, bevor wir anfangen.",
    href: "/leistungen#beratung",
  },
  {
    icon: Siren,
    title: "Notdienst rund um die Uhr",
    body: "Auch nachts und am Wochenende. Anfahrtspauschale ist transparent kommuniziert.",
    href: "/notdienst",
  },
];

const process = [
  {
    step: "01",
    title: "Anrufen oder Anfrage senden",
    body: "Sie schildern uns kurz, worum es geht. Wir melden uns innerhalb von 24 Stunden — meistens schneller.",
  },
  {
    step: "02",
    title: "Vor-Ort-Termin und Festpreis",
    body: "Wir kommen vorbei, schauen uns die Sache an und schreiben Ihnen ein verbindliches Angebot. Kostenfrei.",
  },
  {
    step: "03",
    title: "Sauber ausführen, sauber übergeben",
    body: "Termin steht, Preis steht. Nach der Arbeit räumen wir auf und gehen die Abnahme mit Ihnen durch.",
  },
];

const referenzen = [
  {
    title: "Altbau-Sanierung in Kreuzberg",
    location: "Berlin-Kreuzberg",
    scope: "Vollsanierung 92 m²",
    duration: "12 Wochen",
    body: "Vier-Zimmer-Wohnung im Gründerzeit-Altbau. Stuck erhalten, Elektrik komplett neu, Bad ebenerdig umgebaut, Holzfenster aufgearbeitet statt getauscht.",
  },
  {
    title: "Bad-Umbau in Pankow",
    location: "Berlin-Pankow",
    scope: "Bad 8 m²",
    duration: "3 Wochen",
    body: "Wanne raus, ebenerdige Dusche rein. Familie blieb während der Arbeiten in der Wohnung.",
  },
  {
    title: "Werkstatt-Anbau in Mahlsdorf",
    location: "Berlin-Mahlsdorf",
    scope: "Holzständerbau 36 m²",
    duration: "8 Wochen",
    body: "Anbau mit Lärchenfassade. Genehmigung, Bodenplatte, Dach und Innenausbau in einer Bauphase.",
  },
];

const testimonials = [
  {
    quote:
      "Termin pünktlich, Preis wie besprochen, Wohnung sauberer hinterlassen als wir sie morgens verlassen hatten. Wir haben Petra inzwischen drei Nachbarn empfohlen.",
    name: "Familie Müller",
    location: "Berlin-Mitte",
    project: "Bad-Sanierung 2025",
  },
  {
    quote:
      "Wir hatten am Sonntag einen Wasserschaden. Innerhalb von 90 Minuten war jemand da, am Montag war alles trocken. Der Festpreis stand vorher fest.",
    name: "Hausverwaltung Bergmann",
    location: "Pankow",
    project: "Notdienst-Einsatz",
  },
];

const faqs = [
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "Für ein erstes Gespräch und das Aufmaß meistens innerhalb einer Woche. Die Bauphase planen wir gemeinsam — wir nennen Ihnen ein realistisches Startdatum, kein Wunschdatum.",
  },
  {
    q: "Was kostet ein Vor-Ort-Termin?",
    a: "Nichts. Wir kommen vorbei, hören zu, messen auf und schicken Ihnen schriftlich einen Festpreis. Erst wenn Sie zusagen, fangen wir an.",
  },
  {
    q: "Gibt es eine Garantie auf die Arbeit?",
    a: "Ja. Gesetzliche Gewährleistung von zwei Jahren auf alle Arbeiten, fünf Jahre auf tragende Bauteile. Wir kommen zurück, falls etwas nicht passt.",
  },
  {
    q: "Arbeiten Sie auch für Hausverwaltungen?",
    a: "Ja. Wir betreuen mehrere Verwaltungen im Berliner Stadtgebiet, von der Einzelreparatur bis zur Komplettmodernisierung.",
  },
  {
    q: "Wo arbeiten Sie?",
    a: "Berlin und das nähere Umland — bis ungefähr Potsdam, Oranienburg und Königs Wusterhausen. Bei größeren Projekten auch weiter.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — asymmetric. Headline left, portrait right.
          Inline proof badges replace any hero-metric block. */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="absolute inset-0 grid-paper opacity-40" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              Handwerk aus Berlin · seit 2013
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Sauberes Handwerk,
              <br />
              <span className="text-primary">ehrlich gerechnet.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-7 text-foreground/75">
              Petra ist ein Familienbetrieb für Sanierung, Reparatur und kleine
              Modernisierungen. Wir kommen pünktlich, schreiben den Preis vorher
              auf und räumen hinterher auf.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="tel:+493012345678"
                className={cn(
                  "inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90",
                )}
              >
                <Phone className="size-4" aria-hidden />
                <span>030 1234567 anrufen</span>
              </a>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex h-11 items-center gap-2 rounded-md border border-border bg-background px-5 text-base font-medium hover:bg-muted",
                )}
              >
                Angebot anfragen
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/70">
              <li className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary" aria-hidden />
                Festpreis vor Arbeitsbeginn
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary" aria-hidden />
                Rückruf innerhalb von 24 h
              </li>
              <li className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-primary" aria-hidden />
                Meisterbetrieb · Innung Berlin
              </li>
            </ul>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative">
              <ImagePlaceholder
                ratio={4 / 5}
                label="Meister im Einsatz"
                rounded="xl"
                className="ring-foreground/15"
              />
              <div className="absolute -bottom-4 -left-4 hidden rounded-md border border-border bg-background px-3 py-2 shadow-sm sm:block">
                <div className="flex items-center gap-2 text-xs">
                  <Star className="size-3.5 fill-primary text-primary" aria-hidden />
                  <span className="font-medium tabular-nums">4,9</span>
                  <span className="text-muted-foreground">
                    · 184 Bewertungen auf Google
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip — concrete proof, set as a horizontal scanner, not a hero-metric block. */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-4 px-4 py-6 sm:grid-cols-4 sm:px-6">
          {trustStrip.map((item) => (
            <div key={item.label} className="flex items-start gap-2.5">
              <ShieldCheck
                className="mt-0.5 size-4 text-foreground/55"
                aria-hidden
              />
              <div className="leading-tight">
                <div className="text-sm font-medium">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leistungen — featured + list. Avoids the identical-card grid antipattern. */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow mb-3">Leistungen</div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Wir machen das, was wir können — und sagen klar, was nicht.
            </h2>
          </div>
          <Link
            href="/leistungen"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            Alle Leistungen
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          {services.map((s, i) => {
            const Icon = s.icon;
            const featured = s.featured ?? false;
            return (
              <Link
                key={s.title}
                href={s.href}
                className={cn(
                  "group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-colors hover:bg-muted/50",
                  featured ? "md:col-span-6 md:row-span-2" : "md:col-span-6",
                  // Stagger sizes for visual rhythm.
                  i === 1 && "md:col-span-3",
                  i === 2 && "md:col-span-3",
                  i === 3 && "md:col-span-6",
                )}
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className={cn(
                      "size-6",
                      featured ? "text-primary" : "text-foreground/70",
                    )}
                    aria-hidden
                  />
                  <ArrowRight
                    className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </div>
                <div
                  className={cn(
                    "mt-6",
                    featured ? "max-w-md" : "",
                  )}
                >
                  <h3
                    className={cn(
                      "font-semibold tracking-tight",
                      featured ? "text-2xl" : "text-lg",
                    )}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-foreground/70",
                      featured ? "text-base leading-7" : "text-sm leading-6",
                    )}
                  >
                    {s.body}
                  </p>
                </div>
                {featured ? (
                  <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium">
                    <Sparkles className="size-3.5 text-primary" aria-hidden />
                    Schwerpunkt im Betrieb
                  </div>
                ) : null}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Process — numbered list with hairlines, not three cards. */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="eyebrow mb-3">Ablauf</div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                In drei Schritten zum fertigen Job.
              </h2>
              <p className="mt-5 text-foreground/70">
                Kein Kleingedrucktes, keine versteckten Kosten. Wir machen den
                Weg von der Anfrage bis zur Abnahme so transparent wie möglich.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
              >
                Jetzt Anfrage senden
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
            <ol className="md:col-span-8">
              {process.map((step, idx) => (
                <li
                  key={step.step}
                  className={cn(
                    "grid grid-cols-[auto_1fr] items-start gap-6 py-8",
                    idx > 0 && "border-t border-border",
                  )}
                >
                  <div className="flex flex-col items-start gap-2">
                    <span className="font-mono text-xs tracking-wider text-muted-foreground">
                      {step.step}
                    </span>
                    <span className="grid size-9 place-items-center rounded-full border border-border bg-background text-foreground">
                      {idx === 0 ? <Phone className="size-4" aria-hidden /> : null}
                      {idx === 1 ? <ClipboardList className="size-4" aria-hidden /> : null}
                      {idx === 2 ? <CheckCircle2 className="size-4" aria-hidden /> : null}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-prose text-foreground/70">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Referenzen — asymmetric: one big project + two small. */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow mb-3">Aus dem Werk­buch</div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Drei aktuelle Projekte.
            </h2>
          </div>
          <Link
            href="/referenzen"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground"
          >
            Alle Referenzen
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>

        {/* Feature row: image left, copy right, single horizontal beat. */}
        <article className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <ImagePlaceholder
              ratio={16 / 10}
              label="Vorher · Nachher"
              rounded="xl"
            />
          </div>
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5" aria-hidden />
              Projekt des Monats
            </div>
            <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {referenzen[0].title}
            </h3>
            <p className="mt-3 max-w-prose text-foreground/75">
              {referenzen[0].body}
            </p>
            <dl className="mt-6 grid grid-cols-3 gap-x-4 border-t border-border pt-5 text-sm">
              <div>
                <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                  Ort
                </dt>
                <dd className="mt-1 font-medium">{referenzen[0].location}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                  Umfang
                </dt>
                <dd className="mt-1 font-medium">{referenzen[0].scope}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                  Bauzeit
                </dt>
                <dd className="mt-1 font-medium">{referenzen[0].duration}</dd>
              </div>
            </dl>
          </div>
        </article>

        {/* Pair row: two equal-weight projects, identical ratio so they align. */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:gap-10">
          {referenzen.slice(1).map((r) => (
            <article key={r.title} className="flex flex-col">
              <ImagePlaceholder ratio={4 / 3} label={r.title} rounded="xl" />
              <div className="mt-5 flex flex-1 flex-col">
                <div className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                  {r.scope} · {r.duration}
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/75">
                  {r.body}
                </p>
                <div className="mt-auto pt-4 text-xs text-muted-foreground">
                  {r.location}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Kundenstimmen — two big quotes, not three icon cards. */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-10">
            <div className="eyebrow mb-3">Kundenstimmen</div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Was Kundinnen und Kunden sagen.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-lg border border-border bg-background p-7"
              >
                <Quote
                  className="size-5 text-primary"
                  aria-hidden
                />
                <blockquote className="mt-4 text-lg leading-8 text-foreground/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex flex-wrap items-baseline justify-between gap-2 border-t border-border pt-4 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-muted-foreground">
                    {t.location} · {t.project}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Notdienst strip — phone-first, quietly different from the rest. */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid items-center gap-6 rounded-lg border border-destructive/30 bg-destructive/8 p-6 md:grid-cols-12 md:p-8">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-background px-2.5 py-1 text-xs font-medium text-destructive">
              <Siren className="size-3.5" aria-hidden />
              Notdienst
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Wasserschaden? Heizung aus? Türschloss defekt?
            </h3>
            <p className="mt-2 text-foreground/75">
              Wir sind 24 Stunden am Tag erreichbar. Anfahrtspauschale und
              Stundensätze stehen vorher fest.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <a
              href="tel:+493012345678"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-destructive px-5 text-base font-medium text-destructive-foreground shadow-sm hover:bg-destructive/90"
            >
              <Phone className="size-4" aria-hidden />
              <span className="tabular-nums">030 1234567</span>
            </a>
            <div className="mt-3 text-xs text-muted-foreground">
              <Link href="/notdienst" className="hover:underline">
                Was bei einem Notfall zu tun ist →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing transparency — addresses the biggest objection. */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow mb-3">Preise</div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Was kostet das alles?
            </h2>
            <p className="mt-5 text-foreground/70">
              Bei größeren Arbeiten ein Festpreis nach Aufmaß. Bei kleinen
              Reparaturen ein klarer Stundensatz. Sie sehen den Preis, bevor wir
              den Schraubendreher ansetzen.
            </p>
            <Link
              href="/leistungen"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              Mehr zu Leistungen und Pakete
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <dl className="md:col-span-7">
            {[
              {
                label: "Vor-Ort-Termin & Aufmaß",
                value: "Kostenlos",
                note: "Beratung, Aufmaß und schriftliches Angebot.",
              },
              {
                label: "Stundensatz Geselle",
                value: "ab 78 €",
                note: "Reparaturen, kleine Arbeiten. Brutto, inkl. MwSt.",
              },
              {
                label: "Notdienst-Pauschale",
                value: "120 €",
                note: "An Wochenenden und nach 20 Uhr, plus Stundensatz.",
              },
              {
                label: "Sanierungspakete",
                value: "Festpreis",
                note: "Schriftlich vor Arbeitsbeginn, bindend.",
              },
            ].map((row, idx) => (
              <div
                key={row.label}
                className={cn(
                  "grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-5",
                  idx > 0 && "border-t border-border",
                )}
              >
                <dt className="text-base font-medium">{row.label}</dt>
                <dd className="font-mono text-base tabular-nums text-foreground">
                  {row.value}
                </dd>
                <p className="col-span-2 text-sm text-muted-foreground">
                  {row.note}
                </p>
              </div>
            ))}
            <p className="pt-3 text-xs text-muted-foreground">
              Alle Preise inkl. 19 % MwSt. Materialkosten werden zum Einkaufspreis
              + 10 % weitergegeben.
            </p>
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
          <div className="mb-10 text-center">
            <div className="eyebrow mb-3 inline-block">Häufige Fragen</div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Was Kunden uns am häufigsten fragen.
            </h2>
          </div>
          <Accordion
            className="overflow-hidden rounded-lg border border-border bg-background"
          >
            {faqs.map(({ q, a }, i) => (
              <AccordionItem key={q} value={`item-${i}`}>
                <AccordionTrigger className="px-5 text-left text-base font-medium">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="px-5 text-foreground/75">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Ihre Frage ist nicht dabei?{" "}
            <Link href="/contact" className="font-medium text-foreground hover:underline">
              Schreiben Sie uns
            </Link>{" "}
            — wir antworten am selben Werktag.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Sie haben etwas Konkretes im Sinn? Erzählen Sie es uns.
            </h2>
            <p className="mt-4 max-w-xl text-foreground/70">
              Anruf, Mail oder das Formular — wir melden uns am selben Werktag
              zurück. Innerhalb von Berlin und Umland kommen wir innerhalb von
              fünf Werktagen zum Aufmaß vorbei.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:col-span-5 md:justify-end">
            <a
              href="tel:+493012345678"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
            >
              <Phone className="size-4" aria-hidden />
              030 1234567
            </a>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-background px-5 text-base font-medium hover:bg-muted"
            >
              <HandCoins className="size-4" aria-hidden />
              Angebot anfragen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
