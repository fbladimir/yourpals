"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-12">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left side - Text content */}
        <div className="text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10 text-white/70">
            New • Meet <span className="text-blueA font-medium">MoneyPal</span>
          </div>
          
          {/* Main headline */}
          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Your AI assistants for your{" "}
            <span className="text-blueA">everyday life.</span>
          </h1>
          
          {/* Description */}
          <p className="mt-6 max-w-lg text-lg text-white/70 leading-relaxed">
            Manage all your daily tasks and AI assistants in a single platform with seamless automation.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link 
              href="#apps" 
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get Started Free
            </Link>
            <Link 
              href="#how" 
              className="inline-flex items-center justify-center rounded-xl bg-white/5 px-6 py-4 font-semibold text-white ring-1 ring-white/10 hover:bg-white/10 transition-colors"
            >
              See How It Works
            </Link>
          </div>
          
          {/* Bottom text */}
          <p className="mt-4 text-sm text-white/50">
            Start your free trial. Cancel anytime.
          </p>
        </div>

        {/* Right side - Enhanced smartphone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Main smartphone */}
            <div className="relative h-[500px] w-80 rounded-3xl bg-gradient-to-b from-gray-800 to-black p-3 ring-1 ring-white/20 shadow-2xl">
              <div className="h-full w-full rounded-2xl bg-gradient-to-b from-gray-900 to-black p-6">
                {/* App header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="h-8 w-8 rounded-full bg-blueA"></div>
                  <div className="text-xs text-white/60">YourPals</div>
                  <div className="h-2 w-8 rounded-full bg-white/20"></div>
                </div>
                
                {/* 3D blob character with enhanced styling */}
                <div className="relative mx-auto mb-8 h-36 w-36">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white to-gray-100 shadow-xl"></div>
                  {/* Eyes */}
                  <div className="absolute top-12 left-8 h-4 w-4 rounded-full bg-black"></div>
                  <div className="absolute top-12 right-8 h-4 w-4 rounded-full bg-black"></div>
                  {/* Mouth */}
                  <div className="absolute bottom-12 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black"></div>
                  {/* Golden coin with glow */}
                  <div className="absolute -bottom-3 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-lg ring-2 ring-yellow-300/50">
                    <div className="flex h-full w-full items-center justify-center text-sm font-bold text-black">$</div>
                  </div>
                </div>
                
                {/* App interface elements */}
                <div className="space-y-3">
                  <div className="h-3 w-full rounded-full bg-white/20"></div>
                  <div className="h-3 w-3/4 rounded-full bg-white/20"></div>
                  <div className="h-3 w-2/3 rounded-full bg-white/20"></div>
                </div>
                
                {/* Bottom action area */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl bg-blueA/20 p-3 ring-1 ring-blueA/30">
                    <div className="text-xs text-blueA font-medium text-center">AI Assistant Ready</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-gradient-to-br from-blueA/20 to-tealA/20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
