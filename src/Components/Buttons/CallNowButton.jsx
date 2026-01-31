const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const CallNowButton = ({ phone = 'tel:+971507464712' }) => {
  return (
    <a href={phone} className="call-now-btn">
      <img
        className="call-icon"
        src={`${CDN}/icon/call-now/public`}
        alt="Call Now Button"
      />
    </a>
  );
};

export default CallNowButton;
