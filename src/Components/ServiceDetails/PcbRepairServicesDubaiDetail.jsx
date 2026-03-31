import { useEffect, useRef, useState, useCallback, memo, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeaderForm from "../Headeform/HeaderForm";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import BookingFormModal from '../BookingFormModal';
import CallNowButton       from '../Buttons/CallNowButton';
import GetQuoteButton      from "../Buttons/GetQuoteButton";
import Blog2               from "../Blog/Blog2";
import Testimonial1        from "../Testimonial/Testimonial1";
import BeforeAfter         from "../BeforeAfter/BeforeAfter";
import Serviceappointemnt  from '../Contact/Serviceappointemnt';
import Process from "../Process/Process";

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

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "AC Repair Dubai - FAJ Technical Services L.L.C",
      "image": ["https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"],
      "url": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "3500", "bestRating": "5" },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog", "name": "AC Services",
        "itemListElement": [
          { "@type": "OfferCatalog", "name": "AC Repair", "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Split AC Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ducted AC Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Window AC Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Central AC Repair" } }
          ]},
          { "@type": "OfferCatalog", "name": "AC Service", "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Filter Cleaning" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Coil Cleaning" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Gas Refill" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Duct Cleaning" } }
          ]},
          { "@type": "OfferCatalog", "name": "AC Maintenance", "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Annual Maintenance Contract" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Preventive AC Maintenance" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Performance Check" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AC Thermostat Check" } }
          ]}
        ]
      },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Ahsan Raza" }, "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" }, "reviewBody": "We recently faced an urgent situation when our Daikin VRV air conditioning unit malfunctioned, continuously blowing hot air into our home. FAJ responded promptly and resolved the issue with remarkable efficiency. From the initial call to the completion of the AC repair, everyone involved was professional, courteous, and meticulous in their work. We highly recommend their services to anyone in need." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Abdullah Kiani" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "My AC was not working and taking too much load with no cooling. I contacted FAJ Technical Services and they sent a technician named Taranpal Singh. That guy was a genius and super expert in his work. Very clean and very efficient services. Strongly recommend and super friendly." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Sanjeewa Supun" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "I knew they were the right choice. I am grateful for their effort in fixing my LG air conditioner, which is essential in this heat. If you are experiencing the same issue, I highly recommend their air conditioning repair service!" },
        { "@type": "Review", "author": { "@type": "Person", "name": "Palesa Molelekoa" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "My apartment AC stopped working during my tour. Despite trying all DIY tips my AC was not cooling. My friend suggested FAJ and they came for same day service and did LG AC repair in two hours. They topped the refrigerant level and replaced the AC thermostat. Technician was friendly and very polite. Would recommend their AC technicians to whoever needs assistance." },
        { "@type": "Review", "author": { "@type": "Person", "name": "Affu Affu" }, "reviewRating": { "@type": "Rating", "ratingValue": "4.9", "bestRating": "5" }, "reviewBody": "Highly recommended. They are the best in AC repair services in Dubai." }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/#video",
      "name": "Air Conditioning Repair Services: Your Home's Cooling Solution | FAJ",
      "description": "Expert advice on air conditioning repair and maintenance in Dubai.",
      "thumbnailUrl": "https://img.youtube.com/vi/sxBhB1_gxYA/maxresdefault.jpg",
      "uploadDate": "2023-09-15T07:59:44Z",
      "duration": "PT48S",
      "embedUrl": "https://www.youtube.com/embed/sxBhB1_gxYA",
      "publisher": { "@id": "https://www.fajservices.ae/#organization" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/#faq",
      "mainEntity": [
        { "@type": "Question", "name": "How much is AC service in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "AC service in Dubai typically costs between AED 230 to AED 765 depending on the type of service." } },
        { "@type": "Question", "name": "Why is my AC not cooling in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Your AC may not be cooling due to dirty filters, low refrigerant levels, or a malfunctioning compressor." } },
        { "@type": "Question", "name": "Why is AC repair so expensive?", "acceptedAnswer": { "@type": "Answer", "text": "AC repairs can be expensive due to the high cost of parts like compressors or coils and specialized labor." } },
        { "@type": "Question", "name": "Why is my AC giving cool air but not cooling the room?", "acceptedAnswer": { "@type": "Answer", "text": "It could be due to low refrigerant or clogged filters. A technician can fix this with a proper inspection." } },
        { "@type": "Question", "name": "How often should AC be cleaned in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "AC units in Dubai should be cleaned every 3 to 6 months due to high dust levels." } },
        { "@type": "Question", "name": "Which company is best for central AC in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "FAJ Technical Services L.L.C is one of the best companies for central AC services in Dubai." } },
        { "@type": "Question", "name": "What maintenance is needed for AC?", "acceptedAnswer": { "@type": "Answer", "text": "AC maintenance includes cleaning or replacing air filters, checking refrigerant levels, and cleaning coils and drain lines." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",                   "item": "https://www.fajservices.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Services",               "item": "https://www.fajservices.ae/services/" },
        { "@type": "ListItem", "position": 3, "name": "Air Conditioning Repair","item": "https://www.fajservices.ae/services/air-conditioning-repair/" },
        { "@type": "ListItem", "position": 4, "name": "AC Service",             "item": "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/" }
      ]
    }
  ]
};

const SCHEMA_STRING = JSON.stringify(SCHEMA);

const useInView = (rootMargin = "200px") => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.disconnect(); } },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, isInView];
};

const LazySection = memo(({ children, minHeight = "200px" }) => {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref} style={{ minHeight: isInView ? undefined : minHeight }}>
      {isInView && (
        <Suspense fallback={<div style={{ minHeight }} />}>
          {children}
        </Suspense>
      )}
    </div>
  );
});

const YouTubeFacade = memo(({ videoId, title }) => {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    return (
      <iframe
        className="bordered-img blue-border"
        width="100%" height="350"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&si=b-4PWehpy2R_jztH`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ display: 'block' }}
      />
    );
  }
  return (
    <div
      className="bordered-img blue-border"
      onClick={() => setClicked(true)}
      style={{ position: 'relative', width: '100%', height: '350px', cursor: 'pointer', overflow: 'hidden', background: '#000', contain: 'layout style' }}
      role="button"
      aria-label={`Play video: ${title}`}
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        loading="lazy"
        width="480" height="350"
        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '68px', height: '48px', background: '#ff0000', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <svg viewBox="0 0 68 48" width="68" height="48">
          <polygon points="28,16 28,32 44,24" fill="#fff" />
        </svg>
      </div>
    </div>
  );
});

const ButtonPlaceholder = memo(() => (
  <div style={{ width: '120px', height: '44px', background: "#e0e0e0", borderRadius: '8px', display: 'inline-block' }} />
));
const FAQSection = memo(({ data, openItemIndex, onItemClick }) => {
  if (!data?.length) return <div style={{ minHeight: '300px' }} />;
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
                  <i className="bi bi-eye"><EyeIcon /></i>
                  <i className="bi bi-eye-slash"><EyeSlashIcon /></i>
                </span>
              </div>
              <div className="cs_accordian_body">
                <p className="mb-0" dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

const AcServiceInDubai = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  const metatitle       = String(titleSeo    || "Best Electronic PCB Repair | Printed Circuit Board Services Dubai");
  const metadescription = String(description || "Get expert electronic PCB repair in Dubai, including for appliances, AC, industrial equipment, AC / DC drives. Call us for PCB board service near you");
  const metaAuthor      = String(Author  || "FAJ Technical Services L.L.C");
  const metaURL         = String(URL     || "https://www.fajservices.ae/services/pcb-repair-services/");
  const metaImage       = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/What-is-covered-in-an-AC-Maintenance-Contract/public";

  const [isModalOpen,     setIsModalOpen]     = useState(false);
  const [faqData,         setFaqData]         = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [openItemIndex,   setOpenItemIndex]   = useState(0);

  const [faqSectionRef,         faqSectionInView]         = useInView();
  const [testimonialSectionRef, testimonialSectionInView] = useInView();

  const openModal  = useCallback((e) => { e.preventDefault(); setIsModalOpen(true);  document.body.style.overflow = 'hidden'; }, []);
  const closeModal = useCallback(()  => { setIsModalOpen(false); document.body.style.overflow = ''; }, []);
  const handleItemClick = useCallback((index) => {
    setOpenItemIndex(prev => prev === index ? -1 : index);
  }, []);

  useEffect(() => {
    import("../Common/loadBackgroudImages").then(({ default: loadBg }) => loadBg());
  }, []);

  useEffect(() => {
    if (!faqSectionInView || faqData.length > 0) return;
    const controller = new AbortController();
    fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcServiceInDubaiFaqs.json`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => setFaqData(data))
      .catch(err => { if (err.name !== 'AbortError') console.error('FAQ fetch error:', err); });
    return () => controller.abort();
  }, [faqSectionInView, faqData.length]);

  useEffect(() => {
    if (!testimonialSectionInView || testimonialData.length > 0) return;
    const controller = new AbortController();
    fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/AcServiceTestimonials.json`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => setTestimonialData(data))
      .catch(err => { if (err.name !== 'AbortError') console.error('Testimonial fetch error:', err); });
    return () => controller.abort();
  }, [testimonialSectionInView, testimonialData.length]);

  return (
    <>
      <Helmet>
        <title>{metatitle}</title>
        <meta name="description"         content={metadescription} />
        <meta name="author"              content={metaAuthor} />
        <meta name="robots"              content="index, follow" />
        <link rel="canonical"            href={metaURL} />
        <meta property="og:type"         content="website" />
        <meta property="og:locale"       content="en_US" />
        <meta property="og:title"        content={metatitle} />
        <meta property="og:description"  content={metadescription} />
        <meta property="og:url"          content={metaURL} />
        <meta property="og:image"        content={metaImage} />
        <meta name="twitter:title"       content={metatitle} />
        <meta name="twitter:description" content={metadescription} />
        <meta name="twitter:image"       content={metaImage} />
        <link rel="preconnect" href="https://imagedelivery.net" />
        <link rel="dns-prefetch" href="https://imagedelivery.net" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <script type="application/ld+json">{SCHEMA_STRING}</script>
      </Helmet>

      <HeaderForm />

      <div className="cs_service_details">

        {/* Hero */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Top-Quilaity Electronic PCB Repair and AC / DC PCB  Board Service Near You, in Dubai</h1>
            <p>We provide expert electronic PCB board repair services for both AC and DC drives boards, Power Devices, Machine controllers, Soft Starters, PLCs & Modules, and Servo & Stepper Drives repairs. Our repair services save you the high cost of replacing your existing PCB board.</p>
            <div className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
                <BookingFormModal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>
        </section>

        {/* Our AC Repair & Service */}
        <section className="section cs_py_30 pb-0">
          <div className="container">
            <div className="row gx-md-5 expert_section_wrapper align-items-center mb-4">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left">Affordable Electronics PCB Repair and Servo Drive Services in Dubai, UAE</h2>
                <p className="mb-1">We are the highest provider of electronic<a href="https://www.fajservices.ae/services/">PCB repair and servo drive repair services in Dubai</a>, dedicated to reviving and extending the life of your electronic equipment. appliances PCB, AC PCB and all Printed Circuit Boards repair near you.</p>
                <p className="mb md-1">When it comes to printed circuit boards (PCBs), even minor faults can disrupt your electronics' performance.<a href="https://maps.app.goo.gl/qSMC1s6pnKz5YK9cA">FAJ Technical Services L.L.C</a> acknowledges the important role of PCBs in modern technology, which is why we offer comprehensive repair services for issues ranging from minor defects to complex damage.</p>
              </div>
              <div className="col-md-6">
                 <img
                    className="blue-border"
                    src={getImageSrc('pcb-repair-services')}
                    alt="PCB Repair Services in Dubai"
                    loading="lazy"
                    width="600" height="400"
                    style={{ width: '100%', height: 'auto' }}
                  />
              </div>
            </div>
          </div>
        </section>

        {/* Why AC Maintenance Important */}
        <LazySection minHeight="400px">
          <section className="section cs_py_30 bg-light-gray" style={{ contain: 'layout style' }}>
            <div className="container">
             
              
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    className="blue-border"
                    src={getImageSrc('pcb-repair')}
                    alt="PCB Repair in Dubai"
                    loading="lazy"
                    width="600" height="400"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="col-md-6">
                   <h2 className="cs_fs_24 mb-1 mt-0 text-align-left">Why Choose Our PCB Repair Services?</h2>
                  <ul className="mb-0">
                    <li><strong>Skilled PCB Technicians: </strong>Our team consists of highly skilled technicians who excel in diagnosing and repairing PCBs of varying complexities.</li>
                    <li><strong>Cutting-Edge Equipment: </strong>We support the most advanced diagnostic and repair equipment to guarantee precision and reliability.</li>
                    <li><strong>Quick Turnaround:</strong> We recognise the importance of reducing downtime and provide quick turnaround times to ensure your electronics are back in action.</li>
                    <li><strong>Quality Assurance: </strong>Our strict quality control processes ensure that repaired PCBs meet or exceed industry standards.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* How to use FAJ */}
        <section className="section cs_py_30 bg-light-blue-section" style={{ contain: 'layout style' }}>
          <div className="container">
            <h2 className="cs_fs_28">Our Repair Process</h2>
            <p className="cs-fs_14">At <a href="https://maps.app.goo.gl/2R9PzXMdN9ysmemcA"><strong>FAJ Technical Services L.L.C</strong></a> our repair process is transparent and efficient:</p>
            <div className="row g-3 justify-content-center">
              <div className=" col-md-4 col-sm-6">
                <div className="service-card-item"><h3>PCB Diagnosis</h3><p className="cs_fs_14">We begin by diagnosing the issue with your PCB or servo drive and identifying the root cause of the problem.</p></div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="service-card-item"><h3>PCB Repair</h3><p className="cs_fs_14">Our expert technicians perform necessary repairs, utilising high-quality components and adhering to industry best practices.</p></div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="service-card-item"><h3>PCB Testing</h3><p className="cs_fs_14">Every repaired component is thoroughly tested to ensure it operates perfectly.</p></div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="service-card-item"><h3>PCB Quality Assurance</h3><p className="cs_fs_14">We enforce rigorous quality control to ensure the reliability and durability of the repaired components.</p></div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="service-card-item"><h3>PCB Delivery</h3><p className="cs_fs_14">After your PCB or servo drive is repaired and successfully tested, we will promptly return it to you, ready for use.</p></div>
              </div>
            </div>
          </div>
        </section>
        {/* <div ref={testimonialSectionRef} style={{ minHeight: '400px' }}>
          {testimonialSectionInView && testimonialData.length > 0 && (
            <Suspense fallback={<div style={{ height: '400px', background: '#f5f5f5' }} />}>
              <Testimonial1
                subtitle="What Our Clients Say"
                title="Customer <span>Reviews</span>"
                bgImg={`${CDN}/testimonialbg/public`}
                testimonialData={testimonialData}
                sectionId="ac-service-testimonials"
              />
            </Suspense>
          )}
        </div> */}

        {/* <LazySection minHeight="300px"><Blog2 /></LazySection> */}

        {/* Book Appointment */}
        <LazySection minHeight="200px">
          <section className="section cs_py_30 bg-dark-blue text-light">
            <Serviceappointemnt subtitle2="Contact us" title2="Book An Appointment" />
          </section>
        </LazySection>
        {/* <div ref={faqSectionRef} style={{ minHeight: '300px' }}>
          {faqSectionInView && (
            <FAQSection
              data={faqData}
              openItemIndex={openItemIndex}
              onItemClick={handleItemClick}
            />
          )}
        </div> */}
        <Process />
      </div>
    </>
  );
};

export default memo(AcServiceInDubai);
