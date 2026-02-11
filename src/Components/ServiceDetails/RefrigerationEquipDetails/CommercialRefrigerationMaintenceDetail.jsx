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
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import Testimonial1 from "../../Testimonial/Testimonial1";
import BrandsSliderSection from "../../BrandsSliderSection";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const CommercialRefrigerationMaintenceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(titleSeo || "Refrigeration Annual Maintenance Contract Service in Dubai");
  const metadescription = String(description || "FAJ offers commercial refrigeration, including restaurant, hotel, hospital freezer, chiller, cold room, refrigerator annual maintenance contract services Dubai");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Commercial Refrigeration service, walk in cooler repair, chiller repair, cold room repair, commercial refrigeration maintenance");
  const metaURL = String(URL || "https://www.fajservices.ae/services/refrigeration-equipment/commercial-refrigeration-maintenance/");
  const metaImage = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/commercial-ref%20-mc/public";

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
          fetch(`${import.meta.env.BASE_URL}data/RefrigerationEquipData/FAQs/CommercialRefrigerationMaintenceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/RefrigerationEquipData/Testmonials/CommercialRefrigerationMaintenceTestimonial.json`),
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
            {JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "How do I choose the right refrigeration system for my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The size of the business, the quantity of products to be stored, the location of operations, and regulatory requirements are all factors that must be considered when selecting the appropriate refrigeration system."
                  }
                }, {
                  "@type": "Question",
                  "name": "How do we properly maintain our refrigeration system?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Regular maintenance of refrigeration systems is crucial for optimal operation. This includes checking temperatures, locating leaks, cleaning filters, and verifying refrigerant levels."
                  }
                }, {
                  "@type": "Question",
                  "name": "How can I save on costs in operating commercial refrigeration systems?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The refrigeration equipment used to create cold air consumes a significant amount of energy. This is one of the key reasons why reducing costs is essential for food retailers of all sizes. There are several ways to save on energy and expenses related to your display cases. For example, you can use night curtains to keep open cases cold when your store is closed, switch to energy-saving LED lights instead of fluorescent lighting, and ensure freezer doors stay closed and sealed by using high-quality gaskets that are durable and long-lasting."
                  }
                }, {
                  "@type": "Question",
                  "name": "How to choose the correct refrigerated display case size?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Selecting the appropriate size of a refrigerated display case for your food retail business is crucial to minimizing costs and avoiding the waste of valuable sales space and energy. Depending on your sales floor area and the amount of food you need to showcase, display cases are available in a variety of sizes, ranging from 2 feet to 12 feet wide for open cases and from 2-door to 6-door designs for door cases. The volume of these display cases typically varies between 5 to 80 cubic feet each."
                  }
                }, {
                  "@type": "Question",
                  "name": "What should I do if a part needs to be replaced?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FAJ Technical Services L.L.C. is committed to providing reliable and trouble-free refrigeration solutions through a wide range of quality products equipped with advanced features. To ensure the highest quality and long-lasting dependability of any refrigeration unit, we recommend using genuine replacement parts. For more information, please contact us at info@fajservices.ae or call +971 50 746 4712"
                  }
                }, {
                  "@type": "Question",
                  "name": "How often should I schedule maintenance for my refrigeration equipment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We recommend scheduling regular maintenance at least twice a year to ensure your refrigeration equipment operates smoothly and efficiently. However, the frequency may vary based on factors such as the type of equipment and its usage."
                  }
                }, {
                  "@type": "Question",
                  "name": "What are some common applications of commercial refrigeration?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Commercial refrigeration is widely used in grocery stores, supermarkets, restaurants, and convenience stores. It plays a crucial role in keeping food and beverages at the appropriate temperatures to maintain their freshness and safety for consumers. Supermarkets implement commercial refrigeration systems to store and display perishable items like dairy products, meats, fruits, vegetables, and frozen goods. These systems include open display cases, walk-in coolers, and freezers, all designed to provide optimal storage conditions. Restaurants typically use equipment such as reach-in refrigerators, under-counter refrigerators, and walk-in coolers to store ingredients, prepared meals, and beverages."
                  }
                }, {
                  "@type": "Question",
                  "name": "What Maintenance Contracts Do You Offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Refrigeration companies often provide regular maintenance contracts to ensure that your systems remain functional. Proper maintenance is essential, and it's important to find the right price for this coverage. In addition to routine maintenance and servicing, a reliable refrigeration company should also offer prompt emergency repairs and spare parts when needed, all at reasonable prices."
                  }
                }, {
                  "@type": "Question",
                  "name": "What temperature is the danger zone?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The temperature danger zone is between 41°F and 135°F, where bacteria grow most rapidly in food. Particularly, bacteria multiply fastest between 70°F and 125°F."
                  }
                }, {
                  "@type": "Question",
                  "name": "What is the common problem in chillers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Incorrect operating practices, lack of maintenance, and improper chiller sizing are three common causes of chiller problems. Operators must actively consider these factors to mitigate potential risks to the cooling equipment."
                  }
                }]
              })}
          </script>

        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Commercial Refrigeration Maintenance Contract Services (AMC) in Dubai</h1>
            <p>Commercial refrigeration maintenance and repairs are essential for businesses like biomedical facilities, pharmacies, supermarkets, restaurants, hotels, and food processing plants, ensuring product freshness and safety.<br />FAJ Technical Services L.L.C, established in 2010, is recognised for its reliability and flexibility. We respond promptly to refrigeration breakdowns and work diligently to address issues of any size. Our services include repairing and servicing walk-in coolers, walk-in chillers, freezers, and commercial refrigerators.<br />Timely maintenance boosts efficiency and extends equipment lifespan. At FAJ, we highlight the importance of preventative measures in commercial refrigeration to avoid costly failures. We also provide installation services for commercial chillers and freezers. </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>

          </div>
        </section>


        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h3 className="cs_fs_24 mb-1">Experts Freezer and Chiller Repair</h3>

                <p className="mb-2">
                  Our skilled experts consistently uphold high-quality standards. We provide repair and maintenance services for various types of freezers and chillers, including under-counter catering, vegetable, fruit, display, blast, walk-in, and beverage cooler units across diverse industries in Dubai and Sharjah, UAE.
                </p>

                <h3 className="cs_fs_24 mb-1 pt-3 border-small-top">Refrigeration System Maintenance</h3>
                <p className="mb-0">
                  We have a standard fee for technical inspections that includes diagnosis and transportation to your premises. Please note that this fee is non-refundable and is a flat rate. However, it does not cover the cost of any repair, cleaning service or parts.
                </p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/boj7h-gOf7M?si=c7yjz-nkqAeHFdYC"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>



        {/* Why  */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">Why is Commercial Refrigeration Maintenance Important in Dubai?</h3>
            <p>
              Maintaining commercial refrigeration systems, like freezers and chillers, includes basic tasks such as service. Hiring professionals for regular maintenance is essential for an effective Planned Preventative Maintenance (PPM) schedule.
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('Commercial-refrigeration-service-maintenance')} alt="Commercial Refrigeration Service" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li><strong>Identifying issues early:</strong> Regular professional maintenance of your fridge helps catch issues early.</li>
                  <li><strong>Energy efficiency</strong>: Make sure your refrigerator is operating efficiently and not wasting electricity.</li>
                  <li><strong>Saving money in the long run:</strong> Regular servicing of commercial refrigeration can prevent costly repairs.</li>
                  <li><strong>Compliance with product safety standards</strong>: If you store food in a commercial freezer or chiller, ensure compliance with food safety regulations. A professional service can assist you.</li>
                  <li><strong>Damage control</strong>: Inspecting for potential hazards, including possible harmful leaks from your refrigeration system.</li>
                  <li><strong>Peace of mind:</strong> Ensuring your commercial freezer and chiller work well gives you peace of mind to focus on your business.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">The Most Common Problems with the Freezer and Chiller</h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Not Cooling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Cooling failure is a common issue in freezers and chillers, often due to a faulty compressor, motor problems, or the need for gas and maintenance.
                    </p>
                  </div>
                </div>
              </div>



              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Cycle Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Unusual sounds may indicate mechanical problems, such as issues with electric devices, the compressor, or the fan motor components.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Ice Buildup Concerns</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ice buildup can occur if the door is frequently opened, does not seal correctly, or if a thermostat, sensor, or basic maintenance service is required.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Water Leaks Problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Water leaking from your refrigeration unit may be caused by a blocked defrost drain, a faulty pan, or a defective drain heater.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Electricity Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your unit frequently trips the circuit breaker, there may be an issue with the compressor, motor, or wiring. it&apos;s essential to address this safety risk promptly.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Temperature Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Frequent temperature changes can spoil your goods. Ensure thermostat, sensor, or gas system is working properly and maintain even setting.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Motor Runs Always</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A running motor may indicate that the unit is struggling to maintain temperature. Check the door seals and consider professional servicing.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Compressor Won't Start</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If the compressor won't start, check that power is connected and inspect the circuit breaker. For help with pressurising refrigerant gas, seek professional assistance.</p>
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
            <h3 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR THE REFRIGERATION</h3>
            <p>We specialise in all types and brands of commercial freezer and chiller, including built-in refrigeration.</p>
            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('commercialrefrigerationmaintenance')} alt="commercial refrigeration maintenance" />

                
              </div>

              <div className="col-xl-6">

                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li><strong>Freezer and Chiller Installation: </strong>Professional installation of various brands and types of chillers and freezers for optimal performance and efficiency.</li>
                  <li><strong>Chiller and Freezer Diagnostics: </strong>We offer comprehensive fault-finding services to identify issues, along with eligibility assessments and detailed quotes to resolve any system concerns.</li>
                  <li><strong>Freezer and Chiller Repair Service: </strong>We offer prompt and effective repair services for all freezer and chiller components, addressing issues such as leaks, electrical failures, and system malfunctions.</li>
                  <li><strong>Refrigeration Annual Maintenance Contract: </strong>This contract outlines the terms and services for the annual maintenance of your refrigeration system.</li>
                </ul>
                <p className="mb-0">Regular maintenance is essential for optimal performance, efficiency, and longevity of your freezer and chiller.</p>
              </div>


            </div>
          </div>
        </section >

        {/* The Benefits Of Appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h3 className="cs_fs_30 mb-0">Benefits Of Regular Refrigeration Maintenance in Dubai</h3>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/coolicon')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">COOLING EFFICIENCY</h4>
                      <p className="small">We carry out a complete assessment of the cooling efficiency using a temperature gun.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/disinfection')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">DISINFECT COMPONENTS
                      </h4>
                      <p className="small">All hardware components are tested and disinfected, including filters and vents.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/fan')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">FAN ASSESSMENT</h4>
                      <p className="small">We ensure the fan works correctly with no blockages in the evaporator coil.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/thermo')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">THERMOSTAT CHECK</h4>
                      <p className="small">We use a laser temperature gauge to ensure that thermostats operate correctly.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/airflow')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">AIRFLOW BALANCE</h4>
                      <p className="small">We ensure you get optimal airflow around each room as needed.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/customer')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">CUSTOMER FEEDBACK</h4>
                      <p className="small">Our team provides vital feedback on your refrigeration and any needed repairs.</p>
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
                    <p>You can count on our prompt service! We offer same-day repairs and next-day slots to ensure your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>An annual <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, offers a full year of service, ensuring your freezer and chiller operate smoothly for your peace of mind.</p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Schedule your chiller and freezer repair in Dubai or Sharjah for a set date and time, with our technician arriving within a 3–4 hour window.</p>
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
                    <p>We specialise in freezer and chiller repairs, gaining the trust of major brands for their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction through timely service, quick resolution of issues, and competitive pricing.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled technicians offer prompt service for a variety of major cooling brands across Dubai, Sharjah, and nearby areas.  </p>
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
            <h3>We specialize in refrigeration services for the following types:</h3>
            <div className="row">
              <div className="col-12">

                <p className="mb-0"><strong>Walk in Refrigeration Maintenance: </strong>Walk-in refrigeration, including cold storage rooms and freezers, is essential for many businesses and industries worldwide.&nbsp;However, without regular maintenance and preventative measures, these systems can fail. Contact us for services.</p>
                <p className="mb-0"><strong>Cold Room Repair and Service:</strong> Maintenance and refurbishment work should always be performed by a trained expert. Many businesses may struggle to find the specialized staff needed to ensure that their refrigeration systems and cold rooms are repaired efficiently and safely by <a href="https://www.facebook.com/FAJTechnicalServicesLLC"><b>FAJ Experts</b></a>.</p>
                <p className="mb-0"><strong>Commercial Refrigeration Maintenance Services:</strong> Efficient refrigeration is crucial in any kitchen; it helps keep your supplies fresh, maintains a pleasant environment, and ensures customer safety. With proper maintenance, you can also extend the lifespan of your refrigerator and potentially save money over time. This article outlines the key aspects of commercial refrigerator maintenance.</p>
                <p className="mb-0"><strong>Biomedical Equipment Repair &amp; Maintenance Services: </strong>At FAJ, we recognize that repairing and maintaining biomedical equipment requires specialized expertise and knowledge.&nbsp;That&rsquo;s why we provide a comprehensive range of services for repairing and maintaining biomedical chillers, freezers, refrigerators, and fridges. We ensure that your medical equipment is installed correctly, maintained regularly, and repaired promptly whenever necessary.</p>
                <p className="mb-0"><strong>Freezer and Chiller Service Urgency / Plan:</strong> We provide emergency call-out services as well as scheduled maintenance contracts for various businesses, including restaurants, supermarkets, cafes, hotels, flower shops, pharmacies, hospitals, colleges, universities, catering services, and the food and beverage industry.&nbsp;Our expertise also extends to the electricity production, chemical and petrochemical sectors, pharmaceutical industry, cold storage and logistics, energy industry, and bakery equipment.</p>
                <p className="mb-0"><strong>Display Refrigerators Repairing and Servicing</strong>: If you are looking for maintenance, service, or repair of your display chiller and display freezer, contact FAJ for same-day service to run your smoothly business.</p>
                <p className="mb-0"><strong>Undercounter Refrigerators Service and Repair: </strong>If you require repairs or servicing for your under-counter refrigerator, chiller, or freezer, reach out to FAJ for reliable maintenance services in Dubai. These appliances are frequently found in offices, and break rooms, where they are used to store packaged snacks, cooking ingredients, and chill soft beverages.</p>
                <p className="mb-0"><strong>Restaurant Commercial Fridge:</strong> We provide fast and affordable repair services for commercial fridges and freezers for your restaurant or cafe in Dubai and Sharjah.</p>
                <p className="mb-0"><strong>Commercial Chiller Maintenance &amp; Repairs:</strong> Ensure your commercial refrigeration systems operate smoothly and reliably with our expert services. We provide regular maintenance and urgent repair services for critical refrigeration equipment, guaranteeing optimal condition, minimal downtime, and asset protection.</p>
                <p className="mb-0"><strong>Van Refrigeration Repair and Refrigerated Truck Maintenance:</strong> FAJ provides reliable van refrigeration repair and refrigerated truck maintenance services in Dubai. Our professionals are experts in van refrigeration and refrigerated truck services.</p>
                <p className="mb-0"><strong>Blast Freezer Repair and Service:</strong> Located in Dubai, FAJ is your premier choice for blast freezer repair services. We specialize in blast refrigeration systems, offering a full range of services from repairs to maintenance.</p>
                <p className="mb-0"><strong>Blast Chiller Service and Repair</strong>: The blast chiller service guarantees your peace of mind. FAJ prioritizes efficiency and reliability.</p>
                <p className="mb-0"><strong>Vegetable and Fruit Chiller Maintenance Services:</strong> Count on our expert team to swiftly fix any issues with your fruit and vegetable chiller and refrigerator, restoring its functionality.</p>
                <p className="mb-0"><strong>Beverage Cooler Repair and Services:</strong> With extensive knowledge of beverage cooler maintenance and services, we offer effective repairs to ensure your unit operates smoothly.</p>
                <p className="mb-0"><strong>Free Standing Freezer and Display Freezer Service and Repair</strong>: No matter the problem with your Freezer and Display Freezer maintenance, our experts can accurately diagnose and repair it.</p>
                <p className="mb-0"><strong>Restaurant Fridge Repairs Refrigerator Service</strong>: Is your restaurant fridge or refrigerator not functioning? THere&apos;s no need to endure unpleasant temperatures and stuffy cooling or suffer losses due to malfunctioning equipment &ndash; FAJ will get your restaurant fridge or refrigerator back up and running in no time!</p>
                <p className="mb-0"><strong>Sushi Refrigerator and Chiller Service and Repair:</strong> Maintenance and repair services for sushi refrigerators and chillers in Dubai require specialised expertise, as only professionals can effectively address issues with sushi fridges. We offer a hassle-free sushi refrigerator repair service.<br /><strong>Catering Freezer and Chiller Repairs and Service: </strong>Are you looking for relief from the scorching heat? Discover how to keep your catering freezer and chiller running smoothly in Dubai! Our expert services ensure that your catering refrigerator and fridge stay cool and efficient, providing you with comfort and peace of mind.</p>
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
          />

        </section>

      </div>
    </>
  );
};

export default CommercialRefrigerationMaintenceDetail;