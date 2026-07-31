import { useEffect, useRef, useState, useCallback, memo, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeaderForm from "../Headeform/HeaderForm";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import PriceCard from "./AcDetail/AcLocation/PriceCard";
import Cooling    from '../Svg/Cooling';
import Improve    from '../Svg/Improve';
import Airflow    from '../Svg/Airflow';
import Customer   from '../Svg/Customer';
import Inspection from '../Svg/Inspection';
import Thermostat from '../Svg/Thermostat';
import Gallery    from '../Svg/Gallery';

import CallNowButton       from '../Buttons/CallNowButton';
import ACWhyChooseUs       from "../WhyChooseUS/ACWhyChooseUs";
import MaintenanceContract from "../MaintenanceContract/MaintenanceContract";
import Practicaltip        from "../Common/Practicaltip";
import AcProperties        from "../Common/AcProperties";
import FAJACPrice          from "../Miscellaneous/FAJACPrice";
import GetQuoteButton      from "../Buttons/GetQuoteButton";
import Blog2               from "../Blog/Blog2";
import Testimonial1        from "../Testimonial/Testimonial1";
import BeforeAfter         from "../BeforeAfter/BeforeAfter";
import Serviceappointemnt  from '../Contact/Serviceappointemnt';

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
      "thumbnailUrl": "https://img.youtube.com/vi/prUR0-lZlzg/maxresdefault.jpg",
      "uploadDate": "2023-09-15T07:59:44Z",
      "duration": "PT48S",
      "embedUrl": "https://www.youtube.com/embed/prUR0-lZlzg",
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
        { "@type": "Question", "name": "What maintenance is needed for AC?", "acceptedAnswer": { "@type": "Answer", "text": "AC maintenance includes cleaning or replacing air filters, checking refrigerant levels, and cleaning coils and drain lines." } },
        { "@type": "Question", "name": "Is emergency AC repair available in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many AC companies in Dubai provide emergency AC repair services. FAJ Technical Services L.L.C. offers fast emergency AC repair and AC services on the same day as per your requirement." } },
        { "@type": "Question", "name": "How fast can an AC technician reach my home in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Most companies like Faj Services can send a technician within 30 to 90 minutes, depending on your location and availability." } },
        { "@type": "Question", "name": "Which AC system is best for villas in Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Central AC systems are usually the best choice for villas because they provide efficient cooling throughout the entire property." } },
        { "@type": "Question", "name": "What is the VRF air conditioning system?", "acceptedAnswer": { "@type": "Answer", "text": "A VRF system is an energy-efficient AC solution that allows different rooms or zones to be cooled independently." } },
        { "@type": "Question", "name": "What is the best AC system for commercial buildings?", "acceptedAnswer": { "@type": "Answer", "text": "VRF systems and centralised HVAC systems are popular choices for commercial buildings due to their efficiency and scalability." } },
        { "@type": "Question", "name": "Which is the best HVAC contractor near me?", "acceptedAnswer": { "@type": "Answer", "text": "The best HVAC contractor has licensed company, positive customer reviews, fair pricing, and reliable support. FAJ Technical Services L.L.C has been a trusted company based in Dubai since 2010." } },
        { "@type": "Question", "name": "How to book an AC technician near my location?", "acceptedAnswer": { "@type": "Answer", "text": "Contact a local AC company by phone or through their website to schedule a service appointment at your preferred time." } }
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

const PROBLEMS = [
  { title: "High Humidity Levels",   desc: "An air conditioning unit that doesn't reduce indoor humidity may have cooling capacity issues or operate improperly." },
  { title: "Leaking Water",          desc: "Water pooling around the AC or dripping from vents may signal a blocked drain, frozen coils, or other serious issues." },
  { title: "Increased Energy Bills", desc: "High DEWA bills without increased usage may signal AC inefficiencies from dirty filters, AC duct leaks, or other issues." },
  { title: "Weak Airflow",           desc: "Reduced airflow from your AC duct may signal problems like a blocked filter or a faulty AC motor." },
  { title: "Warm Air",               desc: "If your AC blows warm or room temperature air instead of cold, it could indicate AC compressor, gas, or duct work issues requiring fix." },
  { title: "Strange Noises",         desc: "Unusual sounds such as grinding, squealing, or banging from your AC motor can indicate problems that require attention." },
  { title: "Foul Odors",             desc: "Unpleasant odors coming from the vents might indicate the presence of mold or mildew, which requires immediate attention." },
  { title: "Frequent Cycling",       desc: "It may indicate issues with maintaining desired AC temperatures, such as dirty filters, low refrigerant, or a faulty thermostat." }
];

const BENEFITS = [
  { Icon: Cooling,    title: "COOLING EFFICIENCY",  desc: "We perform a thorough evaluation of AC cooling efficiency with the use of a temperature gun." },
  { Icon: Improve,    title: "IMPROVED AIR QUALITY", desc: "Cleaning AC filters and coils removes dust, resulting in healthier and cleaner air for your family or employees." },
  { Icon: Inspection, title: "COMPLETE INSPECTION",  desc: "An AC tune-up involves checking and cleaning the filters, as well as inspecting electrical connections, to ensure optimal performance." },
  { Icon: Thermostat, title: "THERMOSTAT CHECK",     desc: "We use a laser temperature gauge to confirm that the air conditioning thermostats are functioning properly." },
  { Icon: Airflow,    title: "AIRFLOW BALANCE",      desc: "We ensure optimal airflow from your air conditioning system in each room as needed." },
  { Icon: Customer,   title: "CUSTOMER FEEDBACK",    desc: "Our team provides essential feedback on your air conditioning health and any necessary repair." },
];

const GALLERY_ITEMS = [
  { src: 'AcService/slide1', alt: 'Ac Service' },
  { src: 'AcService/slide2', alt: 'AC Repair' },
  { src: 'AcService/slide3', alt: 'AC Maintenance' },
  { src: 'AcService/slide4', alt: 'AC Cleaning' },
  { src: 'AcService/slide5', alt: 'AC Fixing' },
  { src: 'AcService/slide6', alt: 'AC Gas Filling' },
];

const BRANDS_LIST = [
  { name: "Rheem AC Repair & Service",                     url: "/services/air-conditioning-repair/brands/rheem/" },
  { name: "SKM AC Maintenance Dubai",                      url: "" },
  { name: "Carrier AC Repair",                             url: "" },
  { name: "Lennox Air Conditioning Maintenance Service",   url: "/services/air-conditioning-repair/brands/lennox/" },
  { name: "Aftron AC Maintenance Service",                 url: "" },
  { name: "Bryant AC Repair Service Dubai",                url: "" },
  { name: "Blue Star AC Repair",                           url: "" },
  { name: "Supra AC Maintenance",                          url: "" },
  { name: "Toshiba AC Fix",                                url: "" },
  { name: "Super General AC Repair and Services in Dubai", url: "" },
  { name: "Hitachi AC Service",                            url: "" },
  { name: "Whirlpool AC Repair",                           url: "" },
  { name: "Daewoo AC Cleaning",                            url: "" },
];

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

const CommonACProblems = memo(() => (
  <section className="section cs_py_30" style={{ contain: 'layout style' }}>
    <div className="container">
      <h2 className="text-center">Most Common AC Problems That May Require Maintenance</h2>
      <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
        {PROBLEMS.map((problem) => (
          <div key={problem.title} className="col-12 col-md-4 col-lg-3">
            <div className="box-content-container rounded border shadow">
              <div className="text-center">
                <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">{problem.title}</h3>
              </div>
              <div className="inner-apcs-feat-desc">
                <p className="p-2 mb-0">{problem.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-0 mt-3">
        <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
          <WhatsappIconButton />
        </div>
      </div>
    </div>
  </section>
));

const BrandLinks = memo(() => (
  <p className="mt-2 mb-0">
    {BRANDS_LIST.map((brand, i) => (
      <span key={brand.name}>
        {brand.url ? <Link to={brand.url}>{brand.name}</Link> : brand.name}
        {i < BRANDS_LIST.length - 1 && <span>&nbsp;-&nbsp;</span>}
      </span>
    ))}
  </p>
));

const ACBrandsSection = memo(() => (
  <section className="section cs_py_30" style={{ contain: 'layout style' }}>
    <div className="container">
      <h3 className="cs_fs_24 text-align-left">We specialise in air conditioning services for the following brands</h3>
      <ul className="mb-3">
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/"><strong>Daikin Air Conditioning Services</strong></a><strong>:</strong> Daikin, a Japanese manufacturer, claims to be "the world's number one air conditioning company." Founded in 1924, it has developed a strong international presence through its focus on quality, innovation, and effective communication. We work with Daikin air conditioning products because the company continuously invests in research and development.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/gree/"><strong>Gree AC Repair and Service</strong></a><strong>:</strong> Gree Electric Appliances, Inc., founded in 1991 in Zhuhai, is a key player in the global air conditioning market. Starting with air conditioners, Gree has expanded its product line to include various home appliances and became China's largest air conditioner manufacturer by 2000.</li>
        <li><strong>O General AC Repair and Maintenance</strong><strong>:</strong> O General AC, a brand of Fujitsu General, is renowned for its Japanese engineering and high-quality air conditioning solutions.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/mitsubishi/"><strong>Mitsubishi AC Service and Repair</strong></a><strong>:</strong> Founded in 1954, Mitsubishi Air Conditioning has been producing air conditioning systems for nearly 75 years and is renowned for its reliability and energy efficiency.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/"><strong>Samsung AC Maintenance Service</strong></a><strong>:</strong> Samsung AC is a globally recognized name, known for pushing boundaries. Since 1969, they have continued to shape the future with innovative air conditioning technology.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/york/"><strong>York AC Servicing and Repair</strong></a><strong>:</strong> YORK® has been an industry leader since our founding in 1874.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/"><strong>LG AC Maintenance and Service</strong></a><strong>:</strong> LG history in air conditioning began in 1968 with the launch of its first unit.</li>
        <li><a href="https://www.fajservices.ae/services/air-conditioning-repair/brands/trane/"><strong>Trane HVAC Repair and Maintenance:</strong></a> Trane developed its first air conditioning unit in 1931.</li>
        <li><strong>Carrier AC Repair and Services in Dubai:</strong> Since 1902, Carrier HVAC has cultivated a history of proven innovation in the heating, air-conditioning and refrigeration industries.</li>
        <li><strong>Rheem AC Repair &amp; Service Near Me:</strong> Rheem AC was founded in 1925 in California, initially making steel drums. It quickly transitioned to manufacturing water heaters and, in the 1940s and 1950s, expanded into furnaces, split, central air conditioning systems to meet the growing demand for home comfort. Today, Rheem is a leading global HVAC provider known for its innovation and diverse heating and cooling solutions.</li>
      </ul>
      <BrandLinks />
      </div>
      </section>
      
));

const GallerySection = memo(() => (
  <section className="section gallery_section bg-light-gray cs_py_30" style={{ contain: 'layout style' }}>
    <div className="container">
      <h2>Gallery <Gallery /></h2>
      <div className="row gx-3 gy-2">
        {GALLERY_ITEMS.map(({ src, alt }) => (
          <div key={src} className="col-md-4 col-6">
            <img
              src={getImageSrc(src)}
              alt={alt}
              loading="lazy"
              width="400" height="300"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
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
  const metatitle       = String(titleSeo    || "Best AC Repair | HVAC Maintenance & AC Service in Dubai");
  const metadescription = String(description || "Top AC Service and AC Repair - FAJ has been providing fast air conditioning maintenance, servicing & cleaning from expert technicians near you in Dubai");
  const metaAuthor      = String(Author  || "FAJ Technical Services L.L.C");
  const metaURL         = String(URL     || "https://www.fajservices.ae/services/air-conditioning-repair/ac-service/");
  const metaImage       = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/What-is-covered-in-an-AC-Maintenance-Contract/public";

  const [faqData,         setFaqData]         = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [openItemIndex,   setOpenItemIndex]   = useState(0);

  const [faqSectionRef,         faqSectionInView]         = useInView();
  const [testimonialSectionRef, testimonialSectionInView] = useInView();

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
            <h1 className="cs_fs_30">Best AC Repair and Maintenance Services</h1>
            <p>Improve the comfort of your home and business premises with air conditioning cooling. Maintain a perfect temperature year-round with our expert AC technicians.<br/>High energy bills and inefficient cooling can result from improper or irregular maintenance of AC systems. This is why regular AC maintenance is important to avoid unnecessary expenses in the future.<br/>To help you maintain your comfort and prevent any problems, FAJ Technical Services L.L.C offers for home, office, and commercial affordable AC Repair, AC cleaning, AC Service, and AC repair service near you. Our goal is to ensure your AC system operates efficiently and minimises energy consumption.
            </p>
            <div className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        <PriceCard />

        {/* Our AC Repair & Service */}
        <section className="section cs_py_30 pb-0">
          <div className="container">
            <div className="row gx-md-5 expert_section_wrapper">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left">Our AC Repair &amp; Service</h2>
                <p className="mb-1">
                  When looking for{' '}
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/">AC repair &amp; service in Dubai</a>,
                  choose a qualified and reputable company that meets your residential or commercial needs.
                </p>
                <p className="mb-1">
                  FAJ Skilled AC technicians can quickly diagnose issues, providing your HVAC system runs
                  efficiently. This improves comfort during hot months and reduces Dewa bill costs,
                  providing peace of mind with your AC cooling solutions.
                </p>
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
                      <li><a href="https://www.dewa.gov.ae/en/consumer/sustainability/sustainability-and-conservation/cooling"><b>High AC electricity (DEWA) bills</b></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <YouTubeFacade videoId="prUR0-lZlzg" title="Air Conditioning Repair Services: Your Home's Cooling Solution | FAJ" />
              </div>
            </div>
            <div className="appointment-col mt-3">
              <div className="appointment-col-inner-wrappper">
                <h2 className="cs_fs_24 mb-1 mt-0">Our Express and Emergency AC Repair Service in Dubai</h2>
                <p>If you are facing any problem in your air conditioning service at home or in your business, especially during the summer time, our same day and express AC repair service is here to help. Get the fastest best AC repair service in Dubai today. Contact us for a quote or to schedule your emergency AC repair appointment.</p>
              </div>
              <div className="mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                  <WhatsappIconButton />
                  <Suspense fallback={<ButtonPlaceholder />}><CallNowButton /></Suspense>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LazySection minHeight="300px"><FAJACPrice /></LazySection>

        {/* Why AC Maintenance Important */}
        <LazySection minHeight="400px">
          <section className="section cs_py_30 bg-light-gray" style={{ contain: 'layout style' }}>
            <div className="container">
              <h2 className="cs_fs_30">Why is AC Maintenance Important in Dubai, UAE?</h2>
              <p>Regular AC maintenance and services in Dubai are necessary for optimal performance. FAJ offers complete AC cleaning services to keep your AC system running efficiently. With our proactive process, you can feel confident that AC is working at its best. If you need AC maintenance and air conditioning service near you, contact us.</p>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    className="blue-border"
                    src={getImageSrc('What-is-covered-in-an-AC-Maintenance-Contract')}
                    alt="AC Maintenance in Dubai"
                    loading="lazy"
                    width="600" height="400"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="col-md-6">
                  <ul className="mb-0">
                    <li><strong>Dubai Hot Weather:</strong> In hot Dubai Summer where temperature increases above 40°C (104°F) Regular AC maintenance keeps it efficient during these conditions.</li>
                    <li><strong>Energy Efficiency:</strong> A well-maintained AC operates more efficiently, using less energy and lowering both AC electricity bills.</li>
                    <li><strong>Longevity of AC Unit:</strong> Regular AC maintenance can extend your air conditioning unit's lifespan, reducing the need for costly repair work and Genuine <a href="https://www.fajtradingllc.com/collections/ac-spare-parts"><strong>AC spare parts</strong></a> replacements, ultimately saving you money.</li>
                    <li><strong>Improved Air Quality:</strong> Regular AC unit &amp; AC duct cleaning service &amp; maintenance keep dust and allergens from building up, ensuring cleaner air.</li>
                    <li><strong>Improved Comfort:</strong> Regular <strong>AC servicing</strong> in Dubai ensures comfort, efficiency, and even cooling daily.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        <LazySection minHeight="350px"><CommonACProblems /></LazySection>

        {/* How to use FAJ */}
        <section className="section cs_py_30 bg-light-blue-section" style={{ contain: 'layout style' }}>
          <div className="container">
            <h2 className="cs_fs_28">How to use FAJ AC Service and AC Repair in Dubai?</h2>
            <p className="cs-fs_14">Are you searching for reliable air conditioning services in Dubai? FAJ Technical Services L.L.C provides excellent AC repair and AC cleaning service right at your doorstep. Our team of experts is committed to providing your comfort with excellent service.</p>
            <div className="service-cards-grid">
              <div className="service-card-item"><h3>AC Repair in Dubai for Improved Performance:</h3><p className="cs_fs_14">Is your AC not cooling effectively? Our AC technicians can diagnose and fix AC errors.</p></div>
              <div className="service-card-item"><h3>Regular AC Cleaning for Maximum Efficiency:</h3><p className="cs_fs_14">For optimal performance, keep your AC cleaning. We offer AC duct cleaning and filters for fresh, healthy air.</p></div>
              <div className="service-card-item"><h3>Essential AC Maintenance Service Dubai:</h3><p className="cs_fs_14">Regular AC maintenance is necessary. Our services help prepare your AC for the summer heat.</p></div>
              <div className="service-card-item"><h3>Assistance with New AC Installation:</h3><p className="cs_fs_14">Upgrading to a <a href="https://www.fajtradingllc.com/collections/air-conditioners"><strong>New AC</strong></a> unit? Let our AC experts handle the selection, installation, and testing!</p></div>
              <div className="service-card-item"><h3>Emergency AC Repair in Dubai:</h3><p className="cs_fs_14">Experiencing unexpected AC breakdowns? Our 7-day emergency AC repairs is available to provide quick service.</p></div>
              <div className="service-card-item"><h3>AC Service Dubai Available Near Me Before Summer:</h3><p className="cs_fs_14">Get ready for summer! Schedule your AC tune up to ensure comfort during the heat.</p></div>
            </div>
            <div className="service-footer-text">
              <h3 className="cs_fs_24">Schedule your FAJ AC Cleaning, AC Repair &amp; Maintenance Services today!</h3>
              <p className="cs_fs_14">For reliable AC service and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time. Book now by calling, emailing, chatting on WhatsApp, or visiting our website to experience the difference!</p>
            </div>
          </div>
        </section>
         <LazySection minHeight="400px">
          <section className="section cs_py_30" style={{ contain: 'layout style' }}>
            <div className="container">
              <h2 className="cs_fs_30">Best AC Cleaning & AC Service in Dubai and Sharjah</h2>
              <p>Discover top-rated AC cleaning, maintenance, and air conditioner repair services in Dubai. Keep your space cool and comfortable with professional solutions tailored to your needs.</p>
              <div className="row align-items-center">
                
                <div className="col-md-6">
                  <p className="mb-0"><strong>Key to the Best AC Cleaning Services Near You</strong><br />If you are looking for the best AC deep cleaning and services in Dubai and Sharjah, consider the following key aspects:</p>
                  <ul className="mb-1">
                    <li><strong>Residential &amp; Office AC Cleaning and Service:</strong>Regular, professional maintenance is essential for stopping dust, bacteria, and allergens to provide safe, breathable air.</li>
                    <li><strong>Commercial / HVAC Cleaning:</strong> Specialised cleaning for large systems involves removing debris from ductwork and air handling units, often in accordance with ventilation hygiene standards.</li>
                  </ul>
                  <p className="mb-0"><strong>Key Benefits:</strong> Regular coils cleaning, air filter cleaning, duct cleaning lowers electricity bills, extends the lifespan of equipment, prevents breakdowns, and eliminates unpleasant odours.<br /><strong>Signs Your AC Needs Cleaning</strong></p>
                  <ul className="mb-0">
                    <li>Noticeably reduced airflow.</li>
                    <li>Visible dust accumulation around vents.</li>
                    <li>Unusual or musty odors.</li>
                    <li>Increased DEWA bills</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <img
                    className="blue-border"
                    src={getImageSrc('ac-cleaning-service')}
                    alt="AC Maintenance in Dubai"
                    loading="lazy"
                    width="600" height="400"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </section>
        </LazySection>
        {/* Benefits */}
        <section className="section ac_benifit_blue" style={{ contain: 'layout style' }}>
          <div className="container">
            <div className="text-center">
              <h2 className="cs_fs_30 text-light my-5">Benefits Of Regular AC Service and Maintenance in Dubai</h2>
              <div className="row mt-4 gx-4 gy-4">
                {BENEFITS.map(({ Icon, title: t, desc }) => (
                  <div key={t} className="col-md-4 mb-5">
                    <div className="benefit_wrapper_box d-flex flex-column align-items-center px-2">
                      <div className="mb-3 benefit_wrapper_box_icon" style={{ width: "80px", height: "80px" }}>
                        <Icon />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6">{t}</h3>
                      <p className="small">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <LazySection minHeight="300px"><ACWhyChooseUs /></LazySection>

        <LazySection minHeight="400px">
          <BeforeAfter
            title="Recent Completed Service"
            subTitle="Before & After Service"
            bgImg={getImageSrc('background-image-2')}
            beforeImg={getImageSrc('after_img_1')}
            afterTitle="After"
            afterImg={getImageSrc('before_img_1')}
            beforeTitle="Before"
          />
        </LazySection>

        <LazySection minHeight="400px"><ACBrandsSection /></LazySection>
        <section className="section cs_py_30 bg-dark-blue" style={{ contain: 'layout style' }}>
          <div className="container">
            <div className="d-flex justify-content-center mt-3 text-light">
              <div className="col-md-7 mb-3 mb-md-0"> 
                <h3 className="cs_fs_20 text-align-left text-light" ><strong>Key AC Spare Parts Weak to Damage from Dubai&rsquo;s Summer Weather:</strong></h3>
                <ul>
                  <li><strong>AC Compressor Replacement:</strong> As the &ldquo;heart&rdquo; of the AC, high heat and overworking can lead to overheating, gas blockage, liquid slugging, low gas levels, electrical issues, a clogged filter, and complete failure. Contact us for AC compressor replacement and testing.</li>
                  <li><strong>AC Capacitors / Contactors:</strong> These electrical AC parts, responsible for starting the AC motor and fan, often fail due to extreme heat and constant operation.</li>
                  <li><strong>AC Air Filters:</strong> A dirty AC unit or a clogged filter hinders airflow, making the system overwork and risk overheating.</li>
                  <li><strong>AC Coils Evaporator &amp; Condenser Coils: </strong>Dirt accumulation reduces heat exchange efficiency, while limited airflow can cause the evaporator coil to freeze.</li>
                  <li><strong>AC Motors:</strong> Ongoing process can cause burnout or damage to the AC motor bearings, often indicated by greasy residue on the HVAC motor.</li>
                  <li><strong>AC Electrical Connections:</strong> Excessive heat can damage insulation, while overuse can result in loose or damaged wiring, leading to short circuits.</li>
                </ul>
                <p><strong>Air Conditioning Tip:</strong> To stop damage, keep the AC outdoor unit free of dust, replace filters every 15 to 20 days, and set the AC temperature between 24&deg;C and 26&deg;C during the summer heat in Dubai, UAE.</p>
              </div>
              <div className="col-md-5 px-md-4">
                <h3 className="cs_fs_20 text-align-left"><strong>Key AC Repair Services &amp; Common Issues</strong></h3>
                <ul>
                  <li><strong>Emergency AC Repair: </strong>Urgent 7-day AC repair and service for breakdowns is available from providers like FAJ Technical Services L.L.C and AC Repairman.</li>
                  <li><strong>AC (Gas) Refrigerant Issues:</strong> Repairing AC gas leaks in AC units and AC gas filling to repair cooling efficiency is offered by FAJ.</li>
                  <li><strong>AC Spare Parts Repair / Replacement:</strong> Fixing of AC compressors, AC condenser coils, AC motors or AC thermostat.</li>
                  <li><strong>AC Electrical Issues:</strong> Addressing faulty AC thermostats, AC sensors, and AC (PCB) control modules.</li>
                  <li><strong>AC Airflow / Noise Problems:</strong> Fixing AC fan motors, AC clearing dust, and AC coils cleaning</li>
                </ul>
              </div>
            </div>
            <div className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <Suspense fallback={<ButtonPlaceholder />}><GetQuoteButton /></Suspense>
                <Suspense fallback={<ButtonPlaceholder />}><CallNowButton /></Suspense>
              </div>
            </div>
          </div>
        </section>
        <LazySection minHeight="300px"><GallerySection /></LazySection>
        <LazySection minHeight="300px"><Practicaltip /></LazySection>
        <LazySection minHeight="300px"><AcProperties /></LazySection>
        <LazySection minHeight="300px"><MaintenanceContract /></LazySection>

        <div ref={testimonialSectionRef} style={{ minHeight: '400px' }}>
          {testimonialSectionInView && testimonialData.length > 0 && (
            <Suspense fallback={<div style={{ height: '400px', background: '#f5f5f5' }} />}>
              <Testimonial1
                subtitle="What Our Clients Say"
                title="Customer <span>Reviews</span>"
                bgImg={getImageSrc('testimonialbg')}
                testimonialData={testimonialData}
                sectionId="ac-service-testimonials"
              />
            </Suspense>
          )}
        </div>

        <LazySection minHeight="300px"><Blog2 /></LazySection>

        {/* Book Appointment */}
        <LazySection minHeight="200px">
          <section className="section cs_py_30 bg-dark-blue text-light">
            <Serviceappointemnt subtitle2="Contact us" title2="Book An Appointment" />
          </section>
        </LazySection>
        <div ref={faqSectionRef} style={{ minHeight: '300px' }}>
          {faqSectionInView && (
            <FAQSection
              data={faqData}
              openItemIndex={openItemIndex}
              onItemClick={handleItemClick}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default memo(AcServiceInDubai);
