import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  Hammer,
  Phone,
  Siren,
  Wrench,
} from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Was wir anbieten — Sanierung, Reparatur, Beratung und Notdienst. Mit Festpreis vor Arbeitsbeginn und klaren Stundensätzen.",
};

type Leistung = {
  id: string;
  icon: typeof Hammer;
  eyebrow: string;
  title: string;
  intro: string;
  bullets: string[];
  pricing: { label: string; value: string }[];
  notes?: string;
};

const leistungen: Leistung[] = [
  {
    id: "sanierung",
    icon: Hammer,
    eyebrow: "Schwerpunkt",
    title: "Sanierung & Modernisierung",
    intro:
      "Von der einzelnen Wand bis zur Komplettsanierung. Wir planen den Ablauf so, dass Sie wenn möglich im Haus wohnen bleiben können, und liefern jeden Schritt mit einem schriftlichen Festpreis.",
    bullets: [
      "Altbau-Sanierung mit Erhalt von Stuck und Original-Substanz",
      "Bäder, Küchen, einzelne Räume — auf Wunsch barrierefrei",
      "Trockenbau, Putz, Estrich, Bodenbeläge",
      "Koordination der Gewerke (Elektrik, SHK, Maler) aus einer Hand",
    ],
    pricing: [
      { label: "Beratung & Aufmaß", value: "Kostenlos" },
      { label: "Vollsanierung pro m²", value: "ab 1.400 €" },
      { label: "Bad-Komplettumbau", value: "ab 14.000 €" },
    ],
    notes:
      "Bei Sanierungen über 25.000 € Auftragswert gerne in Zahlungsplänen nach Bauabschnitten.",
  },
  {
    id: "reparatur",
    icon: Wrench,
    eyebrow: "Schnell vor Ort",
    title: "Reparatur",
    intro:
      "Wenn etwas tropft, klemmt oder nicht mehr sitzt: anrufen, beschreiben, Termin bekommen. Die meisten Reparaturen erledigen wir innerhalb einer Woche.",
    bullets: [
      "Sanitär: tropfende Hähne, defekte Spülkästen, Abflussverstopfungen",
      "Heizung: Tauschen einzelner Heizkörper, Entlüften, Druckprüfung",
      "Türen, Fenster, Schlösser: einstellen, abdichten, austauschen",
      "Putz- und Anstrich-Reparaturen nach Wasserschaden",
    ],
    pricing: [
      { label: "Stundensatz Geselle", value: "78 €" },
      { label: "Stundensatz Meister", value: "98 €" },
      { label: "Anfahrtspauschale Berlin", value: "0 €" },
      { label: "Außerhalb Berlin", value: "0,80 €/km" },
    ],
  },
  {
    id: "beratung",
    icon: ClipboardList,
    eyebrow: "Vor dem ersten Schraubendreher",
    title: "Beratung & Aufmaß",
    intro:
      "Bevor wir loslegen, kommen wir vorbei. Wir messen auf, hören zu, sagen ehrlich, was geht und was nicht — und Sie bekommen einen schriftlichen Festpreis.",
    bullets: [
      "Vor-Ort-Termin innerhalb von einer Woche",
      "Schriftliches Angebot mit Festpreis und Termin",
      "Unverbindlich und kostenlos",
      "Beratung zu Förderungen (KfW, BAFA, IBB) wo es passt",
    ],
    pricing: [
      { label: "Erstgespräch", value: "Kostenlos" },
      { label: "Aufmaß & Angebot", value: "Kostenlos" },
      {
        label: "Detail­planung (auf Wunsch)",
        value: "ab 240 €",
      },
    ],
  },
  {
    id: "notdienst",
    icon: Siren,
    eyebrow: "24 Stunden, 7 Tage",
    title: "Notdienst",
    intro:
      "Wasserschaden, Heizungsausfall im Winter, defektes Schloss am Abend. Wir sind erreichbar — und der Preis steht vorher fest.",
    bullets: [
      "Erreichbar rund um die Uhr unter 030 1234567",
      "Erste Sicherung des Schadens innerhalb von 90 Minuten in Berlin",
      "Schriftliche Kostenübernahme-Bestätigung für die Versicherung",
      "Anfahrtspauschale und Stundensatz vorab transparent",
    ],
    pricing: [
      { label: "Notdienst-Pauschale", value: "120 €" },
      { label: "Stundensatz Notdienst", value: "138 €" },
      { label: "Innerhalb der Geschäftszeit", value: "Regulärer Stundensatz" },
    ],
    notes:
      "Notdienst gilt für Mo – Fr nach 20 Uhr, Wochenenden und Feiertage.",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="eyebrow mb-4">Leistungen</div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Vier Bereiche, sauber sortiert.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-7 text-foreground/75">
              Wir sagen offen, was wir machen — und genauso offen, was wir nicht
              machen. Wenn ein Auftrag besser bei einem spezialisierten Kollegen
              aufgehoben ist, vermitteln wir ihn weiter, statt es selbst zu
              probieren.
            </p>
          </div>
          <aside className="md:col-span-4">
            <nav aria-label="Inhalt" className="rounded-lg border border-border bg-muted/30 p-5">
              <div className="eyebrow mb-3">Inhalt</div>
              <ul className="space-y-2 text-sm">
                {leistungen.map((l, i) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      className="flex items-baseline gap-3 text-foreground/80 hover:text-foreground"
                    >
                      <span className="font-mono text-xs text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span>{l.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {leistungen.map((l, idx) => {
          const Icon = l.icon;
          const reverse = idx % 2 === 1;
          return (
            <section
              key={l.id}
              id={l.id}
              className={cn(
                "scroll-mt-20 grid gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24",
                idx > 0 && "border-t border-border",
              )}
            >
              <div className={cn("md:col-span-7", reverse && "md:order-2")}>
                <div className="eyebrow mb-3 flex items-center gap-2">
                  <span className="font-mono text-foreground/80">0{idx + 1}</span>
                  <span aria-hidden className="text-border">
                    /
                  </span>
                  <span>{l.eyebrow}</span>
                </div>
                <h2 className="flex items-start gap-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  <Icon className="mt-1 size-7 text-brand" aria-hidden />
                  {l.title}
                </h2>
                <p className="mt-5 max-w-prose text-foreground/75">{l.intro}</p>

                <ul className="mt-7 space-y-3">
                  {l.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-foreground/85"
                    >
                      <CheckCircle2
                        className="mt-1 size-4 shrink-0 text-brand"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center gap-2 rounded-md bg-brand px-4 text-sm font-medium text-brand-foreground hover:bg-brand/90"
                  >
                    Anfrage senden
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                  <a
                    href="tel:+493012345678"
                    className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium hover:bg-muted"
                  >
                    <Phone className="size-4" aria-hidden />
                    030 1234567
                  </a>
                </div>
              </div>

              <div className={cn("md:col-span-5", reverse && "md:order-1")}>
                <ImagePlaceholder
                  ratio={4 / 5}
                  label={l.title}
                  rounded="xl"
                  className="mb-5"
                />
                <dl className="rounded-lg border border-border bg-card p-5">
                  <div className="eyebrow mb-3">Preise</div>
                  {l.pricing.map((row, i) => (
                    <div
                      key={row.label}
                      className={cn(
                        "flex items-baseline justify-between gap-4 py-2.5",
                        i > 0 && "border-t border-border",
                      )}
                    >
                      <dt className="text-sm text-foreground/80">{row.label}</dt>
                      <dd className="font-mono text-sm tabular-nums">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                  {l.notes ? (
                    <p className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">
                      {l.notes}
                    </p>
                  ) : null}
                </dl>
              </div>
            </section>
          );
        })}
      </div>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="text-balance text-3xl font-semibold tracking-tight">
                Nicht sicher, ob wir der richtige Betrieb sind?
              </h2>
              <p className="mt-3 max-w-2xl text-foreground/75">
                Rufen Sie an und beschreiben Sie kurz, was ansteht. Wenn wir es
                machen können, sagen wir es. Wenn nicht, kennen wir meistens
                jemanden in der Region, der genau das macht.
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
        </div>
      </section>
    </>
  );
}
