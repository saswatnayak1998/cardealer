import Link from "next/link";
import InventoryGrid from "@/components/InventoryGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Subtle right-side car image that fades left */}
          <div className="absolute inset-y-0 right-0 w-[78%] md:w-1/2">
            <div className="relative h-full">
              <Image
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2200&auto=format&fit=crop"
                alt="Luxury car"
                fill
                priority
                className="object-cover opacity-60"
                style={{
                  maskImage: "linear-gradient(to left, rgba(0,0,0,1) 10%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0) 82%)",
                  WebkitMaskImage:
                    "linear-gradient(to left, rgba(0,0,0,1) 28%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0) 82%)",
                }}
              />
            </div>
          </div>
          {/* Gold glow + softened dark overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(212,175,55,0.08),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.55),rgba(0,0,0,0.85))]" />
        </div>
        <div className="mx-auto w-full container px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-shimmer-gold">
              Car Dealership
            </h1>
            <p className="mt-4 text-foreground/70 text-base md:text-lg">
              A refined inventory with transparent pricing and easy financing. Minimal noise, maximum taste.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href="#inventory"
                className="inline-flex items-center rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground/30"
              >
                Browse Inventory
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-[var(--radius-base)] border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory with filters on Home */}
      <section id="inventory" className="mx-auto w-full container px-4 py-12 md:py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-shimmer-silver">Inventory</h2>
        </div>
        <div className="mt-6">
          <InventoryGrid />
        </div>
      </section>

      {/* Value Props */}
      <section className="mx-auto w-full container px-4 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Effortless Financing",
              body: "Flexible options for every profile.",
            },
            { title: "Inspected & Clean", body: "Quality you can trust." },
            { title: "Concierge Service", body: "Helpful, no-pressure guidance." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="font-semibold text-shimmer-silver">{item.title}</h3>
              <p className="mt-1 text-sm text-foreground/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
