import Brand1 from "../Components/Brand/Brand1";
import Process from "../Components/Process/Process";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Timeline from "../Components/About/Timelines";

const PhoneCallIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v2h2v2h2V5h2v2h2V3h-2V1h-2v2h-2V1h-2v2z"/>
  </svg>
);

const OurVisionOurMissionPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>FAJ History | From AC Maintenance to UAE Service Leader</title>
          <meta
            name="description"
            content="Established in 2010 as an AC maintenance firm in Dubai, FAJ has grown into a trusted provider of comprehensive technical services across UAE."
          />
          <meta name="keywords" content="About FAJ Group" />
          <meta name="author" content="FAJ Technical Services L.L.C." />
          <meta name="robots" content="index, follow" />
          <link
            rel="canonical"
            href="https://www.fajservices.ae/our-history/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:title"
            content="FAJ History | From AC Maintenance to UAE Service Leader"
          />
          <meta
            property="og:description"
            content="Established in 2010 as an AC maintenance firm in Dubai, FAJ has grown into a trusted provider of comprehensive technical services across UAE."
          />
          <meta
            property="og:url"
            content="https://www.fajservices.ae/our-history/"
          />
        </Helmet>
      </HelmetProvider>

      {/* Page Title */}
      <section className="section cs_py_30">
        <div className="container">
          <h1 className="cs_fs_30 text-center mb-0">Our History</h1>
        </div>
      </section>

      <Timeline />
      <Process />

      {/* About Section */}
      <section className="cs_about cs_style_1 position-relative">
        <div className="cs_height_40 cs_height_lg_40"></div>

        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-xl-6">
              <div className="cs_about_thumbnail_wrapper position-relative">
                <div className="cs_about_thumbnail">
                  <img
                    src={`${import.meta.env.BASE_URL}img/about_img_1.avif`}
                    alt="About FAJ"
                  />
                </div>
                <div className="cs_about_thumbnail mt-4">
                  <img
                    src={`${import.meta.env.BASE_URL}img/about_img_2.avif`}
                    alt="About FAJ"
                  />
                </div>
                <div className="cs_about_thumbnail">
                  <img
                    src={`${import.meta.env.BASE_URL}img/about_img_3.avif`}
                    alt="About FAJ"
                  />
                </div>

                <div className="cs_esperience_text position-absolute">
                  <h2 className="cs_experience_title mb-0">
                    <span className="cs_fs_100 cs_black cs_accent_color">FAJ</span>
                    <span className="cs_fs_30">was established</span>
                    <span className="cs_fs_36">Since</span>
                    <span className="cs_fs_50">2010</span>
                  </h2>
                </div>

                <a
                  href="tel:+971507464712"
                  className="cs_phone_call cs_heading_color"
                >
                  <div className="cs_phone_icon cs_fs_20 cs_center cs_radius_50">
                    <PhoneCallIcon size={24} />
                  </div>
                  <div className="cs_phone_number cs_fs_20 cs_semibold">
                    (+971) 507464712
                  </div>
                </a>

                <div className="cs_about_shape_1 position-absolute">
                  <img
                    src={`${import.meta.env.BASE_URL}img/shapes/gear_2.svg`}
                    alt="Gear Shape"
                  />
                </div>
                <div className="cs_about_shape_2 position-absolute">
                  <img
                    src={`${import.meta.env.BASE_URL}img/shapes/gear_1.svg`}
                    alt="Gear Shape"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="col-xl-6">
              <div className="cs_about_text">
                <div className="cs_section_heading cs_style_1 cs_mb_20">
                  <h3 className="cs_section_subtitle cs_fs_18 text-uppercase cs_mb_12">
                    The Journey of FAJ Group
                  </h3>
                  <h2 className="cs_section_title cs_fs_36 mb-0">
                    From Humble Beginnings to Diversified Excellence
                  </h2>
                </div>

                <p className="cs_mb_40">
                  The FAJ Group's remarkable journey began in 2010 as a small,
                  visionary technical services and sales trading house in Dubai,
                  UAE. Over the past 15 years, our relentless pursuit of growth
                  and innovation has transformed us into a dynamic, multi-entity
                  organisation operating across the UAE and Pakistan.
                </p>

                <div className="cs_about_btns">
                  <Link to="/about-us/" className="cs_btn cs_style_1">
                    <span>Read more</span>
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
      />

      <Brand1 />
    </>
  );
};

export default OurVisionOurMissionPage;