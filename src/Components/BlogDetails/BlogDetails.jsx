
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
    // Handle external links with url attribute <Link url="https://...">text</Link>
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

        // If external link (starts with http or https)
        if (url.startsWith('http://') || url.startsWith('https://')) {
          return (
            <>
              {beforeLinkText}
              <Link to={url} target="_blank" rel="noopener noreferrer">{linkText}</Link>
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

    // Regular paragraph without links
    return paragraph;
  };

  if (!blogPost) {
    return <div className="container py-5 text-center">Loading...</div>;
  }

  return (
    <section>
      <div className="cs_height_80 cs_height_lg_40"></div>
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
                  <p>{blogPost.sec_two_h2_p}</p>
                  {/* Only show image if it exists */}
                  {blogPost.sec_two_img ? (
                    <div className="col-md-8">
                      <img src={blogPost.sec_two_img} alt="image" />
                    </div>
                  ) : null}

                  {/* Only show heading and content if they exist */}
                  {blogPost.sec_two_h3_1 ? (
                    <>
                      <h3>{blogPost.sec_two_h3_1}</h3>

                      {/* Section 2 Heading sec_two_h3_content_1*/}
                      {blogPost.sec_two_h3_content_1 ? (
                        Array.isArray(blogPost.sec_two_h3_content_1) ? (
                          blogPost.sec_two_h3_content_1.map((paragraph, index) => (
                            <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                          ))
                        ) : (
                          <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_1)}</p>
                        )
                      ) : null}
                    </>
                  ) : null}

                  {/* Only show heading and content if they exist */}
                  {blogPost.sec_two_h3_2 ? (
                    <>
                      <h3>{blogPost.sec_two_h3_2}</h3>

                      {/* Section 2 Heading sec_two_h3_content_2*/}
                      {blogPost.sec_two_h3_content_2 ? (
                        Array.isArray(blogPost.sec_two_h3_content_2) ? (
                          blogPost.sec_two_h3_content_2.map((paragraph, index) => (
                            <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                          ))
                        ) : (
                          <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_2)}</p>
                        )
                      ) : null}
                    </>
                  ) : null}
                  
                  {/* Only show heading and content if they exist */}
                  {blogPost.sec_two_h3_3 ? (
                    <>
                      <h3>{blogPost.sec_two_h3_3}</h3>

                      {/* Section 2 Heading sec_two_h3_content_3*/}
                      {blogPost.sec_two_h3_content_3 ? (
                        Array.isArray(blogPost.sec_two_h3_content_3) ? (
                          blogPost.sec_two_h3_content_3.map((paragraph, index) => (
                            <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                          ))
                        ) : (
                          <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_3)}</p>
                        )
                      ) : null}
                    </>
                  ) : null}
                  {blogPost.sec_two_h3_4 ? (
                    <>
                      <h3>{blogPost.sec_two_h3_4}</h3>
                        {/* Section 3 Heading sec_two_h3_content_1*/}
                      {blogPost.sec_two_h3_content_4 ? (Array.isArray(blogPost.sec_two_h3_content_4) ? (
                    blogPost.sec_two_h3_content_4.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_4)}</p>
                  )): null}
                  </>
                ) : null}
                {/* section 3 Heading h3_5 */}
                {blogPost.sec_two_h3_5 ? (
                    <>
                      <h3>{blogPost.sec_two_h3_5}</h3>
                        {/* Section 3 Heading sec_two_h3_content_1*/}
                      {blogPost.sec_two_h3_content_5 ? (Array.isArray(blogPost.sec_two_h3_content_5) ? (
                    blogPost.sec_two_h3_content_5.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_5)}</p>
                  )): null}
                  </>
                ) : null}
                  {blogPost.sec_two_h3_6 ? (
                    <>
                      <h3>{blogPost.sec_two_h3_6}</h3>
                        {/* Section 3 Heading sec_two_h3_content_1*/}
                      {blogPost.sec_two_h3_content_6 ? (Array.isArray(blogPost.sec_two_h3_content_6) ? (
                    blogPost.sec_two_h3_content_6.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_6)}</p>
                  )): null}
                  </>
                ) : null}
                  {blogPost.sec_two_h3_7 ? (
                    <>
                      <h3>{blogPost.sec_two_h3_7}</h3>
                        {/* Section 3 Heading sec_two_h3_content_1*/}
                      {blogPost.sec_two_h3_content_7 ? (Array.isArray(blogPost.sec_two_h7_content_5) ? (
                    blogPost.sec_two_h3_content_7.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_7)}</p>
                  )): null}
                  </>
                ) : null}
                  {blogPost.sec_two_h3_8 ? (
                    <>
                      <h3>{blogPost.sec_two_h3_8}</h3>
                        {/* Section 3 Heading sec_two_h3_content_1*/}
                      {blogPost.sec_two_h3_content_8 ? (Array.isArray(blogPost.sec_two_h3_content_8) ? (
                    blogPost.sec_two_h3_content_8.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_8)}</p>
                  )): null}
                  </>
                ) : null}
                  {blogPost.sec_two_h3_9 ? (
                    <>
                      <h3>{blogPost.sec_two_h3_9}</h3>
                        {/* Section 3 Heading sec_two_h3_content_1*/}
                      {blogPost.sec_two_h3_content_9 ? (Array.isArray(blogPost.sec_two_h3_content_9) ? (
                    blogPost.sec_two_h3_content_9.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_9)}</p>
                  )): null}
                  </>
                ) : null}
                  {blogPost.sec_two_h3_10 ? (
                    <>
                      <h3>{blogPost.sec_two_h3_10}</h3>
                        {/* Section 3 Heading sec_two_h3_content_1*/}
                      {blogPost.sec_two_h3_content_10 ? (Array.isArray(blogPost.sec_two_h3_content_10) ? (
                    blogPost.sec_two_h3_content_10.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_10)}</p>
                  )): null}
                  </>
                ) : null}
                  {blogPost.sec_two_h3_11 ? (
                    <>
                      <h3>{blogPost.sec_two_h3_11}</h3>
                        {/* Section 3 Heading sec_two_h3_content_1*/}
                      {blogPost.sec_two_h3_content_11 ? (Array.isArray(blogPost.sec_two_h3_content_11) ? (
                    blogPost.sec_two_h3_content_11.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_11)}</p>
                  )): null}
                  </>
                ) : null}

                              {blogPost.sec_two_h3_12 ? (
                                  <>
                                      <h3>{blogPost.sec_two_h3_12}</h3>
                                      {/* Section 3 Heading sec_two_h3_content_1*/}
                                      {blogPost.sec_two_h3_content_12 ? (Array.isArray(blogPost.sec_two_h3_content_12) ? (
                                          blogPost.sec_two_h3_content_12.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_12)}</p>
                                      )) : null}
                                  </>
                              ) : null}

                              {blogPost.sec_two_h3_13 ? (
                                  <>
                                      <h3>{blogPost.sec_two_h3_13}</h3>
                                      {/* Section 3 Heading sec_two_h3_content_1*/}
                                      {blogPost.sec_two_h3_content_13 ? (Array.isArray(blogPost.sec_two_h3_content_13) ? (
                                          blogPost.sec_two_h3_content_13.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_two_h3_content_13)}</p>
                                      )) : null}
                                  </>
                              ) : null}

                </div>
             
              {/* 3rd Section */}

              {/* condi start */}
              {blogPost.sec_three_h2 ? (
                <div className="row">
                  {/* Section 3 heading */}
                  <h2>{blogPost.sec_three_h2}</h2>
                  {blogPost.sec_three_h2_p ? (
                          Array.isArray(blogPost.sec_three_h2_p) ? (
                            blogPost.sec_three_h2_p.map((paragraph, index) => (
                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                            ))
                          ) : (
                            <p>{renderParagraphWithLinks(blogPost.sec_three_h2_p)}</p>
                          )
                        ): null}
                  {blogPost.sec_three_img ? (
                    <div className="col-md-8">
                      {/* Section 3 Image */}
                      <img src={blogPost.sec_three_img} alt="image" />
                    </div>
                  ) : null}

                  {/* Section 3 Heading h3_1 */}
                  {blogPost.sec_three_h3_1 ? (
                    <>
                      <h3>{blogPost.sec_three_h3_1}</h3>
                        {/* Section 3 Heading sec_three_h3_content_1*/}
                      {blogPost.sec_three_h3_content_1 ? (
                          Array.isArray(blogPost.sec_three_h3_content_1) ? (
                            blogPost.sec_three_h3_content_1.map((paragraph, index) => (
                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                            ))
                          ) : (
                            <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_1)}</p>
                          )
                        ): null}
                      </>
                    ) : null}

                  {/* section 3 Heading h3_2 */}
                  {blogPost.sec_three_h3_2 ? (
                    <>
                      <h3>{blogPost.sec_three_h3_2}</h3>
                        {/* Section 3 Heading sec_three_h3_content_1*/}
                      {blogPost.sec_three_h3_content_2 ? (
                        Array.isArray(blogPost.sec_three_h3_content_2) ? (
                        blogPost.sec_three_h3_content_2.map((paragraph, index) => (
                          <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                        ))
                      ) : (
                        <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_2)}</p>
                      )): null}
                        </>
                      ) : null}
                  {/* section 3 Heading h3_3 */}
                  {blogPost.sec_three_h3_3 ? (
                    <>
                      <h3>{blogPost.sec_three_h3_3}</h3>
                        {/* Section 3 Heading sec_three_h3_content_1*/}
                      {blogPost.sec_three_h3_content_3 ? (
                        Array.isArray(blogPost.sec_three_h3_content_3) ? (
                    blogPost.sec_three_h3_content_3.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_3)}</p>
                  )): null}
                  </>
                ) : null}
                  {/* section 3 Heading h3_4 */}
                  {blogPost.sec_three_h3_4 ? (
                    <>
                      <h3>{blogPost.sec_three_h3_4}</h3>
                        {/* Section 3 Heading sec_three_h3_content_1*/}
                      {blogPost.sec_three_h3_content_4 ? (Array.isArray(blogPost.sec_three_h3_content_4) ? (
                    blogPost.sec_three_h3_content_4.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_4)}</p>
                  )): null}
                  </>
                ) : null}
                {/* section 3 Heading h3_5 */}
                {blogPost.sec_three_h3_5 ? (
                    <>
                      <h3>{blogPost.sec_three_h3_5}</h3>
                        {/* Section 3 Heading sec_three_h3_content_1*/}
                      {blogPost.sec_three_h3_content_5 ? (Array.isArray(blogPost.sec_three_h3_content_5) ? (
                    blogPost.sec_three_h3_content_5.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_5)}</p>
                  )): null}
                  </>
                ) : null}
                {blogPost.sec_three_h3_6 ? (
                    <>
                      <h3>{blogPost.sec_three_h3_6}</h3>
                        {/* Section 3 Heading sec_three_h3_content_1*/}
                      {blogPost.sec_three_h3_content_6 ? (Array.isArray(blogPost.sec_three_h3_content_6) ? (
                    blogPost.sec_three_h3_content_6.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_6)}</p>
                  )): null}
                  </>
                ) : null}
                {blogPost.sec_three_h3_7 ? (
                    <>
                      <h3>{blogPost.sec_three_h3_7}</h3>
                        {/* Section 3 Heading sec_three_h3_content_1*/}
                      {blogPost.sec_three_h3_content_7 ? (Array.isArray(blogPost.sec_three_h7_content_5) ? (
                    blogPost.sec_three_h3_content_7.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_7)}</p>
                  )): null}
                  </>
                ) : null}
                {blogPost.sec_three_h3_8 ? (
                    <>
                      <h3>{blogPost.sec_three_h3_8}</h3>
                        {/* Section 3 Heading sec_three_h3_content_1*/}
                      {blogPost.sec_three_h3_content_8 ? (Array.isArray(blogPost.sec_three_h3_content_8) ? (
                    blogPost.sec_three_h3_content_8.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_8)}</p>
                  )): null}
                  </>
                ) : null}
                {blogPost.sec_three_h3_9 ? (
                    <>
                      <h3>{blogPost.sec_three_h3_9}</h3>
                        {/* Section 3 Heading sec_three_h3_content_1*/}
                      {blogPost.sec_three_h3_content_9 ? (Array.isArray(blogPost.sec_three_h3_content_9) ? (
                    blogPost.sec_three_h3_content_9.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_9)}</p>
                  )): null}
                  </>
                ) : null}
                {blogPost.sec_three_h3_10 ? (
                    <>
                      <h3>{blogPost.sec_three_h3_10}</h3>
                        {/* Section 3 Heading sec_three_h3_content_1*/}
                      {blogPost.sec_three_h3_content_10 ? (Array.isArray(blogPost.sec_three_h3_content_10) ? (
                    blogPost.sec_three_h3_content_10.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_three_h3_content_10)}</p>
                  )): null}
                  </>
                ) : null}
                </div>
              ) : null}
              {/* condi end */}

              {/* 4th Section */}
              {blogPost.sec_four_h2 ? (
              <div className="row">
                {/* Section 4 heading */}
                <h2>{blogPost.sec_four_h2}</h2>
                {blogPost.sec_four_h2_content_1 ? (
                          Array.isArray(blogPost.sec_four_h2_content_1) ? (
                            blogPost.sec_four_h2_content_1.map((paragraph, index) => (
                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                            ))
                          ) : (
                            <p>{renderParagraphWithLinks(blogPost.sec_four_h2_content_1)}</p>
                          )
                        ): null}

                {/* Section 4 Heading h3_1 */}
                {blogPost.sec_four_h3_1 ? (
                  <h3>{blogPost.sec_four_h3_1}</h3>
                ): null}
                {/* Section 4 Heading sec_Four_h3_content_1*/}
                {blogPost.sec_four_h3_content_1 ? (
                  Array.isArray(blogPost.sec_four_h3_content_1) ? (
                  blogPost.sec_four_h3_content_1.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_four_h3_content_1)}</p>
                )): null}

                {/* section 4 Heading h3_2 */}
                {blogPost.sec_four_h3_2 ? (
                  <h3>{blogPost.sec_four_h3_2}</h3>
                ): null}

                {/* Section 4 Heading sec_Four_h3_content_2*/}
                {blogPost.sec_four_h3_content_2 ? (
                  Array.isArray(blogPost.sec_four_h3_content_2) ? (
                  blogPost.sec_four_h3_content_2.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_four_h3_content_2)}</p>
                )): null}

                {/* section 4 Heading h3_3 */}
                {blogPost.sec_four_h3_3 ? (
                  <h3>{blogPost.sec_four_h3_3}</h3>
                ): null}

                {/* Section 4 Heading sec_Four_h3_content_3*/}
                {blogPost.sec_four_h3_content_3 ? (
                  Array.isArray(blogPost.sec_four_h3_content_3) ? (
                  blogPost.sec_four_h3_content_3.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_four_h3_content_3)}</p>
                                      )) : null}

                                  {/* section 4 Heading h3_4 */}
                                  {blogPost.sec_four_h3_4 ? (
                                      <h3>{blogPost.sec_four_h3_4}</h3>
                                  ) : null}

                                  {/* Section 4 Heading sec_Four_h3_content_4*/}
                                  {blogPost.sec_four_h3_content_4 ? (
                                      Array.isArray(blogPost.sec_four_h3_content_4) ? (
                                          blogPost.sec_four_h3_content_4.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_four_h3_content_4)}</p>
                                      )) : null}

              </div>
              ) : null}

              {/* 5th Section */}
              {blogPost.sec_five_h2 ? (
              <div className="row">
                {/* Section 5 heading */}
                <h2>{blogPost.sec_five_h2}</h2>
                
                <h3>{blogPost.sec_five_h3}</h3>
                <p>{blogPost.sec_five_h2_p}</p>

                <div className="col-md-8">
                  {/* Section 5 Image */}
                  {blogPost.sec_five_img ? (
                    <img src={blogPost.sec_five_img} alt="image" />
                  ) : null}
                </div>

                {/* Section 5 Heading h3_1 */}
                {blogPost.sec_five_h3_1 ? (
                  <h3>{blogPost.sec_five_h3_1}</h3>
                ): null}
                {/* Section 5 Heading sec_three_h3_content_1*/}
                {blogPost.sec_five_h3_content_1 ? (
                  Array.isArray(blogPost.sec_five_h3_content_1) ? (
                    blogPost.sec_five_h3_content_1.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_1)}</p>
                  )): null}

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
                {Array.isArray(blogPost.sec_five_h3_content_3) ? (
                  blogPost.sec_five_h3_content_3.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                  ))
                ) : (
                  <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_3)}</p>
                )}
                
                {/* Section 5 Heading h3_4 */}
                {blogPost.sec_five_h3_4 ? (
                  <h3>{blogPost.sec_five_h3_4}</h3>
                ): null}
                {/* Section 5 Heading sec_three_h3_content_4*/}
                {blogPost.sec_five_h3_content_4 ? (
                  Array.isArray(blogPost.sec_five_h3_content_4) ? (
                    blogPost.sec_five_h3_content_4.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_4)}</p>
                  ))
                : null}

                {/* Section 5 Heading h3_5 */}
                {blogPost.sec_five_h3_5 ? (
                  <h3>{blogPost.sec_five_h3_5}</h3>
                ): null}
                {/* Section 5 Heading sec_three_h3_content_5*/}
                {blogPost.sec_five_h3_content_5 ? (
                  Array.isArray(blogPost.sec_five_h3_content_5) ? (
                    blogPost.sec_five_h3_content_5.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_5)}</p>
                  ))
                : null}

                {/* Section 5 Heading h3_6 */}
                {blogPost.sec_five_h3_6 ? (
                  <h3>{blogPost.sec_five_h3_6}</h3>
                ): null}
                {/* Section 5 Heading sec_three_h3_content_6*/}
                {blogPost.sec_five_h3_content_6 ? (
                  Array.isArray(blogPost.sec_five_h3_content_6) ? (
                    blogPost.sec_five_h3_content_6.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_1)}</p>
                  ))
                : null}

                {/* Section 5 Heading h3_7 */}
                {blogPost.sec_five_h3_7 ? (
                  <h3>{blogPost.sec_five_h3_7}</h3>
                ): null}
                {/* Section 5 Heading sec_three_h3_content_1*/}
                {blogPost.sec_five_h3_content_7 ? (
                  Array.isArray(blogPost.sec_five_h3_content_7) ? (
                    blogPost.sec_five_h3_content_7.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_7)}</p>
                  ))
                : null}

                {/* Section 5 Heading h3_8 */}
                {blogPost.sec_five_h3_8 ? (
                  <h3>{blogPost.sec_five_h3_8}</h3>
                ): null}
                {/* Section 5 Heading sec_three_h3_content_8*/}
                {blogPost.sec_five_h3_content_8 ? (
                  Array.isArray(blogPost.sec_five_h3_content_8) ? (
                    blogPost.sec_five_h3_content_8.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_8)}</p>
                  ))
                : null}

                {/* Section 5 Heading h3_9 */}
                {blogPost.sec_five_h3_9 ? (
                  <h3>{blogPost.sec_five_h3_9}</h3>
                ): null}
                {/* Section 5 Heading sec_three_h3_content_9*/}
                {blogPost.sec_five_h3_content_9 ? (
                  Array.isArray(blogPost.sec_five_h3_content_9) ? (
                    blogPost.sec_five_h3_content_9.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_9)}</p>
                  ))
                : null}

                {/* Section 5 Heading h3_10 */}
                {blogPost.sec_five_h3_10 ? (
                  <h3>{blogPost.sec_five_h3_10}</h3>
                ): null}
                {/* Section 5 Heading sec_three_h3_content_10*/}
                {blogPost.sec_five_h3_content_10 ? (
                  Array.isArray(blogPost.sec_five_h3_content_10) ? (
                    blogPost.sec_five_h3_content_10.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_10)}</p>
                  ))
                : null}

                {/* Section 5 Heading h3_11 */}
                {blogPost.sec_five_h3_11 ? (
                  <h3>{blogPost.sec_five_h3_11}</h3>
                ): null}
                {/* Section 5 Heading sec_three_h3_content_11*/}
                {blogPost.sec_five_h3_content_11 ? (
                  Array.isArray(blogPost.sec_five_h3_content_11) ? (
                    blogPost.sec_five_h3_content_11.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_11)}</p>
                  ))
                : null}
                
                {/* Section 5 Heading h3_12 */}
                {blogPost.sec_five_h3_12 ? (
                  <h3>{blogPost.sec_five_h3_12}</h3>
                ): null}
                {/* Section 5 Heading sec_three_h3_content_12*/}
                {blogPost.sec_five_h3_content_12 ? (
                  Array.isArray(blogPost.sec_five_h3_content_12) ? (
                    blogPost.sec_five_h3_content_12.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_12)}</p>
                  ))
                : null}

                {/* Section 5 Heading sec_three_h3_content_13*/}
                {blogPost.sec_five_h3_content_13 ? (
                  Array.isArray(blogPost.sec_five_h3_content_13) ? (
                    blogPost.sec_five_h3_content_13.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_five_h3_content_13)}</p>
                  ))
                : null}

                
              </div>
              ) : null}

             {/* 6th Section */}
              {blogPost.sec_six_h2 ? (
                <div className="row">
                   {/* Section 6 heading */}
                     <h2>{blogPost.sec_six_h2}</h2>
                      {blogPost.sec_six_h2_content_1 ? (
                      Array.isArray(blogPost.sec_six_h2_content_1) ? (
                      blogPost.sec_six_h2_content_1.map((paragraph, index) => (
                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                      ))
                      ) : (
                      <p>{renderParagraphWithLinks(blogPost.sec_six_h2_content_1)}</p>
                      )
                      ) : null}
                      </div>
                          ) : null}

                          {/* Section 6 Heading h3_1 */}
                          {blogPost.sec_six_h3_1 ? (
                              <h3>{blogPost.sec_six_h3_1}</h3>
                          ) : null}
                          {/* Section 6 Heading sec_six_h3_consixt_1*/}
                          {blogPost.sec_six_h3_consixt_1 ? (
                              Array.isArray(blogPost.sec_six_h3_consixt_1) ? (
                                  blogPost.sec_six_h3_consixt_1.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_six_h3_consixt_1)}</p>
                              )) : null}

                          {/* Section 6 Heading h3_2 */}
                          {blogPost.sec_six_h3_2 ? (
                              <h3>{blogPost.sec_six_h3_2}</h3>
                          ) : null}
                          {/* Section 6 Heading sec_six_h3_consixt_2*/}
                          {blogPost.sec_six_h3_consixt_2 ? (
                              Array.isArray(blogPost.sec_six_h3_consixt_2) ? (
                                  blogPost.sec_six_h3_consixt_2.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_six_h3_consixt_2)}</p>
                              )) : null}

                          {/* Section 6 Heading h3_3 */}
                          {blogPost.sec_six_h3_3 ? (
                              <h3>{blogPost.sec_six_h3_3}</h3>
                          ) : null}
                          {/* Section 6 Heading sec_six_h3_consixt_3*/}
                          {blogPost.sec_six_h3_consixt_3 ? (
                              Array.isArray(blogPost.sec_six_h3_consixt_3) ? (
                                  blogPost.sec_six_h3_consixt_3.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_six_h3_consixt_3)}</p>
                              )) : null}

                          {/* Section 6 Heading h4_4 */}
                          {blogPost.sec_six_h3_4 ? (
                              <h3>{blogPost.sec_six_h3_4}</h3>
                          ) : null}
                          {/* Section 6 Heading sec_six_h3_consixt_4*/}
                          {blogPost.sec_six_h3_consixt_4 ? (
                              Array.isArray(blogPost.sec_six_h3_consixt_4) ? (
                                  blogPost.sec_six_h3_consixt_4.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_six_h3_consixt_4)}</p>
                              )) : null}

                          {/* Section 6 Heading h5_5 */}
                          {blogPost.sec_six_h3_5 ? (
                              <h3>{blogPost.sec_six_h3_5}</h3>
                          ) : null}
                          {/* Section 6 Heading sec_six_h3_consixt_5*/}
                          {blogPost.sec_six_h3_consixt_5 ? (
                              Array.isArray(blogPost.sec_six_h3_consixt_5) ? (
                                  blogPost.sec_six_h3_consixt_5.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_six_h3_consixt_5)}</p>
                              )) : null}
                          {/* 7th Section */}
                          {blogPost.sec_seven_h2 ? (
                              <div className="row">
                                  {/* Section 7 heading */}
                                  <h2>{blogPost.sec_seven_h2}</h2>
                                  {blogPost.sec_seven_h2_content_1 ? (
                                      Array.isArray(blogPost.sec_seven_h2_content_1) ? (
                                          blogPost.sec_seven_h2_content_1.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_seven_h2_content_1)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}

                          {/* Section 7 Heading h3_1 */}
                          {blogPost.sec_seven_h3_1 ? (
                              <h3>{blogPost.sec_seven_h3_1}</h3>
                          ) : null}
                          {/* Section 7 Heading sec_three_h3_content_1*/}
                          {blogPost.sec_seven_h3_content_1 ? (
                              Array.isArray(blogPost.sec_seven_h3_content_1) ? (
                                  blogPost.sec_seven_h3_content_1.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_seven_h3_content_1)}</p>
                              )) : null}

                          {/* section 7 Heading h3_2 */}
                          <h3>{blogPost.sec_seven_h3_2}</h3>

                          {/* Section 3 Heading sec_three_h3_content_2*/}
                          {Array.isArray(blogPost.sec_seven_h3_content_2) ? (
                              blogPost.sec_seven_h3_content_2.map((paragraph, index) => (
                                  <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                              ))
                          ) : (
                              <p>{renderParagraphWithLinks(blogPost.sec_seven_h3_content_2)}</p>
                          )}

                          {/* section 7 Heading h3_3 */}
                          <h3>{blogPost.sec_seven_h3_3}</h3>

                          {/* Section 3 Heading sec_three_h3_content_3*/}
                          {Array.isArray(blogPost.sec_seven_h3_content_3) ? (
                              blogPost.sec_seven_h3_content_3.map((paragraph, index) => (
                                  <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                              ))
                          ) : (
                              <p>{renderParagraphWithLinks(blogPost.sec_seven_h3_content_3)}</p>
                          )}
                          {/* 8th Section */}
                          {blogPost.sec_eight_h2 ? (
                              <div className="row">
                                  {/* Section 8 heading */}
                                  <h2>{blogPost.sec_eight_h2}</h2>
                                  {blogPost.sec_eight_img ? (
                                      <img src={blogPost.sec_eight_img} alt="image" />
                                  ) : null}
                                  {blogPost.sec_eight_h2_content_1 ? (
                                      Array.isArray(blogPost.sec_eight_h2_content_1) ? (
                                          blogPost.sec_eight_h2_content_1.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_eight_h2_content_1)}</p>
                                      )
                                  ) : null}
                                 
                              </div>
                          ) : null}

                          {/* Section 8 Heading h3_1 */}
                          {blogPost.sec_eight_h3_1 ? (
                              <h3>{blogPost.sec_eight_h3_1}</h3>
                          ) : null}
                          {/* Section 8 Heading sec_three_h3_content_1*/}
                          {blogPost.sec_eight_h3_content_1 ? (
                              Array.isArray(blogPost.sec_eight_h3_content_1) ? (
                                  blogPost.sec_eight_h3_content_1.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_eight_h3_content_1)}</p>
                              )) : null}

                          {/* section 8 Heading h3_2 */}
                          <h3>{blogPost.sec_eight_h3_2}</h3>

                          {/* Section 3 Heading sec_three_h3_content_2*/}
                          {Array.isArray(blogPost.sec_eight_h3_content_2) ? (
                              blogPost.sec_eight_h3_content_2.map((paragraph, index) => (
                                  <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                              ))
                          ) : (
                              <p>{renderParagraphWithLinks(blogPost.sec_eight_h3_content_2)}</p>
                          )}

                          {/* section 8 Heading h3_3 */}
                          <h3>{blogPost.sec_eight_h3_3}</h3>

                          {/* Section 3 Heading sec_three_h3_content_3*/}
                          {Array.isArray(blogPost.sec_eight_h3_content_3) ? (
                              blogPost.sec_eight_h3_content_3.map((paragraph, index) => (
                                  <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                              ))
                          ) : (
                              <p>{renderParagraphWithLinks(blogPost.sec_eight_h3_content_3)}</p>
                          )}

                          {/* section 8 Heading h3_4 */}
                          <h3>{blogPost.sec_eight_h3_4}</h3>

                          {/* Section 3 Heading sec_three_h3_content_4*/}
                          {Array.isArray(blogPost.sec_eight_h3_content_4) ? (
                              blogPost.sec_eight_h3_content_4.map((paragraph, index) => (
                                  <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                              ))
                          ) : (
                              <p>{renderParagraphWithLinks(blogPost.sec_eight_h3_content_4)}</p>
                          )}

                          {/* 9th Section */}
                          {blogPost.sec_nine_h2 ? (
                              <div className="row">
                                  {/* Section 9 heading */}
                                  <h2>{blogPost.sec_nine_h2}</h2>
                                  {blogPost.sec_nine_img ? (
                                      <img src={blogPost.sec_nine_img} alt="image" />
                                  ) : null}
                                  {blogPost.sec_nine_h2_content_1 ? (
                                      Array.isArray(blogPost.sec_nine_h2_content_1) ? (
                                          blogPost.sec_nine_h2_content_1.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_nine_h2_content_1)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}

                          {/* Section 9 Heading h3_1 */}
                          {blogPost.sec_nine_h3_1 ? (
                              <h3>{blogPost.sec_nine_h3_1}</h3>
                          ) : null}
                          {/* Section 9 Heading sec_nine_h3_content_1*/}
                          {blogPost.sec_nine_h3_content_1 ? (
                              Array.isArray(blogPost.sec_nine_h3_content_1) ? (
                                  blogPost.sec_nine_h3_content_1.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_nine_h3_content_1)}</p>
                              )) : null}

                          {/* Section 9 Heading h3_2 */}
                          {blogPost.sec_nine_h3_2 ? (
                              <h3>{blogPost.sec_nine_h3_2}</h3>
                          ) : null}
                          {/* Section 9 Heading sec_nine_h3_content_2*/}
                          {blogPost.sec_nine_h3_content_2 ? (
                              Array.isArray(blogPost.sec_nine_h3_content_2) ? (
                                  blogPost.sec_nine_h3_content_2.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_nine_h3_content_2)}</p>
                              )) : null}

                          {/* Section 9 Heading h3_3 */}
                          {blogPost.sec_nine_h3_3 ? (
                              <h3>{blogPost.sec_nine_h3_3}</h3>
                          ) : null}
                          {/* Section 9 Heading sec_nine_h3_content_3*/}
                          {blogPost.sec_nine_h3_content_3 ? (
                              Array.isArray(blogPost.sec_nine_h3_content_3) ? (
                                  blogPost.sec_nine_h3_content_3.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_nine_h3_content_3)}</p>
                              )) : null}

                          {/* Section 9 Heading h3_4 */}
                          {blogPost.sec_nine_h3_4 ? (
                              <h3>{blogPost.sec_nine_h3_4}</h3>
                          ) : null}
                          {/* Section 9 Heading sec_nine_h3_content_4*/}
                          {blogPost.sec_nine_h3_content_4 ? (
                              Array.isArray(blogPost.sec_nine_h3_content_4) ? (
                                  blogPost.sec_nine_h3_content_4.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_nine_h3_content_4)}</p>
                              )) : null}

                          {/* Section 9 Heading h3_5 */}
                          {blogPost.sec_nine_h3_5 ? (
                              <h3>{blogPost.sec_nine_h3_5}</h3>
                          ) : null}
                          {/* Section 9 Heading sec_nine_h3_content_5*/}
                          {blogPost.sec_nine_h3_content_5 ? (
                              Array.isArray(blogPost.sec_nine_h3_content_5) ? (
                                  blogPost.sec_nine_h3_content_5.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_nine_h3_content_5)}</p>
                              )) : null}

                          {/* 10th Section */}
                          {blogPost.sec_ten_h2 ? (
                              <div className="row">
                                  {/* Section 10 heading */}
                                  <h2>{blogPost.sec_ten_h2}</h2>
                                  {blogPost.sec_ten_img ? (
                                      <img src={blogPost.sec_ten_img} alt="image" />
                                  ) : null}
                                  {blogPost.sec_ten_h2_content_1 ? (
                                      Array.isArray(blogPost.sec_ten_h2_content_1) ? (
                                          blogPost.sec_ten_h2_content_1.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_ten_h2_content_1)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}
                          
                          {/* Section 10 Heading h3_1 */}
                          {blogPost.sec_ten_h3_1 ? (
                              <h3>{blogPost.sec_ten_h3_1}</h3>
                          ) : null}
                          {/* Section 10 Heading sec_ten_h3_content_1*/}
                          {blogPost.sec_ten_h3_content_1 ? (
                              Array.isArray(blogPost.sec_ten_h3_content_1) ? (
                                  blogPost.sec_ten_h3_content_1.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_ten_h3_content_1)}</p>
                              )) : null}

                          {/* Section 10 Heading h3_2 */}
                          {blogPost.sec_ten_h3_2 ? (
                              <h3>{blogPost.sec_ten_h3_2}</h3>
                          ) : null}
                          {/* Section 10 Heading sec_ten_h3_content_2*/}
                          {blogPost.sec_ten_h3_content_2 ? (
                              Array.isArray(blogPost.sec_ten_h3_content_2) ? (
                                  blogPost.sec_ten_h3_content_2.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_ten_h3_content_2)}</p>
                              )) : null}

                          {/* Section 10 Heading h3_3 */}
                          {blogPost.sec_ten_h3_3 ? (
                              <h3>{blogPost.sec_ten_h3_3}</h3>
                          ) : null}
                          {/* Section 10 Heading sec_ten_h3_content_3*/}
                          {blogPost.sec_ten_h3_content_3 ? (
                              Array.isArray(blogPost.sec_ten_h3_content_3) ? (
                                  blogPost.sec_ten_h3_content_3.map((paragraph, index) => (
                                      <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                  ))
                              ) : (
                                  <p>{renderParagraphWithLinks(blogPost.sec_ten_h3_content_3)}</p>
                              )) : null}

                          {/* 11th Section */}
                          {blogPost.sec_eleven_h2 ? (
                              <div className="row">
                                  {/* Section 11 heading */}
                                  <h2>{blogPost.sec_eleven_h2}</h2>
                                  {blogPost.sec_eleven_h2_conelevent_1 ? (
                                      Array.isArray(blogPost.sec_eleven_h2_conelevent_1) ? (
                                          blogPost.sec_eleven_h2_conelevent_1.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_eleven_h2_conelevent_1)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}

                          {/* tweleve Section */}
                          {blogPost.sec_tweleve_h2 ? (
                              <div className="row">
                                  {/* Section tweleve heading */}
                                  <h2>{blogPost.sec_tweleve_h2}</h2>
                                  {blogPost.sec_tweleve_h2_p ? (
                                      Array.isArray(blogPost.sec_tweleve_h2_p) ? (
                                          blogPost.sec_tweleve_h2_p.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_tweleve_h2_p)}</p>
                                      )
                                  ) : null}

                                  {/* Section tweleve Heading h3_1 */}
                                  {blogPost.sec_tweleve_h3_1 ? (
                                      <h3>{blogPost.sec_tweleve_h3_1}</h3>
                                  ) : null}
                                  {/* Section tweleve Heading sec_tweleve_h3_p_1*/}
                                  {blogPost.sec_tweleve_h3_p_1 ? (
                                      Array.isArray(blogPost.sec_tweleve_h3_p_1) ? (
                                          blogPost.sec_tweleve_h3_p_1.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_tweleve_h3_p_1)}</p>
                                      )) : null}

                                  {/* section tweleve Heading h3_2 */}
                                  {blogPost.sec_tweleve_h3_2 ? (
                                      <h3>{blogPost.sec_tweleve_h3_2}</h3>
                                  ) : null}

                                  {/* Section tweleve Heading sec_tweleve_h3_p_2*/}
                                  {blogPost.sec_tweleve_h3_p_2 ? (
                                      Array.isArray(blogPost.sec_tweleve_h3_p_2) ? (
                                          blogPost.sec_tweleve_h3_p_2.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_tweleve_h3_p_2)}</p>
                                      )) : null}

                                  {/* section tweleve Heading h3_3 */}
                                  {blogPost.sec_tweleve_h3_3 ? (
                                      <h3>{blogPost.sec_tweleve_h3_3}</h3>
                                  ) : null}

                                  {/* Section tweleve Heading sec_tweleve_h3_p_3*/}
                                  {blogPost.sec_tweleve_h3_p_3 ? (
                                      Array.isArray(blogPost.sec_tweleve_h3_p_3) ? (
                                          blogPost.sec_tweleve_h3_p_3.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_tweleve_h3_p_3)}</p>
                                      )) : null}
                                  {/* section tweleve Heading h3_4 */}
                                  {blogPost.sec_tweleve_h3_4 ? (
                                      <h3>{blogPost.sec_tweleve_h3_4}</h3>
                                  ) : null}

                                  {/* Section tweleve Heading sec_tweleve_h3_p_4*/}
                                  {blogPost.sec_tweleve_h3_p_4 ? (
                                      Array.isArray(blogPost.sec_tweleve_h3_p_4) ? (
                                          blogPost.sec_tweleve_h3_p_4.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_tweleve_h3_p_4)}</p>
                                      )) : null}
                                  {/* section tweleve Heading h3_5 */}
                                  {blogPost.sec_tweleve_h3_5 ? (
                                      <h3>{blogPost.sec_tweleve_h3_5}</h3>
                                  ) : null}

                                  {/* Section tweleve Heading sec_tweleve_h3_p_5*/}
                                  {blogPost.sec_tweleve_h3_p_5 ? (
                                      Array.isArray(blogPost.sec_tweleve_h3_p_5) ? (
                                          blogPost.sec_tweleve_h3_p_5.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_tweleve_h3_p_5)}</p>
                                      )) : null}
                                  {/* section tweleve Heading h3_6 */}
                                  {blogPost.sec_tweleve_h3_6 ? (
                                      <h3>{blogPost.sec_tweleve_h3_6}</h3>
                                  ) : null}

                                  {/* Section tweleve Heading sec_tweleve_h3_p_6*/}
                                  {blogPost.sec_tweleve_h3_p_6 ? (
                                      Array.isArray(blogPost.sec_tweleve_h3_p_6) ? (
                                          blogPost.sec_tweleve_h3_p_6.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_tweleve_h3_p_6)}</p>
                                      )) : null}
                                  {/* section tweleve Heading h3_7 */}
                                  {blogPost.sec_tweleve_h3_7 ? (
                                      <h3>{blogPost.sec_tweleve_h3_7}</h3>
                                  ) : null}

                                  {/* Section tweleve Heading sec_tweleve_h3_p_7*/}
                                  {blogPost.sec_tweleve_h3_p_7 ? (
                                      Array.isArray(blogPost.sec_tweleve_h3_p_7) ? (
                                          blogPost.sec_tweleve_h3_p_7.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_tweleve_h3_p_7)}</p>
                                      )) : null}
                                  {/* section tweleve Heading h3_8 */}
                                  {blogPost.sec_tweleve_h3_8 ? (
                                      <h3>{blogPost.sec_tweleve_h3_8}</h3>
                                  ) : null}

                                  {/* Section tweleve Heading sec_tweleve_h3_p_8*/}
                                  {blogPost.sec_tweleve_h3_p_8 ? (
                                      Array.isArray(blogPost.sec_tweleve_h3_p_8) ? (
                                          blogPost.sec_tweleve_h3_p_8.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_tweleve_h3_p_8)}</p>
                                      )) : null}
                              </div>
                          ) : null}

                          {/* 13th Section */}
                          {blogPost.sec_thirteen_h2 ? (
                              <div className="row">
                                  {/* Section 13 heading */}
                                  <h2>{blogPost.sec_thirteen_h2}</h2>
                                  {blogPost.sec_thirteen_h2_p ? (
                                      Array.isArray(blogPost.sec_thirteen_h2_p) ? (
                                          blogPost.sec_thirteen_h2_p.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_thirteen_h2_p)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}

                          {/* 14th Section */}
                          {blogPost.sec_fourteen_h2 ? (
                              <div className="row">
                                  {/* Section 14 heading */}
                                  <h2>{blogPost.sec_fourteen_h2}</h2>
                                  {blogPost.sec_fourteen_h2_p ? (
                                      Array.isArray(blogPost.sec_fourteen_h2_p) ? (
                                          blogPost.sec_fourteen_h2_p.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_fourteen_h2_p)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}

                          {/* 15th Section */}
                          {blogPost.sec_fifteen_h2 ? (
                              <div className="row">
                                  {/* Section 15 heading */}
                                  <h2>{blogPost.sec_fifteen_h2}</h2>
                                  {blogPost.sec_fifteen_h2_p ? (
                                      Array.isArray(blogPost.sec_fifteen_h2_p) ? (
                                          blogPost.sec_fifteen_h2_p.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_fifteen_h2_p)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}

                          {/* 16th Section */}
                          {blogPost.sec_sixteen_h2 ? (
                              <div className="row">
                                  {/* Section 16 heading */}
                                  <h2>{blogPost.sec_sixteen_h2}</h2>
                                  {blogPost.sec_sixteen_h2_p ? (
                                      Array.isArray(blogPost.sec_sixteen_h2_p) ? (
                                          blogPost.sec_sixteen_h2_p.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_sixteen_h2_p)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}

                          {/* 17th Section */}
                          {blogPost.sec_seventeen_h2 ? (
                              <div className="row">
                                  {/* Section 17 heading */}
                                  <h2>{blogPost.sec_seventeen_h2}</h2>
                                  {blogPost.sec_seventeen_h2_p ? (
                                      Array.isArray(blogPost.sec_seventeen_h2_p) ? (
                                          blogPost.sec_seventeen_h2_p.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_seventeen_h2_p)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}

                          {/* 18th Section */}
                          {blogPost.sec_eighteen_h2 ? (
                              <div className="row">
                                  {/* Section 18 heading */}
                                  <h2>{blogPost.sec_eighteen_h2}</h2>
                                  {blogPost.sec_eighteen_h2_p ? (
                                      Array.isArray(blogPost.sec_eighteen_h2_p) ? (
                                          blogPost.sec_eighteen_h2_p.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_eighteen_h2_p)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}

                          {/* 19th Section */}
                          {blogPost.sec_nineteen_h2 ? (
                              <div className="row">
                                  {/* Section 19 heading */}
                                  <h2>{blogPost.sec_nineteen_h2}</h2>
                                  {blogPost.sec_nineteen_h2_p ? (
                                      Array.isArray(blogPost.sec_nineteen_h2_p) ? (
                                          blogPost.sec_nineteen_h2_p.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_nineteen_h2_p)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}

                          {/* 20th Section */}
                          {blogPost.sec_twenty_h2 ? (
                              <div className="row">
                                  {/* Section 20 heading */}
                                  <h2>{blogPost.sec_twenty_h2}</h2>
                                  {blogPost.sec_twenty_h2_p ? (
                                      Array.isArray(blogPost.sec_twenty_h2_p) ? (
                                          blogPost.sec_twenty_h2_p.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_twenty_h2_p)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}

            {/* Conclusion Section */}
              {blogPost.sec_concln_h2 ? (
                <div className="row">
                  {/* Section 6 heading */}
                   <h2>{blogPost.sec_concln_h2}</h2>
                   {blogPost.sec_concln_h2_p ? (
                   Array.isArray(blogPost.sec_concln_h2_p) ? (
                    blogPost.sec_concln_h2_p.map((paragraph, index) => (
                    <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                   ))
                   ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_concln_h2_p)}</p>
                   )
                   ) : null}
                   </div>
                ) : null}

                          {/* Foot Section */}
                          {blogPost.sec_foot_h2 ? (
                              <div className="row">
                                  {/* Section 6 heading */}
                                  <h2>{blogPost.sec_foot_h2}</h2>
                                  {blogPost.sec_foot_h2_p ? (
                                      Array.isArray(blogPost.sec_foot_h2_p) ? (
                                          blogPost.sec_foot_h2_p.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_foot_h2_p)}</p>
                                      )
                                  ) : null}
                              </div>
                          ) : null}
                          {/* faq Section */}
                          {blogPost.sec_faq_h2 ? (
                              <div className="row">
                                  {/* Section faq heading */}
                                  <h2>{blogPost.sec_faq_h2}</h2>
                                  {blogPost.sec_faq_h2_p ? (
                                      Array.isArray(blogPost.sec_faq_h2_p) ? (
                                          blogPost.sec_faq_h2_p.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h2_p)}</p>
                                      )
                                  ) : null}

                                  {/* Section faq Heading h3_1 */}
                                  {blogPost.sec_faq_h3_1 ? (
                                      <h3>{blogPost.sec_faq_h3_1}</h3>
                                  ) : null}
                                  {/* Section faq Heading sec_faq_h3_p_1*/}
                                  {blogPost.sec_faq_h3_p_1 ? (
                                      Array.isArray(blogPost.sec_faq_h3_p_1) ? (
                                          blogPost.sec_faq_h3_p_1.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h3_p_1)}</p>
                                      )) : null}

                                  {/* section faq Heading h3_2 */}
                                  {blogPost.sec_faq_h3_2 ? (
                                      <h3>{blogPost.sec_faq_h3_2}</h3>
                                  ) : null}

                                  {/* Section faq Heading sec_faq_h3_p_2*/}
                                  {blogPost.sec_faq_h3_p_2 ? (
                                      Array.isArray(blogPost.sec_faq_h3_p_2) ? (
                                          blogPost.sec_faq_h3_p_2.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h3_p_2)}</p>
                                      )) : null}

                                  {/* section faq Heading h3_3 */}
                                  {blogPost.sec_faq_h3_3 ? (
                                      <h3>{blogPost.sec_faq_h3_3}</h3>
                                  ) : null}

                                  {/* Section faq Heading sec_faq_h3_p_3*/}
                                  {blogPost.sec_faq_h3_p_3 ? (
                                      Array.isArray(blogPost.sec_faq_h3_p_3) ? (
                                          blogPost.sec_faq_h3_p_3.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h3_p_3)}</p>
                                      )) : null}
                                  {/* section faq Heading h3_4 */}
                                  {blogPost.sec_faq_h3_4 ? (
                                      <h3>{blogPost.sec_faq_h3_4}</h3>
                                  ) : null}

                                  {/* Section faq Heading sec_faq_h3_p_4*/}
                                  {blogPost.sec_faq_h3_p_4 ? (
                                      Array.isArray(blogPost.sec_faq_h3_p_4) ? (
                                          blogPost.sec_faq_h3_p_4.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h3_p_4)}</p>
                                      )) : null}
                                  {/* section faq Heading h3_5 */}
                                  {blogPost.sec_faq_h3_5 ? (
                                      <h3>{blogPost.sec_faq_h3_5}</h3>
                                  ) : null}

                                  {/* Section faq Heading sec_faq_h3_p_5*/}
                                  {blogPost.sec_faq_h3_p_5 ? (
                                      Array.isArray(blogPost.sec_faq_h3_p_5) ? (
                                          blogPost.sec_faq_h3_p_5.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h3_p_5)}</p>
                                      )) : null}
                                  {/* section faq Heading h3_6 */}
                                  {blogPost.sec_faq_h3_6 ? (
                                      <h3>{blogPost.sec_faq_h3_6}</h3>
                                  ) : null}

                                  {/* Section faq Heading sec_faq_h3_p_6*/}
                                  {blogPost.sec_faq_h3_p_6 ? (
                                      Array.isArray(blogPost.sec_faq_h3_p_6) ? (
                                          blogPost.sec_faq_h3_p_6.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h3_p_6)}</p>
                                      )) : null}
                                  {/* section faq Heading h3_7 */}
                                  {blogPost.sec_faq_h3_7 ? (
                                      <h3>{blogPost.sec_faq_h3_7}</h3>
                                  ) : null}

                                  {/* Section faq Heading sec_faq_h3_p_7*/}
                                  {blogPost.sec_faq_h3_p_7 ? (
                                      Array.isArray(blogPost.sec_faq_h3_p_7) ? (
                                          blogPost.sec_faq_h3_p_7.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h3_p_7)}</p>
                                      )) : null}
                                  {/* section faq Heading h3_8 */}
                                  {blogPost.sec_faq_h3_8 ? (
                                      <h3>{blogPost.sec_faq_h3_8}</h3>
                                  ) : null}

                                  {/* Section faq Heading sec_faq_h3_p_8*/}
                                  {blogPost.sec_faq_h3_p_8 ? (
                                      Array.isArray(blogPost.sec_faq_h3_p_8) ? (
                                          blogPost.sec_faq_h3_p_8.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h3_p_8)}</p>
                                      )) : null}
                                  {/* section faq Heading h3_9 */}
                                  {blogPost.sec_faq_h3_9 ? (
                                      <h3>{blogPost.sec_faq_h3_9}</h3>
                                  ) : null}

                                  {/* Section faq Heading sec_faq_h3_p_9*/}
                                  {blogPost.sec_faq_h3_p_9 ? (
                                      Array.isArray(blogPost.sec_faq_h3_p_9) ? (
                                          blogPost.sec_faq_h3_p_9.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h3_p_9)}</p>
                                      )) : null}
                                  {/* section faq Heading h3_10 */}
                                  {blogPost.sec_faq_h3_10 ? (
                                      <h3>{blogPost.sec_faq_h3_10}</h3>
                                  ) : null}

                                  {/* Section faq Heading sec_faq_h3_p_10*/}
                                  {blogPost.sec_faq_h3_p_10 ? (
                                      Array.isArray(blogPost.sec_faq_h3_p_10) ? (
                                          blogPost.sec_faq_h3_p_10.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h3_p_10)}</p>
                                      )) : null}

                                  {/* section faq Heading h3_11 */}
                                  {blogPost.sec_faq_h3_11 ? (
                                      <h3>{blogPost.sec_faq_h3_11}</h3>
                                  ) : null}

                                  {/* Section faq Heading sec_faq_h3_p_11*/}
                                  {blogPost.sec_faq_h3_p_11 ? (
                                      Array.isArray(blogPost.sec_faq_h3_p_11) ? (
                                          blogPost.sec_faq_h3_p_11.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h3_p_11)}</p>
                                      )) : null}

                                  {/* section faq Heading h3_12 */}
                                  {blogPost.sec_faq_h3_12 ? (
                                      <h3>{blogPost.sec_faq_h3_12}</h3>
                                  ) : null}

                                  {/* Section faq Heading sec_faq_h3_p_12*/}
                                  {blogPost.sec_faq_h3_p_12 ? (
                                      Array.isArray(blogPost.sec_faq_h3_p_12) ? (
                                          blogPost.sec_faq_h3_p_12.map((paragraph, index) => (
                                              <p key={index}>{renderParagraphWithLinks(paragraph)}</p>
                                          ))
                                      ) : (
                                          <p>{renderParagraphWithLinks(blogPost.sec_faq_h3_p_12)}</p>
                                      )) : null}
                              </div>
                          ) : null}

            </div>
            <div className="cs_post_share_wrapper">
              <div className="cs_post_tags cs_style_1">
                <h3 className="cs_fs_24 cs_semibold">Tags:</h3>
                <div className="cs_tags_links cs_fs_14 cs_semibold cs_heading_font">
                  {Array.isArray(blogPost.sec_tag_content) ? (
                    blogPost.sec_tag_content.map((paragraph, index) => (
                      <p key={index} className="cs_tag_link cs_accent_bg_light cs_mb_1">{renderParagraphWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    <p>{renderParagraphWithLinks(blogPost.sec_tag_content)}</p>
                  )}
                </div>
              </div>
              <div className="cs_post_socials">
                <h3 className="cs_fs_24 cs_semibold">Share:</h3>
                <div className="cs_social_btns cs_style_1">
                  <Link to="#" className="cs_center cs_radius_50"><i className="bi bi-facebook"></i></Link>
                  <Link to="#" className="cs_center cs_radius_50"><i className="bi bi-youtube"></i></Link>
                  <Link to="#" className="cs_center cs_radius_50"><i className="bi bi-twitter"></i></Link>
                  <Link to="#" className="cs_center cs_radius_50"><i className="bi bi-linkedin"></i></Link>
                </div>
              </div>
            </div>
            <div className="cs_comments_area">
              {/* <h2 className="cs_fs_30 cs_mb_28">{blogPost.comments} Comments</h2>
              <ul className="cs_comment_list cs_heading_font cs_mp_0">
                <li className="cs_comment_body position-relative">
                  <div className="cs_comment_thumbnail">
                    <img src="/assets/img/avatar_9.avif" alt="Image" />
                  </div>
                  <div className="cs_comment_info">
                    <h3 className="cs_fs_20 cs_semibold cs_mb_9">Leslie Alexander</h3>
                    <div className="cs_post_meta cs_fs_14 cs_mb_9">
                      <span className="cs_accent_color"><i className="bi bi-calendar-fill"></i></span>
                      <span className="cs_heading_color">10 Oct, 2024</span>
                    </div>
                    <p className="mb-0">Most repairs can be completed within a few hours, but complex issues might take longer. We always aim a for same-day service when possible.</p>
                    <Link to="#" className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase">Reply</Link>
                  </div>
                </li>
                <li className="cs_comment_body position-relative">
                  <div className="cs_comment_thumbnail">
                    <img src="/assets/img/avatar_10.avif" alt="Image" />
                  </div>
                  <div className="cs_comment_info">
                    <h3 className="cs_fs_20 cs_semibold cs_mb_9">Cameron Williamson</h3>
                    <div className="cs_post_meta cs_fs_14 cs_mb_9">
                      <span className="cs_accent_color"><i className="bi bi-calendar-fill"></i></span>
                      <span className="cs_heading_color">15 Oct, 2024</span>
                    </div>
                    <p className="mb-0">We offer free estimates before any repairs begin, so you know exactly what to expect on all part and labor, ensuring your peace of mind.</p>
                    <Link to="#" className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase">Reply</Link>
                  </div>
                </li>
                <li className="cs_comment_body position-relative">
                  <div className="cs_comment_thumbnail">
                    <img src="/assets/img/avatar_11.avif" alt="Image" />
                  </div>
                  <div className="cs_comment_info">
                    <h3 className="cs_fs_20 cs_semibold cs_mb_9">Darlene Robertson</h3>
                    <div className="cs_post_meta cs_fs_14 cs_mb_9">
                      <span className="cs_accent_color"><i className="bi bi-calendar-fill"></i></span>
                      <span className="cs_heading_color">20 Oct, 2024</span>
                    </div>
                    <p className="mb-0">Tire rotation is typically recommended every 6,000 to 8,000 miles to ensure even wear and extend the life of your tires  more serious that needs attention.</p>
                    <Link to="#" className="cs_reply_btn cs_heading_bg cs_fs_14 cs_bold cs_white_color text-uppercase">Reply</Link>
                  </div>
                </li>
              </ul>
              <div className="cs_height_50 cs_height_lg_50"></div> */}
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
                  {data.slice(0, 3).map((post, index) => (
                    <div className="cs_recent_post" key={index}>
                      <Link to={`/blog/${post.slug}`} className="cs_recent_post_thumb">
                        <img src={post.img} alt="Recent Post Image" />
                      </Link>
                      <div className="cs_recent_post_right">
                        <p className="cs_recent_posted_by cs_fs_14">
                          <i className="bi bi-calendar-fill"></i>{post.date}</p>
                        <h3 className="cs_fs_18 cs_semibold mb-0">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
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
                    <Link to="#" className="cs_tag_link cs_white_bg">Popular</Link>
                    <Link to="#" className="cs_tag_link cs_white_bg">Car</Link>
                    <Link to="#" className="cs_tag_link cs_white_bg">Auto Parts</Link>
                    <Link to="#" className="cs_tag_link cs_white_bg">Services</Link>
                    <Link to="#" className="cs_tag_link cs_white_bg">Repairs</Link>
                    <Link to="#" className="cs_tag_link cs_white_bg">Dealer</Link>
                    <Link to="#" className="cs_tag_link cs_white_bg">Oil</Link>
                    <Link to="#" className="cs_tag_link cs_white_bg">Icon</Link>
                    <Link to="#" className="cs_tag_link cs_white_bg">Bike</Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="cs_height_80 cs_height_lg_40"></div>
    </section>
  );
};

export default BlogDetails;