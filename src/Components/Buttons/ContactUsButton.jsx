// src/components/Button/ContactUsButton.jsx
import React from 'react';

const ContactUsButton = ({ phone = 'tel:+971507464712' }) => {
    return (
        <a href={phone} className="contact-now-btn">
            <img
                className="contact-icon"
                alt="Contact Now"
            />
        </a>
    );
};

export default ContactUsButton;
