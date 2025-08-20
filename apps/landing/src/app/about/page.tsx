"use client";
import { motion } from "framer-motion";
import { 
  Heart, 
  Brain, 
  Users, 
  Zap, 
  Target,
  Globe,
  Star,
  Rocket,
  Lightbulb,
  Shield
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { config } from "../../lib/config";

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const values = [
    {
      icon: Heart,
      title: "Human-Centered AI",
      description: "We believe AI should enhance human capabilities, not replace them. Every feature is designed with your well-being in mind."
    },
    {
      icon: Brain,
      title: "Intelligent Automation",
      description: "Smart automation that learns your preferences and adapts to your lifestyle, making complex tasks simple."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a community of users who share knowledge and help each other achieve their goals with AI assistance."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your data is yours. We use enterprise-grade security and never share your personal information."
    }
  ];

  const milestones = [
    {
      year: "January 2025",
      title: "YourPals Founded",
      description: "Started with a vision to make AI accessible and helpful for everyone"
    },
    {
      year: "January 2025",
      title: "First AI Pal - MoneyPal",
      description: "Launched our flagship financial AI assistant"
    },
    {
      year: "January 2025",
      title: "Beta Testing Program",
      description: "Opened our doors to early adopters and beta testers"
    },
    {
      year: "Q2 2025",
      title: "Full Platform Launch",
      description: "Complete YourPals ecosystem with all AI Pals available"
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
                <Link href="/download" className="hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                  Download
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
                <Heart className="w-4 h-4" />
                Our Story
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                The{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Vision
                </span>{" "}
                Behind YourPals
              </h1>
              
              <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                We're on a mission to democratize AI assistance, making powerful artificial intelligence 
                accessible, helpful, and genuinely beneficial for everyone. YourPals isn't just another AI tool—it's your 
                personal team of intelligent companions designed to make life easier, more productive, and more enjoyable.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Mission Statement */}
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
                  Our Mission
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  To create AI companions that truly understand and help people, making advanced technology 
                  accessible to everyone while maintaining the highest standards of privacy and security.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center ring-1 ring-blue-500/30 flex-shrink-0">
                      <Target className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Accessibility First</h3>
                      <p className="text-gray-300">
                        We believe AI should be available to everyone, not just tech experts. 
                        YourPals is designed to be intuitive and helpful from day one.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center ring-1 ring-purple-500/30 flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Continuous Innovation</h3>
                      <p className="text-gray-300">
                        We're constantly improving and adding new capabilities based on user feedback 
                        and the latest AI research.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center ring-1 ring-green-500/30 flex-shrink-0">
                      <Globe className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Global Impact</h3>
                      <p className="text-gray-300">
                        Our vision extends beyond individual users—we want to help create a world 
                        where AI makes life better for everyone.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <Rocket className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">The Future is Now</h3>
                      <p className="text-white/80 leading-relaxed">
                        We're not just building AI tools—we're creating the foundation for how humans 
                        and AI will work together in the future. YourPals is just the beginning.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                The principles that guide everything we do at YourPals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-blue-500/30 flex-shrink-0">
                      <value.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                From concept to reality—here's how YourPals came to be
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={`${milestone.year}-${milestone.title}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900"></div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 ${
                      index % 2 === 0 ? 'text-left' : 'text-right'
                    }`}>
                      <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-3">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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
                Join Us on This Journey
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Be part of the future of AI assistance. Try YourPals today and experience 
                the difference that human-centered AI can make in your life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <span>Get Started Free</span>
                  <Zap className="w-5 h-5" />
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-lg ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30 transition-all duration-300"
                >
                  <span>Get in Touch</span>
                  <Star className="w-5 h-5" />
                </Link>
              </div>
              
              <p className="mt-6 text-white/50 text-sm">
                No credit card required • Start free today • Join our community
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
