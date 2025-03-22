import Blog1 from "../Components/Blog/Blog1";
import BreadCumb from "../Components/Common/BreadCumb";

const BlogPage = () => {
    return (
        <div>
             <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Blog"
            ></BreadCumb>  
            <Blog1></Blog1>      
        </div>
    );
};

export default BlogPage;