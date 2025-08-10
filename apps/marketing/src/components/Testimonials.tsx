"use client";

import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      quote: "MoneyPal caught a $35 overdraft fee before it hit. That's an easy win that pays for itself.",
      author: "Alex Chen",
      role: "Product Manager",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      quote: "The safe-to-save feature made saving money completely painless. I've saved $2,400 this year without thinking about it.",
      author: "Jamie Rodriguez",
      role: "Software Engineer", 
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      quote: "Weekly digest keeps me honest about my spending. It's like having a financial coach in my pocket.",
      author: "Priya Patel",
      role: "Marketing Director",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      quote: "SleepPal actually works! It stops my podcasts when I fall asleep and I wake up feeling more rested.",
      author: "Marcus Thompson",
      role: "Designer",
      rating: 5,
      avatar: "👨‍🎨"
    },
    {
      quote: "CartPal builds my grocery list from what I actually eat. No more wasted food or forgotten items.",
      author: "Sarah Kim",
      role: "Teacher",
      rating: 5,
      avatar: "👩‍🏫"
    },
    {
      quote: "The AI suggestions are spot-on. It's like having a smart friend who knows my financial habits.",
      author: "David Wilson",
      role: "Consultant",
      rating: 5,
      avatar: "👨‍💼"
    }
  ];

  const stats = [
    { number: "4.9", label: "App Store Rating" },
    { number: "2,400+", label: "Active Users" },
    { number: "$150K+", label: "Money Saved" },
    { number: "99.9%", label: "Uptime" }
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="mt-20 sm:mt-24 md:mt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Loved by busy humans
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Join thousands of users who trust YourPals to make their daily life easier and more efficient.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blueA mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel - Hidden on desktop */}
        <div className="lg:hidden mb-12">
          <div className="relative">
            {/* Single Testimonial Card */}
            <div className="group relative rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:ring-white/20 overflow-hidden">
              {/* Enhanced background decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blueA to-blueB transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-gradient-to-r from-blueA/10 to-blueB/10 blur-2xl transform translate-x-16 group-hover:translate-x-8 transition-transform duration-500"></div>
              </div>

              {/* Enhanced Rating Stars with animation */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span 
                    key={i} 
                    className="text-yellow-400 text-xl group-hover:scale-110 transition-transform duration-300"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    ⭐
                  </span>
                ))}
                <span className="ml-3 text-sm text-white/60 font-medium">
                  {testimonials[currentIndex].rating}/5
                </span>
              </div>

              {/* Enhanced Quote with better typography */}
              <blockquote className="text-lg text-white/90 leading-relaxed mb-8 italic relative">
                <span className="absolute -top-2 -left-2 text-4xl text-white/20 group-hover:text-white/30 transition-colors duration-300">"</span>
                "{testimonials[currentIndex].quote}"
                <span className="absolute -bottom-2 -right-2 text-4xl text-white/20 group-hover:text-white/30 transition-colors duration-300">"</span>
              </blockquote>

              {/* Enhanced Author Info with better layout */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 text-3xl ring-2 ring-white/20 group-hover:ring-white/30 transition-all duration-300 group-hover:scale-110">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-base group-hover:text-blueA transition-colors duration-300">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {testimonials[currentIndex].role}
                  </div>
                  {/* Enhanced company/verification badge */}
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-xs text-white/70 group-hover:bg-white/10 group-hover:ring-white/20 transition-all duration-300">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    Verified User
                  </div>
                </div>
              </div>

              {/* Enhanced hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blueA via-cyan-500 to-blueB rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Next testimonial"
            >
              →
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blueA scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-center mt-4 text-sm text-white/60">
              {currentIndex + 1} of {testimonials.length}
            </div>
          </div>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden lg:grid gap-8 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:ring-white/20 overflow-hidden"
            >
              {/* Enhanced background decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blueA to-blueB transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-gradient-to-r from-blueA/10 to-blueB/10 blur-2xl transform translate-x-16 group-hover:translate-x-8 transition-transform duration-500"></div>
              </div>

              {/* Enhanced Rating Stars with animation */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span 
                    key={i} 
                    className="text-yellow-400 text-xl group-hover:scale-110 transition-transform duration-300"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    ⭐
                  </span>
                ))}
                <span className="ml-3 text-sm text-white/60 font-medium">
                  {testimonial.rating}/5
                </span>
              </div>

              {/* Enhanced Quote with better typography */}
              <blockquote className="text-lg text-white/90 leading-relaxed mb-8 italic relative">
                <span className="absolute -top-2 -left-2 text-4xl text-white/20 group-hover:text-white/30 transition-colors duration-300">"</span>
                {testimonial.quote}
                <span className="absolute -bottom-2 -right-2 text-4xl text-white/20 group-hover:text-white/30 transition-colors duration-300">"</span>
              </blockquote>

              {/* Enhanced Author Info with better layout */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 text-3xl ring-2 ring-white/20 group-hover:ring-white/30 transition-all duration-300 group-hover:scale-110">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-lg group-hover:text-blueA transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {testimonial.role}
                  </div>
                  {/* Enhanced company/verification badge */}
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-xs text-white/70 group-hover:bg-white/10 group-hover:ring-white/20 transition-all duration-300">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    Verified User
                  </div>
                </div>
              </div>

              {/* Enhanced hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blueA via-cyan-500 to-blueB rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Future "As Featured In" Section - Commented out for now */}
        {/*
        <div className="mt-16 sm:mt-20 md:mt-24 text-center">
          <div className="rounded-2xl sm:rounded-3xl bg-white/5 p-8 sm:p-12 ring-1 ring-white/10">
            <h3 className="text-lg sm:text-xl text-white/60 mb-6 sm:mb-8">
              As featured in
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-30">
              <div className="h-8 w-24 sm:h-10 sm:w-32 rounded bg-white/10"></div>
              <div className="h-8 w-24 sm:h-10 sm:w-32 rounded bg-white/10"></div>
              <div className="h-8 w-24 sm:h-10 sm:w-32 rounded bg-white/10"></div>
              <div className="h-8 w-24 sm:h-10 sm:w-32 rounded bg-white/10"></div>
            </div>
            <p className="text-xs sm:text-sm text-white/40 mt-4">
              Coming soon
            </p>
          </div>
        </div>
        */}

        {/* CTA Section - Commented out for now */}
        {/*
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-blueA/20 px-6 sm:px-8 py-3 sm:py-4 ring-1 ring-blueA/30">
            <span className="text-sm sm:text-base text-blueA font-medium">
              Join thousands of happy users
            </span>
            <span className="text-blueA">→</span>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
