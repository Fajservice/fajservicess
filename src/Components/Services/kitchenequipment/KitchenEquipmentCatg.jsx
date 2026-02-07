
import { useEffect, useRef, useState } from 'react';
import CallNowButton from '../../Buttons/CallNowButton';
import Testimonial1 from '../../Testimonial/Testimonial1';
import Blog2 from '../../Blog/Blog2';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import loadBackgroudImages from '../../Common/loadBackgroudImages';
import WhatsappIconButton from '../../Buttons/WhatsappIconButton';
import '../../../assets/main.css';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const KitchenEquipmentCatg = ({ subtitle, title, reviewsbg, titleSeo, description, Author, URL }) => {
  const metatitle = String(titleSeo || "Kitchen Equipment Maintenance Service Company in Dubai");
  const metadescription = String(description || "Best kitchen equipment maintenance! FAJ offers installation and servicing for restaurant, hotel, schools in Dubai, including cooking ranges, fryers, ovens.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaURL = String(URL || "https://www.fajservices.ae/services/kitchen-equipment-maintenance/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac%20filter/public");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  // State for fetched data
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

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/coffeemachinesserviceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/CoffeeMAchineReapairTestimonials.json`)
        ]);

        const faqsData = await faqsResponse.json();
        const testimonialsData = await testimonialsResponse.json();

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
          <meta name="description" content="Best kitchen equipment maintenance! FAJ offers installation and servicing for restaurant, hotel, schools in Dubai, including cooking ranges, fryers, ovens."></meta>
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.fajservices.ae/services/kitchen-equipment-maintenance/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="Kitchen Equipment Maintenance Service Company in Dubai" />
          <meta property="og:url" content={metaURL}></meta>
          <meta property="og:description" content={metadescription} />
          <meta property="og:image" content={metaImage} />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Kitchen Equipment Maintenance Service Company in Dubai" />
          <meta name="twitter:description" content="Best kitchen equipment maintenance! FAJ offers installation and servicing for restaurant, hotel, schools in Dubai, including cooking ranges, fryers, ovens." />
          <meta name="twitter:image" content={metaImage} />

        </Helmet>
      </HelmetProvider>

      <div className="cs_service_details">
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Professional Kitchen Equipment Maintenance and Servicing in Dubai</h1>
            <p>FAJ Technical Services L.L.C has been serving the kitchen equipment needs of Dubai since 2010. We provide comprehensive solutions for all types of commercial kitchen equipment.
              Our services encompass installation, maintenance, and repair, catering to a diverse range of clients, including hospitality outlets, hotels, restaurants, cafes, catering services, and residential homes and villas. Additionally, we serve industrial facilities, corporate offices, and shopping centers.
            </p>
          </div>
        </section>
        {/* Technical Services to Keep Your Coffee Flowing */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h1 className="cs_fs_30 text-center mb-4">Kitchen Maintenance Services and Solutions for Business-to-Business (B2B)</h1>
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="service-image-wrapper">
                  <img
                    src={getImageSrc('reliable-home-appliance')}
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
                <p><b>Expert Appliance Repair Near You</b></p>
                <p>FAJ Technical Services L.L.C has been serving the kitchen equipment needs of Dubai since 2010. We provide comprehensive solutions for all types of commercial kitchen equipment. Our services encompass installation, maintenance, and repair, catering to a diverse range of clients, including hospitality outlets, hotels, restaurants, cafes, catering services, and residential homes and villas. Additionally, we serve industrial facilities, corporate offices, and shopping centers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="services_features cs_py_60 bg-light-gray">
          <div className="container">
            <div className="services_grid">
              <div className="service_card">
                <div className="service_icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 5C16.2 5 5 16.2 5 30s11.2 25 25 25 25-11.2 25-25S43.8 5 30 5zm0 45c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" fill="#2C5F8D" />
                    <path d="M35 25h-3v-5c0-1.1-.9-2-2-2s-2 .9-2 2v5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3v10c0 1.1.9 2 2 2s2-.9 2-2V29h3c1.1 0 2-.9 2-2s-.9-2-2-2z" fill="#2C5F8D" />
                    <circle cx="22" cy="22" r="2" fill="#2C5F8D" />
                    <circle cx="38" cy="22" r="2" fill="#2C5F8D" />
                    <path d="M42 35c-1-3-4-5-7-6v3c2 1 3 2 4 4h3z" fill="#2C5F8D" />
                  </svg>
                </div>
                <div className="service_content">
                  <h3>Comprehensive and</h3>
                  <p>Professional Services</p>
                </div>
              </div>

              <div className="service_card">
                <div className="service_icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45 8H15c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h30c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm0 40H15V12h30v36z" fill="#2C5F8D" />
                    <path d="M20 18h20v3H20v-3zm0 7h20v3H20v-3zm0 7h15v3H20v-3z" fill="#2C5F8D" />
                    <path d="M38 38l-3 3-2-2-2 2 4 4 5-5-2-2z" fill="#2C5F8D" />
                  </svg>
                </div>
                <div className="service_content">
                  <h3>Annual Maintenance</h3>
                  <p>Agreement Services</p>
                </div>
              </div>

              <div className="service_card">
                <div className="service_icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 20H40V10c0-2.2-1.8-4-4-4H10c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h10v10c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4V24c0-2.2-1.8-4-4-4zM10 36V10h26v10H24c-2.2 0-4 1.8-4 4v12H10zm40 14H24V24h26v26z" fill="#2C5F8D" />
                    <path d="M30 30h4v4h-4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zm-12 6h4v4h-4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" fill="#2C5F8D" />
                    <circle cx="35" cy="48" r="2" fill="#2C5F8D" />
                  </svg>
                </div>
                <div className="service_content">
                  <h3>Access to Kitchen Equipment</h3>
                  <p>Spare Parts</p>
                </div>
              </div>

              <div className="service_card">
                <div className="service_icon">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 5C16.2 5 5 16.2 5 30s11.2 25 25 25 25-11.2 25-25S43.8 5 30 5zm0 45c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" fill="#2C5F8D" />
                    <path d="M30 14c-6.6 0-12 5.4-12 12 0 4.4 2.4 8.3 6 10.4V42c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5.6c3.6-2.1 6-6 6-10.4 0-6.6-5.4-12-12-12zm4 21.2V40h-8v-4.8c-2.4-1.5-4-4.1-4-7.2 0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.1-1.6 5.7-4 7.2z" fill="#2C5F8D" />
                    <path d="M28 22h4v8h-4v-8z" fill="#2C5F8D" />
                    <circle cx="30" cy="18" r="2" fill="#2C5F8D" />
                  </svg>
                </div>
                <div className="service_content">
                  <h3>Customer Support</h3>
                  <p>7-Day Call Outs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="maintenance_importance cs_py_60">
          <div className="container">
            <div className="importance_header">
              <h2>Why is commercial kitchen equipment maintenance important?</h2>
              <p>All kitchen equipment requires care, but some need specific maintenance for safe food handling and a good working environment. Below are key items and their maintenance needs:</p>
            </div>

            <div className="importance_content">
              <div className="importance_image">
                <img src="/images/commercial-kitchen.jpg" alt="Commercial Kitchen Equipment" />
                <div className="image_overlay">
                  <h3>COMMERCIAL</h3>
                  <h3>KITCHEN EQUIPMENT</h3>
                </div>
              </div>

              <div className="importance_list">
                <div className="importance_item">
                  <h4>Cooking & Baking Equipment:</h4>
                  <p>Cooking range, cookers, ovens, stove tops and fryer are basic kitchen equipment that must be cleaned regularly to avoid buildup and ensure even cooking. Fryers also need proper oil management to maintain food quality.</p>
                </div>

                <div className="importance_item">
                  <h4>Refrigeration Equipment:</h4>
                  <p>Refrigerators and freezers should be cleaned regularly to remove buildup and require temperature monitoring. Checking and adjusting the temperature is vital for food storage and freshness.</p>
                </div>

                <div className="importance_item">
                  <h4>Food Preparation Equipment:</h4>
                  <p>Mixers, slicers, and blenders have specific functionality and deep, making thorough cleaning essential to prevent contamination, especially with raw meats. Regular lubrication of moving parts is also necessary to avoid straining the motor.</p>
                </div>

                <div className="importance_item">
                  <h4>Dishwashing Equipment:</h4>
                  <p>Inspect dishwashers and sinks for leaks and drainage to ensure effective washing. Regular descaling is essential to remove food debris buildup that can affect safety and performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* why choose */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Why Choose FAJ Appliance Repair Service? – Trusted & Reliable Home Appliance Repairs</h2>
            <p>When you require home appliance repair, it's essential to choose a reliable service center provider that offers quality repairs, quick service, and appliance technicians. At <b>FAJ Technical Services L.L.C.</b> we ensure that your appliances will be repaired promptly, efficiently, and at an affordable price, all while maintaining the highest standards of service.</p>
            <h4>We are Home Appliance Repair Service Centers</h4>
            <p>We repair all brands and models of Home appliances including washing machines, fridge freezers, dishwashers, tumble dryers, washer dryers, cookers, ovens, hobs. All our repairs are performed by trained technicians.
              We are experts in appliance repair, and our technicians have successfully handled multiple repairs inculding washing machines, fridge freezers, dishwashers, tumble dryers, washer dryers, cookers, ovens, hobs. Whether it is your Washing Machine, Fridge, freezer, Cooker, Dishwasher or Tumble Dryer. We will quickly fix any faults that develop, and all our repair are guaranteed. You can book online at any time.
            </p>
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="shop-ac-image-wrapper">
                  <img
                    src={`${CDN}/ac-image/public`}
                    alt="Commercial Air Conditioning Maintenance Services in Dubai - FAJ Technical Services"
                    title="Commercial AC Maintenance Service in Dubai"
                    width="500"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="shop-ac-image"
                  />
                </div>
              </div>

              <div className="col-12 col-lg-7">
                <div className="shop-ac-bullet-list">
                  <div className="shop-ac-bullet-col">
                    <ul>
                      <li><b>Expert Technicians:</b> Our technicians are trained and experienced in resolving appliance issues across all major brands.</li>
                      <li><b>Comprehensive Services:</b> We provide a wide range of services for home appliances, from minor fixes to major repair.</li>
                      <li><b>Warranty Repair:</b> Using genuine parts in coffee machines, equipment, and vending machines.</li>
                      <li><b>Timely Booking:</b> Our online booking system is available seven days a week, allowing you to schedule repairs at your convenience.</li>
                      <li><b>Quick Support:</b> We recognise the importance of functional appliances in our daily lives and work hard to deliver prompt and efficient repair services.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <CallNowButton />
              </div>
            </div>
          </div>
        </section>

        {/* common problem */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Appliance Repair Issues We Fix</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center mt-3">
              <p>At <b>FAJ Technical Services L.L.C</b> we provide expert home appliance repair services for a wide range of issues. If you’re experiencing any of the following problems, our expert technicians are ready to assist you.</p>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Washing Machine Repair </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Drum not rotating
                      Door locked defect
                      No power or display error
                      Unusual noise during operation
                      Drain blockage & water leakage
                      No spinning or excessive vibration
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Tumble Dryer Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0"> Drum not rotating
                      Not drying clothes properly
                      Loud noise & excessive vibration
                      Display error or system malfunction
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Refrigerator Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">No power
                      Not cooling properly
                      Excessive ice formation
                      Loud compressor noise
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dishwasher Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">No water intake
                      Soap dispenser not working
                      No steam during wash cycles
                      White patches left on utensils
                      Bad odor inside the dishwasher
                    </p>
                  </div>
                </div>
              </div>




              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Washer Dryer Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Drum rotation failure
                      Display error messages
                      Clothes not drying properly
                      Unusual noise & excessive vibration
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Freezer Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      No power
                      Not cooling efficiently
                      Ice buildup and frost issues
                      Compressor is making loud noises
                    </p>
                  </div>
                </div>
              </div>


            </div>

            <div id="get-quote" className="mb-0 mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>

          </div>
        </section>

        {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg="img/testimonialbg.jpg"
            testimonialData={testimonial_data}
            sectionId="home-testimonials"
          />
        )}

        <Blog2 />

        {/* Faqs */}
        <section className="section cs_py_30  bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
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

export default KitchenEquipmentCatg