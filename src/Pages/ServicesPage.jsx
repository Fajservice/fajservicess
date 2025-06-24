import BreadCumb from "../Components/Common/BreadCumb";
import Services3 from "../Components/Services/Services3";
import { Helmet, HelmetProvider } from "react-helmet-async";


const ServicesPage = ({titleSeo, description, Author, Keyword, URL }) => {
    // For SEO
    const metatitle = String(titleSeo || "FAJ appliances Repair In Dubai");
    const metadescription = String(description || "FAJ, established in 2010, offers expert appliances repair in Dubai. Skilled technicians ensure quality service for all major brands and types.");
    const metaAuthor = String(Author || "Faj Technical Services");
    const metaImage = String(Image || "https://www.fajservices.ae/dist/img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif");
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
            <BreadCumb
                bgImg="img/page_heading_1.avif"
                Title="Services"
            ></BreadCumb>
            <Services3></Services3>
        </div>
        </>
    );
};

export default ServicesPage;