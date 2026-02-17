import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import HeaderForm from "../../Headeform/HeaderForm";
import BlogFridge from "../../Blog/BlogFridge";
import BrandsSliderSection from "../../BrandsSliderSection";
import Testimonial1 from "../../Testimonial/Testimonial1";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const RefrigeratorRepairInDubaiDetails = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Refrigerator Repair Service Near Me | Fridge Repair Dubai");
  const metadescription = String(description || "Best Refrigerator Repair & Service in Dubai. FAJ Experts to get same-day Fridge repair & maintenance near you. Freezer fixing & service center.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Refrigerator repair, Fridge repair, Refrigerator service, Freezer repair, Dubai refrigerator repair, Fridge service Dubai, Appliance repair Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/refrigerator-repair-service/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/fridgerepair/public");


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
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Refrigerator Repair Service, Fridge Repair Dubai, Refrigerator not cooling, Fridge not freezing, Refrigerator water leakage, Fridge Compressor Repair, Refrigerator Gas Refill, Fridge Thermostat Repair, Refrigerator Service Dubai, Fridge Maintenance, Refrigerator Repair near me, Side by Side Fridge Repair, French Door Fridge Repair, Fridge Ice Maker Repair, Refrigerator Technician",
              "image": ["https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"],
              "url": "https://www.fajservices.ae/services/home-appliances-repair/refrigerator-repair-service/",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "3452",
                "bestRating": "5"
              }
            })}
          </script>
        </Helmet>
      </HelmetProvider>
      <HeaderForm />
      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Refrigerator Repair Service | Freezer and Fridge Repair Dubai</h1>
            <p>
              Since 2010, FAJ has established itself as the go-to reference for refrigerator, freezer and fridge repair near me service in Dubai and Sharjah. We prioritise refrigerator repair near you over replacements, helping you save money and avoid the bother of buying a new fridge or freezer.
              Rely on our experienced experts for fast and reliable refrigerator maintenance in Dubai!
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
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
                <p className="mb-2">At <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7"><b>FAJ Technical Services L.L.C</b></a>, we understand that appliance breakdowns never happen at a convenient time. That's why our trained and qualified technicians are here to provide you with reliable appliance repair services. With our help, you can avoid the expense of purchasing a new appliance and get your appliance up and running again before you even have a chance to stress about it.</p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/VAmZ-qKWkjw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

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
                <img className="blue-border" src={getImageSrc('techfridge')} alt="Fridge repair" />
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
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fridge Not Cooling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If the refrigerator coils are hot but the fridge isn't cooling, there may be a problem with the gas, thermostat, or the fridge coils.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Water Leaking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A common issue with refrigerators is water leakage, often caused by a blocked defrost drain or a faulty water supply line.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Refrigerator Freezing Food</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your refrigerator is freezing food, it's likely due to a faulty temperature control thermostat that regulates the cooling voltage.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fridge Overheating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Fridge overheating can damage the compressor and other parts of your refrigerator. It is essential to address this issue promptly.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Defective Thermostat</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Defective temperature control thermostat, PCB, and compressor issues usually require a repair technician to address.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fridge Running Always</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your fridge runs constantly, a faulty thermostat, relay, or sensor might prevent it from reaching the desired temperature as set.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Dirty Condenser Coils</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ensure that these condensing coils are clean, as this can affect the compressor's operation, impacting cooling and compressor efficiency.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Door Seal Issues</h3>
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
                <img className="bordered-img w-100" src={getImageSrc('fridgerepair')} alt="Fridge repair" />
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
                        <img src={getImageSrc('icon/Ensuring-Safety')} alt="Ensuring-Safety" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h3>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Optimal-Performance" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Optimal Performance
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
                        <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Lower-Energy-Bills" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                      <p className="small">Energy efficient refrigerator translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair')} alt="Saving-Money-on-Repair" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Saving Money on Repair</h3>
                      <p className="small">Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.</p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/extending')} alt="extending" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Extending refrigerator Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your refrigerator, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')} alt="Peace-of-Mind" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
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
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your refrigerator runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your refrigerator repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
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
                    <h3>We Are Experts</h3>
                    <p>We are experts in refrigerator repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two refrigerator at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled refrigerator technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
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
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/lg/"><strong>LG Refrigerator Repair</strong></a><strong>: </strong>FAJ is here to support you when things go wrong. We understand that your LG refrigerator is essential for daily life, preserving your food and ensuring your meals are always prepared. FAJ is here for refrigerator repair near me and fridge freezer maintenance service in Dubai and Sharjah.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/samsung/"><strong>Samsung Refrigerator Repair</strong></a><strong>:</strong> If you are facing any problems with your Samsung refrigerator repair, Samsung fridge freezer service, fix washer dryer, or dishwasher, contact the FAJ team for same day fridge repair near me service in Dubai.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/electrolux/"><strong>Electrolux Refrigerator Repair</strong></a><strong>:</strong> When you need Electrolux refrigerator repair near me in Dubai, we have a team of professional and qualified fridge technicians available throughout Dubai. Call us now for freezer maintenance, fridge repair service near you in Dubai</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/"><strong>Bosch Refrigerator Repair</strong></a><strong>: </strong>If you are looking for the best Bosch fridge repair near me service in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch appliance service provider in the area. FAJ is here to help with refrigerator repair near by you, freezer fridge maintenance service near me in Dubai</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/"><strong>Viking Fridge Freezer Repair</strong></a><strong>: </strong>Your Viking appliances may require repair or maintenance and we can help. For high-quality Viking Fridge Freezer repair near me service in Dubai, rely on FAJ. Get same day refrigerator repair near me and built in refrigerator service and fix refrigerator error by FAJ.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/daewoo/"><strong>Daewoo Refrigerator Repair</strong></a><strong>: </strong>We provide expert Daewoo fridge repair near me service in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator repair, washing machine repair, dryer repair service and more. Book now fridge repair in Sharjah and Dubai Area.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/siemens/"><strong>Siemens Refrigerator Repair</strong></a><strong>:</strong> Are you concerned about your Siemens appliance malfunctioning and searching for a reliable Siemens refrigerator repair services near me in Dubai? Contact us for same-day fridge repair near me service in your location Dubai and Sharjah!</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/teka/"><strong>Teka Refrigerator Repair</strong></a>: If you're searching for the best Teka appliance repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerator maintenance and Teka refrigerator repair near me service, washing machine repair, and oven repairs. Freezer repair and freezer maintenance service. FAJ is recognized as the leading Teka appliance service provider in the area.</li>
                </ul>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/aeg/">AEG</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/ariston/">Ariston</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/beko/">Beko</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/blomberg/">Blomberg</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/faber/">Faber</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/fagor/">Fagor</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/fisher-paykel/">Fisher and Paykel</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/foster/">Foster</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/gaggenau/">Gaggenau</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/hitachi/">Hitachi</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/hoover/">Hoover</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/indesit/">Indesit</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/lg/">LG</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/neff/">Neff</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/smeg/">Smeg</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/sub-zero/">Sub Zero</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/terim/">Terim</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/whirlpool/">Whirlpool</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/zanussi/">Zanussi</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/de-dietrich-appliance-repair-service/">De Dietrich</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/baumatic/">Baumatic</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/bertazzoni/">Bertazzoni</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/bompani/">Bompani</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/boston/">Boston</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/brandt/">Brandt</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/gibson/">Gibson</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/gorenje/">Gorenje</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/hisense/">Hisense</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/kelvinator/">Kelvinator</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/kenmore/">Kenmore</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/panasonic/">Panasonic</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/sanyo/">Sanyo</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/sears/">Sears</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/wolf/">Wolf</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/haier/">Haier</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/elica/">Elica</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/marvel/">Marvel</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/miele/">Miele</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/maytag/">Maytag</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/toshiba/">Toshiba</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/thermador/">Thermador</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/sharp/">Sharp</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/admiral/">Admiral</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/aftron/">Aftron</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/unimac/">Unimac</Link>
                </p>
              </div>
            </div>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
                <CallNowButton />
              </div>
            </div>

          </div>
        </section>

        {/* Brands section */}
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
        <BlogFridge />
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
<path d="M8 2V14M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
<path d="M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
  );
};

export default RefrigeratorRepairInDubaiDetails;