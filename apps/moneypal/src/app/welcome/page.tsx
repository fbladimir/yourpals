"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../../components/AuthProvider";
import { config } from "../../lib/config";

export default function WelcomePage() {
  const router = useRouter()
  const { user, loading } = useAuth()
  const [checkingAuth, setCheckingAuth] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    if (!loading) {
      if (user) {
        console.log('✅ Welcome page: User authenticated, redirecting to dashboard')
        router.push('/dashboard')
      } else {
        console.log('✅ Welcome page: No user, showing welcome content')
        setCheckingAuth(false)
      }
    }
  }, [user, loading, router])

  // Show loading while checking auth
  if (loading || checkingAuth) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-300">Checking authentication...</p>
        </div>
      </div>
    )
  }

  // If we get here, user is not authenticated
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-8">
      {/* Back to YourPals Navigation */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
        <a 
          href={config.marketingUrl} 
          className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-700/50 backdrop-blur-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="hidden sm:inline">Back to YourPals</span>
        </a>
      </div>
      
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 px-4">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MoneyPal
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Your personal finance companion that helps you track expenses, set budgets, 
            and achieve your financial goals with smart insights and beautiful visualizations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4"
        >
          <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-700">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-sm sm:text-base">Smart Tracking</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Automatically categorize and track your expenses with AI-powered insights.</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-700">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-sm sm:text-base">Goal Setting</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Set and track financial goals with progress visualization and smart reminders.</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-700">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-sm sm:text-base">Smart Insights</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Get personalized financial advice and spending pattern analysis.</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 sm:space-y-6 px-4"
        >
          <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-700 max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Ready to take control of your finances?
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Join thousands of users who are already managing their money smarter with MoneyPal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/sign-in"
                className="flex-1 sm:flex-none bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105 active:scale-95 text-center text-sm sm:text-base"
              >
                Get Started
              </Link>
              
              <Link
                href="/sign-up"
                className="flex-1 sm:flex-none border-2 border-gray-600 text-gray-300 px-6 sm:px-8 py-3 sm:py-3 rounded-xl font-semibold hover:border-gray-500 hover:bg-gray-700 transition-colors duration-200 text-center text-sm sm:text-base"
              >
                Create Account
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-12 text-center text-gray-500 text-xs sm:text-sm px-4"
        >
          &copy; {new Date().getFullYear()} YourPals. All rights reserved.
        </motion.div>
      </div>
    </div>
  );
}
