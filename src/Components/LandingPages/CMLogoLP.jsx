import React from 'react';
import '../css/coffeemachinelandingpage.css';

const CMLogoService = () => {
  const services = [
    { id: 1, name: 'AEG', type: 'Repair' },
    { id: 2, name: 'Admiral', type: 'Repair' },
    { id: 3, name: 'Aftron', type: 'Repair' },
    { id: 4, name: 'Ariston', type: 'Repair' },
    { id: 5, name: 'Baumatic', type: 'Repair' },
    { id: 6, name: 'Beko', type: 'Repair' },
    { id: 7, name: 'Bertazzmi', type: 'Repair' },
    { id: 8, name: 'BloomBerg', type: 'Repair' },
    { id: 9, name: 'Boompani', type: 'Repair' },
    { id: 10, name: 'Bosh', type: 'Repair' },
    { id: 11, name: 'Boston', type: 'Repair' },
    { id: 12, name: 'Brandt', type: 'Repair' },
    { id: 13, name: 'Deawoo', type: 'Repair' },
    { id: 14, name: 'Electrolux', type: 'Repair' },
    { id: 15, name: 'elica', type: 'Repair' },
  ];

  return (
    <div className="repair-service-container">
      <h1 className="main-title">
       Brands We Repair
      </h1>
      
      <p className="description">
       We service a wide range of non-authorized brands (T&C apply), including
      </p>
      
      <div className="divider"></div>
      
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <div className="service-name">{service.name}</div>
            <div className="service-type">{service.type}</div>
          </div>
        ))}
      </div>
      
      <button className="book-now-btn">Book Now</button>
    </div>
  );
};

export default CMLogoService;