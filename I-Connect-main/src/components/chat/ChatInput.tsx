import React, { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };
  
  return (
    <div className="border-t border-border p-4">
      <form onSubmit={handleSubmit} className="flex items-end">
        <div className="flex-1 relative">
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-3 pr-10 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
            rows={1}
            style={{ 
              minHeight: '44px', 
              maxHeight: '120px'
            }}
          />
          <div className="absolute bottom-2 right-2 flex">
            <button 
              type="button"
              className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Paperclip size={18} />
            </button>
            <button 
              type="button"
              className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Smile size={18} />
            </button>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="ml-2 p-2.5 rounded-full bg-primary text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
          disabled={!message.trim()}
        >
          <Send size={18} />
        </motion.button>
      </form>
    </div>
  );
};

export default ChatInput;