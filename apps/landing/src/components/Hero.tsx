"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { config } from "../lib/config";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  // State to track which avatars have been "pushed" to new floating positions
  const [pushedAvatars, setPushedAvatars] = useState<Set<string>>(new Set());
  // State to track which avatars are currently being hovered
  const [hoveredAvatars, setHoveredAvatars] = useState<Set<string>>(new Set());

  // Function to handle avatar push - permanently changes their floating position
  const handleAvatarPush = (avatarId: string) => {
    setPushedAvatars(prev => new Set(prev).add(avatarId));
  };

  // Function to handle hover start
  const handleHoverStart = (avatarId: string) => {
    setHoveredAvatars(prev => new Set(prev).add(avatarId));
  };

  // Function to handle hover end
  const handleHoverEnd = (avatarId: string) => {
    setHoveredAvatars(prev => {
      const newSet = new Set(prev);
      newSet.delete(avatarId);
      return newSet;
    });
  };

  // Avatar data for chat bubbles
  const avatarData = {
    yourpal: { name: "YourPal", role: "AI Platform Manager", color: "purple" },
    moneypal: { name: "MoneyPal", role: "Financial Co-Pilot", color: "green" },
    sellerpal: { name: "SellerPal", role: "E-commerce Assistant", color: "orange" },
    cookingpal: { name: "CookingPal", role: "Culinary Companion", color: "yellow" },
    carpal: { name: "CarPal", role: "Automotive Assistant", color: "blue" },
    cryptopal: { name: "CryptoPal", role: "Investment Advisor", color: "cyan" }
  };

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
            {/* Beta indicator with pulse animation */}
            <motion.div 
              className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-400/20 to-yellow-500/20 ring-1 ring-orange-400/30"
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(251, 146, 60, 0.4)",
                  "0 0 0 8px rgba(251, 146, 60, 0)",
                  "0 0 0 0 rgba(251, 146, 60, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-orange-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-xs sm:text-sm font-semibold text-orange-300">Beta Access</span>
            </motion.div>
            
            {/* Separator */}
            <div className="h-4 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            
            {/* Testers indicator */}
            <Link href="/testers" className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blueA/20 to-blueB/20 ring-1 ring-blueA/30 hover:ring-blueA/50 transition-all duration-300 group">
              <span className="text-xs sm:text-sm text-white/80 group-hover:text-white transition-colors">Meet Our Testers</span>
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
                👥
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Mobile-Only Avatar Section - Visual Cards */}
          <div className="md:hidden mt-4 sm:mt-6">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { name: "MoneyPal", avatar: "/moneypalAvatar.PNG", color: "green" },
                { name: "YourPal", avatar: "/yourpalAvatar.PNG", color: "purple" },
                { name: "SellerPal", avatar: "/sellerpalAvatar.png", color: "orange" }
              ].map((pal, index) => (
                <motion.div
                  key={pal.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="relative group cursor-pointer"
                  onClick={() => {
                    if (pal.name === 'MoneyPal' || pal.name === 'SellerPal') {
                      document.getElementById('ai-pals-overview')?.scrollIntoView({ behavior: 'smooth' });
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent('selectPal', { detail: pal.name.toLowerCase() }));
                      }, 500);
                    } else if (pal.name === 'YourPal') {
                      document.getElementById('ai-pals-overview')?.scrollIntoView({ behavior: 'smooth' });
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent('selectPal', { detail: 'yourpal' }));
                      }, 500);
                    }
                  }}
                >
                  {/* Floating Avatar with Enhanced Glow */}
                  <motion.div 
                    className="relative"
                    animate={{
                      y: [0, -6, 0],
                      rotate: [0, 1, -1, 0]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 1.5
                    }}
                  >
                    <Image
                      src={pal.avatar}
                      alt={pal.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
                    />
                    {/* Animated Glow Ring - Smoother and Less Invasive */}
                    <motion.div 
                      className={`absolute inset-0 rounded-full bg-${pal.color}-400/20 blur-md scale-125`}
                      animate={{
                        scale: [1.25, 1.3, 1.25],
                        opacity: [0.2, 0.3, 0.2]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.8
                      }}
                    />
                  </motion.div>
                  
                  {/* Floating Name Badge - Closer to Avatar */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="mt-2 text-center"
                  >
                    <span className="text-xs font-medium text-white/90 bg-white/5 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
                      {pal.name}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Main headline */}
          <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            Your Own{" "}
            <span className="bg-gradient-to-r from-blueA to-purple-500 bg-clip-text text-transparent">
              AI Pals
            </span>{" "}
            for Your{" "}
            <span className="relative">
              Everyday
              {/* Glowing underline effect */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: [0, 1, 0.8, 1],
                  opacity: [0, 1, 0.8, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Glow effect */}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full blur-sm opacity-60"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: [0, 1, 0.8, 1],
                  opacity: [0, 0.6, 0.4, 0.6]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1
                }}
              />
            </span>{" "}
            Needs
          </h1>
          
          {/* Description */}
          <p className="mt-4 sm:mt-6 max-w-lg sm:max-w-xl lg:max-w-lg text-base sm:text-lg text-white/70 leading-relaxed mx-auto lg:mx-0">
            AI companions that think ahead, automate your daily tasks, and make life easier.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link 
              href={config.aiPlatformUrl} 
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 sm:px-6 sm:py-4 font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 touch-manipulation"
            >
              Try YourPals For Free
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
          className="hidden md:flex justify-center lg:justify-end order-first lg:order-last"
        >
          <div className="relative w-full h-96 lg:h-[500px]">
            {/* AI Pal Avatars - Floating freely without container */}
            <div className="relative w-full h-full">
              {/* YourPal - CENTER (The Boss/Manager) */}
              <motion.div
                animate={{ 
                  y: pushedAvatars.has('yourpal') ? [-20, -40, -20] : [0, -20, 0],
                  x: pushedAvatars.has('yourpal') ? [-10, -20, -10] : [0, 0, 0],
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ 
                  y: -8,
                  x: -5,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    duration: 0.6
                  }
                }}
                onHoverStart={() => {
                  handleHoverStart('yourpal');
                  handleAvatarPush('yourpal');
                }}
                onHoverEnd={() => handleHoverEnd('yourpal')}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  document.getElementById('ai-pals-overview')?.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('selectPal', { detail: 'yourpal' }));
                  }, 500);
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer"
              >
                <Image
                  src="/yourpalAvatar.PNG"
                  alt="YourPal - AI Platform Manager"
                  width={140}
                  height={140}
                  className="rounded-full shadow-2xl drop-shadow-2xl"
                />
                {/* Enhanced glow effect on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-purple-400/20 blur-xl scale-150"
                  animate={{
                    scale: pushedAvatars.has('yourpal') ? [1.2, 1.4, 1.2] : [1, 1, 1],
                    opacity: pushedAvatars.has('yourpal') ? [0.3, 0.5, 0.3] : [0.2, 0.2, 0.2]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Chat Bubble */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ 
                    opacity: hoveredAvatars.has('yourpal') ? 1 : 0,
                    scale: hoveredAvatars.has('yourpal') ? 1 : 0.8,
                    y: hoveredAvatars.has('yourpal') ? 0 : 20
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.1
                  }}
                  className="absolute -top-32 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
                >
                  <div className="bg-white/15 backdrop-blur-xl rounded-3xl px-5 py-3 ring-1 ring-white/25 shadow-2xl border border-white/10">
                    <p className="text-sm font-semibold text-white tracking-wide">Hey! I'm YourPal 👋 AI Platform Manager</p>
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white/15"></div>
                </motion.div>
              </motion.div>

              {/* MoneyPal - Top Right (Moved down to avoid header) */}
              <motion.div
                animate={{ 
                  y: pushedAvatars.has('moneypal') ? [-20, -40, -20] : [0, -25, 0],
                  x: pushedAvatars.has('moneypal') ? [25, 35, 25] : [0, 0, 0],
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.08, 1]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ 
                  y: -6,
                  x: 3,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 22,
                    duration: 0.7
                  }
                }}
                onHoverStart={() => {
                  handleHoverStart('moneypal');
                  handleAvatarPush('moneypal');
                }}
                onHoverEnd={() => handleHoverEnd('moneypal')}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  document.getElementById('ai-pals-overview')?.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('selectPal', { detail: 'moneypal' }));
                  }, 500);
                }}
                className="absolute top-16 right-8 z-20 cursor-pointer"
              >
                <Image
                  src="/moneypalAvatar.PNG"
                  alt="MoneyPal"
                  width={100}
                  height={100}
                  className="rounded-full shadow-xl drop-shadow-xl"
                />
                {/* Enhanced glow effect on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-green-400/20 blur-lg scale-150"
                  animate={{
                    scale: pushedAvatars.has('moneypal') ? [1.2, 1.4, 1.2] : [1, 1, 1],
                    opacity: pushedAvatars.has('moneypal') ? [0.25, 0.4, 0.25] : [0.2, 0.2, 0.2]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                
                {/* Chat Bubble */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ 
                    opacity: hoveredAvatars.has('moneypal') ? 1 : 0,
                    scale: hoveredAvatars.has('moneypal') ? 1 : 0.8,
                    y: hoveredAvatars.has('moneypal') ? 0 : 20
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.1
                  }}
                  className="absolute -top-28 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
                >
                  <div className="bg-white/15 backdrop-blur-xl rounded-3xl px-4 py-2.5 ring-1 ring-white/25 shadow-2xl border border-white/10">
                    <p className="text-sm font-semibold text-white tracking-wide">Hi! I'm MoneyPal 💰</p>
                    <p className="text-xs text-white/80 mt-1 font-medium">Financial Co-Pilot</p>
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-5 border-r-5 border-t-5 border-transparent border-t-white/15"></div>
                </motion.div>
              </motion.div>

              {/* SellerPal - Bottom Right (Moved up to avoid overlap) */}
              <motion.div
                animate={{ 
                  y: pushedAvatars.has('sellerpal') ? [20, 40, 20] : [0, -30, 0],
                  x: pushedAvatars.has('sellerpal') ? [22, 32, 22] : [0, 0, 0],
                  rotate: [0, 4, -4, 0],
                  scale: [1, 1.06, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                whileHover={{ 
                  y: 5,
                  x: 2,
                  transition: {
                    type: "spring",
                    stiffness: 90,
                    damping: 25,
                    duration: 0.8
                  }
                }}
                onHoverStart={() => {
                  handleHoverStart('sellerpal');
                  handleAvatarPush('sellerpal');
                }}
                onHoverEnd={() => handleHoverEnd('sellerpal')}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  document.getElementById('ai-pals-overview')?.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('selectPal', { detail: 'sellerpal' }));
                  }, 500);
                }}
                className="absolute bottom-16 right-8 z-20 cursor-pointer"
              >
                <Image
                  src="/sellerpalAvatar.png"
                  alt="SellerPal"
                  width={110}
                  height={110}
                  className="rounded-full shadow-xl drop-shadow-xl"
                />
                {/* Enhanced glow effect on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-orange-400/20 blur-lg scale-150"
                  animate={{
                    scale: pushedAvatars.has('sellerpal') ? [1.2, 1.4, 1.2] : [1, 1, 1],
                    opacity: pushedAvatars.has('sellerpal') ? [0.25, 0.4, 0.25] : [0.2, 0.2, 0.2]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                
                {/* Chat Bubble */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ 
                    opacity: hoveredAvatars.has('sellerpal') ? 1 : 0,
                    scale: hoveredAvatars.has('sellerpal') ? 1 : 0.8,
                    y: hoveredAvatars.has('sellerpal') ? 0 : 20
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.1
                  }}
                  className="absolute -top-32 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
                >
                  <div className="bg-white/15 backdrop-blur-xl rounded-3xl px-4 py-2.5 ring-1 ring-white/25 shadow-2xl border border-white/10">
                    <p className="text-sm font-semibold text-white tracking-wide">Hello! I'm SellerPal 🛒 E-commerce Assistant</p>
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-5 border-r-5 border-t-5 border-transparent border-t-white/15"></div>
                </motion.div>
              </motion.div>

              {/* CarPal - Bottom Left (Moved up to avoid overlap) */}
              <motion.div
                animate={{ 
                  y: pushedAvatars.has('carpal') ? [20, 40, 20] : [0, -40, 0],
                  x: pushedAvatars.has('carpal') ? [-20, -30, -20] : [0, 0, 0],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.09, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                whileHover={{ 
                  y: 8,
                  x: -3,
                  transition: {
                    type: "spring",
                    stiffness: 85,
                    damping: 26,
                    duration: 0.85
                  }
                }}
                onHoverStart={() => {
                  handleHoverStart('carpal');
                  handleAvatarPush('carpal');
                }}
                onHoverEnd={() => handleHoverEnd('carpal')}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  document.getElementById('coming-soon')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="absolute bottom-16 left-8 z-20 cursor-pointer"
              >
                <Image
                  src="/carpalAvatar.PNG"
                  alt="CarPal"
                  width={95}
                  height={95}
                  className="rounded-full shadow-xl drop-shadow-xl"
                />
                {/* Enhanced glow effect on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-blue-400/20 blur-lg scale-150"
                  animate={{
                    scale: pushedAvatars.has('carpal') ? [1.2, 1.4, 1.2] : [1, 1, 1],
                    opacity: pushedAvatars.has('carpal') ? [0.25, 0.4, 0.25] : [0.2, 0.2, 0.2]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
                
                {/* Chat Bubble */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ 
                    opacity: hoveredAvatars.has('carpal') ? 1 : 0,
                    scale: hoveredAvatars.has('carpal') ? 1 : 0.8,
                    y: hoveredAvatars.has('carpal') ? 0 : 20
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.1
                  }}
                  className="absolute -top-30 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
                >
                  <div className="bg-white/15 backdrop-blur-xl rounded-3xl px-4 py-2.5 ring-1 ring-white/25 shadow-2xl border border-white/10">
                    <p className="text-sm font-semibold text-white tracking-wide">Hey! I'm CarPal 🚗</p>
                    <p className="text-xs text-white/80 mt-1 font-medium">Automotive Assistant</p>
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-5 border-r-5 border-t-5 border-transparent border-t-white/15"></div>
                </motion.div>
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
                className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full shadow-md"
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

              {/* CookingPal - Top Left (Moved down to avoid header) */}
              <motion.div
                animate={{ 
                  y: pushedAvatars.has('cookingpal') ? [-18, -38, -18] : [0, -35, 0],
                  x: pushedAvatars.has('cookingpal') ? [-22, -32, -22] : [0, 0, 0],
                  rotate: [0, -3, 3, 0],
                  scale: [1, 1.07, 1]
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ 
                  y: -5,
                  x: -3,
                  transition: {
                    type: "spring",
                    stiffness: 110,
                    damping: 21,
                    duration: 0.65
                  }
                }}
                onHoverStart={() => {
                  handleHoverStart('cookingpal');
                  handleAvatarPush('cookingpal');
                }}
                onHoverEnd={() => handleHoverEnd('cookingpal')}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  document.getElementById('ai-pals-overview')?.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('selectPal', { detail: 'cookingpal' }));
                  }, 500);
                }}
                className="absolute top-16 left-8 z-20 cursor-pointer"
              >
                <Image
                  src="/cookingpalAvatar.png"
                  alt="CookingPal"
                  width={90}
                  height={90}
                  className="rounded-full shadow-xl drop-shadow-xl"
                />
                {/* Enhanced glow effect on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-yellow-400/20 blur-lg scale-150"
                  animate={{
                    scale: pushedAvatars.has('cookingpal') ? [1.2, 1.4, 1.2] : [1, 1, 1],
                    opacity: pushedAvatars.has('cookingpal') ? [0.25, 0.4, 0.25] : [0.2, 0.2, 0.2]
                  }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                
                {/* Chat Bubble */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ 
                    opacity: hoveredAvatars.has('cookingpal') ? 1 : 0,
                    scale: hoveredAvatars.has('cookingpal') ? 1 : 0.8,
                    y: hoveredAvatars.has('cookingpal') ? 0 : 20
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.1
                  }}
                  className="absolute -top-28 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
                >
                  <div className="bg-white/15 backdrop-blur-xl rounded-3xl px-4 py-2.5 ring-1 ring-white/25 shadow-2xl border border-white/10">
                    <p className="text-sm font-semibold text-white tracking-wide">Hi! I'm CookingPal 👨‍🍳</p>
                    <p className="text-xs text-white/80 mt-1 font-medium">Culinary Companion</p>
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-5 border-r-5 border-t-5 border-transparent border-t-white/15"></div>
                </motion.div>
              </motion.div>

              {/* CryptoPal - Left Center (Moved to better position to avoid overlap) */}
              <motion.div
                animate={{ 
                  y: pushedAvatars.has('cryptopal') ? [-25, -45, -25] : [0, -45, 0],
                  x: pushedAvatars.has('cryptopal') ? [-18, -28, -18] : [0, 0, 0],
                  rotate: [0, -4, 4, 0],
                  scale: [1, 1.06, 1]
                }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                whileHover={{ 
                  y: -7,
                  x: -2,
                  transition: {
                    type: "spring",
                    stiffness: 95,
                    damping: 24,
                    duration: 0.75
                  }
                }}
                onHoverStart={() => {
                  handleHoverStart('cryptopal');
                  handleAvatarPush('cryptopal');
                }}
                onHoverEnd={() => handleHoverEnd('cryptopal')}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  document.getElementById('coming-soon')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="absolute top-1/2 left-4 z-20 cursor-pointer"
              >
                <Image
                  src="/cryptopalAvatar.PNG"
                  alt="CryptoPal"
                  width={85}
                  height={85}
                  className="rounded-full shadow-xl drop-shadow-xl"
                />
                {/* Enhanced glow effect on hover */}
                <motion.div 
                  className="absolute inset-0 rounded-full bg-cyan-400/20 blur-lg scale-150"
                  animate={{
                    scale: pushedAvatars.has('cryptopal') ? [1.2, 1.4, 1.2] : [1, 1, 1],
                    opacity: pushedAvatars.has('cryptopal') ? [0.25, 0.4, 0.25] : [0.2, 0.2, 0.2]
                  }}
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                />
                
                {/* Chat Bubble */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ 
                    opacity: hoveredAvatars.has('cryptopal') ? 1 : 0,
                    scale: hoveredAvatars.has('cryptopal') ? 1 : 0.8,
                    y: hoveredAvatars.has('cryptopal') ? 0 : 20
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.1
                  }}
                  className="absolute -top-28 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
                >
                  <div className="bg-white/15 backdrop-blur-xl rounded-3xl px-4 py-2.5 ring-1 ring-white/25 shadow-2xl border border-white/10">
                    <p className="text-sm font-semibold text-white tracking-wide">Hi! I'm CryptoPal ₿</p>
                    <p className="text-xs text-white/80 mt-1 font-medium">Investment Advisor</p>
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-5 border-r-5 border-t-5 border-transparent border-t-white/15"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
