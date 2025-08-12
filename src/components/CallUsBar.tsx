import { site, links } from "@/data/site";

export default function CallUsBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:static md:mt-0">
      <div className="mx-auto w-full container px-4 py-3">
        <a
          href={links.tel}
          className="block w-full text-center rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black text-foreground py-3 text-base font-semibold shadow-md hover:border-foreground/30"
        >
          Call us (24×7): {site.phone}
        </a>
      </div>
    </div>
  );
} 