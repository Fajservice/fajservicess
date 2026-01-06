import { useState, useEffect, useCallback, useRef } from 'react';
import './ImageSlider.css';

const ImageSlider = ({
  slides = [],
  autoPlay = true,
  interval = 5000,
  showDots = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, slides.length, goToSlide]);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, slides.length, goToSlide]);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1 || isDragging) return;
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, goToNext, slides.length, isDragging]);

  const handleDragStart = (e) => {
    if (isTransitioning) return;
    setIsDragging(true);
    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - dragStart);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 80) goToPrevious();
    else if (dragOffset < -80) goToNext();
    setDragOffset(0);
  };

  if (!slides.length) return null;

  return (
    <section
      className="hero-slider"
      ref={sliderRef}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div
        className="hero-slider__track"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
          transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
        }}
      >
        {slides.map((slide, index) => (
          <div className="hero-slide" key={index}>
            <img
              src={slide.image}
              alt={slide.alt || slide.title}
              className="hero-slide__bg"
              width="1920"
              height="800"
              loading="eager"
              fetchpriority="high"
              decoding="sync"
            />
            <div className="hero-slide__pattern"></div>
            <div className="hero-slide__container">
              <div className="hero-slide__content">
                {index === 0 ? (
                  <h1 className="hero-slide__title">{slide.title}</h1>
                ) : (
                  <h2 className="hero-slide__title">{slide.title}</h2>
                )}
                {slide.description && (
                  <p className="hero-slide__description">{slide.description}</p>
                )}
                <div className="hero-slide__actions">
                  {slide.buttonText && (
                    <a href={slide.buttonLink || 'https://www.fajservices.ae/who-we-are/'} className="hero-slide__btn">
                      {slide.buttonText}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                  {slide.phone && (
                    <a href={slide.phoneLink || `tel:${slide.phone.replace(/\s/g, '')}`} className="hero-slide__phone">
                      <span className="hero-slide__phone-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      <span className="hero-slide__phone-number">{slide.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showDots && slides.length > 1 && (
        <div className="hero-slider__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-slider__dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ImageSlider;