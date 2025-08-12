import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { vehicles } from "@/data/vehicles";

export default async function VehicleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) return notFound();

  return (
    <div className="mx-auto w-full container px-4 py-10 md:py-14">
      <Link href="/inventory" className="text-sm text-foreground/60 hover:text-foreground">← Back to Inventory</Link>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-[var(--radius-base)] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="relative aspect-[4/3]">
            {vehicle.image ? (
              <Image
                src={vehicle.image}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-zinc-800 grid place-items-center text-accent">
                <span className="text-sm">Image</span>
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-shimmer-silver">
            {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim ?? ""}
          </h1>
          <div className="mt-2 text-xl font-semibold text-shimmer-gold">
            ${vehicle.price.toLocaleString()}
          </div>
          <div className="mt-1 text-foreground/70">{vehicle.mileage.toLocaleString()} miles</div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Body Style", value: vehicle.bodyStyle ?? "—" },
              { label: "Fuel Type", value: vehicle.fuelType ?? "—" },
              { label: "Transmission", value: vehicle.transmission ?? "—" },
              { label: "Automobile", value: vehicle.origin ?? "—" },
              { label: "Payment Range", value: vehicle.paymentPerMonth ? `$${vehicle.paymentPerMonth}/mo est.` : "—" },
              { label: "Location", value: "Daly City, CA" },
            ].map((item) => (
              <div key={item.label} className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <div className="text-xs uppercase tracking-wide text-foreground/60">{item.label}</div>
                <div className="text-sm mt-1 text-foreground/90">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <a href="tel:+16505519406" className="inline-flex items-center rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground/30">
              Call Dealer
            </a>
            <Link href="/financing" className="inline-flex items-center rounded-[var(--radius-base)] border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground">
              Get Financing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 