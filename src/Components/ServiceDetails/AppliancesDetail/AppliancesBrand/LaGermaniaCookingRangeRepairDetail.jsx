import { useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
import data from '../../../../Data/AppliancesData/AppliancesFaqs/AppliancesFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";

import 'swiper/swiper-bundle.css';
import testimonial_data from '../../../../Data/AppliancesData/AppliancesTestimonial/AppliancesTestimonials.json';
import loadBackgroudImages from "../../../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import HeaderForm from "../../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../../ApplianceCommons/AppliancesAppointmentCol";
import DaiganosisCharges from "../AppliancesLocation/ApplianceSpecialise/Daiganosischarges";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import CallNowButton from "../../../Buttons/CallNowButton";
import Testimonial1 from "../../../Testimonial/Testimonial1";

const LaGermaniaCookingRangeRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "La Germania Cooking Range Repair Dubai - Gas Oven Service");
  const metadescription = String(description || "FAJ offer reliable gas La Germania cooking range repair in Dubai. Dail 043300002 electric oven, oven, gas stove repairs, cooker, hob fix & service");
  const metaAuthor = String(Author || "Faj Technical Services");
  const metaImage = String(Image || "https://www.fajservices.ae/dist/img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif");
  const metaKeyword = String(Keyword || "LA Germania Cooking Range Repair Dubai, La Germania Oven Repair Dubai, La Germania Cooker Repair Dubai, La Germania Cooker Oven Maintenance Service in Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/la-germania-cooking-range-repair-in-dubai-la-germania-oven-repair-in-dubai-la-germania-cooker-repair-in-dubai-la-germania-cooker-oven-maintenance-service-in-dubai-refrigerator-repair-in-dubai-fridge-r/").replace(/\/?$/, '/');

  subtitle = "Testimonial"
  title = "What our clients say About Us"
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
            <h1 className="cs_fs_30">La Germania Cooking Range Repair & Service in Dubai</h1>
            <p>
              If you are having issues with your La Germania cooker, oven, or cooking range, it's essential to find a reliable and high-quality repair service. <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876">F A J Technical Services L.L.C</a> in Dubai specializes in prompt, efficient, and cost-effective repairs specifically designed for La Germania appliances.
              <br />
              With over a decade of experience since 2010, our skilled team utilizes advanced tools and techniques to diagnose and resolve issues across all La Germania models, enabling you to return to your routine in Dubai and Sharjah with minimal disruption. </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        {/* Best Home Appliance Service Center */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h3 className="cs_fs_24 mb-1">Get La Germania Cooker Repair Near You</h3>

                <p className="mb-2">
                  La Germania cookers and ovens are essential kitchen appliances we depend on for daily cooking.
                  <br />
                  When they break down, it can disrupt your entire routine. That’s why it’s crucial to find a La Germania repair and service specialist near you, whether you're in Dubai or Sharjah, for fast and reliable support.


                </p>

                <h3 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "20px" }}>Fast and Reliable La Germania Appliances Service</h3>
                <p className="mb-2">
                  At F A J Technical Services L.L.C, we understand that appliance breakdowns, especially with La Germania products, never occur at a convenient time. That’s why our trained and qualified La Germania technicians are here to offer you reliable <a href="https://www.fajservices.ae/appliances-repair-service/">appliance repair services</a>. With our assistance, you can avoid the cost of purchasing a new appliance and get your La Germania appliance up and running again before you have a chance to worry about it.
                </p>
              </div>

              <div className="col-md-6">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/new-cooker.avif`} loading="lazy" alt="La Germania Fridge repair" />
              </div>

            </div>
            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>

        {/* Why is Appliance Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30">
          <div className="container">

            <h3 className="cs_fs_30">Why is La Germania Oven Maintenance Service Important in Dubai?</h3>
            <p className="mb-0">
              Regular maintenance is crucial in Dubai because of the frequent use of appliances and the city's climate. It ensures the longevity and optimal performance of your cooker, Gas and Electric oven, and cooking range, while also reducing the risk of gas leaks and fire hazards. Here’s a detailed explanation based on each appliance:

            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/oven-Range-Repair-Nearby-You-oven.avif`} loading="lazy" alt="La Germania Fridge repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Cooker Heavy Use and Versatility: </strong> Cookers are essential in homes and commercial kitchens across Dubai. Due to frequent use, regular maintenance ensures consistent performance.</li>
                  <li> <strong> Cooking Range Safety: </strong> Routine inspections, especially with gas cooking ranges, help detect leaks or malfunctioning components, ensuring safe operation.</li>
                  <li> <strong> Oven Efficiency: </strong> Regular maintenance of the heating element and thermostat ensures optimal efficiency, saving energy and reducing utility bills.</li>
                  <li> <strong> Oven Preventative Measures: </strong> Routine cleaning and inspections prevent minor issues from becoming major repairs, saving time and money.</li>
                  <li> <strong> Cooking Range Long-term Use: </strong> Scheduled maintenance enhances the longevity of the entire unit, delaying the need for replacement.
                    By prioritising oven maintenance, residents and businesses in Dubai can ensure their appliances function safely and efficiently.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">The Most Common Problems with La Germania Oven and Cooker</h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1"> Oven Doesn't Heat Up</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">This could result from a faulty heating element, a broken thermostat, or a malfunction in the ignition system of gas ovens during operation.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Food Doesn't Cook Evenly</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This can occur due to factors such as incorrect rack placement, blocked vents, poor circulation, uneven heating, or a faulty thermostat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Gas Burner Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This is another gas cooker problem. The burner has an issue where the flames are uneven or only partly ignited. They also tend to get blocked.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Oven Door won't Close</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Problems with door hinges, seals, or latch mechanisms can prevent the door from closing properly, affecting cooking performance and safety.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1"> Hob Not Responsive</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If the hob doesn't respond to touch, it could be due to a blown or tripped switch affecting the power supply or an internal wiring issue inside.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Ignition Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A common issue is when the burner won't ignite despite the igniter being activated. Other gas cooker problems also arise in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">heading</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Description here ...
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Heading</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Description here ...
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

        {/* HERE ARE THE SERVICES WE OFFER FOR HOME APPLIANCES */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR THE LA GERMANIA OVEN AND COOKER </h3>

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
                <p className='mb-0'>We specialise in all types of La Germania Gas and Electric ovens and cooking ranges, including built-in units.
                  <br />
                  <strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Installation: </strong> Expert installation of La Germania ovens and cooking ranges, ensuring optimal performance and long-term efficiency. </li>
                  <li> <strong> Diagnostics: </strong> Comprehensive fault-finding services to effectively diagnose issues. We provide eligibility assessments and detailed quotations to address any concerns you may have with your system. </li>
                  <li> <strong> Repair Service: </strong> Efficient repair services for all cooker and oven components, ensuring a quick resolution to leaks, electrical failures, and system malfunctions. Feel free to reach out if you need specific services or have any questions! </li>
                  <li> <strong> Annual Maintenance Contract: </strong> This contract outlines the terms and services covered for the annual maintenance of your La Germania appliances. </li>

                  <p className="mb-0">
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc/">Regular maintenance</a> is essential for optimal performance, efficiency, and longevity of your La Germania appliances.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section >

        {/* The Benefits Of appliances Service Dubai */}
        < section className="section cs_py_30 appliances-benifit-sec bg-light-gray" >
          <div className="container">
            <div className="row justify-content-center">
              <h3 className="cs_fs_30 mb-0">The Benefits of La Germania Oven and Cooker Service in Dubai </h3>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.png`} loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Ensuring Safety</h3>
                      <p className="small">
                        Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Optimal-Performance.png`} loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18"> Optimal Performance </h3>
                      <p className="small">
                        Regular maintenance helps your cooker and oven run smoothly and efficiently, consistently delivering the best cooking results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Lower-Energy-Bills.png`} loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Lower Energy Bills</h3>
                      <p className="small">
                        An energy-efficient La Germania oven and cooking range translates to monthly savings on utility bills, putting more money back in your pocket.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Saving-Money-on-Repair.png`} loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Saving Money on Repair</h3>
                      <p className="small">
                        Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.
                      </p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Extending-Appliance-Lifespan.png`} loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Extending Appliance Lifespan</h3>
                      <p className="small">
                        Proper care and timely servicing can significantly increase life of your La Germania oven and cooking range, delaying the need for replacements.
                      </p>
                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Peace-of-Mind.png`} loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">Peace of Mind
                      </h4>
                      <p className="small">
                        Knowing your La Germania oven and cooking range are in top condition gives you confidence and removes the stress of unexpected failures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
        < section className="section cs_py_30" >
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>

            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`} loading="lazy" alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>

                      You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>quick service</b></a> ! Our same-day repairs and next-day service visits ensure your needs are met promptly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} loading="lazy" alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get year-round service to keep your La Germania appliance running smoothly and reliably.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Schedule a day and time for your La Germania appliance repair in Dubai or Sharjah, allowing a 3-4 hour window for the technician's arrival.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/fajteam-1.avif`} loading="lazy" alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`} loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We specialise in La Germania appliance repair, which is why major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation up to two La Germania appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled technicians specialise in La Germania appliances and provide outstanding service across major appliances..</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`} loading="lazy" alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section >

        {/* We are specialise in Appliances services for the following brands */}
        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <DaiganosisCharges
              appliancebrand="LA GERMANIA"
              feeRange="ranging from AED 157 to 280"
            />
            {/* <h3>We specialize </h3> */}
            <div className="row">
              <div className="col-12">

                <h3 style={{ fontWeight: "20px" }}> We specialize in La Germania appliance services of the following types</h3>
                <div className="row">
                  <div className="col-12">
                    <p className="mb-0"> <strong> La Germania Cooking Range Repair Near You in Dubai:  </strong> FAJ is your reliable service provider for La Germania cooking range repairs in Dubai. We understand how essential your cooking range is for your daily meal preparation, which is why our experienced technicians offer efficient same-day service. If you need expert assistance with any issues related to your La Germania cooking range, please call our team in Dubai today. </p>
                    <p className="mb-0"> <strong> La Germania Built-in Electric Oven Repair Near You in Dubai:  </strong> If your La Germania built-in electric oven is malfunctioning, don't delay! FAJ offers prompt and professional repair services for La Germania electric ovens in Dubai. Whether it’s heating problems or electronic faults, our specialists provide expert care. </p>
                    <p className="mb-0"> <strong> La Germania Gas Oven Repair and Service in Dubai:  </strong> For La Germania gas oven repairs, trust the experts at FAJ. We provide specialised diagnostics and repairs for all models, and also for built-in models, ensuring your oven maintains optimal performance and safety. </p>
                    <p className="mb-0"> <strong> La Germania Gas Hob Repair Near You in Dubai:  </strong> Having issues with your La Germania gas hob? Contact FAJ for expert gas hob repair services in Dubai. Our trained professionals quickly resolve ignition, burner, and gas flow problems for safe and smooth cooking. </p>
                    <p className="mb-0"> <strong> La Germania Electric Hob Repair in Dubai:  </strong> If your La Germania electric hob is not heating properly or has power issues, FAJ is here to help. We specialise in La Germania electric hob repairs in Dubai, offering reliable diagnostics and quick fixes by experienced technicians. </p>
                    <p className="mb-0"> <strong> La Germania Wall-Mounted Hood Repair Near You in Dubai:  </strong> Keep your kitchen air fresh with a well-functioning wall-mounted hood. If your La Germania wall-mounted hood needs repair, FAJ provides expert service in Dubai. We efficiently fix motor failures, suction issues, and lighting problems. </p>
                    <p className="mb-0"> <strong> La Germania Built-in Hood Service Near You in Dubai:  </strong> When your built-in La Germania kitchen hood stops working efficiently, rely on FAJ’s professional repair services in Dubai. We ensure silent, powerful performance with fast, affordable repairs tailored to La Germania appliances. </p>
                    <p className="mb-0"> <strong> La Germania Cooker Hood Repair and Maintenance in Dubai:  </strong> If your La Germania cooker hood is not effectively removing smoke or odours, it is advisable to contact FAJ. We specialise in professional cooker hood repair services in Dubai, ensuring that your kitchen environment remains clean and healthy. </p>
                    <p className="mb-"> <strong> La Germania Range Hood Repair Near You in Dubai:  </strong> For La Germania range hood repairs in Dubai, FAJ offers dependable solutions. Whether it's a noisy fan, poor suction, or electrical faults, our team ensures your range hood performs at its best. </p>


                    <h4 className="mt-3">We offer service for La Germania appliances in the Dubai area</h4>
                    <p>

                      <a href="https://www.fajservices.ae/appliances-services-in-business-bay/">Business Bay</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-dubai-marina/">Dubai Marina</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-palm-jumeirah/">Palm Jumeirah</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-dubai-hills-estate/">Dubai Hills Estate</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-damac-hills/">Damac Hills</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-al-barari/">Al Barari</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-al-barsha/">Al Barsha</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-al-safa/">Al Safa</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-arabian-ranches/">Arabian Ranches</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-dubai-silicon-oasis/">Dubai Silicon Oasis</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-dubai-investments-park/">Dubai Investments Park</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-dip/">DIP</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-dubai-production-city/">Dubai Production City</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-impzy/">IMPZ</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-dubai-sports-city/">Dubai Sports City</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-dubai-studio-city/">Dubai Studio City</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-jbr/">JBR</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-beach-residence/">Jumeirah Beach Residence</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-jlt/">JLT</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-lake-towers/">Jumeirah Lake Towers</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-jvc/">JVC</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-village-circle/">Jumeirah Village Circle</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-jvt/">JVT</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-village-triangle/">Jumeirah Village Triangle</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-jebel-ali-village/">Jebel Ali Village</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-jumeirah/">Jumeirah</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-golf-estates/">Jumeirah Golf Estates</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-the-meadows/">Meadows</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-dubai-motor-city/">Motor City</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-town-square/">Town Square</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/ac-services-in-emirates-hills/">Emirates Hills</a>
                      <span>&nbsp;|&nbsp;</span>

                      <a href="https://www.fajservices.ae/appliances-services-in-umm-suqeim/">Umm Suqeim</a>

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
            </div>
          </div>
        </section >

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
                    {/* <p className="mb-0">{item.desc.replace(/\n/g, '<br>')}</p> */}
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
  )
}

export default LaGermaniaCookingRangeRepairDetail;
