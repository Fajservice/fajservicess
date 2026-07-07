import { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import HeaderForm from "../../../Headeform/HeaderForm";
import Practicaltip from "../../../Common/Practicaltip";
import AcProperties from "../../../Common/AcProperties";
import AcAppointmentCol from "../../../Common/AcAppointmentCol";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";
import AcBrandBenifit from "./ACBrandComponents/ACBrandBenifit.jsx";
import PriceCard from "../AcLocation/PriceCard.jsx";
import BeforeAfter from "../../../BeforeAfter/BeforeAfter.jsx";
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

const GoodmanAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "Expert Goodman AC Repair and Cleaning Services in Dubai");
  const metadescription = String(description || "When your AC isn't cooling, learn what to expect when you have to make that urgent HVAC service call, FAJ for Goodman AC repair and services in Dubai");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Goodman AC Repair Dubai, Goodman Air Conditioner Service, Goodman AC Maintenance Dubai, Goodman Air Conditioning Repair, Goodman AC Cleaning");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/brands/goodman/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public");


  subtitle = "Testimonial"
  title = "What our clients say <br> About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const [data, setData] = useState([]);
  const [testimonial_data, setTestimonialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Goodman AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/air-conditioning-repair/brands/goodman/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1100",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Goodman AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Goodman AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Goodman Split AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Goodman Central AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Goodman AC Maintenance" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Goodman AC Gas Refilling" }
              }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Khalid A." },
          "reviewBody": "FAJ Technical Services fixed my Goodman AC promptly in Jumeirah. The technician was professional and explained the issue clearly. Highly recommended!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Reem S." },
          "reviewBody": "Our Goodman AC was not cooling due to low gas. FAJ team refilled it and checked the system thoroughly. Efficient and reliable service."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Omar H." },
          "reviewBody": "Scheduled maintenance for my Goodman AC and the filters, coils, and compressor were serviced perfectly. Very satisfied!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Lina T." },
          "reviewBody": "Excellent Goodman AC repair by FAJ. Technician arrived on time, worked efficiently, and ensured my AC worked perfectly."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/goodman/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the E6 error in Goodman AC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The E6 error code in air conditioners usually indicates a communication failure between the indoor and outdoor units. This issue disrupts the synchronised operation of the system, leading to reduced cooling efficiency."
          }
        },
        {
          "@type": "Question",
          "name": "What is the error code H3 on Goodman AC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The H3 error code typically indicates a refrigerant leak in the AC system. Refrigerant is crucial for the cooling process, and a leak can lead to reduced cooling efficiency or even a total failure of the AC system."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my Goodman AC not cooling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the Goodman air conditioner is not cooling, the compressor may be defective. The compressor is a motor that compresses the refrigerant and circulates it through the evaporator and condenser coils. If the compressor fails, the cooling cycle does not initiate, and the Goodman air conditioner will not cool properly."
          }
        },
        {
          "@type": "Question",
          "name": "What are the reasons for the Goodman AC not cooling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Here are the five most common causes of not cooling the Goodman AC and how to solve it:\n- Your outdoor unit requires additional maintenance due to exposure to sunlight, rain, and debris.\n- Unfitted AC unit.\n- AC Clogged filter\n- AC Low Gas\n- The broken thermistor on the outdoor aircon unit"
          }
        },
        {
          "@type": "Question",
          "name": "What is the benefit of VRF?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With VRF technology, it's easy to heat and cool only the spaces that require it. These systems circulate just the right amount of refrigerant needed for each individual zone to meet the building's demands. Since they do not use ducts, this approach eliminates the energy waste typically associated with duct losses."
          }
        },
        {
          "@type": "Question",
          "name": "What is the ideal temperature for a baby's / kids room?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When it comes to room temperature, if you feel that it's too cold, your baby likely feels the same way, and the same goes for warmth. Therefore, it's advisable to maintain a temperature between 68 and 72 degrees Fahrenheit, which is comfortable for both summer and winter."
          }
        },
        {
          "@type": "Question",
          "name": "What temperature should I set my AC in summer in Dubai, UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During the summer, the ideal room temperature is between 22 and 26 degrees Celsius. This range is considered comfortable for most people, as it helps keep the room cool while ensuring a pleasant living environment, as said by FAJ Engineer Malik Tayyeb."
          }
        }
      ]
    },
   {
  "@type": "BreadcrumbList",
  "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/goodman/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.fajservices.ae/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.fajservices.ae/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Air Conditioning Repair",
      "item": "https://www.fajservices.ae/services/air-conditioning-repair/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Brands",
      "item": "https://www.fajservices.ae/services/air-conditioning-repair/brands/"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Goodman",
      "item": "https://www.fajservices.ae/services/air-conditioning-repair/brands/goodman/"
    }
  ]
}

  ]
}

  
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
        const [faqsResponse, testimonialsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcBrand/GoodmanAcRepairfaq.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/GoodmanAcServiceTestimonials.json`)
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
          <meta name="description" content={metadescription} />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={metatitle} />
          <meta property="og:description" content={metadescription} />
          <meta property="og:url" content={metaURL} />
          <meta property="og:image" content={metaImage} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:image" content={metaImage} />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
          
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">
        {/* intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Top-Rated Goodman AC Repair and Goodman AC Maintenance Services in Dubai, UAE</h1>
            <p>
              Experience year-round comfort by eliminating sticky summer days, stuffy nights, and allergens with clean air.
              <br />Since 2010, <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7">FAJ Technical Services L.L.C</a> has been providing reliable Goodman air conditioning solutions in Dubai and Sharjah. Our expert team specializes in Goodman AC cleaning service, repair, maintenance and installation of a wide range of residential and commercial AC units to ensure optimal performance and comfort.
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>

        <PriceCard />

        {/* 2 col */}
        <section className="section cs_py_30">
          <div className="container">
            <div className="row gx-md-5 align-items-center expert_section_wrapper">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left" style={{ fontSize: "24px" }}>Goodman AC Maintenance and Servicing</h2>

                <p className="mb-2">
                  When it comes to the repair of Goodman air conditioning units, it is crucial to select a highly skilled AC technician.
                  <br />Our dedicated team specializes in air conditioning service and maintenance throughout Dubai and Sharjah. <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ</a> is committed to delivering reliable solutions that enhance indoor comfort throughout the year while ensuring the efficient operation of your system.
                </p>

                <h2 className="cs_fs_24 mb-1 pt-1 mt-0 text-align-left" style={{ fontSize: "24px" }}>Top Common Signs That You Need Goodman AC Maintenance</h2>
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
              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('acfilterinner')}  alt="Goodman AC Service" />
              </div>
            </div>
            <AcAppointmentCol></AcAppointmentCol>
          </div>
        </section>

        {/* AC Price Section */}
        <FAJACPrice></FAJACPrice>

        {/* Why*/}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">

            <h2 className="cs_fs_30">Why is Goodman AC Maintenance Service Important in Dubai?</h2>
            <p>
              To keep your Goodman air conditioner running efficiently in Dubai's heat, regular maintenance is essential. At FAJ, we provide expert services tailored for Goodman ACs, ensuring your unit delivers optimal cooling and comfort all year round. Here to help keep your system running at its best!  </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('ac amc')}  alt="Goodman Airconditioner Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong>  Extreme Weather: </strong> In the summer heat, temperatures can exceed 40°C (104°F), creating an oppressive environment. it&apos;s crucial to ensure that your Goodman AC systems are running at peak performance. </li>
                  <li> <strong>  Energy Efficiency: </strong> A well-maintained Goodman air conditioner operates efficiently, yielding significant energy savings and lower Dewa electricity costs. </li>
                  <li> <strong>  Longevity of Equipment: </strong> <a href="https://www.linkedin.com/company/faj-technical-services-llc" className="fw-bold text-decoration-underline">Regular maintenance</a> of Goodman AC is crucial for optimal performance and longevity. It boosts energy efficiency and lowers repair costs, resulting in savings for residential and commercial property users. </li>
                  <li> <strong>  Improved Air Quality: </strong> Routine Goodman air conditioner cleaning service prevents dust and allergens from getting in, resulting in improved air quality. </li>
                  <li> <strong>  Enhanced Comfort: </strong> Maintaining your original AC service in Dubai is essential for optimal comfort and efficiency. Don&apos;t settle for less—commit to regular servicing for a consistently pleasant environment every day. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Common Goodman AC Problems That May Require Maintenance
            </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      <a href="https://www.youtube.com/watch?v=qnByeIsc3lY"><b>Reduced airflow</b></a> from your vents may signal an issue with your Goodman AC, like a clogged filter or a faulty fan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Warm Air</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your Goodman AC is blowing warm air, it may indicate issues with the compressor, refrigerant levels, or ductwork.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Unusual sounds such as grinding, squeaking, or banging from your Goodman AC may signal mechanical problems needing attention.
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Foul Odors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Unpleasant odours coming from the vents may indicate mold or mildew in the system and should be addressed immediately.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Frequent Cycling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The failure to maintain desired temperatures may indicate problems such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">High Humidity Levels</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A Goodman Air Conditioner that doesn't reduce humidity may have cooling capacity issues or may not be operating correctly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Leaking Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Water pooling around the Goodman AC or dripping from the vents may signal a blocked drain or frozen coils.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Increased Energy Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      High energy bills without increased usage may suggest Goodman AC inefficiencies from dirty filters or duct leaks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="get-quote" className="mb-0 mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        {/* HERE  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR Goodman AC SYSTEMS</h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/prUR0-lZlzg?si=Fk3OIwPHCHAsktx-"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-xl-6">
                <p className='mb-0'>We specialise in a wide range of HVAC systems, featuring top brands and advanced Fresh Air Handling Units (FAHU).</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Goodman AC Installation: </strong> Professional installation of various Goodman air conditioning systems ensures optimal performance. </li>
                  <li> <strong> Goodman AC Inspection: </strong> Detailed fault diagnosis to accurately identify system issues. We provide comprehensive quotes and eligibility assessments to address any concerns you may have. </li>
                  <li> <strong> Goodman AC Repair Service: </strong> We offer fast <a href="https://www.google.com/search?q=faj+technical+llc+gmb&rlz=1C1GCEU_en-GBPK1161PK1162&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIPCAYQLhgnGK8BGMcBGOoCMgkIBxAjGCcY6gLSAQsyNzQ0OTUwajBqN6gCCLACAfEFNHg2jm1mi9w&sourceid=chrome&ie=UTF-8" className="fw-bold text-decoration-underline">Goodman AC repair service</a> components, including leaks, electrical failures, and malfunctions. Contact us for details or inquiries! </li>
                  <li> <strong> Goodman AC Annual Maintenance Contract: </strong> This contract outlines the Goodman AC annual maintenance terms. </li>
                </ul>
                <p className="mb-0"> Regular AC maintenance (AMC/PPM) is vital for ensuring performance, efficiency, and longevity.</p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <AcBrandBenifit brandName="Goodman AC"/>

        {/* CHOOSE US  */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR  NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')}  alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')}  alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>With <a href="/services/air-conditioning-repair/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your Goodman AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                    </p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">

                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('ACServicescomponent-New')}  alt="Ac Maintenance Services" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We are experts in Goodman AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our <a href="https://www.facebook.com/acrepairservices"><b>skilled AC technicians</b></a> are highly trained, and we provide excellent service for a variety of major AC brands efficiently.
                    </p>
                  </div>
                </div>
              </div>


            </div>
            {/* <!-- Delimit mobile --> */}
            <div className="col-12 uspdelimit w-100 text-center d-block d-none-1199 Xd-xl-none">
              <img className="blue-border-2 w-100" src={getImageSrc('icon/ACServicescomponent-New')}  alt="Ac Maintenance Services" />
            </div>
          </div>
        </section>
        <BeforeAfter
          title="Recent Completed Service"
          subTitle="Before & After Service"
          bgImg={`${CDN}/background-image-2/public`}
          beforeImg={`${CDN}/after_img_1/public`}
          afterTitle="After"
          afterImg={`${CDN}/before_img_1/public`}
          beforeTitle="Before"
        />
        {/* We specialise  */}
        <section className="section cs_py_30">
          <div className="container">
            


            <h3 className="cs_fs_24 text-align-left">We specialise in Goodman AC services for the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"><strong>   Goodman Split Air Conditioner Service: </strong> FAJ offers reliable repair and maintenance for Goodman split air conditioner in Dubai. Our expert team specialises in Goodman VRF and central AC, ensuring optimal performance and comfort. Count on us for both routine <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/">AC maintenance</a> and urgent repair. </p>
                <p className="mb-0"><strong>   Goodman Central Air Conditioner Repair and Service: </strong> FAJ is a leading aircon service provider in Dubai, specialising in the AC installation, repair, and maintenance of Goodman air conditioner. Known for its commitment to excellence, the company provides a wide range of AC services aimed at ensuring the optimal efficiency of air conditioning units. </p>
                <p className="mb-0"><strong>   Goodman AC Service and Repair: </strong> Goodman AC Service provides peace of mind with our skilled technicians. At FAJ, we specialise in efficient and reliable AC maintenance, repair, and installation. You can trust our expert team to keep your HVAC system running smoothly and ensure your comfort throughout the year! </p>
                <p className="mb-0"><strong>   Goodman Inverter Air Conditioner Maintenance: </strong> Count on our dedicated team to promptly resolve any concerns with your Goodman air conditioner maintenance and bring it back to peak performance! </p>
                <p className="mb-0"><strong>   Goodman HVAC Repair: </strong> We have extensive expertise in Goodman cassette and package unit AC systems, providing reliable repair to ensure your unit operates efficiently. </p>
                <p className="mb-0"><strong>   Goodman Ceiling AC Service and Repair: </strong> Our specialists can quickly diagnose and resolve any issues with your Goodman ceiling <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/">AC repair</a> and service. </p>
                <p className="mb-0"><strong>   Goodman VRF (Variable Refrigerant Flow) System Service and Repair: </strong> FAJ's Goodman Variable Refrigerant Flow (VRF) repair and maintenance service provides reliable and efficient HVAC solutions customised to meet your needs. Our skilled team prioritises your comfort and satisfaction, delivering exceptional service and peace of mind. You can trust us to manage your climate control with expertise and care. </p>
                <p className="mb-0"><strong>   Goodman Ducted Split AC Service and Repair: </strong> For reliable Goodman ducted split air conditioner (AC) repair and maintenance in Dubai, our skilled technicians are here to help. With expertise in diagnosing a variety of AC issues, we ensure minimal disruption to your comfort. Trust us for quick and effective service that provides the cooling relief you need. </p>
                <p className="mb-0"><strong>   Goodman Wall-Mounted Air Conditioner Service and Repair: </strong> Beat Dubai's intense heat with our expert Goodman AC fix and repair services. We ensure that your unit operates efficiently, keeping your indoor space cool and comfortable while the temperatures soar outside. </p>


                <p>
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-barsha/">Al Barsha</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali/">Jebel Ali</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jafza/">JAFZA</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali-free-zone/">Jebel Ali Free Zone</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/palm-jumeirah/">Palm Jumeirah</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-hills-estate/">Dubai Hills Estate</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/damac-hills/">Damac Hills</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-barari/">Al Barari</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-barsha-south/">Al Barsha South</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-safa/">Al Safa</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/arabian-ranches/">Arabian Ranches</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-silicon-oasis/">Dubai Silicon Oasis</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dip/">Dubai Investments Park</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dip/">DIP</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-production-city/">Dubai Production City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/impz/">IMPZ</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-sport-city/">Dubai Sports City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-studio-city/">Dubai Studio City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jbr/">JBR</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-beach-residence/">Jumeirah Beach Residence</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jlt/">JLT</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-lake-towers/">Jumeirah Lake Towers</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvc/">JVC</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvc/">Jumeirah Village Circle</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvt/">JVT</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvt/">Jumeirah Village Triangle</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali-village/">Jebel Ali Village</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah/">Jumeirah</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-golf-estates/">Jumeirah Golf Estates</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-meadows/">Meadows</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/motor-city/">Motor City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/town-square/">Town Square</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/emirates-hills/">Emirates Hills</a> &nbsp;|&nbsp;
                  Townhouses &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/umm-suqeim/">Umm Suqeim</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/ras-al-khor-industrial-area/">Ras Al Khor</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/deira/">Deira</a>
                </p>
              </div>

            </div>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <GetQuoteButton></GetQuoteButton>
                <CallNowButton></CallNowButton>
              </div>
            </div>

          </div>
        </section>

        <Practicaltip></Practicaltip>
        <AcProperties></AcProperties>

        {/* Maintenance Contract */}
        <MaintenanceContract />

        {/* testimobial section */}
       <Testimonial1
          subtitle="What Our Clients Say"
          title="Customer <span>Reviews</span>"
          bgImg={reviewsbg}
          testimonialData={testimonial_data}
          sectionId="home-testimonials"
        />

         {/* Contact */}
        <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>

        </section>
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

       

      </div >



    </>
  );
};

export default GoodmanAcRepair;