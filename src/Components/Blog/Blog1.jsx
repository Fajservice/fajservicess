import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { useState, useEffect, useMemo } from 'react';

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

const POSTS_PER_PAGE = 20;

const Blog1 = ({ titleSeo, description, Author, Keyword, URL }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCat, setSelectedCat] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

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

  // All unique categories from original data (for filter buttons)
  const categories = useMemo(() => {
    const cats = data.map(p => p.blogcat).filter(Boolean);
    return ["All", ...new Set(cats)];
  }, [data]);

  // Filter by search term (title, shortdesc, blogcat)
  const searchFiltered = useMemo(() => {
    if (!searchQuery.trim()) return data;
    const lowerQuery = searchQuery.toLowerCase();
    return data.filter(item => {
      return (
        item.title?.toLowerCase().includes(lowerQuery) ||
        item.shortdesc?.toLowerCase().includes(lowerQuery) ||
        item.blogcat?.toLowerCase().includes(lowerQuery)
      );
    });
  }, [data, searchQuery]);

  // Then filter by category (if not "All")
  const filteredData = useMemo(() => {
    if (selectedCat === "All") return searchFiltered;
    return searchFiltered.filter(item => item.blogcat === selectedCat);
  }, [searchFiltered, selectedCat]);

  const totalPages = Math.ceil(filteredData.length / POSTS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredData.slice(start, start + POSTS_PER_PAGE);
  }, [filteredData, currentPage]);

  // Reset page when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCat]);

  const handleCategoryChange = (cat) => {
    setSelectedCat(cat);
  };
const ClockIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }
    if (currentPage >= totalPages - 3) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const metatitle = String(titleSeo || "Discover The Ultimate Guide To Home Maintenance - FAJ Blogs");
  const metadescription = String(description || "Welcome to FAJ Services blog! Expert insights, tips, and tricks for homeowners.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Latest Blogs");
  const metaURL = String(URL || "https://www.fajservices.ae/blogs/");
  const metaImage = `${CDN}/page_heading_1/public`;

  const pageBtnStyle = (isActive, isDisabled = false) => ({
    minWidth: '40px',
    height: '40px',
    padding: '0 12px',
    borderRadius: '6px',
    border: `2px solid ${isDisabled ? '#ddd' : 'var(--cs-accent, #0066cc)'}`,
    backgroundColor: isActive ? 'var(--cs-accent, #0066cc)' : 'transparent',
    color: isActive ? '#fff' : isDisabled ? '#bbb' : 'var(--cs-accent, #0066cc)',
    fontSize: '14px',
    fontWeight: '600',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
  });

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
            <>
              <div className='row'>
                <div className='col-md-3'>
                   {/* Search Bar */}
                  <div style={{ margin: '10px 0 20px 0' }}>
                    <label
                      htmlFor="blog-search"
                      style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '700',
                        fontSize: '18px',
                        color: '#333',
                      }}
                    >
                      Search
                    </label>
                    <div style={{ position: 'relative', maxWidth: '400px' }}>
                      {/* Search Icon (left) */}
                      <svg
                        style={{
                          position: 'absolute',
                          left: '14px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: '16px',
                          height: '16px',
                          color: '#aaa',
                          pointerEvents: 'none',
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>

                      <input
                        id="blog-search"
                        type="text"
                        placeholder="Search by title or keyword..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{
                          width: '100%',
                          padding: '10px 40px 10px 38px', // extra left padding for icon
                          borderRadius: '30px',
                          border: '2px solid #e0e0e0',
                          fontSize: '14px',
                          fontFamily: 'inherit',
                          outline: 'none',
                          transition: 'border 0.2s',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'var(--cs-accent, #0066cc)')}
                        onBlur={(e) => (e.target.style.borderColor = '#e0e0e0')}
                      />

                      {searchQuery && (
                        <button
                          onClick={clearSearch}
                          style={{
                            position: 'absolute',
                            right: '12px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            fontSize: '18px',
                            cursor: 'pointer',
                            color: '#888',
                            padding: 0,
                          }}
                          aria-label="Clear search"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Category Filter Buttons */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '10px',
                      margin: '10px 0 30px 0',
                      alignItems: 'center',
                    }}
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        style={{
                          padding: '8px 20px',
                          borderRadius: '25px',
                          border: '2px solid var(--cs-accent, #0066cc)',
                          backgroundColor: selectedCat === cat ? 'var(--cs-accent, #0066cc)' : 'transparent',
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
                </div>
                <div className='col-md-9'>
                    {/* Blog Posts Grid */}
                    
                    {/* Results count */}
                    {filteredData.length > 0 && (
                      <p style={{ color: '#888', fontSize: '14px', marginBottom: '20px' }}>
                        Showing {(currentPage - 1) * POSTS_PER_PAGE + 1}–{Math.min(currentPage * POSTS_PER_PAGE, filteredData.length)} of {filteredData.length} articles
                      </p>
                    )}

                    {/* Blog Cards Grid */}
                    {paginatedData.length === 0 ? (
                      <p style={{ textAlign: 'center', color: '#888', padding: '40px 0' }}>
                        No posts match your search.
                      </p>
                    ) : (
                      <div className="row cs_row_gap_30 cs_gap_y_30">
                        {paginatedData.map((item, i) => (
                          <div key={item.slug || i} className="col-lg-6">
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
                                    <div className="cs_post_meta">
                                      <span className="cs_accent_color"><ClockIcon size={16} /></span>
                                      <span className="cs_heading_color">{item.readtime}</span>
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

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: '8px',
                          marginTop: '50px',
                          flexWrap: 'wrap',
                        }}
                      >
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          style={pageBtnStyle(false, currentPage === 1)}
                          aria-label="Previous page"
                        >
                          ‹ Prev
                        </button>

                        {getPageNumbers().map((page, idx) =>
                          page === '...' ? (
                            <span
                              key={`ellipsis-${idx}`}
                              style={{ padding: '0 4px', color: '#888', fontSize: '18px', lineHeight: '40px' }}
                            >
                              …
                            </span>
                          ) : (
                            <button
                              key={page}
                              onClick={() => handlePageChange(page)}
                              style={pageBtnStyle(currentPage === page)}
                              aria-label={`Page ${page}`}
                              aria-current={currentPage === page ? 'page' : undefined}
                            >
                              {page}
                            </button>
                          )
                        )}

                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          style={pageBtnStyle(false, currentPage === totalPages)}
                          aria-label="Next page"
                        >
                          Next ›
                        </button>
                      </div>
                    )}
                </div>
              </div>
          
              

            </>
          )}
        </div>
        <div className="cs_height_80 cs_height_lg_40"></div>
      </section>
    </>
  );
};

export default Blog1;