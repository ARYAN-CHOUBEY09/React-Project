import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Search, MoreVertical, Mail, Phone, Video } from 'lucide-react';
import Button from '../components/ui/Button';
import Message, { MessageType } from '../components/chat/Message';
import ChatInput from '../components/chat/ChatInput';
import { useTheme } from '../context/ThemeContext';

const initialMessages: MessageType[] = [
  {
    id: 1,
    sender: 'agent',
    text: 'Good morning! How can I help you today?',
    timestamp: '9:03 AM',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    id: 2,
    sender: 'user',
    text: "I'm having issues with my recent order #45678. It's been a week and I haven't received any shipping updates.",
    timestamp: '9:05 AM',
    read: true,
  },
  {
    id: 3,
    sender: 'agent',
    text: "I'm sorry to hear that. Let me check your order status right away.",
    timestamp: '9:07 AM',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    id: 4,
    sender: 'system',
    text: 'Aditya is checking order details',
    timestamp: '9:08 AM',
  },
  {
    id: 5,
    sender: 'agent',
    text: "I've found your order. There was a delay at our warehouse. Your order has been processed and will ship today.",
    timestamp: '9:10 AM',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    id: 6,
    sender: 'user',
    text: 'Great, thank you for the quick update!',
    timestamp: '9:12 AM',
    read: true,
  },
];

const chatList = [
  {
    id: 1,
    name: 'Aditi',
    status: 'active',
    unread: 2,
    lastMessage: "I'm having issues with my recent order",
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
  },
  {
    id: 2,
    name: 'Aditya',
    status: 'offline',
    unread: 0,
    lastMessage: "Thanks for your help!",
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    name: 'kajal',
    status: 'offline',
    unread: 0,
    lastMessage: "When will my order ship?",
    photo: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 4,
    name: 'Smriti',
    status: 'offline',
    unread: 0,
    lastMessage: "Can we schedule a demo?",
    photo: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 5,
    name: 'kunal',
    status: 'offline',
    unread: 1,
    lastMessage: "I need a refund for my purchase",
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
];

const Chats = () => {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [selectedChat, setSelectedChat] = useState(1);
  const { isDarkMode } = useTheme();

  const handleSendMessage = (text: string) => {
    const newMessage: MessageType = {
      id: messages.length + 1,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: false,
    };

    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const agentResponse: MessageType = {
        id: messages.length + 2,
        sender: 'agent',
        text: "I've noted your message. Our team will look into this and get back to you soon.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      };

      setMessages(prev => [...prev, agentResponse]);
    }, 2000);
  };

  const selectedUser = chatList.find(c => c.id === selectedChat);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-[calc(100vh-6rem)] flex flex-col  "
    >
      <h1 className="text-2xl font-bold mb-4">Conversations</h1>

      <div className="flex flex-1 overflow-hidden rounded-xl border border-border">
      
        {/* Sidebar */}
        <div
          className="hidden md:flex flex-col w-80 border-r border-border"
        >
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search conversations"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-800 focus:outline-none text-sm"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {chatList.map(chat => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`flex items-center p-4 cursor-pointer transition-colors ${
                  selectedChat === chat.id
                    ? isDarkMode
                      ? 'bg-gray-800'
                      : 'bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <div className="relative">
                  <img
                    src={chat.photo}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.status === 'active' && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-success border-2 border-white dark:border-gray-900"></div>
                  )}
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <div className="font-medium truncate">{chat.name}</div>
                    {chat.unread > 0 && (
                      <div className="ml-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 truncate mt-1">
                    {chat.lastMessage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="flex flex-col flex-1 overflow-hidden bg-white dark:bg-gray-900">
          
         
          <div className={`flex items-center justify-between p-4 border-b border-border ${
            isDarkMode
              ? ''
              : 'bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50'
          }`}>
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-medium">{selectedUser?.name}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {selectedUser?.status === 'active' ? 'Active now' : 'Offline'}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" icon={<Mail size={18} />} />
              <Button variant="ghost" size="sm" icon={<Phone size={18} />} />
              <Button variant="ghost" size="sm" icon={<Video size={18} />} />
              <Button variant="ghost" size="sm" icon={<MoreVertical size={18} />} />
            </div>
          </div>

        
          <div className={`flex-1 overflow-y-auto p-4 ${
            isDarkMode
              ? 'bg-gray-900'
              : 'bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50'
          }`}>
            {messages.map((message, index) => (
              <Message
                key={message.id}
                message={message}
                isLastMessage={index === messages.length - 1 && message.sender === 'user'}
              />
            ))}
          </div>

          
          <ChatInput  onSendMessage={handleSendMessage}  />
        </div>
      </div>
    </motion.div>
  );
};

export default Chats;
