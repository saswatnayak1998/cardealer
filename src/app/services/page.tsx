export default function ServicesPage() {
  const services = [
    { title: "Vehicle Sourcing", body: "Tell us what you want; we will find it." },
    { title: "Trade-Ins", body: "Competitive offers toward your next car." },
    { title: "Detailing", body: "Light reconditioning and detailing available." },
  ];

  return (
    <div className="mx-auto w-full container px-4 py-10 md:py-14">
      <h1 className="text-3xl font-semibold text-shimmer-silver">Services</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <div className="font-semibold text-foreground">{s.title}</div>
            <p className="mt-2 text-sm text-foreground/80">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 