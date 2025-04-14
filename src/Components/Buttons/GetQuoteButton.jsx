// src/components/Button/GetQuoteButton.jsx
import React from 'react';
const GetQuoteButton = ({ whatsapp = 'https://api.whatsapp.com/send?phone=+971507464712&text=Hello' }) => {
    return (
        <a href={whatsapp} className="quote-now-btn">
            <img
                className="quote-icon"
                alt="Get A Quote"
            />
        </a>
    );
};

export default GetQuoteButton;
