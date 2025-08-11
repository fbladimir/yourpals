import { config } from "../lib/config";

export default function AppsGrid(){
  const cards = [
    {badge:"Finance", title:"MoneyPal", desc:"Forecast cash, find savings, weekly wins.", href: config.moneypalUrl},
    {badge:"Wellness", title:"SleepPal", desc:"Stops your audio when you fall asleep.", href:"#"},
    {badge:"Home", title:"CartPal", desc:"Build grocery lists from what you actually eat.", href:"#"},
  ];
  return (
    <section id="apps" className="mt-16">
      <h2 className="text-2xl font-bold">Meet the Pals</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {cards.map(c=>(
          <a key={c.title} href={c.href}
             className="block rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 hover:bg-white/10 transition">
            <div className="text-xs text-white/60">{c.badge}</div>
            <div className="mt-1 text-xl font-semibold">{c.title}</div>
            <p className="mt-1 text-sm text-white/70">{c.desc}</p>
            <div className="mt-4 text-sm text-blueA">Learn More →</div>
          </a>
        ))}
      </div>
    </section>
  );
}
