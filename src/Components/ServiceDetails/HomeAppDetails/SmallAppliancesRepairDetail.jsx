import { useEffect, useRef, useState, useCallback } from "react";
import { Link, parsePath } from "react-router-dom";
import data from '../../../Data/HomeAppData/FAQs/SmallAppliancesFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import 'swiper/swiper-bundle.css';
import testimonial_data from '../../../Data/HomeAppData/Testmonials/SmallAppliancesRepairTestimonials.json';
import brandsLogo_data from '../../../Data/AppliancesBrandsLogo.json';
import BookingFormModal from '../../BookingFormModal';
import { RxArrowTopRight } from 'react-icons/rx';

import loadBackgroudImages from "../../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import HeaderForm from "../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import BrandsSliderSection from "../../BrandsSliderSection";
import Testimonial1 from "../../Testimonial/Testimonial1";


const SmallAppliancesRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Small Home Appliances Service – Household Repair Near Me");
  const metadescription = String(description || "Get same day small home appliances repair. FAJ Experts for cigar dehumidifier, iron box, toaster, microwave, air fryer, water dispenser service near me");
  const metaAuthor = String(Author || "Faj Technical Services");
  const metaKeyword = String(Keyword || "mixer repair, steam iron repair, toaster repair, microwave oven repair, air fryer repair, water dispenser repair, small home appliances service, household appliance repair near me");
  const metaURL = String(URL || "https://www.fajservices.ae/small-home-appliances-service-center-in-dubai/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/img/small-mixer-service.avif");


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
            <h1 className="cs_fs_30">Small Home Appliances Service Center in Dubai</h1>
            <p>
              Do you need small appliance repair? If you&apos;re looking for a reliable and trusted service, look no further than F A J Technical Services L.L.C, established in 2010.
              We understand the inconvenience caused by a malfunctioning appliance, which is why we offer fast and professional small home appliance repair services in your area.
              <br />Our skilled technicians quickly diagnose and repair electrical appliances, getting them back to optimal performance in no time.
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


        {/* heading 1 */}

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Small Appliance Repair and Maintenance</h2>

                <p className="mb-2">
                  Small appliances are important for daily use, and if they are damaged, it can affect your routine. FAJ provides expert service for kitchen appliances such as stand mixers, blenders, kettles, toasters, air fryers, microwave ovens, ice crushers, food processors, vacuum cleaners, cigar cabinet fridges, steam irons, and other electronic appliance repairs and fixes nearby in Dubai.
                </p>

                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Fast and Reliable Appliances Service
                </h2>
                <p className="mb-2">At <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"><b>F A J Technical Services L.L.C</b></a>, we understand that appliance breakdowns never happen at a convenient time. That’s why our trained and qualified technicians are here to provide you with reliable appliance repair services. With our help, you can avoid the expense of purchasing a new appliance and get your appliance up and running again before you even have a chance to stress about it.</p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/small-mixer-repair.avif`} alt="Small Appliances Repair" loading="lazy" />

              </div>
            </div>
            <AppliancesAppointmentCol />
          </div>
        </section>


        {/* Why is */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Kitchen Appliances Maintenance Service Important in Dubai?</h2>
            <p>
              Regular maintenance helps identify and resolve minor issues before they escalate into major problems, thereby reducing the risk of breakdowns, electrical fires, or gas leaks.

            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/small-mixer-service.avif`} alt="Small Appliances Repair" loading="lazy" />
              </div>
              <div className="col-md-6">
                <p>
                  Here&apos;s a more detailed look at why maintenance is important:
                </p>
                <ul className="mb-0">
                  <li> <strong>  Safety: </strong> Faulty appliances can lead to serious safety risks like fires, gas leaks, and water damage. Regular maintenance can help identify and resolve these issues early. </li>
                  <li> <strong>  Longevity: </strong> Regular maintenance prevents wear and tear, prolonging appliance lifespan. Routine technician check-ups can catch minor issues before they escalate.  </li>
                  <li> <strong>  Convenience: </strong> In the busy city of Dubai, a reliable appliance repair service is essential for prompt solutions to malfunctions. Regular maintenance can prevent breakdowns, reducing urgent repairs and downtime. </li>
                  <li> <strong>  Efficiency: </strong> Regular cleaning can improve appliance efficiency. For example, cleaning refrigerator coils enhances cooling and reduces energy use. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>



        {/* Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Kitchen Appliance Problems That May Require Maintenance    </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Small Appliances </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Small appliances can cause house fires. Even kettles may catch fire if they are poorly made or have faulty parts, and they can also lead to electric shocks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Failure to Heat </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Heating appliances like microwaves and ovens may not heat properly due to a faulty heating element, interlock system malfunction, or control panel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1"> Control Panel Problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Unresponsive displays or buttons may signal a failing control panel, seriously affecting the appliance's overall functionality and performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1"> Excessive Noise </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Loud or unusual noises coming from appliances may indicate worn-out parts, loose components, hidden blockages, or internal motor issues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1"> Specific Function Failures</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Microwaves, ovens, and mixers often show common issues like improper heating or ineffective cleaning due to various internal factors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1"> Electrical Problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Small or large appliances not turning on may be due to a blown fuse, wiring issues, power supply problems, or faulty internal components.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1"> Malfunctioning Components</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Appliance components, like the oven's heating element or the washing machine's motor, can fail and cause serious operational malfunctions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Extension Leads </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Extension leads can be a fire hazard when used with unsuitable appliances. If your fuse box trips often or you smell burning, unplug the extension lead immediately.
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

        {/* HERE ARE  */}
        <section className="section cs_py_30 ">
          <div className="container">
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR SMALL HOME APPLIANCES</h2>
            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/nkqs5jeMQl0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-xl-6">
                <p className='mb-0'>The search results indicate that the company primarily offers repair and maintenance services for household appliances such as stand mixers, blenders, kettles, toasters, air fryers, microwave ovens, ice crushers, food processors, vacuum cleaners, cigar cabinet fridges, steam irons, and other electronic appliance
                </p>

                <p className='mb-0'><strong>Our services include: </strong></p>

                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong>Repair Services: </strong> FAJ specialises in repairing household appliances, with skilled technicians available to diagnose and fix issues across brands.</li>
                  <li> <strong>Specific Appliance Repairs: </strong> They may specialize in repairing specific appliances, such as mixers, blenders, steam irons, cigar fridges, air fryers, and ice makers.</li>
                  <li> <strong>Possible Additional Services: </strong> FAJ primarily focuses on repairs but may also offer maintenance services, like inspections and minor fixes, to keep appliances running smoothly. For specific details on their services and availability, it would be helpful to.</li>
                  <li> <strong>Contact them directly: </strong> They probably have a contact number or email listed on their website for inquiries about specific services.</li>

                </ul>
              </div>


            </div>
          </div>
        </section >

        {/* The Benefits Of appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">The Benefits Of appliances Service Dubai
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
                      <p className="small">Regular maintenance helps your appliances run smoothly and efficiently, delivering the best results every time.
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
                      <p className="small">Energy efficient appliances translate to monthly savings on utility bills, putting more money back in your pocket.</p>
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
                      <p className="small">Proper care and timely servicing can significantly increase life of your home appliances, delaying the need for replacements.</p>

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
                      <p className="small">Knowing your appliances are in top condition gives you confidence and removes the stress of unexpected failures.</p>
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
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY Small Appliance REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 157 to 280 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month repair warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h3>We specialize in small appliance services for the following types </h3>
            <div className="row">
              <div className="col-12">
                <ul>
                  <li><strong>Vacuum Cleaner Repair and Service: </strong>Is your vacuum cleaner not performing as it should? Our vacuum cleaner repair near me services can help! We fix vacuum cleaner all issues, including motor problems, faulty switches, and clogged hoses.</li>
                  <li><strong>Hair Dryer Repair and Service: </strong>Welcome to F A J Technical Services L.L.C, your go-to for hair dryer repair and the best hair dryer service near you. We specialize in fixing issues and restoring your appliance. Contact us for reliable service today!</li>
                  <li><strong>Coffee Maker Repair Me: </strong>Get reliable coffee maker repair near you in Dubai. We fix coffee machine leaks, power issues, and brewing faults for all major brands. Fast, affordable service by expert technicians.</li>
                  <li><strong>Juicer Blender Repair Near Me: </strong>Is your juicer noisy or not working properly? We offer affordable Juicer repair shop near me, juice kit repair and blender repair and services near you in Dubai. Our experts can fix juicer issues like jammed mechanisms and electrical glitches. Trust us to restore your appliances quickly!</li>
                  <li><strong>Steam Iron Box Repair Near Me: </strong>If your electric iron isn&rsquo;t working properly, we provide Steam iron repair shop near me, iron repair and iron services in Dubai. Our expertise includes fixing iron heating elements, thermostats, and faulty wiring, so you can enjoy wrinkle-free clothes again.</li>
                  <li><strong>Toaster Repair Near Me: </strong>Is your toaster not heating or burning toast? We offer expert toaster repair in Dubai. Our technicians fix heating elements, timers, and wiring to restore your toaster to full working order.</li>
                  <li><strong>Kitchen Stand Mixer Repairs Near Me: </strong>Welcome to premium kitchen stand mixer repair and services! Since 2010, we&rsquo;ve been providing expert KitchenAid stand mixer repair, Kenwood stand mixer repairing, Cuisinart precision stand mixer repairs, Philips stand repair near me, Jano stand mixer repair near you mixer repair, Black and Decker stand mixer repairing and for stand and hand mixer service in Dubai. Let us help you get your mixer working again and keep your space tidy!</li>
                  <li><strong>Water Dispenser Repair Near Me: </strong>We provide expert water dispenser repair and service to restore your hot showers. Don&rsquo;t let a broken dispenser dampen your spirits&mdash;let us help get it working perfectly again!</li>
                  <li><strong>Microwave Oven Repair Near Me: </strong>We specialize in repairing small home appliances, including microwave repair near me and service in Dubai. Our mission is to deliver quality repairs at affordable prices, fixed as quickly as possible. Enjoy hot pizzas and reheated coffee with our efficient microwave repair services!</li>
                  <li><strong>Electric Kettle Repair: </strong>If your electric kettle isn&rsquo;t heating properly, you need a reliable electric kettle repair and service in Dubai. Our experts specialize in diagnosing and fixing issues like faulty heating elements and power switches, quickly restoring your kettle&rsquo;s functionality.</li>
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
        </section >

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
        < section className="section cs_py_30  bg-dark-blue text-light" >
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
        </section >

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

export default SmallAppliancesRepairDetail;

