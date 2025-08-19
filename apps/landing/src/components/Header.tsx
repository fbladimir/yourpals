"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import AccountModal from './AccountModal';
import { config } from '../lib/config';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  onUserUpdate?: (updatedUser: any) => void;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showAIPalsDropdown, setShowAIPalsDropdown] = useState(false);
  const router = useRouter();

  const handleUserUpdate = (updatedUser: any) => {
    setUser(updatedUser);
  };
  
  useEffect(() => {
    // Check current auth state
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(session.user);
          setIsSignedIn(true);
        }
      } catch (error) {
        console.error('Error checking auth state:', error);
      } finally {
        setLoading(false);
      }
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser(session.user);
          setIsSignedIn(true);
        } else {
          setUser(null);
          setIsSignedIn(false);
        }
        setLoading(false);
      }
    );

    // Listen for custom event to close mobile menu
    const handleCloseMenu = () => setOpen(false);
    window.addEventListener('closeMobileMenu', handleCloseMenu);
    
    return () => {
      subscription.unsubscribe();
      window.removeEventListener('closeMobileMenu', handleCloseMenu);
    };
  }, []);
  
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setShowUserMenu(false);
      setShowAccountModal(false);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const nav = [
    { name: "AI pals", href: "#ai-pals-overview", hasDropdown: true },
    { name: "How it works", href: "#how" },
    { name: "Coming Soon", href: "/coming-soon" },
    { name: "Pricing", href: "/pricing" },
    { name: "Apply to Test", href: "/testers#apply" },
  ];
  
  // AI Pals data for dropdown
  const aiPals = [
    { name: "MoneyPal", role: "Financial Co-Pilot", avatar: "/moneypalAvatar.PNG", color: "green" },
    { name: "SellerPal", role: "E-commerce Assistant", avatar: "/sellerpalAvatar.png", color: "orange" },
    { name: "CookingPal", role: "Culinary Companion", avatar: "/cookingpalAvatar.png", color: "yellow" },
    { name: "YourPal", role: "AI Platform Manager", avatar: "/yourpalAvatar.PNG", color: "purple" },
    { name: "CarPal", role: "Automotive Assistant", avatar: "/carpalAvatar.PNG", color: "blue" },
    { name: "CryptoPal", role: "Investment Advisor", avatar: "/cryptopalAvatar.PNG", color: "cyan" }
  ];
  
  return (
    <>
      <header className="sticky top-4 sm:top-6 z-50 px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl sm:rounded-2xl bg-white/5 px-3 sm:px-4 py-2 sm:py-3 ring-1 ring-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/yourpalAvatar.PNG"
                  alt="YourPals"
                  width={40}
                  height={40}
                  className="rounded-full group-hover:scale-110 transition-transform duration-200"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 0, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 border-2 border-blueA rounded-full"
                />
              </div>
              <div className="text-left">
                <div className="text-blueA text-xs font-mono tracking-wider">AI MODE</div>
                <div className="text-white font-bold text-lg">YourPals</div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-white/80">
              {nav.map(n => (
                <div key={n.href} className="relative">
                  {n.hasDropdown ? (
                    <div 
                      className="hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer"
                      onMouseEnter={() => setShowAIPalsDropdown(true)}
                      onMouseLeave={() => setShowAIPalsDropdown(false)}
                    >
                      {n.name}
                      <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      
                      {/* AI Pals Dropdown */}
                      <AnimatePresence>
                        {showAIPalsDropdown && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/30 py-4 z-50"
                            onMouseEnter={() => setShowAIPalsDropdown(true)}
                            onMouseLeave={() => setShowAIPalsDropdown(false)}
                          >
                            <div className="grid grid-cols-2 gap-3 px-4">
                              {aiPals.map((pal, index) => (
                                <motion.div
                                  key={pal.name}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: index * 0.05 }}
                                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all duration-200 cursor-pointer group"
                                  onClick={() => {
                                    setShowAIPalsDropdown(false);
                                    if (pal.name === 'MoneyPal' || pal.name === 'SellerPal' || pal.name === 'CookingPal') {
                                      document.getElementById('ai-pals-overview')?.scrollIntoView({ behavior: 'smooth' });
                                      setTimeout(() => {
                                        window.dispatchEvent(new CustomEvent('selectPal', { detail: pal.name.toLowerCase() }));
                                      }, 500);
                                    } else if (pal.name === 'CarPal' || pal.name === 'CryptoPal') {
                                      document.getElementById('coming-soon')?.scrollIntoView({ behavior: 'smooth' });
                                    } else if (pal.name === 'YourPal') {
                                      document.getElementById('ai-pals-overview')?.scrollIntoView({ behavior: 'smooth' });
                                      setTimeout(() => {
                                        window.dispatchEvent(new CustomEvent('selectPal', { detail: 'yourpal' }));
                                      }, 500);
                                    }
                                  }}
                                >
                                  <div className="relative">
                                    <Image
                                      src={pal.avatar}
                                      alt={pal.name}
                                      width={40}
                                      height={40}
                                      className="rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-200"
                                    />
                                    <div className={`absolute -top-1 -right-1 w-3 h-3 bg-${pal.color}-500 rounded-full border-2 border-gray-900/95`}></div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-white text-sm group-hover:text-white transition-colors duration-200">
                                      {pal.name}
                                    </div>
                                    <div className="text-white/80 text-xs group-hover:text-white/90 transition-colors duration-200 truncate">
                                      {pal.role}
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      href={n.href} 
                      className="hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
                      onClick={() => setOpen(false)}
                    >
                      {n.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Auth Section */}
              <div className="flex items-center gap-4">
                {!loading && isSignedIn ? (
                  <div className="relative">
                    {/* User Profile Picture */}
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center overflow-hidden group cursor-pointer hover:shadow-lg hover:shadow-white/20 hover:scale-105 active:scale-95"
                      title="User menu"
                    >
                      {/* Shiny overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -skew-x-12 -translate-x-full group-hover:translate-x-full pointer-events-none"></div>
                      
                      {/* Profile image or initial */}
                      {user?.user_metadata?.avatar_url ? (
                        <Image
                          src={user.user_metadata.avatar_url}
                          alt="Profile"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover relative z-10"
                        />
                      ) : (
                        <span className="text-white font-medium text-lg relative z-10">
                          {user?.email?.charAt(0).toUpperCase() || 'U'}
                        </span>
                      )}
                      
                      {/* Glowing ring on hover */}
                      <div className="absolute inset-0 rounded-full ring-2 ring-white/0 group-hover:ring-white/50 transition-all duration-300 group-hover:scale-110 pointer-events-none"></div>
                    </button>

                    {/* User Dropdown Menu */}
                    <AnimatePresence>
                      {showUserMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                        >
                          {/* User Info */}
                          <div className="px-4 py-3 border-b border-gray-100">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden group relative cursor-pointer">
                                {user?.user_metadata?.avatar_url ? (
                                  <Image
                                    src={user.user_metadata.avatar_url}
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover relative z-10"
                                  />
                                ) : (
                                  <span className="text-blue-600 font-medium text-lg relative z-10">
                                    {user?.email?.charAt(0).toUpperCase() || 'U'}
                                  </span>
                                )}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {user?.user_metadata?.full_name || 'User'}
                                </p>
                                <p className="text-xs text-gray-500">{user?.email}</p>
                              </div>
                            </div>
                          </div>

                          {/* Menu Items */}
                          <div className="py-1">
                            <button
                              onClick={() => {
                                setShowAccountModal(true);
                                setShowUserMenu(false);
                              }}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                            >
                              Account Settings
                            </button>
                            <button
                              onClick={() => router.push(config.aiPlatformUrl)}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                            >
                              Go to Dashboard
                            </button>
                            <button
                              onClick={handleSignOut}
                              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                            >
                              Sign Out
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <a
                      href={config.aiPlatformUrl}
                      className="text-white/80 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
                    >
                      Login
                    </a>
                    <a
                      href={config.aiPlatformUrl}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-lg"
                    >
                      Try YourPals For Free
                    </a>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 pt-4 border-t border-white/10"
              >
                <nav className="flex flex-col space-y-2">
                  {nav.map(n => (
                    <Link
                      key={n.href}
                      href={n.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
                      onClick={() => setOpen(false)}
                    >
                      {n.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Auth Section */}
                  <div className="pt-2 border-t border-white/10">
                    {!loading && isSignedIn ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            setShowAccountModal(true);
                            setOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                        >
                          Account Settings
                        </button>
                        <button
                          onClick={() => {
                            router.push(config.aiPlatformUrl);
                            setOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                        >
                          Go to Dashboard
                        </button>
                        <button
                          onClick={() => {
                            handleSignOut();
                            setOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors duration-200"
                        >
                          Sign Out
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <a
                          href={config.aiPlatformUrl}
                          className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                          onClick={() => setOpen(false)}
                        >
                          Login
                        </a>
                        <a
                          href={config.aiPlatformUrl}
                          className="block px-3 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                          onClick={() => setOpen(false)}
                        >
                          Get Started
                        </a>
                      </div>
                    )}
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Account Modal */}
      <AccountModal
        isOpen={showAccountModal}
        onClose={() => setShowAccountModal(false)}
        user={user}
        onUserUpdate={handleUserUpdate}
      />
    </>
  );
}
