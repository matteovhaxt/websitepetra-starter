import Link from "next/link";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const phoneDisplay = "+49 30 1234567";
const phoneHref = "tel:+493012345678";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight">
          Petra
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={phoneHref}
            aria-label={`Call ${phoneDisplay}`}
            className={buttonVariants({ size: "sm", className: "ml-1" })}
          >
            <Phone aria-hidden />
            <span className="hidden sm:inline">{phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
