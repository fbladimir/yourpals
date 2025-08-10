"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-8 sm:mt-10 md:mt-12 px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left">
          {/* Enhanced Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 sm:gap-4 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blueA/20 via-purple-500/20 to-tealA/20 p-1.5 sm:p-2 ring-1 ring-white/20 backdrop-blur-sm shadow-lg"
          >
            {/* New indicator with pulse animation */}
            <motion.div 
              className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-400/20 to-emerald-500/20 ring-1 ring-green-400/30"
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0.4)",
                  "0 0 0 8px rgba(34, 197, 94, 0)",
                  "0 0 0 0 rgba(34, 197, 94, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-green-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-xs sm:text-sm font-semibold text-green-300">New</span>
            </motion.div>
            
            {/* Separator */}
            <div className="h-4 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            
            {/* Meet MoneyPal section - Now clickable */}
            <Link 
              href="https://moneypal.yourpals.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div 
                className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blueA/20 to-blueB/20 ring-1 ring-blueA/30 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-blueA/30 hover:to-blueB/30 hover:ring-blueA/50 hover:shadow-lg hover:shadow-blueA/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors duration-300">Meet</span>
                <motion.div 
                  className="flex items-center gap-1.5"
                >
                  <span className="text-xs sm:text-sm font-bold text-blueA group-hover:text-blue-300 transition-colors duration-300">Money</span>
                  <motion.span 
                    className="text-xs sm:text-sm font-bold text-blueA group-hover:text-blue-300 transition-colors duration-300"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(73, 120, 242, 0)",
                        "0 0 8px rgba(73, 120, 242, 0.8)",
                        "0 0 0px rgba(73, 120, 242, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Pal
                  </motion.span>
                  {/* Sparkle effect */}
                  <motion.div
                    className="text-yellow-400 text-xs sm:text-sm group-hover:text-yellow-300 transition-colors duration-300"
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ✨
                  </motion.div>
                  {/* Click indicator */}
                  <motion.div
                    className="text-white/60 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.div>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Main headline */}
          <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            Your AI assistants for your{" "}
            <span className="text-blueA">everyday life.</span>
          </h1>
          
          {/* Description */}
          <p className="mt-4 sm:mt-6 max-w-lg sm:max-w-xl lg:max-w-lg text-base sm:text-lg text-white/70 leading-relaxed mx-auto lg:mx-0">
            Manage all your daily tasks and AI assistants in a single platform with seamless automation.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link 
              href="#apps" 
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 sm:px-6 sm:py-4 font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg active:scale-95 touch-manipulation"
            >
              Get Started Free
            </Link>
            <Link 
              href="#how" 
              className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 sm:px-6 sm:py-4 font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition-colors active:scale-95 touch-manipulation"
            >
              See How It Works
            </Link>
          </div>
          
          {/* Bottom text */}
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/50">
            Start your free trial. Cancel anytime.
          </p>
        </div>

        {/* Right side - Enhanced smartphone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end order-first lg:order-last"
        >
          <div className="relative">
            {/* Main smartphone - Responsive sizing */}
            <div className="relative h-[400px] w-56 sm:h-[500px] sm:w-64 md:h-[550px] md:w-72 lg:h-[600px] lg:w-80 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-gray-800 to-black p-2 sm:p-3 ring-1 ring-white/20 shadow-2xl">
              <div className="h-full w-full rounded-xl sm:rounded-2xl bg-gradient-to-b from-gray-900 to-black p-4 sm:p-5 md:p-6 flex flex-col">
                {/* App header */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-blueA"></div>
                  <div className="text-xs text-white/60">YourPals</div>
                  <div className="h-1.5 w-6 sm:h-2 sm:w-7 rounded-full bg-white/20"></div>
                </div>
                
                {/* Cute AI Robot Pal - Replaces the simple blob character */}
                <div className="relative mx-auto mb-4 sm:mb-5 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
                  {/* Main robot body with metallic gradient */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 shadow-xl ring-2 ring-slate-400/30"></div>
                  
                  {/* Robot face plate with subtle glow */}
                  <div className="absolute inset-1 rounded-full bg-gradient-to-b from-slate-200 via-slate-100 to-white ring-1 ring-slate-300/50"></div>
                  
                  {/* Animated robot eyes with glow effect */}
                  <motion.div 
                    className="absolute top-3 left-2.5 sm:top-4 sm:left-3 md:top-5 md:left-4 lg:top-6 lg:left-5 h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 lg:h-3.5 lg:w-3.5 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 ring-2 ring-blue-300/50"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 0 4px rgba(59, 130, 246, 0)",
                        "0 0 0 0 rgba(59, 130, 246, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Eye pupil */}
                    <div className="absolute inset-0.5 rounded-full bg-black"></div>
                    {/* Eye highlight */}
                    <div className="absolute top-0 left-0.5 h-1 w-1 rounded-full bg-white/80"></div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-3 right-2.5 sm:top-4 sm:right-3 md:top-5 md:right-4 lg:top-6 lg:right-5 h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 lg:h-3.5 lg:w-3.5 rounded-full bg-gradient-to-b from-blue-400 to-blue-600 ring-2 ring-blue-300/50"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 0 4px rgba(59, 130, 246, 0)",
                        "0 0 0 0 rgba(59, 130, 246, 0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    {/* Eye pupil */}
                    <div className="absolute inset-0.5 rounded-full bg-black"></div>
                    {/* Eye highlight */}
                    <div className="absolute top-0 left-0.5 h-1 w-1 rounded-full bg-white/80"></div>
                  </motion.div>
                  
                  {/* Animated robot mouth with expression */}
                  <motion.div 
                    className="absolute bottom-3 left-1/2 sm:bottom-4 md:bottom-5 lg:bottom-6 h-1 w-3 sm:h-1.5 sm:w-4 md:h-2 md:w-5 lg:h-2.5 lg:w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-slate-400 to-slate-600"
                    animate={{ 
                      scaleY: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Robot antenna with blinking light */}
                  <motion.div 
                    className="absolute -top-1 left-1/2 -translate-x-1/2 h-3 w-1 sm:h-4 sm:w-1.5 md:h-5 md:w-2 lg:h-6 lg:w-2.5 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full"
                    animate={{ 
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Blinking antenna light */}
                    <motion.div 
                      className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 lg:h-3.5 lg:w-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                  
                  {/* Robot side panels with subtle details */}
                  <div className="absolute top-1/2 -left-0.5 h-2 w-1 sm:h-2.5 sm:w-1.5 md:h-3 md:w-2 lg:h-3.5 lg:w-2.5 bg-gradient-to-b from-slate-400 to-slate-600 rounded-r-full"></div>
                  <div className="absolute top-1/2 -right-0.5 h-2 w-1 sm:h-2.5 sm:w-1.5 md:h-3 md:w-2 lg:h-3.5 lg:w-2.5 bg-gradient-to-b from-slate-400 to-slate-600 rounded-l-full"></div>
                  
                  {/* Floating data orbs around the robot */}
                  <motion.div 
                    className="absolute -top-1 -right-1 h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 lg:h-3.5 lg:w-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    animate={{ 
                      y: [0, -4, 0],
                      opacity: [0.6, 1, 0.6],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute -bottom-1 -left-1 h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-2.5 md:w-2.5 lg:h-3 lg:w-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                    animate={{ 
                      y: [0, 3, 0],
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  
                  {/* Golden coin with robot theme */}
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 sm:-bottom-1.5 md:-bottom-2 lg:-bottom-2.5 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-lg ring-2 ring-yellow-300/50"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex h-full w-full items-center justify-center text-xs sm:text-xs md:text-sm font-bold text-black">$</div>
                  </motion.div>
                </div>
                
                {/* Dynamic App Interface - Better spacing */}
                <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                  {/* Animated financial insights */}
                  <motion.div 
                    className="h-2 sm:h-2.5 w-full rounded-full bg-gradient-to-r from-green-400/60 to-emerald-500/60"
                    animate={{ 
                      width: ["100%", "85%", "100%"],
                      background: [
                        "linear-gradient(to right, rgba(34, 197, 94, 0.6), rgba(16, 185, 129, 0.6))",
                        "linear-gradient(to right, rgba(59, 130, 246, 0.6), rgba(16, 185, 129, 0.6))",
                        "linear-gradient(to right, rgba(34, 197, 94, 0.6), rgba(16, 185, 129, 0.6))"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Animated spending pattern */}
                  <motion.div 
                    className="h-2 sm:h-2.5 w-3/4 rounded-full bg-gradient-to-r from-blue-400/60 to-blue-500/60"
                    animate={{ 
                      width: ["75%", "60%", "75%"],
                      background: [
                        "linear-gradient(to right, rgba(59, 130, 246, 0.6), rgba(99, 102, 241, 0.6))",
                        "linear-gradient(to right, rgba(168, 85, 247, 0.6), rgba(99, 102, 241, 0.6))",
                        "linear-gradient(to right, rgba(59, 130, 246, 0.6), rgba(99, 102, 241, 0.6))"
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                  
                  {/* Animated savings progress */}
                  <motion.div 
                    className="h-2 sm:h-2.5 w-2/3 rounded-full bg-gradient-to-r from-purple-400/60 to-pink-500/60"
                    animate={{ 
                      width: ["67%", "90%", "67%"],
                      background: [
                        "linear-gradient(to right, rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6))",
                        "linear-gradient(to right, rgba(34, 197, 94, 0.6), rgba(16, 185, 129, 0.6))",
                        "linear-gradient(to right, rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6))"
                      ]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </div>
                
                {/* AI Assistant Messages - Cleaner layout */}
                <div className="mb-4 sm:mb-5">
                  {/* AI Assistant typing indicator */}
                  <motion.div 
                    className="flex items-center gap-2 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-blueA/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-blueA text-xs">🤖</span>
                    </div>
                    <motion.div 
                      className="flex gap-1"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-blueA/60"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-blueA/60"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-blueA/60"></div>
                    </motion.div>
                  </motion.div>
                  
                  {/* AI Message bubble */}
                  <motion.div 
                    className="ml-7 sm:ml-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                  >
                    <div className="bg-blueA/20 rounded-lg p-2 sm:p-2.5 ring-1 ring-blueA/30">
                      <motion.div 
                        className="text-xs text-blueA font-medium leading-tight"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        💡 Found $45 in potential savings this week!
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Task Completion - Better spacing */}
                <div className="space-y-2 mb-4 sm:mb-5">
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 0.5 }}
                  >
                    <motion.div 
                      className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-green-400 flex items-center justify-center flex-shrink-0"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        borderColor: ["rgb(34 197 94)", "rgb(16 185 129)", "rgb(34 197 94)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <motion.div 
                        className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 3.5, duration: 0.3 }}
                      />
                    </motion.div>
                    <motion.span 
                      className="text-xs text-white/70 leading-tight"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 3.2, duration: 0.5 }}
                    >
                      Grocery list completed
                    </motion.span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 0.5 }}
                  >
                    <motion.div 
                      className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-blue-400 flex items-center justify-center flex-shrink-0"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        borderColor: ["rgb(96 165 250)", "rgb(59 130 246)", "rgb(96 165 250)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <motion.div 
                        className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 4.5, duration: 0.3 }}
                      />
                    </motion.div>
                    <motion.span 
                      className="text-xs text-white/70 leading-tight"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 4.2, duration: 0.5 }}
                    >
                      Sleep tracking active
                    </motion.span>
                  </motion.div>
                </div>
                
                {/* Bottom action area - Fixed positioning */}
                <div className="mt-auto pt-2">
                  <motion.div 
                    className="rounded-lg bg-gradient-to-r from-blueA/20 to-blueB/20 p-2 sm:p-2.5 ring-1 ring-blueA/30"
                    animate={{ 
                      background: [
                        "linear-gradient(to right, rgba(73, 120, 242, 0.2), rgba(16, 185, 129, 0.2))",
                        "linear-gradient(to right, rgba(16, 185, 129, 0.2), rgba(73, 120, 242, 0.2))",
                        "linear-gradient(to right, rgba(73, 120, 242, 0.2), rgba(16, 185, 129, 0.2))"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.div 
                      className="text-xs text-blueA font-medium text-center flex items-center justify-center gap-1.5"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span>🤖</span>
                      <span>AI Assistant Ready</span>
                      <motion.span
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Floating elements - Reduced overlap */}
            <motion.div 
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full bg-gradient-to-br from-blueA/20 to-tealA/20 blur-lg"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-lg"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            
            {/* Additional floating elements - Better positioned */}
            <motion.div 
              className="absolute top-1/3 -right-4 sm:-right-5 md:-right-6 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 rounded-full bg-gradient-to-br from-green-400/30 to-emerald-500/30 blur-md"
              animate={{ 
                y: [0, -8, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-1/3 -left-3 sm:-left-4 md:-left-5 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-500/30 blur-md"
              animate={{ 
                y: [0, 6, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
