import { useEffect, useRef, useState } from "react";
import data from '../../../../Data/AcData/AcFaqs/AcBrand/FujitsuAcRepairfaq.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import testimonial_data from '../../../../Data/AcData/AcTestimonial/FujitsuAcServiceTestimonials.json';
import 'swiper/swiper-bundle.css';
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import HeaderForm from "../../../Headeform/HeaderForm";
import Practicaltip from "../../../Common/Practicaltip";
import AcProperties from "../../../Common/AcProperties";
import AcAppointmentCol from "../../../Common/AcAppointmentCol";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";


const FujitsuAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "Air Conditioning Service | Fujitsu AC Repair in Dubai");
  const metadescription = String(description || "For your home and office air conditioning service, Fujitsu AC Repair FAJ Assist can be reached at 043300002 and is available from 8:00 am to 6:00 pm ");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Fujitsu AC Repair in Dubai, Fujitsu Air Conditioner Maintenance, Fujitsu AC Service, Fujitsu AC Fix, Fujitsu Air Condition Repair, Fujitsu Air Condition Maintenance, Fujitsu Air Condition Service, Fujitsu Air Condition Fix");
  const metaURL = String(URL || "https://www.fajservices.ae/fujitsu-ac-repair-in-dubai-fujitsu-ac-maintenance-in-dubai-fujitsu-ac-fix-in-dubai-fujitsu-ac-service-in-dubai-fujitsu-air-condition-repair-in-dubai-fujitsu-air-condition-maintenance-in-dubai-fujitsu/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/img/ac%20filter.avif");
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
            <h1 className="cs_fs_30">Fujitsu AC Repair in Dubai and AC Maintenance Services</h1>
            <p> <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"> FAJ Technical Services L.L.C</a> has proudly served the community since 2010, building a reputation for excellence in HVAC services. Our skilled team specializes in Fujitsu AC repair, maintenance, and installation for residential and commercial properties in Dubai and Sharjah.
              To maintain indoor comfort year-round, we recommend regular maintenance, including inspections and cleaning. Our expert Fujitsu AC cleaning service improves efficiency and air quality while extending the lifespan of your unit. Trust F A J for all your Fujitsu AC needs.
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
                <h2 className="cs_fs_24 mb-1" >Fujitsu Ac Maintenance and Servicing </h2>

                <p className="mb-2">
                  When seeking Fujitsu air conditioner repairs, it is essential to select a qualified technician for your home or office.
                  <br /> Our organization specializes in the AC repair, service, and maintenance of Fujitsu units across Dubai and Sharjah. The  <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ team</a> is dedicated to providing exceptional service to ensure your comfort throughout the year.
                </p>

                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" >Signs You Need An AC Service</h2>
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
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/ac filter.avif`} loading="lazy" alt="Fujitsu AC Service" />
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

            <h2 className="cs_fs_30">Why is Fujitsu AC Maintenance Service Important in Dubai?</h2>
            <p className="mb-0">
              To keep your Fujitsu air conditioner running efficiently in Dubai, regular <a href="https://www.fajservices.ae/ac-maintenance-dubai/">AC maintenance</a> is key. At FAJ, our experienced team is here to ensure your comfort.
              For convenient AC maintenance in your area, contact us!

            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/ac amc.avif`} loading="lazy" alt="Fujitsu Airconditioner Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">

                  <li> <strong>  Extreme Weather: </strong> During summer, temperatures can reach over 40°C (104°F). Regular maintenance ensures that Fujitsu air conditioning systems operate efficiently in these conditions. </li>
                  <li> <strong>  Energy Efficiency: </strong> A well-maintained Fujitsu air conditioning unit operates more efficiently, helping to save energy and reduce electricity bills. </li>
                  <li> <strong>  Longevity of Equipment: </strong> Regular maintenance for your Fujitsu air conditioner service can extend its lifespan, reduce the need for costly repairs and replacements, and ultimately save you money. </li>
                  <li> <strong>  Improved Air Quality: </strong> Regular Fujitsu AC maintenance services units prevent dust and allergens, ensuring cleaner air. </li>
                  <li> <strong>  Enhanced Comfort: </strong> Regular Fujitsu air conditioning maintenance in Dubai is essential for ensuring daily comfort, efficiency, and consistent cooling. </li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Fujitsu AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you notice <a href="https://www.youtube.com/watch?v=qnByeIsc3lY">reduced airflow</a> from your vents, it may indicate an issue with your Fujitsu AC system, such as a clogged filter or a malfunctioning fan.
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
                      If your Fujitsu AC is blowing warm or room temperature air instead of cold air, there may be issues with the compressor, gas levels, or ductwork.
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
                      Unusual sounds such as grinding, squeaking, or banging from your Fujitsu AC unit may indicate mechanical issues that need attention.

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
                      Foul odours from the vents may indicate mold or mildew in the system and should be addressed immediately.
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
                      The inability to maintain the desired temperatures could indicate issues such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.
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
                      A Fujitsu air conditioner that is not effectively reducing humidity may have issues with its cooling capacity or may not be functioning properly.
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
                      Water pooling around the Fujitsu AC or dripping from the vents may indicate a blocked condensate drain, frozen coils, or other issues.

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
                      High energy bills without an increase in usage may indicate inefficiency in the Fujitsu AC due to dirty filters, duct leaks, or other issues.
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
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR Fujitsu AIR CONDITIONER SYSTEM</h2>

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
                {/* <p className='mb-0'><strong>Our services include:</strong></p> */}
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong>  Fujitsu AC Installation: </strong> Professional installation of various Fujitsu air conditioning systems to guarantee optimal performance. </li>
                  <li> <strong>  Fujitsu AC Diagnostics: </strong> Comprehensive fault diagnosis to accurately identify issues. We offer eligibility assessments and detailed quotes to address any concerns regarding your system. </li>
                  <li> <strong>  Fujitsu AC Repair Service: </strong> We provide prompt and effective repair services for all Fujitsu AC components, addressing issues such as leaks, electrical failures, and system malfunctions. Contact us for specific services or any questions you may have! </li>
                  <li> <strong>  Fujitsu AC Annual Maintenance Contract: </strong> This contract details the terms and services for Fujitsu AC annual maintenance. </li>
                </ul>
                <p className="mb-0"> <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> of Fujitsu AC systems (AMC / PPM) is essential for ensuring optimal performance, efficiency, and longevity.</p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <section className="section cs_py_30" style={{ backgroundColor: "#00334E", color: "white" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="cs_fs_30 text-light">Benefits Of Regular Fujitsu  AC Service and Maintenance in Dubai </h2>

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
                        Our team provides vital feedback on your Fujitsu AC's health and any needed repairs.
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
                    <p>Choose a day and time for your Fujitsu AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
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
                    <p>We are experts in Fujitsu AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
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
              and <small>3-month parts warranty</small> as standard.</p>


            <h3>We specialise in Fujitsu ac services for the following types</h3>
            <div className="row">
              <div className="col-12">

                <p className="mb-0"><strong>  Fujitsu Split Air Conditioner Service: </strong> FAJ provides dependable Fujitsu <a href="https://www.fajservices.ae/ac-repair-dubai/">AC repair</a> and maintenance services in Dubai. Our team consists of professionals specializing in Fujitsu split systems, Fujitsu VRV, and Fujitsu central air conditioning units. </p>
                <p className="mb-0"><strong>  Fujitsu Central Air Conditioner Repair and Service: </strong> FAJ is a Dubai-based service provider specializing in Fujitsu AC repair services. The company focuses on Fujitsu air conditioning systems and offers a range of services, including repairs and regular maintenance. </p>
                <p className="mb-0"><strong>  Fujitsu AC Service and Repair: </strong> Fujitsu AC service offers peace of mind with skilled professionals. At FAJ, we prioritize efficiency and reliability in all our work. Our expert team ensures that your air conditioning system operates at its best, whether you require maintenance, repairs, or installation. Trust us with your HVAC needs—your comfort is our highest priority. </p>
                <p className="mb-0"><strong>  Fujitsu Inverter Air Conditioner Maintenance: </strong> Rely on our expert team to swiftly address any issues with your Fujitsu air conditioner and restore its full functionality. </p>
                <p className="mb-0"><strong>  Fujitsu HVAC Repair: </strong> We have extensive knowledge of Fujitsu air conditioning systems, providing reliable repairs to ensure your unit operates efficiently. </p>
                <p className="mb-0"><strong>  Fujitsu Ceiling AC Service and Repair: </strong> Our experts can accurately diagnose and fix any issues with your Fujitsu air conditioner. </p>
                <p className="mb-0"><strong>  Fujitsu VRV (Variable Refrigerant Volume) System Service and Repair: </strong> The Fujitsu VRV (Variable Refrigerant Volume) System repair and service ensures your peace of mind because you are in the right place. FAJ prioritizes efficiency and reliability. </p>
                <p className="mb-0"><strong>  Fujitsu Ducted Split AC Service and Repair: </strong> Fujitsu ducted split AC service in Dubai requires specialist assistance, as only experts can effectively address air conditioning issues. We provide hassle-free Fujitsu air conditioning repair services. </p>
                <p className=""><strong>  Fujitsu Wall-Mounted Air Conditioner Service and Repair: </strong> Beat the scorching heat with optimal Fujitsu AC cleaning service and fixing error in Dubai! Our professional Fujitsu AC services ensure your unit operates efficiently, providing comfort and peace of mind. </p>


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

        {/* FAQ&apos;spos;s */}
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

export default FujitsuAcRepair;