import { useEffect, useRef, useState, useCallback } from "react";
import data from '../../../Data/KitchenEquipments/FAQs/OvenRepairFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import 'swiper/swiper-bundle.css';
import testimonial_data from '../../../Data/KitchenEquipments/Testmonials/OvenRepairTestimonials.json';
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import HeaderForm from "../../Headeform/HeaderForm";
import BookingFormModal from '../../BookingFormModal';
import { RxArrowTopRight } from 'react-icons/rx';
import Testimonial1 from "../../Testimonial/Testimonial1";

const OvenRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Oven Repair & Maintenance Services in Dubai | FAJ");
  const metadescription = String(description || "Looking for oven repair near me in Dubai? FAJ offers expert oven repair services for homes and businesses. Call us at 043300002");
  const metaAuthor = String(Author || "F A J Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Rational Oven Repair Service, Combi Oven Repair Service, Commercial Oven Repair Service");
  const metaURL = String(URL || "https://www.fajservices.ae/oven-repair/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/img/Camercial-Kitchen-Equipment.avif");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = "img/testimonialbg.jpg"
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
const [isModalOpen, setIsModalOpen] = useState(false);
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
          <meta name="twitter:url" content={metaURL} />
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Commercial Oven Repair and Maintenance Services</h1>
            <p>
              Looking for affordable oven repair? At F A J Technical Services L.L.C, we've been serving Dubai since 2010, offering trustworthy repair solutions.
              Our skilled technicians can handle various oven issues, including electric, gas range, and electric ovens.
              <br />We provide prompt and cost-effective service tailored to your needs, ensuring reliable repairs right at your door.

            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
                <button onClick={openModal} className="cs_btn cs_style_1 d-md-none" aria-label="Book Now">
                  <span>Book Now</span>
                  <RxArrowTopRight />
                </button>
                <BookingFormModal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>
        </section>

        {/* heading*/}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Commercial Combi Oven Maintenance</h2>
                <p className="mb-2">
                  We repair all types of commercial kitchen ovens, including gas and electric models. Our specialised team of commercial oven technicians carries essential spare parts, enabling us to assist you whenever you need it.
                  <br />Our goal is to help keep your business running smoothly. We offer commercial oven repair services in Dubai.</p>
                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>EXPRESS & EMERGENCY Oven REPAIR SERVICE</h2>
                <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that appliesapplies for each diagnosis, depending on the capacity applied. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.<br />
                  <b>CHOOSE FAJ FOR YOUR PEACE OF MIND<br />
                    <small>We provide 2-month repair warranty
                      and 3-month parts warranty as standard.</small></b></p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/Camercial-Kitchen-Equipment.avif`} alt="Oven Repair" loading="lazy" />
              </div>
            </div>
            <h3 className="cs_fs_24 mb-1 border-small-top pt-3">Planned Preventive Maintenance (PPM) Services</h3>
            <p className="mb-2">Our catering equipment technician offers a customized Planned Preventive Maintenance Package created to keep your Combi ovens, Convection ovens, High-Speed ovens, Compact ovens, Pizza ovens, Rational ovens, Commercial ovens, Duck ovens, and Steamers running efficiently and compliant with standards.<br />This proactive approach helps reduce the likelihood of unexpected breakdowns and the associated costs. Our Planned Preventive Maintenance Package includes maintenance, repair services, and testing. It is ideal for hotels, restaurants, canteens, and other venues in the hospitality and education sectors that want to ensure their equipment operates smoothly and prevent breakdowns.</p>
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
            <h2 className="cs_fs_30">Why is Oven Maintenance Service Important in Dubai?</h2>
            <p>
              Regular maintenance of commercial ovens is essential for safe and efficient operation.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/commercial-kitchen-equipment-amc.avif`} alt="Oven Repair" loading="lazy" />
              </div>
              <div className="col-md-6">
                <ul>
                  <li><strong> Efficiency: </strong> Regular maintenance ensures the oven heats evenly and accurately, which reduces energy waste and provides consistent baking results. </li>
                  <li><strong> Food Quality: </strong> A clean oven prevents unwanted flavors and ensures proper baking, essential for a positive customer experience. </li>
                  <li><strong> Reduced Downtime: </strong> Preventive maintenance can help identify potential issues before they lead to expensive repairs or breakdowns. </li>
                  <li><strong> Cost Savings with Maintenance Contract: </strong> Regular maintenance can extend the oven's lifespan and lower repair costs, ultimately saving businesses money over time. </li>
                  <li><strong> Hygiene: </strong> Regular cleaning prevents bacteria and other contaminants, ensuring a safe cooking environment. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*  Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Commercial Oven Problems That May Require Maintenance </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Broken Oven Door</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your food is not cooking evenly or is undercooked, the issue may be related to the door of your commercial oven. For optimal cooking.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Oven Not Heating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      You guessed it! The most obvious issue is that it may not heat to the desired temperature, even when switched on and fully powered up properly and consistently.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Uneven Cooking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Food often cooks unevenly, scorching on one side while staying undercooked on the other due to uneven heat distribution problems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Oven Keeps Sparking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you hear continuous clicking and your gas oven is sparking, the problem might be the ignition dial needing immediate professional repair service.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Broken Oven Thermostat</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Cooking at the right temperature is absolutely vital for delicious meals, as incorrect temperatures can often lead to overcooking or undercooking.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Broken Heating Elements</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Possible causes include faulty heating elements, a broken thermostat, clogged burners, or electrical issues. For gas ovens, it may be the igniter.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Broken Oven Fan</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A malfunctioning electric oven fan can lead to uneven cooking. Oven fans circulate heated air around the oven cavity to ensure even cooking.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Broken Door Seal</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The oven door seal, also known as a gasket, creates an airtight seal between oven door and the oven cavity, preventing heat loss and ensuring even cooking.
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
            <h2 className="cs_fs_30">Comprehensive Commercial Oven Repair Services in Dubai</h2>

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
                <p className="mb-0">We provide repair services for a wide range of commercial ovens.
                  <br /><strong>Our services include:</strong></p>
                <ul className="mb-0">
                  <li><strong> Oven Installation: </strong>   Professional installation of various types and brands of gas and electric ovens, ensuring optimal performance and efficiency. </li>
                  <li><strong> Oven Diagnostics: </strong>   We perform thorough diagnostics and provide eligibility assessments and detailed quotes to address any oven issues. </li>
                  <li><strong> Oven Repair Service: </strong>   Reliable professional oven repair services for all components, ensuring quick resolution of issues like leaks, electrical failures, and malfunctions. Feel free to contact us for specific services or any questions! </li>
                  <li><strong> Oven Annual Maintenance Contract: </strong>   This contract outlines the terms and services covered for the annual maintenance of catering ovens. </li>

                </ul>
                <p className="mb-0">Regular commercial oven maintenance is essential for optimal performance, efficiency, and longevity.</p>


              </div>


            </div>
          </div>
        </section >

        {/* The Benefits */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">Benefits Of Regular Oven Service and Maintenance in Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.png`} alt="Cooling Efficiency" className="icon-img-block-icon" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">HEATING EFFICIENCY</h3>
                      <p className="small">
                        We conduct a thorough assessment of heating efficiency using a temperature gun.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Optimal-Performance.png`} alt="Cooling Efficiency" className="icon-img-block-icon" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">  DISINFECT COMPONENTS   </h3>
                      <p className="small">
                        All components and oven parts are thoroughly tested, disinfected to ensure safety and reliability.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Lower-Energy-Bills.png`} alt="Cooling Efficiency" className="icon-img-block-icon" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">FAN ASSESSMENT</h3>
                      <p className="small">
                        We ensure the fan operates properly and has no blockages in the burner or heating element.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Saving-Money-on-Repair.png`} alt="Cooling Efficiency" className="icon-img-block-icon" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">THERMOSTAT CHECK</h3>
                      <p className="small">
                        We use a laser temperature gauge to confirm that thermostats are functioning properly.
                      </p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Extending-Appliance-Lifespan.png`} alt="Cooling Efficiency" className="icon-img-block-icon" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">AIRFLOW BALANCE</h3>
                      <p className="small">
                        We ensure that you receive optimal airflow around each oven part as required.
                      </p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Peace-of-Mind.png`} alt="Cooling Efficiency" className="icon-img-block-icon" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">CUSTOMER FEEDBACK </h3>
                      <p className="small">
                        Our team offers essential feedback on the condition of your oven and any necessary repair.
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
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`} alt="Fast, Reliable Service" loading="lazy" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can rely on prompt service! Our same-day repairs or next-day visits ensure that your needs are addressed swiftly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} alt="We Are Experts" loading="lazy" />
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
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} alt="FAJ icon service" loading="lazy" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Schedule your oven repair in Dubai or Sharjah by choosing a specific day and time. Our technician will arrive within a 3-4 hour window.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/fajteam-1.avif`} alt="FAJ icon service" loading="lazy" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`} alt="FAJ icon service" loading="lazy" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We specialise in oven repair, which is why most major brands rely on us for their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} alt="FAJ icon service" loading="lazy" />

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
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} alt="FAJ icon service" loading="lazy" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our expert oven technicians are well-trained, providing <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a> for various major oven brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`} alt="FAJ icon service" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise   */}
        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <h3>We specialize in commercial oven services for the following brands </h3>
            <div className="row">
              <div className="col-12">
                <ul>
                  <li> <strong> Rational Oven Combi Repair and Service: </strong>FAJ offers reliable Rational Oven repair and services in Dubai, with professionals who are experts in Rational professional oven maintenance.</li>
                  <li> <strong> Capinox Gas Oven Maintenance Service: </strong>Discover FAJ in Dubai, your go-to solution for Capinox Gas Oven repair and maintenance! We proudly specialize in Capinox Gas Ovens, ensuring top-notch service and expertise for all your needs. We&apos;re here to help you!</li>
                  <li> <strong> Forni Fiorini Rack Oven Servicing and Repair: </strong>The Forni Fiorini Rack Oven service and repair ensures you Don&apos;t have to worry because you are in the right place. FAJ is where efficiency and reliability are prioritized.</li>
                  <li> <strong> Tecnodom Steam Convection Oven Repair Near you: </strong>Depend on our skilled team to quickly resolve any issues with your Tecnodom Steam Convection Oven, restoring it to optimal performance.</li>
                  <li> <strong> Convection Oven Krystal Repair and Service: </strong>With our expert understanding of the Convection Oven Krystal, we deliver reliable repairs that will have your unit functioning flawlessly. Trust us to enhance your cooking experience by ensuring your oven performs at its best every time.</li>
                  <li> <strong> Commercial Cake Bakery Pizza One Layer Two Layers Oven Service: </strong>No matter the challenges with your commercial cake bakery pizza oven—whether it&apos;s a single-layer cake or a stunning three-layer creation—our experienced team is here to help! We’ll identify maintenance needs and provide tailored solutions to ensure your baked goods shine and bring joy to all.</li>
                  <li> <strong> Convotherm Combi Oven - Professional Service and Maintenance: </strong>Is your Convotherm Combi Oven not working? You don’t have to endure uncomfortable temperatures or suffer losses due to faulty equipment – FAJ will get your Convotherm Combi Oven back up and running quickly!</li>
                  <li> <strong> Tecnoeka Electric Combi Oven Service and Repair: </strong>Tecnoeka Electric Combi Oven service in Dubai requires expert help, as only specialists know how to address its issues. We offer hassle-free oven repair service. </li>
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
        {/* testimobial section */}
        <Testimonial1
          subtitle="What Our Clients Say"
          title="Customer <span>Reviews</span>"
          bgImg="img/testimonialbg.jpg"
          testimonialData={testimonial_data}
          sectionId="home-testimonials"
        />

        {/* FAQ's */}
        <section className="section cs_py_30  bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">FAQ&apos;s</h3>
            <div className="cs_accordians_wrapper cs_style_1 p-0">
              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye text-light"><FaEye /></i>
                      <i className="bi bi-eye-slash text-light"><FaEyeSlash /></i>
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

export default OvenRepairDetail;

