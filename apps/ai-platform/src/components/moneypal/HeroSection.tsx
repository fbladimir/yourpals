import { motion } from 'framer-motion'
import { Plus, RefreshCw, User } from 'lucide-react'
import Image from 'next/image'

interface HeroSectionProps {
  userName?: string
  onLinkAccounts: () => void
  onAddTransaction: () => void
  onRefreshData: () => void
}

export default function HeroSection({ 
  userName = 'there', 
  onLinkAccounts, 
  onAddTransaction, 
  onRefreshData 
}: HeroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="relative p-6 md:p-8">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-robot-green/20 to-robot-blue/20 rounded-full flex items-center justify-center">
                <Image
                  src="/moneypal/robotavatar.PNG"
                  alt="MoneyPal AI"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  Hi {userName}, here's your money at a glance 👋
                </h1>
                <p className="text-gray-300 text-sm md:text-base">
                  MoneyPal is actively monitoring your finances and ready to help
                </p>
              </div>
            </div>
            
            <button
              onClick={onRefreshData}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
              title="Refresh Data"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Actions Row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onLinkAccounts}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-robot-green to-robot-green/80 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-robot-green/25 transition-all duration-200 group"
            >
              <Plus className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Link Accounts
            </button>
            
            <button
              onClick={onAddTransaction}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-robot-blue to-robot-blue/80 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-robot-blue/25 transition-all duration-200 group"
            >
              <Plus className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Add Transaction
            </button>
          </div>

          {/* AI Status Indicator */}
          <div className="mt-6 flex items-center gap-2 text-sm text-robot-green">
            <div className="w-2 h-2 bg-robot-green rounded-full animate-pulse"></div>
            <span>AI actively analyzing your financial patterns</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
