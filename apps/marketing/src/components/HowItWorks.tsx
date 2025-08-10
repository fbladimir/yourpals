export default function HowItWorks() {
  const pals = [
    {
      title: "MoneyPal",
      description: "Stops your audio when full asleep",
      image: "💰",
      href: "https://moneypal.yourpals.app"
    },
    {
      title: "SleepPal", 
      description: "Helps build grocery lists from what you",
      image: "🛒",
      href: "#"
    },
    {
      title: "CartPal",
      description: "Build your grocery lists from what a",
      image: "💬",
      href: "#"
    }
  ];

  return (
    <section id="how" className="mt-20">
      <h2 className="text-2xl font-bold text-center">How it works</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {pals.map((pal, index) => (
          <div key={pal.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            {/* 3D blob character */}
            <div className="relative mx-auto mb-4 h-20 w-20">
              <div className="absolute inset-0 rounded-full bg-white/90 shadow-lg"></div>
              {/* Eyes */}
              <div className="absolute top-4 left-4 h-2 w-2 rounded-full bg-black"></div>
              <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-black"></div>
              {/* Mouth */}
              <div className="absolute bottom-4 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-black"></div>
              {/* Icon/object */}
              <div className="absolute -bottom-1 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                {pal.image}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center">{pal.title}</h3>
            <p className="mt-2 text-sm text-white/70 text-center">{pal.description}</p>
            <div className="mt-4 text-center">
              <a href={pal.href} className="text-sm text-blueA hover:text-blueB">
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
