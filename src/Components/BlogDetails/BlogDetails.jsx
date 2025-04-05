import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../Data/blog.json";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    // Find the blog post with the matching slug
    const post = data.find(item => item.slug === slug);

    if (post) {
      setBlogPost(post);
    } else {
      // If no matching post is found, use the first post as default
      setBlogPost(data[0]);
    }
  }, [slug]);

  const renderParagraphWithLinks = (paragraph) => {
    // Handle external links with url attribute <link url="https://...">text</link>
    if (typeof paragraph === 'string' && paragraph.includes('<link url="')) {
      try {
        const linkStartIndex = paragraph.indexOf('<link url="');
        const urlStartIndex = linkStartIndex + '<link url="'.length;
        const urlEndIndex = paragraph.indexOf('">', urlStartIndex);
        const url = paragraph.substring(urlStartIndex, urlEndIndex);

        const linkTextStartIndex = urlEndIndex + 2; // Skip the ">
        const linkTextEndIndex = paragraph.indexOf('</link>', linkTextStartIndex);
        const linkText = paragraph.substring(linkTextStartIndex, linkTextEndIndex);

        const beforeLinkText = paragraph.substring(0, linkStartIndex);
        const afterLinkText = paragraph.substring(linkTextEndIndex + '</link>'.length);

        // If external link (starts with http or https)
        if (url.startsWith('http://') || url.startsWith('https://')) {
          return (
            <>
              {beforeLinkText}
              <a href={url} target="_blank" rel="noopener noreferrer">{linkText}</a>
              {afterLinkText}
            </>
          );
        } else {
          // Internal link with custom URL
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

    // Check if paragraph has simple <link> tags (for internal blog links)
    if (typeof paragraph === 'string' && paragraph.includes('<link>')) {
      // Split the content by the opening tag
      const parts = paragraph.split('<link>');
      const beforeLink = parts[0];

      // Split the remaining content by the closing tag
      const linkParts = parts[1].split('</link>');
      const linkText = linkParts[0];
      const afterLink = linkParts[1] || '';

      // Generate the URL slug from link text
      const slug = linkText.toLowerCase().replace(/\s+/g, '-');

      return (
        <>
          {beforeLink}
          <Link to={`/blog/blog-details/${slug}`}>{linkText}</Link>
          {afterLink}
        </>
      );
    }

    // Regular paragraph without links
    return paragraph;
  };

  if (!blogPost) {
    return <div className="container py-5 text-center">Loading...</div>;
  }

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
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

              {Array.isArray(blogPost.content) ? (
                blogPost.content.map((paragraph, index) => (
                  <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                ))
              ) : (
                <p>{renderParagraphWithLinks(blogPost.content)}</p>
              )}


              {/* 2nd Section */}
              <div className="row">
                {/* Section 2 heading */}
                <h2>{blogPost.sec_two_h2}</h2>

                <div className="col-md-8">
                  {/* Section 2 Image */}
                  <img src={blogPost.sec_two_img} alt="image" />
                </div>

                {/* Section 2 Heading h3_1 */}
                <h3>{blogPost.sec_two_h3_1}</h3>

                {/* Section 2 Heading sec_two_h3_content_1*/}
                {Array.isArray(blogPost.sec_two_h3_content_1) ? (
                  blogPost.sec_two_h3_content_1.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_1)}</p>
                )}

                {/* section 2 Heading h3_2 */}
                <h3>{blogPost.sec_two_h3_2}</h3>

                {/* Section 2 Heading sec_two_h3_content_2*/}
                {Array.isArray(blogPost.sec_two_h3_content_2) ? (
                  blogPost.sec_two_h3_content_2.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_2)}</p>
                )}

                {/* section 2 Heading h3_3 */}
                <h3>{blogPost.sec_two_h3_3}</h3>

                {/* Section 2 Heading sec_two_h3_content_3*/}
                {Array.isArray(blogPost.sec_two_h3_content_3) ? (
                  blogPost.sec_two_h3_content_3.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_3)}</p>
                )}
              </div>

              {/* 3rd Section */}
              <div className="row">
                {/* Section 3 heading */}
                <h2>{blogPost.sec_three_h2}</h2>

                <div className="col-md-8">
                  {/* Section 3 Image */}
                  <img src={blogPost.sec_three_img} alt="image" />
                </div>

                {/* Section 3 Heading h3_1 */}
                <h3>{blogPost.sec_three_h3_1}</h3>

                {/* Section 3 Heading sec_three_h3_content_1*/}
                {Array.isArray(blogPost.sec_three_h3_content_1) ? (
                  blogPost.sec_three_h3_content_1.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_1)}</p>
                )}

                {/* section 3 Heading h3_2 */}
                <h3>{blogPost.sec_three_h3_2}</h3>

                {/* Section 3 Heading sec_three_h3_content_2*/}
                {Array.isArray(blogPost.sec_three_h3_content_2) ? (
                  blogPost.sec_three_h3_content_2.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_2)}</p>
                )}

                {/* section 3 Heading h3_3 */}
                <h3>{blogPost.sec_three_h3_3}</h3>

                {/* Section 3 Heading sec_three_h3_content_3*/}
                {Array.isArray(blogPost.sec_three_h3_content_3) ? (
                  blogPost.sec_three_h3_content_3.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_3)}</p>
                )}

                {/* section 3 Heading h3_4 */}
                <h3>{blogPost.sec_three_h3_4}</h3>

                {/* Section 3 Heading sec_three_h3_content_4*/}
                {Array.isArray(blogPost.sec_three_h3_content_4) ? (
                  blogPost.sec_three_h3_content_4.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_4)}</p>
                )}
              </div>

              {/* 4th Section */}
              <div className="row">
                {/* Section 4 heading */}
                <h2>{blogPost.sec_four_h2}</h2>


                {/* Section 4 Heading h3_1 */}
                <h3>{blogPost.sec_four_h3_1}</h3>

                {/* Section 4 Heading sec_Four_h3_content_1*/}
                {Array.isArray(blogPost.sec_four_h3_content_1) ? (
                  blogPost.sec_four_h3_content_1.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_four_h3_content_1)}</p>
                )}

                {/* section 4 Heading h3_2 */}
                <h3>{blogPost.sec_four_h3_2}</h3>

                {/* Section 4 Heading sec_Four_h3_content_2*/}
                {Array.isArray(blogPost.sec_four_h3_content_2) ? (
                  blogPost.sec_four_h3_content_2.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_four_h3_content_2)}</p>
                )}

                {/* section 4 Heading h3_3 */}
                <h3>{blogPost.sec_four_h3_3}</h3>

                {/* Section 4 Heading sec_Four_h3_content_3*/}
                {Array.isArray(blogPost.sec_four_h3_content_3) ? (
                  blogPost.sec_four_h3_content_3.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_four_h3_content_3)}</p>
                )}

              </div>

              {/* 5th Section */}
              <div className="row">
                {/* Section 5 heading */}
                <h2>{blogPost.sec_five_h2}</h2>

                <div className="col-md-8">
                  {/* Section 5 Image */}
                  <img src={blogPost.sec_five_img} alt="image" />
                </div>

                {/* Section 5 Heading h3_1 */}
                <h3>{blogPost.sec_five_h3_1}</h3>

                {/* Section 5 Heading sec_three_h3_content_1*/}
                {Array.isArray(blogPost.sec_five_h3_content_1) ? (
                  blogPost.sec_five_h3_content_1.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_1)}</p>
                )}

                {/* section 5 Heading h3_2 */}
                <h3>{blogPost.sec_five_h3_2}</h3>

                {/* Section 3 Heading sec_three_h3_content_2*/}
                {Array.isArray(blogPost.sec_five_h3_content_2) ? (
                  blogPost.sec_three_h3_content_2.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_2)}</p>
                )}

                {/* section 3 Heading h3_3 */}
                <h3>{blogPost.sec_five_h3_3}</h3>

                {/* Section 3 Heading sec_three_h3_content_3*/}
                {Array.isArray(blogPost.sec_three_h3_content_3) ? (
                  blogPost.sec_three_h3_content_3.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_3)}</p>
                )}

                {/* section 3 Heading h3_4 */}
                <h3>{blogPost.sec_three_h3_4}</h3>

                {/* Section 3 Heading sec_three_h3_content_4*/}
                {Array.isArray(blogPost.sec_three_h3_content_4) ? (
                  blogPost.sec_three_h3_content_4.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_4)}</p>
                )}
              </div>

            </div>
            <div className="cs_post_share_wrapper">
              <div className="cs_post_tags cs_style_1">
                <h3 className="cs_fs_24 cs_semibold">Tags:</h3>
                <div className="cs_tags_links cs_fs_14 cs_semibold cs_heading_font">
                  <a href="#" className="cs_tag_link cs_accent_bg_light">Services</a>
                  <a href="#" className="cs_tag_link cs_accent_bg_light">Auto Parts</a>
                  <a href="#" className="cs_tag_link cs_accent_bg_light">Repairs</a>
                </div>
              </div>
              <div className="cs_post_socials">
                <h3 className="cs_fs_24 cs_semibold">Share:</h3>
                <div className="cs_social_btns cs_style_1">
                  <a href="#" className="cs_center cs_radius_50"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="cs_center cs_radius_50"><i className="bi bi-youtube"></i></a>
                  <a href="#" className="cs_center cs_radius_50"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="cs_center cs_radius_50"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="cs_comments_area">
              <h2 className="cs_fs_30 cs_mb_28">{blogPost.comments} Comments</h2>
              <ul className="cs_comment_list cs_heading_font cs_mp_0">
                <li className="cs_comment_body position-relative">
                  <div className="cs_comment_thumbnail">
                    <img src="/assets/img/avatar_9.jpg" alt="Image" />
                  </div>
                  <div className="cs_comment_info">
                    <h3 className="cs_fs_20 cs_semibold cs_mb_9">Leslie Alexander</h3>
                    <div className="cs_post_meta cs_fs_14 cs_mb_9">
                      <span className="cs_accent_color"><i className="bi bi-calendar-fill"></i></span>
                      <span className="cs_heading_color">10 Oct, 2024</span>
                    </div>
                    <p className="mb-0">Most repairs can be completed within a few hours, but complex issues might take longer. We always aim a for same-day service when possible.</p>
                    <a href="#" className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase">Reply</a>
                  </div>
                </li>
                <li className="cs_comment_body position-relative">
                  <div className="cs_comment_thumbnail">
                    <img src="/assets/img/avatar_10.jpg" alt="Image" />
                  </div>
                  <div className="cs_comment_info">
                    <h3 className="cs_fs_20 cs_semibold cs_mb_9">Cameron Williamson</h3>
                    <div className="cs_post_meta cs_fs_14 cs_mb_9">
                      <span className="cs_accent_color"><i className="bi bi-calendar-fill"></i></span>
                      <span className="cs_heading_color">15 Oct, 2024</span>
                    </div>
                    <p className="mb-0">We offer free estimates before any repairs begin, so you know exactly what to expect on all part and labor, ensuring your peace of mind.</p>
                    <a href="#" className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase">Reply</a>
                  </div>
                </li>
                <li className="cs_comment_body position-relative">
                  <div className="cs_comment_thumbnail">
                    <img src="/assets/img/avatar_11.jpg" alt="Image" />
                  </div>
                  <div className="cs_comment_info">
                    <h3 className="cs_fs_20 cs_semibold cs_mb_9">Darlene Robertson</h3>
                    <div className="cs_post_meta cs_fs_14 cs_mb_9">
                      <span className="cs_accent_color"><i className="bi bi-calendar-fill"></i></span>
                      <span className="cs_heading_color">20 Oct, 2024</span>
                    </div>
                    <p className="mb-0">Tire rotation is typically recommended every 6,000 to 8,000 miles to ensure even wear and extend the life of your tires  more serious that needs attention.</p>
                    <a href="#" className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase">Reply</a>
                  </div>
                </li>
              </ul>
              <div className="cs_height_50 cs_height_lg_50"></div>
              <div className="cs_form_wrapper cs_style_1 cs_accent_bg_light">
                <h3 className="cs_fs_30 cs_mb_13">Leave a Reply</h3>
                <p className="cs_mb_22">Your email Address Not Be Published. Requied Fields are Marked</p>
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
              <div className="cs_sidebar_widget cs_accent_bg_light position-relative p-0">
                <form action="#" className="cs_search">
                  <input type="text" placeholder="Search...." />
                  <span className="cs_search_icon cs_center cs_accent_bg cs_fs_24 cs_white_color">
                    <i className="bi bi-search"></i></span>
                </form>
              </div>
              <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                <div className="cs_separator"></div>
                <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">All Services</h3>
                <ul className="cs_categories cs_fs_18 cs_semibold cs_mp_0">
                  <li><Link to="/service/service-details">
                    <span>Structural Mastery</span>
                    <span><i className="bi bi-arrow-right"></i></span>
                  </Link></li>
                  <li><Link to="/service/service-details">
                    <span>Foundation Forte</span>
                    <span><i className="bi bi-arrow-right"></i></span>
                  </Link></li>
                  <li><Link to="/service/service-details">
                    <span>Build Smart Solutions</span>
                    <span><i className="bi bi-arrow-right"></i></span>
                  </Link></li>
                  <li><Link to="/service/service-details">
                    <span>Precision Builds</span>
                    <span><i className="bi bi-arrow-right"></i></span>
                  </Link></li>
                  <li><Link to="/service/service-details">
                    <span>Apex Remodeling</span>
                    <span><i className="bi bi-arrow-right"></i></span>
                  </Link></li>
                </ul>
              </div>
              <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                <div className="cs_separator"></div>
                <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">Recent Posts</h3>
                <div className="cs_recent_post_wrapper">
                  {data.slice(0, 3).map((post, index) => (
                    <div className="cs_recent_post" key={index}>
                      <Link to={`/blog/blog-details/${post.slug}`} className="cs_recent_post_thumb">
                        <img src={post.img} alt="Recent Post Image" />
                      </Link>
                      <div className="cs_recent_post_right">
                        <p className="cs_recent_posted_by cs_fs_14">
                          <i className="bi bi-calendar-fill"></i>{post.date}</p>
                        <h3 className="cs_fs_18 cs_semibold mb-0">
                          <Link to={`/blog/blog-details/${post.slug}`}>{post.title}</Link>
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                <div className="cs_separator"></div>
                <div className="cs_sidebar_tags">
                  <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">Popular Tags</h3>
                  <div className="cs_tags_links cs_fs_14 cs_semibold cs_heading_font">
                    <a href="#" className="cs_tag_link cs_white_bg">Popular</a>
                    <a href="#" className="cs_tag_link cs_white_bg">Car</a>
                    <a href="#" className="cs_tag_link cs_white_bg">Auto Parts</a>
                    <a href="#" className="cs_tag_link cs_white_bg">Services</a>
                    <a href="#" className="cs_tag_link cs_white_bg">Repairs</a>
                    <a href="#" className="cs_tag_link cs_white_bg">Dealer</a>
                    <a href="#" className="cs_tag_link cs_white_bg">Oil</a>
                    <a href="#" className="cs_tag_link cs_white_bg">Icon</a>
                    <a href="#" className="cs_tag_link cs_white_bg">Bike</a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default BlogDetails;