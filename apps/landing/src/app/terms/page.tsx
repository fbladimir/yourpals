"use client";
import { motion } from "framer-motion";
import { 
  FileText, 
  Scale, 
  Shield, 
  UserCheck, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Calendar,
  BookOpen,
  Phone,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { config } from "../../lib/config";

export default function TermsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const termsSections = [
    {
      title: "Acceptance of Terms",
      description: "By accessing and using YourPals services, you agree to be bound by these terms and conditions."
    },
    {
      title: "Service Description",
      description: "YourPals provides AI companion services designed to assist with various life tasks and activities."
    },
    {
      title: "User Responsibilities",
      description: "Users are responsible for maintaining the security of their accounts and using services appropriately."
    },
    {
      title: "Intellectual Property",
      description: "All content and technology used in YourPals services are protected by intellectual property laws."
    }
  ];

  const userObligations = [
    {
      category: "Account Security",
      items: ["Maintain strong passwords", "Enable 2FA when available", "Report suspicious activity", "Keep contact info updated"]
    },
    {
      category: "Appropriate Use",
      items: ["Use services as intended", "Respect other users", "Follow community guidelines", "Comply with laws"]
    },
    {
      category: "Content Guidelines",
      items: ["No harmful content", "Respect intellectual property", "No spam or abuse", "Maintain privacy"]
    },
    {
      category: "Payment Terms",
      items: ["Pay fees on time", "Provide accurate billing info", "Understand subscription terms", "Cancel properly"]
    }
  ];

  const companyObligations = [
    {
      title: "Service Availability",
      description: "We strive to maintain 99.9% uptime but may need to perform maintenance or updates."
    },
    {
      title: "Data Protection",
      description: "We implement industry-standard security measures to protect your personal information."
    },
    {
      title: "Customer Support",
      description: "We provide support through multiple channels and aim to respond within 24 hours."
    },
    {
      title: "Continuous Improvement",
      description: "We regularly update and improve our services based on user feedback and technology advances."
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
                <FileText className="w-4 h-4" />
                Terms of Service
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Terms of{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              
              <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                These terms govern your use of YourPals services. Please read them carefully to understand 
                your rights and responsibilities when using our AI companions.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Key Terms Overview */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Key Terms Overview
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Important terms that govern your relationship with YourPals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {termsSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-blue-500/30 flex-shrink-0">
                      <Scale className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{section.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* User Obligations */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                User Obligations
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Your responsibilities when using YourPals services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {userObligations.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-xl"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-blue-400" />
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

        {/* Company Obligations */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Obligations
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                What you can expect from YourPals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyObligations.map((obligation, index) => (
                <motion.div
                  key={obligation.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{obligation.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{obligation.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Disclaimers */}
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
                  Important Disclaimers
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Please understand these important limitations and disclaimers
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center ring-1 ring-yellow-500/30 flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">AI Limitations</h3>
                      <p className="text-gray-300">
                        AI companions provide assistance but should not replace professional advice for critical matters.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center ring-1 ring-red-500/30 flex-shrink-0">
                      <Shield className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">No Guarantees</h3>
                      <p className="text-gray-300">
                        We strive for excellence but cannot guarantee specific outcomes or results from our services.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center ring-1 ring-blue-500/30 flex-shrink-0">
                      <Calendar className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Service Changes</h3>
                      <p className="text-gray-300">
                        We may modify or discontinue services with reasonable notice to users.
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
                  <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                        <AlertTriangle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Read Carefully</h3>
                      <p className="text-white/80 leading-relaxed">
                        These terms contain important information about your rights and our responsibilities. 
                        Please read them thoroughly before using our services.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Termination & Changes */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Termination & Changes
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                How these terms can be modified or terminated
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Account Termination",
                  description: "You may terminate your account at any time through your account settings"
                },
                {
                  title: "Service Suspension",
                  description: "We may suspend services for violations of these terms or suspicious activity"
                },
                {
                  title: "Terms Updates",
                  description: "We may update these terms with 30 days notice for significant changes"
                },
                {
                  title: "Continued Use",
                  description: "Continued use after changes constitutes acceptance of new terms"
                },
                {
                  title: "Data Retention",
                  description: "We retain data according to our privacy policy after account termination"
                },
                {
                  title: "Refund Policy",
                  description: "Refunds are handled according to our subscription and refund policies"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Questions */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Questions About Terms?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                If you have questions about these terms or need clarification on any section, 
                our team is here to help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <span>Contact Us</span>
                  <Phone className="w-5 h-5" />
                </Link>
                
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-lg ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30 transition-all duration-300"
                >
                  <span>Privacy Policy</span>
                  <Shield className="w-5 h-5" />
                </Link>
              </div>
              
              <p className="mt-6 text-white/50 text-sm">
                Last updated: January 15, 2025 • Effective date: January 15, 2025
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
