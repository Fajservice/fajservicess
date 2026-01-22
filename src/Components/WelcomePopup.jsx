import { usePopup } from './PopupContext';
import './WelcomePopup.css';
import { useEffect } from 'react';

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const POPUP_IMAGE_URL = `${CDN}/30discount/public`;

// Preload image immediately when module loads
if (typeof window !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = POPUP_IMAGE_URL;
  link.fetchPriority = 'high';
  document.head.appendChild(link);
}

const WelcomePopup = () => {
  const { showPopup, closePopup } = usePopup();

  // Preload on mount as backup
  useEffect(() => {
    const img = new Image();
    img.src = POPUP_IMAGE_URL;
  }, []);

  const handleGetQuote = () => {
    closePopup();
    window.location.href = '/ac-annual-maintenance-contract/';
  };

  if (!showPopup) return null;
  
  return (
    <div className="popup-overlay d-flex justify-content-center align-items-center">
      <div 
        className="popup-content bg-white p-4 rounded position-relative" 
        style={{ maxWidth: '330px', width: '100%', background: 'unset', boxShadow: 'unset' }}
      >
        <button 
          className="btn-close position-absolute top-0 end-0 m-2" 
          onClick={closePopup} 
          aria-label="Close"
        >
          x
        </button>
        <img 
          src={POPUP_IMAGE_URL}
          alt="Welcome - 30% Discount Offer" 
          className="img-fluid rounded"
          width={400}
          height={400}
          loading="eager"
          fetchpriority="high"
          decoding="sync"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <button 
          className="cs_btn cs_style_1"
          onClick={handleGetQuote}
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;