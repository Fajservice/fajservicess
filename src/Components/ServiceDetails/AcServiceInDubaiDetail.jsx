import { useEffect, useRef, useState, useCallback, memo, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HeaderForm from "../Headeform/HeaderForm";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import BookingFormModal from '../BookingFormModal';
const CallNowButton = lazy(() => import('../Buttons/CallNowButton'));
const ACWhyChooseUs = lazy(() => import("../WhyChooseUS/ACWhyChooseUs"));
const MaintenanceContract = lazy(() => import("../MaintenanceContract/MaintenanceContract"));
const Practicaltip = lazy(() => import("../Common/Practicaltip"));
const AcProperties = lazy(() => import("../Common/AcProperties"));
const FAJACPrice = lazy(() => import("../Miscellaneous/FAJACPrice"));
const GetQuoteButton = lazy(() => import("../Buttons/GetQuoteButton"));
const Blog2 = lazy(() => import("../Blog/Blog2"));
const Testimonial1 = lazy(() => import("../Testimonial/Testimonial1"));
const BeforeAfter = lazy(() => import("../BeforeAfter/BeforeAfter"));
const Serviceappointemnt = lazy(() => import('../Contact/Serviceappointemnt'));
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);
const EyeSlashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
  </svg>
);

const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { rootMargin: "200px", ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

const LazySection = memo(({ children, fallback = null }) => {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref}>
      {isInView ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : fallback}
    </div>
  );
});

const AcServiceInDubai = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // SEO Meta
  const metatitle = String(titleSeo || "Top Air Conditioning Maintenance Company in Dubai - Sharjah");
  const metadescription = String(description || "FAJ offers top-quality HVAC, chilled water FCU, central & split air conditioning repair & maintenance, servicing of offices, villas, at best prices in Dubai.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/");
  const metaImage = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/What-is-covered-in-an-AC-Maintenance-Contract/public";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [faqData, setFaqData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [openItemIndex, setOpenItemIndex] = useState(0);

  const [faqRef, faqInView] = useInView();
  const [testimonialRef, testimonialInView] = useInView();

  const openModal = useCallback((e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const handleItemClick = useCallback((index) => {
    setOpenItemIndex(prev => prev === index ? -1 : index);
  }, []);

  useEffect(() => {
    const loadBgImages = async () => {
      const { default: loadBackgroudImages } = await import("../Common/loadBackgroudImages");
      loadBackgroudImages();
    };
    loadBgImages();
  }, []);

  useEffect(() => {
    if (!faqInView || faqData.length > 0) return;

    fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcServiceInDubaiFaqs.json`)
      .then(res => res.json())
      .then(data => setFaqData(data))
      .catch(err => console.error('Error fetching FAQ data:', err));
  }, [faqInView, faqData.length]);


  useEffect(() => {
    if (!testimonialInView || testimonialData.length > 0) return;

    fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/AcServiceTestimonials.json`)
      .then(res => res.json())
      .then(data => setTestimonialData(data))
      .catch(err => console.error('Error fetching testimonial data:', err));
  }, [testimonialInView, testimonialData.length]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{metatitle}</title>
          <meta name="description" content={metadescription} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={metatitle} />
          <meta property="og:description" content={metadescription} />
          <meta property="og:url" content={metaURL} />
          <meta property="og:image" content={metaImage} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:image" content={metaImage} />
          

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
               
                {
                  "@type": "Question",
                  "name": "Why is AC repair so expensive?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AC repairs can be expensive due to the high cost of parts (like compressors or coils) and specialized labor. The complexity of the repairs and Dubai's climate, which demands frequent AC use, also adds to the cost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is my AC giving cool air but not cooling?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If your AC is blowing cool air but not cooling the room, it could be due to issues like low refrigerant or clogged filters. A technician can fix this with a proper inspection and maintenance."
                  }
                },
                 {
                  "@type": "Question",
                  "name": "How much is AC service in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AC service in Dubai typically costs between AED 230 to AED 765 depending on the type of service. Prices vary based on the unit's size and condition, as well as the service provider."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is my AC not cooling in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your AC may not be cooling due to dirty filters, low refrigerant levels, or a malfunctioning compressor. A professional technician can diagnose and resolve the issue quickly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should AC be cleaned in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AC units in Dubai should be cleaned every 3-6 months due to high dust levels in the environment. More frequent cleaning may be necessary for homes in dusty areas or with heavy AC use."
                  }
                },
                
                {
                  "@type": "Question",
                  "name": "What maintenance is needed for AC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AC maintenance includes tasks like cleaning or replacing air filters, checking refrigerant levels, and cleaning coils and drain lines. Regular upkeep ensures your system runs efficiently and prolongs its lifespan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which company is best for central AC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FAJ Technical Services L.L.C. is one of the best companies for central AC services in Dubai. We offer reliable, professional services to ensure your system runs efficiently."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I maintain my AC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Maintain your AC by regularly cleaning or replacing filters, checking for airflow issues, and scheduling professional servicing every 6 months. This helps to improve performance and prevent costly repairs."
                  }
                },
                
                {
                  "@type": "Question",
                  "name": "Is AC duct cleaning important in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AC duct cleaning is important in Dubai as it improves indoor air quality, increases system efficiency, and prevents the build-up of dust and allergens. Regular cleaning helps your AC perform better."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is AC duct cleaning worth it?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AC duct cleaning is worth it because it enhances air quality, improves the performance of your system, and helps extend the life of your AC unit. It's a cost-effective investment for long-term benefits."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is routine AC maintenance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Routine AC maintenance typically involves cleaning filters, inspecting the refrigerant, cleaning the coils, and checking the system's overall performance. Regular maintenance keeps your AC running smoothly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I fix my air conditioner that is not cooling?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To fix an AC not cooling, check the thermostat, clean or replace the air filter, and ensure the outdoor unit is clear. If issues persist, inspect refrigerant levels, ice buildup, or compressor issues—contact a professional if needed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should an air conditioner be serviced?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An air conditioner should be serviced at least once a year to maintain optimal performance. In hot climates like Dubai, servicing every 6 months is recommended to ensure efficiency and extend the unit's lifespan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should AC ducts be cleaned?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AC ducts should be cleaned every 2-3 years, or more frequently if you notice dust accumulation, poor airflow, or a musty smell. Regular cleaning ensures better air quality and system efficiency."
                  }
                }
              ]
            })}
          </script>

        </Helmet>
      </HelmetProvider>

      <HeaderForm />

      <div className="cs_service_details">
        {/* Hero Section */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Air Conditioning Maintenance, Repair and Servicing in Dubai</h1>
            <p>Improve the comfort of your home and business premises with air conditioning cooling. Maintain a perfect temperature year-round with our expert AC technicians.<br /><a href="https://maps.app.goo.gl/KDPpprYugX3bXJ759">FAJ Technical Services L.L.C</a> has been providing AC services (Since) 2010. Our technicians are experienced in<a href="https://www.facebook.com/FAJTechnicalServicesLLC">AC repair and maintenance</a>, ensuring your air conditioning system performs at its best for an extended time, as well as AC installation of home, office, and commercial air conditioning units in Dubai and Sharjah.</p>

            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
                <BookingFormModal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>
        </section>

        {/* Experts Section */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1">OUR AC Repair & Service</h2>
                <p className="mb-1">When looking for<a href="https://www.fajservices.ae/services/air-conditioning-repair/">AC repair &amp; service in Dubai</a>, choose a qualified and reputable company that meets your residential or commercial needs.</p>
                <p className="mb-1">FAJ Skilled AC technicians can quickly diagnose issues, providing your HVAC system runs efficiently. This improves comfort during hot months and reduces Dewa bill costs, providing peace of mind with your AC cooling solutions.</p>
                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top">Top Common Signs That You Need AC Maintenance</h2>
                <p className="mb-2">If you notice any of these AC signs, please contact us via phone or WhatsApp chat. We are here to assist your AC cooling system in getting optimal efficiency.</p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>AC Not Cooling Signs</li>
                      <li>AC Motor not working</li>
                      <li>AC Thermostat not working</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Water Leaking from your AC</li>
                      <li>AC compressor is not cooling</li>
                      <li><a href="https://www.dewa.gov.ae/en/consumer/sustainability/sustainability-and-conservation/cooling" >High AC electricity (DEWA) bills</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
               <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/mzBxfKZ_QxQ?si=eTib5kk8BZ0KVGvO"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="appointment-col border-small-top pt-3">
              <h2 className="cs_fs_24 mb-1 pt-3">Our Express and Emergency AC Repair Service in Dubai</h2>
              <p>If you are facing any problem in your air conditioning service at home or in your business, especially during the summer time, our same day and express AC repair service is here to help. Get the fastest AC repair service in Dubai today. Contact us for a quote or to schedule your emergency AC repair appointment.</p>
              <div id="get-quote" className="mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3">
                  <WhatsappIconButton />
                  <Suspense fallback={<ButtonPlaceholder />}>
                    <CallNowButton />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lazy loaded sections */}
        <LazySection>
          <FAJACPrice />
        </LazySection>

        {/* Why is AC Maintenance Important */}
        <LazySection>
          <section className="section cs_py_30 bg-light-gray">
            <div className="container">
              <h2 className="cs_fs_30">Why is AC Maintenance Important in Dubai, UAE?</h2>
              <p>Regular AC maintenance and services in Dubai are necessary for optimal performance. FAJ offers complete AC cleaning services to keep your AC system running efficiently. With our proactive process, you can feel confident that AC is working at its best. If you need AC maintenance and air conditioning service near you, contact us.</p>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    className="blue-border"
                    src={getImageSrc('What-is-covered-in-an-AC-Maintenance-Contract')}
                    alt="Ac Maintenance in dubai"
                    loading="lazy"
                  />
                </div>
                <div className="col-md-6">
                  <ul className="mb-0">
                    <li><strong>Dubai Hot Weather:</strong> Experiences hot Dubai temperatures over 40&deg;C (104&deg;F) in summer. Regular AC maintenance keeps it efficient during these conditions.</li>
                    <li><strong>Energy Efficiency:</strong> A well- AC cleaning service operates more efficiently, using less energy and lowering both AC electricity bills.</li>
                    <li><strong>Longevity of AC Unit:</strong> Regular AC maintenance can extend your air conditioning unit's lifespan, reducing the need for costly repair work and Genuine AC spare parts replacements, ultimately saving you money.</li>
                    <li><strong>Improved Air Quality:</strong> Regular AC unit &amp; AC duct cleaning service &amp; maintenance keep dust and allergens from building up, ensuring cleaner air.</li>
                    <li><strong>Improved Comfort:</strong> Regular<a href="https://www.youtube.com/watch?v=pkO_jobGdBo"><strong>AC servicing</strong></a> in Dubai ensures comfort, efficiency, and even cooling daily.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Common AC Problems */}
        <LazySection>
          <CommonACProblems />
        </LazySection>

         <section className="section cs_py_30 bg-light-blue-section">
  <div className="container">
    <h2 className="cs_fs_28">How to use FAJ AC Service and AC Repair in Dubai?</h2>
    <p className="cs-fs_14">Are you searching for reliable air conditioning services in Dubai? FAJ Technical Services L.L.C provides excellent AC repair and AC cleaning service right at your doorstep. Our team of experts is committed to providing your comfort with excellent service.</p>
    
    <div className="service-cards-grid">
      <div className="service-card-item">
        <h3>AC Repair in Dubai for Improved Performance:</h3>
        <p className="cs_fs_14">Is your AC not cooling effectively? Our AC technicians can diagnose and fix AC errors.</p>
      </div>
      
      <div className="service-card-item">
        <h3>Regular AC Cleaning for Maximum Efficiency:</h3>
        <p className="cs_fs_14">For optimal performance, keep your AC cleaning. We offer AC duct cleaning and filters for fresh, healthy air.</p>
      </div>
      
      <div className="service-card-item">
        <h3>Essential AC Maintenance Service Dubai:</h3>
        <p className="cs_fs_14">Regular AC maintenance is necessary. Our services help prepare your AC for the summer heat.</p>
      </div>
      
      <div className="service-card-item">
        <h3>Assistance with New AC Installation:</h3>
        <p className="cs_fs_14">Upgrading to a new AC unit? Let our AC experts handle the selection, installation, and testing!</p>
      </div>
      
      <div className="service-card-item">
        <h3>Emergency AC Repair in Dubai:</h3>
        <p className="cs_fs_14">Experiencing unexpected AC breakdowns? Our 7-day emergency AC repairs is available to provide quick service.</p>
      </div>
      
      <div className="service-card-item">
        <h3>AC Service Dubai Available Near Me Before Summer:</h3>
        <p className="cs_fs_14">Get ready for summer! Schedule your AC tune up to ensure comfort during the heat.</p>
      </div>
    </div>
    
    <div className="service-footer-text">
      <h3 className="cs_fs_24">Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!</h3>
      <p className="cs_fs_14">For reliable AC service and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time. Book now by calling, emailing, chatting on WhatsApp, or visiting our website to experience the difference!</p>
    </div>
  </div>
  
  <style>{`
    .bg-light-blue-section {
      background-color: #E9E9E9;
    }
    
    .service-cards-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-top: 24px;
    }
    
    .service-card-item {
      padding: 16px 20px;
      border-radius: 6px;
    }
    
    .service-card-item h3 {
      font-size: 22px;
      font-weight: 600;
      color: #000;
      margin: 0 0 8px 0;
    }
    
    .service-card-item p {
      margin: 0;
      line-height: 1.5;
    }
    
    .service-footer-text {
      margin-top: 24px;
    }
    
    .service-footer-text h3 {
      margin: 0 0 8px 0;
    }
    
    .service-footer-text p {
      margin: 0;
      line-height: 1.5;
    }
    
    @media (max-width: 768px) {
      .service-cards-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      
      .service-card-item {
        padding: 14px 16px;
      }
      
    }
  `}</style>
</section>

        {/* Benefits Of Regular AC Service and Maintenance Dubai */}
        <section className="section cs_py_30 ac_benifit_blue">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <h2 className="cs_fs_30 text-light">Benefits Of Regular AC Service and Maintenance in Dubai
                        </h2>

                        <div className="row mt-4 gx-4 gy-4">
                            <div className="col-md-4 mb-2">
                                <div className="d-flex flex-column align-items-center px-2">
                                    <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                        <img src={`${CDN}/icon/cooling1/public`} alt="Cooling Efficiency" className="img-fluid rounded-circle border border-4 border-info" />
                                    </div>
                                    <h3 className="text-uppercase mb-2 fs-6 text-white">COOLING EFFICIENCY</h3>
                                    <p className="small">We perform a thorough evaluation of AC cooling efficiency with the use of a temperature gun.</p>
                                </div>
                            </div>

                            <div className="col-md-4 mb-2">
                                <div className="d-flex flex-column align-items-center px-2">
                                    <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                        <img src={`${CDN}/icon/disinfection/public`} alt="Disinfect Components" className="img-fluid rounded-circle border border-4 border-warning" />
                                    </div>
                                    <h3 className="text-uppercase mb-2 fs-6 text-white">IMPROVED AIR QUALITY</h3>
                                    <p className="small">Cleaning AC filters and coils removes dust, resulting in healthier and cleaner air for your family or employees.</p>
                                </div>
                            </div>

                            <div className="col-md-4 mb-2">
                                <div className="d-flex flex-column align-items-center px-2">
                                    <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                        <img src={`${CDN}/icon/fan/public`} alt="Fan Assessment" className="img-fluid rounded-circle border border-4 border-success" />
                                    </div>
                                    <h3 className="text-uppercase mb-2 fs-6 text-white">COMPLETE INSPECTION</h3>
                                    <p className="small">An AC tune-up involves checking and cleaning the filters, as well as inspecting electrical connections, to ensure optimal performance.</p>
                                </div>
                            </div>

                            <div className="col-md-4 mb-2">
                                <div className="d-flex flex-column align-items-center px-2">
                                    <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                        <img src={`${CDN}/icon/thermo/public`} alt="Thermostat Check" className="img-fluid rounded-circle border border-4 border-primary" />
                                    </div>
                                    <h3 className="text-uppercase mb-2 fs-6 text-white">THERMOSTAT CHECK</h3>
                                    <p className="small">We use a laser temperature gauge to confirm that the air conditioning thermostats are functioning properly.</p>
                                </div>
                            </div>

                            <div className="col-md-4 mb-2">
                                <div className="d-flex flex-column align-items-center px-2">
                                    <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                        <img src={`${CDN}/icon/airflow/public`} alt="Airflow Balance" className="img-fluid rounded-circle border border-4 border-danger" />
                                    </div>
                                    <h3 className="text-uppercase mb-2 fs-6 text-white">AIRFLOW BALANCE</h3>
                                    <p className="small">We ensure optimal airflow from your air conditioning system in each room as needed.</p>
                                </div>
                            </div>

                            <div className="col-md-4 mb-2">
                                <div className="d-flex flex-column align-items-center px-2">
                                    <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                        <img src={`${CDN}/icon/customer/public`} alt="Customer Feedback" className="img-fluid rounded-circle border border-4 border-secondary" />
                                    </div>
                                    <h3 className="text-uppercase mb-2 fs-6 text-white">CUSTOMER FEEDBACK</h3>
                                    <p className="small">Our team provides essential feedback on your air conditioning health and any necessary repair.</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mb-4">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <LazySection>
          <ACWhyChooseUs />
        </LazySection>

        <LazySection>
          <BeforeAfter
            title="Recent Completed Service"
            subTitle="Before & After Service"
            bgImg={`${CDN}/background-image-2/public`}
            beforeImg={`${CDN}/after_img_1/public`}
            afterTitle="After"
            afterImg={`${CDN}/before_img_1/public`}
            beforeTitle="Before"
          />
        </LazySection>

        {/* AC Brands Section */}
        <LazySection>
          <ACBrandsSection />
        </LazySection>

        <LazySection>
          <Practicaltip />
        </LazySection>

        <LazySection>
          <AcProperties />
        </LazySection>

        <LazySection>
          <MaintenanceContract />
        </LazySection>

        {/* Testimonials */}
        <div ref={testimonialRef}>
          {testimonialInView && testimonialData.length > 0 && (
            <Suspense fallback={<SectionPlaceholder height="400px" />}>
              <Testimonial1
                subtitle="What Our Clients Say"
                title="Customer <span>Reviews</span>"
                bgImg={`${CDN}/testimonialbg/public`}
                testimonialData={testimonialData}
                sectionId="ac-service-testimonials"
              />
            </Suspense>
          )}
        </div>

        <LazySection>
          <Blog2 />
        </LazySection>

        {/* FAQ Section */}
        <div ref={faqRef}>
          {faqInView && (
            <Suspense fallback={<SectionPlaceholder height="300px" />}>
              <FAQSection
                data={faqData}
                openItemIndex={openItemIndex}
                onItemClick={handleItemClick}
              />
            </Suspense>
          )}
        </div>

        <LazySection>
          <section className="section cs_py_30">
            <Serviceappointemnt
              subtitle2="Contact us"
              title2="Book An Appointment"
            />
          </section>
        </LazySection>
      </div>
    </>
  );
};

const CommonACProblems = memo(() => {
  const problems = [
    { title: "High Humidity Levels", desc: "An air conditioning unit that doesn't reduce indoor humidity may have cooling capacity issues or operate improperly." },
    { title: "Leaking Water", desc: "Water pooling around the AC or dripping from vents may signal a blocked drain, frozen coils, or other serious issues." },
    { title: "Increased Energy Bills", desc: "High DEWA bills without increased usage may signal AC inefficiencies from dirty filters, AC duct leaks, or other issues." },
    { title: "Weak Airflow", desc: "Reduced airflow from your AC duct may signal problems like a blocked filter or a faulty AC motor." },
    { title: "Warm Air", desc: "If your AC blows warm or room temperature air instead of cold, it could indicate ac compressor, gas, or duct work issues requiring fix." },
    { title: "Strange Noises", desc: "Unusual sounds such as grinding, squealing, or banging from your AC motor can indicate problems that require attention." },
    { title: "Foul Odors", desc: "Unpleasant odors coming from the vents might indicate the presence of mold or mildew, which requires immediate attention." },
    { title: "Frequent Cycling", desc: "It may indicate issues with maintaining desired AC temperatures, such as dirty filters, low refrigerant, or a faulty thermostat." }
  ];

  return (
    <section className="section cs_py_30">
      <div className="container">
        <h2 className="text-center">Most Common AC Problems That May Require Maintenance</h2>
        <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
          {problems.map((problem, i) => (
            <div key={i} className="col-12 col-md-4 col-lg-3">
              <div className="box-content-container rounded border shadow">
                <div className="text-center">
                  <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">{problem.title}</h3>
                </div>
                <div className="inner-apcs-feat-desc">
                  <p className="p-2 mb-0" dangerouslySetInnerHTML={{ __html: problem.desc }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="get-quote" className="mb-0 mt-3">
          <div className="container d-flex justify-content-center align-items-center gap-3">
            <WhatsappIconButton />
          </div>
        </div>
      </div>
    </section>
  );
});

const ACBrandsSection = memo(() => (
  <section className="section cs_py_30 bg-light-gray">
    <div className="container">
      <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 195 to 320 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
      <p className="pt-3 border-small-top">
        <strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
        <b>We provide 2-month service warranty</b><br />
        and <small>3-month parts warranty</small> as standard.
      </p>
      <h3 className="cs_fs_24">We specialise in air conditioning services for the following brands</h3>

      <ul className="mb-3">
        <li><a href="https://www.fajservices.ae/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/"><strong>Daikin Air Conditioning Services</strong></a><strong>:</strong> Daikin, a Japanese manufacturer, claims to be "the world's number one air conditioning company." Founded in 1924, it has developed a strong international presence through its focus on quality, innovation, and effective communication. We work with Daikin air conditioning products because the company continuously invests in research and development.</li>
        <li><a href="https://www.fajservices.ae/gree-ac-repair-in-dubai/"><strong>Gree AC Repair and Service</strong></a><strong>:</strong> Gree Electric Appliances, Inc., founded in 1991 in Zhuhai, is a key player in the global air conditioning market. Starting with air conditioners, Gree has expanded its product line to include various home appliances and became China's largest air conditioner manufacturer by 2000.</li>
        <li><a href="https://www.fajservices.ae/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/"><strong>O General AC Repair and Maintenance</strong></a><strong>:</strong> O General AC, a brand of Fujitsu General, is renowned for its Japanese engineering and high-quality air conditioning solutions.</li>
        <li><a href="https://www.fajservices.ae/mitsubishi-ac-repair-in-dubai/"><strong>Mitsubishi AC Service and Repair</strong></a><strong>:</strong> Founded in 1954, Mitsubishi Air Conditioning has been producing air conditioning systems for nearly 75 years and is renowned for its reliability and energy efficiency.</li>
        <li><a href="https://www.fajservices.ae/samsung-ac-repair-in-dubai/"><strong>Samsung AC Maintenance Service</strong></a><strong>:</strong> Samsung AC is a globally recognized name, known for pushing boundaries. Since 1969, they have continued to shape the future with innovative air conditioning technology.</li>
        <li><a href="https://www.fajservices.ae/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/"><strong>York AC Servicing and Repair</strong></a><strong>:</strong> YORK&reg; has been an industry leader since our founding in 1874.</li>
        <li><a href="https://www.fajservices.ae/lg-ac-repair-in-dubai/"><strong>LG AC Maintenance and Service</strong></a><strong>:</strong> LG history in air conditioning began in 1968 with the launch of its first unit.</li>
        <li><a href="https://www.fajservices.ae/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/"><strong>Trane HVAC Repair and Maintenance:</strong></a> Trane developed its first air conditioning unit in 1931.</li>
        <li><strong>Carrier AC Repair and Services in Dubai:</strong> Since 1902, Carrier HVAC has cultivated a history of proven innovation in the heating, air-conditioning and refrigeration industries.</li>
        <li><a href="https://www.fajservices.ae/rheem-ac-maintenance-in-dubai/"><strong>Rheem AC Repair &amp; Service Near Me:</strong></a> Rheem AC was founded in 1925 in California, initially making steel drums. It quickly transitioned to manufacturing water heaters and, in the 1940s and 1950s, expanded into furnaces, split, central air conditioning systems to meet the growing demand for home comfort. Today, Rheem is a leading global HVAC provider known for its innovation and diverse heating and cooling solutions.</li>
      </ul>

      <BrandLinks />

      <div id="get-quote" className="mt-3">
        <div className="container d-flex justify-content-center align-items-center gap-3">
          <Suspense fallback={<ButtonPlaceholder />}>
            <GetQuoteButton />
          </Suspense>
          <Suspense fallback={<ButtonPlaceholder />}>
            <CallNowButton />
          </Suspense>
        </div>
      </div>
    </div>
  </section>
));

const BrandLinks = memo(() => {
  const brands = [
    { name: "Rheem AC Repair & Service", url: "/rheem-ac-maintenance-in-dubai/" },
    { name: "SKM AC Maintenance Dubai", url: "/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/" },
    { name: "Carrier AC Repair", url: "#" },
    { name: "Lennox Air Conditioning Maintenance Service", url: "/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/" },
    { name: "Aftron AC Maintenance Service", url: "/aftron-ac-repair-maintenance-service-in-dubai-2/" },
    { name: "Bryant AC Repair Service Dubai", url: "/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/" },
    { name: "Blue Star AC Repair", url: "/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/" },
    { name: "Supra AC Maintenance", url: "/supra-ac-repair-in-dubai-supra-ac-maintenance-in-dubai-supra-ac-fix-in-dubai-supra-ac-service-in-dubai-supra-air-condition-repair-in-dubai-supra-air-condition-maintenance-in-dubai-supra-air-condition/" },
    { name: "Toshiba AC Fix", url: "/toshiba-ac-repair-in-dubai-toshiba-ac-maintenance-in-dubai-toshiba-ac-fix-in-dubai-toshiba-ac-service-in-dubai-toshiba-air-condition-repair-in-dubai-toshiba-air-condition-maintenance-in-dubai-toshiba/" },
    { name: "Super General AC Repair and Services in Dubai", url: "/super-general-ac-repair-in-dubai-super-general-ac-maintenance-in-dubai-super-general-ac-fix-in-dubai-super-general-ac-service-in-dubai-super-general-air-condition-repair-in-dubai-super-general-air-con/" },
    { name: "Hitachi AC Service", url: "/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi/" },
    { name: "Whirlpool AC Repair", url: "/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/" },
    { name: "Daewoo AC Cleaning", url: "/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/" }
  ];

  return (
    <p className="mt-2 mb-0">
      {brands.map((brand, i) => (
        <span key={i}>
          <Link to={brand.url}>{brand.name}</Link>
          {i < brands.length - 1 && <span>&nbsp;-&nbsp;</span>}
        </span>
      ))}
    </p>
  );
});

const FAQSection = memo(({ data, openItemIndex, onItemClick }) => {
  const accordionContentRef = useRef(null);

  if (!data || data.length === 0) {
    return <FAQPlaceholder />;
  }

  return (
    <section className="section cs_py_30 bg-dark-blue text-light">
      <div className="container">
        <h3 className="cs_fs_30 text-light">FAQ's</h3>
        <div className="cs_accordians_wrapper cs_style_1 p-0">
          {data.map((item, index) => (
            <div
              key={index}
              className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`}
            >
              <div className="cs_accordian_head" onClick={() => onItemClick(index)}>
                <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                <span className="cs_accordian_toggle">
                  <Suspense fallback={null}>
                    <i className="bi bi-eye text-light"><EyeIcon /></i>
                    <i className="bi bi-eye-slash text-light"><EyeSlashIcon /></i>
                  </Suspense>
                </span>
              </div>
              <div className="cs_accordian_body" ref={accordionContentRef}>
                <p
                  className="mb-0"
                  dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});


const SectionPlaceholder = memo(({ height = "200px" }) => (
  <div style={{ height, background: "#f5f5f5" }} />
));

const ButtonPlaceholder = memo(() => (
  <div style={{ width: 120, height: 44, background: "#e0e0e0", borderRadius: 8 }} />
));

const FAQPlaceholder = memo(() => (
  <section className="section cs_py_30 bg-dark-blue text-light">
    <div className="container">
      <h3 className="cs_fs_30 text-light">FAQ's</h3>
      <div style={{ height: 200 }} />
    </div>
  </section>
));

export default memo(AcServiceInDubai);