import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  CalendarDays,
  HardHat,
  HeartHandshake,
  Phone,
  Quote,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Petra ist ein Familienbetrieb aus Berlin. Wer wir sind, wie wir arbeiten und was uns wichtig ist.",
};

const team = [
  {
    name: "Max Mustermann",
    role: "Meister · Geschäftsführung",
    detail: "Maurer- und Betonbauermeister, im Betrieb seit Übernahme 2013.",
  },
  {
    name: "Sabine Mustermann",
    role: "Büro · Kostenvoranschläge",
    detail: "Kümmert sich um Angebote, Termine und die Versicherungs­abwicklung.",
  },
  {
    name: "Jan Berger",
    role: "Geselle · Sanitär & Reparatur",
    detail: "Seit 2017 dabei. Schwerpunkt Bad-Sanierung und Notdienst.",
  },
  {
    name: "Younes el Idrissi",
    role: "Geselle · Trockenbau & Putz",
    detail: "Im Betrieb seit 2020. Spricht Deutsch, Französisch und Arabisch.",
  },
];

const values = [
  {
    icon: HardHat,
    title: "Wir machen, was wir können.",
    body: "Spezialisierung statt Allround. Wenn ein Auftrag besser bei einem Kollegen aufgehoben ist, vermitteln wir ihn — und sagen das auch klar.",
  },
  {
    icon: Ruler,
    title: "Der Preis steht vorher.",
    body: "Wir messen auf, schreiben den Festpreis und halten ihn ein. Materialbelege legen wir bei. Wer einen Stundensatz statt eines Festpreises will, bekommt einen.",
  },
  {
    icon: HeartHandshake,
    title: "Aufräumen gehört zur Arbeit.",
    body: "Eine Baustelle, die mittags so aussieht wie morgens. Eine Übergabe, bei der nichts in der Ecke steht. Dafür müssen Sie nicht extra bitten.",
  },
];

const timeline = [
  {
    year: "1962",
    title: "Gründung als Ein-Mann-Betrieb in Berlin-Mitte",
    body: "Max Mustermanns Großvater eröffnet eine kleine Maurerwerkstatt.",
  },
  {
    year: "1998",
    title: "Erste Meisterprüfung der zweiten Generation",
    body: "Übernahme durch Klaus Mustermann, Erweiterung um Sanitärarbeiten.",
  },
  {
    year: "2013",
    title: "Übergabe an Max Mustermann",
    body: "Petra wird zur GmbH. Schwerpunkt verschiebt sich auf Altbau-Sanierungen.",
  },
  {
    year: "2020",
    title: "Eigene Werkstatt in der Musterstraße",
    body: "Lager, Werkstatt und Büro unter einem Dach. Vier feste Mitarbeitende.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — quote-led, no centered-stack template. */}
      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="eyebrow mb-4">Über uns</div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Familienbetrieb in
              <br />
              <span className="text-brand">dritter Generation.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-7 text-foreground/75">
              Petra ist ein kleiner Berliner Handwerksbetrieb. Vier feste
              Mitarbeitende, eine Werkstatt in Mitte, ein Schwerpunkt auf
              Altbau-Sanierung. Wir nehmen nur so viele Aufträge an, wie wir
              gut machen können.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="tel:+493012345678"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-brand px-5 text-base font-medium text-brand-foreground hover:bg-brand/90"
              >
                <Phone className="size-4" aria-hidden />
                Mit uns sprechen
              </a>
              <Link
                href="/referenzen"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-background px-5 text-base font-medium hover:bg-muted"
              >
                Unsere Projekte ansehen
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <ImagePlaceholder
              ratio={4 / 5}
              label="Werkstatt Musterstraße"
              rounded="xl"
            />
            <figure className="mt-5 rounded-md border border-border bg-muted/30 p-5">
              <Quote className="size-4 text-brand" aria-hidden />
              <blockquote className="mt-3 text-base leading-7">
                Mein Großvater hat gesagt: „Wer ehrlich misst, kann ehrlich
                abrechnen.“ Daran versuchen wir uns zu halten.
              </blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">
                Max Mustermann · Meister und Inhaber
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Values — three quietly-distinct blocks, not identical icon cards. */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12">
          <div className="eyebrow mb-3">Was uns wichtig ist</div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Drei Sätze, die seit zwölf Jahren gelten.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="bg-card p-7">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  <Icon className="size-5 text-brand" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {v.title}
                </h3>
                <p className="mt-3 leading-7 text-foreground/75">{v.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline — dates as anchors, prose alongside. */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow mb-3 flex items-center gap-2">
              <CalendarDays className="size-4 text-foreground/55" aria-hidden />
              Geschichte
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Vier Stationen, ein roter Faden.
            </h2>
            <p className="mt-4 text-foreground/75">
              Der Betrieb ist 1962 entstanden. Was sich verändert hat: die
              Werkzeuge, die Gesetze, die Generation am Werkzeug. Was geblieben
              ist: dass wir den Festpreis vor dem ersten Schraubendreher
              schriftlich machen.
            </p>
          </div>
          <ol className="md:col-span-8">
            {timeline.map((t, i) => (
              <li
                key={t.year}
                className={cn(
                  "grid grid-cols-[auto_1fr] items-baseline gap-x-8 py-6",
                  i > 0 && "border-t border-border",
                )}
              >
                <span className="font-mono text-sm tabular-nums text-muted-foreground">
                  {t.year}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-foreground/75">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team — small, named, with role. No stock photos. */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow mb-3">Team</div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Vier Köpfe, ein Telefon.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-foreground/70">
            Wer ans Telefon geht, kennt jede Baustelle persönlich. Wer auf die
            Baustelle kommt, hat den Anruf mitgehört.
          </p>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person) => (
            <li key={person.name} className="bg-card p-6">
              <ImagePlaceholder
                ratio={4 / 5}
                label={person.name}
                rounded="lg"
                className="mb-5 ring-foreground/10"
              />
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {person.role}
              </div>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {person.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground/75">
                {person.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Trust signals strip */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-12 sm:grid-cols-4 sm:px-6">
          {[
            { icon: Award, label: "Meisterbetrieb", sub: "HwK Berlin" },
            { icon: ShieldCheck, label: "Innungsmitglied", sub: "Bau-Innung Berlin" },
            { icon: Wrench, label: "Eigene Werkstatt", sub: "Material auf Lager" },
            { icon: HeartHandshake, label: "Familienbetrieb", sub: "Seit 1962" },
          ].map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.label} className="flex items-start gap-3">
                <Icon className="mt-0.5 size-5 text-foreground/60" aria-hidden />
                <div className="leading-tight">
                  <div className="font-medium">{t.label}</div>
                  <div className="text-sm text-muted-foreground">{t.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Sie haben ein konkretes Projekt im Sinn?
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/75">
              Anruf oder Mail — wir antworten am selben Werktag. Für den
              Vor-Ort-Termin innerhalb von Berlin bekommen Sie meistens schon
              in der laufenden Woche einen Vorschlag.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:col-span-4 md:justify-end">
            <a
              href="tel:+493012345678"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-brand px-5 text-sm font-medium text-brand-foreground hover:bg-brand/90"
            >
              <Phone className="size-4" aria-hidden />
              Anrufen
            </a>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-background px-5 text-sm font-medium hover:bg-muted"
            >
              Anfrage senden
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
