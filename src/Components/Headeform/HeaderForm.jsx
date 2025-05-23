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

  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };
 const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    // Trigger invisible reCAPTCHA challenge
    if (recaptchaRef.current) {
      recaptchaRef.current.execute();
    }
  };

  const onReCAPTCHAChange = async (token) => {
    if (!token) {
      alert("Captcha failed. Please try again.");
      setStatus({ submitted: false, submitting: false, info: { error: true, msg: "Captcha failed." } });
      return;
    }

    // if (!captchaToken) {
    //   alert("Please complete the reCAPTCHA.");
    //   return;
    // }

    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    const data = new FormData();
    data.append('Name', formData.name);
    data.append('Email', formData.email);
    data.append('Phone', formData.phone);
    data.append('Message', formData.message);
    data.append('_subject', 'Inquiry & Fajservices');
    data.append('_captcha', 'false'); // FormSubmit's own captcha disabled
    data.append('_template', 'table');
    data.append('_cc', 'info@fajservices.ae');
    data.append('_from_name', 'Inquire');
    data.append('page_url', window.location.href);

    try {
      await fetch('https://formsubmit.co/info@fajservices.ae', {
        method: 'POST',
        body: data,
      });

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

      setCaptchaToken(null); // Reset CAPTCHA
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
      <div className="d-block d-md-none p-3 p-sm-4 rounded" style={{ backgroundColor: "rgb(242 242 242)" }}>
        <form onSubmit={handleSubmit}>
          <div className="row align-items-center">
            <div className="col-12 col-md-6" style={{marginTop:"0.1rem"}}>
              <div className="mb-2">

                <input type="text" name="name" className="form-control" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="mb-2">

                <input type="tel" name="phone" className="form-control" id="phone" placeholder="Enter your phone number" pattern="[0-9]*" inputMode="numeric" value={formData.phone} onChange={handleChange}
                  onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }} required />
              </div>
              <div className="mb-2">

                <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="mb-2">
                <textarea name="message" className="form-control h-100" id="message" rows="5" placeholder="Type your message here..." value={formData.message} onChange={handleChange} required></textarea>
              </div>
              {/* ✅ reCAPTCHA */}
              <div className="col-12 d-flex justify-content-center mb-3">
                {/* ✅ Invisible reCAPTCHA */}
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Le2yTkrAAAAAGhNjcIJgpsRIRp_SbtL8xpQ5aHG"
                  size="invisible"
                  badge="bottomright"
                  onChange={onReCAPTCHAChange}
                />

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <button type="submit"
                className="cs_btn cs_style_1 rounded"
                style={{ width: '150px', height: '40px' }}
                disabled={status.submitting} data-sitekey="reCAPTCHA_site_key"
            data-callback='onSubmit'
            data-action='submit'>
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
