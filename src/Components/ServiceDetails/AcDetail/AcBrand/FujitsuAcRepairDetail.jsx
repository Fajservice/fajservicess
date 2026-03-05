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
  return `${CDN}/${imgPath}/public`;
};

const FujitsuAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "Fujitsu AC Repair and Maintenance Services in Dubai");
  const metadescription = String(description || "For your home and office Fujitsu AC cleaning service, FAJ Assist can provide Fujitsu air conditioner maintenance and repair near you in Dubai");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Fujitsu AC Repair in Dubai, Fujitsu Air Conditioner Maintenance, Fujitsu AC Service, Fujitsu AC Fix, Fujitsu Air Condition Repair, Fujitsu Air Condition Maintenance, Fujitsu Air Condition Service, Fujitsu Air Condition Fix");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/brands/fujitsu/");
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
      "name": "Fujitsu AC Repair Services in Dubai - FAJ Technical Services",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/air-conditioning-repair/brands/fujitsu/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3400",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Fujitsu AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Fujitsu AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Fujitsu Split AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Fujitsu Central AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Fujitsu AC Maintenance" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Fujitsu AC Gas Refilling" }
              }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ahmed M." },
          "reviewBody": "FAJ Technical Services provided prompt and professional service for my Fujitsu AC in Dubai Marina. The technician fixed the issue quickly and explained everything clearly. Highly recommended!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Sara H." },
          "reviewBody": "Our Fujitsu AC was showing an E3 error. FAJ team diagnosed and repaired it efficiently. Very reliable and professional service."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Mohammed R." },
          "reviewBody": "I scheduled maintenance for my Fujitsu AC and the technicians cleaned the filters, checked gas levels, and ensured everything worked perfectly. Excellent service!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Leena T." },
          "reviewBody": "Highly satisfied with the Fujitsu AC repair service from FAJ. Punctual, professional, and affordable. My AC works like new again."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/fujitsu/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I clear Fujitsu AC error code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To reset your Fujitsu AC unit: Press and hold the On/Off button on the remote for two seconds, release it, press it again once, and then press it a third time. The unit should reset and resume operation."
          }
        },
        {
          "@type": "Question",
          "name": "What is E3 code on Fujitsu AC VRV?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "E3 indicates excessively high pressure due to activation of the high-pressure switch (HPS). Possible causes include an overloaded or short-circuited condenser or a dirty heat exchanger."
          }
        },
        {
          "@type": "Question",
          "name": "How do I troubleshoot my Fujitsu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check if the unit is off, if the operation lamp is flashing, if the set temperature is correct, if the filters are clean, and ensure there are no obstructions. Also inspect doors, windows, and the sensor for proper function."
          }
        },
        {
          "@type": "Question",
          "name": "What are Fujitsu AC Error codes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common error codes:\nAA0 – External protection activated\nA1 – Indoor unit PCB malfunction\nA3 – Drain level issue\nA4 – Freezing protection fault\nA5 – High pressure or freeze-up protection\nE3 – High pressure switch activated\nE4 – Low pressure switch activated\nE5 – Compressor motor or overheat\nJ1–J5 – Various sensor and thermistor faults"
          }
        },
        {
          "@type": "Question",
          "name": "How often should a Fujitsu air conditioner be serviced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Although not mandatory, annual inspections are recommended even if the unit seems fine. Regular servicing ensures long-term efficiency and performance."
          }
        },
        {
          "@type": "Question",
          "name": "What is the common problem with Fujitsu air conditioner?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common issues include the unit not starting due to a blown fuse, refrigerant leaks, and dirty air filters that slow cooling performance."
          }
        },
        {
          "@type": "Question",
          "name": "Can I change AC Gas R410A to Gas R32?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, switching refrigerants violates manufacturer instructions, voids warranties, and causes non-compliance with CE marking and safety regulations. It may also affect insurance validity."
          }
        },
        {
          "@type": "Question",
          "name": "How many times Fujitsu AC needs to be serviced in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Dubai, it’s recommended to service your Fujitsu AC at least twice a year—especially before the summer—to maintain optimal performance and avoid breakdowns during peak usage."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if you Don&apos;t get aircon serviced every 3 months in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neglecting service can lead to dust, rust, and debris buildup, reducing your AC’s efficiency and performance. Over time, the system may deteriorate more quickly and cost more in repairs."
          }
        }
      ]
    },
    {
  "@type": "BreadcrumbList",
  "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/fujitsu/#breadcrumb",
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
      "name": "Fujitsu",
      "item": "https://www.fajservices.ae/services/air-conditioning-repair/brands/fujitsu/"
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
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcBrand/FujitsuAcRepairfaq.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/FujitsuAcServiceTestimonials.json`)
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
            <h1 className="cs_fs_30">Fujitsu AC Repair and Maintenance Services in Dubai</h1>
            <p> <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7"> FAJ Technical Services L.L.C</a> has proudly served the Dubai community since 2010, building a reputation for excellence in Fujitsu HVAC services.<br />
            Our skilled team specializes in Fujitsu AC repair, maintenance, and installation for residential and commercial properties in Dubai and Sharjah. To maintain indoor comfort year-round, we recommend regular maintenance, including inspections and cleaning. Our expert Fujitsu AC cleaning service improves efficiency and air quality while extending the lifespan of your unit. Trust F A J for all your Fujitsu AC needs.

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
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left" >Fujitsu Ac Maintenance and Servicing </h2>

                <p className="mb-2">
                  When seeking Fujitsu air conditioner repairs, it is essential to select a qualified technician for your home or office.
                  <br /> Our organization specializes in the AC repair, service, and maintenance of Fujitsu units across Dubai and Sharjah. The  <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ team</a> is dedicated to providing exceptional service to ensure your comfort throughout the year.
                </p>

                <h2 className="cs_fs_24 mb-1 pt-1 mt-0 text-align-left" >Top Common Signs That You Need Fujitsu AC Maintenance</h2>
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
                <img className="bordered-img w-100" src={getImageSrc('acfilterinner')}  alt="Fujitsu AC Service" />
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

            <h2 className="cs_fs_30">Why is Fujitsu AC Maintenance Service Important in Dubai?</h2>
            <p className="mb-0">
              To keep your Fujitsu air conditioner running efficiently in Dubai, regular <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/">AC maintenance</a> is key. At FAJ, our experienced team is here to ensure your comfort.
              For convenient AC maintenance in your area, contact us!

            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('ac amc')}  alt="Fujitsu Airconditioner Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong>  Extreme Weather: </strong> During summer, temperatures can reach over 40°C (104°F). Regular maintenance ensures that Fujitsu air conditioning systems operate efficiently in these conditions. </li>
                  <li> <strong>  Energy Efficiency: </strong> A well-maintained Fujitsu air conditioning unit operates more efficiently, helping to save energy and reduce electricity bills. </li>
                  <li> <strong>  Longevity of Equipment: </strong> Regular maintenance for your Fujitsu air conditioner service can extend its lifespan, reduce the need for costly repairs and replacements, and ultimately save you money. </li>
                  <li> <strong>  Improved Air Quality: </strong> Regular Fujitsu AC maintenance services units prevent dust and allergens, ensuring cleaner air. </li>
                  <li> <strong>  Enhanced Comfort: </strong> Regular Fujitsu air conditioning maintenance in Dubai is essential for ensuring daily comfort, efficiency, and consistent cooling. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Common Fujitsu AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you notice <a href="https://www.youtube.com/watch?v=qnByeIsc3lY">reduced airflow</a> from your vents, it may indicate an issue with your Fujitsu AC system, such as a clogged filter or a malfunctioning fan.
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
                      If your Fujitsu AC is blowing warm or room temperature air instead of cold air, there may be issues with the compressor, gas levels, or ductwork.
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
                      Unusual sounds such as grinding, squeaking, or banging from your Fujitsu AC unit may indicate mechanical issues that need attention.

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
                      Foul odours from the vents may indicate mold or mildew in the system and should be addressed immediately.
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
                      The inability to maintain the desired temperatures could indicate issues such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.
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
                      A Fujitsu air conditioner that is not effectively reducing humidity may have issues with its cooling capacity or may not be functioning properly.
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
                      Water pooling around the Fujitsu AC or dripping from the vents may indicate a blocked condensate drain, frozen coils, or other issues.

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
                      High energy bills without an increase in usage may indicate inefficiency in the Fujitsu AC due to dirty filters, duct leaks, or other issues.
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
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR Fujitsu AIR CONDITIONER SYSTEM</h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/sxBhB1_gxYA?si=Fk3OIwPHCHAsktx-"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-xl-6">
                <p className='mb-0'>We specialize in various types and brands of HVAC systems, including Fresh Air Handling Units (FAHU).</p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong>  Fujitsu AC Installation: </strong> Professional installation of various Fujitsu air conditioning systems to guarantee optimal performance. </li>
                  <li> <strong>  Fujitsu AC Diagnostics: </strong> Comprehensive fault diagnosis to accurately identify issues. We offer eligibility assessments and detailed quotes to address any concerns regarding your system. </li>
                  <li> <strong>  Fujitsu AC Repair Service: </strong> We provide prompt and effective repair services for all Fujitsu AC components, addressing issues such as leaks, electrical failures, and system malfunctions. Contact us for specific services or any questions you may have! </li>
                  <li> <strong>  Fujitsu AC Annual Maintenance Contract: </strong> This contract details the terms and services for Fujitsu AC annual maintenance. </li>
                </ul>
                <p className="mb-0"> <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> of Fujitsu AC systems (AMC / PPM) is essential for ensuring optimal performance, efficiency, and longevity.</p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <AcBrandBenifit brandName="Fujitsu AC"/>

        {/* CHOOSE US  */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR  NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')} alt="Fast,Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')}  alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With <a href="/services/air-conditioning-repair/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your Fujitsu AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                    </p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">

                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('ACServicescomponent')}  alt="Ac Maintenance Services" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in Fujitsu AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')}  alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')}  alt="FAJ icon service" />
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
              <img className="blue-border-2 w-100" src={getImageSrc('icon/ACServicescomponent')}  alt="Ac Maintenance Services" />
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
            


            <h3 className="cs_fs_24 text-align-left">We specialise in Fujitsu ac services for the following types</h3>
            <div className="row">
              <div className="col-12">

                <p className="mb-0"><strong>  Fujitsu Split Air Conditioner Service: </strong> FAJ provides dependable Fujitsu <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/">AC repair</a> and maintenance services in Dubai. Our team consists of professionals specializing in Fujitsu split systems, Fujitsu VRV, and Fujitsu central air conditioning units. </p>
                <p className="mb-0"><strong>  Fujitsu Central Air Conditioner Repair and Service: </strong> FAJ is a Dubai-based service provider specializing in Fujitsu AC repair services. The company focuses on Fujitsu air conditioning systems and offers a range of services, including repairs and regular maintenance. </p>
                <p className="mb-0"><strong>  Fujitsu AC Service and Repair: </strong> Fujitsu AC service offers peace of mind with skilled professionals. At FAJ, we prioritize efficiency and reliability in all our work. Our expert team ensures that your air conditioning system operates at its best, whether you require maintenance, repairs, or installation. Trust us with your HVAC needs—your comfort is our highest priority. </p>
                <p className="mb-0"><strong>  Fujitsu Inverter Air Conditioner Maintenance: </strong> Rely on our expert team to swiftly address any issues with your Fujitsu air conditioner and restore its full functionality. </p>
                <p className="mb-0"><strong>  Fujitsu HVAC Repair: </strong> We have extensive knowledge of Fujitsu air conditioning systems, providing reliable repairs to ensure your unit operates efficiently. </p>
                <p className="mb-0"><strong>  Fujitsu Ceiling AC Service and Repair: </strong> Our experts can accurately diagnose and fix any issues with your Fujitsu air conditioner. </p>
                <p className="mb-0"><strong>  Fujitsu VRV (Variable Refrigerant Volume) System Service and Repair: </strong> The Fujitsu VRV (Variable Refrigerant Volume) System repair and service ensures your peace of mind because you are in the right place. FAJ prioritizes efficiency and reliability. </p>
                <p className="mb-0"><strong>  Fujitsu Ducted Split AC Service and Repair: </strong> Fujitsu ducted split AC service in Dubai requires specialist assistance, as only experts can effectively address air conditioning issues. We provide hassle-free Fujitsu air conditioning repair services. </p>
                <p className=""><strong>  Fujitsu Wall-Mounted Air Conditioner Service and Repair: </strong> Beat the scorching heat with optimal Fujitsu AC cleaning service and fixing error in Dubai! Our professional Fujitsu AC services ensure your unit operates efficiently, providing comfort and peace of mind. </p>


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

export default FujitsuAcRepair;