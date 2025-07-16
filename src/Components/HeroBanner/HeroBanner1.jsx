import React, { useRef, useCallback, useEffect, lazy, Suspense, useState } from "react";
import data from "../../Data/herobanner1.json";
import { Link } from "react-router-dom";

const Slider = lazy(() => import('react-slick'));

const HeroBanner1 = () => {
  const sliderRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef(null);

  // Preload first image and load slider CSS
  useEffect(() => {
    if (data.length > 0) {
      const imgUrl = `${import.meta.env.BASE_URL}${data[0].img}`;
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imgUrl;
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }

    // Load slick CSS without layout shift
    const loadSliderCSS = () => {
      if (!document.querySelector('link[href*="slick.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css';
        document.head.appendChild(link);
      }
    };

    // Load CSS after initial render
    requestAnimationFrame(() => {
      requestAnimationFrame(loadSliderCSS);
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  // Intersection Observer with debounce
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px 50px 0px' 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Optimized slider change handlers
  const handleBeforeChange = useCallback(() => {
    if (document.activeElement?.blur) {
      requestAnimationFrame(() => {
        document.activeElement.blur();
      });
    }
  }, []);

  const handleAfterChange = useCallback(() => {
    requestAnimationFrame(() => {
      if (document.activeElement?.blur && document.activeElement !== document.body) {
        document.activeElement.blur();
      }
    });
  }, []);

  // Slider settings with optimized animations
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    adaptiveHeight: false,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Smoother easing
    pauseOnHover: false,
    pauseOnFocus: false,
    waitForAnimate: true,
    useCSS: true,
    useTransform: true,
    touchThreshold: 10,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    ref: sliderRef,
    responsive: [{
      breakpoint: 768,
      settings: { 
        dots: true,
        speed: 500 // Faster on mobile
      }
    }]
  };

  return (
    <section 
      className="cs_slider cs_style_1" 
      ref={containerRef}
      aria-label="Hero banner slider"
    >
      <div 
        className="cs_slider_container" 
        data-autoplay="0" 
        data-loop="1" 
        data-speed="600" 
        data-center="0" 
        data-variable-width="0" 
        data-slides-per-view="1"
      >
        <div className="cs_slider_wrapper">
          <Suspense fallback={
            <div 
              className="cs_hero_loading" 
              style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-live="polite"
            >
              Loading content...
            </div>
          }>
            {isIntersecting && (
              <Slider {...settings}>
                {data.map((item, index) => (
                  <div key={`hero-slide-${index}`} className="cs_slide">
                    <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center">
                      <picture>
                        <source 
                          srcSet={`${import.meta.env.BASE_URL}${item.img.replace('.jpg', '.webp')}`} 
                          type="image/webp" 
                        />
                        <img
                          src={`${import.meta.env.BASE_URL}${item.img}`}
                          alt=""
                          aria-hidden="true"
                          className="cs_hero_bg"
                          loading={index === 0 ? "eager" : "lazy"}
                          width="1920"
                          height="1080"
                          decoding="async"
                          style={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </picture>
                      <div className="container">
                        <div className="cs_hero_text">
                          <h1 
                            className="cs_hero_title cs_fs_50 cs_mb_18"
                            style={{
                              opacity: isIntersecting ? 1 : 0,
                              transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                              willChange: 'opacity, transform'
                            }}
                          >
                            {item.title}
                          </h1>
                          <p 
                            className="cs_hero_subtitle cs_mb_34"
                            style={{
                              opacity: isIntersecting ? 1 : 0,
                              transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
                              willChange: 'opacity, transform'
                            }}
                          >
                            {item.desc}
                          </p>
                          <div className="cs_hero_btns">
                            <Link 
                              to={item.btnUrl} 
                              className="cs_btn cs_style_1"
                              aria-label={`Navigate to ${item.btnName}`}
                              style={{
                                opacity: isIntersecting ? 1 : 0,
                                transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s',
                                willChange: 'opacity, transform'
                              }}
                            >
                              <span>{item.btnName}</span>
                              <i className="bi bi-arrow-right" aria-hidden="true"></i>
                            </Link>
                            <span 
                              className="cs_hero_number"
                              style={{
                                opacity: isIntersecting ? 1 : 0,
                                transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s',
                                willChange: 'opacity, transform'
                              }}
                            >
                              <span 
                                className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18"
                                aria-hidden="true"
                              >
                                <i className="bi bi-telephone-x-fill"></i>
                              </span>
                              <a 
                                href={item.telLink} 
                                className="cs_fs_24 cs_semibold cs_heading_color"
                                aria-label={`Call ${item.number}`}
                              >
                                {item.number}
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroBanner1);