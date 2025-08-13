import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YourPals AI Platform',
  description: 'Your personal AI team with cute robot personalities',
}

// Error boundary component for chunk loading errors
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="text-6xl mb-4">🤖</div>
        <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
        <p className="text-gray-300 mb-4">
          {error.message.includes('ChunkLoadError') 
            ? 'There was an issue loading the application. Please refresh the page.'
            : 'An unexpected error occurred. Please try refreshing the page.'
          }
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-6 py-3 bg-robot-blue text-white rounded-lg hover:bg-robot-blue/80 transition-colors"
        >
          Refresh Page
        </button>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-4 text-left">
            <summary className="text-robot-orange cursor-pointer">Error Details</summary>
            <pre className="mt-2 p-4 bg-gray-800 rounded text-xs text-gray-300 overflow-auto">
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={
          <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🤖</div>
              <p className="text-gray-300">Loading YourPals...</p>
            </div>
          </div>
        }>
          <AuthProvider>
            {children}
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  )
}
