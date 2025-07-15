import { useEffect, useRef, useCallback } from 'react';
import './AIHandsetWidget.css';
import aiicon from '/img/icons/aiicon.png';

const AIHandsetWidget = () => {
  const popupRef = useRef(null);
  const iconRef = useRef(null);
  const intervalRef = useRef(null);

  const handleAnimation = useCallback(() => {
    if (popupRef.current && iconRef.current) {
      popupRef.current.classList.add('floatUp', 'show');
      iconRef.current.classList.add('blinking-icon');

      setTimeout(() => {
        popupRef.current.classList.remove('floatUp', 'show');
        iconRef.current.classList.remove('blinking-icon');
      }, 3000);
    }
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(handleAnimation, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [handleAnimation]);

  const handleClick = useCallback(() => {
    window.open('https://smartfaj.vercel.app/', '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div 
      id="ai-handset-widget"
      className="ai-widget-container"
      onClick={handleClick}
      role="button"
      aria-label="AI Help Widget"
      tabIndex={0}
    >
      <div
        ref={popupRef}
        id="ai-popup"
        className="ai-popup"
        aria-hidden="true"
      >
        Need Help? Let&apos;s Talk!
      </div>

      <div className="ai-icon-container">
        <div className="ai-icon-wrapper">
          <img
            ref={iconRef}
            src={aiicon}
            alt="AI Assistant"
            className="ai-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default AIHandsetWidget;