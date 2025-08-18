import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const BookingFormModal = ({ isOpen, onClose }) => {
  const recaptchaRef = useRef(null);

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    postcode: '',
    service: 'Air Conditioning Maintenance Service',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Alternative: Add a fallback submission method
  const handleDirectSubmit = () => {
    console.log('Direct submission fallback'); // Debug log
    
    const data = new FormData();
    data.append('Name', formData.name);
    data.append('Phone', formData.contactNumber);
    data.append('Email', formData.email);
    data.append('Postcode', formData.postcode);
    data.append('Service', formData.service);
    data.append('Details', formData.details);
    data.append('_subject', 'Booking Request');
    data.append('_captcha', 'false');
    data.append('_template', 'table');
    data.append('_cc', 'faisaljuma.techservices@gmail.com'); // Change to your Gmail
    data.append('_from_name', 'Booking Form');
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
        info: { error: false, msg: "Booking request submitted successfully!" }
      });

      setFormData({
        name: '',
        contactNumber: '',
        email: '',
        postcode: '',
        service: 'Air Conditioning Maintenance Service',
        details: ''
      });
    })
    .catch((error) => {
      console.error('Direct submission error:', error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "There was a problem. Please try again later." }
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(prev => ({ ...prev, submitting: true }));

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
    data.append('Phone', formData.contactNumber);
    data.append('Email', formData.email);
    data.append('Postcode', formData.postcode);
    data.append('Service', formData.service);
    data.append('Details', formData.details);
    data.append('_subject', 'Booking Request');
    data.append('_captcha', 'false');
    data.append('_template', 'table');
    data.append('_cc', 'faisaljuma.techservices@gmail.com'); // Change to your Gmail
    data.append('_from_name', 'Booking Form');
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
        info: { error: false, msg: "Booking request submitted successfully!" }
      });

      setFormData({
        name: '',
        contactNumber: '',
        email: '',
        postcode: '',
        service: 'Air Conditioning Maintenance Service',
        details: ''
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
        info: { error: true, msg: "There was a problem. Please try again later." }
      });
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 999999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="modal-content" style={{
        backgroundColor: 'white',
        maxWidth: '800px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        borderRadius: '4px',
        position: 'relative',
        zindex: '9999999'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '30px',
            cursor: 'pointer',
            color: 'White',
            backgroundColor: 'black'
          }}
        >
          ×
        </button>

        <div style={{
          backgroundColor: '#00334E',
          color: 'white',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h2 className='text-white' style={{ margin: '0 0 10px 0' }}>Make a Booking</h2>
          <p style={{ margin: '0' }}>Simply call and we'll book you in now:</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0 0 0' }}>+971 50 746 4712</p>
        </div>

        <div style={{ padding: '20px' }}>
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

          <p style={{ textAlign: 'center', marginBottom: '20px' }}>
            <strong>Can't call us?</strong> You can still request a booking by filling out the form below:
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
              <div style={{ flex: '1 1 45%' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  NAME <span style={{ color: '#ed1c24' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First Name, Surname"
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ flex: '1 1 45%' }}>
                <label htmlFor="contactNumber" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  CONTACT NUMBER <span style={{ color: '#ed1c24' }}>*</span>
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ flex: '1 1 45%' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ flex: '1 1 45%' }}>
                <label htmlFor="postcode" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  POSTCODE
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="E.g. 00000"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ flex: '1 1 100%' }}>
                <label htmlFor="service" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  SERVICE REQUIRED
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                >
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

              <div style={{ flex: '1 1 100%' }}>
                <label htmlFor="details" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  DETAILS
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any additional details"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    height: 'inherit'
                  }}
                />
              </div>
            </div>

            {/* Invisible reCAPTCHA */}
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6Lc3iU4rAAAAAA0jw06XlEnCQsXoc_vxT8piZLLX"
              size="invisible"
              badge="bottomleft"
              onChange={onReCAPTCHAChange}
            />

            <button
              type="submit"
              disabled={status.submitting}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#00334E',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {status.submitting ? 'Submitting...' : 'Submit Booking'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;