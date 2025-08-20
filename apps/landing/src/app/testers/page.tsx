"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Star, 
  MapPin, 
  Building2, 
  Heart, 
  Users, 
  Mail,
  ArrowRight,
  Trophy,
  Target,
  Zap
} from "lucide-react";
import { config } from "../../lib/config";

export default function TestersPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const testers = [
    {
      id: 1,
      name: "Dylan",
      business: "Eos Gym Member",
      location: "Accounting Professional",
      avatar: "/yourpalAvatar.PNG", // Using placeholder for now
      description: "Dylan is a gym enthusiast and accounting professional who wants to use MoneyPal for his personal finances and FitnessPal to optimize his own workout routines and track his fitness progress.",
      interests: ["MoneyPal", "FitnessPal"],
      testimonial: "I'm excited to use YourPals to manage my personal finances better and get the most out of my gym workouts!",
      joinedDate: "December 2024",
      status: "Active Beta Tester",
      specialty: "Personal Finance & Fitness"
    },
    {
      id: 2,
      name: "Jorge Betancourt",
      business: "AI Research & Data Science",
      location: "Computer Science Researcher",
      avatar: "/yourpalAvatar.PNG", // Using placeholder for now
      description: "Jorge is a Master's in Computer Science graduate working as a researcher in AI and data science. He's excited to experience the AI capabilities and automation features of every YourPals app to understand how they can enhance his research and daily workflow.",
      interests: ["MoneyPal", "SellerPal", "CookingPal", "YourPal", "All AI Features"],
      testimonial: "As someone working in AI research, I'm fascinated to see how YourPals implements intelligent automation and AI assistance. I want to explore every aspect of these AI companions!",
      joinedDate: "December 2024",
      status: "Active Beta Tester",
      specialty: "AI Research & Data Science"
    }
  ];

  const applySteps = [
    {
      step: 1,
      title: "Apply",
      description: "Register an account and complete the onboarding process. You'll get a message saying 'wait for approval' after finishing.",
      icon: Users
    },
    {
      step: 2,
      title: "Wait for Approval",
      description: "Our team reviews your application and onboarding. This usually takes 1-2 business days.",
      icon: Target
    },
    {
      step: 3,
      title: "Get Access",
      description: "Once approved, you'll receive an email confirmation. Then sign in to access all AI Pal apps for testing!",
      icon: Trophy
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
                <Link href="/coming-soon" className="hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                  Coming Soon
                </Link>
                <a href={config.aiPlatformUrl} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <span>Try YourPals</span>
                  <Zap className="w-4 h-4" />
                </a>
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
                  <Link 
                    href="/" 
                    className="text-white/80 hover:text-white transition-colors duration-200 px-3 py-3 rounded-lg hover:bg-white/5 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/pricing" 
                    className="text-white/80 hover:text-white transition-colors duration-200 px-3 py-3 rounded-lg hover:bg-white/5 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link 
                    href="/coming-soon" 
                    className="text-white/80 hover:text-white transition-colors duration-200 px-3 py-3 rounded-lg hover:bg-white/5 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Coming Soon
                  </Link>
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 ring-1 ring-orange-500/30 text-orange-300 text-sm font-medium mb-6 backdrop-blur-sm"
              >
                <Trophy className="w-4 h-4" />
                Exclusive Beta Testers
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Meet Our{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Amazing Testers
                </span>
              </h1>
              
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
                These amazing people are helping us build the future of AI companions. 
                They're getting early access and helping us shape the next generation of AI assistance.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 text-sm">
                  <Users className="w-4 h-4" />
                  {testers.length} Active Tester{testers.length !== 1 ? 's' : ''}
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/20 text-white/80 text-sm">
                  <Heart className="w-4 h-4" />
                  Exclusive Beta Access
                </div>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* Featured Testers */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Beta Testing Heroes
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Meet the amazing people who are helping us perfect YourPals
              </p>
            </motion.div>

            {/* Desktop Grid Layout */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {testers.map((tester, index) => (
                <motion.div
                  key={tester.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/20">
                          <Image
                            src={tester.avatar}
                            alt={`${tester.name} Avatar`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                          <Star className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{tester.name}</h3>
                        <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                          <Users className="w-4 h-4" />
                          <span>{tester.business}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{tester.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium mb-4">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      {tester.status}
                    </div>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed mb-6">
                      {tester.description}
                    </p>

                    {/* Interests */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/80 mb-3">Interested in:</h4>
                      <div className="flex flex-wrap gap-2">
                        {tester.interests.map((interest, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-white/80 italic text-sm leading-relaxed">
                        "{tester.testimonial}"
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                      <div className="text-white/60 text-xs">
                        Joined {tester.joinedDate}
                      </div>
                      <div className="text-white/60 text-xs">
                        {tester.specialty}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Horizontal Scroll Layout */}
            <div className="lg:hidden overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-4 w-max">
                {testers.map((tester, index) => (
                  <motion.div
                    key={tester.id}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="w-80 flex-shrink-0 relative group"
                  >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-xl">
                      {/* Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg ring-2 ring-white/20">
                            <Image
                              src={tester.avatar}
                              alt={`${tester.name} Avatar`}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                            <Star className="w-2.5 h-2.5 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-1">{tester.name}</h4>
                          <div className="flex items-center gap-2 text-white/60 text-xs mb-1">
                            <Users className="w-3 h-3" />
                            <span>{tester.business}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white/60 text-xs">
                            <MapPin className="w-3 h-3" />
                            <span>{tester.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                        {tester.status}
                      </div>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed mb-4 text-sm">
                        {tester.description}
                      </p>

                      {/* Interests */}
                      <div className="mb-4">
                        <h5 className="text-xs font-semibold text-white/80 mb-2">Interested in:</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {tester.interests.map((interest, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-white/80 italic text-xs leading-relaxed">
                          "{tester.testimonial}"
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
                        <div className="text-white/60 text-xs">
                          Joined {tester.joinedDate}
                        </div>
                        <div className="text-white/60 text-xs">
                          {tester.specialty}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Apply to be a Tester */}
        <section id="apply" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                <Users className="w-10 h-10 text-purple-400" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Want to Join Our Beta Program?
              </h2>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                We're always looking for passionate people who want to help shape the future of AI assistance. 
                Get early access and help us build something amazing!
              </p>
              
              {/* Application Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {applySteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-blue-500/30">
                      <step.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {step.step}. {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Mobile-Only Application Steps */}
              <div className="md:hidden mb-8">
                <div className="space-y-6">
                  {applySteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-blue-500/30 flex-shrink-0">
                        <step.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-white mb-2">
                          {step.step}. {step.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.a
                href={config.aiPlatformUrl}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <span>Start Beta Application</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <p className="mt-6 text-white/50 text-sm">
                Create account • Complete onboarding • Wait for approval • Get exclusive access
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
