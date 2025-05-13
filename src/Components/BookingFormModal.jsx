import { useState } from 'react';

const BookingFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    postcode: '',
    service: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Reset form and close modal
    setFormData({
      name: '',
      contactNumber: '',
      email: '',
      postcode: '',
      service: 'Air Con',
      details: ''
    });
    onClose();
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
      zIndex: 1000,
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
        position: 'relative'
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
            color: 'white',
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
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="+971 1234 56789"
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
                  EMAIL ADDRESS <span style={{ color: '#ed1c24' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
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
                <label htmlFor="postcode" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  City/Area
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  placeholder="Dubai, xxx"
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
                  SERVICE <span style={{ color: '#ed1c24' }}>*</span>
                </label>
                <div style={{
                  position: 'relative',
                  width: '100%'
                }}>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      appearance: 'none',
                      backgroundColor: 'white'
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
                  <div style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none'
                  }}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L6 6L11 1" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div style={{ flex: '1 1 100%' }}>
                <label htmlFor="details" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  DETAILS ABOUT THE ISSUE YOU'RE HAVING
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Describe the issue you are experiencing, when it happens, etc"
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#00334E',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '14px'
              }}
            >
              SEND BOOKING REQUEST
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;