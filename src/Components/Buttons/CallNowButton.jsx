import React, { useState } from 'react';

const CallNowButton = ({ phone = 'tel:+971507464712' }) => {
  return (
    <a href={phone} className="call-now-btn">
      <img
        className="call-icon"
        src={`${import.meta.env.BASE_URL}img/icons/Call-Icon.webp`}
        alt="Call Now Button"
      />
    </a>
  );
};

export default CallNowButton;
