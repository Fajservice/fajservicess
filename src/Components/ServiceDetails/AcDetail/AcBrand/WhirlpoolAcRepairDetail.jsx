import { useEffect, useRef, useState } from "react";
import data from '../../../../Data/AcData/AcFaqs/AcBrand/WhirpoolAcRepairfaq.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import testimonial_data from '../../../../Data/AcData/AcTestimonial/WhirpoolAcServiceTestimonials.json';
import 'swiper/swiper-bundle.css';
import HeaderForm from "../../../Headeform/HeaderForm";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import Practicaltip from "../../../Common/Practicaltip";
import AcProperties from "../../../Common/AcProperties";
import AcAppointmentCol from "../../../Common/AcAppointmentCol";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";


const WhirpoolAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "Whirlpool Air Condition Repair in Dubai - AC Maintenance");
  const metadescription = String(description || "FAJ Offering Whirlpool AC repair in Dubai We are experts in Split Air Conditioner Maintenance Service nearby & Air con Fixing 043300002");
  const metaAuthor = String(Author || "Faj Technical Services");
  const metaKeyword = String(Keyword || "Whirpool Air Conditioner Repair in Dubai, Whirlpool AC Maintenance, Whirlpool AC Service, Whirlpool Air Conditioner Installation, Whirlpool AC Cleaning Service, Whirlpool AC Repair Dubai, Whirlpool AC AMC Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai").replace(/\/?$/, '/');
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
            <h1 className="cs_fs_30">Whirlpool Air Conditioner Repair and Services in Dubai</h1>
            <p>
              Ensuring year-round comfort requires effective management of challenges such as summer humidity, warm nights, and indoor allergens.
              <br />Since its founding in 2010, <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876">F A J Technical Services L.L.C</a> has been a trusted provider of Whirlpool air conditioner solutions in Dubai and Sharjah. Our skilled team offers a range of Whirlpool AC repair, cleaning services, maintenance, and installation for both residential and commercial units. We are committed to optimising the performance of your air conditioning system to enhance indoor comfort.
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
                <h2 className="cs_fs_24 mb-1">Whirlpool AC Maintenance and Service</h2>

                <p className="mb-2">
                  If you&apos;re in Dubai and need Whirlpool <a href="https://www.fajservices.ae/ac-repair-dubai/">air conditioner repair</a>, FAJ is here for you!
                  <br /> Our expert team ensures your AC systems run smoothly in Dubai and Sharjah, providing reliable solutions for optimal indoor comfort year-round. Enjoy a cool, refreshing environment with our help!

                </p>

                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top">Signs You Need An AC Service</h2>
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
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/ac filter.avif`} alt="Whirlpool AC Service" />
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

            <h2 className="cs_fs_30">Why is Whirlpool AC Maintenance Service Important in Dubai?</h2>
            <p className="mb-">
              To guarantee your Whirlpool central air conditioner functions efficiently in Dubai's intense heat, regular <a href="https://www.fajservices.ae/ac-maintenance-dubai/"> AC maintenance</a> is essential. At FAJ, we offer expert aircon services designed to enhance your system’s performance and comfort year-round. Trust us to keep your air conditioner operating at its best.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/ac amc.avif`} alt="Whirlpool Airconditioner Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">

                  <li> <strong>  Extreme Weather: </strong> As summer approaches, we can expect temperatures to soar above 40°C (104°F), creating discomfort. it&apos;s essential to ensure that your Whirlpool air conditioning systems are primed for optimal performance. </li>
                  <li> <strong>  Energy Efficiency: </strong> A well-maintained Whirlpool air conditioner operates efficiently, resulting in significant energy savings and lower DEWA electricity costs. </li>
                  <li> <strong>  Longevity of Equipment: </strong> Keeping up with the Whirlpool AC maintenance is really important for getting the best performance and efficiency. It helps lower repair costs and can save money for both homes and businesses. </li>
                  <li> <strong>  Improved Air Quality: </strong> Routine Whirlpool air conditioner cleaning service prevents dust and allergens from getting in, resulting in improved air quality. </li>
                  <li> <strong>  Enhanced Comfort: </strong> Regular air conditioner maintenance in Dubai is vital for optimal efficiency and a comfortable indoor environment. </li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Whirlpool  AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      <a href="https://www.youtube.com/watch?v=qnByeIsc3lY"><b>Reduced airflow</b></a> from a Whirlpool air conditioner may indicate a clogged filter or faulty fan, which should be fixed for efficient cooling.
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
                      If your Whirlpool AC is blowing warm air, it may be experiencing issues with the compressor, refrigerant levels, or ductwork.
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
                      Unusual sounds like grinding, squeaking, or banging from your Whirlpool AC may indicate mechanical issues that require attention.
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
                      Unpleasant odors coming from the vents may indicate mold or mildew in the system and should be addressed immediately.
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
                      The failure to maintain desired temperatures may indicate problems such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.
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
                      A Whirlpool air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly.
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
                      Water pooling around the Whirlpool AC or dripping from the vents may indicate a blocked drain or frozen coils.
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
                      High energy bills without increased usage may indicate inefficiencies in Whirlpool air conditioning due to dirty filters or duct leaks.
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
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR WHIRLPOOL AC SYSTEMS</h2>

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
                <p className='mb-0'>Effective air conditioning systems are essential for maintaining a comfortable and effective environment in commercial environments.</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Whirlpool AC Installation: </strong> The professional installation of various Whirlpool air conditioning systems ensures optimal performance. </li>
                  <li> <strong> Whirlpool AC Diagnostics: </strong> We offer accurate fault diagnosis to pinpoint system issues, along with comprehensive quotes and eligibility assessments to address your concerns.
                  </li>
                  <li> <strong> Whirlpool AC Repair Service: </strong> We offer fast repair services for Whirlpool air conditioners, addressing leaks, electrical problems, and malfunctions. Contact us for further details or inquiries!</li>
                  <li> <strong> Whirlpool AC Annual Maintenance Contract: </strong>  The contract specifies the annual maintenance terms for Whirlpool air conditioners.  </li>
                </ul>
                <p className="mb-0"><a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a>, including Annual Maintenance Contracts (AMC) and Planned Preventive Maintenance (PPM), is vital for optimal performance and durability.</p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <section className="section cs_py_30" style={{ backgroundColor: "#00334E", color: "white" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="cs_fs_30 text-light">Benefits Of Regular Whirlpool AC Service and Maintenance in Dubai </h2>

                <div className="row mt-4 gx-4 gy-4">
                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}img/icons/cooling1.jpg`} alt="Cooling Efficiency" className="img-fluid rounded-circle border border-4 border-info" />
                      </div>
                      <h4 className="text-uppercase mb-2 fs-6 text-white">COOLING EFFICIENCY</h4>
                      <p className="small">
                        We conduct a thorough evaluation of cooling efficiency using a temperature gun.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}img/icons/disinfection.jpg`} alt="Disinfect Components" className="img-fluid rounded-circle border border-4 border-warning" />
                      </div>
                      <h4 className="text-uppercase mb-2 fs-6 text-white">DISINFECT COMPONENTS</h4>
                      <p className="small">
                        All hardware components have been tested and disinfected, including filters and vents.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}img/icons/fan.jpg`} alt="Fan Assessment" className="img-fluid rounded-circle border border-4 border-success" />
                      </div>
                      <h4 className="text-uppercase mb-2 fs-6 text-white">FAN ASSESSMENT</h4>
                      <p className="small">
                        We make sure fan operates properly and there are no blockages in evaporator coil.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}img/icons/thermo.jpg`} alt="Thermostat Check" className="img-fluid rounded-circle border border-4 border-primary" />
                      </div>
                      <h4 className="text-uppercase mb-2 fs-6 text-white">THERMOSTAT CHECK</h4>
                      <p className="small">
                        We use a laser temperature gauge to verify that the thermostats are operating correctly.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}img/icons/airflow.jpg`} alt="Airflow Balance" className="img-fluid rounded-circle border border-4 border-danger" />
                      </div>
                      <h4 className="text-uppercase mb-2 fs-6 text-white">AIRFLOW BALANCE</h4>
                      <p className="small">
                        We make sure that each room receives the optimal airflow it needs.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}img/icons/customer.jpg`} alt="Customer Feedback" className="img-fluid rounded-circle border border-4 border-secondary" />
                      </div>
                      <h4 className="text-uppercase mb-2 fs-6 text-white">CUSTOMER FEEDBACK</h4>
                      <p className="small">
                        Our team provides feedback on your Whirlpool AC's health and needed repairs.
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
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With <a href="/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your Whirlpool AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                    </p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">

                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/ACServicescomponent.avif`} alt="Ac Maintenance Services" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in Whirlpool AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} alt="FAJ icon service" />
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
              <img className="blue-border-2 w-100" src={`${import.meta.env.BASE_URL}img/ACServicescomponent.avif`} alt="Ac Maintenance Services" />
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


            <h3>We specialise in Whirlpool AC services for the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"><strong>  Whirlpool Air Conditioner Installation Service in Dubai: </strong>
                  A comprehensive solution for your cooling needs. We specialize in high-quality Whirlpool AC installation services in Dubai and Sharjah. Our consultation process helps you choose the right model based on your space and budget. Our experts assess factors like room size and AC insulation to recommend the best unit for optimal performance.
                </p>

                <p className="mb-0"><strong>  Our installation services include: </strong></p>
                <p class="mb-0"> <strong>   Climate Check: </strong> Understanding your unique requirements based on the local climate and your building's features. </p>
                <p class="mb-0"> <strong>   Expert AC Installation: </strong> Our skilled AC technicians ensure that the AC installation is performed to the highest standards, adhering to all safety protocols. </p>
                <p class="mb-0"> <strong>   Post-Installation Support: </strong> We provide advice on operating your new air conditioner, including tips on energy efficiency and maintenance. </p>
                <p class="mb-0"> <strong>   Warranty and Service Packages: </strong> To ensure your peace of mind, we offer warranty options and additional service packages for maintenance and repair in Dubai and Sharjah. </p>
                <p class="mb-0"> <strong>   Whirlpool AC AMC Services in Dubai: </strong> We offer comprehensive air conditioning AMC (Annual Maintenance Contract) and PPM (Planned Preventive Maintenance) services, along with repair support, throughout the year for both contract and non-contract customers. While we are dedicated to serving all our clients, please note that those with service contracts may receive priority assistance. </p>
                <p class="mb-0"> <strong>   Whirlpool Air Conditioner Repair in Dubai: </strong> Stay cool during the hot Dubai summer with our expert Whirlpool inverter AC repair in Dubai and Sharjah. Our team provides efficient and reliable cooling solutions tailored to your needs. We guide you through the selection and installation process for optimal comfort. Contact us today to schedule your installation and beat the heat! </p>
                <p class="mb-0"> <strong>   Whirlpool AC Cleaning Service in Dubai: </strong> AC Deep cleaning your air conditioner brings several key benefits:  </p>
                <p class="mb-0"> <strong>   Improved Air Quality: </strong> It removes dust, allergens, and bacteria, leading to healthier air, especially for those with allergies. </p>
                <p class="mb-0"> <strong>   Reduced Energy Consumption: </strong> A clean unit operates more efficiently, lowering your electricity bills. </p>
                <p class="mb-0"> <strong>   Extended Lifespan: </strong> Regular AC maintenance prevents wear and tear, prolonging the life of your AC and minimising costly repairs. </p>
                <p class="mb-0"> <strong>   Odour Elimination: </strong> It eliminates mold and mildew, resulting in fresher indoor air. </p>
                <p class="mb-0"> <strong>   Reduced Mold Growth: </strong> Regular cleaning prevents the growth of mold and bacteria, which is crucial in humid climates. </p>
                <p class="mb-0"> <strong>   Better Breathing: </strong> Cleaner air improves overall well-being. In short, deep cleaning your AC is an investment in your health, comfort, and energy efficiency. </p>

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

export default WhirpoolAcRepair;