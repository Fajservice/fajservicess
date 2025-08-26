import { useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
import data from '../../../../Data/AppliancesData/AppliancesFaqs/delonghicoffeemachineFaqs.json';
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
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import CallNowButton from "../../../Buttons/CallNowButton";
import Testimonial1 from "../../../Testimonial/Testimonial1";

const DelonghiCoffeeMachineRepairDetail = ({ subtitle, title, reviewsbg, titleSeo , description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Delonghi Coffee Machine Repair & Maintenance Services");
  const metadescription = String(description || "De'longhi coffee machine repair Dubai. Trusted De Longhi coffee machine & espresso maintenance & services near you. Fix descaling & cleaning near me");
  const metaAuthor = String(Author || "F A J Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Delonghi Coffee Machine Repair, Delonghi Coffee Machine Service, Delonghi Coffee Machine Maintenance");
  const metaURL = String(URL || "https://www.fajservices.ae/delonghi-coffee-machine-repair/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/dist/img/delonghi-coffee-machine-repair.avif");

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
            <h1 className="cs_fs_30">Expert DeLonghi Coffee Machine Repair and Service in Dubai</h1>
            {/* 
          <h2 className="cs_fs_30">CHOOSE APPLIANCE SERVICE CENTER FOR SAME-DAY REPAIRS IN DUBAI</h2> */}
            <p>
              At De’Longhi, we take pride in offering services that meet the diverse needs of coffee lovers in Dubai, UAE. Since 2010, <a href="https://www.fajservices.ae/">F A J Technical Services L.L.C</a> has been providing a range of DeLonghi coffee machine repair and maintenance services, including cleaning and descaling.<br />Whether you enjoy single-origin coffees or premium ground blends, we are here to assist you. Whether you prefer brewing your coffee at the push of a button or mastering the art of coffee-making with a manual machine, we hope you enjoy many years of use from your De’Longhi coffee machine.

            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>

        {/* Best Home Appliance Service Center */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h3 className="cs_fs_24 mb-1">DeLonghi Coffee Machine Serving and Descaling</h3>

                <p className="mb-2">
                  When your DeLonghi coffee machine breaks down, it can disrupt your routine. FAJ offers fast and efficient DeLonghi coffee machine repair services near you.< br />
We specialise in DeLonghi espresso machine descaling, cleaning, water leaks, steam wand issues, noise, poor coffee quality, and grinding problems. Let us help get your coffee machine back in shape.

                </p>

                <h3 className="cs_fs_20 mb-1 pt-3 border-small-top">DeLonghi Coffee Machine Repair and Maintenance Contract</h3>
                <p className="mb-2">We are here to help with whatever you need. A scheduled AMC service contract for your DeLonghi coffee machine covering cleaning and descaling is essential for smooth operation year-round.< br />
Regular maintenance is important for all types of coffee machines, whether for home, office, café, or restaurant use. Let us make your life easier.
</p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/delonghi-coffee-machine-repair.avif`}  loading="lazy" alt="Delonghi coffee machine repair" />
              </div>
            </div>
            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>
        
         {/* Why is Appliance Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30 ">
          <div className="container">

            <h3 className="cs_fs_30">What is the Importance of DeLonghi Coffee Machine Maintenance in Dubai?</h3>
            <p className="mb-2">Regular maintenance of a DeLonghi coffee machine is crucial for businesses. It ensures coffee quality, extends the machine’s lifespan, and minimises repair costs.</p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/delonghi-coffee-machine-service.avif`}  loading="lazy" alt="delongi coffee machine repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li><strong>Preventing Breakdowns: </strong>Routine DeLonghi coffee maker maintenance, including cleaning and descaling, reduces costly repairs and downtime, impacting revenue.</li>
                  <li><strong>Extending Lifespan:</strong> Regular maintenance prolongs machine life, saving on replacement costs.</li>
                  <li><strong>Lowering Maintenance Costs: </strong>Addressing minor issues early can prevent larger, more expensive repairs.</li>
                  <li><strong>Maintaining Efficiency:</strong> Consistent upkeep ensures optimal performance and reduces energy consumption.</li>
                  <li><strong>Professional Service for Commercial Use:</strong> Commercial machines need <a href="https://www.fajservices.ae/coffee-machine-repairs/" style={{textDecoration:"underline"}}><b>specialised maintenance</b></a> for safety and performance</li>
                  <li><strong>Importance in Commercial Kitchens:</strong> In the UAE, proper maintenance of DeLonghi coffee machines is essential service. Regular upkeep improves their quality and lifespan, benefiting both home and business users in Dubai.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">The Most Common Problems of De Longhi Coffee Machines</h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Water Leaking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Water leakage issues in coffee or espresso machines can be caused by worn-out seals, loose connections, or cracks in the water reservoir or tubing.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Machine Descaling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Descaling your coffee machine regularly with a suitable cleaning solution can effectively remove mineral buildup, which can lead to clogs and leaks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Machine Cleaning
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Regular DeLonghi coffee machine cleaning service of the filter basket, coffee grinder, and other parts can prevent clogs and improve the coffee taste.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Bad Coffee Taste</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Poor quality beans, improper brewing parameters (such as grind size and ratio), or case De Longhi machine’s internal components can result in bad-tasting coffee.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Loud or Unusual Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Noise from the De Longhi coffee machine, Low water levels, the espresso machine being placed on a hard surface, or heating issues can lead to unexpected noises.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Brewing Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Weak Coffee is often a common problem, typically due to improper grind size, over-extraction, under-extraction, or using stale espresso machine coffee beans.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Slow Coffee Flow</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Issues with coffee machines, such as De Longhi espresso or automatic makers, can be caused by clogs, incorrect grind sizes, or pump problems.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Professional Help</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">For more complex issues or if you are unable to troubleshoot the problem yourself, contact FAJ qualified <a href="https://www.fajservices.ae/coffee-machine-service-center-in-dubai/">coffee machine repair</a> technician for maintenance.</p>
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
            <h3 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR COFFEE MACHINES AND ESPRESSO MACHINES</h3>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/IjckdZLs_Qg?si=-hiJX-pD_w7neMon"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-xl-6">
                <p className='mb-0'>We specialise in all types and models of De Longhi coffee machines, including espresso machines</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                 <li><strong>Installation: </strong>Professional installation of different DeLonghi coffee machines for peak performance.</li>
<li><strong>De Longhi Diagnostics: </strong>We perform thorough fault-finding to effectively diagnose issues. Our services include eligibility assessments and detailed quotations to address any concerns regarding your system.</li>
<li><strong>De Longhi Repair Service: </strong>Quick and efficient De&rsquo;Longhi coffee machines repair services and addressing issues like leaks, electrical failures, and system malfunctions. Reach us with any questions or to request services!</li>
<li><strong>De Longhi Annual Maintenance Contract: </strong>This contract specifies the terms and services for the annual maintenance of the De Longhi espresso machine.</li>
                  <p className="mb-0">
                    Regular maintenance is crucial for ensuring optimal performance, efficiency, and longevity of your De Longhi coffee machine.
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
              <h3 className="cs_fs_30 mb-0">The Benefits Of De'Longhi Coffee Machines Service in Dubai</h3>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.png`}  loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
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
                        <img src={`${import.meta.env.BASE_URL}img/icons/Optimal-Performance.png`}  loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18"> Optimal Performance </h3>
                      <p className="small">Regular maintenance helps your coffee machines run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Lower-Energy-Bills.png`}  loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Lower Energy Bills</h3>
                      <p className="small">Energy-efficient coffee machines translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Saving-Money-on-Repair.png`}  loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
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
                        <img src={`${import.meta.env.BASE_URL}img/icons/Extending-Appliance-Lifespan.png`}  loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">Coffee Machine Lifespan</h4>
                      <p className="small">Proper care and timely servicing can significantly increase life of your coffee machines, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Peace-of-Mind.png`}  loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">Peace of Mind
                      </h4>
                      <p className="small">Knowing your coffee machines are in top condition gives you confidence and removes the stress of unexpected failures.</p>
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
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`}  loading="lazy" alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`}  loading="lazy" alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your coffee machine runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`}  loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your coffee machine repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/fajteam-1.avif`}  loading="lazy" alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`}  loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in Delonghi coffee machine repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`}  loading="lazy" alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two coffee machines at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`}  loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled coffee machine technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`}  loading="lazy" alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray mb-4">
                    <div className="container">
                
          <h3>We specialise in DeLonghi Coffee Machines Repair services for the following Types:</h3>
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-0"><strong>DeLonghi Magnifica Star Fully Automatic Coffee Machine Repair</strong>: FAJ provides dependable repair and service for De Longhi Magnifica coffee machines in Dubai. Our team consists of professionals who specialise in DeLonghi Magnifica and automatic coffee machines.</p>
<p className="mb-0"><strong>DeLonghi Eletta Coffee Machine Repair and Service</strong>: FAJ, located in Dubai, is your reliable destination for DeLonghi Eletta coffee machine repair services across Dubai, Sharjah, and Abu Dhabi. We specialise in the DeLonghi Eletta coffee machine and provide comprehensive services, including maintenance and repairs.</p>
<p className="mb-0"><strong>DeLonghi La Specialista Service and Repair</strong>: The DeLonghi La Specialista service and repair ensures you Don&apos;t have to worry because you are in the right place. FAJ prioritises efficiency and reliability.</p>
<p className="mb-0"><strong>DeLonghi Espresso Machines Descaling and Servicing:</strong> Count on our experienced team to effectively resolve all issues with your DeLonghi espresso machines through descaling and servicing to restore functionality.</p>
<p className="mb-0"><strong>De'Longhi Espresso Machines Cleaning and Services</strong>: We have extensive knowledge of DeLonghi espresso machine cleaning and repair services, providing effective repairs to keep your unit running smoothly..</p>
<p className="mb-0"><strong>DeLonghi Dinamica Plus Espresso Machine Repair and Service: </strong>No matter the issue with your DeLonghi Dinamica Plus espresso machine, our experts can accurately diagnose and fix it.</p>
<p className="mb-0"><strong>Delonghi Coffee Machine Repair and Service</strong>: Has your De'Longhi PrimaDonna, De'Longhi Magnifica start fully automatic coffee, De'Longhi Eletta, or De'Longhi espresso machine stopped working? Don&rsquo;t settle for disappointing coffee! Get your De'Longhi espresso maker and automatic coffee machine running again quickly with the help of <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ's expert technician</a>!</p>

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

export default DelonghiCoffeeMachineRepairDetail;
