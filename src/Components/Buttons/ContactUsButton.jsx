import React, { useState } from 'react';

const ContactUsButton = ({ phone = 'tel:+971507464712' }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={phone}
            className="contact-now-btn"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img
                className="contact-icon"
                src={`${import.meta.env.BASE_URL}img/icons/${hovered ? 'contact-hover.png' : 'contact.png'}`}
                alt="Contact Now"
            />
        </a>
    );
};

export default ContactUsButton;
