import React, { useState } from 'react';

const Form1 = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    // Prepare form data with all FormSubmit configuration options
    const data = new FormData();
    data.append('Name', formData.name);
    data.append('Email', formData.email);
    data.append('Phone', formData.phone);
    data.append('Message', formData.message);
    data.append('_subject', 'Inquiry & Fajservices');
    data.append('_captcha', 'false');
    data.append('_template', 'table');
    data.append('_cc', 'info@fajservices.ae');
    // Add "from" name to show "Inquire" instead of "FormSubmit"
    data.append('_from_name', 'Inquire');
    // Add page URL to know which page the form was submitted from
    data.append('page_url', window.location.href);
    
    try {
      // Using fetch, but with the proper content type and mode
      const response = await fetch('https://formsubmit.co/faisaljuma01@gmail.com', {
        method: 'POST',
        body: data,
        mode: 'no-cors' // This is the key to preventing CORS errors
      });
      
      // Since we're using no-cors, we can't actually check response.ok
      // Instead, we'll assume success and show the message
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Form submitted successfully! Thank you for your message." }
      });
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "There was a problem sending your message. Please try again later." }
      });
    }
  };

  return (
    <>
      {status.info.error && (
        <div className="alert alert-danger mb-4" role="alert">
          {status.info.msg}
        </div>
      )}
      
      {status.submitted && !status.info.error && (
        <div className="alert alert-success mb-4" role="alert">
          {status.info.msg}
        </div>
      )}
      
      <form className="row cs_row_gap_30 cs_gap_y_30" id="cs_form" onSubmit={handleSubmit}>
        <div className="col-sm-6">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="cs_form_field cs_radius_5" 
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-sm-6">
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="cs_form_field cs_radius_5" 
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-sm-6">
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            className="cs_form_field cs_radius_5" 
            pattern="[0-9]*" 
            inputMode="numeric"
            value={formData.phone}
            onChange={handleChange}
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            required
          />
        </div>
        <div className="col-sm-6 position-relative">
          <select 
            className="form-select cs_form_field cs_radius_5" 
            name="service" 
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Choose an option</option>
            <option value="Air Conditioning Maintenance Service">Air Conditioning Maintenance Service</option>
            <option value="Home Appliances Repair Service">Home Appliances Repair Service</option>
            <option value="Baumatic Appliances Repair Service">Baumatic Appliances Repair Service</option>
            <option value="Commercial Appliances Service">Commercial Appliances Service</option>
            <option value="Freezer Maintenance Service">Freezer Maintenance Service</option>
            <option value="Food Chiller Service">Food Chiller Service</option>
            <option value="AMC Service">AMC Service</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-12">
          <textarea 
            name="message" 
            rows="6" 
            placeholder="Message" 
            className="cs_form_field" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="col-12">
          <button 
            type="submit" 
            className="cs_btn cs_style_1"
            disabled={status.submitting}
          >
            <span>{status.submitting ? 'Submitting...' : 'Submit'}</span>
            {!status.submitting && <i className="bi bi-arrow-right"></i>}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form1;