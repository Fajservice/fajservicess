import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BrandsSliderSection = ({ 
  brandsData = [],
  className = "",
  sectionId = "",
  autoplay = true,
  autoplayDelay = 3000,
  loop = true,
  speed = 600,
  spaceBetween = 20,
  showNavigation = false,
  showPagination = false,
  centeredSlides = false,
  logoMaxHeight = "80px",
  logoMaxWidth = "150px",
  containerHeight = "120px",
  breakpoints = {
    320: { slidesPerView: 2 },
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 5 },
    1200: { slidesPerView: 6 }
  }
}) => {
  
  // If no data provided, return null or show message
  if (!brandsData || brandsData.length === 0) {
    return null;
  }

  return (
    <section 
      id={sectionId}
      className={`cs_slider cs_style_1 cs_slider_gap_30 cs_bg_filed position-relative cs_py_30 ${className}`}
    >
      <div className="container">
        <div className="cs_slider_container">
          <div className="cs_slider_wrapper">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={spaceBetween}
              slidesPerView={1}
              loop={loop}
              speed={speed}
              centeredSlides={centeredSlides}
              autoplay={autoplay ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
              } : false}
              navigation={showNavigation}
              pagination={showPagination ? { clickable: true } : false}
              breakpoints={breakpoints}
              className="brands-swiper"
            >
              {brandsData.map((item, index) => (
                <SwiperSlide key={index}>
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
                      <div className="brnadlogo">
                        <img 
                          src={item.logo} 
                          alt={item.alt || `Brand ${index + 1}`} 
                          loading="lazy"
                          style={{
                            maxHeight: logoMaxHeight,
                            maxWidth: logoMaxWidth,
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                            transition: 'all 0.3s ease'
                          }}
                       
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(BrandsSliderSection);