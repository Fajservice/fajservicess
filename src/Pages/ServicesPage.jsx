import Services3 from "../Components/Services/Services3";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ServicesPage = ({ titleSeo, description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(
    titleSeo || "HVAC, Refrigeration, Kitchen Equipment Maintenance Company in Dubai"
  );
  const metadescription = String(
    description ||
      "FAJ has been the best maintenance company in Dubai since 2010, providing services for HVAC, appliances, refrigeration, & kitchen equipment & contract"
  );
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaImage = String(
    Image || "https://www.fajservices.ae/img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif"
  );
  const metaKeyword = String(Keyword || "FAJ");
  const metaURL = String(URL || "https://www.fajservices.ae/services/");

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
          style={{ display: "block", height: "inherit" }}
        >
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-md-12 d-flex flex-column justify-content-start align-items-start">
                <h1 className="cs_section_title cs_fs_50 mb-0 wow fadeInUp">
                  FAJ: Dubai’s Premier Maintenance Services Company in Dubai
                </h1>
                <p>
                  Since 2010, we have been providing repair and maintenance
                  services for HVAC systems, appliances, refrigeration, and
                  kitchen equipment, as well as annual contract services in
                  Dubai, Sharjah, and Abu Dhabi.
                </p>
              </div>
            </div>
          </div>
          <div className="pb-3 d-md-none"></div>
        </section>

        <Services3 />
      </div>
    </>
  );
};

export default ServicesPage;
