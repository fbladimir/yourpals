import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Plus, HelpCircle, ChevronUp, ChevronDown } from 'lucide-react';

interface FloatingAvatarProps {
  isChatOpen: boolean;
  isOnboarding: boolean;
  onChatOpen: () => void;
  onAddData?: () => void;
  onHelp?: () => void;
}

const FloatingAvatar: React.FC<FloatingAvatarProps> = ({ isChatOpen, isOnboarding, onChatOpen, onAddData, onHelp }) => {
  const [isQuickActionsExpanded, setIsQuickActionsExpanded] = useState(() => {
    // Restore overview container state from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('moneypal-overview-expanded')
      return saved !== null ? JSON.parse(saved) : true
    }
    return true
  });
  const [showHint, setShowHint] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverviewVisible, setIsOverviewVisible] = useState(false);
  const [chatJustClosed, setChatJustClosed] = useState(false);
  const [hintAllowed, setHintAllowed] = useState(false);

  // Wait for app content to load before showing quick actions
  React.useEffect(() => {
    const avatarTimer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    const overviewTimer = setTimeout(() => {
      setIsOverviewVisible(true);
    }, 1200);

    // Allow hint to show after initial load with delay
    const hintTimer = setTimeout(() => {
      setHintAllowed(true);
    }, 5000); // Allow hint after 5 seconds

    return () => {
      clearTimeout(avatarTimer);
      clearTimeout(overviewTimer);
      clearTimeout(hintTimer);
    };
  }, []);

  // Track chat state changes
  React.useEffect(() => {
    if (!isChatOpen && chatJustClosed) {
      // Chat was just closed, prevent hint from showing immediately
      setShowHint(false);
      setHintAllowed(false);
      
      // Re-enable hint after delay
      const timer = setTimeout(() => {
        setHintAllowed(true);
        setChatJustClosed(false);
      }, 3000); // 3 second delay after chat closes

      return () => clearTimeout(timer);
    } else if (isChatOpen) {
      // Chat is opening, mark that it will be closing soon
      setChatJustClosed(true);
      setShowHint(false);
    }
  }, [isChatOpen, chatJustClosed]);

  const toggleQuickActions = () => {
    const newState = !isQuickActionsExpanded;
    setIsQuickActionsExpanded(newState);
    // Persist overview container state to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('moneypal-overview-expanded', JSON.stringify(newState));
    }
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'chat':
        onChatOpen();
        break;
      case 'add':
        onAddData?.();
        break;
      case 'help':
        onHelp?.();
        break;
      default:
        break;
    }
  };

  // Don't render anything if chat is open or onboarding is active
  if (isChatOpen || isOnboarding) {
    return null;
  }

  return (
    <div className={`quick-actions-container md:hidden ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Collapsible Quick Actions Panel */}
      {isOverviewVisible && (
        <div className={`quick-actions-panel ${isQuickActionsExpanded ? 'expanded' : 'collapsed'}`}>
          {/* Quick Actions Grid */}
          <div className="quick-actions-grid">
            <button
              onClick={() => handleQuickAction('chat')}
              className="quick-action-btn chat"
              aria-label="Chat with AI"
            >
              <MessageCircle size={20} className="text-white" />
            </button>
            
            <button
              onClick={() => handleQuickAction('add')}
              className="quick-action-btn add"
              aria-label="Add new item"
            >
              <Plus size={20} className="text-white" />
            </button>
            
            <button
              onClick={() => handleQuickAction('help')}
              className="quick-action-btn help"
              aria-label="Get help"
            >
              <HelpCircle size={20} className="text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button - Smart Positioning */}
      {isOverviewVisible && (
        <button
          onClick={toggleQuickActions}
          className="quick-actions-toggle"
          aria-label={isQuickActionsExpanded ? 'Hide quick actions' : 'Show quick actions'}
        >
          <div className="toggle-icon">
            {isQuickActionsExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </div>
        </button>
      )}

      {/* Enhanced Floating AI Avatar */}
      <div className="floating-ai-companion">
        <div 
          className="avatar-container"
          onClick={onChatOpen}
          onMouseEnter={() => {
            // Only show hint if:
            // 1. Hint is allowed (not immediately after chat close)
            // 2. Overview is collapsed (not expanded)
            if (hintAllowed && !isQuickActionsExpanded) {
              setShowHint(true);
            }
          }}
          onMouseLeave={() => setShowHint(false)}
        >
          {/* Glowing Ring Animation */}
          <div className="avatar-glow-ring"></div>
          
          {/* Pulse Effect */}
          <div className="avatar-pulse"></div>
          
          {/* Avatar Image */}
          <img
            src="/moneypal/robotavatar.PNG"
            alt="AI Financial Co-Pilot"
            className="avatar-image"
          />
        </div>
      </div>

      {/* Enhanced Hint Tooltip */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-20 right-0 bg-gray-900/90 backdrop-blur-md text-white text-xs px-3 py-2 rounded-lg border border-gray-700/50 shadow-2xl whitespace-nowrap z-[1002]"
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="w-3 h-3 text-robot-blue" />
              <span>Tap to chat with AI</span>
            </div>
            {/* Enhanced arrow */}
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
          </motion.div>
        )}
    </AnimatePresence>
    </div>
  );
};

export default FloatingAvatar;
