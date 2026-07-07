import { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import HeaderForm from "../../../Headeform/HeaderForm";
import AcAppointmentCol from "../../../Common/AcAppointmentCol";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import Practicaltip from "../../../Common/Practicaltip";
import AcProperties from "../../../Common/AcProperties";
import PriceCard from "../AcLocation/PriceCard.jsx";
import AcBrandBenifit from "./ACBrandComponents/ACBrandBenifit.jsx";
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
const YorkAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "York Air Conditioning | York AC Repair and Maintenance Services");
  const metadescription = String(description || "Find the best York AC repair in Dubai. Call 0433000002 for residential and commercial needs. We also provide York HVAC maintenance services near you");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "York AC Repair, York Air Conditioner Maintenance, York AC Service Dubai, York Air Conditioner Repair Dubai, York AC Installation Dubai, York AC Cleaning Dubai, York Air Conditioner Service Dubai, York Air Conditioner Maintenance Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/brands/york/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public");

  subtitle = "Testimonial"
  title = "What our clients say <br> About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  //start fetching
  const [data, setData] = useState([]);
  const [testimonial_data, setTestimonialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "York AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/air-conditioning-repair/brands/york/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3500",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "York AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "York AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "York Split AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "York Central AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "York AC Maintenance" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "York AC Gas Refilling" }
              }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ahmed K." },
          "reviewBody": "Excellent York AC repair service in Dubai. The technician arrived on time, diagnosed the issue quickly, and restored the cooling efficiently. Highly recommended."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Sarah M." },
          "reviewBody": "Very professional team. They fixed my York central AC and cleaned the entire system properly. Fair pricing and great customer support."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Imran A." },
          "reviewBody": "Quick response and reliable service. My York split AC was not cooling, and they repaired it the same day. Great experience overall."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Anonymous (via Google)" },
          "reviewBody": "Technicians were knowledgeable and efficient. They handled the York AC gas refilling and maintenance professionally."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/york/#faq",
      "mainEntity": [{
        "@type": "Question",
        "name": "What are the reasons AC York is not cooling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reasons Why York AC Is Not Cooling Your House: Thermostat is Set Incorrectly, Dirty AC Air Filter, Blocked Outdoor Condenser Unit, Damaged Heat Pump, Frozen Evaporator Coil, Refrigerant Leak, and Undersized Air Conditioner."
        }
      },{
        "@type": "Question",
        "name": "Why is my central AC not working?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your central air conditioning isn't working at all, check the main electrical panel for a tripped breaker or blown fuse. Also, the thermostat setting might be the issue."
        }
      },{
        "@type": "Question",
        "name": "How to maintain an AC unit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Easy steps include shutting off power, removing debris, cleaning and straightening fins, cleaning around the unit, leveling it, and cleaning both the evaporator coil and drain."
        }
      },{
        "@type": "Question",
        "name": "How much does AC maintenance cost in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AC Cleaning: AED 230++, Coil Cleaning: AED 250-680, Repair: AED 1,000-4,000, depending on unit capacity and location."
        }
      },{
        "@type": "Question",
        "name": "Is AC duct cleaning important in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Poor indoor air quality can cause respiratory issues. Regular duct cleaning is crucial due to year-round AC usage in Dubai."
        }
      },{
        "@type": "Question",
        "name": "How much is AC service in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Regular Cleaning: AED 230, Duct Cleaning & Sanitization: From AED 550, Deep Coil Cleaning: AED 250-830, AC Repair & Installation: AED 150 per hour."
        }
      },{
        "@type": "Question",
        "name": "How to check AC problems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check thermostat settings, close windows and doors, check for tripped breakers, clean filters, inspect for leaks, open vents, clean ducts, and call a technician if needed."
        }
      }]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/york/#breadcrumb",
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
          "name": "York",
          "item": "https://www.fajservices.ae/services/air-conditioning-repair/brands/york/"
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
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcBrand/YorkAcRepairfaq.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/YorkAcServiceTestimonials.json`)
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
            <h1 className="cs_fs_30">Top-Quality York Air Conditioning | York AC Repair and Maintenance Services in Dubai, UAE</h1>
            <p>Looking for reliable servicing and maintenance for your York air conditioning and refrigeration systems?<br/>We provide expert services for York HVAC, ducted split AC, central AC, and VRF AC repair throughout Dubai. Serving both homes and businesses, we deliver high-quality HVAC service and annual maintenance contract.<br/>Established in 2010, <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7">FAJ Technical Services L.L.C</a> is a trusted provider of York air conditioning solutions in Dubai and Sharjah. Our experienced team offers York AC cleaning, maintenance, repair, and installation services for residential and commercial units, ensuring your system operates efficiently and enhances your indoor comfort.</p>

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
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left">York AC Maintenance and Servicing</h2>

                <p className="mb-2">
                  In Dubai, it is important to hire skilled technicians for York <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/">AC repair </a>services. Our team specializes in servicing York AC systems in Dubai and Sharjah, providing reliable solutions that keep your indoor space comfortable all year round while making sure your system runs efficiently.
                </p>

                <h2 className="cs_fs_24 mb-1 pt-1 mt-0 text-align-left">Top Common Signs That You Need York AC Maintenance</h2>
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
                <img className="bordered-img w-100" src={getImageSrc('acfilterinner')} alt="York AC Service" />
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

            <h2 className="cs_fs_30">Why is York AC Maintenance Service Important in Dubai?</h2>
            <p>
              To ensure the efficient operation of your York central air conditioner maintenance in Dubai's extreme heat, regular service is essential.
              <br />At FAJ, we offer expert AC services to ensure optimal cooling and comfort year-round.
              Our team is dedicated to maximizing your system's performance.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('ac amc')} alt="york Airconditioner Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Extreme Weather: </strong> During excessively warm summer months, temperatures may exceed 40°C (104°F). It is essential to ensure that your York air conditioning systems are operating effectively. </li>
                  <li> <strong> Energy Efficiency: </strong> A well-maintained York air conditioner runs efficiently, leading to significant energy savings and lower DEWA electricity costs. </li>
                  <li> <strong> Longevity of Equipment: </strong> Regular York <a href="/services/air-conditioning-repair/ac-service/" className="fw-bold text-decoration-underline">AC maintenance</a> is essential for optimal performance and efficiency, helping to reduce repair costs and save money for both residential and commercial properties. </li>
                  <li> <strong> Improved Air Quality: </strong> Routine York AC cleaning service not only prevents dust and allergens from entering our spaces but also elevates the air quality we breathe and fosters a healthier environment. </li>
                  <li> <strong> Enhanced Comfort: </strong> Regular maintenance of York air conditioners in Dubai is essential for optimal comfort and efficiency, ensuring a pleasant indoor environment daily. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Common York AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-3 py-md-1 mt-0">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      <a href="https://www.youtube.com/watch?v=qnByeIsc3lY">Reduced airflow</a> from York AC ducts may signal a blocked filter or faulty motor. Prompt attention ensures efficient cooling and extends system lifespan.
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
                      If your York AC is blowing warm air, it may have problems with the compressor, gas levels, or ductwork.
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
                      Unusual sounds like grinding, squeaking, or banging from your York AC may indicate mechanical issues that require attention.
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
                      Unpleasant odors coming from the vents may indicate mold or mildew in the system and should be addressed immediately.
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
                      A York air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly.
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
                      Water pooling around the York AC or dripping from the vents may indicate a blocked drain or frozen coils.
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
                      High energy bills without increased usage may indicate inefficiencies in York air conditioning due to dirty filters or duct leaks.
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
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR YORK AC SYSTEMS</h2>

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
                <p className='mb-0'>We are offering central, ducted split systems, FAHU units, and package units, along with all major services in the UAE.</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> York AC Installation: </strong> The professional installation of different York air conditioning systems guarantees optimal performance. </li>
                  <li> <strong> York AC Inspection: </strong> We provide precise fault diagnosis to identify system issues, along with detailed quotes and eligibility assessments to address your concerns. </li>
                  <li> <strong> York AC Repair Service: </strong> We offer quick repair services for York air conditioner, fixing leaks, electrical issues, and malfunctions. Contact us for more info! </li>
                  <li> <strong> York AC Annual Maintenance Contract: </strong> The contract details the annual maintenance requirements for York AC. </li>
                </ul>
                <p className="mb-0">
                  <strong><a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a></strong>, including Annual Maintenance Contracts (AMC) and Planned Preventive Maintenance (PPM), is essential for ensuring optimal performance and longevity.
                </p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <AcBrandBenifit brandName="York AC"/>

        {/* CHOOSE US  */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR  NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>With <a href="/services/air-conditioning-repair/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your York AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                    </p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">

                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('ACServicescomponent-New')} alt="Ac Maintenance Services" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We are experts in York AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
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
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
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
              <img className="blue-border-2 w-100" src={getImageSrc('ACServicescomponent-New')} alt="Ac Maintenance Services" />
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
            

            <h3 className="cs_fs_24 text-align-left">We specialise in York AC services for the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"><strong>  York Split Air Conditioner Service: </strong> <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ</a> is a reliable provider York AC repair and maintenance services in Dubai. Our trained technicians specialize in York VRF central AC units, providing optimal performance. Whether you need routine aircon maintenance or urgent repairs, we are committed to delivering exceptional, tailored service to meet your needs. Your comfort is our priority. </p>
                <p className="mb-0"><strong>  York Central Air Conditioner Repair and Service: </strong> FAJ is a leading service provider for <a href="https://www.google.com/search?q=faj+technical+llc+gmb&sca_esv=a182306c0b9e7281&sxsrf=AE3TifP6twoVuhedCe8xy_x2cw69ihmDVA%3A1748516672478&ei=QD84aJTtHNeW7_UPw-KsqQY&ved=0ahUKEwiUjZaZxMiNAxVXy7sIHUMxK2UQ4dUDCBA&uact=5&oq=faj+technical+llc+gmb&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWZhaiB0ZWNobmljYWwgbGxjIGdtYjIFECEYoAEyBRAhGKABSIUqUMcEWNoccAF4AZABAJgBlQKgAYgOqgEDMi04uAEDyAEA-AEBmAIJoALEDsICDRAuGLADGMcBGCcYrwHCAgcQIxiwAxgnwgIKEAAYsAMY1gQYR8ICEBAuGIAEGMcBGCcYigUYrwHCAgQQIxgnwgIFEAAYgATCAgYQABgWGB7CAgsQABiABBiGAxiKBcICHRAuGIAEGMcBGIoFGK8BGJcFGNwEGN4EGOAE2AEBwgIIEAAYFhgKGB7CAggQABiABBiiBMICBRAAGO8FwgIEECEYFZgDAIgGAZAGCroGBggBEAEYFJIHBTEuMC44oAeCMrIHAzItOLgHtg7CBwcwLjIuNS4yyAcu&sclient=gws-wiz-serp#lpc=lpc&prid=2987634349969554675&scso=_2j84aLrrB-CG9u8P9oSMgAg_76:372">York air conditioner repair</a> and maintenance in Dubai. The company adeptly meets the needs of its clients, ensuring high-quality service and customer satisfaction, whether for routine maintenance or urgent repair. </p>
                <p className="mb-0"><strong>  York AC Service and Repair: </strong> At York AC Service, we offer you peace of mind through our team of experienced technicians. At FAJ, we focus on providing efficient and dependable York AC maintenance, repair, and installation. You can count on our expert team to keep your HVAC system in top shape, ensuring your comfort all year round! </p>
                <p className="mb-0"><strong>  York Inverter Air Conditioner Maintenance: </strong> Depend on our dedicated team to swiftly address and resolve any issues with your York air conditioner maintenance, ensuring it is restored to peak performance without delay! </p>
                <p className="mb-0"><strong>  York HVAC Repair: </strong> We specialize in York cassette AC and package unit AC systems, offering reliable repairs to ensure your unit operates efficiently. </p>
                <p className="mb-0"><strong>  York Ceiling AC Service and Repair: </strong> Our specialists can quickly diagnose and resolve any issues with your York Ceiling AC repair and ducted split AC service. </p>
                <p className="mb-0"><strong>  York VRF (Variable Refrigerant Flow) System Service and Repair: </strong> FAJ's York Variable Refrigerant Flow (VRF) repair and maintenance services provide customized HVAC solutions. Our expert team prioritizes your comfort and satisfaction, ensuring dependable service for your climate control needs. </p>
                <p className="mb-0"><strong>  York Ducted Split AC Service and Repair: </strong> For reliable York air conditioning repair and maintenance in Dubai, our skilled technicians are ready to assist you.
                  With expertise in diagnosing various issues and resolving error codes, we ensure minimal disruption to your comfort. Trust us for prompt service that delivers the cooling relief you need. </p>
                <p><strong>  York Wall-Mounted Air Conditioner Service and Repair: </strong> In Dubai, UAE, where extreme heat is prevalent, maintaining a relaxing indoor climate is essential. Our York air conditioning repair and maintenance, cleaning services assure optimal unit performance, helping you stay cool and comfortable even in high temperatures. </p>

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

export default YorkAcRepair;