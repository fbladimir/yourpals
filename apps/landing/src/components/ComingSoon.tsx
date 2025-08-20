"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Car, Bitcoin, Zap, Sparkles, ArrowRight, Clock } from "lucide-react";

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="py-20 sm:py-24 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-6 backdrop-blur-sm"
          >
            <Clock className="w-4 h-4" />
            <span>Coming Soon</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            The Future of AI Pals is{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Accelerating
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            Get ready for two revolutionary AI Pals that will transform how you drive and invest. 
            These cutting-edge assistants are currently in development and will be available soon.
          </motion.p>
        </motion.div>

        {/* Coming Soon Cards */}
        <div className="mb-16">
          {/* Mobile Horizontal Scroll Container */}
          <div className="lg:hidden overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-4 w-max">
              {/* Mobile CarPal Card */}
              <div className="w-80 flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <Image
                      src="/carpalAvatar.PNG"
                      alt="CarPal"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Soon
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">CarPal</h4>
                    <p className="text-blue-300 text-sm">AI Automotive Assistant</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Your AI co-pilot for everything automotive. From maintenance scheduling and fuel optimization 
                  to navigation intelligence and vehicle diagnostics.
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-xs">Smart Maintenance Alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-xs">Fuel Efficiency Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-300 text-xs">AI-Powered Navigation</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>Launching Q2 2024</span>
                </div>
              </div>

              {/* Mobile CryptoPal Card */}
              <div className="w-80 flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <Image
                      src="/cryptopalAvatar.PNG"
                      alt="CryptoPal"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Soon
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">CryptoPal</h4>
                    <p className="text-purple-300 text-sm">AI Crypto Investment Advisor</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Navigate the crypto world with confidence. CryptoPal provides real-time market analysis, 
                  portfolio optimization, and strategic investment recommendations.
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Bitcoin className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-xs">Real-time Market Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-xs">Portfolio Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-xs">Risk Assessment AI</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>Launching Q2 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-12">
            {/* CarPal Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Header */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <Image
                        src="/carpalAvatar.PNG"
                        alt="CarPal"
                        width={80}
                        height={80}
                        className="rounded-full group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Soon
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">CarPal</h3>
                      <p className="text-blue-300 text-sm">AI Automotive Assistant</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Your AI co-pilot for everything automotive. From maintenance scheduling and fuel optimization 
                    to navigation intelligence and vehicle diagnostics - CarPal keeps you safe and efficient on the road.
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Car className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Smart Maintenance Alerts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">Fuel Efficiency Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-400" />
                      <span className="text-gray-300">AI-Powered Navigation</span>
                    </div>
                  </div>

                  {/* Coming Soon Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Launching Q2 2024</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CryptoPal Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Header */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <Image
                        src="/cryptopalAvatar.PNG"
                        alt="CryptoPal"
                        width={80}
                        height={80}
                        className="rounded-full group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Soon
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">CryptoPal</h3>
                      <p className="text-purple-300 text-sm">AI Crypto Investment Advisor</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Navigate the crypto world with confidence. CryptoPal provides real-time market analysis, 
                    portfolio optimization, risk assessment, and strategic investment recommendations powered by AI.
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Bitcoin className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Real-time Market Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Portfolio Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      <span className="text-gray-300">Risk Assessment AI</span>
                    </div>
                  </div>

                  {/* Coming Soon Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Launching Q2 2024</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>



        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Be First to Experience These AI Pals
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Join our early access list and get exclusive updates, beta testing opportunities, 
              and special launch pricing for CarPal and CryptoPal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95">
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-xl font-semibold ring-1 ring-white/10 hover:bg-white/10 transition-all duration-200">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Smooth fade transition to how it works section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent pointer-events-none"></div>
    </section>
  );
}
