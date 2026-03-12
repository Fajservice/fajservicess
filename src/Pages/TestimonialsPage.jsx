import BreadCumb from "../Components/Common/BreadCumb";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import data from "../../public/data/testimonial1.json";

const TestimonialsPage = ({ titleSeo, description, Author, Keyword, URL }) => {
    // For SEO
    const metatitle = String(titleSeo || "Testimonials: Our Client's Experiences | FAJ Technical Dubai");
    const metadescription = String(description || "Find out what our customers are expressing regarding their experiences with FAJ. Read testimonial to see how we exceed expectations with our services.");
    const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
    const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/page_heading_1/public");
    const metaKeyword = String(Keyword || "FAJ");
    const metaURL = String(URL || "https://www.fajservices.ae/testimonials/");

    return (
        <>
            <HelmetProvider>
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
                    <meta property="og:image" content={metaImage} />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={metatitle} />
                    <meta name="twitter:description" content={metadescription} />
                    <meta name="twitter:image" content={metaImage} />
                    
                </Helmet>
            </HelmetProvider>
            <section className="section cs_py_30">
                <div className="container">
                    <h1 className="cs_fs_30 text-center mb-0">Testimonials</h1>
                </div>
            </section>
            <Testimonial1 
                subtitle="What Our Clients Say"
                title="Customer <span>Reviews</span>"
                bgImg="testimonialbg"
                testimonialData={data}
                sectionId="home-testimonials"
            />
        </>
    );
};
export default TestimonialsPage;