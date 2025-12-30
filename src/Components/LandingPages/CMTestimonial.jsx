import  { useEffect } from 'react';  // 👈 Import useEffect
import Testimonial1 from '../Testimonial/Testimonial1';
import testimonial_data from '../../../public/data/AcData/AcTestimonial/AcRepairTestimonials.json';

const CMTestimonial = () => {

  const subtitle = "Testimonial";
  const title = "What our clients say About Us";
  const reviewsbg = "img/testimonialbg.jpg";
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 2 } },
      { breakpoint: 1199, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div>
      <Testimonial1
        subtitle={subtitle}
        title={title}
        bgImg={reviewsbg}
        testimonialData={testimonial_data}
        sectionId="home-testimonials"
      />
    </div>
  );
};

export default CMTestimonial;
