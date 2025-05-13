import About1 from "../Components/About/About1";
import Brand1 from "../Components/Brand/Brand1";
import BreadCumb from "../Components/Common/BreadCumb";
import Process from "../Components/Process/Process";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const AboutPage = () => {
    return (
        <div>
            <section
                    className="cs_page_heading cs_bg_filed cs_primary_bg"
                    style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/page_heading_1.avif)` }}
                    >
                    <div className="container h-100">
                        {/* Main row */}
                        <div className="row align-items-center h-100">
                            <div className="col-md-12 d-flex justify-content-center align-items-center">
                                <h1 className="cs_white_color text-center" style={{ fontSize: "clamp(1.75rem, 5vw, 2.625rem)" }}>
                                    COMMITTED TO DELIVERING EXCELLENCE SINCE 2010
                                </h1>
                            </div>
                        {/* Form section */}
                        </div>
                    </div>

                    {/* Extra padding div to ensure proper spacing after the section */}
                    <div className="pb-3 d-md-none"></div>
                    </section>          
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
             <Testimonial1
                subtitle="Testimonial"
                title="What our clients say <br> About Us"
                bgImg="img/testimonialbg.jpg"
            ></Testimonial1>
            <Brand1></Brand1>
            <Process></Process>
            {/* <Team1></Team1> */}
        </div>
    );
};

export default AboutPage;