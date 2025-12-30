
import  { useState } from 'react';

const GetQuoteButton = ({ whatsapp = 'https://api.whatsapp.com/send?phone=+971507464712&text=Hello' }) => {
    return (
        <a href={whatsapp} className="call-now-btn">
      <img
        className="call-icon"
        src={`${import.meta.env.BASE_URL}img/icons/quote-icon.webp`}
        alt="Call Now Button"
      />
    </a>
    );
};

export default GetQuoteButton;
