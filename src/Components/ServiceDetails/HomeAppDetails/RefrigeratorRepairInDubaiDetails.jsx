import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import 'swiper/swiper-bundle.css';
import BookingFormModal from '../../BookingFormModal';
import { RxArrowTopRight } from 'react-icons/rx';
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import HeaderForm from "../../Headeform/HeaderForm";
import BlogFridge from "../../Blog/BlogFridge";
import BrandsSliderSection from "../../BrandsSliderSection";
import Testimonial1 from "../../Testimonial/Testimonial1";

const RefrigeratorRepairInDubaiDetails = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Refrigerator Repair Service Near Me | Fridge Repair in Dubai");
  const metadescription = String(description || "Best Refrigerator Repair & Service in Dubai. FAJ Experts to get same-day Fridge repair & maintenance near you. Freezer fixing & service center.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Refrigerator repair, Fridge repair, Refrigerator service, Freezer repair, Dubai refrigerator repair, Fridge service Dubai, Appliance repair Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/refrigerator-repair-service/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/img/fridgerepair.avif");


  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = "img/testimonialbg.jpg"
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for fetched data
  const [data, setData] = useState([]);
  const [testimonial_data, setTestimonialData] = useState([]);
  const [brandsLogo_data, setBrandsLogoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse, brandsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/HomeappRefrigeratorServicefaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/RefrigeratorTestimonials.json`),
          fetch(`${import.meta.env.BASE_URL}data/AppliancesBrandsLogo.json`)
        ]);

        const faqsData = await faqsResponse.json();
        const testimonialsData = await testimonialsResponse.json();
        const brandsData = await brandsResponse.json();

        setData(faqsData);
        setTestimonialData(testimonialsData);
        setBrandsLogoData(brandsData);
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
            <h1 className="cs_fs_30">Refrigerator Repair Service in Dubai | Freezer and Fridge Repair</h1>
            <p>
              Since 2010, FAJ has established itself as the go-to reference for refrigerator, freezer and fridge repair near me service in Dubai and Sharjah. We prioritise refrigerator repair near you over replacements, helping you save money and avoid the bother of buying a new fridge or freezer.
              Rely on our experienced experts for fast and reliable refrigerator maintenance in Dubai!
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


        {/* Refrigerator Repair & Service Near You */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Refrigerator Repair & Service Near You</h2>
                <p className="mb-2">Is your fridge or freezer not cooling properly? Has your food spoiled?
                  You can easily book online fridge repair and freezer repair in Dubai / Sharjah near me service with FAJ Experts.
                  We repair most major brands of refrigerators and freezers, offering same-day fridge service at affordable prices. Choose a time slot that works best for you!
                </p>
                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Fast and Reliable Appliances Service
                </h2>
                <p className="mb-2">At <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"><b>FAJ Technical Services L.L.C</b></a>, we understand that appliance breakdowns never happen at a convenient time. That's why our trained and qualified technicians are here to provide you with reliable appliance repair services. With our help, you can avoid the expense of purchasing a new appliance and get your appliance up and running again before you even have a chance to stress about it.</p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/fridgerepair.avif`} alt="Fridge repair"  />

              </div>
            </div>
            <AppliancesAppointmentCol />
          </div>
        </section>


        {/*why */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Refrigerator Maintenance Service Important in Dubai? </h2>
            <p>Proper refrigerator maintenance is essential for extending its lifespan and improving efficiency, especially given Dubai's climate. Here are the key benefits:
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/techfridge.avif`} alt="Fridge repair"  />
              </div>
              <div className="col-md-6">

                <ul className="mb-0">

                  <li> <strong> Refrigerator Extended Lifespan: </strong> Regular maintenance helps prolong life of your refrigerator, ultimately saving you money on replacement costs. </li>
                  <li> <strong> Fridge Freezer Improved Efficiency: </strong> A well-maintained refrigerator operates more efficiently, consuming less energy and leading to lower utility bills, which is especially important in Dubai. </li>
                  <li> <strong> Refrigerator Preventing Costly Repairs: </strong> Addressing minor issues promptly can prevent them from escalating into expensive repairs. </li>
                  <li> <strong> Preserving Appliance Integrity: </strong> Routine cleaning prevents dust buildup, which can negatively affect performance. </li>
                  <li> <strong> Refrigerator Early Problem Detection: </strong> Regular checks help identify potential issues before they become significant problems. </li>
                  <li> <strong> Refrigerator Energy Efficiency: </strong> Routine maintenance can boost your refrigerator's energy efficiency, helping you save money in the long run. </li>


                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems with the Refrigerator and Freezer</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Fridge Not Cooling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If the refrigerator coils are hot but the fridge isn't cooling, there may be a problem with the gas, thermostat, or the fridge coils.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Water Leaking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A common issue with refrigerators is water leakage, often caused by a blocked defrost drain or a faulty water supply line.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Refrigerator Freezing Food</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your refrigerator is freezing food, it's likely due to a faulty temperature control thermostat that regulates the cooling voltage.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Fridge Overheating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Fridge overheating can damage the compressor and other parts of your refrigerator. It is essential to address this issue promptly.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Defective Thermostat</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Defective temperature control thermostat, PCB, and compressor issues usually require a repair technician to address.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Fridge Running Always</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your fridge runs constantly, a faulty thermostat, relay, or sensor might prevent it from reaching the desired temperature as set.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dirty Condenser Coils</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ensure that these condensing coils are clean, as this can affect the compressor's operation, impacting cooling and compressor efficiency.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Door Seal Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A worn door seal can cause temperature fluctuations and energy waste. Inspect the seal regularly to ensure proper function.</p>
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


        {/* HERE ARE THE SERVICES */}
        <section className="section cs_py_30 ">
          <div className="container">
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR THE REFRIGERATOR  </h2>
            <p></p>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/VAmZ-qKWkjw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-xl-6">

                <p className='mb-0'>We specialise in all types and brands of refrigerators, including fridge freezers.
                </p>
                <p className='mb-0'><strong>Our services include:</strong></p>

                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li><strong> Refrigerator Installation: </strong> Expert installation for various types and brands of refrigerators, ensuring optimal performance and efficiency. </li>
                  <li><strong> Refrigerator Diagnostics: </strong> We conduct thorough diagnostics to identify issues effectively. We also provide eligibility assessments and detailed quotations to address any concerns with your system. </li>
                  <li><strong> Refrigerator Repair Service: </strong> Efficient repair services for all fridge freezer components, ensuring a quick resolution to issues such as leaks, electrical failures, and system malfunctions. </li>
                  <li><strong> Refrigerator Annual Maintenance Contract: </strong> This contract outlines the terms and services covered for annual maintenance of your refrigerator. </li>

                  <p className="mb-0">
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for optimal refrigerator performance, efficiency, and longevity.

                  </p>
                </ul>


              </div>


            </div>
          </div>
        </section >

        {/* The Benefits  */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">The Benefits Of Refrigerator Service Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.svg`} alt="Cooling Efficiency" className="icon-img-block-icon"  />
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
                        <img src={`${import.meta.env.BASE_URL}img/icons/Optimal-Performance.svg`} alt="Cooling Efficiency" className="icon-img-block-icon"  />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Optimal Performance
                      </h3>
                      <p className="small">Regular maintenance helps your refrigerator run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Lower-Energy-Bills.svg`} alt="Cooling Efficiency" className="icon-img-block-icon"  />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Lower Energy Bills</h3>
                      <p className="small">Energy efficient refrigerator translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Saving-Money-on-Repair.svg`} alt="Cooling Efficiency" className="icon-img-block-icon"  />
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
                        <img src={`${import.meta.env.BASE_URL}img/icons/extending.svg`} alt="Cooling Efficiency" className="icon-img-block-icon"  />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Extending refrigerator Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your refrigerator, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Peace-of-Mind.svg`} alt="Cooling Efficiency" className="icon-img-block-icon"  />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Peace of Mind
                      </h3>
                      <p className="small">Knowing your refrigerator are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHOOSE US  */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>

            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`} alt="Fast, Reliable Service"  />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} alt="We Are Experts"  />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your refrigerator runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} alt="FAJ icon service"  />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your refrigerator repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/fajteam-1.avif`} alt="FAJ icon service"  />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`} alt="FAJ icon service"  />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in refrigerator repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} alt="FAJ icon service"  />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two refrigerator at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} alt="FAJ icon service"  />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled refrigerator technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`} alt="FAJ icon service"  />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY REFRIGERATOR REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 157 to 280 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month repair warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h3>We specialise in Refrigerator services for the following brands</h3>
            <div className="row">
              <div className="col-12">
                <ul className="mb-0">
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/"><strong>LG Refrigerator Repair</strong></a><strong>: </strong>FAJ is here to support you when things go wrong. We understand that your LG refrigerator is essential for daily life, preserving your food and ensuring your meals are always prepared. FAJ is here for refrigerator repair near me and fridge freezer maintenance service in Dubai and Sharjah.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/samsung-fridge-repair-in-dubai-samsung-washing-machine-repair-in-dubai-samsung-cooker-repair-in-dubai-samsung-oven-repair-in-dubai-samsung-appliances-maintenance-in-dubai-samsung-refrigerator-fix-repa/"><strong>Samsung Refrigerator Repair</strong></a><strong>:</strong> If you are facing any problems with your Samsung refrigerator repair, Samsung fridge freezer service, fix washer dryer, or dishwasher, contact the FAJ team for same day fridge repair near me service in Dubai.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/electrolux-home-appliances-repair/"><strong>Electrolux Refrigerator Repair</strong></a><strong>:</strong> When you need Electrolux refrigerator repair near me in Dubai, we have a team of professional and qualified fridge technicians available throughout Dubai. Call us now for freezer maintenance, fridge repair service near you in Dubai</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/bosch-home-appliances-repair/"><strong>Bosch Refrigerator Repair</strong></a><strong>: </strong>If you are looking for the best Bosch fridge repair near me service in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch appliance service provider in the area. FAJ is here to help with refrigerator repair near by you, freezer fridge maintenance service near me in Dubai</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/viking-appliances-service/"><strong>Viking Fridge Freezer Repair</strong></a><strong>: </strong>Your Viking appliances may require repair or maintenance and we can help. For high-quality Viking Fridge Freezer repair near me service in Dubai, rely on FAJ. Get same day refrigerator repair near me and built in refrigerator service and fix refrigerator error by FAJ.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/daewoo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/"><strong>Daewoo Refrigerator Repair</strong></a><strong>: </strong>We provide expert Daewoo fridge repair near me service in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator repair, washing machine repair, dryer repair service and more. Book now fridge repair in Sharjah and Dubai Area.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/siemens-home-appliances-repair/"><strong>Siemens Refrigerator Repair</strong></a><strong>:</strong> Are you concerned about your Siemens appliance malfunctioning and searching for a reliable Siemens refrigerator repair services near me in Dubai? Contact us for same-day fridge repair near me service in your location Dubai and Sharjah!</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/teka-home-appliance-installation-maintenance-repair-fix-service-in-dubai/"><strong>Teka Refrigerator Repair</strong></a>: If you're searching for the best Teka appliance repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerator maintenance and Teka refrigerator repair near me service, washing machine repair, and oven repairs. Freezer repair and freezer maintenance service. FAJ is recognized as the leading Teka appliance service provider in the area.</li>
                </ul>

                <p className="mb-0">
                  <Link to="/aeg-fridge-repair-in-dubai-aeg-washing-machine-repair-in-dubai-aeg-cooker-repair-in-dubai-aeg-oven-repair-in-dubai-aeg-appliances-maintenance-in-dubai-aeg-refrigerator-fix-repairs-service-in-dubai-aeg/">AEG</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/ariston-fridge-repair-in-dubai-ariston-washing-machine-repair-in-dubai-ariston-cooker-repair-in-dubai-ariston-oven-repair-in-dubai-ariston-appliances-maintenance-in-dubai-ariston-refrigerator-fix-repa/">Ariston</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/beko-fridge-repair-in-dubai-beko-washing-machine-repair-in-dubai-beko-cooker-repair-in-dubai-beko-oven-repair-in-dubai-beko-appliances-maintenance-in-dubai-beko-refrigerator-fix-repairs-service-in-dub/">Beko</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/blomberg-fridge-repair-in-dubai-blomberg-washing-machine-repair-in-dubai-blomberg-cooker-repair-in-dubai-blomberg-oven-repair-in-dubai-blomberg-appliances-maintenance-in-dubai-blomberg-refrigerator-fi/">Blomberg</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/faber-appliances-service/">Faber</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/fagor-fridge-repair-in-dubai-fagor-washing-machine-repair-in-dubai-fagor-cooker-repair-in-dubai-fagor-oven-repair-in-dubai-fagor-appliances-maintenance-in-dubai-fagor-refrigerator-fix-repairs-service/">Fagor</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/fisher-and-paykel-fridge-repair-in-dubai-fisher-and-paykel-washing-machine-repair-in-dubai-fisher-and-paykel-cooker-repair-in-dubai-fisher-and-paykel-oven-repair-in-dubai-fisher-and-paykel-appliances/">Fisher and Paykel</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/foster-appliances-services-foster-dishwasher-repair-service-in-dubai-foster-cooking-range-repair-service-in-dubai-foster-cooktop-repair-service-in-dubai-foster-oven-repair-in-dubai-foster-rangetop-r/">Foster</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/gaggenau-fridge-repair-in-dubai-gaggenau-washing-machine-repair-in-dubai-gaggenau-cooker-repair-in-dubai-gaggenau-oven-repair-in-dubai-gaggenau-appliances-maintenance-in-dubai-gaggenau-refrigerator-fi/">Gaggenau</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/hitachi-fridge-repair-in-dubai-hitachi-washing-machine-repair-in-dubai-hitachi-cooker-repair-in-dubai-hitachi-oven-repair-in-dubai-hitachi-appliances-maintenance-in-dubai-hitachi-refrigerator-fix-repa/">Hitachi</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/hoover-fridge-repair-in-dubai-hoover-washing-machine-repair-in-dubai-hoover-cooker-repair-in-dubai-hoover-oven-repair-in-dubai-hoover-appliances-maintenance-in-dubai-hoover-refrigerator-fix-repairs-se/">Hoover</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/">Indesit</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/">LG</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/neff-fridge-repair-in-dubai-neff-washing-machine-repair-in-dubai-neff-cooker-repair-in-dubai-neff-oven-repair-in-dubai-neff-appliances-maintenance-in-dubai-neff-refrigerator-fix-repairs-service-in-dub/">Neff</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/smeg-fridge-repair-in-dubai-smeg-washing-machine-repair-in-dubai-smeg-cooker-repair-in-dubai-smeg-oven-repair-in-dubai-smeg-appliances-maintenance-in-dubai-smeg-refrigerator-fix-repairs-service-in-dub/">Smeg</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/sub-zero-fridge-repair-in-dubai-sub-zero-washing-machine-repair-in-dubai-sub-zero-cooker-repair-in-dubai-sub-zero-oven-repair-in-dubai-sub-zero-appliances-maintenance-in-dubai-sub-zero-refrigerator-fi/">Sub Zero</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/terim-appliances-service/">Terim</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/whirlpool-fridge-repair-in-dubai-whirlpool-washing-machine-repair-in-dubai-whirlpool-cooker-repair-in-dubai-whirlpool-oven-repair-in-dubai-whirlpool-appliances-maintenance-in-dubai-whirlpool-refrigera/">Whirlpool</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/zanussi-fridge-repair-in-dubai-zanussi-washing-machine-repair-in-dubai-zanussi-cooker-repair-in-dubai-zanussi-oven-repair-in-dubai-zanussi-appliances-maintenance-in-dubai-zanussi-refrigerator-fix-repa/">Zanussi</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/de-dietrich-appliance-repair-service/">De Dietrich</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/baumatic-appliances/">Baumatic</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/bertazzoni-refrigerator-repair-in-dubai-bertazzoni-appliances-service-bertazzoni-fridge-repair-in-dubai-bertazzoni-washing-machine-washer-bertazzoni-dryer-repair-in-dubai-bertazzoni-dishwasher-cooker/">Bertazzoni</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/bompani-fridge-repair-in-dubai-bompani-washing-machine-repair-in-dubai-bompani-cooker-repair-in-dubai-bompani-oven-repair-in-dubai-bompani-appliances-maintenance-in-dubai-bompani-refrigerator-fix-repa/">Bompani</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/boston-refrigerator-repair-in-dubai-boston-appliances-service-boston-fridge-repair-in-dubai-boston-washing-machine-washer-boston-dryer-repair-in-dubai-boston-dishwasher-cooker/">Boston</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/brandt-fridge-repair-in-dubai-brandt-washing-machine-repair-in-dubai-brandt-cooker-repair-in-dubai-brandt-oven-repair-in-dubai-brandt-appliances-maintenance-in-dubai-brandt-refrigerator-fix-repairs-se/">Brandt</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/gibson-fridge-repair-in-dubai-gibson-washing-machine-repair-in-dubai-gibson-cooker-repair-in-dubai-gibson-oven-repair-in-dubai-gibson-appliances-maintenance-in-dubai-gibson-refrigerator-fix-repairs-se/">Gibson</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/gorenje-fridge-repair-in-dubai-gorenje-washing-machine-repair-in-dubai-gorenje-cooker-repair-in-dubai-gorenje-oven-repair-in-dubai-gorenje-appliances-maintenance-in-dubai-gorenje-refrigerator-fix-repa/">Gorenje</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/hisense-fridge-repair-in-dubai-hisense-washing-machine-repair-in-dubai-hisense-cooker-repair-in-dubai-hisense-oven-repair-in-dubai-hisense-appliances-maintenance-in-dubai-hisense-refrigerator-fix-repa/">Hisense</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/kelvinator-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Kelvinator</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/kenmore-appliances-service/">Kenmore</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/panasonic-fridge-repair-in-dubai-panasonic-washing-machine-repair-in-dubai-panasonic-cooker-repair-in-dubai-panasonic-oven-repair-in-dubai-panasonic-appliances-maintenance-in-dubai-panasonic-refrigera/">Panasonic</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/sanyo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Sanyo</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/sears-home-appliances-installation-maintenance-repair-fix-service-in-dubai/">Sears</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/wolf-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Wolf</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/haier-fridge-repair-in-dubai-haier-washing-machine-repair-in-dubai-haier-cooker-repair-in-dubai-haier-oven-repair-in-dubai-haier-appliances-maintenance-in-dubai-haier-refrigerator-fix-repairs-service/">Haier</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/elica-appliances-service/">Elica</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/marvel-fridge-repair-in-dubai-marvel-washing-machine-repair-in-dubai-marvel-cooker-repair-in-dubai-marvel-oven-repair-in-dubai-marvel-appliances-maintenance-in-dubai-marvel-refrigerator-fix-repairs-se/">Marvel</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/miele-fridge-repair-in-dubai-miele-washing-machine-repair-in-dubai-miele-cooker-repair-in-dubai-miele-oven-repair-in-dubai-miele-appliances-maintenance-in-dubai-miele-refrigerator-fix-repairs-service/">Miele</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/maytag-fridge-repair-in-dubai-maytag-washing-machine-repair-in-dubai-maytag-cooker-repair-in-dubai-maytag-oven-repair-in-dubai-maytag-appliances-maintenance-in-dubai-maytag-refrigerator-fix-repairs-se/">Maytag</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/toshiba-home-appliance-installation-maintenance-repair-fix-service-in-dubai-2/">Toshiba</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/thermador-appliances-service/">Thermador</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/sharp-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Sharp</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/admiral-fridge-repair-in-dubai-admiral-washing-machine-repair-in-dubai-admiral-cooker-repair-in-dubai-admiral-oven-repair-in-dubai-admiral-appliances-maintenance-in-dubai-admiral-refrigerator-fix-repa/">Admiral</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/aftron-fridge-repair-in-dubai-aftron-washing-machine-repair-in-dubai-aftron-cooker-repair-in-dubai-aftron-oven-repair-in-dubai-aftron-appliances-maintenance-in-dubai-aftron-refrigerator-fix-repairs-se/">Aftron</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/unimac-washing-machine-repair-in-dubai-unimac-dryer-repair-in-dubai-unimac-washer-dryer-repair-in-dubai-unimac-maintenance-in-dubai-unimac-laundry-service-in-dubai-unimac-dubai/">Unimac</Link>
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

        {/* Brands section */}
        {!isLoading && brandsLogo_data.length > 0 && (
          <BrandsSliderSection
            brandsData={brandsLogo_data}
            sectionId="home-brands"
            logoMaxHeight="60px"
            logoMaxWidth="120px"
            containerHeight="100px"
          />
        )}

        {/* Maintenance Contract */}
        <MaintenanceContract />
        {/* testimobial section */}
        {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg="img/testimonialbg.jpg"
            testimonialData={testimonial_data}
            sectionId="home-testimonials"
          />
        )}
        <BlogFridge />
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

      </div>


    </>
  );
};

export default RefrigeratorRepairInDubaiDetails;