import { useEffect, useState, useRef, memo } from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import { Link } from "react-router-dom";

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

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

const getImageSrc = (imgPath) => {
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

// Static data to prevent layout shift - match your choose.json structure
const STATIC_DATA = [
  {
    img: "icon/whychoose1",
    title: "Expert Technicians",
    desc: "Our skilled professionals deliver quality service"
  },
  {
    img: "icon/whychoose2", 
    title: "Affordable Prices",
    desc: "Competitive rates without compromising quality"
  },
  {
    img: "icon/whychoose3",
    title: "24/7 Support",
    desc: "Round the clock assistance for emergencies"
  }
];

const Choose1 = ({ img1, content, btnName, btnUrl, img2, img3 }) => {
  const [data, setData] = useState(STATIC_DATA); // Initialize with static data
  const sectionRef = useRef(null);

  useEffect(() => {
    // Fetch to update with real data (optional, since we have static fallback)
    fetch(`${import.meta.env.BASE_URL}data/choose.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load JSON");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section ref={sectionRef} className="cs_choose_section">
      <style>{`
        .cs_choose_section {
          contain: layout style;
        }
        .cs_choose_content_wrapper {
          min-height: 280px;
        }
        .cs_features_thumbnail_1,
        .cs_features_thumbnail_2 {
          aspect-ratio: 4 / 5;
          overflow: hidden;
        }
        .cs_features_thumbnail_1 img,
        .cs_features_thumbnail_2 > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cs_features_thumbnail_3 {
          aspect-ratio: 4 / 3;
        }
        .cs_features_thumbnail_3 img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 1199px) {
          .cs_choose_content_wrapper {
            min-height: 300px;
          }
        }
      `}</style>

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
                src={getImageSrc(img1)}
                alt="Feature"
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="col-xl-4">
            <div className="cs_choose_content_wrapper">
              {data.map((item, i) => (
                <ChooseItem key={i} item={item} />
              ))}
            </div>

            <Link to={btnUrl} className="cs_btn cs_style_1 mt-2">
              <span>{btnName}</span>
              <ArrowForwardIcon size={28} />
            </Link>
          </div>

          <div className="col-xl-4">
            <div className="cs_features_thumbnail_2 position-relative">
              <img
                src={getImageSrc(img2)}
                alt="Feature"
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
              />
              <div className="cs_features_thumbnail_3">
                <img
                  src={getImageSrc(img3)}
                  alt="Feature"
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
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

const ChooseItem = memo(({ item }) => {
  const imgSrc = item.img.startsWith('https')
    ? item.img
    : `${CDN}/${item.img}/public`;

  return (
    <div className="cs_iconbox cs_style_2">
      <div className="cs_iconbox_icon cs_gray_bg cs_center cs_radius_50">
        <img
          src={imgSrc}
          alt={item.title}
          width={70}
          height={70}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="cs_iconbox_info">
        <h3 className="cs_iconbox_title cs_fs_18 cs_bold cs_mb_2">{item.title}</h3>
        <p className="cs_iconbox_subtitle cs_fs_14 mb-0">{item.desc}</p>
      </div>
    </div>
  );
});
ChooseItem.displayName = 'ChooseItem';

export default memo(Choose1);