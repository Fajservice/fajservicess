import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import { FaRegCommentDots } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";

const Blog3 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/blog.json')
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
        <div className="cs_section_heading cs_style_1 cs_type_1 cs_mb_47">
          <div className="cs_section_heading_left wow fadeInDown">
            <SectionTitle SubTitle="NEWS & UPDATES" Title="" />
          </div>
          <div className="cs_section_heading_right wow fadeInLeft">
            <Link to="/blogs/" className="cs_btn cs_style_1">
              <span>View all news</span><i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5">Loading...</div>
        ) : (
          <div className="row cs_row_gap_30 cs_gap_y_30">
            {data.slice(0, 3).map((item, i) => (
              <div key={i} className="col-lg-4">
                <div className="cs_post cs_style_1">
                  <Link to={`/blog/${item.slug}/`} className="cs_post_thumbnail">
                    <img src={item.img} alt={item.title} />
                  </Link>
                  <div className="cs_post_content_wrapper position-relative">
                    <div className="cs_post_content cs_white_bg">
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
                      <p className="cs_mb_19">{item.desc}</p>
                      <Link to={`/blog/${item.slug}/`} className="cs_text_btn cs_style_1 cs_heading_color">
                        <span className="cs_btn_text text-uppercase">Read More</span>
                        <span className="cs_btn_icon cs_center">
                          <i className="bi bi-arrow-right"></i>
                          <i className="bi bi-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                    <div className="cs_post_date cs_accent_bg cs_fs_18 cs_white_color cs_center position-absolute">
                      {item.date || "10 Oct"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cs_tyres_shape position-absolute">
          <img src={`${import.meta.env.BASE_URL}img/new-and-update-png-image.png`} alt="AC Service" />
        </div>
      </div>
      <div className="cs_height_80 cs_height_lg_80"></div>
    </section>
  );
};

export default Blog3;