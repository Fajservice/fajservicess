import { useRef, useCallback, useEffect, lazy, Suspense } from "react";
import data from "../../Data/herobanner1.json";
import { Link } from "react-router-dom";

const Slider = lazy(() => import('react-slick'));

const HeroBanner1 = () => {
  const sliderRef = useRef(null);
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

    const loadSliderCSS = () => {
      if (!document.querySelector('link[href*="slick.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css';
        link.media = 'print';
        link.onload = () => { link.media = 'all'; };
        document.head.appendChild(link);
      }
    };

    const timer = setTimeout(loadSliderCSS, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleBeforeChange = useCallback(() => {
    const activeElement = document.activeElement;
    if (activeElement?.closest?.(".slick-slide[aria-hidden='false']")) {
      activeElement.blur();
    }
  }, []);

  const handleAfterChange = useCallback(() => {
    if (document.activeElement?.blur && document.activeElement !== document.body) {
      document.activeElement.blur();
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    adaptiveHeight: false,
    cssEase: 'ease-out',
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
      settings: { dots: true }
    }]
  };

  return (
    <section className="cs_slider cs_style_1">
      <div className="cs_slider_container" 
           data-autoplay="0" 
           data-loop="1" 
           data-speed="600" 
           data-center="0" 
           data-variable-width="0" 
           data-slides-per-view="1">
        <div className="cs_slider_wrapper">
          <Suspense fallback={<div className="cs_hero_loading">Loading...</div>}>
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={`hero-slide-${index}`} className="cs_slide">
                  <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center">
                    <picture>
                      <source srcSet={`${import.meta.env.BASE_URL}${item.img.replace('.jpg', '.webp')}`} type="image/webp" />
                      <img
                        src={`${import.meta.env.BASE_URL}${item.img}`}
                        alt=""
                        aria-hidden="true"
                        className="cs_hero_bg"
                        loading={index === 0 ? "eager" : "lazy"}
                        width="1920"
                        height="1080"
                        decoding="async"
                      />
                    </picture>
                    <div className="container">
                      <div className="cs_hero_text">
                        <h1 className="cs_hero_title cs_fs_50 cs_mb_18 animate-on-scroll">
                          {item.title}
                        </h1>
                        <p className="cs_hero_subtitle cs_mb_34 animate-on-scroll">
                          {item.desc}
                        </p>
                        <div className="cs_hero_btns">
                          <Link 
                            to={item.btnUrl} 
                            className="cs_btn cs_style_1 animate-on-scroll"
                            aria-label={`Navigate to ${item.btnName}`}
                          >
                            <span>{item.btnName}</span>
                            <i className="bi bi-arrow-right" aria-hidden="true"></i>
                          </Link>
                          <span className="cs_hero_number animate-on-scroll">
                            <span className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18"
                                  aria-hidden="true">
                              <i className="bi bi-telephone-x-fill"></i>
                            </span>
                            <a href={item.telLink} 
                               className="cs_fs_24 cs_semibold cs_heading_color"
                               aria-label={`Call ${item.number}`}>
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
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner1;