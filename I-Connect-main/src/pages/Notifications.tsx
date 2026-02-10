import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { CheckCircle2, Bell, X, Filter } from 'lucide-react';
import Button from '../components/ui/Button';

const initialNotifications = [
  {
    id: 1,
    title: 'New message from Jessica',
    description: 'Hey, I wanted to follow up on our last conversation...',
    time: '2 minutes ago',
    type: 'message',
    read: false,
  },
  {
    id: 2,
    title: 'New customer signup',
    description: 'TechCorp Inc. has created a new account',
    time: '30 minutes ago',
    type: 'signup',
    read: false,
  },
  {
    id: 3,
    title: 'Weekly report available',
    description: 'Your weekly analytics report is ready to view',
    time: '2 hours ago',
    type: 'report',
    read: false,
  },

  {
    id: 4,
    title: 'System update complete',
    description: 'The latest system update has been installed successfully',
    time: 'Yesterday',
    type: 'system',
    read: true,
  },
  {
    id: 5,
    title: 'Data export completed',
    description: 'Your requested data export is ready for download',
    time: 'Yesterday',
    type: 'export',
    read: true,
  },
  {
    id: 6,
    title: 'New team member added',
    description: 'Sarah Johnson has joined your team',
    time: '2 days ago',
    type: 'team',
    read: true,
  },
  {
    id: 7,
    title: 'Subscription renewal',
    description: 'Your subscription will renew in 7 days',
    time: '3 days ago',
    type: 'billing',
    read: true,
  },
];

const filters = ['All', 'Unread', 'Messages', 'System', 'Reports'];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  };
  
  const clearNotification = (id: number) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };
  
  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };
  
  const filteredNotifications = notifications.filter((notification) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Unread') return !notification.read;
    return notification.type.toLowerCase().includes(activeFilter.toLowerCase());
  });
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your notifications and preferences
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-2">
          <Button 
            variant="outline"
            size="sm"
            icon={<Filter size={16} />}
          >
            Filter
          </Button>
          <Button 
            variant="ghost"
            size="sm"
            icon={<CheckCircle2 size={16} />}
            onClick={markAllAsRead}
          >
            Mark all as read
          </Button>
        </div>
      </div>
      
      
      <Card className="p-2 flex overflow-x-auto hide-scrollbar">
        <div className="flex space-x-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </Card>
      
     
      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <Card className="p-12 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              <Bell size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium">No notifications</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center mt-2">
              You don't have any {activeFilter.toLowerCase() !== 'all' ? activeFilter.toLowerCase() : ''} notifications at the moment.
            </p>
          </Card>
        ) : (
          filteredNotifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card 
                className={`flex cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 ${
                  !notification.read ? 'border-l-4 border-l-primary' : ''
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex-1 p-4">
                  <div className="flex justify-between">
                    <div className={`font-medium ${!notification.read ? 'text-primary' : ''}`}>
                      {notification.title}
                    </div>
                    <div className="text-xs text-gray-500 ml-4">
                      {notification.time}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {notification.description}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    clearNotification(notification.id);
                  }}
                  className="px-4 flex items-center text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  <X size={18} />
                </button>
              </Card>
            </motion.div>
          ))
        )}
      </div>
      
      {filteredNotifications.length > 0 && (
        <div className="flex justify-center">
          <Button variant="outline">Load more</Button>
        </div>
      )}
    </motion.div>
  );
};

export default Notifications;
