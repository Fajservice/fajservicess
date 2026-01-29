import { useEffect, useRef, useState, useCallback, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Serviceappointemnt = lazy(() => import('../../Contact/Serviceappointemnt'));
const MaintenanceContract = lazy(() => import('../../MaintenanceContract/MaintenanceContract'));
const BlogWashingMachine = lazy(() => import("../../Blog/BlogWashingMachine"));
const BrandsSliderSection = lazy(() => import("../../BrandsSliderSection"));
const Testimonial1 = lazy(() => import("../../Testimonial/Testimonial1"));
import HeaderForm from "../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const OptimizedImage = ({ src, alt, className, width, height, priority = false }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
    />
  );
};

const LazyYouTube = ({ videoId, title }) => {
  const [load, setLoad] = useState(false);

  return (
    <div
      style={{ position: 'relative', paddingBottom: '56.25%', height: 0, cursor: 'pointer' }}
      onClick={() => setLoad(true)}
      className="bordered-img blue-border"
    >
      {!load ? (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}

          />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '68px',
            height: '48px',
            background: 'rgba(255,0,0,0.8)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
              <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
              <path d="M 45,24 27,14 27,34" fill="#fff"></path>
            </svg>
          </div>
        </>
      ) : (
        <iframe
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

const WashingMachineRepairServiceDubaiDetail = ({
  titleSeo,
  description,
  Author,
  Keyword,
  URL,
  Image,
  subtitle,
  titlereview,
  reviewsbg

}) => {
  const metaTitle = String(
    titleSeo || "Emergency Washing Machine Repair in Dubai – 60-Minute Response"
  );

  const metaDescription = String(
    description || "FAJ is an expert in washing machine repair & service center in Dubai. Call 04-3300002 for washer dryer repairs, laundry machine maintenance near me."
  );

  const metaAuthor = String(
    Author || "FAJ Technical Services L.L.C"
  );

  const metaKeyword = String(
    Keyword || "Washing Machine Repair, Washing Machine Maintenance, Washing Machine Service"
  );

  const metaURL = String(
    URL || "https://www.fajservices.ae/services/home-appliances-repair/washing-machine-repair-service-dubai/"
  );

  const metaImage = String(
    Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/small-mixer-service/public"
  );

  subtitle = "Testimonial"
  titlereview = "What our clients say About Us"
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
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/WashingmachineRepairServiceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/WashingMachineRepairServiceTestimonials.json`),
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
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <link rel="preconnect" href="https://img.youtube.com" />
          <link rel="preconnect" href="https://www.youtube.com" />
          <link
            rel="preload"
            as="image"
            href={`${CDN}/The-Most-Common-Reasons-for-Appliance-Breakdowns/public`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={metaURL} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={metaImage} />
          <meta property="og:image:alt" content="Washing Machine Repair Service" />
          <meta property="og:site_name" content="FAJ Technical Services" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={metaImage} />
          <meta name="twitter:image:alt" content="Washing Machine Repair Service" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="language" content="English" />
        </Helmet>
      </HelmetProvider>

      <HeaderForm />

      <div className="cs_service_details">
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Washing Machine Repair Service in Dubai</h1>
            <p>Since 2010, FAJ Technical Services L.L.C has offered reliable installation, maintenance, and repair for all brands of washing machines, dryers, and laundry systems in Dubai and Sharjah.<br />Our experts are here to assist with any issues, from top-loading and front-loading washing machine repair and service near you. You can trust us to keep your washing machine running smoothly.<br /> You can rely on us for both routine repairs and emergency washing machine service. Contact us now for reliable services at competitive prices!</p>

            <div id="get-quote" className="mt-3">
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
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "18px" }}>Same Day Washing Machine Repair Available Near You</h2>
                <p className="mb-2">
                  We recognise how important your washing machine is to your daily routine.
                  that&apos;s why we provide dependable washing machine repair and maintenance services in Dubai and Sharjah.
                  <br />With our high-quality washer and dryer repair services and expert support, we are committed to ensuring that your premium washing machine operates smoothly for years to come.
                </p>
                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Fast and Reliable Appliances Service</h2>
                <p className="mb-2">At <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"><b>FAJ Technical Services L.L.C</b></a>, we understand that appliance breakdowns never happen at a convenient time. That's why our trained and qualified technicians are here to provide you with reliable appliance repair services.</p>
              </div>

              <div className="col-md-6">
                <LazyYouTube videoId="EnSAQA_AjzY" title="Washing Machine Services" />
               
              </div>
            </div>
            <AppliancesAppointmentCol />
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Washing Machine Maintenance Service Important in Dubai?</h2>
            <p>Washing machine service in Dubai is crucial for maintaining efficiency, extending lifespan, and avoiding costly repairs. Regular servicing detects potential issues early, ensuring smooth operation. Here&apos;s a more detailed look at why:</p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <OptimizedImage
                  className="blue-border"
                  src={getImageSrc('washing-machine-repair')}
                  alt="Washing Machine Repair"
                  width="600"
                  height="400"
                />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li><strong>Washing Machine Saves Energy & Water: </strong>Regular servicing ensures optimal performance, helping reduce energy and water consumption.</li>
                  <li><strong>Washing Machine Prevents Breakdowns: </strong>Regular maintenance helps prevent breakdowns by managing minor issues before they escalate.</li>
                  <li><strong>Washing Machine Improves Efficiency: </strong>Promptly addressing issues can greatly increase the lifespan of your washing machine.</li>
                  <li><strong>Washing Machine Extends Lifespan: </strong>Addressing problems quickly can greatly increase the lifespan of your washing machine.</li>
                  <li><strong>Washer Ensures Clean Clothes: </strong>Regular cleaning prevents mold and mildew that can cause odours.</li>
                  <li><strong>Washer Dryer Safety: </strong>Regular maintenance identifies safety issues like loose fittings or leaks.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Washing Machine Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Worn or Damaged Hoses</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Inspect the drain line and fill water hoses carefully for cracks in the pipe, loose inlet connections, or damaged pipe hoses.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Loose Connections</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ensure all water connections are tight and secure, especially at the water inlet valve from wall or from machine inlet.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faulty Door Seals or Gaskets</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Inspect the washing machine gasket for cracks and examine the rubber seals and gaskets around the washer door for damage.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faulty Drain Pump</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A faulty drain pump can prevent water from draining properly. Check for full damage or problems that could affect performance.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Clogged Drain Hose or Pump</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Clean the washing machine's drain hose and check for clogs or blockages in the drain pump or inlet pump filter.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Loud Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Grinding, rumbling, or humming washing machine noises may indicate motor, drum spider, or both bearing damage in machine.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Drum Doesn't Rotate</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A malfunctioning of washing machine PCB, motor or worn/faulty motor carbon brushes can prevent drum from spinning.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Door and Lid Switch Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A malfunctioning lid switch or a connection can prevent the washing machine from starting or cause it to stop mid-cycle.</p>
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

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR WASHING MACHINES</h2>
            <div className="row align-items-center">
              <div className="col-xl-6">
                 <OptimizedImage
                  className="bordered-img w-100"
                  src={getImageSrc('The-Most-Common-Reasons-for-Appliance-Breakdowns')}
                  alt="Washing Machine Repair"
                  width="600"
                  height="400"
                  priority={true}
                />
              </div>
              <div className="col-xl-6">
                <p className='mb-0'>At FAJ, we are your reliable partner for washing machine maintenance in Dubai. Our comprehensive spare parts warranty ensures your machine is well cared for.</p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li><strong>Washing Machine Repair Service: </strong>Resolving issues such as non-functioning machines, leaks, drainage problems.</li>
                  <li><strong>Washing Machine Installation: </strong>Proper connection to water supply, drainage, and power sources.</li>
                  <li><strong>Washing Machine Maintenance Contract: </strong>Regular cleaning of filters, hoses, and pumps.</li>
                  <li><strong>Additional Services: </strong>Water leakage solutions, deep cleaning, and more.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">The Benefits Of washing machine Service Dubai</h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Ensuring-Safety')}
                        alt="Ensuring Safety"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_18">Ensuring Safety</h4>
                    <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Optimal-Performance')}
                        alt="Optimal Performance"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_18">Optimal Performance</h4>
                    <p className="small">Regular maintenance helps your washing machine run smoothly and efficiently, delivering the best results every time.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Lower-Energy-Bills')}
                        alt="Lower Energy Bills"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_18">Lower Energy Bills</h4>
                    <p className="small">Energy efficient washing machine translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Saving-Money-on-Repair')}
                        alt="Saving Money on Repair"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_18">Saving Money on Repair</h4>
                    <p className="small">Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/extending')}
                        alt="Extending Appliance Lifespan"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_18">Washing machine Lifespan</h4>
                    <p className="small">Proper care and timely servicing can significantly increase life of your home washing machine, delaying the need for replacements.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Peace-of-Mind')}
                        alt="Peace of Mind"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_18">Peace of Mind</h4>
                    <p className="small">Knowing your washing machines are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>

            <div className="usps align-items-center">
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <OptimizedImage
                      src={getImageSrc('icon/fast-reliable')}
                      alt="Fast, Reliable Service"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="usptext">
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <OptimizedImage
                      src={getImageSrc('icon/experts')}
                      alt="We Are Experts"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>With <Link to="/appliances-amc-service/">maintenance contract</Link>, you get a full year of service, ensuring your washing machine runs smoothly and providing peace of mind.</p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <OptimizedImage
                      src={getImageSrc('icon/full-control')}
                      alt="You Are in Control"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your washing machine repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>
              </div>

              <div className="uspdelimit col-2 d-none d-xl-block">
                <OptimizedImage
                  className="blue-border-2 w-100 why-choose-img"
                  src={getImageSrc('fajteam-1')}
                  alt="FAJ Team"
                  width="400"
                  height="600"
                />
              </div>

              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <OptimizedImage
                      src={getImageSrc('icon/value')}
                      alt="We Are Experts"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We are experts in washing machine repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <OptimizedImage
                      src={getImageSrc('icon/confidence-guarantee')}
                      alt="Great Value"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two washing machine at the same location in Dubai.</p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <OptimizedImage
                      src={getImageSrc('icon/trustworthy')}
                      alt="Trustworthy"
                      width="60"
                      height="60"
                    />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our skilled washing machine technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <OptimizedImage
                  src={getImageSrc('fajteam')}
                  alt="FAJ Team Mobile"
                  width="400"
                  height="300"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY WASHING MACHINE REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 157 to 280 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month repair warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h3>We specialise in Washing Machine Services for the following brands</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"><a href="https://www.fajservices.ae/lg-fridge-repair-in-dubai-lg-washing-machine-repair-in-dubai-lg-cooker-repair-in-dubai-lg-oven-repair-in-dubai-lg-appliances-maintenance-in-dubai-lg-refrigerator-fix-repairs-service-in-dubai-lg-dishwa/"><strong>LG Washing Machine Repair</strong></a><strong>: </strong>FAJ is here to help with your LG washing machine problems. We understand how important it is for your daily routine to keep your laundry fresh and clean. Whether you need express washing machine repair near me or thorough washing machine cleaning service nearby in Dubai, our expert team is ready to assist you. Contact us for reliable support and ensure your appliance runs smoothly.</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/samsung-fridge-repair-in-dubai-samsung-washing-machine-repair-in-dubai-samsung-cooker-repair-in-dubai-samsung-oven-repair-in-dubai-samsung-appliances-maintenance-in-dubai-samsung-refrigerator-fix-repa/"><strong>Samsung Washing Machine Repair</strong></a><strong>:</strong> Having trouble with your washing machine or dryer? You're in the perfect spot! Reach out to the FAJ team for trustworthy same-day washing machine repair and dryer service near me in Dubai. Our skilled washing machine technicians will swiftly diagnose and fix washing machine, washer dryer maintenance, and dryer repair, getting them back to peak performance in no time. We're excited to help you get your laundry back on track!</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/electrolux-home-appliances-repair/"><strong>Electrolux Washing Machine Repair</strong></a><strong>: </strong>If you need Electrolux washing machine repair or Electrolux washing machine service near you in Dubai, our team of professional and qualified washing machine technicians is available throughout Dubai and Sharjah. We offer expert washer dryer repair and maintenance services nearby. For reliable washing machine repair, look for washing machine cleaning service near you in Dubai.</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/bosch-home-appliances-repair/"><strong>Bosch Washing Machine Repair</strong></a><strong>:</strong> If you're searching for the best Bosch washing machine repair company in Dubai, FAJ is the perfect choice. They are recognised for delivering exceptional washing machine service for all Bosch home appliance repair and are recognized as the leading Bosch washing machine service and maintenance near by you in the region. They also offer express dryer repair, washer dryer service, and maintenance in both Dubai and Sharjah.</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/viking-appliances-service/"><strong>Viking Washing Machine Repair</strong></a><strong>:</strong> Your Viking appliances may need repair or maintenance, and we can help. For high-quality Viking washing machine repair in Dubai, rely on FAJ. Get reliable washer dryer maintenance and service, and find washing machine services nearby in Dubai.</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/daewoo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/"><strong>Daewoo Washing Machine Repair</strong></a><strong>:</strong> We provide expert washing machine repair and near me services in Dubai. Our skilled washer dryer technicians have the knowledge and expertise to diagnose and fix washing machine issues with Daewoo refrigerator, dishwasher, dryer and more.&nbsp;</p>
                <p className="mb-0"><a href="https://www.fajservices.ae/siemens-home-appliances-repair/"><strong>Siemens Washing Machine Repair</strong></a><strong>: </strong>Are you worried about your Siemens washing machine malfunctioning? Searching for a reliable washer dryer maintenance service in Dubai? Contact us for same-day service for washing machine cleaning service, dryer repair, and washer dryer maintenance!</p>
                <p className="mb-"><a href="https://www.fajservices.ae/teka-home-appliance-installation-maintenance-repair-fix-service-in-dubai/"><strong>Teka Washing Machine Repair</strong></a><strong>:</strong> For reliable Teka washing machine repair in Dubai, FAJ is your best choice. They are renowned for their exceptional washer dryer maintenance services for Teka appliances, including washing machine cleaning service, fixing dryer, washer dryer repair or maintenance near me service, refrigerators, and ovens. FAJ is the top-rated service provider for Teka appliances in the area, guaranteeing quality and customer satisfaction.</p>
                <p className="mb-0">
                  <a href="https://www.fajservices.ae/aeg-fridge-repair-in-dubai-aeg-washing-machine-repair-in-dubai-aeg-cooker-repair-in-dubai-aeg-oven-repair-in-dubai-aeg-appliances-maintenance-in-dubai-aeg-refrigerator-fix-repairs-service-in-dubai-aeg/">AEG</a> | <a href="https://www.fajservices.ae/ariston-fridge-repair-in-dubai-ariston-washing-machine-repair-in-dubai-ariston-cooker-repair-in-dubai-ariston-oven-repair-in-dubai-ariston-appliances-maintenance-in-dubai-ariston-refrigerator-fix-repa/">Ariston</a> | <a href="https://www.fajservices.ae/beko-fridge-repair-in-dubai-beko-washing-machine-repair-in-dubai-beko-cooker-repair-in-dubai-beko-oven-repair-in-dubai-beko-appliances-maintenance-in-dubai-beko-refrigerator-fix-repairs-service-in-dub/">Beko</a> | <a href="https://www.fajservices.ae/blomberg-fridge-repair-in-dubai-blomberg-washing-machine-repair-in-dubai-blomberg-cooker-repair-in-dubai-blomberg-oven-repair-in-dubai-blomberg-appliances-maintenance-in-dubai-blomberg-refrigerator-fi/">Blomberg</a> | <a href="https://www.fajservices.ae/faber-appliances-service/">Faber</a> | <a href="https://www.fajservices.ae/fagor-fridge-repair-in-dubai-fagor-washing-machine-repair-in-dubai-fagor-cooker-repair-in-dubai-fagor-oven-repair-in-dubai-fagor-appliances-maintenance-in-dubai-fagor-refrigerator-fix-repairs-service/">Fagor</a> | <a href="https://www.fajservices.ae/fisher-and-paykel-fridge-repair-in-dubai-fisher-and-paykel-washing-machine-repair-in-dubai-fisher-and-paykel-cooker-repair-in-dubai-fisher-and-paykel-oven-repair-in-dubai-fisher-and-paykel-appliances/">Fisher and Paykel</a>  | <a href="https://www.fajservices.ae/foster-appliances-services-foster-dishwasher-repair-service-in-dubai-foster-cooking-range-repair-service-in-dubai-foster-cooktop-repair-service-in-dubai-foster-oven-repair-in-dubai-foster-rangetop-r/">Foster</a> | <a href="https://www.fajservices.ae/gaggenau-fridge-repair-in-dubai-gaggenau-washing-machine-repair-in-dubai-gaggenau-cooker-repair-in-dubai-gaggenau-oven-repair-in-dubai-gaggenau-appliances-maintenance-in-dubai-gaggenau-refrigerator-fi/">Gaggenau</a>| <a href="https://www.fajservices.ae/hitachi-fridge-repair-in-dubai-hitachi-washing-machine-repair-in-dubai-hitachi-cooker-repair-in-dubai-hitachi-oven-repair-in-dubai-hitachi-appliances-maintenance-in-dubai-hitachi-refrigerator-fix-repa/">Hitachi</a> | <a href="https://www.fajservices.ae/hoover-fridge-repair-in-dubai-hoover-washing-machine-repair-in-dubai-hoover-cooker-repair-in-dubai-hoover-oven-repair-in-dubai-hoover-appliances-maintenance-in-dubai-hoover-refrigerator-fix-repairs-se/">Hoover</a>| <a href="https://www.fajservices.ae/indesit-fridge-repair-in-dubai-indesit-washing-machine-repair-in-dubai-indesit-cooker-repair-in-dubai-indesit-oven-repair-in-dubai-indesit-appliances-maintenance-in-dubai-indesit-refrigerator-fix-repa/">Indesit</a> | <a href="https://www.fajservices.ae/neff-fridge-repair-in-dubai-neff-washing-machine-repair-in-dubai-neff-cooker-repair-in-dubai-neff-oven-repair-in-dubai-neff-appliances-maintenance-in-dubai-neff-refrigerator-fix-repairs-service-in-dub/">Neff</a> | <a href="https://www.fajservices.ae/smeg-fridge-repair-in-dubai-smeg-washing-machine-repair-in-dubai-smeg-cooker-repair-in-dubai-smeg-oven-repair-in-dubai-smeg-appliances-maintenance-in-dubai-smeg-refrigerator-fix-repairs-service-in-dub/">Smeg</a> | <a href="https://www.fajservices.ae/sub-zero-fridge-repair-in-dubai-sub-zero-washing-machine-repair-in-dubai-sub-zero-cooker-repair-in-dubai-sub-zero-oven-repair-in-dubai-sub-zero-appliances-maintenance-in-dubai-sub-zero-refrigerator-fi/">Sub Zero</a> | <a href="https://www.fajservices.ae/terim-appliances-service/">Terim</a> | <a href="https://www.fajservices.ae/viking-appliances-service/">Viking</a> | <a href="https://www.fajservices.ae/whirlpool-fridge-repair-in-dubai-whirlpool-washing-machine-repair-in-dubai-whirlpool-cooker-repair-in-dubai-whirlpool-oven-repair-in-dubai-whirlpool-appliances-maintenance-in-dubai-whirlpool-refrigera/">Whirlpool</a> | <a href="https://www.fajservices.ae/zanussi-fridge-repair-in-dubai-zanussi-washing-machine-repair-in-dubai-zanussi-cooker-repair-in-dubai-zanussi-oven-repair-in-dubai-zanussi-appliances-maintenance-in-dubai-zanussi-refrigerator-fix-repa/">Zanussi</a> | <a href="/de-dietrich-fridge-repair-in-dubai-de-dietrich-washing-machine-repair-in-dubai-de-dietrich-cooker-repair-in-dubai-de-dietrich-oven-repair-in-dubai-de-dietrich-appliances-maintenance-in-dubai-de-dietri/">De Dietrich</a> | <a href="https://www.fajservices.ae/baumatic-appliances/">Baumatic</a> | <a href="https://www.fajservices.ae/bertazzoni-refrigerator-repair-in-dubai-bertazzoni-appliances-service-bertazzoni-fridge-repair-in-dubai-bertazzoni-washing-machine-washer-bertazzoni-dryer-repair-in-dubai-bertazzoni-dishwasher-cooker/">Bertazzoni</a> | <a href="https://www.fajservices.ae/bompani-fridge-repair-in-dubai-bompani-washing-machine-repair-in-dubai-bompani-cooker-repair-in-dubai-bompani-oven-repair-in-dubai-bompani-appliances-maintenance-in-dubai-bompani-refrigerator-fix-repa/">Bompani</a> | <a href="https://www.fajservices.ae/boston-refrigerator-repair-in-dubai-boston-appliances-service-boston-fridge-repair-in-dubai-boston-washing-machine-washer-boston-dryer-repair-in-dubai-boston-dishwasher-cooker/">Boston</a> | <a href="https://www.fajservices.ae/brandt-fridge-repair-in-dubai-brandt-washing-machine-repair-in-dubai-brandt-cooker-repair-in-dubai-brandt-oven-repair-in-dubai-brandt-appliances-maintenance-in-dubai-brandt-refrigerator-fix-repairs-se/">Brandt</a> | <a href="https://www.fajservices.ae/gibson-fridge-repair-in-dubai-gibson-washing-machine-repair-in-dubai-gibson-cooker-repair-in-dubai-gibson-oven-repair-in-dubai-gibson-appliances-maintenance-in-dubai-gibson-refrigerator-fix-repairs-se/">Gibson</a> | <a href="https://www.fajservices.ae/gorenje-fridge-repair-in-dubai-gorenje-washing-machine-repair-in-dubai-gorenje-cooker-repair-in-dubai-gorenje-oven-repair-in-dubai-gorenje-appliances-maintenance-in-dubai-gorenje-refrigerator-fix-repa/">Gorenje</a> | <a href="https://www.fajservices.ae/hisense-fridge-repair-in-dubai-hisense-washing-machine-repair-in-dubai-hisense-cooker-repair-in-dubai-hisense-oven-repair-in-dubai-hisense-appliances-maintenance-in-dubai-hisense-refrigerator-fix-repa/">Hisense</a> |&nbsp;<a href="https://www.fajservices.ae/kelvinator-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Kelvinator</a> | <a href="https://www.fajservices.ae/kenmore-appliances-service/">Kenmore</a> | <a href="https://www.fajservices.ae/panasonic-fridge-repair-in-dubai-panasonic-washing-machine-repair-in-dubai-panasonic-cooker-repair-in-dubai-panasonic-oven-repair-in-dubai-panasonic-appliances-maintenance-in-dubai-panasonic-refrigera/">Panasonic</a> | <a href="https://www.fajservices.ae/sanyo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Sanyo</a> | <a href="https://www.fajservices.ae/sears-home-appliances-installation-maintenance-repair-fix-service-in-dubai/">Sears</a> | <a href="https://www.fajservices.ae/wolf-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Wolf</a> | <a href="https://www.fajservices.ae/haier-fridge-repair-in-dubai-haier-washing-machine-repair-in-dubai-haier-cooker-repair-in-dubai-haier-oven-repair-in-dubai-haier-appliances-maintenance-in-dubai-haier-refrigerator-fix-repairs-service/">Haier</a> | <a href="https://www.fajservices.ae/elica-appliances-service/">Elica</a> | <a href="https://www.fajservices.ae/marvel-fridge-repair-in-dubai-marvel-washing-machine-repair-in-dubai-marvel-cooker-repair-in-dubai-marvel-oven-repair-in-dubai-marvel-appliances-maintenance-in-dubai-marvel-refrigerator-fix-repairs-se/">Marvel</a> | <a href="https://www.fajservices.ae/miele-fridge-repair-in-dubai-miele-washing-machine-repair-in-dubai-miele-cooker-repair-in-dubai-miele-oven-repair-in-dubai-miele-appliances-maintenance-in-dubai-miele-refrigerator-fix-repairs-service/">Miele</a> | <a href="https://www.fajservices.ae/maytag-fridge-repair-in-dubai-maytag-washing-machine-repair-in-dubai-maytag-cooker-repair-in-dubai-maytag-oven-repair-in-dubai-maytag-appliances-maintenance-in-dubai-maytag-refrigerator-fix-repairs-se/">Maytag</a> | <a href="https://www.fajservices.ae/toshiba-home-appliance-installation-maintenance-repair-fix-service-in-dubai-2/">Toshiba</a> | <a href="https://www.fajservices.ae/thermador-appliances-service/">Thermador</a> | <a href="https://www.fajservices.ae/sharp-home-appliance-installation-maintenance-repair-fix-service-in-dubai/">Sharp</a> | <a href="https://www.fajservices.ae/admiral-fridge-repair-in-dubai-admiral-washing-machine-repair-in-dubai-admiral-cooker-repair-in-dubai-admiral-oven-repair-in-dubai-admiral-appliances-maintenance-in-dubai-admiral-refrigerator-fix-repa/">Admiral</a> | <a href="https://www.fajservices.ae/aftron-fridge-repair-in-dubai-aftron-washing-machine-repair-in-dubai-aftron-cooker-repair-in-dubai-aftron-oven-repair-in-dubai-aftron-appliances-maintenance-in-dubai-aftron-refrigerator-fix-repairs-se/">Aftron</a> | <a href="https://www.fajservices.ae/unimac-washing-machine-repair-in-dubai-unimac-dryer-repair-in-dubai-unimac-washer-dryer-repair-in-dubai-unimac-maintenance-in-dubai-unimac-laundry-service-in-dubai-unimac-dubai/">Unimac</a></p>
              </div>

            </div>

            <div id="get-quote" className="mt-3">
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

        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <MaintenanceContract />
        </Suspense>

        <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
          {!isLoading && testimonial_data.length > 0 && (
            <Testimonial1
              subtitle="What Our Clients Say"
              titlereview="Customer <span>Reviews</span>"
              bgImg={reviewsbg}
              testimonialData={testimonial_data}
              sectionId="home-testimonials"
            />
          )}
        </Suspense>

        <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
          <BlogWashingMachine />
        </Suspense>

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

        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <Serviceappointemnt subtitle2="Contact us" title2="Book An Appointment" />
        </Suspense>
      </div>
    </>
  );
};

export default WashingMachineRepairServiceDubaiDetail;