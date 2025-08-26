

import { useEffect, useRef, useState, useCallback } from "react";
import { Link, parsePath } from "react-router-dom";
import data from '../../../Data/RefrigerationEquipData/FAQs/IceMakerRepairFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import testimonial_data from '../../../Data/RefrigerationEquipData/Testmonials/IceMakerRepairTestimonial.json';
import brandsLogo_data from '../../../Data/IceMakersBrandsLogo.json';
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import HeaderForm from "../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import BookingFormModal from '../../BookingFormModal';
import { RxArrowTopRight } from 'react-icons/rx';
import Testimonial1 from "../../Testimonial/Testimonial1";
import BrandsSliderSection from "../../BrandsSliderSection";

const IceMakerRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Commercial Ice Maker Repair - Maintenance Services");
  const metadescription = String(description || "Reliable ice maker repair in Dubai. Contact FAJ for a fast ice maker repair service near me. We are specializing in Hoshizaki, Scotsman");
  const metaAuthor = String(Author || "F A J Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Ice Maker Repair, IceMaker Repair, Commercial Ice Maker Repair Service");
  const metaURL = String(URL || "https://www.fajservices.ae/ice-maker-repair/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/img/newicemaker.avif");


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
            <h1 className="cs_fs_30">Ice Maker Repair – Ice Machine Service</h1>

            {/* <h2 className="cs_fs_30">We provide top-quality repair and maintenance services for ice maker machines</h2> */}
            <p>
              If you need urgent ice maker repair service in Dubai, you've come to the right place! FAJ has been a trusted maintenance provider since 2010. We also specialise in commercial ice machine repairs, ensuring that businesses always have a reliable supply of ice.
              <br />If your ice maker is not working properly, contact FAJ Professionals! We prioritise customer satisfaction and offer customised solutions for all your ice maker repair and maintenance needs in Dubai.

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

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Ice Maker Machine Maintenance in Dubai </h2>

                <p className="mb-2">
                  Our experts are highly skilled and always work to a high-quality standard. We regularly provide ice machine servicing and repair services for a wide range of ice machine brands, including those used in restaurants, cafes, shops, hotels, and other establishments.
                </p>

                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Ice Machine Service and Maintenance </h2>
                <p className="mb-0">
                  The technical inspection fee includes diagnosis, transportation, and reinstallation at your premises in Dubai. Please note that this fee is non-refundable and is a flat rate.
                  <br />However, it does not cover the cost of any repair, cleaning service and parts that may need to be replaced. Please contact us.
                </p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/icemaker2.avif`} alt="Ice Maker Repair" loading="lazy" />

              </div>
            </div>

            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>

        {/* Why  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Ice Maker Machine Maintenance Service Important in Dubai?</h2>
            <p className="">
              Regular maintenance of ice machines offers essential benefits that can positively impact your operations and bottom line.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/newicemaker.avif`} alt="Ice Maker Repair" loading="lazy" />
              </div>
              <div className="col-md-6">

                <ul className="mb-0">
                  <li><strong>  Reduced Repairs:</strong> Regular maintenance prevents minor issues from escalating, reducing repair frequency and costs for ice machines.</li>
                  <li><strong>  Enhanced Efficiency:</strong> Maintaining your ice machine in optimal condition ensures it operates efficiently, consumes less energy, and lowers operational costs.</li>
                  <li><strong>  Extended Lifespan:</strong> Well-maintained extends machine lifespan, boosts returns, and delays costly replacements.</li>
                  <li><strong>  Consistent Ice Quality:</strong> Regular maintenance keeps your ice clean and free of impurities, improving the taste and safety of your drinks.</li>
                  <li><strong>  Health and Safety Compliance: </strong> Regular cleaning and sanitizing prevent bacteria and mold, ensuring your ice meets health and safety standards.</li>
                  <li><strong>  Optimized Performance: </strong> Expert maintenance services include detailed inspections and adjustments that ensure your machine operates smoothly and efficiently.</li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems with the Ice Maker Machine  </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Clogged Ice Maker  </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A common problem with ice makers is clogged water filter that needs to be replaced or cleaned. Ensure sufficient water flow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">No Ice Cube</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your ice maker isn't making ice or cubes are stuck, check the fill tubes. If cup and tube at the back are frozen, look for blockages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Defective Water Inlet Valve</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The inlet valve controls water flow into the ice maker. Blockages or damage can block flow, preventing entry and halting ice production.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Ice Machine Freezing Over</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Either the temperature setting is too low, or the water inlet tube has frozen. If it&apos;s the former, it&apos;s a simple fix.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Ice Does Not Form Properly</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The ice maker may struggle to produce ice at its intended rate when the ice machine temperatures are set too high.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Making Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      To address low water temperature in the storage tray, reset the ice-making cycle and restart the machine after turning it off.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Faulty Ice Mold</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Check the mold if there’s no ice in the tray. If ice is present but not dropping, it may indicate a possible mechanical issue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Ice Machine won&apos;t Operate</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A common reason ice machines fail is often due to an electrical fault in either the components or the water system.

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
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR THE ICE MAKER MACHINE </h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/45IUOnKHjKw?si=2x6Q4RPxVZUtOVKy"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-xl-6">
                <p className="mb-0">
                  We specialise in all types and brands of commercial ice maker machines, including built-in ice makers.
                  <br /><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">



                  <li> <strong> Ice Machine Installation: </strong> Professional installation of various brands and types of ice machines for optimal performance and efficiency. </li>
                  <li> <strong> Ice Maker Diagnostics: </strong> We provide thorough fault-finding services to diagnose issues, along with eligibility assessments and detailed quotes to address any system concerns. </li>
                  <li> <strong> Ice Machine Repair Service: </strong> Prompt and effective repair services for all ice machine components, addressing issues such as leaks, electrical failures, and system malfunctions. Feel free to contact us for specific services or if you have any questions! </li>
                  <li> <strong> Ice Maker Annual Maintenance Contract: </strong> This contract details the terms and services for the annual maintenance of your ice maker machine. </li>

                  <p className="mb-0">
                    Regular maintenance is crucial for ensuring the optimal performance, efficiency, and longevity of your ice machine.
                  </p>
                </ul>


              </div>


            </div>
          </div>
        </section >

        {/* The Benefits O */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">The Benefits Of Ice Maker Service Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.png`} alt="Cooling Efficiency" className="icon-img-block-icon" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Ensuring Safety</h3>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Optimal-Performance.png`} alt="Cooling Efficiency" className="icon-img-block-icon" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Optimal Performance
                      </h3>
                      <p className="small">Regular maintenance helps your ice machine run smoothly and efficiently, delivering the best results every time.
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
                      <h3 className="text-uppercase mb-2 cs_fs_18">Lower Energy Bills</h3>
                      <p className="small">Energy efficient ice machine translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Saving-Money-on-Repair.png`} alt="Cooling Efficiency" className="icon-img-block-icon" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Saving Money on Repair</h3>
                      <p className="small">Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.</p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Extending-Appliance-Lifespan.png`} alt="Cooling Efficiency" className="icon-img-block-icon" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Extending Appliance Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your home ice machine, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Peace-of-Mind.png`} alt="Cooling Efficiency" className="icon-img-block-icon" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Peace of Mind
                      </h3>
                      <p className="small">Knowing your ice machine are in top condition gives you confidence and removes the stress of unexpected failures.</p>
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
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} alt="We Are Experts" loading="lazy" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} alt="FAJ icon service" loading="lazy" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your Ice Maker repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
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
                    <p>We are experts in Ice Maker repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} alt="FAJ icon service" loading="lazy" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} alt="FAJ icon service" loading="lazy" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
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

        {/* We specialise  */}
        <section className="section cs_py_30 bg-light-gray ">
          <div className="container">
            <h3> We specialise in Ice Maker Machine Service for the following brands </h3>
            <div className="row">
              <div className="col-12">

                <p className="mb-0"><b> Hoshizaki Ice Maker Repair</b>: FAJ is here to support you when things go wrong. We understand that your Hoshizaki ice cuber maker is essential for daily life, keeping your food fresh.</p>
                <p className="mb-0"><b> Brema Ice Cube Maker Services</b>: If you are experiencing issues with your Brema ice maker, please contact the FAJ team for same-day repair service in Dubai.</p>
                <p className="mb-0"><b> Simag Ice Machine Maintenance</b>: For Simag ice cube machine repair in Dubai, our team of professional and qualified technicians is available throughout the UAE.</p>
                <p className="mb-0"><b> Brice Ice Flake Machine Repair</b>: If you&apos;re searching for the best Brice ice maker repair company in Dubai, FAJ is the top choice. They are renowned for delivering exceptional service for all Brice ice maker repairs and are recognized as the leading service provider in the area.</p>
                <p className="mb-0"><b> Alinia Ice Machine Service</b>: If you are searching for the best Alinia repair company in Dubai, FAJ is the perfect choice. They are renowned for their exceptional service in repairing Alinia ice makers and are recognized as the leading provider of Alinia ice cube maker services in the area.</p>
                <p className="mb-0"><b> Coolbaby Ice Maker Service</b>: Your Coolbaby ice cube maker may need repair or maintenance, and we can assist you. For high-quality Coolbaby ice machine repair in Dubai, trust FAJ.</p>
                <p className="mb-0"><b> Scotsman Ice Maker Machine Repair Service</b>: We offer expert services for Scotsman ice machine repair in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Scotsman ice makers and more.</p>
                <p className="mb-0"><b> Commercial Ice Maker and Ice Machine Maintenance</b>: Are you worried about your commercial ice maker malfunctioning and looking for a dependable company in Dubai? Contact us for same-day service!</p>
                <p className="mb-0"><b> Electrolux Professional Ice Machine Repair Service</b>: If you&apos;re looking for the top Electrolux professional ice machine repair company in Dubai, FAJ is the perfect choice. They are well-known for providing outstanding service for Electrolux professional ice maker repairs. FAJ has established itself as the leading service provider for Electrolux professional ice machines in the area.</p>



                <br />
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
        <BrandsSliderSection 
        brandsData={brandsLogo_data}
        sectionId="home-brands"
        logoMaxHeight="60px"
        logoMaxWidth="120px"
        containerHeight="100px"
      />

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

export default IceMakerRepairDetail;

