export default function Testimonials(){
  return (
    <section className="mt-16">
      <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
        <h2 className="text-2xl font-bold">Loved by busy humans</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-white/80">
          <blockquote className="rounded-xl bg-black/30 p-4 ring-1 ring-white/10">"MoneyPal caught a fee before it hit. Easy win." — Alex</blockquote>
          <blockquote className="rounded-xl bg-black/30 p-4 ring-1 ring-white/10">"Safe-to-save made saving painless." — Jamie</blockquote>
          <blockquote className="rounded-xl bg-black/30 p-4 ring-1 ring-white/10">"Weekly digest keeps me honest." — Priya</blockquote>
        </div>
      </div>
    </section>
  );
}
