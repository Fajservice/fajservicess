import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const PopupContext = createContext(null);

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};

const STORAGE_KEY = 'hasVisited';
const POPUP_DELAY = 1000;

export const PopupProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check localStorage only once on mount
    try {
      const hasVisited = localStorage.getItem(STORAGE_KEY);
      if (hasVisited) return;
      
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, POPUP_DELAY);
      
      return () => clearTimeout(timer);
    } catch {
      // localStorage not available (SSR or private browsing)
    }
  }, []);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // localStorage not available
    }
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    showPopup,
    closePopup
  }), [showPopup, closePopup]);

  return (
    <PopupContext.Provider value={value}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContext;