'use client'

import { useEffect, useState } from 'react'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
	const [isPreparing, setIsPreparing] = useState(false)
	
	useEffect(() => {
		const message = error?.message || ''
		// Auto-recover from transient Next/webpack first-load errors
		if (
			message.includes("Cannot read properties of undefined (reading 'call')") ||
			message.includes('ChunkLoadError') ||
			message.includes('Loading chunk')
		) {
			// Show the nice loading screen instead of error
			setIsPreparing(true)
			
			// Soft reload to restore app state after showing the nice loading
			if (typeof window !== 'undefined') {
				setTimeout(() => {
					window.location.reload()
				}, 800) // Reduced time since we now have proper loading states
			}
		}
	}, [error])

	// Show nice loading screen for transient errors
	if (isPreparing) {
		return (
			<html>
				<body>
					<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
						<div className="text-center max-w-md">
							{/* YourPal Avatar */}
							<div className="relative mb-8">
								<div className="w-24 h-24 mx-auto mb-4">
									<img 
										src="/yourpalAvatar.png" 
										alt="YourPal" 
										className="w-full h-full object-contain animate-pulse"
									/>
								</div>
								
								{/* Floating chat bubble */}
								<div className="absolute -top-2 -right-2 bg-robot-green/90 backdrop-blur-sm rounded-full p-3 animate-bounce">
									<div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
								</div>
							</div>
							
							{/* Greeting Message */}
							<div className="space-y-4">
								<h1 className="text-2xl font-bold text-white mb-2">
									Preparing Your AI Pal! 🤖
								</h1>
								<p className="text-gray-300 text-lg leading-relaxed">
									Just a moment while I get everything ready for you...
								</p>
								
								{/* Loading animation */}
								<div className="flex items-center justify-center space-x-2 mt-6">
									<div className="w-2 h-2 bg-robot-green rounded-full animate-bounce"></div>
									<div className="w-2 h-2 bg-robot-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
									<div className="w-2 h-2 bg-robot-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
								</div>
								
								<p className="text-gray-400 text-sm mt-4">
									This usually takes just a few seconds
								</p>
							</div>
						</div>
					</div>
				</body>
			</html>
		)
	}

	// For non-transient errors, show the regular error page
	return (
		<html>
			<body>
				<div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
					<div className="text-center max-w-md">
						<div className="text-6xl mb-4">🤖</div>
						<h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
						<p className="text-gray-300 mb-6">We hit an unexpected issue. You can try again.</p>
						<div className="flex items-center justify-center gap-3">
							<button
								onClick={() => (typeof window !== 'undefined' ? window.location.reload() : reset())}
								className="px-6 py-3 bg-robot-blue text-white rounded-lg hover:bg-robot-blue/80 transition-colors"
							>
								Reload
							</button>
							<button
								onClick={() => reset()}
								className="px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
							>
								Try Again
							</button>
						</div>
						{process.env.NODE_ENV === 'development' && (
							<pre className="mt-6 text-left p-4 bg-gray-800 rounded text-xs text-gray-300 overflow-auto">
								{error?.stack}
							</pre>
						)}
					</div>
				</div>
			</body>
		</html>
	)
}


