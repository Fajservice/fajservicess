import Brand1 from "../Components/Brand/Brand1";
import Process from "../Components/Process/Process";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import { Link } from "react-router-dom";
import {Helmet, HelmetProvider } from "react-helmet-async";
import Timeline from "../Components/About/Timelines";


const OurVisionOurMissionPage = () => {


    return (
        <>
             <HelmetProvider>
        <Helmet>
          <title>About Us - Appliances Service Center - #1 AC Repair Company</title>
          <meta name="description" content="About Us, F A J Technical Services L.L.C. was established in 2010 as an Air Conditioner System, Appliances, Installation Repair Maintenance Servic"></meta>
          <meta name="keywords" content="About FAJ Group" />
          <meta name="author" content="F A J Technical Services L.L.C." />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.fajservices.ae/our-history/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="About Us - Appliances Service Center - #1 AC Repair Company" />
          <meta property="og:description" content="About Us, F A J Technical Services L.L.C. was established in 2010 as an Air Conditioner System, Appliances, Installation Repair Maintenance Servic" />
          <meta property="og:url" content="https://www.fajservices.ae/our-history/" />
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
                               Our History
                            </h1>
                        </div>
                    {/* Form section */}
                    </div>
                </div>
                <div className="pb-3 d-md-none"></div>
            </section>
           <Timeline></Timeline>
            <Process></Process>
            <section className="cs_about cs_style_1 position-relative">
                <div className="cs_height_40 cs_height_lg_40"></div>
                <div className="container">
                    <div className="row cs_gap_y_40 align-items-center">
                        <div className="col-xl-6">
                        <div className="cs_about_thumbnail_wrapper position-relative">
                            <div className="cs_about_thumbnail">
                            <img src={`${import.meta.env.BASE_URL}img/about_img_1.avif`} loading="lazy" alt="About Image" />
                            </div>
                            <div className="cs_about_thumbnail mt-4">
                            <img src={`${import.meta.env.BASE_URL}img/about_img_2.avif`} loading="lazy" alt="About Image" />
                            </div>
                            <div className="cs_about_thumbnail">
                            <img src={`${import.meta.env.BASE_URL}img/about_img_3.avif`} loading="lazy" alt="About Image" />
                            </div>
                            <div className="cs_esperience_text position-absolute">
                            <h2 className="cs_experience_title mb-0">
                                <span className="cs_fs_52">FAJ</span>
                                <span className="cs_fs_20">was established</span>
                                <span className="cs_fs_36">Since</span>
                                <span className="cs_fs_50">2010</span>
                            </h2>
                            <p className="cs_fs_16">We are committed to delivering top-notch technical services that meet the highest international standards for exceptional quality.</p>
                            </div>
                            <a href="tel:+971507464712" className="cs_phone_call cs_heading_color">
                            <div className="cs_phone_icon cs_fs_20 cs_center cs_radius_50">
                            <i className="bi bi-telephone-x-fill"></i></div>
                            <div className="cs_phone_number cs_fs_20 cs_semibold">(+971) 507464712</div>
                            </a>
                            <div className="cs_about_shape_1 position-absolute">
                            <img src={`${import.meta.env.BASE_URL}img/shapes/gear_2.svg`} alt="Gear Shape" />
                            </div>
                            <div className="cs_about_shape_2 position-absolute">
                            <img src={`${import.meta.env.BASE_URL}img/shapes/gear_1.svg`} loading="lazy" alt="Gear Shape" />
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6">
                        <div className="cs_about_text">
                            <div className="cs_section_heading cs_style_1 cs_mb_20">
                            <h3 className="cs_section_subtitle cs_fs_18 text-uppercase cs_mb_12 wow fadeInDown">The Journey of FAJ Group</h3>
                            <h2 className="cs_section_title cs_fs_36 mb-0 wow fadeInUp">From Humble Beginnings to Diversified Excellence</h2>
                            </div>
                            <p className="cs_mb_40">The FAJ Group&apos;s remarkable journey began in 2010 as a small, visionary technical services and sales trading house in Dubai, UAE. Over the past 15 years, our relentless pursuit of growth and innovation has transformed us into a dynamic, multi-entity organisation.  Today, our group comprises over four companies, operating across two main sectors in the UAE and Pakistan. Our diversified portfolio now spans trading (including e-commerce), IT solutions, technical education, HVAC, refrigeration, domestic and commercial appliances/equipments, electronics, and numerous other services – a testament to our unwavering commitment to excellence and progress.</p>
                            
                            <div className="cs_about_btns">
                            <Link to="/about-us/" className="cs_btn cs_style_1 wow fadeInLeft">
                                <span>Read more</span>
                                <i className="bi bi-arrow-right"></i>   
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_40 cs_height_lg_40"></div>
            </section>
             <Testimonial1
                subtitle="Testimonial"
                title="What our clients say <br> About Us"
                bgImg="img/testimonialbg.jpg"
            ></Testimonial1>
            <Brand1></Brand1>
            {/* <Team1></Team1> */}
        </>
    );
};

export default OurVisionOurMissionPage;