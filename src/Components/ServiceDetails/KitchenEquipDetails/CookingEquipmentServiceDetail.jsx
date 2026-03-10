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
import Testimonial1 from "../../Testimonial/Testimonial1";
import BrandsSliderSection from "../../BrandsSliderSection";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const CookingEquipmentServiceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Commercial Cooking Appliances Repair & Maintenance in Dubai");
  const metadescription = String(description || "FAJ experts in commercial cooking appliances repair in Dubai, professional, stove, fryer, hood, cooker, kitchen equipment maintenance and AMC services.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Commercial Cooking Equipment Repair, Dubai, professional Kitchen Appliances Service, professional Cooking Range Repair, professional Gas Stove Repair, professional Deep Fryer Service, professional Oven Repair, Restaurant Equipment Maintenance");
  const metaURL = String(URL || "https://www.fajservices.ae/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/commercial-cooking-appliances-repair-service/public");
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Best Commercial Cooking Appliances Repair Service in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3445",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Commercial Cooking Appliance Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Repair Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Cooking Range Oven Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Commercial Oven Maintenance" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Grill & Hob Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Preventive Maintenance for Cooking Appliances" }
              }
            ]
          }
        ]
      }
    },
    {
      "@type": "VideoObject",
      "@id": "https://www.fajservices.ae/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/#video",
      "name": "Cooking Range Oven Repair Service in Dubai | Cooking Range Oven Maintenance | FAJ",
      "description": "If you're dealing with a malfunctioning cooking range or oven, it's time to dive deep into the world of appliance repair with our expert guide. In this video, we'll provide essential maintenance and cleaning tips specifically tailored for commercial cooking machines in FAJ Dubai. Learn how to diagnose common issues and perform effective repairs, ensuring your kitchen runs smoothly. Whether you're a professional chef or a home cook, these insights will help you keep your cooking equipment in top shape. Don't let a faulty oven slow you down—watch now and discover the best practices for service and maintenance!",
      "thumbnailUrl": "https://img.youtube.com/vi/SLGpswtzn-w/maxresdefault.jpg",
      "uploadDate": "2023-10-16T12:00:10Z",
      "duration": "PT2M8S",
      "contentUrl": "https://www.youtube.com/watch?v=SLGpswtzn-w",
      "embedUrl": "https://www.youtube.com/embed/SLGpswtzn-w",
      "potentialAction": {
        "@type": "WatchAction",
        "target": "https://www.youtube.com/watch?v=SLGpswtzn-w"
      },
      "publisher": {
        "@type": "Organization",
        "name": "FAJ Technical Services LLC",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.fajservices.ae/img/FajLogo.svg"
        }
      },
      "hasPart": [
        {
          "@type": "Clip",
          "name": "Introduction and Culinary Adventure",
          "startOffset": 0,
          "endOffset": 38,
          "url": "https://www.youtube.com/watch?v=SLGpswtzn-w&t=0s"
        },
        {
          "@type": "Clip",
          "name": "Common Issues: Temperature & Door Troubles",
          "startOffset": 39,
          "endOffset": 59,
          "url": "https://www.youtube.com/watch?v=SLGpswtzn-w&t=39s"
        },
        {
          "@type": "Clip",
          "name": "Technical Faults: Control Panels & Gas Sparks",
          "startOffset": 60,
          "endOffset": 107,
          "url": "https://www.youtube.com/watch?v=SLGpswtzn-w&t=60s"
        },
        {
          "@type": "Clip",
          "name": "Commercial & Domestic Repair Services",
          "startOffset": 108,
          "endOffset": 128,
          "url": "https://www.youtube.com/watch?v=SLGpswtzn-w&t=108s"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the most important piece of equipment in a commercial kitchen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commercial ranges are essential in professional kitchens, enabling chefs to cook multiple dishes at different heat levels simultaneously."
          }
        },
        {
          "@type": "Question",
          "name": "Why is cooking equipment important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using high-quality kitchen equipment allows for precise temperature control, consistent cooking methods, and optimal food preparation techniques. This leads to consistently high-quality dishes, enhancing customer satisfaction and strengthening brand reputation."
          }
        },
        {
          "@type": "Question",
          "name": "What is commercial cooking equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ovens, grills, and hobs are essential in every kitchen. While deep fryers, salamander broilers, steam tables, and griddles are popular, they are not always needed in every kitchen. Additionally, some cooking equipment is required only for preparing specialized dishes."
          }
        },
        {
          "@type": "Question",
          "name": "What material is used to make most commercial kitchen equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "304 Stainless Steel is a type of austenitic steel that is especially favored in the foodservice industry because of its corrosion resistance, ease of cleaning, and ability to endure humid environments."
          }
        },
        {
          "@type": "Question",
          "name": "How long should commercial kitchen equipment last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The core of the kitchen is its cooking equipment, which includes ovens, ranges, and gas stovetops. These items are essential in the food production process and have an average lifespan of 10 to 15 years."
          }
        },
        {
          "@type": "Question",
          "name": "What equipment is needed in a restaurant kitchen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ovens: Ovens are likely the first pieces of equipment that come to mind when considering restaurant cooking tools.\nRanges and Ventilation: Ranges are essential for various cooking methods, and proper ventilation is crucial for maintaining air quality in the kitchen.\nFood Processors: These are invaluable for efficiently preparing ingredients.\nMixers: Mixers are necessary for baking and other food preparation tasks.\nSlicers: Slicers help with quickly preparing meats, cheeses, and vegetables.\nFood Prep Counters and Cutting Boards: These surfaces are vital for food preparation and maintaining hygiene.\nFreezers and Refrigerators: Proper storage equipment is important for preserving food quality and safety.\nSafety Equipment: This includes items like fire extinguishers and first aid kits to ensure a safe working environment."
          }
        },
        {
          "@type": "Question",
          "name": "What is cooking equipment designed for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cooking equipment should be designed to take advantage of our knowledge regarding how different factors influence food during the cooking process. This approach will allow food processors to create methods that not only meet essential food safety standards but also enhance quality and maximize production efficiency."
          }
        },
        {
          "@type": "Question",
          "name": "What is induction cooking equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Induction ranges provide a fast, efficient, and precise cooking method that is perfect for commercial kitchens. They use electromagnetic energy to heat the cookware directly, rather than warming the surface of the range itself. This direct heating leads to quicker heating times and improved temperature control."
          }
        },
        {
          "@type": "Question",
          "name": "What is HoReCa equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HoReCa products encompass a wide range of essential items for the hospitality and food industry. These include commercial kitchen equipment, tableware, linens, and cleaning supplies. Additionally, the industry features food and beverage ingredients as well as technology solutions."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/#breadcrumb",
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
          "name": "Kitchen Equipment Maintenance",
          "item": "https://www.fajservices.ae/services/kitchen-equipment-maintenance/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Commercial Cooking Appliances Repair Service",
          "item": "https://www.fajservices.ae/services/kitchen-equipment-maintenance/commercial-cooking-appliances-repair-service/"
        }
      ]
    }
  ]
}


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
          fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/FAQs/CookingEquipmentServiceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/Testmonials/CookingEquipmentServiceTestimonials.json`),
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

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Commercial Cooking Appliances Repair & Maintenance Services in Dubai</h1>
            <p>FAJ, established in 2010, specialises in minimising downtime for the catering industry through repair and annual maintenance contracts. Our catering division supplies, installs, repairs, and maintains commercial catering and warewashing equipment.<br />
              We provide services ranging from emergency repairs on electric and gas catering appliances to complete commercial kitchen installations, as well as repair and maintenance services tailored to businesses of all sizes
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>


        {/* Cooking Range Repair Nearby You */}

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }} >Commercial Catering Equipment Services</h2>

                <p className="mb-2">We know how important it is to have your catering equipment serviced, maintained, and repaired promptly, as downtime can break your profits.<br />
                  We have implemented a cloud-based Field Service and annual maintenance contract (AMC) to provide efficient and transparent service for all breakdowns and kitchen maintenance.
                </p>

                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Emergency Cooking Equipments Repair</h2>
                <p className="mb-0">
                  <b>Terms & Conditions:</b> There is a callout fee that applies for each diagnosis, depending on the capacity applied. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.<br />
                  <b>CHOOSE FAJ FOR YOUR PEACE OF MIND<br />
                    <small>We provide 2-month repair warranty
                      and 3-month parts warranty as standard.</small> </b>
                </p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/SLGpswtzn-w"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <h2 className="cs_fs_24 mb-1 border-small-top pt-3">Planned Preventive Maintenance (PPM) Services</h2>
            <p className="mb-2">Our catering equipment technician can provide your business with a customised Planned Preventive Maintenance Package designed to keep your catering, cooking line, baking line, and refrigeration equipment compliant and running efficiently.< br /> This proactive approach reduces the likelihood of unexpected breakdowns and associated costs. Our Planned Preventive Maintenance Package includes maintenance, repair services, and testing. It is ideal for hotels, restaurants, canteens, and other venues in the hospitality and education sectors looking to ensure their equipment operates smoothly and to prevent breakdowns.</p>
          </div>
        </section>

        {/* Most common Cooker faults: */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Cooking Equipment Maintenance Service Important in Dubai?</h2>
            <p>Regular maintenance of commercial kitchen cooking equipment is essential for safe and efficient operation.</p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('commercial-cooking-appliances-repair-service')} alt="Gas Cooker Repair" />
              </div>
              <div className="col-md-6">
                <ul>
                  <li><strong>Efficiency:&nbsp;</strong>Regular maintenance ensures that the hot plates, gas range, cooker, stove, deep fryer, and hood heat evenly and accurately, reducing energy waste and providing consistent cooking results.</li>
                  <li><strong>Food Quality:&nbsp;</strong>A clean commercial cooking appliance prevents unwanted flavours and ensures proper cooking and baking, which are essential for a positive customer experience.</li>
                  <li><strong>Reduced Downtime:&nbsp;</strong>Preventive maintenance (AMC) helps identify potential issues before they result in costly repair or breakdowns.</li>
                  <li><strong>Cost Savings with Maintenance Contract:&nbsp;</strong>Regular maintenance can extend the lifespan of commercial cooking ranges, stoves, hobs, induction, hot plates, deep fryers, and chimneys while also lowering repair costs. This ultimately saves businesses money over time.</li>
                  <li><strong>Hygiene:&nbsp;</strong>Regular cleaning helps prevent bacteria and other contaminants, ensuring a safe environment for cooking and baking.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30  bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Problems of Cooking Equipment That May Require Service</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Improper Ventilation</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A bad or inadequate ventilation system that is too small or unsuitable for your kitchen equipment can cause serious problems.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Leaking Appliance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Leaks are often caused by damaged gaskets, seals, or hoses. To fix this, turn off the commercial cooking appliance and ensure the water is off.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Equipment Failure
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">As a business, your commercial kitchen equipment is your key asset. Your kitchen has been designed to ensure optimal functionality and efficiency.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Uneven Cooking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Unequal heat distribution can lead to undercooked or overcooked food. The cooking range often does not reach the selected temperature.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Routine Cleaning</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Regular cleaning & maintenance are essential. Set a routine to clean hoods, ducts, and all kitchen covers, such as floors, countertops, and equipment.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Employee Failure</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">As a food industry professional, it&apos;s your duty to ensure your employees clearly know how to safely and efficiently operate all equipment.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Electrical Problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Electrical issues can seriously affect equipment by either oversupplying or undersupplying the required voltage and amperage.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Poor Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">When kitchen cooking equipment is not regularly and properly serviced, it becomes much more prone to unnecessary wear and tear.</p>
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

        {/*Why should you choose us? */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30" style={{ fontSize: "28px" }}>Comprehensive Maintenance of Commercial Cooking Equipment in Dubai</h2>
            <p>We offer repair services for a variety of commercial cooking equipment, including:</p>
            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('Camercial-Kitchen-Equipment')} alt="Gas Cooker Repair" />
              </div>

              <div className="col-xl-6">
                <ul>
                  <li><strong>Commercial Cooking Equipment Installation:</strong> Professional installation of a variety of gas and electric commercial cooking equipment, ensuring optimal performance and efficiency.</li>
                  <li><strong>Commercial Cooking Equipment Diagnostics:</strong> We perform comprehensive diagnostics, eligibility assessments, and provide detailed quotes to resolve any oven issues.</li>
                  <li><strong>Commercial Cooking Equipment Repair Service:</strong> Professional cooking range, stove, hood, and deep fryer repair services for all components, ensuring quick resolution of leaks, electrical failures, and malfunctions. Contact us for service requests or questions!</li>
                  <li><strong>Commercial Cooking Equipment AMC:</strong> This contract details the terms and services for annual maintenance of catering cooking equipment.</li>
                  <p>Regular maintenance is crucial for the optimal performance, efficiency, and longevity of your kitchen restaurant cooking equipment.</p>
                </ul>
              </div>


            </div>
          </div>
        </section>
        {/* The Benefits Of Appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec  bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0"> Benefits of Regular Catering Equipment Maintenance in Dubai </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div >
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Enhanced Food Quality</h3>
                      <p className="small">Kitchen equipment condition directly affects overall food quality, so proper and regular maintenance is essential.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div >
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Improved Workplace Safety</h3>
                      <p className="small">Regular kitchen equipment maintenance prevents contamination, reduces accidents, and ensures safe food preparation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div >
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16 ">Ensures Compliance</h3>
                      <p className="small">Food safety is essential for any food business. Regular maintenance of kitchen equipment prevents contamination and ensures safety.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div >
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Reduced utility cost</h3>
                      <p className="small">Equipment that uses electricity, gas, or water operates more efficiently when kept clean and serviced regularly.</p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div >
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/extending')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Improve Speed of Operations</h3>
                      <p className="small">A restaurant kitchen is a busy place that needs quick turnarounds to meet customer demands. Inefficiency can lead to delays and dissatisfaction.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div >
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Commercial Kitchen Maintenance
                      </h3>
                      <p className="small">Commercial kitchen equipment is costly, so regular cleaning and maintenance are essential for extending its lifespan and minimizing expenses.</p>
                    </div>
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
                    <h3 >Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 >You Are in Control</h3>
                    <p>Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1')} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 >We Are Experts</h3>
                    <p>We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 >Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 >Trustworthy</h3>
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

        {/* We specialise in Hob services for the following brands  */}
        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <h3>We Specialise in Cooking Equipment Services for Following Brands</h3>
            <div className="row">
              <div className="col-12">
                <ul>
                  <li><strong>Professional Cooking Range Repair and Service: </strong>When your gas range breaks down, you need a team that responds quickly.&nbsp;Our experienced technicians are fully qualified to diagnose and repair all types of commercial cookers, from gas to electric models. We aim to get you back up and running with minimal disruption.</li>
                  <li><strong>Angelo Gas Cooking Range Burners Repairs:</strong> Addressing small issues promptly prevents them from escalating into major problems.&nbsp;We conduct repairs such as adjusting thermostats, replacing worn seals, and fixing faulty burners during maintenance service.</li>
                  <li><strong>Commercial Table Top Gas Stove Hotel Restaurant Kitchen:</strong> Are you starting a new catering business or in need of professional catering equipment repairs?<br />FAJ offers a wide range of catering equipment services and reliable repair plans in Dubai. Our expertise includes cookers, stoves, ovens, food warmers, and fryers. Explore our specialized services today. With a focus on accuracy and reliability, we ensure that your essential kitchen equipment receives top-notch repair services.</li>
                  <li><strong>Gas Cooking Range Burner:</strong> Discover our commercial cooking equipment services, including repairs and maintenance.&nbsp;We specialize in maintaining gas stoves, hot plates, induction hobs, and ovens, ensuring they work efficiently. Experience hassle-free solutions that keep your kitchen appliances running smoothly.</li>
                  <li><strong>Vulcan Natural Gas Burner Range Ovens:</strong> As a trusted service provider for gas cookers, stoves, and ovens, we offer a variety of options in our store to suit your commercial cooking and catering needs. Explore our selection of cooking appliances designed to meet all your culinary requirements with ease.</li>
                  <li><strong>Commercial Cooking Equipment Maintenance:</strong> Our highly experienced engineers are available to assist with all your commercial kitchen equipment needs.&nbsp;We provide maintenance, repair, call-out, and installation services for a wide range of equipment, including combi ovens, range ovens, convection ovens, grills, griddles, pizza ovens, and more.</li>
                  <li><strong>Pitco Gas Fryer Repair and Services:</strong> Our professional technician is an expert in Pitco gas fryers. Contact us via call, WhatsApp, or email for commercial deep fryer equipment repairs and servicing.</li>
                  <li><strong>Electrolux Professional Cooking Appliances Maintenance Service: </strong>We are committed to ensuring minimal downtime for your Electrolux Professional Cooking equipment, including cooking ranges, induction hobs, hot plates, and ovens.&nbsp;Our services are available to help your business keep running smoothly.</li>
                  <li><strong>Trusted Commercial Cooking Equipment Repair:&nbsp;</strong>To Keep Your Kitchen Running Smoothly Reliable repairs for commercial cooking equipment are essential for maintaining efficiency in professional kitchens. At FAJ Service Dubai, we specialize in repairing a wide range of cooking appliances, including ovens, stoves, fryers, and grills. Whether you run a restaurant, hotel, or catering business, our expert technicians are dedicated to ensuring that your equipment operates efficiently and safely.</li>
                </ul>
                <p>Commercial Induction Cooker | Counter top Electric Plates | MC Appliance | Corporation cooking appliances | Mirabake Jiangsu Province Baking Proofers, ovens | Kitchen Guys Ranges, Cooktops, Wall Ovens | American Range Commercial Stoves, Ovens, Fryers, Griddles, Broilers, Cheesemelters | Vulcan Equipment Ranges Fryers, Griddles, Combi Ovens, Steamers, Charbroilers | Turbo Air refrigerators and freezers, food prep tables | Omcan Pizza Ovens, Meat Slicers, Ice makers, Spiral Mixers |&nbsp;Webstaurant Store: Refrigeration units, Ranges, Food Prep Equipment | Thermador Cooking Appliances | Henny Penny: Perfecting Fried Food with Pressure Fryers | Taylor: Master of Frozen Desserts and Grilled Foods | Vulcan: The Backbone of Professional Kitchens | Hobart: Your Go-To for Dishwashers and Mixers | True Refrigeration: The Ultimate Cold Storage Solution</p>

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

export default CookingEquipmentServiceDetail;

