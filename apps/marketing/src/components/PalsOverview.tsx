"use client";
import { motion } from "framer-motion";

export default function PalsOverview() {
  const cards = [
    {
      badge: "Finance",
      title: "MoneyPal",
      desc: "Forecast cash, find savings, weekly wins.",
      href: "https://moneypal.yourpals.app",
      bgGradient: "from-emerald-500/10 via-emerald-600/5 to-emerald-700/10",
      borderGradient: "from-emerald-400/30 to-emerald-600/30",
      iconBg: "from-emerald-400/20 to-emerald-600/20",
      badgeBg: "from-emerald-500/20 to-emerald-600/20",
      textAccent: "text-emerald-400",
      robotColor: "from-emerald-300 to-emerald-500",
      accentColor: "from-yellow-300 to-yellow-500"
    },
    {
      badge: "Wellness",
      title: "SleepPal",
      desc: "Stops your audio when you fall asleep.",
      href: "#",
      bgGradient: "from-purple-500/10 via-purple-600/5 to-purple-700/10",
      borderGradient: "from-purple-400/30 to-purple-600/30",
      iconBg: "from-purple-400/20 to-purple-600/20",
      badgeBg: "from-purple-500/20 to-purple-600/20",
      textAccent: "text-purple-400",
      robotColor: "from-purple-300 to-purple-500",
      accentColor: "from-indigo-300 to-indigo-500"
    },
    {
      badge: "Home",
      title: "CartPal",
      desc: "Build grocery lists from what you actually eat.",
      href: "#",
      bgGradient: "from-blue-500/10 via-blue-600/5 to-blue-700/10",
      borderGradient: "from-blue-400/30 to-blue-600/30",
      iconBg: "from-blue-400/20 to-blue-600/20",
      badgeBg: "from-blue-500/20 to-blue-600/20",
      textAccent: "text-blue-400",
      robotColor: "from-blue-300 to-blue-500",
      accentColor: "from-cyan-300 to-cyan-500"
    },
  ];

  return (
    <section id="apps" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white/70 mb-4 sm:mb-6 backdrop-blur-sm"
          >
            ✨ AI-Powered Assistants
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
            Meet the Pals
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            Your AI assistants for different aspects of daily life
          </p>
        </motion.div>
        
        {/* Cards Grid - Improved Layout with Better Spacing */}
        <div className="grid gap-8 sm:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group h-full"
            >
              <a 
                href={card.href}
                className={`block h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br ${card.bgGradient} p-8 sm:p-10 border border-transparent hover:border-opacity-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden group-hover:bg-opacity-20 active:scale-[0.98] touch-manipulation`}
                style={{
                  borderImage: `linear-gradient(135deg, ${card.borderGradient.split(' ')[0]}, ${card.borderGradient.split(' ')[1]}) 1`
                }}
              >
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 opacity-5 sm:opacity-10">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-2xl sm:blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-white/30 to-transparent blur-xl sm:blur-2xl"></div>
                </div>
                
                {/* Top Section: Avatar and Badge in a Row */}
                <div className="flex items-start justify-between mb-8">
                  {/* AI Robot Avatar Container */}
                  <div className={`relative inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${card.iconBg} ring-1 ring-white/20 shadow-lg sm:shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:scale-110 flex-shrink-0`}>
                    {card.title === "MoneyPal" && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* MoneyPal Robot */}
                        <motion.div
                          className="relative"
                          animate={{ rotate: [0, 3, -3, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {/* Robot body */}
                          <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br ${card.robotColor} rounded-full flex items-center justify-center relative shadow-lg ring-2 ring-white/30`}>
                            {/* Calculator screen head */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                              <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">$</span>
                            </div>
                            
                            {/* Robot eyes */}
                            <div className="absolute top-4 left-3 sm:top-5 sm:left-4 md:top-6 md:left-5 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-black rounded-full"></div>
                            <div className="absolute top-4 right-3 sm:top-5 sm:right-4 md:top-6 md:right-5 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-black rounded-full"></div>
                            
                            {/* Robot mouth */}
                            <div className="absolute bottom-4 left-1/2 sm:bottom-5 md:bottom-6 w-4 h-1 sm:w-5 sm:h-1.5 md:w-6 md:h-2 -translate-x-1/2 bg-black rounded-full"></div>
                            
                            {/* Coin slot */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-1 sm:w-8 sm:h-1.5 md:w-10 md:h-2 bg-green-400 rounded-full"></div>
                          </div>
                          
                          {/* Floating coins */}
                          <motion.div
                            className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-md"
                            animate={{ y: [0, -8, 0], rotate: [0, 180, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <motion.div
                            className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-md"
                            animate={{ y: [0, -6, 0], rotate: [0, -180, -360] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                          />
                        </motion.div>
                      </div>
                    )}
                    
                    {card.title === "SleepPal" && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* SleepPal Robot */}
                        <motion.div
                          className="relative"
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {/* Robot body */}
                          <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br ${card.robotColor} rounded-full flex items-center justify-center relative shadow-lg ring-2 ring-white/30`}>
                            {/* Sleep mask head */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 sm:w-20 sm:h-8 md:w-24 md:h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                              <div className="flex gap-1 sm:gap-2">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                              </div>
                            </div>
                            
                            {/* Closed robot eyes */}
                            <div className="absolute top-4 left-3 sm:top-5 sm:left-4 md:top-6 md:left-5 w-3 h-0.5 sm:w-4 sm:h-1 md:w-5 md:h-1 bg-black rounded-full transform rotate-12"></div>
                            <div className="absolute top-4 right-3 sm:top-5 sm:right-4 md:top-6 md:right-5 w-3 h-0.5 sm:w-4 sm:h-1 md:w-5 md:h-1 bg-black rounded-full transform -rotate-12"></div>
                            
                            {/* Sleeping robot mouth */}
                            <div className="absolute bottom-4 left-1/2 sm:bottom-5 md:bottom-6 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 -translate-x-1/2 bg-black rounded-full"></div>
                            
                            {/* Sleep waves */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1 sm:w-10 sm:h-1.5 md:w-12 md:h-2 bg-indigo-400 rounded-full"></div>
                          </div>
                          
                          {/* Zzz bubbles */}
                          <motion.div
                            className="absolute -top-4 -right-2 sm:-top-5 sm:-right-3 md:-top-6 md:-right-4 text-indigo-200 text-lg sm:text-xl md:text-2xl font-bold"
                            animate={{ opacity: [0, 1, 0], y: [-2, -8, -2] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            z
                          </motion.div>
                          <motion.div
                            className="absolute -top-6 -right-1 sm:-top-7 sm:-right-2 md:-top-8 md:-right-3 text-indigo-200 text-lg sm:text-xl md:text-2xl font-bold"
                            animate={{ opacity: [0, 1, 0], y: [-2, -8, -2] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                          >
                            z
                          </motion.div>
                        </motion.div>
                      </div>
                    )}
                    
                    {card.title === "CartPal" && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* CartPal Robot */}
                        <motion.div
                          className="relative"
                          animate={{ x: [0, 2, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {/* Robot body */}
                          <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br ${card.robotColor} rounded-full flex items-center justify-center relative shadow-lg ring-2 ring-white/30`}>
                            {/* Shopping cart head */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                              <div className="relative w-8 h-4 sm:w-10 sm:h-5 md:w-12 md:h-6">
                                <div className="absolute bottom-0 left-0 w-6 h-3 sm:w-8 sm:h-4 md:w-10 md:h-5 bg-white rounded-t-lg border border-cyan-600"></div>
                                <div className="absolute top-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 border border-cyan-600 border-l-0 border-b-0 rounded-tr-lg"></div>
                              </div>
                            </div>
                            
                            {/* Robot eyes */}
                            <div className="absolute top-4 left-3 sm:top-5 sm:left-4 md:top-6 md:left-5 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-black rounded-full"></div>
                            <div className="absolute top-4 right-3 sm:top-5 sm:right-4 md:top-6 md:right-5 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-black rounded-full"></div>
                            
                            {/* Robot mouth */}
                            <div className="absolute bottom-4 left-1/2 sm:bottom-5 md:bottom-6 w-4 h-1 sm:w-5 sm:h-1.5 md:w-6 md:h-2 -translate-x-1/2 bg-black rounded-full"></div>
                            
                            {/* Shopping list */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1 sm:w-10 sm:h-1.5 md:w-12 md:h-2 bg-cyan-400 rounded-full"></div>
                          </div>
                          
                          {/* Floating grocery items */}
                          <motion.div
                            className="absolute -top-3 -left-2 sm:-top-4 sm:-left-3 md:-top-5 md:-left-4 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-green-300 to-green-500 rounded-full shadow-md"
                            animate={{ y: [0, -4, 0], rotate: [0, 180, 360] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <motion.div
                            className="absolute -top-2 -right-3 sm:-top-3 sm:-right-4 md:-top-4 md:-right-5 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full shadow-md"
                            animate={{ y: [0, -3, 0], rotate: [0, -180, -360] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                          />
                        </motion.div>
                      </div>
                    )}
                  </div>
                  
                  {/* Badge - Positioned to the right of avatar */}
                  <div className={`inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r ${card.badgeBg} text-sm sm:text-base font-semibold text-white/95 ring-1 ring-white/20 backdrop-blur-sm shadow-lg ml-4 flex-shrink-0`}>
                    {card.badge}
                  </div>
                </div>
                
                {/* Content Section - Below avatar and badge */}
                <div className="space-y-6">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight group-hover:text-white transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {card.desc}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className={`flex items-center gap-3 sm:gap-4 ${card.textAccent} font-semibold text-lg sm:text-xl group-hover:gap-4 sm:group-hover:gap-5 transition-all duration-300`}>
                    <span>Learn More</span>
                    <motion.span 
                      className="transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300 text-xl sm:text-2xl"
                      animate={{ x: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        
        {/* Trust & Safety Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white/5 px-4 sm:px-6 py-2 sm:py-3 ring-1 ring-white/10">
            <span className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-400"></span>
            <span className="text-sm sm:text-base text-white/80 font-medium">
              Your data is yours • No selling • Encrypted at rest
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
