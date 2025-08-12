import { site, links } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="mx-auto w-full container px-4 py-10 md:py-14">
      <h1 className="text-3xl font-semibold text-shimmer-silver">Contact</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <div className="text-sm text-foreground/60">Call</div>
          <a href={links.tel} className="block text-lg font-semibold text-foreground mt-1">{site.phone}</a>
          <div className="mt-4 text-sm text-foreground/60">Visit</div>
          <a
            href={links.maps}
            target="_blank"
            className="block text-lg font-semibold text-foreground mt-1"
          >
            {site.addressLine}
          </a>
        </div>
        <div className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <form className="grid grid-cols-1 gap-4">
            <input placeholder="Name" className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black/50 text-foreground px-4 py-2.5 text-sm outline-none focus:border-foreground/30 placeholder:text-foreground/40" />
            <input placeholder="Email" type="email" className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black/50 text-foreground px-4 py-2.5 text-sm outline-none focus:border-foreground/30 placeholder:text-foreground/40" />
            <textarea placeholder="Message" rows={4} className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black/50 text-foreground px-4 py-2.5 text-sm outline-none focus:border-foreground/30 placeholder:text-foreground/40" />
            <button type="button" className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black text-foreground px-5 py-2.5 text-sm font-medium hover:border-foreground/30">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
} 