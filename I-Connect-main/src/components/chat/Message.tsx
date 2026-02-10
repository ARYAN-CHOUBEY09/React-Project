import React from 'react';
import { motion } from 'framer-motion';

export interface MessageType {
  id: number;
  sender: 'user' | 'agent' | 'system';
  text: string;
  timestamp: string;
  avatar?: string;
  read?: boolean;
}

interface MessageProps {
  message: MessageType;
  isLastMessage?: boolean;
}

const Message: React.FC<MessageProps> = ({ message, isLastMessage = false }) => {
  const isUser = message.sender === 'user';
  const isSystem = message.sender === 'system';
  
  if (isSystem) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="my-4 flex justify-center"
      >
        <div className="inline-block px-3 py-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full">
          {message.text}
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-start mb-4 ${isUser ? 'justify-end' : ''}`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full mr-3 bg-gray-300 dark:bg-gray-700 overflow-hidden flex-shrink-0">
          {message.avatar ? (
            <img 
              src={message.avatar} 
              alt="User avatar" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-medium text-white">
              A
            </div>
          )}
        </div>
      )}
      
      <div className={`max-w-[75%]`}>
        <div 
          className={`px-4 py-2.5 rounded-2xl ${
            isUser 
              ? 'bg-primary text-white rounded-tr-none' 
              : 'bg-gray-100 dark:bg-gray-800 rounded-tl-none'
          }`}
        >
          {message.text}
        </div>
        <div 
          className={`text-xs mt-1 text-gray-500 ${
            isUser ? 'text-right' : ''
          }`}
        >
          {message.timestamp}
          {isUser && isLastMessage && (
            <span className={`ml-1 ${message.read ? 'text-primary' : ''}`}>
              {message.read ? '• Read' : '• Delivered'}
            </span>
          )}
        </div>
      </div>
      
      {isUser && (
        <div className="w-8 h-8 rounded-full ml-3 bg-gray-300 dark:bg-gray-700 overflow-hidden flex-shrink-0">
          <img 
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="User avatar" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </motion.div>
  );
};

export default Message;