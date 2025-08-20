"use client";
import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  UserCheck, 
  FileText,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Globe,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { config } from "../../lib/config";

export default function PrivacyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "Data Minimization",
      description: "We only collect the data necessary to provide our services and improve your experience."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All sensitive data is encrypted in transit and at rest using industry-standard protocols."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're clear about what data we collect, how we use it, and who has access to it."
    },
    {
      icon: UserCheck,
      title: "User Control",
      description: "You have full control over your data, including the ability to delete it at any time."
    }
  ];

  const dataCollection = [
    {
      category: "Account Information",
      items: ["Email address", "Display name", "Profile preferences", "Account settings"]
    },
    {
      category: "Usage Data",
      items: ["Feature usage patterns", "Interaction with AI companions", "App performance metrics", "Error logs"]
    },
    {
      category: "AI Interaction Data",
      items: ["Conversation history", "AI responses", "Learning preferences", "Task completion data"]
    },
    {
      category: "Technical Data",
      items: ["Device information", "IP address", "Browser type", "Operating system"]
    }
  ];

  const dataUsage = [
    {
      purpose: "Service Provision",
      description: "To provide and maintain our AI companion services"
    },
    {
      purpose: "Personalization",
      description: "To customize your experience and improve AI responses"
    },
    {
      purpose: "Security",
      description: "To protect against fraud and ensure account security"
    },
    {
      purpose: "Improvement",
      description: "To analyze usage patterns and enhance our services"
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
                <Shield className="w-4 h-4" />
                Privacy & Data Protection
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Your{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Privacy
                </span>{" "}
                Matters
              </h1>
              
              <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                At YourPals, we believe your privacy is fundamental. This policy explains how we collect, 
                use, and protect your personal information while providing you with powerful AI companions.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Privacy Principles */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                The fundamental principles that guide how we handle your data
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {privacyPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-blue-500/30 flex-shrink-0">
                      <principle.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Collect */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Data We Collect
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                We're transparent about the information we gather to provide our services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {dataCollection.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-xl"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-400" />
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How We Use Your Data
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Every piece of data we collect serves a specific purpose in improving your experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataUsage.map((usage, index) => (
                <motion.div
                  key={usage.purpose}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{usage.purpose}</h3>
                  <p className="text-gray-300 leading-relaxed">{usage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-xl"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  How We Protect Your Data
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  We implement multiple layers of security to ensure your information remains safe and private
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center ring-1 ring-green-500/30 flex-shrink-0">
                      <Lock className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Encryption Everywhere</h3>
                      <p className="text-gray-300">
                        All data is encrypted using AES-256 encryption both in transit and at rest.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center ring-1 ring-purple-500/30 flex-shrink-0">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Regular Security Audits</h3>
                      <p className="text-gray-300">
                        We conduct regular security assessments and penetration testing to identify vulnerabilities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center ring-1 ring-blue-500/30 flex-shrink-0">
                      <UserCheck className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Access Controls</h3>
                      <p className="text-gray-300">
                        Strict access controls ensure only authorized personnel can access your data.
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
                  <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">GDPR Compliant</h3>
                      <p className="text-white/80 leading-relaxed">
                        We're fully compliant with GDPR and other international privacy regulations, 
                        ensuring your rights are protected regardless of where you live.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                You have complete control over your personal information
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Access Your Data",
                  description: "Request a copy of all personal data we have about you"
                },
                {
                  title: "Correct Information",
                  description: "Update or correct any inaccurate personal information"
                },
                {
                  title: "Delete Your Data",
                  description: "Request complete deletion of your personal data"
                },
                {
                  title: "Data Portability",
                  description: "Export your data in a machine-readable format"
                },
                {
                  title: "Restrict Processing",
                  description: "Limit how we use your personal information"
                },
                {
                  title: "Object to Processing",
                  description: "Opt out of certain types of data processing"
                }
              ].map((right, index) => (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{right.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{right.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Updates */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                We're committed to transparency and are here to answer any questions about how we handle your data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-lg ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30 transition-all duration-300"
                >
                  <span>View Terms</span>
                  <FileText className="w-5 h-5" />
                </Link>
              </div>
              
              <p className="mt-6 text-white/50 text-sm">
                Last updated: January 15, 2025 • We'll notify you of any changes
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
