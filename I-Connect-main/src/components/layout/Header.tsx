
import React, { useState } from 'react';
import { Bell, User, Menu, Search, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import NotificationPanel from '../notifications/NotificationPanel';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-surface border-b border-border h-16">
      <div className="h-full px-4 flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="mr-2 md:mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Menu size={24} />
          </button>

          <div className="hidden md:flex items-center relative">
            <Search size={18} className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Search size={22} />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">

          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Bell size={22} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <User size={22} />
          </button>

          {/* Dark Mode Toggle Switch */}
          <div className="flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input
            
      type="checkbox"
      className="sr-only peer"
      checked={isDarkMode}
      onChange={toggleTheme}
    />
     <div className="w-11 h-6 bg-black dark:bg-gray-700 rounded-full relative peer-checked:bg-primary transition-colors duration-300">
     <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></span>
    </div>           
     </label>
          </div>
        </div>
      </div>

     
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-4 pb-4 md:hidden overflow-hidden"
          >
            <div className="relative flex items-center">
              <Search size={18} className="absolute left-3 text-gray-400" />
              <input
                type="text"
                autoFocus
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={() => setShowSearch(false)}
                className="absolute right-3 text-gray-400"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notifications */}
      <AnimatePresence>
        {showNotifications && (
          <NotificationPanel onClose={() => setShowNotifications(false)} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
