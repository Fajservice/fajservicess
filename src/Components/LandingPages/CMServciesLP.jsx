import '../css/coffeemachinelandingpage.css';

const CMServicesLP = () => {
  const services = [
    { id: 1, name: 'Breville', type: 'Coffee Machine Repair' },
    { id: 2, name: 'Espresso', type: 'Coffee Machine Repair' },
    { id: 3, name: 'Miele', type: 'Coffee Machine Repair' },
    { id: 4, name: 'Air Conditioner (AC)', type: 'Coffee Machine Repair' },
    { id: 5, name: 'TV', type: 'Coffee Machine Repair' },
    { id: 6, name: 'Hob', type: 'Coffee Machine Repair' },
    { id: 7, name: 'Cooker', type: 'Coffee Machine Repair' },
    { id: 8, name: 'Beverage Cooler', type: 'Coffee Machine Repair' },
    { id: 9, name: 'Wine Cooler', type: 'Coffee Machine Repair' },
    { id: 10, name: 'Oven', type: 'Coffee Machine Repair' }
  ];

  return (
    <div className="repair-service-container">
      <h1 className="main-title">
        Choose Coffee Machine Repair Service – Find the Right Coffee Machine Commerical & Domestic
      </h1>
      
      <p className="description">
        At DG Help, we make it simple to choose the right repair service for your home appliances. Whether you need washing machine repair, refrigerator service, AC maintenance, or any other appliance fix, our categorized repair services help you find the best solution quickly.
      </p>
      
      <div className="divider"></div>
      
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-name">{service.name}</div>
            <div className="service-type">{service.type}</div>
          </div>
        ))}
      </div>
      
      <button className="book-now-btn">Book Now</button>
    </div>
  );
};

export default CMServicesLP;