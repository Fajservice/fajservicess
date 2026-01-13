import { Link } from "react-router-dom";
import { memo, useState, useEffect, useRef } from "react";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const PhoneCallIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v2h2v2h2V5h2v2h2V3h-2V1h-2v2h-2V1h-2v2z"/>
  </svg>
);

const ArrowForwardIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const CheckmarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
    <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" />
  </svg>
);

const ToolSvgIcon = memo(() => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528Z" fill="currentColor" />
  </svg>
));
ToolSvgIcon.displayName = 'ToolSvgIcon';

const CheckListItem = memo(({ text }) => (
  <li>
    <span className="cs_list_icon cs_center cs_accent_color cs_radius_50">
      <CheckmarkIcon />
    </span>
    <span>{text}</span>
  </li>
));
CheckListItem.displayName = 'CheckListItem';

const IconBox = memo(({ icon, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  

  return (
      <div className="cs_iconbox cs_style_1" ref={ref}>
      <div
        className="cs_iconbox_icon cs_center"
        style={{ minWidth: 48, minHeight: 48 }}
      >
        {isVisible && (
          <img
            src={icon}
            alt={title}
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      <h3 className="cs_iconbox_title cs_fs_24 cs_semibold">
        {title}
      </h3>
    </div>
  );
});
IconBox.displayName = 'IconBox';

const iconBoxData = [
  {
    icon: `${CDN}/icon/Routine Maintenanceee/public`,
    title: "Routine Maintenance",
  },
  {
    icon: `${CDN}/icon/fast efficient repair/public`,
    title: "Fast Efficient Repair Service",
  },
];

const checklistItems = [
  "Efficiency through expert maintenance",
  "Expertise. Integrity. Responsiveness",
  "Comprehensive Diagnostic Check",
  "Quality workmanship",
  "Guaranteed Work"
];

const DeferredShapes = memo(() => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const loadShapes = () => setShouldLoad(true);

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(loadShapes, { timeout: 2000 });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(loadShapes, 1000);
      return () => clearTimeout(id);
    }
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
       <div className="cs_about_shape_1 position-absolute">
        <img
          src={`${CDN}/shapes/gear_2/public`}
          alt=""
          width={100}
          height={100}
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      </div>

      <div className="cs_about_shape_2 position-absolute">
        <img
          src={`${CDN}/shapes/gear_1/public`}
          loading="lazy"
          decoding="async"
          aria-hidden="true"
          alt=""
        />
      </div>
    </>
  );
});
DeferredShapes.displayName = 'DeferredShapes';

const About1 = ({ img1, img2, img3, subTitle, Content }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="cs_about cs_style_1 position-relative"
    >
      <div className="cs_height_80 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_40 align-items-center">
          <div className="col-xl-6">
            <div className="cs_about_thumbnail_wrapper position-relative">
              <div className="cs_about_thumbnail">
                <img
                  src={img1}
                  alt="About FAJ Technical Services"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />
              </div>
              {isInView && (
                <>
                  <div className="cs_about_thumbnail mt-4">
                    <img
                      src={img2}
                      alt="Our professional team"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="cs_about_thumbnail">
                    <img
                      src={img3}
                      alt="Quality service delivery"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </>
              )}

              <div className="cs_esperience_text position-absolute">
                <h2 className="cs_experience_title mb-0">
                  <span className="cs_fs_100 cs_black cs_accent_color">FAJ</span>
                  <span className="cs_fs_30">was established</span>
                  <span className="cs_fs_30">Since</span>
                  <span className="cs_fs_50 cs_accent_color">2010</span>
                </h2>
              </div>

              {/* Phone CTA */}
              <a href="tel:+971507464712" className="cs_phone_call cs_heading_color">
                <div className="cs_phone_icon cs_fs_24 cs_center cs_radius_50">
                  <PhoneCallIcon size={24} />
                </div>
                <div className="cs_phone_number cs_fs_20 cs_semibold">(+971) 507464712</div>
              </a>

              {/* Decorative shapes - deferred */}
              {isInView && <DeferredShapes />}
            </div>
          </div>

          <div className="col-xl-6">
            <div className="cs_about_text">
              <div className="cs_section_heading cs_style_1 cs_mb_20">
                <h3 className="cs_section_subtitle cs_fs_18 cs_accent_color cs_semibold text-uppercase cs_mb_12">
                  <ToolSvgIcon /> {subTitle}
                </h3>
                <h2 className="cs_section_title cs_fs_50 mb-0">
                  Speedy Services Quality Results
                </h2>
              </div>

              <p className="cs_mb_40">{Content}</p>

              {/* Icon boxes */}
              <div className="cs_features_list cs_mb_32">
                {iconBoxData.map((item) => (
                  <IconBox key={item.icon} icon={item.icon} title={item.title} />
                ))}
              </div>

              {/* Checklist */}
              <ul className="cs_list cs_style_1 cs_fs_18 cs_semibold cs_heading_color cs_heading_font cs_mb_38 p-0">
                {checklistItems.map((item, index) => (
                  <CheckListItem key={index} text={item} />
                ))}
              </ul>

              <div className="cs_about_btns">
                <Link to="/about-us/" className="cs_btn cs_style_1">
                  <span>Read more</span>
                  <ArrowForwardIcon size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_80 cs_height_lg_80"></div>
    </section>
  );
};

export default memo(About1);