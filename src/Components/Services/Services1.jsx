import React, { useEffect, useRef, useState, memo } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";


const ArrowRightIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ArrowLeftIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const Services1 = () => {
  const [data, setData] = useState([]);
  const [SwiperComponents, setSwiperComponents] = useState(null);
  const swiperRef = useRef(null);


  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/services1.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load JSON");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  // Load Swiper immediately on mount
  useEffect(() => {
    if (SwiperComponents) return;

    Promise.all([
      import("swiper/react"),
      import("swiper/modules"),
      import("swiper/css"),
      import("swiper/css/navigation")
    ]).then(([swiperReact, swiperModules]) => {
      setSwiperComponents({
        Swiper: swiperReact.Swiper,
        SwiperSlide: swiperReact.SwiperSlide,
        Navigation: swiperModules.Navigation,
        Autoplay: swiperModules.Autoplay
      });
    });
  }, [SwiperComponents]);

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  const showSwiper = SwiperComponents && data.length > 0;

  return (
    <section 
      className="cs_gray_bg cs_bg_filed position-relative" 
      data-src="assets/img/service_bg_1.avif"
    >
      <div className="cs_height_60"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_50">
          <div className="cs_section_heading_left">
            <SectionTitle
              SubTitle="Best Services"
              Title="FIND A WIDE VARIETY OF EXCELLENT SERVICES FOR HOME AND BUSINESS"
            />
          </div>
          <div className="cs_section_heading_right mb-0 wow fadeInDown">
            We exceed your expectations through trusted service. At FAJ, we specialize in technical services,
            maintenance, repair, and installation for all clients. We take pride in delivering solutions with
            expertise, teamwork, and a strong focus on customer satisfaction.
          </div>
        </div>
      </div>

      <div className="cs_slider cs_style_1 cs_slider_gap_30 wow fadeInUp">
        <div className="container">
          <div className="cs_slider_container">
            <div className="cs_slider_wrapper">
              {showSwiper ? (
                <SwiperComponents.Swiper
                  onSwiper={(swiper) => { swiperRef.current = swiper; }}
                  modules={[SwiperComponents.Navigation, SwiperComponents.Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  speed={600}
                  autoplay={false}
                  navigation={false}
                  allowTouchMove={true}
                  breakpoints={{
                    575: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1200: { slidesPerView: 3, spaceBetween: 30 }
                  }}
                  className="services-swiper"
                >
                  {data.map((item, index) => (
                    <SwiperComponents.SwiperSlide key={index}>
                      <ServiceCard item={item} />
                    </SwiperComponents.SwiperSlide>
                  ))}
                </SwiperComponents.Swiper>
              ) : (
                <ServicePlaceholder />
              )}
            </div>
            {showSwiper && (
              <SliderArrows onNext={handleNext} onPrev={handlePrev} />
            )}
          </div>
        </div>
      </div>

      <div className="cs_height_40 cs_height_lg_40"></div>
    </section>
  );
};

// Placeholder while loading
const ServicePlaceholder = () => (
  <div style={{ 
    display: "flex", 
    gap: "30px", 
    overflow: "hidden" 
  }}>
    {[1, 2, 3].map(i => (
      <div 
        key={i} 
        className="cs_slide" 
        style={{ 
          flex: "0 0 calc(33.333% - 20px)",
          minHeight: "400px",
          background: "#f5f5f5",
          borderRadius: "10px"
        }} 
      />
    ))}
  </div>
);

const ServiceCard = memo(({ item }) => (
  <div className="cs_slide">
    <div className="cs_card cs_style_1">
      <div className="cs_card_thumbnail">
        <img
          src={`${import.meta.env.BASE_URL}${item.img}`}
          alt={item.title}
        />
      </div>
      <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
        <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
          <img 
            src={`${import.meta.env.BASE_URL}${item.icon}`}
            alt={item.title}
            className="cs_service_icon"
          />
        </div>
        <h3 className="cs_card_title cs_fs_24 cs_mb_8">
          <Link to={item.btnLink}>{item.title}</Link>
        </h3>
        <p className="cs_card_subtitle cs_mb_18">{item.desc}</p>
        <Link to={item.btnLink} className="cs_text_btn cs_style_1 cs_bold cs_heading_color">
          <span className="cs_btn_text text-uppercase">{item.btnText}</span>
          <span className="cs_btn_icon cs_center">
            <DoubleArrowIcon />
          </span>
        </Link>
      </div>
    </div>
  </div>
));

const SliderArrows = memo(({ onNext, onPrev }) => (
  <div className="cs_slider_arrows cs_style_1">
    <div
      className="cs_arrow_wrap cs_arrow_wrap_left cs_center"
      onClick={onPrev}
      style={{ cursor: 'pointer' }}
    >
      <div className="cs_left_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
        <ArrowLeftIcon size={22} />
      </div>
    </div>
    <div
      className="cs_arrow_wrap cs_arrow_wrap_right cs_center"
      onClick={onNext}
      style={{ cursor: 'pointer' }}
    >
      <div className="cs_right_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
        <ArrowRightIcon size={22} />
      </div>
    </div>
  </div>
));

const DoubleArrowIcon = memo(() => (
  <>
    <ArrowRightIcon size={18} />
    <ArrowRightIcon size={18} />
  </>
));

export default memo(Services1);