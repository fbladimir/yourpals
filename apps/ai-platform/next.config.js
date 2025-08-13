/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', '*.googleusercontent.com'],
  },
  // Development server settings
  experimental: {
    // Improve hot reload stability
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    // Force webpack build worker for better development experience
    webpackBuildWorker: true,
  },
  // Improve development experience
  swcMinify: true,
  // Better error handling in development
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Fix chunk loading issues
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Improve chunk loading in development
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Create a vendor chunk for better caching
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
            },
            // Create a common chunk for shared code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      }
      
      // Improve hot reload
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      }
    }
    return config
  },
}

module.exports = nextConfig
