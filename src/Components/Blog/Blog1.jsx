import { Link } from 'react-router-dom';
import data from '../../Data/blog.json';
import {Helmet, HelmetProvider } from "react-helmet-async";
import { FaRegCommentDots } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';
import { IoIosArrowRoundForward } from 'react-icons/io';


const Blog1 = ({titleSeo , description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Discover The Ultimate Guide To Home Maintenance - FAJ Blogs");
  const metadescription = String(description || "Welcome to FAJ Services blog! Expert insights, tips, and tricks for homeowners. Explore projects, maintenance, and services for home comfort.");
  const metaAuthor = String(Author || "F A J Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Latest Blogs");
  const metaURL = String(URL || "https://www.fajservices.ae/blogs/").replace(/\/?$/, '/');
const metaImage = String(Image || "https://www.fajservices.ae/dist/img/page_heading_1.avif");



  return (
    <>
       <HelmetProvider>
        <Helmet>
          <title>{metatitle}</title>
          <meta name="description" content={metadescription}></meta>
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={metatitle} />
          <meta property="og:description" content={metadescription} />
          <meta property="og:image" content={metaImage} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:image" content={metaImage} />
          <meta name="twitter:url" content={metaURL} />
        </Helmet>
      </HelmetProvider>


      <section className="position-relative">
        <div className="cs_height_80 cs_height_lg_40"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_30">
            {data.map((item, i) => (
              <div key={i} className="col-lg-4">
                <div className="cs_post cs_style_1 cs_type_1">
                  <Link to={`/blog/${item.slug}/`} className="cs_post_thumbnail cs_mb_16 position-relative">
                    <img src={item.img} alt="Post Image" />
                    <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">
                      {item.date}
                    </div>
                  </Link>
                  <div className="cs_post_content_wrapper">
                    <div className="cs_post_content">
                      <div className="cs_post_meta_wrapper cs_mb_11">
                        <div className="cs_post_meta">
                          <span className="cs_accent_color"><FaRegCommentDots /></span>
                          <span className="cs_heading_color">{item.comments} Comments</span>
                        </div>
                        <div className="cs_post_meta">
                          <span className="cs_accent_color"><IoPeopleOutline /></span>
                          <span className="cs_heading_color">{item.admin}</span>
                        </div>
                      </div>
                      <h3 className="cs_fs_20 cs_mb_5">
                        <Link to={`/blog/${item.slug}/`}>{item.title}</Link>
                      </h3>
                      <p className="cs_mb_15">{item.shortdesc}</p>
                      <Link to={`/blog/${item.slug}/`} className="cs_text_btn cs_style_1 cs_white_bg cs_accent_color">
                        <IoIosArrowRoundForward style={{ fontSize: "24px" }} />
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