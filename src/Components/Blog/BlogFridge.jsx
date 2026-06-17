import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle2 from "../Common/SectionTitle2";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  let variant = 'mobile';
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    const realWidth = width;
    if (realWidth > 1200) {
      variant = 'large';
    } else if (realWidth > 768) {
      variant = 'desktop';
    } else if (realWidth > 480) {
      variant = 'tablet';
    } else {
      variant = 'mobile';
    }
  }
  return `${CDN}/${imgPath}/${variant}`;
};
const BlogFridge = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/fridgeblog.json`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="position-relative">
      <div className="cs_height_80 cs_height_lg_80"></div>

      <div className="container">
        <div className="cs_section_heading cs_style_11 cs_mb_47 text-center">
          <SectionTitle2 SubTitle="NEWS & UPDATES" Title="" />
        </div>

        <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
          {data.slice(0, 6).map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="cs_post cs_style_1 cs_type_1">
                <Link
                  to={`/blog/${item.slug}/`}
                  className="cs_post_thumbnail cs_mb_16 position-relative"
                >
                  <img src={getImageSrc(item.img)} alt="FAJ Technical Services L.L.C" />
                  <div className="cs_post_date cs_accent_bg cs_fs_18 cs_white_color cs_center position-absolute">
                    10 Oct
                  </div>
                </Link>

                <div className="cs_post_content_wrapper">
                  <div className="cs_post_content">
                    <div className="cs_post_meta_wrapper cs_mb_11">

                      {/* COMMENTS */}
                      <div className="cs_post_meta">
                        <span className="cs_accent_color">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                          </svg>
                        </span>
                        <span className="cs_heading_color">02 Comments</span>
                      </div>

                      {/* AUTHOR */}
                      <div className="cs_post_meta">
                        <span className="cs_accent_color">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </span>
                        <span className="cs_heading_color">Admin</span>
                      </div>

                    </div>

                    <h3 className="cs_fs_20 cs_mb_5">
                      <Link to={`/blog/${item.slug}/`}>{item.title}</Link>
                    </h3>

                    <p className="cs_mb_15">{item.shortdesc}</p>

                    {/* READ MORE */}
                    <Link
                      to={`/blog/${item.slug}/`}
                      className="cs_text_btn cs_style_1 cs_logo_blue cs_white_color"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="cs_section_heading_right text-center mt-4">
          <Link to="/blogs/" className="cs_btn cs_style_1">
            <span>View all Articles</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="cs_height_80 cs_height_lg_80"></div>
    </section>
  );
};

export default BlogFridge;