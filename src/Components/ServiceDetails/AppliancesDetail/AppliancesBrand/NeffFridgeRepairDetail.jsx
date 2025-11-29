import { useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
import data from '../../../../Data/AppliancesData/AppliancesFaqs/AppliancesFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import 'swiper/swiper-bundle.css';
import testimonial_data from '../../../../Data/AppliancesData/AppliancesTestimonial/AppliancesTestimonials.json';
import loadBackgroudImages from "../../../Common/loadBackgroudImages";
import parse from 'html-react-parser';
import HeaderForm from "../../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../../ApplianceCommons/AppliancesAppointmentCol";
import GetQuoteButton from '../../../Buttons/GetQuoteButton';
import CallNowButton from '../../../Buttons/CallNowButton';
import DaiganosisCharges from "../AppliancesLocation/ApplianceSpecialise/Daiganosischarges";
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";

const NeffFridgeRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "Neff Fridge Repair in Dubai | Neff Dishwasher Service | Oven Fix");
  const metadescription = String(description || "FAJ offer Neff fridge repair in Dubai. And expert in washing machine, dryer, dishwasher, oven & stove, cooker service at our center nearby Dubai");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaImage = String(Image || "https://www.fajservices.ae/img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif");
  const metaKeyword = String(Keyword || "Neff Fridge Repair, Neff Washing Machine Repair, Neff Cooker Repair, Neff Oven Repair, Neff Appliances Maintenance, Neff Refrigerator Fix, Neff Dishwasher Service");
  const metaURL = String(URL || "https://www.fajservices.ae/neff-fridge-repair-in-dubai-neff-washing-machine-repair-in-dubai-neff-cooker-repair-in-dubai-neff-oven-repair-in-dubai-neff-appliances-maintenance-in-dubai-neff-refrigerator-fix-repairs-service-in-dub/").replace(/\/?$/, '/');

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
            <h1 className="cs_fs_30">Neff Fridge Repair and Neff Dishwasher Service in Dubai</h1>
            <p>
              Having difficulty finding a local Neff appliance technician with expertise in Neff kitchen appliances? At <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876">FAJ Technical Services L.L.C</a>, we've been providing reliable and affordable repair services since 2010. Our broad network of thoroughly vetted, experienced professionals ensures that, whenever possible, we dispatch a technician who knows your specific Neff appliance inside and out.
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
                <h2 className="cs_fs_24 mb-1">Neff Washing Machine Repair Near You</h2>
                <p className="mb-2">
                  Looking for reliable repair services for your Neff appliances? FAJ is here to help with fast and affordable solutions.
                  Whether it’s a built-in Neff washing machine that won’t drain, a fridge that isn’t cooling, an oven that won’t heat, or a dishwasher that won’t start, our skilled technicians in Dubai and Sharjah are ready to assist.
                  As your trusted local service provider, we ensure prompt responses to get your appliances back up and running smoothly.


                </p>

                <h2 className="cs_fs_20 mb-1 pt-3 border-small-top">Fast and Reliable Neff Appliances Service</h2>
                <p className="mb-2">
                  At FAJ Technical Services L.L.C, we understand that appliance breakdowns, especially with Neff products, never occur at a convenient time. That’s why our trained and qualified Neff technicians are here to offer you reliable <a href="https://www.fajservices.ae/appliances-repair-service/">appliances repair services</a>. With our assistance, you can avoid the cost of purchasing a new appliance and get your Neff appliance up and running again before you have a chance to worry about it.
                </p>

              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif`} loading="lazy" alt="Neff Washing Machine Repair" />
              </div>
            </div>
            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>

        {/* Why is Appliance Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30">
          <div className="container">

            <h3 className="cs_fs_30">Why is Neff Appliance Maintenance Service Important in Dubai?</h3>
            <p className="mb-0">
              Our comprehensive repair services encompass diagnosis, repairs, installations, and maintenance. This is why we are the leading provider of Neff appliance maintenance in Dubai.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/dishwasher-repair-service.avif`} loading="lazy" alt="Neff Washing Machine Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Neff Washing Machine Repair in Dubai: </strong> Regular maintenance can extend the lifespan of your washing machine, ultimately saving you money on replacement costs. </li>
                  <li> <strong> Neff Fridge Repair in Dubai: </strong> We are fully confident that we can get your Neff refrigerator running again in no time. </li>
                  <li> <strong> Neff Stove / Oven Repair in Dubai: </strong> Identifying minor issues early helps prevent them from developing into costly repairs. </li>
                  <li> <strong> Neff Dishwasher Repair in Dubai: </strong> Consistent maintenance helps reduce potential issues and enhances overall performance. </li>
                  <li> <strong> Early Problem Detection: </strong> Routine checks help identify potential issues before they become serious. </li>
                  <li> <strong> Cost-Effective: </strong> Maintaining appliances is cheaper than replacements or major repairs, making it smart choice for safety and efficiency in Dubai. </li>
                  <li> <strong> Energy Efficiency: </strong> Regular maintenance of your Neff appliances can improve their efficiency and help you save money. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">The Most Common Problems with Neff Appliances </h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Neff Refrigerator</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Common malfunctions of Neff refrigerators often involve cooling issues, such as problems with the defrost, fan motor, compressor, or coils.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Neff Dishwasher</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Common issues with Neff dishwasher include poor cleaning and drying, water leaks, drainage problems, and occasional electrical or PCB failures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Neff Washing Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Neff washing machines include drainage problems, leaks, faulty PCBs, and issues with the belt, door switch, or drum spinning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Neff Tumble Dryer</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Neff dryers may stop spinning and make noise while failing to dry clothes. Common issues include a faulty heating element or control board.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Neff Cooker / Stove</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Common issues with Neff stoves include uneven heating and flame problems, such as a broken burner element, faulty switch, or an electric gas malfunction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Neff Oven</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Neff ovens often have issues like improper heating, unignited burners, ignition problems in gas models, and faulty knobs or controls.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Neff Freezer</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Common Neff freezer include frequent water leaks, consistently low ice production, a faulty ice maker, and noticeably reduced cooling efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Machine Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      There are several possible reasons why water flow in coffee makers, whether drip or single-serve, is often unusually slow or completely absent.
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
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR Neff APPLIANCES</h2>

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
                <p className='mb-0'>We specialise in all types of Neff appliances, including built-in Neff appliances.</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Neff Appliance Installation: </strong> Professional installation of various types of Neff home appliances ensures optimal performance and efficiency. </li>
                  <li> <strong> Neff Appliance Diagnostics: </strong> We provide expert diagnostics and eligibility assessments, along with detailed quotes for Neff appliance issues. </li>
                  <li> <strong> Neff Appliance Repair Service: </strong> We provide fast and effective repair services for Neff appliances, quickly addressing leaks, electrical issues, and malfunctions. Contact us for details on specific services or any questions you may have! </li>
                  <li> <strong> Neff Appliance Annual Maintenance Contract: </strong> This contract details the terms for annual maintenance of your Neff appliances, ensuring they operate smoothly all year. Enjoy peace of mind with expert care. </li>
                </ul>
                <p className="mb-0">
                  <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a>  is crucial for ensuring your Neff home appliances perform optimally, run efficiently, and last longer.
                </p>
              </div>

            </div>
          </div>
        </section >

        {/* The Benefits Of appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">The Benefits of Neff Appliances Service Dubai</h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.png`} loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Ensuring Safety</h3>
                      <p className="small">
                        Regular inspections are vital for preventing electrical faults, gas leaks, and other hazards, ensuring the safety of your premises.
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
                        Regular maintenance helps your Neff appliances run smoothly and efficiently, delivering the best results every time.
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
                        Energy-efficient Neff appliances lead to monthly savings on utility bills, allowing you to keep more money in your pocket.
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
                        Preventive services identify issues early, minimizing breakdowns and repairs while extending the lifespan of Neff appliances.
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
                        Proper maintenance and timely servicing can greatly extend the lifespan of your Neff appliances, postponing the need for replacements.
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
                      <h3 className="text-uppercase mb-2 cs_fs_18">Peace of Mind</h3>
                      <p className="small">
                        Ensuring your Neff appliances are functioning well boosts your confidence and reduces the stress of unexpected failures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    <p>You can rely on prompt service! Our same-day repairs or next-day service visits ensure your needs are addressed swiftly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} loading="lazy" alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>,  you get year-round service to keep your Neff appliance running smoothly and reliably.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your Neff appliance repair in Dubai or Sharjah, allowing a 3-4 hour window for our technician's arrival.</p>
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
                    <p> We are specialists in Neff appliance repair, which is why major brands trust us to manage their service and maintenance.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} loading="lazy" alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation up to two Neff appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} loading="lazy" alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled technicians specialise in Neff appliances and provide outstanding service across major appliances.</p>
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
              appliancebrand="Neff Appliance"
              feeRange="ranging from AED 157 to 280"
            />
            <h3>We specialize in Neff appliance services of the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"> <b> Neff Washing Machine Repair Near You in Dubai: </b>  FAJ is here to support you when things go wrong. We understand that your Neff washing machine is essential for daily life, keeping your laundry clean.</p>
                <p className="mb-0"> <b> Neff Fridge Repair Near You in Dubai: </b> If you are experiencing issues with your Neff refrigerator, please contact the FAJ team for same-day Neff <a href="https://www.fajservices.ae/refrigerator-repair-service/">refrigerator repair</a> service in Dubai.</p>
                <p className="mb-0"> <b> Neff Freezer Repair Near You in Dubai: </b> For Neff freezer repair and service in Dubai and Sharjah, our team of qualified technicians is available. </p>
                <p className="mb-0"> <b> Neff Home Appliance Service Center Near You: </b> If you are looking for the best repair service for Neff washer dryer in Dubai, FAJ is an excellent choice.
                  They are renowned for their outstanding service in repairing Neff fridge freezer and are recognized as the leading provider for the repair of Neff cooking ranges, stove fixes, induction, cooktop fixes, washing machines repair, and refrigerator repairs in the area.
                </p>
                <p className="mb-0"> <b> Neff Dishwasher Repair Near You in Dubai: </b> Your Neff dishwasher may need repair or maintenance. For high-quality integrated Neff <a href="https://www.fajservices.ae/dishwasher-repair-service/">dishwasher repair</a> and service center in Dubai, rely on FAJ.</p>
                <p className="mb-0"> <b> Neff Cooking Range and Oven Repair Near You: </b> We offer expert repair services for Neff cooking ranges and ovens in Dubai. Our skilled technicians are knowledgeable and experienced in diagnosing and fixing issues with Neff refrigerators, dishwashers, dryers, and more. </p>
                <p className="mb-0"> <b> Neff Dryer Repair and Service Near You: </b> Are you worried about your Neff dryer not working properly? Looking for a reliable Neff laundry machine company in Dubai? Contact us for same-day service!</p>
                <p className="mb-0"> <b> Neff Oven Repair Near Me Dubai: </b>  If you are looking for the best company for Neff oven repairs in Dubai, FAJ is the perfect choice. They are well-known for providing exceptional service for Neff <a href="https://www.fajservices.ae/oven-repair-service/">oven repairs</a>. FAJ is recognized as the leading service center for Neff ovens in the area.</p>

                <h4 className="mt-3">We offer service for Neff appliances in the Dubai area</h4>
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
  )
}

export default NeffFridgeRepairDetail;
