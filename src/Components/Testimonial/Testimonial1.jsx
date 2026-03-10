import { useState, useEffect, useRef, useCallback, memo } from "react";
import parse from "html-react-parser";

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const STARS_SVG = (
  <svg width="70" height="14" viewBox="0 0 70 14" fill="#ffc107" aria-hidden="true">
    {[0,1,2,3,4].map(i => (
      <path key={i} transform={`translate(${i*14},0)`}
        d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.3l-3.7 2 .7-4.1-3-2.9 4.2-.7z"/>
    ))}
  </svg>
);

// const QuoteIcon = () => (
//   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//     <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
//   </svg>
// );

const DiamondIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2L2 12l10 10 10-10L12 2z"/>
  </svg>
);

const TestimonialCard = memo(({ item }) => (
  <div className="cs_testimonial card shadow-sm border-0 h-100 p-3">
    <div className="card-body">
      <div className="d-flex align-items-center mb-2">
        <div className="cs_testimonial_thumbnail me-3">
          <img
            src={getImageSrc(item.img1)}
            alt={item.title}
            className="rounded-circle"
            width="60"
            height="60"
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </div>
        <div>
          <div className="rating-area">{STARS_SVG}</div>
          <h3 className="mb-1 text-uppercase">{item.title}</h3>
          <p className="cs_fs_16 mb-0">{item.subTitle}</p>
        </div>
      </div>
      <blockquote className="blockquote mb-0">
        <p className="cs_fs_16 mb-0">{item.desc}</p>
      </blockquote>
 
    </div>
  </div>
));
TestimonialCard.displayName = 'TestimonialCard';

const SLIDER_STYLES = `
  .testimonial-slider{position:relative;width:100%;cursor:grab}
  .testimonial-slider--dragging{cursor:grabbing;user-select:none}
  .testimonial-slider__track{display:flex;will-change:transform;transition:transform .5s ease}
  .testimonial-slider__track--no-transition{transition:none}
  .testimonial-slider__slide{flex-shrink:0;padding:0 15px;box-sizing:border-box}
  .testimonial-slider__slide img{pointer-events:none}
  .rating-area{display:flex;gap:2px;margin-bottom:4px}
`;

const TestimonialSection = ({
  subtitle = "What Our Clients Say",
  title = "Customer <span>Testimonials</span>",
  bgImg = "testimonial_bg",
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
  const isTransitioning = useRef(false);
  const isDragging = useRef(false);
  const dragOffset = useRef(0);
  const startX = useRef(0);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const getSlides = (width) => {
      if (width >= 1200) return breakpoints[1200]?.slidesPerView || 2;
      if (width >= 992)  return breakpoints[992]?.slidesPerView  || 2;
      if (width >= 768)  return breakpoints[768]?.slidesPerView  || 1;
      return 1;
    };

    setSlidesPerView(getSlides(window.innerWidth));

    const ro = new ResizeObserver(entries => {
      setSlidesPerView(getSlides(entries[0].contentRect.width));
    });
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [breakpoints]);

  const maxIndex = Math.max(0, testimonialData.length - slidesPerView);
  const slideWidth = 100 / slidesPerView;

  const goToNext = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => { isTransitioning.current = false; }, 500);
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => { isTransitioning.current = false; }, 500);
  }, [maxIndex]);

  useEffect(() => {
    if (!autoplay || testimonialData.length <= slidesPerView) return;
    intervalRef.current = setInterval(goToNext, autoplayDelay);
    return () => clearInterval(intervalRef.current);
  }, [autoplay, autoplayDelay, testimonialData.length, slidesPerView, goToNext]);

  const updateTrack = useCallback((offset) => {
    if (!trackRef.current) return;
    const baseTranslate = -(currentIndex * slideWidth);
    trackRef.current.style.transform = `translateX(calc(${baseTranslate}% + ${offset}px))`;
  }, [currentIndex, slideWidth]);

  const handleDragStart = useCallback((clientX) => {
    clearInterval(intervalRef.current);
    isDragging.current = true;
    startX.current = clientX;
    dragOffset.current = 0;
    if (trackRef.current) trackRef.current.classList.add('testimonial-slider__track--no-transition');
  }, []);

  const handleDragMove = useCallback((clientX) => {
    if (!isDragging.current) return;
    dragOffset.current = clientX - startX.current;
    updateTrack(dragOffset.current);
  }, [updateTrack]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (trackRef.current) trackRef.current.classList.remove('testimonial-slider__track--no-transition');

    if (dragOffset.current < -50) goToNext();
    else if (dragOffset.current > 50) goToPrev();
    else updateTrack(0);

    dragOffset.current = 0;
  }, [goToNext, goToPrev, updateTrack]);

  if (!testimonialData?.length) return null;

  return (
    <section
      id={sectionId}
      className={`cs_slider cs_style_2 position-relative py-5 ${className}`}
      style={{ backgroundImage: `url(${getImageSrc(bgImg)})` }}
    >
      <style>{SLIDER_STYLES}</style>
      <div className="container">
        <div className="cs_section_heading text-center mb-5">
          <h3 className="cs_section_subtitle text-uppercase cs_fs_18 mb-3">
            <DiamondIcon /> {subtitle} <DiamondIcon />
          </h3>
          <h2 className="cs_section_title">{parse(title)}</h2>
        </div>

        <div
          className="testimonial-slider"
          onMouseDown={e => { e.preventDefault(); handleDragStart(e.clientX); }}
          onMouseMove={e => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={e => handleDragStart(e.touches[0].clientX)}
          onTouchMove={e => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          <div
            ref={trackRef}
            className="testimonial-slider__track"
            style={{
              transform: `translateX(calc(-${currentIndex * slideWidth}% - ${currentIndex * (spaceBetween / slidesPerView)}px))`,
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

export default memo(TestimonialSection);
