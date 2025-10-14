import React, { useState } from 'react';
import '../css/coffeemachinelandingpage.css';

const CMBannerCta = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    customerType: 'Commercial',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="banner-cta-form">
      <div className="banner-overlay-form">
        <div className="banner-content-form">
          {/* Left Side - Text Content */}
          <div className="banner-text-section">
            <h1 className="banner-title-form">NATIONWIDE<br />DELIVERY</h1>
            <p className="banner-description-form">
              From coast to coast in the UK.<br />
              Find everything you love,<br />
              All in one place,<br />
              shop by category, shop with ease."
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <div className="banner-form-section">
            <h3 className="form-heading">TELL US WHAT YOU NEED</h3>
            
            <div className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="form-field"
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="form-field"
              />

              <input
                type="tel"
                name="phone"
                placeholder="+123 | 9333999999"
                value={formData.phone}
                onChange={handleChange}
                className="form-field"
              />

              <input
                type="text"
                name="location"
                placeholder="Location*"
                value={formData.location}
                onChange={handleChange}
                className="form-field"
              />

              <div className="customer-type-label-form">Customer Type</div>
              <div className="customer-type-toggle">
                <button
                  type="button"
                  className={`toggle-btn ${formData.customerType === 'Home' ? 'active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, customerType: 'Home' }))}
                >
                  Home
                </button>
                <button
                  type="button"
                  className={`toggle-btn ${formData.customerType === 'Commercial' ? 'active' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, customerType: 'Commercial' }))}
                >
                  Commercial
                </button>
              </div>

              <button onClick={handleSubmit} className="submit-button-form">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMBannerCta;