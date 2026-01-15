import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import HeaderForm from "../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import Testimonial1 from "../../Testimonial/Testimonial1";
import BeforeAfter from "../../BeforeAfter/BeforeAfter";
import BrandsSliderSection from "../../BrandsSliderSection";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const VacuumCleanerRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Robot Vacuum Cleaner Repair | Vacuum Cleaner Service Center");
  const metadescription = String(description || "Fast & Cheap Robot Vacuum Cleaner Repair in Dubai. Call us for upright canister, wet dry cordless vacuum cleaner repair near me & maintenance service");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Robot vacuum cleaner repair, vacuum cleaner service, Xiaomi vacuum repair, Roomba vacuum service, TP-Link vacuum cleaner repair, Eufy vacuum cleaner service, Anker vacuum repair");
  const metaURL = String(URL || "https://www.fajservices.ae/robot-vacuum-cleaner-repair/");
  const metaImage = String(Image || "https://www.fajservices.ae/img/inspection-robot-vacuum-cleaner.avif");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse, brandsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/VacuumCleanerHomeappFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/VacuumCleanerHomeappTestimonials.json`),
          fetch(`${import.meta.env.BASE_URL}data/bbqBrandsLogo.json`)
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

            <h1 className="cs_fs_30">Robot Vacuum Cleaner Repair & Vacuum Cleaner Service Center in Dubai</h1>
            <p>FAJ is a reliable company established in 2010. We provide all types of vacuum cleaners. At FAJ, we are committed to your right to repair your robotic vacuum cleaner by offering affordable repair and servicing options.
              <br />We aim to help you avoid costly replacements and reduce waste. We provide comprehensive error fixing, repair, and servicing for robot vacuum cleaners, along with the necessary parts and products throughout Dubai, Abu Dhabi, and Sharjah. FAJ offers all your robot vacuum cleaner repair and maintenance needs under one roof.
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>


        {/*heading 1 */}

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Select Your Vacuum Cleaner Repair</h2>

                <p className="mb-2">
                  We understand that a vacuum cleaner breakdown is never convenient. Our expert technicians are here to provide efficient vacuum repair services. Roborock, Dreame Robot, Eufy Robot, Ecovacs Deebot, Roomba, Narwal, Dyson Robot Vacuum Cleaner Repair and Service Center in Dubai.
                </p>


                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Fast and Reliable Appliances Service
                </h2>
                <p className="mb-2">At <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"><b>FAJ Technical Services L.L.C</b></a>, we understand that appliance breakdowns never happen at a convenient time. That's why our trained and qualified technicians are here to provide you with reliable appliance repair services. With our help, you can avoid the expense of purchasing a new appliance and get your appliance up and running again before you even have a chance to stress about it.</p>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('Same-Day-vaccum-cleaner-Repair-&-Service')} alt="Vacuum Cleaner Repair" />

              </div>
            </div>

            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>

        {/* Why is */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Vacuum Cleaner Maintenance Service Important in Dubai?</h2>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('inspection-robot-vacuum-cleaner')} alt="inspection robot vacuum cleaner" />
              </div>
              <div className="col-md-6">
                <p className="mb-0">
                  Vacuum cleaner maintenance is crucial for its longevity and performance and to ensure your home is cleaned effectively and safely.

                  <br /> Here&apos;s why vacuum cleaner maintenance is important:
                </p>
                <ul className="mb-0">
                  <li><strong> Vacuum Cleaner Extended Lifespan: </strong> Regular maintenance, like cleaning filters and emptying the dustbin, can extend your vacuum's lifespan. </li>
                  <li><strong> Vacuum Cleaner Improved Performance: </strong> Regularly cleaning filters and bags, and clearing the brush roll ensures the vacuum operates efficiently. </li>
                  <li><strong> Vacuum Cleaner Reduced Repair Costs: </strong> Addressing minor issues through routine maintenance can prevent them from escalating into costly repairs. </li>
                  <li><strong> Vacuum Cleaner Quieter Operation: </strong> A well-maintained vacuum runs more quietly, reducing noise disturbance.  </li>
                  <li><strong> Vacuum Cleaner Saves Time and Effort: </strong>
                    Maintenance saves time and effort on cleaning and repairs by preventing breakdowns and ensuring optimal performance. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Vacuum Cleaners That May Require Maintenance   </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Battery Degradation</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Over time, batteries naturally lose their capacity to hold a full charge, which can affect the overall performance of your automatic vacuum cleaner.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Connectivity Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">To fix connectivity issues, ensure supply Wi-Fi is working and the vacuum is in range. Restart both the router and the vacuum if needed.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Inspect and Clean Sensors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      The next step in diagnosing your robot floor cleaner is to wipe the sensors, which are primarily located on the front and bottom of the device.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Navigation Mapping Errors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Advanced robotic vacuums use AI algorithms for precise navigation mapping, but errors can occasionally occur due to sensor misalignment.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faulty Charging Dock</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A faulty robot vacuum charging dock can impair the charging process, preventing the vacuum cleaner from receiving a proper charge.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Loss of Suction</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your vacuum cleaner is losing suction power, the issue might be clogged filters, a full dustbin or bag, or a malfunction within the suction system.

                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Resetting Robot Vacuum</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your robot vacuum can't recognise obstacles, check to see if the sensors are clean. Dirty sensors may hinder their ability to detect obstacles properly.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Dirty Charging Contacts</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Accumulated dust and debris on the charging contacts can be a common issue. To maintain proper charging functionality, ensure you regularly clean the docking station.

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

        {/*HERE ARE  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR ROBOTIC VACUUM CLEANERS  </h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/M9ghmjMAJ3E"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-xl-6">
                <p className="mb-0">In Dubai, vacuum cleaner services provide repair, maintenance, and servicing to extend the lifespan of your vacuum cleaner.< br />
                  These services can range from quick fixes to comprehensive overhauls, with some companies specializing specifically in robotic vacuum cleaners.< br />
                  Here's a detailed overview of vacuum cleaner services offered in Dubai, UAE: <b>Service Options:</b></p>

                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Vacuum Cleaner Repair: </strong> This service addresses issues such as motor problems, hose blockages, and faulty attachments. </li>
                  <li> <strong> Vacuum Cleaner Servicing: </strong> Regular maintenance includes cleaning, inspecting parts, and ensuring optimal performance. </li>
                  <li> <strong> Comprehensive Repair Packages: </strong> These packages offer a wide range of services, including diagnostics, cleaning, and potential part replacements. </li>
                </ul>


              </div>


            </div>
          </div>
        </section >

        {/* The Benefits  */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">The Benefits Of vacuum cleaner Service Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Ensuring Safety</h3>
                      <p className="small">Routine checks reduce the risk of electrical faults and other failures, keeping your home and family safe.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Optimal Performance
                      </h3>
                      <p className="small">Regular maintenance helps your vacuum cleaner run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Lower Energy Bills</h3>
                      <p className="small">Energy efficient vacuum cleaner translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair')} alt="Cooling Efficiency" className="icon-img-block-icon" />
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
                        <img src={getImageSrc('icon/extending')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">vacuum cleaner Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your vacuum cleaner, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Peace of Mind
                      </h3>
                      <p className="small">Knowing your vacuum cleaner are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHOOSE US */}
        <section className="section cs_py_30">
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
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your vacuum cleaner runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your vacuum cleaner repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1')} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in vacuum cleaner repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two vacuum cleaner at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled vacuum cleaner technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('fajteam')} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise   */}
        <section className="section cs_py_30 bg-light-gray custom-css-box">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY Vacuum Cleaner REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 157 to 280 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month repair warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h2 className="text-center">We specialise in vacuum cleaner services for the following brands</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Ecovacs Deebot Vacuum Cleaner</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ecovacs Deebot vacuum cleaner service in Dubai. Vacuum cleaner repair shop near me.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Electrolux Vacuum Cleaner Repair​</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Find Electrolux vacuum cleaner repair near you, and fix vacuum cleaner error.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Hitachi Vacuum Cleaner Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Expert Hitachi vacuum cleaner repair, maintenance, and servicing are available near you.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Hoover Vacuum Cleaner Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We provide Hoover vacuum cleaner repair near me and maintenance service in Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Bissell Vacuum Cleaner Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">You can find professional Bissell vacuum cleaner service and repair options near you.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Miele Vacuum Cleaner Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Premier vacuum cleaner service and maintenance, with cleaning and repair near you.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dyson Vacuum Cleaner Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We provide Dyson vacuum cleaner repair, including cleaning services for your vacuum.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">LG Vacuum Cleaner Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Contact us for LG vacuum cleaner repair and maintenance service near me Dubai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 custom-css-box">
          <div className="container">
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Deebot Vacuum Cleaner Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">You can trust FAJ for vacuum cleaner repair shop near me and service.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Karcher Vacuum Cleaner Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Find a nearby repair Karcher vacuum cleaning machine with a service warranty.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Bosch Vacuum Cleaner Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Fast Bosch vacuum machine repair and Bosch robotic vacuum repair near your location.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Roborock Vacuum Repair Shop</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Reliable Roborock robot vacuum cleaner service and fix Roborock vacuum near me in Dubai</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">iRobot Roomba Vacuum Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Our team specializes in iRobot Roomba vacuum Cleaner repair and Service near you.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dreame Vacuum Repair Nearby</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The experts in Dubai specialize in Robotic vacuum and mopping repair near me.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Deebot Vacuum Cleaner Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We provide Vacuum cleaner and mopping duck repair in Dubai, and fixing vacuum.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Fix Eureka Vacuum</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We offer reliable vacuum cleaner repair shop near me Dubai Vacuum servicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray custom-css-box">
          <div className="container">
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Narwal Vacuum Cleaner Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Call us for cheapest vacuum cleaner repair dubai with part and service warranty.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Roomba Combo Vacuum Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Dubai's leading specialists in robotic vacuum cleaner service center in Al Qouz Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Fixing Xiaomi Robot Vacuum</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Best service center for robot vacuum cleaner with service and spare part warranty.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Versuni Vacuum Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We provide best vacuum cleaning machine maintenance and cleaning services in Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Samsung Vacuum Cleaner Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The technician offers Samsung vacuum service and repairs, providing assistance near your location.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Worx Vacuum Cleaner Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We provide reliable repair, cleaning, and services for Worx vacuum cleaner Dubai</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Kenmore Cordless Vacuum Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">FAJ services and repairs all models of cordless vacuum and offers maintenance service.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">SwitchBot Robot Vacuum Cleaner</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">SwitchBot robot vacuum cleaner repair and service near me in Dubai, Sharjah, and Abu Dhabi.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Black & Decker Vacuum Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If you need fixing vacuum cleaner or repair near me shop, contact us for service Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Best Vacuum Cleaner Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We are offering Braun, EZVIZ, Green Lion, Polaris Vacuum, Midea, Kenwood vacuum cleaner repair.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Vacuum Cleaner Repair Dubai</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We specialize in canister Philips vacuum, Milagrow, Anker, Eufy Vacuum, Irobot service Dubai</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Vacuum Cleaner Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">FAJ offers vacuum cleaner repair and servicing in Dubai, as well as maintenance services.</p>
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
        <BeforeAfter
          title="Recent Completed Repair & Service"
          subTitle="Before & after"
          bgImg={`${CDN}/background-image/public`}
          beforeImg={`${CDN}/vaccum-cleaner-before-image/public`}
          afterTitle="After"
          afterImg={`${CDN}/vaccum-cleaner-after-image/public`}
          beforeTitle="Before"
        />
        {/* Brands section */}
        {/* Gallery */}
        <section className="section cs_py_30 gallery-section bg-light-gray mb-4">
          <div className="container">
            <h3 className="mb-4 text-center">Gallery</h3>
            <div className="row g-4">

              <div className="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('vacuum-cleaners/inspection-robot-vacuum-celaner')}
                  className="img-fluid rounded shadow mb-4"
                  alt="BBQ Grill Repair Service Dubai"
                />

                <img
                  src={getImageSrc('vacuum-cleaners/robot-vacuum-celaner')}
                  className="img-fluid rounded shadow"
                  alt="BBQ Grill Cleaning Service Dubai"
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('vacuum-cleaners/vacuum-cleaner-repair-service')}
                  className="img-fluid rounded shadow mb-4"
                  alt="BBQ Grill Service"
                />

                <img
                  src={getImageSrc('vacuum-cleaners/robot-vacuum-celaner-repair')}
                  className="img-fluid rounded shadow"
                  alt="BBQ Grill Repair"
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('vacuum-cleaners/inspection-robot-vacuum-celaner-repair')}
                  className="img-fluid rounded shadow mb-4"
                  alt="BBQ Grill Repair Service"
                />

                <img
                  src={getImageSrc('vacuum-cleaners/vacuum-celaner-repair')}
                  className="img-fluid rounded shadow"
                  alt="BBQ Grill Cleaning Service"
                />
              </div>
            </div>
          </div>
        </section>
        {!isLoading && brandsLogo_data.length > 0 && (
          <BrandsSliderSection
            brandsData={brandsLogo_data.map(item => ({
              ...item,
              logo: getImageSrc(item.logo)
            }))}
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

export default VacuumCleanerRepairDetail;