import BlogDetails from "../Components/BlogDetails/BlogDetails";
import BreadCumb from "../Components/Common/BreadCumb";

const BlogDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                bgImg="/fajservicess/src/assets/img/page_heading_1.jpg"
                Title="Blog Details"
            ></BreadCumb>   
            <BlogDetails></BlogDetails>        
        </div>
    );
};

export default BlogDetailsPage;