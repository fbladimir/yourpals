'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Brain, 
  Zap, 
  Target, 
  Rocket,
  ChevronRight,
  Settings,
  User,
  Bell,
  Palette,
  Globe,
  Shield,
  HelpCircle
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import YourPalAvatar from '../YourPalAvatar'
import YourPalChatModal from '../YourPalChatModal'
import OnboardingModal from './OnboardingModal'
import CollapsibleSection from '../moneypal/CollapsibleSection'
import ClientOnly from '../moneypal/ClientOnly'
import AutomationCenter from './AutomationCenter'

interface AIPalTemplateProps {
  // App-specific configuration
  appName: string
  appDescription: string
  appIcon: any // Lucide icon component
  appAvatar: string // Path to avatar image
  appColor: string // Primary color for the app
  appFeatures: string[]
  
  // Custom content
  heroContent?: React.ReactNode
  mainContent?: React.ReactNode
  sidebarContent?: React.ReactNode
  
  // Optional features
  showOnboarding?: boolean
  showTutorial?: boolean
  showChat?: boolean
  showYourPal?: boolean
  
  // Custom actions
  customActions?: React.ReactNode
  
  // Automation support
  showAutomation?: boolean
  automationTemplates?: any[]
  onAutomationCreate?: (automation: any) => void
  onAutomationToggle?: (id: string, isActive: boolean) => void
  onAutomationDelete?: (id: string) => void
  onAutomationEdit?: (automation: any) => void
}

export default function AIPalTemplate({
  appName,
  appDescription,
  appIcon: AppIcon,
  appAvatar,
  appColor,
  appFeatures,
  heroContent,
  mainContent,
  sidebarContent,
  showOnboarding = true,
  showTutorial = true,
  showChat = true,
  showYourPal = true,
  customActions,
  showAutomation = false,
  automationTemplates = [],
  onAutomationCreate,
  onAutomationToggle,
  onAutomationDelete,
  onAutomationEdit
}: AIPalTemplateProps) {
  const { user } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('overview')
  const [showOnboardingModal, setShowOnboardingModal] = useState(false)
  const [showYourPalChat, setShowYourPalChat] = useState(false)
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)

  // Default hero content if none provided
  const defaultHeroContent = (
    <div className="text-center">
      <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${appColor} rounded-full flex items-center justify-center`}>
        <AppIcon className="w-10 h-10 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-white mb-4">
        Welcome to {appName}! ✨
      </h2>
      <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
        {appDescription}
      </p>
      <div className="flex items-center justify-center gap-4">
        {appFeatures.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-green-400">
            <Target className="w-5 h-5" />
            <span className="font-medium">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )

  // Default main content if none provided
  const defaultMainContent = (
    <div className="space-y-6">
      <CollapsibleSection title="Getting Started" defaultOpen={true}>
        <div className="space-y-4">
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-blue-300 text-sm">
              <strong>Welcome!</strong> This is your new {appName} dashboard. Customize it with your specific content and features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {appFeatures.map((feature, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${appColor.replace('bg-gradient-to-r', 'bg-gradient-to-r').replace('rounded-full', 'rounded-lg')} flex items-center justify-center`}>
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Quick Actions">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl text-white hover:bg-blue-500/30 transition-all duration-200">
            <div className="text-center">
              <AppIcon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <span className="text-sm font-medium">Dashboard</span>
            </div>
          </button>
          <button className="p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl text-white hover:bg-green-500/30 transition-all duration-200">
            <div className="text-center">
              <Settings className="w-8 h-8 mx-auto mb-2 text-green-400" />
              <span className="text-sm font-medium">Settings</span>
            </div>
          </button>
          <button className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl text-white hover:bg-purple-500/30 transition-all duration-200">
            <div className="text-center">
              <HelpCircle className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <span className="text-sm font-medium">Help</span>
            </div>
          </button>
          <button className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl text-white hover:bg-orange-500/30 transition-all duration-200">
            <div className="text-center">
              <Rocket className="w-8 h-8 mx-auto mb-2 text-orange-400" />
              <span className="text-sm font-medium">Launch</span>
            </div>
          </button>
        </div>
      </CollapsibleSection>
    </div>
  )

  // Default sidebar content if none provided
  const defaultSidebarContent = (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-400" />
          AI Insights
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-blue-300 text-sm">
              <strong>Tip:</strong> Customize this sidebar with app-specific content and features.
            </p>
          </div>
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-300 text-sm">
              <strong>Ready:</strong> I'm here to help you get the most out of {appName}.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-green-400" />
          Getting Started
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-6 h-6 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center">
              <span className="text-blue-400 text-xs font-bold">1</span>
            </div>
            <span className="text-sm">Explore the dashboard and features</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-6 h-6 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center">
              <span className="text-purple-400 text-xs font-bold">2</span>
            </div>
            <span className="text-sm">Customize your preferences</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <div className="flex items-center gap-3 text-gray-300">
              <div className="w-6 h-6 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center">
                <span className="text-green-400 text-xs font-bold">3</span>
              </div>
              <span className="text-sm">Start using {appName} features</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <ClientOnly>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg border-b border-white/20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => router.push('/dashboard')}
                  className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  <span className="text-sm font-medium">Back to Dashboard</span>
                </button>
                <div className="w-px h-8 bg-white/20"></div>
                <div className={`w-12 h-12 ${appColor} rounded-xl flex items-center justify-center`}>
                  <AppIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">{appName}</h1>
                  <p className="text-gray-300 text-sm">{appDescription}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <span className="text-green-400 text-sm font-medium">AI ACTIVE</span>
                </div>
                {showOnboarding && (
                  <button 
                    onClick={() => setShowOnboardingModal(true)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Setup {appName}
                  </button>
                )}
                {customActions}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-1 bg-white/10 backdrop-blur-lg rounded-xl p-1 border border-white/20">
            {[
              'overview',
              ...(showAutomation ? ['automation'] : []),
              'analytics', 
              'settings'
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab === 'overview' && 'Overview'}
                {tab === 'automation' && 'Automation'}
                {tab === 'analytics' && 'Analytics'}
                {tab === 'settings' && 'Settings'}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Hero Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`bg-gradient-to-r ${appColor.replace('bg-gradient-to-r', 'bg-gradient-to-r').replace('rounded-full', 'rounded-3xl')} p-8 mb-8 border border-white/10`}
              >
                {heroContent || defaultHeroContent}
              </motion.div>

              {/* Main Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Content */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="lg:col-span-2 space-y-6"
                >
                  {mainContent || defaultMainContent}
                </motion.div>

                {/* Right Column - Sidebar */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-6"
                >
                  {sidebarContent || defaultSidebarContent}
                </motion.div>
              </div>
            </div>
          )}

          {activeTab === 'automation' && showAutomation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AutomationCenter
                appName={appName}
                appIcon={AppIcon}
                appColor={appColor}
                automationTemplates={automationTemplates}
                onAutomationCreate={onAutomationCreate || (() => {})}
                onAutomationToggle={onAutomationToggle || (() => {})}
                onAutomationDelete={onAutomationDelete || (() => {})}
                onAutomationEdit={onAutomationEdit || (() => {})}
              />
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <AppIcon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Analytics Dashboard</h3>
              <p className="text-gray-300">Customize this section with your app-specific analytics and insights.</p>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Settings className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Settings & Preferences</h3>
              <p className="text-gray-300">Customize this section with your app-specific settings and configuration options.</p>
            </motion.div>
          )}
        </div>

        {/* YourPal Integration */}
        {showYourPal && (
          <>
            <YourPalAvatar onOpenChat={() => setShowYourPalChat(true)} />
            <YourPalChatModal isOpen={showYourPalChat} onClose={() => setShowYourPalChat(false)} />
          </>
        )}

        {/* Onboarding Modal */}
        {showOnboarding && (
          <OnboardingModal 
            isOpen={showOnboardingModal} 
            onClose={() => setShowOnboardingModal(false)}
            appName={appName}
          />
        )}
      </div>
    </ClientOnly>
  )
}
