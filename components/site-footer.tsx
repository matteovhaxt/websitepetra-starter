import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

const services = [
  { href: "/leistungen#beratung", label: "Beratung & Aufmaß" },
  { href: "/leistungen#sanierung", label: "Sanierung" },
  { href: "/leistungen#reparatur", label: "Reparatur" },
  { href: "/notdienst", label: "Notdienst 24/7" },
];

const company = [
  { href: "/about", label: "Über uns" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/blog", label: "Ratgeber" },
  { href: "/contact", label: "Kontakt" },
];

const legal = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
];

const openingHours = [
  { days: "Mo – Do", hours: "8:00 – 18:00" },
  { days: "Freitag", hours: "8:00 – 17:00" },
  { days: "Samstag", hours: "9:00 – 14:00" },
  { days: "Sonntag", hours: "Geschlossen" },
];

const trustSignals = [
  "Meisterbetrieb",
  "Mitglied der Innung",
  "Eingetragen in der Handwerksrolle",
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-5 md:col-span-4">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="grid size-7 place-items-center rounded-sm bg-foreground text-background font-mono text-[0.7rem] font-bold"
              >
                P
              </span>
              <span className="font-semibold tracking-tight">Petra</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Familienbetrieb aus der Region. Sauberes Handwerk, ehrliche
              Preise, schneller Rückruf — seit 2013.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 text-foreground/60" aria-hidden />
                <a
                  href="tel:+493012345678"
                  className="font-medium tabular-nums hover:underline"
                >
                  030 1234567
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 text-foreground/60" aria-hidden />
                <a
                  href="mailto:hallo@petra.example"
                  className="hover:underline"
                >
                  hallo@petra.example
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 text-foreground/60" aria-hidden />
                <address className="not-italic text-muted-foreground">
                  Musterstraße 12
                  <br />
                  10115 Berlin
                </address>
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-sm md:col-span-2">
            <div className="eyebrow">Leistungen</div>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-foreground hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-sm md:col-span-2">
            <div className="eyebrow">Betrieb</div>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 hover:text-foreground hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-sm md:col-span-4">
            <div className="eyebrow">Öffnungszeiten</div>
            <dl className="space-y-1.5">
              {openingHours.map(({ days, hours }) => (
                <div
                  key={days}
                  className="flex items-baseline justify-between gap-4"
                >
                  <dt className="text-foreground/80">{days}</dt>
                  <dd className="tabular-nums text-muted-foreground">{hours}</dd>
                </div>
              ))}
            </dl>
            <p className="pt-2 text-xs text-muted-foreground">
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
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-md border border-border bg-background px-4 py-3 text-xs text-muted-foreground">
          <ShieldCheck className="size-4 text-foreground/60" aria-hidden />
          {trustSignals.map((label, i) => (
            <span key={label} className="flex items-center gap-3">
              <span className="text-foreground/80">{label}</span>
              {i < trustSignals.length - 1 ? (
                <span aria-hidden className="text-border">
                  ·
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6">
          <p>© {new Date().getFullYear()} Petra Handwerk · Alle Rechte vorbehalten.</p>
          <nav className="flex items-center gap-5">
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
