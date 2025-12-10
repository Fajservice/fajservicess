import { useEffect, useRef, useState, useCallback, lazy, Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RxArrowTopRight } from 'react-icons/rx';

const Serviceappointemnt = lazy(() => import('../../Contact/Serviceappointemnt'));
const MaintenanceContract = lazy(() => import('../../MaintenanceContract/MaintenanceContract'));
const BlogWashingMachine = lazy(() => import("../../Blog/BlogWashingMachine"));
const BrandsSliderSection = lazy(() => import("../../BrandsSliderSection"));
const Testimonial1 = lazy(() => import("../../Testimonial/Testimonial1"));

import HeaderForm from "../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import BookingFormModal from '../../BookingFormModal';
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";

const loadFAQData = () => import('../../../Data/HomeAppData/FAQs/WashingmachineRepairServiceFaqs.json');
const loadTestimonialData = () => import('../../../Data/HomeAppData/Testmonials/WashingMachineRepairServiceTestimonials.json');
const loadBrandsData = () => import('../../../Data/AppliancesBrandsLogo.json');

const OptimizedImage = ({ src, alt, className, width, height, priority = false }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
    />
  );
};

// Lazy YouTube Component
const LazyYouTube = ({ videoId, title }) => {
  const [load, setLoad] = useState(false);
  
  return (
    <div 
      style={{ position: 'relative', paddingBottom: '56.25%', height: 0, cursor: 'pointer' }}
      onClick={() => setLoad(true)}
      className="bordered-img blue-border"
    >
      {!load ? (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            loading="lazy"
          />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '68px',
            height: '48px',
            background: 'rgba(255,0,0,0.8)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
              <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
              <path d="M 45,24 27,14 27,34" fill="#fff"></path>
            </svg>
          </div>
        </>
      ) : (
        <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

const WashingMachineRepairServiceDubaiDetail = ({ 
  titleSeo, 
  description, 
  Author, 
  Keyword, 
  URL,
  Image 
}) => {
  const [data, setData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [brandsData, setBrandsData] = useState([]);
  const [openItemIndex, setOpenItemIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const accordionContentRef = useRef(null);

  // Load data on mount
  useEffect(() => {
    Promise.all([
      loadFAQData(),
      loadTestimonialData(),
      loadBrandsData()
    ]).then(([faq, testimonial, brands]) => {
      setData(faq.default || faq);
      setTestimonialData(testimonial.default || testimonial);
      setBrandsData(brands.default || brands);
    });
  }, []);

  const metaTitle = String(
    titleSeo || "Washing Machine Repair | Washing Machine Service in Dubai"
  );
  
  const metaDescription = String(
    description || "FAJ is an expert in washing machine repair & service center in Dubai. Call 04 3300002 for washer dryer repairs, laundry machine maintenance near me."
  );
  
  const metaAuthor = String(
    Author || "FAJ Technical Services L.L.C"
  );
  
  const metaKeyword = String(
    Keyword || "Washing Machine Repair, Washing Machine Maintenance, Washing Machine Service"
  );
  
  const metaURL = String(
    URL || "https://www.fajservices.ae/washing-machine-repair-service-dubai/"
  );
  
  const metaImage = String(
    Image || "https://www.fajservices.ae/img/washing-machine-repair.avif"
  );

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

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <link rel="preconnect" href="https://img.youtube.com" />
          <link rel="preconnect" href="https://www.youtube.com" />
          <link 
            rel="preload" 
            as="image" 
            href={`${import.meta.env.BASE_URL}img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif`} 
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={metaURL} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={metaImage} />
          <meta property="og:image:alt" content="Washing Machine Repair Service" />
          <meta property="og:site_name" content="FAJ Technical Services" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={metaURL} />
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={metaImage} />
          <meta name="twitter:image:alt" content="Washing Machine Repair Service" />
        </Helmet>
      </HelmetProvider>

      <HeaderForm />

      <div className="cs_service_details">
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Washing Machine Repair Service in Dubai</h1>
            <p>Since 2010, FAJ Technical Services L.L.C has offered reliable installation, maintenance, and repair for all brands of washing machines, dryers, and laundry systems in Dubai and Sharjah.<br />Our experts are here to assist with any issues, from top-loading and front-loading washing machine repair and service near you. You can trust us to keep your washing machine running smoothly.<br /> You can rely on us for both routine repairs and emergency washing machine service. Contact us now for reliable services at competitive prices!</p>

            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
                <button onClick={openModal} className="cs_btn cs_style_1 d-md-none" aria-label="Book Now">
                  <span>Book Now</span>
                  <RxArrowTopRight />
                </button>
                <BookingFormModal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "18px" }}>Same Day Washing Machine Repair Available Near You</h2>
                <p className="mb-2">
                  We recognise how important your washing machine is to your daily routine.
                  that&apos;s why we provide dependable washing machine repair and maintenance services in Dubai and Sharjah.
                  <br />With our high-quality washer and dryer repair services and expert support, we are committed to ensuring that your premium washing machine operates smoothly for years to come.
                </p>
                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Fast and Reliable Appliances Service</h2>
                <p className="mb-2">At <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"><b>FAJ Technical Services L.L.C</b></a>, we understand that appliance breakdowns never happen at a convenient time. That's why our trained and qualified technicians are here to provide you with reliable appliance repair services.</p>
              </div>

              <div className="col-md-6">
                <OptimizedImage 
                  className="bordered-img w-100" 
                  src={`${import.meta.env.BASE_URL}img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif`}
                  alt="Washing Machine Repair"
                  width="600"
                  height="400"
                  priority={true}
                />
              </div>
            </div>
            <AppliancesAppointmentCol />
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Washing Machine Maintenance Service Important in Dubai?</h2>
            <p>Washing machine service in Dubai is crucial for maintaining efficiency, extending lifespan, and avoiding costly repairs. Regular servicing detects potential issues early, ensuring smooth operation. Here&apos;s a more detailed look at why:</p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <OptimizedImage 
                  className="blue-border" 
                  src={`${import.meta.env.BASE_URL}img/washing-machine-repair.avif`}
                  alt="Washing Machine Repair"
                  width="600"
                  height="400"
                />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li><strong>Washing Machine Saves Energy & Water: </strong>Regular servicing ensures optimal performance, helping reduce energy and water consumption.</li>
                  <li><strong>Washing Machine Prevents Breakdowns: </strong>Regular maintenance helps prevent breakdowns by managing minor issues before they escalate.</li>
                  <li><strong>Washing Machine Improves Efficiency: </strong>Promptly addressing issues can greatly increase the lifespan of your washing machine.</li>
                  <li><strong>Washing Machine Extends Lifespan: </strong>Addressing problems quickly can greatly increase the lifespan of your washing machine.</li>
                  <li><strong>Washer Ensures Clean Clothes: </strong>Regular cleaning prevents mold and mildew that can cause odours.</li>
                  <li><strong>Washer Dryer Safety: </strong>Regular maintenance identifies safety issues like loose fittings or leaks.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR WASHING MACHINES</h2>
            <div className="row align-items-center">
              <div className="col-xl-6">
                <LazyYouTube videoId="EnSAQA_AjzY" title="Washing Machine Services" />
              </div>
              <div className="col-xl-6">
                <p className='mb-0'>At FAJ, we are your reliable partner for washing machine maintenance in Dubai. Our comprehensive spare parts warranty ensures your machine is well cared for.</p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li><strong>Washing Machine Repair Service: </strong>Resolving issues such as non-functioning machines, leaks, drainage problems.</li>
                  <li><strong>Washing Machine Installation: </strong>Proper connection to water supply, drainage, and power sources.</li>
                  <li><strong>Washing Machine Maintenance Contract: </strong>Regular cleaning of filters, hoses, and pumps.</li>
                  <li><strong>Additional Services: </strong>Water leakage solutions, deep cleaning, and more.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <MaintenanceContract />
        </Suspense>

        <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg="img/testimonialbg.jpg"
            testimonialData={testimonialData}
            sectionId="home-testimonials"
          />
        </Suspense>

        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <BrandsSliderSection
            brandsData={brandsData}
            sectionId="home-brands"
            logoMaxHeight="60px"
            logoMaxWidth="120px"
            containerHeight="100px"
          />
        </Suspense>

        <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
          <BlogWashingMachine />
        </Suspense>

        <section className="section cs_py_30 bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">FAQ&apos;s</h3>
            <div className="cs_accordians_wrapper cs_style_1 p-0">
              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`}>
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye text-light"><FaEye /></i>
                      <i className="bi bi-eye-slash text-light"><FaEyeSlash /></i>
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    <p className="mb-0" dangerouslySetInnerHTML={{ __html: item.desc?.replace(/\n/g, '<br>') }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <Serviceappointemnt subtitle2="Contact us" title2="Book An Appointment" />
        </Suspense>
      </div>
    </>
  );
};

export default WashingMachineRepairServiceDubaiDetail;