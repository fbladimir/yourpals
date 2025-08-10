"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Cute Robot Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Floating animation for the robot */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-32 h-32 mx-auto">
              <Image
                src="/yourpalsRobot.png"
                alt="YourPals Robot"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Coming Soon!
          </h1>
          <p className="text-lg text-white/80 mb-6 leading-relaxed">
            We're working hard to bring you the most amazing AI companions. 
            Sign-in functionality will be available soon!
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-white/10 rounded-full h-2 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
            />
          </div>
          
          <p className="text-sm text-white/60">
            Development Progress: 75% Complete
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <Link
            href="/"
            className="inline-block w-full sm:w-auto rounded-xl bg-white/10 px-6 py-3 text-white ring-1 ring-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            ← Back to Home
          </Link>
          
          <div className="text-sm text-white/60">
            <p>Want to be notified when it's ready?</p>
            <p className="mt-1">
              Follow us on{" "}
              <a 
                href="https://twitter.com/yourpals" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Twitter
              </a>
            </p>
          </div>
        </motion.div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
