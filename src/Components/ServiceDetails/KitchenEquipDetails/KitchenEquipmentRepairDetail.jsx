import { useEffect, useRef, useState, useCallback, Suspense } from "react";
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
const KitchenEquipmentRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Commercial Kitchen Equipment Maintenance Services and Repair");
  const metadescription = String(description || "Looking for expert commercial kitchen equipment maintenance services in Dubai? We offer the best repair, installation, genuine parts, and deep cleaning");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Kitchen Equipment Repair, Commercial Cooking Equipment Repair");
  const metaURL = String(URL || "https://www.fajservices.ae/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/kitchen-equip-amc-service/public");
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Commercial Kitchen Equipment Maintenance Services and Repair in Dubai",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3340",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Commercial Kitchen Equipment Maintenance Services and Repair",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Kitchen Equipment Installation",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Kitchen Equipment Diagnostics" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Kitchen Equipment Repair Service" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Restaurant Kitchen Equipment Maintenance" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Kitchen Equipment Annual Maintenance Contract" }
              }
            ]
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/#breadcrumb",
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
          "name": "Commercial Kitchen Equipment Maintenance Services",
          "item": "https://www.fajservices.ae/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-maintenance-services/"
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
          fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/FAQs/KitchenEquipmentRepairFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/Testmonials/KitchenEquipmentRepairTestimonials.json`),
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
          <meta name="description" content={metadescription}></meta>
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
            <h1 className="cs_fs_30">Expert Commercial Kitchen Equipment Maintenance Services and Repair Near You, in Dubai, UAE</h1>
            <p>Kitchen Equipment Maintenance Solutions, a division of FAJ Technical Services L.L.C established in 2010, specialises in the repair and maintenance of food service equipment within the commercial kitchen sector in Dubai, UAE.<br />
              Our primary objective is to ensure the optimal functioning of our clients' commercial kitchen equipment maintenance services and repair while fully complying with all regulatory requirements in Dubai.<br />
              We are a reliable provider of repair, maintenance, and servicing, catering to a diverse range of establishments, including restaurants, hotels, and kitchens in schools, colleges, and hospitals.
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>

          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5 mb-2">
              <div className="col-md-6">
                <h2 className="cs_fs_20 mb-1" style={{ fontSize: "23px" }}>Catering Equipment Maintenance Services</h2>
                <p className="mb-2">We know that quick service and repair of your catering equipment is essential, as downtime can severely affect your profits.<br /> The catering industry is fast-paced and highly demanding, which is why we at FAJ prioritise minimising downtime and ensuring smooth operations. This includes servicing freezers, chillers, ovens, ranges, hoods, ice makers, dishwashers, and air conditioning units.</p>

                <h2 className="cs_fs_20 mb-1 pt-1 mt-0 text-align-left" style={{ fontSize: "24px" }}>Commercial Cooking Equipment Call-out</h2>
                <p className="mb-0">The technical inspection fee which covers diagnosis, transportation, and reinstallation in Dubai premises. Please note that this fee is non-refundable.</p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/boj7h-gOf7M?si=NGo8-AL3GCCePGf1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

            </div>
            <h2 className="cs_fs_24 mb-1 border-small-top pt-3">Planned Preventive Maintenance (PPM) Services</h2>
            <p className="mb-2">Our catering equipment technician can provide your business with a customised Planned Preventive Maintenance Package to keep your catering, warewashing, and refrigeration equipment compliant and running efficiently. This proactive approach reduces the likelihood of unexpected breakdowns and associated costs.<br />Our Planned Preventive Maintenance Package, which includes maintenance, repair, and testing, is ideal for any restaurant, canteen, or hospitality venue looking to ensure its equipment operates smoothly and prevent breakdowns.</p>

          </div>
        </section>


        {/* Why  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30" style={{ fontSize: "28px" }}>Why is Restaurant Kitchen Equipment Maintenance Important in Dubai?</h2>
            <p>Keeping your professional kitchen equipment regularly maintained is important to ensure the longevity of your equipment, that your customers receive high-quality food, and to minimise costly downtime in your business.</p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('kitchen-equip-amc-repair')} alt="Commercial Cooking Equipment Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li><strong>Identifying Issues Early:</strong> Regular professional maintenance of your kitchen equipment helps catch problems early.</li>
                  <li><strong>Energy Efficiency:</strong> Ensure that your catering equipment is operating efficiently to avoid wasting electricity.</li>
                  <li><strong>Saving Money in the Long Run:</strong> Regular servicing of restaurant equipment can prevent costly repairs down the line.</li>
                  <li><strong>Compliance with Product Safety Standards</strong>: If you store food in commercial appliances, make sure they comply with food safety regulations. A professional service can assist with this.</li>
                  <li><strong>Damage Control:</strong> Regularly inspect for potential hazards, including any harmful leaks from your kitchen equipment.</li>
                  <li><strong>Peace of Mind: </strong>Ensuring that your professional kitchen equipment functions properly gives you peace of mind, allowing you to focus on your business.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems with Commercial Kitchen Equipment</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Refrigeration</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Refrigeration equipment, such as walk-in freezers and chillers, is vital in the kitchen. Malfunctions in refrigeration can lead to significant issues.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Equipment Failure</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Commercial kitchen equipment is an essential investment for businesses. The kitchen layout is optimized to enhance efficiency and reduce energy use.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Poor Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Commercial kitchens generate heat and grease. Proper ventilation is crucial to prevent overheating, poor air quality, and fire risks.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Electrical Problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ensure your kitchen has a proper electrical setup for safety. Consult a licensed electrician to assess power needs and avoid circuit overloads.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Uneven Cooking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Many kitchens neglect regular calibration, causing ovens, grills, and fryers to lose their settings and resulting in inconsistent cooking temperatures.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Conclusion</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Explore our electric stoves and ovens today. Avoiding common cooking or baking equipment mistakes keeps your kitchen efficient and productive.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Improper ventilation</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Ductwork is a crucial part of the kitchen ventilation system, and inadequate installation can lead to serious safety and performance problems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking Appliance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Leaks are often caused by damaged or worn gaskets, seals, or hoses. To fix this, turn off the appliance and shut off the water supply.</p>
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

        {/*HERE ARE */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Here Are the Service We Offer For Commercial Kitchen Equipment</h2>
            <p className="mb-0">
              We specialise in all types and brands of commercial kitchen equipment, including built-in commercial appliances.
            </p>
            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('kitchen-equip-amc-service')} alt="Commercial Cooking Equipment Repair" />
              </div>

              <div className="col-xl-6">
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li><strong>Kitchen Equipment Installation: </strong>Professional installation of various brands and types of professional kitchen equipment for optimal performance and efficiency.</li>
                  <li><strong>Kitchen Equipment Diagnostics: </strong>We provide thorough fault-finding services to identify issues, perform eligibility assessments, and provide detailed quotes to address system concerns.</li>
                  <li><strong>Kitchen Equipment Repair Service: </strong>We provide prompt and effective repair services for all restaurant kitchen equipment components, addressing issues such as leaks, electrical failures, and system malfunctions.</li>
                  <li><strong>Kitchen Equipment Annual Maintenance Contract: </strong>This contract outlines the terms and services for the annual maintenance of your commercial kitchen equipment system.</li>
                  <p className="mb-0">
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for optimal performance, efficiency, and longevity of your Professional Kitchen Equipment
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

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/24x7b')} alt="24x7" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Routine Service</h3>
                      <p className="small">
                        Routine checks reduce the risk of faults and keep your commercial kitchen safe, efficient, and always ready to serve.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/call')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Reports and Updates</h3>
                      <p className="small">
                        Detailed reports update you on equipment condition, helping you fix issues early and avoid costly, unexpected downtime.
                      </p>

                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/gearicon')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Improved Efficiency</h3>
                      <p className="small">
                        Proper maintenance improves kitchen efficiency, lowers long-term costs, and ensures the highest quality food preparation daily.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/wellstar')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Expert Technicians</h3>
                      <p className="small">
                        Expert technicians keep your appliances performing at their best, supporting smooth kitchen operations and customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/trained-b')} alt="trained icon" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Cost Efficiency</h3>
                      <p className="small">
                        Regular service reduces major repair costs and protects your investment, making your kitchen more reliable and cost-effective.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/wellicon')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Lower Maintenance Costs</h3>
                      <p className="small">
                        High-quality equipment may cost more upfront but saves money later, with fewer breakdowns and dependable daily performance.
                      </p>
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
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>	With maintenance contract, enjoy year-round service, keeping your kitchen equipment running smoothly and ensuring peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your kitchen appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
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
                    <h3>We Are Experts</h3>
                    <p>We are experts in catering equipment repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
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
                    <p>Our skilled kitchen equipment technicians are highly trained, providing excellent service for major appliance brands efficiently.</p>
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
        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <h3>We specialise in Catering Equipment Maintenance for the Following</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"><strong>Restaurant Kitchen Equipment Maintenance in Dubai</strong>: FAJ provides reliable maintenance and services in Dubai and Sharjah. Our team is made up of professionals who are experts in a variety of kitchen equipment, including countertop induction cookers, beverage dispensers, ice cream makers, gas ranges, refrigerated equipment, display counters, food service equipment, pantry equipment, food processing machinery, cooking lines, bakery lines, and coffee and bar equipment.</p>
                <p className="mb-0"><strong>Hotels Kitchen Equipment Maintenance Contract (AMC) in Dubai</strong>: Based in Dubai, FAJ is your go-to destination for maintenance services for walk-in coolers, chillers, freezers, commercial gas ranges, professional ovens, microwaves, grinders, mixers, dishwashers, and glasswashers. We specialise in air conditioning systems and various lines of equipment, including Bakery equipment, Beverage, Blenders, Coffee line(espresso and coffee machines), Cooking ranges, Cold room, Dishwashing, Ovens, Food Processing, and Laundry equipment. Our comprehensive MEP (mechanical, electrical and plumbing services cover everything from repairs to regular maintenance contract services and PPM.</p>
                <p className="mb-0"><strong>Professional Kitchen Equipment Repair and Maintenance Service</strong>: Our professional equipment includes a commercial dishwasher, commercial ice maker, glass washer, pizza oven, deep fryer, convection oven, dough mixer, and meat mixer cleaning services in Dubai.</p>
                <p className="mb-0">In addition, we provide electric and plumbing maintenance services, so you can have peace of mind knowing you&rsquo;re in the right place. FAJ is dedicated to prioritising efficiency and reliability.</p>
                <p><strong>Catering Equipment Maintenance and Repair Service in Dubai: </strong>Trust on our skilled team to efficiently resolve any issues with your catering equipment, including air conditioners, refrigeration systems, cold storage units, espresso machines, commercial coffee machines, chillers, freezers, dishwashers, ice makers, pizza ovens, convection ovens, commercial hoods, kitchen chimneys, countertop induction cookers, beverage dispensers, ice cream makers, gas ranges, refrigerated equipment, display counters, food service equipment, pantry equipment, food processing equipment, cooking lines, bakery lines, Orange Juicer, Slush Machine Single, Automatic Citrus Juicer with Lever, Proofer, Planetary Mixer, Electric Fryer, Conveyor Dishwasher, Under Counter Dishwasher, Electric Convection Oven, Electric Convection Steamer, Electric Pizza Oven 4 Deck, Gas Combi Oven 6 Trays, Electric Pizza Oven Double Deck, Convection Oven with Deck Oven, Rational Gas Combi Oven, Gas Pizza Oven Double Deck, Hood Type Dishwasher, Pancake Machine, Coffee Grinder, Bar Cooler, Toaster and coffee and Bar lines. We will restore functionality and ensure everything operates smoothly.</p>

                <p className="mb-0"><strong>MKN, Rational, Ozti, Alto-Shaam, Amana Commercial, Bakers Pride, Convotherm, Professional Electrolux, Fagor, Hobart, Conti, Caplain, Fri-Jado, Spaa, Empero, Menumaster Commercial, Unox, Capinox, Simonelli, Hoshizaki, Dr. Coffee, Bunn, Venix, La Marzocco, De'Longhi, Jura, Anmo, Marco, Feema, Conveyor, Zanussi, Meiko, Elframo, Brema, Eurfrigor, Follett, Foster's, Icetech, Simag, Wolf, Smeg, Viking, True Star, Salva, Miska, Irinox, GBG, Cooktek, Toastmaster, Lincat, Helia Smoker, Faema, Cino, Blendtec, Wells, Tekno Stamap, Hamilton Beach, Williams, Trubchif, Pitco, Josper, Hamilton Beach, Gemm, Berto's, Victoria, Scotsman, Kromo, Hatco, Coreco, La Cimbali, Antunes, Zumex, Santos, Middleby, Jordao, Sesmon, Nemco Food, Matick Pastry, Klimasan, Robot Coupe, Roller Grill, Santos, KitchenAid, Server, Aristarco, Brema, American Range, and Pizza Group</strong></p>

              </div>

            </div>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>

          </div>
        </section>

        {/* Brands section */}
        <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
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
        </Suspense>

        {/* Maintenance Contract */}
        <MaintenanceContract />
        {/* testimobial section */}
        {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg="testimonialbg"
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

export default KitchenEquipmentRepairDetail;