import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial1.css";
import parse from "html-react-parser";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { GiDiamonds } from "react-icons/gi";


const DecorativeIcon = ({ icon: Icon = GiDiamonds, size = 16 }) => (
  <Icon size={size} className="decorative-icon" />
);

// 5-Star Rating using React Icons
const StarRating = () => (
  <div className="rating-area">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="text-warning me-1" size={14} />
    ))}
  </div>
);

const TestimonialSection = ({ 
  subtitle = "What Our Clients Say", 
  title = "Customer <span>Testimonials</span>", 
  bgImg = "img/testimonial_bg.jpg",
  testimonialData = [],
  className = "",
  sectionId = "",
  autoplay = true,
  autoplayDelay = 3000,
  showPagination = false,
  spaceBetween = 30,
  decorativeIcon = GiDiamonds,
  decorativeIconSize = 16,
  quoteIcon = FaQuoteRight,
  breakpoints = {
    768: { slidesPerView: 1 },
    992: { slidesPerView: 2 },
    1200: { slidesPerView: 2 },
  }
}) => {
  
  // If no data provided, show a message or return null
  if (!testimonialData || testimonialData.length === 0) {
    return (
      <section className="cs_slider cs_style_1 position-relative py-5">
        <div className="container">
          <div className="text-center">
            <p>No testimonials available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={sectionId}
      className={`cs_slider cs_style_2 position-relative py-5 ${className}`}
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${bgImg})` }}
    >
      <div className="container">
        {/* Heading */}
        <div className="cs_section_heading text-center mb-5">
          <h3 className="cs_section_subtitle text-uppercase cs_fs_18  mb-3">
            <DecorativeIcon icon={decorativeIcon} size={decorativeIconSize} /> {subtitle} <DecorativeIcon icon={decorativeIcon} size={decorativeIconSize} />
          </h3>
          <h2 className="cs_section_title">
            {parse(title)}
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={spaceBetween}
          slidesPerView={1}
          pagination={showPagination ? {
            clickable: true,
            bulletClass: "testimonial-bullet",
            bulletActiveClass: "testimonial-bullet-active",
          } : false}
          autoplay={autoplay ? { 
            delay: autoplayDelay, 
            disableOnInteraction: false 
          } : false}
          breakpoints={breakpoints}
          className="testimonial-swiper-style-1"
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard item={item} quoteIcon={quoteIcon} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// Single Testimonial Card
const TestimonialCard = ({ item, quoteIcon: QuoteIcon = FaQuoteRight }) => (
  <div className="cs_testimonial card shadow-sm border-0 h-100">
    <div className="card-body">
      {/* Header */}
      <div className="d-flex align-items-center mb-2">
        <div className="cs_testimonial_thumbnail me-3">
          <img
            src={`${import.meta.env.BASE_URL}${item.img1}`}
            alt={item.title}
            className="rounded-circle"
            width="60"
            height="60"
          />
        </div>
        <div>
          <StarRating />
          <h5 className="mb-1 text-uppercase">{item.title}</h5>
          <p className="cs_fs_16 mb-0">{item.subTitle}</p>
        </div>
      </div>

      {/* Description */}
      <blockquote className="blockquote mb-0">
        <p className="cs_fs_16 mb-0">{item.desc}</p>
      </blockquote>

      {/* Quote Icon */}
      <div className="cs_quote_icon position-absolute bottom-0 end-0 opacity-25 p-3">
        <QuoteIcon size={40} />
      </div>
    </div>
  </div>
);

export default React.memo(TestimonialSection);