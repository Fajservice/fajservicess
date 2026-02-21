import { useEffect, useRef, useState, useCallback, memo, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HeaderForm from "../Headeform/HeaderForm";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import BookingFormModal from '../BookingFormModal';
import PriceCard from "./AcDetail/AcLocation/PriceCard";
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
const Cooling = lazy(() => import('../Svg/Cooling'));
const Improve = lazy(() => import('../Svg/Improve'));
const Airflow = lazy(() => import('../Svg/Airflow'));
const Customer = lazy(() => import('../Svg/Customer'));
const Inspection = lazy(() => import('../Svg/Inspection'));
const Thermostat = lazy(() => import('../Svg/Thermostat'));
const Gallery = lazy(() => import('../Svg/Gallery'));
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const EyeIcon = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V14M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);
const EyeSlashIcon = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
  const metatitle = String(titleSeo || "AC Repair Dubai | Best HVAC Maintenance & AC Service");
  const metadescription = String(description || "FAJ has been providing the best AC Service Dubai since 2010. Get fast AC repair, maintenance, servicing & AC cleaning from expert technicians nearby.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/");
  const metaImage = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/What-is-covered-in-an-AC-Maintenance-Contract/public";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Services", "item": "https://www.fajservices.ae/services/" },
          { "@type": "ListItem", "position": 2, "name": "Air Conditioning Repair", "item": "https://www.fajservices.ae/services/air-conditioning-repair/" },
          { "@type": "ListItem", "position": 3, "name": "AC Service", "item": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/" }
        ]
      },
      {
        "@type": "HVACBusiness",
        "@id": "https://www.fajservices.ae/#organization",
        "name": "FAJ Technical Services L.L.C",
        "url": "https://www.fajservices.ae/",
        "telephone": "+97143300002",
        "priceRange": "$$",
        "image": "https://www.fajservices.ae/img/fajlogo.png",
        "logo": { "@type": "ImageObject", "@id": "https://www.fajservices.ae/#logo", "url": "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public", "width": 250, "height": 60 },
        "address": { "@type": "PostalAddress", "streetAddress": "Warehouse # 2, Street 18b, Al Quoz Industrial Area 4", "addressLocality": "Dubai", "addressRegion": "Dubai", "postalCode": "00000", "addressCountry": "AE" },
        "geo": { "@type": "GeoCoordinates", "latitude": 25.11067467777471, "longitude": 55.227508295580904 },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2800", "bestRating": "5" },
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"], "opens": "08:00", "closes": "18:30" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "08:00", "closes": "11:30" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "14:30", "closes": "18:30" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "12:00", "closes": "18:00" }
        ],
        "sameAs": [
          "https://www.facebook.com/FAJTechnicalServicesLLC",
          "https://www.instagram.com/fajtechnicalservicesllc/",
          "https://x.com/FAJTechnical/",
          "https://ae.linkedin.com/company/faj-technical-services-llc",
          "https://www.pinterest.com/fajtechnicalservices/"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/#service",
        "name": "AC Repair Dubai | Best HVAC Maintenance & AC Service",
        "serviceType": "Air Conditioning Repair and Maintenance Services",
        "provider": { "@id": "https://www.fajservices.ae/#organization" },
        "areaServed": { "@type": "City", "name": "Dubai" },
        "description": "FAJ Technical Services L.L.C provides AC Service, AC Repair, AC Maintenance, AC Installation, AC Replacement, AC Duct Cleaning, AC Gas Refill, 24/7 AC Repair, Central AC Repair, Split AC Repair and HVAC services in Dubai UAE.",
        "mainEntityOfPage": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/",
        "subjectOf": [{ "@id": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/#video" }, { "@id": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/#faq" }]
      },
      {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "AC Repair and Maintenance Services",
        "description": "FAJ has been providing the best AC Service Dubai since 2010. Get fast AC repair, maintenance, servicing & AC cleaning from expert technicians nearby.",
        "image": [
          "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/What-is-covered-in-an-AC-Maintenance-Contract/public"
        ],
        "brand": {
          "@type": "Brand",
          "name": "FAJ Technical Services L.L.C"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "ratingValue": "4.9",
          "ratingCount": 4784
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "availability": "InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "priceCurrency": "AED",
          "url": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/"
        }

      },
      {
        "@type": "VideoObject",
        "@id": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/#video",
        "name": "Air Conditioning Repair Services: Your Home's Cooling Solution | FAJ",
        "description": "Expert advice on air conditioning repair and maintenance in Dubai.",
        "thumbnailUrl": "https://img.youtube.com/vi/sxBhB1_gxYA/maxresdefault.jpg",
        "uploadDate": "2023-09-15T07:59:44Z",
        "duration": "PT48S",
        "contentUrl": "https://www.youtube.com/watch?v=sxBhB1_gxYA",
        "embedUrl": "https://www.youtube.com/embed/sxBhB1_gxYA",
        "publisher": { "@id": "https://www.fajservices.ae/#organization" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/#faq",
        "mainEntity": [
          { "@type": "Question", "name": "How much is AC service in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "AC service in Dubai typically costs between AED 230 to AED 765 depending on the type of service. Prices vary based on the unit's size and condition, as well as the service provider." } },
          { "@type": "Question", "name": "Why is my AC not cooling in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Your AC may not be cooling due to dirty filters, low refrigerant levels, or a malfunctioning compressor. A professional technician can diagnose and resolve the issue quickly." } },
          { "@type": "Question", "name": "Why is AC repair so expensive?", "acceptedAnswer": { "@type": "Answer", "text": "AC repairs can be expensive due to the high cost of parts (like compressors or coils) and specialized labor. The complexity of the repairs and Dubai’s climate, which demands frequent AC use, also adds to the cost." } },
          { "@type": "Question", "name": "Why is my AC giving cool air but not cooling?", "acceptedAnswer": { "@type": "Answer", "text": "If your AC is blowing cool air but not cooling the room, it could be due to issues like low refrigerant or clogged filters. A technician can fix this with a proper inspection and maintenance." } },
          { "@type": "Question", "name": "How often should AC be cleaned in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "AC units in Dubai should be cleaned every 3-6 months due to high okay dust levels in the environment. More frequent cleaning may be necessary for homes in dusty areas or with heavy AC use." } },
          { "@type": "Question", "name": "Which company is best for central AC?", "acceptedAnswer": { "@type": "Answer", "text": "FAJ Technical Services L.L.C. is one of the best companies for central AC services in Dubai. We offer reliable, professional services to ensure your system runs efficiently." } },
          { "@type": "Question", "name": "What maintenance is needed for AC?", "acceptedAnswer": { "@type": "Answer", "text": "AC maintenance includes tasks like cleaning or replacing air filters, checking refrigerant levels, and cleaning coils and drain lines. Regular upkeep ensures your system runs efficiently and prolongs its lifespan." } },
          { "@type": "Question", "name": "How can I maintain my AC?", "acceptedAnswer": { "@type": "Answer", "text": "Maintain your AC by regularly cleaning or replacing filters, checking for airflow issues, and scheduling professional servicing every 6 months. This helps to improve performance and prevent costly repairs." } },
          { "@type": "Question", "name": "What is routine AC maintenance?", "acceptedAnswer": { "@type": "Answer", "text": "Routine AC maintenance typically involves cleaning filters, inspecting the refrigerant, cleaning the coils, and checking the system’s overall performance. Regular maintenance keeps your AC running smoothly." } },
          { "@type": "Question", "name": "How do I fix my air conditioner that is not cooling?", "acceptedAnswer": { "@type": "Answer", "text": "To fix an AC not cooling, check the thermostat, clean or replace the air filter, and ensure the outdoor unit is clear. If issues persist, inspect refrigerant levels, ice buildup, or compressor issues—contact a professional if needed." } },
          { "@type": "Question", "name": "How often should an air conditioner be serviced?", "acceptedAnswer": { "@type": "Answer", "text": "An air conditioner should be serviced at least once a year to maintain optimal performance. In hot climates like Dubai, servicing every 6 months is recommended to ensure efficiency and extend the unit's lifespan." } },
          { "@type": "Question", "name": "Is AC duct cleaning important in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, AC duct cleaning is important in Dubai as it improves indoor air quality, increases system efficiency, and prevents the build-up of dust and allergens. Regular cleaning helps your AC perform better." } },
          { "@type": "Question", "name": "Is AC duct cleaning worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, AC duct cleaning is worth it because it enhances air quality, improves the performance of your system, and helps extend the life of your AC unit. It’s a cost-effective investment for long-term benefits." } },
          { "@type": "Question", "name": "How often should AC ducts be cleaned?", "acceptedAnswer": { "@type": "Answer", "text": "AC ducts should be cleaned every 2-3 years, or more frequently if you notice dust accumulation, poor airflow, or a musty smell. Regular cleaning ensures better air quality and system efficiency." } }
        ]
      }
    ]
  };
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
        <Helmet script={[{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]}>
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
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:image" content={metaImage} />
        </Helmet>
      </HelmetProvider>

      <HeaderForm />

      <div className="cs_service_details">
        {/* Hero Section */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">AC Service & AC Repair in Dubai</h1>
            <p>Improve the comfort of your home and business premises with air conditioning cooling. Maintain a perfect temperature year-round with our expert AC technicians.<br /><a href="https://maps.app.goo.gl/KDPpprYugX3bXJ759">FAJ Technical Services L.L.C</a> has been providing AC services since 2010. Our technicians are experienced in <a href="https://www.facebook.com/FAJTechnicalServicesLLC">AC repair and maintenance</a>, ensuring your air conditioning system performs at its best for an extended time, as well as AC installation of home, office, and commercial air conditioning units in Dubai and Sharjah.</p>

            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
                <BookingFormModal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>
        </section>
        <PriceCard />
        {/* Experts Section */}
        <section className="section cs_py_30 pb-0">
          <div className="container">
            <div className="row gx-md-5 expert_section_wrapper">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left">Our AC Repair & Service</h2>
                <p className="mb-1">When looking for <a href="https://www.fajservices.ae/services/air-conditioning-repair/">AC repair &amp; service in Dubai</a>, choose a qualified and reputable company that meets your residential or commercial needs.</p>
                <p className="mb-1">FAJ Skilled AC technicians can quickly diagnose issues, providing your HVAC system runs efficiently. This improves comfort during hot months and reduces Dewa bill costs, providing peace of mind with your AC cooling solutions.</p>
                <h2 className="cs_fs_24 mb-1 pt-1 mt-0 text-align-left">Top Common Signs That You Need AC Maintenance</h2>
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
                      <li><a href="https://www.dewa.gov.ae/en/consumer/sustainability/sustainability-and-conservation/cooling" ><b>High AC electricity (DEWA) bills</b></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/sxBhB1_gxYA?si=b-4PWehpy2R_jztH"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="appointment-col mt-3">
              <div className="appointment-col-inner-wrappper">
                <h2 className="cs_fs_24 mb-1 mt-0">Our Express and Emergency AC Repair Service in Dubai</h2>
                <p>If you are facing any problem in your air conditioning service at home or in your business, especially during the summer time, our same day and express AC repair service is here to help. Get the fastest AC repair service in Dubai today. Contact us for a quote or to schedule your emergency AC repair appointment.</p>
              </div>
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
                    <li><strong>Dubai Hot Weather:</strong> In hot Dubai Summer where temperature increases above 40°C (104°F) Regular AC maintenance keeps it efficient during these conditions.</li>
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
    .benefit_wrapper_box {
        background-color: #fff;
        border-radius: 25px;
        padding: 4em 5px 3em;
        position: relative;
        height: -webkit-fill-available;
    }
    .benefit_wrapper_box .benefit_wrapper_box_icon {
        background-color: #00334E;
        border: 1px solid #fff;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -42px;
    }
    .benefit_wrapper_box h3 {
        font-size: 18px;
        color: #0A0A0A;
    }
    .benefit_wrapper_box p{
      font-size: 16px;
      color: #0A0A0A;
    }
    .bg-light-blue-section {
      background-color: #E9E9E9;
    }
    
    .service-cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 24px;
    }
    
    .service-card-item {
        padding: 30px 15px;
        border-radius: 10px;
        border: 1px solid #0A0A0A;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .service-card-item h3 {
      font-size: 16px;
      font-weight: 600;
      color: #000;
      margin: 0 0 8px 0;
    }
    
    .service-card-item p {
      text-align: center;
      font-size: 14px;
      margin: 0;
      line-height: 1.5;
    }
    
    .service-footer-text {
      margin-top: 24px;
    }
    
    .service-footer-text h3 {
        margin: 0 0 8px 0;
        font-size: 24px;
        font-weight: 500;
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
        <section className="section ac_benifit_blue">
          <div className="container">
            <div className="text-center">
              <h2 className="cs_fs_30 text-light my-5">Benefits Of Regular AC Service and Maintenance in Dubai
              </h2>
              <div className="row mt-4 gx-4 gy-4">
                <div className="col-md-4 mb-5">
                  <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2 ">
                    <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                      <Cooling />
                    </div>
                    <h3 className="text-uppercase mb-2 fs-6">COOLING EFFICIENCY</h3>
                    <p className="small">We perform a thorough evaluation of AC cooling efficiency with the use of a temperature gun.</p>
                  </div>
                </div>

                <div className="col-md-4 mb-5">
                  <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2 ">
                    <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                      <Improve />
                    </div>
                    <h3 className="text-uppercase mb-2 fs-6">IMPROVED AIR QUALITY</h3>
                    <p className="small">Cleaning AC filters and coils removes dust, resulting in healthier and cleaner air for your family or employees.</p>
                  </div>
                </div>

                <div className="col-md-4 mb-5">
                  <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2 ">
                    <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                      <Inspection />
                    </div>
                    <h3 className="text-uppercase mb-2 fs-6">COMPLETE INSPECTION</h3>
                    <p className="small">An AC tune-up involves checking and cleaning the filters, as well as inspecting electrical connections, to ensure optimal performance.</p>
                  </div>
                </div>

                <div className="col-md-4 mb-5">
                  <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2 ">
                    <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                      <Thermostat />
                    </div>
                    <h3 className="text-uppercase mb-2 fs-6">THERMOSTAT CHECK</h3>
                    <p className="small">We use a laser temperature gauge to confirm that the air conditioning thermostats are functioning properly.</p>
                  </div>
                </div>

                <div className="col-md-4 mb-5">
                  <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2 ">
                    <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                      <Airflow />
                    </div>
                    <h3 className="text-uppercase mb-2 fs-6">AIRFLOW BALANCE</h3>
                    <p className="small">We ensure optimal airflow from your air conditioning system in each room as needed.</p>
                  </div>
                </div>

                <div className="col-md-4 mb-5">
                  <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2 ">
                    <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                      <Customer />
                    </div>
                    <h3 className="text-uppercase mb-2 fs-6">CUSTOMER FEEDBACK</h3>
                    <p className="small">Our team provides essential feedback on your air conditioning health and any necessary repair.</p>
                  </div>
                </div>
              </div>

              <div className="text-center mb-4">
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
        <section className="section gallery_section bg-light-gray cs_py_30">
          <div className="container">
            <h2>Gallery  <Gallery /></h2>
            <div className="row gx-3 gy-2">
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide1/public`} alt="" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide2/public`} alt="" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide3/public`} alt="" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide4/public`} alt="" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide5/public`} alt="" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide6/public`} alt="" />
              </div>
            </div>
          </div>
        </section>
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
        <LazySection>
          <section className="section cs_py_30 bg-dark-blue text-light">
            <Serviceappointemnt
              subtitle2="Contact us"
              title2="Book An Appointment"
            />
          </section>
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
  <section className="section cs_py_30">
    <div className="container">
      {/* <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 195 to 320 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
      <p className="pt-3 border-small-top">
        <strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
        <b>We provide 2-month service warranty</b><br />
        and <small>3-month parts warranty</small> as standard.
      </p> */}
      <h3 className="cs_fs_24 text-align-left">We specialise in air conditioning services for the following brands</h3>

      <ul className="mb-3">
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/"><strong>Daikin Air Conditioning Services</strong></a><strong>:</strong> Daikin, a Japanese manufacturer, claims to be "the world's number one air conditioning company." Founded in 1924, it has developed a strong international presence through its focus on quality, innovation, and effective communication. We work with Daikin air conditioning products because the company continuously invests in research and development.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/gree/"><strong>Gree AC Repair and Service</strong></a><strong>:</strong> Gree Electric Appliances, Inc., founded in 1991 in Zhuhai, is a key player in the global air conditioning market. Starting with air conditioners, Gree has expanded its product line to include various home appliances and became China's largest air conditioner manufacturer by 2000.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/o-general/"><strong>O General AC Repair and Maintenance</strong></a><strong>:</strong> O General AC, a brand of Fujitsu General, is renowned for its Japanese engineering and high-quality air conditioning solutions.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/mitsubishi/"><strong>Mitsubishi AC Service and Repair</strong></a><strong>:</strong> Founded in 1954, Mitsubishi Air Conditioning has been producing air conditioning systems for nearly 75 years and is renowned for its reliability and energy efficiency.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/"><strong>Samsung AC Maintenance Service</strong></a><strong>:</strong> Samsung AC is a globally recognized name, known for pushing boundaries. Since 1969, they have continued to shape the future with innovative air conditioning technology.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/york/"><strong>York AC Servicing and Repair</strong></a><strong>:</strong> YORK&reg; has been an industry leader since our founding in 1874.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/"><strong>LG AC Maintenance and Service</strong></a><strong>:</strong> LG history in air conditioning began in 1968 with the launch of its first unit.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/trane/"><strong>Trane HVAC Repair and Maintenance:</strong></a> Trane developed its first air conditioning unit in 1931.</li>
        <li><strong>Carrier AC Repair and Services in Dubai:</strong> Since 1902, Carrier HVAC has cultivated a history of proven innovation in the heating, air-conditioning and refrigeration industries.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/rheem/"><strong>Rheem AC Repair &amp; Service Near Me:</strong></a> Rheem AC was founded in 1925 in California, initially making steel drums. It quickly transitioned to manufacturing water heaters and, in the 1940s and 1950s, expanded into furnaces, split, central air conditioning systems to meet the growing demand for home comfort. Today, Rheem is a leading global HVAC provider known for its innovation and diverse heating and cooling solutions.</li>
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
    { name: "Rheem AC Repair & Service", url: "/services/air-conditioning-repair/brands/rheem/" },
    { name: "SKM AC Maintenance Dubai", url: "/services/air-conditioning-repair/brands/skm/" },
    { name: "Carrier AC Repair", url: "#" },
    { name: "Lennox Air Conditioning Maintenance Service", url: "/services/air-conditioning-repair/brands/lennox/" },
    { name: "Aftron AC Maintenance Service", url: "/services/air-conditioning-repair/brands/aftron/" },
    { name: "Bryant AC Repair Service Dubai", url: "/services/air-conditioning-repair/brands/bryant/" },
    { name: "Blue Star AC Repair", url: "/services/air-conditioning-repair/brands/blue-star/" },
    { name: "Supra AC Maintenance", url: "/services/air-conditioning-repair/brands/supra/" },
    { name: "Toshiba AC Fix", url: "/services/air-conditioning-repair/brands/toshiba/" },
    { name: "Super General AC Repair and Services in Dubai", url: "/services/air-conditioning-repair/brands/super-general/" },
    { name: "Hitachi AC Service", url: "/services/air-conditioning-repair/brands/hitachi/" },
    { name: "Whirlpool AC Repair", url: "/services/air-conditioning-repair/brands/whirlpool/" },
    { name: "Daewoo AC Cleaning", url: "/services/air-conditioning-repair/brands/daewoo/" }
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
    <section className="section cs_py_30 text-black">
      <div className="container">
        <h3 className="cs_fs_30">FAQ's</h3>
        <div className="cs_accordians_wrapper cs_style_1 p-0">
          {data.map((item, index) => (
            <div
              key={index}
              className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`}
            >
              <div className="cs_accordian_head" onClick={() => onItemClick(index)}>
                <span className="cs_fs_16 cs_semibold mb-0">{item.title}</span>
                <span className="cs_accordian_toggle">
                  <Suspense fallback={null}>
                    <i className="bi bi-eye"><EyeIcon />
                    </i>
                    <i className="bi bi-eye-slash"><EyeSlashIcon />
                    </i>
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