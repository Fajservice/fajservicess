import Brand1 from "../Components/Brand/Brand1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import { Link } from "react-router-dom";
import {Helmet, HelmetProvider } from "react-helmet-async";
import Team1 from "../Components/Team/Team1";
import Process from "../Components/Process/Process";


const OurTeamPage = () => {


    return (
        <>
             <HelmetProvider>
                <Helmet>
                <title>FAJ Team | Skilled Technicians & Support Experts in UAE</title>
                <meta name="description" content="Meet FAJ’s experienced team delivering expert AC, appliance, and maintenance services with customer-focused support across Dubai and beyond."></meta>
                <meta name="keywords" content="About FAJ Group" />
                <meta name="author" content="F A J Technical Services L.L.C." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.fajservices.ae/our-team/" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:title" content="FAJ Team | Skilled Technicians & Support Experts in UAE" />
                <meta property="og:description" content="Meet FAJ’s experienced team delivering expert AC, appliance, and maintenance services with customer-focused support across Dubai and beyond." />
                <meta property="og:url" content="https://www.fajservices.ae/our-team/" />
                </Helmet>
            </HelmetProvider>

            <section
                className="cs_page_heading cs_bg_filed cs_primary_bg"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/page_heading_1.avif)` }}
                >
                <div className="container h-100">
                    {/* Main row */}
                    <div className="row align-items-center h-100">
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                            <h1 className="cs_white_color text-center" style={{ fontSize: "clamp(1.75rem, 5vw, 2.625rem)" }}>
                               Our Team
                            </h1>
                        </div>
                    {/* Form section */}
                    </div>
                </div>
                <div className="pb-3 d-md-none"></div>
            </section>
            <Team1></Team1>
             <Testimonial1
                subtitle="Testimonial"
                title="What our clients say <br> About Us"
                bgImg="img/testimonialbg.jpg"
            ></Testimonial1>
            <Brand1></Brand1>
            <Process></Process>
        </>
    );
};

export default OurTeamPage;