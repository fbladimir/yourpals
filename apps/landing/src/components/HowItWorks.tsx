"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { config } from "../lib/config";
import { ChevronRight, ChevronLeft, Play, Pause, RotateCcw, Building2, Calendar, CreditCard, ShoppingCart, Car, ChefHat, Brain, Target, Zap, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPal, setSelectedPal] = useState('moneypal');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAutomating, setIsAutomating] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [inactivityTimer, setInactivityTimer] = useState<NodeJS.Timeout | null>(null);
  const [countdownSeconds, setCountdownSeconds] = useState(12);
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0);
  const [showAutomationDashboard, setShowAutomationDashboard] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const aiPals = [
    {
      id: 'moneypal',
      name: "MoneyPal",
      role: "Financial Co-Pilot",
      icon: "💰",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
      ringColor: "ring-green-500/30",
      accentColor: "text-green-400",
      avatar: "/moneypalAvatar.PNG",
      dataTypes: ["Bank Account", "Credit Cards", "Investment Portfolio"],
      aiAnalysis: "I've analyzed your spending patterns and found you're spending 23% more on dining this month. I've identified 3 subscription services you haven't used in 60+ days, potentially saving you $47/month.",
      additionalInsights: [
        "Your emergency fund is 15% below the recommended 6-month coverage. Consider increasing monthly contributions by $200.",
        "Your credit utilization is at 28%, which is excellent! This helps maintain your strong credit score of 785.",
        "Investment portfolio shows 12% YTD growth. Your tech sector allocation is outperforming the market by 8%.",
        "I've detected unusual spending patterns on weekends. Consider setting up weekend budget alerts to stay on track."
      ],
      automation: "Automatically categorized 127 transactions, updated budget limits, and scheduled a bill payment reminder for your credit card due in 3 days.",
      automations: [
        { name: "Transaction Categorization", status: "completed", details: "127 transactions categorized", time: "2 minutes ago" },
        { name: "Budget Updates", status: "completed", details: "Monthly budgets adjusted based on spending", time: "5 minutes ago" },
        { name: "Bill Reminder", status: "scheduled", details: "Credit card payment due in 3 days", time: "Scheduled for tomorrow" },
        { name: "Investment Rebalancing", status: "in-progress", details: "Analyzing portfolio for rebalancing", time: "In progress" },
        { name: "Fraud Detection", status: "monitoring", details: "24/7 transaction monitoring active", time: "Always active" }
      ]
    },
    {
      id: 'sellerpal',
      name: "SellerPal",
      role: "E-commerce Assistant",
      icon: "🛒",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/20 to-red-500/20",
      ringColor: "ring-orange-500/30",
      accentColor: "text-orange-400",
      avatar: "/sellerpalAvatar.png",
      dataTypes: ["Amazon Seller Central", "Inventory System", "Analytics Dashboard"],
      aiAnalysis: "Your Q4 performance shows a 34% increase in sales! I've identified that your 'Smart Home' category is outperforming by 67%. Consider increasing inventory for these items.",
      additionalInsights: [
        "Competitor analysis shows 3 new products in your niche. Consider expanding your product line to capture market share.",
        "Your customer retention rate is 78%, above the industry average of 65%. Focus on repeat customer strategies.",
        "Shipping costs have increased 12% this quarter. Consider negotiating bulk rates with carriers.",
        "Mobile sales conversion is 23% higher than desktop. Optimize your mobile listing images and descriptions."
      ],
      automation: "Automatically adjusted pricing for 23 products based on competitor analysis, updated inventory alerts, and scheduled promotional campaigns for your best-performing items.",
      automations: [
        { name: "Dynamic Pricing", status: "completed", details: "23 products repriced based on competition", time: "1 hour ago" },
        { name: "Inventory Alerts", status: "completed", details: "Low stock alerts sent for 5 items", time: "2 hours ago" },
        { name: "Promotional Campaigns", status: "scheduled", details: "Weekend sale campaigns prepared", time: "Scheduled for Friday" },
        { name: "Competitor Monitoring", status: "in-progress", details: "Tracking 15 competitor products", time: "In progress" },
        { name: "Customer Feedback Analysis", status: "monitoring", details: "Real-time review sentiment analysis", time: "Always active" }
      ]
    },
    {
      id: 'cookingpal',
      name: "CookingPal",
      role: "Culinary Companion",
      icon: "👨‍🍳",
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-500/20 to-amber-500/20",
      ringColor: "ring-yellow-500/30",
      accentColor: "text-yellow-400",
      avatar: "/cookingpalAvatar.png",
      dataTypes: ["Recipe Database", "Grocery Lists", "Nutrition Goals"],
      aiAnalysis: "Based on your preferences and available ingredients, I've found 12 recipes you can make tonight. Your weekly meal plan is 23% more cost-effective than last week!",
      additionalInsights: [
        "Your protein intake is 15% below daily recommendations. Consider adding more lean meats, fish, or plant-based proteins.",
        "Local grocery stores have 20% off on fresh vegetables this week. Perfect timing for your meal prep!",
        "You're consuming 300 calories more than your daily goal. Consider portion control or adding more physical activity.",
        "Your cooking time has decreased by 18% this month. You're getting more efficient with meal preparation!"
      ],
      automation: "Automatically generated a shopping list for your meal plan, found the best deals at your local stores, and adjusted recipes to meet your daily calorie goals.",
      automations: [
        { name: "Shopping List Generation", status: "completed", details: "Weekly grocery list created", time: "30 minutes ago" },
        { name: "Deal Finder", status: "completed", details: "Best prices found at 3 local stores", time: "1 hour ago" },
        { name: "Recipe Adjustments", status: "completed", details: "5 recipes adjusted for calorie goals", time: "2 hours ago" },
        { name: "Meal Planning", status: "in-progress", details: "Next week's meal plan being created", time: "In progress" },
        { name: "Nutrition Tracking", status: "monitoring", details: "Daily nutrition goals being monitored", time: "Always active" }
      ]
    }
  ];

  const currentPal = aiPals.find(pal => pal.id === selectedPal) || aiPals[0];
  
  const steps = [
    {
      step: "1",
      title: "Choose your Pal",
      description: "Select from our specialized AI assistants designed for different tasks and life areas.",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      ringColor: "ring-blue-500/30",
      accentColor: "text-blue-400"
    },
    {
      step: "2",
      title: "Connect what it needs",
      description: "Securely link your accounts, services, and data sources.",
      icon: "🔗",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/20 to-teal-500/20",
      ringColor: "ring-emerald-500/30",
      accentColor: "text-emerald-400"
    },
    {
      step: "3",
      title: "AI Analysis & Insights",
      description: "Your Pal analyzes your data and provides intelligent insights.",
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-purple-500/20",
      ringColor: "ring-purple-500/30",
      accentColor: "text-purple-400"
    },
    {
      step: "4",
      title: "Automations in Action",
      description: "Watch your Pal work automatically to improve your life.",
      icon: "💡",
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-500/20 to-yellow-500/20",
      ringColor: "ring-orange-500/30",
      accentColor: "text-orange-400"
    }
  ];

  // Auto-scroll functionality with user control
  useEffect(() => {
    if (!isAutoPlaying || userInteracted) return;
    
    // Reset countdown when step changes
    setCountdownSeconds(12);
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 12000); // Increased to 12 seconds for better UX

    return () => clearInterval(interval);
  }, [isAutoPlaying, userInteracted, steps.length]);

  // Countdown timer for auto-advance
  useEffect(() => {
    if (!isAutoPlaying || userInteracted) return;
    
    const countdownInterval = setInterval(() => {
      setCountdownSeconds((prev) => {
        if (prev <= 1) {
          return 12; // Reset to 12 when step changes
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [isAutoPlaying, userInteracted, currentStep]);

  // Inactivity timer - auto-advance after 30 seconds of no interaction
  useEffect(() => {
    if (userInteracted) {
      // Clear existing timer
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      
      // Set new 30-second timer
      const timer = setTimeout(() => {
        setUserInteracted(false);
        setCurrentStep((prev) => (prev + 1) % steps.length);
        setCountdownSeconds(12); // Reset countdown for auto-advance
      }, 30000);
      
      setInactivityTimer(timer);
      
      return () => clearTimeout(timer);
    }
  }, [userInteracted, currentStep, steps.length]);

  // Handle step changes to reset countdown and clear inactivity timer
  useEffect(() => {
    if (userInteracted) {
      // Clear inactivity timer when step changes due to user interaction
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
        setInactivityTimer(null);
      }
    } else {
      // Reset countdown when auto-advancing to new step
      setCountdownSeconds(12);
    }
  }, [currentStep, userInteracted]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
    };
  }, [inactivityTimer]);

  // Handle scroll positioning for anchor links
  useEffect(() => {
    const handleScrollToSection = () => {
      const element = document.getElementById('how');
      if (element) {
        const headerHeight = 140;
        const elementTop = element.offsetTop;
        window.scrollTo({
          top: elementTop - headerHeight,
          behavior: 'smooth'
        });
      }
    };

    if (window.location.hash === '#how') {
      setTimeout(handleScrollToSection, 100);
    }

    const handleHashChange = () => {
      if (window.location.hash === '#how') {
        setTimeout(handleScrollToSection, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  // Direct step navigation
  const navigateToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setUserInteracted(true);
    setCountdownSeconds(12); // Reset countdown
    // Reset step-specific states
    setCurrentInsightIndex(0);
    setShowAutomationDashboard(false);
    // Clear any existing inactivity timer
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
      setInactivityTimer(null);
    }
  };

  // Handle insight cycling
  const cycleInsight = () => {
    const nextIndex = (currentInsightIndex + 1) % (currentPal.additionalInsights.length + 1);
    setCurrentInsightIndex(nextIndex);
    setUserInteracted(true); // User is actively engaging
    setCountdownSeconds(12); // Reset countdown
    // Clear any existing inactivity timer
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
      setInactivityTimer(null);
    }
  };

  // Interactive demo functions
  const handlePalSelection = (palId: string) => {
    setSelectedPal(palId);
    setCurrentStep(1); // Move to next step
    setUserInteracted(true); // User interacted
    setCountdownSeconds(12); // Reset countdown
    // Reset step-specific states
    setCurrentInsightIndex(0);
    setShowAutomationDashboard(false);
    // Clear any existing inactivity timer
    if (inactivityTimer) {
      clearTimeout(inactivityTimer);
      setInactivityTimer(null);
    }
  };

  const handleDataConnection = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setCurrentStep(2); // Move to AI analysis step
      setUserInteracted(true); // User interacted
      setCountdownSeconds(12); // Reset countdown
      // Reset step-specific states
      setCurrentInsightIndex(0);
      setShowAutomationDashboard(false);
      // Clear any existing inactivity timer
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
        setInactivityTimer(null);
      }
    }, 2000);
  };

  const handleAIAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setCurrentStep(3); // Move to automation step
      setUserInteracted(true); // User interacted
      setCountdownSeconds(12); // Reset countdown
      // Reset step-specific states
      setShowAutomationDashboard(false);
      // Clear any existing inactivity timer
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
        setInactivityTimer(null);
      }
    }, 3000);
  };

  const handleAutomation = () => {
    setIsAutomating(true);
    setTimeout(() => {
      setIsAutomating(false);
      // Stay on step 4 to show results
      setUserInteracted(true); // User interacted
      setCountdownSeconds(12); // Reset countdown
      // Clear any existing inactivity timer
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
        setInactivityTimer(null);
      }
    }, 2500);
  };

  // Scroll to specific step
  const scrollToStep = (index: number) => {
    setCurrentStep(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const stepWidth = container.scrollWidth / steps.length;
      container.scrollTo({
        left: stepWidth * index,
        behavior: 'smooth'
      });
    }
  };

  // Handle scroll events to update current step
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const stepWidth = container.scrollWidth / steps.length;
      const currentIndex = Math.round(container.scrollLeft / stepWidth);
      setCurrentStep(currentIndex);
    }
  };

  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);
  const resetToFirst = () => {
    setCurrentStep(0);
    setSelectedPal('moneypal');
    setIsConnecting(false);
    setIsAnalyzing(false);
    setIsAutomating(false);
    setUserInteracted(false); // Reset user interaction
    setCurrentInsightIndex(0); // Reset to first insight
    setShowAutomationDashboard(false); // Reset automation dashboard
  };

  return (
    <section id="how" className="relative mt-8 sm:mt-12 overflow-hidden pt-16 sm:pt-20">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/8 to-purple-500/8 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-emerald-500/8 to-cyan-500/8 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500/6 to-yellow-500/6 blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced header with better animations */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-white/60 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Interactive Demo
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            See How It{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Works
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Experience YourPals in action! Choose a Pal, connect data, and watch the magic happen in real-time.
          </motion.p>
        </motion.div>
        
        {/* Interactive Demo Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative"
        >
          {/* Step Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4">
              {steps.map((step, index) => (
                <div key={step.step} className="flex items-center">
                  <motion.button
                    onClick={() => navigateToStep(index)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 cursor-pointer hover:scale-110 active:scale-95 ${
                      index <= currentStep 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' 
                        : 'bg-white/10 text-white/40 hover:bg-white/20 hover:text-white/60'
                    }`}
                    animate={index === currentStep ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.6 }}
                    aria-label={`Go to step ${index + 1}: ${step.title}`}
                  >
                    {step.step}
                  </motion.button>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mx-4 transition-all duration-500 ${
                      index < currentStep ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-white/10'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Auto-advance indicator */}
          {!userInteracted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-white/60 text-sm">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                Demo will auto-advance in <span className="font-mono font-bold text-blue-400">{countdownSeconds}</span> seconds
              </div>
            </motion.div>
          )}

          {/* User interaction indicator */}
          {userInteracted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 ring-1 ring-white/10 text-white/60 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                You're in control! Auto-advance in 30 seconds
              </div>
            </motion.div>
          )}

          {/* Interactive Demo Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {/* Step 1: Choose your Pal */}
              {currentStep === 0 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-8">Choose Your AI Pal</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {aiPals.map((pal) => (
                      <motion.div
                        key={pal.id}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                          selectedPal === pal.id 
                            ? 'bg-gradient-to-br from-white/20 to-white/10 ring-2 ring-white/30 scale-105' 
                            : 'bg-white/5 hover:bg-white/10 ring-1 ring-white/20'
                        }`}
                        onClick={() => handlePalSelection(pal.id)}
                      >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center overflow-hidden ring-2 ring-white/20">
                          <Image
                            src={pal.avatar}
                            alt={`${pal.name} avatar`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2">{pal.name}</h4>
                        <p className="text-white/70 text-sm">{pal.role}</p>
                        {selectedPal === pal.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                          >
                            <CheckCircle className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDataConnection}
                    className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Continue with {currentPal.name} →
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2: Connect what it needs */}
              {currentStep === 1 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-8">Connect Your Data</h3>
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center overflow-hidden ring-2 ring-white/20 mr-4">
                        <Image
                          src={currentPal.avatar}
                          alt={`${currentPal.name} avatar`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-semibold text-white">{currentPal.name}</h4>
                        <p className="text-white/70">{currentPal.role}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {currentPal.dataTypes.map((dataType, index) => (
                        <motion.div
                          key={dataType}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                              {dataType.includes('Bank') && <Building2 className="w-4 h-4 text-white" />}
                              {dataType.includes('Credit') && <CreditCard className="w-4 h-4 text-white" />}
                              {dataType.includes('Investment') && <TrendingUp className="w-4 h-4 text-white" />}
                              {dataType.includes('Amazon') && <ShoppingCart className="w-4 h-4 text-white" />}
                              {dataType.includes('Recipe') && <ChefHat className="w-4 h-4 text-white" />}
                            </div>
                            <span className="text-white/80 text-sm">{dataType}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDataConnection}
                      disabled={isConnecting}
                      className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                        isConnecting 
                          ? 'bg-white/20 text-white/60 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg'
                      }`}
                    >
                      {isConnecting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Connecting...
                        </div>
                      ) : (
                        'Connect Data Securely'
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: AI Analysis */}
              {currentStep === 2 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-8">AI Analysis in Action</h3>
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center overflow-hidden ring-2 ring-white/20 mr-4">
                        <Image
                          src={currentPal.avatar}
                          alt={`${currentPal.name} avatar`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-semibold text-white">{currentPal.name}</h4>
                        <p className="text-white/70">Analyzing your data...</p>
                      </div>
                    </div>
                    
                    <motion.div
                      key={currentInsightIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-r from-white/10 to-white/5 rounded-xl p-6 border border-white/20"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-white/90 leading-relaxed">
                            {currentInsightIndex === 0 ? currentPal.aiAnalysis : currentPal.additionalInsights[currentInsightIndex - 1]}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={cycleInsight}
                      className="mt-6 px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg"
                    >
                      {currentInsightIndex === 0 ? 'Get More Insights' : `Insight ${currentInsightIndex + 1} of ${currentPal.additionalInsights.length + 1}`}
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Automations */}
              {currentStep === 3 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-8">Automations in Action</h3>
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center overflow-hidden ring-2 ring-white/20 mr-4">
                        <Image
                          src={currentPal.avatar}
                          alt={`${currentPal.name} avatar`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-semibold text-white">{currentPal.name}</h4>
                        <p className="text-white/70">Working automatically...</p>
                      </div>
                    </div>
                    
                    {!showAutomationDashboard ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-white/10 to-white/5 rounded-xl p-6 border border-white/20"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                            <Zap className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-left">
                            <p className="text-white/90 leading-relaxed">{currentPal.automation}</p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gradient-to-r from-white/10 to-white/5 rounded-xl p-6 border border-white/20"
                      >
                        <div className="text-left">
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-orange-400" />
                            Automation Dashboard
                          </h4>
                          <div className="space-y-3">
                            {currentPal.automations.map((automation, index) => (
                              <motion.div
                                key={automation.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`w-3 h-3 rounded-full ${
                                    automation.status === 'completed' ? 'bg-green-400' :
                                    automation.status === 'in-progress' ? 'bg-yellow-400' :
                                    automation.status === 'scheduled' ? 'bg-blue-400' :
                                    'bg-purple-400'
                                  }`} />
                                  <div>
                                    <p className="text-white font-medium text-sm">{automation.name}</p>
                                    <p className="text-white/70 text-xs">{automation.details}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-white/60 text-xs">{automation.time}</p>
                                  <span className={`text-xs px-2 py-1 rounded-full ${
                                    automation.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                    automation.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                                    automation.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                                    'bg-purple-500/20 text-purple-400'
                                  }`}>
                                    {automation.status}
                                  </span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setShowAutomationDashboard(!showAutomationDashboard);
                        setUserInteracted(true); // User is actively engaging
                        setCountdownSeconds(12); // Reset countdown
                        // Clear any existing inactivity timer
                        if (inactivityTimer) {
                          clearTimeout(inactivityTimer);
                          setInactivityTimer(null);
                        }
                      }}
                      className="mt-6 px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:shadow-lg"
                    >
                      {showAutomationDashboard ? 'Show Summary' : 'Check All Automations'}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* Enhanced Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience YourPals?
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              See how {currentPal.name} can transform your {currentPal.id === 'moneypal' ? 'finances' : currentPal.id === 'sellerpal' ? 'business' : 'culinary journey'} with AI-powered automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={config.aiPlatformUrl}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer group hover:scale-105 active:scale-95"
              >
                <span>Try {currentPal.name} Now</span>
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </a>
              
              <button 
                onClick={resetToFirst}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 text-white font-semibold text-lg ring-1 ring-white/20 hover:bg-white/10 hover:ring-white/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Try Another Pal</span>
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
            
            <p className="mt-6 text-white/50 text-sm">
              Start your free trial today. No credit card required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
