import Brand1 from "../Components/Brand/Brand1";
import Process from "../Components/Process/Process";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Breadcrumb from "../Components/Common/BreadCumb";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  let variant = 'mobile';
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    const realWidth = width;
    if (realWidth > 1200) {
      variant = 'large';
    } else if (realWidth > 768) {
      variant = 'desktop';
    } else if (realWidth > 480) {
      variant = 'tablet';
    } else {
      variant = 'mobile';
    }
  }
  return `${CDN}/${imgPath}/${variant}`;
};

const PhoneCallIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v2h2v2h2V5h2v2h2V3h-2V1h-2v2h-2V1h-2v2z"/>
  </svg>
);

const WhoWeArePage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>FAJ Who We Are | Trusted UAE Technical Service Experts</title>
          <meta
            name="description"
            content="Since 2010, FAJ delivers trusted AC, appliance, refrigeration & maintenance services in Dubai, Abu Dhabi & Sharjah with technical support."
          />
          <meta name="keywords" content="About FAJ Group" />
          <meta name="author" content="FAJ Technical Services L.L.C." />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.fajservices.ae/who-we-are/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:title"
            content="FAJ Who We Are | Trusted UAE Technical Service Experts"
          />
          <meta
            property="og:description"
            content="Since 2010, FAJ delivers trusted AC, appliance, refrigeration & maintenance services in Dubai, Abu Dhabi & Sharjah with technical support."
          />
          <meta property="og:url" content="https://www.fajservices.ae/who-we-are/" />
        </Helmet>
      </HelmetProvider>
      <Breadcrumb />
      <section className="section cs_py_30">
        <div className="container">
          <h1 className="cs_fs_50 text-center mb-0">Who We Are</h1>
        </div>
      </section>

      <section className="cs_section_padding bg-light-gray py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="text-center mb-0"
                style={{ fontSize: "30px" }}
              >
                Dedicated to Achieving Outstanding Results Across All Industries
              </h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <p className="text-left">
                In a world where technology seamlessly integrates into our daily
                lives, FAJ Technical Services L.L.C. has been at the forefront
                of innovation since 2010.
                <br /> What began as a modest operation focusing on air
                conditioning systems, domestic appliances, and commercial
                equipments installation, repair, and annual maintenance services
                in the UAE has transformed into a leading technical services
                solutions company. We serve and empower homes, businesses, and
                industries throughout Dubai, Sharjah, and Abu Dhabi.
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-left">
                With a relentless pursuit of excellence, we have redefined the
                standards of technical services, earning the esteemed Trusted
                Trader endorsement in 2025. We aim to harmonise technology with
                everyday life, fostering our customers&apos; peace of mind,
                satisfaction, and happiness. Discover how our expert teams,
                cutting-edge solutions, and customer-centric approach can
                revolutionise your space and enhance your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cs_about cs_style_1 position-relative">
        <div className="cs_height_40 cs_height_lg_40"></div>
        <div className="container">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-xl-6">
              <div className="cs_about_thumbnail_wrapper position-relative">
                <div className="cs_about_thumbnail">
                  <img
                    src={getImageSrc('about_img_1')}
                    alt="About Image"
                  />
                </div>
                <div className="cs_about_thumbnail mt-4">
                  <img
                    src={getImageSrc('about_img_2')}
                    alt="About Image"
                  />
                </div>
                <div className="cs_about_thumbnail">
                  <img
                    src={getImageSrc('about_img_3')}
                    alt="About Image"
                  />
                </div>
                <div className="cs_esperience_text position-absolute">
                  <h2 className="cs_experience_title mb-0">
                    <span className="cs_fs_100 cs_black cs_accent_color">FAJ</span>
                    <span className="cs_fs_24">was established</span>
                    <span className="cs_fs_24">Since</span>
                    <span className="cs_fs_24 cs_accent_color">2010</span>
                  </h2>
                </div>
                <a href="tel:+971507464712" className="cs_phone_call cs_heading_color">
                  <div className="cs_phone_icon cs_fs_20 cs_center cs_radius_50">
                    <PhoneCallIcon />
                  </div>
                  <div className="cs_phone_number cs_fs_20 cs_semibold">
                    (+971) 507464712
                  </div>
                </a>
                <div className="cs_about_shape_1 position-absolute">
                  <img src={getImageSrc('shapes/gear_2')} alt="Gear Shape" />
                </div>
                <div className="cs_about_shape_2 position-absolute">
                  <img src={getImageSrc('shapes/gear_2')} alt="Gear Shape" />
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="cs_about_text">
                <div className="cs_section_heading cs_style_1 cs_mb_20">
                  <h3 className="cs_section_subtitle cs_fs_18 text-uppercase cs_mb_12 wow fadeInDown">
                    The Journey of FAJ Group
                  </h3>
                  <h2 className="cs_section_title cs_fs_36 mb-0 wow fadeInUp">
                    From Humble Beginnings to Diversified Excellence
                  </h2>
                </div>
                <p className="cs_mb_40">
                  The FAJ Group&apos;s remarkable journey began in 2010 as a small, visionary technical services and sales trading house in Dubai, UAE. Over the past 15 years, our relentless pursuit of growth and innovation has transformed us into a dynamic, multi-entity organisation. Today, our group comprises over four companies, operating across two main sectors in the UAE and Pakistan. Our diversified portfolio now spans trading (including e-commerce), IT solutions, technical education, HVAC, refrigeration, domestic and commercial appliances/equipments, electronics, and numerous other services – a testament to our unwavering commitment to excellence and progress.
                </p>

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

      {/* <Testimonial1
        subtitle="Testimonial"
        title="What our clients say <br> About Us"
        bgImg="testimonialbg"
      /> */}
      <Brand1 />
      <Process />
    </>
  );
};

export default WhoWeArePage;