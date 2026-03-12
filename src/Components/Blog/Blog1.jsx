import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from 'react';

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const CommentIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const PeopleIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ArrowRightIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const Blog1 = ({ titleSeo, description, Author, Keyword, URL }) => {
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

  const metatitle = String(titleSeo || "Discover The Ultimate Guide To Home Maintenance - FAJ Blogs");
  const metadescription = String(description || "Welcome to FAJ Services blog! Expert insights, tips, and tricks for homeowners.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Latest Blogs");
  const metaURL = String(URL || "https://www.fajservices.ae/blogs/");
  const metaImage = `${CDN}/page_heading_1/public`;

  return (
    <>
      <Helmet>
        <title>{metatitle}</title>
        <meta name="description" content={metadescription} />
        <meta name="keywords" content={metaKeyword} />
        <meta name="author" content={metaAuthor} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={metaURL} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={metatitle} />
        <meta property="og:description" content={metadescription} />
        <meta property="og:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metatitle} />
        <meta name="twitter:description" content={metadescription} />
        <meta name="twitter:image" content={metaImage} />
        
      </Helmet>

      <section className="position-relative">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">Loading blogs...</div>
          ) : (
            <div className="row cs_row_gap_30 cs_gap_y_30 justify-content-center">
              {data.map((item, i) => (
                <div key={i} className="col-lg-4">
                  <div className="cs_post cs_style_1 cs_type_1">
                    <Link to={`/blog/${item.slug}/`} className="cs_post_thumbnail cs_mb_16 position-relative">
                      <img 
                        src={getImageSrc(item.img)} 
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="cs_post_date cs_accent_bg cs_fs_18 cs_semibold cs_white_color cs_center position-absolute">
                        {item.date}
                      </div>
                    </Link>
                    <div className="cs_post_content_wrapper">
                      <div className="cs_post_content">
                        <div className="cs_post_meta_wrapper cs_mb_11">
                          <div className="cs_post_meta">
                            <span className="cs_accent_color"><CommentIcon size={16} /></span>
                            <span className="cs_heading_color">{item.comments} Comments</span>
                          </div>
                          <div className="cs_post_meta">
                            <span className="cs_accent_color"><PeopleIcon size={16} /></span>
                            <span className="cs_heading_color">{item.admin}</span>
                          </div>
                        </div>
                        <h3 className="cs_fs_20 cs_mb_5">
                          <Link to={`/blog/${item.slug}/`}>{item.title}</Link>
                        </h3>
                        <p className="cs_mb_15">{item.shortdesc}</p>
                        <Link to={`/blog/${item.slug}/`} className="cs_text_btn cs_style_1 cs_logo_blue cs_white_color">
                          <ArrowRightIcon size={24} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="cs_height_80 cs_height_lg_40"></div>
      </section>
    </>
  );
};

export default Blog1;
