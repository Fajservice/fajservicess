import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/AcData/AcFaqs/AcServiceInDubaiFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Serviceappointemnt from '../Contact/Serviceappointemnt';
import CallNowButton from '../Buttons/CallNowButton';
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import BenefitAcMaintenance from "../BenefitAcMaintenance/BenefitAcMaintenance";
import QuickGuide from "../QuickGuide/QuickGuide";
import ACWhyChooseUs from "../WhyChooseUS/ACWhyChooseUs";
import MaintenanceContract from "../MaintenanceContract/MaintenanceContract";
import BookingFormModal from '../BookingFormModal';
import { RxArrowTopRight } from 'react-icons/rx';
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import testimonial_data from '../../Data/AcData/AcTestimonial/AcServiceTestimonials.json';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import HeaderForm from "../Headeform/HeaderForm";
import Practicaltip from "../Common/Practicaltip";
import AcProperties from "../Common/AcProperties";
import FAJACPrice from "../Miscellaneous/FAJACPrice";
import GetQuoteButton from "../Buttons/GetQuoteButton";
import Blog2 from "../Blog/Blog2";
import Testimonial1 from "../Testimonial/Testimonial1";

const AcServiceInDubai = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "AC Service in Dubai - Get AC Repair & Maintenance | FAJ Co");
  const metadescription = String(description || "We specialize in AC repair, service, and central & split air conditioner maintenance in Dubai. Call at 043300002 for your home & office A/C fix");
  const metaAuthor = String(Author || "Faj Technical Services");
  const metaKeyword = String(Keyword || "AC Service, Air Con Service, AC Service in Dubai, Air Conditioning Service");
  const metaURL = String(URL || "https://www.fajservices.ae/ac-service-in-dubai/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/dist/img/What-is-covered-in-an-AC-Maintenance-Contract.avif");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = "img/testimonialbg.jpg"
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Ac Service in Dubai</h1>
            <p><p>Good-bye to sticky summer days, stuffy nights, and allergens. Welcome to year-round comfort, refreshing clean air, and improved sleep. Cool, right?<br /><a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876">F A J Technical Services L.L.C</a> has been in operation since 2010. Our dedicated facilities team has extensive experience in AC cleaning service, AC maintenance, AC repair, AC service near me, and AC installation of various residential and commercial air conditioning units in Dubai and Sharjah.</p></p>

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
          </div>
        </section>

        {/* Experts AC Service and Maintenance */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">

                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }} >Experts AC Service and Maintenance</h2>
                <p className="mb-1">When considering AC service in Dubai, it is vital to hire a qualified and reliable AC technician who can effectively address your needs at home or in your business place.</p>
                <p className="mb-1"><a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ Experts</a> in comprehensive air conditioning service near me, and AC fixing and AC cleaning service in Dubai, ensuring that you receive the highest quality care for your cooling systems.</p>
                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }} >Signs You Need An AC Service</h2>
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
                </div>

              </div>

              <div className="col-md-6 ">
                <img width={534}
                  height={324} className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/Experts-AC-Service-and-Maintenance.avif`} alt="Experts AC Service and Maintenance" loading="lazy" />

              </div>
            </div>

            <div className="appointment-col border-small-top pt-3">
              <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.<b /> <b />For technical inspection/callout fees, AC service near you, repair, or maintenance, please click below. To book an appointment, you can call or reach us on WhatsApp at +971 50 746 4712.</p>
              <div id="get-quote" className=" mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3">
                  <WhatsappIconButton />
                  <CallNowButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAJACPrice />

        {/* Why is AC Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">Why is AC Maintenance Service Important in Dubai?</h2>
            <p>Regular air conditioner (AC) maintenance service in Dubai is essential for optimal performance. FAJ offers comprehensive services to keep your system running efficiently. With our proactive approach, you can feel confident that AC is functioning at its best. If you need <a href="https://www.fajservices.ae/ac-maintenance-dubai/">AC maintenance</a> and air conditioning service near you, contact us.</p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/What-is-covered-in-an-AC-Maintenance-Contract.avif`} alt="Ac Maintenance in dubai" loading="lazy" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Extreme Weather: </strong> Experiences high temperatures over 40°C (104°F) in summer. Regular maintenance keeps air conditioner systems efficient during these conditions.</li>

                  <li> <strong> Energy Efficiency: </strong> A well-maintained AC unit operates more efficiently, using less energy and lowering both electricity bills.</li>

                  <li> <strong> Longevity of Equipment: </strong> Regular maintenance can extend your air condition unit’s lifespan, reducing the need for costly repairs and replacements, ultimately saving you money.</li>
                  <li> <strong> Improved Air Quality: </strong> Regular maintenance keeps dust and allergens from building up, ensuring cleaner air.</li>
                  <li> <strong> Enhanced Comfort: </strong> Regular <a href="https://www.youtube.com/watch?v=pkO_jobGdBo" className="fw-bold text-decoration-underline">AC servicing</a> in Dubai ensures comfort, efficiency, and consistent cooling daily.</li>

                </ul>
              </div>
            </div>
          </div>
        </section >

        {/* Common AC Problems That May Require Maintenance */}
        < section className="section cs_py_30" >
          <div className="container">
            <h2 className="text-center">Common AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Weak Airflow</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If you notice <a href="https://www.youtube.com/watch?v=qnByeIsc3lY"><b>reduced airflow</b></a> coming from your vents, it could indicate a problem with your AC system, such as a clogged filter or malfunctioning fan.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Warm Air</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your AC blows warm or room temperature air instead of cold, it could indicate compressor, refrigerant, or ductwork issues needing repair.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Unusual sounds like grinding, squealing, or banging coming from your AC unit can indicate mechanical problems that require attention.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Foul Odors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Musty or foul odors emanating from the vents could suggest mold or mildew growth within the system, which needs to be addressed quickly.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Frequent Cycling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">It may signal difficulty maintaining desired temperatures due to issues like dirty filters, low refrigerant levels, or a faulty thermostat.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">High Humidity Levels</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">An air conditioner that fails to adequately reduce indoor humidity levels may indicate issues with its cooling capacity or improper operation.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Water pooling around AC or dripping from vents could indicate blocked condensate drain, frozen coils, or other serious hidden issues.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Increased Energy Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">High energy bills without increase in usage could indicate the inefficiency of your AC due to dirty filters, duct leaks, or other problems.</p>
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
        </section >

        {/* A Quick Guide to Understanding and Fixing Your AC Problems */}
        < QuickGuide />

        {/* The Benefits Of Regular AC Service*/}
        < BenefitAcMaintenance />

        {/* Why choose us AC */}
        < ACWhyChooseUs />

        {/* We specialise in air conditioning services for the following brands */}
        < section className="section cs_py_30 bg-light-gray" >
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY AC REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 195 to 320 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month service warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h3>We specialise in air conditioning services for the following brands</h3>

            <ul className="mb-3">

              <li> <strong><a className='text-decoration-underline' href="https://www.fajservices.ae/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/">Daikin Air Conditioner Maintenance</a>: </strong> Daikin, a Japanese manufacturer, claims to be “the world’s number one air conditioning company.” Founded in 1924, it has developed a strong international presence through its focus on quality, innovation, and effective communication.
                <br />
                We work with Daikin air conditioning products because the company continuously invests in research and development. Count on our experienced team to promptly and effectively address any challenges you may encounter with your Daikin air conditioning unit. We specialize in AC cleaning service and Daikin AC repair in Dubai to ensure it operates at optimal functionality, providing you with a cool and comfortable environment when you need it most.
              </li>

              <li> <strong><a className='text-decoration-underline' href="https://www.fajservices.ae/gree-ac-repair-in-dubai/">Gree AC Repair Service and Maintenance</a>: </strong>  Gree Electric Appliances, Inc., founded in 1991 in Zhuhai, is a key player in the global air conditioning market. Starting with air conditioners, Gree has expanded its product line to include various home appliances and became China’s largest air conditioner manufacturer by 2000.
                <br />Is your air conditioning unit not functioning properly, or are you seeing a Gree AC error displayed on the screen? You don’t have to struggle with uncomfortable temperatures or stale air any longer. At FAJ, we specialise in quickly restoring your Gree air conditioning to optimal performance. Our reliable air conditioning repair and maintenance services ensure that your system operates efficiently and effectively, preventing any further damage and discomfort. Whether you need expert AC repair services, routine AC maintenance services, or comprehensive air conditioning services in Dubai, we’ve got you covered. Enjoy a refreshing and cool environment once again with our professional solutions!
              </li>

              <li> <strong><a className='text-decoration-underline' href="https://www.fajservices.ae/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/">O General AC Service and Repair</a>: </strong>
                O General, a brand of Fujitsu General, is renowned for its Japanese engineering and high-quality air conditioning solutions. Since its establishment in 1971, the company has expanded globally, especially in challenging climates like the Middle East, offering durable and energy-efficient air conditioners for residential and commercial use.
                <br />For air conditioning cleaning services in Dubai, specialized help is crucial for effectively managing aircon issues. Our company provides hassle-free AC repair and maintenance services, conveniently available in both Dubai and Sharjah. Trust us to keep your home comfortable all year round.

              </li>

              <li> <strong><a className='text-decoration-underline' href="https://www.fajservices.ae/mitsubishi-ac-repair-in-dubai/">Mitsubishi Air Conditioner Service and Repair</a>: </strong>Founded in 1954, Mitsubishi Air Conditioning has been producing air conditioning systems for nearly 75 years and is renowned for its reliability and energy efficiency.
                <br />Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai! Our expert Mitsubishi AC cleaning service and AC repair ensure your AC stays cool and efficient, providing comfort and peace of mind. Air conditioning cleaning service near me in Dubai and Sharjah, aircon fixing and ac maintenance service in Dubai
              </li>

              <li> <strong><a className='text-decoration-underline' href="https://www.fajservices.ae/samsung-ac-repair-in-dubai/">Samsung AC Repair and Service</a>: </strong>Samsung is a globally recognized name, known for pushing boundaries. Since 1969, they have continued to shape the future with innovative air conditioning technology and transformative ideas.
                <br />
                Based in Dubai, FAJ is your go-to destination for Samsung AC repair in Dubai. Specializing in Samsung air conditioner systems, we offer comprehensive AC servicing ranging from AC fixing to AC cleaning service and AC maintenance.
              </li>

              <li> <strong><a className='text-decoration-underline' href="https://www.fajservices.ae/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/">York AC Service and Repair</a>: </strong>YORK® has been an industry leader since our founding in 1874. In 1914, we created a revolutionary “air washing” system, which was the precursor to modern-day air conditioning. In 1924, the world’s first air-conditioned office building used YORK® equipment.
                <br />
                FAJ offers York AC repair and service, ensure you don’t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritised, providing air conditioning services near me, AC cleaning service, and AC fixing.
              </li>

              <li> <strong><a className='text-decoration-underline' href="https://www.fajservices.ae/lg-ac-repair-in-dubai/">LG AC Service and Repair</a>: </strong>GoldStar Co. Ltd. merged with Lak Hui Chemical Industrial Corp in 1983 to create Lucky-GoldStar, which was rebranded as LG in 1995.
                <br />
                LG’s history in air conditioning began in 1968 with the launch of its first unit. Today, LG provides some of the most cost-effective and energy-efficient commercial air conditioning systems available on the market.
                <br />                FAJ offers reliable LG AC repair and services in Dubai. With professionals who are experts in split, VRF, and central air conditioning units. Get reliable and fast AC service near me, AC repair, and AC maintenance in Dubai.
              </li>

              <li> <strong><a className='text-decoration-underline' href="https://www.fajservices.ae/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/">Trane HVAC Repair</a>: </strong>Trane developed its first air conditioning unit in 1931. In 1984, the company was acquired by American Standard Companies. In 2007, the company was restructured, and the remaining operations were renamed Trane. Shortly thereafter, in 2008, Trane was acquired by Ingersoll Rand.
                <br />With in-depth expertise in the repair of Trane air conditioning systems, we offer comprehensive AC cleaning services designed to ensure your unit operates at peak efficiency. Our specialized Trane AC maintenance and repair services are conveniently available in your area, providing timely and effective solutions to keep your air conditioning system running smoothly and reliably. Whether you need routine aircon maintenance or urgent repair, we are here to help you maintain a comfortable environment in your home or business.
              </li>

              <li> <strong>Carrier AC Repair and Service in Dubai: </strong>
                Since 1902, Carrier has cultivated a history of proven innovation in the heating, air-conditioning and refrigeration industries, enabling global comfort and efficiency.
                <br />We understand how essential Carrier air conditioning is for your home or business. FAJ provides fast and reliable Carrier air conditioner maintenance services that are both efficient and dependable. Typically, regular cleaning service of your Carrier VRF (Variable Refrigerant Flow), central, split, package unit, or cassette type units in Dubai and Sharjah is sufficient to keep your system running smoothly. However, if your Carrier air conditioning system experiences a breakdown, fault, or malfunction, it can negatively affect your indoor environment.
              </li>

              <li> <strong><a className='text-decoration-underline' href="https://www.fajservices.ae/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/">Panasonic AC Service and Repair</a>: </strong>
                Panasonic was established in 1918 by its founder, Konosuke Matsushita, and has been committed to the progress and development of society and the well-being of people through its business activities, thereby enhancing the quality of life throughout the world.
                <br />
                The following is an introduction to the footsteps Panasonic has taken, along with the thoughts of its founder. ​No matter the issue with your Panasonic air conditioner, our skilled technicians in Dubai and Sharjah can quickly diagnose and fix it. We offer reliable air conditioning services near me and AC repair right in your area, ensuring your system runs smoothly again.
              </li>

            </ul>
            <p className="mt-2 mb-0">
              <Link to="/rheem-ac-maintenance-in-dubai/">Rheem AC Service</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/">SKM AC Service Dubai</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="#">Carrier AC Service</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/">Lennox Air Conditioning Services</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/aftron-ac-repair-maintenance-service-in-dubai-2/">Aftron AC Maintenance Service Near Me</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/">Bryant AC Service Dubai</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/">Blue Star</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/supra-ac-repair-in-dubai-supra-ac-maintenance-in-dubai-supra-ac-fix-in-dubai-supra-ac-service-in-dubai-supra-air-condition-repair-in-dubai-supra-air-condition-maintenance-in-dubai-supra-air-condition/">Supra AC Service</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/toshiba-ac-repair-in-dubai-toshiba-ac-maintenance-in-dubai-toshiba-ac-fix-in-dubai-toshiba-ac-service-in-dubai-toshiba-air-condition-repair-in-dubai-toshiba-air-condition-maintenance-in-dubai-toshiba/">Toshiba AC Service</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/super-general-ac-repair-in-dubai-super-general-ac-maintenance-in-dubai-super-general-ac-fix-in-dubai-super-general-ac-service-in-dubai-super-general-air-condition-repair-in-dubai-super-general-air-con/">Super General AC Service</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/">O General Air Conditioning Service</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/cooline-ac-repair-in-dubai-cooline-ac-maintenance-in-dubai-cooline-ac-fix-in-dubai-cooline-ac-service-in-dubai-cooline-air-condition-repair-in-dubai-cooline-air-condition-maintenance-in-dubai-cooline/">Cooline Air Conditioner Service Near Me</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/sanyo-ac-repair-in-dubai-sanyo-ac-maintenance-in-dubai-sanyo-ac-fix-in-dubai-sanyo-ac-service-in-dubai-sanyo-air-condition-repair-in-dubai-sanyo-air-condition-maintenance-in-dubai-sanyo-air-condition/">Sanyo AC Service Dubai</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/crafft-ac-repair-in-dubai-crafft-ac-maintenance-in-dubai-crafft-ac-fix-in-dubai-crafft-ac-service-in-dubai-crafft-air-condition-repair-in-dubai-crafft-air-condition-maintenance-in-dubai-crafft-air-con/">Crafft AC Service</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/">Coleman AC Services</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/westpoint-ac-repair-in-dubai-westpoint-ac-maintenance-in-dubai-westpoint-ac-fix-in-dubai-westpoint-ac-service-in-dubai-west-point-air-condition-repair-in-dubai-west-point-air-condition-maintenance-in/">Westpoint AC Service</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/">McQuay Air Conditioning Service</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/midea-ac-installation-maintenance-repair-fix-service-in-dubai/">Midea Air Conditioner Service Near Me</Link>
              <span>&nbsp;-&nbsp;</span>


              <Link to="/goodman-ac-repair-in-dubai-goodman-ac-maintenance-in-dubai-goodman-ac-fix-in-dubai-goodman-ac-service-in-dubai-goodman-air-condition-repair-in-dubai-goodman-air-condition-maintenance-in-dubai-goodman/">Goodman AC Service Dubai</Link>
              <span>&nbsp;-&nbsp;</span>


              <Link to="/ruud-ac-repair-in-dubai-ruud-ac-maintenance-in-dubai-ruud-ac-fix-in-dubai-ruud-ac-service-in-dubai-ruud-air-condition-repair-in-dubai-ruud-air-condition-maintenance-in-dubai-ruud-air-condition-mainten/">Ruud Air Conditioner Service</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi/">Hitachi AC Service</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/">Whirlpool AC Service</Link>
              <span>&nbsp;-&nbsp;</span>

              <Link to="/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/">Daewoo AC Service Dubai</Link>

            </p>


            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton></GetQuoteButton>
                <CallNowButton></CallNowButton>
              </div>
            </div>

          </div>
        </section >

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
        <Blog2 />
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

export default AcServiceInDubai;