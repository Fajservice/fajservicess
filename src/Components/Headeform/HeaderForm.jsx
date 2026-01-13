import { useRef, useState, useCallback } from 'react';

// reCAPTCHA site key
const RECAPTCHA_SITE_KEY = '6Lc3iU4rAAAAAA0jw06XlEnCQsXoc_vxT8piZLLX';

const HeaderForm = () => {
  const recaptchaWidgetId = useRef(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaLoading, setRecaptchaLoading] = useState(false);

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

  // Load reCAPTCHA script dynamically
  const loadRecaptchaScript = useCallback(() => {
    return new Promise((resolve) => {
      // Already loaded
      if (window.grecaptcha && window.grecaptcha.render) {
        resolve();
        return;
      }

      // Already loading
      if (recaptchaLoading) {
        const checkLoaded = setInterval(() => {
          if (window.grecaptcha && window.grecaptcha.render) {
            clearInterval(checkLoaded);
            resolve();
          }
        }, 100);
        return;
      }

      setRecaptchaLoading(true);

      // Create callback for when script loads
      window.onRecaptchaLoad = () => {
        setRecaptchaLoaded(true);
        setRecaptchaLoading(false);
        resolve();
      };

      // Check if script already exists (loaded by another form)
      const existingScript = document.querySelector('script[src*="recaptcha/api.js"]');
      if (existingScript) {
        const checkLoaded = setInterval(() => {
          if (window.grecaptcha && window.grecaptcha.render) {
            clearInterval(checkLoaded);
            setRecaptchaLoaded(true);
            setRecaptchaLoading(false);
            resolve();
          }
        }, 100);
        return;
      }

      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    });
  }, [recaptchaLoading]);

  // Initialize reCAPTCHA widget
  const initRecaptcha = useCallback(async () => {
    if (recaptchaWidgetId.current !== null) return;

    await loadRecaptchaScript();

    // Wait for grecaptcha to be ready
    if (window.grecaptcha && window.grecaptcha.render) {
      const container = document.getElementById('header-recaptcha-container');
      if (container && recaptchaWidgetId.current === null) {
        recaptchaWidgetId.current = window.grecaptcha.render(container, {
          sitekey: RECAPTCHA_SITE_KEY,
          size: 'invisible',
          badge: 'bottomleft',
          callback: onReCAPTCHAChange
        });
      }
    }
  }, [loadRecaptchaScript]);

  // Load reCAPTCHA when user interacts with form
  const handleFormInteraction = useCallback(() => {
    if (!recaptchaLoaded && !recaptchaLoading) {
      initRecaptcha();
    }
  }, [recaptchaLoaded, recaptchaLoading, initRecaptcha]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleDirectSubmit = () => {
    const data = new FormData();
    data.append('Name', formData.name);
    data.append('Email', formData.email);
    data.append('Phone', formData.phone);
    data.append('Message', formData.message);
    data.append('_subject', 'Inquiry & Fajservices');
    data.append('_captcha', 'false');
    data.append('_template', 'table');
    data.append('_cc', 'faisaljuma.techservices@gmail.com');
    data.append('_from_name', 'Inquire');
    data.append('page_url', window.location.href);

    fetch('https://formsubmit.co/info@fajservices.ae', {
      method: 'POST',
      body: data,
      mode: 'no-cors'
    })
      .then(() => {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Form submitted successfully! Thank you for your message." }
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
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

    if (window.grecaptcha && recaptchaWidgetId.current !== null) {
      const recaptchaTimeout = setTimeout(() => handleDirectSubmit(), 5000);

      try {
        window.grecaptcha.execute(recaptchaWidgetId.current);
      } catch (error) {
        console.error('reCAPTCHA execution error:', error);
        clearTimeout(recaptchaTimeout);
        handleDirectSubmit();
      }
    } else {
      handleDirectSubmit();
    }
  };

  const onReCAPTCHAChange = (token) => {
    if (!token) {
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
    data.append('_cc', 'faisaljuma.techservices@gmail.com');
    data.append('_from_name', 'Inquire');
    data.append('page_url', window.location.href);
    data.append('g-recaptcha-response', token);

    fetch('https://formsubmit.co/info@fajservices.ae', {
      method: 'POST',
      body: data,
      mode: 'no-cors'
    })
      .then(() => {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Form submitted successfully! Thank you for your message." }
        });
        setFormData({ name: '', email: '', phone: '', message: '' });

        // Reset reCAPTCHA
        if (window.grecaptcha && recaptchaWidgetId.current !== null) {
          window.grecaptcha.reset(recaptchaWidgetId.current);
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
        <div className="alert alert-success p-2" role="alert">
          {status.info.msg}
        </div>
      )}

      <div className="d-md-none p-3 p-sm-4 rounded" style={{ backgroundColor: "rgb(242 242 242)" }}>
        <form 
          onSubmit={handleSubmit}
          onFocus={handleFormInteraction}
          onMouseEnter={handleFormInteraction}
        >
          <div className="row align-items-center">
            <div className="col-12 col-md-6" style={{ marginTop: "0.1rem" }}>
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
              <div id="header-recaptcha-container"></div>
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
  );
};

export default HeaderForm;