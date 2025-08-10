"use client";
import { motion } from "framer-motion";

export default function ProblemValue() {
  return (
    <section className="mt-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">
          We waste hours managing small daily tasks
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Our AI Pals automate the repetitive, freeing you for what matters.
        </p>
      </div>

      {/* Before and After Illustration */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Before - Problem State */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 mb-4">
                <span className="text-2xl">😰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Before YourPals</h3>
              <p className="text-red-400 text-sm">Stressful & Time-Consuming</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span className="text-white/70">Manually track expenses</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span className="text-white/70">Remember to pay bills</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span className="text-white/70">Build grocery lists from scratch</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span className="text-white/70">Hours lost to repetitive tasks</span>
              </div>
            </div>
          </div>
          
          {/* Floating stress elements */}
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-500/20 blur-sm"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-red-500/20 blur-sm"></div>
        </motion.div>

        {/* After - Solution State */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl bg-gradient-to-br from-blueA/20 to-tealA/20 p-8 ring-1 ring-blueA/30">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                <span className="text-2xl">😌</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">After YourPals</h3>
              <p className="text-green-400 text-sm">Automated & Effortless</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-white/70">AI automatically tracks expenses</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-white/70">Smart bill reminders & payments</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-white/70">AI builds lists from your habits</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-white/70">Hours saved for what matters</span>
              </div>
            </div>
          </div>
          
          {/* Floating success elements */}
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500/20 blur-sm"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-green-500/20 blur-sm"></div>
        </motion.div>
      </div>

      {/* Connection line between before/after */}
      <div className="hidden lg:block relative mt-12">
        <div className="absolute left-1/2 top-0 w-px h-12 bg-gradient-to-b from-red-400/50 to-blueA/50"></div>
        <div className="absolute left-1/2 top-12 w-4 h-4 rounded-full bg-gradient-to-r from-red-400 to-blueA transform -translate-x-1/2"></div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-12"
      >
        <p className="text-white/60 mb-4">Ready to transform your daily routine?</p>
        <a 
          href="#apps" 
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg"
        >
          Meet Your AI Pals
        </a>
      </motion.div>
    </section>
  );
}
