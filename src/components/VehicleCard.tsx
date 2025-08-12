import Link from "next/link";
import Image from "next/image";

export type Vehicle = {
  slug: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  bodyStyle?: string;
  mileage: number; // in miles
  price: number; // in USD
  image?: string;
  fuelType?: string;
  transmission?: string;
  origin?: "American" | "Asian" | "European";
  paymentPerMonth?: number;
};

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const { slug, year, make, model, trim, mileage, price, image, fuelType, transmission } = vehicle;

  return (
    <Link
      href={`/inventory/${slug}`}
      className="group rounded-[var(--radius-base)] border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-black/70 transition-colors overflow-hidden shadow-sm hover:shadow-lg"
    >
      <div className="relative aspect-[4/3]">
        {image ? (
          <Image
            src={image}
            alt={`${year} ${make} ${model}`}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={false}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-zinc-800 grid place-items-center text-accent">
            <span className="text-sm">Image</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold text-shimmer-silver">
            {year} {make} {model}
            {trim ? ` ${trim}` : ""}
          </h3>
          <div className="text-sm font-semibold text-shimmer-gold">
            ${price.toLocaleString()}
          </div>
        </div>
        <div className="mt-1 text-sm text-foreground/70 flex items-center gap-2 flex-wrap">
          <span>{mileage.toLocaleString()} miles</span>
          {fuelType && <span className="opacity-40">•</span>}
          {fuelType && <span>{fuelType}</span>}
          {transmission && <span className="opacity-40">•</span>}
          {transmission && <span>{transmission}</span>}
        </div>
      </div>
    </Link>
  );
} 