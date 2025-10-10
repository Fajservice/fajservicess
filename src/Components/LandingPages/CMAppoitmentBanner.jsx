import '../css/coffeemachinelandingpage.css';

const CMAppointmentBanner = () => {
  const handleGetAppointment = () => {
    // Add your appointment booking logic here
    console.log('Get appointment clicked');
  };

  return (
    <div className="appointment-banner">
      <div className="banner-content-wrapper">
        <h2 className="banner-heading">
          Get Book Your Coffee Machine Repair Services in Dubai Today
        </h2>
        <button className="appointment-btn" onClick={handleGetAppointment}>
          <span className="phone-icon">📞</span>
          Get Fix Your Appointments
        </button>
      </div>
    </div>
  );
};

export default CMAppointmentBanner;