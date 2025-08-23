import React, { useEffect, useMemo, useState, useCallback } from "react";
import data from "../../Data/herobanner1.json";
import { Link } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroBanner1 = () => {
  const [showSwiper, setShowSwiper] = useState(false);

  const firstSlide = useMemo(() => data[0], []);

  useEffect(() => {
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
          loading={index === 0 ? "eager" : "lazy"}
          width="1920"
          height="761"
          decoding={index === 0 ? "sync" : "async"}
          fetchpriority={index === 0 ? "high" : "auto"}
          style={{
            position: "absolute",
            inset: 0,
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

  return (
    <section className="cs_slider cs_style_1" aria-label="Hero banner slider">
      <div className="cs_slider_container">
        <div className="cs_slider_wrapper">
          {/* Instant-first paint of first slide for best LCP */}
          {!showSwiper && renderSlide(firstSlide, 0)}

          {/* Mount Swiper only after first image is painted */}
          {showSwiper && (
            data.length > 1 ? (
              <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                slidesPerView={1}
                loop={true}
                speed={300}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={false}
                pagination={{ clickable: true }}
                // keeps parsing/rendering minimal
                a11y={{ enabled: true }}
                onAfterInit={() => performance.mark?.("swiper-initialized")}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={`hero-slide-${index}`}>
                    {renderSlide(item, index)}
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              renderSlide(data[0], 0)
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroBanner1);
