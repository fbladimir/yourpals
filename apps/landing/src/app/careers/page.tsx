"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Globe, DollarSign, Clock, Users, Zap, Brain, Code, Rocket, Share2, TrendingUp, Target, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CareersPage() {
  const positions = [
    {
      id: "ai-software-engineer",
      title: "AI Software Engineer",
      type: "Full-time",
      location: "Remote",
      office: "Miami, FL",
      salary: "$200,000",
      experience: "3+ years",
      description: "Join our AI team to build the next generation of AI assistants that transform how people manage their daily lives. You'll work on cutting-edge AI models, natural language processing, and create seamless user experiences.",
      responsibilities: [
        "Develop and optimize AI models for natural language understanding",
        "Build scalable AI infrastructure and APIs",
        "Implement machine learning pipelines and data processing",
        "Collaborate with product teams to integrate AI features",
        "Research and implement state-of-the-art AI techniques",
        "Optimize AI performance and user experience"
      ],
      requirements: [
        "Strong background in machine learning and AI",
        "Experience with Python, PyTorch, TensorFlow, or similar",
        "Knowledge of NLP, computer vision, or recommendation systems",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Strong software engineering fundamentals",
        "Passion for AI and building user-centric products"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Remote-first culture with flexible hours",
        "Health, dental, and vision insurance",
        "Professional development and conference budget",
        "Latest AI hardware and tools",
        "Collaborative team environment"
      ],
      tags: ["AI/ML", "Python", "NLP", "Cloud", "Full-stack", "Remote"]
    },
    {
      id: "social-media-marketing-manager",
      title: "Social Media Marketing Manager",
      type: "Full-time",
      location: "Remote",
      office: "Miami, FL",
      salary: "$100,000",
      experience: "2+ years",
      description: "Lead our social media strategy to build brand awareness and engage our community of AI enthusiasts. You'll create compelling content, manage campaigns, and grow our presence across all social platforms.",
      responsibilities: [
        "Develop and execute comprehensive social media strategies",
        "Create engaging content for multiple platforms (LinkedIn, Twitter, Instagram, TikTok)",
        "Manage social media campaigns and track performance metrics",
        "Engage with our community and respond to comments/messages",
        "Collaborate with design and content teams for visual assets",
        "Monitor industry trends and competitor activities"
      ],
      requirements: [
        "Proven experience in social media marketing",
        "Strong understanding of AI/tech industry trends",
        "Experience with social media management tools",
        "Excellent written and verbal communication skills",
        "Creative mindset with data-driven approach",
        "Passion for AI and technology"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Remote-first culture with flexible hours",
        "Health, dental, and vision insurance",
        "Professional development opportunities",
        "Creative freedom and brand ownership",
        "Collaborative team environment"
      ],
      tags: ["Social Media", "Marketing", "Content Creation", "Analytics", "AI/Tech", "Remote"]
    }
  ];

  const companyValues = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-First",
      description: "We believe AI should enhance human capabilities, not replace them"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric",
      description: "Every feature we build is designed with our users in mind"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We push boundaries and explore new possibilities in AI"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Growth",
      description: "We invest in our team's personal and professional development"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 w-full">
      {/* Header */}
      <header className="sticky top-4 sm:top-6 z-50 px-4 sm:px-6 lg:px-8 pt-6">
        <div className="rounded-xl sm:rounded-2xl bg-white/5 px-3 sm:px-4 py-2 sm:py-3 ring-1 ring-white/10 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <div className="w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src="/yourpalsRobot.png"
                  alt="YourPals Robot"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-semibold tracking-tight text-sm sm:text-base text-white">YourPals</span>
            </Link>
            
            <Link 
              href="/"
              className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 pb-24 w-full">
        {/* Hero Section */}
        <section className="pt-16 sm:pt-20 lg:pt-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto w-full"
          >
            <motion.div
              animate={{ 
                textShadow: [
                  "0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 20px rgba(59, 130, 246, 0.6)",
                  "0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-robot-blue font-mono text-xs sm:text-sm tracking-widest mb-4"
            >
              JOIN OUR TEAM
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Build the Future of{" "}
              <span className="bg-gradient-to-r from-robot-blue to-robot-purple bg-clip-text text-transparent">
                AI Assistants
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
              Help us create AI companions that make everyday life easier, more efficient, and more enjoyable. 
              Join a team that's passionate about pushing the boundaries of what's possible with AI.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 rounded-xl p-4 ring-1 ring-white/10"
              >
                <div className="text-2xl font-bold text-white mb-1">15+</div>
                <div className="text-white/60 text-sm">Team Members</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/5 rounded-xl p-4 ring-1 ring-white/10"
              >
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-white/60 text-sm">Remote First</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 rounded-xl p-4 ring-1 ring-white/10"
              >
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/60 text-sm">AI Support</div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Company Values */}
        <section className="py-16 sm:py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-6xl mx-auto w-full"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 ring-1 ring-white/20 hover:ring-white/30 transition-all duration-300 group"
                >
                  <div className="text-robot-blue mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Open Positions */}
        <section className="py-16 sm:py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-6xl mx-auto w-full"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Join us in building the future of AI-powered personal assistance
              </p>
            </div>
            
            <div className="space-y-6">
              {positions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 sm:p-8 ring-1 ring-white/20 hover:ring-white/30 transition-all duration-300 group"
                >
                  {/* Position Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    {/* Position Info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-robot-blue transition-colors duration-300">
                          {position.title}
                        </h3>
                        <span className="px-3 py-1 bg-robot-green/20 text-robot-green text-xs font-semibold rounded-full ring-1 ring-robot-green/30">
                          {position.type}
                        </span>
                      </div>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-white/60">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                          {position.office && (
                            <>
                              <span>•</span>
                              <span>{position.office}</span>
                            </>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-semibold text-white">{position.salary}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-white/80 text-base leading-relaxed mb-4">
                        {position.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {position.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full ring-1 ring-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Apply Button */}
                    <div className="lg:flex-shrink-0">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full lg:w-auto px-8 py-3 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-robot-blue/25 transition-all duration-200 flex items-center justify-center gap-2 group"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Expandable Details */}
                  <div className="border-t border-white/10 pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5 text-robot-blue" />
                          What You'll Do
                        </h4>
                        <ul className="space-y-3">
                          {position.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                              <span className="w-2 h-2 bg-robot-blue rounded-full mt-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Requirements */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Brain className="w-5 h-5 text-robot-green" />
                          What You'll Need
                        </h4>
                        <ul className="space-y-3">
                          {position.requirements.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                              <span className="w-2 h-2 bg-robot-green rounded-full mt-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Rocket className="w-5 h-5 text-robot-purple" />
                          What We Offer
                        </h4>
                        <ul className="space-y-3">
                          {position.benefits.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                              <span className="w-2 h-2 bg-robot-purple rounded-full mt-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-4xl mx-auto w-full text-center"
          >
            <div className="bg-gradient-to-r from-robot-blue/10 to-robot-purple/10 rounded-3xl p-8 sm:p-12 ring-1 ring-robot-blue/20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about AI and want to make a difference. 
                Send us your resume and let's start a conversation!
              </p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-robot-blue to-robot-purple text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-robot-blue/25 transition-all duration-200 flex items-center gap-2 mx-auto group"
              >
                Send Open Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
