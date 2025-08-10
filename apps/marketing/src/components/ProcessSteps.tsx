export default function ProcessSteps() {
  return (
    <section className="mt-20 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
      <h2 className="text-2xl font-bold text-center">How it works</h2>
      <ol className="mt-6 grid gap-6 md:grid-cols-3">
        <li className="rounded-xl bg-black/30 p-5 ring-1 ring-white/10">
          <p className="text-sm font-semibold">1) Connect</p>
          <p className="mt-2 text-sm text-white/70">Link accounts or tools securely. Read-only for MoneyPal.</p>
        </li>
        <li className="rounded-xl bg-black/30 p-5 ring-1 ring-white/10">
          <p className="text-sm font-semibold">2) Automate</p>
          <p className="mt-2 text-sm text-white/70">Pals watch, plan, and act with your approval.</p>
        </li>
        <li className="rounded-xl bg-black/30 p-5 ring-1 ring-white/10">
          <p className="text-sm font-semibold">3) Get wins</p>
          <p className="mt-2 text-sm text-white/70">Weekly summaries: time saved, money saved, next steps.</p>
        </li>
      </ol>
    </section>
  );
}
