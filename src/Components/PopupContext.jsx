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

// Preload popup image immediately
// const POPUP_IMAGE_URL = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/30discount/public';
// if (typeof window !== 'undefined') {
//   const link = document.createElement('link');
//   link.rel = 'preload';
//   link.as = 'image';
//   link.href = POPUP_IMAGE_URL;
//   link.fetchPriority = 'high';
//   document.head.appendChild(link);
// }

export const PopupProvider = ({ children }) => {
  // Initialize synchronously - no delay for first-time visitors
  const [showPopup, setShowPopup] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      const hasVisited = localStorage.getItem(STORAGE_KEY);
      return !hasVisited; // Show immediately if first visit
    } catch {
      return false;
    }
  });

  const closePopup = useCallback(() => {
    setShowPopup(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // localStorage not available
    }
  }, []);

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