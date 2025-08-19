"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Zap, 
  Clock, 
  Rocket, 
  Sparkles, 
  ArrowRight, 
  Bell, 
  TrendingUp, 
  Users,
  Check
} from "lucide-react";
import { config } from "../../lib/config";
import { useState } from "react";

export default function ComingSoonPage() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const comingSoonPals = [
    {
      name: "CarPal",
      tagline: "Your AI Automotive Companion",
      description: "Smart maintenance alerts, fuel efficiency optimization, and predictive diagnostics that keep your vehicle running at peak performance.",
      features: [
        "Predictive maintenance scheduling",
        "Real-time fuel efficiency tracking",
        "Smart route optimization",
        "Vehicle health monitoring",
        "Cost-saving recommendations"
      ],
      avatar: "/carpalAvatar.PNG",
      color: "from-blue-500 to-cyan-500",
      accentColor: "blue",
      eta: "Q1 2025",
      progress: 75,
      category: "Automotive"
    },
    {
      name: "CryptoPal",
      tagline: "AI-Powered Investment Strategy",
      description: "Intelligent crypto analysis, portfolio optimization, and market trend predictions to help you make informed investment decisions.",
      features: [
        "Real-time market analysis",
        "Portfolio risk assessment",
        "Trend prediction algorithms",
        "Automated trading signals",
        "Tax optimization strategies"
      ],
      avatar: "/cryptopalAvatar.PNG",
      color: "from-cyan-500 to-emerald-500",
      accentColor: "cyan",
      eta: "Q2 2025",
      progress: 45,
      category: "Finance"
    }
  ];

  const developmentStages = [
    {
      stage: "Research & Planning",
      description: "Market analysis and user research",
      icon: "Target",
      color: "blue"
    },
    {
      stage: "Design & Prototyping",
      description: "UI/UX design and feature planning",
      icon: "Star",
      color: "purple"
    },
    {
      stage: "Development",
      description: "Core functionality and AI training",
      icon: "Rocket",
      color: "green"
    },
    {
      stage: "Testing & Refinement",
      description: "Beta testing and performance optimization",
      icon: "Shield",
      color: "orange"
    },
    {
      stage: "Launch Preparation",
      description: "Final polish and release planning",
      icon: "Zap",
      color: "pink"
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
              <a href="/" className="flex items-center gap-3 group">
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
              </a>
              
              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
                <a href="/" className="hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                  Home
                </a>
                <a href="/pricing" className="hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                  Pricing
                </a>
                <a href={config.aiPlatformUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <span>Try YourPals</span>
                  <Zap className="w-4 h-4" />
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors duration-200">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 ring-1 ring-purple-500/30 text-purple-300 text-sm font-medium mb-6 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4" />
                New AI Pals Coming Soon
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                The Future of{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  AI Companions
                </span>
              </h1>
              
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                We're crafting the next generation of AI Pals that will revolutionize how you interact with technology. 
                Get ready for intelligent companions that think ahead and make life easier.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 text-sm">
                  <Clock className="w-4 h-4" />
                  First Release: Q1 2025
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 text-sm">
                  <Users className="w-4 h-4" />
                  Join the Waitlist
                </div>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* Coming Soon Pals Showcase */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Meet Your Future AI Pals
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Each AI Pal is carefully crafted with cutting-edge technology and user-centered design
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {comingSoonPals.map((pal, index) => (
                <motion.div
                  key={pal.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 lg:p-10 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg">
                          <Image
                            src={pal.avatar}
                            alt={`${pal.name} Avatar`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{pal.name}</h3>
                          <p className="text-white/60 text-sm font-medium">{pal.category}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 text-xs font-medium">
                          <Clock className="w-3 h-3" />
                          {pal.eta}
                        </div>
                      </div>
                    </div>

                    {/* Tagline & Description */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-3">{pal.tagline}</h4>
                      <p className="text-white/70 leading-relaxed">{pal.description}</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-white/60">Development Progress</span>
                        <span className="text-sm font-medium text-white">{pal.progress}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pal.progress}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        />
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h5 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Key Features</h5>
                      <div className="grid grid-cols-1 gap-3">
                        {pal.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            <span className="text-white/70 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowEmailModal(true)}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-white/10 to-white/5 text-white font-semibold ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Bell className="w-5 h-5" />
                      <span>Get Notified When Available</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How We Build Your AI Pals
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Our development process ensures every AI Pal is crafted with precision and care
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {developmentStages.map((stage, index) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center">
                        <span className="text-blue-400 font-bold text-lg">{index + 1}</span>
                      </div>
                    </div>
                    
                    {index < developmentStages.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent transform translate-x-2"></div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{stage.stage}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{stage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist Signup */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-xl text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center ring-1 ring-purple-500/30"
              >
                <Rocket className="w-10 h-10 text-purple-400" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Be the First to Experience
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join our exclusive waitlist and get early access to new AI Pals, special features, and insider updates. 
                Plus, receive a special discount when they launch!
              </p>
              
              <div className="max-w-md mx-auto space-y-4">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
                
                <p className="text-white/50 text-sm">
                  🔒 We respect your privacy. Unsubscribe at any time.
                </p>
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
                Can't Wait for New AI Pals?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Start exploring our current AI Pals today and experience the power of AI companions that think ahead, 
                automate your daily tasks, and make life easier.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={config.aiPlatformUrl}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <span>Try Current AI Pals</span>
                  <Zap className="w-5 h-5" />
                </a>
                
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-lg ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30 transition-all duration-300"
                >
                  <span>View Pricing</span>
                  <TrendingUp className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Email Modal */}
        <AnimatePresence>
          {showEmailModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowEmailModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {!submitSuccess ? (
                  <>
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center ring-1 ring-purple-500/30">
                        <Bell className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Get Early Access</h3>
                      <p className="text-white/70">Be the first to know when new AI Pals are available!</p>
                    </div>

                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                      />
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={async () => {
                          if (!email) return;
                          setIsSubmitting(true);
                          // Simulate API call
                          await new Promise(resolve => setTimeout(resolve, 1000));
                          setIsSubmitting(false);
                          setSubmitSuccess(true);
                        }}
                        disabled={!email || isSubmitting}
                        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Join Waitlist</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center ring-1 ring-green-500/30">
                      <Check className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">You're on the List!</h3>
                    <p className="text-white/70 mb-6">We'll notify you as soon as new AI Pals are available.</p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setShowEmailModal(false);
                        setSubmitSuccess(false);
                        setEmail("");
                      }}
                      className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30 transition-all duration-300"
                    >
                      Close
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
