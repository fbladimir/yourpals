export default function Spotlight(){
  return (
    <section className="mt-16 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold">MoneyPal — your AI money mentor</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>• 30-day cash-flow forecast</li>
            <li>• "Safe-to-save" suggestions timed to your paycheck</li>
            <li>• Subscription finder + cancel emails</li>
            <li>• Friday digest: wins, risks, next actions</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a className="rounded-xl bg-blueA px-4 py-2 hover:bg-blueB" href="https://moneypal.yourpals.app">Open MoneyPal</a>
            <a className="rounded-xl bg-white/5 px-4 py-2 ring-1 ring-white/10 hover:bg-white/10" href="#safety">Data & Safety</a>
          </div>
        </div>
        <div className="rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
          <div className="text-sm text-white/70">30-Day Forecast</div>
          <div className="mt-3 h-28 rounded-lg bg-black/40" />
          <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
            <div className="rounded-lg bg-black/40 p-3">Lowest day<br/><b>Aug 28</b></div>
            <div className="rounded-lg bg-black/40 p-3">Bills due<br/><b>3</b></div>
            <div className="rounded-lg bg-black/40 p-3">Safe-to-save<br/><b>$85 Fri</b></div>
          </div>
        </div>
      </div>
    </section>
  );
}
