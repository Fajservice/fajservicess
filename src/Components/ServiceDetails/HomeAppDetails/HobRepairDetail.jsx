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
import BrandsSliderSection from "../../BrandsSliderSection";
import Testimonial1 from "../../Testimonial/Testimonial1";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol.jsx";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const HobRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  const metatitle = String(titleSeo || "Ceramic Hob Repair & Service in Dubai | Stove Repairs");
  const metadescription = String(description || "Having issues with your hob repair in Dubai? Book with us for gas or electric Induction stove, cooking range centre near me with a warranty of parts.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Electric Hob Repair, Gas Hob Repair, Gas Hob Service");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/hob-repair-service/");
  const metaImage = String(Image || "https://www.fajservices.ae/img/Hob-Repair-Service-in-Dubai-UAE.avif");

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
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/HobRepairFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/HobrepairTestimonials.json`),
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const settingBrands = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    arrows: false,

    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

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
            <h1 className="cs_fs_30">Hob Repair & Service | Gas & Electric Stove Repairs in Dubai</h1>
            <p>Since 2010, we have been providing reliable electric hob repair services.<br />We recognise that hobs can break down unexpectedly, so we provide high-quality and affordable cooker hob repair. Our trained technicians are available throughout Dubai and Sharjah to repair your electric or gas hob and stove service at your location.</p>

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
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Same Day Cooking Range Repair & Service</h2>

                <p className="mb-2">
                  It's pretty standard to experience issues with cooking appliances from time to time.
                  Whether your induction hob suddenly stops working, your gas stove won't stay lit when you need it, or your electric hob keeps turning on and off, it's essential to manage these problems promptly.
                  <br />
                  FAJ offers fast Services and can assist you in arranging a professional gas range repair to fix your faulty cooker.

                </p>

                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Fast and Reliable Appliances Service
                </h2>
                <p className="mb-2">At <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"><b>FAJ Technical Services L.L.C</b></a>, we understand that appliance breakdowns never happen at a convenient time. That's why our trained and qualified technicians are here to provide you with reliable appliance repair services. With our help, you can avoid the expense of purchasing a new appliance and get your appliance up and running again before you even have a chance to stress about it.</p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/SLGpswtzn-w"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <AppliancesAppointmentCol />
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Induction Hob Maintenance Service Important in Dubai?</h2>
            <p>
              Proper induction hob maintenance is essential for extending its lifespan and enhancing efficiency, especially in Dubai's climate. Here are the main benefits:
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('hob-repair-service')} alt="Hob Repair Servcie" loading="lazy" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong>  Hob Extended Lifespan: </strong> Regular maintenance helps the induction hob last longer, saving on replacement costs. </li>
                  <li> <strong>  Stove Improved Efficiency: </strong> A well-maintained induction hob uses less energy, leading to lower utility bills, which is essential in Dubai. </li>
                  <li> <strong>  Hob Preventing Costly Repair: </strong> Catching minor issues early prevents them from escalating into expensive repairs. </li>
                  <li> <strong>  Stove Preserving induction hob Integrity: </strong> Regular cleaning prevents dust buildup that affects performance. </li>
                  <li> <strong>  Cooker Early Problem Detection: </strong> Routine checks help identify potential issues before they become serious. </li>
                  <li> <strong>  Hob Cost-Effective: </strong> Maintenance costs are lower than early replacements or major repairs.  Investing in induction hob care ensures safety and efficiency and is a smart economic choice in Dubai. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems with Induction / Hob   </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">E8 Error Code</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This indicates a communication issue in the stove/hob, often related to loose wiring or a faulty control board (PCB).</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Incorrect Cookware</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Induction electric hobs require magnetic cookware to function correctly, and non-magnetic cookware may not heat properly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Burner Discoloration
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This can be caused by burnt-on food from the induction hob, stubborn cookware residue, or unsightly heat marks.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Error Code</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Difficulty Sharing Power Between Burners: This may be indicated by an E8 error code and could mean a blown fuse on the main board.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Flashing "E" Symbol</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This often indicates a stuck PCB electronic board, switch or button. Also, check the electrical wiring from inside the unit.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Hob Not Responsive</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If the hob doesn't respond to touch, it could be due to a blown or tripped switch affecting the power supply or an inside wiring issue.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Hob Not Heating Properly</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This can occur if the cookware is not sufficiently magnetic or sits unevenly on the cooking zone or hot plate.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Hob Overheating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This can happen if the heat is not circulated properly or if tHere&apos;s a problem with the fan or heating thermostat.</p>
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
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR INDUCTION HOB   </h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('Hob-Repair-Service-in-Dubai-UAE')} alt="Hob Repair Servcie" loading="lazy" />
              </div>

              <div className="col-xl-6">
                <p className="mb-0">
                  We specialise in all types and brands of induction hobs, including built-in units.
                </p>

                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong>Hob Installation: </strong>We provide professional installation of various types and brands of induction hobs to ensure optimal performance and efficiency.</li>
                  <li> <strong>Hob Diagnostics: </strong>Our team offers comprehensive fault-finding services to diagnose any issues effectively. We conduct eligibility assessments and provide detailed quotations to resolve any concerns with your system.</li>
                  <li> <strong>Hob Repair Service: </strong>We offer efficient repair services for all cooking hob components. Our team quickly addresses leaks, electrical failures, and system malfunctions.</li>
                  <li> <strong>Hob Annual Maintenance Contract: </strong>This contract outlines the terms and services covered for the yearly maintenance of your induction hob.</li>

                  <p className="mb-0">
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for the optimal performance, efficiency, and longevity of your hob. Feel free to reach out if you need specific services or have any questions!
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section >

        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">The Benefits Of Hob Service Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')} alt="Cooling Efficiency" className="icon-img-block-icon" />
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
                      <p className="small">Regular maintenance helps your hob run smoothly and efficiently, consistently delivering the best results every time.
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
                      <p className="small">Energy efficient induction hob translate to monthly savings on utility bills, putting more money back in your pocket.</p>
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
                      <h3 className="text-uppercase mb-2 cs_fs_16">Extending Hob Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your hob, delaying the need for replacements.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                      </h3>
                      <p className="small">Knowing your hobs are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>

            <div className="usps align-items-center	">
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
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your hob runs smoothly and providing peace of mind.</p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your hob repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>
              </div>

              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1')} alt="FAJ icon service" loading="lazy" />
              </div>

              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in hob repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two hob at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled hob technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('fajteam')} alt="FAJ icon service" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray ">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY HOB REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 157 to 280 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month repair warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h3>We specialise in Hob services for the following brands </h3>
            <div className="row">
              <div className="col-12">
                <ul className="mb-0">
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/smeg-fridge-repair-in-dubai-smeg-washing-machine-repair-in-dubai-smeg-cooker-repair-in-dubai-smeg-oven-repair-in-dubai-smeg-appliances-maintenance-in-dubai-smeg-refrigerator-fix-repairs-service-in-dub/"><strong>Smeg Hob Repair</strong></a><strong>: </strong>FAJ is here to support you when things go wrong. We understand that your Smeg induction hob is essential for daily life, helping you prepare meals quickly and efficiently. We are here to help you with electric and gas hob repairs near me in Dubai and Sharjah.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/siemens-home-appliance-installation-maintenance-repair-fix-service-in-dubai/"><strong>Siemens Induction Hob Repair</strong></a><strong>: </strong>If you are facing any problems with your Siemens hob, oven, stove, refrigerator, washer dryer, or dishwasher, contact the FAJ team for induction hob repair near me and service in Dubai.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/la-germania-cooking-range-repair-in-dubai-la-germania-oven-repair-in-dubai-la-germania-cooker-repair-in-dubai-la-germania-cooker-oven-maintenance-service-in-dubai-refrigerator-repair-in-dubai-fridge-r/"><strong>La Germania Hob Repair</strong></a><strong>: </strong>When you need La Germania hob repair in Dubai, we have a team of professional and qualified technicians to provide hob repair near me service, and gas stove repair services are available throughout the Dubai.&nbsp;</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/bosch-home-appliances-repair/"><strong>Bosch Hob Repair</strong></a><strong>:</strong> If you are looking for the best Bosch induction hob repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance and are recognized as the leading Bosch hob service provider in the area.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/viking-appliances-service/"><strong>Viking Gas Range Repair</strong></a><strong>:</strong> Your Viking appliances repair or maintenance, and we can help. For high-quality Viking gas range repair, Viking fridge freezer service, and oven maintenance in Dubai, rely on FAJ.&nbsp;</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/daewoo-home-appliance-installation-maintenance-repair-fix-service-in-dubai/"><strong>Daewoo Hob Repair</strong></a><strong>: </strong>We provide expert services for Daewoo electric hob repair near me in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo gas hob service, cooking range fix, refrigerator, washing machine, dryer, and more.&nbsp;</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/neff-fridge-repair-in-dubai-neff-washing-machine-repair-in-dubai-neff-cooker-repair-in-dubai-neff-oven-repair-in-dubai-neff-appliances-maintenance-in-dubai-neff-refrigerator-fix-repairs-service-in-dub/"><strong>Neff Gas Hob Repair</strong></a><strong>:</strong> Are you concerned about your Neff induction hob malfunctioning and searching for a reliable Neff induction hob repair and service company in Dubai? Contact us for same-day gas cooker service and cooker hob repair in Dubai!</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/teka-home-appliance-installation-maintenance-repair-fix-service-in-dubai/"><strong>Teka Induction Hob Repair</strong></a><strong>:</strong> If you're searching for the best Teka induction hob repair in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka gas stove service and repair, refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area.</li>
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

        <MaintenanceContract />

        {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg={reviewsbg}
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

export default HobRepairDetail;