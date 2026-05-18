"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Siren } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/about", label: "Über uns" },
  { href: "/blog", label: "Ratgeber" },
  { href: "/contact", label: "Kontakt" },
];

const phoneDisplay = "030 1234567";
const phoneHref = "tel:+493012345678";

// Set to false in the cloned Betrieb if no emergency service is offered.
const hasNotdienst = true;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 font-semibold tracking-tight"
        >
          <span
            aria-hidden
            className="grid size-7 place-items-center rounded-sm bg-foreground text-background font-mono text-[0.7rem] font-bold"
          >
            P
          </span>
          <span className="text-[1.05rem]">Petra</span>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground",
                  active && "text-foreground",
                )}
              >
                {link.label}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-px h-px bg-foreground"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {hasNotdienst ? (
            <Link
              href="/notdienst"
              className="hidden items-center gap-1.5 rounded-full border border-destructive/30 bg-destructive/8 px-3 py-1 text-xs font-medium text-destructive sm:inline-flex"
              aria-label="Notdienst: rund um die Uhr erreichbar"
            >
              <Siren className="size-3.5" aria-hidden />
              <span>Notdienst 24/7</span>
            </Link>
          ) : null}

          <a
            href={phoneHref}
            aria-label={`Anrufen ${phoneDisplay}`}
            className={cn(
              "inline-flex h-9 items-center gap-2 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              "shadow-sm",
            )}
          >
            <Phone className="size-4" aria-hidden />
            <span className="hidden tabular-nums sm:inline">
              {phoneDisplay}
            </span>
            <span className="sm:hidden">Anrufen</span>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "lg:hidden",
              )}
              aria-label="Menü öffnen"
            >
              <Menu className="size-5" aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetTitle className="sr-only">Hauptmenü</SheetTitle>
              <div className="flex flex-col px-4 pt-12">
                <div className="eyebrow mb-3">Menü</div>
                <ul className="divide-y divide-border">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <SheetClose
                        render={
                          <Link
                            href={link.href}
                            className="flex items-center justify-between py-4 text-base font-medium"
                          >
                            {link.label}
                            <span aria-hidden className="text-muted-foreground">
                              →
                            </span>
                          </Link>
                        }
                      />
                    </li>
                  ))}
                </ul>
                <div className="mt-8 space-y-3 border-t border-border pt-6">
                  <a
                    href={phoneHref}
                    className="flex items-center justify-between rounded-md bg-primary px-4 py-3 text-base font-medium text-primary-foreground"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Phone className="size-4" aria-hidden />
                      Jetzt anrufen
                    </span>
                    <span className="tabular-nums">{phoneDisplay}</span>
                  </a>
                  {hasNotdienst ? (
                    <SheetClose
                      render={
                        <Link
                          href="/notdienst"
                          className="flex items-center justify-between rounded-md border border-destructive/30 bg-destructive/8 px-4 py-3 text-sm font-medium text-destructive"
                        >
                          <span className="inline-flex items-center gap-2">
                            <Siren className="size-4" aria-hidden />
                            Notdienst 24/7
                          </span>
                          <span aria-hidden>→</span>
                        </Link>
                      }
                    />
                  ) : null}
                </div>
                <p className="mt-8 text-xs text-muted-foreground">
                  Mo – Fr 8 – 18 Uhr · Sa 9 – 14 Uhr · Anrufe außerhalb der
                  Geschäftszeiten gehen auf die Mailbox.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
