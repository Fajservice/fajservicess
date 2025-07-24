import React, { useRef, useCallback, useEffect, useState, useMemo } from "react";
import data from "../../Data/herobanner1.json";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import usePreloadImage from "../usePreloadImage";
import { MdAddIcCall } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

const HeroBanner1 = () => {
  const sliderRef = useRef(null);
  const [sliderReady, setSliderReady] = useState(false);
  const containerRef = useRef(null);

  const firstSlide = useMemo(() => data[0], []);
  usePreloadImage(
    `${import.meta.env.BASE_URL}${firstSlide.img.replace(/\.(jpg|jpeg|png)$/i, ".avif")}`
  );

  useEffect(() => {
    if (!document.querySelector('link[href*="slick.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
      link.fetchPriority = "high";
      document.head.appendChild(link);
    }

    const timer = setTimeout(() => setSliderReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBeforeChange = useCallback(() => {
    if (document.activeElement?.blur) {
      document.activeElement.blur();
    }
  }, []);

  const handleAfterChange = useCallback((currentSlide) => {
    const nextSlide = (currentSlide + 1) % data.length;
    if (nextSlide < data.length && data[nextSlide]) {
      const img = new Image();
      img.src = `${import.meta.env.BASE_URL}${data[nextSlide].img}`;
    }
  }, []);

  const settings = useMemo(
    () => ({
      dots: data.length > 1,
      infinite: data.length > 1,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      swipeToSlide: true,
      adaptiveHeight: false,
      cssEase: "ease-out",
      pauseOnHover: false,
      pauseOnFocus: false,
      waitForAnimate: true,
      useCSS: true,
      useTransform: true,
      touchThreshold: 10,
      beforeChange: handleBeforeChange,
      afterChange: handleAfterChange,
      lazyLoad: "ondemand",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: data.length > 1,
            speed: 200,
          },
        },
      ],
    }),
    [handleBeforeChange, handleAfterChange]
  );

  const renderSlide = useCallback((item, index) => (
    <div key={`hero-slide-${index}`} className="cs_slide">
      <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center">
        <picture>
          <source
            srcSet={`${import.meta.env.BASE_URL}${item.img.replace(/\.(jpg|jpeg|png)$/i, ".avif")} 1x`}
            type="image/avif"
          />
          <source
            srcSet={`${import.meta.env.BASE_URL}${item.img.replace(/\.(jpg|jpeg|png)$/i, ".webp")} 1x`}
            type="image/webp"
          />
          <img
            src={`${import.meta.env.BASE_URL}${item.img}`}
            alt={`Hero banner: ${item.title}`}
            className="cs_hero_bg"
            loading={index === 0 ? "eager" : "lazy"}
            width="1920"
            height="761"
            decoding={index === 0 ? "sync" : "async"}
            fetchpriority={index === 0 ? "high" : "auto"}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            onLoad={index === 0 ? () => performance.mark?.("hero-image-loaded") : undefined}
          />
        </picture>

        <div className="container">
          <div className="cs_hero_text">
            <h1 className="cs_hero_title cs_fs_50 cs_mb_18">{item.title}</h1>
            <p className="cs_hero_subtitle cs_mb_34">{item.desc}</p>
            <div className="cs_hero_btns">
              <Link
                to={item.btnUrl}
                className="cs_btn cs_style_1"
                aria-label={`Navigate to ${item.btnName}`}
              >
                <span>{item.btnName}</span>
                <IoIosArrowRoundForward style={{ fontSize: "24px" }} />
              </Link>
              <span className="cs_hero_number">
                <span
                  className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18"
                  aria-hidden="true"
                >
                  <MdAddIcCall style={{ fontSize: "24px" }} />
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
  ), []);

  return (
    <section
      className="cs_slider cs_style_1"
      ref={containerRef}
      aria-label="Hero banner slider"
    >
      <div className="cs_slider_container">
        <div className="cs_slider_wrapper">
          {!sliderReady && firstSlide && (
            <div className="cs_slide">
              <div className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center">
                <img
                  src={`${import.meta.env.BASE_URL}${firstSlide.img}`}
                  alt={`Hero banner: ${firstSlide.title}`}
                  className="cs_hero_bg"
                  loading="eager"
                  width="1920"
                  height="761"
                  decoding="sync"
                  fetchpriority="high"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "left center",
                  }}
                  onLoad={() => {
                    performance.mark?.("hero-image-loaded");
                    requestAnimationFrame(() => setSliderReady(true));
                  }}
                />
                <div className="container">
                  <div className="cs_hero_text">
                    <h1 className="cs_hero_title cs_fs_50 cs_mb_18">
                      {firstSlide.title}
                    </h1>
                    <p className="cs_hero_subtitle cs_mb_34">
                      {firstSlide.desc}
                    </p>
                    <div className="cs_hero_btns">
                      <Link
                        to={firstSlide.btnUrl}
                        className="cs_btn cs_style_1"
                        aria-label={`Navigate to ${firstSlide.btnName}`}
                      >
                        <span>{firstSlide.btnName}</span>
                          <IoIosArrowRoundForward style={{ fontSize: "24px" }} />
                      </Link>
                      <span className="cs_hero_number">
                        <span className="cs_hero_number_icon cs_center cs_heading_bg cs_white_color cs_fs_18">
                          <MdAddIcCall style={{ fontSize: "24px" }} />
                        </span>
                        <a
                          href={firstSlide.telLink}
                          className="cs_fs_24 cs_semibold cs_heading_color"
                          aria-label={`Call ${firstSlide.number}`}
                        >
                          {firstSlide.number}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {sliderReady && data.length > 1 && (
            <Slider {...settings}>
              {data.map((item, index) => renderSlide(item, index))}
            </Slider>
          )}

          {sliderReady && data.length === 1 && renderSlide(data[0], 0)}
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroBanner1);