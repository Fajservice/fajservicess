import { useState, useEffect, useMemo, memo } from "react";
import { Link } from "react-router-dom";

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

const CommentIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const PeopleIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ArrowRight = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg>
);

const BlogCard = memo(({ item }) => (
  <div className="col-lg-4 col-md-6">
    <div className="cs_post cs_style_1 cs_type_1">
      <Link to={`/blog/${item.slug}/`} className="cs_post_thumbnail cs_mb_16 position-relative">
        <img
          src={getImageSrc(item.img)}
          alt={item.title}
          loading="lazy"
          decoding="async"
          width="400"
          height="260"
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="cs_post_date cs_accent_bg cs_fs_18 cs_white_color cs_center position-absolute">
          {item.date || "10 Oct"}
        </div>
      </Link>
      <div className="cs_post_content_wrapper">
        <div className="cs_post_content">
          <div className="cs_post_meta_wrapper cs_mb_11">
            <div className="cs_post_meta">
              <span className="cs_accent_color">{CommentIcon}</span>
              <span className="cs_heading_color">{item.comments || "0"} Comments</span>
            </div>
            <div className="cs_post_meta">
              <span className="cs_accent_color">{PeopleIcon}</span>
              <span className="cs_heading_color">{item.admin || "Admin"}</span>
            </div>
          </div>
          <h3 className="cs_fs_20 cs_mb_5">
            <Link to={`/blog/${item.slug}/`}>{item.title}</Link>
          </h3>
          <p className="cs_mb_15">{item.shortdesc}</p>
          <Link to={`/blog/${item.slug}/`} className="cs_text_btn cs_style_1 cs_logo_blue cs_white_color">
            {ArrowRight}
          </Link>
        </div>
      </div>
    </div>
  </div>
));
BlogCard.displayName = 'BlogCard';

const BlogCategoryFilter = ({ allPosts = [], activeCat = "All", showPosts = true }) => {
  const [selectedCat, setSelectedCat] = useState(activeCat || "All");

  useEffect(() => {
    if (activeCat) setSelectedCat(activeCat);
  }, [activeCat]);

  const categories = useMemo(() => {
    const cats = allPosts
      .map(p => p.blogcat)
      .filter(Boolean);
    return ["All", ...new Set(cats)];
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    if (selectedCat === "All") return allPosts;
    return allPosts.filter(p => p.blogcat === selectedCat);
  }, [selectedCat, allPosts]);

  return (
    <div className="cs_blog_category_section">
      {/* Category Filter Buttons */}
      <div className="cs_category_filter_wrapper" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        margin: '20px 0 30px 0',
        alignItems: 'center'
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`cs_category_btn ${selectedCat === cat ? 'cs_category_btn_active' : ''}`}
            style={{
              padding: '8px 20px',
              borderRadius: '25px',
              border: '2px solid var(--cs-accent, #0066cc)',
              backgroundColor: selectedCat === cat ? 'var(--cs-accent, #001E2F)' : 'transparent',
              color: selectedCat === cat ? '#fff' : 'var(--cs-accent, #0066cc)',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              whiteSpace: 'nowrap',
              fontFamily: 'inherit',
            }}
            aria-pressed={selectedCat === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      {showPosts && (
        <>
          {filteredPosts.length === 0 ? (
            <p style={{ color: '#888', textAlign: 'center', padding: '40px 0' }}>
              No posts found in this category.
            </p>
          ) : (
            <div className="row cs_row_gap_30 cs_gap_y_30">
              {filteredPosts.map((item, i) => (
                <BlogCard key={item.slug || i} item={item} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogCategoryFilter;
