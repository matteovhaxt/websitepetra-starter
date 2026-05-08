import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
];

const openingHours = [
  { days: "Mon – Thu", hours: "9:00 – 18:00" },
  { days: "Friday", hours: "9:00 – 17:00" },
  { days: "Saturday", hours: "10:00 – 14:00" },
  { days: "Sunday", hours: "Closed" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-2">
          <div className="font-semibold tracking-tight">Petra</div>
          <p className="text-sm text-muted-foreground">
            Careful work, done well — since 2013.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="font-medium">Visit</div>
          <address className="not-italic text-muted-foreground">
            Musterstraße 12
            <br />
            10115 Berlin
          </address>
          <a
            href="tel:+493012345678"
            className="block text-muted-foreground hover:text-foreground transition-colors"
          >
            +49 30 1234567
          </a>
        </div>

        <div className="space-y-2 text-sm">
          <div className="font-medium">Opening hours</div>
          <dl className="space-y-1 text-muted-foreground">
            {openingHours.map(({ days, hours }) => (
              <div key={days} className="flex justify-between gap-4">
                <dt>{days}</dt>
                <dd className="tabular-nums">{hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Petra. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
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
