;
import '../css/coffeemachinelandingpage.css';

const CMTechincianCarousel = () => {
  const services = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400',
      title: 'Full Coffee Machine Services',
      description: 'Comprehensive coffee machine solutions including installation, cleaning services, and ongoing support.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400',
      title: 'Coffee Machine Repair',
      description: 'Our skilled technicians quickly handle repairs to minimize downtime and keep your business running smoothly.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      title: 'Coffee Machine Maintenance',
      description: 'We provide maintenance services, including cleaning and replacing parts, to ensure your coffee machines remain in optimal condition.'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1581093458791-9d42e1e80d4e?w=400',
      title: 'Coffee Machine AMC Services',
      description: 'Keep your coffee machine running at peak performance with our professional servicing and maintenance contracts.'
    }
  ];

  const handleGetQuote = (serviceTitle) => {
    console.log(`Get quote for: ${serviceTitle}`);
  };

  return (
    <div className="technicians-section">
      <h2 className="section-title">OUR TECHNICIANS</h2>
      
      <div className="services-cards-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card-tech">
            <div className="card-image-wrapper">
              <img src={service.image} alt={service.title} className="card-image" />
            </div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
            <button 
              className="quote-button"
              onClick={() => handleGetQuote(service.title)}
            >
              GET A QUOTE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CMTechincianCarousel;