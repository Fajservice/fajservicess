

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


const RoboRockVacuumCleanerRepairAndServiceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Roborock Vacuum Cleaner Repair Service in Dubai");
  const metadescription = String(description || "Roborock vacuum cleaner repair service and center in Dubai. Book with us 043300002 for vacuum cleaner repair near me, fix, servicing & maintenance.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "RoboRock vacuum cleaner repair in Dubai, RoboRock vacuum cleaner service center in Dubai, RoboRock vacuum cleaner repair near me, fix RoboRock vacuum cleaner, RoboRock vacuum cleaner servicing, RoboRock vacuum cleaner maintenance");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/roborock-vacuum-cleaner-repair-service-in-dubai/");
  const metaImage = String(Image || "https://www.fajservices.ae/img/inspection-robot-vacuum-cleaner.avif");

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

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
        const [faqsResponse, testimonialsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/RoboRockVacuumCleanerHomeappFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/VacuumCleanerHomeappTestimonials.json`)
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

        <section className="section cs_py_30">
          <div className="container">

            <h1 className="cs_fs_30">Roborock Vacuum Cleaner Repair & Service in Dubai</h1>
            <p>FAJ Technical Services L.L.C, founded in 2010, has established itself as a trusted authority in robotic vacuum maintenance. We specialize in Roborock robot vacuum cleaner repair, Roborock robot vacuum, Roborock wet dry vacuum maintenance, Roborock cordless vacuum cleaner deep cleaning service & repair center near you in Dubai, Sharjah, and Abu Dhabi. <br />Our comprehensive services include error diagnosis, repairs, and necessary parts for robot vacuum cleaning service, all conveniently available near in your location Dubai.</p>

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
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Roborock Vacuum Cleaner Repair</h2>

                <p className="mb-2">Dealing with a Roborock vacuum cleaner breakdown can be challenging, but we’re here to help! Our skilled technicians offer prompt service for  Roborock, including the Roborock Saros Series, Saros Z70, Saros 10R, and Qrevo models. <br />Visit our vacuum cleaner service center in Dubai for quick solutions to get your Roborock vacuum back in working order.</p>

                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Fast and Reliable Appliances Service
                </h2>
                <p className="mb-2">At <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"><b>FAJ Technical Services L.L.C</b></a>, we understand that appliance breakdowns never happen at a convenient time. That’s why our trained and qualified technicians are here to provide you with reliable appliance repair services. With our help, you can avoid the expense of purchasing a new appliance and get your appliance up and running again before you even have a chance to stress about it.</p>
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
            <h2 className="cs_fs_30">Why Choose FAJ for Roborock Vacuum Repair?</h2>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('inspection-robot-vacuum-cleaner')} alt="inspection robot vacuum cleaner" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li><strong>Expert Technicians:</strong> Our team has extensive experience in repairing all types of vacuum cleaners, including Winbot robotic vacuums, upright models, canisters, handhelds, and other robotic variants.</li>
                  <li><strong>Affordable Repair Pricing:</strong> We offer clear and competitive repair pricing for our services.</li>
                  <li><strong>Fast Turnaround:</strong> We strive to repair your vacuum cleaner as quickly as possible, with many repairs completed in a short timeframe. -</li>
                  <li><strong>Service Warranty: </strong>All vacuum cleaner repairs come with a warranty for your peace of mind.</li>
                  <li><strong>Eco-Friendly Solution:</strong> Repairing your vacuum cleaner helps reduce waste and saves you money compared to buying a new one.</li>
                </ul>
                <p>If you need repairs for your coffee machine, stand mixer, or robot vacuum, please contact us. The <a href="https://www.google.com/maps/dir//Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/@25.1105958,55.1452595,22158m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94!2m2!1d55.227661!2d25.1106186?entry=ttu&amp;g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D">FAJ workshop</a> is conveniently located near both Al Khail Road and Sheikh Zayed Road. When you drop off your appliance at the workshop, you will receive a <strong>discount</strong> on the technical inspection fee and other services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Problems with Roborock Vacuum Cleaners That May Require Service</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Inconsistent Pickup:</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Clogged brushes, dirty filters, and full dustbins can reduce suction power. Be sure to clean them regularly with the Roborock vacuum.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Poor Mopping:</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Roborock wet dry vacuum & cordless vacuum, can have performance issues due to dirty mop pads, clogged water tanks, or obstructed nozzles.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Stuck / Lost:</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Roborock robot vacuum performs at its best, removing any loose crumbs, dark rugs, & small gaps. Clearing the clutter is essential for optimal operation!</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fails to Dock:</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Make sure to clean the charging contacts on both the Roborock robot and the dock, as dirty contacts can prevent a proper connection.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Vacuum Error Codes:</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Problems with the sensors, such as dust or dirt accumulation, as well as blockages in the docking station, can lead to robot vacuum errors.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Short Battery Life/Not Charging:</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Possible issues with the Roborock vacuum cleaner may include dirty contacts, the Roborock robot vacuum's old battery, or the need for a reset.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Robot Connectivity:</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If you are currently experiencing challenges with Wi-Fi connectivity and app connection problems for Roborock robot vacuums.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Unexpected Behavior:</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Firmware glitches & dirt on the sensors will definitely result in inconsistent cleaning performance. It's essential to address these issues to ensure optimal operation.</p>
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
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR ROBOROCK VACUUM CLEANER</h2>

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
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li><strong>B 2 B Agreement Services:</strong> We offer repair and servicing for Roborock Vacuum Cleaners, both under and out of warranty, in line with our agreements with vacuum cleaner distributors and retailers in Dubai, Sharjah, and Abu Dhabi, providing B2B pricing.</li>
                  <li><strong>Diagnostics and quotations:</strong> The technical inspection consisted of a thorough diagnostic assessment and an accompanying quotation.</li>
                  <li><strong>Same day appointments:</strong> Prompt response for urgent repairs.</li>
                  <li><strong>Roborock Vacuum Cleaner Cleaning Service</strong>: Regular maintenance of Roborock wet and dry vacuums, Roborock cordless vacuum cleaners, deep cleaning services, and repair centers is essential for extending the lifespan of your vacuum in Dubai.</li>
                  <li><strong>Small Repairs: </strong>Cost-effective solutions for everyday challenges. Our design aims to minimize your downtime.</li>
                  <li><strong>Weekend appointments available: </strong>We provide flexible scheduling options to accommodate your needs.</li>
                  <li><strong>Open 8am-6pm weekdays: </strong>Convenient access for repairs and servicing of robot vacuums.</li>
                </ul>
              </div>
            </div>
          </div>
        </section >

        {/* The Benefits  */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">What are the benefits of an RoboRock vacuum cleaner?</h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/efficiency-and-time')} alt="Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Efficiency and Time-Saving</h3>
                      <p className="small">Cleaning large areas quickly can significantly reduce the time required compared to traditional methods. Additionally, robotic vacuums require minimal effort to operate.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Superior Cleaning Performance</h3>
                      <p className="small">A robotic vacuum cleaner effectively removes dirt, pet hair, and dust mites, improving indoor air quality compared to traditional sweeping methods.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/lifestyle')} alt="lifestyle" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Ideal for Busy Lifestyles</h3>
                      <p className="small">Robotic vacuums clean autonomously, while cordless stick vacuums allow for quick and easy clean-ups.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Cost-Effective Cleaning Solution</h3>
                      <p className="small">Roborock vacuum cleaners save money by reducing the need for professional cleaning and extending the life of carpets and flooring.</p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/wind')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Improves Air Quality</h3>
                      <p className="small">The HEPA filter enhances air quality by trapping allergens such as dust and pet dander, providing relief for allergy sufferers and minimizing respiratory problems.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/robot-vacuum')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Vacuum and Mop Function</h3>
                      <p className="small">Robot vacuum and mop combos clean efficiently by vacuuming and mopping at the same time, minimizing the need for multiple tools.</p>
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
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY RoboRock Vacuum CLEANER REPAIR</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout or technical inspection fee that will apply, depending on the brand, model and capacity, for diagnostics. Same-day visits are available for bookings made before 12:00 PM. For bookings made after 12:00 PM, next-day visits can be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month repair warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
          </div>
        </section>

        <BeforeAfter
          title="Recent Completed Repair & Service"
          subTitle="Before & after"
          bgImg={getImageSrc('background-image-2')}
          beforeImg={getImageSrc('vaccum-cleaner-before-image')}
          afterTitle="After"
          afterImg={getImageSrc('vaccum-cleaner-after-image')}
          beforeTitle="Before"
        />
        {/* Gallery */}
        <section className="section cs_py_30 gallery-section bg-light-gray mb-4">
          <div class="container">
            <h3 class="mb-4 text-center">Gallery</h3>
            <div class="row g-4">

              <div class="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('vacuum-cleaners/inspection-robot-vacuum-celaner')}
                  class="img-fluid rounded shadow mb-4"
                  alt="BBQ Grill Repair Service Dubai"
                />

                <img
                  src={getImageSrc('vacuum-cleaners/robot-vacuum-celaner')}
                  class="img-fluid rounded shadow"
                  alt="BBQ Grill Cleaning Service Dubai"
                />
              </div>

              <div class="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('vacuum-cleaners/vacuum-cleaner-repair-service')}
                  class="img-fluid rounded shadow mb-4"
                  alt="BBQ Grill Service"
                />

                <img
                  src={getImageSrc('vacuum-cleaners/robot-vacuum-celaner-repair')}
                  class="img-fluid rounded shadow"
                  alt="BBQ Grill Repair"
                />
              </div>

              <div class="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('vacuum-cleaners/inspection-robot-vacuum-celaner-repair')}
                  class="img-fluid rounded shadow mb-4"
                  alt="BBQ Grill Repair Service"
                />

                <img
                  src={getImageSrc('vacuum-cleaners/vacuum-celaner-repair')}
                  class="img-fluid rounded shadow"
                  alt="BBQ Grill Cleaning Service"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Gallery */}

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

export default RoboRockVacuumCleanerRepairAndServiceDetail;

