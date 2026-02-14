import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import HeaderForm from "../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import BrandsSliderSection from "../../BrandsSliderSection";
import Testimonial1 from "../../Testimonial/Testimonial1";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const DishwasherRepairDetailDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Dishwasher Repair Dubai | Dishwasher Service Near Me");
  const metadescription = String(description || "Reliable Dishwasher Repair and Service in Dubai. Book with us for built in dishwasher repairs, error fixing service center & best glass washer maintenance");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Dishwasher Repair Service, Dishwasher Repair Dubai, Dishwasher Service Dubai, Dishwasher Fix Dubai, Dishwasher Maintenance Dubai, Dishwasher Machine Repair Dubai, Dishwasher Machine Service Dubai, Dishwasher Machine Fix Dubai, Dishwasher Machine Maintenance Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/dishwasher-repair-service/");
  const metaImage = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/dishwasher-repair/public";

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
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/DishwasherRepairFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/DishwasherRepairTestimonial.json`),
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
          <meta name="description" content={metadescription} />
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
              "name": "Dishwasher Repair Service, Dishwasher Repair Dubai, Dishwasher not draining, Dishwasher not cleaning, Dishwasher leaking water, Dishwasher not starting, Dishwasher Pump Repair, Dishwasher Motor Repair, Dishwasher Service Dubai, Dishwasher Maintenance, Dishwasher Repair near me, Built in Dishwasher Repair, Dishwasher Drying Problem, Dishwasher Error Code Fix, Dishwasher Technician",
              "image": ["https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"],
              "url": "https://www.fajservices.ae/services/home-appliances-repair/dishwasher-repair-service/",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1452",
                "bestRating": "5"
              }
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "How can I determine whether my business dishwasher requires maintenance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A commercial dishwasher that isn't cleaning properly or keeps leaking might make strange noises or display error codes. it's best to get professional repair services if you see any of these problems."
                  }
                }, {
                  "@type": "Question",
                  "name": "Which commercial dishwasher brands do you repair?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer repair services for a variety of commercial dishwasher brands at FAJ Technical Services L.L.C. To guarantee thorough fixes, our skilled technicians have handled a variety of makes and models."
                  }
                }, {
                  "@type": "Question",
                  "name": "In what time frame can you reply to a request for commercial dishwasher repair?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aiming to minimize downtime for your business, we usually respond to repair requests in a timely manner."
                  }
                }, {
                  "@type": "Question",
                  "name": "Are the professionals you send to fix commercial dishwashers certified?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely, our technicians are qualified and experienced in fixing commercial dishwashers. With their expertise, you can be sure that your equipment is operating properly because they can accurately diagnose problems and put effective solutions in place."
                  }
                }, {
                  "@type": "Question",
                  "name": "Do you provide commercial dishwasher maintenance services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unquestionably. We offer routine maintenance services for commercial dishwashers in addition to repairs. Regular maintenance keeps your equipment operating at its best, prolongs its lifespan, and helps prevent breakdowns."
                  }
                }, {
                  "@type": "Question",
                  "name": "Can you give me an estimate of the cost before the repair is done?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sure, we provide clear, up-front pricing estimates for our repair services for commercial dishwashers."
                  }
                }]
              })}
          </script>

        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Dishwasher Repair | Dishwasher Maintenance Service in Dubai</h1>
            <p>
              Since 2010, FAJ has been a trusted name in dishwasher repair and service in Dubai and Sharjah. Our skilled professionals are ready to assist with any brand, using high-quality tools for effective service.
              <br /> We prioritise repairs over replacements, helping you save money and avoid the hassle of buying a new dishwasher. Rely on our experienced experts for fast and reliable dishwasher maintenance in Dubai!
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Dishwasher Repair and Service Near You </h2>

                <p className="mb-2">
                  Has your dishwasher stopped working completely? Or is it running, but your dishes and cutlery aren't coming out as clean as they should?
                  <br />
                  At FAJ, we understand that a machine breakdown is always inconvenient. that&apos;s why our team of experts is here to provide dishwasher repair and service appointments near you in Dubai and Sharjah.
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
                  src="https://www.youtube.com/embed/Cye_OFTAT3E"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>

        {/* Why  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Dishwasher Maintenance Service Important in Dubai?</h2>
            <p>
              Proper dishwasher maintenance is essential for extending its lifespan and enhancing efficiency, especially in Dubai's climate. Here are the main benefits:
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('dishwasher-repair-service')} alt="Dishwasher Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Dishwasher Extended Lifespan: </strong> Regular maintenance helps the dishwasher last longer, saving on replacement costs. </li>
                  <li> <strong> Dishwasher Improved Efficiency: </strong> A well-maintained dishwasher uses less energy, leading to lower utility bills, which is essential in Dubai. </li>
                  <li> <strong> Dishwasher Preventing Costly Repair: </strong> Catching minor issues early prevents them from escalating into expensive repairs. </li>
                  <li> <strong> Dishwasher Preserving induction hob Integrity: </strong> Regular cleaning prevents dust buildup that affects performance. </li>
                  <li> <strong> Dishwasher Early Problem Detection: </strong> Routine checks help identify potential issues before they become serious. </li>
                  <li> <strong> Dishwasher Cost-Effective: </strong> Maintenance costs are lower than early replacements or significant repairs. Investing in dishwasher care ensures safety and efficiency and is a wise economic choice in Dubai. </li>
                  <li> <strong> Dishwasher Energy Efficiency: </strong> Regularly maintaining your dishwasher can improve efficiency and save you money. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems with Dishwashers  </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dishwasher not Draining</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A pool of water at the bottom of your dishwasher indicates drainage issues. Always ensure that there are no blockages in the drain hose.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dishwasher Leaks</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Dishwasher leaks can inflict serious damage to your kitchen and need immediate repairs, often due to cracks in the dishwasher's components.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dishwasher not Starting</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The dishwasher won't start unless the door is properly closed, and any door seal or latch issues will prevent wash cycles from beginning.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dirty Dishes</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">This usually occurs because you either overloaded the dishwasher or stacked the dishes incorrectly before starting the wash cycle, causing poor cleaning results.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Excessive Suds</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Your dishwasher may fill with excess suds during use, leaving suds in the bottom and residue on your dishes after cycle ends, causing poor cleaning.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Smelly Dishwasher</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Bad dishwasher odors often come from stale, wet food trapped inside. Clean the bottom screen regularly to keep odors fresh and away.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Food Crumbs</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If you find food particles on your dishes after washing, check the filter assembly to see if it is blocked. If it is, remove the filter and clean it.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Heating Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Your dishwasher isn't heating water, leading to cold washes and ineffective cleaning. Hot water is essential for activating the detergent.</p>
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

        {/*HERE ARE THE SERVICES */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR THE DISHWASHER </h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('dishwasher-repair')} alt="Dishwasher Repair" />
              </div>

              <div className="col-xl-6">
                <p className="mb-0">
                  We specialise in all types and brands of dishwashers, including dishwasher machines.
                </p>

                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Dishwasher Installation: </strong>  Expert installation of various types and brands of dishwashers, ensuring optimal performance and efficiency. </li>
                  <li> <strong> Dishwasher Diagnostics: </strong>  We conduct thorough fault finding to diagnose issues effectively. We also provide eligibility assessments and detailed quotations to address any concerns with your system. </li>
                  <li> <strong> Dishwasher Repair Service: </strong>  Efficient repair services for all dishwasher machine components, ensuring quick resolution of any issues, such as leaks, electrical failures, and system malfunctions. </li>
                  <li> <strong> Dishwasher Annual Maintenance Contract: </strong>  This contract outlines the terms and services covered for the dishwasher's annual maintenance. </li>
                  <p className="mb-0">
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for optimal performance, efficiency, and longevity of your dishwasher.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section >

        {/* The Benefits Of Appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">The Benefits Of Dishwasher Service Dubai
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
                      <p className="small">Regular maintenance helps your dishwasher run smoothly and efficiently, delivering the best results every time.
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
                      <p className="small">Energy efficient dishwasher translate to monthly savings on utility bills, putting more money back in your pocket.</p>
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
                      <h3 className="text-uppercase mb-2 cs_fs_16">Extending dishwasher Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your dishwasher, delaying the need for replacements.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')} alt="Peace-of-Mind" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                      </h3>
                      <p className="small">Knowing your dishwasher are in top condition gives you confidence and removes the stress of unexpected failures.</p>
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
                    <img src={getImageSrc('icon/fast-reliable')} alt="Fast,Reliable Service" />
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
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your dishwasher runs smoothly and providing peace of mind.</p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your dishwasher repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
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
                    <img src={getImageSrc('icon/value')} alt="value" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in dishwasher repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="confidence-guarantee" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two dishwasher at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon servicetrustworthy" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled dishwasher technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('icon/fajteam')} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise  */}
        <section className="section cs_py_30 bg-light-gray ">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY Dishwasher REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 157 to 280 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month repair warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h3>We specialise in dishwasher services for the following brands </h3>
            <div className="row">
              <div className="col-12">
                <ul className="mb-0">
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/"><strong>LG Dishwasher Repair</strong></a><strong>: </strong>FAJ is here to support you when issues arise. We understand that your LG dishwasher is essential for daily life, keeping your dishes clean and ready for every meal. Call FAJ for expert dishwasher repair near me and fix dishwasher errors.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/samsung-fridge-repair-in-dubai-samsung-washing-machine-repair-in-dubai-samsung-cooker-repair-in-dubai-samsung-oven-repair-in-dubai-samsung-appliances-maintenance-in-dubai-samsung-refrigerator-fix-repa/"><strong>Samsung Dishwasher Repair</strong></a><strong>: </strong>If you are experiencing issues with your Samsung dishwasher, contact the FAJ team for same-day dishwasher repair service in Dubai. We offer dishwasher maintenance and dishwasher cleaning services in Dubai.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/electrolux-home-appliances-repair/"><strong>Electrolux Dishwasher Repair</strong></a><strong>: </strong>When you need Electrolux dishwasher repair in Dubai, we have a team of professional and qualified technicians available throughout Dubai and Sharjah. Contact us for dishwasher repair near me service and dishwasher maintenance in Dubai and Sharjah.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/bosch-home-appliances-repair/"><strong>Bosch Dishwasher Repair</strong></a><strong>: </strong>If you are looking for the best Bosch dishwasher repair in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch appliance repair and are recognized as the leading Bosch dishwasher repair and service provider in the area.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/viking-appliances-service/"><strong>Viking Dishwasher Repair</strong></a><strong>: </strong>If you are looking for Viking dishwasher repair or maintenance and we can help. For high-quality Viking dishwasher maintenance service in Dubai, rely on FAJ.&nbsp;</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/daewoo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/"><strong>Daewoo Dishwasher Repair</strong></a><strong>: </strong>We provide expert services for Daewoo dishwasher repair near you in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator, dishwasher, dryer repair and more.&nbsp;</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/siemens-home-appliances-repair/"><strong>Siemens Dishwasher Repair</strong></a><strong>: </strong>Are you concerned about your Siemens dishwasher malfunctioning and searching for a reliable Siemens dishwasher repair company in Dubai? Contact us for same-day service!</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/teka-home-appliance-installation-maintenance-repair-fix-service-in-dubai/"><strong>Teka Dishwasher Repair</strong></a><strong>: </strong>If you're searching for the best Teka dishwasher repair near me service in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for fix Teka dishwasher, built in dishwasher repair services, refrigerators, washing machines, and oven repair. FAJ is recognized as the leading Teka appliance service provider in the area.</li>
                </ul>

                <p><a href="/aeg-fridge-repair-in-dubai-aeg-washing-machine-repair-in-dubai-aeg-cooker-repair-in-dubai-aeg-oven-repair-in-dubai-aeg-appliances-maintenance-in-dubai-aeg-refrigerator-fix-repairs-service-in-dubai-aeg/">AEG</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/ariston-fridge-repair-in-dubai-ariston-washing-machine-repair-in-dubai-ariston-cooker-repair-in-dubai-ariston-oven-repair-in-dubai-ariston-appliances-maintenance-in-dubai-ariston-refrigerator-fix-repa/">Ariston</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/beko-fridge-repair-in-dubai-beko-washing-machine-repair-in-dubai-beko-cooker-repair-in-dubai-beko-oven-repair-in-dubai-beko-appliances-maintenance-in-dubai-beko-refrigerator-fix-repairs-service-in-dub/">Beko</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/blomberg-fridge-repair-in-dubai-blomberg-washing-machine-repair-in-dubai-blomberg-cooker-repair-in-dubai-blomberg-oven-repair-in-dubai-blomberg-appliances-maintenance-in-dubai-blomberg-refrigerator-fi/">Blomberg</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/electrolux-home-appliances-repair/">Electrolux</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/faber-appliances-service/">Faber</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/fagor-fridge-repair-in-dubai-fagor-washing-machine-repair-in-dubai-fagor-cooker-repair-in-dubai-fagor-oven-repair-in-dubai-fagor-appliances-maintenance-in-dubai-fagor-refrigerator-fix-repairs-service/">Fagor</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/fisher-and-paykel-fridge-repair-in-dubai-fisher-and-paykel-washing-machine-repair-in-dubai-fisher-and-paykel-cooker-repair-in-dubai-fisher-and-paykel-oven-repair-in-dubai-fisher-and-paykel-appliances/">Fisher and Paykel</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/foster-appliances-services-foster-dishwasher-repair-service-in-dubai-foster-cooking-range-repair-service-in-dubai-foster-cooktop-repair-service-in-dubai-foster-oven-repair-in-dubai-foster-rangetop-r/">Foster</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/gaggenau-fridge-repair-in-dubai-gaggenau-washing-machine-repair-in-dubai-gaggenau-cooker-repair-in-dubai-gaggenau-oven-repair-in-dubai-gaggenau-appliances-maintenance-in-dubai-gaggenau-refrigerator-fi/">Gaggenau</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/hitachi-fridge-repair-in-dubai-hitachi-washing-machine-repair-in-dubai-hitachi-cooker-repair-in-dubai-hitachi-oven-repair-in-dubai-hitachi-appliances-maintenance-in-dubai-hitachi-refrigerator-fix-repa/">Hitachi</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/hoover-fridge-repair-in-dubai-hoover-washing-machine-repair-in-dubai-hoover-cooker-repair-in-dubai-hoover-oven-repair-in-dubai-hoover-appliances-maintenance-in-dubai-hoover-refrigerator-fix-repairs-se/">Hoover</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/">Indesit </a>
                  |<a href="/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/"> LG</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/sub-zero-fridge-repair-in-dubai-sub-zero-washing-machine-repair-in-dubai-sub-zero-cooker-repair-in-dubai-sub-zero-oven-repair-in-dubai-sub-zero-appliances-maintenance-in-dubai-sub-zero-refrigerator-fi/">Sub Zero</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/terim-appliances-service/">Terim</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/whirlpool-fridge-repair-in-dubai-whirlpool-washing-machine-repair-in-dubai-whirlpool-cooker-repair-in-dubai-whirlpool-oven-repair-in-dubai-whirlpool-appliances-maintenance-in-dubai-whirlpool-refrigera/">Whirlpool</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/zanussi-fridge-repair-in-dubai-zanussi-washing-machine-repair-in-dubai-zanussi-cooker-repair-in-dubai-zanussi-oven-repair-in-dubai-zanussi-appliances-maintenance-in-dubai-zanussi-refrigerator-fix-repa/">Zanussi</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/de-dietrich-fridge-repair-in-dubai-de-dietrich-washing-machine-repair-in-dubai-de-dietrich-cooker-repair-in-dubai-de-dietrich-oven-repair-in-dubai-de-dietrich-appliances-maintenance-in-dubai-de-dietri/">De Dietrich</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/baumatic-appliances/">Baumatic</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/bertazzoni-refrigerator-repair-in-dubai-bertazzoni-appliances-service-bertazzoni-fridge-repair-in-dubai-bertazzoni-washing-machine-washer-bertazzoni-dryer-repair-in-dubai-bertazzoni-dishwasher-cooker/">Bertazzoni</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/bompani-fridge-repair-in-dubai-bompani-washing-machine-repair-in-dubai-bompani-cooker-repair-in-dubai-bompani-oven-repair-in-dubai-bompani-appliances-maintenance-in-dubai-bompani-refrigerator-fix-repa/">Bompani</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/boston-refrigerator-repair-in-dubai-boston-appliances-service-boston-fridge-repair-in-dubai-boston-washing-machine-washer-boston-dryer-repair-in-dubai-boston-dishwasher-cooker/">Boston</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/brandt-fridge-repair-in-dubai-brandt-washing-machine-repair-in-dubai-brandt-cooker-repair-in-dubai-brandt-oven-repair-in-dubai-brandt-appliances-maintenance-in-dubai-brandt-refrigerator-fix-repairs-se/">Brandt</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/gibson-fridge-repair-in-dubai-gibson-washing-machine-repair-in-dubai-gibson-cooker-repair-in-dubai-gibson-oven-repair-in-dubai-gibson-appliances-maintenance-in-dubai-gibson-refrigerator-fix-repairs-se/">Gibson</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/gorenje-fridge-repair-in-dubai-gorenje-washing-machine-repair-in-dubai-gorenje-cooker-repair-in-dubai-gorenje-oven-repair-in-dubai-gorenje-appliances-maintenance-in-dubai-gorenje-refrigerator-fix-repa/">Gorenje</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/hisense-fridge-repair-in-dubai-hisense-washing-machine-repair-in-dubai-hisense-cooker-repair-in-dubai-hisense-oven-repair-in-dubai-hisense-appliances-maintenance-in-dubai-hisense-refrigerator-fix-repa/">Hisense</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/kelvinator-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Kelvinator</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/kenmore-appliances-service/">Kenmore</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/panasonic-fridge-repair-in-dubai-panasonic-washing-machine-repair-in-dubai-panasonic-cooker-repair-in-dubai-panasonic-oven-repair-in-dubai-panasonic-appliances-maintenance-in-dubai-panasonic-refrigera/">Panasonic</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/sanyo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Sanyo</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/sears-home-appliances-installation-maintenance-repair-fix-service-in-dubai/">Sears</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/wolf-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Wolf</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/haier-fridge-repair-in-dubai-haier-washing-machine-repair-in-dubai-haier-cooker-repair-in-dubai-haier-oven-repair-in-dubai-haier-appliances-maintenance-in-dubai-haier-refrigerator-fix-repairs-service/">Haier</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/elica-appliances-service/">Elica</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/marvel-fridge-repair-in-dubai-marvel-washing-machine-repair-in-dubai-marvel-cooker-repair-in-dubai-marvel-oven-repair-in-dubai-marvel-appliances-maintenance-in-dubai-marvel-refrigerator-fix-repairs-se/">Marvel</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/miele-fridge-repair-in-dubai-miele-washing-machine-repair-in-dubai-miele-cooker-repair-in-dubai-miele-oven-repair-in-dubai-miele-appliances-maintenance-in-dubai-miele-refrigerator-fix-repairs-service/">Miele</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/maytag-fridge-repair-in-dubai-maytag-washing-machine-repair-in-dubai-maytag-cooker-repair-in-dubai-maytag-oven-repair-in-dubai-maytag-appliances-maintenance-in-dubai-maytag-refrigerator-fix-repairs-se/">Maytag</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/toshiba-home-appliance-installation-maintenance-repair-fix-service-in-dubai-2/">Toshiba</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/thermador-appliances-service/">Thermador</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/sharp-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Sharp</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/admiral-fridge-repair-in-dubai-admiral-washing-machine-repair-in-dubai-admiral-cooker-repair-in-dubai-admiral-oven-repair-in-dubai-admiral-appliances-maintenance-in-dubai-admiral-refrigerator-fix-repa/">Admiral</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/aftron-fridge-repair-in-dubai-aftron-washing-machine-repair-in-dubai-aftron-cooker-repair-in-dubai-aftron-oven-repair-in-dubai-aftron-appliances-maintenance-in-dubai-aftron-refrigerator-fix-repairs-se/">Aftron</a>
                  <span>&nbsp;-&nbsp;</span>
                  <a href="/unimac-washing-machine-repair-in-dubai-unimac-dryer-repair-in-dubai-unimac-washer-dryer-repair-in-dubai-unimac-maintenance-in-dubai-unimac-laundry-service-in-dubai-unimac-dubai/">Unimac</a>
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

        {/* Testimonial section */}
        {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg={reviewsbg}
            testimonialData={testimonial_data}
            sectionId="home-testimonials"
          />
        )}
         <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>
        </section>
        {/* FAQs Section - FIXED */}
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
<path d="M8 2V14M2 8H14" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
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
<path d="M2 8H14" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
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

export default DishwasherRepairDetailDetail;