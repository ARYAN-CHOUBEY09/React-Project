import React, { createContext, useContext, useState } from 'react';

type PageType = 'dashboard' | 'chats' | 'notifications' | 'settings';

interface PageContextType {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const usePageContext = (): PageContextType => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext must be used within a PageProvider');
  }
  return context;
};

interface PageProviderProps {
  children: React.ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};