import { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import HeaderForm from "../../../Headeform/HeaderForm";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
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
  return `${CDN}/${imgPath}/public`;
};

const BlueStarAcRepair = ({ subtitle, title, reviewsbg, Author, Keyword, URL }) => {

  // For SEO
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Bluestar AC Repair in Dubai, BlueStar Air Conditioner Service, BlueStar AC Maintenance, BlueStar AC Installation, BlueStar AC Cleaning Service, BlueStar Air Conditioner Repair Near Me");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/brands/blue-star/");
  const metaImage = getImageSrc('https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/What-is-covered-in-an-AC-Maintenance-Contract/public');


  subtitle = "Testimonial"
  title = "What our clients say <br> About Us"
  reviewsbg = "testimonialbg"
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
      "name": "Blue Star AC Repair Services in Dubai - FAJ Technical Services",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/air-conditioning-repair/brands/blue-star/",
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
        "name": "Blue Star AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Blue Star AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Blue Star Split AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Blue Star Central AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Blue Star AC Maintenance" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Blue Star AC Gas Refilling" }
              }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ali R." },
          "reviewBody": "Professional Blue Star AC repair service. The technicians fixed my AC quickly and it is working perfectly now."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Mona S." },
          "reviewBody": "Excellent maintenance for my Blue Star AC. Filters and coils were cleaned thoroughly and performance is great."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Hassan K." },
          "reviewBody": "Quick and reliable service. My Blue Star AC was not cooling well, and the team resolved it on the same day."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Anonymous (via Google)" },
          "reviewBody": "Highly recommended Blue Star AC servicing company. Professional technicians and fair pricing."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/blue-star/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the lifespan of a Blue Star air conditioner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With proper maintenance, which includes regular cleaning, inspections, and timely repairs by FAJ's professionals, a Blue Star air conditioner can last 15 years or more. Its lifespan can be affected by usage patterns, environmental conditions, and installation quality."
          }
        },
        {
          "@type": "Question",
          "name": "What is involved in servicing a Blue Star air conditioner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The technician will inspect both units to ensure smooth operation. They will clean the filters and coils of the indoor unit, remove dirt or dust, and check for proper airflow."
          }
        },
        {
          "@type": "Question",
          "name": "How do you know Blue Star AC needs servicing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your AC is blowing warm air or not cooling properly, it needs maintenance. You may need to replace air filters, refill refrigerant, or have the Blue Star AC coils professionally cleaned by FAJ."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in aircon servicing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FAJ Professional Air Conditioning Servicing Includes:\n- Cleaning or Replacement of AC Air Filters\n- Checking and Cleaning the AC Evaporator Coils\n- Cleaning and Checking of AC Condenser Coil\n- Inspection of AC Refrigerant Levels\n- Checking of the AC Electrical Connections\n- Inspection of AC Fan and Blower Motor\n- Cleaning the AC Drainage System"
          }
        },
        {
          "@type": "Question",
          "name": "Is it necessary to service AC every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While regular aircon maintenance checks are not mandatory, they are advisable. We recommend servicing your air conditioner at least once a year, even if no defects are noticeable."
          }
        },
        {
          "@type": "Question",
          "name": "How can I check my AC problem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check the AC airflow.\nBe aware of unusual noises.\nCheck the electricity Dewa bills.\nInspect any water leakage or ice buildup.\nEnsure sufficient refrigerant gas level.\nNotice any strange odors or a hot outdoor unit."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/blue-star/#breadcrumb",
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
          "name": "Blue Star",
          "item": "https://www.fajservices.ae/services/air-conditioning-repair/brands/blue-star/"
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
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcBrand/BlueStarAcRepairfaq.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/BlueStarAcServiceTestimonials.json`)
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
          <title>Low Prices Service | Blue Star AC Repair and Maintenance Dubai</title>
          <meta name="description" content="FAJ, providing Blue Star AC repair in Dubai, with the finest and most comprehensive range of services, to take care of your air conditioning system." />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="Low Prices Service | Blue Star AC Repair and Maintenance Dubai" />
          <meta property="og:description" content="FAJ, providing Blue Star AC repair in Dubai, with the finest and most comprehensive range of services, to take care of your air conditioning system." />
          <meta property="og:url" content={metaURL} />
          <meta property="og:image" content={metaImage} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Low Prices Service | Blue Star AC Repair and Maintenance Dubai" />
          <meta name="twitter:description" content="FAJ, providing Blue Star AC repair in Dubai, with the finest and most comprehensive range of services, to take care of your air conditioning system." />
          <meta name="twitter:image" content={metaImage} />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
          
        </Helmet>
      </HelmetProvider>
      <HeaderForm />
      <div className="cs_service_details">
        {/* intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Blue Star AC Repair and Maintenance Service in Dubai</h1>
            <p>Achieving year-round comfort involves effectively addressing challenges like summer humidity, warm nights, and indoor allergens.
              <br />Since its inception in 2010,   <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7"> FAJ Technical Services L.L.C</a>, has been a reliable provider of Blue Star air conditioner solutions in Dubai and Sharjah.
              <br />Our experienced team delivers a variety of services, including Blue Star AC repair, cleaning, maintenance, and installation, for both residential and commercial units. We are dedicated to maximizing the efficiency of your air conditioning system to improve indoor comfort.
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
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
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left" style={{ fontSize: "24px" }}>Blue Star Ac Maintenance and Services </h2>

                <p className="mb-2">
                  If you are in Dubai and require professional repair services for Blue Star air conditioners, <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ</a> is here to help.
                  <br />Our skilled technicians ensure your air conditioning systems operate efficiently, delivering reliable cooling solutions tailored to the climate of Dubai and Sharjah.
                  Trust us to keep your indoor environment comfortable and refreshing all year round.
                </p>

                <h2 className="cs_fs_24 mb-1 pt-1 mt-0 text-align-left" style={{ fontSize: "24px" }}>Signs You Need An AC Service</h2>
                <p className="mb-2">If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.</p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Higher electricity bills </li>
                      <li>Air is not blowing cold</li>
                      <li>Drips from your air conditioner</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Loss of AC performance</li>
                      <li>Poor AC airflow, making noises</li>
                    </ul>
                  </div>
                </div></div>

              <div className="col-md-6 ">
                <img 
                  className="bordered-img w-100" 
                  src={getImageSrc('acfilterinner')} 
                  alt="Blue Star AC Service"
                  loading="lazy"
                  decoding="async"
                />
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

            <h2 className="cs_fs_30">Why is Blue Star AC Maintenance Service Important in Dubai?</h2>
            <p className="">
              To guarantee your Blue Star central air conditioner functions efficiently in Dubai&apos;s intense heat, regular <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/">AC maintenance</a> is essential. At FAJ, we offer expert aircon services designed to enhance your system's performance and comfort year-round. Trust us to keep your air conditioner operating at its best.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img 
                  className="blue-border" 
                  src={getImageSrc('ac amc')} 
                  alt="Blue Star Airconditioner Repair"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Extreme Weather: </strong> As summer approaches, we can expect temperatures to soar above 40°C (104°F), creating discomfort. It&apos;s essential to ensure that your Blue Star air conditioning systems are primed for optimal performance. </li>
                  <li> <strong> Energy Efficiency: </strong> A well-maintained Blue Star air conditioner operates efficiently, resulting in significant energy savings and lower DEWA electricity costs. </li>
                  <li> <strong> Longevity of Equipment: </strong> Keeping up with the Blue Star AC maintenance is really important for getting the best performance and efficiency. It helps lower repair costs and can save money for both homes and businesses. </li>
                  <li> <strong> Improved Air Quality: </strong> Routine Blue Star air conditioner cleaning service prevents dust and allergens from getting in, resulting in improved air quality. </li>
                  <li> <strong> Enhanced Comfort: </strong> Regular air conditioner maintenance in Dubai is vital for optimal efficiency and a comfortable indoor environment. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Common Blue Star AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      <a href="https://www.youtube.com/watch?v=qnByeIsc3lY"><b>Reduced airflow</b></a> from a Blue Star air conditioner may indicate a clogged filter or faulty fan, which should be fixed for efficient cooling.
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
                      If your Blue Star AC is blowing warm air, it may be experiencing issues with the compressor, refrigerant levels, or ductwork.
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
                      Unusual sounds like grinding, squeaking, or banging from your Blue Star AC may indicate mechanical issues that require attention.
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
                      A Blue Star air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly.
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
                      Water pooling around the Blue Star AC or dripping from the vents may indicate a blocked drain or frozen coils.
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
                      High energy bills without increased usage may indicate inefficiencies in Blue Star air conditioning due to dirty filters or duct leaks.
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

        {/* HERE  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR Blue Star AC SYSTEMS</h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/sxBhB1_gxYA?si=_ayb8R8AGmHLjwUi"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-xl-6">
                <p className='mb-0'>Effective air conditioning systems are essential for maintaining a comfortable and effective environment in commercial environments.</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Blue Star AC Installation: </strong> The professional installation of various Blue Star air conditioning systems ensures optimal performance. </li>
                  <li> <strong> Blue Star AC Inspection: </strong> We offer accurate fault diagnosis to pinpoint system issues, along with comprehensive quotes and eligibility assessments to address your concerns. </li>
                  <li> <strong> Blue Star AC Repair Service: </strong> We offer fast repair services for Blue Star air conditioners, addressing leaks, electrical problems, and malfunctions. Contact us for further details or inquiries! </li>
                  <li> <strong> Blue Star AC Annual Maintenance Contract: </strong> The contract specifies the annual maintenance terms for Blue Star air conditioners.  </li>
                </ul>
                <p className="mb-0"><a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a>, including Annual Maintenance Contracts (AMC) and Planned Preventive Maintenance (PPM), is vital for optimal performance and durability.
                </p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <AcBrandBenifit brandName="Blue Star AC"/>

        {/* CHOOSE US  */}
        <section className="section cs_py_30">

          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR  NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={getImageSrc('icon/fast-reliable')} alt="Fast, Reliable Service" loading="lazy" decoding="async" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={getImageSrc('icon/experts')} alt="We Are Experts" loading="lazy" decoding="async" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With <a href="/services/air-conditioning-repair/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={getImageSrc('icon/full-control')} alt="FAJ icon service" loading="lazy" decoding="async" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your Bluestar AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                    </p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('ACServicescomponent')} alt="Ac Maintenance Services" loading="lazy" decoding="async" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={getImageSrc('icon/value')} alt="FAJ icon service" loading="lazy" decoding="async" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in Blue Star AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" loading="lazy" decoding="async" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" loading="lazy" decoding="async" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our <a href="https://www.facebook.com/acrepairservices"><b>skilled AC technicians</b></a> are highly trained, and we provide excellent service for a variety of major AC brands efficiently.
                    </p>
                  </div>
                </div>
              </div>


            </div>
            {/* <!-- Delimit mobile --> */}
            <div className="col-12 uspdelimit w-100 text-center d-block d-none-1199 Xd-xl-none">
              <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('icon/ACServicescomponent')} alt="Ac Maintenance Services" loading="lazy" decoding="async" />
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
           

            <h3 className="cs_fs_24 text-align-left">We specialise in Blue Star ac services for the following</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"><strong>Blue Star Air Conditioner Installation Service in Dubai:</strong> A Comprehensive Solution for Your Cooling Needs. We specialize in high-quality Blue Star AC installation services in Dubai and Sharjah. Our consultation process helps you choose the right model based on your space and budget. Our experts assess factors like room size and AC insulation to recommend the best unit for optimal performance.</p>
                <p className="mb-0"><strong>Our installation services include:</strong></p>
                <p className="mb-0"> <strong> Climate Check: </strong> Understanding your unique requirements based on the local climate and your building&apos;s features. </p>
                <p className="mb-0"> <strong> Expert AC Installation: </strong> Our skilled AC technicians ensure that the AC installation is performed to the highest standards, adhering to all safety protocols. </p>
                <p className="mb-0"> <strong> Post-Installation Support: </strong> We provide advice on operating your new air conditioner, including tips on energy efficiency and maintenance. </p>
                <p className="mb-0"> <strong> Warranty and Service Packages: </strong> To ensure your peace of mind, we offer warranty options and additional service packages for maintenance and repair in Dubai and Sharjah. </p>
                <p className="mb-0"> <strong> Blue Star AC AMC Services in Dubai: </strong> We offer comprehensive air conditioning AMC (Annual Maintenance Contract) and PPM (Planned Preventive Maintenance) services, along with repair support, throughout the year for both contract and non-contract customers. While we are dedicated to serving all our clients, please note that those with service contracts may receive priority assistance. </p>
                <p className="mb-0"> <strong> Blue Star Air Conditioner Repair in Dubai: </strong> Stay cool during the hot Dubai summer with our expert Blue Star inverter <a href="/services/air-conditioning-repair/ac-service/">AC repair</a> in Dubai and Sharjah. Our team provides efficient and reliable cooling solutions tailored to your needs. We guide you through the selection and installation process for optimal comfort. Contact us today to schedule your installation and beat the heat! </p>
                <p className="mb-0"> <strong> Blue Star AC Cleaning Service in Dubai: </strong> AC Deep cleaning your air conditioner brings several key benefits: </p>
                <p className="mb-0"> <strong> Improved Air Quality: </strong> It removes dust, allergens, and bacteria, leading to healthier air, especially for those with allergies. </p>
                <p className="mb-0"> <strong> Reduced Energy Consumption: </strong> A clean unit operates more efficiently, lowering your electricity bills. </p>
                <p className="mb-0"> <strong> Extended Lifespan: </strong> Regular AC maintenance prevents wear and tear, prolonging the life of your AC and minimising costly repairs. </p>
                <p className="mb-0"> <strong> Odour Elimination: </strong> It eliminates mold and mildew, resulting in fresher indoor air. </p>
                <p className="mb-0"> <strong> Reduced Mold Growth: </strong> Regular cleaning prevents the growth of mold and bacteria, which is crucial in humid climates. </p>
                <p className=""> <strong> Better Breathing: </strong> Cleaner air improves overall well-being. In short, deep cleaning your AC is an investment in your health, comfort, and energy efficiency. </p>

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
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton></GetQuoteButton>
                <CallNowButton></CallNowButton>
              </div>
            </div>

          </div>
        </section>

        <Practicaltip />
        <AcProperties />

        {/* Maintenance Contract */}
        <MaintenanceContract />

        {/* testimobial section */}
       <Testimonial1
          subtitle="What Our Clients Say"
          title="Customer <span>Reviews</span>"
          bgImg="testimonialbg"
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

export default BlueStarAcRepair;
