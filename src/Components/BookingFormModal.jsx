import { useRef, useState, useEffect, lazy, Suspense, memo, useCallback, useMemo } from 'react';

// Lazy load reCAPTCHA - only loads when modal opens
const ReCAPTCHA = lazy(() => import('react-google-recaptcha'));

// Memoized form input component
const FormInput = memo(({ label, required, inputStyle, ...props }) => (
  <div className="form-field form-field-half">
    <label htmlFor={props.id} className="form-label">
      {label} {required && <span className="required-star">*</span>}
    </label>
    <input {...props} required={required} className="form-input" />
  </div>
));
FormInput.displayName = 'FormInput';

// Memoized select component
const FormSelect = memo(({ label, options, ...props }) => (
  <div className="form-field form-field-full">
    <label htmlFor={props.id} className="form-label">{label}</label>
    <select {...props} className="form-input">
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
));
FormSelect.displayName = 'FormSelect';

// Memoized textarea component
const FormTextarea = memo(({ label, ...props }) => (
  <div className="form-field form-field-full">
    <label htmlFor={props.id} className="form-label">{label}</label>
    <textarea {...props} className="form-input form-textarea" />
  </div>
));
FormTextarea.displayName = 'FormTextarea';

// Alert component
const Alert = memo(({ type, message }) => (
  <div className={`alert alert-${type}`} role="alert">{message}</div>
));
Alert.displayName = 'Alert';

// Service options - frozen to prevent mutations
const SERVICE_OPTIONS = Object.freeze([
  'Air Conditioning Maintenance Service',
  'Home Appliances Repair Service',
  'Baumatic Appliances Repair Service',
  'Commercial Appliances Service',
  'Freezer Maintenance Service',
  'Food Chiller Service',
  'AMC Service',
  'Other'
]);

// Initial form state
const INITIAL_FORM_STATE = Object.freeze({
  name: '',
  contactNumber: '',
  email: '',
  postcode: '',
  service: 'Air Conditioning Maintenance Service',
  details: ''
});

// CSS injected once
const injectStyles = (() => {
  let injected = false;
  return () => {
    if (injected || typeof document === 'undefined') return;
    injected = true;
    
    const style = document.createElement('style');
    style.textContent = `
      .booking-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 999999;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .booking-modal {
        background-color: white;
        max-width: 800px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        border-radius: 4px;
        position: relative;
        z-index: 9999999;
      }
      .booking-modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: black;
        border: none;
        font-size: 30px;
        cursor: pointer;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
      }
      .booking-modal-header {
        background-color: #00334E;
        color: white;
        padding: 20px;
        text-align: center;
      }
      .booking-modal-header h2 {
        margin: 0 0 10px 0;
        color: white;
      }
      .booking-modal-header p {
        margin: 0;
      }
      .booking-modal-phone {
        font-size: 24px;
        font-weight: bold;
        margin: 10px 0 0 0;
        display: block;
        color: white;
        text-decoration: none;
      }
      .booking-modal-body {
        padding: 20px;
      }
      .form-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 20px;
      }
      .form-field-half { flex: 1 1 45%; }
      .form-field-full { flex: 1 1 100%; }
      .form-label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }
      .required-star { color: #ed1c24; }
      .form-input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
        box-sizing: border-box;
      }
      .form-textarea { height: inherit; min-height: 100px; resize: vertical; }
      .booking-submit-btn {
        width: 100%;
        padding: 12px;
        background-color: #00334E;
        color: white;
        font-weight: bold;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: opacity 0.2s;
      }
      .booking-submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
      .alert {
        padding: 12px;
        border-radius: 4px;
        margin-bottom: 16px;
        text-align: center;
      }
      .alert-error {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
      }
      .alert-success {
        background-color: #d4edda;
        color: #155724;
        border: 1px solid #c3e6cb;
      }
      .booking-intro {
        text-align: center;
        margin-bottom: 20px;
      }
    `;
    document.head.appendChild(style);
  };
})();

const BookingFormModal = ({ isOpen, onClose }) => {
  const recaptchaRef = useRef(null);
  const timeoutRef = useRef(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  // Inject styles once on first render
  useEffect(() => {
    injectStyles();
  }, []);

  // Load reCAPTCHA only when modal opens
  useEffect(() => {
    if (isOpen && !recaptchaLoaded) {
      const id = requestIdleCallback 
        ? requestIdleCallback(() => setRecaptchaLoaded(true), { timeout: 1000 })
        : setTimeout(() => setRecaptchaLoaded(true), 500);
      return () => {
        if (requestIdleCallback) cancelIdleCallback(id);
        else clearTimeout(id);
      };
    }
  }, [isOpen, recaptchaLoaded]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close modal on escape key & prevent body scroll
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => prev[name] === value ? prev : { ...prev, [name]: value });
  }, []);

  const createFormData = useCallback((token = null) => {
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
    data.append('_cc', 'faisaljuma.techservices@gmail.com');
    data.append('_from_name', 'Booking Form');
    data.append('page_url', window.location.href);
    if (token) data.append('g-recaptcha-response', token);
    return data;
  }, [formData]);

  const submitForm = useCallback((data) => {
    fetch('https://formsubmit.co/info@fajservices.ae', {
      method: 'POST',
      body: data,
      mode: 'no-cors'
    })
      .then(() => {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Booking request submitted successfully!" }
        });
        setFormData(INITIAL_FORM_STATE);
        try { recaptchaRef.current?.reset(); } catch {}
      })
      .catch(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: "There was a problem. Please try again later." }
        });
      });
  }, []);

  const handleDirectSubmit = useCallback(() => {
    submitForm(createFormData());
  }, [createFormData, submitForm]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setStatus(prev => ({ ...prev, submitting: true }));

    timeoutRef.current = setTimeout(handleDirectSubmit, 3000);

    try {
      recaptchaRef.current?.execute();
    } catch {
      clearTimeout(timeoutRef.current);
      handleDirectSubmit();
    }
  }, [handleDirectSubmit]);

  const onReCAPTCHAChange = useCallback((token) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    submitForm(token ? createFormData(token) : createFormData());
  }, [createFormData, submitForm]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  return (
    <div
      className="booking-modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="booking-modal">
        <button
          onClick={onClose}
          className="booking-modal-close"
          aria-label="Close modal"
          type="button"
        >
          ×
        </button>

        <div className="booking-modal-header">
          <h2 id="booking-modal-title">Make a Booking</h2>
          <p>Simply call and we'll book you in now:</p>
          <a href="tel:+971507464712" className="booking-modal-phone">
            +971 50 746 4712
          </a>
        </div>

        <div className="booking-modal-body">
          {status.info.error && <Alert type="error" message={status.info.msg} />}
          {status.submitted && !status.info.error && <Alert type="success" message={status.info.msg} />}

          <p className="booking-intro">
            <strong>Can't call us?</strong> You can still request a booking by filling out the form below:
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <FormInput
                label="NAME"
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First Name, Surname"
              />
              <FormInput
                label="CONTACT NUMBER"
                required
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Phone Number"
              />
              <FormInput
                label="EMAIL"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
              />
              <FormInput
                label="POSTCODE"
                type="text"
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                placeholder="E.g. 00000"
              />
              <FormSelect
                label="SERVICE REQUIRED"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                options={SERVICE_OPTIONS}
              />
              <FormTextarea
                label="DETAILS"
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={4}
                placeholder="Any additional details"
              />
            </div>

            {recaptchaLoaded && (
              <Suspense fallback={null}>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lc3iU4rAAAAAA0jw06XlEnCQsXoc_vxT8piZLLX"
                  size="invisible"
                  badge="bottomleft"
                  onChange={onReCAPTCHAChange}
                />
              </Suspense>
            )}

            <button
              type="submit"
              disabled={status.submitting}
              className="booking-submit-btn"
            >
              {status.submitting ? 'Submitting...' : 'Submit Booking'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default memo(BookingFormModal);