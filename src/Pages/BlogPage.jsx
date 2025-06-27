import Blog1 from "../Components/Blog/Blog1";

const BlogPage = () => {
    return (
        <div>
            <section
                className="cs_page_heading cs_bg_filed cs_primary_bg"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/page_heading_1.avif)` }}
                >
                <div className="container h-100">
                    {/* Main row */}
                    <div className="row align-items-center h-100">
                        <div className="col-md-12 d-flex justify-content-start align-items-center">
                            <h1 className="cs_white_color text-left offset-md-1" style={{ fontSize: "clamp(1.75rem, 5vw, 2.625rem)" }}>
                                Blogs
                            </h1>
                        </div>
                    {/* Form section */}
                    </div>
                </div>
                <div className="pb-3 d-md-none"></div>
            </section> 
            <Blog1></Blog1>      
        </div>
    );
};

export default BlogPage;