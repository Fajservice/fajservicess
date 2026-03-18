import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import HeaderForm from "../../Headeform/HeaderForm";
import BrandsSliderSection from "../../BrandsSliderSection";
import Testimonial1 from "../../Testimonial/Testimonial1";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const AppliancesMaintenanceContractDetail = ({subtitle,title,reviewsbg,titleSeo,description,Author,Keyword,URL,Image }) => {

  const metaTitle = String(
    titleSeo || "Home Appliances AMC Services | Maintenance Contract Dubai"
  );
  const metaDescription = String(
    description || "Time to get comfortable with appliances AMC service in Dubai, FAJ Experts in washing machine, refrigerator, cooking, oven, coffee machine maintenance."
  );
  const metaAuthor = String(
    Author || "FAJ Technical Services L.L.C"
  );
  const metaKeyword = String(
    Keyword || "Home appliacnes, Appliances AMC, Appliances Maintenance Contract, Kitchen Equipment AMC, Kitchen Appliances AMC, Dubai Appliances Service, Appliance Repair Dubai, Appliance Service Dubai"
  );
  const metaURL = String(
    URL || "https://www.fajservices.ae/services/home-appliances-repair/appliances-amc-service/"
  );

  const metaImage = String(
    Image ||  "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/dishwasher-repair-service/pubic"
  );

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for fetched data
  const [data, setData] = useState([]);
  const [testimonial_data, setTestimonialData] = useState([]);
  const [brandsLogo_data, setBrandsLogoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const schema = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "LocalBusiness",
      "name": "Home Appliances AMC Services with Best Maintenance Contract in Dubai",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/appliances-amc-service/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3430",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Appliances AMC Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "AMC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Refrigerator AMC"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Washing Machine AMC"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Oven AMC"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dishwasher AMC"
                }
              }
            ]
          }
        ]
      }
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/home-appliances-repair/appliances-amc-service/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an annual maintenance contract (AMC)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AC AMC usually involves a set of maintenance services for a specific period, such as a year. These services may include HVAC, maintenance and electrical repair on your property. The contract’s specifics will vary depending on the service provider, but it will typically include regular testing, cleanings, and repairs to make sure that the systems are in good working order."
          }
        },
        {
          "@type": "Question",
          "name": "How many types of AMC are there?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Annual Maintenance Contracts (AMCs) are classified into two types: comprehensive and non-comprehensive/call-based. Comprehensive AMCs cover the repair and replacement of faulty equipment parts for one flat fee. Non-inclusive/Call-based AMCs, on the other hand, only provide maintenance services as needed, with each service request billed separately."
          }
        },
        {
          "@type": "Question",
          "name": "Is it worth getting your AMC contract?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With the FAJ Technical Service LLC Annual Maintenance Contract (AMC), you receive a range of customized services at a reasonable price. Enjoy peace of mind for an entire year as we streamline maintenance and provide high-quality support results"
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of an AC AMC contract?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The FAJ Team's Annual Maintenance Contract for AC units guarantees optimal performance and longevity through proactive care, significantly reducing the risk of costly repairs and maximizing energy efficiency; our seasoned professionals provide comprehensive services including AC filter and AC coil cleaning, Air conditioner, and system optimization, ensuring your peace of mind and consistent comfort throughout the year."
          }
        },
        {
          "@type": "Question",
          "name": "What are the advantages of the AMC contract?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AMC ensures regular maintenance, reducing repair costs and extending the equipment’s lifespan with professional service."
          }
        },
        {
          "@type": "Question",
          "name": "Why Do You Need an AMC in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Dubai’s harsh climate, an AMC ensures your AC runs efficiently year-round, preventing costly repairs and discomfort."
          }
        }
      ]
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/home-appliances-repair/appliances-amc-service/#breadcrumb",
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
          "name": "Appliances AMC Service",
          "item": "https://www.fajservices.ae/services/home-appliances-repair/appliances-amc-service/"
        }
      ]
    }

  ]
}

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
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/AMCFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/AMCTestimonial.json`),
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
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={metaURL} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={metaImage} />
          <meta property="og:image:alt" content="Annual Maintenance Contract" />
          <meta property="og:site_name" content="FAJ Technical Services L.L.C" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={metaImage} />
          <meta name="twitter:image:alt" content="Annual Maintenance Contract" />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Home Appliances AMC Services with Best Maintenance Contract in Dubai</h1>
            <p>FAJ has been providing commercial kitchen equipment and appliance maintenance contract services in Dubai, Sharjah, and Abu Dhabi since 2010.< br />
              Regular Planned Preventive Maintenance (PPM) is essential for keeping appliances efficient and minimising unexpected failures.
              As appliances age, they become more prone to breakdowns, often at inconvenient times.< br />
              With FAJ Appliance Services, our annual Domestic or Commercial Appliances Contract offers peace of mind by providing a predictable budget for maintenance, helping you avoid unexpected repair costs.< br />
              Contact us today to book a technician for an inspection and arrange your Appliances AMC Services Contract Cover to start now.
            </p>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        {/* Maintenance Contract */}
        <MaintenanceContract />
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Appliances Maintenance Contract</h2>

                <p className="mb-2">
                  If you need AMC services for kitchen equipment and appliances, contact us for the best and most reliable service throughout the year.
                  Enjoy peace of mind knowing that your kitchen equipment and appliances are running smoothly for your business. We've got you covered with cooking, baking, cooling, refrigeration, laundry equipment, ice makers, dishwashers, and other appliances.

                </p>


                <h2 className="cs_fs_20 mb-1 pt-1 mt-0 text-align-left" style={{ fontSize: "20px" }}>Planned Preventative Maintenance (PPM) Services</h2>
                <p className="mb-0">
                  Our appliances technician can create a customized Planned Preventative Maintenance Package for your house or business properties. <br />
                  This package is created to keep your washing machines, dryers, dishwashers, ovens, refrigerators, and coffee machines running efficiently. By taking a proactive approach, you can reduce the likelihood of unexpected breakdowns and the costs associated with them.<br />
                  Our Planned Preventative Maintenance Package includes repair, maintenance, and testing, making it ideal for both major and small appliances across all properties. This package ensures that your air conditioning system operates smoothly and helps prevent breakdowns.</p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/boj7h-gOf7M?si=wNggMssriwyjMGo1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </section>



        {/* Why  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">The Importance of Kitchen Equipment Maintenance Contract Service  </h2>
            <p>
              In a commercial kitchen, keeping your equipment efficient and safe is essential. Regular maintenance is not merely a routine task but a vital necessity that can greatly affect your business.
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('Cooking-Range-Repair-Nearby-You')} alt="Appliances AMC Services" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Ensures Compliance: </strong> Food safety is vital for food service businesses. Regular equipment maintenance prevents contamination and ensures hygienic food preparation. </li>
                  <li> <strong> Enhances Efficiency and Productivity: </strong> In a bustling kitchen, effective equipment is crucial for maintaining productivity and satisfying customer demands. </li>
                  <li> <strong> Enhances Safety for Staff: </strong> A safe working environment is crucial for your staff's well-being. Regular maintenance helps prevent accidents and injuries from faulty equipment. </li>
                  <li> <strong> Eaintains Consistent Food Quality: </strong> Consistent food quality is vital for customer satisfaction and repeat business. Regular maintenance ensures your equipment functions properly for uniform cooking results. </li>
                  <li> <strong> Eost Savings on Repairs: </strong> Addressing minor issues quickly can save your business on repairs and emergency calls. Regular kitchen maintenance is essential for the longevity, efficiency, and safety of your equipment. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Kitchen Equipment Problems That May Require Maintenance   </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Poor Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Ignoring regular maintenance of kitchen equipment can cause wear and tear, greatly impacting its overall efficiency and long-term lifespan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Equipment Failure</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      In the hospitality industry, commercial kitchen equipment is a crucial asset. Its design optimizes operations, so any failure can cause significant disruptions.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Improper Storage</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      To prevent food contamination, it&apos;s essential to store food at the correct temperatures, label and date all items, and use appropriate storage containers.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Food Poisoning</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Foodborne illness occurs when food contaminated with harmful bacteria, viruses, or toxins is consumed. Examples include aflatoxins and raw kidney beans.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking Appliances</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Leaks in kitchen appliances are usually due to damaged gaskets, seals, or hoses. If you spot a leak, turn off the appliance and the water supply to prevent damage.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Commercial Kitchen Fires</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      Commercial kitchen fires pose a serious hazard in the restaurant industry, occurring frequently and leading to devastating consequences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Equipment Overheating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      Overheating is a common issue with commercial kitchen equipment like ovens and fryers, often resulting from various performance-affecting factors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Electrical Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      As we enhance <a href="/orphan/">kitchen</a> efficiency with electrical appliances, increased reliance can lead to issues that need prompt attention to ensure safety and functionality.
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

        {/*HERE ARE THE SERVICES */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">HERE ARE THE MAINTENANCE SERVICES WE OFFER FOR KITCHEN EQUIPMENTS </h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('dishwasher-repair-service')} alt="Appliances AMC Services" />

                
              </div>

              <div className="col-xl-6">
                <p className="mb-0">
                  Here are some key points to consider for maintaining commercial kitchen equipment:
                </p>

                {/* <p className='mb-0'><strong>Our services include:</strong></p> */}
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Service Scheduling: </strong> Regular maintenance should be scheduled at specific intervals, such as weekly, monthly, or quarterly, depending on the equipment type and its usage.</li>
                  <li> <strong> Preventive Maintenance: </strong> This involves cleaning, lubricating, and inspecting kitchen equipment to identify and resolve potential issues before they escalate into major problems.</li>
                  <li> <strong> Repair and Replacements: </strong> Timely repairs or replacements are essential to prevent equipment failure and reduce downtime.</li>
                  <li> <strong> Safety: </strong> Safety should be a top priority when maintaining equipment. Staff should be trained on proper safety procedures and equipment should be regularly inspected for potential hazards.</li>
                  <li> <strong> Professional Assistance: </strong> FAJ professional technician for major repairs and maintenance is important, especially for equipment requiring specialized skills.</li>
                  <p className="mb-0">
                    We provide hotel kitchen equipment maintenance in the UAE to ensure safe operations and extend kitchen equipment life.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section >

        {/* Benefits */}
        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">Benefits Of Regular Appliance Service and Maintenance in Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">

                <div className="col-md-3 mb-2">
                  
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/24x7b')} alt="24x7" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Routine Service</h3>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                   <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/call')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">On-call services</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your home appliances, delaying the need for replacements.</p>

                    </div>
                </div>

                <div className="col-md-3 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/gearicon')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Genuine Spare Parts</h3>
                      <p className="small">Knowing your commercial kitchen equipment is in top condition gives you confidence and removes the stress of unexpected failures.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/wellstar')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Maintenance Costs</h3>
                      <p className="small">High-quality equipment may be more expensive initially, but it typically breaks down less frequently and requires fewer repairs.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/trained-b')} alt="trained icon" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Increased Efficiency</h3>
                      <p className="small">Commercial kitchen equipment can improve the efficiency of daily tasks in your kitchen. · Lower Maintenance Costs · Superior Quality.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/wellicon')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Cost Efficiency</h3>
                      <p className="small">FAJ a Save hand maintenance. Here's a cost comparison: a commercial kitchen helps you avoid high startup equipment costs.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/annual-contract-b')} alt="annual contract icon" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Report and Updates</h3>
                      <p className="small">FAJ is releasing a report on the condition of commercial kitchen equipment, outlining actions to enhance efficiency and safety.</p>
                    </div>
                  
                </div>
                <div className="col-md-3 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/installation-b')} alt="installation icon" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Experts and Trained</h3>
                      <p className="small">FAJ technicians to provide customers with effective maintenance, repair for commercial kitchen equipment to ensure satisfaction.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>

            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1-new')} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('fajteam')} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise  */}
        <section className="section cs_py_30 bg-light-gray ">
          <div className="container">
            <h3>We are specialise in Appliances services for the following brands</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/lg/">
                    <b>LG Appliance Service</b>
                  </Link>
                  : FAJ is here to support you when things go wrong. We understand that your LG appliances are essential for daily life, keeping your food fresh and meals cooked.
                </p>
                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/samsung/">
                    <b>Samsung Appliance Service</b>
                  </Link>
                  : If you are facing any problems with your Samsung refrigerator, washer dryer, or dishwasher, contact the FAJ team for same-day repair service in Dubai.
                </p>
                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/electrolux/">
                    <b>Electrolux Appliance Service</b>
                  </Link>
                  : When you need Electrolux appliance repair in Dubai, we have a team of professional and qualified technicians available throughout the UAE.
                </p>
                <p className="mb-0">

                  <b>Bosch Appliance Service</b>
                  : If you are looking for the best Bosch refrigerator repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch cooking range, Washing machine, refrigerator service provider in the area.
                </p>
                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/viking/">
                    <b>Viking Appliance Service</b>
                  </Link>
                  : Your Viking appliances may require repair or maintenance and we can help. For high-quality Viking refrigerator, range or oven repair in Dubai, rely on FAJ.
                </p>
                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/daewoo/">
                    <b>Daewoo Appliance Service</b>
                  </Link>
                  : We provide expert services for Daewoo appliance repair in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator, dishwasher, dryer and more.
                </p>
                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/siemens/">
                    <b>Siemens Appliance Service</b>
                  </Link>
                  : Are you concerned about your Siemens washing machine malfunctioning and searching for a reliable Siemens appliances company in Dubai? Contact us for same-day service!
                </p>
                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/teka/">
                    <b>Teka Appliance Service</b>
                  </Link>
                  : If you&apos;re searching for the best Teka appliances repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area.
                </p>

                <br />
                <p>
                  <a href="/services/home-appliances-repair/brands/aeg/">AEG</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/ariston/">Ariston</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/beko/">Beko</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/blomberg/">Blomberg</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/faber/">Faber</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/fagor/">Fagor</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/fisher-paykel/">Fisher and Paykel</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/foster/">Foster</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/gaggenau/">Gaggenau</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/hitachi/">Hitachi</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/hoover/">Hoover</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/indesit/">Indesit</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/neff/">Neff</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/smeg/">Smeg</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/sub-zero/">Sub Zero</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/terim/">Terim</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/whirlpool/">Whirlpool</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/zanussi/">Zanussi</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/de-dietrich/">De Dietrich</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/baumatic/">Baumatic</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/bertazzoni/">Bertazzoni</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/bompani/">Bompani</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/boston/">Boston</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/brandt/">Brandt</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/gibson/">Gibson</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/gorenje/">Gorenje</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/hisense/">Hisense</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/kelvinator/">Kelvinator</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/kenmore/">Kenmore</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/panasonic/">Panasonic</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/sanyo/">Sanyo</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/sears/">Sears</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/wolf/">Wolf</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/haier/">Haier</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/elica/">Elica</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/marvel/">Marvel</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/miele/">Miele</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/maytag/">Maytag</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/toshiba/">Toshiba</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/thermador/">Thermador</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/sharp/">Sharp</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/admiral/">Admiral</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/aftron/">Aftron</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/unimac/">Unimac</a></p>

              </div>

            </div>

            <div id="get-quote" className=" mt-3">
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

        
        {/* testimobial section */}
        {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg={reviewsbg}
            testimonialData={testimonial_data}
            sectionId="home-testimonials"
          />
        )}

        {/* Faqs */}
        <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>

        </section>
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

export default AppliancesMaintenanceContractDetail;