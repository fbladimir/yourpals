"use client";
import { motion } from "framer-motion";
import { 
  Download, 
  Monitor, 
  Laptop, 
  Smartphone, 
  Clock,
  Check,
  Zap,
  Star
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { config } from "../../lib/config";

export default function DownloadPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const platforms = [
    {
      id: "desktop",
      name: "Desktop App",
      description: "Windows & Linux",
      icon: Monitor,
      status: "coming-soon",
      features: ["Full AI assistant access", "Advanced features", "Offline capabilities"],
      comingSoonText: "Coming Q2 2024"
    },
    {
      id: "mac",
      name: "Mac App",
      description: "macOS 12.0+",
      icon: Laptop,
      status: "coming-soon",
      features: ["Native macOS integration", "Touch Bar support", "iCloud sync"],
      comingSoonText: "Coming Q2 2024"
    },
    {
      id: "ios",
      name: "iOS App",
      description: "iPhone & iPad",
      icon: Smartphone,
      status: "coming-soon",
      features: ["Mobile-optimized AI", "Siri shortcuts", "Apple Watch support"],
      comingSoonText: "Coming Q3 2024"
    },
    {
      id: "android",
      name: "Android App",
      description: "Android 10+",
      icon: Smartphone,
      status: "coming-soon",
      features: ["Google Assistant integration", "Material Design 3", "Cross-device sync"],
      comingSoonText: "Coming Q3 2024"
    }
  ];

  return (
    <main className="relative min-h-screen">
      {/* Unified Background System */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black pointer-events-none"></div>
      
      {/* Subtle gradient overlays for depth */}
      <div className="fixed inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-r from-transparent via-cyan-500/3 to-transparent pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation Header */}
        <header className="sticky top-4 sm:top-6 z-50 px-4 sm:px-6 lg:px-8 pt-8">
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
                    className="absolute inset-0 border-2 border-blue-500 rounded-full"
                  />
                </div>
                <div className="text-left">
                  <div className="text-blue-500 text-xs font-mono tracking-wider">AI MODE</div>
                  <div className="text-white font-bold text-lg">YourPals</div>
                </div>
              </Link>
              
              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
                <Link href="/" className="hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                  Home
                </Link>
                <Link href="/pricing" className="hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                  Pricing
                </Link>
                <Link href="/about" className="hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                  About
                </Link>
                <Link href="/contact" className="hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                  Contact
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            
            {/* Mobile Navigation Dropdown - Inside Header Container */}
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 pt-4 border-t border-white/10"
              >
                <nav className="flex flex-col space-y-1">
                  <a 
                    href="/" 
                    className="text-white/80 hover:text-white transition-colors duration-200 px-3 py-3 rounded-lg hover:bg-white/5 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a 
                    href="/coming-soon" 
                    className="text-white/80 hover:text-white transition-colors duration-200 px-3 py-3 rounded-lg hover:bg-white/5 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Coming Soon
                  </a>
                  <a 
                    href={config.aiPlatformUrl} 
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Try YourPals</span>
                    <Zap className="w-4 h-4" />
                  </a>
                </nav>
              </motion.div>
            )}
          </div>
        </header>

        {/* Hero Header */}
        <header className="pt-16 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-white/60 text-sm font-medium mb-6 backdrop-blur-sm"
              >
                <Download className="w-4 h-4" />
                Download YourPals
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Get YourPals on{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Any Device
                </span>
              </h1>
              
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Experience the power of AI assistants across all your devices. 
                Download YourPals and take your AI companions with you everywhere.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Platform Selection */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Choose Your Platform
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Select the platform that works best for you. All apps sync seamlessly across devices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-6 lg:p-8 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500 hover:scale-[1.02] h-full">
                    {/* Platform Icon */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-blue-500/30">
                        <platform.icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
                      <p className="text-gray-400 text-sm">{platform.description}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <ul className="space-y-3">
                        {platform.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Status & Action */}
                    <div className="text-center">
                      {platform.status === "coming-soon" ? (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/20 text-orange-400 text-sm font-medium border border-orange-500/30">
                          <Clock className="w-4 h-4" />
                          {platform.comingSoonText}
                        </div>
                      ) : (
                        <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                          Download Now
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Download Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-xl"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Why Download YourPals?
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Get the full YourPals experience with native apps designed for your platform
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center ring-1 ring-blue-500/30">
                    <Zap className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Faster Performance</h3>
                  <p className="text-gray-300">
                    Native apps provide lightning-fast performance and smooth animations
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center ring-1 ring-purple-500/30">
                    <Star className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Better Experience</h3>
                  <p className="text-gray-300">
                    Platform-specific features and integrations for the best user experience
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center ring-1 ring-green-500/30">
                    <Download className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Offline Access</h3>
                  <p className="text-gray-300">
                    Access your AI assistants even when you're offline
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Can't Wait for the Apps?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Start using YourPals right now in your browser. All the same AI features, 
                available immediately.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <span>Try in Browser</span>
                  <Zap className="w-5 h-5" />
                </Link>
                
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-lg ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30 transition-all duration-300"
                >
                  <span>View Pricing</span>
                  <Star className="w-5 h-5" />
                </Link>
              </div>
              
              <p className="mt-6 text-white/50 text-sm">
                Browser version available now • Native apps coming soon • All features included
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
