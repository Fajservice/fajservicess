import { useEffect, useState, useRef, memo } from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import { Link } from "react-router-dom";

// Inline arrow SVG for forward button
const ArrowForwardIcon = ({ size = 28, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8 8-8z"
      fill="currentColor"
    />
  </svg>
);

const Choose1 = ({ img1, content, btnName, btnUrl, img2, img3 }) => {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    fetch(`${import.meta.env.BASE_URL}data/choose.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load JSON");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, [isVisible]);

  return (
    <section ref={sectionRef}>
      <div className="cs_height_80 cs_height_lg_80"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center">
          <SectionTitle2 SubTitle="WHY CHOOSE US" />
        </div>

        <div className="cs_height_27 cs_height_lg_65"></div>

        <div className="row cs_row_gap_40 cs_gap_y_40 align-items-center">
          <div className="col-xl-4">
            <div className="cs_features_thumbnail_1 position-relative">
              <img
                src={`${import.meta.env.BASE_URL}${img1}`}
                alt="Feature"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-xl-4">
            {data.length === 0 ? (
              <ChoosePlaceholder />
            ) : (
              data.map((item, i) => <ChooseItem key={i} item={item} />)
            )}

            <Link to={btnUrl} className="cs_btn cs_style_1 mt-2">
              <span>{btnName}</span>
              <ArrowForwardIcon size={28} />
            </Link>
          </div>

          <div className="col-xl-4">
            <div className="cs_features_thumbnail_2 position-relative">
              <img
                src={`${import.meta.env.BASE_URL}${img2}`}
                alt="Feature"
                loading="lazy"
              />
              <div className="cs_features_thumbnail_3">
                <img
                  src={`${import.meta.env.BASE_URL}${img3}`}
                  alt="Feature"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_height_70 cs_height_lg_70"></div>
    </section>
  );
};

// Memoized item component
const ChooseItem = memo(({ item }) => (
  <div className="cs_iconbox cs_style_2">
    <div className="cs_iconbox_icon cs_gray_bg cs_center cs_radius_50">
      <img
        src={`${import.meta.env.BASE_URL}${item.img}`}
        alt={item.title}
        loading="lazy"
      />
    </div>
    <div className="cs_iconbox_info">
      <h3 className="cs_iconbox_title cs_fs_18 cs_bold cs_mb_2">{item.title}</h3>
      <p className="cs_iconbox_subtitle cs_fs_14 mb-0">{item.desc}</p>
    </div>
  </div>
));

// Placeholder skeleton
const ChoosePlaceholder = () => (
  <>
    {[1, 2, 3].map((i) => (
      <div key={i} className="cs_iconbox cs_style_2">
        <div
          className="cs_iconbox_icon cs_gray_bg cs_center cs_radius_50"
          style={{ width: 60, height: 60, background: "#f0f0f0" }}
        />
        <div className="cs_iconbox_info" style={{ flex: 1 }}>
          <div
            style={{
              height: 18,
              width: "60%",
              background: "#f0f0f0",
              borderRadius: 4,
              marginBottom: 8,
            }}
          />
          <div
            style={{
              height: 14,
              width: "90%",
              background: "#f0f0f0",
              borderRadius: 4,
            }}
          />
        </div>
      </div>
    ))}
  </>
);

export default memo(Choose1);
