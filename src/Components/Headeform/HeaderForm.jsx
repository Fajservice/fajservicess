import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const HeaderForm = () => {
  const recaptchaRef = useRef(null);
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Alternative: Add a fallback submission method
  const handleDirectSubmit = () => {
    console.log('Direct submission fallback'); // Debug log
    
    const data = new FormData();
    data.append('Name', formData.name);
    data.append('Email', formData.email);
    data.append('Phone', formData.phone);
    data.append('Message', formData.message);
    data.append('_subject', 'Inquiry & Fajservices');
    data.append('_captcha', 'false');
    data.append('_template', 'table');
    data.append('_cc', 'faisaljuma.techservices@gmail.com'); // Change to your Gmail
    data.append('_from_name', 'Inquire');
    data.append('page_url', window.location.href);

    // Use fetch with proper promise handling
    fetch('https://formsubmit.co/info@fajservices.ae', { // Change to your Gmail
      method: 'POST',
      body: data,
      mode: 'no-cors'
    })
    .then(() => {
      console.log('Direct form submitted successfully');
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Form submitted successfully! Thank you for your message." }
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Direct submission error:', error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "There was a problem sending your message. Please try again later." }
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    console.log('Form submission started'); // Debug log

    // Add timeout for reCAPTCHA
    const recaptchaTimeout = setTimeout(() => {
      console.log('reCAPTCHA timeout, proceeding with direct submission');
      handleDirectSubmit();
    }, 3000); // 3 second timeout

    // Trigger invisible reCAPTCHA challenge
    if (recaptchaRef.current) {
      console.log('Executing reCAPTCHA'); // Debug log
      try {
        const executePromise = recaptchaRef.current.execute();
        if (executePromise && executePromise.catch) {
          executePromise.catch((error) => {
            console.error('reCAPTCHA execution promise error:', error);
            clearTimeout(recaptchaTimeout);
            handleDirectSubmit();
          });
        }
      } catch (error) {
        console.error('reCAPTCHA execution error:', error);
        clearTimeout(recaptchaTimeout);
        handleDirectSubmit();
      }
    } else {
      console.error('reCAPTCHA ref not found');
      clearTimeout(recaptchaTimeout);
      handleDirectSubmit();
    }
  };

  const onReCAPTCHAChange = (token) => {
    console.log('reCAPTCHA token received:', token ? 'Valid' : 'Invalid/Null'); // Debug log

    // Clear any existing timeout since reCAPTCHA responded
    if (window.recaptchaTimeout) {
      clearTimeout(window.recaptchaTimeout);
    }

    if (!token || token === null) {
      console.log('No reCAPTCHA token or null token, proceeding with direct submission');
      handleDirectSubmit();
      return;
    }

    const data = new FormData();
    data.append('Name', formData.name);
    data.append('Email', formData.email);
    data.append('Phone', formData.phone);
    data.append('Message', formData.message);
    data.append('_subject', 'Inquiry & Fajservices');
    data.append('_captcha', 'false');
    data.append('_template', 'table');
    data.append('_cc', 'faisaljuma.techservices@gmail.com'); // Change to your Gmail
    data.append('_from_name', 'Inquire');
    data.append('page_url', window.location.href);
    data.append('g-recaptcha-response', token); // Add reCAPTCHA token

    console.log('Submitting form data to FormSubmit with reCAPTCHA'); // Debug log

    // Use fetch with proper promise handling
    fetch('https://formsubmit.co/info@fajservices.ae', { // Change to your Gmail
      method: 'POST',
      body: data,
      mode: 'no-cors'
    })
    .then(() => {
      console.log('Form submitted successfully with reCAPTCHA');

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Form submitted successfully! Thank you for your message." }
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      if (recaptchaRef.current) {
        try {
          recaptchaRef.current.reset();
        } catch (resetError) {
          console.warn('reCAPTCHA reset error:', resetError);
        }
      }
    })
    .catch((error) => {
      console.error('Submission error:', error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "There was a problem sending your message. Please try again later." }
      });
    });
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
      
      <div className="d-block d-md-none p-3 p-sm-4 rounded" style={{ backgroundColor: "rgb(242 242 242)" }}>
        <form onSubmit={handleSubmit}>
          <div className="row align-items-center">
            <div className="col-12 col-md-6" style={{marginTop:"0.1rem"}}>
              <div className="mb-2">
                <input 
                  type="text" 
                  name="name" 
                  className="form-control" 
                  id="name" 
                  placeholder="Enter your name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="mb-2">
                <input 
                  type="text" 
                  name="phone" 
                  className="form-control" 
                  id="phone" 
                  placeholder="Enter your phone number" 
                  value={formData.phone} 
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-2">
                <input 
                  type="email" 
                  name="email" 
                  className="form-control" 
                  id="email" 
                  placeholder="Enter your email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="mb-2">
                <textarea 
                  name="message" 
                  className="form-control h-100" 
                  id="message" 
                  rows="5" 
                  placeholder="Type your message here..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                />
              </div>
              
              {/* Invisible reCAPTCHA */}
              <div className="col-12 d-flex justify-content-center mb-3">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lc3iU4rAAAAAA0jw06XlEnCQsXoc_vxT8piZLLX"
                  size="invisible"
                  badge="bottomleft"
                  onChange={onReCAPTCHAChange}
                />
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <button 
                type="submit"
                className="cs_btn cs_style_1 rounded"
                style={{ width: '150px', height: '40px' }}
                disabled={status.submitting}
              >
                <span>{status.submitting ? 'Submitting...' : 'Submit'}</span>
                {!status.submitting && <i className="bi bi-arrow-right"></i>}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default HeaderForm