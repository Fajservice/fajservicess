import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle2 from "../Common/SectionTitle2";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const CommentIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const PeopleIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const BlogWashingMachine = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/WashingMachineblog.json`);
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
          <SectionTitle2
            SubTitle="NEWS & UPDATES"
            Title=""
          ></SectionTitle2>
        </div>
        <div className="row cs_row_gap_30 cs_gap_y_30">
          {data.slice(0, 6).map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="cs_post cs_style_1 cs_type_1">
                <Link to={`/blog/${item.slug}/`} className="cs_post_thumbnail cs_mb_16 position-relative">
                  <img src={getImageSrc(item.img)} alt="Post Image" />
                  <div className="cs_post_date cs_accent_bg cs_fs_18 cs_white_color cs_center position-absolute">10 Oct</div>
                </Link>
                <div className="cs_post_content_wrapper">
                  <div className="cs_post_content">
                    <div className="cs_post_meta_wrapper cs_mb_11">
                      <div className="cs_post_meta">
                        <span className="cs_accent_color"><CommentIcon size={24} /></span>
                        <span className="cs_heading_color">02 Comments</span>
                      </div>
                      <div className="cs_post_meta">
                        <span className="cs_accent_color"><PeopleIcon size={24} /></span>
                        <span className="cs_heading_color">Admin</span>
                      </div>
                    </div>
                    <h3 className="cs_fs_20 cs_mb_5"><Link to={`/blog/${item.slug}/`}> {item.title}</Link></h3>
                    <p className="cs_mb_15">{item.shortdesc}</p>
                    <Link to={`/blog/${item.slug}/`} className="cs_text_btn cs_style_1 cs_logo_blue cs_white_color">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cs_section_heading_right wow text-center mt-4">
          <Link to="/blogs/" className="cs_btn cs_style_1">
            <span>View all Articles</span><i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="cs_height_80 cs_height_lg_80"></div>
    </section>
  );
};

export default BlogWashingMachine;