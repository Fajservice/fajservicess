import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import "./Testimonial1.css";
import parse from "html-react-parser";

const StarIcon = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#ffc107"
    aria-hidden="true"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const QuoteIcon = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
);

const DiamondIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="decorative-icon"
    aria-hidden="true"
  >
    <path d="M12 2L2 12l10 10 10-10L12 2z" />
  </svg>
);

const StarRating = () => (
  <div className="rating-area">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} size={14} />
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
  spaceBetween = 30,
  breakpoints = {
    768: { slidesPerView: 1 },
    992: { slidesPerView: 2 },
    1200: { slidesPerView: 2 },
  },
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const intervalRef = useRef(null);
  const startX = useRef(0);
  const currentX = useRef(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) setSlidesPerView(breakpoints[1200]?.slidesPerView || 2);
      else if (width >= 992) setSlidesPerView(breakpoints[992]?.slidesPerView || 2);
      else if (width >= 768) setSlidesPerView(breakpoints[768]?.slidesPerView || 1);
      else setSlidesPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  const maxIndex = Math.max(0, testimonialData.length - slidesPerView);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [maxIndex, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [maxIndex, isTransitioning]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || testimonialData.length <= slidesPerView || isDragging) return;

    intervalRef.current = setInterval(goToNext, autoplayDelay);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay, autoplayDelay, testimonialData.length, slidesPerView, goToNext, isDragging]);

  // Touch events
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    currentX.current = e.touches[0].clientX;
    const diff = currentX.current - startX.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    startX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    currentX.current = e.clientX;
    const diff = currentX.current - startX.current;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    const diff = startX.current - currentX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

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

  const slideWidth = 100 / slidesPerView;

  return (
    <section
      id={sectionId}
      className={`cs_slider cs_style_2 position-relative py-5 ${className}`}
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${bgImg})` }}
    >
      <style>{`
        .testimonial-slider{position:relative;overflow:hidden;width:100%;cursor:grab}
        .testimonial-slider--dragging{cursor:grabbing}
        .testimonial-slider__track{display:flex;will-change:transform}
        .testimonial-slider__track--animate{transition:transform .5s ease}
        .testimonial-slider__slide{flex-shrink:0;padding:0 15px;box-sizing:border-box;user-select:none}
        .testimonial-slider__slide img{pointer-events:none}
        .rating-area{display:flex;gap:2px;margin-bottom:4px}
        .rating-area svg{color:#ffc107}
      `}</style>

      <div className="container">
        <div className="cs_section_heading text-center mb-5">
          <h3 className="cs_section_subtitle text-uppercase cs_fs_18 mb-3">
            <DiamondIcon size={16} /> {subtitle} <DiamondIcon size={16} />
          </h3>
          <h2 className="cs_section_title">{parse(title)}</h2>
        </div>

        <div
          ref={sliderRef}
          className={`testimonial-slider ${isDragging ? 'testimonial-slider--dragging' : ''}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`testimonial-slider__track ${!isDragging ? 'testimonial-slider__track--animate' : ''}`}
            style={{
              transform: `translateX(calc(-${currentIndex * slideWidth}% - ${currentIndex * (spaceBetween / slidesPerView)}px + ${dragOffset}px))`,
            }}
          >
            {testimonialData.map((item, index) => (
              <div
                key={index}
                className="testimonial-slider__slide"
                style={{ width: `${slideWidth}%` }}
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = memo(({ item }) => (
  <div className="cs_testimonial card shadow-sm border-0 h-100">
    <div className="card-body">
      <div className="d-flex align-items-center mb-2">
        <div className="cs_testimonial_thumbnail me-3">
          <img
            src={`${import.meta.env.BASE_URL}${item.img1}`}
            alt={item.title}
            className="rounded-circle"
            width="60"
            height="60"
            loading="lazy"
            draggable="false"
          />
        </div>
        <div>
          <StarRating />
          <h3 className="mb-1 text-uppercase">{item.title}</h3>
          <p className="cs_fs_16 mb-0">{item.subTitle}</p>
        </div>
      </div>

      <blockquote className="blockquote mb-0">
        <p className="cs_fs_16 mb-0">{item.desc}</p>
      </blockquote>

      <div className="cs_quote_icon position-absolute bottom-0 end-0 opacity-25 p-3">
        <QuoteIcon size={40} />
      </div>
    </div>
  </div>
));

export default memo(TestimonialSection);