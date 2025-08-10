export default function Safety(){
  const items = [
    {t:"Read-only connections", d:"Plaid only. We can't move money in v1."},
    {t:"Encryption & control", d:"Tokens encrypted per-tenant; disconnect anytime."},
    {t:"Transparent actions", d:"Every suggestion is logged with undo/approve."},
    {t:"No data selling", d:"Your data is never sold. Ever."},
  ];
  return (
    <section id="safety" className="mt-16 grid gap-4 md:grid-cols-4">
      {items.map(x=>(
        <div key={x.t} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
          <div className="font-semibold">{x.t}</div>
          <div className="mt-1 text-sm text-white/70">{x.d}</div>
        </div>
      ))}
    </section>
  );
}
