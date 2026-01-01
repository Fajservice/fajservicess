import React, { useEffect, useMemo, useState, useCallback, lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const PhoneIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 512 512" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"/>
  </svg>
);

const SwiperWrapper = lazy(() => 
  import("./SwiperWrapper").then(module => ({ default: module.default }))
);

const HeroBanner1 = ({ prefetchedData = null }) => {
  // Check for array with actual items, not just truthy
  const hasData = prefetchedData && prefetchedData.length > 0;
  const [data, setData] = useState(hasData ? prefetchedData : []);
  const [showSwiper, setShowSwiper] = useState(false);
  const [isLoading, setIsLoading] = useState(!hasData);

  // Update when prefetchedData changes from empty to populated
  useEffect(() => {
    if (prefetchedData && prefetchedData.length > 0) {
      setData(prefetchedData);
      setIsLoading(false);
      return;
    }

    // Only fetch if no valid prefetched data provided
    if (!prefetchedData || prefetchedData.length === 0) {
      setIsLoading(true);
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
    }
  }, [prefetchedData]);

  const firstSlide = useMemo(() => data?.[0], [data]);

  // Show swiper immediately when data is available
  useEffect(() => {
    if (!firstSlide) return;
    setShowSwiper(true);
  }, [firstSlide]);

  const renderSlide = useCallback((item, index) => {
    // Safety check - prevent render if item is undefined
    if (!item) return null;

    return (
      <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center">
        <picture>
          <source
            srcSet={`
              ${import.meta.env.BASE_URL}${item.img?.replace(/\.(jpg|jpeg|png)$/i, ".avif")} 1280w
            `}
            type="image/avif"
          />
          <source
            srcSet={`
              ${import.meta.env.BASE_URL}${item.img?.replace(/\.(jpg|jpeg|png)$/i, ".webp")} 1280w
            `}
            type="image/webp"
          />
          <img
            src={`${import.meta.env.BASE_URL}${item.img}`}
            alt={`Hero banner: ${item.title || ''}`}
            className="cs_hero_bg"
            fetchpriority="high"
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
                <ArrowIcon />
              </Link>
              <span className="cs_hero_number">
                <span
                  className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18"
                  aria-hidden="true"
                >
                  <PhoneIcon />
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
    );
  }, []);

  // Loading state - show placeholder with same dimensions
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
          {/* Show first slide immediately */}
          {!showSwiper && renderSlide(firstSlide, 0)}

          {/* Load Swiper for multiple slides */}
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