import React, { useState } from 'react';

const CallNowButton = ({ phone = 'tel:+97143300002' }) => {
        const [hovered, setHovered] = useState(false);
    
    return (
        <a href={phone} className="call-now-btn"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}> 
            <img
                className="call-icon"
                src={`${import.meta.env.BASE_URL}img/icons/${hovered ? 'Call-Icon-hover.png' : 'Call-Icon.png'}`}
                alt="Call Now Button"
            />
        </a>
    );
};

export default CallNowButton;
