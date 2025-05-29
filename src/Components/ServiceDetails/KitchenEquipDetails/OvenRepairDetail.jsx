import { useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
import data from '../../../Data/KitchenEquipments/FAQs/OvenRepairFaqs.json';
import { HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import Slider from "react-slick";
import testimonial_data from '../../../Data/KitchenEquipments/Testmonials/OvenRepairTestimonials.json';
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import HeaderForm from "../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";


const OvenRepairDetail = ({ subtitle, title, bgImg }) => {

  // For SEO
  const titleSeo = "Oven Repair & Maintenance Services in Dubai | FAJ";
  const description = "Looking for oven repair near me in Dubai? FAJ offers expert oven repair services for homes and businesses. Call us at 043300002";
  const Author = "Faj Technical Servcies";
  const Keyword = "";
  const URL = "https://www.fajservices.com/oven-repair/";


  subtitle = "Testimonial"
  title = "What our clients say About Us"
  bgImg = "img/testimonialbg.jpg"
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
        <title>{titleSeo}</title>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={Keyword} />
        <meta name="author" content={Author} />
        <meta name="robots" content="index, follow" />
        <Link rel="canonical" href={titleSeo} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={titleSeo} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Commercial Oven Repair and Maintenance Services</h1>
            {/* <h2 className="cs_fs_30">Professional Catering Technicians Provide Quality Servicing for Commercial Ovens</h2> */}
            <p>
              Looking for affordable oven repair? At FAJ Professional, we've been serving Dubai since 2010, offering trustworthy repair solutions.
              Our skilled technicians can handle various oven issues, including electric, gas range, and electric ovens.
              <br />We provide prompt and cost-effective service tailored to your needs, ensuring reliable repairs right at your door.

            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

       

        {/* heading*/}

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h3 className="cs_fs_24 mb-1">Commercial Combi Oven Maintenance</h3>
                <p className="mb-2">
                  We repair all types of commercial kitchen ovens, including gas and electric models. Our specialised team of commercial oven technicians carries essential spare parts, enabling us to assist you whenever you need it.
                  <br />Our goal is to help keep your business running smoothly. We offer commercial oven repair services in Dubai.

                </p>


                <h3 className="cs_fs_20 mb-1 pt-3 border-small-top">EXPRESS & EMERGENCY Oven REPAIR SERVICE</h3>
                <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that appliesapplies for each diagnosis, depending on the capacity applied. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.<br />
<b>CHOOSE FAJ FOR YOUR PEACE OF MIND<br />
<small>We provide 2-month service warranty
and 3-month parts warranty as standard.</small></b></p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/Camercial-Kitchen-Equipment.avif`} alt="Oven Repair" />
              </div>
            </div>
            <h3 className="cs_fs_24 mb-1 border-small-top pt-3">Planned Preventive Maintenance (PPM) Services</h3>
                <p className="mb-2">Our catering equipment technician offers a customized Planned Preventive Maintenance Package created to keep your Combi ovens, Convection ovens, High-Speed ovens, Compact ovens, Pizza ovens, Rational ovens, Commercial ovens, Duck ovens, and Steamers running efficiently and compliant with standards.<br/>This proactive approach helps reduce the likelihood of unexpected breakdowns and the associated costs. Our Planned Preventive Maintenance Package includes maintenance, repair services, and testing. It is ideal for hotels, restaurants, canteens, and other venues in the hospitality and education sectors that want to ensure their equipment operates smoothly and prevent breakdowns.</p>
          </div>
        </section>
        {/*: */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">Why is Oven Maintenance Service Important in Dubai?</h3>
            <p>
              Regular maintenance of commercial ovens is essential for safe and efficient operation.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/commercial-kitchen-equipment-amc.avif`} alt="Oven Repair" />
              </div>
              <div className="col-md-6">
                <ul>
                  <li><strong> Efficiency: </strong> Regular maintenance ensures the oven heats evenly and accurately, which reduces energy waste and provides consistent baking results. </li>
                  <li><strong> Food Quality: </strong> A clean oven prevents unwanted flavors and ensures proper baking, essential for a positive customer experience. </li>
                  <li><strong> Reduced Downtime: </strong> Preventive maintenance can help identify potential issues before they lead to expensive repairs or breakdowns. </li>
                  <li><strong> Cost Savings with Maintenance Contract: </strong> Regular maintenance can extend the oven's lifespan and lower repair costs, ultimately saving businesses money over time. </li>
                  <li><strong> Hygiene: </strong> Regular cleaning prevents bacteria and other contaminants, ensuring a safe cooking environment. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*  Problems */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="text-center">Common Commercial Oven Problems That May Require Maintenance </h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Broken Oven Door</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your food is not cooking evenly or is undercooked, the issue may be related to the door of your commercial oven. For optimal cooking.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Oven Not Heating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      You guessed it! The most obvious issue is that it may not heat to the desired temperature, even when switched on.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Uneven Cooking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Food often cooks unevenly, burning on one side while remaining undercooked on the other due to poor heat distribution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Oven Keeps Sparking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you hear continuous clicking and your gas oven is sparking, the problem might be the ignition dial.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Broken Oven Thermostat</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Cooking at the right temperature is vital for delicious meals, as incorrect temperatures can lead to overcooking or undercooking.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Broken Heating Elements</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Possible causes include faulty heating elements, a broken thermostat, clogged burners, or electrical issues. For gas ovens, it may be the igniter.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Broken Oven Fan</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A malfunctioning electric oven fan can lead to uneven cooking. Oven fans circulate heated air around the oven cavity to ensure even cooking.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Broken Door Seal</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The oven door seal, also known as a gasket, creates an airtight seal between the oven door and the oven cavity.
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

        {/*Why  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="cs_fs_30">Comprehensive Commercial Oven Repair Services in Dubai</h3>

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
                <p className="mb-0">We provide repair services for a wide range of commercial ovens, including:</p>
                <ul>
                  <li><strong> Oven Installation: </strong>   Professional installation of various types and brands of gas and electric ovens, ensuring optimal performance and efficiency. </li>
                  <li><strong> Oven Diagnostics: </strong>   We perform thorough diagnostics and provide eligibility assessments and detailed quotes to address any oven issues. </li>
                  <li><strong> Oven Repair Service: </strong>   Reliable professional oven repair services for all components, ensuring quick resolution of issues like leaks, electrical failures, and malfunctions. Feel free to contact us for specific services or any questions! </li>
                  <li><strong> Oven Annual Maintenance Contract: </strong>   This contract outlines the terms and services covered for the annual maintenance of catering ovens. </li>

                </ul>

              </div>


            </div>
          </div>
        </section >

        {/* We Deal in all Types */}

        {/* <section className="section cs_py_30 bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">We Deal in all Types</h3>
            <p>FAJ Technical Services's versatility is evident in the range of oven types we handle and the comprehensive oven maintenance services we provide for different appliance models and brands. Because of the experience on our team, we can handle the complexities of various oven glass repair and wall oven repair and provide a solution for any requirement.</p>
            <div className="row text-light">
              <div className="col-md-6">
                <h4 className="text-light">Convection oven repair</h4>
                <p>Convection oven repair is FAJ Technical Services's area of expertise. They provide knowledgeable services to address problems unique to convection models. Our knowledgeable specialists guarantee accurate diagnostics and workable solutions because they comprehend the intricacies of convection ovens. We offer dependable convection oven repair services that are customized to meet the specific needs of your appliance, whether the issue is a broken fan or inconsistent temperature.</p>
              </div>
              <div className="col-md-6">
                <h4 className="text-light">Industrial oven repair</h4>
                <p>FAJ Technical Services is the company to call when you need industrial oven repair services. We understand that industrial ovens are essential for a variety of applications. Our skilled technicians have a lot of experience diagnosing and fixing industrial ovens, so there's less downtime and maximum efficiency. You can rely on us for thorough services that bring longevity and efficiency to the forefront of industrial oven repair.</p>
              </div>
              <div className="col-md-6">
                <h4 className="text-light">Restaurant oven repair</h4>
                <p>An oven that doesn’t work well can cause havoc in the hectic kitchen of a restaurant. FAJ Technical Services offers expert restaurant oven repair services, taking care of problems quickly to maintain the efficiency of your kitchen. With a dedication to efficiency and quality, we serve a wide range of restaurant oven repair needs, from fine dining to quick-service restaurants.</p>
              </div>
              <div className="col-md-6">
                <h4 className="text-light">Kitchen oven repair</h4>
                <p>When problems arise with your kitchen oven, FAJ Technical Services provides trustworthy repair services to get it working again. Our knowledgeable specialists are proficient in identifying and resolving a variety of kitchen oven issues, including malfunctioning heating components and control problems. You can rely on us to fix your kitchen oven quickly and effectively, ensuring optimal performance from your appliance.</p>
              </div>
              <div className="col-md-6">
                <h4 className="text-light">Stove oven repair near me</h4>
                <p>Do you need "stove oven repair near me" services? You only need to look at FAJ Technical Services. Professional stove oven repair is delivered right to your door with our easy and fast services. Our knowledgeable technicians guarantee prompt and dependable solutions to get your stove oven back in working order because we recognize the urgency of repairs.</p>
              </div>
              <div className="col-md-6">
                <h4 className="text-light">Commercial oven repair</h4>
                <p>FAJ Technical Services serves businesses with accuracy and professionalism by extending its expertise to commercial oven repair. Our knowledgeable staff handles commercial oven problems in a comprehensive manner, from bakeries to catering services, and offers prompt repairs that support the smooth running of your commercial kitchen.</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* The Benefits */}
        <section className="section cs_py_30 appliances-benifit-sec">
          <div className="container">
            <div className="row justify-content-center">
              <h3 className="cs_fs_30 mb-0">Benefits Of Regular Oven Service and Maintenance in Dubai
              </h3>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.png`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">HEATING EFFICIENCY</h4>
                      <p className="small">
                        We conduct a thorough assessment of heating efficiency using a temperature gun.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Optimal-Performance.png`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">  DISINFECT COMPONENTS   </h4>
                      <p className="small">
                        All hardware components, including the individual parts and the oven, are carefully tested and disinfected to ensure safety and reliability.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Lower-Energy-Bills.png`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">FAN ASSESSMENT</h4>
                      <p className="small">
                        We make sure that the fan operates properly and that there are no blockages in the burner or heating element.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Saving-Money-on-Repair.png`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">THERMOSTAT CHECK</h4>
                      <p className="small">
                        We use a laser temperature gauge to confirm that thermostats are functioning properly.
                      </p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Extending-Appliance-Lifespan.png`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">AIRFLOW BALANCE</h4>
                      <p className="small">
                        We ensure that you receive optimal airflow around each oven part as required.
                      </p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Peace-of-Mind.png`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">CUSTOMER FEEDBACK </h4>
                      <p className="small">
                        Our team offers essential feedback on the condition of your oven and any necessary repair.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-dark-blue text-light">
          <div className="container text-center">
            <h3 className="cs_fs_30 text-light">Practical Tips to Improve Energy Efficiency</h3>
            <p>Learn easy and proven ways to save energy with your AC. Find tips to cut the cost and stay cool all summers!</p>
            <a
              href="files/Practical Tips to Improve Energy Efficiency of Your AC Infographic.pdf"
              className="btn-green-yellow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here to Save on Energy Bills
            </a>


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
                    <p>	You can rely on prompt service! Our same-day repairs or next-day visits ensure that your needs are addressed swiftly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Confidence</h3>
                    <p>
                      With an oven annual maintenance contract, you receive a full year of service, ensuring oven operates smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Schedule your oven repair in Dubai or Sharjah by choosing a specific day and time. Our technician will arrive within a 3-4 hour window.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/fajteam-1.avif`} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We specialise in oven repair, which is why most major brands rely on us for their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>
                      We are committed to providing customer satisfaction through timely service, quick issue resolution, and competitive pricing.
                    </p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our expert oven technicians are well-trained, providing <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a> for various major oven brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise   */}
        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <h3>We specialize in commercial oven services for the following brands </h3>
            <div className="row">
              <div className="col-12">

                
                <ul>
                  <li> <strong> Rational Oven Combi Repair and Service : </strong> FAJ offers reliable Rational Oven repair and services in Dubai, with professionals who are experts in Rational professional oven maintenance.</li>
                  <li> <strong> Capinox Gas Oven Maintenance Service: </strong> Discover FAJ in Dubai, your go-to solution for Capinox Gas Oven repair and maintenance! We proudly specialize in Capinox Gas Ovens, ensuring top-notch service and expertise for all your needs. We're here to help you!</li>
                  <li> <strong> Forni Fiorini Rack Oven Servicing and Repair: </strong> The Forni Fiorini Rack Oven service and repair ensures you don't have to worry because you are in the right place. FAJ is where efficiency and reliability are prioritized.</li>
                  <li> <strong> Tecnodom Steam Convection Oven Repair Near you: </strong> Depend on our skilled team to quickly resolve any issues with your Tecnodom Steam Convection Oven, restoring it to optimal performance.</li>
                  <li> <strong> Convection Oven Krystal Repair and Service : </strong> With our expert understanding of the Convection Oven Krystal, we deliver reliable repairs that will have your unit functioning flawlessly. Trust us to enhance your cooking experience by ensuring your oven performs at its best every time.</li>
                  <li> <strong> Commercial Cake Bakery Pizza one Layer two Layers Oven Service: </strong> No matter the challenges with your commercial cake bakery pizza oven—whether it's a single-layer cake or a stunning three-layer creation—our experienced team is here to help! We’ll identify maintenance needs and provide tailored solutions to ensure your baked goods shine and bring joy to all.</li>
                  <li> <strong> Convotherm Combi Oven - Professional Service and Maintenance: </strong> Is your Convotherm Combi Oven not working? You don’t have to endure uncomfortable temperatures or suffer losses due to faulty equipment – FAJ will get your Convotherm Combi Oven back up and running quickly!</li>
                  <li> <strong> Tecnoeka Electric Combi Oven Service and Repair: </strong> Tecnoeka Electric Combi Oven service in Dubai requires expert help, as only specialists know how to address its issues. We offer hassle-free oven repair service</li>
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
        </section>


 {/* Maintenance Contract */}
        <MaintenanceContract />
{/* testimobial section */}
        <section className="cs_slider cs_style_1 cs_slider_gap_30 cs_bg_filed position-relative cs_py_30" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${bgImg})` }}>
          {/* <div className="cs_height_80 cs_height_lg_80"></div> */}
          <div className="container">
            <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
              <h3 className="cs_section_subtitle cs_fs_18 text-black cs_semibold text-uppercase cs_mb_12 wow fadeInDown">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                </svg>{subtitle}<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                </svg></h3>
              <h2 className="cs_section_title cs_fs_50 text-black mb-0 wow fadeInUp">{parse(title)}</h2>
            </div>
            <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"
              data-variable-width="0" data-xs-slides="1" data-sm-slides="1" data-md-slides="1" data-lg-slides="2"
              data-add-slides="2" data-slides-per-view="responsive">
              <div className="cs_slider_wrapper">
                <Slider {...settings}>
                  {testimonial_data.map((item, index) => (
                    <div key={index} className="cs_slide wow fadeInLeft">
                      <div className="cs_testimonial cs_style_1 position-relative">
                        <div className="cs_testimonial_content cs_white_bg position-relative">
                          <div className="cs_testimonial_header cs_mb_35">
                            <div className="cs_testimonial_thumbnail">
                              <img src={`${import.meta.env.BASE_URL}${item.img1}`} alt="Avatar" />
                            </div>
                            <div className="cs_testimonial_info">
                              <div className="rating-area" >
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                              </div>
                              <h3 className="cs_fs_24 cs_mb_1">{item.title}</h3>
                              {/* <p className="cs_fs_14 cs_heading_color mb-0">{item.subTitle}</p> */}
                            </div>
                          </div>
                          <blockquote className="cs_fs_16">{item.desc}</blockquote>
                          <div className="cs_quote_icon position-absolute">
                            <img src={`${import.meta.env.BASE_URL}img/icons/quote_1_blue.svg`} alt="Quote Icon" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

              </div>
            </div>
          </div>
          {/* <div className="cs_height_80 cs_height_lg_80"></div> */}
        </section>

        {/* FAQ's */}
        <section className="section cs_py_30  bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">FAQ's</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye text-light"></i>
                      <i className="bi bi-eye-slash text-light"></i>
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

export default OvenRepairDetail;

