import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';
import MobileNav from './MobileNav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
     
      <Sidebar sidebarOpen={sidebarOpen} />

      
      <AnimatePresence>
        {sidebarOpen && <MobileNav onClose={() => setSidebarOpen(false)} />}
      </AnimatePresence>
      
     
      <div className="flex flex-col w-full overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto px-4 md:px-6 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
