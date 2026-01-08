import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const CalendarIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const CalendarAltIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill={color}>
    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/>
  </svg>
);

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

const FacebookIcon = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 320 512" fill={color}>
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
  </svg>
);

const TwitterIcon = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill={color}>
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
  </svg>
);

const LinkedInIcon = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill={color}>
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
  </svg>
);

const WhatsAppIcon = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill={color}>
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const ArrowRightIcon = ({ size = 28, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const BlogDetails = ({ titleSeo, description, Author, Keyword, URL }) => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const shareUrl = useMemo(() => 
    blogPost ? `${window.location.origin}/blog/${slug}` : '', 
    [blogPost, slug]
  );
  
  const blogTitle = useMemo(() => 
    blogPost?.sec_one_h2 || '', 
    [blogPost]
  );

  const message = useMemo(() => 
    `Hello FAJ Services! Check this out: ${blogTitle} - ${shareUrl}`,
    [blogTitle, shareUrl]
  );

  // Fetch blog data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/blog.json`);
        const data = await response.json();
        
        setAllPosts(data);
        
        const post = data.find(item => item.slug === slug);
        
        if (post) {
          setBlogPost(post);
        } else {
          if (data && data.length > 0) {
            setBlogPost(data[0]);
          } else {
            setError("No blog posts available");
          }
        }
      } catch (err) {
        setError("Failed to load blog post");
        console.error("Error loading blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const renderParagraphWithLinks = (paragraph) => {
    if (!paragraph || typeof paragraph !== 'string') return paragraph;
    
    const hasRegularHTML = /<(?!Link|\/Link|b|\/b)[a-zA-Z]/i.test(paragraph);
    
    if (hasRegularHTML) {
      return renderMixedContent(paragraph);
    }
    
    const parts = [];
    const tagRegex = /<Link url="(.*?)">(.*?)<\/Link>|<b>(.*?)<\/b>/g;
    let lastIndex = 0;
    let key = 0;
    let match;

    try {
      while ((match = tagRegex.exec(paragraph)) !== null) {
        const [fullMatch, linkUrl, linkText, boldText] = match;

        if (match.index > lastIndex) {
          parts.push(paragraph.slice(lastIndex, match.index));
        }

        if (linkUrl && linkText) {
          const isFullUrl = linkUrl.startsWith('http://') || linkUrl.startsWith('https://') || linkUrl.startsWith('www.');
          const isAbsolutePath = linkUrl.startsWith('/');
          
          if (isFullUrl) {
            let finalUrl = linkUrl;
            if (linkUrl.startsWith('http://')) {
              finalUrl = linkUrl.replace('http://', 'https://');
            } else if (linkUrl.startsWith('www.')) {
              finalUrl = 'https://' + linkUrl;
            }
            
            parts.push(
              <a key={`link-${key++}`} href={finalUrl} target="_blank" rel="noopener noreferrer">
                {linkText}
              </a>
            );
          } else if (isAbsolutePath) {
            const fullUrl = `https://www.fajservices.ae${linkUrl}`;
            parts.push(
              <a key={`link-${key++}`} href={fullUrl} target="_blank" rel="noopener noreferrer">
                {linkText}
              </a>
            );
          } else {
            parts.push(
              <Link key={`router-link-${key++}`} to={linkUrl}>
                {linkText}
              </Link>
            );
          }
        } else if (boldText) {
          parts.push(<b key={`bold-${key++}`}>{boldText}</b>);
        }

        lastIndex = match.index + fullMatch.length;
      }

      if (lastIndex < paragraph.length) {
        parts.push(paragraph.slice(lastIndex));
      }
      tagRegex.lastIndex = 0;

      return parts.length > 0 ? <>{parts}</> : paragraph;
    } catch (err) {
      console.error("Error parsing paragraph links:", err);
      return paragraph;
    }
  };

  const renderMixedContent = (content) => {
    try {
      let processedContent = content;
      const linkMap = new Map();
      let linkCounter = 0;
      
      const linkRegex = /<Link url="(.*?)">(.*?)<\/Link>/g;
      let linkMatch;
      
      while ((linkMatch = linkRegex.exec(content)) !== null) {
        const [fullMatch, linkUrl, linkText] = linkMatch;
        const token = `__LINK_${linkCounter}__`;
        linkMap.set(token, { url: linkUrl, text: linkText });
        processedContent = processedContent.replace(fullMatch, token);
        linkCounter++;
        linkRegex.lastIndex = 0;
        processedContent = content.replace(linkRegex, (match, url, text) => {
          const token = `__LINK_${linkCounter}__`;
          linkMap.set(token, { url, text });
          linkCounter++;
          return token;
        });
        break; 
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(`<div>${processedContent}</div>`, 'text/html');
      
      const convertNodeToReact = (node, index = 0) => {
        if (node.nodeType === Node.TEXT_NODE) {
          let text = node.textContent;
          
          for (const [token, linkData] of linkMap) {
            if (text.includes(token)) {
              const parts = text.split(token);
              if (parts.length > 1) {
                const result = [];
                for (let i = 0; i < parts.length; i++) {
                  if (parts[i]) result.push(parts[i]);
                  if (i < parts.length - 1) {
                    const isFullUrl = linkData.url.startsWith('http://') || linkData.url.startsWith('https://') || linkData.url.startsWith('www.');
                    const isAbsolutePath = linkData.url.startsWith('/');
                    
                    if (isFullUrl) {
                      let finalUrl = linkData.url;
                      if (linkData.url.startsWith('http://')) {
                        finalUrl = linkData.url.replace('http://', 'https://');
                      } else if (linkData.url.startsWith('www.')) {
                        finalUrl = 'https://' + linkData.url;
                      }
                      
                      result.push(
                        <a key={`mixed-link-${index}-${i}`} href={finalUrl} target="_blank" rel="noopener noreferrer">
                          {linkData.text}
                        </a>
                      );
                    } else if (isAbsolutePath) {
                      const fullUrl = `https://www.fajservices.ae${linkData.url}`;
                      result.push(
                        <a key={`mixed-link-${index}-${i}`} href={fullUrl} target="_blank" rel="noopener noreferrer">
                          {linkData.text}
                        </a>
                      );
                    } else {
                      result.push(
                        <Link key={`mixed-router-link-${index}-${i}`} to={linkData.url}>
                          {linkData.text}
                        </Link>
                      );
                    }
                  }
                }
                return result;
              }
            }
          }
          
          return text;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const children = Array.from(node.childNodes).map((child, childIndex) => 
            convertNodeToReact(child, childIndex)
          ).flat();
          
          const props = { key: `element-${index}` };
          
          switch (node.tagName.toLowerCase()) {
            case 'ul':
              return <ul {...props}>{children}</ul>;
            case 'ol':
              return <ol {...props}>{children}</ol>;
            case 'li':
              return <li {...props}>{children}</li>;
            case 'p':
              return <p {...props}>{children}</p>;
            case 'div':
              return <div {...props}>{children}</div>;
            case 'span':
              return <span {...props}>{children}</span>;
            case 'strong':
            case 'b':
              return <strong {...props}>{children}</strong>;
            case 'em':
            case 'i':
              return <em {...props}>{children}</em>;
            case 'br':
              return <br {...props} />;
            case 'table':
              return <table key={`table-${index}`} className="table table-bordered">{children}</table>;
            case 'thead':
              return <thead key={`thead-${index}`}>{children}</thead>;
            case 'tbody':
              return <tbody key={`tbody-${index}`}>{children}</tbody>;
            case 'tr':
              return <tr key={`tr-${index}`}>{children}</tr>;
            case 'th':
              return <th key={`th-${index}`}>{children}</th>;
            case 'td':
              return <td key={`td-${index}`}>{children}</td>;
            default:
              return <span {...props}>{children}</span>;
          }
        }
        
        return null;
      };
      
      const rootDiv = doc.querySelector('div');
      const children = Array.from(rootDiv.childNodes).map((child, index) => 
        convertNodeToReact(child, index)
      ).flat();
      
      return <>{children}</>;
      
    } catch (err) {
      console.error("Error parsing mixed content:", err);
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
  };

  const renderContent = (content) => {
    if (!content) return null;

    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (typeof item === 'object' && item !== null && (item.Pros || item.Cons)) {
          return (
            <div key={index} className="pros-cons-container" style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '15px',
              padding: '15px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}>
              {item.Pros && (
                <div className="pros" style={{
                  flex: 1,
                  padding: '10px',
                  backgroundColor: '#e8f5e8',
                  borderRadius: '5px',
                  borderLeft: '4px solid #4caf50'
                }}>
                  <strong style={{ color: '#2e7d32' }}>✓ Pros:</strong>{' '}
                  <span dangerouslySetInnerHTML={{ __html: item.Pros.replace(/^<b>.*?<\/b>:\s*/, '') }} />
                </div>
              )}
              {item.Cons && (
                <div className="cons" style={{
                  flex: 1,
                  padding: '10px',
                  backgroundColor: '#ffeaea',
                  borderRadius: '5px',
                  borderLeft: '4px solid #f44336'
                }}>
                  <strong style={{ color: '#c62828' }}>✗ Cons:</strong>{' '}
                  <span dangerouslySetInnerHTML={{ __html: item.Cons.replace(/^<b>.*?<\/b>:\s*/, '') }} />
                </div>
              )}
            </div>
          );
        } else if (typeof item === 'string') {
          return <p key={index}>{renderParagraphWithLinks(item)}</p>;
        } else {
          return <p key={index}>{String(item)}</p>;
        }
      });
    } else if (typeof content === 'string') {
      return <p>{renderParagraphWithLinks(content)}</p>;
    } else {
      return <p>{String(content)}</p>;
    }
  };

  const renderSection = (sectionName) => {
    const h2Key = `${sectionName}_h2`;
    const h2PKey = `${sectionName}_h2_p`;
    const imgKey = `${sectionName}_img`;
    
    if (!blogPost[h2Key]) return null;

    return (
      <div className="row" key={sectionName}>
        <h2>{blogPost[h2Key]}</h2>
        {blogPost[imgKey] && (
          <div className="col-md-8">
            <img src={blogPost[imgKey]} alt={blogPost.title} fetchpriority="high" decoding="async" width="100%" height="auto"/>
          </div>
        )}

        {renderContent(blogPost[h2PKey])}

        {[...Array(13)].map((_, i) => {
          const h3Key = `${sectionName}_h3_${i + 1}`;
          const h3ContentKey = `${sectionName}_h3_content_${i + 1}`;
          const h3ImgKey = `${sectionName}_h3_${i + 1}_img`;
          
          if (!blogPost[h3Key]) return null;
          
          return (
            <div key={`${sectionName}_h3_${i + 1}`}>
              <h3 className="cs_fs_24 mb-2">{blogPost[h3Key]}</h3>
              {blogPost[h3ImgKey] && (
                <div className="col-md-8">
                  <img src={blogPost[h3ImgKey]} alt={blogPost.title} fetchpriority="high" decoding="async" width="100%" height="auto"/>
                </div>
              )}
              {renderContent(blogPost[h3ContentKey])}
            </div>
          );
        })}
      </div>
    );
  };

  if (loading) {
    return <div className="container py-5 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="container py-5 text-center text-danger">{error}</div>;
  }

  if (!blogPost) {
    return <div className="container py-5 text-center">Blog post not found.</div>;
  }

  const metatitle = String(titleSeo || blogPost.metatitle || blogPost.title || '');
  const metadescription = String(description || blogPost.metadesc || '');
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "");
  const metaURL = String(URL || `https://www.fajservices.ae/blog/${blogPost.slug}/`);
  const metaImage = blogPost.img ? `https://www.fajservices.ae${blogPost.img}` : '';

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{metatitle}</title>
          <meta name="description" content={metadescription} />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={metatitle} />
          <meta property="og:description" content={metadescription} />
          <meta property="og:image" content={metaImage} />
          <meta property="og:url" content={metaURL} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:image" content={metaImage} />
          <meta name="twitter:url" content={metaURL} />
        </Helmet>
      </HelmetProvider>

      <section>
        <div className="cs_height_40 cs_height_lg_10"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_60">
            <div className="col-xl-8 col-lg-7">
              <div className="cs_post_details">
                {blogPost.img && <img src={blogPost.img} alt={blogPost.title} fetchpriority="high" decoding="async" width="100%" height="auto"/>}
                
                <div className="cs_post_meta_wrapper cs_mb_20">
                  <div className="cs_post_meta">
                    <span className="cs_accent_color"><CalendarIcon size={24} /></span>
                    <span className="cs_heading_color">{blogPost.date}</span>
                  </div>
                  <div className="cs_post_meta">
                    <span className="cs_accent_color"><CommentIcon size={24} /></span>
                    <span className="cs_heading_color">{blogPost.comments} Comments</span>
                  </div>
                  <div className="cs_post_meta">
                    <span className="cs_accent_color"><PeopleIcon size={24} /></span>
                    <span className="cs_heading_color">{blogPost.admin}</span>
                  </div>
                </div>
                
                <h1 className="cs_fs_36">{blogPost.title}</h1>
                {renderContent(blogPost.content)}

                {['sec_two', 'sec_three', 'sec_four', 'sec_five', 'sec_six', 'sec_seven', 'sec_eight', 'sec_nine', 'sec_ten', 'sec_eleven', 'sec_tweleve', 'sec_thirteen', 'sec_fourteen', 'sec_fifteen', 'sec_sixteen', 'sec_seventeen', 'sec_eighteen', 'sec_nineteen', 'sec_twenty'].map(sectionName => 
                  renderSection(sectionName)
                )}

                {blogPost.sec_concln_h2 && (
                  <div className="row">
                    <h2>{blogPost.sec_concln_h2}</h2>
                    {renderContent(blogPost.sec_concln_h2_p)}
                  </div>
                )}

                {/* FAQ section */}
                {blogPost.sec_faq_h2 && (
                  <div className="row">
                    <h2>{blogPost.sec_faq_h2}</h2>
                    {renderContent(blogPost.sec_faq_h2_p)}

                    {[...Array(10)].map((_, i) => {
                      const faqH3Key = `sec_faq_h3_${i + 1}`;
                      const faqPKey = `sec_faq_h3_p_${i + 1}`;
                      
                      if (!blogPost[faqH3Key]) return null;
                      
                      return (
                        <div key={`faq_${i + 1}`}>
                          <h3 className="cs_fs_24 mb-2">{blogPost[faqH3Key]}</h3>
                          {renderContent(blogPost[faqPKey])}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Share section */}
              <div className="cs_post_share_wrapper">
                <div className="cs_post_tags cs_style_1">
                  <h3 className="cs_fs_24">Tags:</h3>
                  <div className="cs_tags_links cs_fs_14 cs_heading_font">
                    {renderContent(blogPost.sec_tag_content)}
                  </div>
                </div>

                <div className="cs_post_socials">
                  <h3 className="cs_fs_24">Share:</h3>
                  <div className="cs_social_btns cs_style_1">
                    
                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_center cs_radius_50"
                      aria-label="Share on Facebook"
                    >
                      <FacebookIcon size={14} />
                    </a>

                    
                      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blogTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_center cs_radius_50"
                      aria-label="Share on Twitter"
                    >
                      <TwitterIcon size={14} />
                    </a>

                    
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_center cs_radius_50"
                      aria-label="Share on LinkedIn"
                    >
                      <LinkedInIcon size={14} />
                    </a>

                    
                      <a href={`https://api.whatsapp.com/send?phone=+971507464712&text=${encodeURIComponent(message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_center cs_radius_50"
                      aria-label="Share on WhatsApp"
                    >
                      <WhatsAppIcon size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Comments section */}
              <div className="cs_comments_area">
                <div className="cs_form_wrapper cs_style_1 cs_accent_bg_light">
                  <h3 className="cs_fs_30 cs_mb_13">Leave a Reply</h3>
                  <p className="cs_mb_22">Your email Address Not Be Published. Required Fields are Marked</p>
                  <form className="row cs_row_gap_30 cs_gap_y_30">
                    <div className="col-sm-6">
                      <input type="text" name="name" placeholder="Your Name" className="cs_form_field cs_white_bg" />
                    </div>
                    <div className="col-sm-6">
                      <input type="email" name="email" autoComplete="email" placeholder="Email Address" className="cs_form_field cs_white_bg" />
                    </div>
                    <div className="col-sm-12">
                      <input type="text" name="website" placeholder="Enter Website" className="cs_form_field cs_white_bg" />
                    </div>
                    <div className="col-sm-12">
                      <textarea name="comment" rows="6" placeholder="Enter Your Comments" className="cs_form_field cs_white_bg"></textarea>
                    </div>
                    <div className="col-sm-12">
                      <button type="submit" className="cs_btn cs_style_1 w-100"><span>Submit</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="col-xl-4 col-lg-5">
              <div className="cs_sidebar cs_style_1">
                <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                  <div className="cs_separator"></div>
                  <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">All Services</h3>
                  <ul className="cs_categories cs_fs_18 cs_semibold cs_mp_0">
                    <li><Link to="/ac-service-in-dubai/">
                      <span>Air Conditioning Services</span>
                      <span><ArrowRightIcon size={28} /></span>
                    </Link></li>
                    <li><Link to="/appliances-repair-service/">
                      <span>Home Appliances Repair Services</span>
                      <span><ArrowRightIcon size={28} /></span>
                    </Link></li>
                    <li><Link to="/commercial-laundry-equipment-service/">
                      <span>Laundry Equipment Service</span>
                      <span><ArrowRightIcon size={28} /></span>
                    </Link></li>
                    <li><Link to="/coffee-machine-service-center-in-dubai/">
                      <span>Coffee Machine Services</span>
                      <span><ArrowRightIcon size={28} /></span>
                    </Link></li>
                    <li><Link to="/commercial-cooking-appliances-repair-service/">
                      <span>Kitchen Equipment Repair</span>
                      <span><ArrowRightIcon size={28} /></span>
                    </Link></li>
                  </ul>
                </div>
                
                <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                  <div className="cs_separator"></div>
                  <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">Recent Posts</h3>
                  <div className="cs_recent_post_wrapper">
                    {allPosts && allPosts.length > 0 && allPosts.slice(0, 10).map((post, index) => (
                      <div className="cs_recent_post" key={index}>
                        <Link to={`/blog/${post.slug}/`} className="cs_recent_post_thumb">
                          <img src={post.img} alt="Recent Post Image" fetchpriority="high" decoding="async" width="100%" height="auto"/>
                        </Link>
                        <div className="cs_recent_post_right">
                          <p className="cs_recent_posted_by cs_fs_14">
                            <CalendarAltIcon size={16} />{post.date}
                          </p>
                          <h3 className="cs_fs_14 mb-0">
                            <Link to={`/blog/${post.slug}/`}>{post.title}</Link>
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
        <div className="cs_height_80 cs_height_lg_40"></div>
      </section>
    </>
  );
};

export default BlogDetails;