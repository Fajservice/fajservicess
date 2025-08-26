import { useEffect, useRef, useState } from "react";
import data from '../../../../Data/AcData/AcFaqs/AcBrand/ColemenAcRepairfaq.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import testimonial_data from '../../../../Data/AcData/AcTestimonial/ColemenAcServiceTestimonials.json';
import 'swiper/swiper-bundle.css';
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import HeaderForm from "../../../Headeform/HeaderForm";
import Practicaltip from "../../../Common/Practicaltip";
import AcProperties from "../../../Common/AcProperties";
import AcAppointmentCol from "../../../Common/AcAppointmentCol";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";


const ColemenAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "Coleman Ac Repair in Dubai - Air Conditioner Maintenance");
  const metadescription = String(description || "Relax with Coleman. Call 043300002 for Coleman Ac Repair in Dubai We are experts in HVAC, Central Air Conditioner maintenance service near me");
  const metaAuthor = String(Author || "Faj Technical Services");
  const metaKeyword = String(Keyword || "Coleman Ac Repair in Dubai, Coleman Air Conditioner Maintenance, Coleman AC Service, Coleman AC Fix, Coleman Air Condition Repair, Coleman Air Condition Maintenance, Coleman AC Service in Dubai, Coleman Air Conditioner Repair in Dubai, Coleman Air Conditioner Service in Dubai, Coleman AC Repair Dubai, Coleman AC Service Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/dist/img/ac%20filter.avif");

  subtitle = "Testimonial"
  title = "What our clients say <br> About Us"
  reviewsbg = "img/testimonialbg.jpg"
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

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
        breakpoint: 575,
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
          <meta name="description" content={metadescription} />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={metatitle} />
          <meta property="og:description" content={metadescription} />
          <meta property="og:url" content={metaURL} />
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
        {/* intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Best Coleman AC Repair in Dubai – Air Conditioner Maintenance</h1>
            <p><a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876">F A J Technical Services L.L.C</a>,  established in 2010, boasts an experienced facilities team specializing in AC repair, maintenance, and installation in Dubai and Sharjah for both residential and commercial units.
              <br /> A Coleman air conditioner is essential for maintaining a comfortable indoor environment year-round. Regular servicing is key to optimal performance, and we offer professional Coleman air conditioner servicing in Dubai to ensure your system runs smoothly and efficiently.
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>

        {/* 2 col */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Coleman Ac Maintenance and Servicing </h2>

                <p className="mb-2">
                  To ensure effective Coleman air conditioning repair, it is essential to engage a qualified technician for residential and commercial needs.
                  <br />At <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ</a>, we specialize in the repair, servicing, and maintenance of Coleman AC units throughout Dubai and Sharjah, committed to providing year-round comfort for our clients.
                </p>

                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Signs You Need An AC Service</h2>
                <p className="mb-2">If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.</p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Higher electricity bills </li>
                      <li>Air is not blowing cold</li>
                      <li>Drips from your air conditioner</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Loss of AC performance</li>
                      <li>Poor AC airflow, making noises</li>
                    </ul>
                  </div>
                </div></div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/ac filter.avif`} loading="lazy" alt="coleman AC Service" />
              </div>
            </div>
            <AcAppointmentCol></AcAppointmentCol>
          </div>
        </section>

        {/* AC Price Section */}
        <FAJACPrice></FAJACPrice>

        {/* Why*/}
        <section className="section cs_py_30">
          <div className="container">

            <h2 className="cs_fs_30">Why is Coleman AC Maintenance Service Important in Dubai?</h2>
            <p className="">
              Regular maintenance of Coleman air conditioners (AC) in Dubai is essential for optimal performance. FAJ provides comprehensive services to ensure your system operates efficiently. With our proactive approach, you can be confident that your Coleman AC is functioning at its best. If you need Coleman <a href="/ac-maintenance-dubai/"> AC maintenance near you</a>, please contact us.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/ac amc.avif`} loading="lazy" alt="coleman Airconditioner Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Extreme Weather: </strong> In the summer, temperatures can exceed 40°C (104°F). Routine maintenance helps ensure that Coleman  AC SYSTEMS operate efficiently in these conditions.</li>
                  <li> <strong> Energy Efficiency: </strong> A well-maintained Coleman  AC unit functions more efficiently, conserving energy and reducing electricity bills.</li>
                  <li> <strong> Longevity of Equipment: </strong> Regular AC maintenance of your Coleman  air conditioner unit can extend its lifespan, reduce the need for costly repairs and replacements, and ultimately save you money.</li>
                  <li> <strong> Improved Air Quality: </strong> Regular maintenance prevents the accumulation of dust and allergens, which helps to ensure cleaner air.</li>
                  <li> <strong> Enhanced Comfort: </strong> Regular Coleman AC servicing in Dubai ensures comfort, efficiency, and consistent cooling daily.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Coleman AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you notice decreased airflow from your vents, it may signal an issue with your coleman  AC system, such as a <a href="https://www.youtube.com/watch?v=qnByeIsc3lY">blocked filter</a> or a faulty fan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Warm Air</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your coleman  AC is blowing warm or room temperature air instead of cold, it may indicate issues with the compressor, refrigerant, or ductwork.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Strange sounds such as grinding, squeaking, or banging from your coleman  AC unit can indicate mechanical issues that need attention.

                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Foul Odors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Musty odors from the vents may signal mold or mildew in the system and should be addressed promptly.


                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Frequent Cycling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The inability to maintain desired temperatures may indicate issues such as dirty filters, low refrigerant levels, or a faulty thermostat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">High Humidity Levels</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A coleman  air conditioner that doesn’t effectively lower humidity may have cooling capacity issues or be operating improperly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Water pooling around the coleman  AC or dripping from vents may indicate a blocked condensate drain, frozen coils, or other issues.

                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Increased Energy Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      High energy bills without increased usage may indicate coleman  AC inefficiency from dirty filters, duct leaks, or other issues.
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

        {/* HERE  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR COLEMAN AC SYSTEMS</h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/sxBhB1_gxYA?si=Fk3OIwPHCHAsktx-"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-xl-6">
                <p className='mb-0'>We specialize in various types and brands of HVAC systems, including Fresh Air Handling Units (FAHU).</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Coleman AC Installation: </strong> Professional installation of various Coleman AC systems for peak performance. </li>
                  <li> <strong> Coleman AC Diagnostics: </strong> Comprehensive fault finding to accurately diagnose issues. We offer eligibility assessments and detailed quotes to address any concerns with your system. </li>
                  <li> <strong> Coleman AC Repair Service: </strong> Prompt and effective repair services for all Coleman AC components, addressing issues like leaks, electrical failures, and system malfunctions. Contact us for specific services or any questions you may have! </li>
                  <li> <strong> Coleman AC Annual Maintenance Contract: </strong> This contract details the terms and services for annual maintenance of Coleman air conditioner units. </li>
                </ul>
                <p className="mb-0"><a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is crucial for the optimal performance, efficiency, and longevity of your air conditioning system.</p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <section className="section cs_py_30" style={{ backgroundColor: "#00334E", color: "white" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="cs_fs_30 text-light">Benefits of Regular Coleman AC Service and Maintenance in Dubai </h2>

                <div className="row mt-4 gx-4 gy-4">
                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}img/icons/cooling1.jpg`} loading="lazy" alt="Cooling Efficiency" className="img-fluid rounded-circle border border-4 border-info" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">COOLING EFFICIENCY</h3>
                      <p className="small">
                        We conduct a thorough evaluation of cooling efficiency using a temperature gun.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}img/icons/disinfection.jpg`} loading="lazy" alt="Disinfect Components" className="img-fluid rounded-circle border border-4 border-warning" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">DISINFECT COMPONENTS</h3>
                      <p className="small">
                        All hardware components have been tested and disinfected, including filters and vents.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}img/icons/fan.jpg`} loading="lazy" alt="Fan Assessment" className="img-fluid rounded-circle border border-4 border-success" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">FAN ASSESSMENT</h3>
                      <p className="small">
                        We make sure fan operates properly and there are no blockages in evaporator coil.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}img/icons/thermo.jpg`} loading="lazy" alt="Thermostat Check" className="img-fluid rounded-circle border border-4 border-primary" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">THERMOSTAT CHECK</h3>
                      <p className="small">
                        We use a laser temperature gauge to verify that the thermostats are operating correctly.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}img/icons/airflow.jpg`} loading="lazy" alt="Airflow Balance" className="img-fluid rounded-circle border border-4 border-danger" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">AIRFLOW BALANCE</h3>
                      <p className="small">
                        We make sure that each room receives the optimal airflow it needs.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}img/icons/customer.jpg`} loading="lazy" alt="Customer Feedback" className="img-fluid rounded-circle border border-4 border-secondary" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">CUSTOMER FEEDBACK</h3>
                      <p className="small">
                        Our team provides feedback on your Coleman AC&lsquo;s health and needed repairs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-4">
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHOOSE US  */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR  NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`} loading="lazy" alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} loading="lazy" alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With <a href="/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your Coleman AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                    </p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">

                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/ACServicescomponent.avif`} loading="lazy" alt="Ac Maintenance Services" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`} loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in Coleman AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} loading="lazy" alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our <a href="https://www.facebook.com/ACRepairUAE"><b>skilled AC technicians</b></a> are highly trained, and we provide excellent service for a variety of major AC brands efficiently.
                    </p>
                  </div>
                </div>
              </div>


            </div>
            {/* <!-- Delimit mobile --> */}
            <div className="col-12 uspdelimit w-100 text-center d-block d-none-1199 Xd-xl-none">
              <img className="blue-border-2 w-100" src={`${import.meta.env.BASE_URL}img/ACServicescomponent.avif`} loading="lazy" alt="Ac Maintenance Services" />
            </div>
          </div>
        </section>

        {/* We specialise  */}
        <section className="section cs_py_30 bg-light-gray ">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY AC REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 195 to 320 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month service warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>


            <h3>We specialise in Coleman AC services for the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"> <strong>  Coleman Split Air Conditioner Service: </strong> FAJ provides dependable repair and maintenance services for Coleman AC units in Dubai. Our team consists of professionals who are experts in Coleman split systems, Coleman VRF, and Coleman central air conditioning units. </p>
                <p className="mb-0"> <strong>  Coleman Central Air Conditioner Repair and Service: </strong> Located in Dubai, FAJ is your premier choice for Coleman AC repair services. We specialise in Coleman air conditioning systems and provide a range of comprehensive services, from repairs to regular maintenance. </p>
                <p className="mb-0"> <strong>  Coleman VRF (Variable Refrigerant Flow) System Service and Repair: </strong> The Coleman VRF (Variable Refrigerant Flow) System service guarantees you peace of mind because you are in the right place. Indeed, FAJ prioritises efficiency and reliability. </p>
                <p className="mb-0"> <strong>  Coleman Inverter Air Conditioner Maintenance: </strong> Rely on our expert team to quickly fix any problems with your Coleman air conditioner and restore its full functionality. </p>
                <p className="mb-0"> <strong>  Coleman HVAC Repair: </strong> With in-depth expertise in Coleman air conditioning systems, we offer reliable repairs to ensure your unit operates efficiently. </p>
                <p className="mb-0"> <strong>  Coleman Ceiling AC Service and Repair: </strong> No matter what the issue is with your Coleman air conditioner, our experts can accurately diagnose and fix it. </p>
                <p className="mb-0"> <strong>  Coleman AC Service and Maintenance: </strong> Is your AC not working? Don’t endure uncomfortable temperatures and stuffy air, or risk damage to your equipment—FAJ can get your Coleman air conditioning functioning again in no time! </p>
                <p className="mb-0"> <strong>  Coleman Ducted Split AC Service and Repair: </strong> Coleman ducted split AC service in Dubai requires expert assistance, as only specialists know how to address air conditioning issues. We provide a hassle-free Coleman air conditioning repair service and fix errors. </p>
                <p className=""> <strong>  Coleman Wall-Mounted Air Conditioner Service and Repair: </strong> Looking for relief from the scorching heat? Discover how to keep your Coleman AC running smoothly in Dubai! Our expert Coleman AC services ensure your unit remains cool and efficient, providing comfort and peace of mind. </p>

                <p>
                  <a href="https://www.fajservices.ae/ac-repair-in-al-barsha-air-condition-maintenance-in-al-barsha-air-conditioning-fix-amc-service-in-al-barsha-dubai/">Al Barsha</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jebel-ali/">Jebel Ali</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-repair-in-jafza-air-condition-maintenance-in-jafza-air-conditioning-fix-amc-service-in-jebel-ali-free-zone-dubai/">JAFZA</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jebel-ali-free-zone/">Jebel Ali Free Zone</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-palm-jumeirah/">Palm Jumeirah</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-repair-and-ac-service-in-dubai-hills-estate/">Dubai Hills Estate</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-repair-and-ac-service-in-damac-hills/">Damac Hills</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-al-barari/">Al Barari</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-al-barsha-south/">Al Barsha South</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-al-safa/">Al Safa</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-arabian-ranches/">Arabian Ranches</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-dubai-silicon-oasis/">Dubai Silicon Oasis</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-dubai-investments-park/">Dubai Investments Park</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-dip/">DIP</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-repair-and-ac-service-in-dubai-production-city/">Dubai Production City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-impz/">IMPZ</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-dubai-sport-city/">Dubai Sports City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-dubai-studio-city/">Dubai Studio City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jbr/">JBR</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jumeirah-beach-residence/">Jumeirah Beach Residence</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-jlt/">JLT</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jumeirah-lake-towers/">Jumeirah Lake Towers</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jvc/">JVC</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jumeirah-village-circle/">Jumeirah Village Circle</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jvt/">JVT</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jumeirah-village-triangle/">Jumeirah Village Triangle</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jebel-ali-village/">Jebel Ali Village</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jumeirah/">Jumeirah</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jumeirah-golf-estates/">Jumeirah Golf Estates</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-the-meadows/">Meadows</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-motor-city/">Motor City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-repair-and-ac-service-in-town-square/">Town Square</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-emirates-hills/">Emirates Hills</a> &nbsp;|&nbsp;
                  <a href="">Townhouses</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-umm-suqeim/">Umm Suqeim</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-ras-al-khor-industrial-area/">Ras Al Khor</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-deira/">Deira</a>
                </p>
              </div>

            </div>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton></GetQuoteButton>
                <CallNowButton></CallNowButton>
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
                    <p className="mb-0"
                      dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }}
                    ></p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Contact */}
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

export default ColemenAcRepair;