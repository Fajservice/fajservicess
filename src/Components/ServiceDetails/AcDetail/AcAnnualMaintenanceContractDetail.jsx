import { useEffect, useRef, useState, useCallback } from "react";
import { Link, parsePath } from "react-router-dom";
import data from '../../../Data/AcData/AcFaqs/AMCFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import BenefitAcMaintenance from "../../BenefitAcMaintenance/BenefitAcMaintenance";
import QuickGuide from "../../QuickGuide/QuickGuide";
import ACWhychooseUs from "../../WhyChooseUS/ACWhyChooseUs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import testimonial_data from '../../../Data/AcData/AcTestimonial/AcAmcTestimonials.json';
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import HeaderForm from "../../Headeform/HeaderForm";
import FAJACPrice from "../../Miscellaneous/FAJACPrice";
import Practicaltip from "../../Common/Practicaltip";
import AcProperties from "../../Common/AcProperties";
import BookingFormModal from '../../BookingFormModal';
import { RxArrowTopRight } from 'react-icons/rx';
import Testimonial1 from "../../Testimonial/Testimonial1";
import BeforeAfter from "../../BeforeAfter/BeforeAfter";

const AcAnnualMaintenanceContractDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Best AC Annual Maintenance Contract Dubai | AC AMC Services");
  const metadescription = String(description || "Since 2010, FAJ has offered AC annual maintenance contract in Dubai, Sharjah, UAE. Repairs are more costly than a regular maintenance agreement.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "AC Annual Maintenance Contract Service Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/ac-annual-maintenance-contract/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/img/What-is-covered-in-an-AC-Maintenance-Contract.avif");



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
            <h1 className="cs_fs_30">AC Annual Maintenance Contract Services (AMC)</h1>

            <p>
              At FAJ Technical Services L.L.C, customer satisfaction is our top priority. We offer a straightforward and cost-effective annual maintenance contract that covers all essential maintenance for your home and business.

              Our contract includes year-round AC servicing, along with qualified support for plumbing and electrical repairs (MEP). We believe our essential maintenance contract is one of the best maintenance packages available in Dubai.
              <br />Our highly skilled team of fully qualified and specialized technicians is ready to provide the same level of service and workmanship that our customers have come to expect from FAJ. Additionally, we offer emergency assistance 365 days a year.

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

        {/* Annual AC Maintenance Contract - AMC */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5 align-items-center">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Annual AC Maintenance Contract - AMC </h2>
                <p className="mb-2">
                  Ensure consistent efficiency for your AC system with an Annual Maintenance Contract (AMC).
                  <br /> Keep your AC functioning optimally throughout the year with our reliable maintenance contract in Dubai and Sharjah, UAE.
                  <br />This will help maintain excellent cooling performance and prevent costly malfunctions!
                  <br />
                  Keeping an AC AMC in place can help you avoid unexpected costs, improve energy efficiency, and ensure a comfortable indoor environment.
                  <br /> It’s essential to select a reputable service provider to get the most out of your contract.
                </p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/Select-Air-Conditioner-Repair-&-Service.avif`} alt="Annual AC Maintenance" loading="lazy" />
              </div>
            </div>

            <div className="appointment-col border-small-top mt-3 pt-3">
              <h2 className="cs_fs_24 mb-1 mt-3" style={{ fontSize: "24px" }}>
                Planned Preventive Maintenance (PPM) Services
              </h2>
              <p>
                Our air conditioning technician can create a customised Planned Preventive Maintenance Package for your home or business. This package is designed to keep your space cool, comfortable, and running efficiently. By taking a proactive approach, you can reduce the likelihood of unexpected breakdowns and their associated costs.
                <br />
                Our Planned Preventive Maintenance Package includes repair, maintenance, and testing, making it ideal for any air conditioning system in buildings, apartments, villas, offices and warehouses. This package ensures that your air conditioning system operates smoothly and helps prevent breakdowns.
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

        <FAJACPrice />

        {/* Peace of Mind with Annual Maintenance Contracts */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">Peace of Mind with Annual Maintenance Contracts</h2>
            <p>Your air conditioner is an essential part of your home or office comfort, especially during the scorching summer months. Like any other air conditioning unit, it requires regular maintenance to operate efficiently and to prevent breakdowns.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/Peace-of-Mind-with-Annual-Maintenance-Contracts.avif`} alt="Annual Maintenance Contracts with peace of mind" loading="lazy" />
              </div>
              <div className="col-md-6">
                <p className="mb-0">
                  FAJ offers comprehensive AC annual maintenance contracts (AMC) to keep your air conditioner unit running smoothly throughout the year. With our AC AMC services, you can enjoy consistent cooling and comfort in your space!
                  Experience exceptional peace of mind as we take care of your air conditioner system, ensuring optimal performance, energy efficiency, and longevity.
                  <br />
                  Our comprehensive maintenance contract package enables you to bid farewell to unexpected breakdowns. Routine inspections and maintenance of your air conditioning system are crucial for maintaining efficiency. Our qualified technicians service all types, makes, models, and sizes of residential and commercial systems, including HVAC, VRV, VRF, AHU, FAHU, Central, Ducted Split, Package Unit AC, Centralised, FCU, Cassette, Split AC, Ceiling AC, and Multi-Split AC.
                </p>

                <p className="mb-0 d-none">
                  FAJ offers comprehensive AC annual maintenance contracts (AMCs) to keep your AC unit running smoothly all year long. With our air conditioner AMC, you can enjoy consistent cooling and comfort in your space!
                  <br />
                  Experience unparalleled peace of mind as we take care of your air conditioning system, ensuring optimal performance, energy efficiency, and longevity. Our desirable maintenance package allows you to say goodbye to unexpected breakdowns and hello to extraordinary comfort.
                  <br />
                  Routine inspections and maintenance of your HVAC are crucial for maintaining efficiency. Our qualified technicians service all types, makes, models, and sizes of residential and commercial systems, including HVAC, VRV, VRF, AHU, FAHU, Central AC, Ducted Split AC, Package Unit AC, Centralized AC, FCU, Cassette AC, Wall Mounted AC, Split AC, Ceiling AC, and Multi-Split AC. Choose our annual maintenance contract for worry-free operation!
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* Common AC Problems That May Require Maintenance */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Common AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Weak Airflow</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If you notice <a href="https://www.youtube.com/watch?v=qnByeIsc3lY"><b>reduced airflow</b></a> coming from your vents, it could indicate a problem with your AC system, such as a clogged filter or malfunctioning fan.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Warm Air</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your AC blows warm or room temperature air instead of cold, it could indicate compressor, refrigerant, or ductwork issues.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Unusual sounds like grinding, squealing, or banging coming from your AC unit can indicate mechanical problems that require attention.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Foul Odors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Musty or foul odors emanating from the vents could suggest mold or mildew growth within the system, which needs to be addressed quickly.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Frequent Cycling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">It may signal difficulty maintaining desired temperatures due to issues like dirty filters, low refrigerant levels, or a faulty thermostat.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">High Humidity Levels</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">An air conditioner that fails to adequately reduce indoor humidity levels may indicate issues with its cooling capacity or improper operation.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Water pooling around AC or dripping from vents could indicate blocked condensate drain, frozen coils, or other issues.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Increased Energy Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">High energy bills without increase in usage could indicate the inefficiency of your AC due to dirty filters, duct leaks, or other problems.</p>
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

        {/* A Quick Guide to Understanding and Fixing Your AC Problems*/}
        <QuickGuide />

        {/* The Benefits Of Regular AC Service*/}
        <BenefitAcMaintenance />
        <ACWhychooseUs />

        {/* The Importance of AC Maintenance Contract Service*/}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">The Importance of AC Maintenance Contract Service</h2>
            <div className="row">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/ac-repair-2.avif`} loading="lazy" alt="Air conn maintenance" />
              </div>
              <div className="col-xl-6">
                <ul>
                  <li>Maintaining your air conditioning (AC) system is essential for ensuring optimal performance, energy efficiency, and longevity. In the sweltering summer heat, a well-functioning AC unit is not just a luxury; it is necessary for creating a comfortable living environment.
                  </li>
                  <li>
                    Homeowners and business owners often overlook the importance of a regular AC maintenance contract, which can lead to unexpected breakdowns, higher energy bills, and costly repairs. Without proper maintenance, your AC system may become less efficient, resulting in increased energy consumption and utility costs.
                  </li>
                  <li>
                    Over time, the AC components can wear down, resulting in <a href="https://www.youtube.com/watch?v=qnByeIsc3lY" className="fw-bold text-decoration-underline">reduced airflow</a>, insufficient cooling, and even complete system failure. This situation can be particularly challenging during the summer months, when requests for cooling are at their highest.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*What is included in an AC Maintenance Contract?  */}
        <section className="section cs_py_30 ">
          <div className="container">
            <h2 className="cs_fs_30">What is included in an AC Maintenance Contract?</h2>
            <p className="mb-0">
              When considering air conditioner maintenance, it’s essential to understand what an AC contract should encompass. While many AC contractor packages offer these services, the details can vary.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <p className="" >
                  We’ll explore the key components of AC maintenance, their importance, and why <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for your system’s longevity.</p>
                <ul className="acsvs-exp-spl-para tick-ul mb-0">
                  <li>  Priority service for repair calls    </li>
                  <li>  Get a 10% discount on service work   </li>
                  <li>  Receive a 10% discount on labor charges    </li>
                  <li> Get  10% discount on replacement of part   </li>
                  <li>  Major and minor service with AC repair work   </li>
                  <li> No trip charge for regular AC repair during normal working hours   </li>
                  <li> Enjoy a 10% discount on materials and parts not covered by warranty    </li>
                  <li> A guarantee is provided from the date of repair for all customer-ordered repairs   </li>

                </ul>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/The-Importance-of-AC-Maintenance-Contract-Service.avif`} loading="lazy" alt="Ac Service and maintenance contract" />
              </div>
            </div>
          </div>
        </section>
        <BeforeAfter
          title="Recent Completed Service"
          subTitle="Before & After Service"
          bgImg="img/background-image-2.avif"
          beforeImg="img/after_img_1.avif"
          afterTitle="After"
          afterImg="img/before_img_1.avif"
          beforeTitle="Before"
        />
        {/* BRANDS */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3>WE SPECIALISE IN AIR CONDITIONER SERVICES FOR THE FOLLOWING BRANDS</h3>
            <div className="row">
              <div className="col-12">
                <ul className="mb-0">
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/lg-ac-repair-in-dubai/">LG Air Conditioner Maintenance</a>:</strong> FAJ offers reliable LG AC Maintenance, and services in Dubai. With professionals, who are experts in split, vrf and central air conditioning units.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/samsung-ac-repair-in-dubai/">Samsung Air Conditioner Maintenance and Service</a>:</strong> Based in Dubai, FAJ is your go-to destination for Samsung AC Maintenance in Dubai. Specializing in Samsung air conditioner systems, we offer comprehensive services ranging from repairs to Maintenance.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/">York AC Maintenance and Service</a>:</strong> The York AC Maintenance service ensures you don&rsquo;t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritized.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/">Daikin Air Conditioner Maintenance</a>:</strong> Trust our skilled team to efficiently resolve all issues with your Daikin air conditioner and restore its functionality.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/">Trane HVAC Maintenance</a>:</strong> With extensive knowledge of Trane air conditioning systems, we provide effective repairs to keep your unit running smoothly.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/">Panasonic AC Maintenance and Service</a>:</strong> No matter the issue with your Panasonic air conditioner, our experts can accurately diagnose and fix it.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/gree-ac-repair-in-dubai/">Gree AC Maintenance and Service</a>:</strong> Has your AC stopped working? No need to endure unpleasant temperatures and stuffy air or suffer losses due to damaged equipment (broken gree air conditioning in a room, for example, can be a disaster!) &ndash; FAJ get your gree air conditioning back up and running in no time!</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/">O General AC Maintenance and Service</a>:</strong> O General AC maintenance in Dubai requires expert help because only specialized ones know how to address aircon issues. We are a hassle-free air condition Maintenance service provider.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/mitsubishi-ac-repair-in-dubai/">Mitsubishi Air Conditioner Maintenance and Service</a>:</strong> Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai! Our expert Mitsubishi AC services ensure your AC stays cool and efficient, providing comfort and peace of mind.</li>
                </ul>
                <br />

                <p className="mb-0">
                  <Link to="/sanyo-ac-repair-in-dubai-sanyo-ac-maintenance-in-dubai-sanyo-ac-fix-in-dubai-sanyo-ac-service-in-dubai-sanyo-air-condition-repair-in-dubai-sanyo-air-condition-maintenance-in-dubai-sanyo-air-condition/">Sanyo AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/rheem-ac-maintenance-in-dubai/">Rheem Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/">SKM AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/">Daewoo AC Maintenance Dubai</Link>
                  <span>&nbsp;-&nbsp;</span>

                  <Link to="/midea-ac-installation-maintenance-repair-fix-service-in-dubai/">Midea Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/">Lennox Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/goodman-ac-repair-in-dubai-goodman-ac-maintenance-in-dubai-goodman-ac-fix-in-dubai-goodman-ac-service-in-dubai-goodman-air-condition-repair-in-dubai-goodman-air-condition-maintenance-in-dubai-goodman/">Goodman Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/">Coleman AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/westpoint-ac-repair-in-dubai-westpoint-ac-maintenance-in-dubai-westpoint-ac-fix-in-dubai-westpoint-ac-service-in-dubai-west-point-air-condition-repair-in-dubai-west-point-air-condition-maintenance-in/">Westpoint Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/aftron-ac-repair-maintenance-service-in-dubai-2/">Aftron AC</Link> <span>&nbsp;-&nbsp;</span>

                  <Link to="/crafft-ac-repair-in-dubai-crafft-ac-maintenance-in-dubai-crafft-ac-fix-in-dubai-crafft-ac-service-in-dubai-crafft-air-condition-repair-in-dubai-crafft-air-condition-maintenance-in-dubai-crafft-air-con/">Crafft Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/">Bryant AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/ruud-ac-repair-in-dubai-ruud-ac-maintenance-in-dubai-ruud-ac-fix-in-dubai-ruud-ac-service-in-dubai-ruud-air-condition-repair-in-dubai-ruud-air-condition-maintenance-in-dubai-ruud-air-condition-mainten/">Ruud Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/">McQuay Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/">Blue Star Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/supra-ac-repair-in-dubai-supra-ac-maintenance-in-dubai-supra-ac-fix-in-dubai-supra-ac-service-in-dubai-supra-air-condition-repair-in-dubai-supra-air-condition-maintenance-in-dubai-supra-air-condition/">Supra AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/toshiba-ac-repair-in-dubai-toshiba-ac-maintenance-in-dubai-toshiba-ac-fix-in-dubai-toshiba-ac-service-in-dubai-toshiba-air-condition-repair-in-dubai-toshiba-air-condition-maintenance-in-dubai-toshiba/">Toshiba Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/">Whirlpool Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/super-general-ac-repair-in-dubai-super-general-ac-maintenance-in-dubai-super-general-ac-fix-in-dubai-super-general-ac-service-in-dubai-super-general-air-condition-repair-in-dubai-super-general-air-con/">Super General AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi/">Hitachi AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/">O General Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/cooline-ac-repair-in-dubai-cooline-ac-maintenance-in-dubai-cooline-ac-fix-in-dubai-cooline-ac-service-in-dubai-cooline-air-condition-repair-in-dubai-cooline-air-condition-maintenance-in-dubai-cooline/">Cooline Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/white-westinghouse-ac-repair-in-dubai-white-westinghouse-ac-maintenance-in-dubai-white-westinghouse-ac-fix-in-dubai-white-westinghouse-ac-service-in-dubai-white-westinghouse-air-condition-repair-in-du/">White Westinghouse AC</Link><span>&nbsp;-&nbsp;</span>
                  <Link to="/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/">Panasonic Air Conditioner</Link><span>&nbsp;-&nbsp;</span>
                  <Link to="/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/">Daikin AC</Link><span>&nbsp;-&nbsp;</span>
                  <Link to="/daikool-ac-repair-in-dubai-daikool-ac-maintenance-in-dubai-daikool-ac-fix-in-dubai-daikool-ac-service-in-dubai-daikool-air-condition-repair-in-dubai-daikool-air-condition-maintenance-in-dubai-daikool/">Daikool Air Conditioning</Link><span>&nbsp;-&nbsp;</span>
                  <Link to="/fujitsu-ac-repair-in-dubai-fujitsu-ac-maintenance-in-dubai-fujitsu-ac-fix-in-dubai-fujitsu-ac-service-in-dubai-fujitsu-air-condition-repair-in-dubai-fujitsu-air-condition-maintenance-in-dubai-fujitsu/">Fujitsu Air Conditioner</Link><span>&nbsp;-&nbsp;</span>
                  <Link to="/gree-ac-repair-in-dubai/">Gree AC</Link><span>&nbsp;-&nbsp;</span>
                  <Link to="/haier-ac-repair-in-dubai-haier-ac-maintenance-in-dubai-haier-ac-fix-in-dubai-haier-ac-service-in-dubai-haier-air-condition-repair-in-dubai-haier-air-condition-maintenance-in-dubai-haier-air-condition/">Haier Air Condition</Link><span>&nbsp;-&nbsp;</span>
                  <Link to="/lg-ac-repair-in-dubai/">LG Air Conditioner</Link><span>&nbsp;-&nbsp;</span>
                  <Link to="/nikai-ac-repair-in-dubai-nikai-ac-maintenance-in-dubai-nikai-ac-fix-in-dubai-nikai-ac-service-in-dubai-nikai-air-condition-repair-in-dubai-nikai-air-condition-maintenance-in-dubai-nikai-air-condition/">Nikai AC</Link><span>&nbsp;-&nbsp;</span>
                  <Link to="/samsung-ac-repair-in-dubai/">Samsung Air Conditioning</Link><span>&nbsp;-&nbsp;</span>

                  <Link to="/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/">Trane Air Conditioner</Link><span>&nbsp;-&nbsp;</span>

                  <Link to="/sub-zero-ac-installation-maintenance-repair-fix-service-in-dubai/">Sub Zero AC</Link><span>&nbsp;-&nbsp;</span>

                  <Link to="/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/">York Air Conditioning</Link>
                </p>
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

        <Practicaltip></Practicaltip>
        <AcProperties></AcProperties>

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
        {/* FAQ&apos;s */}
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
      </div>

    </>
  );
};

export default AcAnnualMaintenanceContractDetail;