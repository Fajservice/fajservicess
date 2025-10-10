import React from 'react';
import '../css/coffeemachinelandingpage.css';

const CMTechinicanCarousel = () => {
  const images = [
    { id: 1, url: '/img/tech1.jpg', alt: '' },
    { id: 2, url: '/img/Coffee-machine-servicing-title-image.avif', alt: 'Technician 2' },
    { id: 3, url: '/img/coffee-machine-service.avif', alt: 'Technician 3' },
    { id: 4, url: '/img/coffee-maker-repair-services.avif', alt: 'Technician 4' }
  ];

  return (
    <div className="rounded-images-container">
      <h2 className='techtitle'>Our Technicians</h2>
      <div className="images-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.url} alt={image.alt} className="rounded-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CMTechinicanCarousel;