import { useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";

import loadBackgroudImages from "../../../Common/loadBackgroudImages";
import HeaderForm from "../../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../../ApplianceCommons/AppliancesAppointmentCol";
import DaiganosisCharges from "../AppliancesLocation/ApplianceSpecialise/Daiganosischarges";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import CallNowButton from "../../../Buttons/CallNowButton";
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const ElicaAppliancesServiceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {

  // For SEO
  const metatitle = String(titleSeo || "Elica Appliances Service in Dubai | Elica Cooker Repair | Hood Fix");
  const metadescription = String(description || "To book your Elica appliances service in Dubai. FAJ offers an Elica hob, stove, cooker, oven, hood maintenance and repair center near you. Book with us");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/The-Most-Common-Reasons-for-Appliance-Breakdowns/public");
  const metaKeyword = String(Keyword || "Elica Appliances Service, Elica Hob Repair, Elica Cooker Repair, Elica Oven Repair, Elica Hood Repair, Elica Stove Repair, Elica Fridge Repair, Elica Washing Machine Repair, Elica Dishwasher Repair, Elica Appliance Maintenance Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/elica-appliances-service/");
  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  // State for fetched data
      const [data, setData] = useState([]);
      const [testimonial_data, setTestimonialData] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
  
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
  
      // Fetch JSON data
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const [faqsResponse, testimonialsResponse] = await Promise.all([
                      fetch(`${import.meta.env.BASE_URL}data/AppliancesData/AppliancesFaqs/AppliancesFaqs.json`),
                      fetch(`${import.meta.env.BASE_URL}data/AppliancesData/AppliancesTestimonial/AppliancesTestimonials.json`)
                  ]);
  
                  const faqsData = await faqsResponse.json();
                  const testimonialsData = await testimonialsResponse.json();
  
                  setData(faqsData);
                  setTestimonialData(testimonialsData);
              } catch (error) {
                  console.error('Error fetching data:', error);
              } finally {
                  setIsLoading(false);
              }
          };
  
          fetchData();
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
            <h1 className="cs_fs_30">Elica Appliances Service and Elica Cooker Repair in Dubai</h1>

            <p>
              If you’re facing problems with your Elica built-in ovens, freestanding cooking ranges, or kitchen hoods, it’s vital to find a trustworthy and effective repair service. <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876">FAJ Technical Services L.L.C</a> in Dubai is here to help with quick, reliable, and affordable repairs tailored to Elica appliances.
              <br />
              Since 2010, our experienced team has been dedicated to using the latest tools and techniques to identify and fix issues with all Elica models. We aim to get you back to your cooking routine in Dubai and Sharjah as soon as possible with minimal hassle.
            </p>

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
                <h3 className="cs_fs_24 mb-1">Best Elica Built-in Oven Repair Experts</h3>

                <p className="mb-2">
                  Elica kitchen appliances play a vital role in your daily cooking routine. From sleek kitchen hoods that ensure proper ventilation to built-in ovens that deliver perfect baking results, any malfunction can disrupt your kitchen workflow. If you're facing issues, it's crucial to contact an Elica repair and service expert near you. FAJ provides fast, reliable Elica appliance repair in Dubai and Sharjah, ensuring your appliances are back to working condition quickly and efficiently.
                </p>

                <h3 className="cs_fs_24 mb-1 pt-3 border-small-top">Fast and Reliable Elica Appliances Service</h3>
                <p className="mb-2">At <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"><b>FAJ Technical Services L.L.C</b></a>, we understand that appliance breakdowns, especially with Elica products, never occur at a convenient time. That’s why our trained Elica technicians are here to offer reliable appliance repair services. With our assistance, you can avoid the cost of purchasing a new appliance and get your Elica appliance running again before you have a chance to worry.
                </p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('The-Most-Common-Reasons-for-Appliance-Breakdowns')}  alt="Elica Hob Repair" />
              </div>
            </div>
            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>

        {/* Why is Appliance Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30 ">
          <div className="container">

            <h3 className="cs_fs_30">Why is Elica Kitchen Appliance Maintenance Service Important in Dubai?</h3>
            <p className="">
              Elica appliance maintenance is vital in Dubai due to heavy kitchen usage and high temperatures. Servicing ensures optimal performance, safety, and long-term durability of your cooking appliances. Here’s why you should maintain Elica products regularly:
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('dishwasher-repair-service')}  alt="Elica Hob Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong>  Kitchen Hoods / Chimneys Improve Air Quality: </strong> Routine cleaning of Elica chimneys ensures proper ventilation, removes grease and smoke buildup, and keeps your kitchen fresh and odour free. </li>
                  <li> <strong>  Built-in Hobs / Cooktops Boost Performance: </strong> Servicing Elica cooktops removes clogs, ensures flame consistency, and prevents gas leakage for safe, even cooking. </li>
                  <li> <strong>  Built-in Ovens Ensure Precise Cooking: </strong> Regular maintenance guarantees temperature accuracy, prevents uneven heating, and avoids common electrical issues in Elica ovens. </li>
                  <li> <strong>  Freestanding Cooking Ranges Stay Safe: </strong> Periodic checks keep burners, thermostats, and igniters functioning smoothly, ensuring the safe operation of Elica freestanding ranges. </li>
                  <li> <strong>  Induction Cooktops Operate Smoothly: </strong> Maintenance prevents overheating, detects sensor faults, and ensures efficient heat transfer on your Elica induction cooktops. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center"> The Most Common Problems with Elica Oven and Cooker </h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Oven Doesn't Heat Up</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This could result from a faulty heating element, a broken thermostat, or a malfunction in the ignition system of gas ovens during operation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Food Doesn't Cook Evenly</h3>
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
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Gas Burner Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">This is another gas cooker problem. The burner has an issue where the flames are uneven or only partly ignited. They also tend to get blocked.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Oven Door won't Close
                    </h3>
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
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Hob Not Responsive</h3>
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
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">
                      Ignition Problem
                    </h3>
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
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Self-Cleaning Problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Self-cleaning ovens sometimes have issues during the cleaning cycle, needing a reset or professional help.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Oven Doesn't Heat</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The oven doesn't heat correctly. Possible causes include a faulty thermostat, miscalibration, or control panel issues.
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
        <section className="section cs_py_30 ">
          <div className="container">
            <h3 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR ELICA APPLIANCES</h3>

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
                <p className='mb-0'>We specialize in all types of Elica appliances, including kitchen hoods, chimneys, built-in hobs, cooktops, built-in ovens, and cooking ranges.</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Elica Appliance Installation: </strong> Professional installation of various Elica kitchen appliances to ensure optimal performance and efficiency in your cooking space. </li>
                  <li> <strong> Elica Appliance Diagnostics: </strong> We provide expert diagnostics and eligibility assessments, along with detailed quotes for any issues with your Elica appliances. </li>
                  <li> <strong> Elica Appliance Repair Service: </strong> We provide quick repair services for Elica kitchen appliances, addressing noise, malfunctions, and more. Contact us for details or questions! </li>
                  <li> <strong> Elica Appliance AMC: </strong> This contract outlines the terms for the annual maintenance of your Elica appliances, ensuring they operate smoothly throughout the year. Enjoy peace of mind with our expert care. </li>

                  <p className="mb-0">
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is crucial to ensuring your Elica appliances perform at their best, run efficiently, and have a longer lifespan.
                  </p>
                </ul>
              </div>

            </div>
          </div>
        </section >

        {/* The Benefits Of appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h3 className="cs_fs_30 mb-0"> The Benefits of Elica Oven and Cooker Service in Dubai </h3>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.svg`}  alt="Cooling Efficiency" className="icon-img-block-icon" />
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
                        <img src={`${import.meta.env.BASE_URL}img/icons/Optimal-Performance.svg`}  alt="Cooling Efficiency" className="icon-img-block-icon" />
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
                        <img src={`${import.meta.env.BASE_URL}img/icons/Lower-Energy-Bills.svg`}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Lower Energy Bills</h3>
                      <p className="small">
                        An energy-efficient Elica oven and cooking range translates to monthly savings on utility bills, putting more money back in your pocket.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Saving-Money-on-Repair.svg`}  alt="Cooling Efficiency" className="icon-img-block-icon" />
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
                        <img src={`${import.meta.env.BASE_URL}img/icons/extending.svg`}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Extending Appliance Lifespan</h3>
                      <p className="small">
                        Proper care and timely servicing can significantly increase life of your Elica oven and cooking range, delaying the need for replacements.
                      </p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Peace-of-Mind.svg`}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">Peace of Mind
                      </h4>
                      <p className="small">
                        Knowing your Elica oven and cooking range are in top condition gives you confidence and removes the stress of unexpected failures.
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
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`}  alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can count on quick service! Our same-day repairs and next-day service visits ensure your needs are met promptly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`}  alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get year-round service to keep your Elica appliance running smoothly and reliably.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>
                      Schedule a day and time for your Elica appliance repair in Dubai or Sharjah, allowing a 3-4 hour window for the technician's arrival.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/fajteam-1.avif`}  alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>
                      We specialise in Elica appliance repair, which is why major brands trust us to handle their service and maintenance needs.
                    </p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`}  alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation up to two Elica appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled technicians specialise in Elica appliances and provide outstanding service across major appliances.  </p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`}  alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* We are specialise in Appliances services for the following brands */}
        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <DaiganosisCharges
              appliancebrand="Elica appliance"
              feeRange="ranging from AED 157 to 280"
            />
            <h3>We specialize in Elica appliance services of the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"> <strong>  Elica Kitchen Hoods / Chimneys Repair Services in Dubai: </strong> Transform your kitchen atmosphere with FAJ's exceptional Elica kitchen hood repair services available in Dubai! If your Elica chimney is struggling with poor suction, excessive noise, or dim lighting, you can rely on our skilled technicians to resolve these issues. Our commitment to quick and efficient repairs ensures that your kitchen remains a pleasant and energizing place, allowing you to enjoy preparing your favorite dishes. </p>
                <p className="mb-0"> <strong>  Elica Built-in Hobs / Cooktops Repair Services in Dubai: </strong> Is your Elica built-in hob or cooktop not performing as it should? Look no further! The dedicated repair team at FAJ is here to revitalize your cooking experience. Whether you're facing uneven heating, ignition problems, or any other challenges, we’ll promptly diagnose and address the issues, providing reliable repairs so that your cooking surface functions flawlessly once more! </p>
                <p className="mb-0"> <strong>  Elica Built-in Ovens Repair Services in Dubai: </strong> Has your Elica built-in oven come up short, failing to heat effectively or showing troublesome error messages? FAJ has you covered! Our specialized repair services for Elica ovens in Dubai are designed to tackle all concerns, from temperature irregularities to electronic malfunctions. Our experienced technicians will have your oven back in peak condition, ensuring that you can continue creating and enjoying delightful meals without interruptions. </p>
                <p className="mb-0"> <strong>  Elica Freestanding Cooking Ranges Repair Services in Dubai: </strong> For Elica freestanding cooking ranges, FAJ proudly offers specialized repair services that guarantee your appliance runs smoothly and efficiently. Whether you encounter burner issues, oven failures, or simply need regular maintenance, our skilled technicians are ready to handle all types of repairs quickly. Your uninterrupted cooking experience is our mission! </p>
                <p className="mb-0"> <strong>  Elica Induction Cooktops Repair Services in Dubai: </strong> If your Elica induction cooktop is malfunctioning, perhaps not heating properly or displaying error codes, FAJ is here to assist! Our expert team in Dubai specializes in providing top-notch repair services for Elica induction cooktops. We deliver in-depth diagnostics and effective solutions to restore your cooktop's performance, making your cooking tasks as easy and enjoyable as they should be. </p>

                <h4 className="mt-3">We offer service for Elica appliances in the Dubai area</h4>
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

        {/* Faqs */}
        <section className="section cs_py_30  bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`eye-open ${index === openItemIndex ? 'd-none' : ''}`}
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
                      </svg>

                      {/* Eye Slash */}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`eye-slash ${index !== openItemIndex ? 'd-none' : ''}`}
                      >
                        <path d="M17.94 17.94A10.06 10.06 0 0 1 12 20c-6 0-10-8-10-8a18.42 18.42 0 0 1 5.06-5.94" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
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
  )
}

export default ElicaAppliancesServiceDetail;
