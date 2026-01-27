import { useEffect, useRef, useState, useCallback } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import HeaderForm from "../../Headeform/HeaderForm";
import Testimonial1 from "../../Testimonial/Testimonial1";

const UnoxCommercialOvenRepairServiceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Unox Commercial Oven Repair & Maintenance Service in Dubai");
  const metadescription = String(description || "Expert Unox Commercial oven repair & maintenance in Dubai. FAJ offers restaurants, bakeries, pastry ovens & professional cooking appliances services.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Unox oven repair Dubai, Unox oven maintenance Dubai, Unox commercial oven service, Unox professional kitchen equipment repair, Unox bakery oven repair, Unox pastry oven maintenance, Unox cooking appliance service Dubai, Unox oven parts replacement, Unox oven troubleshooting, Unox oven cleaning and servicing");
  const metaURL = String(URL || "https://www.fajservices.ae/services/kitchen-equipment/unox-commercial-oven-repair-and-maintenance-service-dubai/");
  const metaImage = String(Image || "https://www.fajservices.ae/img/Camercial-Kitchen-Equipment.avif");

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
        const [faqsResponse, testimonialsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/FAQs/UnoxCommercialOvenRepairServiceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/Testmonials/UnoxCommercialOvenRepairServiceTestimonials.jsonn`)
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const settingBrands = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    arrows: false,

    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };


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
          
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Unox Commercial Oven Repair & Maintenance Service in Dubai UAE</h1>
            <p>FAJ Technical Services L.L.C. has been serving in Dubai, UAE since 2010, offering reliable service solutions. We provide comprehensive maintenance for the full range of Unox products, which includes Unox commercial convection ovens, Unox commercial combi ovens, Unox commercial speed ovens, and hot food preservation systems services in Dubai.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        {/* heading*/}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Unox Professional Oven Maintenance Service</h2>
                <p className="mb-2">We provide maintenance services for all Unox ovens, both gas and electric. Our specialised technicians are committed to delivering reliable support whenever you need it.<br />Our goal is to ensure your restaurant, bakery, or pastry ovens run smoothly for your business with our trustworthy Unox commercial oven repair services in Dubai.</p>
                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Express Unox Oven Repair Service</h2>
                <p className="mb-2"><b>Terms & Conditions:</b>There is a callout fee that applies for each diagnosis, depending on the capacity applied. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.<br />
                  <b>CHOOSE FAJ FOR YOUR PEACE OF MIND<br />
                    <small>We provide 2-month repair warranty
                      and 3-month parts warranty as standard.</small></b></p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/oven-gallery/rational oven service.avif`} alt="Oven Repair" />
              </div>
            </div>
            <h3 className="cs_fs_24 mb-1 border-small-top pt-3">Unox Ovens Annual Maintenance Contract (AMC) Services</h3>
            <p className="mb-2">Our experienced technician offers an annual maintenance agreement to keep your Unox oven, Unox combi, Unox convection oven, high-speed, compact, and Unox pizza running efficiently. This service ensures compliance with industry standards and enhances the performance and longevity of your essential Unox kitchen equipment.<br />Our annual maintenance package reduces the risk of unexpected breakdowns and associated costs. It includes maintenance, repairs, and Unox equipment testing, making it ideal for hotels, restaurants, canteens, and educational platforms to ensure smooth operation and avoid disruptions.</p>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        {/*why */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is it Important to Maintain Unox Commercial Ovens?</h2>
            <p>The Importance of Maintaining Unox Commercial Ovens. Regular maintenance of Unox kitchen equipment is necessary for reliability, safety, efficiency, and cost savings. Prioritize it for successful kitchen operations.</p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/commercial-kitchen-equipment-amc.avif`} alt="Oven Repair" />
              </div>
              <div className="col-md-6">
                <ul>
                  <li><strong> Efficiency: </strong> Regular maintenance of an Unox oven ensures even and accurate heating, which reduces energy waste and delivers consistent cooking and baking results.</li>
                  <li><strong> Food Quality: </strong> A clean Unox oven prevents unwanted flavours and ensures proper baking, which is important for a positive customer experience.</li>
                  <li><strong> Reduced Downtime: </strong> A maintenance contract helps identify potential issues before they lead to costly repairs or breakdowns.</li>
                  <li><strong> Cost Savings with Maintenance Contract: </strong> Regular maintenance of Unox ovens and cooking extends their lifespan and reduces repair costs, ultimately saving businesses money over time.</li>
                  <li><strong> Hygiene: </strong> Even cleaning helps prevent bacteria and other contaminants, ensuring a safe environment for cooking.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*  Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Problems with Unox Commercial Oven That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Broken Oven Door</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your food is baking unevenly or undercooked, the issue may be with your Unox commercial oven's door, affecting baking performance.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Oven Not Heating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The main problem is that it may not reach the selected temperature, even when it is turned on and properly powered.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Uneven Cooking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Food often cooks unevenly, with one side scorching while the other stays undercooked due to uneven heat distribution.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Oven Keeps Sparking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If you hear continued clicking and sparks from your gas oven, the ignition dial may need FAJ professional repair.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Broken Oven Thermostat</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Cooking at the proper temperature is important for tasty meals, as incorrect temperatures can lead to dishes being either overcooked or undercooked.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Broken Heating Elements</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Oven problems can be caused by faulty heating elements, a defective thermostat, broken burners, or electrical issues. If it won't ignite, check the igniter.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Broken Oven Fan</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A faulty oven fan can result in uneven cooking. Oven fans circulate heated air inside the oven to promote consistent cooking.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Broken Door Seal</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The oven door seal, or gasket, creates an airtight seal to prevent heat loss and ensure even cooking.</p>
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

        {/*Why  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Complete Unox Commercial Oven Repair Services in Dubai</h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
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

              <div className="col-xl-6">
                <p className="mb-0">FAJ offers different Unox commercial ovens and professional kitchen equipment repairing and services in your location.
                  <br /><strong>Our services include:</strong></p>
                <ul className="mb-0">
                  <li><strong>Unox Oven Installation: </strong>Installation of Unox Professional gas and electric ovens for optimal performance and efficiency.</li>
                  <li><strong>Unox Oven Diagnostics: </strong>We perform thorough diagnostics, offering eligibility checks and detailed quotes to address any oven issues.</li>
                  <li><strong>Unox Oven Repair Service: </strong>Unox commercial oven repair services for all components, ensuring quick resolution of issues such as leaks, electrical failures, and malfunctions. Contact FAJ for specific services or inquiries!</li>
                  <li><strong>Unox Oven Annual Maintenance Contract: </strong>This contract outlines the terms and services for the annual maintenance of Unox catering ovens.</li>
                </ul>
                <p className="mb-0">Routine maintenance of Unox commercial ovens is essential for optimal performance, efficiency, and longevity.</p>
              </div>
            </div>
          </div>
        </section >

        {/* The Benefits */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">Benefits Of Common Unox Oven Service and Maintenance in Dubai</h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.svg`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">HEATING EFFICIENCY</h3>
                      <p className="small">We complete a thorough assessment of heating efficiency using a temperature gun.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Optimal-Performance.svg`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">  DISINFECT COMPONENTS   </h3>
                      <p className="small">All parts and components of the oven experience thorough testing and disinfection to ensure safety and reliability.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Lower-Energy-Bills.svg`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">FAN ASSESSMENT</h3>
                      <p className="small">We ensure the fan operates correctly and is free of blockages in both the burner and heating element.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Saving-Money-on-Repair.svg`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">THERMOSTAT CHECK</h3>
                      <p className="small">We use a laser temperature meter to verify that the thermostats are functioning properly.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/extending.svg`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">AIRFLOW BALANCE</h3>
                      <p className="small">We ensure optimal airflow around every part of the oven.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Peace-of-Mind.svg`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">CUSTOMER FEEDBACK </h3>
                      <p className="small">Our team offers essential feedback on the condition of your Unox oven and any needed repairs.</p>
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
                    <p>	You can rely on prompt service! Our same-day repairs or next-day visits ensure that your needs are addressed swiftly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Confidence</h3>
                    <p>
                      With an oven annual maintenance contract, you receive a year of service, ensuring smooth operation and peace of mind.
                    </p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Schedule your oven repair in Dubai or Sharjah by choosing a specific day and time. Our technician will arrive within a 3-4 hour window.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/fajteam-1.avif`} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We specialise in oven repair, which is why most major brands rely on us for their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>
                      We are committed to providing customer satisfaction through timely service, quick issue resolution, and competitive pricing.
                    </p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our expert oven technicians are well-trained, providing <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a> for various major oven brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise   */}
        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <h3>We specialize in services for Unox commercial ovens across different types.</h3>
            <div className="row">
              <div className="col-12">
                <ul>
                  <li><strong>Unox Convection with Humidity Oven Service and Repair in Dubai</strong>: We are a leading provider of repair and maintenance services for Unox convection ovens, including those equipped with humidity cooking systems. Our team of experienced technicians offers expert support to ensure your commercial kitchen appliances operate at peak performance. Trust us for reliable solutions specifically designed for Unox products.</li>
                  <li><strong>Unox Combi Oven Repair and Maintenance Services in Dubai:&nbsp;</strong>Enhance the performance of your Unox Combi oven with our premium repair and maintenance services in Dubai. Our skilled technicians specialise in both electric and gas models, providing quick diagnostics and replacing worn parts as needed. Regular maintenance is important; it reduces downtime, extends the lifespan of your oven, and ensures outstanding cooking results in your kitchen. Rely on us to keep your oven running at its best.</li>
                  <li><strong>Unox Convection and Speed Oven Repair &amp; Maintenance Near By:&nbsp;</strong>Our experts specialise in Unox Convection ovens, including the Cheftop, Unox Bakertop oven, Unox Speed oven, and Unox Contertop oven models. We offer comprehensive inspections, repairs, and maintenance to meet your kitchen's needs. From troubleshooting the control panel to replacing heating elements, we ensure your oven operates reliably, maintains consistent cooking performance, and delivers optimal results for your culinary operations.</li>
                </ul>
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
        {/* Maintenance Contract */}
        <MaintenanceContract />
        {/* Gallery */}
        {/* <section className="section cs_py_30 gallery-section bg-light-gray">
          <div class="container">
            <h3 class="mb-4 text-center">Gallery</h3>
              <div class="row g-4">
      
                <div class="col-lg-4 col-md-6">
                  <img
                    src="/img/oven-gallery/oven repair service.avif"
                    class="img-fluid rounded shadow mb-4"
                    alt="Oven Repair Service Dubai"
                  />

                  <img
                    src="/img/oven-gallery/rational oven repairs.avif"
                    class="img-fluid rounded shadow"
                    alt="Oven Repair Service Dubai"
                  />
                </div>

                <div class="col-lg-4 col-md-6">
                  <img
                    src="/img/oven-gallery/rational oven service.avif"
                    class="img-fluid rounded shadow mb-4"
                    alt="Rational Oven Service"
                  />

                  <img
                    src="/img/oven-gallery/oven repair.avif"
                    class="img-fluid rounded shadow"
                    alt="Oven Repair"
                  />
                </div>

                <div class="col-lg-4 col-md-6">
                  <img
                    src="/img/rational-oven-service.avif"
                    class="img-fluid rounded shadow mb-4"
                    alt="Oven Repair Maintenance"
                  />

                  <img
                    src="/img/oven-gallery/rational oven repair.avif"
                    class="img-fluid rounded shadow"
                    alt="Rational Oven Repair"
                  />
                </div>
              </div>
          </div>
        </section> */}
        {/* Gallery */}

        {/* testimobial section */}
        <Testimonial1
          subtitle="What Our Clients Say"
          title="Customer <span>Reviews</span>"
          bgImg={reviewsbg}
          testimonialData={testimonial_data}
          sectionId="home-testimonials"
        />

        {/* Faqs */}
        <section className="section cs_py_30  bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
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
                        <circle cx="12" cy="12" r="3" />
                        <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
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
                        <path d="M17.94 17.94A10.06 10.06 0 0 1 12 20c-6 0-10-8-10-8a18.42 18.42 0 0 1 5.06-5.94" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                        <circle cx="12" cy="12" r="3" />
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

        <section className="section cs_py_30">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>

        </section>

      </div >
    </>
  );
};

export default UnoxCommercialOvenRepairServiceDetail;

