export default function FooterCTA(){
  return (
    <section id="download" className="mt-16 rounded-3xl bg-gradient-to-r from-blueA/30 to-tealA/30 p-8 ring-1 ring-white/10 text-center">
      <h4 className="text-2xl font-bold">Start with MoneyPal today</h4>
      <p className="mt-2 text-white/80">Forecast your cash. Find savings. Celebrate weekly wins.</p>
      <div className="mt-6 flex justify-center gap-3">
        <a className="rounded-xl bg-white text-night px-5 py-3" href="https://moneypal.yourpals.app">Open MoneyPal</a>
        <a className="rounded-xl bg-white/10 px-5 py-3 ring-1 ring-white/20" href="#apps">Explore Apps</a>
      </div>
      <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} YourPals</p>
    </section>
  );
}
