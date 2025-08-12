"use client";

import { useMemo, useState } from "react";
import VehicleCard from "@/components/VehicleCard";
import { vehicles } from "@/data/vehicles";

const priceRanges = [
  { label: "$3k - $7k", min: 3000, max: 6999 },
  { label: "$7k - $10k", min: 7000, max: 9999 },
  { label: "$10k - $15k", min: 10000, max: 14999 },
  { label: "$15k - $20k", min: 15000, max: 19999 },
  { label: "$20k - $30k", min: 20000, max: 29999 },
  { label: "$30k - $50k", min: 30000, max: 49999 },
];

const paymentRanges = [
  { label: "$0 - $199", min: 0, max: 199 },
  { label: "$200 - $299", min: 200, max: 299 },
  { label: "$300 - $399", min: 300, max: 399 },
  { label: "$400 - $599", min: 400, max: 599 },
];

export default function InventoryGrid() {
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState<string>("");
  const [payment, setPayment] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [make, setMake] = useState<string>("");
  const [fuel, setFuel] = useState<string>("");
  const [trans, setTrans] = useState<string>("");

  const makes = Array.from(new Set(vehicles.map((v) => v.make))).sort();
  const bodies = Array.from(new Set(vehicles.map((v) => v.bodyStyle).filter(Boolean))) as string[];

  const filtered = useMemo(() => {
    let list = vehicles;

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((v) => `${v.year} ${v.make} ${v.model} ${v.trim ?? ""} ${v.bodyStyle ?? ""}`.toLowerCase().includes(q));
    }

    if (price) {
      const r = priceRanges.find((r) => r.label === price);
      if (r) list = list.filter((v) => v.price >= r.min && v.price <= r.max);
    }

    if (payment) {
      const r = paymentRanges.find((r) => r.label === payment);
      if (r) list = list.filter((v) => (v.paymentPerMonth ?? 0) >= r.min && (v.paymentPerMonth ?? 0) <= r.max);
    }

    if (body) list = list.filter((v) => (v.bodyStyle ?? "") === body);
    if (origin) list = list.filter((v) => (v.origin ?? "") === origin);
    if (make) list = list.filter((v) => v.make === make);
    if (fuel) list = list.filter((v) => (v.fuelType ?? "") === fuel);
    if (trans) list = list.filter((v) => (v.transmission ?? "") === trans);

    return list;
  }, [query, price, payment, body, origin, make, fuel, trans]);

  return (
    <div>
      <div className="flex items-center gap-3 flex-wrap">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search make, model, year..."
          className="w-full md:w-64 rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black/50 px-4 py-2.5 text-sm outline-none ring-0 placeholder:text-foreground/40 focus:border-foreground/30"
        />
        <select value={price} onChange={(e) => setPrice(e.target.value)} className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black/50 px-3 py-2.5 text-sm">
          <option value="">Price Range</option>
          {priceRanges.map((r) => (
            <option key={r.label} value={r.label}>{r.label}</option>
          ))}
        </select>
        <select value={payment} onChange={(e) => setPayment(e.target.value)} className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black/50 px-3 py-2.5 text-sm">
          <option value="">Payment Range</option>
          {paymentRanges.map((r) => (
            <option key={r.label} value={r.label}>{r.label}</option>
          ))}
        </select>
        <select value={body} onChange={(e) => setBody(e.target.value)} className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black/50 px-3 py-2.5 text-sm">
          <option value="">Body Style</option>
          {bodies.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black/50 px-3 py-2.5 text-sm">
          <option value="">Automobile</option>
          {['American','Asian','European'].map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <select value={make} onChange={(e) => setMake(e.target.value)} className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black/50 px-3 py-2.5 text-sm">
          <option value="">Make</option>
          {makes.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <select value={fuel} onChange={(e) => setFuel(e.target.value)} className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black/50 px-3 py-2.5 text-sm">
          <option value="">Fuel Type</option>
          {['Gasoline','Hybrid','Electric','Diesel'].map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
        <select value={trans} onChange={(e) => setTrans(e.target.value)} className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-black/50 px-3 py-2.5 text-sm">
          <option value="">Transmission</option>
          {['Automatic','Manual'].map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((v) => (
          <VehicleCard key={v.slug} vehicle={v} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-foreground/60">No vehicles found.</div>
        )}
      </div>
    </div>
  );
} 