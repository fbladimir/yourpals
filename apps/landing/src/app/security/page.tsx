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
  Key,
  Server,
  Network,
  Monitor,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { config } from "../../lib/config";

export default function SecurityPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data is encrypted using AES-256 encryption both in transit and at rest, ensuring your information remains secure."
    },
    {
      icon: Shield,
      title: "Multi-Layer Security",
      description: "We implement multiple layers of security including firewalls, intrusion detection, and regular security audits."
    },
    {
      icon: Key,
      title: "Secure Authentication",
      description: "Advanced authentication methods including 2FA, biometric options, and secure session management."
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Our infrastructure is built on secure cloud platforms with enterprise-grade security measures."
    }
  ];

  const securityMeasures = [
    {
      category: "Data Protection",
      items: ["AES-256 encryption", "TLS 1.3 for data in transit", "Secure key management", "Regular security audits"]
    },
    {
      category: "Access Control",
      items: ["Role-based access control", "Multi-factor authentication", "Session timeout policies", "IP whitelisting"]
    },
    {
      category: "Network Security",
      items: ["DDoS protection", "Web application firewall", "Intrusion detection", "Regular penetration testing"]
    },
    {
      category: "Compliance",
      items: ["SOC 2 Type II", "GDPR compliance", "CCPA compliance", "Regular compliance audits"]
    }
  ];

  const securityProcesses = [
    {
      title: "Continuous Monitoring",
      description: "24/7 security monitoring with automated threat detection and response systems."
    },
    {
      title: "Regular Updates",
      description: "Frequent security updates and patches to address emerging threats and vulnerabilities."
    },
    {
      title: "Incident Response",
      description: "Comprehensive incident response plan with dedicated security team and escalation procedures."
    },
    {
      title: "User Education",
      description: "Regular security awareness training for our team and security best practices for users."
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
                Enterprise-Grade Security
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Your{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Security
                </span>{" "}
                is Our Priority
              </h1>
              
              <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                We understand that security is paramount when it comes to AI companions. That's why we've built 
                YourPals with enterprise-grade security measures to protect your data and privacy.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Security Features */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Security Features
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Advanced security measures that protect your data at every level
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ring-1 ring-blue-500/30 flex-shrink-0">
                      <feature.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Security Measures
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Comprehensive security protocols that ensure your data remains protected
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {securityMeasures.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-xl"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-400" />
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

        {/* Security Processes */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Security Processes
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Ongoing security practices that keep your data safe
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityProcesses.map((process, index) => (
                <motion.div
                  key={process.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Infrastructure */}
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
                  Security Infrastructure
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Our security infrastructure is built on industry best practices and continuously monitored
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
                      <Server className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Secure Cloud Infrastructure</h3>
                      <p className="text-gray-300">
                        Built on AWS with enterprise-grade security, including VPC isolation and security groups.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center ring-1 ring-purple-500/30 flex-shrink-0">
                      <Network className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Network Security</h3>
                      <p className="text-gray-300">
                        Advanced DDoS protection, web application firewall, and intrusion detection systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center ring-1 ring-blue-500/30 flex-shrink-0">
                      <Monitor className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
                      <p className="text-gray-300">
                        Continuous security monitoring with automated threat detection and response.
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
                        <Shield className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">SOC 2 Type II</h3>
                      <p className="text-white/80 leading-relaxed">
                        We maintain SOC 2 Type II compliance, demonstrating our commitment to security, 
                        availability, and confidentiality controls.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Certifications */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Security Certifications
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Industry-recognized certifications that validate our security practices
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "SOC 2 Type II",
                  description: "Service Organization Control 2 certification for security, availability, and confidentiality"
                },
                {
                  title: "GDPR Compliance",
                  description: "Full compliance with European data protection regulations"
                },
                {
                  title: "CCPA Compliance",
                  description: "California Consumer Privacy Act compliance for US users"
                },
                {
                  title: "ISO 27001",
                  description: "Information security management system certification (in progress)"
                },
                {
                  title: "Penetration Testing",
                  description: "Regular third-party security assessments and vulnerability testing"
                },
                {
                  title: "Security Audits",
                  description: "Annual comprehensive security audits by independent firms"
                }
              ].map((certification, index) => (
                <motion.div
                  key={certification.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{certification.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{certification.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Commitment */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Security Commitment
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                We're committed to maintaining the highest security standards and continuously improving 
                our security measures to protect your data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <span>Contact Security Team</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-lg ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30 transition-all duration-300"
                >
                  <span>Privacy Policy</span>
                  <FileText className="w-5 h-5" />
                </Link>
              </div>
              
              <p className="mt-6 text-white/50 text-sm">
                Security is our top priority • 24/7 monitoring • Regular updates
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
