

import { useEffect, useRef, useState, useCallback } from "react";
import { Link, parsePath } from "react-router-dom";
import data from '../../../Data/HomeAppData/FAQs/AMCFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import BookingFormModal from '../../BookingFormModal';
import { RxArrowTopRight } from 'react-icons/rx';
import 'swiper/swiper-bundle.css';
import testimonial_data from '../../../Data/HomeAppData/Testmonials/AMCTestimonial.json';
import brandsLogo_data from '../../../Data/AppliancesBrandsLogo.json';
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import HeaderForm from "../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import BrandsSliderSection from "../../BrandsSliderSection";
import Testimonial1 from "../../Testimonial/Testimonial1";

// import { Link } from "react-router-dom";

const AppliancesMaintenanceContractDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Best Appliances AMC Service Dubai -#1 Maintenance Contract");
  const metadescription = String(description || "Time to get comfortable! with appliances AMC service in Dubai FAJ Experts in kitchen appliances, freezer, chiller, cooking appliances maintenance");
  const metaAuthor = String(Author || "Faj Technical Services");
  const metaKeyword = String(Keyword || "Home appliacnes, Appliances AMC, Appliances Maintenance Contract, Kitchen Equipment AMC, Kitchen Appliances AMC, Dubai Appliances Service, Appliance Repair Dubai, Appliance Service Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/appliances-amc-service/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/img/dishwasher-repair-service.avif");
  // For SEO


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
            <h1 className="cs_fs_30">KITCHEN EQUIPMENT AND APPLIANCES AMC SERVICES</h1>
            <p>FAJ has been providing commercial kitchen equipment and appliance maintenance contract services in Dubai, Sharjah, and Abu Dhabi since 2010.< br />
              Regular Planned Preventive Maintenance (PPM) is essential for keeping appliances efficient and minimising unexpected failures.
              As appliances age, they become more prone to breakdowns, often at inconvenient times.< br />
              With FAJ Appliance Services, our annual Domestic or Commercial Appliances Contract offers peace of mind by providing a predictable budget for maintenance, helping you avoid unexpected repair costs.< br />
              Contact us today to book a technician for an inspection and arrange your Appliances AMC Services Contract Cover to start now.
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
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Appliances Maintenance Contract</h2>

                <p className="mb-2">
                  If you need AMC services for kitchen equipment and appliances, contact us for the best and most reliable service throughout the year.
                  Enjoy peace of mind knowing that your kitchen equipment and appliances are running smoothly for your business. We’ve got you covered with cooking, baking, cooling, refrigeration, laundry equipment, ice makers, dishwashers, and other appliances.

                </p>


                <h2 className="cs_fs_20 mb-1 pt-3 border-small-top" style={{ fontSize: "20px" }}>Planned Preventative Maintenance (PPM) Services</h2>
                <p className="mb-0">
                  Our appliances technician can create a customized Planned Preventative Maintenance Package for your house or business properties. <br />
                  This package is created to keep your washing machines, dryers, dishwashers, ovens, refrigerators, and coffee machines running efficiently. By taking a proactive approach, you can reduce the likelihood of unexpected breakdowns and the costs associated with them.<br />
                  Our Planned Preventative Maintenance Package includes repair, maintenance, and testing, making it ideal for both major and small appliances across all properties. This package ensures that your air conditioning system operates smoothly and helps prevent breakdowns.</p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/dishwasher-repair-service.avif`} alt="Appliances AMC Services" loading="lazy" />
              </div>
            </div>

          </div>
        </section>



        {/* Why  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">The Importance of Kitchen Equipment Maintenance Contract Service  </h2>
            <p>
              In a commercial kitchen, keeping your equipment efficient and safe is essential. Regular maintenance is not merely a routine task but a vital necessity that can greatly affect your business.
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/Cooking-Range-Repair-Nearby-You.avif`} alt="Appliances AMC Services" loading="lazy" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Ensures Compliance: </strong> Food safety is vital for food service businesses. Regular equipment maintenance prevents contamination and ensures hygienic food preparation. </li>
                  <li> <strong> Enhances Efficiency and Productivity: </strong> In a bustling kitchen, effective equipment is crucial for maintaining productivity and satisfying customer demands. </li>
                  <li> <strong> Enhances Safety for Staff: </strong> A safe working environment is crucial for your staff's well-being. Regular maintenance helps prevent accidents and injuries from faulty equipment. </li>
                  <li> <strong> Eaintains Consistent Food Quality: </strong> Consistent food quality is vital for customer satisfaction and repeat business. Regular maintenance ensures your equipment functions properly for uniform cooking results. </li>
                  <li> <strong> Eost Savings on Repairs: </strong> Addressing minor issues quickly can save your business on repairs and emergency calls. Regular kitchen maintenance is essential for the longevity, efficiency, and safety of your equipment. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Kitchen Equipment Problems That May Require Maintenance   </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Poor Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Ignoring regular maintenance of kitchen equipment can cause wear and tear, greatly impacting its overall efficiency and long-term lifespan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Equipment Failure</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      In the hospitality industry, commercial kitchen equipment is a crucial asset. Its design optimizes operations, so any failure can cause significant disruptions.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Improper Storage</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      To prevent food contamination, it&apos;s essential to store food at the correct temperatures, label and date all items, and use appropriate storage containers.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Food Poisoning</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Foodborne illness occurs when food contaminated with harmful bacteria, viruses, or toxins is consumed. Examples include aflatoxins and raw kidney beans.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking Appliances</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Leaks in kitchen appliances are usually due to damaged gaskets, seals, or hoses. If you spot a leak, turn off the appliance and the water supply to prevent damage.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Commercial Kitchen Fires</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      Commercial kitchen fires pose a serious hazard in the restaurant industry, occurring frequently and leading to devastating consequences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Equipment Overheating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      Overheating is a common issue with commercial kitchen equipment like ovens and fryers, often resulting from various performance-affecting factors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Electrical Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      As we enhance <a href="/orphan/">kitchen</a> efficiency with electrical appliances, increased reliance can lead to issues that need prompt attention to ensure safety and functionality.
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
            <h2 className="cs_fs_30">HERE ARE THE MAINTENANCE SERVICES WE OFFER FOR KITCHEN EQUIPMENTS </h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/boj7h-gOf7M?si=wNggMssriwyjMGo1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-xl-6">
                <p className="mb-0">
                  Here are some key points to consider for maintaining commercial kitchen equipment:
                </p>

                {/* <p className='mb-0'><strong>Our services include:</strong></p> */}
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Service Scheduling: </strong> Regular maintenance should be scheduled at specific intervals, such as weekly, monthly, or quarterly, depending on the equipment type and its usage.</li>
                  <li> <strong> Preventive Maintenance: </strong> This involves cleaning, lubricating, and inspecting kitchen equipment to identify and resolve potential issues before they escalate into major problems.</li>
                  <li> <strong> Repair and Replacements: </strong> Timely repairs or replacements are essential to prevent equipment failure and reduce downtime.</li>
                  <li> <strong> Safety: </strong> Safety should be a top priority when maintaining equipment. Staff should be trained on proper safety procedures and equipment should be regularly inspected for potential hazards.</li>
                  <li> <strong> Professional Assistance: </strong> FAJ professional technician for major repairs and maintenance is important, especially for equipment requiring specialized skills.</li>
                  <p className="mb-0">
                    We provide hotel kitchen equipment maintenance in the UAE to ensure safe operations and extend kitchen equipment life.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section >

        {/* Benefits */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">Benefits Of Regular Appliance Service and Maintenance in Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">

                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={`${import.meta.env.BASE_URL}img/icons/24x7b.jpg`} alt="24x7" className="rounded shadow" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Routine Service</h3>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={`${import.meta.env.BASE_URL}img/icons/call.jpg`} alt="Cooling Efficiency" className="rounded shadow" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">On-call services</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your home appliances, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={`${import.meta.env.BASE_URL}img/icons/gearicon.jpg`} alt="Cooling Efficiency" className="rounded shadow" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Genuine Spare Parts</h3>
                      <p className="small">Knowing your commercial kitchen equipment is in top condition gives you confidence and removes the stress of unexpected failures.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={`${import.meta.env.BASE_URL}img/icons/wellstar.jpg`} alt="Cooling Efficiency" className="rounded shadow" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Maintenance Costs</h3>
                      <p className="small">High-quality equipment may be more expensive initially, but it typically breaks down less frequently and requires fewer repairs.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={`${import.meta.env.BASE_URL}img/icons/trained-b.jpg`} alt="trained icon" className="rounded shadow" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Increased Efficiency</h3>
                      <p className="small">Commercial kitchen equipment can improve the efficiency of daily tasks in your kitchen. · Lower Maintenance Costs · Superior Quality.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={`${import.meta.env.BASE_URL}img/icons/wellicon.jpg`} alt="Cooling Efficiency" className="rounded shadow" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Cost Efficiency</h3>
                      <p className="small">FAJ a Save hand maintenance. Here’s a cost comparison: a commercial kitchen helps you avoid high startup equipment costs.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={`${import.meta.env.BASE_URL}img/icons/annual-contract-b.jpg`} alt="annual contract icon" className="rounded shadow" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Report and Updates</h3>
                      <p className="small">FAJ is releasing a report on the condition of commercial kitchen equipment, outlining actions to enhance efficiency and safety.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block border-0">
                        <img src={`${import.meta.env.BASE_URL}img/icons/installation-b.jpg`} alt="installation icon" className="rounded shadow" loading="lazy" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Experts and Trained</h3>
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
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} alt="We Are Experts" />
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
                    <p>Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
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
                    <p>We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.</p>
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
            <h3>We are specialise in Appliances services for the following brands</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0">
                  <Link to="/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/">
                    <b>LG Appliance Service</b>
                  </Link>
                  : FAJ is here to support you when things go wrong. We understand that your LG appliances are essential for daily life, keeping your food fresh and meals cooked.
                </p>
                <p className="mb-0">
                  <Link to="/samsung-fridge-repair-in-dubai-samsung-washing-machine-repair-in-dubai-samsung-cooker-repair-in-dubai-samsung-oven-repair-in-dubai-samsung-appliances-maintenance-in-dubai-samsung-refrigerator-fix-repa/">
                    <b>Samsung Appliance Service</b>
                  </Link>
                  : If you are facing any problems with your Samsung refrigerator, washer dryer, or dishwasher, contact the FAJ team for same-day repair service in Dubai.
                </p>
                <p className="mb-0">
                  <Link to="/electrolux-home-appliances-repair/">
                    <b>Electrolux Appliance Service</b>
                  </Link>
                  : When you need Electrolux appliance repair in Dubai, we have a team of professional and qualified technicians available throughout the UAE.
                </p>
                <p className="mb-0">

                  <b>Bosch Appliance Service</b>
                  : If you are looking for the best Bosch refrigerator repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch cooking range, Washing machine, refrigerator service provider in the area.
                </p>
                <p className="mb-0">
                  <Link to="/viking-appliances-service/">
                    <b>Viking Appliance Service</b>
                  </Link>
                  : Your Viking appliances may require repair or maintenance and we can help. For high-quality Viking refrigerator, range or oven repair in Dubai, rely on FAJ.
                </p>
                <p className="mb-0">
                  <Link to="/daewoo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">
                    <b>Daewoo Appliance Service</b>
                  </Link>
                  : We provide expert services for Daewoo appliance repair in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator, dishwasher, dryer and more.
                </p>
                <p className="mb-0">
                  <Link to="/siemens-home-appliances-repair/">
                    <b>Siemens Appliance Service</b>
                  </Link>
                  : Are you concerned about your Siemens washing machine malfunctioning and searching for a reliable Siemens appliances company in Dubai? Contact us for same-day service!
                </p>
                <p className="mb-0">
                  <Link to="/teka-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">
                    <b>Teka Appliance Service</b>
                  </Link>
                  : If you&apos;re searching for the best Teka appliances repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area.
                </p>

                <br />
                <p>
                  <a href="/aeg-fridge-repair-in-dubai-aeg-washing-machine-repair-in-dubai-aeg-cooker-repair-in-dubai-aeg-oven-repair-in-dubai-aeg-appliances-maintenance-in-dubai-aeg-refrigerator-fix-repairs-service-in-dubai-aeg/">AEG</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/ariston-fridge-repair-in-dubai-ariston-washing-machine-repair-in-dubai-ariston-cooker-repair-in-dubai-ariston-oven-repair-in-dubai-ariston-appliances-maintenance-in-dubai-ariston-refrigerator-fix-repa/">Ariston</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/beko-fridge-repair-in-dubai-beko-washing-machine-repair-in-dubai-beko-cooker-repair-in-dubai-beko-oven-repair-in-dubai-beko-appliances-maintenance-in-dubai-beko-refrigerator-fix-repairs-service-in-dub/">Beko</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/blomberg-fridge-repair-in-dubai-blomberg-washing-machine-repair-in-dubai-blomberg-cooker-repair-in-dubai-blomberg-oven-repair-in-dubai-blomberg-appliances-maintenance-in-dubai-blomberg-refrigerator-fi/">Blomberg</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/faber-appliances-service/">Faber</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/fagor-fridge-repair-in-dubai-fagor-washing-machine-repair-in-dubai-fagor-cooker-repair-in-dubai-fagor-oven-repair-in-dubai-fagor-appliances-maintenance-in-dubai-fagor-refrigerator-fix-repairs-service/">Fagor</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/fisher-and-paykel-fridge-repair-in-dubai-fisher-and-paykel-washing-machine-repair-in-dubai-fisher-and-paykel-cooker-repair-in-dubai-fisher-and-paykel-oven-repair-in-dubai-fisher-and-paykel-appliances/">Fisher and Paykel</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/foster-appliances-services-foster-dishwasher-repair-service-in-dubai-foster-cooking-range-repair-service-in-dubai-foster-cooktop-repair-service-in-dubai-foster-oven-repair-in-dubai-foster-rangetop-r/">Foster</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/gaggenau-fridge-repair-in-dubai-gaggenau-washing-machine-repair-in-dubai-gaggenau-cooker-repair-in-dubai-gaggenau-oven-repair-in-dubai-gaggenau-appliances-maintenance-in-dubai-gaggenau-refrigerator-fi/">Gaggenau</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/hitachi-fridge-repair-in-dubai-hitachi-washing-machine-repair-in-dubai-hitachi-cooker-repair-in-dubai-hitachi-oven-repair-in-dubai-hitachi-appliances-maintenance-in-dubai-hitachi-refrigerator-fix-repa/">Hitachi</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/hoover-fridge-repair-in-dubai-hoover-washing-machine-repair-in-dubai-hoover-cooker-repair-in-dubai-hoover-oven-repair-in-dubai-hoover-appliances-maintenance-in-dubai-hoover-refrigerator-fix-repairs-se/">Hoover</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/">Indesit</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/neff-fridge-repair-in-dubai-neff-washing-machine-repair-in-dubai-neff-cooker-repair-in-dubai-neff-oven-repair-in-dubai-neff-appliances-maintenance-in-dubai-neff-refrigerator-fix-repairs-service-in-dub/">Neff</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/smeg-fridge-repair-in-dubai-smeg-washing-machine-repair-in-dubai-smeg-cooker-repair-in-dubai-smeg-oven-repair-in-dubai-smeg-appliances-maintenance-in-dubai-smeg-refrigerator-fix-repairs-service-in-dub/">Smeg</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/sub-zero-fridge-repair-in-dubai-sub-zero-washing-machine-repair-in-dubai-sub-zero-cooker-repair-in-dubai-sub-zero-oven-repair-in-dubai-sub-zero-appliances-maintenance-in-dubai-sub-zero-refrigerator-fi/">Sub Zero</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/terim-appliances-service/">Terim</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/whirlpool-fridge-repair-in-dubai-whirlpool-washing-machine-repair-in-dubai-whirlpool-cooker-repair-in-dubai-whirlpool-oven-repair-in-dubai-whirlpool-appliances-maintenance-in-dubai-whirlpool-refrigera/">Whirlpool</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/zanussi-fridge-repair-in-dubai-zanussi-washing-machine-repair-in-dubai-zanussi-cooker-repair-in-dubai-zanussi-oven-repair-in-dubai-zanussi-appliances-maintenance-in-dubai-zanussi-refrigerator-fix-repa/">Zanussi</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/de-dietrich-fridge-repair-in-dubai-de-dietrich-washing-machine-repair-in-dubai-de-dietrich-cooker-repair-in-dubai-de-dietrich-oven-repair-in-dubai-de-dietrich-appliances-maintenance-in-dubai-de-dietri/">De Dietrich</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/baumatic-appliances/">Baumatic</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/bertazzoni-refrigerator-repair-in-dubai-bertazzoni-appliances-service-bertazzoni-fridge-repair-in-dubai-bertazzoni-washing-machine-washer-bertazzoni-dryer-repair-in-dubai-bertazzoni-dishwasher-cooker/">Bertazzoni</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/bompani-fridge-repair-in-dubai-bompani-washing-machine-repair-in-dubai-bompani-cooker-repair-in-dubai-bompani-oven-repair-in-dubai-bompani-appliances-maintenance-in-dubai-bompani-refrigerator-fix-repa/">Bompani</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/boston-refrigerator-repair-in-dubai-boston-appliances-service-boston-fridge-repair-in-dubai-boston-washing-machine-washer-boston-dryer-repair-in-dubai-boston-dishwasher-cooker/">Boston</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/brandt-fridge-repair-in-dubai-brandt-washing-machine-repair-in-dubai-brandt-cooker-repair-in-dubai-brandt-oven-repair-in-dubai-brandt-appliances-maintenance-in-dubai-brandt-refrigerator-fix-repairs-se/">Brandt</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/gibson-fridge-repair-in-dubai-gibson-washing-machine-repair-in-dubai-gibson-cooker-repair-in-dubai-gibson-oven-repair-in-dubai-gibson-appliances-maintenance-in-dubai-gibson-refrigerator-fix-repairs-se/">Gibson</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/gorenje-fridge-repair-in-dubai-gorenje-washing-machine-repair-in-dubai-gorenje-cooker-repair-in-dubai-gorenje-oven-repair-in-dubai-gorenje-appliances-maintenance-in-dubai-gorenje-refrigerator-fix-repa/">Gorenje</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/hisense-fridge-repair-in-dubai-hisense-washing-machine-repair-in-dubai-hisense-cooker-repair-in-dubai-hisense-oven-repair-in-dubai-hisense-appliances-maintenance-in-dubai-hisense-refrigerator-fix-repa/">Hisense</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/kelvinator-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Kelvinator</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/kenmore-appliances-service/">Kenmore</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/panasonic-fridge-repair-in-dubai-panasonic-washing-machine-repair-in-dubai-panasonic-cooker-repair-in-dubai-panasonic-oven-repair-in-dubai-panasonic-appliances-maintenance-in-dubai-panasonic-refrigera/">Panasonic</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/sanyo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Sanyo</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/sears-home-appliances-installation-maintenance-repair-fix-service-in-dubai/">Sears</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/wolf-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Wolf</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/haier-fridge-repair-in-dubai-haier-washing-machine-repair-in-dubai-haier-cooker-repair-in-dubai-haier-oven-repair-in-dubai-haier-appliances-maintenance-in-dubai-haier-refrigerator-fix-repairs-service/">Haier</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/elica-appliances-service/">Elica</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/marvel-fridge-repair-in-dubai-marvel-washing-machine-repair-in-dubai-marvel-cooker-repair-in-dubai-marvel-oven-repair-in-dubai-marvel-appliances-maintenance-in-dubai-marvel-refrigerator-fix-repairs-se/">Marvel</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/miele-fridge-repair-in-dubai-miele-washing-machine-repair-in-dubai-miele-cooker-repair-in-dubai-miele-oven-repair-in-dubai-miele-appliances-maintenance-in-dubai-miele-refrigerator-fix-repairs-service/">Miele</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/maytag-fridge-repair-in-dubai-maytag-washing-machine-repair-in-dubai-maytag-cooker-repair-in-dubai-maytag-oven-repair-in-dubai-maytag-appliances-maintenance-in-dubai-maytag-refrigerator-fix-repairs-se/">Maytag</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/toshiba-home-appliance-installation-maintenance-repair-fix-service-in-dubai-2/">Toshiba</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/thermador-appliances-service/">Thermador</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/sharp-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Sharp</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/admiral-fridge-repair-in-dubai-admiral-washing-machine-repair-in-dubai-admiral-cooker-repair-in-dubai-admiral-oven-repair-in-dubai-admiral-appliances-maintenance-in-dubai-admiral-refrigerator-fix-repa/">Admiral</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/aftron-fridge-repair-in-dubai-aftron-washing-machine-repair-in-dubai-aftron-cooker-repair-in-dubai-aftron-oven-repair-in-dubai-aftron-appliances-maintenance-in-dubai-aftron-refrigerator-fix-repairs-se/">Aftron</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/unimac-washing-machine-repair-in-dubai-unimac-dryer-repair-in-dubai-unimac-washer-dryer-repair-in-dubai-unimac-maintenance-in-dubai-unimac-laundry-service-in-dubai-unimac-dubai/">Unimac</a></p>

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

export default AppliancesMaintenanceContractDetail;

