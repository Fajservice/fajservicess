import Services3 from "../Components/Services/Services3";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const ServicesPage = ({titleSeo, description, Author, Keyword, URL }) => {
    // For SEO
    const metatitle = String(titleSeo || "FAJ appliances Repair In Dubai");
    const metadescription = String(description || "FAJ, established in 2010, offers expert appliances repair in Dubai. Skilled technicians ensure quality service for all major brands and types.");
    const metaAuthor = String(Author || "Faj Technical Services");
    const metaImage = String(Image || "https://www.fajservices.ae/img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif");
    const metaKeyword = String(Keyword || "FAJ");
    const metaURL = String(URL || "https://www.fajservices.ae/services/").replace(/\/?$/, '/');
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
                <meta name="twitter:url" content={metaURL} />
            </Helmet>
        </HelmetProvider>
        <div className="servicepage">
           
            <section
                className="cs_page_heading cs_bg_filed cs_primary_bg"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/page_heading_1.avif)` }}
                >
                <div className="container h-100">
                    {/* Main row */}
                    <div className="row align-items-center h-100">
                        <div className="col-md-12 d-flex justify-content-start align-items-center">
                            <h1 className="cs_white_color text-left offset-md-1" style={{ fontSize: "clamp(1.75rem, 5vw, 2.625rem)" }}>
                                Services
                            </h1>
                        </div>
                    {/* Form section */}
                    </div>
                </div>
                <div className="pb-3 d-md-none"></div>
            </section> 
            <Services3></Services3>
        </div>
        </>
    );
};

export default ServicesPage;