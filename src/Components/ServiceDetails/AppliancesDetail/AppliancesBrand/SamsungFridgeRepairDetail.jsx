import { useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
import data from '../../../../Data/AppliancesData/AppliancesFaqs/SamsungAppliancesFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import CallNowButton from "../../../Buttons/CallNowButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import 'swiper/swiper-bundle.css';
import testimonial_data from '../../../../Data/AppliancesData/AppliancesTestimonial/AppliancesTestimonials.json';
import loadBackgroudImages from "../../../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import HeaderForm from "../../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../../ApplianceCommons/AppliancesAppointmentCol";
import DaiganosisCharges from "../AppliancesLocation/ApplianceSpecialise/Daiganosischarges";
import Testimonial1 from "../../../Testimonial/Testimonial1";

const SamsungFridgeRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Samsung Fridge Repair Dubai - Washing Machine Service - FAJ ");
  const metadescription = String(description || "Looking for Samsung Fridge Repair in Dubai? Call 043300002 for quick Samsung washing machine repair, dryer, refrigerator, stove & dishwasher service ");
  const metaAuthor = String(Author || "Faj Technical Services");
  const metaImage = String(Image || "https://www.fajservices.ae/img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif");
  const metaKeyword = String(Keyword || "Samsung Fridge Repair Dubai, Samsung Washing Machine Repair Dubai, Samsung Dryer Repair Dubai, Samsung Dishwasher Repair Dubai, Samsung Stove Repair Dubai, Samsung Appliance Service Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/samsung-fridge-repair-in-dubai-samsung-washing-machine-repair-in-dubai-samsung-cooker-repair-in-dubai-samsung-oven-repair-in-dubai-samsung-appliances-maintenance-in-dubai-samsung-refrigerator-fix-repa/").replace(/\/?$/, '/');


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
            <h1 className="cs_fs_30">Samsung Home Appliance Repair Service and Installation</h1>
            {/* <h2>Professional Samsung Home Appliances Service and Repair</h2> */}
            <p>If you&apos;re searching for a knowledgeable local technician specializing in Samsung appliances, you’ve come to the right place. <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"><b>F A J Technical Services L.L.C</b></a> has been delivering dependable and cost-effective solutions since 2010. We offer a network of qualified and trusted professionals who are dedicated to understanding the unique requirements of Samsung appliance repair and near-me service.
              <br />
              Our primary goal is to connect you with a skilled Samsung technician in Dubai and Sharjah who is well-versed in the workings of Samsung appliances. Your satisfaction is our top priority! </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>

        {/* 2 cols */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h3 className="cs_fs_24 mb-1">Samsung Washing Machine Repair</h3>

                <p className="mb-2">
                  If you&apos;re experiencing issues with your Samsung appliances, our repair team is here to help! FAJ provides quick and affordable solutions for a range of problems, including Samsung washing machines that won’t drain, Samsung refrigerators that aren’t cooling, ovens that won’t heat, and Samsung dishwashers that won’t turn on.
                  <br />Get reliable Samsung appliance repair in Dubai and Sharjah; we provide trusted solutions for any appliance issue you may have.
                </p>

                <h3 className="cs_fs_20 mb-1 pt-3 border-small-top">Fast and Reliable Samsung Appliances Service
                </h3>
                <p className="mb-0">
                  At F A J Technical Services L.L.C, we understand that appliance breakdowns, especially with Samsung products, never occur at a convenient time. That’s why our trained and qualified Samsung technicians are here to offer you reliable <a href="https://www.fajservices.ae/appliances-repair-service/">appliance repair services</a>. With our assistance, you can avoid the cost of purchasing a new appliance and get your Samsung appliance up and running again before you have a chance to worry about it.
                </p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif`} loading="lazy" alt="Samsung Washing Machine Repair" />
              </div>
            </div>
            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>

        {/* Why */}
        <section className="section cs_py_30">
          <div className="container">

            <h3 className="cs_fs_30">Why is Samsung Appliance Maintenance Service Important in Dubai?</h3>
            <p className="">Our extensive repair services include diagnosis, repairs, installations, and maintenance. This positions us as the leading provider of Samsung appliance maintenance in Dubai.</p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/dishwasher-repair-service.avif`} loading="lazy" alt="Samsung Washing Machine Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li><strong>Samsung Washing Machine Repair in Dubai: </strong>Regular maintenance can prolong your Samsung washing machine's lifespan, saving you money.</li>
                  <li><strong>Samsung Fridge Repair in Dubai: </strong>We are confident that we can quickly get your Samsung refrigerator up and running again.</li>
                  <li><strong>Samsung Stove / Oven Repair in Dubai: </strong>Catching minor issues early can help prevent them from escalating into expensive repairs.</li>
                  <li><strong>Samsung Dishwasher Repair in Dubai: </strong>Regular maintenance helps minimise potential problems and improves overall performance.</li>
                  <li><strong>Early Problem Detection: </strong>Regular inspections can help identify potential problems before they escalate into serious issues.</li>
                  <li><strong>Cost-Effective: </strong>Maintaining appliances is more cost-effective than replacing or making major repairs, ensuring safety and efficiency in Dubai.</li>
                  <li><strong>Energy Efficiency: </strong>Regular maintenance of your Samsung appliances can enhance efficiency and save you money.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">The Most Common Problems with Samsung Appliances</h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Samsung Refrigerator</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Samsung refrigerator may have cooling problems, usually related to the defrost , motor, compressor, or PCB. Let's reach out to FAJ for potential solutions.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Samsung Dishwasher</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Common issues with Samsung dishwasher include poor cleaning and drying, water leaks, drainage issues, and a few electrical or PCB malfunctions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Samsung Washing Machine
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Samsung washing machines include problems with drainage, leaks, faulty PCBs, and issues related to the belt, door switch, or drum spinning.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Samsung Tumble Dryer</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Samsung dryer may stop spinning and make unusual noises without properly drying clothes, often due to a faulty heating element or control board.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Samsung Cooker / Stove</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Common issues with Samsung stove include uneven heating and flame problems, such as a broken burner element, a faulty switch, or an electrical gas malfunction.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Samsung Oven</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Samsung ovens often experience issues such as improper heating, unignited burners, ignition problems in gas models, and faulty knobs or controls.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Samsung Freezer</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Common issues with Samsung freezer include water leaks, insufficient ice production, malfunctioning ice makers, and decreased cooling efficiency.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Machine Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Water flow in coffee makers, whether drip or single-serve, can often become unusually slow or stop entirely due to several possible reasons.</p>
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
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR SAMSUNG APPLIANCES</h3>

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
                <p className='mb-0'>We specialize in all types of Samsung appliances, including built-in models.
                  <br />
                  <strong>Our services include:</strong>
                </p>

                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li><strong>Samsung Appliance Installation: </strong>Expert installation of various types and brands of Samsung home appliances to ensure their optimal performance and efficiency.</li>
                  <li><strong>Samsung Appliance Diagnostics: </strong>We offer expert diagnostics and eligibility assessments, along with detailed quotes for issues related to Samsung appliances.</li>
                  <li><strong>Samsung Appliance Repair Service: </strong>We offer fast and effective repair service for Samsung appliances, quickly addressing leaks, electrical issues, and malfunctions. Contact us for details about specific services or any questions you may have!</li>
                  <li><strong>Samsung Appliance Annual Maintenance Contract: </strong>This contract outlines the terms for the annual maintenance of your Samsung appliances, ensuring they function smoothly throughout the year. Enjoy peace of mind with professional care.</li>
                </ul>
                <p className="mb-0"><a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for keeping your Samsung home appliances operating efficiently, performing well, and lasting longer.</p>
              </div>

            </div>
          </div>
        </section >

        {/* Benefits */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h3 className="cs_fs_30 mb-0">The Benefits of Samsung appliances Service In Dubai</h3>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.png`} loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Ensuring Safety</h3>
                      <p className="small">Regular inspections are essential for preventing electrical faults, gas leaks, and other hazards, which ensures the safety of your premises.</p>
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
                      <p className="small">Regular maintenance helps your Samsung appliances run smoothly and efficiently, delivering the best results every time.
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
                      <p className="small">Energy-efficient Samsung appliances help you save on utility bills, allowing you to keep more money in your pocket each month.</p>
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
                      <p className="small">Preventive services help identify issues early, reducing breakdowns and repairs while enhancing the lifespan of Samsung appliances.</p>
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
                      <p className="small">Regular maintenance and prompt servicing can significantly prolong the lifespan of your Samsung appliances, delaying the need for replacements.</p>

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
                      <p className="small">Keeping your Samsung appliances in good working order enhances your confidence and minimizes the stress of unexpected breakdowns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* CHOOSE US  */}
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
                    <p>You can count on quick service! Our same-day repairs and next-day service visits ensure your needs are met promptly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} loading="lazy" alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get year-round service to keep your Samsung appliance running smoothly and reliably.
                    </p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Schedule a day and time for your Samsung appliance repair in Dubai or Sharjah, allowing a 3-4 hour window for the technician's arrival.</p>
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
                    <p>We specialize in Samsung appliance repair, which is why major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} loading="lazy" alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation up to two Samsung appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled technicians specialise in Samsung appliances and provide outstanding service across major appliances.</p>
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

        {/* We specialise  */}
        < section className="section cs_py_30 bg-light-gray mb-5" >
          <div className="container">
            <DaiganosisCharges
              appliancebrand="Samsung Appliance"
              feeRange="ranging from AED 157 to 280"
            />
            <h3>We specialise in Samsung appliance services of the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"><strong>Samsung Washing Machine Repair Near You in Dubai: </strong>FAJ is here to support you when issues arise. We understand that your Samsung washing machine is vital for daily life, ensuring your laundry stays clean. Contact us for the best Samsung washing machine service center near me in Dubai.</p>
                <p className="mb-0"><strong>Samsung Fridge Repair Near You in Dubai</strong>: If you are having problems with your Samsung refrigerator, please contact the FAJ team for same-day Samsung refrigerator repair service in Dubai.</p>
                <p className="mb-0"><strong>Samsung Freezer Repair Near You in Dubai</strong>: Our team of qualified technicians is available for Samsung freezer repair and service in Dubai and Sharjah.</p>
                <p className="mb-0"><strong>Samsung Home Appliance Service Center Near You</strong>: If you are seeking the best repair service Samsung washer dryer in Dubai, FAJ is an excellent choice. They are well-known for their exceptional service in repairing Samsung fridge freezer and are recognized as the leading provider for repairs of fix Samsung cooking range, stove fixes, induction cooktops, repair Samsung washing machines, and Samsung refrigerator in the area.</p>
                <p className="mb-0"><strong>Samsung Dishwasher Repair Near You in Dubai</strong>: If you&apos;re experiencing issues with your Samsung dishwasher, it might be time for some repair or maintenance. For reliable and top-notch service, consider FAJ's Samsung service center in Dubai, which specializes in integrated Samsung dishwasher repairs. They offer expert assistance to ensure your appliance functions optimally.</p>
                <p className="mb-0"><strong>Samsung Cooking Range and Oven Repair Near You:</strong> We provide expert repair service Samsung cooking range and ovens in Dubai. Our skilled technicians are experienced in diagnosing and fixing issues with Samsung refrigerator repair, fix Samsung dishwasher, Samsung dryer fixer, and more.</p>
                <p className="mb-0"><strong>Samsung Dryer Repair and Service Near You:</strong> Is your Samsung dryer not working properly? Looking for a reliable Samsung dryer service in Dubai? Contact us for same-day assistance!</p>
                <p><strong>Samsung Oven Repair Near Me Dubai: </strong>If you&apos;re searching for the best company for Samsung oven repair in Dubai, FAJ is an excellent choice. They are renowned for providing exceptional service specifically for Samsung ovens. FAJ is recognized as the leading service center for Samsung oven repair and maintenance in Dubai.</p>
              </div>

            </div>

            <h4 className="mt-3">We offer service for Samsung appliances in the Dubai area</h4>
            <p><a href="https://www.fajservices.ae/appliances-services-in-business-bay/">Business Bay</a> | <a href="https://www.fajservices.ae/appliances-services-in-dubai-marina/">Dubai Marina</a> | <a href="https://www.fajservices.ae/appliances-services-in-palm-jumeirah/">Palm Jumeirah</a> | <a href="https://www.fajservices.ae/appliances-services-in-dubai-hills-estate/">Dubai Hills Estate</a> | <a href="https://www.fajservices.ae/appliances-services-in-damac-hills/">Damac Hills</a> | <a href="https://www.fajservices.ae/appliances-services-in-al-barari/">Al Barari</a> | <a href="https://www.fajservices.ae/appliances-services-in-al-barsha/">Al Barsha</a> | <a href="https://www.fajservices.ae/appliances-services-in-al-safa/">Al Safa</a> | <a href="https://www.fajservices.ae/appliances-services-in-arabian-ranches/">Arabian Ranches</a> | <a href="https://www.fajservices.ae/appliances-services-in-dubai-silicon-oasis/">Dubai Silicon Oasis</a> | <a href="https://www.fajservices.ae/appliances-services-in-dubai-investments-park/">Dubai Investments Park</a> | <a href="https://www.fajservices.ae/appliances-services-in-dip/">DIP</a> | <a href="https://www.fajservices.ae/appliances-services-in-dubai-production-city/">Dubai Production City</a> | <a href="https://www.fajservices.ae/appliances-services-in-impzy/">IMPZ</a> | <a href="https://www.fajservices.ae/appliances-services-in-dubai-sports-city/">Dubai Sports City</a> | <a href="https://www.fajservices.ae/appliances-services-in-dubai-studio-city/">Dubai Studio City</a> | <a href="https://www.fajservices.ae/appliances-services-in-jbr/">JBR</a> | <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-beach-residence/">Jumeirah Beach Residence</a> | <a href="https://www.fajservices.ae/appliances-services-in-jlt/">JLT</a> | <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-lake-towers/">Jumeirah Lake Towers</a> | <a href="https://www.fajservices.ae/appliances-services-in-jvc/">JVC</a> | <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-village-circle/">Jumeirah Village Circle</a> | <a href="https://www.fajservices.ae/appliances-services-in-jvt/">JVT</a> | <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-village-triangle/">Jumeirah Village Triangle</a> | <a href="https://www.fajservices.ae/appliances-services-in-jebel-ali-village/">Jebel Ali Village</a> | <a href="https://www.fajservices.ae/appliances-services-in-jumeirah/">Jumeirah</a> | <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-golf-estates/">Jumeirah Golf Estates</a> | <a href="https://www.fajservices.ae/appliances-services-in-the-meadows/">Meadows</a> | <a href="https://www.fajservices.ae/appliances-services-in-dubai-motor-city/">Motor City</a> | <a href="https://www.fajservices.ae/appliances-services-in-town-square/">Town Square</a> | <a href="https://www.fajservices.ae/ac-services-in-emirates-hills/">Emirates Hills</a> | <a href="https://www.fajservices.ae/appliances-services-in-umm-suqeim/">Umm Suqeim</a></p>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>

          </div>
        </section >

        {/* Maintenance Contract */}
        < MaintenanceContract />

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
                    <p className="mb-0"
                      dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }}
                    ></p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section >

        {/* contact */}
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

export default SamsungFridgeRepairDetail
