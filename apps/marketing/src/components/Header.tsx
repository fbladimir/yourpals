"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { isSignedIn, user } = useUser();
  
  useEffect(() => {
    // Listen for custom event to close mobile menu
    const handleCloseMenu = () => setOpen(false);
    window.addEventListener('closeMobileMenu', handleCloseMenu);
    
    return () => {
      window.removeEventListener('closeMobileMenu', handleCloseMenu);
    };
  }, []);
  
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
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/yourpalsRobot.png"
                alt="YourPals Robot"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold tracking-tight text-sm sm:text-base text-white">YourPals</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-white/80">
            {nav.map(n => (
              <a 
                key={n.href} 
                href={n.href} 
                className="hover:text-white transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            
            {/* Auth Section */}
            <div className="flex items-center gap-3">
              {isSignedIn ? (
                <>
                  <Link 
                    href="/account" 
                    className="text-white/80 hover:text-white transition-colors duration-200 px-2 py-1 rounded-lg hover:bg-white/5"
                  >
                    Account
                  </Link>
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                        userButtonPopoverCard: "bg-white/10 backdrop-blur-sm border border-white/20",
                        userButtonPopoverActionButton: "text-white/80 hover:text-white hover:bg-white/10",
                        userButtonPopoverActionButtonText: "text-white/80",
                        userButtonPopoverFooter: "border-t border-white/20",
                      }
                    }}
                  />
                </>
              ) : (
                <SignInButton mode="modal">
                  <button className="rounded-lg sm:rounded-xl bg-white/10 px-3 py-1.5 sm:px-3 sm:py-1 ring-1 ring-white/10 hover:bg-white/20 transition-colors duration-200 text-sm">
                    Sign in
                  </button>
                </SignInButton>
              )}
              
              <a 
                href="#download" 
                className="rounded-lg sm:rounded-xl bg-blueA px-3 py-1.5 sm:px-3 sm:py-1 hover:bg-blueB transition-colors duration-200 text-sm font-medium"
              >
                Get started
              </a>
            </div>
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
              {isSignedIn ? (
                <>
                  <Link 
                    href="/account" 
                    className="block rounded-lg px-3 py-2 hover:bg-white/10 transition-colors duration-200 active:bg-white/20"
                    onClick={() => setOpen(false)}
                  >
                    Account
                  </Link>
                  <SignOutButton>
                    <button 
                      className="block w-full text-left rounded-lg px-3 py-2 hover:bg-white/10 transition-colors duration-200 active:bg-white/20"
                      onClick={() => setOpen(false)}
                    >
                      Sign out
                    </button>
                  </SignOutButton>
                </>
              ) : (
                <SignInButton mode="modal">
                  <button 
                    className="block w-full text-left rounded-lg px-3 py-2 hover:bg-white/10 transition-colors duration-200 active:bg-white/20"
                    onClick={() => setOpen(false)}
                  >
                    Sign in
                  </button>
                </SignInButton>
              )}
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
