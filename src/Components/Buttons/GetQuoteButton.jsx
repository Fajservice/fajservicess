import { Link } from 'react-router-dom';

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const GetQuoteButton = ({ to = '/contact-us/' }) => {
  return (
    <Link to={to} className="call-now-btn">
      <img
        className="call-icon"
        src={`${CDN}/icon/whatsapp-new-icon/public`}
        alt="Get Quote Button"
      />
    </Link>
  );
};

export default GetQuoteButton;