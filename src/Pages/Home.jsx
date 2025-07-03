import About1 from "../Components/About/About1";
import BeforeAfter from "../Components/BeforeAfter/BeforeAfter";
import Blog3 from "../Components/Blog/Blog3";
import Choose1 from "../Components/Choose/Choose1";
import Contact1 from "../Components/Contact/Contact";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Process from "../Components/Process/Process";
import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = ({ titleSeo, description, Author, Keyword, URL }) => {
    // For SEO
    const metatitle = String(titleSeo || "FAJ / AC Repair In Dubai - Freezer Service Appliances Fix");
    const metadescription = String(description || "FAJ Established in 2010, / We offer professional AC Repair, Freezer, Refrigerator, Fridge, Washing Machine Maintenance Service Company Dubai");
    const metaAuthor = String(Author || "Faj Technical Services");
    const metaKeyword = String(Keyword || "Ac Repair, Ac Repair In Dubai, Ac Repair Service, Ac Service, Washing Machine Repair, Washing Machine Service, Refrigerator Repair, Freezer Repair, Fridge Repair, Appliances Repair, Appliances Service, Appliances Fix, Appliances Maintenance, Appliances Installation, Appliances Dubai");
    const metaURL = String(URL || "https://www.fajservices.ae/").replace(/\/?$/, '/');
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{metatitle}</title>
                    <meta name="description" content={metadescription}></meta>
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
            </HelmetProvider>
            <div className="homepage">
                <HeroBanner1></HeroBanner1>
                <About1
                    img1="img/about_img_1.avif"
                    img2="img/about_img_2.avif"
                    img3="img/about_img_3.avif"
                    expNumber="FAJ"
                    expYers="was established"
                    expTitle="Since"
                    expTitleYear="2010"
                    expDescrip="We are committed to delivering top-notch technical services that meet the highest international standards for exceptional quality."
                    number="(+971) 507464712"
                    telLink="tel:+971507464712"
                    subTitle="About Us"
                    Title="Speedy Services, Quality Results"
                    Content="We are professional and committed to service, highlighting our dedication to providing exceptional results in repair, servicing, and maintenance contracts."
                    feature1="Routine Maintenance, Let's Start Today"
                    feature2="Fast, Efficient Repair Service"
                    listItem={[
                        "Efficiency through expert maintenance",
                        "Expertise. Integrity. Responsiveness",
                        "Comprehensive Diagnostic Check",
                        "Quality workmanship",
                        "Guaranteed Work",
                    ]}

                ></About1>
                <Services1></Services1>
                <Choose1
                    img1="img/feature_img_1.avif"
                    content="Installation, repair, or maintenance service agreement for your home, office, or commercial needs in Dubai, Sharjah and Abu Dhabi, offers expert and affordable solutions."
                    btnName="Read more"
                    btnUrl="about-us/"
                    img2="img/whywechoose2.avif"
                    img3="img/whychooseus.avif"
                ></Choose1>
                <BeforeAfter
                    title="Recent Completed Projects"
                    subTitle="Before & after"
                    bgImg="img/background-image-2.avif"
                    beforeImg="img/after_img_1.avif"
                    afterTitle="After"
                    afterImg="img/before_img_1.avif"
                    beforeTitle="Before"
                ></BeforeAfter>
                <Project1></Project1>
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
                <Testimonial1
                    subtitle="Testimonial"
                    title="What our clients say <br> About Us"
                    bgImg="img/testimonialbg.jpg"
                ></Testimonial1>
                {/* <Pricing1></Pricing1> */}
                <Blog3></Blog3>

                <Process></Process>
            </div>
        </>
    );
};

export default Home;