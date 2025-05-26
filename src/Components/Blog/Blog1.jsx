import { Link } from 'react-router-dom';
import data from '../../Data/blog.json';
import { HelmetProvider } from "react-helmet-async";


const Blog1 = () => {
  // For SEO
  const titleSeo = "Discover The Ultimate Guide To Home Maintenance - FAJ Blogs";
  const description = "Welcome to FAJ Services blog! Expert insights, tips, and tricks for homeowners. Explore projects, maintenance, and services for home comfort.";
  const Author = "Faj Technical Servcies";
  const Keyword = "";
  const URL = "https://www.fajservices.com/blogs/";


  return (
    <>
      <HelmetProvider>
        <title>{titleSeo}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={Keyword} />
        <meta name="author" content={Author} />
        <meta name="robots" content="index, follow" />
        <Link rel="canonical" href={titleSeo} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={titleSeo} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />

      </HelmetProvider>


      <section className="position-relative">
        <div className="cs_height_80 cs_height_lg_40"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_30">
            {data.map((item, i) => (
              <div key={i} className="col-lg-4">
                <div className="cs_post cs_style_1 cs_type_1">
                  <Link to={`/blog/${item.slug}`} className="cs_post_thumbnail cs_mb_16 position-relative">
                    <img src={item.img} alt="Post Image" />
                    <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">
                      {item.date}
                    </div>
                  </Link>
                  <div className="cs_post_content_wrapper">
                    <div className="cs_post_content">
                      <div className="cs_post_meta_wrapper cs_mb_11">
                        <div className="cs_post_meta">
                          <span className="cs_accent_color"><i className="bi bi-chat-dots"></i></span>
                          <span className="cs_heading_color">{item.comments} Comments</span>
                        </div>
                        <div className="cs_post_meta">
                          <span className="cs_accent_color"><i className="bi bi-people"></i></span>
                          <span className="cs_heading_color">{item.admin}</span>
                        </div>
                      </div>
                      <h3 className="cs_fs_20 cs_mb_5">
                        <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <p className="cs_mb_15">{item.shortdesc}</p>
                      <Link to={`/blog/${item.slug}`} className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color">
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_80 cs_height_lg_40"></div>
      </section>
    </>
  );
};

export default Blog1;