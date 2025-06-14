import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../Data/blog.json";
import { Helmet, HelmetProvider } from "react-helmet-async";

const BlogDetails = ({ titleSeo, description, Author, Keyword, URL }) => {

  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {

    const post = data.find(item => item.slug === slug);

    if (post) {
      setBlogPost(post);
    } else {

      setBlogPost(data[0]);
    }
  }, [slug]);

  const renderParagraphWithLinks = (paragraph) => {

    if (typeof paragraph === 'string' && paragraph.includes('<Link url="')) {
      try {
        const linkStartIndex = paragraph.indexOf('<Link url="');
        const urlStartIndex = linkStartIndex + '<Link url="'.length;
        const urlEndIndex = paragraph.indexOf('">', urlStartIndex);
        const url = paragraph.substring(urlStartIndex, urlEndIndex);

        const linkTextStartIndex = urlEndIndex + 2; // Skip the ">
        const linkTextEndIndex = paragraph.indexOf('</Link>', linkTextStartIndex);
        const linkText = paragraph.substring(linkTextStartIndex, linkTextEndIndex);

        const beforeLinkText = paragraph.substring(0, linkStartIndex);
        const afterLinkText = paragraph.substring(linkTextEndIndex + '</Link>'.length);


        if (url.startsWith('http://') || url.startsWith('https://')) {
          return (
            <>
              {beforeLinkText}
              <Link to={url} target="_blank" rel="noopener noreferrer">{linkText}</Link>
              {afterLinkText}
            </>
          );
        } else {

          return (
            <>
              {beforeLinkText}
              <Link to={url}>{linkText}</Link>
              {afterLinkText}
            </>
          );
        }
      } catch (e) {
        console.error("Error parsing link with URL:", e);
        return paragraph;
      }
    }

    // Check if paragraph has simple <Link> tags (for internal blog links)
    if (typeof paragraph === 'string' && paragraph.includes('<Link>')) {
      // Split the content by the opening tag
      const parts = paragraph.split('<Link>');
      const beforeLink = parts[0];

      // Split the remaining content by the closing tag
      const linkParts = parts[1].split('</Link>');
      const linkText = linkParts[0];
      const afterLink = linkParts[1] || '';

      // Generate the URL slug from link text
      const slug = linkText.toLowerCase().replace(/\s+/g, '-');

      return (
        <>
          {beforeLink}
          <Link to={`/blog/${slug}`}>{linkText}</Link>
          {afterLink}
        </>
      );
    }
    return paragraph;
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
          // Handle regular string paragraphs
          return <p key={index}>{renderParagraphWithLinks(item)}</p>;
        } else {
          // Handle any other object types by converting to string
          return <p key={index}>{String(item)}</p>;
        }
      });
    } else if (typeof content === 'string') {
      return <p>{renderParagraphWithLinks(content)}</p>;
    } else {
      // Handle single object case
      return <p>{String(content)}</p>;
    }
  };

  if (!blogPost) {
    return <div className="container py-5 text-center">Loading...</div>;
  }

  // For SEO
  const metatitle = String(titleSeo || blogPost.metatitle);
  const metadescription = String(description || blogPost.metadesc);
  const metaAuthor = String(Author || "F A J Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "");
  const metaURL = String(URL || `https://www.fajservices.ae/blog/${blogPost.slug}/`).replace(/\/?$/, '/');
  const metaImage = `https://www.fajservices.ae${blogPost.img}`;

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

      <section>
        <div className="cs_height_40 cs_height_lg_10"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_60">
            <div className="col-xl-8 col-lg-7">
              <div className="cs_post_details">
                <img src={blogPost.img} alt="Post Banner" />
                <div className="cs_post_meta_wrapper cs_mb_20">
                  <div className="cs_post_meta">
                    <span className="cs_accent_color"><i className="fa-regular fa-calendar-days"></i></span>
                    <span className="cs_heading_color">{blogPost.date}</span>
                  </div>
                  <div className="cs_post_meta">
                    <span className="cs_accent_color"><i className="fa-regular fa-comments"></i></span>
                    <span className="cs_heading_color">{blogPost.comments} Comments</span>
                  </div>
                  <div className="cs_post_meta">
                    <span className="cs_accent_color"><i className="fa-regular fa-user"></i></span>
                    <span className="cs_heading_color">{blogPost.admin}</span>
                  </div>
                </div>
                <h2>{blogPost.title}</h2>
                {renderContent(blogPost.content)}

                {/* 2nd Section */}
                {blogPost.sec_two_h2 && (
                  <div className="row">
                    <h2>{blogPost.sec_two_h2}</h2>
                    {renderContent(blogPost.sec_two_h2_p)}

                    {blogPost.sec_two_img && (
                      <div className="col-md-8">
                        <img src={blogPost.sec_two_img} alt="image" />
                      </div>
                    )}

                    {blogPost.sec_two_h3_1 && (
                      <>
                        <h3>{blogPost.sec_two_h3_1}</h3>
                        {renderContent(blogPost.sec_two_h3_content_1)}
                      </>
                    )}

                    {blogPost.sec_two_h3_2 && (
                      <>
                        <h3>{blogPost.sec_two_h3_2}</h3>
                        {renderContent(blogPost.sec_two_h3_content_2)}
                      </>
                    )}

                    {blogPost.sec_two_h3_3 && (
                      <>
                        <h3>{blogPost.sec_two_h3_3}</h3>
                        {renderContent(blogPost.sec_two_h3_content_3)}
                      </>
                    )}

                    {blogPost.sec_two_h3_4 && (
                      <>
                        <h3>{blogPost.sec_two_h3_4}</h3>
                        {renderContent(blogPost.sec_two_h3_content_4)}
                      </>
                    )}

                    {blogPost.sec_two_h3_5 && (
                      <>
                        <h3>{blogPost.sec_two_h3_5}</h3>
                        {renderContent(blogPost.sec_two_h3_content_5)}
                      </>
                    )}
                  </div>
                )}

                {/* 3rd Section */}
                {blogPost.sec_three_h2 && (
                  <div className="row">
                    <h2>{blogPost.sec_three_h2}</h2>
                    {renderContent(blogPost.sec_three_h2_p)}

                    {blogPost.sec_three_img && (
                      <div className="col-md-8">
                        <img src={blogPost.sec_three_img} alt="image" />
                      </div>
                    )}

                    {blogPost.sec_three_h3_1 && (
                      <>
                        <h3>{blogPost.sec_three_h3_1}</h3>
                        {renderContent(blogPost.sec_three_h3_content_1)}
                      </>
                    )}

                    {/* Apply same pattern for all sec_three sections */}
                  </div>
                )}

                {/* Apply the same pattern for all other sections: sec_four, sec_five, etc. */}

                {/* Example for conclusion section */}
                {blogPost.sec_concln_h2 && (
                  <div className="row">
                    <h2>{blogPost.sec_concln_h2}</h2>
                    {renderContent(blogPost.sec_concln_h2_p)}
                  </div>
                )}

                {/* Example for FAQ section */}
                {blogPost.sec_faq_h2 && (
                  <div className="row">
                    <h2>{blogPost.sec_faq_h2}</h2>
                    {renderContent(blogPost.sec_faq_h2_p)}

                    {blogPost.sec_faq_h3_1 && (
                      <>
                        <h3>{blogPost.sec_faq_h3_1}</h3>
                        {renderContent(blogPost.sec_faq_h3_p_1)}
                      </>
                    )}

                    {/* Continue for all FAQ sections */}
                  </div>
                )}
              </div>

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
                    <Link to="#" className="cs_center cs_radius_50"><i className="bi bi-facebook"></i></Link>
                    <Link to="#" className="cs_center cs_radius_50"><i className="bi bi-youtube"></i></Link>
                    <Link to="#" className="cs_center cs_radius_50"><i className="bi bi-twitter"></i></Link>
                    <Link to="#" className="cs_center cs_radius_50"><i className="bi bi-linkedin"></i></Link>
                  </div>
                </div>
              </div>

              <div className="cs_comments_area">
                <div className="cs_form_wrapper cs_style_1 cs_accent_bg_light">
                  <h3 className="cs_fs_30 cs_mb_13">Leave a Reply</h3>
                  <p className="cs_mb_22">Your email Address Not Be Published. Required Fields are Marked</p>
                  <form className="row cs_row_gap_30 cs_gap_y_30">
                    <div className="col-sm-6">
                      <input type="text" name="name" placeholder="Your Name" className="cs_form_field cs_white_bg" />
                    </div>
                    <div className="col-sm-6">
                      <input type="email" name="email" placeholder="Email Address" className="cs_form_field cs_white_bg" />
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

            <aside className="col-xl-4 col-lg-5">
              <div className="cs_sidebar cs_style_1">
                <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                  <div className="cs_separator"></div>
                  <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">All Services</h3>
                  <ul className="cs_categories cs_fs_18 cs_semibold cs_mp_0">
                    <li><Link to="/ac-service-in-dubai/">
                      <span>Air Conditioning Services</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link></li>
                    <li><Link to="/appliances-repair-service/">
                      <span>Home Appliances Repair Services</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link></li>
                    <li><Link to="/commercial-laundry-equipment-service/">
                      <span>Laundry Equipment Service</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link></li>
                    <li><Link to="/coffee-machine-service-center-in-dubai/">
                      <span>Coffee Machine Services</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link></li>
                    <li><Link to="/commercial-cooking-appliances-repair-service/">
                      <span>Kitchen Equipment Repair</span>
                      <span><i className="bi bi-arrow-right"></i></span>
                    </Link></li>
                  </ul>
                </div>
                <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                  <div className="cs_separator"></div>
                  <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">Recent Posts</h3>
                  <div className="cs_recent_post_wrapper">
                    {data && data.length > 0 && data.slice(0, 10).map((post, index) => (
                      <div className="cs_recent_post" key={index}>
                        <Link to={`/blog/${post.slug}`} className="cs_recent_post_thumb">
                          <img src={post.img} alt="Recent Post Image" />
                        </Link>
                        <div className="cs_recent_post_right">
                          <p className="cs_recent_posted_by cs_fs_14">
                            <i className="bi bi-calendar-fill"></i>{post.date}</p>
                          <h3 className="cs_fs_14 mb-0">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
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