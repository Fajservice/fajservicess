import React, { useEffect, useRef, useState, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/services1.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load JSON");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 575) setSlidesPerView(1);
      else if (width < 768) setSlidesPerView(1);
      else if (width < 1200) setSlidesPerView(2);
      else setSlidesPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, data.length - slidesPerView);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [maxIndex, isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [maxIndex, isTransitioning]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  const slideWidth = 100 / slidesPerView;
  const gap = 30;

  return (
    <section
      className="cs_gray_bg cs_bg_filed position-relative"
      data-src="assets/img/service_bg_1.avif"
    >
      <style>{`
        .services-slider{position:relative;overflow:hidden;width:100%}
        .services-slider__track{display:flex;transition:transform .6s ease;will-change:transform}
        .services-slider__slide{flex-shrink:0;padding:0 15px;box-sizing:border-box}
      `}</style>

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
              {data.length > 0 ? (
                <div
                  className="services-slider"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    ref={trackRef}
                    className="services-slider__track"
                    style={{
                      transform: `translateX(calc(-${currentIndex * slideWidth}% - ${currentIndex * (gap / slidesPerView)}px))`,
                    }}
                  >
                    {data.map((item, index) => (
                      <div
                        key={index}
                        className="services-slider__slide"
                        style={{ width: `${slideWidth}%` }}
                      >
                        <ServiceCard item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <ServicePlaceholder />
              )}
            </div>
            {data.length > 0 && (
              <SliderArrows onNext={handleNext} onPrev={handlePrev} />
            )}
          </div>
        </div>
      </div>

      <div className="cs_height_40 cs_height_lg_40"></div>
    </section>
  );
};

const ServicePlaceholder = () => (
  <div style={{ display: "flex", gap: "30px", overflow: "hidden" }}>
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="cs_slide"
        style={{
          flex: "0 0 calc(33.333% - 20px)",
          minHeight: "400px",
          background: "#f5f5f5",
          borderRadius: "10px",
        }}
      />
    ))}
  </div>
);

const ServiceCard = memo(({ item }) => {
  // Main image: allow CDN OR local fallback
  const imgSrc = item.img.startsWith("https")
    ? item.img
    : `${CDN}/${item.img}/public`;

  // Service icon: ALWAYS CDN
  const iconSrc = item.icon.startsWith("https")
    ? item.icon
    : `${CDN}/${item.icon}/public`;

  return (
     <div className="cs_slide">
      <div className="cs_card cs_style_1">
        <div className="cs_card_thumbnail">
          <img
            src={imgSrc}
            alt={item.title}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
          <div className="cs_card_icon cs_center cs_mb_22">
            <img
              src={iconSrc}
              alt=""
              width={80}
              height={100}
              loading="lazy"
              decoding="async"
              aria-hidden="true"
              className="cs_service_icon"
            />
          </div>

          <h3 className="cs_card_title cs_fs_24 cs_mb_8">
            <Link to={item.btnLink}>{item.title}</Link>
          </h3>

          <p className="cs_card_subtitle cs_mb_18">{item.desc}</p>

          <Link
            to={item.btnLink}
            className="cs_text_btn cs_style_1 cs_bold cs_heading_color"
          >
            <span className="cs_btn_text text-uppercase">
              {item.btnText}
            </span>
            <span className="cs_btn_icon cs_center">
              <DoubleArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
});

const SliderArrows = memo(({ onNext, onPrev }) => (
  <div className="cs_slider_arrows cs_style_1">
    <div
      className="cs_arrow_wrap cs_arrow_wrap_left cs_center"
      onClick={onPrev}
      style={{ cursor: "pointer" }}
    >
      <div className="cs_left_arrow cs_center cs_heading_bg cs_white_color slick-arrow">
        <ArrowLeftIcon size={22} />
      </div>
    </div>
    <div
      className="cs_arrow_wrap cs_arrow_wrap_right cs_center"
      onClick={onNext}
      style={{ cursor: "pointer" }}
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