import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Trash2, Sparkles, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { useAIChat, ChatMessage } from '@/hooks/useAIChat'

interface ChatModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const {
    messages: chatMessages,
    isLoading: isAILoading,
    error: aiError,
    sendMessage: sendAIMessage,
    clearChat: clearAIChat,
    lastAIResponse
  } = useAIChat()

  const [chatMessage, setChatMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showWelcome, setShowWelcome] = useState(true)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  // Hide welcome message after first interaction
  useEffect(() => {
    if (chatMessages.length > 0) {
      setShowWelcome(false)
    }
  }, [chatMessages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatMessage.trim()) return
    
    sendAIMessage(chatMessage.trim())
    setChatMessage('')
  }

  const handleClose = () => {
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-robot-green to-robot-blue rounded-full p-2">
                <Image
                  src="/moneypal/robotavatar.PNG"
                  alt="MoneyPal AI"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MoneyPal AI</h3>
                <p className="text-sm text-gray-400">Your AI Financial Co-Pilot</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={clearAIChat}
                className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                title="Clear Chat"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              <button
                onClick={handleClose}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Close Chat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-[400px]">
            {showWelcome && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-robot-green to-robot-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image
                    src="/moneypal/robotavatar.PNG"
                    alt="MoneyPal AI"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Hi! I'm MoneyPal! 🤖</h4>
                <p className="text-gray-400 mb-4">I'm here to help with your finances. Ask me anything!</p>
                
                {/* Quick Action Buttons */}
                <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                  <button
                    onClick={() => sendAIMessage("What's my current financial health?")}
                    className="px-4 py-2 bg-robot-green/20 text-robot-green rounded-lg hover:bg-robot-green/30 transition-colors text-sm"
                  >
                    💰 Financial Health
                  </button>
                  <button
                    onClick={() => sendAIMessage("How can I improve my savings?")}
                    className="px-4 py-2 bg-robot-blue/20 text-robot-blue rounded-lg hover:bg-robot-blue/30 transition-colors text-sm"
                  >
                    🎯 Savings Tips
                  </button>
                  <button
                    onClick={() => sendAIMessage("Analyze my spending patterns")}
                    className="px-4 py-2 bg-robot-orange/20 text-robot-orange rounded-lg hover:bg-robot-orange/30 transition-colors text-sm"
                  >
                    📊 Spending Analysis
                  </button>
                  <button
                    onClick={() => sendAIMessage("What investment advice do you have?")}
                    className="px-4 py-2 bg-robot-purple/20 text-robot-purple rounded-lg hover:bg-robot-purple/30 transition-colors text-sm"
                  >
                    📈 Investment Advice
                  </button>
                </div>
              </motion.div>
            )}

            {/* Chat Messages */}
            {chatMessages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start gap-3 ${msg.type === 'user' ? 'justify-end' : ''}`}
              >
                {msg.type === 'ai' && (
                  <div className="w-8 h-8 bg-robot-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src="/moneypal/robotavatar.PNG"
                      alt="AI Response"
                      width={16}
                      height={16}
                      className="rounded-full"
                    />
                  </div>
                )}
                
                <div className={`max-w-xs rounded-2xl p-4 ${
                  msg.type === 'user' 
                    ? 'bg-robot-blue/20 text-white' 
                    : 'bg-gray-800/50 text-white border border-gray-700/50'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.message}</p>
                  
                  {/* AI Insights */}
                  {msg.insights && msg.insights.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {msg.insights.map((insight: any, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white/10 rounded-lg p-3 border border-white/20"
                        >
                          <p className="text-xs font-semibold text-robot-green flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            {insight.title}
                          </p>
                          <p className="text-xs text-gray-300 mt-1">{insight.message}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                  
                  {/* Suggested Actions */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {msg.actions.map((action: string, index: number) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-3 py-1 text-xs bg-robot-blue/30 text-robot-blue rounded-full hover:bg-robot-blue/40 transition-colors border border-robot-blue/30"
                        >
                          {action}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
                
                {msg.type === 'user' && (
                  <div className="w-8 h-8 bg-robot-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-robot-blue text-sm font-semibold">👤</div>
                  </div>
                )}
              </motion.div>
            ))}
            
            {/* Loading indicator */}
            {isAILoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start gap-3"
              >
                <div className="w-8 h-8 bg-robot-green/20 rounded-full flex items-center justify-center">
                  <Image
                    src="/moneypal/robotavatar.PNG"
                    alt="AI Thinking"
                    width={16}
                    height={16}
                    className="rounded-full"
                  />
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700/50">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-robot-green rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-robot-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-robot-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">MoneyPal is thinking...</p>
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Error Display */}
          {aiError && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-6 mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg"
            >
              <p className="text-red-400 text-sm">{aiError}</p>
            </motion.div>
          )}

          {/* Chat Input */}
          <div className="p-6 border-t border-gray-700/50">
            <form onSubmit={handleSendMessage} className="flex gap-3">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask MoneyPal anything about your finances..."
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-robot-blue focus:ring-2 focus:ring-robot-blue/20 transition-all"
                disabled={isAILoading}
              />
              <button
                type="submit"
                disabled={isAILoading || !chatMessage.trim()}
                className="px-6 py-3 bg-gradient-to-r from-robot-green to-robot-blue text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isAILoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Thinking...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
