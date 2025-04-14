// src/components/Button/CallNowButton.jsx
import React from 'react';
// import './CallNowButton.css'; // Import the CSS file

const CallNowButton = ({ phone = 'tel:+971507464712' }) => {
    return (
        <a href={phone} className="call-now-btn">
            <img
                className="call-icon"
                alt="Call Now"
            />
        </a>
    );
};

export default CallNowButton;
