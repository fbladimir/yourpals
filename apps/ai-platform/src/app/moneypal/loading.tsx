'use client'

export default function Loading() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
			<div className="text-center max-w-md">
				<div className="relative mb-8">
					<div className="w-24 h-24 mx-auto mb-4">
						<img
							src="/yourpalAvatar.png"
							alt="YourPal"
							className="w-full h-full object-contain animate-pulse"
						/>
					</div>
					<div className="absolute -top-2 -right-2 bg-robot-green/90 backdrop-blur-sm rounded-full p-3 animate-bounce">
						<div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
					</div>
				</div>

				<h1 className="text-2xl font-bold text-white mb-2">Preparing Your MoneyPal! 💰</h1>
				<p className="text-gray-300 text-lg leading-relaxed">
					Just a moment while I get your financial dashboard ready...
				</p>

				<div className="flex items-center justify-center space-x-2 mt-6">
					<div className="w-2 h-2 bg-robot-green rounded-full animate-bounce"></div>
					<div className="w-2 h-2 bg-robot-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
					<div className="w-2 h-2 bg-robot-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
				</div>

				<p className="text-gray-400 text-sm mt-4">Loading your financial data...</p>
			</div>
		</div>
	)
}


