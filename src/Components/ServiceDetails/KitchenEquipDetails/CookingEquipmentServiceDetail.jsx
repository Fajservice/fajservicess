import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import data from '../../../Data/KitchenEquipments/FAQs/CookingEquipmentServiceFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import 'swiper/swiper-bundle.css';
import testimonial_data from '../../../Data/KitchenEquipments/Testmonials/CookingEquipmentServiceTestimonials.json';
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import HeaderForm from "../../Headeform/HeaderForm";
import BookingFormModal from '../../BookingFormModal';
import { RxArrowTopRight } from 'react-icons/rx';
import Testimonial1 from "../../Testimonial/Testimonial1";

const CookingEquipmentServiceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Commercial Cooking Appliances Repair & Maintenance Services");
  const metadescription = String(description || "FAJ experts in commercial cooking appliances repair in Dubai, professional, stove, fryer, hood, cooker, kitchen equipment maintenance and AMC services.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Commercial Cooking Equipment Repair, Dubai, professional Kitchen Appliances Service, professional Cooking Range Repair, professional Gas Stove Repair, professional Deep Fryer Service, professional Oven Repair, Restaurant Equipment Maintenance");
  const metaURL = String(URL || "https://www.fajservices.ae/commercial-cooking-appliances-repair-service/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/img/commercial-cooking-appliances-repair-service.avif");


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
            <h1 className="cs_fs_30">Commercial Cooking Appliances Repair & Maintenance Services in Dubai</h1>
            <p>FAJ, established in 2010, specialises in minimising downtime for the catering industry through repair and annual maintenance contracts. Our catering division supplies, installs, repairs, and maintains commercial catering and warewashing equipment.<br />
              We provide services ranging from emergency repairs on electric and gas catering appliances to complete commercial kitchen installations, as well as repair and maintenance services tailored to businesses of all sizes
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
            {/*  */}
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

                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>EMERGENCY Cooking Equipments REPAIR</h2>
                <p className="mb-0">
                  <b>Terms & Conditions:</b> There is a callout fee that applies for each diagnosis, depending on the capacity applied. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.<br />
                  <b>CHOOSE FAJ FOR YOUR PEACE OF MIND<br />
                    <small>We provide 2-month repair warranty
                      and 3-month parts warranty as standard.</small> </b>
                </p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/Camercial-Kitchen-Equipment.avif`} alt="Gas Cooker Repair"  />
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
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/commercial-cooking-appliances-repair-service.avif`} alt="Gas Cooker Repair"  />
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
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Improper Ventilation</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A bad or inadequate ventilation system that is too small or unsuitable for your kitchen equipment can cause serious problems.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking Appliance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Leaks are often caused by damaged gaskets, seals, or hoses. To fix this, turn off the commercial cooking appliance and ensure the water is off.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Equipment Failure
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
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Uneven Cooking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Unequal heat distribution can lead to undercooked or overcooked food. The cooking range often does not reach the selected temperature.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Routine Cleaning</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Regular cleaning & maintenance are essential. Set a routine to clean hoods, ducts, and all kitchen covers, such as floors, countertops, and equipment.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Employee Failure</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">As a food industry professional, it&apos;s your duty to ensure your employees clearly know how to safely and efficiently operate all equipment.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Electrical Problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Electrical issues can seriously affect equipment by either oversupplying or undersupplying the required voltage and amperage.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Poor Maintenance</h3>
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
        {/* The Benefits Of appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec  bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0"> Benefits of Regular Catering Equipment Maintenance in Dubai </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.svg`} alt="Cooling Efficiency" className="icon-img-block-icon"  />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Enhanced Food Quality</h3>
                      <p className="small">Kitchen equipment condition directly affects overall food quality, so proper and regular maintenance is essential.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Optimal-Performance.svg`} alt="Cooling Efficiency" className="icon-img-block-icon"  />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Improved Workplace Safety</h3>
                      <p className="small">Regular kitchen equipment maintenance prevents contamination, reduces accidents, and ensures safe food preparation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Lower-Energy-Bills.svg`} alt="Cooling Efficiency" className="icon-img-block-icon"  />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Ensures Compliance</h3>
                      <p className="small">Food safety is essential for any food business. Regular maintenance of kitchen equipment prevents contamination and ensures safety.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Saving-Money-on-Repair.svg`} alt="Cooling Efficiency" className="icon-img-block-icon"  />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Reduced utility cost</h3>
                      <p className="small">Equipment that uses electricity, gas, or water operates more efficiently when kept clean and serviced regularly.</p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/extending.svg`} alt="Cooling Efficiency" className="icon-img-block-icon"  />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Improve Speed of Operations</h3>
                      <p className="small">A restaurant kitchen is a busy place that needs quick turnarounds to meet customer demands. Inefficiency can lead to delays and dissatisfaction.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Peace-of-Mind.svg`} alt="Cooling Efficiency" className="icon-img-block-icon"  />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Commercial Kitchen Maintenance
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
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`} alt="Fast, Reliable Service"  />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} alt="We Are Experts"  />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} alt="FAJ icon service"  />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/fajteam-1.avif`} alt="FAJ icon service"  />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`} alt="FAJ icon service"  />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} alt="FAJ icon service"  />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} alt="FAJ icon service"  />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`} alt="FAJ icon service"  />
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
                    {/* <p className="mb-0">{item.desc.replace(/\n/g, '<br>')}</p> */}
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

export default CookingEquipmentServiceDetail;

