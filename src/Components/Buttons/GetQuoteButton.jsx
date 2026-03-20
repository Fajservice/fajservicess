import { Link } from 'react-router-dom';

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const GetQuoteButton = ({ whatsapp = 'https://api.whatsapp.com/send?phone=+971507464712&text=Hello' }) => {
  return (
    <Link to={whatsapp} className="call-now-btn">
      <img
        className="call-icon"
        src={`${CDN}/icon/whatsapp-now/public`}
        alt="Get Quote Button"
      />
    </Link>
  );
};

export default GetQuoteButton;