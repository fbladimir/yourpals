"use client";
import { motion } from "framer-motion";
import { 
  Check, 
  Star, 
  Zap, 
  Clock,
  TrendingUp, 
  Users
} from "lucide-react";
import { config } from "../../lib/config";
import Image from "next/image";
import { useState } from "react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const plans = [
    {
      name: "FREE",
      price: "$0",
      period: "/month",
      yearlyPrice: "$0",
      yearlyPeriod: "/year",
      description: "Perfect for getting started with basic AI assistance",
      features: [
        "Access to 1 AI Pal of your choice",
        "Basic automation features",
        "Community forum access",
        "Basic financial overview cards",
        "Quick action buttons",
        "Basic transaction tracking"
      ],
      cta: "Get Started Free",
      popular: false,
      color: "from-blue-500 to-cyan-500",
      planId: "FREE"
    },
    {
      name: "MoneyPal Pro",
      price: "$19",
      period: "/month",
      yearlyPrice: "$190",
      yearlyPeriod: "/year",
      description: "Ideal for professionals who want advanced financial insights",
      features: [
        "Everything in FREE plan",
        "Access to MoneyPal with advanced features",
        "Advanced Analytics (spending trends, budget forecasting)",
        "Unlimited transactions",
        "Priority email support",
        "Premium integrations",
        "Advanced financial insights"
      ],
      cta: "Start MoneyPal Pro",
      popular: true,
      color: "from-purple-500 to-pink-500",
      planId: "MONEYPAL_PRO"
    },
    {
      name: "All Access",
      price: "$39",
      period: "/month",
      yearlyPrice: "$390",
      yearlyPeriod: "/year",
      description: "Complete access to all AI Pals with premium features",
      features: [
        "Everything in MoneyPal Pro",
        "Access to all 4 AI Pals (MoneyPal, SellerPal, CookingPal, YourPal)",
        "All-Access features (priority support, custom categories)",
        "Premium integrations",
        "Custom workflows",
        "API access",
        "White-label solutions",
        "Dedicated support team"
      ],
      cta: "Get All Access",
      popular: false,
      color: "from-orange-500 to-red-500",
      planId: "ALL_ACCESS"
    }
  ];

  const sellerPalScenario = {
    timeSaved: "15 hours per week",
    profitIncrease: "34%",
    automationExamples: [
      "Automated inventory management",
      "Dynamic pricing optimization",
      "Competitor analysis",
      "Customer behavior insights",
      "Sales forecasting"
    ]
  };

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
                <a href="/coming-soon" className="hover:text-white transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5">
                  Coming Soon
                </a>
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

        {/* Header */}
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
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Simple, Transparent Pricing
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Plan
                </span>
              </h1>
              
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Start with our free trial and experience the power of AI companions that think ahead, 
                automate your daily tasks, and make life easier.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Pricing Plans */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-4 p-1 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="ml-2 px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                    Save 20%
                  </span>
                </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative rounded-3xl p-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-white/10 to-white/5 ring-2 ring-purple-500/50 scale-105' 
                      : 'bg-white/5 ring-1 ring-white/10'
                  } backdrop-blur-xl hover:ring-white/20 transition-all duration-300`}
                >
                  {plan.popular && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    >
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-lg">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </motion.div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1 mb-4">
                      <span className="text-4xl font-bold text-white">
                        {billingCycle === 'monthly' ? plan.price : plan.yearlyPrice}
                      </span>
                      <span className="text-white/60">
                        {billingCycle === 'monthly' ? plan.period : plan.yearlyPeriod}
                      </span>
                    </div>
                    <p className="text-white/70">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (plan.planId === 'FREE') {
                        window.location.href = config.aiPlatformUrl;
                      } else {
                        alert(`Subscription for ${plan.name} is not implemented yet, but will be soon! Try the app for free for now.`);
                      }
                    }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                        : 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive SellerPal Scenario */}
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
                  See How SellerPal Transforms Your Business
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Discover the real impact of AI automation on your e-commerce business
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Impact Metrics */}
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center lg:text-left"
                  >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-4">
                      <Zap className="w-4 h-4" />
                      Real Results from SellerPal Users
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">{sellerPalScenario.timeSaved}</div>
                        <div className="text-white/60">Time Saved</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">{sellerPalScenario.profitIncrease}</div>
                        <div className="text-white/60">Profit Increase</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-white">What Gets Automated:</h3>
                    <div className="space-y-3">
                      {sellerPalScenario.automationExamples.map((example, index) => (
                        <motion.div
                          key={example}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                          <span className="text-white/80">{example}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right: Interactive Demo */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-8 border border-orange-500/30">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Before SellerPal</h3>
                      <p className="text-white/70">Manual processes taking hours</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <span className="text-white/80">Inventory Management</span>
                        <Clock className="w-4 h-4 text-red-400" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <span className="text-white/80">Price Optimization</span>
                        <Clock className="w-4 h-4 text-red-400" />
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <span className="text-white/80">Competitor Analysis</span>
                        <Clock className="w-4 h-4 text-red-400" />
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">After SellerPal</div>
                      <div className="text-3xl font-bold text-green-400 mb-4">Automated & Optimized</div>
                      <div className="text-white/70">Everything runs in the background</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center mt-12"
              >
                <a
                  href={config.aiPlatformUrl}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  <span>Try SellerPal Now</span>
                  <TrendingUp className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-white/70">Everything you need to know about YourPals pricing</p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "Is there a free plan?",
                  answer: "Yes! We offer a FREE plan with basic features to get you started. No credit card required."
                },
                {
                  question: "Can I upgrade from FREE to Pro anytime?",
                  answer: "Absolutely! You can upgrade from FREE to MoneyPal Pro or All Access at any time with no penalties."
                },
                {
                  question: "What's the difference between MoneyPal Pro and All Access?",
                  answer: "MoneyPal Pro focuses on advanced financial features, while All Access gives you complete access to all AI Pals with premium features."
                },
                {
                  question: "Do you offer annual billing discounts?",
                  answer: "Yes! Annual plans come with a 20% discount compared to monthly billing."
                }
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </motion.div>
              ))}
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
                Ready to Transform Your Life with AI?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join thousands of users already experiencing the future of AI assistance. 
                Start your free trial today and see the difference YourPals can make.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={config.aiPlatformUrl}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <span>Start Free Trial</span>
                  <Zap className="w-5 h-5" />
                </a>
                
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-lg ring-1 ring-white/20 hover:bg-white/20 hover:ring-white/30 transition-all duration-300"
                >
                  <span>Contact Sales</span>
                  <Users className="w-5 h-5" />
                </a>
              </div>
              
              <p className="mt-6 text-white/50 text-sm">
                Start with FREE plan • Upgrade anytime • Cancel anytime • 20% off annual billing
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
