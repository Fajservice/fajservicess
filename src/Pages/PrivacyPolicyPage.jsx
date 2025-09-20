import BreadCumb from "../Components/Common/BreadCumb";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PrivacyPolicyPage = ({ titleSeo, description, Author, Keyword, URL }) => {
    // For SEO
    const metatitle = String(titleSeo || "Privacy Policy");
    const metadescription = String(description || "Privacy Policy, FAJ was established 2010 & expert in appliances maintenance service company in Dubai, Offering repair of fridge, washing machine.");
    const metaAuthor = String(Author || "Faj Technical Services");
    const metaImage = String(Image || "https://www.fajservices.ae/img/page_heading_1.avif");
    const metaKeyword = String(Keyword || "FAJ");
    const metaURL = String(URL || "https://www.fajservices.ae/privacy-policy/").replace(/\/?$/, '/');

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
                    <h1 className="cs_fs_30 text-center mb-0">Privacy Policy</h1>
                </div>
            </section>

            <section className="cs_section_padding py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            {/* <h2 className="text-left mb-0" style={{ fontSize: "40px" }}>Our Vision</h2> */}
                            <p>
                                FAJ Services is committed to protecting the privacy of visitors to and users of our website, https://www.fajservices.ae/, and any services offered through our Site (collectively, the “Services”). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data. By using the Site or our Services, you agree to the collection and use of information in accordance with this policy.
                            </p>

                            <h2 className="cs_fs_24 mb-1">1. Information We Collect</h2>
                            <p>
                                We may collect and process the following types of personal information:

                                <br /> <strong> Identity Data:</strong> full name, date of birth, gender.

                                <br /> <strong> Contact Data:</strong> email address, phone number, postal address.

                                <br /> <strong> Account Data:</strong> login details, username, password (if you create an account).

                                <br /> <strong> Transaction Data:</strong> details about payments you make and orders or services you request.

                                <br /> <strong> Usage Data:</strong> information about how you use our Site, pages visited, time spent, referral sources, device/browser type, IP address.

                                <br /> <strong> Technical Data:</strong> device identifiers, operating system, browser type, and other system or network details.

                                <br /> <strong> Marketing & Communications Data:</strong> preferences in receiving marketing from us, your communication preferences.
                            </p>

                            <h2 className="cs_fs_24 mb-1">2. How We Collect Information</h2>

                            <p>We collect information in the following ways:</p>

                            <p> Directly from you when you provide information by filling in forms, registering on the Site, contacting us, subscribing to newsletters, making requests, or purchasing services. <br />

                                Automatically when you browse the Site (e.g., via cookies and other tracking technologies). <br />
                                From third parties, such as payment processors, partners, or public databases, when necessary (e.g., verifying address, credit checks, fraud prevention). </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default PrivacyPolicyPage;