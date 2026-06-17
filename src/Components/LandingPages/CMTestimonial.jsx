import  { useEffect } from 'react';  // 👈 Import useEffect
import Testimonial1 from '../Testimonial/Testimonial1';
import testimonial_data from '../../../public/data/AcData/AcTestimonial/AcRepairTestimonials.json';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  let variant = 'mobile';
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    const realWidth = width;
    if (realWidth > 1200) {
      variant = 'large';
    } else if (realWidth > 768) {
      variant = 'desktop';
    } else if (realWidth > 480) {
      variant = 'tablet';
    } else {
      variant = 'mobile';
    }
  }
  return `${CDN}/${imgPath}/${variant}`;
};
const CMTestimonial = () => {

  const subtitle = "Testimonial";
  const title = "What our clients say About Us";
  const reviewsbg = getImageSrc('testimonialbg');
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
