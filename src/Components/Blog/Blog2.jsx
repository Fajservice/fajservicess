import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SectionTitle2 from "../Common/SectionTitle2";
import { FaRegCommentDots } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";

const Blog2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/acblog.json')
      .then(res => res.json())
      .then(blogs => {
        setData(blogs);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading blogs:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="position-relative">
      <div className="cs_height_80 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_11 cs_mb_47 text-center">
          <SectionTitle2 SubTitle="NEWS & UPDATES" Title="" />
        </div>

        {loading ? (
          <div className="text-center py-5">Loading...</div>
        ) : (
          <div className="row cs_row_gap_30 cs_gap_y_30">
            {data.slice(0, 6).map((item, i) => (
              <div key={i} className="col-lg-4">
                <div className="cs_post cs_style_1 cs_type_1">
                  <Link to={`/blog/${item.slug}/`} className="cs_post_thumbnail cs_mb_16 position-relative">
                    <img src={item.img} alt={item.title} />
                    <div className="cs_post_date cs_accent_bg cs_fs_18 cs_white_color cs_center position-absolute">
                      {item.date || "10 Oct"}
                    </div>
                  </Link>
                  <div className="cs_post_content_wrapper">
                    <div className="cs_post_content">
                      <div className="cs_post_meta_wrapper cs_mb_11">
                        <div className="cs_post_meta">
                          <span className="cs_accent_color"><FaRegCommentDots /></span>
                          <span className="cs_heading_color">{item.comments || "02"} Comments</span>
                        </div>
                        <div className="cs_post_meta">
                          <span className="cs_accent_color"><IoPeopleOutline /></span>
                          <span className="cs_heading_color">{item.admin || "Admin"}</span>
                        </div>
                      </div>
                      <h3 className="cs_fs_20 cs_mb_5">
                        <Link to={`/blog/${item.slug}/`}>{item.title}</Link>
                      </h3>
                      <p className="cs_mb_15">{item.shortdesc}</p>
                      <Link to={`/blog/${item.slug}/`} className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color">
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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

export default Blog2;