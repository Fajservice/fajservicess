// src/components/Button/WhatsappIconButton.jsx
import React from 'react';
const WhatsappIconButton = ({ whatsapp = 'https://api.whatsapp.com/send?phone=+971507464712&text=Hello' }) => {
    return (
        <a href={whatsapp} className="whatsapp-now-btn">
            <img
                className="whatsapp-icon"
                alt="Get A Quote"
            />
        </a>
    );
};

export default WhatsappIconButton;
