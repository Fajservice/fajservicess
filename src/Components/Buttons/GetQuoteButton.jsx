// src/components/Button/GetQuoteButton.jsx
// import React from 'react';
import React, { useState } from 'react';

const GetQuoteButton = ({ whatsapp = 'https://api.whatsapp.com/send?phone=+971507464712&text=Hello' }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <a href={whatsapp} className="quote-now-btn"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img
                className="quote-icon"
                src={`${import.meta.env.BASE_URL}img/icons/${hovered ? 'quote-icon-hover.png' : 'quote-icon.png'}`}
                alt="Get A Quote"
            />
        </a>
    );
};

export default GetQuoteButton;
