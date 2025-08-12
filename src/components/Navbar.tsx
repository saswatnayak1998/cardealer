"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site, links } from "@/data/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/financing", label: "Financing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[var(--color-border)] bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/60 sticky top-0 z-50">
      <div className="mx-auto w-full container px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-black border border-[var(--color-border)] grid place-items-center text-sm font-semibold text-shimmer-gold">AD</div>
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight text-shimmer-silver">{site.name}</div>
            <div className="text-xs text-foreground/60">{site.city}, {site.state}</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-shimmer-gold" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop contact */}
        <div className="hidden md:flex items-center gap-3">
          <a href={links.tel} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            {site.phone}
          </a>
          <a
            href={links.maps}
            target="_blank"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            {site.shortAddress}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-[var(--color-border)] text-foreground/80 hover:text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="block h-[1px] w-4 bg-current" />
          <span className="block h-[1px] w-4 bg-current mt-1.5" />
          <span className="block h-[1px] w-4 bg-current mt-1.5" />
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-black/90">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm ${pathname === item.href ? "text-shimmer-gold" : "text-foreground/80"}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 h-px bg-[var(--color-border)]" />
            <a href={links.tel} className="text-sm text-foreground/80">
              {site.phone}
            </a>
            <a href={links.maps} target="_blank" className="text-sm text-foreground/80">
              {site.addressLine}
            </a>
          </div>
        </div>
      )}
    </header>
  );
} 