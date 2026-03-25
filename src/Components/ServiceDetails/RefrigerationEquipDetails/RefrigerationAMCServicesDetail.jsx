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
import BrandsSliderSection from "../../BrandsSliderSection";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const RefrigerationAMCServicesDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(titleSeo || "Refrigeration Annual Maintenance Contract Service in Dubai");
  const metadescription = String(description || "FAJ offers commercial refrigeration, including restaurant, hotel, hospital freezer, chiller, cold room, refrigerator annual maintenance contract services Dubai");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Refrigeration Annual Maintenance Contract Service");
  const metaURL = String(URL || "https://www.fajservices.ae/services/refrigeration-equipment/commercial-refrigeration-maintenance-contract-services/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/techfridge/public");

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
          fetch(`${import.meta.env.BASE_URL}data/RefrigerationEquipData/FAQs/RefrigerationAMCServicesFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/RefrigerationEquipData/Testmonials/RefrigerationAMCServicesTestimonial.json`),
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
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Commercial Refrigeration Maintenance, Commercial Refrigeration Service Dubai, Commercial Refrigerator Repair, Commercial Freezer Repair, Walk in Cooler Maintenance, Walk in Freezer Repair, Refrigeration Unit Service, Commercial Refrigeration Preventive Maintenance, Refrigeration Compressor Repair, Commercial Refrigeration Technician, Refrigeration System Maintenance, Cold Room Maintenance, Commercial Refrigeration Contract",
              "image": ["https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"],
              "url": "https://www.fajservices.ae/services/refrigeration-equipment/commercial-refrigeration-maintenance-contract-services/",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "3452",
                "bestRating": "5"
              }
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "What is the maintenance needed for a refrigeration system?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "7 Essential Tasks for Your Preventive Maintenance Checklist for Commercial Refrigeration Be sure to include the following important tasks in your preventive maintenance checklist for commercial refrigeration systems: - Thoroughly Clean Equipment - Check Temperature and Defrost Settings - Enhance Airflow - Test Interior Lights - Inspect for Leaks and Test Seals - Examine Coils - Inspect Fan Blades These tasks will help ensure that your refrigeration systems operate efficiently and effectively."
                  }
                }, {
                  "@type": "Question",
                  "name": "How do you maintain refrigeration?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Refrigerator maintenance tips to help you keep your cool: - Clean the coils: The coils are essential to your fridge's cooling system because they help release heat as the refrigerant flows through them. - Maintain the temperature: Ensure that your fridge is set to the appropriate temperature for optimal performance. - Inspect and clean the gasket: Check the door gasket for any wear and tear, and clean it to maintain a proper seal. - Replace the water and ice filters: Regularly change the water and ice filters to ensure clean and fresh- tasting ice and water. - Close the door properly: Always make sure the fridge door is fully closed to prevent warm air from entering and compromising the cooling efficiency."
                  }
                }, {
                  "@type": "Question",
                  "name": "What is the preventive maintenance on refrigeration equipment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To maintain cleanliness, regularly wash with a mild soapy water solution. Check the operation of the thermostat and the defrost system (if equipped). Ensure that door seals are clean, avoiding any material buildup in the folds and corners. Remove any ice buildup using the defrost system or a blunt scraper as needed."
                  }
                }, {
                  "@type": "Question",
                  "name": "How often should refrigerator be maintained?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ignoring basic maintenance tasks, such as cleaning the condenser coils and wiping down the gaskets, can put unnecessary stress on your appliance. It’s a good idea to set aside time each month for these quick maintenance tasks. When a refrigerator is properly maintained, it operates more efficiently."
                  }
                }, {
                  "@type": "Question",
                  "name": "What are the benefits of AMC contract?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Budget Bliss: The Benefits of Predictable Maintenance Costs An annual maintenance contract(AMC) protects a company from unexpected expenses related to refrigeration equipment maintenance.With an AMC, businesses benefit from a fixed and predictable cost structure, allowing them to effectively manage and account for all maintenance spending over time."
                  }
                }, {
                  "@type": "Question",
                  "name": "What is the period of the annual maintenance contract?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Freezer and chiller maintenance contracts will last for one year from the date of acceptance and issuance of the work order. All days, excluding weekends, will be considered as working days."
                  }
                }, {
                  "@type": "Question",
                  "name": "What should be included in a chiller and freezer maintenance contract?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It can also be referred to as a service maintenance agreement, a preventative maintenance service contract, a freezer and chiller service agreement, or an installation contract. Regardless of the name, it includes everything."
                  }
                }, {
                  "@type": "Question",
                  "name": "What are the different types of annual maintenance contracts?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The various types of Annual Maintenance Contracts (AMCs) include:- Comprehensive AMC: Covers all maintenance costs, including parts and labor. - Non - Comprehensive AMC: Charges for separate parts; only labor expenses are covered. - Preventive AMC: Focuses on regular maintenance and inspections."
                  }
                }, {
                  "@type": "Question",
                  "name": "What is the minimum contract period?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Minimum Contract Period refers to a duration of six months or twelve months from the start of the contract or another period specified in the Contract."
                  }
                }, {
                  "@type": "Question",
                  "name": "What does a maintenance contract cover?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The text outlines the terms and conditions of the agreement between the two parties. Maintenance contractors can be hired to provide various maintenance services, ranging from general upkeep to specialised repairs. Any details negotiated between the parties will be clearly specified in the contract."
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
            <h1 className="cs_fs_30">Top-Rated Commercial Refrigeration Maintenance Contract Services - AMC in Dubai, UAE</h1>
            <p>
              Keep your cold room, walk-in cooler, freezer and chiller system running efficiently year-round with an Annual Maintenance Contract (AMC).
              <br />Our reliable maintenance contracts, available in Dubai and Sharjah, UAE, will help you keep your refrigeration systems running at their best.
              This proactive approach not only helps maintain excellent cooling performance but also prevents costly breakdowns.
              <br />Having a planned preventive maintenance (PPM) in place can help you avoid unexpected expenses, improve energy efficiency, and create a comfortable indoor environment.
              It is crucial to choose a reputable service provider to maximize the benefits of your contract.
            </p>

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
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "20px" }}> Faj's Refrigeration Maintenance Service</h2>

                <p>
                  Our commercial freezer, cold room, walk-in chiller, and cold storage annual maintenance contract ensure that your commercial refrigerator, fridge, chiller, and freezer needs are met with the highest level of care.
                  With extensive expertise in refrigeration unit maintenance, our team includes some of the finest professionals in the UAE.
                  <br />Since 2010, we have been repairing, cleaning, and maintaining a wide range of commercial chillers and freezers.
                  <br />Our technicians are experienced and use advanced technology to keep your commercial refrigeration equipment in optimal condition. If you would like to learn more about our AMC options, please feel free to contact us.
                </p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/VAmZ-qKWkjw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="appointment-col border-small-top mt-3 pt-3">
              <h2 className="cs_fs_24 mb-1 mt-3" style={{ fontSize: "24px" }}>
                Planned Preventive Maintenance (PPM) Services
              </h2>
              <p>
                Our refrigeration technician can create a customized Planned Preventive Maintenance Package for your business. This package is designed to keep your business products chilled and frozen, comfortable, and running efficiently. By taking a proactive approach, you can reduce the likelihood of unexpected breakdowns and their associated costs.
                <br />
                Our Planned Preventative Maintenance Package includes repair, maintenance, and testing, making it ideal for any freezer and chillers in hospitals, pharmacies, restaurants, cafes, schools, catering, and warehouses. This package ensures that your air conditioning system operates smoothly and helps prevent breakdowns.

              </p>
              <div id="get-quote" className=" mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3">
                  <WhatsappIconButton />
                  <CallNowButton />
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Peace of Mind with Maintenance Contract of Refrigeration</h2>
            <p>
              Regular maintenance of commercial ovens is essential for safe and efficient operation.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('techfridge')} alt="Refrigeration Maintenance Services" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> Your commercial refrigeration system is vital for home and office comfort during hot summer months. </li>
                  <li> It needs regular maintenance to operate efficiently and avoid breakdowns. </li>
                  <li> FAJ offers annual maintenance contracts (AMC) for commercial refrigerators and freezers, keeping your cold room, walk-in chiller, or cooler running smoothly year-round. </li>
                  <li> Enjoy consistent cooling and peace of mind as we ensure your system's optimal performance, energy efficiency, and longevity. </li>
                  <li> Our comprehensive maintenance contract package allows you to say goodbye to unexpected breakdowns. </li>
                  <li> Routine inspections and maintenance of your refrigeration system are essential for ensuring efficiency. </li>
                  <li> Our qualified technicians service all types, makes, models, and sizes of commercial systems, including beverage coolers, restaurant chillers, bakery freezers, flower shop chillers, van freezers, and vegetable and fruit chillers. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*  Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Refrigeration Problems That May Require Maintenance </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Refrigerant leaks</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Refrigerant leaks are harmful to the environment and can lead to compressor failures. Look for any oil or refrigerant stains to spot the problem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Compressor failure</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The compressor is essential for any commercial refrigerator or freezer system. If it fails completely, the unit will no longer keep products cold.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Defective thermostat</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Thermostat failure can lead to fluctuating internal temperatures in a commercial refrigerator, potentially exceeding safe storage levels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Refrigerator not cooling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Your cold room, walk-in chiller, or freezer may not be cool enough, even if set to the right temperature, leading to improper preservation of food and items.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Power Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If the power switch is on and there are no loose power plugs, you need to act quickly if your commercial refrigerator is not powering on.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">High Utility Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The presence of contaminants in the refrigerant can cause the system to operate for longer periods, resulting in increased energy consumption and waste.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Buzzing sound</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      Refrigeration inherently makes noise, but if yours is excessively loud, it may need repairs due to issues with the compressor or other components.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Door Seal Damage</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Worn or cracked door gaskets can cause cool air to escape, forcing the system to work harder and compromising overall temperature control efficiency.
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

        {/*Why  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Refrigeration Preventative Maintenance Programmes</h2>
            <p className="mb-0">At FAJ, we believe proactive maintenance is the most cost-effective way to manage systems.</p>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('commercial-ref-amc')} alt="Refrigeration Maintenance Services" />
              </div>

              <div className="col-xl-6">

                <ul>
                  <li> <strong>  Maximising Efficiency, Minimising Costs: </strong> We optimize your system for maximum efficiency, helping you decrease energy consumption and lower your utility bills. </li>
                  <li> <strong>  Transparent Pricing, No Hidden Fees: </strong> We prioritize clear and honest pricing, offering detailed quotes without hidden fees or unexpected costs. </li>
                  <li> <strong> Installation: </strong> Expert installation of various types and brands of HVAC systems, ensuring optimal performance and efficiency. </li>
                  <li> <strong> Diagnostics: </strong> Thorough fault finding to diagnose issues. We provide eligibility assessments and detailed quotes to address your system concerns. </li>
                  <li> <strong>  Repair Service: </strong> Fast and reliable repair services for all refrigeration issues, including leaks and electrical failures. </li>
                  <li> <strong>  Preventive Maintenance: </strong> Our preventive maintenance strategy identifies and resolves potential issues before they escalate into major problems, saving you time, money, and bother. </li>


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
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/24x7b')} alt="24x7" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Routine Service</h3>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/call')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">On-call services</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your home appliances, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-3 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/gearicon')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Genuine Spare Parts</h3>
                      <p className="small">Knowing your commercial kitchen equipment is in top condition gives you confidence and removes the stress of unexpected failures.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/wellstar')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Maintenance Costs</h3>
                      <p className="small">High-quality equipment may be more expensive initially, but it typically breaks down less frequently and requires fewer repairs.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/trained-b')} alt="trained icon" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Increased Efficiency</h3>
                      <p className="small">Commercial kitchen equipment can improve the efficiency of daily tasks in your kitchen. · Lower Maintenance Costs · Superior Quality.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/wellicon')} alt="Cooling Efficiency" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Cost Efficiency</h3>
                      <p className="small">FAJ a Save hand maintenance. Here’s a cost comparison: a commercial kitchen helps you avoid high startup equipment costs.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={getImageSrc('icon/annual-contract-b')} alt="annual contract icon" className="rounded shadow" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Report and Updates</h3>
                      <p className="small">FAJ is releasing a report on the condition of commercial kitchen equipment, outlining actions to enhance efficiency and safety.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div>
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
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>
                      We are dedicated to ensuring customer satisfaction through timely service, quick resolution of issues, and competitive pricing.
                    </p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We specialise in freezer and chiller repairs, gaining the trust of major brands for their reliable service needs.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>
                      Choose a day and time for your chiller and freezer repair in Dubai or Sharjah, with a 3–4 hour window for our technician’s arrival.
                    </p>
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
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>
                      An annual maintenance contract offers a full year of service, ensuring your freezer and chiller operate smoothly for your peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>
                      You can count on our prompt service! We offer same-day repairs and next-day appointments to ensure your needs are met quickly.
                    </p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>
                      Our skilled technicians offer prompt service for major cooling brands, ensuring reliable performance and efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('icon/fajteam')} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise   */}
        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <h3>We specialise in refrigeration AMC and PPM for the following types</h3>
            <div className="row">
              <div className="col-12">

                <p className="mb-0"> <strong>  Walk-in Refrigeration Maintenance Contract: </strong> Walk-in refrigeration systems, such as cold storage rooms and freezers, are vital for numerous businesses and industries globally. However, without regular maintenance and preventative measures, these systems can experience failures. Contact us for professional services. </p>

                <p className="mb-0"> <strong>  Cold Room AMC Service: </strong> Maintenance and refurbishment work should always be conducted by trained professionals. Many businesses may struggle to find specialised staff who can ensure that their refrigeration systems and cold rooms are repaired efficiently and safely by <a href="https://www.facebook.com/FAJTechnicalServicesLLC"><b>FAJ Experts</b></a>. </p>

                <p className="mb-0"> <strong>  Commercial Refrigeration Maintenance Services: </strong> Efficient refrigeration is essential in any kitchen. It helps keep your supplies fresh, maintains a pleasant environment, and ensures customer safety. By properly maintaining and repairing your refrigerator, you can extend its lifespan and potentially save money in the long run. This article outlines the key aspects of maintaining a commercial refrigerator. </p>

                <p className="mb-0"> <strong>  Biomedical Equipment Maintenance Services and Repair: </strong> At FAJ, we understand that repairing and maintaining biomedical equipment demands specialised expertise and knowledge. That’s why we offer a comprehensive range of services for the repair and maintenance of biomedical chillers, freezers, refrigerators, and fridges.  We ensure that your medical equipment is installed correctly, maintained regularly, and repaired promptly when needed. </p>

                <p className="mb-0"> <strong>  Freezer and Chiller PPM Service Plan Urgency: </strong> We provide emergency call-out services and scheduled maintenance contracts for a diverse range of businesses. Our clients include restaurants, supermarkets, cafes, hotels, flower shops, pharmacies, hospitals, colleges, universities, catering services, and the food and beverage industry. Additionally, our expertise extends to the electricity production, chemical and petrochemical sectors, pharmaceutical industry, cold storage and logistics, energy industry, and bakery equipment. </p>

                <p className="mb-0"> <strong>  Display Refrigerators AMC Contract and Service: </strong> If you need a maintenance contract, service, or repair for your display chiller and display freezer, contact FAJ for same-day service to keep your business running smoothly. </p>

                <p className="mb-0"> <strong>  Undercounter Refrigerators Service and Repair: </strong>  If you require repairs or service for your under-counter refrigerator, chiller, or freezer, reach out to FAJ for reliable maintenance services in Dubai. These appliances are frequently found in offices and break rooms, where they are used to store packaged snacks, cooking ingredients, and chill soft beverages.</p>

                <p className="mb-0"> <strong> Restaurant Commercial Fridge Annual Contract: </strong> We offer quick and cost-effective repair services for commercial fridges and freezers in your restaurant or café located in Dubai and Sharjah.</p>

                <p className="mb-0"> <strong> Commercial Chiller Maintenance & Repair: </strong> Ensure your commercial refrigeration systems operate smoothly and reliably with our expert PPM services contract. We provide regular maintenance plan and urgent repair services for critical refrigeration equipment, guaranteeing optimal condition, minimal downtime, and asset protection.</p>

                <p className="mb-0"> <strong> Van Refrigeration Repair and Refrigerated Truck Maintenance: </strong> FAJ offers dependable maintenance services for van refrigeration and refrigerated trucks in Dubai. Our professionals specialize in van refrigeration and refrigerated truck services.</p>

                <p className="mb-0"> <strong> Blast Freezer Annual Maintenance and Service Contract: </strong> Located in Dubai, FAJ is your top choice for annual blast freezer services. We specialize in blast refrigeration systems, providing a comprehensive range of preventive maintenance services, from repairs to routine maintenance.</p>

                <p className="mb-0"> <strong>  Blast Chiller AMC Service and Repair: </strong> The planned preventive maintenance service for blast chillers guarantees your peace of mind. FAJ prioritizes efficiency and reliability.</p>

                <p className="mb-0"> <strong> Vegetable and Fruit Chiller Maintenance Service Contract: </strong> Rely on our expert team to quickly resolve any issues with your fruit and vegetable chiller under the annual maintenance contract, restoring its functionality.</p>

                <p className="mb-0"> <strong>  Beverage Cooler AMC Services: </strong> With extensive knowledge of beverage cooler maintenance contracts and services, we provide effective repairs to ensure your unit operates smoothly.</p>

                <p className="mb-0"> <strong>  Free-Standing Freezer and Display Freezer Service and Repair: </strong> Our experts can accurately diagnose and repair any issues with your freezer and display freezer through annual maintenance contracts that offer different packages.</p>

                <p className="mb-0"> <strong>  Restaurant Fridge PPM Service, Refrigerator AMC Service: </strong> Is your restaurant fridge or refrigerator not functioning? THere&apos;s no need to endure uncomfortable temperatures or suffer losses due to faulty equipment. With our annual maintenance contract service in Dubai and Sharjah, FAJ will have your restaurant fridge or refrigerator up and running in no time!</p>

                <p className="mb-0"> <strong>  Sushi Refrigerator and Chiller Service and Repair: </strong> Maintenance and repair services for sushi refrigerators and chillers in Dubai require specialized expertise, as only professionals can effectively address issues with sushi fridges. We provide a hassle-free repair service for sushi refrigerators.</p>

                <p className="mb-0"> <strong>  Catering Freezer and Chiller Repairs and Service: </strong> Are you seeking relief from the intense heat? Learn how to keep your catering freezer and chiller operating smoothly in Dubai! Our expert services ensure that your catering refrigerator and fridge remain cool and efficient, providing you with comfort and peace of mind.</p>

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

export default RefrigerationAMCServicesDetail;

