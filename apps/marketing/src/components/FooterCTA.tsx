"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function FooterCTA() {
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    // Function to handle scroll positioning
    const handleScrollToSection = () => {
      const element = document.getElementById('download');
      if (element) {
        // Account for sticky header height + additional spacing
        const headerHeight = 160; // Same offset as HowItWorks for consistency
        const elementTop = element.offsetTop;
        window.scrollTo({
          top: elementTop - headerHeight,
          behavior: 'smooth'
        });
      }
    };

    // Check if we're navigating to this section on mount
    if (window.location.hash === '#download') {
      setTimeout(handleScrollToSection, 100);
    }

    // Override all anchor clicks to #download
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href="#download"]');

      if (link) {
        e.preventDefault();
        e.stopPropagation();

        // Update URL without triggering default scroll
        window.history.pushState(null, '', '#download');

        // Handle scroll manually
        setTimeout(handleScrollToSection, 50);
        
        // Close mobile menu if it's open (by dispatching a custom event)
        window.dispatchEvent(new CustomEvent('closeMobileMenu'));
      }
    };

    // Add click listener to document
    document.addEventListener('click', handleAnchorClick, true);

    // Handle hash changes and browser navigation
    const handleHashChange = () => {
      if (window.location.hash === '#download') {
        setTimeout(handleScrollToSection, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      document.removeEventListener('click', handleAnchorClick, true);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);
  
  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" }
  ];

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "𝕏" },
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "GitHub", href: "#", icon: "🐙" },
    { name: "Discord", href: "#", icon: "🎮" }
  ];

  const productLinks = [
    { name: "MoneyPal", href: "https://moneypal.yourpals.app", description: "Smart financial assistant" },
    { name: "SleepPal", href: "#", description: "Sleep tracking & optimization" },
    { name: "CartPal", href: "#", description: "Intelligent grocery management" }
  ];

  return (
    <footer className="mt-20 sm:mt-24 md:mt-28">
      {/* Enhanced Main CTA Section */}
      <section id="download" className="relative mb-16 sm:mb-20 md:mb-24 overflow-hidden">
        {/* Background with enhanced styling */}
        <div className="relative rounded-3xl sm:rounded-[2rem] bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 p-8 sm:p-12 lg:p-16 ring-1 ring-white/20 backdrop-blur-sm">
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"></div>
            <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-2xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            {/* Enhanced headline with better typography */}
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to transform your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                daily life
              </span>
              ?
            </h4>
            
            {/* Enhanced description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
              Join thousands of users who are already saving time and money with YourPals AI assistants.
            </p>
            
            {/* Enhanced button group with better styling */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              {/* Primary CTA Button - Enhanced */}
              <a 
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg sm:text-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95 overflow-hidden"
                href="#pricing"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-3">
                  Get Started Free
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </a>
              
              {/* Secondary CTA Button - Enhanced */}
              <a 
                className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-lg sm:text-xl ring-1 ring-white/30 hover:ring-white/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95 overflow-hidden"
                href="#apps"
              >
                {/* Button background animation */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-3">
                  Explore Apps
                  <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </a>
            </div>
            
            {/* Trust indicator below buttons */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/20 text-white/70 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                No credit card required • Start free today
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="w-full bg-gradient-to-b from-transparent via-white/5 to-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-4 lg:gap-16">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-1 sm:mb-1">
                <div className="w-24 h-24 sm:w-32 sm:h-32">
                  <Image
                    src="/yourPalsLogo.png"
                    alt="YourPals Logo"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-md">
                AI assistants that actually do work for your everyday life. Manage all your daily tasks and AI helpers in a single platform.
              </p>
              
              {/* Social Links */}
              <div className="mt-6 sm:mt-8">
                <div className="flex items-center gap-4 sm:gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white/5 text-lg sm:text-xl text-white/60 hover:bg-white/10 hover:text-white transition-all duration-300 active:scale-95 touch-manipulation ring-1 ring-white/10 hover:ring-white/20"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-blueA rounded-full"></span>
                Products
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {productLinks.map((product) => (
                  <li key={product.name}>
                    <a
                      href={product.href}
                      className="text-base sm:text-lg text-white/70 hover:text-white transition-colors duration-200 group"
                    >
                      <span className="group-hover:text-blueA transition-colors duration-200">{product.name}</span>
                      <p className="text-sm text-white/50 mt-1 group-hover:text-white/70 transition-colors duration-200">
                        {product.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                Company
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-base sm:text-lg text-white/70 hover:text-white transition-colors duration-200 group"
                    >
                      <span className="group-hover:text-cyan-500 transition-colors duration-200">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section with enhanced styling */}
          <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              {/* Copyright */}
              <div className="text-sm sm:text-base text-white/50 flex items-center gap-2">
                <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                © {currentYear} YourPals. All rights reserved.
              </div>
              
              {/* Additional Links */}
              <div className="flex items-center gap-6 sm:gap-8 text-sm sm:text-base">
                <a href="#privacy" className="text-white/50 hover:text-white transition-colors hover:text-blueA">
                  Privacy
                </a>
                <a href="#terms" className="text-white/50 hover:text-white transition-colors hover:text-cyan-500">
                  Terms
                </a>
                <a href="#cookies" className="text-white/50 hover:text-white transition-colors hover:text-teal-500">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
