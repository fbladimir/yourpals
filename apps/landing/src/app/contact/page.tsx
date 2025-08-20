"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Phone,
  Send,
  Check,
  Zap,
  Star,
  Heart
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { config } from "../../lib/config";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 24 hours",
      action: "hello@yourpals.app",
      href: "mailto:hello@yourpals.app",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Coming soon - Real-time support",
      action: "Coming Q2 2024",
      href: "#",
      color: "from-purple-500 to-pink-500",
      disabled: true
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We're here every day",
      action: "24/7 Support",
      href: "#",
      color: "from-green-500 to-blue-500"
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
                <Link href="/download" className="hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                  Download
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
                <MessageCircle className="w-4 h-4" />
                Get in Touch
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                We're Here to{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Help
                </span>
              </h1>
              
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Have questions about YourPals? Want to share feedback? Need technical support? 
                We're operating every day and ready to assist you with anything you need.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Choose the method that works best for you. We're committed to providing excellent support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500 hover:scale-[1.02] h-full">
                    {/* Icon */}
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${method.color}/20 flex items-center justify-center ring-1 ring-${method.color.split('-')[1]}-500/30`}>
                        <method.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>

                    {/* Action */}
                    <div className="text-center">
                      {method.disabled ? (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-600/20 text-gray-400 text-sm font-medium border border-gray-600/30">
                          <Clock className="w-4 h-4" />
                          {method.action}
                        </div>
                      ) : (
                        <a
                          href={method.href}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                          {method.action}
                          <Send className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-xl"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  We typically respond within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-300 text-lg">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Additional Info */}
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
                  We're Here Every Day
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  YourPals operates 24/7 to ensure you always have access to AI assistance when you need it.
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
                    <Clock className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">24/7 AI Support</h3>
                  <p className="text-gray-300">
                    Your AI companions are always available to help, no matter what time it is.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center ring-1 ring-purple-500/30">
                    <Heart className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Human Touch</h3>
                  <p className="text-gray-300">
                    While AI handles the heavy lifting, our human team is here for complex support needs.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center ring-1 ring-green-500/30">
                    <Zap className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Fast Response</h3>
                  <p className="text-gray-300">
                    We typically respond to all inquiries within 24 hours, often much sooner.
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Don't wait to experience the power of AI assistance. Try YourPals today 
                and see how it can transform your daily life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <span>Try YourPals Free</span>
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
                No credit card required • Start free today • 24/7 AI support
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
