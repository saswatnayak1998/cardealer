export default function FinancingPage() {
  return (
    <div className="mx-auto w-full container px-4 py-10 md:py-14">
      <h1 className="text-3xl font-semibold text-primary">Financing</h1>
      <p className="mt-2 text-foreground/70 max-w-2xl">
        We partner with trusted lenders to offer flexible auto financing for a range of credit profiles. Bring your paystubs and proof of address, and we will help you get pre-qualified quickly.
      </p>
      <div className="mt-6 rounded-[var(--radius-base)] border border-muted/40 bg-white/70 p-6 max-w-xl">
        <form className="grid grid-cols-1 gap-4">
          <input placeholder="Full name" className="rounded-[var(--radius-base)] border border-muted/60 bg-white/80 px-4 py-2.5 text-sm outline-none focus:border-accent" />
          <input placeholder="Email" type="email" className="rounded-[var(--radius-base)] border border-muted/60 bg-white/80 px-4 py-2.5 text-sm outline-none focus:border-accent" />
          <input placeholder="Phone" type="tel" className="rounded-[var(--radius-base)] border border-muted/60 bg-white/80 px-4 py-2.5 text-sm outline-none focus:border-accent" />
          <button type="button" className="rounded-[var(--radius-base)] bg-primary text-soft px-5 py-2.5 text-sm font-medium hover:bg-primary/90">Request Pre-Approval</button>
        </form>
      </div>
    </div>
  );
} 