import { Helmet } from "react-helmet-async";
import Blog1 from "../Components/Blog/Blog1";

const BlogPage = ({ titleSeo, description, Author, Keyword, URL }) => {
    // For SEO
    const metatitle = String(titleSeo || "Installation, Repair & Maintenance Services Blogs in Dubai|FAJ");
    const metadescription = String(description || "Explore useful tips, guides / blogs, and up to date news on repair and maintenance from the most trusted maintenance information company in Dubai - FAJa");
    const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
    const metaKeyword = String(Keyword || "Installation Repair Maintenance Services Blogs, AC Repair Blogs, Refrigerator Repair Blogs, Washing Machine Repair Blogs, Kitchen Equipment Repair Blogs, Appliances Repair Blogs, Dubai");
    const metaURL = String(URL || "https://www.fajservices.ae/blogs/");

    return (
        <>
            <Helmet>
                <title>{metatitle}</title>
                <meta name="description" content={metadescription} />
                <meta name="keywords" content={metaKeyword} />
                <meta name="author" content={metaAuthor} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={metaURL} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:title" content={metatitle} />
                <meta property="og:description" content={metadescription} />
                <meta property="og:url" content={metaURL} />
            </Helmet>

            
            <div>
                <section className="section cs_py_30">
                    <div className="container">
                        <h1 className="cs_fs_30 text-center mb-0">Blogs</h1>
                    </div>
                </section>
                <Blog1></Blog1>
            </div>
        </>

    );
};

export default BlogPage;