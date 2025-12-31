import React, { useEffect, useMemo, useState, useCallback, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

// Lazy load Swiper only when needed
const SwiperWrapper = lazy(() => 
  import("./SwiperWrapper").then(module => ({ default: module.default }))
);

const HeroBanner1 = () => {
  const [data, setData] = useState([]);
  const [showSwiper, setShowSwiper] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch JSON data dynamically
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/herobanner1.json`)
      .then(res => res.json())
      .then(jsonData => {
        setData(jsonData);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load hero banner data:", err);
        setIsLoading(false);
      });
  }, []);

  const firstSlide = useMemo(() => data[0], [data]);

  // Preload first image and then show Swiper
  useEffect(() => {
    if (!firstSlide) return;
    
    const img = new Image();
    img.src = `${import.meta.env.BASE_URL}${firstSlide.img}`;
    img.decode?.().catch(() => null).finally(() => {
      requestAnimationFrame(() => setShowSwiper(true));
    });
  }, [firstSlide]);

  const renderSlide = useCallback((item, index) => (
    <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center">
      <picture>
        <source
          srcSet={`
            ${import.meta.env.BASE_URL}${item.img.replace(/\.(jpg|jpeg|png)$/i, ".avif")} 1280w
          `}
          type="image/avif"
        />
        <source
          srcSet={`
            ${import.meta.env.BASE_URL}${item.img.replace(/\.(jpg|jpeg|png)$/i, ".webp")} 1280w
          `}
          type="image/webp"
        />
        <img
          src={`${import.meta.env.BASE_URL}${item.img}`}
          alt={`Hero banner: ${item.title}`}
          className="cs_hero_bg"
        />
      </picture>

      <div className="container">
        <div className="cs_hero_text">
          <h2 className="cs_hero_title cs_fs_50 cs_mb_18">{item.title}</h2>
          <p className="cs_hero_subtitle cs_mb_34">{item.desc}</p>
          <div className="cs_hero_btns">
            <Link
              to={item.btnUrl}
              className="cs_btn cs_style_1"
              aria-label={`Navigate to ${item.btnName}`}
            >
              <span>{item.btnName}</span>
              <IoIosArrowRoundForward style={{ fontSize: 24 }} />
            </Link>
            <span className="cs_hero_number">
              <span
                className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18"
                aria-hidden="true"
              >
                <MdAddIcCall style={{ fontSize: 24 }} />
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
  ), []);

  // Loading state
  if (isLoading || !firstSlide) {
    return (
      <section className="cs_slider cs_style_1" aria-label="Hero banner slider">
        <h1 className="cs_hero_title cs_fs_50 cs_mb_18 d-none">F A J Technical Services L.L.C</h1>
        <div className="cs_slider_container">
          <div className="cs_slider_wrapper">
            <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cs_slider cs_style_1" aria-label="Hero banner slider">
      <h1 className="cs_hero_title cs_fs_50 cs_mb_18 d-none">F A J Technical Services L.L.C</h1>
      <div className="cs_slider_container">
        <div className="cs_slider_wrapper">
          {/* Show first slide immediately for best LCP */}
          {!showSwiper && renderSlide(firstSlide, 0)}

          {/* Load Swiper dynamically only after first image is painted */}
          {showSwiper && data.length > 1 && (
            <Suspense fallback={renderSlide(firstSlide, 0)}>
              <SwiperWrapper data={data} renderSlide={renderSlide} />
            </Suspense>
          )}

          {/* Single slide - no Swiper needed */}
          {showSwiper && data.length === 1 && renderSlide(data[0], 0)}
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroBanner1);