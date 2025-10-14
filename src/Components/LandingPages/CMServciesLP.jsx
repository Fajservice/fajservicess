import '../css/coffeemachinelandingpage.css';

const CMServicesLP = () => {
  const services = [
    { id: 1, name: 'BrewCare Home Service', type: 'Home Repair' },
    { id: 2, name: 'CoffeeFix at Home', type: 'Home Repair' },
    { id: 3, name: 'HomeBrew Repair', type: 'Home Repair' },
    { id: 4, name: 'CafeCare Home', type: 'Home Repair' },
    { id: 5, name: 'BrewMate Service', type: 'Home Repair' },
    { id: 6, name: 'BrewPro Commercial Service', type: 'Commerical Repair' },
    { id: 7, name: 'CafeCare Business', type: 'Commerical Repair' },
    { id: 8, name: 'ProBrew Solutions', type: 'Commerical Repair' },
    { id: 9, name: 'Wine Cooler', type: 'Coffee Machine Repair' },
    { id: 10, name: 'Oven', type: 'Coffee Machine Repair' }
  ];

  return (
    <div className="CM-repair-service-container">
      <h1 className="main-title">
        Choose Coffee Machine Repair Service – Find the Right Coffee Machine Commerical & Domestic
      </h1>
      
      <p className="description">
        At DG Help, we make it simple to choose the right repair service for your home appliances. Whether you need washing machine repair, refrigerator service, AC maintenance, or any other appliance fix, our categorized repair services help you find the best solution quickly.
      </p>
      
      <div className="divider"></div>
      
      <div className="CM-services-grid">
        {services.map((service) => (
          <div key={service.id} className="CM-service-card">
            <div className="CM-service-name">{service.name}</div>
            <div className="CM-service-type">{service.type}</div>
          </div>
        ))}
      </div>
      
      <button className="book-now-btn">Book Now</button>
    </div>
  );
};

export default CMServicesLP;