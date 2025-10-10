import React, { useState } from 'react';
import '../css/coffeemachinelandingpage.css';

const CMQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    customerType: 'Business',
    businessName: '',
    phoneNumber: '',
    postcode: '',
    machineMake: '',
    machineModel: '',
    message: '',
    agreedToPolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="quote-form-container">
      <div className="quote-header">
        <h2 className="quote-title">Get Your Free Quote Today!</h2>
        <p className="quote-subtitle">Ready to upgrade your coffee experience?</p>
        <p className="quote-subtitle">Contact us today for a no-obligation quote.</p>
      </div>

      <div className="form-wrapper">
        <h3 className="form-title">TELL US WHAT YOU NEED</h3>
        
        <form onSubmit={handleSubmit} className="quote-form">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />

          <div className="customer-type-label">Customer Type</div>
          <div className="customer-type-buttons">
            <button
              type="button"
              className={`type-btn ${formData.customerType === 'Business' ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, customerType: 'Business' }))}
            >
              Business
            </button>
            <button
              type="button"
              className={`type-btn ${formData.customerType === 'Home' ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, customerType: 'Home' }))}
            >
              Home
            </button>
          </div>

          <input
            type="text"
            name="businessName"
            placeholder="Business Name*"
            value={formData.businessName}
            onChange={handleChange}
            className="form-input"
          />

          <div className="form-row">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number*"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-input half-width"
              required
            />
            <input
              type="text"
              name="postcode"
              placeholder="Postcode*"
              value={formData.postcode}
              onChange={handleChange}
              className="form-input half-width"
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="machineMake"
              placeholder="Machine Make*"
              value={formData.machineMake}
              onChange={handleChange}
              className="form-input half-width"
            />
            <input
              type="text"
              name="machineModel"
              placeholder="Machine Model*"
              value={formData.machineModel}
              onChange={handleChange}
              className="form-input half-width"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            rows="4"
          />

          <button type="submit" className="submit-btn">
            SEND YOUR MESSAGE
          </button>

          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              name="agreedToPolicy"
              id="agreedToPolicy"
              checked={formData.agreedToPolicy}
              onChange={handleChange}
              className="form-checkbox"
            />
            <label htmlFor="agreedToPolicy" className="checkbox-label">
              I consent to be contacted by e-mail and telephone about future news and offers. 
              By sending us your details you agree to our{' '}
              <a href="/privacy-policy" className="privacy-link">privacy policy</a>.
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CMQuoteForm;