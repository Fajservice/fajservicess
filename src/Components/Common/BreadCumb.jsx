import React, { useRef, useState } from 'react';
import loadBackgroudImages from "./loadBackgroudImages";
import ReCAPTCHA from "react-google-recaptcha";

const BreadCumb = ({ bgImg, Title }) => {
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

    const data = new FormData();
    data.append('Name', formData.name);
    data.append('Email', formData.email);
    data.append('Phone', formData.phone);
    data.append('Message', formData.message);
    data.append('_subject', 'Inquiry & Fajservices');
    data.append('_captcha', 'false'); // Disable FormSubmit's own captcha
    data.append('_template', 'table');
    data.append('_cc', 'info@fajservices.ae');
    data.append('_from_name', 'Inquire');
    data.append('page_url', window.location.href);

    try {
      await fetch('https://formsubmit.co/faisaljuma01@gmail.com', {
        method: 'POST',
        body: data,
        mode: 'no-cors'
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
        service: '',
        message: ''
      });

      recaptchaRef.current.reset(); // Reset reCAPTCHA
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
    <section
      className="cs_page_heading cs_bg_filed cs_primary_bg"
      data-background={`${import.meta.env.BASE_URL}${bgImg}`}
    >
      <div className="container">
        {/* Main row */}
        <div className="row align-items-center">
          <div className="col-12 col-md-6 mt-4 mb-4 d-flex justify-content-center">
            <h1 className="cs_white_color text-center" style={{ fontSize: "clamp(1.75rem, 5vw, 2.625rem)" }}>
              {Title}
            </h1>
          </div>
          {/* Form section */}
          <div className="col-12 col-md-6 py-3">
            <div className="mt-2 mb-3 p-md-4 rounded" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
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
              <form className="d-none d-sm-block" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <input type="text" name="name" className="form-control required" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                      <input type="tel" name="phone" className="form-control required" id="phone" placeholder="Enter your phone number" pattern="[0-9]*" inputMode="numeric" value={formData.phone} onChange={handleChange}
                        onKeyPress={(e) => { if (!/[0-9]/.test(e.key)) e.preventDefault(); }} required />
                    </div>
                    <div className="mb-3">
                      <input type="email" name="email" className="form-control required" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows="4"
                        style={{ height: "auto", minHeight: "100px" }}
                        placeholder="Type your message here..."
                        value={formData.message} onChange={handleChange} required
                      ></textarea>

                    </div>
                    {/* ✅ reCAPTCHA */}
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      size="invisible"
                      badge="bottomright"
                      onChange={onReCAPTCHAChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <button type="submit" disabled={status.submitting}
                      className="cs_btn cs_style_1 rounded g-recaptcha"
                      data-sitekey="reCAPTCHA_site_key"
                      data-callback='onSubmit'
                      data-action='submit'
                      style={{ width: '100%', maxWidth: '150px', height: '40px' }}
                    >
                      <span>{status.submitting ? 'Submitting...' : 'Submit'}</span>
                      {!status.submitting && <i className="bi bi-arrow-right"></i>}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Extra padding div to ensure proper spacing after the section */}
      <div className="pb-3 d-md-none"></div>
    </section>
  );
};

export default BreadCumb;