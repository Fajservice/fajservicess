import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import data from "../../Data/blog.json";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaCalendarAlt} from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

const BlogDetails = ({ titleSeo, description, Author, Keyword, URL }) => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState(null);
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

  useEffect(() => {
    try {
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
  }, [slug]);

  const renderParagraphWithLinks = (paragraph) => {
    if (!paragraph || typeof paragraph !== 'string') return paragraph;
    
    // Check if the paragraph contains HTML tags other than our custom Link tags
    const hasRegularHTML = /<(?!Link|\/Link|b|\/b)[a-zA-Z]/i.test(paragraph);
    
    if (hasRegularHTML) {
      // If it contains regular HTML, we need to parse it differently
      return renderMixedContent(paragraph);
    }
    
    // Original logic for Link and b tags only
    const parts = [];
    const tagRegex = /<Link url="(.*?)">(.*?)<\/Link>|<b>(.*?)<\/b>/g;
    let lastIndex = 0;
    let key = 0;
    let match;

    try {
      while ((match = tagRegex.exec(paragraph)) !== null) {
        const [fullMatch, linkUrl, linkText, boldText] = match;

        // Push text before match
        if (match.index > lastIndex) {
          parts.push(paragraph.slice(lastIndex, match.index));
        }

        if (linkUrl && linkText) {
          // Check if it's a full URL (http/https) or starts with domain
          const isFullUrl = linkUrl.startsWith('http://') || linkUrl.startsWith('https://') || linkUrl.startsWith('www.');
          const isAbsolutePath = linkUrl.startsWith('/');
          
          if (isFullUrl) {
            // Handle full URLs - ensure they use HTTPS
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
            // Handle absolute paths - convert to full HTTPS URLs
            const fullUrl = `https://www.fajservices.ae${linkUrl}`;
            parts.push(
              <a key={`link-${key++}`} href={fullUrl} target="_blank" rel="noopener noreferrer">
                {linkText}
              </a>
            );
          } else {
            // Handle relative paths with React Router
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

      // Push remaining text after last match
      if (lastIndex < paragraph.length) {
        parts.push(paragraph.slice(lastIndex));
      }

      // Reset regex lastIndex for next use
      tagRegex.lastIndex = 0;

      return parts.length > 0 ? <>{parts}</> : paragraph;
    } catch (err) {
      console.error("Error parsing paragraph links:", err);
      return paragraph; // Return original text if parsing fails
    }
  };

  // New function to handle mixed content with HTML and custom Link tags
  const renderMixedContent = (content) => {
    try {
      // First, replace custom Link tags with placeholder tokens
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
        linkRegex.lastIndex = 0; // Reset for next iteration
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

        
        {/* Render h3 subsections */}
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
  const metaAuthor = String(Author || "F A J Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "");
  const metaURL = String(URL || `https://www.fajservices.ae/blog/${blogPost.slug}/`).replace(/\/?$/, '/');
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
                    <span className="cs_accent_color"><CiCalendarDate style={{ fontSize: "24px" }} /></span>
                    <span className="cs_heading_color">{blogPost.date}</span>
                  </div>
                  <div className="cs_post_meta">
                    <span className="cs_accent_color"><FaRegCommentDots style={{ fontSize: "24px" }} /></span>
                    <span className="cs_heading_color">{blogPost.comments} Comments</span>
                  </div>
                  <div className="cs_post_meta">
                    <span className="cs_accent_color"><IoPeopleOutline style={{ fontSize: "24px" }} /></span>
                    <span className="cs_heading_color">{blogPost.admin}</span>
                  </div>
                </div>
                
                <h1 className="cs_fs_36">{blogPost.title}</h1>
                {renderContent(blogPost.content)}

                {/* Render sections dynamically */}
                {['sec_two', 'sec_three', 'sec_four', 'sec_five', 'sec_six', 'sec_seven', 'sec_eight', 'sec_nine', 'sec_ten', 'sec_eleven', 'sec_tweleve', 'sec_thirteen', 'sec_fourteen', 'sec_fifteen', 'sec_sixteen', 'sec_seventeen', 'sec_eighteen', 'sec_nineteen', 'sec_twenty'].map(sectionName => 
                  renderSection(sectionName)
                )}

                {/* Conclusion section */}
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
                          <h3  className="cs_fs_24 mb-2">{blogPost[faqH3Key]}</h3>
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
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_center cs_radius_50"
                    >
                      <FaFacebook style={{ fontSize: "14px" }} />
                    </a>

                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blogTitle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_center cs_radius_50"
                    >
                      <FaTwitter style={{ fontSize: "14px" }} />
                    </a>

                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_center cs_radius_50"
                    >
                      <FaLinkedin style={{ fontSize: "14px" }} />
                    </a>

                    <a
                      href={`https://api.whatsapp.com/send?phone=+971507464712&text=${encodeURIComponent(message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_center cs_radius_50"
                    >
                      <FaWhatsapp style={{ fontSize: "14px" }} />
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
                      <span><IoIosArrowRoundForward style={{ fontSize: "28px" }} /></span>
                    </Link></li>
                    <li><Link to="/appliances-repair-service/">
                      <span>Home Appliances Repair Services</span>
                      <span><IoIosArrowRoundForward style={{ fontSize: "28px" }} /></span>
                    </Link></li>
                    <li><Link to="/commercial-laundry-equipment-service/">
                      <span>Laundry Equipment Service</span>
                      <span><IoIosArrowRoundForward style={{ fontSize: "28px" }} /></span>
                    </Link></li>
                    <li><Link to="/coffee-machine-service-center-in-dubai/">
                      <span>Coffee Machine Services</span>
                      <span><IoIosArrowRoundForward style={{ fontSize: "28px" }} /></span>
                    </Link></li>
                    <li><Link to="/commercial-cooking-appliances-repair-service/">
                      <span>Kitchen Equipment Repair</span>
                      <span><IoIosArrowRoundForward style={{ fontSize: "28px" }} /></span>
                    </Link></li>
                  </ul>
                </div>
                
                <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                  <div className="cs_separator"></div>
                  <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">Recent Posts</h3>
                  <div className="cs_recent_post_wrapper">
                    {data && data.length > 0 && data.slice(0, 10).map((post, index) => (
                      <div className="cs_recent_post" key={index}>
                        <Link to={`/blog/${post.slug}/`} className="cs_recent_post_thumb">
                          <img src={post.img} alt="Recent Post Image" fetchpriority="high" decoding="async" width="100%" height="auto"/>
                        </Link>
                        <div className="cs_recent_post_right">
                          <p className="cs_recent_posted_by cs_fs_14">
                            <FaCalendarAlt style={{ fontSize: "16px" }} />{post.date}
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