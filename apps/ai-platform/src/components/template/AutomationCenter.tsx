'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Zap, 
  Plus, 
  Settings, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  X, 
  Edit3,
  Trash2,
  Play,
  Pause,
  Calendar,
  Bell,
  Mail,
  Smartphone,
  Database,
  TrendingUp,
  DollarSign,
  Package,
  Heart,
  Brain,
  Rocket
} from 'lucide-react'

interface Automation {
  id: string
  name: string
  description: string
  type: 'schedule' | 'trigger' | 'monitor'
  frequency: string
  action: string
  isActive: boolean
  lastRun?: Date
  nextRun?: Date
  category: string
  icon: any
  color: string
}

interface AutomationCenterProps {
  appName: string
  appIcon: any
  appColor: string
  automationTemplates: AutomationTemplate[]
  onAutomationCreate: (automation: Omit<Automation, 'id'>) => void
  onAutomationToggle: (id: string, isActive: boolean) => void
  onAutomationDelete: (id: string) => void
  onAutomationEdit: (automation: Automation) => void
}

interface AutomationTemplate {
  name: string
  description: string
  type: 'schedule' | 'trigger' | 'monitor'
  frequency: string
  action: string
  category: string
  icon: any
  color: string
}

export default function AutomationCenter({
  appName,
  appIcon: AppIcon,
  appColor,
  automationTemplates,
  onAutomationCreate,
  onAutomationToggle,
  onAutomationDelete,
  onAutomationEdit
}: AutomationCenterProps) {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingAutomation, setEditingAutomation] = useState<Automation | null>(null)
  const [activeTab, setActiveTab] = useState('active')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock automations - in real app, these would come from props or API
  const [automations, setAutomations] = useState<Automation[]>([
    {
      id: '1',
      name: 'Weekly Summary Report',
      description: 'Send weekly business summary every Monday at 9 AM',
      type: 'schedule',
      frequency: 'Every Monday at 9:00 AM',
      action: 'Send email report with weekly metrics',
      isActive: true,
      lastRun: new Date('2024-01-15T09:00:00'),
      nextRun: new Date('2024-01-22T09:00:00'),
      category: 'Reporting',
      icon: Mail,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: '2',
      name: 'Low Stock Alert',
      description: 'Alert when inventory drops below threshold',
      type: 'trigger',
      frequency: 'Real-time monitoring',
      action: 'Send push notification and email alert',
      isActive: true,
      lastRun: new Date('2024-01-16T14:30:00'),
      nextRun: undefined,
      category: 'Inventory',
      icon: Package,
      color: 'from-orange-500 to-red-600'
    }
  ])

  const handleCreateAutomation = (template: AutomationTemplate) => {
    const newAutomation: Omit<Automation, 'id'> = {
      name: template.name,
      description: template.description,
      type: template.type,
      frequency: template.frequency,
      action: template.action,
      isActive: true,
      category: template.category,
      icon: template.icon,
      color: template.color
    }
    onAutomationCreate(newAutomation)
    setShowCreateModal(false)
  }

  const handleToggleAutomation = (id: string) => {
    const automation = automations.find(a => a.id === id)
    if (automation) {
      const updatedAutomation = { ...automation, isActive: !automation.isActive }
      onAutomationToggle(id, updatedAutomation.isActive)
      setAutomations(prev => prev.map(a => a.id === id ? updatedAutomation : a))
    }
  }

  const handleDeleteAutomation = (id: string) => {
    onAutomationDelete(id)
    setAutomations(prev => prev.filter(a => a.id !== id))
  }

  const handleEditAutomation = (automation: Automation) => {
    setEditingAutomation(automation)
    setShowEditModal(true)
  }

  const filteredAutomations = automations.filter(automation => {
    const matchesSearch = automation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         automation.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTab = activeTab === 'active' ? automation.isActive : !automation.isActive
    return matchesSearch && matchesTab
  })

  const getStatusColor = (automation: Automation) => {
    if (!automation.isActive) return 'text-gray-400'
    if (automation.type === 'schedule') return 'text-blue-400'
    if (automation.type === 'trigger') return 'text-green-400'
    if (automation.type === 'monitor') return 'text-purple-400'
    return 'text-gray-400'
  }

  const getStatusIcon = (automation: Automation) => {
    if (!automation.isActive) return Pause
    if (automation.type === 'schedule') return Clock
    if (automation.type === 'trigger') return AlertTriangle
    if (automation.type === 'monitor') return TrendingUp
    return Clock
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 ${appColor} rounded-xl flex items-center justify-center`}>
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Automation Center</h3>
            <p className="text-gray-300">Create and manage your {appName} AI automations</p>
          </div>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          New Automation
        </button>
      </div>

      {/* Search and Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search automations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex space-x-1 bg-white/10 backdrop-blur-lg rounded-xl p-1 border border-white/20">
          {['active', 'inactive'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab === 'active' ? 'Active' : 'Inactive'}
            </button>
          ))}
        </div>
      </div>

      {/* Automation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredAutomations.map((automation) => {
          const StatusIcon = getStatusIcon(automation)
          const AutomationIcon = automation.icon
          
          return (
            <motion.div
              key={automation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-200 ${
                automation.isActive 
                  ? 'border-green-500/30 hover:border-green-500/50' 
                  : 'border-gray-600/50 hover:border-gray-500/50'
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${automation.color} rounded-lg flex items-center justify-center`}>
                    <AutomationIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{automation.name}</h4>
                    <p className="text-sm text-gray-400">{automation.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEditAutomation(automation)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteAutomation(automation.id)}
                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-4">{automation.description}</p>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{automation.frequency}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{automation.action}</span>
                </div>
              </div>

              {/* Status and Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <StatusIcon className={`w-4 h-4 ${getStatusColor(automation)}`} />
                  <span className={`text-sm ${getStatusColor(automation)}`}>
                    {automation.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <button
                  onClick={() => handleToggleAutomation(automation.id)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                    automation.isActive
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30'
                      : 'bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30'
                  }`}
                >
                  {automation.isActive ? 'Pause' : 'Activate'}
                </button>
              </div>

              {/* Last Run Info */}
              {automation.lastRun && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Last run: {automation.lastRun.toLocaleDateString()}</span>
                    {automation.nextRun && (
                      <span>Next: {automation.nextRun.toLocaleDateString()}</span>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Empty State */}
      {filteredAutomations.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
            <Zap className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            {searchTerm ? 'No automations found' : 'No automations yet'}
          </h3>
          <p className="text-gray-300 mb-6">
            {searchTerm 
              ? 'Try adjusting your search terms'
              : `Create your first automation to let ${appName} work for you automatically!`
            }
          </p>
          {!searchTerm && (
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200"
            >
              Create Your First Automation
            </button>
          )}
        </motion.div>
      )}

      {/* Create Automation Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCreateModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${appColor} rounded-full flex items-center justify-center`}>
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Create New Automation</h2>
                    <p className="text-sm text-gray-400">Choose from pre-built templates or create custom automation</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {automationTemplates.map((template, index) => {
                    const TemplateIcon = template.icon
                    
                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleCreateAutomation(template)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-200 text-left group"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 ${template.color} rounded-lg flex items-center justify-center`}>
                            <TemplateIcon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {template.name}
                            </h4>
                            <p className="text-sm text-gray-400">{template.category}</p>
                          </div>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">{template.description}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{template.frequency}</span>
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
