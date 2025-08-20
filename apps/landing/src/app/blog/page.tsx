"use client";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Calendar,
  ArrowRight,
  Search,
  Tag,
  Clock,
  Eye,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { config } from "../../lib/config";

export default function BlogPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const featuredPost = {
    title: "The Future of AI Companions: How YourPals is Changing the Game",
    excerpt: "Discover how AI companions are evolving from simple chatbots to intelligent life partners that understand your needs and help you achieve your goals.",
    author: "YourPals Team",
    date: "January 15, 2025",
    readTime: "5 min read",
    views: "2.4k",
    category: "AI Innovation",
    image: "/yourpalsRobot.png"
  };

  const blogPosts = [
    {
      title: "5 Ways MoneyPal Can Transform Your Financial Life",
      excerpt: "Learn how our AI financial assistant can help you budget, save, and invest smarter than ever before.",
      author: "Finance Team",
      date: "January 12, 2025",
      readTime: "4 min read",
      views: "1.8k",
      category: "Finance"
    },
    {
      title: "CookingPal: Your Personal Chef in the Digital Age",
      excerpt: "From meal planning to recipe creation, discover how AI is revolutionizing home cooking.",
      author: "Culinary Team",
      date: "January 10, 2025",
      readTime: "6 min read",
      views: "1.2k",
      category: "Cooking"
    },
    {
      title: "SellerPal: The Future of E-commerce Management",
      excerpt: "How AI is helping small business owners manage their online stores more efficiently.",
      author: "Business Team",
      date: "January 8, 2025",
      readTime: "7 min read",
      views: "956",
      category: "Business"
    },
    {
      title: "Privacy in the Age of AI: How YourPals Protects Your Data",
      excerpt: "Understanding the importance of data privacy and how we ensure your information stays secure.",
      author: "Security Team",
      date: "January 5, 2025",
      readTime: "8 min read",
      views: "1.5k",
      category: "Security"
    },
    {
      title: "Building the Perfect AI Companion: Lessons from YourPals",
      excerpt: "Behind the scenes of how we design AI that truly understands and helps users.",
      author: "Product Team",
      date: "January 3, 2025",
      readTime: "9 min read",
      views: "1.1k",
      category: "Product"
    },
    {
      title: "Community Spotlight: Amazing Stories from YourPals Users",
      excerpt: "Real stories from real users about how AI companions are changing their lives.",
      author: "Community Team",
      date: "December 30, 2024",
      readTime: "5 min read",
      views: "890",
      category: "Community"
    }
  ];

  const categories = [
    "All Posts",
    "AI Innovation", 
    "Finance",
    "Cooking",
    "Business",
    "Security",
    "Product",
    "Community"
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
                <BookOpen className="w-4 h-4" />
                Insights & Updates
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                YourPals{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              
              <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                Stay up to date with the latest AI innovations, user stories, and insights from the YourPals team. 
                Discover how AI companions are transforming lives and learn tips to get the most out of your AI pals.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Search and Categories */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      index === 0 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-white/50 text-sm">{featuredPost.date}</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-white/50 mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {featuredPost.views}
                    </div>
                  </div>
                  
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="relative">
                  <Image
                    src={featuredPost.image}
                    alt="Featured post"
                    width={500}
                    height={300}
                    className="rounded-2xl w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Explore our collection of insights, tutorials, and stories about AI companions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-500 group cursor-pointer"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-white/50 mb-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-white/50">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </span>
                    </div>
                    
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-blue-400 transition-colors duration-200" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay in the Loop
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Get the latest AI insights, product updates, and user stories delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              
              <p className="mt-4 text-white/50 text-sm">
                No spam, unsubscribe at any time
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
