import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Ruler,
  Sparkles,
} from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Sechs aktuelle Projekte aus unserer Werkstatt — Sanierungen, Reparaturen und Notdienst-Einsätze in Berlin und Umland.",
};

type Projekt = {
  slug: string;
  title: string;
  location: string;
  year: string;
  scope: string;
  duration: string;
  body: string;
  outcome?: string;
  category: "Sanierung" | "Reparatur" | "Anbau" | "Notdienst";
};

const projekte: Projekt[] = [
  {
    slug: "altbau-kreuzberg",
    title: "Altbau-Sanierung in Kreuzberg",
    location: "Berlin-Kreuzberg",
    year: "2025",
    scope: "Vollsanierung 92 m²",
    duration: "12 Wochen",
    body: "Gründerzeit-Wohnung mit Originalstuck. Wir haben die historische Substanz erhalten, die Elektrik komplett neu verlegt, das Bad ebenerdig umgebaut und die Holzfenster aufgearbeitet statt sie zu tauschen.",
    outcome: "Schriftlicher Festpreis eingehalten, Übergabe pünktlich.",
    category: "Sanierung",
  },
  {
    slug: "bad-pankow",
    title: "Bad-Umbau in Pankow",
    location: "Berlin-Pankow",
    year: "2025",
    scope: "Bad 8 m²",
    duration: "3 Wochen",
    body: "Wanne raus, ebenerdige Dusche rein, Mosaik bis zur Decke. Familie mit zwei Kindern blieb während der Arbeiten in der Wohnung.",
    outcome: "Festpreis 18.400 € · gehalten.",
    category: "Sanierung",
  },
  {
    slug: "werkstatt-mahlsdorf",
    title: "Werkstatt-Anbau in Mahlsdorf",
    location: "Berlin-Mahlsdorf",
    year: "2024",
    scope: "Holzständerbau 36 m²",
    duration: "8 Wochen",
    body: "Kompletter Anbau in Holzständerbauweise mit Lärchenfassade. Genehmigung, Bodenplatte, Dach und Innenausbau in einer Bauphase ausgeführt.",
    outcome: "Bauherr ist seit zwei Jahren eingezogen, alles trocken.",
    category: "Anbau",
  },
  {
    slug: "wasserschaden-charlottenburg",
    title: "Wasserschaden im Altbau-Erdgeschoss",
    location: "Berlin-Charlottenburg",
    year: "2025",
    scope: "Notdienst & Trocknung",
    duration: "90 Min. bis vor Ort",
    body: "Sonntagmittag, defektes Eckventil im Geschoss darüber. Wir haben das Wasser gestoppt, die Räume getrocknet und montags den Schadens­bericht für die Versicherung übergeben.",
    category: "Notdienst",
  },
  {
    slug: "kueche-friedrichshain",
    title: "Küchen-Modernisierung in Friedrichshain",
    location: "Berlin-Friedrichshain",
    year: "2024",
    scope: "Küche 14 m²",
    duration: "2 Wochen",
    body: "Vorhandene Schreinerei-Fronten aufgearbeitet, Elektrik und Wasser auf den neuesten Stand gebracht, Arbeitsplatte aus heimischer Eiche.",
    category: "Sanierung",
  },
  {
    slug: "fenster-prenzlauer-berg",
    title: "Fensteraufarbeitung in Prenzlauer Berg",
    location: "Berlin-Prenzlauer Berg",
    year: "2024",
    scope: "12 Kastenfenster",
    duration: "5 Wochen",
    body: "Historische Kastenfenster aufgearbeitet statt ersetzt. Beschläge erneuert, abgedichtet, neu gestrichen — denkmal­gerecht.",
    category: "Reparatur",
  },
];

const [feature, pairA, pairB, tripleA, tripleB, tripleC] = projekte;

function Meta({ p, className }: { p: Projekt; className?: string }) {
  return (
    <dl
      className={cn(
        "grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-xs text-foreground/70",
        className,
      )}
    >
      <dt className="sr-only">Ort</dt>
      <dd className="flex items-center gap-1.5 col-span-2">
        <MapPin className="size-3.5 text-foreground/45" aria-hidden />
        {p.location}
      </dd>
      <dt className="sr-only">Umfang</dt>
      <dd className="flex items-center gap-1.5 col-span-2">
        <Ruler className="size-3.5 text-foreground/45" aria-hidden />
        {p.scope}
      </dd>
      <dt className="sr-only">Bauzeit</dt>
      <dd className="flex items-center gap-1.5 col-span-2">
        <Calendar className="size-3.5 text-foreground/45" aria-hidden />
        {p.duration}
      </dd>
    </dl>
  );
}

function CategoryTag({
  category,
  year,
}: {
  category: Projekt["category"];
  year: string;
}) {
  return (
    <div className="flex items-center gap-2 font-mono text-[0.7rem] tracking-wider uppercase text-muted-foreground">
      <span>{category}</span>
      <span aria-hidden className="text-border">
        ·
      </span>
      <span className="tabular-nums">{year}</span>
    </div>
  );
}

export default function ReferenzenPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="eyebrow mb-4">Referenzen</div>
          <div className="grid items-end gap-10 md:grid-cols-12">
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:col-span-8">
              Was wir in den letzten zwölf Monaten gemacht haben.
            </h1>
            <div className="md:col-span-4">
              <p className="text-pretty text-foreground/75">
                Sechs ausgewählte Projekte aus Berlin und Umland. Mit Standort,
                Umfang und tatsächlicher Bauzeit.
              </p>
              <div className="mt-5 flex items-center gap-3 text-xs">
                <span className="inline-flex h-7 items-center gap-1.5 rounded-full border border-border bg-background px-3">
                  <Sparkles className="size-3.5 text-primary" aria-hidden />
                  <span className="font-medium">6 Projekte</span>
                </span>
                <span className="text-muted-foreground">aus 2024 – 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Band 1 — Feature project. Image left dominates, copy and meta right. */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <article className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <ImagePlaceholder
                ratio={16 / 11}
                label={feature.title}
                rounded="xl"
              />
            </div>
            <div className="md:col-span-5 md:pt-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-primary">
                <Sparkles className="size-3.5" aria-hidden />
                Projekt des Monats
              </div>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                {feature.title}
              </h2>
              <p className="mt-4 text-foreground/75">{feature.body}</p>
              {feature.outcome ? (
                <p className="mt-4 rounded-md bg-muted px-4 py-3 text-sm text-foreground/85">
                  <span className="font-medium">Ergebnis: </span>
                  {feature.outcome}
                </p>
              ) : null}
              <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-3 border-t border-border pt-5 text-sm">
                <div>
                  <div className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    Ort
                  </div>
                  <div className="mt-1 font-medium">{feature.location}</div>
                </div>
                <div>
                  <div className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    Umfang
                  </div>
                  <div className="mt-1 font-medium">{feature.scope}</div>
                </div>
                <div>
                  <div className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                    Bauzeit
                  </div>
                  <div className="mt-1 font-medium">{feature.duration}</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Band 2 — Two medium projects, side by side. Same image ratio so they align. */}
      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:gap-8">
            {[pairA, pairB].map((p) => (
              <article key={p.slug} className="flex flex-col">
                <ImagePlaceholder ratio={4 / 3} label={p.title} rounded="xl" />
                <div className="mt-5 flex flex-1 flex-col">
                  <CategoryTag category={p.category} year={p.year} />
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-foreground/75">{p.body}</p>
                  {p.outcome ? (
                    <p className="mt-3 text-sm text-foreground/80">
                      <span className="font-medium">Ergebnis: </span>
                      {p.outcome}
                    </p>
                  ) : null}
                  <Meta p={p} className="mt-auto pt-5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Band 3 — Three small projects, equal columns, portrait images. */}
      <section>
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Drei weitere Projekte.
            </h2>
            <p className="text-sm text-muted-foreground">
              Reparatur, Anbau und Detailarbeit.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[tripleA, tripleB, tripleC].map((p) => (
              <article key={p.slug} className="flex flex-col">
                <ImagePlaceholder ratio={4 / 5} label={p.title} rounded="lg" />
                <div className="mt-4 flex flex-1 flex-col">
                  <CategoryTag category={p.category} year={p.year} />
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/75">
                    {p.body}
                  </p>
                  <Meta p={p} className="mt-auto pt-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="text-balance text-3xl font-semibold tracking-tight">
                Ihr Projekt fühlt sich ähnlich an?
              </h2>
              <p className="mt-3 max-w-2xl text-foreground/75">
                Rufen Sie an oder schicken Sie uns ein paar Fotos — wir sagen
                Ihnen am Telefon, ob wir der richtige Betrieb sind und wie der
                grobe Kostenrahmen aussieht.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:col-span-4 md:justify-end">
              <a
                href="tel:+493012345678"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                <Phone className="size-4" aria-hidden />
                Anrufen
              </a>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-background px-5 text-sm font-medium hover:bg-muted"
              >
                Anfrage senden
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
