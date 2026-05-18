import type { Metadata } from "next";
import Link from "next/link";
import {
  Camera,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Rufen Sie uns an oder schicken Sie eine Anfrage. Wir antworten am selben Werktag.",
};

const channels = [
  {
    icon: Phone,
    label: "030 1234567",
    sub: "Mo – Fr 8 – 18 Uhr · Sa 9 – 14 Uhr",
    href: "tel:+493012345678",
    primary: true,
  },
  {
    icon: Mail,
    label: "hallo@petra.example",
    sub: "Antwort am selben Werktag.",
    href: "mailto:hallo@petra.example",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    sub: "Schicken Sie uns Fotos vom Schaden.",
    href: "https://wa.me/493012345678",
  },
];

const hours = [
  { days: "Mo – Do", hours: "8:00 – 18:00" },
  { days: "Freitag", hours: "8:00 – 17:00" },
  { days: "Samstag", hours: "9:00 – 14:00" },
  { days: "Sonntag", hours: "Notdienst" },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="eyebrow mb-4">Kontakt</div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Am liebsten am Telefon.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-7 text-foreground/75">
              Die meisten Aufträge entstehen aus einem kurzen Anruf. Wer
              schreiben möchte: Formular oder Mail, beides geht. Wir antworten
              am selben Werktag.
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className={`flex h-full flex-col gap-2 rounded-lg border p-4 transition-colors ${
                        c.primary
                          ? "border-primary/40 bg-primary/8 hover:bg-primary/12"
                          : "border-border bg-background hover:bg-muted"
                      }`}
                    >
                      <Icon
                        className={`size-4 ${c.primary ? "text-primary" : "text-foreground/60"}`}
                        aria-hidden
                      />
                      <div className="text-base font-medium tabular-nums">
                        {c.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {c.sub}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <aside className="md:col-span-5">
            <div className="rounded-lg border border-border bg-muted/30 p-6">
              <div className="eyebrow mb-3">Werkstatt & Büro</div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 text-foreground/60" aria-hidden />
                <address className="not-italic leading-7">
                  Petra Handwerk GmbH
                  <br />
                  Musterstraße 12
                  <br />
                  10115 Berlin
                </address>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <div className="eyebrow mb-3">Öffnungszeiten</div>
                <dl className="space-y-1.5 text-sm">
                  {hours.map(({ days, hours }) => (
                    <div
                      key={days}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <dt className="text-foreground/80">{days}</dt>
                      <dd className="tabular-nums text-muted-foreground">
                        {hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p className="mt-5 border-t border-border pt-5 text-xs text-muted-foreground">
                Notdienst außerhalb dieser Zeiten unter{" "}
                <a
                  href="tel:+493012345678"
                  className="font-medium text-foreground underline"
                >
                  030 1234567
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Anfrage form */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow mb-3">Schriftliche Anfrage</div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Erzählen Sie uns kurz, worum es geht.
            </h2>
            <p className="mt-4 text-foreground/75">
              Ein paar Sätze reichen. Wenn Sie ein Foto vom Schaden, vom Raum
              oder von der gewünschten Stelle anhängen, können wir die Anfrage
              meistens schon ohne Vor-Ort-Termin grob einordnen.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/70">
              <li>· Antwort am selben Werktag</li>
              <li>· Vor-Ort-Termin innerhalb von einer Woche</li>
              <li>· Festpreis schriftlich, kostenlos</li>
            </ul>
          </div>

          <form
            className="md:col-span-7"
            action="/api/contact"
            method="post"
            encType="multipart/form-data"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Name <span className="text-primary">*</span>
                </label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Telefon <span className="text-primary">*</span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium"
                >
                  E-Mail
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="postcode"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Postleitzahl der Baustelle{" "}
                  <span className="text-primary">*</span>
                </label>
                <Input
                  id="postcode"
                  name="postcode"
                  required
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  placeholder="10115"
                  className="max-w-[10rem]"
                />
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Hilft uns, gleich zu sagen, ob wir das Einzugsgebiet abdecken.
                </p>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Worum geht es? <span className="text-primary">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Was ist passiert oder geplant? Wann soll es losgehen? Gibt es schon ein Aufmaß?"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="photos"
                  className="flex cursor-pointer items-start gap-3 rounded-lg border border-dashed border-border bg-muted/30 p-4 transition-colors hover:bg-muted/50"
                >
                  <Camera className="mt-0.5 size-5 text-foreground/60" aria-hidden />
                  <div className="flex-1">
                    <div className="text-sm font-medium">
                      Fotos anhängen (optional)
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Bis zu vier Bilder, je max. 8 MB. Hilft besonders bei
                      Schäden, Bädern und Altbau-Aufnahmen.
                    </p>
                  </div>
                  <input
                    id="photos"
                    name="photos"
                    type="file"
                    multiple
                    accept="image/*"
                    className="sr-only"
                  />
                </label>
              </div>

              <div className="sm:col-span-2 flex items-start gap-3 pt-2">
                <Checkbox id="consent" name="consent" required />
                <label
                  htmlFor="consent"
                  className="text-sm leading-6 text-foreground/80"
                >
                  Ich willige ein, dass meine Angaben zur Bearbeitung dieser
                  Anfrage gespeichert werden. Details in der{" "}
                  <Link
                    href="/datenschutz"
                    className="font-medium text-foreground underline"
                  >
                    Datenschutzerklärung
                  </Link>
                  . Die Einwilligung kann ich jederzeit widerrufen.
                </label>
              </div>

              <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  <Send className="size-4" aria-hidden />
                  Anfrage senden
                </button>
                <p className="text-xs text-muted-foreground">
                  Lieber sprechen?{" "}
                  <a
                    href="tel:+493012345678"
                    className="font-medium text-foreground underline"
                  >
                    030 1234567
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
