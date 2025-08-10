"use client";

// immport { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const steps = [
    {
      step: "1",
      title: "Choose your Pal",
      description: "Select from our specialized AI assistants designed for different tasks",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      ringColor: "ring-blue-500/30",
      accentColor: "text-blue-400"
    },
    {
      step: "2", 
      title: "Connect what it needs",
      description: "Link your bank, calendar, or other services securely",
      icon: "🔗",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/20 to-teal-500/20",
      ringColor: "ring-emerald-500/30",
      accentColor: "text-emerald-400"
    },
    {
      step: "3",
      title: "Let it run & assist automatically",
      description: "Your Pal works in the background, handling tasks intelligently",
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-purple-500/20",
      ringColor: "ring-purple-500/30",
      accentColor: "text-purple-400"
    },
    {
      step: "4",
      title: "Review insights & act",
      description: "Get actionable insights and recommendations to improve your life",
      icon: "💡",
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-500/20 to-yellow-500/20",
      ringColor: "ring-orange-500/30",
      accentColor: "text-orange-400"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [steps.length]);

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

  return (
    <section id="how" className="relative mt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced header */}
        <div 
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 ring-1 ring-blue-500/30 text-blue-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Simple 4-Step Process
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            How It{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="mt-6 text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Get started with YourPals in just 4 simple steps. Our AI assistants make complex tasks effortless.
          </p>
        </div>
        
        {/* Desktop Grid Layout - Hidden on mobile */}
        <div 
          className="mt-20 relative hidden lg:block"
        >
          {/* Desktop connector lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-emerald-500/20 via-purple-500/20 to-orange-500/20 transform -translate-y-1/2 z-0">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.step} 
                className="relative group"
              >
                {/* Enhanced step card */}
                <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 h-full">
                  {/* Floating background elements */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Step number with enhanced styling */}
                  <div 
                    className={`relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-2xl shadow-lg ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300`}
                  >
                    {step.step}
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Enhanced icon with animations */}
                  <div 
                    className={`relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${step.bgColor} ring-1 ${step.ringColor} text-4xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.icon}
                    {/* Icon glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.bgColor} blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Content with enhanced typography */}
                  <div className="text-center relative z-10">
                    <h3 className={`text-xl sm:text-2xl font-bold text-white mb-3 transition-colors duration-300 ${
                      step.accentColor === 'text-blue-400' ? 'group-hover:text-blue-400' :
                      step.accentColor === 'text-emerald-400' ? 'group-hover:text-emerald-400' :
                      step.accentColor === 'text-purple-400' ? 'group-hover:text-purple-400' :
                      'group-hover:text-orange-400'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-base text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Interactive hover effects */}
                  <div 
                    className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-white/20 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Horizontal Scrollable Layout */}
        <div className="mt-20 lg:hidden">
          {/* Horizontal Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {steps.map((step, index) => (
              <div 
                key={step.step} 
                className="relative group flex-shrink-0 w-80 sm:w-96 snap-center"
              >
                {/* Enhanced step card */}
                <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 h-full">
                  {/* Floating background elements */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Step number with enhanced styling */}
                  <div 
                    className={`relative mx-auto mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-xl sm:text-2xl shadow-lg ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300`}
                  >
                    {step.step}
                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Enhanced icon with animations */}
                  <div 
                    className={`relative mx-auto mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${step.bgColor} ring-1 ${step.ringColor} text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.icon}
                    {/* Icon glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.bgColor} blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Content with enhanced typography */}
                  <div className="text-center relative z-10">
                    <h3 className={`text-lg sm:text-xl font-bold text-white mb-3 transition-colors duration-300 ${
                      step.accentColor === 'text-blue-400' ? 'group-hover:text-blue-400' :
                      step.accentColor === 'text-emerald-400' ? 'group-hover:text-emerald-400' :
                      step.accentColor === 'text-purple-400' ? 'group-hover:text-purple-400' :
                      'group-hover:text-orange-400'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Interactive hover effects */}
                  <div 
                    className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-white/20 transition-all duration-300"
                  />
                </div>

                {/* Mobile flow indicator */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent transform translate-x-1/2 z-0">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-transparent rounded-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToStep(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentStep 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-6 px-4">
            <button
              onClick={() => scrollToStep((currentStep - 1 + steps.length) % steps.length)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous step"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <span className="text-sm text-white/60">
              Step {currentStep + 1} of {steps.length}
            </span>
            
            <button
              onClick={() => scrollToStep((currentStep + 1) % steps.length)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm"
              aria-label="Next step"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Call to action */}
        <div 
          className="mt-16 text-center"
        >
          <div 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <span>Get Started Now</span>
            <span
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              →
            </span>
          </div>
          <p className="mt-4 text-white/60 text-sm">
            Join thousands of users already using YourPals
          </p>
        </div>
      </div>
    </section>
  );
}
