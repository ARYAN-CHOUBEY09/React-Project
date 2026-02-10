import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Bell, 
  Settings,
  X
} from 'lucide-react';
import { usePageContext } from '../../context/PageContext';

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  const { currentPage, setCurrentPage } = usePageContext();
  
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    onClose();
  };
  
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={22} /> },
    { id: 'chats', label: 'Chats', icon: <MessageSquare size={22} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={22} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={22} /> },
  ];
  
  return (
    <>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black md:hidden z-40"
        onClick={onClose}
      />
      
     
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed inset-y-0 left-0 w-64 bg-surface border-r border-border md:hidden z-50"
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
              I
            </div>
            <span className="ml-3 font-semibold">InConnect</span>
          </div>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <nav className="px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`flex items-center w-full rounded-lg px-3 py-2.5 text-left transition-colors duration-200 ${
                currentPage === item.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span>{item.icon}</span>
              <span className="ml-3 font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-0 w-full border-t border-border p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="User profile"
                className="w-full h-full rounded-full object-cover" 
              />
            </div>
            <div className="ml-3">
              <div className="font-medium text-sm">Aryan </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Admin</div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileNav;