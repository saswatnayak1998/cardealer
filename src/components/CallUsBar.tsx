import { site, links } from "@/data/site";

export default function CallUsBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <div className="mx-auto w-full container px-4 py-3">
        <div className="p-[2px] rounded-[var(--radius-base)] bg-[linear-gradient(90deg,#7a7a7a,#c0c0c0,#f2f2f2,#c0c0c0,#7a7a7a)] [background-size:200%_auto] animate-[shimmer_7s_linear_infinite] shadow-md">
          <a
            href={links.tel}
            className="block w-full text-center rounded-[calc(var(--radius-base)-2px)] border border-transparent bg-black text-foreground py-3 text-base font-semibold hover:border-foreground/20"
          >
            Call us (24×7): {site.phone}
          </a>
        </div>
      </div>
    </div>
  );
} 