import BreadCumb from "../Components/Common/BreadCumb";
import { Helmet, HelmetProvider } from "react-helmet-async";

const TermsConditionsPage = ({ titleSeo, description, Author, Keyword, URL }) => {
    // For SEO
    const metatitle = String(titleSeo || "Terms and Conditions");
    const metadescription = String(description || "Privacy Policy, FAJ was established 2010 & expert in appliances maintenance service company in Dubai, Offering repair of fridge, washing machine.");
    const metaAuthor = String(Author || "Faj Technical Services");
    const metaImage = String(Image || "https://www.fajservices.ae/img/page_heading_1.avif");
    const metaKeyword = String(Keyword || "FAJ");
    const metaURL = String(URL || "https://www.fajservices.ae/terms-and-conditions/").replace(/\/?$/, '/');

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
            <section className="section cs_py_30">
                <div className="container">
                    <h1 className="cs_fs_30 text-center mb-0">Terms and Conditions</h1>
                </div>
            </section>

            <section className="cs_section_padding py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            {/* <h2 className="text-left mb-0" style={{ fontSize: "40px" }}>Our Vision</h2> */}
                            <p>
                                Welcome to FAJ Services. These Terms and Conditions govern your access to and use of our website https://www.fajservices.ae/
                                and the services we provide (collectively, the “Services”).
                                <br />
                                By accessing or using our Site and Services, you agree to comply with and be bound by these Terms. If you do not agree, please refrain from using our Site and Services.
                            </p>

                            <h2 className="cs_fs_24 mb-1">1. Use of the Site</h2>
                            <p>
                                You must be at least 18 years old to use our Services.

                                You agree to use the Site only for lawful purposes and in accordance with these Terms.

                                You are responsible for ensuring that your use of the Site complies with all applicable laws and regulations of the United Arab Emirates (UAE).
                            </p>

                            <h2 className="cs_fs_24 mb-1">2. Services</h2>

                            <p>FAJ Services provides home appliance repair, AC maintenance and many more. <br />
                                We reserve the right to modify, suspend, or discontinue any Services at any time without prior notice.
                                <br />
                                Pricing, availability, and descriptions of Services are subject to change.
                            </p>

                            <h2 className="cs_fs_24 mb-1">3. User Accounts</h2>

                            <p>
                                You may be required to create an account to access certain Services. <br />
                                You are responsible for maintaining the confidentiality of your account login details and for all activities that occur under your account. <br />
                                FAJ Services reserves the right to suspend or terminate accounts that are used in violation of these Terms.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default TermsConditionsPage;