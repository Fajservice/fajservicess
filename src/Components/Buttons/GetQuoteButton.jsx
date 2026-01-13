
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';


const GetQuoteButton = ({ whatsapp = 'https://api.whatsapp.com/send?phone=+971507464712&text=Hello' }) => {
    return (
        <a href={whatsapp} className="call-now-btn">
      <img
        className="call-icon"
        src={`${CDN}/icon/whatsapp-new-icon/public`}
        alt="Call Now Button"
      />
    </a>
    );
};

export default GetQuoteButton;
