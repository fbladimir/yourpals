"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { config } from "../lib/config";
import Image from "next/image";

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
              <span className="text-xs sm:text-sm font-semibold text-green-300">Available Now</span>
            </motion.div>
            
            {/* Separator */}
            <div className="h-4 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            
            {/* AI Pals indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blueA/20 to-blueB/20 ring-1 ring-blueA/30">
              <span className="text-xs sm:text-sm text-white/80">AI Pals Ready</span>
              <motion.div 
                className="text-xs sm:text-sm font-bold text-blueA"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(73, 120, 242, 0)",
                    "0 0 8px rgba(73, 120, 242, 0.8)",
                    "0 0 0px rgba(73, 120, 242, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>
          
          {/* Main headline */}
          <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            Create Your Own{" "}
            <span className="bg-gradient-to-r from-blueA to-purple-500 bg-clip-text text-transparent">
              AI Pals
            </span>{" "}
            for Every Need
          </h1>
          
          {/* Description */}
          <p className="mt-4 sm:mt-6 max-w-lg sm:max-w-xl lg:max-w-lg text-base sm:text-lg text-white/70 leading-relaxed mx-auto lg:mx-0">
            YourPals is the first platform that lets you create, customize, and deploy AI assistants 
            for any purpose. From finance to cooking, business to fitness - build your perfect AI team.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link 
              href={config.aiPlatformUrl} 
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 sm:px-6 sm:py-4 font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 touch-manipulation"
            >
              Start Building Free
            </Link>
            <a 
              href="#apps" 
              className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 sm:px-6 sm:py-4 font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition-all duration-200 active:scale-95 touch-manipulation"
            >
              Meet Your AI Pals
            </a>
          </div>
          
          {/* Bottom text */}
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/50">
            Start your free trial. Cancel anytime.
          </p>
        </div>

        {/* Right side - AI Pal Avatars Floating Freely */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end order-first lg:order-last"
        >
          <div className="relative w-full h-96 lg:h-[500px]">
            {/* AI Pal Avatars - Floating freely without container */}
            <div className="relative w-full h-full">
              {/* MoneyPal - Center, Larger */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <Image
                  src="/moneypalAvatar.PNG"
                  alt="MoneyPal"
                  width={140}
                  height={140}
                  className="rounded-full shadow-2xl drop-shadow-2xl"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-green-400/20 blur-xl scale-150"></div>
              </motion.div>

              {/* SellerPal - Top Right, Larger */}
              <motion.div
                animate={{ 
                  y: [0, -25, 0],
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.08, 1]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-8 right-8 z-20"
              >
                <Image
                  src="/sellerpalAvatar.png"
                  alt="SellerPal"
                  width={100}
                  height={100}
                  className="rounded-full shadow-xl drop-shadow-xl"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-orange-400/20 blur-lg scale-150"></div>
              </motion.div>

              {/* CookingPal - Bottom Right, Larger */}
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [0, 4, -4, 0],
                  scale: [1, 1.06, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-8 right-8 z-20"
              >
                <Image
                  src="/cookingpalAvatar.png"
                  alt="CookingPal"
                  width={110}
                  height={110}
                  className="rounded-full shadow-xl drop-shadow-xl"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-lg scale-150"></div>
              </motion.div>

              {/* YourPal - Top Left, Larger */}
              <motion.div
                animate={{ 
                  y: [0, -35, 0],
                  rotate: [0, -3, 3, 0],
                  scale: [1, 1.07, 1]
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-8 left-8 z-20"
              >
                <Image
                  src="/yourpalAvatar.PNG"
                  alt="YourPal"
                  width={90}
                  height={90}
                  className="rounded-full shadow-xl drop-shadow-xl"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-purple-400/20 blur-lg scale-150"></div>
              </motion.div>

              {/* CarPal - Bottom Left, New */}
              <motion.div
                animate={{ 
                  y: [0, -40, 0],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.09, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-8 left-8 z-20"
              >
                <Image
                  src="/carpalAvatar.PNG"
                  alt="CarPal"
                  width={95}
                  height={95}
                  className="rounded-full shadow-xl drop-shadow-xl"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-lg scale-150"></div>
              </motion.div>

              {/* CryptoPal - Middle Left, New */}
              <motion.div
                animate={{ 
                  y: [0, -45, 0],
                  rotate: [0, -4, 4, 0],
                  scale: [1, 1.06, 1]
                }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                className="absolute top-1/3 left-4 z-20"
              >
                <Image
                  src="/cryptopalAvatar.PNG"
                  alt="CryptoPal"
                  width={85}
                  height={85}
                  className="rounded-full shadow-xl drop-shadow-xl"
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-lg scale-150"></div>
              </motion.div>

              {/* Enhanced Floating Elements - More prominent */}
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                  y: [0, -15, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 left-1/4 w-4 h-4 bg-green-400 rounded-full shadow-lg"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 1, 0.4],
                  y: [0, 20, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full shadow-lg"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                  x: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full shadow-md"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
