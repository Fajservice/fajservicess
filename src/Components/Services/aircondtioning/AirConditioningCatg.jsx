import { useEffect, useState, useRef } from "react";
import Testimonial1 from "../../Testimonial/Testimonial1";
import CallNowButton from "../../Buttons/CallNowButton";
import AcRepairService from "../../Buttons/AcRepairService";
import AMCbutton from "../../Buttons/AMCbutton";
import Blog2 from "../../Blog/Blog2";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from "../../Contact/Serviceappointemnt";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
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

const AirConditioningCatg = ({ subtitle, title, reviewsbg, titleSeo, description, Author, URL }) => {
  const metatitle = String(titleSeo || "AC Repair Service and HVAC Maintenance خدمات صيانة وتصليح المكيفات");
  const metadescription = String(description || "FAJ has been providing the best AC repair service in Dubai since 2010. Get fast AC maintenance, servicing & AC cleaning from expert technician near you");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public");


  subtitle = "Testimonial"
  title = "What our clients say <br> About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const [ServicesPageData, setServicesPageData] = useState([]);
  const [data, setData] = useState([]);
  const [testimonial_data, setTestimonialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cardResponse, faqsResponse, testimonialsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/maincategory.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcRepairFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/MideaAcServiceTestimonials.json`)
        ]);
        const cardData = await cardResponse.json();
        const faqsData = await faqsResponse.json();
        const testimonialsData = await testimonialsResponse.json();

        setServicesPageData(cardData);
        setData(faqsData);
        setTestimonialData(testimonialsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{metatitle}</title>
          <meta name="description" content={metadescription}></meta>
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={metatitle} />
          <meta property="og:description" content={metadescription} />
          <meta property="og:image" content={metaImage} />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:image" content={metaImage} />

        </Helmet>
      </HelmetProvider>
      <div className="cs_service_details">
        {/* Section 1 - Intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Top-Rated Air Conditioning Maintenance, Repair, and Services Company in Dubai, UAE</h1>
            <p>FAJ Technical Services L.L.C. is a leading provider of air conditioning installation, repair, and maintenance services in Dubai. We offer comprehensive solutions to keep your facility cool in the summer and warm in the winter. With experience since 2010, we ensure your Air Conditioning systems operate at optimum energy efficiency. Our services help reduce the possibility of breakdowns, ultimately saving you money and time.</p>

            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <AcRepairService />
                <AMCbutton />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2*/}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Best Commercial Air Conditioning Maintenance Services in Dubai</h2>
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="service-image-wrapper">
                  <img
                    src={`${CDN}/ac-image2/public`}
                    alt="Commercial Air Conditioning Maintenance Services in Dubai - FAJ Technical Services"
                    title="Commercial AC Maintenance Service in Dubai"
                    width="500"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="service-image"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      border: '4px solid #030303',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <p>We offer tailored service and maintenance packages for businesses of all sizes, including small offices, large warehouses, hotels, entertainment venues, healthcare facilities, sports complexes, and religious institutions.</p>
                <p>For any business with multiple air conditioning units or required systems, we recommend servicing twice a year. This helps ensure safety, improve air quality, and enhance cost-efficiency while reducing the risk of leaks and blockages.</p>
                <p>We also provide a customised FAJ Technical Services L.L.C asset list for each customer.</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton/>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="section cs_py_30">
          <div className="container">
            {/* Heading - Centered on Top */}
            <h2 className="cs_fs_30 text-center mb-4">Professional Air Conditioning Maintenance Service in Dubai</h2>
            <div className="row align-items-center">
              {/* Text Column - Right */}
              <div className="col-12 col-lg-7">
                <p>At FAJ Technical Services L.L.C, we provide cost-effective heating and cooling solutions to create the perfect temperature in your home all year round. You can trust us to deliver first-class, comprehensive, and professional service with no corners cut.</p>
                <p>Our commitment ensures that the air in your home remains clean and filtered while keeping your system energy-efficient and free from bacteria.</p>
                <p>Our air conditioning technicians take pride in delivering thorough, high-quality service. We are always happy to answer any questions you may have and guide you through the process. After the service, you will receive a detailed report outlining the work completed and the condition of your system.</p>
              </div>
              {/* Image Column - Left */}
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="service-image-wrapper">
                  <img
                    src={`${CDN}/ac-image/public`}
                    alt="Domestic Air Conditioning Maintenance Service in Dubai - FAJ Technical Services"
                    title="Professional AC Maintenance Service for Homes in Dubai"
                    width="500"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="service-image"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      border: '4px solid #030303',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </div>
            <div id="get-quote" className="mt-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton/>
              </div>
            </div>
          </div>
        </section>
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Shop for Air Conditioner, Spare Parts and Accessories</h2>
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="service-image-wrapper">
                  <img
                    src={`${CDN}/shopair/public`}
                    alt="Commercial Air Conditioning Maintenance Services in Dubai - FAJ Technical Services"
                    title="Commercial AC Maintenance Service in Dubai"
                    width="500"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="service-image"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      border: '4px solid #030303',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-7 px-5">
                <p>If you need to buy new air conditioners, central, VRV, VRF, split, window AC, or replacement parts and accessories, we deliver quickly to any location.</p>
                <ul className="service-bullet-list gap-3">
                  <li><a href="https://www.fajtradingllc.com/collections/ac-spare-parts">AC Spare Parts</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/air-conditioners">Air Conditioners</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/split-ac">Split AC</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/window-ac">Window AC</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/floor-standing">Floor Standing</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/cassette-ac">Cassette AC</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/ac-concealed">Concealed AC</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/ceiling-suspended">Ceiling Suspended</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/duct-ac">Duct AC</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton/>
              </div>
            </div>
          </div>
          <style>{`
  .service-bullet-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px 10px;
    max-width: 500px;
  }
  
  .service-bullet-list li {
    position: relative;
    padding-left: 18px;
    font-size: 15px;
  }
  
  .service-bullet-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 8px;
    height: 8px;
    background-color: #1a3a4a;
    border-radius: 50%;
  }
  
  .service-bullet-list li a {
    color: #000;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .service-bullet-list li a:hover {
    color: #1a3a4a;
    text-decoration: none;
  }
  
  @media (max-width: 576px) {
    .service-bullet-list {
      grid-template-columns: repeat(2, 1fr);
      gap: 5px 8px;
      max-width: 100%;
    }
    
    .service-bullet-list li {
      font-size: 13px;
      padding-left: 14px;
    }
    
    .service-bullet-list li::before {
      width: 6px;
      height: 6px;
      top: 5px;
    }
  }
`}</style>
        </section>

        {/* Testimonial Section */}
        <Testimonial1
          subtitle="What Our Clients Say"
          title="Customer <span>Reviews</span>"
          bgImg={reviewsbg}
          testimonialData={testimonial_data}
          sectionId="home-testimonials"
        />

        <Blog2 />

        <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
          
              subtitle2="Contact us"
              title2="Book An Appointment"
            />
          </section>
 {/* FAQs */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30 ">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">
              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`}>
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                       <svg
                         width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`eye-open ${index === openItemIndex ? 'd-none' : ''}`}
                      >
<path d="M8 2V14M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                      {/* Eye Slash */}
                     
                       <svg
                       width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`eye-slash ${index !== openItemIndex ? 'd-none' : ''}`}
                       >
<path d="M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    <p className="mb-0"
                      dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
         
      </div>
    </>
  )
}

export default AirConditioningCatg