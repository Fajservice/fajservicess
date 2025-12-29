import BlogDetails from "../Components/BlogDetails/BlogDetails";
import { useEffect, useState } from "react";
import data from "../Data/blog.json";
import { Link, useParams } from "react-router-dom";

const BlogDetailsPage = () => {
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
  
    if (!blogPost) {
      return <div className="container py-5 text-center">Loading...</div>;
    }
    return (
        <div>
            <BlogDetails></BlogDetails>     
        </div>
    );
};

export default BlogDetailsPage;