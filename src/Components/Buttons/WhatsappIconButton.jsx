const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';


const WhatsappIconButton = ({
  whatsapp = 'https://api.whatsapp.com/send?phone=+971507464712&text=Hello'
}) => {
  return (
    <a
      href={whatsapp}
      className="whatsapp-now-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="whatsapp-icon"
        src={`${CDN}/icon/whatsapp-now/public`}
        alt="Get A Quote"
      />
    </a>
  );
};

export default WhatsappIconButton;
