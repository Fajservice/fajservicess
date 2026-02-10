// import { usePopup } from './PopupContext';
// import './WelcomePopup.css';
// import { useEffect } from 'react';

// const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
// const POPUP_IMAGE_URL = `${CDN}/30discount/public`;

// if (typeof window !== 'undefined') {
//   const link = document.createElement('link');
//   link.rel = 'preload';
//   link.as = 'image';
//   link.href = POPUP_IMAGE_URL;
//   link.fetchPriority = 'high';
//   document.head.appendChild(link);
// }

// const WelcomePopup = () => {
//   const { showPopup, closePopup } = usePopup();

//   useEffect(() => {
//     const img = new Image();
//     img.src = POPUP_IMAGE_URL;
//   }, []);

//   const handleGetQuote = () => {
//     closePopup();
//     window.location.href = '/ac-annual-maintenance-contract/';
//   };

//   if (!showPopup) return null;
  
//   return (
//     <div className="popup-overlay">
//       <div className="popup-content" style={{ maxWidth: '330px' }}>
//         <button 
//           className="popup-close"
//           onClick={closePopup} 
//           aria-label="Close"
//         >
//           ✕
//         </button>
//         <img 
//           src={POPUP_IMAGE_URL}
//           alt="Welcome - 30% Discount Offer" 
//           width={330}
//           height={330}
//           loading="eager"
//           fetchpriority="high"
//           decoding="sync"
//         />
//         <button 
//           className="btn-get-quote"
//           onClick={handleGetQuote}
//         >
//           Get a Quote
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WelcomePopup;