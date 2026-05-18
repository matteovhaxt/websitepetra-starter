import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Droplets,
  Flame,
  KeyRound,
  Phone,
  Siren,
  Wind,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Notdienst rund um die Uhr",
  description:
    "Wasserschaden, Heizungsausfall, defektes Schloss: Wir sind 24/7 erreichbar. Anfahrtspauschale und Stundensatz vorab transparent.",
};

const coverage = [
  {
    icon: Droplets,
    title: "Wasserschaden",
    body: "Rohrbruch, Eckventil-Defekt, undichter Anschluss. Wir stoppen die Wasserzufuhr und sichern die Räume.",
  },
  {
    icon: Flame,
    title: "Heizung aus",
    body: "Ausgefallene Brenner, defekte Umwälzpumpen, kalte Heizkörper im Winter. Wir kommen am selben Tag.",
  },
  {
    icon: KeyRound,
    title: "Türschloss & Tür",
    body: "Wohnungstür klemmt, Schlüssel abgebrochen, Schloss nach Einbruch defekt — wir öffnen und sichern.",
  },
  {
    icon: Wind,
    title: "Sturm- und Glasschaden",
    body: "Eingedrückte Fenster, beschädigte Türen, abgerissene Regenrinnen — provisorische Sicherung und Bericht für die Versicherung.",
  },
];

const before = [
  "Wasserhaupthahn schließen (meist im Keller oder im Bad-Vorraum).",
  "Bei Heizungsausfall im Winter: Fenster und Türen geschlossen halten, Heizkörper voll aufdrehen.",
  "Bei Einbruchsschaden: nichts anfassen, Türen nicht selbst neu schließen.",
  "Fotos vom Schaden machen — das hilft uns und Ihrer Versicherung.",
];

const fees = [
  {
    label: "Anfahrtspauschale Berlin",
    value: "120 €",
    note: "Brutto, inkl. MwSt. Bei Beauftragung des Reparaturauftrags entfällt sie.",
  },
  {
    label: "Stundensatz Notdienst",
    value: "138 €",
    note: "Mo – Fr ab 20 Uhr, Wochenende, Feiertage. Innerhalb der Geschäftszeit zum regulären Satz.",
  },
  {
    label: "Material",
    value: "Einkaufspreis + 10 %",
    note: "Belege liegen dem Schlussangebot bei.",
  },
];

const faqs = [
  {
    q: "Wie schnell sind Sie da?",
    a: "Innerhalb des Berliner Stadtgebiets in der Regel unter 90 Minuten, oft schneller. Im näheren Umland (Potsdam, Bernau, Königs Wusterhausen) typisch 90 – 150 Minuten.",
  },
  {
    q: "Übernimmt die Versicherung den Notdienst?",
    a: "Meistens ja, wenn es sich um einen versicherten Schadensfall handelt. Wir stellen Ihnen einen schriftlichen Schadens­bericht aus, den Sie direkt bei der Versicherung einreichen können.",
  },
  {
    q: "Was kostet ein Notdienst-Einsatz im Durchschnitt?",
    a: "Sicherung eines Wasserschadens liegt typisch zwischen 280 und 480 Euro inklusive Anfahrt. Den genauen Preis können wir aber erst nach Sichtung vor Ort verbindlich nennen.",
  },
];

export default function NotdienstPage() {
  return (
    <>
      {/* Hero — phone first, big and unmissable. */}
      <section className="border-b border-border bg-destructive/5">
        <div className="mx-auto w-full max-w-6xl px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-background px-3 py-1 text-xs font-medium text-destructive">
            <Siren className="size-3.5" aria-hidden />
            Notdienst
          </div>
          <div className="mt-5 grid items-start gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Schaden jetzt? Wir sind in 90 Minuten bei Ihnen.
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-7 text-foreground/80">
                24 Stunden am Tag, auch sonntags und an Feiertagen. Anfahrt und
                Stundensatz nennen wir Ihnen am Telefon, bevor wir losfahren.
              </p>
            </div>
            <div className="md:col-span-5">
              <a
                href="tel:+493012345678"
                className="block rounded-lg border border-destructive/40 bg-destructive p-6 text-destructive-foreground shadow-sm transition-transform hover:scale-[1.01]"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-wider opacity-80">
                  <span>Direkt anrufen</span>
                  <span>24 / 7</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <Phone className="size-6" aria-hidden />
                  <span className="text-3xl font-semibold tabular-nums sm:text-4xl">
                    030 1234567
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm opacity-90">
                  <Clock className="size-4" aria-hidden />
                  Durchschnittliche Reaktionszeit: 28 Minuten
                </div>
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Anrufe an die Nummer werden Tag und Nacht entgegengenommen. Wenn
                wir gerade unterwegs sind, rufen wir innerhalb von 10 Minuten
                zurück.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <div className="eyebrow mb-3">Wofür wir kommen</div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Die vier häufigsten Notfälle, mit denen man uns anruft.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {coverage.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="bg-card p-6">
                <Icon className="size-5 text-destructive" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/75">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* What to do before we get there */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow mb-3 flex items-center gap-2">
              <AlertTriangle className="size-4 text-destructive" aria-hidden />
              Bis wir da sind
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Vier Schritte, die den Schaden begrenzen.
            </h2>
            <p className="mt-4 text-foreground/75">
              Während Sie auf uns warten, lässt sich der Schaden meist deutlich
              eindämmen. Wenn etwas unklar ist, sagen wir es Ihnen am Telefon.
            </p>
          </div>
          <ol className="md:col-span-7">
            {before.map((step, i) => (
              <li
                key={step}
                className={cn(
                  "grid grid-cols-[auto_1fr] items-start gap-5 py-5",
                  i > 0 && "border-t border-border",
                )}
              >
                <span className="font-mono text-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="text-foreground/85">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fee transparency */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow mb-3">Preise</div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Was ein Notdienst-Einsatz kostet.
            </h2>
            <p className="mt-4 text-foreground/75">
              Keine bösen Überraschungen. Wir sagen Ihnen die Konditionen am
              Telefon, bevor wir losfahren. Wenn Sie den Reparaturauftrag
              direkt erteilen, entfällt die Anfahrtspauschale.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                Festpreis schriftlich vor jeder größeren Reparatur
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                Schadens­bericht für die Versicherung inklusive
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                Materialbelege liegen dem Schlussangebot bei
              </li>
            </ul>
          </div>
          <dl className="md:col-span-7">
            {fees.map((row, i) => (
              <div
                key={row.label}
                className={cn(
                  "grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-5",
                  i > 0 && "border-t border-border",
                )}
              >
                <dt className="text-base font-medium">{row.label}</dt>
                <dd className="font-mono text-base tabular-nums">{row.value}</dd>
                <p className="col-span-2 text-sm text-muted-foreground">
                  {row.note}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ + final phone */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto w-full max-w-3xl px-4 py-20 sm:px-6">
          <div className="eyebrow mb-3 text-center">Häufige Fragen</div>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight">
            Was Anrufer am Telefon meistens wissen wollen.
          </h2>
          <dl className="mt-10 divide-y divide-border rounded-lg border border-border bg-background">
            {faqs.map((f) => (
              <div key={f.q} className="p-5">
                <dt className="text-base font-medium">{f.q}</dt>
                <dd className="mt-2 text-foreground/75">{f.a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-col items-center gap-3">
            <a
              href="tel:+493012345678"
              className="inline-flex h-12 items-center gap-2 rounded-md bg-destructive px-6 text-base font-medium text-destructive-foreground shadow-sm hover:bg-destructive/90"
            >
              <Phone className="size-4" aria-hidden />
              <span className="tabular-nums">030 1234567 anrufen</span>
            </a>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline"
            >
              Kein Notfall? Hier gehts zur normalen Anfrage.
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
