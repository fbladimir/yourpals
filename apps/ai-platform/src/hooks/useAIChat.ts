import { useState, useCallback, useRef } from 'react'
import { useAuth } from '@/contexts/AuthContext'

// Define types locally since we're not using the old ai-service
export interface AIResponse {
  message: string
  insights: any[]
  actions: string[]
  confidence: number
  nextQuestion?: string
}

export interface ChatMessage {
  id: string
  type: 'user' | 'ai'
  message: string
  timestamp: Date
  insights?: any[]
  actions?: string[]
  confidence?: number
}

export interface UseAIChatReturn {
  messages: ChatMessage[]
  isLoading: boolean
  error: string | null
  sendMessage: (message: string) => Promise<void>
  clearChat: () => void
  lastAIResponse: AIResponse | null
}

export function useAIChat(): UseAIChatReturn {
  const { user } = useAuth()
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastAIResponse, setLastAIResponse] = useState<AIResponse | null>(null)
  
  const conversationRef = useRef<ChatMessage[]>([])

  // Send a message to the AI
  const sendMessage = useCallback(async (message: string) => {
    if (!user?.id || !message.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      // Add user message to chat
      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        type: 'user',
        message: message.trim(),
        timestamp: new Date()
      }

      setMessages(prev => [...prev, userMessage])
      conversationRef.current = [...conversationRef.current, userMessage]

      console.log(`[useAIChat] Sending message: "${message}"`)

      // Call AI chat API
      const response = await fetch('/api/moneypal/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: user.id,
          message: message.trim(),
          conversationHistory: conversationRef.current.slice(-10) // Last 10 messages for context
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to get AI response')
      }

      const data = await response.json()
      const aiResponse = data.response

      console.log(`[useAIChat] AI Response received:`, aiResponse)

      // Add AI response to chat
      const aiMessage: ChatMessage = {
        id: `ai-${Date.now()}`,
        type: 'ai',
        message: aiResponse.message,
        timestamp: new Date(),
        insights: aiResponse.insights,
        actions: aiResponse.actions,
        confidence: aiResponse.confidence
      }

      setMessages(prev => [...prev, aiMessage])
      conversationRef.current = [...conversationRef.current, aiMessage]
      setLastAIResponse(aiResponse)

      // If AI suggests a next question, add it as a helpful hint
      if (aiResponse.nextQuestion) {
        console.log(`[useAIChat] AI suggested next question: "${aiResponse.nextQuestion}"`)
      }

    } catch (err: any) {
      console.error('[useAIChat] Error sending message:', err)
      
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        type: 'ai',
        message: `I'm sorry, I encountered an error: ${err.message}. Please try again or contact support if the problem persists.`,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, errorMessage])
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }, [user?.id])

  // Clear the chat history
  const clearChat = useCallback(() => {
    setMessages([])
    conversationRef.current = []
    setLastAIResponse(null)
    setError(null)
  }, [])

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearChat,
    lastAIResponse
  }
}
