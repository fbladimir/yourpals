"use client";
import { motion } from "framer-motion";

export default function PalsOverview() {
  const cards = [
    {
      badge: "Finance",
      title: "MoneyPal",
      desc: "Forecast cash, find savings, weekly wins.",
      href: "https://moneypal.yourpals.app",
      icon: "💰",
      color: "from-blueA/20 to-blueB/20",
      ringColor: "ring-blueA/30"
    },
    {
      badge: "Wellness",
      title: "SleepPal",
      desc: "Stops your audio when you fall asleep.",
      href: "#",
      icon: "😴",
      color: "from-purple-500/20 to-pink-500/20",
      ringColor: "ring-purple-500/30"
    },
    {
      badge: "Home",
      title: "CartPal",
      desc: "Build grocery lists from what you actually eat.",
      href: "#",
      icon: "🛒",
      color: "from-green-500/20 to-tealA/20",
      ringColor: "ring-green-500/30"
    },
  ];

  return (
    <section id="apps" className="mt-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Meet the Pals</h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Your AI assistants for different aspects of daily life
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <a 
              href={card.href}
              className="block rounded-3xl bg-gradient-to-br from-white/5 to-white/10 p-8 ring-1 ring-white/10 transition-all duration-300 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 hover:ring-white/20 hover:scale-105"
            >
              {/* Icon/Logo */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} mb-6 ring-1 ${card.ringColor}`}>
                <span className="text-3xl">{card.icon}</span>
              </div>
              
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-xs text-white/60 ring-1 ring-white/10 mb-4">
                {card.badge}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              
              {/* Description */}
              <p className="text-white/70 mb-6 leading-relaxed">{card.desc}</p>
              
              {/* Learn More Link */}
              <div className="flex items-center gap-2 text-blueA group-hover:text-blueB transition-colors">
                <span className="font-medium">Learn More</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
