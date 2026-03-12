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
const KitchenEquipmentsAMCDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Commercial Kitchen Equipment AMC | Maintenance Contract Dubai");
  const metadescription = String(description || "Get FAJ reliable commercial kitchen equipment AMC services in Dubai. With specialised chiller, freezer, stove, oven, & cooker maintenance agreement");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Kitchen Equipment amc, kitchen equipment maintenance contract, commercial kitchen equipment service, kitchen appliance repair, kitchen equipment repair Dubai, kitchen equipment AMC Dubai, kitchen equipment AMC Abu Dhabi, kitchen equipment AMC Sharjah, gas stove maintenance Dubai, oven maintenance Dubai, cooker maintenance Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/kitchen-equipment-maintenance/commercial-kitchen-equipment-amc/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/kitchen-equip-amc-service/public");


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
          fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/FAQs/KitchenEquipmentsAMCFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/Testmonials/KitchenEquipmentsAMCTestimonials.json`),
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
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Commercial Kitchen Equipment AMC, Kitchen Equipment Maintenance Contract Dubai, Restaurant Equipment AMC, Commercial Kitchen AMC, Kitchen Equipment Service Contract, Commercial Appliance AMC, Kitchen Equipment Preventive Maintenance, Commercial Kitchen Maintenance Plan, Hotel Kitchen Equipment AMC, Catering Equipment AMC, Kitchen Equipment Warranty Service, Commercial Kitchen Service Contract, Kitchen Equipment Care Plan",
              "image": ["https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"],
              "url": "https://www.fajservices.ae/services/kitchen-equipment/commercial-kitchen-equipment-amc/",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "3452",
                "bestRating": "5"
              }
            })}
          </script>
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Commercial Kitchen Equipment Maintenance Contract Services (AMC) in Dubai</h1>
            <p>FAJ has been providing commercial kitchen equipment and appliance maintenance contract services in Dubai, Sharjah, and Abu Dhabi since 2010. Regular Planned Preventive Maintenance (PPM) is essential for keeping appliances efficient and minimising unexpected failures.<br />As appliances age, they become more prone to breakdowns, often at inconvenient times.<br />With FAJ Appliance Services, our annual Domestic or Commercial Appliances Contract offers peace of mind by providing a predictable budget for maintenance, helping you avoid unexpected repair costs. Contact us today to book a technician for an inspection and arrange your Appliances AMC Services Contract Cover to start now.</p>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        {/* Best Home Appliance Service Center */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5 mb-2">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Explore FAJ's Appliances Maintenance Agreement</h2>
                <p className="mb-2">Our annual maintenance contract ensures that your kitchen equipment, both domestic and commercial, receives top-notch care from our expert team of professionals in the UAE.<br />We have been repairing, cleaning, and maintaining a wide range of equipment, including freezers, chillers, gas ranges, stoves, pizza ovens, hot plates, hoods, mixers, blenders, food processors, grinders, snack equipment, beverage equipment, bakeware, microwaves, ovens, and cooktops. Our experienced technicians utilise advanced techniques to keep your home and business running optimally throughout the year.<br />If you're interested in learning more about our AMC options, please feel free to contact us.</p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/boj7h-gOf7M?si=IZFb6k8XekVjCquR"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <h2 className="cs_fs_24 mb-1 border-small-top pt-3" style={{ fontSize: "24px" }}>Planned Preventive Maintenance (PPM) Services</h2>
            <p className="mb-2">Our catering equipment technician can provide your business with a customised Planned Preventive Maintenance Package designed to keep your catering, cooking line, baking line, and refrigeration equipment compliant and running efficiently.< br /> This proactive approach reduces the likelihood of unexpected breakdowns and associated costs. Our Planned Preventive Maintenance Package includes maintenance, repair services, and testing. It is ideal for hotels, restaurants, canteens, and other venues in the hospitality and education sectors looking to ensure their equipment operates smoothly and to prevent breakdowns.</p>
          </div>
        </section>

        {/* Why is Appliance Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30">
          <div className="container">
            <h2>Peace of Mind with Annual Maintenance Contracts</h2>
            <p>Your kitchen equipment and appliances are essential for comfort in your home or business. Like other appliances, they need regular maintenance to operate efficiently and prevent breakdowns. FAJ provides comprehensive annual maintenance contracts (AMC) for café, catering, and restaurant kitchen equipment to ensure your appliances operate smoothly year-round. With our kitchen equipment AMC services, you can enjoy consistent comfort in your space. Experience exceptional peace of mind as we care for your appliances, ensuring optimal performance, energy efficiency, and longevity. Our comprehensive maintenance contract package allows you to say goodbye to unexpected breakdowns. Routine inspections and maintenance of your kitchen equipment are crucial for maintaining efficiency.</p>
            <h2>The Importance of Kitchen Equipment Maintenance Contract Service</h2>
            <p className="mb-0">
              In a commercial kitchen, keeping your equipment efficient and safe is essential. Regular maintenance is not merely a routine task but a vital necessity that can greatly affect your business.
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('kitchen-equip-amc-service')} alt="Kitchen Equipments AMC" />
              </div>
              <div className="col-md-6">
                <ul>
                  <li> <strong>  Ensures Compliance: </strong> Food safety is vital for food service businesses. Regular equipment maintenance prevents contamination and ensures hygienic food preparation. </li>
                  <li> <strong> Enhances Efficiency and Productivity: </strong> In a bustling kitchen, effective equipment is crucial for maintaining productivity and satisfying customer demands. </li>
                  <li> <strong> Enhances Safety for Staff: </strong> A safe working environment is crucial for your staff's well-being. Regular maintenance helps prevent accidents and injuries from faulty equipment. </li>
                  <li> <strong> Maintains Consistent Food Quality: </strong> Consistent food quality is vital for customer satisfaction and repeat business. Regular maintenance ensures your equipment functions properly for uniform cooking results.</li>
                  <li> <strong> Cost Savings on Repairs: </strong> Addressing minor issues quickly can save your business on repairs and emergency calls. Regular kitchen maintenance is essential for the longevity, efficiency, and safety of your equipment.</li>
                </ul>
              </div>
            </div>
            <p>We provide hotel kitchen equipment maintenance in the UAE to ensure safe operations and extend kitchen equipment life.</p>
          </div>
        </section>

        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Kitchen Equipment Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 m-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Poor Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ignoring regular maintenance of kitchen equipment can cause wear and tear, impacting its efficiency and lifespan.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 m-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Equipment Failure</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">In the hospitality industry, commercial kitchen equipment is a crucial asset. Its design optimizes operations, so any failure can cause significant disruptions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 m-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Improper Storage</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">To prevent food contamination, it&apos;s essential to store food at the correct temperatures, label and date all items, and use appropriate storage containers.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 m-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Food Poisoning</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Foodborne illness happens when contaminated food is consumed. Examples include aflatoxins in peanuts, toxic mushrooms, and raw kidney beans.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 m-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking Appliances</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Leaks in kitchen appliances are usually due to damaged gaskets, seals, or hoses. If you spot a leak, turn off the appliance and the water supply to prevent damage.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 m-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Commercial Kitchen Fires</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Commercial kitchen fires pose a serious hazard in the restaurant industry, occurring frequently and leading to devastating consequences.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 m-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Equipment Overheating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Overheating is a common issue with commercial kitchen equipment like ovens and fryers, often resulting from various performance-affecting factors.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 m-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Electrical Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">As we enhance kitchen efficiency with electrical appliances, increased reliance can lead to issues that need prompt attention to ensure safety and functionality.</p>
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

        {/* HERE ARE THE SERVICES WE OFFER FOR HOME APPLIANCES */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">HERE ARE THE MAINTENANCE SERVICES WE OFFER FOR KITCHEN EQUIPMENTS</h2>
            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('commercial-kitchen-equipment-amc')} alt="Kitchen Equipments AMC" />
              </div>

              <div className="col-xl-6">
                <p className="mb-0">Here are some key points to consider for maintaining commercial kitchen equipment:
                </p>
                <ul>
                  <li> <strong> Service Scheduling: </strong>  Regular maintenance should be scheduled at specific intervals, such as weekly, monthly, or quarterly, depending on the equipment type and its usage. </li>
                  <li> <strong> Preventive Maintenance: </strong>  This involves cleaning, lubricating, and inspecting kitchen equipment to identify and resolve potential issues before they escalate into major problems. </li>
                  <li> <strong> Repair and Replacements: </strong>  Timely repairs or replacements are essential to prevent equipment failure and reduce downtime. </li>
                  <li> <strong> Safety: </strong>  Safety should be a top priority when maintaining equipment. Staff should be trained on proper safety procedures and equipment should be regularly inspected for potential hazards. </li>
                  <li> <strong> Professional Assistance: </strong>   FAJ professional technician for major repairs and maintenance is important, especially for equipment requiring specialized skills. </li>
                </ul>

              </div>
            </div>
          </div>
        </section >

        {/* Benefits */}
        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">Benefits Of Regular Appliance Service and Maintenance in Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">

                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/RoutineService')} alt="24x7" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Routine Service</h3>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/On-callservices')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">On-call services</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your home appliances, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/GenuineSpareParts')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Genuine Spare Parts</h3>
                      <p className="small">Knowing your commercial kitchen equipment is in top condition gives you confidence and removes the stress of unexpected failures.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/MaintenanceCosts')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Maintenance Costs</h3>
                      <p className="small">High-quality equipment may be more expensive initially, but it typically breaks down less frequently and requires fewer repairs.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/Increased Efficiency')} alt="trained icon" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Increased Efficiency</h3>
                      <p className="small">Commercial kitchen equipment can improve the efficiency of daily tasks in your kitchen. · Lower Maintenance Costs · Superior Quality.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/CostEfficiency')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Cost Efficiency</h3>
                      <p className="small">FAJ a Save hand maintenance. Here's a cost comparison: a commercial kitchen helps you avoid high startup equipment costs.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/ReportandUpdates')} alt="annual contract icon" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Report and Updates</h3>
                      <p className="small">FAJ is releasing a report on the condition of commercial kitchen equipment, outlining actions to enhance efficiency and safety.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/ExpertsandTrained')} alt="installation icon" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Experts and Trained</h3>
                      <p className="small">FAJ technicians to provide customers with effective maintenance, repair for commercial kitchen equipment to ensure satisfaction.</p>
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
                    <h3 className="">You Are in Control</h3>
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

        <section className="section cs_py_30 bg-light-gray ">
          <div className="container">
            <h2 className="cs_fs_30">What is included in an appliance maintenance Contract?</h2>
            <p className="mb-0">
              When considering the maintenance of appliances and commercial kitchen equipment, it&apos;s important to understand what an appliance contract should include. While many kitchen equipment contractor packages offer these services, the specifics can change.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <p>
                  In this discussion, we will explore the key components of appliance maintenance, highlight their importance, and explain why regular maintenance is important for the longevity of your equipment.
                </p>
                <ul className="acsvs-exp-spl-para tick-ul mb-0">
                  <li> Priority service for repair calls</li>
                  <li>Get a 10% discount on service work</li>
                  <li>Receive a 10% discount on labor charges</li>
                  <li>Get 10% discount on the replacement of the part</li>
                  <li>Major and minor service with kitchen equipment repair work</li>
                  <li>No trip charge for regular appliance repair during normal working hours</li>
                  <li>Enjoy a 10% discount on materials and parts not covered by warranty</li>
                  <li>A guarantee is provided from the date of repair for all customer-ordered repairs</li>
                </ul>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <img className="blue-border" src={getImageSrc('about_img_2')} alt="Kitchen Equipments AMC" />
              </div>
            </div>
          </div>
        </section>

        {/* We are specialise in Appliances services for the following brands */}
        <section className="section cs_py_30 mb-4">
          <div className="container">
            <h3>We specialise in commercial equipment services for major categories</h3>
            <ul>
              <li> <strong>  Client Sectors: </strong> Leisure and Hospitality, Education, Defence, Industrial, Healthcare, Public Sector, Retail, Commercial, Cloud/Dark Kitchens, Restaurants, Hotels, Bakeries, Shops, Coffee Shops, Catering, Medical Facilities, and Labor Camps. Our commitment to excellence spans across these diverse industries.</li>
              <li> <strong> Baking Equipment: </strong> Combi ovens, Convection ovens, High-Speed ovens, Compact ovens, Pizza ovens, Rational ovens, Commercial ovens, and Steamers. </li>
              <li> <strong> Refrigeration Equipment: </strong> Refrigerated and freezer cabinets, Refrigerated and freezer counters, Saladette refrigerated counters, Pastry and bakery lines, Blast chillers and freezers, Crosswise blast chiller freezers, Ice makers, Walk-in cooler cold rooms, Commercial refrigerators, Commercial freezers, Ice machines, Blast chillers and blast freezers. This list covers the essential types of refrigeration equipment used in the food service industry.</li>
              <li> <strong>Food Preparation:</strong> Vegetable peelers, washers, dryers, cutters, mixers, slicers, planetary mixers, dough kneaders, sheeters, vacuum packers, stainless steel fabrication, blenders, and salamander broilers.Other Services: Coffee Machines, Coffee Equipment, Espresso Machines, Coffee Grinders, Electrical Services, Plumbing (MEP), Air Conditioning Systems (AC), Commercial Dishwashers, Glasswashers, Water Boilers, Dishwasher Machines, Griddles.</li>
            </ul>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>

          </div>
        </section>

        {/* Brands section */}
        {/* {!isLoading && brandsLogo_data.length > 0 && (
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
        )} */}

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

export default KitchenEquipmentsAMCDetail;