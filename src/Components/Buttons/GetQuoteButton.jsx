const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const GetQuoteButton = ({ whatsapp = 'https://api.whatsapp.com/send?phone=+971507464712&text=Hello' }) => {
  return (
    <a href={whatsapp} className="call-now-btn" target="_blank" rel="noopener noreferrer">
      <img
        className="call-icon"
        src={`${CDN}/icon/whatsapp-now/public`}
        alt="Get Quote Button"
        width="209"
        height="63"
        loading="lazy"
        decoding="async"
      />
    </a>
  );
};

export default GetQuoteButton;
