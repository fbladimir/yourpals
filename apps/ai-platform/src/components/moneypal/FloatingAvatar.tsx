import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface FloatingAvatarProps {
  onChatOpen: () => void;
}

const FloatingAvatar: React.FC<FloatingAvatarProps> = ({ onChatOpen }) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="fixed bottom-32 right-4 z-50">
      {/* Enhanced iOS-style floating AI companion */}
      <div className="floating-ai-companion">
        <motion.button
          onClick={onChatOpen}
          className="w-16 h-16 bg-gradient-to-br from-robot-blue to-robot-purple rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer group relative overflow-hidden"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setShowHint(true)}
          onHoverEnd={() => setShowHint(false)}
        >
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-robot-blue/20 to-robot-purple/20 opacity-50"></div>
          
          {/* AI Icon */}
          <div className="relative z-10">
            <MessageCircle className="w-8 h-8 text-white drop-shadow-lg" />
          </div>
          
          {/* Enhanced glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-robot-blue/30 to-robot-purple/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      </div>

      {/* Enhanced hint tooltip */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-20 right-0 bg-gray-900/90 backdrop-blur-md text-white text-xs px-3 py-2 rounded-lg border border-gray-700/50 shadow-2xl whitespace-nowrap"
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
