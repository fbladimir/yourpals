"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SignInPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    // Check if user is already signed in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        router.push('/');
      }
    };
    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          router.push('/');
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [router]);

  return (
    // Override parent layout constraints to fill full screen
    <div className="fixed inset-0 -mx-6 -my-6">
      <div className="min-h-screen w-full flex">
        {/* Left Column - Auth Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 py-12 bg-white">
          <div className="max-w-md w-full space-y-8">
            {/* Logo and Header */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 mr-3">
                  <Image
                    src="/yourpalsRobot.png"
                    alt="YourPals Robot"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-gray-900">YourPals</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {isSignUp ? "Create your account" : "Welcome back!"} 👋
              </h1>
              <p className="text-gray-600">
                {isSignUp 
                  ? "Join thousands of users managing their AI companions"
                  : "Sign in to continue your YourPals experience"
                }
              </p>
            </div>

            {/* Auth Form */}
            <div className="space-y-6">
              <Auth
                supabaseClient={supabase}
                appearance={{
                  theme: ThemeSupa,
                  variables: {
                    default: {
                      colors: {
                        brand: '#4978F2',
                        brandAccent: '#7666F3',
                      },
                    },
                  },
                  className: {
                    anchor: 'text-blue-600 hover:text-blue-500 transition-colors',
                    button: 'rounded-xl px-6 py-3 font-medium transition-all duration-200 hover:scale-105 active:scale-95',
                    input: 'rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500',
                    label: 'text-gray-700 font-medium',
                  },
                }}
                providers={['google', 'apple', 'azure']}
                redirectTo={`${typeof window !== 'undefined' ? window.location.origin : ''}/`}
                view={isSignUp ? 'sign_up' : 'sign_in'}
                showLinks={false}
              />

              {/* Toggle Sign In/Sign Up */}
              <div className="text-center">
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-blue-600 hover:text-blue-500 transition-colors font-medium"
                >
                  {isSignUp 
                    ? "Already have an account? Sign in" 
                    : "Don't have an account? Sign up"
                  }
                </button>
              </div>

              {/* Back to Home */}
              <div className="text-center pt-4 border-t border-gray-200">
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>

            {/* Loading State */}
            {/* The loading state was removed as per the edit hint. */}
          </div>
        </div>

        {/* Right Column - Marketing/Preview */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
          {/* Enhanced Background with Multiple Gradients */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-400/5 via-transparent to-purple-400/5"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center w-full p-12">
            <div className="max-w-lg text-center space-y-10">
              {/* Enhanced Hero Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Stats Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">10,000+ Active Users</span>
                </motion.div>

                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                  Trust{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    YourPals
                  </span>{" "}
                  with your AI companions
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-md mx-auto">
                  Join the future of AI companionship. Manage, customize, and interact with your personalized AI pals across all your devices.
                </p>
              </motion.div>

              {/* Enhanced Feature Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/30 relative overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Your AI Companion Dashboard
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Manage conversations, customize personalities, and track your AI pals&apos; learning progress with our intuitive interface.
                    </p>
                  </div>

                  {/* Feature List */}
                  <div className="grid grid-cols-1 gap-3 text-left">
                    {[
                      "✨ Real-time conversation management",
                      "🎨 Customizable AI personalities", 
                      "📊 Learning progress tracking",
                      "🔒 Secure & private interactions"
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="mr-2">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center space-y-4"
              >
                <p className="text-sm text-gray-500 font-medium">Trusted by leading AI researchers</p>
                <div className="flex items-center justify-center space-x-8">
                  {['OpenAI', 'Anthropic', 'Google AI'].map((company, index) => (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="text-gray-400 font-semibold text-sm px-3 py-2 bg-white/50 backdrop-blur-sm rounded-lg border border-white/20"
                    >
                      {company}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full"
                style={{
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
