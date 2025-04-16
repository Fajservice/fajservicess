// src/components/Button/WhatsappIconButton.jsx
// import React from 'react';
import React, { useState } from 'react';

const WhatsappIconButton = ({ whatsapp = 'https://api.whatsapp.com/send?phone=+971507464712&text=Hello' }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <a href={whatsapp} className="whatsapp-now-btn"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img
                className="whatsapp-icon"
                src={`${import.meta.env.BASE_URL}img/icons/${hovered ? 'whatsapp-icon.png' : 'whatsapp-icon.png'}`}
                alt="Get A Quote"
            />
        </a>
    );
};

export default WhatsappIconButton;
