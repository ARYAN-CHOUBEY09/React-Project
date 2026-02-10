import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import Toggle from '../components/ui/Toggle';
import Button from '../components/ui/Button';
import { 
  Moon, 
  Bell, 
  User, 
  Key, 
  Zap, 
  Clock, 
  Shield, 
  Layout, 
  Languages, 
  Save
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    marketing: false,
    updates: true,
  });
  
  const [activeTab, setActiveTab] = useState('appearance');
  
  const tabs = [
    { id: 'appearance', label: 'Appearance', icon: <Layout size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    
   
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Manage your account preferences and settings
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
       
        <Card className="p-0 lg:col-span-1 overflow-hidden h-24">
          <nav className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-3 px-4 w-full text-left border-b lg:border-b-0 lg:border-l-4 transition-colors ${
                  activeTab === tab.id
                    ? 'lg:border-l-primary bg-gray-100 dark:bg-gray-800 lg:bg-transparent'
                    : 'border-transparent'
                }`}
              >
                <span className={`${activeTab === tab.id ? 'text-primary' : ''}`}>
                  {tab.icon}
                </span>
                <span className={`ml-3 whitespace-nowrap text-sm font-medium ${
                  activeTab === tab.id ? 'text-primary' : ''
                }`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </nav>
        </Card>
        
        
        <Card className="lg:col-span-3 p-8">
          {activeTab === 'appearance' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-lg font-medium mb-6">Appearance Settings</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</h3>
                  <Toggle
                    enabled={isDarkMode}
                    onChange={toggleTheme}
                    label="Dark Mode"
                    description="Use dark theme across the application"
                  />
                </div>
                
                <div className="border-t border-border pt-6 space-y-4">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Language</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Display Language</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Choose your preferred language</div>
                    </div>
                    <select className="bg-surface border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>English (US)</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Spanish</option>
                      <option>Japanese</option>
                    </select>
                  </div>
                </div>
                
                <div className="border-t border-border pt-6 space-y-4">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Time & Date</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Time Format</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Choose your preferred time format</div>
                    </div>
                    <select className="bg-surface border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>12-hour (AM/PM)</option>
                      <option>24-hour</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Time Zone</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Set your local time zone</div>
                    </div>
                    <select className="bg-surface border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>UTC-08:00 - Pacific Time</option>
                      <option>UTC-05:00 - Eastern Time</option>
                      <option>UTC+00:00 - GMT</option>
                      <option>UTC+01:00 - Central European Time</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'notifications' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-lg font-medium mb-6">Notification Settings</h2>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Notifications</h3>
                  <Toggle
                    enabled={notifications.email}
                    onChange={() => setNotifications({ ...notifications, email: !notifications.email })}
                    label="Email Notifications"
                    description="Receive notifications via email"
                  />
                </div>
                
                <div className="border-t border-border pt-6 space-y-4">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Push Notifications</h3>
                  <Toggle
                    enabled={notifications.push}
                    onChange={() => setNotifications({ ...notifications, push: !notifications.push })}
                    label="Push Notifications"
                    description="Receive notifications in-app"
                  />
                </div>
                
                <div className="border-t border-border pt-6 space-y-4">
                  <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Other Notifications</h3>
                  <Toggle
                    enabled={notifications.marketing}
                    onChange={() => setNotifications({ ...notifications, marketing: !notifications.marketing })}
                    label="Marketing Communications"
                    description="Receive updates about new features and offers"
                  />
                  <Toggle
                    enabled={notifications.updates}
                    onChange={() => setNotifications({ ...notifications, updates: !notifications.updates })}
                    label="System Updates"
                    description="Receive notifications about system updates and maintenance"
                  />
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button 
                  variant="primary"
                  icon={<Save size={16} />}
                >
                  Save Changes
                </Button>
              </div>
            </motion.div>
          )}
          
         
        </Card>
      </div>
    </motion.div>
  );
};

export default Settings;