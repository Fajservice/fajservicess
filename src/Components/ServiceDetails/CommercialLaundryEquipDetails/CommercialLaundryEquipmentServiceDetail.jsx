import { useEffect, useRef, useState, useCallback, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import HeaderForm from "../../Headeform/HeaderForm";
import Testimonial1 from "../../Testimonial/Testimonial1";
import BrandsSliderSection from "../../BrandsSliderSection";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import CallNowButton from "../../Buttons/CallNowButton";
import BlogWashingMachine from "../../Blog/BlogWashingMachine";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const WalkInRefrigerationServicesDetail = ({
  titleSeo,
  description,
  Author,
  Keyword,
  URL,
  subtitle,
  title,
  reviewsbg
}) => {

  const metaTitle = String(
    titleSeo || "Commercial Laundry Equipment Repair & Maintenance Service"
  );

  const metaDescription = String(
    description || "FAJ Experts provide laundry equipment repair. Book quality work of industrial & professional washer dryer maintenance & AMC contract service Dubai."
  );

  const metaAuthor = String(
    Author || "FAJ Technical Services L.L.C"
  );

  const metaKeyword = String(
    Keyword || "Commercial Laundry Equipment Service, Commercial Laundry Equipment Repair, Commercial Laundry Equipment Maintenance, Dryer Repair Dubai, Washer Repair Dubai, Ironing Machine Repair Dubai, Commercial Laundry AMC Services"
  );

  const metaURL = String(
    URL || "https://www.fajservices.ae/services/laundry-equipment-repair/"
  );

  const metaImage = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/banners/Commercial-Laundry-Equipment-Services/Laundry-Equipment-Service.avif";

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
  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse, brandsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/CommercialLaundryEquipData/FAQs/CommercialLaundryEquipmentServiceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/CommercialLaundryEquipData/Testmonials/CommercialLaundryEquipmentServiceTestimonial.json`),
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
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={metaImage} />
          <meta property="og:image:alt" content="Laundary Equipment Repair" />
          <meta property="og:site_name" content="FAJ Technical Services L.L.C" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={metaImage} />
          
          <meta name="twitter:image:alt" content="Laundary Equipment Repair" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="language" content="English" />
        </Helmet>
      </HelmetProvider>

      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Commercial Laundry Equipment Repair & Maintenance Services in Dubai</h1>
            <p>Since 2010, FAJ Technical Services L.L.C has been a trusted name for commercial washing machine repair and laundry machine maintenance services in Dubai and Sharjah. Our skilled professionals are ready to assist with top-brand laundry equipment, using high-quality tools to ensure effective service.
              <br /> We prioritise repair over replacements, helping you save money and avoid the bother of buying a new commercial washing machine. Rely on our experienced experts for fast and reliable commercial washing machine maintenance in Dubai!
            </p>

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
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left">Laundry Equipment Maintenance and Services</h2>
                <p className="mb-1">When you need commercial laundry equipment maintenance, whether for a washer, dryer repair, or commercial tumble dryer, turn to Laundry Equipment Services in Dubai. We specialise in providing quick and cost-effective solutions for all your commercial laundry repair needs.<br />We also provide laundry maintenance contracts (AMC) in Dubai, Sharjah, and Abu Dhabi, UAE.</p>
                <h2 className="cs_fs_24 mb-1 pt-1 mt-0 text-align-left">Commercial Laundry Equipment Repair</h2>
                <p className="mb-2">We provide tailored commercial laundry equipment repair and services to meet your business needs, including reactive commercial washing machine maintenance upon request.<br />Our technicians can support all makes and models of laundry appliances, and they carry spare parts in their vans to increase the chances of a first-time fix.</p>
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
            <h2 className="cs_fs_30">Why is Laundry Equipment Maintenance Service Important in Dubai?</h2>
            <p>Commercial washing machine and commercial dryer service in Dubai is important for keeping efficiency, extending lifespan, and avoiding costly repairs.</p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <OptimizedImage
                  className="blue-border"
                  src={getImageSrc('laundry-equipment-maintenance-service')}
                  alt="Laundry Equipment Maintenance Service"
                  width="600"
                  height="400"
                />
              </div>
              <div className="col-md-6">
                <p>Regular servicing helps detect possible issues early, providing smooth operation.</p>
                <ul className="mb-0">
                  <li><strong>Saves Energy &amp; Water: </strong>Regular servicing of laundry equipment ensures optimal performance, reducing energy and water consumption.</li>
                  <li><strong>Prevents Breakdowns: </strong>Regular maintenance of commercial washing machines and dryers helps prevent breakdowns by addressing minor issues before they escalate.</li>
                  <li><strong>Improves Efficiency: </strong>Promptly addressing issues can greatly increase the lifespan of your laundry washing machine.</li>
                  <li><strong>Extends Lifespan: </strong>Quickly addressing issues can significantly extend the lifespan of your commercial dryer and washing machine.</li>
                  <li><strong>Ensures Clean Clothes: </strong>Regular professional washer dryer cleaning prevents mold and mould that can cause smells.</li>
                  <li><strong>Safety: </strong>Regular maintenance of your laundry machine helps identify safety issues, such as loose fittings or leaks.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Commercial Washer and Dryer Problems That May Need Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Worn or Damaged Hoses</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Carefully inspect the drain line and water fill hoses for cracks, loose inlet connections, or damaged hoses.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faulty Door Seals or Gaskets</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Check the laundry washing machine gasket for cracks and inspect the rubber seals and gaskets around the washer door for any damage.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faulty Drain Pump</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A faulty drain pump can delay proper water drainage. Inspect for any damage or issues that may impact performance.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Clogged Drain Hose or Pump</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Clean the drain hose of the laundry washing machine and check for clogs or blockages in the drain pump and inlet pump filter.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Loud Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Grinding, rumbling, or humming noises from a laundry washing machine may indicate damage to the motor, drum spider, or both bearings.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Drum Doesn't Rotate</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A malfunctioning washing machine PCB, motor, or faulty motor carbon brushes can prevent the drum from spinning.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Loose Connections
</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ensure all water connections are tight and secure, especially at the water inlet valve from wall or from machine inlet.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Door and Lid Switch Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A faulty lid switch or connection may prevent the laundry washing machine from starting or cause it to stop during a cycle.</p>
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
            <h2 className="cs_fs_30 text-uppercase">Why Choose FAJ Laundry Systems for Maintenance Services?</h2>
            <div className="row align-items-center">
               <div className="col-xl-6">
                <p className='mb-0'>We offer tailored maintenance plans featuring thorough inspections, genuine replacement parts, and expert advice. Our team aims to reduce downtime, enhance equipment efficiency, and extend the life of your buy. <br />With FAJ Laundry Systems service, you receive reliable support and industry expertise for smooth laundry operations.</p><br/>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                 <li><strong>Laundry Washing Machine Repair Service: </strong>Addressing issues like malfunctioning laundry machines, leaks, and drainage problems.</li>
                <li><strong>Laundry Equipment Installation: </strong>Confirm that the laundry equipment is properly installed by connecting it to the water supply, drainage, and power sources.</li>
                <li><strong>Laundry Equipment Maintenance Contract: </strong>Regular cleaning of laundry equipment, laundry washing machine and laundry dryer, including filters, hoses, and pumps, is essential.</li>
                <li><strong>Additional Laundry Equipment Services: </strong>Laundry equipmentsolutions for water leakage, deep cleaning services, and more.</li>
                </ul>
              </div>
              <div className="col-xl-6">
                 <OptimizedImage
                  className="bordered-img w-100"
                  src={getImageSrc('laundry-equipment-repair')}
                  alt="Laundry Equipment Repair"
                  width="600"
                  height="400"
                  priority={true}
                />
              </div>
             
            </div>
          </div>
        </section>

        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of Laundry Equipments Service Dubai</h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Ensuring-Safety-New')}
                        alt="Ensuring Safety"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h4>
                    <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Optimal-Performance-New')}
                        alt="Optimal Performance"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Optimal Performance</h4>
                    <p className="small">Regular maintenance helps your washing machine run smoothly and efficiently, delivering the best results every time.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Lower-Energy-Bills-New')}
                        alt="Lower Energy Bills"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h4>
                    <p className="small">Energy efficient washing machine translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Saving-Money-on-Repair-New')}
                        alt="Saving Money on Repair"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Saving Money on Repair</h4>
                    <p className="small">Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/extending-New')}
                        alt="Extending Appliance Lifespan"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Washing machine Lifespan</h4>
                    <p className="small">Proper care and timely servicing can significantly increase life of your home washing machine, delaying the need for replacements.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <OptimizedImage
                        src={getImageSrc('icon/Peace-of-Mind-New')}
                        alt="Peace of Mind"
                        className="icon-img-block-icon"
                        width="80"
                        height="80"
                      />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Peace of Mind</h4>
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
                    <p>With <Link to="/services/home-appliances-repair/appliances-amc-service/">maintenance contract</Link>, you get a full year of service, ensuring your washing machine runs smoothly and providing peace of mind.</p>
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
            <h3 className="cs_fs_24 text-align-left">We specialise in Washing Machine Services for the following brands</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"><strong>LG Commercial Washing Machine Repair and Services: </strong>FAJ is here to assist you with any issues related to your LG commercial washing machine and LG commercial dryer.&nbsp;We understand how essential it is to maintain your LG commercial laundry routine and keep your LG laundry appliances fresh and clean. Whether you need quick LG commercial washing machine repair or an in-depth cleaning service in Dubai, our expert team is ready to help.&nbsp;Contact us for reliable support and ensure your LG commercial appliances are running smoothly.</p>
                <p className="mb-0"><strong>Electrolux Professional Laundry Washing Machine Maintenance:</strong> Are you having trouble with your Electrolux Professional washing machine or Electrolux Professional dryer?&nbsp;You&rsquo;ve come to the right place! Contact the FAJ team for reliable same-day repair services for Electrolux Professional washing machines and dryers in Dubai.&nbsp;Our experienced technicians will quickly diagnose and fix any issues with your Electrolux Professional washing machine, perform Electrolux Professional washer-dryer maintenance, and provide repairs for your dryer, ensuring they operate at peak performance in no time. We&rsquo;re here to help you get your LG laundry back on track!</p>
                <p className="mb-0"><strong>Speed Queen Washing Machine and Dryer Repair: </strong>If you require repair or service for your Speed Queen washing machine in Dubai, our team of professional and qualified technicians is available throughout Dubai and Sharjah.&nbsp;We provide expert repair and maintenance services for Speed Queen washers and dryers and Speed Queen laundry equipment. For reliable Speed Queen washing machine repair, look for a Speed Queen cleaning service near you in Dubai.</p>
                <p className="mb-0"><strong>Domus Laundry Equipment Maintenance and Service Dubai</strong>: If you're looking for the best Domus washing machine repair company in Dubai, FAJ is an excellent choice.&nbsp;They are known for providing outstanding service for Domus washing machines and offer maintenance for all Domus laundry appliances. FAJ is recognised as the leading provider of Domus washing machine service and maintenance in the area. Additionally, they offer express dryer repair, as well as Domus washer-dryer service and maintenance in both Dubai and Sharjah.</p>
                <p className="mb-0"><strong>Dexter Laundry Repair Service</strong>: If your Dexter Laundry washing machine or dryer requires repair or maintenance, we are here to help.&nbsp;For high-quality Dexter Laundry washing machine repair and services in Dubai, trust FAJ.&nbsp;We offer reliable maintenance and service for your Dexter washer and dryer. Additionally, you can find Dexter Laundry equipment and washing machine services conveniently located throughout Dubai.</p>
                <p className="mb-0"><strong>UniMac Washing Machine Repair and Maintenance</strong>: We offer expert UniMac washing machine repair and UniMac dryer service in Dubai. Our skilled technicians are knowledgeable and experienced in diagnosing and fixing issues with Uni Mac laundry equipment maintenance, including Unimac washer and dryer repair and services in the UAE.</p>
                <p className="mb-0"><strong>Girbau Professional Washing Machine Repair:</strong> Are you worried about your Girbau washing machine malfunctioning? Looking for a reliable Girbau washer dryer maintenance service in Dubai?&nbsp;Contact us for same-day Girbau professional washing machine cleaning, Girbau dryer repair, and Girbau washer dryer maintenance!</p>
                <p className="mb-0"><strong>Fagor Professional Washing Machine Repair</strong>: For reliable Fagor Professional washing machine repair in Dubai, FAJ is your best choice. They are well-known for their exceptional maintenance services for Fagor Professional appliances. This includes Fagor Professional washing machine cleaning, fixing Fagor dryers, and providing Fagor washer dryer repair and maintenance services nearby. FAJ is a top-rated service provider for Fagor Professional appliances in the area, ensuring quality and customer satisfaction.</p>
                <p className="mb-0"><strong>Get an Expert Tumble Dryer Repair today: </strong>Contact us today for same-day repair service for Samsung dryers, LG dryers, Electrolux dryers, Miele dryers, Maytag dryers, Siemens dryers, Bosch tumble dryers, Whirlpool dryers, Gaggenau clothes dryers, Frigidaire dryers, and White Westinghouse dryers. Our service center in Dubai also offers maintenance services.</p>
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

        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <Serviceappointemnt subtitle2="Contact us" title2="Book An Appointment" />
        </Suspense>
        {/* Faqs */}
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

export default WalkInRefrigerationServicesDetail;