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
        src={`${import.meta.env.BASE_URL}img/icons/whatsapp-new-icon.webp`}
        alt="Get A Quote"
      />
    </a>
  );
};

export default WhatsappIconButton;
