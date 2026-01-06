import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ArrowForwardIcon = ({ className = '', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8 8-8z"
      fill="currentColor"
    />
  </svg>
);

const Form1 = () => {
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
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleDirectSubmit = async () => {
    const data = new FormData();
    data.append('Name', formData.name);
    data.append('Email', formData.email);
    data.append('Phone', formData.phone);
    data.append('Service', formData.service);
    data.append('Message', formData.message);
    data.append('_subject', 'Inquiry & Fajservices');
    data.append('_captcha', 'false');
    data.append('_template', 'table');
    data.append('_cc', 'faisaljuma.techservices@gmail.com');
    data.append('_from_name', 'Inquire');
    data.append('page_url', window.location.href);

    try {
      await fetch('https://formsubmit.co/info@fajservices.ae', {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      });
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Form submitted successfully! Thank you for your message." }
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Direct submission error:', error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "There was a problem sending your message. Please try again later." }
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    const recaptchaTimeout = setTimeout(() => handleDirectSubmit(), 5000);

    if (recaptchaRef.current) {
      try {
        recaptchaRef.current.execute();
      } catch (error) {
        console.error('reCAPTCHA execution error:', error);
        clearTimeout(recaptchaTimeout);
        handleDirectSubmit();
      }
    } else {
      clearTimeout(recaptchaTimeout);
      handleDirectSubmit();
    }
  };

  const onReCAPTCHAChange = async (token) => {
    if (!token) return handleDirectSubmit();

    const data = new FormData();
    data.append('Name', formData.name);
    data.append('Email', formData.email);
    data.append('Phone', formData.phone);
    data.append('Service', formData.service);
    data.append('Message', formData.message);
    data.append('_subject', 'Inquiry & Fajservices');
    data.append('_captcha', 'false');
    data.append('_template', 'table');
    data.append('_cc', 'faisaljuma.techservices@gmail.com');
    data.append('_from_name', 'Inquire');
    data.append('page_url', window.location.href);
    data.append('g-recaptcha-response', token);

    try {
      await fetch('https://formsubmit.co/info@fajservices.ae', {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      });
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Form submitted successfully! Thank you for your message." }
      });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      recaptchaRef.current?.reset();
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
            type="text" 
            name="phone" 
            placeholder="Phone Number" 
            className="cs_form_field cs_radius_5"
            value={formData.phone} 
            onChange={handleChange}
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
          />
        </div>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6Lc3iU4rAAAAAA0jw06XlEnCQsXoc_vxT8piZLLX"
          size="invisible"
          badge="bottomleft"
          onChange={onReCAPTCHAChange}
        />

        <div className="col-12">
          <button 
            type="submit" 
            className="cs_btn cs_style_1" 
            disabled={status.submitting}
          >
            <span>{status.submitting ? 'Submitting...' : 'Submit'}</span>
            {!status.submitting && <ArrowForwardIcon size={24} />}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form1;
