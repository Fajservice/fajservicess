
import React from 'react'
import Contact1 from "../Components/Contact/Contact";
import BreadCumb from "../Components/Common/BreadCumb";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ContactPage = ({titleSeo, description, Author, Keyword, URL }) => {
    // For SEO
    const metatitle = String(titleSeo || "Contact Us for Service Center Near Me and Repairs | FAJ Dubai");
    const metadescription = String(description || "Reach out to FAJ Technical Service for any inquiries or to schedule maintenance services, & discover how we can help you with your home / office needs.");
    const metaAuthor = String(Author || "Faj Technical Services");
    const metaImage = String(Image || "https://www.fajservices.ae/img/page_heading_1.avif");
    const metaKeyword = String(Keyword || "FAJ");
    const metaURL = String(URL || "https://www.fajservices.ae/contact-us/").replace(/\/?$/, '/');

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
        <div>
            <BreadCumb
                bgImg="img/page_heading_1.avif"
                Title="Contact"
            ></BreadCumb> 
            <Contact1
                Title="Contact Information"
                subTitle="FAJ location is easily accessible from Al Khail Road and Sheikh Zayed Road. Drop off your appliance at the workshop to receive a discount on the technical inspection fee and service.."
                address="Warehouse # 2, Street 18b, Al Quoz Industrial Area # 4 Dubai – United Arab Emirates."
                email="Info@fajservices.ae"
                emailLink="mailto:info@fajservices.ae"
                number="+971 4 330 0002"
                numberLink="tel:+97143300002"
                number1="+971 50 746 4712"
                number1Link="tel:+971507464712"
                clientNumber="5,400"
                img="img/contact-us-image.avif"
                client="Happy Clients"
                subtitle2="Contact us"
                title2="Book An Appointment"
            ></Contact1>           
        </div>
        </>
    );
};

export default ContactPage;