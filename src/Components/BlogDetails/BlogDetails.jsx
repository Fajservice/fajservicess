import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../Data/blog.json";
import { Helmet, HelmetProvider } from "react-helmet-async";

const BlogDetails = ({ titleSeo, description, Author, Keyword, URL }) => {

  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const shareUrl = `${window.location.origin}/blog/${slug}`;
  const blogTitle = blogPost?.sec_one_h2 || "";

  const message = `Hello FAJ Services! Check this out: ${blogTitle} - ${shareUrl}`;
  useEffect(() => {

    const post = data.find(item => item.slug === slug);

    if (post) {
      setBlogPost(post);
    } else {

      setBlogPost(data[0]);
    }
  }, [slug]);

const renderParagraphWithLinks = (paragraph) => {
  const parts = [];
  let remainingText = paragraph;
  let key = 0;

  const tagRegex = /<Link url="(.*?)">(.*?)<\/Link>|<b>(.*?)<\/b>/g;
  let lastIndex = 0;
  let match;

  while ((match = tagRegex.exec(paragraph)) !== null) {
    const [fullMatch, linkUrl, linkText, boldText] = match;

    // Push text before match
    if (match.index > lastIndex) {
      parts.push(paragraph.slice(lastIndex, match.index));
    }

    if (linkUrl && linkText) {
      const isExternal = linkUrl.startsWith('http');
      parts.push(
        isExternal ? (
          <a key={key++} href={linkUrl} target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        ) : (
          <Link key={key++} to={linkUrl}>
            {linkText}
          </Link>
        )
      );
    } else if (boldText) {
      parts.push(<b key={key++}>{boldText}</b>);
    }

    lastIndex = match.index + fullMatch.length;
  }

  // Push remaining text after last match
  if (lastIndex < paragraph.length) {
    parts.push(paragraph.slice(lastIndex));
  }

  return <>{parts}</>;
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

                     {blogPost.sec_three_h3_2 && (
                      <>
                        <h3>{blogPost.sec_three_h3_2}</h3>
                        {renderContent(blogPost.sec_three_h3_content_2)}
                      </>
                    )}

                    {blogPost.sec_three_h3_3 && (
                      <>
                        <h3>{blogPost.sec_three_h3_3}</h3>
                        {renderContent(blogPost.sec_three_h3_content_3)}
                      </>
                    )}

                    {blogPost.sec_three_h3_4 && (
                      <>
                        <h3>{blogPost.sec_three_h3_4}</h3>
                        {renderContent(blogPost.sec_three_h3_content_4)}
                      </>
                    )}

                    {blogPost.sec_three_h3_5 && (
                      <>
                        <h3>{blogPost.sec_three_h3_5}</h3>
                        {renderContent(blogPost.sec_three_h3_content_5)}
                      </>
                    )}

                    {blogPost.sec_three_h3_6 && (
                      <>
                        <h3>{blogPost.sec_three_h3_6}</h3>
                        {renderContent(blogPost.sec_three_h3_content_6)}
                      </>
                    )}

                     {blogPost.sec_three_h3_7 && (
                      <>
                        <h3>{blogPost.sec_three_h3_7}</h3>
                        {renderContent(blogPost.sec_three_h3_content_7)}
                      </>
                    )}
                     {blogPost.sec_three_h3_8 && (
                      <>
                        <h3>{blogPost.sec_three_h3_8}</h3>
                        {renderContent(blogPost.sec_three_h3_content_8)}
                      </>
                    )}
                     {blogPost.sec_three_h3_9 && (
                      <>
                        <h3>{blogPost.sec_three_h3_9}</h3>
                        {renderContent(blogPost.sec_three_h3_content_9)}
                      </>
                    )}
                     {blogPost.sec_three_h3_10 && (
                      <>
                        <h3>{blogPost.sec_three_h3_10}</h3>
                        {renderContent(blogPost.sec_three_h3_content_10)}
                      </>
                    )}
                  </div>
                )}

                {/* 4rd Section */}
                {blogPost.sec_four_h2 && (
                  <div className="row">
                    <h2>{blogPost.sec_four_h2}</h2>
                    {renderContent(blogPost.sec_four_h2_p)}

                    {blogPost.sec_four_img && (
                      <div className="col-md-8">
                        <img src={blogPost.sec_four_img} alt="image" />
                      </div>
                    )}

                    {blogPost.sec_four_h3_1 && (
                      <>
                        <h3>{blogPost.sec_four_h3_1}</h3>
                        {renderContent(blogPost.sec_four_h3_content_1)}
                      </>
                    )}

                     {blogPost.sec_four_h3_2 && (
                      <>
                        <h3>{blogPost.sec_four_h3_2}</h3>
                        {renderContent(blogPost.sec_four_h3_content_2)}
                      </>
                    )}

                    {blogPost.sec_four_h3_3 && (
                      <>
                        <h3>{blogPost.sec_four_h3_3}</h3>
                        {renderContent(blogPost.sec_four_h3_content_3)}
                      </>
                    )}

                    {blogPost.sec_four_h3_4 && (
                      <>
                        <h3>{blogPost.sec_four_h3_4}</h3>
                        {renderContent(blogPost.sec_four_h3_content_4)}
                      </>
                    )}

                    {blogPost.sec_four_h3_5 && (
                      <>
                        <h3>{blogPost.sec_four_h3_5}</h3>
                        {renderContent(blogPost.sec_four_h3_content_5)}
                      </>
                    )}

                    {blogPost.sec_four_h3_6 && (
                      <>
                        <h3>{blogPost.sec_four_h3_6}</h3>
                        {renderContent(blogPost.sec_four_h3_content_6)}
                      </>
                    )}

                     {blogPost.sec_four_h3_7 && (
                      <>
                        <h3>{blogPost.sec_four_h3_7}</h3>
                        {renderContent(blogPost.sec_four_h3_content_7)}
                      </>
                    )}
                     {blogPost.sec_four_h3_8 && (
                      <>
                        <h3>{blogPost.sec_four_h3_8}</h3>
                        {renderContent(blogPost.sec_four_h3_content_8)}
                      </>
                    )}
                     {blogPost.sec_four_h3_9 && (
                      <>
                        <h3>{blogPost.sec_four_h3_9}</h3>
                        {renderContent(blogPost.sec_four_h3_content_9)}
                      </>
                    )}
                     {blogPost.sec_four_h3_10 && (
                      <>
                        <h3>{blogPost.sec_four_h3_10}</h3>
                        {renderContent(blogPost.sec_four_h3_content_10)}
                      </>
                    )}
                  </div>
                )}

                {/* 5th Section */}
                {blogPost.sec_five_h2 && (
                  <div className="row">
                    <h2>{blogPost.sec_five_h2}</h2>
                    {renderContent(blogPost.sec_five_h2_p)}

                    {blogPost.sec_five_img && (
                      <div className="col-md-8">
                        <img src={blogPost.sec_five_img} alt="image" />
                      </div>
                    )}

                    {blogPost.sec_five_h3_1 && (
                      <>
                        <h3>{blogPost.sec_five_h3_1}</h3>
                        {renderContent(blogPost.sec_five_h3_content_1)}
                      </>
                    )}

                     {blogPost.sec_five_h3_2 && (
                      <>
                        <h3>{blogPost.sec_five_h3_2}</h3>
                        {renderContent(blogPost.sec_five_h3_content_2)}
                      </>
                    )}

                    {blogPost.sec_five_h3_3 && (
                      <>
                        <h3>{blogPost.sec_five_h3_3}</h3>
                        {renderContent(blogPost.sec_five_h3_content_3)}
                      </>
                    )}

                    {blogPost.sec_five_h3_4 && (
                      <>
                        <h3>{blogPost.sec_five_h3_4}</h3>
                        {renderContent(blogPost.sec_five_h3_content_4)}
                      </>
                    )}

                    {blogPost.sec_five_h3_5 && (
                      <>
                        <h3>{blogPost.sec_five_h3_5}</h3>
                        {renderContent(blogPost.sec_five_h3_content_5)}
                      </>
                    )}

                    {blogPost.sec_five_h3_6 && (
                      <>
                        <h3>{blogPost.sec_five_h3_6}</h3>
                        {renderContent(blogPost.sec_five_h3_content_6)}
                      </>
                    )}

                     {blogPost.sec_five_h3_7 && (
                      <>
                        <h3>{blogPost.sec_five_h3_7}</h3>
                        {renderContent(blogPost.sec_five_h3_content_7)}
                      </>
                    )}
                     {blogPost.sec_five_h3_8 && (
                      <>
                        <h3>{blogPost.sec_five_h3_8}</h3>
                        {renderContent(blogPost.sec_five_h3_content_8)}
                      </>
                    )}
                     {blogPost.sec_five_h3_9 && (
                      <>
                        <h3>{blogPost.sec_five_h3_9}</h3>
                        {renderContent(blogPost.sec_five_h3_content_9)}
                      </>
                    )}
                     {blogPost.sec_five_h3_10 && (
                      <>
                        <h3>{blogPost.sec_five_h3_10}</h3>
                        {renderContent(blogPost.sec_five_h3_content_10)}
                      </>
                    )}
                    {blogPost.sec_five_h3_11 && (
                      <>
                        <h3>{blogPost.sec_five_h3_11}</h3>
                        {renderContent(blogPost.sec_five_h3_content_11)}
                      </>
                    )}
                    {blogPost.sec_five_h3_12 && (
                      <>
                        <h3>{blogPost.sec_five_h3_12}</h3>
                        {renderContent(blogPost.sec_five_h3_content_12)}
                      </>
                    )}
                    {blogPost.sec_five_h3_13 && (
                      <>
                        <h3>{blogPost.sec_five_h3_13}</h3>
                        {renderContent(blogPost.sec_five_h3_content_13)}
                      </>
                    )}
                  </div>
                )}
                
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
                    {blogPost.sec_faq_h3_2 && (
                      <>
                        <h3>{blogPost.sec_faq_h3_2}</h3>
                        {renderContent(blogPost.sec_faq_h3_p_2)}
                      </>
                    )}
                    {blogPost.sec_faq_h3_3 && (
                      <>
                        <h3>{blogPost.sec_faq_h3_3}</h3>
                        {renderContent(blogPost.sec_faq_h3_p_3)}
                      </>
                    )}
                    {blogPost.sec_faq_h3_4 && (
                      <>
                        <h3>{blogPost.sec_faq_h3_4}</h3>
                        {renderContent(blogPost.sec_faq_h3_p_4)}
                      </>
                    )}
                    {blogPost.sec_faq_h3_5 && (
                      <>
                        <h3>{blogPost.sec_faq_h3_5}</h3>
                        {renderContent(blogPost.sec_faq_h3_p_5)}
                      </>
                    )}
                    {blogPost.sec_faq_h3_6 && (
                      <>
                        <h3>{blogPost.sec_faq_h3_6}</h3>
                        {renderContent(blogPost.sec_faq_h3_p_6)}
                      </>
                    )}
                    {blogPost.sec_faq_h3_7 && (
                      <>
                        <h3>{blogPost.sec_faq_h3_7}</h3>
                        {renderContent(blogPost.sec_faq_h3_p_7)}
                      </>
                    )}
                    {blogPost.sec_faq_h3_8 && (
                      <>
                        <h3>{blogPost.sec_faq_h3_8}</h3>
                        {renderContent(blogPost.sec_faq_h3_p_8)}
                      </>
                    )}
                    {blogPost.sec_faq_h3_9 && (
                      <>
                        <h3>{blogPost.sec_faq_h3_9}</h3>
                        {renderContent(blogPost.sec_faq_h3_p_9)}
                      </>
                    )}
                    {blogPost.sec_faq_h3_10 && (
                      <>
                        <h3>{blogPost.sec_faq_h3_10}</h3>
                        {renderContent(blogPost.sec_faq_h3_p_10)}
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
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_center cs_radius_50"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>

                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blogPost?.sec_one_h2 || '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_center cs_radius_50"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>

                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_center cs_radius_50"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>

                    <a
                      href={`https://api.whatsapp.com/send?phone=+971507464712&text=${encodeURIComponent(message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cs_center cs_radius_50"
                    >
                      <i className="bi bi-whatsapp"></i>
                    </a>
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
      </section >
    </>
  );
};

export default BlogDetails;