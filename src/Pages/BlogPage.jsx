import Blog1 from "../Components/Blog/Blog1";
import BreadCumb from "../Components/Common/BreadCumb";
import { Helmet, HelmetProvider } from "react-helmet-async";

const BlogPage = () => {
    return (
        <div>
             <BreadCumb
                bgImg="img/page_heading_1.avif"
                Title="Blog"
            ></BreadCumb>  
            <Blog1></Blog1>      
        </div>
    );
};

export default BlogPage;