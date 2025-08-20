"use client";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { config } from "../lib/config";
import Image from "next/image";
import { 
  DollarSign, 
  ShoppingCart, 
  ChefHat, 
  Brain, 
  Target, 
  Zap, 
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  Car,
  Bitcoin,
  CreditCard,
  PiggyBank,
  TrendingDown,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  ChevronRight
} from "lucide-react";

export default function PalsOverview() {
  const [selectedPal, setSelectedPal] = useState('moneypal');
  const [activeCapability, setActiveCapability] = useState(0);
  const controls = useAnimation();
  
  const aiPals = [
    {
      id: 'moneypal',
      name: "MoneyPal",
      role: "AI Financial Co-Pilot",
      avatar: "/moneypalAvatar.PNG",
      color: "green",
      accentColor: "green",
      capabilities: [
        {
          title: "Smart Expense Tracking",
          description: "Automatically categorize expenses, identify spending patterns, and get real-time insights into your financial health.",
          icon: CreditCard,
          demo: "expense-tracking"
        },
        {
          title: "AI-Powered Budgeting",
          description: "Get personalized budget recommendations based on your income, goals, and spending habits with intelligent automation.",
          icon: PiggyBank,
          demo: "budgeting"
        },
        {
          title: "Investment Insights",
          description: "Receive data-driven investment recommendations and portfolio analysis to help grow your wealth intelligently.",
          icon: TrendingUp,
          demo: "investing"
        },
        {
          title: "Goal Achievement",
          description: "Set financial goals and let MoneyPal track your progress with automated savings and milestone celebrations.",
          icon: Target,
          demo: "goals"
        }
      ]
    },
    {
      id: 'sellerpal',
      name: "SellerPal",
      role: "AI E-commerce Assistant",
      avatar: "/sellerpalAvatar.png",
      color: "orange",
      accentColor: "orange",
      capabilities: [
        {
          title: "Inventory Management",
          description: "Automatically track stock levels, predict demand, and optimize inventory to maximize profits and reduce waste.",
          icon: ShoppingCart,
          demo: "inventory"
        },
        {
          title: "Sales Analytics",
          description: "Get deep insights into your sales performance, customer behavior, and market trends with AI-powered analysis.",
          icon: BarChart3,
          demo: "analytics"
        },
        {
          title: "Market Intelligence",
          description: "Monitor competitor pricing, identify market opportunities, and stay ahead of industry trends automatically.",
          icon: TrendingUp,
          demo: "market-intel"
        },
        {
          title: "Customer Insights",
          description: "Understand your customers better with AI analysis of purchase patterns, preferences, and satisfaction metrics.",
          icon: Users,
          demo: "customers"
        }
      ]
    },
    {
      id: 'cookingpal',
      name: "CookingPal",
      role: "AI Culinary Companion",
      avatar: "/cookingpalAvatar.png",
      color: "yellow",
      accentColor: "yellow",
      capabilities: [
        {
          title: "Smart Meal Planning",
          description: "Create personalized meal plans based on your dietary preferences, available ingredients, and nutritional goals.",
          icon: ChefHat,
          demo: "meal-planning"
        },
        {
          title: "Recipe Generation",
          description: "Get AI-generated recipes tailored to your taste, skill level, and available ingredients with step-by-step guidance.",
          icon: Brain,
          demo: "recipes"
        },
        {
          title: "Nutrition Tracking",
          description: "Monitor your daily nutrition intake, track macros, and get personalized recommendations for balanced eating.",
          icon: Target,
          demo: "nutrition"
        },
        {
          title: "Shopping Optimization",
          description: "Generate smart shopping lists, find the best deals, and optimize your grocery budget with AI assistance.",
          icon: ShoppingCart,
          demo: "shopping"
        }
      ]
    },
    {
      id: 'yourpal',
      name: "YourPal",
      role: "AI Platform Manager",
      avatar: "/yourpalAvatar.PNG",
      color: "purple",
      accentColor: "purple",
      capabilities: [
        {
          title: "Platform Guidance",
          description: "Get personalized recommendations and guidance on how to make the most of your AI Pal ecosystem.",
          icon: Brain,
          demo: "guidance"
        },
        {
          title: "App Management",
          description: "Easily manage all your AI Pals, customize settings, and coordinate their interactions seamlessly.",
          icon: Users,
          demo: "management"
        },
        {
          title: "Cross-Pal Communication",
          description: "Enable your AI Pals to work together, sharing data and insights to provide better overall assistance.",
          icon: Zap,
          demo: "communication"
        },
        {
          title: "Personalization",
          description: "Adapt your AI Pals to your unique preferences, habits, and goals for a truly personalized experience.",
          icon: Target,
          demo: "personalization"
        }
      ]
    }
  ];

  const currentPal = aiPals.find(pal => pal.id === selectedPal) || aiPals[0];

  // Animate when switching Pals
  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      scale: [0.95, 1],
      transition: { duration: 0.3 }
    });
    setActiveCapability(0);
  }, [selectedPal, controls]);

  // Listen for pal selection events from hero avatars
  useEffect(() => {
    const handlePalSelection = (event: CustomEvent) => {
      setSelectedPal(event.detail);
    };

    window.addEventListener('selectPal', handlePalSelection as EventListener);
    
    return () => {
      window.removeEventListener('selectPal', handlePalSelection as EventListener);
    };
  }, []);

  return (
    <section id="ai-pals-overview" className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 relative overflow-hidden">
      {/* Background Elements - Subtle and flowing */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-8 right-10 w-40 h-40 bg-purple-500/2 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-sm text-blue-300 mb-6 backdrop-blur-sm"
          >
            <Zap className="w-4 h-4" />
            <span>AI Pal Ecosystem</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            See What Your AI Pals Can Do
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Each AI Pal specializes in different areas of your life and business. 
            Toggle between them to explore their unique capabilities and see how they can help you.
          </motion.p>
        </motion.div>

        {/* Interactive Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - AI Pal Demo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* AI Pal Selector - Positioned on top of demo container */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="relative">
                <button
                  onClick={() => setSelectedPal(selectedPal === 'moneypal' ? 'sellerpal' : selectedPal === 'sellerpal' ? 'cookingpal' : selectedPal === 'cookingpal' ? 'yourpal' : 'moneypal')}
                  className="flex items-center gap-3 px-4 py-2 bg-gray-800/90 backdrop-blur-sm border border-gray-600/50 rounded-full text-white hover:bg-gray-700/90 transition-all duration-200 shadow-lg touch-manipulation"
                >
                  <Image
                    src={currentPal.avatar}
                    alt={currentPal.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium">{currentPal.name}</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Quick Pal Switcher */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800/95 backdrop-blur-sm border border-gray-600/50 rounded-xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                  <div className="p-2 space-y-1">
                    {aiPals.map((pal) => (
                      <button
                        key={pal.id}
                        onClick={() => setSelectedPal(pal.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                          selectedPal === pal.id
                            ? `bg-${pal.color}-500/20 text-white border border-${pal.color}-400/30`
                            : 'text-gray-300 hover:bg-gray-700/50'
                        }`}
                      >
                        <Image
                          src={pal.avatar}
                          alt={pal.name}
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium">{pal.name}</div>
                          <div className="text-xs text-gray-400">{pal.role}</div>
                        </div>
                        {selectedPal === pal.id && (
                          <div className={`w-2 h-2 bg-${pal.color}-400 rounded-full`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Container */}
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
              {/* AI Pal Avatar */}
              <motion.div
                key={selectedPal}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-8"
              >
                <div className="relative inline-block">
                  <Image
                    src={currentPal.avatar}
                    alt={currentPal.name}
                    width={120}
                    height={120}
                    className="rounded-full shadow-2xl"
                  />
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{currentPal.name}</h3>
                  <p className="text-gray-400 mb-3">{currentPal.role}</p>
                  <div className={`inline-flex items-center gap-2 bg-${currentPal.accentColor}-500/20 text-${currentPal.accentColor}-400 text-xs px-3 py-1.5 rounded-full font-medium border border-${currentPal.accentColor}-400/30`}>
                    <div className={`w-2 h-2 bg-${currentPal.accentColor}-400 rounded-full animate-pulse`}></div>
                    <span>Currently Active</span>
                  </div>
                </div>
              </motion.div>

              {/* Demo Interface */}
              <motion.div
                key={`${selectedPal}-${activeCapability}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/50 border border-gray-600/50 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 bg-${currentPal.color}-500 rounded-full`}></div>
                  <span className="text-gray-300 text-sm font-medium">AI Pal Demo</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">Processing request...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">Analyzing data...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-sm">Generating insights...</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Capability Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Capability Cards - Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {currentPal.capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative cursor-pointer transition-all duration-300 h-full ${
                    activeCapability === index
                      ? `bg-gradient-to-r from-${currentPal.color}-500/20 to-${currentPal.color}-600/10 border-${currentPal.color}-400/30`
                      : 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-700/30'
                  } border rounded-xl p-4 group`}
                  onClick={() => setActiveCapability(index)}
                >
                  {/* Active Indicator */}
                  {activeCapability === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${currentPal.color}-400 to-${currentPal.color}-600 rounded-t-xl`}
                    />
                  )}

                  <div className="flex flex-col h-full">
                    {/* Header with Icon and Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-${currentPal.color}-500/20 border border-${currentPal.color}-400/30 flex-shrink-0`}>
                        <capability.icon className={`w-5 h-5 text-${currentPal.accentColor}-400`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-white mb-1 leading-tight">{capability.title}</h3>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                        activeCapability === index ? 'rotate-90' : ''
                      }`} />
                    </div>
                    
                    {/* Description - Always Visible */}
                    <div className="flex-1">
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {capability.description}
                      </p>
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence mode="wait">
                      {activeCapability === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 pt-3 border-t border-gray-600/30"
                        >
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {capability.description}
                          </p>
                          <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                            <div className={`w-2 h-2 bg-${currentPal.color}-400 rounded-full`} />
                            <span>AI-powered automation</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Capability Cards - Mobile Horizontal Scroll Only */}
            <div className="md:hidden">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {currentPal.capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex-shrink-0 w-80 cursor-pointer transition-all duration-300 ${
                      activeCapability === index
                        ? `bg-gradient-to-r from-${currentPal.color}-500/20 to-${currentPal.color}-600/10 border-${currentPal.color}-400/30`
                        : 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-700/30'
                    } border rounded-xl p-4 group`}
                    onClick={() => setActiveCapability(index)}
                  >
                    {/* Active Indicator */}
                    {activeCapability === index && (
                      <motion.div
                        layoutId="mobileActiveIndicator"
                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${currentPal.color}-400 to-${currentPal.color}-600 rounded-t-xl`}
                      />
                    )}

                    <div className="flex flex-col h-full">
                      {/* Header with Icon and Title */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-${currentPal.color}-500/20 border border-${currentPal.color}-400/30 flex-shrink-0`}>
                          <capability.icon className={`w-5 h-5 text-${currentPal.accentColor}-400`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-white mb-1 leading-tight">{capability.title}</h3>
                        </div>
                        <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                          activeCapability === index ? 'rotate-90' : ''
                        }`} />
                      </div>
                      
                      {/* Description - Always Visible */}
                      <div className="flex-1">
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                          {capability.description}
                        </p>
                      </div>

                      {/* Expandable Details */}
                      <AnimatePresence mode="wait">
                        {activeCapability === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 pt-3 border-t border-gray-600/30"
                          >
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {capability.description}
                            </p>
                            <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                              <div className={`w-2 h-2 bg-${currentPal.color}-400 rounded-full`} />
                              <span>AI-powered automation</span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile Scroll Indicator */}
              <div className="text-center mt-3">
                <div className="inline-flex items-center gap-2 text-xs text-gray-400">
                  <span>Swipe to see more features</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-xl"
            >
              <h4 className="text-lg font-semibold text-white mb-3">
                Ready to experience {currentPal.name}?
              </h4>
              <p className="text-gray-300 mb-4">
                Start using {currentPal.name} today and see how AI can transform your {currentPal.id === 'moneypal' ? 'finances' : currentPal.id === 'sellerpal' ? 'business' : currentPal.id === 'cookingpal' ? 'culinary journey' : 'productivity'}.
              </p>
              <a
                href={config.aiPlatformUrl}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Try {currentPal.name} Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
