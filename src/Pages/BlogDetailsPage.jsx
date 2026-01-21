import BlogDetails from "../Components/BlogDetails/BlogDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}data/blog.json`);
        const data = await response.json();
        const post = data.find(item => item.slug === slug);
        setBlogPost(post || data[0]);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (isLoading) {
    return <div className="container py-5 text-center">Loading...</div>;
  }

  if (!blogPost) {
    return <div className="container py-5 text-center">Blog post not found.</div>;
  }

  return (
    <div>
      <BlogDetails />
    </div>
  );
};

export default BlogDetailsPage;