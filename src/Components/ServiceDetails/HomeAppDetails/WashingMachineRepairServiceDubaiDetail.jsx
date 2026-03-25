import { useEffect, useRef, useState, useCallback, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Serviceappointemnt = lazy(() => import('../../Contact/Serviceappointemnt'));
const MaintenanceContract = lazy(() => import('../../MaintenanceContract/MaintenanceContract'));
const BlogWashingMachine = lazy(() => import("../../Blog/BlogWashingMachine"));
const BrandsSliderSection = lazy(() => import("../../BrandsSliderSection"));
const Testimonial1 = lazy(() => import("../../Testimonial/Testimonial1"));
import HeaderForm from "../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import PriceCardHomeCat from "../../Services/homeappliances/PriceCardHomeappCat";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
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
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

const WashingMachineRepairServiceDubaiDetail = ({titleSeo, description,Author,Keyword,URL,Image,subtitle,titlereview,reviewsbg
}) => {
  const metaTitle = String(titleSeo || "Washing Machine Repair & Maintenance Service in Dubai");

  const metaDescription = String(description || "Call now for quick washing machine repair Dubai. FAJ is an expert in washer dryer, laundry machine maintenance and service center in Dubai near me.");

  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");

  const metaKeyword = String(Keyword || "Washing Machine Repair, Washing Machine Maintenance, Washing Machine Service");

  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/washing-machine-repair-service-dubai/");

  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/small-mixer-service/public");
const schema ={
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Washing Machine Repair Service Dubai - FAJ Technical Services L.L.C",
      "image": ["https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/washing-machine-repair-service-dubai/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3440",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Washing Machine Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Washing Machine Services",
            "itemListElement": [  
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Front Load Washing Machine Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Top Load Washing Machine Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Washing Machine Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Washing Machine Maintenance" } }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "LEENU JACOB" },
          "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
          "reviewBody": "Very satisfied with the washing machine service. Quick response and efficient repair."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "KARTHIKA" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Same-day inspection and helpful technician. Smooth repair process."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "CHRISTDAI ALBURO" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Arrived quickly and fixed the washing machine without delay."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "DUNJA LAZOVIC" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Fast quote, quick repair, and smooth reinstallation."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/home-appliances-repair/washing-machine-repair-service-dubai/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I know if my washing machine needs repair?",
          "acceptedAnswer": { "@type": "Answer", "text": "Common signs include leaks, excessive noise, failure to start, spinning or draining issues, vibrations, or error codes." }
        },
        {
          "@type": "Question",
          "name": "How much will the washing machine repair cost?",
          "acceptedAnswer": { "@type": "Answer", "text": "Cost depends on the issue and required parts. A transparent estimate is provided after diagnosis." }
        },
        {
          "@type": "Question",
          "name": "Should I attempt to repair the washing machine myself?",
          "acceptedAnswer": { "@type": "Answer", "text": "Professional repair is recommended to avoid damage or injury." }
        },
        {
          "@type": "Question",
          "name": "What parts fail in a washing machine?",
          "acceptedAnswer": { "@type": "Answer", "text": "Motor, pump, belts, hoses, and control panel commonly fail due to wear and tear." }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/home-appliances-repair/washing-machine-repair-service-dubai/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fajservices.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.fajservices.ae/services/" },
        { "@type": "ListItem", "position": 3, "name": "Home Appliances Repair", "item": "https://www.fajservices.ae/services/home-appliances-repair/" },
        { "@type": "ListItem", "position": 4, "name": "Washing Machine Repair Service Dubai", "item": "https://www.fajservices.ae/services/home-appliances-repair/washing-machine-repair-service-dubai/" }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "Washing Machine Repair Service Dubai | Fixing Washing Machine At Home | FAJ",
      "description": "Are you tired of dealing with a malfunctioning washing machine? Do you need expert guidance to fix it near you? You're in the right place! In this video, we bring you the ultimate guide to addressing the common issue of a Washing Machine Near Me in partnership with FAJ, your go-to experts in appliance repair. Expert Solutions with FAJ Technical Services LLC. At FAJ, we have over a decade of experience in providing top-notch solutions for your appliance problems.",
      "thumbnailUrl": "https://img.youtube.com/vi/EnSAQA_AjzY/maxresdefault.jpg",
      "uploadDate": "2023-09-27T06:50:01Z",
      "duration": "PT1M10S",
      "embedUrl": "https://www.youtube.com/embed/EnSAQA_AjzY",
      "keywords": [
        "Washing Machine Repair Service Dubai",
        "Fixing Washing Machine At Home",
        "FAJ Technical Services LLC",
        "Washing machine repair near me",
        "Tumble dryer repair Dubai",
        "Washing machine leakage fix",
        "Domestic and commercial laundry repair",
        "Appliance inspection deals Dubai",
        "AMC for washing machines"
      ],
      "hasPart": [
        { "@type": "Clip", "name": "Common Washing Machine & Dryer Issues", "startOffset": 0, "endOffset": 37, "url": "https://www.youtube.com/watch?v=EnSAQA_AjzY&t=0s" },
        { "@type": "Clip", "name": "Dependable Repair & AMC Services", "startOffset": 38, "endOffset": 53, "url": "https://www.youtube.com/watch?v=EnSAQA_AjzY&t=38s" },
        { "@type": "Clip", "name": "Special Deals on Appliance Inspections", "startOffset": 54, "endOffset": 70, "url": "https://www.youtube.com/watch?v=EnSAQA_AjzY&t=54s" }
      ],
      "potentialAction": { "@type": "WatchAction", "target": "https://www.youtube.com/watch?v=EnSAQA_AjzY" }
    }
  ]
}

  subtitle = "Testimonial"
  titlereview = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')


  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const washingmachineServicesData = [
    {
      id: 1,
      image: getImageSrc('applycalouthome'),
      title: 'Appliance Call-out',
      icon: getImageSrc('calloutcard'),
      price: 'AED157',
      arrow: getImageSrc('iconreadmore'),
      description: 'Just tell us about your faulty appliance, and we will provide a quote for repair / parts. Our technician will arrive at a time that is suitable for you.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=AC%20Call-Out',
      popupTitle: 'Appliance Call-out  scope of work:',
      sections: [
        {
          items: [
            'Inspection visit fee',
            'Rectification of faults',
            'Cost of minor repair work',
            'Transportation pricing for services',
            'Technical inspection onsite or workshop',
            'Pick-up, drop-off, and reinstallation onsite',
            'A quotation can be provided via call, WhatsApp, or email if needed.',
            'The same call-out fee applies for diagnosing either one or two appliances at the same place.'
          ]
        },
        {
          paragraph: '**Excluded:** <br> Cost for any repair work, procurement cost, cost of any new parts and installation, if required.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 157, callout fee applies based on the type, brand, capacity of the appliance unit, and location for each diagnosis.'
        },
      ]
    },
    {
      id: 2,
      image: getImageSrc('washing-machine-repair'),
      warranty: '50- Days Warranty',
      title: 'Appliance Cleaning',
      icon: getImageSrc('cleaningcard'),
      price: 'AED395',
      arrow: getImageSrc('iconreadmore'),
      description: 'Book reliable appliance cleaning professionals for your equipment. Our teams offer competitive pricing & limited-time availability across Dubai.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=Basic%20ACCleaning',
      popupTitle: 'Cleaning Appliances',
      sections: [
        {
          heading: 'Depending on quantities, capacity, type, model, and area.',
          items: [
            'Hob Cleaning',
            'Oven Cleaning',
            'Freezer Cleaning',
            'Gas Range Cleaning',
            'Dishwasher Cleaning',
            'Refrigerator Cleaning',
            'Hood / Chimney Cleaning',
            'Washing Machine Cleaning',
          ]
        },
        {
          paragraph: '**Excluded:** <br> Cost for any repair work, procurement cost, cost of any new parts and installation, if required.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 395 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.'
        },
      ]
    },
    {
      id: 3,
      image: getImageSrc('Washing-Machine-Repair-in-Dubai-Call-Out'),
      title: 'Home Appliances Installation',
      icon: getImageSrc('installationcard'),
      price: 'AED365',
      arrow: getImageSrc('iconreadmore'),
      description: 'FAJ expert technicians will provide assistance to install home appliances. Upgrade your kitchen with professional appliance installations!',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=AC Maintenance',
      popupTitle: 'Appliances Installation',
      sections: [
        {
          heading: 'Depending on quantities, capacity, type, model, and area.',
          items: [
            'Refrigerator Installation',
            'Dish Washer Installation',
            'Electric Cooker Installation',
            'Hood / Chimney Installation',
            'Washing Machine Installation',
            'Built-in Microwave Installation',
            'Built-in Dishwasher Installation',
          ]
        },
        {
          paragraph: '**Excluded:** <br> Costs related to MEP, carpentry, gypsum ceilings, painting, repair work, procurement-related installation parts / materials, and installation as needed.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 365 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.'
        },
      ]
    },
  ];
  // State for fetched data
  const [data, setData] = useState([]);
  const [testimonial_data, setTestimonialData] = useState([]);
  const [brandsLogo_data, setBrandsLogoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const openModal = useCallback((e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);
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
        const [faqsResponse, testimonialsResponse, brandsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/WashingmachineRepairServiceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/WashingMachineRepairServiceTestimonials.json`),
          fetch(`${import.meta.env.BASE_URL}data/AppliancesBrandsLogo.json`)
        ]);

        const faqsData = await faqsResponse.json();
        const testimonialsData = await testimonialsResponse.json();
        const brandsData = await brandsResponse.json();

        setData(faqsData);
        setTestimonialData(testimonialsData);
        setBrandsLogoData(brandsData);
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
            href={`${CDN}/The-Most-Common-Reasons-for-Appliance-Breakdowns/public`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={metaURL} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={metaImage} />
          <meta property="og:image:alt" content="Washing Machine Repair Service" />
          <meta property="og:site_name" content="FAJ Technical Services L.L.C" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={metaImage} />
          <meta name="twitter:image:alt" content="Washing Machine Repair Service" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="language" content="English" />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      </HelmetProvider>

      <HeaderForm />

      <div className="cs_service_details">
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Top Quality Washing Machine Repair and Service Center Near You, Dubai</h1>
            <p>Since 2010, FAJ Technical Services L.L.C has offered reliable installation, maintenance, and repair for all brands of washing machines, dryers, and laundry systems in Dubai and Sharjah.<br />Our experts are here to assist with any issues, from top-loading and front-loading washing machine repair and service near you. You can trust us to keep your washing machine running smoothly.<br /> You can rely on us for both routine repairs and emergency washing machine service. Contact us now for reliable services at competitive prices!</p>

            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        <PriceCardHomeCat  services={washingmachineServicesData}/>
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
                <p className="mb-2">At <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7"><b>FAJ Technical Services L.L.C</b></a>, we understand that appliance breakdowns never happen at a convenient time. That's why our trained and qualified technicians are here to provide you with reliable appliance repair services.</p>
              </div>

              <div className="col-md-6">
                <LazyYouTube videoId="EnSAQA_AjzY" title="Washing Machine Services" />
               
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
                  src={getImageSrc('washing-machine-repair')}
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

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Washing Machine Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Worn or Damaged Hoses</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Inspect the drain line and fill water hoses carefully for cracks in the pipe, loose inlet connections, or damaged pipe hoses.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Loose Connections</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ensure all water connections are tight and secure, especially at the water inlet valve from wall or from machine inlet.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faulty Door Seals or Gaskets</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Inspect the washing machine gasket for cracks and examine the rubber seals and gaskets around the washer door for damage.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faulty Drain Pump</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A faulty drain pump can prevent water from draining properly. Check for full damage or problems that could affect performance.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Clogged Drain Hose or Pump</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Clean the washing machine's drain hose and check for clogs or blockages in the drain pump or inlet pump filter.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Loud Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Grinding, rumbling, or humming washing machine noises may indicate motor, drum spider, or both bearing damage in machine.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Drum Doesn't Rotate</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A malfunctioning of washing machine PCB, motor or worn/faulty motor carbon brushes can prevent drum from spinning.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Door and Lid Switch Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A malfunctioning lid switch or a connection can prevent the washing machine from starting or cause it to stop mid-cycle.</p>
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

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR WASHING MACHINES</h2>
            <div className="row align-items-center">
              <div className="col-xl-6">
                 <OptimizedImage
                  className="bordered-img w-100"
                  src={getImageSrc('The-Most-Common-Reasons-for-Appliance-Breakdowns')}
                  alt="Washing Machine Repair"
                  width="600"
                  height="400"
                  priority={true}
                />
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

        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of Washing Machine Service Dubai</h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Ensuring-Safety')}
                        alt="Ensuring Safety"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h4>
                    <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Optimal-Performance')}
                        alt="Optimal Performance"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Optimal Performance</h4>
                    <p className="small">Regular maintenance helps your washing machine run smoothly and efficiently, delivering the best results every time.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Lower-Energy-Bills')}
                        alt="Lower Energy Bills"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h4>
                    <p className="small">Energy efficient washing machine translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Saving-Money-on-Repair')}
                        alt="Saving Money on Repair"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Saving Money on Repair</h4>
                    <p className="small">Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/extending')}
                        alt="Extending Appliance Lifespan"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Washing machine Lifespan</h4>
                    <p className="small">Proper care and timely servicing can significantly increase life of your home washing machine, delaying the need for replacements.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Peace-of-Mind')}
                        alt="Peace of Mind"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Peace of Mind</h4>
                    <p className="small">Knowing your washing machines are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>

            <div className="usps align-items-center">
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <OptimizedImage
                      src={getImageSrc('icon/fast-reliable')}
                      alt="Fast, Reliable Service"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="usptext">
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <OptimizedImage
                      src={getImageSrc('icon/experts')}
                      alt="We Are Experts"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>With <Link to="/services/home-appliances-repair/appliances-amc-service/">maintenance contract</Link>, you get a full year of service, ensuring your washing machine runs smoothly and providing peace of mind.</p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <OptimizedImage
                      src={getImageSrc('icon/full-control')}
                      alt="You Are in Control"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your washing machine repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <OptimizedImage
                  src={getImageSrc('fajteam')}
                  alt="FAJ Team Mobile"
                  width="400"
                  height="700"
                />
              </div>
              <div className="uspdelimit col-2 d-none d-xl-block">
                <OptimizedImage
                  className="blue-border-2 w-100 why-choose-img"
                  src={getImageSrc('fajteam-1-new')}
                  alt="FAJ Team"
                  width="400"
                  height="600"
                />
              </div>

              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <OptimizedImage
                      src={getImageSrc('icon/value')}
                      alt="We Are Experts"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We are experts in washing machine repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <OptimizedImage
                      src={getImageSrc('icon/confidence-guarantee')}
                      alt="Great Value"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two washing machine at the same location in Dubai.</p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <OptimizedImage
                      src={getImageSrc('icon/trustworthy')}
                      alt="Trustworthy"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our skilled washing machine technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <h3>We specialise in Washing Machine Services for the following brands</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/lg/"><strong>LG Washing Machine Repair</strong></a><strong>: </strong>FAJ is here to help with your LG washing machine problems. We understand how important it is for your daily routine to keep your laundry fresh and clean. Whether you need express washing machine repair near me or thorough washing machine cleaning service nearby in Dubai, our expert team is ready to assist you. Contact us for reliable support and ensure your appliance runs smoothly.</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/samsung/"><strong>Samsung Washing Machine Repair</strong></a><strong>:</strong> Having trouble with your washing machine or dryer? You're in the perfect spot! Reach out to the FAJ team for trustworthy same-day washing machine repair and dryer service near me in Dubai. Our skilled washing machine technicians will swiftly diagnose and fix washing machine, washer dryer maintenance, and dryer repair, getting them back to peak performance in no time. We're excited to help you get your laundry back on track!</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/electrolux/"><strong>Electrolux Washing Machine Repair</strong></a><strong>: </strong>If you need Electrolux washing machine repair or Electrolux washing machine service near you in Dubai, our team of professional and qualified washing machine technicians is available throughout Dubai and Sharjah. We offer expert washer dryer repair and maintenance services nearby. For reliable washing machine repair, look for washing machine cleaning service near you in Dubai.</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/"><strong>Bosch Washing Machine Repair</strong></a><strong>:</strong> If you're searching for the best Bosch washing machine repair company in Dubai, FAJ is the perfect choice. They are recognised for delivering exceptional washing machine service for all Bosch home appliance repair and are recognized as the leading Bosch washing machine service and maintenance near by you in the region. They also offer express dryer repair, washer dryer service, and maintenance in both Dubai and Sharjah.</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/"><strong>Viking Washing Machine Repair</strong></a><strong>:</strong> Your Viking appliances may need repair or maintenance, and we can help. For high-quality Viking washing machine repair in Dubai, rely on FAJ. Get reliable washer dryer maintenance and service, and find washing machine services nearby in Dubai.</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/daewoo/"><strong>Daewoo Washing Machine Repair</strong></a><strong>:</strong> We provide expert washing machine repair and near me services in Dubai. Our skilled washer dryer technicians have the knowledge and expertise to diagnose and fix washing machine issues with Daewoo refrigerator, dishwasher, dryer and more.&nbsp;</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/siemens/"><strong>Siemens Washing Machine Repair</strong></a><strong>: </strong>Are you worried about your Siemens washing machine malfunctioning? Searching for a reliable washer dryer maintenance service in Dubai? Contact us for same-day service for washing machine cleaning service, dryer repair, and washer dryer maintenance!</p>
                <p className="mb-"><a href="https://www.fajservices.ae/services/home-appliances-repair/brands/teka/"><strong>Teka Washing Machine Repair</strong></a><strong>:</strong> For reliable Teka washing machine repair in Dubai, FAJ is your best choice. They are renowned for their exceptional washer dryer maintenance services for Teka appliances, including washing machine cleaning service, fixing dryer, washer dryer repair or maintenance near me service, refrigerators, and ovens. FAJ is the top-rated service provider for Teka appliances in the area, guaranteeing quality and customer satisfaction.</p>
                <p><b>Get an Expert Tumble Dryer Repair today:</b> Contact us today for same-day repair service of Samsung dryer, LG dryer, Electrolux dryer, Miele dryer machine, Maytag dryer, Siemens dryer, Bosch tumble dryer, Whirlpool dryer machine, Gaggenau clothes dryer, Frigidaire dryer, and White Westinghouse dryers. Our service center near me Dubai offers maintenance as well.</p>
                <p className="mb-0">
                  <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/aeg/">AEG</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/ariston/">Ariston</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/beko/">Beko</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/blomberg/">Blomberg</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/faber/">Faber</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/fagor/">Fagor</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/fisher-paykel/">Fisher and Paykel</a>  | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/foster/">Foster</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/gaggenau/">Gaggenau</a>| <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hitachi/">Hitachi</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hoover/">Hoover</a>| <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/indesit/">Indesit</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/neff/">Neff</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/smeg/">Smeg</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sub-zero/">Sub Zero</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/terim/">Terim</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/">Viking</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/whirlpool/">Whirlpool</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/zanussi/">Zanussi</a> | <a href="/services/home-appliances-repair/brands/de-dietrich/">De Dietrich</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/baumatic/">Baumatic</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/bertazzoni/">Bertazzoni</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/bompani/">Bompani</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/boston/">Boston</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/brandt/">Brandt</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/gibson/">Gibson</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/gorenje/">Gorenje</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/hisense/">Hisense</a> |&nbsp;<a href="https://www.fajservices.ae/services/home-appliances-repair/brands/kelvinator/">Kelvinator</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/kenmore/">Kenmore</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/panasonic/">Panasonic</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sanyo/">Sanyo</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sears/">Sears</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/wolf/">Wolf</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/haier/">Haier</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/elica/">Elica</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/marvel/">Marvel</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/miele/">Miele</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/maytag/">Maytag</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/toshiba/">Toshiba</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/thermador/">Thermador</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/sharp/">Sharp</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/admiral/">Admiral</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/aftron/">Aftron</a> | <a href="https://www.fajservices.ae/services/home-appliances-repair/brands/unimac/">Unimac</a></p>
              </div>

            </div>

            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>

          </div>
        </section>

        {/* Brands section */}
        {!isLoading && brandsLogo_data.length > 0 && (
          <BrandsSliderSection
            brandsData={brandsLogo_data.map(item => ({
              ...item,
              logo: getImageSrc(item.logo)
            }))}
            sectionId="home-brands"
            logoMaxHeight="60px"
            logoMaxWidth="120px"
            containerHeight="100px"
          />
        )}

        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <MaintenanceContract />
        </Suspense>

        <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
          {!isLoading && testimonial_data.length > 0 && (
            <Testimonial1
              subtitle="What Our Clients Say"
              titlereview="Customer <span>Reviews</span>"
              bgImg={reviewsbg}
              testimonialData={testimonial_data}
              sectionId="home-testimonials"
            />
          )}
        </Suspense>

        <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
          <BlogWashingMachine />
        </Suspense>

        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <Serviceappointemnt subtitle2="Contact us" title2="Book An Appointment" />
        </Suspense>
        {/* Faqs */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
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
  );
};

export default WashingMachineRepairServiceDubaiDetail;