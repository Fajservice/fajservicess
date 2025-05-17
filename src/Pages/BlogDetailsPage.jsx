import BlogDetails from "../Components/BlogDetails/BlogDetails";
import BreadCumb from "../Components/Common/BreadCumb";
import { useEffect, useState } from "react";
import data from "../Data/blog.json";
import { Link, useParams } from "react-router-dom";

const BlogDetailsPage = () => {
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
  
    // const renderParagraphWithLinks = (paragraph) => {
    //   // Handle external links with url attribute <Link url="https://...">text</Link>
    //   if (typeof paragraph === 'string' && paragraph.includes('<Link url="')) {
    //     try {
    //       const linkStartIndex = paragraph.indexOf('<Link url="');
    //       const urlStartIndex = linkStartIndex + '<Link url="'.length;
    //       const urlEndIndex = paragraph.indexOf('">', urlStartIndex);
    //       const url = paragraph.substring(urlStartIndex, urlEndIndex);
  
    //       const linkTextStartIndex = urlEndIndex + 2; // Skip the ">
    //       const linkTextEndIndex = paragraph.indexOf('</Link>', linkTextStartIndex);
    //       const linkText = paragraph.substring(linkTextStartIndex, linkTextEndIndex);
  
    //       const beforeLinkText = paragraph.substring(0, linkStartIndex);
    //       const afterLinkText = paragraph.substring(linkTextEndIndex + '</Link>'.length);
  
    //       // If external link (starts with http or https)
    //       if (url.startsWith('http://') || url.startsWith('https://')) {
    //         return (
    //           <>
    //             {beforeLinkText}
    //             <a href={url} target="_blank" rel="noopener noreferrer">{linkText}</a>
    //             {afterLinkText}
    //           </>
    //         );
    //       } else {
    //         // Internal link with custom URL
    //         return (
    //           <>
    //             {beforeLinkText}
    //             <Link to={url}>{linkText}</Link>
    //             {afterLinkText}
    //           </>
    //         );
    //       }
    //     } catch (e) {
    //       console.error("Error parsing link with URL:", e);
    //       return paragraph;
    //     }
    //   }
  
    //   Check if paragraph has simple <Link> tags (for internal blog links)
    //   if (typeof paragraph === 'string' && paragraph.includes('<Link>')) {
    //     // Split the content by the opening tag
    //     const parts = paragraph.split('<Link>');
    //     const beforeLink = parts[0];
  
    //     // Split the remaining content by the closing tag
    //     const linkParts = parts[1].split('</Link>');
    //     // const linkText = linkParts[0];
    //     const afterLink = linkParts[1] || '';
  
    //     // Generate the URL slug from link text
    //     // const slug = linkText.toLowerCase().replace(/\s+/g, '-');
  
    //     return (
    //       <>
    //         {beforeLink}
    //         <Link to={`/blog/${slug}`}></Link>
    //         {afterLink}
    //       </>
    //     );
    //   }
  
    //   // Regular paragraph without links
    //   return paragraph;
    // };
  
    if (!blogPost) {
      return <div className="container py-5 text-center">Loading...</div>;
    }
    return (
        <div>
             <BreadCumb
                bgImg="img/page_heading_1.avif"
                Title={blogPost.title}
            ></BreadCumb> 
            <BlogDetails></BlogDetails>     
        </div>
    );
};

export default BlogDetailsPage;