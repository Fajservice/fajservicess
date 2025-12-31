import React, { useEffect, useState, lazy, Suspense, memo } from "react";
import { Link } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

// Lazy load Swiper only when needed
const SwiperWrapper = lazy(() => import("./SwiperWrapper"));

const HeroBanner1 = () => {
  const [data, setData] = useState([]);
  const [showSwiper, setShowSwiper] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/herobanner1.json`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(console.error);
  }, []);

  // Preload first image
  useEffect(() => {
    if (!data.length) return;
    const firstSlide = data[0];
    const img = new Image();
    img.src = `${import.meta.env.BASE_URL}${firstSlide.img}`;
    img.onload = () => setShowSwiper(true);
  }, [data]);

  const renderSlide = (item, index) => (
    <div
      key={index}
      className="cs_hero cs_style_1 cs_type_1 cs_bg_filed cs_primary_bg cs_center"
    >
      <picture>
        <source
          srcSet={`${import.meta.env.BASE_URL}${item.img.replace(/\.(jpg|jpeg|png)$/i, ".avif")} 1280w`}
          type="image/avif"
        />
        <source
          srcSet={`${import.meta.env.BASE_URL}${item.img.replace(/\.(jpg|jpeg|png)$/i, ".webp")} 1280w`}
          type="image/webp"
        />
        <img
          src={`${import.meta.env.BASE_URL}${item.img}`}
          alt={`Hero banner: ${item.title}`}
          className="cs_hero_bg"
          width={1280}
          height={720} // set real aspect ratio
          loading="eager" // first slide loads immediately
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
                className="cs_fs-24 cs_semibold cs_heading_color"
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

  if (!data.length) return null;

  return (
    <section className="cs_slider cs_style_1" aria-label="Hero banner slider">
      <h1 className="cs_hero_title cs_fs_50 cs_mb_18 d-none">
        F A J Technical Services L.L.C
      </h1>
      <div className="cs_slider_container">
        <div className="cs_slider_wrapper">
          {!showSwiper && renderSlide(data[0], 0)}
          {showSwiper && data.length > 1 && (
            <Suspense fallback={renderSlide(data[0], 0)}>
              <SwiperWrapper data={data} renderSlide={renderSlide} />
            </Suspense>
          )}
          {showSwiper && data.length === 1 && renderSlide(data[0], 0)}
        </div>
      </div>
    </section>
  );
};

export default memo(HeroBanner1);
