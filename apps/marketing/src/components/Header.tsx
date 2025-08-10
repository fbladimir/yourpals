"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "#apps", label: "Apps" },
    { href: "#how", label: "How it works" },
    { href: "#pricing", label: "Pricing" }, // placeholder
    { href: "#safety", label: "Safety" },
    { href: "#blog", label: "Blog" }, // placeholder
  ];
  
  return (
    <header className="sticky top-4 sm:top-6 z-50 px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl sm:rounded-2xl bg-white/5 px-3 sm:px-4 py-2 sm:py-3 ring-1 ring-white/10 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-sm sm:text-base hover:text-white/90 transition-colors">
            YourPals
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-white/80">
            {nav.map(n => (
              <a 
                key={n.href} 
                href={n.href} 
                className="hover:text-white transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a 
              href="https://moneypal.yourpals.app" 
              className="rounded-lg sm:rounded-xl bg-white/10 px-3 py-1.5 sm:px-3 sm:py-1 ring-1 ring-white/10 hover:bg-white/20 transition-colors duration-200 text-sm"
            >
              Sign in
            </a>
            <a 
              href="#download" 
              className="rounded-lg sm:rounded-xl bg-blueA px-3 py-1.5 sm:px-3 sm:py-1 hover:bg-blueB transition-colors duration-200 text-sm font-medium"
            >
              Get started
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setOpen(!open)} 
            className="md:hidden rounded-lg sm:rounded-xl bg-white/10 px-3 py-1.5 sm:px-3 sm:py-1 ring-1 ring-white/10 hover:bg-white/20 transition-colors duration-200 text-sm active:scale-95 touch-manipulation"
            aria-label="Toggle menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-3 grid gap-1 sm:gap-2 md:hidden text-sm text-white/80 border-t border-white/10 pt-3"
          >
            {nav.map(n => (
              <a 
                key={n.href} 
                href={n.href} 
                className="rounded-lg px-3 py-2 hover:bg-white/10 transition-colors duration-200 active:bg-white/20"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <div className="border-t border-white/10 pt-2 mt-2">
              <a 
                href="https://moneypal.yourpals.app" 
                className="block rounded-lg px-3 py-2 hover:bg-white/10 transition-colors duration-200 active:bg-white/20"
                onClick={() => setOpen(false)}
              >
                Sign in
              </a>
              <a 
                href="#download" 
                className="block rounded-lg px-3 py-2 bg-blueA text-white hover:bg-blueB transition-colors duration-200 active:bg-blueB mt-1"
                onClick={() => setOpen(false)}
              >
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
