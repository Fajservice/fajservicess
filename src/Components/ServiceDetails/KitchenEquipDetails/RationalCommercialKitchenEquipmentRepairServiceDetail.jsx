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
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const RationalCommercialKitchenEquipmentRepairServiceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Rational Commercial Kitchen Equipment Repair & Maintenance");
  const metadescription = String(description || "Expert Rational commercial kitchen equipment repair & maintenance in Dubai. FAJ offers best Rational oven & professional cooking appliances services");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Rational Oven Repair Service, Rational Combi Oven Repair Service, Rational Commercial Oven Repair Service");
  const metaURL = String(URL || "https://www.fajservices.ae/services/kitchen-equipment-maintenance/rational-commercial-kitchen-equipment-repair-and-maintenance-service-dubai/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Camercial-Kitchen-Equipment/public");

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
          fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/FAQs/RationalCommercialKitchenEquipmentRepairServiceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/Testmonials/RationalCommercialKitchenEquipmentRepairServiceTestimonials.json`)
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
            <h1 className="cs_fs_30">Rational Commercial Kitchen Equipment Repair & Maintenance Service in Dubai</h1>
            <p>FAJ Technical Services L.L.C. has been serving Dubai since 2010, providing reliable service solutions. Our skilled technicians specialize in Rational commercial kitchen equipment, including the iCombi Pro Oven, iCombi Classic Oven, iVario Pro Cooking System, iVario XS Cooking, and Rational iHexagon Oven repair and maintenance and we offer our services throughout Dubai.</p>

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
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Rational Oven Maintenance Services</h2>
                <p className="mb-2">We provide all types of Rational oven maintenance, including both gas and electric models. Our specialized team of technicians is provided with the necessary spare parts, allowing us to assist you whenever you need help.<br />Our goal is to ensure that your business runs smoothly, and we offer reliable Rational commercial oven repair services in Dubai.</p>
                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Express Rational Oven Repair Service</h2>
                <p className="mb-2"><b>Terms & Conditions:</b>There is a callout fee that applies for each diagnosis, depending on the capacity applied. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.<br />
                  <b>CHOOSE FAJ FOR YOUR PEACE OF MIND<br />
                    <small>We provide 2-month repair warranty
                      and 3-month parts warranty as standard.</small></b></p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('rational oven repair')} alt="Oven Repair" />
              </div>
            </div>
            <h3 className="cs_fs_24 mb-1 border-small-top pt-3">Rational Annual Maintenance Contract (AMC) Services</h3>
            <p className="mb-2">Our catering equipment technician offers an annual maintenance agreement package designed to keep your Rational Combi ovens, convection ovens, high-speed ovens, compact ovens, pizza ovens, cooking ranges, and other professional kitchen appliances running efficiently and in compliance with drive standards.<br />This proactive approach helps reduce the likelihood of unexpected breakdowns and the associated costs. Our annual maintenance package includes thorough maintenance, repair services, and equipment testing. It is ideal for hotels, restaurants, canteens, and other venues in the hospitality and education sectors that want to ensure their equipment operates smoothly and prevent any disruptions.
            </p>
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
            <h2 className="cs_fs_30">Why is it Important to Maintain Rational Commercial Kitchen Equipment?</h2>
            <p>Regular maintenance of Rational commercial kitchen equipment is important for reliability, safety, efficiency, and cost savings.</p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('commercial-kitchen-equipment-amc')} alt="Oven Repair" />
              </div>
              <div className="col-md-6">
                <ul>
                  <li><strong> Efficiency: </strong> Regular Rational oven maintenance ensures the oven / range heats evenly and accurately, reducing energy waste and providing consistent cooking / baking results.</li>
                  <li><strong> Food Quality: </strong> A clean Rational oven prevents unwanted flavors and ensures proper baking, which is essential for a positive customer experience.</li>
                  <li><strong> Reduced Downtime: </strong> Maintenance contract helps identify potential issues before they result in costly repairs or breakdowns.</li>
                  <li><strong> Cost Savings with Maintenance Contract: </strong> Regular maintenance of ovens and cookers can extend their lifespan and reduce repair costs, ultimately saving businesses money over time.</li>
                  <li><strong> Hygiene: </strong> Regular cleaning helps prevent bacteria and other contaminants, ensuring a safe cooking environment.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*  Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Problems with Rational Commercial Kitchen Equipment That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Broken Oven Door</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your food is baking unevenly or is undercooked, the problem may be related to the door of your commercial oven. Provide optimal baking.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Oven Not Heating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The main issue is that it might not reach the selected temperature, even when it is switched on and properly powered up. </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Uneven Cooking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Food often cooks unevenly, scorching on one side while remaining undercooked on the other due to problems with uneven heat distribution.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Oven Keeps Sparking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If you hear continuous clicking and your gas oven is sparking, the issue might be the ignition dial, which requires quick professional repair service.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Broken Oven Thermostat</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Cooking at the correct temperature is essential for flavorful meals, as incorrect temperatures often result in overcooked or undercooked dishes.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Broken Heating Elements</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Possible reasons for oven problems include faulty heating elements, a broken thermostat, burners, or electrical problems. Ovens, the igniter may be the culprit.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Broken Oven Fan</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A faulty oven fan can cause uneven cooking. Oven fans circulate heated air within the oven to ensure consistent cooking.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Broken Door Seal</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The oven door seal, also called a gasket, ensures an airtight seal between the oven door and the oven cavity. This prevents heat loss and promotes even cooking.</p>
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
            <h2 className="cs_fs_30">Complete Rational Commercial Oven Repair Services in Dubai</h2>

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
                <p className="mb-0">We provide repair services for a wide range of Rational commercial ovens or cookers.
                  <br /><strong>Our services include:</strong></p>
                <ul className="mb-0">
                  <li><strong> Rational Oven Installation: </strong>   Rational Professional installation of types of gas and electric ovens, ensuring optimal performance and efficiency.</li>
                  <li><strong> Rational Oven Diagnostics: </strong>   We conduct comprehensive diagnostics, providing eligibility assessments and detailed quotes to resolve any oven issues.</li>
                  <li><strong> Rational Oven Repair Service: </strong>   Rational Professional oven repair services for all components, ensuring quick resolution of issues such as leaks, electrical failures, and malfunctions. Contact us for specific services or any questions!</li>
                  <li><strong> Rational Oven Annual Maintenance Contract: </strong>   This contract specifies the terms and services for annual maintenance of catering ovens.</li>

                </ul>
                <p className="mb-0">Regular maintenance of Rational commercial ovens is crucial for ensuring optimal performance, efficiency, and longevity.</p>
              </div>
            </div>
          </div>
        </section >

        {/* The Benefits */}
        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">Benefits Of Regular Rational Oven Service and Maintenance in Dubai</h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">HEATING EFFICIENCY</h3>
                      <p className="small">We perform a detailed evaluation of heating efficiency with the help of a temperature gun.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">  DISINFECT COMPONENTS   </h3>
                      <p className="small">All components and parts of the oven are thoroughly tested and disinfected to ensure safety and reliability.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">FAN ASSESSMENT</h3>
                      <p className="small">We ensure that the fan operates correctly and is free of blockages in the burner and heating element.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">THERMOSTAT CHECK</h3>
                      <p className="small">We use a laser temperature meter to ensure that the thermostats are working correctly.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/extending')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">AIRFLOW BALANCE</h3>
                      <p className="small">We make sure you get optimal airflow around every part of the oven as needed.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">CUSTOMER FEEDBACK </h3>
                      <p className="small">Our team provides vital feedback on your rational oven's condition and any necessary repairs.</p>
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
                    <img  src={getImageSrc('icon/fast-reliable')} alt="Fast, Reliable Service" />
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
                    <p>We specialise in oven repair, which is why most major brands rely on us for their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
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
                <img src={getImageSrc('fajteam')} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise   */}
        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <h3>We specialise in Rational commercial oven services for the following brands:</h3>
            <div className="row">
              <div className="col-12">
                <ul>
                  <li><strong>Rational Professional Appliance Service and Repair in Dubai</strong>: We are a leading provider of repair and maintenance services for professional kitchen appliances, including iCombi ovens, iVario cooking systems, iHexagon ovens, and other Rational equipment. Our team of experienced technicians delivers expert support that ensures your commercial kitchen appliances operate at peak performance. Trust us for reliable solutions specifically designed for Rational products.</li>
                  <li><strong>Rational iCombi Pro Oven Repair &amp; Maintenance in Dubai:&nbsp;</strong>Maximise the performance of your Rational iCombi Pro oven with our top-tier repair and maintenance services in Dubai.&nbsp;Our expert technicians specialise in both electric and gas models, swiftly diagnosing issues and replacing worn parts. Regular maintenance is important. It minimises downtime, extends the life of your appliance, and ensures exceptional cooking results in your kitchen. Trust us to keep your oven operating at its best.</li>
                  <li><strong>Rational iCombi Classic Oven Repair &amp; Maintenance Near By:&nbsp;</strong>Our experts specialise in iCombi Classic ovens, offering complete inspections, repairs, and maintenance to meet your kitchen's needs. From troubleshooting the control panel to replacing heating elements, we ensure your oven operates reliably, maintains consistent cooking performance, and delivers optimal results for your culinary operations.</li>
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
        <section className="section cs_py_30 gallery-section bg-light-gray">
          <div class="container">
            <h3 class="mb-4 text-center">Gallery</h3>
            <div class="row g-4">

              <div class="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('oven-gallery/oven repair service')}
                  class="img-fluid rounded shadow mb-4"
                  alt="Oven Repair Service Dubai"
                />

                <img
                  src={getImageSrc('oven-gallery/rational oven repairs')}
                  class="img-fluid rounded shadow"
                  alt="Oven Repair Service Dubai"
                />
              </div>

              <div class="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('oven-gallery/rational oven service')}
                  class="img-fluid rounded shadow mb-4"
                  alt="Rational Oven Service"
                />

                <img
                  src={getImageSrc('oven-gallery/oven repair')}
                  class="img-fluid rounded shadow"
                  alt="Oven Repair"
                />
              </div>

              <div class="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('rational-oven-service')}
                  class="img-fluid rounded shadow mb-4"
                  alt="Oven Repair Maintenance"
                />

                <img
                  src={getImageSrc('oven-gallery/rational oven repair')}
                  class="img-fluid rounded shadow"
                  alt="Rational Oven Repair"
                />
              </div>
            </div>
          </div>
        </section>

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

export default RationalCommercialKitchenEquipmentRepairServiceDetail;

