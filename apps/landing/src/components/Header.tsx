"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import AccountModal from './AccountModal';

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
    { href: "#apps", label: "Apps" },
    { href: "#how", label: "How it works" },
    { href: "#pricing", label: "Pricing" }, // placeholder
    { href: "#safety", label: "Safety" },
    { href: "#blog", label: "Blog" }, // placeholder
  ];
  
  return (
    <>
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
                      
                      {/* Enhanced sparkle effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                        <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white/80 rounded-full animate-ping group-hover:animate-bounce"></div>
                        <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 bg-white/80 rounded-full animate-ping group-hover:animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                        <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-white/60 rounded-full animate-ping group-hover:animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                        <div className="absolute bottom-1.5 left-1.5 w-1 h-1 bg-white/60 rounded-full animate-ping group-hover:animate-bounce" style={{ animationDelay: '0.9s' }}></div>
                      </div>
                      
                      {/* Additional shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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
                                
                                {/* Shiny overlay effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -skew-x-12 -translate-x-full group-hover:translate-x-full pointer-events-none"></div>
                                
                                {/* Glowing ring on hover */}
                                <div className="absolute inset-0 rounded-full ring-2 ring-blue-200/0 group-hover:ring-blue-400/60 transition-all duration-300 group-hover:scale-105 pointer-events-none"></div>
                                
                                {/* Enhanced sparkle effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                                  <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-blue-400/80 rounded-full animate-ping"></div>
                                  <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 bg-blue-400/80 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                                  <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-blue-400/60 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                                </div>
                                
                                {/* Additional shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'}
                                </p>
                                <p className="text-xs text-gray-500">{user?.email}</p>
                              </div>
                            </div>
                          </div>

                          {/* Menu Options */}
                          <div className="py-1">
                            <button
                              onClick={() => {
                                setShowAccountModal(true);
                                setShowUserMenu(false);
                              }}
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              Manage account
                            </button>
                            
                            <button
                              onClick={handleSignOut}
                              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                              </svg>
                              Sign out
                            </button>
                          </div>

                          {/* Footer */}
                          <div className="px-4 py-3 bg-gradient-to-r from-orange-50 to-yellow-50 border-t border-gray-100">
                            <div className="flex items-center space-x-2 text-xs text-gray-600">
                              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">S</span>
                              </div>
                              <span>Secured by Supabase</span>
                            </div>
                            <div className="text-xs text-orange-600 font-medium mt-1">
                              Production mode
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href="/signin">
                    <button className="rounded-lg sm:rounded-xl bg-white/10 px-3 py-1.5 sm:px-3 sm:py-1 ring-1 ring-white/10 hover:bg-white/20 transition-colors duration-200 text-sm">
                      Sign in
                    </button>
                  </Link>
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
                {!loading && isSignedIn ? (
                  <>
                    <button 
                      onClick={() => {
                        setShowAccountModal(true);
                        setOpen(false);
                      }}
                      className="block w-full text-left rounded-lg px-3 py-2 hover:bg-white/10 transition-colors duration-200 active:bg-white/20"
                    >
                      Account
                    </button>
                    <button 
                      onClick={() => {
                        handleSignOut();
                        setOpen(false);
                      }}
                      className="block w-full text-left rounded-lg px-3 py-2 hover:bg-white/10 transition-colors duration-200 active:bg-white/20"
                    >
                      Sign out
                    </button>
                  </>
                ) : (
                  <Link href="/signin">
                    <button 
                      className="block w-full text-left rounded-lg px-3 py-2 hover:bg-white/10 transition-colors duration-200 active:bg-white/20"
                      onClick={() => setOpen(false)}
                    >
                      Sign in
                    </button>
                  </Link>
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
