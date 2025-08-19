"use client";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      company: "TechCorp",
      content: "YourPals has completely transformed how I manage my daily tasks. The AI assistants are incredibly intuitive and actually save me time instead of just being another tool to learn.",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance Designer",
      company: "Creative Studio",
      content: "I was skeptical about AI assistants, but YourPals proved me wrong. They're like having a personal team that actually understands my workflow and preferences.",
      avatar: "👨‍🎨"
    },
    {
      name: "Emily Watson",
      role: "Small Business Owner",
      company: "Local Cafe",
      content: "Running a business is overwhelming, but YourPals helps me stay organized and focused. It's like having a business partner who never sleeps and always has my back.",
      avatar: "👩‍💻"
    },
    {
      name: "David Kim",
      role: "Software Engineer",
      company: "StartupXYZ",
      content: "The productivity boost from YourPals is real. I can focus on coding while the AI handles my scheduling, reminders, and even helps me track my work-life balance.",
      avatar: "👨‍💻"
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
      // Mobile detection logic can be added here if needed
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
    <section className="mt-20 sm:mt-24 md:mt-28 relative overflow-hidden">
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
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 text-center group hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-white/20 overflow-hidden">
              {/* Enhanced background decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blueA to-blueB transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-gradient-to-r from-blueA/10 to-blueB/10 blur-2xl transform translate-x-16 group-hover:translate-x-8 transition-transform duration-500"></div>
              </div>

              {/* Enhanced Quote with better typography */}
              <blockquote className="text-lg text-white/90 leading-relaxed mb-8 italic relative">
                <span className="absolute -top-2 -left-2 text-4xl text-white/20 group-hover:text-white/30 transition-colors duration-300">&ldquo;</span>
                {testimonials[currentIndex].content}
                <span className="absolute -bottom-2 -right-2 text-4xl text-white/20 group-hover:text-white/30 transition-colors duration-300">&rdquo;</span>
              </blockquote>

              {/* Enhanced Author Info with better layout */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 text-3xl ring-2 ring-white/20 group-hover:ring-white/30 transition-all duration-300 group-hover:scale-110">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-base group-hover:text-blueA transition-colors duration-300">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {testimonials[currentIndex].role}
                  </div>
                  {/* Enhanced company/verification badge */}
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-xs text-white/70 group-hover:bg-white/10 group-hover:ring-white/20 transition-all duration-300">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    {testimonials[currentIndex].company}
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

              {/* Enhanced Quote with better typography */}
              <blockquote className="text-lg text-white/90 leading-relaxed mb-8 italic relative">
                <span className="absolute -top-2 -left-2 text-4xl text-white/20 group-hover:text-white/30 transition-colors duration-300">&ldquo;</span>
                {testimonial.content}
                <span className="absolute -bottom-2 -right-2 text-4xl text-white/20 group-hover:text-white/30 transition-colors duration-300">&rdquo;</span>
              </blockquote>

              {/* Enhanced Author Info with better layout */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 text-3xl ring-2 ring-white/20 group-hover:ring-white/30 transition-all duration-300 group-hover:scale-110">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-lg group-hover:text-blueA transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {testimonial.role}
                  </div>
                  {/* Enhanced company/verification badge */}
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-xs text-white/70 group-hover:bg-white/10 group-hover:ring-white/20 transition-all duration-300">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Enhanced hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blueA via-cyan-500 to-blueB rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
