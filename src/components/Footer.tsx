import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-black/70">
      <div className="mx-auto w-full container px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs md:text-sm text-foreground/60">
          © {new Date().getFullYear()} Auto Deals — Daly City, CA. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs md:text-sm">
          <Link href="/privacy" className="text-foreground/60 hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-foreground/60 hover:text-foreground transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
} 