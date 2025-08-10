export default function MoneyPalSpotlight(){
  return (
    <section className="mt-16 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold">MoneyPal</h3>
          <p className="mt-2 text-white/80">Track cash flow, cut bills, find savings automatically</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>• Cash-flow forecast 30-day background</li>
            <li>• Subscription management</li>
            <li>• Weekly digest</li>
          </ul>
          <div className="mt-5">
            <a className="text-sm text-blueA hover:text-blueB" href="#">
              Learn More
            </a>
          </div>
        </div>
        <div className="rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
          {/* Larger 3D blob character */}
          <div className="relative mx-auto h-32 w-32">
            <div className="absolute inset-0 rounded-full bg-white/90 shadow-lg"></div>
            {/* Eyes */}
            <div className="absolute top-8 left-6 h-3 w-3 rounded-full bg-black"></div>
            <div className="absolute top-8 right-6 h-3 w-3 rounded-full bg-black"></div>
            {/* Mouth */}
            <div className="absolute bottom-8 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-black"></div>
            {/* Question mark icon */}
            <div className="absolute -bottom-2 right-0 h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center text-sm font-bold text-white">
              ?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
