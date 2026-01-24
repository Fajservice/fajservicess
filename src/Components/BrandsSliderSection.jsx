import React, { useState, useEffect, useRef, useCallback, memo } from "react";

const BrandsSliderSection = ({ 
  brandsData = [],
  className = "",
  sectionId = "",
  autoplay = true,
  autoplayDelay = 3000,
  speed = 600,
  spaceBetween = 20,
  containerHeight = "120px",
  breakpoints = {
    320: { slidesPerView: 2 },
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 5 },
    1200: { slidesPerView: 6 }
  }
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(6);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const intervalRef = useRef(null);
  const startX = useRef(0);
  const currentX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) setSlidesPerView(breakpoints[1200]?.slidesPerView || 6);
      else if (width >= 992) setSlidesPerView(breakpoints[992]?.slidesPerView || 5);
      else if (width >= 768) setSlidesPerView(breakpoints[768]?.slidesPerView || 4);
      else if (width >= 576) setSlidesPerView(breakpoints[576]?.slidesPerView || 3);
      else setSlidesPerView(breakpoints[320]?.slidesPerView || 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints]);

  const maxIndex = Math.max(0, brandsData.length - slidesPerView);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!autoplay || brandsData.length <= slidesPerView || isDragging) return;

    intervalRef.current = setInterval(goToNext, autoplayDelay);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoplay, autoplayDelay, brandsData.length, slidesPerView, goToNext, isDragging]);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    currentX.current = e.touches[0].clientX;
    setDragOffset(currentX.current - startX.current);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    startX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    currentX.current = e.clientX;
    setDragOffset(currentX.current - startX.current);
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

  if (!brandsData || brandsData.length === 0) {
    return null;
  }

  const slideWidth = 100 / slidesPerView;

  return (
    <section 
      id={sectionId}
      className={`cs_slider_gap_30 cs_bg_filed position-relative cs_py_30 ${className}`}
    >
      <style>{`
        .brands-slider{position:relative;overflow:hidden;width:100%;cursor:grab}
        .brands-slider--dragging{cursor:grabbing}
        .brands-slider__track{display:flex;will-change:transform}
        .brands-slider__track--animate{transition:transform ${speed}ms ease}
        .brands-slider__slide{flex-shrink:0;user-select:none}
        .brands-slider__slide img{pointer-events:none}
      `}</style>

      <div className="container">
        <div className="cs_slider_container">
          <div className="cs_slider_wrapper">
            <div
              className={`brands-slider ${isDragging ? 'brands-slider--dragging' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`brands-slider__track ${!isDragging ? 'brands-slider__track--animate' : ''}`}
                style={{
                  transform: `translateX(calc(-${currentIndex * slideWidth}% - ${currentIndex * (spaceBetween / slidesPerView)}px + ${dragOffset}px))`,
                }}
              >
                {brandsData.map((item, index) => (
                  <div
                    key={index}
                    className="brands-slider__slide"
                    style={{ 
                      width: `${slideWidth}%`,
                      paddingLeft: `${spaceBetween / 2}px`,
                      paddingRight: `${spaceBetween / 2}px`,
                    }}
                  >
                    <div className="cs_slide wow fadeInLeft">
                      <div 
                        className="brandslogo-slide-container"
                        style={{
                          height: containerHeight,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px'
                        }}
                      >
                        <div className="brandlogo">
                          <img 
                            src={item.logo} 
                            alt={item.alt || `Brand ${index + 1}`} 
                            loading="lazy"
                            draggable="false"
                            style={{
                              maxHeight: 80,
                              maxWidth: 150,
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              transition: 'all 0.3s ease'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BrandsSliderSection);