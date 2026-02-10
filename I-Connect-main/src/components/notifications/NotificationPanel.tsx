import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import Button from '../ui/Button';

interface NotificationPanelProps {
  onClose: () => void;
}

const initialNotifications = [
  {
    id: 1,
    title: 'New message from Jessica',
    message: 'Hey, I wanted to follow up on our last conversation...',
    time: '2 minutes ago',
    unread: true,
  },
  {
    id: 2,
    title: 'New customer signup',
    message: 'TechCorp Inc. has created a new account',
    time: '30 minutes ago',
    unread: true,
  },
  {
    id: 3,
    title: 'Weekly report available',
    message: 'Your weekly analytics report is ready to view',
    time: '2 hours ago',
    unread: false,
  },
  {
    id: 4,
    title: 'System update complete',
    message: 'The latest system update has been installed successfully',
    time: 'Yesterday',
    unread: false,
  },
];

const NotificationPanel: React.FC<NotificationPanelProps> = ({ onClose }) => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, unread: false }))
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-16 right-0 w-full md:w-96 bg-surface border border-border shadow-lg rounded-b-lg md:rounded-lg z-30 max-h-[calc(100vh-4rem)] overflow-y-auto"
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="font-semibold">Notifications</h3>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            icon={<Check size={16} />}
            onClick={markAllAsRead}
          >
            Mark all as read
          </Button>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="divide-y divide-border">
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer ${
              notification.unread ? 'bg-primary/5' : ''
            }`}
          >
            <div className="flex items-start">
              {notification.unread && (
                <div className="h-2 w-2 mt-1.5 mr-2 rounded-full bg-primary flex-shrink-0" />
              )}
              <div className={`${notification.unread ? '' : 'ml-4'}`}>
                <div className="font-medium text-sm">{notification.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {notification.message}
                </div>
                <div className="text-xs text-gray-500 mt-1">{notification.time}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-3 border-t border-border">
        <Button variant="outline" size="sm" fullWidth>
          View all notifications
        </Button>
      </div>
    </motion.div>
  );
};

export default NotificationPanel;
