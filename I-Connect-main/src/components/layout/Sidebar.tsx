import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Bell, 
  Settings,
  LogOut
} from 'lucide-react';
import { usePageContext } from '../../context/PageContext';
import { useTheme } from '../../context/ThemeContext';

interface SidebarProps {
  sidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen }) => {
  const { currentPage, setCurrentPage } = usePageContext();
  const { isDarkMode } = useTheme();
  
  const sidebarVariants = {
    expanded: { width: '240px' },
    collapsed: { width: '80px' },
  };
  
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={24} /> },
    { id: 'chats', label: 'Chats', icon: <MessageSquare size={24} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={24} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={24} /> },
  ];
  
  return (
    <motion.div 
      className="hidden md:flex h-screen bg-surface border-r border-border flex-col z-30"
      variants={sidebarVariants}
      initial={false}
      animate={sidebarOpen ? 'expanded' : 'collapsed'}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      { /* Logo */ }
      <div className="flex items-center justify-center h-16 border-b border-border">
        <motion.div 
          initial={false}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
            I
          </div>
          {sidebarOpen && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-3 font-semibold text-lg"
            >
              CONNECT
            </motion.span>
          )}
        </motion.div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex items-center w-full rounded-lg px-3 py-2.5 text-left transition-colors duration-200 ${
              currentPage === item.id 
                ? 'bg-primary/10 text-primary' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-xl">{item.icon}</span>
            {sidebarOpen && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="ml-3 font-medium"
              >
                {item.label}
              </motion.span>
            )}
          </motion.button>
        ))}
      </nav>
      
      {/* User profile */}
      <div className="border-t border-border p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700">
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="User profile"
              className="w-full h-full rounded-full object-cover" 
            />
          </div>
          {sidebarOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-3"
            >
              <div className="font-medium text-sm">ARYAN </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Admin</div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;