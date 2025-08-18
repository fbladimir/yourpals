'use client'

import { useState, useEffect } from 'react'

// Client-side navigation guard to prevent webpack module loading errors
export default function ClientNavigationGuard({ children }: { children: React.ReactNode }) {
  const [isClientReady, setIsClientReady] = useState(false)

  useEffect(() => {
    // Mark as client-ready after initial hydration
    const timer = setTimeout(() => {
      setIsClientReady(true)
    }, 100) // Small delay to ensure hydration is complete

    return () => clearTimeout(timer)
  }, [])

  // Show loading state briefly during client hydration
  if (!isClientReady) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-robot-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-8 h-8 border-4 border-robot-green border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-300">Preparing YourPals...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
