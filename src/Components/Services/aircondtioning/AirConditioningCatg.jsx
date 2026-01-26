import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Testimonial1 from "../../Testimonial/Testimonial1";
import CallNowButton from "../../Buttons/CallNowButton";
import AcRepairService from "../../Buttons/AcRepairService";
import AMCbutton from "../../Buttons/AMCbutton";
import Blog2 from "../../Blog/Blog2";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const AirConditioningCatg = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  const metatitle = String(titleSeo || "Best Midea AC Repair & HVAC Maintenance in Dubai UAE");
  const metadescription = String(description || "Experienced technicians with specialized knowledge and tools promptly diagnose and provide Midea AC repair and cleaning services near you in Dubai.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Midea AC Repair, Midea AC Maintenance, Midea Air Conditioner Service, Midea AC Installation, Midea AC Cleaning, Midea AC Service Dubai, Midea Air Conditioning Repair Dubai, Midea Split AC Service Dubai, Midea Central AC Service Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/midea-ac-installation-maintenance-repair-fix-service-in-dubai/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac%20filter/public");
  
  
  subtitle = "Testimonial"
  title = "What our clients say <br> About Us"
  reviewsbg = "estimonialbg.jpg"
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
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/MideaAcFaqs.json`),
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
      <div className="cs_service_details">
        {/* Section 1 - Intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Air Conditioning Maintenance, Repair and Servicing in Dubai</h1>
            <p>FAJ Technical Services L.L.C. is a leading provider of air conditioning installation, repair, and maintenance services in Dubai. We offer comprehensive solutions to keep your facility cool in the summer and warm in the winter. With experience since 2010, we ensure your Air Conditioning systems operate at optimum energy efficiency. Our services help reduce the possibility of breakdowns, ultimately saving you money and time.</p>

            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <AcRepairService />
                <AMCbutton />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2*/}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Commercial Air Conditioning Maintenance Services in Dubai</h2>

            <div className="row align-items-center">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="service-image-wrapper">
                  <img
                    src={`${CDN}/ac-image/public`}
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
                <CallNowButton />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="section cs_py_30">
          <div className="container">
            {/* Heading - Centered on Top */}
            <h2 className="cs_fs_30 text-center mb-4">Domestic Air Conditioning Maintenance Service in Dubai</h2>

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
                    src={`${CDN}/ac-image2/public`}
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
                <CallNowButton />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Shop for Coffee Machines, Equipment, and Accessories</h2>

            <div className="row align-items-center">
              <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <div className="service-image-wrapper">
                  <img
                    src={`${CDN}/shop-for-coffee-machines/public`}
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

              <div className="col-12 col-lg-8">
                <p>If you need to buy new air conditioners, central, VRV, VRF, split, window AC, or replacement parts and accessories, we deliver quickly to any location.</p>
                
                <ul className="service-bullet-list">
                  <li>AC Spare Parts</li>
                  <li>Air Conditioners</li>
                  <li>Split AC</li>
                  <li>Window AC</li>
                  <li>Floor Standing</li>
                  <li>Cassette AC</li>
                  <li>Concealed AC</li>
                  <li>Ceiling Suspended</li>
                  <li>Duct AC</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <CallNowButton />
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
          gap: 10px;
        }
        
        .service-bullet-list li {
          position: relative;
          padding-left: 24px;
          font-size: 15px;
          color: #333;
        }
        
        .service-bullet-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 10px;
          height: 10px;
          background-color: #1a3a4a;
          border-radius: 50%;
        }
        
        @media (max-width: 576px) {
          .service-bullet-list {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          
          .service-bullet-list li {
            font-size: 13px;
            padding-left: 18px;
          }
          
          .service-bullet-list li::before {
            width: 8px;
            height: 8px;
            top: 6px;
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

        {/* FAQs */}
        <section className="section cs_py_30 bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">
              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`}>
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
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
                        <circle cx="12" cy="12" r="3" />
                        <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
                      </svg>

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
                        <path d="M17.94 17.94A10.06 10.06 0 0 1 12 20c-6 0-10-8-10-8a18.42 18.42 0 0 1 5.06-5.94" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                        <circle cx="12" cy="12" r="3" />
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