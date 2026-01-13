import { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import HeaderForm from "../../../Headeform/HeaderForm";
import Practicaltip from "../../../Common/Practicaltip";
import AcProperties from "../../../Common/AcProperties";
import AcAppointmentCol from "../../../Common/AcAppointmentCol";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";
import AcBrandBenifit from "./ACBrandComponents/ACBrandBenifit.jsx";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const McQuayAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "McQuay AC Repair & Maintenance Service in Dubai | FAJ");
  const metadescription = String(description || "We can also provide ongoing maintenance and on-demand McQuay AC repair and cleaning service in Dubai, and air conditioner fixing near you. Call 043300002");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "MacQuay AC Repair in Dubai, McQuay Air Conditioner Maintenance, McQuay AC Service, McQuay AC Fix, McQuay Air Condition Repair, McQuay Air Condition Maintenance, McQuay Air Con Service");
  const metaURL = String(URL || "https://www.fajservices.ae/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/");
  const metaImage = String(Image || "https://www.fajservices.ae/img/ac%20filter.avif");
  subtitle = "Testimonial"
  title = "What our clients say <br> About Us"
  reviewsbg = "img/testimonialbg.jpg"
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

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

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcBrand/McQuayAcRepairfaq.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/McQuayAcServiceTestimonials.json`)
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
        breakpoint: 575,
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
        {/* intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Experts McQuay AC Maintenance and AC Repair Services in Dubai</h1>
            <p><a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876">FAJ Technical Services L.L.C</a>, has been a cornerstone of the community since 2010.
              Our highly skilled facilities team brings a wealth of experience in McQuay AC repair, maintenance, and installation services for both residential and commercial units in Dubai and Sharjah.
              A McQuay air conditioner is essential for year-round comfort. Regular maintenance is vital for optimal performance. In Dubai, numerous professional cleaning services specialize in McQuay systems, helping you keep your air conditioning running efficiently.
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>

        {/* 2 col */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1">McQuay Ac Maintenance and Servicing</h2>

                <p className="mb-2">
                  When addressing McQuay <a href="https://www.fajservices.ae/ac-repair-dubai/">air conditioning repair</a>, it is essential to engage a qualified technician for residential or commercial needs.
                  We specialize in McQuay AC repair and maintenance throughout Dubai and Sharjah. The FAJ team is dedicated to ensuring year-round comfort for our clients.

                </p>

                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top">Signs You Need An AC Service</h2>
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
                </div></div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('ac filter')}  alt="McQuay AC Service" />
              </div>
            </div>
            <AcAppointmentCol></AcAppointmentCol>
          </div>
        </section>

        {/* AC Price Section */}
        <FAJACPrice></FAJACPrice>

        {/* Why*/}
        <section className="section cs_py_30">
          <div className="container">

            <h2 className="cs_fs_30">Why is McQuay AC Maintenance Service Important in Dubai?</h2>
            <p className="">
              <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> of McQuay air conditioners in Dubai is vital for optimal performance. FAJ provides services to keep your system running efficiently. Trust us to ensure your McQuay AC performs at its best.
              For nearby maintenance, please contact us.

            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('ac amc')}  alt="MCQuay Airconditioner Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">

                  <li> <strong>  Extreme Weather: </strong> In summer, temperatures can exceed 40°C (104°F). Routine maintenance ensures McQuay AC SYSTEMS operate efficiently under these conditions. </li>
                  <li> <strong>  Energy Efficiency: </strong> A well-maintained McQuay AC unit operates more efficiently, saving energy and lowering electricity bills. </li>
                  <li> <strong>  Longevity of Equipment: </strong> Regular maintenance of your McQuay air conditioner can extend its lifespan, decrease the need for expensive repair and replacements, and ultimately save you money. </li>
                  <li> <strong>  Improved Air Quality: </strong> Regular McQuay <a href="/ac-maintenance-dubai/" className="fw-bold text-decoration-underline">AC maintenance</a> of units prevents dust and allergens from accumulating, ensuring cleaner air. </li>
                  <li> <strong>  Enhanced Comfort: </strong> Regular McQuay air conditioner maintenance in Dubai ensures daily comfort, efficiency, and consistent cooling. </li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common McQuay AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you notice a drop in airflow from your vents, it may indicate an issue with your McQuay AC system, such as a <a href="https://www.youtube.com/watch?v=qnByeIsc3lY">blocked filter</a> or a malfunctioning fan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Warm Air</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your McQuay AC is blowing warm or room temperature air instead of cold air, it may show issues with the compressor, refrigerant levels, or ductwork.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Unusual sounds like grinding, squeaking, or banging from your McQuay AC unit may indicate mechanical problems that require attention.
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Foul Odors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Foul odours from the vents may indicate mold or mildew in the system and should be addressed immediately.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Frequent Cycling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The failure to maintain desired temperatures may suggest problems such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">High Humidity Levels</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A McQuay air conditioner that fails to effectively reduce humidity may be experiencing cooling capacity issues or may not be operating correctly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Leaking Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Water pooling around the McQuay AC or dripping from the vents may suggest a blocked condensate drain, frozen coils, or other issues.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Increased Energy Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      High energy bills without an increase in usage may suggest inefficiency in McQuay AC due to dirty filters, duct leaks, or other issues.
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

        {/* HERE  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR McQuay AC SYSTEMS</h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/sxBhB1_gxYA?si=Fk3OIwPHCHAsktx-"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-xl-6">
                <p className='mb-0'>We specialise in various types and brands of HVAC systems, including Fresh Air Handling Units (FAHU).</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong>  McQuay AC Installation: </strong> Expert installation of various McQuay air conditioning systems to ensure optimal performance. </li>
                  <li> <strong>  McQuay AC Diagnostics: </strong> Through fault diagnosis to accurately identify issues. We provide eligibility assessments and detailed quotes to address any concerns regarding your system. </li>
                  <li> <strong>  McQuay AC Repair Service: </strong> Prompt and effective repair services for all McQuay AC components, addressing issues such as leaks, electrical failures, and system malfunctions. Contact us for specific services or any questions you may have! </li>
                  <li> <strong>  McQuay AC Annual Maintenance Contract: </strong> This contract outlines the terms and services for the McQuay AC annual maintenance. </li>
                </ul>
                <p className="mb-0"> Regular McQuay AC (AMC / PPM) maintenance is essential for optimal performance, efficiency, and longevity of your air conditioning system.</p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <AcBrandBenifit />

        {/* CHOOSE US  */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR  NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')}  alt="Fast, Reliable Service" />
                  </div>
                  <div className="usptext">
                    <h3 >Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')}  alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With <a href="/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your McQuay AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                    </p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">

                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('ACServicescomponent')}  alt="Ac Maintenance Services" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in McQuay AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')}  alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our <a href="https://www.facebook.com/ACRepairUAE"><b>skilled AC technicians</b></a> are highly trained, and we provide excellent service for a variety of major AC brands efficiently.
                    </p>
                  </div>
                </div>
              </div>


            </div>
            {/* <!-- Delimit mobile --> */}
            <div className="col-12 uspdelimit w-100 text-center d-block d-none-1199 Xd-xl-none">
              <img className="blue-border-2 w-100" src={getImageSrc('ACServicescomponent')} alt="Ac Maintenance Services" />
            </div>
          </div>
        </section>

        {/* We specialise  */}
        <section className="section cs_py_30 bg-light-gray ">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY AC REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 195 to 320 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month service warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>


            <h3>We specialise in McQuay ac services for the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"> <strong>  McQuay Split Air Conditioner Service: </strong> <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ</a> offers reliable repair and maintenance services for McQuay AC units in Dubai. Our team is composed of professionals who specialize in McQuay split systems, McQuay VRF, and McQuay central air conditioning units. </p>
                <p className="mb-0"> <strong>  McQuay Central Air Conditioner Repair and Service: </strong> FAJ is a service provider located in Dubai that offers McQuay AC repair services. The company specialises in McQuay air conditioning systems and provides a variety of services, including repair and regular maintenance. </p>
                <p className="mb-0"> <strong>  McQuay AC Service and Repair: </strong> McQuay AC service provides peace of mind with capable hands. At FAJ, we focus on efficiency and reliability in all our work. Our expert team ensures your air conditioning operates optimally, whether you need maintenance, repair, or installation. Trust us for your HVAC needs—your comfort is our top priority. </p>
                <p className="mb-0"> <strong>  McQuay Inverter Air Conditioner Maintenance: </strong> Trust our expert team to quickly resolve any issues with your McQuay air conditioner and restore its full functionality. </p>
                <p className="mb-0"> <strong>  McQuay HVAC Repair: </strong> With extensive knowledge of McQuay air conditioning systems, we provide dependable repair to ensure your unit functions efficiently. </p>
                <p className="mb-0"> <strong>  McQuay Ceiling AC Service and Repair: </strong> Our experts can accurately diagnose and fix any issues with your McQuay air conditioner. </p>
                <p className="mb-0"> <strong>  McQuay VRF (Variable Refrigerant Flow) System Service and Repair: </strong> The McQuay VRF (Variable Refrigerant Flow) System service guarantees you peace of mind because you are in the right place. Indeed, FAJ prioritises efficiency and reliability. </p>
                <p className="mb-0"> <strong>  McQuay Ducted Split AC Service and Repair: </strong> McQuay ducted split AC service in Dubai requires expert help, as only specialists can effectively address air conditioning issues. We offer hassle-free McQuay air conditioning repair service and error fixing. </p>
                <p className="mb-0"> <strong>  McQuay Wall-Mounted Air Conditioner Service and Repair: </strong> Looking for relief from the scorching heat? Discover how to keep your McQuay AC running smoothly in Dubai! <br />
                  Our expert McQuay AC services ensure that your unit remains cool and efficient, providing comfort and peace of mind.</p>


                <p>
                  <a href="https://www.fajservices.ae/ac-repair-in-al-barsha-air-condition-maintenance-in-al-barsha-air-conditioning-fix-amc-service-in-al-barsha-dubai/">Al Barsha</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jebel-ali/">Jebel Ali</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-repair-in-jafza-air-condition-maintenance-in-jafza-air-conditioning-fix-amc-service-in-jebel-ali-free-zone-dubai/">JAFZA</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jebel-ali-free-zone/">Jebel Ali Free Zone</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-palm-jumeirah/">Palm Jumeirah</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-repair-and-ac-service-in-dubai-hills-estate/">Dubai Hills Estate</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-repair-and-ac-service-in-damac-hills/">Damac Hills</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-al-barari/">Al Barari</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-al-barsha-south/">Al Barsha South</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-al-safa/">Al Safa</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-arabian-ranches/">Arabian Ranches</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-dubai-silicon-oasis/">Dubai Silicon Oasis</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-dubai-investments-park/">Dubai Investments Park</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-dip/">DIP</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-repair-and-ac-service-in-dubai-production-city/">Dubai Production City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-impz/">IMPZ</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-dubai-sport-city/">Dubai Sports City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-dubai-studio-city/">Dubai Studio City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jbr/">JBR</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jumeirah-beach-residence/">Jumeirah Beach Residence</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-jlt/">JLT</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jumeirah-lake-towers/">Jumeirah Lake Towers</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jvc/">JVC</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jumeirah-village-circle/">Jumeirah Village Circle</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jvt/">JVT</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jumeirah-village-triangle/">Jumeirah Village Triangle</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jebel-ali-village/">Jebel Ali Village</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jumeirah/">Jumeirah</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-jumeirah-golf-estates/">Jumeirah Golf Estates</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-the-meadows/">Meadows</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-motor-city/">Motor City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-repair-and-ac-service-in-town-square/">Town Square</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-emirates-hills/">Emirates Hills</a> &nbsp;|&nbsp;
                  <a href="">Townhouses</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-umm-suqeim/">Umm Suqeim</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-ras-al-khor-industrial-area/">Ras Al Khor</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/ac-services-in-deira/">Deira</a>
                </p>
              </div>

            </div>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton></GetQuoteButton>
                <CallNowButton></CallNowButton>
              </div>
            </div>

          </div>
        </section>

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

        {/* Contact */}
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

export default McQuayAcRepair;