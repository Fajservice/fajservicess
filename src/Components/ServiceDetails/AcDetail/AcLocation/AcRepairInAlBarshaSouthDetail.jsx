import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
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
const AcRepairInAlBarshaSouthDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "Best AC Repair and AC Maintenance Service in Al Barsha South");
  const metadescription = String(description || "Reliable AC repair and service in Al Barsha South, Dubai. We offer same-day maintenance & servicing for central and split air conditioning units near you");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "AC Repair  in Al Barsha South, Air Conditioning Service in Al Barsha South, Air Con Maintenance & AC Installation in Al Barsha South");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-barsha-south/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public");

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
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcLocation/AcRepairInAlBarshaSouth.json`),
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
            <h1 className="cs_fs_30">Reliable AC Repair and Maintenance Services in Al Barsha South, Dubai | AC Service Near Me</h1>
            <p>Al Barsha South has villas, apartments, schools and clinics. People work there, and they use their air conditioners for a long time every day. When an AC stops cooling, it gets really uncomfortable inside, especially during Dubai's hot months.</p>
            <p><Link to="https://www.fajservices.ae">FAJ Technical Services L.L.C</Link> has been fixing air conditioners in Dubai since 2010. Our technicians can repair, clean, maintain and install AC units for homes and businesses in Al Barsha South and nearby areas. We help with all kinds of HVAC systems from room units to big cooling systems for large properties. Our team provides support and does good work. <Link to="https://www.fajservices.ae/services/air-conditioning-repair/">AC repair</Link> is our speciality. </p>
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
                <h2 className="cs_fs_24 mb-1 text-align-left">Who provides air conditioner repair services in Dubai and the UAE?</h2>
                <p className="mb-2">If your air conditioner stops working, it gets really hot at home. You cannot work properly at the office. That's when you need to find an air conditioner company to fix the issue. FAJ Technical Services L.L.C provides AC repair and maintenance services for apartments, villas, offices, retail shops, schools, clinics and commercial buildings in Al Barsha South.</p>
                <p>Our AC  technicians do every AC repair job carefully, from air conditioner repairs to complete air conditioner system checks.</p>
                <h2 className="cs_fs_24 text-align-left">How Can You Tell If Your AC Needs Servicing?</h2>
                <p className="mb-2">Most cooling systems give early warning signs before a major breakdown happens.</p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Higher electricity bills</li>
                      <li>Weak cooling performance</li>
                      <li>Low airflow from vents</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Water dripping from the unit</li>
                      <li>Unusual sounds during operation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img ac-bordered-img w-100" src={getImageSrc('AC-Repair-and-Maintenace-Service-Outdoor')} alt="Best AC Repair Service in Al Barsha South" />
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
                <img className="bordered-img w-100" src={getImageSrc('Experts-AC-Service-and-Maintenance')} alt="AC Repair in Al Barsha South" />
              </div>
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 text-align-left">Why Is My AC Running But Not Cooling Properly?</h2>
                <p className="mb-2">
                  An AC can continue running while still struggling to cool the room properly.
                </p>
                <b>Some common reasons include:</b>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Dirty air filters</li>
                      <li>Low refrigerant levels</li>
                      <li>Blocked condenser coils</li>
                      <li>Faulty thermostat</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Compressor problems</li>
                      <li>Electrical issues</li>
                      <li>Restricted airflow</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <p className="mb-0">
                      A complete inspection helps identify the actual fault and prevents unnecessary damage to important components.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Air Conditioning Services Available in Al Barsha South */}
        <section className="section cs_py_30 bg-light-white">
          <div className="container">
            <h2 className="cs_fs_30 text-center">Air Conditioning Services Available in Al Barsha South</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
              <div className="col-12 col-md-4 col-lg-4">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">AC Repair Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Cooling loss, electrical problems, thermostat faults, compressor issues, and water leaks can all affect performance. Proper repairs help restore normal operation quickly.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">AC Cleaning Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Cleaning removes dust, mould, and debris from filters, coils, and drainage systems, helping improve the air conditioner's performance, airflow and indoor air quality.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">AC Maintenance Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Routine servicing keeps important components protected, extending their lifespan and helps maintain efficient cooling of the air conditioner throughout the year.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">AC Installation Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Installation services are available for both residential and commercial cooling systems. Every unit is installed according to the manufacturer's recommendations.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Annual Maintenance Contract (AMC)</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The <Link to="/annual-maintenance-contract">Annual Maintenance Contract</Link> plans include things like scheduled visits, servicing and priority support throughout the year. Also, get emergency services.</p>
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
            <h2 className="cs_fs_30">Why is AC maintenance important?</h2>
            <p>
              Air conditioners in Al Barsha South run for a long time because of Dubai's hot weather. Regular maintenance helps keep the systems efficient and reliable.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('What-is-covered-in-an-AC-Maintenance-Contract')} alt="Air Conditioning Service in Al Barsha South" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Extreme Summer Temperatures: </strong> The outdoor temperature often goes above 40°C in summer. Servicing helps systems continue performing during peak usage periods.</li>
                  <li> <strong> Better Energy Savings: </strong> You can save energy with a cleaned and well-maintained air conditioner. It does not need much electricity to make your room cool. A clean air conditioner is really good at saving energy.</li>
                  <li> <strong> Longer Equipment Life: </strong> If you take care of your air conditioner, it will last longer. You will not have to replace the parts as often. This will save you money on replacements.</li>
                  <li> <strong> Cleaner Indoor Air: </strong> When you clean your air conditioner, you get rid of dust and bad things in the air. This makes the air inside your house or school cleaner for your family and friends.</li>
                  <li> <strong> Improved Comfort: </strong> TWhen the air in your room is just right, you will feel more comfortable. A clean air conditioner helps make the air in your room clean. Better air conditioners make sure the air is moving around your room in a way.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common AC Problems That May Require Maintenance */}
        <section className="section cs_py_30 bg-light-white">
          <div className="container">
            <h2 className="cs_fs_30 text-center">Common AC Problems We Handle</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Weak Airflow</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                     Blocked filters and airflow restrictions often reduce cooling performance and make rooms feel warmer.
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
                    <p className="p-2 mb-0">Low refrigerant levels, compressor faults, or thermostat problems can stop the AC from producing cold air.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Grinding, buzzing, or rattling sounds usually indicate internal component issues.
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
                    <p className="p-2 mb-0">Dust buildup, bacteria, and moisture inside the system often cause unpleasant odours.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Frequent Cycling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Short cycling can happen because of thermostat problems or electrical faults.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">High Humidity Level</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Poor moisture removal can leave rooms feeling sticky even while the AC is operating.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Blocked drainage lines and frozen coils are common causes of AC water leaks.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">High Electricity Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">An inefficient cooling system usually consumes more electricity than necessary.</p>
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
            <h2 className="cs_fs_30 text-uppercase">Emergency AC Repair Service in Al Barsha South</h2>
            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/prUR0-lZlzg?si=96yf5hxyAA3bct8w"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-xl-6">
                <p>Cooling system failures often occur without any warning signs during certain times of the year. Quick repairs are really helpful in bringing back comfort and stopping damage to the cooling system.</p>
                <p className='mb-0'><strong>Emergency support is available for:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-1">
                  <li>AC not cooling</li>
                  <li>Water leakage</li>
                  <li>Compressor failure</li>
                  <li>Electrical faults</li>
                  <li>Thermostat problems</li>
                  <li>Weak airflow</li>
                  <li>Strange noises</li>
                  <li>Complete system shutdown</li>
                </ul>
                <p className='mb-0'>We provide fast assistance for residential and commercial customers throughout Al Barsha South and nearby areas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Benefits Of Regular AC Service*/}
        <AcBenefits city="Al Barsha South" />

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
                    <p>Choose a day and time for your AC repair near me, Al Barsha South or Sharjah. With a 3-4 hour window for when our technician will arrive
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
                    <p>We are experts in AC service in Al Barsha South. This is why most major brands trust us to handle their service and maintenance needs.</p>
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

        <section className="section cs_py_30 bg-light-gray mt-3">
          <div className="container">
            <h2 className="cs_fs_24 text-align-left">We Handle All Types of AC Systems</h2>
            <p>
              At FAJ Technical Services L.L.C we repair and maintain all major air conditioning systems across Al Barsha South. Our technicians handle every unit with care to make sure you get smooth cooling and reliable performance.
            </p>
            <p className="mb-0"><strong>Window AC:</strong> A practical cooling option for bedrooms, shops, and small spaces where quick cooling is needed.<br/><strong>Split AC:</strong> Split AC is one of the most common systems in homes and offices because of its quiet operation and strong cooling performance.<br/><strong>Central AC:</strong> Suitable for villas and larger properties where multiple rooms require consistent cooling.<br/><strong>Chiller AC:</strong> Chiller AC  is used a lot in buildings and places that need to be really cool.<br/><strong>Fan Coil Unit (FCU):</strong> The Fan Coil Unit is made to send air to all the different parts of a building while keeping the temperature just right.<br/><strong>Package Unit AC:</strong> Popular in commercial and industrial properties where larger cooling capacities are required.<br/><strong>Portable AC:</strong> A convenient solution for temporary cooling needs or areas without permanent installations.<br/><strong>Ducted Split AC:</strong> Provides hidden cooling through ductwork and is commonly used in villas and offices.<br/><strong>Ceiling AC:</strong> Offers wide air distribution while maintaining a clean interior appearance.<br/><strong>Inverter AC:</strong> Adjusts compressor speed automatically to improve energy efficiency and maintain stable temperatures.</p>
          </div>
        </section>

        {/* We specialise in air conditioning services for the following brands */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_24 text-align-left">We specialise in air conditioning services for the following brands</h2>

            {/* <ul className="mb-3">
              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/lg/">LG Air Conditioner Service</a>:</strong> FAJ offers reliable LG AC repair and services near me in Al Barsha South. With professionals who are experts in split, vrf, and central air conditioning units. Get reliable and fast AC service near you, including AC repair and maintenance in Al Barsha South.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/samsung/">Samsung Air Conditioner Repair and Service</a>:</strong> Based in Dubai, FAJ is your go-to destination for Samsung AC repair in Dubai Al Barsha South. Specialising in Samsung air conditioning repair service near me, we offer comprehensive air conditioning service ranging from AC fixing to AC cleaning service and AC maintenance in Al Barsha South.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/york/">York AC Service and Repair</a>:</strong> The York AC repair and service in Al Barsha South, ensures you don’t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritised, providing air conditioning service near me, Al Barsha South, AC cleaning service, and AC fixing.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/">Daikin Air Conditioner Maintenance</a>:</strong> Count on our experienced team to promptly and effectively address any challenges you may encounter with your Daikin air conditioning unit. We specialise in AC cleaning service and AC repairing in Al Barsha South, to ensure it operates at optimal functionality, providing you with a cool and comfortable environment when you need it most.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/trane/">Trane HVAC Repair</a>:</strong> With in-depth expertise in the repair of Trane air conditioning systems, we offer comprehensive Al Barsha South AC repair near me and AC cleaning services designed to ensure your unit operates at peak efficiency. Our specialized Trane AC maintenance and repair service in Al Barsha South, is conveniently available in your area, providing timely and effective solutions to keep your air conditioning system running smoothly and reliably. Whether you need routine home air conditioner repair near me or office AC service and maintenance in Al Barsha South or urgent repair, we are here to help you maintain a comfortable environment in your home or business.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/panasonic/">Panasonic AC Service and Repair</a>:</strong> No matter the issue with your Panasonic air conditioner, our skilled AC technicians in Al Barsha South and Sharjah can quickly diagnose and fix it. We offer reliable air conditioning services near me in Al Barsha South, and AC repair right in your Al Barsha South area, ensuring your system runs smoothly again. </li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/gree/">Gree AC Service and Maintenance</a>:</strong> Is your air conditioning unit not functioning properly, or are you seeing a Gree AC error displayed on the screen? You don’t have to struggle with uncomfortable temperatures or stale air any longer. At FAJ, we specialise in quickly restoring your Gree air conditioning to optimal performance. Our reliable air conditioning repair and maintenance services ensure that your system operates efficiently and effectively, preventing any further damage and discomfort. Whether you need emergency air conditioning repair near me in Al Barsha South, air conditioning service near me and routine AC maintenance services, or comprehensive air conditioning cleaning services in Dubai, we’ve got you covered. Enjoy a refreshing and cool environment once again with our professional solutions!</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/o-general/">O General AC Service and Repair</a>:</strong> For air conditioning cleaning services in Dubai, specialized help is crucial for effectively managing aircon issues. Our company provides hassle-free villa AC repair / office AC cleaning service or home AC maintenance services in Al Barsha South, conveniently available in both Dubai and Sharjah. Trust us to keep your home comfortable all year round.</li>

              <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/air-conditioning-repair/brands/mitsubishi/">Mitsubishi Air Conditioner Service and Repair</a>:</strong> Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai! Our expert Mitsubishi Air Conditioning cleaning service and AC repairing ensure your AC stays cool and efficient, providing comfort and peace of mind. Expert Air conditioning cleaning service near me in Al Barsha South and Sharjah, aircon fixing and AC maintenance service in Al Barsha South. </li>

              <li><strong>Carrier AC Repair and Service in Dubai</strong>: We understand how essential Carrier air conditioning is for your home or business. FAJ provides fast and reliable Carrier air conditioner maintenance services in Al Barsha South, that are both efficient and dependable. Typically, regular cleaning service of your Carrier VRF (Variable Refrigerant Flow), central, split, package unit, or cassette type units in Al Barsha South and Sharjah is sufficient to keep your system running smoothly. However, if your Carrier air conditioning system experiences a breakdown, fault, or malfunction, it can negatively affect your indoor environment.</li>
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

                  <img src={getImageSrc('benafit-acimg')} alt="Air Con Maintenance & AC Installation in Al Barsha South" />
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

export default AcRepairInAlBarshaSouthDetail

