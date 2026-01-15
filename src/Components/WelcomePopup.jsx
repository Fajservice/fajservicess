import { usePopup } from './PopupContext';
import './WelcomePopup.css';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const WelcomePopup = () => {
  const { showPopup, closePopup } = usePopup();

  if (!showPopup) return null;
  return (
    <div className="popup-overlay d-flex justify-content-center align-items-center">
  <div className="popup-content bg-white p-4 rounded position-relative" style={{ maxWidth: '430px', width: '100%', background: 'unset !important', boxShadow: 'unset !important' }}>
    <button className="btn-close position-absolute top-0 end-0 m-2" onClick={closePopup} aria-label="Close">x</button>
     <img src={getImageSrc('30discount')} alt="Welcome" className="img-fluid rounded" />
  </div>
</div>

  )
}

export default WelcomePopup
