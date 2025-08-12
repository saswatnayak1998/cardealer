export default function ReviewsPage() {
  const reviews = [
    { name: "Sophia", body: "Great selection and straightforward pricing. Love my new car!" },
    { name: "Liam", body: "Friendly staff and an easy financing process." },
    { name: "Mia", body: "No pressure, clean lot, and fast paperwork." },
  ];

  return (
    <div className="mx-auto w-full container px-4 py-10 md:py-14">
      <h1 className="text-3xl font-semibold text-shimmer-silver">Reviews</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-[var(--radius-base)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <div className="font-semibold text-foreground">{r.name}</div>
            <p className="mt-2 text-sm text-foreground/80">{r.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 