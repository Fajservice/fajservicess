
import { useEffect, useRef, useState } from 'react';
import Testimonial1 from '../../Testimonial/Testimonial1';
import CoffeeMachineButton from '../../Buttons/CoffeeMachineButton';
import CommCoffeeMachineButton from '../../Buttons/CommCoffeeMachineButton';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import WhatsappIconButton from '../../Buttons/WhatsappIconButton';
import loadBackgroudImages from '../../Common/loadBackgroudImages';
import BlogCoffeeMachine from './BlogCoffeeMachine';

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const CoffeeMachineCatg = ({ subtitle, title, reviewsbg, titleSeo, description, Author, URL }) => {
  const metatitle = String(titleSeo || "Coffee Machine Repair Service in Dubai - FAJ Technical Services L.L.C");
  const metadescription = String(description || "Coffee Machine Repair and Maintenance Services in Dubai");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaURL = String(URL || "https://www.fajservices.ae/services/coffee-machine/");
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
          <meta name="description" content="Reliable & quality in ac maintenance Dubai, We are experts in HVAC, split, central cooling, VRV, VRF air con maintenance & ac fix Call 043300002"></meta>
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="Coffee Machine Repair Service in Dubai - FAJ Technical Services L.L.C" />
          <meta property="og:description" content={metadescription} />
          <meta property="og:image" content={metaImage} />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Coffee Machine Repair Service in Dubai - FAJ Technical Services L.L.C" />
          <meta name="twitter:description" content="Coffee Machine Repair and Maintenance Services in Dubai" />
          <meta name="twitter:image" content={metaImage} />

        </Helmet>
      </HelmetProvider>


      <div className="cs_service_details">
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Exceptional Coffee Machine Maintenance Services Since 2010</h1>
            <p>Brewing Quality and Expertise, one cup at a time.
              FAJ Technical Services L.L.C. provides high-quality coffee and espresso machines maintenance, installation, descaling, and cleaning services and annual maintenance contract (agreement) services in Dubai.
            </p>
            <p>Keep your coffee flowing with our professional repair and maintenance services. We specialise in servicing all types of coffee equipment and tools, including vending machines, espresso machines, grinders, brewers, steamers, and café accessories, with genuine coffee machine spare parts in Dubai. Whether you run a busy restaurant and café, manage events, or brew at home with coffee machine, office coffee machine, our expert technicians provide fast, reliable, and affordable service you can trust.
            </p>

            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <CoffeeMachineButton />
                <CommCoffeeMachineButton />
              </div>
            </div>
          </div>
        </section>
        {/* Technical Services to Keep Your Coffee Flowing */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Technical Services to Keep Your Coffee Flowing</h2>
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="service-image-wrapper">
                  <img
                    src={`${CDN}/coffee-flowing/public`}
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
                <p>Ensuring smooth coffee operations through quick and efficient service and repair solutions.</p>
                <p><b>Quick Response Time:</b> We provide phone or in-person assistance to minimise downtime.</p>
                <p><b>Flexible Scheduling:</b> Repair are completed at the earliest comfort based on client confirmation.</p>
                <p><b>No-Cost:</b> Eligible breakdowns during the warranty period are cost-free for the same part or service.</p>
                <p><b>Trained Technicians:</b> Our technicians are experts in troubleshooting issues with all type & brands of coffee machines.</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                 <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        {/* Annual Maintenance Contract (AMC) */}
        <section className="section cs_py_30 bg-light-white">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Annual Maintenance Contract (AMC)</h2>
            <div className="row align-items-center">


              <div className="col-12 col-lg-7">
                <p>Ensuring smooth coffee operations through quick and efficient service and repair solutions.</p>
                <p><b>Quick Response Time:</b> We provide phone or in-person assistance to minimise downtime.</p>
                <p><b>Flexible Scheduling:</b> Repair are completed at the earliest comfort based on client confirmation.</p>
                <p><b>No-Cost:</b> Eligible breakdowns during the warranty period are cost-free for the same part or service.</p>
                <p><b>Trained Technicians:</b> Our technicians are experts in troubleshooting issues with all type & brands of coffee machines.</p>
              </div>
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="service-image-wrapper">
                  <img
                    src={`${CDN}/coffeemachinewhy/public`}
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
            </div>
            <div className="mt-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                 <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        {/* Shop for Coffee Machines, Equipment, and Accessories */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Shop for Coffee Machines, Equipment, and Accessories</h2>

            <div className="row align-items-center">
              <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <div className="service-image-wrapper">
                  <img
                    src={`${CDN}/shoppart/public`}
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
                <p>If you need to buy new coffee machine, espresso machine, vending machine, coffee equipment, or replacement parts and accessories, we deliver quickly to any location.</p>

                <ul className="service-bullet-list">
                  <li><a href="https://www.fajtradingllc.com/collections/professional-espresso-machines">Professional Espresso Machines</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/automatic-coffee-machine">Automatic Coffee Machine</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/office-coffee-machines">Office Coffee Machines</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/home-coffee-machines">Home Coffee Machines</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/capsule-coffee-machines">Capsule Coffee Machines</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/coffee-grinders">Coffee Grinders</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/coffee-brewers">Coffee Brewers</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/blender">Blender</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/water-boiler">Water Boiler</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/milk-frother">Milk Frother</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/ice-crusher">Ice Crusher</a></li>
                  <li><a href="https://www.fajtradingllc.com/collections/beverage-cooler">Beverage Cooler</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
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
          color: #000000;
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
        {/* why choose */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Why Choose Our Coffee Machine Maintenance Services</h2>

            <div className="row align-items-center">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="shop-ac-image-wrapper">
                  <img
                    src={`${CDN}/coffeemachinechoose/public`}
                    alt="Commercial Air Conditioning Maintenance Services in Dubai - FAJ Technical Services"
                    title="Commercial AC Maintenance Service in Dubai"
                    width="500"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="shop-ac-image"
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
                <div className="shop-ac-bullet-list">
                  <div className="shop-ac-bullet-col">
                    <ul>
                      <li><b>Expert Technicians:</b> Trained on leading different brands and types, including vending machines, espresso machines, coffee machines, and coffee equipment home, office, restaurant and cafe . We provide complete repair and maintenance services for compatible machines.</li>
                      <li><b>Quick Turnaround:</b> We offer same-day inspections, and most repairs are completed within 48 to 72 hours.</li>
                      <li><b>Genuine Spare Parts:</b> Using genuine parts in coffee machines, equipment, and vending machines.</li>
                      <li><b>UAE Coverage:</b> Service is available in Dubai, Abu Dhabi, Sharjah, and throughout all the Emirates.</li>
                      <li><b>Warranty Support:</b> For machines that are covered by a service warranty.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="d-flex justify-content-center align-items-center gap-3">
                 <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        {/* common problem */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems of Coffee Machines   </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Grinder Malfunctions</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Most Likely Causes: Dull blades, motor issues, or a jammed grinder.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Slow Brewing</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0"> Hard water can lead to a buildup of minerals and clogged filters.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Portafilter Problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The gasket is worn out and not sealing properly, and the filter basket is clogged.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Machine Not Turning On </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Issues such as a defective power cord, a faulty switch, or an internal electrical failure may be present.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Water Leaks</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Seals are broken, water reservoirs are cracked, and pipes are blocked.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Poor Coffee Quality</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Possible issues include a clogged filter, an incorrect grind size, or an improper brewing temperature.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Noisy Operation</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The pump is worn out, there are issues with the motor, and some components are loose.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Milk Frothier Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Blocks, a malfunctioning frother motor, and temperature-related issues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Inconsistent Temperature</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Possible Causes: A malfunctioning thermostat, burnt-out heating elements, or defective temperature-regulating components.
                    </p>
                  </div>
                </div>
              </div>

              

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Weak or Watery Coffee</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Possible causes include an incorrect coffee-to-water ratio, insufficient coffee quantity, and brewing errors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Machine Shuts Off Mid-Brew</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Possible Causes: Overheating, electrical malfunctions, and faulty sensors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Display Malfunctions</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Issues identified include a defective control board, wiring problems, and software bugs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Water Not Heating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The heating element is broken, there are issues with the thermostat, and there are electrical faults.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Excessive Steam or No Steam</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Issues with the steam wand include malfunctioning, pressure problems, and blocked steam nozzles.
                    </p>
                  </div>
                </div>
              </div>
              
              
              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Grounds in Cup</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The filter is damaged and misaligned, and there are too many grounds in the basket.
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

        <BlogCoffeeMachine />

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

export default CoffeeMachineCatg