"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className="border-b border-[var(--color-border)] bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto w-full container px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-black border border-[var(--color-border)] grid place-items-center text-sm font-semibold text-shimmer-gold">AD</div>
          <div className="leading-tight">
            <div className="text-base font-semibold tracking-tight text-shimmer-silver">{site.name}</div>
            <div className="text-xs text-foreground/60">{site.city}, {site.state}</div>
          </div>
        </Link>
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
      </div>
    </header>
  );
} 