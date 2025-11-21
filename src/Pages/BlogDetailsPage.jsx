import BlogDetails from "../Components/BlogDetails/BlogDetails";
// import BreadCumb from "../Components/Common/BreadCumb";
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
  
    if (!blogPost) {
      return <div className="container py-5 text-center">Loading...</div>;
    }
    return (
        <div>
             {/* <BreadCumb
                bgImg="img/page_heading_1.avif"
                Title={blogPost.title}
            ></BreadCumb>  */}
            <BlogDetails></BlogDetails>     
        </div>
    );
};

export default BlogDetailsPage;