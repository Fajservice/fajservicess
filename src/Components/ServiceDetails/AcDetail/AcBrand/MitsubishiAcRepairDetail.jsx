import { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import HeaderForm from "../../../Headeform/HeaderForm";
import Practicaltip from "../../../Common/Practicaltip";
import AcProperties from "../../../Common/AcProperties";
import AcAppointmentCol from "../../../Common/AcAppointmentCol";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";
import GetQuoteButton from "../../../Buttons/GetQuoteButton.jsx";
import AcBrandBenifit from "./ACBrandComponents/ACBrandBenifit.jsx";

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const MitsubishiAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "Mitsubishi AC Repair and Maintenance Services in Dubai | FAJ");
  const metadescription = String(description || "Looking for Mitsubishi AC repair in Dubai? Call now for experienced technicians specializing in Mitsubishi VRF, HVAC, central & split maintenance service.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Mitsubishi AC Repair, Mitsubishi AC Service, Mitsubishi Air Conditioner Maintenance, Mitsubishi HVAC Repair, Mitsubishi VRF System Service, Mitsubishi Ducted Split AC Repair, Mitsubishi Wall-Mounted AC Service");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/brands/mitsubishi/");
  const metaImage = String(Image || "https://www.fajservices.ae/img/ac%20filter.avif");
  subtitle = "Testimonial"
  title = "What our clients say <br> About Us"
  reviewsbg = getImageSrc('testimonialbg')
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
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcBrand/MitsubishiAcRepairfaq.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/MitsubishiAcServiceTestimonials.json`)
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
          
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">
        {/* intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Mitsubishi AC Repair in Dubai – AC Maintenance Service</h1>
            <p>
              <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876">FAJ Technical Services L.L.C</a> has been a trusted provider in the community since 2010, specializing in Mitsubishi AC repair, maintenance, and installation for both residential and commercial properties in Dubai and Sharjah.
              <br />Mitsubishi air conditioners play a vital role in ensuring year-round indoor comfort. To reach optimal performance from your system, it is essential to conduct regular maintenance. In Dubai, professional cleaning services tailored for Mitsubishi units are available to help maintain efficiency and prolong the lifespan of your air conditioning system.
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
                <h2 className="cs_fs_24 mb-1">Mitsubishi AC Maintenance and Servicing</h2>

                <p className="mb-2">
                  When addressing Mitsubishi <a href="https://www.fajservices.ae/ac-repair-dubai/">AC repair</a> needs, it’s important to choose a professional and trustworthy technician for the space.
                  <br />Our team specializes in the cleaning service Mitsubishi air conditioner across Dubai and Sharjah. At FAJ, we are committed to providing reliable fix that ensures your comfort throughout the year.
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
                <img className="bordered-img w-100" src={getImageSrc('acfilterinner')} alt="Mitsubishi AC Service" />
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

            <h2 className="cs_fs_30">Why is Mitsubishi AC Maintenance Service Important in Dubai?</h2>
            <p className="mb-0">
              Maintaining your Mitsubishi AC regularly in Dubai is crucial to ensure it operates at peak efficiency and provides optimal cooling performance. At FAJ, we specialize in comprehensive <a href="/ac-maintenance-dubai/">aircon maintenance</a> services tailored specifically for Mitsubishi AC units. Here to help keep your system running at its best!
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('ac amc')} alt="Mitsubishi Airconditioner Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">

                  <li> <strong> Extreme Weather: </strong> In the sweltering heat of summer, temperatures can soar above 40°C (104°F), creating an oppressive environment. In such extreme conditions, it&apos;s essential to ensure that your Mitsubishi AC systems are running at peak performance.
                  </li>
                  <li> <strong> Energy Efficiency: </strong>  A meticulously cared-for Mitsubishi air conditioning unit operates with enhanced efficiency, leading to significant energy savings and lower Dewa electricity bills.</li>
                  <li> <strong> Longevity of Equipment: </strong> Consistent maintenance of Mitsubishi AC plays an important role in extending its lifespan and can lead to substantial savings over time, making it a wise investment for your home or business
                  </li>
                  <li> <strong> Improved Air Quality: </strong>Routine Mitsubishi AC cleaning service prevents the accumulation of dust and allergens, leading to improved air quality.</li>
                  <li> <strong> Enhanced Comfort: </strong> Keeping your Mitsubishi AC service in Dubai is essential for optimal comfort and efficiency, ensuring top cooling performance daily.</li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Mitsubishi AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you notice a decline in airflow from your vents, it may indicate a problem with your Mitsubishi AC system, such as a <a href="https://www.youtube.com/watch?v=qnByeIsc3lY">blocked filter</a> or a faulty fan.
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
                      If your Mitsubishi AC is blowing warm or room temperature air instead of cold air, it may indicate issues with the compressor, or ductwork.

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
                      Unusual sounds such as grinding, squeaking, or banging from your Mitsubishi AC unit may indicate mechanical issues that require attention.

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
                    <p className="p-2 mb-0">
                      Unpleasant odors from the vents may indicate mold or mildew in the system and should be addressed immediately.


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
                      The inability to maintain desired temperatures may indicate issues such as dirty filters, low refrigerant levels, or a faulty thermostat.
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
                      A Mitsubishi air conditioner that fails to effectively reduce humidity may be experiencing cooling capacity issues or may not be operating correctly.

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
                      Water pooling around the Mitsubishi AC or dripping from the vents may indicate a blocked condensate drain, frozen coils, or other issues.
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
                      High energy bills without an increase in usage may indicate inefficiency in Mitsubishi AC due to dirty filters, duct leaks, or other problems.
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
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR MITSUBISHI AC SYSTEMS</h2>

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
                <p className='mb-0'>We specialize in different types and brands of HVAC systems, including Fresh Air Handling Units (FAHU).</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Mitsubishi AC Installation: </strong> Professional installation of different Mitsubishi air conditioning systems to guarantee optimal performance. </li>
                  <li> <strong> Mitsubishi AC Inspection: </strong> Comprehensive fault diagnosis to identify issues accurately. We provide detailed quotes and eligibility assessments to address concerns regarding your system. </li>
                  <li> <strong> Mitsubishi AC Repair Service: </strong> We offer fast and effective repair services for all Mitsubishi AC components, addressing issues such as leaks, electrical failures, and system malfunctions. Please contact us for specific services or any questions you may have! </li>
                  <li> <strong> Mitsubishi AC Annual Maintenance Contract: </strong> This contract outlines the terms and services for Mitsubishi AC annual maintenance.  </li>

                  <p className="mb-0"> <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular air conditioning maintenance</a> (AMC/PPM) is crucial for the optimal performance, efficiency, and longevity of your system.</p>
                </ul>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
       <AcBrandBenifit />

        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR  NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With <a href="/services/air-conditioning-repair/ac-service/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your Mitsubishi AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                    </p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">

                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('ACServicescomponent')} alt="Ac Maintenance Services" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in Mitsubishi AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
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
              <img className="blue-border-2 w-100"src={getImageSrc('icon/ACServicescomponent')} alt="Ac Maintenance Services" />
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

            <h3>We specialise in Mitsubishi ac services for the following types</h3>
            <div className="row">
              <div className="col-12">

                <p className="mb-0">
                  <strong> Mitsubishi Split Air Conditioner Service: </strong>
                  FAJ offers reliable repair and maintenance for Mitsubishi AC units in Dubai.
                  Our expert team specializes in Mitsubishi split systems, VRF solutions, and central air conditioning, ensuring optimal performance and comfort. Count on us for efficient solutions, whether for routine maintenance or urgent repairs. </p>

                <p className="mb-0"> <strong> Mitsubishi Central Air Conditioner Repair and Service: </strong> FAJ is a reputable service provider in Dubai, specializing in Mitsubishi air conditioning systems. They deliver reliable repairs and thorough maintenance services to ensure your AC operates efficiently. Committed to quality and customer satisfaction, FAJ focuses on keeping your space cool and comfortable, even in the hottest weather. </p>
                <p className="mb-0"> <strong> Mitsubishi AC Service and Repair: </strong> Mitsubishi AC Service offers peace of mind with our skilled technicians. At FAJ, we focus on efficient and reliable air conditioning services, including maintenance, repair, and installation. Trust our expert team to keep your HVAC system running smoothly and ensure your comfort year-round! </p>
                <p className="mb-0"> <strong> Mitsubishi Inverter Air Conditioner Maintenance: </strong> Depend on our expert team to promptly resolve any issues with your Mitsubishi air conditioner and restore its full functionality. </p>
                <p className="mb-0"> <strong> Mitsubishi HVAC Repair: </strong> We have extensive knowledge of Mitsubishi cassette type and package unit AC systems, and we provide reliable repair to ensure your unit operates efficiently. </p>
                <p className="mb-0"> <strong> Mitsubishi Ceiling AC Service and Repair: </strong> Our experts can accurately diagnose and fix any issues with your Mitsubishi air conditioner. </p>
                <p className="mb-0"> <strong> Mitsubishi VRF (Variable Refrigerant Flow) System Service and Repair: </strong> FAJ's Mitsubishi Variable Refrigerant Flow (VRF) System service offers reliable and efficient HVAC solutions tailored to your needs. Our skilled team prioritizes your comfort and satisfaction, ensuring exceptional service and peace of mind. Trust us to handle your climate control with expertise and care. </p>
                <p className="mb-0"> <strong> Mitsubishi Ducted Split AC Service and Repair: </strong> When it comes to repairing and maintaining Mitsubishi ducted split AC repair and maintenance service in Dubai, having expert assistance is essential for optimal performance. Our team of highly skilled technicians is dedicated to diagnosing and resolving a wide range of AC issues, ensuring minimal disruption to your daily life. You can trust us to provide the relief you need quickly and reliably. </p>
                <p className="mb-0"> <strong> Mitsubishi Wall-Mounted Air Conditioner Service and Repair: </strong> Beat Dubai's intense heat with our expert <a href="https://www.google.com/search?q=faj+technical+llc+gmb&rlz=1C1GCEU_en-GBPK1161PK1162&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIPCAYQLhgnGK8BGMcBGOoCMgkIBxAjGCcY6gLSAQsyNzQ0OTUwajBqN6gCCLACAfEFNHg2jm1mi9w&sourceid=chrome&ie=UTF-8#lpc=lpc&prid=-6827086688122157">Mitsubishi AC services</a>. We ensure your unit operates efficiently, keeping your indoor space cool and comfortable while temperatures soar outside. </p>



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
          bgImg={reviewsbg}
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
  );
};

export default MitsubishiAcRepair;