import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Chats from './pages/Chats';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import { AnimatePresence } from 'framer-motion';
import { usePageContext, PageProvider } from './context/PageContext';

// Main routing component to manage page transitions
const PageContent = () => {
  const { currentPage } = usePageContext();

  return (
    <AnimatePresence mode="wait">
      {currentPage === 'dashboard' && <Dashboard key="dashboard" />}
      {currentPage === 'chats' && <Chats key="chats" />}
      {currentPage === 'notifications' && <Notifications key="notifications" />}
      {currentPage === 'settings' && <Settings key="settings" />}
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <PageProvider>
        <Layout>
          <PageContent />
        </Layout>
      </PageProvider>
    </ThemeProvider>
  );
}

export default App;