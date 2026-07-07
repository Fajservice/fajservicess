import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";

import loadBackgroudImages from "../../../Common/loadBackgroudImages";
import HeaderForm from "../../../Headeform/HeaderForm";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import LocationKeyword from "./LocationKeyword";
import Testimonial1 from "../../../Testimonial/Testimonial1";
import PriceCard from "./PriceCard";
import AcBenefits from "../AcBenefit";
import Gallery from "../../../Svg/Gallery";
import BeforeAfter from "../../../BeforeAfter/BeforeAfter";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  let variant = 'mobile';
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    const realWidth = width;
    if (realWidth > 1200) {
      variant = 'large';
    } else if (realWidth > 768) {
      variant = 'desktop';
    } else if (realWidth > 480) {
      variant = 'tablet';
    } else {
      variant = 'mobile';
    }
  }
  return `${CDN}/${imgPath}/${variant}`;
};
const AcRepairInBurDubaiDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "Top Split & Window AC Repair Service in Bur Dubai with Low Cost");
  const metadescription = String(description || "Book the best and fastest AC repair and maintenance services in Bur Dubai. Call us at 043300002 for window and split AC servicing near you in Dubai");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "AC Repair in Bur Dubai, AC Service in Bur Dubai, Air Conditioning Service in Bur Dubai, AC Maintenance in Bur Dubai, AC Installation in Bur Dubai, Split AC Service in Bur Dubai, Window AC Service in Bur Dubai, Air Conditioner Repair in Bur Dubai, Air Conditioner Service in Bur Dubai, Air Conditioner Maintenance in Bur Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/bur-dubai/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Experts-AC-Service-and-Maintenance/public");
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
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcLocation/AcRepairInBurDubai.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/AcServiceTestimonials.json`)
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

        </Helmet>
      </HelmetProvider>
      <HeaderForm />
      <div className="cs_service_details">

        <section className="section cs_py_30 bg-light-white">
          <div className="container">
            <h1 className="cs_fs_30">Top-Rated Air Conditioner Repair and Maintenance in Bur Dubai | AC Service Near Me</h1>
            <p>Say goodbye to hot rooms, sticky summer days, and poor air quality. Welcome to cool comfort, fresh air, and better sleep all year round.<br />
              <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7"><b>FAJ Technical Services L.L.C</b></a> has been serving Dubai since 2010. We provide trusted <a href="https://www.youtube.com/watch?v=pkO_jobGdBo"><b>AC service</b></a>, AC cleaning service, and AC installation in Bur Dubai and nearby areas.</p>
            <p>Our expert team handles both home AC and commercial AC systems with fast response and professional service.</p>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>

        <PriceCard />

        {/* Experts AC Service and Maintenance */}
        <section className="section cs_py_30 bg-light-white">
          <div className="container">
            <div className="row gx-md-5 expert_section_wrapper">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 text-align-left">Who provides the best AC repair services in Bur Dubai?</h2>
                <p className="mb-2">Looking for air conditioner repair near you in Bur Dubai? FAJ Technical Services L.L.C provides AC solutions for homes, apartments, villas, offices, shops, restaurants and commercial properties in Dubai and the UAE. Our experienced technicians can fix all types of air conditioning systems from repairs to complete installations.</p>
                <p>We provide our services with clear prices and good work in Bur Dubai and nearby areas. We are available to help you with your AC issues and fix ACs in places, including homes and offices. We provide both residential and <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/">commercial AC maintenance</a> in Dubai.</p>
                <h2 className="cs_fs_24 text-align-left">Which signs show the AC needs service?</h2>
                <p className="mb-2">If you notice any of these signs, you must contact an expert technician who can repair your AC professionally. We are here to assist your AC cooling system in achieving optimal efficiency.</p>
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
                <img className="bordered-img ac-bordered-img w-100" src={getImageSrc('Best-AC-Repair-Service')} alt="Best AC Repair Service in Bur Dubai" />
              </div>
            </div>

            <div className="appointment-col border-small-top pt-3">

              <div id="get-quote" className=" mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                  <WhatsappIconButton />
                  <CallNowButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AC Price Section */}
        <FAJACPrice></FAJACPrice>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5 expert_section_wrapper">
              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('Experts-AC-Service-and-Maintenance')} alt="AC Repair in Bur Dubai" />
              </div>
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 text-align-left">Why Is My AC Not Cooling?</h2>
                <p className="mb-2">
                  A cooling problem is one of the most common AC problems in Dubai. In case you notice your AC is running but not cooling properly, there are several factors that may be responsible.</p>
                <b>Common causes include:</b>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Dirty air filters</li>
                      <li>Low refrigerant gas</li>
                      <li>Blocked condenser coils</li>
                      <li>Faulty thermostat</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Compressor problems</li>
                      <li>Electrical faults</li>
                      <li>Restricted airflow</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <p className="mb-0">
                      A professional AC inspection can identify the exact cause and prevent further damage to the system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Air Conditioning Services in Bur Dubai */}
        <section className="section cs_py_30 bg-light-white">
          <div className="container">
            <h2 className="text-center">Professional Air Conditioning Services in Bur Dubai</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-4">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">AC Repair Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Our experts' AC cleaning removes dust, dirt, mold and debris from filters, coils and drainage systems. Regular cleaning improves cooling performance, like indoor air quality. It helps your AC run more efficiently and save energy.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">AC Maintenance Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Routine maintenance helps prevent sudden breakdowns. It reduces electricity bills. It also extends the life of your AC system. Your AC runs better in extreme Dubai heat with regular service.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">AC Installation Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We provide expert installation for all AC systems. This includes Window AC, Split AC, Central AC, Ducted Split AC, Package Units, FCUs, and commercial systems. We follow manufacturer guidelines for safe installation. This ensures proper cooling and long-term performance.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Annual Maintenance Contract (AMC)</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Our AMC plans include regular inspections. They also include preventive maintenance and priority support. We provide scheduled servicing throughout the year. It helps you avoid unexpected repair costs.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Annual Maintenance Agreement</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Flexible maintenance agreements are available for residential and commercial properties seeking long-term AC care and reliable performance.</p>
                  </div>
                </div>
              </div>

            </div>
            <div id="get-quote" className="mb-0 mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        {/* Why is AC Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">Why is AC Maintenance Service Important in Bur Dubai?</h2>
            <p>
              Regular air conditioner (AC) maintenance service in Bur Dubai is essential for optimal performance. FAJ Technical Services L.L.C offers comprehensive services to keep your system running efficiently. With our proactive approach, you can feel confident that AC is functioning at its best. If you need AC maintenance near you in Bur Dubai, contact us.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('What-is-covered-in-an-AC-Maintenance-Contract')} alt="Air Conditioning Service in Bur Dubai" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Extreme Weather: </strong> The temperature gets very hot in summer over 40°C. We need to take care of our air conditioners so they work properly when it is this hot.</li>
                  <li> <strong> Energy Efficiency: </strong> If we take care of our air conditioner it will use less energy and our electricity bills will be lower.</li>
                  <li> <strong> Longevity of Equipment: </strong> Taking care of our air conditioner will make it last longer so we will not have to spend a lot of money to fix it or buy a new one.</li>
                  <li> <strong> Improved Air Quality: </strong> Regular maintenance helps keep our air clean by removing dust and things that can make us sick.</li>
                  <li> <strong> Enhanced Comfort: </strong> The air conditioning service in Bur Dubai makes sure our air conditioners are clean and work well every day so we can be comfortable.</li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common AC Problems That May Require Maintenance */}
        <section className="section cs_py_30 bg-light-white">
          <div className="container">
            <h2 className="text-center">Most Common AC Problems </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Weak Airflow</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you feel that the air coming from your vents is not strong it could be a problem with your air conditioner system, like a filter or a fan that is not working properly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Warm Air</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Whether your air conditioner is blowing air that's not cold it could be a problem with the compressor, the refrigerant, or the ducts.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If you hear sounds like grinding, squealing or banging coming from your air conditioner it could mean that something is wrong with the machine and it needs to be fixed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Foul Odors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">In case you smell something musty coming from the vents it could be because of mold or mildew growing inside the system and you need to take care of it fast.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Frequent Cycling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your air conditioner keeps turning on and off it might be because it is having trouble keeping the temperature right, maybe because the filter is dirty, the refrigerant is low or the thermostat is not working.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">High Humidity Levels</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">In case your air conditioner is not making the air feel less humid it could be because it is not working properly or it cannot cool well.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If you see water around your air conditioner or coming from the vents it could be because the drain is blocked, the coils are frozen or something else is wrong.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Increased Energy Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">High energy bills without an increase in usage could indicate the inefficiency of your AC due to dirty filters, duct leaks, or other problems.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="get-quote" className="mb-0 mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>


        {/* HERE ARE THE */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">Emergency AC Repair Service in Bur Dubai</h2>
            <div className="row">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/sxBhB1_gxYA?si=96yf5hxyAA3bct8w"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-xl-6">
                <p>A sudden AC breakdown can affect comfort, productivity, and indoor air quality.</p>
                <p className='mb-0'><strong>Our emergency AC repair service can help with:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-1">
                  <li>AC not cooling</li>
                  <li>AC not turning on</li>
                  <li>Water leakage</li>
                  <li>Electrical faults</li>
                  <li>Thermostat issues</li>
                  <li>Compressor failures</li>
                  <li>Weak airflow</li>
                  <li>Unusual noises</li>
                </ul>
                <p className='mb-0'>We provide fast assistance for residential and commercial customers throughout Bur Dubai and nearby areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Benefits Of Regular AC Service*/}
        <AcBenefits city="Bur Dubai" />

        {/* Why choose us AC */}
        <section className="section cs_py_30 bg-light-white">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')} alt="Fast, Reliable Service" />
                  </div>
                  <div className="usptext">
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly. </p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>With <a href="/services/air-conditioning-repair/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your AC repair near me, Bur Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive
                    </p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">

                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('ACServicescomponent-New')} alt="Ac Maintenance Services" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We are experts in AC service in Bur Dubai. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our <a href="https://www.facebook.com/acrepairservices"><b>skilled AC technicians</b></a> are highly trained, and we provide excellent service for a variety of major AC brands efficiently.
                    </p>
                  </div>
                </div>
              </div>


            </div>
            {/* <!-- Delimit mobile --> */}
            <div className="col-12 uspdelimit w-100 text-center d-block d-none-1199 Xd-xl-none">
              <img className="blue-border-2 w-100" src={getImageSrc('ACServicescomponent-New')} alt="Ac Maintenance Services" />
            </div>
          </div>
        </section>

        <BeforeAfter
          title="Recent Completed Projects"
          subTitle="Before & after"
          beforeImg={`${CDN}/after_img_1/public`}
          afterTitle="After"
          afterImg={`${CDN}/before_img_1/public`}
          beforeTitle="Before"
        />
        {/* We Specialise in All Types of AC Systems */}

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_24 text-align-left">We Specialise in All Types of AC Systems</h2>
            <p>
              At FAJ Technical Services L.L.C we repair and maintain all major air conditioning systems across Bur Dubai. Our technicians handle every unit with care to make sure you get smooth cooling and reliable performance.
            </p>
            <p><strong>Window AC:</strong> We provide fast repair and servicing for Window AC units, fixing common cooling and airflow issues.</p>
            <p><strong>Split AC:</strong> Our team handles Split AC repair, cleaning, and maintenance for homes and offices with quick response service.</p>
            <p><strong>Central AC:</strong> FAJ Technical Services L.L.C offers complete Central AC maintenance and repair for buildings to ensure even and efficient cooling.</p>
            <p><strong>Chiller AC:</strong> We service Chiller AC systems used in large buildings and commercial spaces, keeping them running efficiently.</p>
            <p><strong>Fan Coil Unit (FCU):</strong> Our experts repair and maintain FCU systems to improve airflow and maintain proper cooling balance.</p>
            <p><strong>Package Unit AC:</strong> We provide reliable service for Package Unit AC systems used in commercial and industrial setups.</p>
            <p><strong>Portable AC:</strong> At FAJ Technical Services L.L.C experts quickly repair and service Portable AC units for small spaces and temporary cooling needs.</p>
            <p><strong>Ducted Split AC:</strong> We handle installation, repair, and maintenance of Ducted Split AC systems for full-property cooling.</p>
            <p><strong>Ceiling AC:</strong> Our technicians service Ceiling AC units to ensure quiet operation and consistent cooling performance.</p>
            <p><strong>Inverter AC:</strong> We specialize in Inverter AC systems, focusing on energy efficiency and smooth cooling performance.</p>
          </div>
        </section>

        {/* We specialise in air conditioning services for the following brands */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_24 text-align-left">We specialise in air conditioning services for the following brands</h2>

            {/* <ul className="mb-3">
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/">LG Air Conditioner Service</a>:</strong> FAJ offers reliable LG AC repair and services near me in Bur Dubai. With professionals who are experts in split, vrf, and central air conditioning units. Get reliable and fast AC service near you, including AC repair and maintenance in Bur Dubai.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/">Samsung Air Conditioner Repair and Service</a>:</strong> Based in Dubai, FAJ is your go-to destination for Samsung AC repair in Dubai Bur Dubai. Specialising in Samsung air conditioning repair service near me, we offer comprehensive air conditioning service ranging from AC fixing to AC cleaning service and AC maintenance in Bur Dubai.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/york/">York AC Service and Repair</a>:</strong> The York AC repair and service in Bur Dubai, ensures you don’t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritised, providing air conditioning service near me, Bur Dubai, AC cleaning service, and AC fixing.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/">Daikin Air Conditioner Maintenance</a>:</strong> Count on our experienced team to promptly and effectively address any challenges you may encounter with your Daikin air conditioning unit. We specialise in AC cleaning service and AC repairing in Bur Dubai, to ensure it operates at optimal functionality, providing you with a cool and comfortable environment when you need it most.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/trane/">Trane HVAC Repair</a>:</strong> With in-depth expertise in the repair of Trane air conditioning systems, we offer comprehensive Bur Dubai AC repair near me and AC cleaning services designed to ensure your unit operates at peak efficiency. Our specialized Trane AC maintenance and repair service in Bur Dubai, is conveniently available in your area, providing timely and effective solutions to keep your air conditioning system running smoothly and reliably. Whether you need routine home air conditioner repair near me or office AC service and maintenance in Bur Dubai or urgent repair, we are here to help you maintain a comfortable environment in your home or business.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/panasonic/">Panasonic AC Service and Repair</a>:</strong> No matter the issue with your Panasonic air conditioner, our skilled AC technicians in Bur Dubai and Sharjah can quickly diagnose and fix it. We offer reliable air conditioning services near me in Bur Dubai, and AC repair right in your Bur Dubai area, ensuring your system runs smoothly again. </li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/gree/">Gree AC Service and Maintenance</a>:</strong> Is your air conditioning unit not functioning properly, or are you seeing a Gree AC error displayed on the screen? You don’t have to struggle with uncomfortable temperatures or stale air any longer. At FAJ, we specialise in quickly restoring your Gree air conditioning to optimal performance. Our reliable air conditioning repair and maintenance services ensure that your system operates efficiently and effectively, preventing any further damage and discomfort. Whether you need emergency air conditioning repair near me in Bur Dubai, air conditioning service near me and routine AC maintenance services, or comprehensive air conditioning cleaning services in Dubai, we’ve got you covered. Enjoy a refreshing and cool environment once again with our professional solutions!</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/o-general/">O General AC Service and Repair</a>:</strong> For air conditioning cleaning services in Dubai, specialized help is crucial for effectively managing aircon issues. Our company provides hassle-free villa AC repair / office AC cleaning service or home AC maintenance services in Bur Dubai, conveniently available in both Dubai and Sharjah. Trust us to keep your home comfortable all year round.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/mitsubishi/">Mitsubishi Air Conditioner Service and Repair</a>:</strong> Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai! Our expert Mitsubishi Air Conditioning cleaning service and AC repairing ensure your AC stays cool and efficient, providing comfort and peace of mind. Expert Air conditioning cleaning service near me in Bur Dubai and Sharjah, aircon fixing and AC maintenance service in Bur Dubai. </li>

              <li><strong>Carrier AC Repair and Service in Dubai</strong>: We understand how essential Carrier air conditioning is for your home or business. FAJ provides fast and reliable Carrier air conditioner maintenance services in Bur Dubai, that are both efficient and dependable. Typically, regular cleaning service of your Carrier VRF (Variable Refrigerant Flow), central, split, package unit, or cassette type units in Bur Dubai and Sharjah is sufficient to keep your system running smoothly. However, if your Carrier air conditioning system experiences a breakdown, fault, or malfunction, it can negatively affect your indoor environment.</li>
            </ul> */}

            <LocationKeyword />

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>
          </div>
        </section>

        <section className="section gallery_section bg-light-gray cs_py_30">
          <div className="container">
            <h2>Gallery <Gallery /></h2>
            <div className="row gx-3 gy-2">
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide1/public`} alt="Ac Service" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide2/public`} alt="AC Repair" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide3/public`} alt="AC Maintenance" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide4/public`} alt="AC CLeaning" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide5/public`} alt="AC Fixing" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide6/public`} alt="AC Gas Filling" />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-dark-blue text-light">
          <div className="container text-center">
            <h3 className="cs_fs_30 text-light">Practical Tips to Improve Energy Efficiency</h3>
            <p>Learn easy and proven ways to save energy with your AC. Find tips to cut the cost and stay cool all summers!</p>
            <a
              href="https://www.fajservices.ae/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf"
              className="btn-green-yellow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here to Save on Energy Bills
            </a>

          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-4">
                <div className="acsvs-sec-prefoot-sec-cone">
                  <h3 className="cs_fs_20 mb-0">COOLING &amp; HEATING</h3>
                  <span className="mb-5">Stay comfortable all year round</span>
                  <div className="mb-5"></div>
                  <h3 className="cs_fs_20 mb-0">BETTER AIR QUALITY</h3>
                  <span className="mb-5">Reduce humidity, pollen and dust</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="acsvs-sec-prefoot-sec-ctwo">

                  <img src={getImageSrc('benafit-acimg')} alt="Air Con Maintenance & AC Installation in Bur Dubai" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="acsvs-sec-prefoot-sec-cthree">
                  <h3 className="cs_fs_20 mb-0">PROTECT YOUR PROPERTY</h3>
                  <span className="mb-5">Prevent damage to electronics and furnishings</span>
                  <div className="mb-5"></div>
                  <h3 className="cs_fs_20 mb-0">QUIET AND SECURE</h3>
                  <span className="mb-5">No need to leave windows open</span>
                </div>
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
          bgImg={reviewsbg}
          testimonialData={testimonial_data}
          sectionId="home-testimonials"
        />
        {/* Faqs */}
        <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>
        </section>
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">FAQ&apos;s</h3>
            <div className="cs_accordians_wrapper cs_style_1 p-0">
              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 cs_semibold mb-0">{item.title}</span>
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
                        <path d="M8 2V14M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
                        <path d="M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
      </div>
    </>
  )
}

export default AcRepairInBurDubaiDetail

