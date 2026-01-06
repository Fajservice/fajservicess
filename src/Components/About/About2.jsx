import { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ToolSvgIcon = memo(() => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M11.94 5.95L9.89 8l2.05 2.05c1.17-.34 2.33.06 3.1.83.79.79 1.13 1.92.88 2.95-.01.05-.03.1-.06.14-.03.04-.07.07-.12.09-.05.01-.1.02-.15.01-.05-.01-.09-.03-.13-.06l-.63-.63a1.16 1.16 0 00-1.64 0 1.16 1.16 0 000 1.64l.63.63c.04.03.06.08.07.13.01.05 0 .1-.01.15-.02.05-.05.09-.09.12-.04.03-.09.05-.14.06-1.03.25-2.16-.09-2.95-.88-.78-.78-1.17-1.94-.83-3.1L8 9.89l-2.05 2.05c.34 1.16-.05 2.32-.83 3.1-.79.79-1.92 1.13-2.95.88-.05-.01-.1-.03-.14-.06a.24.24 0 01-.09-.12.24.24 0 01-.01-.15c.01-.05.03-.1.06-.13l.63-.63a1.16 1.16 0 000-1.64 1.16 1.16 0 00-1.64 0l-.63.63c-.03.04-.08.06-.13.07a.24.24 0 01-.15-.01.24.24 0 01-.12-.09.24.24 0 01-.06-.14c-.25-1.03.09-2.16.88-2.95.78-.78 1.94-1.17 3.1-.83L6.11 8 4.06 5.95c-1.16.34-2.32-.05-3.1-.83-.79-.79-1.13-1.92-.88-2.95.01-.05.03-.1.06-.14a.24.24 0 01.12-.09c.05-.01.1-.02.15-.01.05.01.09.03.13.06l.63.63a1.16 1.16 0 001.64 0 1.16 1.16 0 000-1.64L1.98.53a.24.24 0 01-.07-.13.24.24 0 01.01-.15.24.24 0 01.09-.12c.04-.03.09-.05.14-.06 1.03-.25 2.16.09 2.95.88.78.78 1.17 1.94.83 3.1L8 6.11l2.05-2.05c-.34-1.16.05-2.32.83-3.1.79-.79 1.92-1.13 2.95-.88.05.01.1.03.14.06.04.03.07.07.09.12.01.05.02.1.01.15a.24.24 0 01-.06.13l-.63.63a1.16 1.16 0 000 1.64 1.16 1.16 0 001.64 0l.63-.63c.03-.03.08-.06.13-.06.05-.01.1 0 .15.01.05.02.09.05.12.09.03.04.05.09.06.14.25 1.03-.09 2.16-.88 2.95-.78.78-1.94 1.17-3.1.83z"/>
  </svg>
));
ToolSvgIcon.displayName = "ToolSvgIcon";

const ArrowSvgIcon = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));
ArrowSvgIcon.displayName = "ArrowSvgIcon";

const IconBox = memo(({ icon, title, content }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "100px" }
    );
    ref.current && obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="cs_iconbox cs_style_3">
      <div className="cs_iconbox_icon cs_center cs_white_bg cs_radius_50">
        {visible && (
          <img
            src={`${import.meta.env.BASE_URL}${icon}`}
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
            alt=""
          />
        )}
      </div>
      <div className="cs_iconbox_content">
        <h3 className="cs_fs_24 cs_semibold">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
});
IconBox.displayName = "IconBox";

const About2 = ({
  img1 = "",
  img2 = "",
  subTitle = "",
  Title = "",
  Content = "",
  box1 = "",
  boxContent1 = "",
  box2 = "",
  boxContent2 = "",
  avatar = "",
  name = "",
  designation = "",
}) => {
  return (
    <section className="cs_about cs_style_1 cs_type_1">
      <div className="container">
        <div className="row align-items-center cs_row_gap_80">
          <div className="col-xl-6">
            <img src={img1} alt="" loading="eager" />
            <img src={img2} alt="" loading="lazy" />
          </div>

          <div className="col-xl-6">
            <h3 className="cs_section_subtitle">
              <ToolSvgIcon /> {subTitle}
            </h3>
            <h2>{Title}</h2>
            <p>{Content}</p>

            <IconBox icon="img/icons/break_icon.svg" title={box1} content={boxContent1} />
            <IconBox icon="img/icons/car_2.svg" title={box2} content={boxContent2} />

            <Link to="/about-us/" className="cs_btn cs_style_1">
              <span>Read more</span>
              <ArrowSvgIcon />
            </Link>

            <div className="cs_avatar">
              <img src={avatar} alt={name} loading="lazy" />
              <div>
                <strong>{name}</strong>
                <p>{designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About2);