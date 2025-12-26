
import React, { createContext, useContext, useState, useEffect } from 'react';

const PopupContext = createContext();

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};

export const PopupProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 1000); // 1 second delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    localStorage.setItem('hasVisited', 'true');
  };

  const value = {
    showPopup,
    closePopup
  };
  return (
    <PopupContext.Provider value={value}>
      {children}
    </PopupContext.Provider>
  )
}

export default PopupContext
