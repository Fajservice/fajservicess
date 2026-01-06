import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BookingFormModal from '../BookingFormModal';
import Serviceappointemnt from '../Contact/Serviceappointemnt';
import CallNowButton from '../Buttons/CallNowButton';
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import MaintenanceContract from "../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import HeaderForm from "../Headeform/HeaderForm";
import Testimonial1 from "../Testimonial/Testimonial1";
import BrandsSliderSection from "../BrandsSliderSection";
import BeforeAfter from "../BeforeAfter/BeforeAfter";

const ArrowTopRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M17 7H7M17 7V17"/>
  </svg>
);

const CoffeeMachineServiceCenterInDubaiDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  const metatitle = String(titleSeo || "Coffee Machine Service Center in Dubai & Repair & Maintenance");
  const metadescription = String(description || "Best FAJ Coffee machine service center in Dubai. Call us for home / office espresso machine, restaurant, coffee maker repair and maintenance near me");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Coffee Machine Repair, Coffee Machine Service, Coffee Machine Descaling, Coffee Machine Service Center");
  const metaURL = String(URL || "https://www.fajservices.ae/coffee-machine-service-center-in-dubai/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/img/Coffee-machine-servicing-title-image.avif");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = "img/testimonialbg.jpg"
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          fetch(`${import.meta.env.BASE_URL}data/coffeemachinesserviceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/CommercialCoffeeMAchineReapairTestimonials.json`),
          fetch(`${import.meta.env.BASE_URL}data/coffeemachineServicebrand.json`)
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
            <h1 className="cs_fs_30">Coffee Machine Service Center & Coffee Machine Repair in Dubai</h1>
            <p>Since 2010, FAJ has been providing reliable and trusted expertise in installation, coffee machine service and maintenance, specializing in coffee machine repair in Dubai, serving home coffee machine service, office coffee machine repair, restaurant coffee machine maintenance, and cafes.<br />We work with a variety of coffee equipment, including tea &amp; coffee vending machine repair, espresso machine maintenance, coffee grinders servicing, professional coffee machine, and automatic coffee machine error fix.&nbsp;<br />Our dedicated team understands the importance of functioning coffee machine servicing, and we prioritise timely maintenance.&nbsp;<br />As specialists in espresso machines, we are committed to managing and maintaining your equipment throughout its lifespan, ensuring that you enjoy reliable, great-tasting coffee every day.</p>

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
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }} >Coffee Machine Repair and Service</h2>

                <p className="mb-2">When your coffee machine breaks down or stops working, it can disrupt your daily   routine.
                  <br />
                  That's where our expert technician comes in. FAJ expert offers fast and efficient services near you to restore optimal performance. We handle issues like coffee machine descaling, cleaning service, water leakage, Steam wand, noise, poor coffee quality, and grinding problems. Let us help get your coffee machine back on track.
                </p>
                <h2 className="cs_fs_18 mb-1 pt-3 border-small-top" style={{ fontSize: "18px" }}>
                  Coffee Machine Servicing and Maintenance Contract
                </h2>
                <p className="mb-0">
                  Whatever you need, whenever you need it. A scheduled AMC service contract for your coffee machine, which includes cleaning and descaling, is essential for smooth operation throughout the year.
                  <br />
                  Regular maintenance is key whether your coffee machine is for home, commercial use, an office, café shop, or a restaurant—be it an espresso machine, automatic coffee machine, coffee maker, or coffee grinder. We are always here to help make life easier for you.

                </p>
              </div>

              <div className="col-md-6 ">

                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/Coffee-machine-servicing-title-image.avif`} alt="Post Image" />

              </div>
            </div>

            <div className="appointment-col border-small-top pt-3">
              <p>
                If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.
                <br />
                Timing: Mon-Sat 8:00 AM to 6:00 PM - Sunday 12:00 PM to 6:00 PM. To book an appointment, you can call or reach us on WhatsApp at +971 50 746 4712.
              </p>

              <p className="appointment-col border-small-top pt-3" >The <a href="https://www.google.com/maps/dir//Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/@25.1105958,55.1452595,22158m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94!2m2!1d55.227661!2d25.1106186?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" > FAJ workshop</a> is conveniently located near both Al Khail Road and Sheikh Zayed Road. When you drop off your coffee machine at the workshop, you will receive a <strong>discount</strong> on the technical inspection fee and other services.
              </p>

              <div id="get-quote" className=" mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3">
                  <WhatsappIconButton />
                  <CallNowButton />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why Coffee Machine Maintenance Important in Dubai?
            </h2>
            <p className="">
              Regular maintenance of coffee machine is essential for business. It ensures the quality of coffee, extends the machine's lifespan, and reduces repair costs.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/coffee-machine-service.avif`} alt="Post Image" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Preventing Breakdowns: </strong> Routine maintenance, including cleaning and descaling, reduces costly repairs and downtime, impacting revenue. </li>
                  <li> <strong> Extending Lifespan: </strong> Regular maintenance prolongs machine life, saving on replacement costs. </li>
                  <li> <strong> Lowering Maintenance Costs: </strong> Addressing minor issues early can prevent larger, more expensive repairs. </li>
                  <li> <strong> Maintaining Efficiency: </strong> Consistent upkeep ensures optimal performance and reduces energy consumption. </li>
                  <li> <strong> Professional Service for Commercial Use: </strong> Commercial machines need specialized maintenance for safety and performance </li>
                  <li> <strong> Importance in Commercial Kitchens: </strong> In the UAE, reliable maintenance of coffee machines is crucial for beverage service. </li>
                  <li> <strong> Home Use: </strong> Regular maintenance improves coffee machine quality and lifespan. Professional servicing benefits home and business users in Dubai.  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems of Coffee Machines   </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Water Leaking </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Coffee Machine / espresso machine water leakage issues can be caused by worn-out seals, loose connections, or cracks in the water reservoir or tubing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Machine Descaling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Regular coffee machine descaling performed with a descaling solution can remove mineral buildup, a common cause of clogs and leaks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Machine Cleaning </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Regular coffee machine cleaning service of the filter basket, coffee grinder, and other parts can prevent clogs and improve the coffee taste.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Bad Coffee Taste</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0"> Poor quality beans, improper brewing parameters (such as grind size and ratio), or case machine's internal components can result in bad-tasting coffee.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Loud or Unusual Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      Noise from the coffee machine, Low water levels, the espresso machine being placed on a hard surface, or heating issues can lead to unexpected noises.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Brewing Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Weak Coffee is often a common problem, typically due to improper grind size, over-extraction, under-extraction, or using stale espresso machine coffee beans.
                    </p>

                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Slow Coffee Flow</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      This issue of coffee machine or espresso or automatic coffee machine can stem from clogs, incorrect grind size, or problems with the coffee machine's pump.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Professional Help</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      For more complex issues or if you are unable to troubleshoot the problem yourself, contact FAJ qualified coffee machine repair technician for maintenance.
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

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR COFFEE MACHINES AND ESPRESSO  </h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/IjckdZLs_Qg"
                  title="FAJ Videos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-xl-6">
                <p className='mb-0'>We specialise in all types and brands of Coffee Machines, including espresso machine </p>
                <p className='mb-0'><strong>Our services include: </strong></p>
                <ul className="mb-0">
                  <li> <strong>  Installation: </strong> Expert installation of various types and brands of coffee machines, ensuring optimal performance and efficiency.</li>

                  <li> <strong> Diagnostics: </strong> Thorough fault finding to diagnose issues effectively. We provide eligibility assessments and detailed quotations to address any concerns with your system. </li>

                  <li> <strong> Repair Service: </strong> Efficient repair services for all coffee machine components, ensuring quick resolution of any issues, such as leaks, electrical failures, and system malfunctions.</li>

                  <li> <strong> Annual Maintenance Contract: </strong> This contract outlines the terms and services covered for the annual maintenance of the espresso machine. </li>
                  <p className="mb-0">
                    Regular maintenance is essential for optimal performance, efficiency, and longevity of your coffee machine.
                  </p>
                </ul>
              </div>

            </div>
          </div>
        </section >

        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits Of Coffee Machines Service Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.svg`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Ensuring Safety</h3>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Optimal-Performance.svg`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Optimal Performance
                      </h3>
                      <p className="small">Regular maintenance helps your coffee machines run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Lower-Energy-Bills.svg`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Lower Energy Bills</h3>
                      <p className="small">Energy efficient coffee machines translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Saving-Money-on-Repair.svg`} alt="Cooling Efficiency" className="icon-img-block-icon" />
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
                        <img src={`${import.meta.env.BASE_URL}img/icons/extending.svg`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Coffee Machine Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your coffee machines, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={`${import.meta.env.BASE_URL}img/icons/Peace-of-Mind.svg`} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_18">Peace of Mind
                      </h3>
                      <p className="small">Knowing your coffee machines are in top condition gives you confidence and removes the stress of unexpected failures.</p>
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
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your coffee machine runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your coffee machine repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/Coffee-Machine-Repair-&-Maintenance.avif`} alt="FAJ icon service" />
              </div>

              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in coffee machine repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two coffee machines at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled coffee machine technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={`${import.meta.env.BASE_URL}img/Coffee-Machine-Repair-&-Maintenance.avif`} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>
        
        <section className="section cs_py_30 bg-light-gray custom-css-box">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY Coffee MAchine REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 157 to 280 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month repair warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h2 className="text-center">CHOOSE  DOMESTIC OR PROFESSIONAL COFFEE MACHINE REPAIR SERVICE</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Ascaso Coffee Machine Repair </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Ascaso espresso coffee machine maintenance and cleaning services in Dubai and Sharjah.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Lelit Coffee Machine Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Expert Lelit coffee machines repair, maintenance, and descaling are available near you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Conti Coffee Machine Repair </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Get Conti espresso & coffee machine descaling and cleaning services near your location.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Jura Coffee Machine Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We offer Jura coffee machine and espresso descaling and maintenance services in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dr Coffee Machine Repairs</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      You can find professional Dr Coffee machine maintenance and descaling services near you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">La Marzocco Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Premier maintenance and cleaning for LA Marzocco espresso machine, including AMC services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">La Pavoni Espresso Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We offer espresso machine repair, including cleaning services, to keep machine in top shape.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">ECM Coffee Machine Servicing</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Contact us for ECM coffee machine maintenance, repair, including descaling service.
                    </p>
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
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">FRANKE Espresso Machine Fix</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      You can trust FAJ for the best Franke coffee machine repair, servicing, and descaling in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Gaggia Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Find nearby Gaggia espresso machine maintenance and cleaning service in Dubai
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Bosch Coffee Machine Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Fast Bosch coffee machine service and Bosch coffee maker repair near your location.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Delonghi Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      DeLonghi coffee machine service & DeLonghi espresso machine maintenance and cleaning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Breville Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Our team specializes in Breville coffee machine maintenance and cleaning service in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Sage Coffee Machine Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Expert Sage coffee machine repair and maintenance, with descaling in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Melitta Coffee Machine Servicing</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We provide Melitta coffee maker repair in Dubai, offering sameday fix coffee machine.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Farenheit Epsilon Coffee Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We offer reliable Farenheit Epsilon coffee machine repairing and servicing in your area.
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
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Bezzera Espresso Machine Repairs</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We are Dubai&apos;s leading specialists in Bezzera coffee machine repair, offering same-day service.
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Built-in Teka Coffee Machine Fix</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Emergency coffee machine repairs and servicing - Call now for a no-obligation quote!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Rocket Espresso Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Best Rocket Espresso Machine maintenance service at affordable prices - specialists you can trust.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Astoria Loft Espresso Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We provide trained Astoria Loft coffee machine repair and maintenance services in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Magister Espresso Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The technician helps with Magister espresso machine maintenance service near your location.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Orchestrale Espresso Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We provide reliable repair, cleaning, and descaling services for coffee machines and espresso machines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Illy Saeco Royal Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      FAJ services and repair espresso machine and offers annual maintenance contracts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Cafematic Automatic Coffee Machine
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Automatic coffee machine and espresso machine AMC service in Dubai, UAE.</p>
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
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Isomac Coffee Machine Repair
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you need Isomac coffee machine repair, coffee machine service is available near you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Siemens Coffee Machine Cleaning
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Coverage of Siemens espresso machine servicing and repair, as well as coffee maker.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Rancilio Volumetric Espresso Machine
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We specialize in reliable volumetric espresso machine maintenance and repair services in your area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Zulay Magia Coffee Machine Service
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We specialise in coffee machine repair and servicing in Dubai, and coffee equipment maintenance.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Nuova Simonelli Appia Life</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Book now Nuova Simonelli espresso machine maintenance service and descaling near you.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_14 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Victoria Arduino Espresso Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      FAJ provides maintenance and cleaning services for Victoria Arduino coffee machines in Dubai.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Slayer Espresso Machine Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Contact us for espresso machine descaling, coffee machine repair, and PPM service agreement.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Profitec Ride Espresso Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We offer Profitec Ride espresso machine servicing, repair, and AMC services in Dubai.</p>
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
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Faema Automatic Coffee Machine

                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      FAJ provides expert repair and maintenance services for Faema automatic coffee machines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">CAYE Automatic Coffee Machine

                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you need to book a repair service for your Gaye automatic espresso machine, please contact us today
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Lavazza Office Vending Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Expert Lavazza coffee machine service and repair. Coffee vending machine maintenance in Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">NECTA Krea Espresso Machine </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Book a coffee machine technician now for the coffee machine repair and cleaning service.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">FRACINO Romano Espresso Machine </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Our skilled technicians offer Fracino Romano coffee machine repair and AMC services in Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Smeg Coffee Machine Service

                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Schedule your Smeg coffee machine repair, cleaning, and maintenance today.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Jetinno Coffee Machine Repair

                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Get express services for Jentinno coffee machines, with descaling and maintenance in Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Beko Coffee Machine Maintenance

                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Dubai&apos;s number one Beko coffee machine repair, cleaning service, and maintenance service contract.
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
        <BeforeAfter
            title="Recent Completed Repair & Service"
            subTitle="Before & after"
            bgImg="img/background-image-2.avif"
            beforeImg="img/coffee-machine-before-image.avif"
            afterTitle="After"
            afterImg="img/coffee-machine-after-image.avif"
            beforeTitle="Before"
          />

        <section className="section cs_py_30 gallery-section bg-light-gray">
        <div className="container">
          <h3 className="mb-4 text-center">Gallery</h3>
            <div className="row g-4">
    
              <div className="col-lg-4 col-md-6">
                <img
                  src="/img/CoffeeMachinesImages/coffee-machines-repair-1.avif"
                  className="img-fluid rounded shadow mb-4"
                  alt="Coffee Machine Repair in Dubai"
                  loading="lazy"
                />

                <img
                  src="/img/CoffeeMachinesImages/coffee-machine-repair-gallery.avif"
                  className="img-fluid rounded shadow"
                  alt="Coffee Machine Repair"
                  loading="lazy"
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <img
                  src="/img/CoffeeMachinesImages/coffee-machine-repair-service-gallery.avif"
                  className="img-fluid rounded shadow mb-4"
                  alt="Coffee Machine Repair Service"
                  loading="lazy"
                />

                <img
                  src="/img/CoffeeMachinesImages/coffee-machines-repair-7.avif"
                  className="img-fluid rounded shadow"
                  alt="Commercial Coffee Machine Service"
                  loading="lazy"
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <img
                  src="/img/CoffeeMachinesImages/coffee-machines-repair-8.avif"
                  className="img-fluid rounded shadow mb-4"
                  alt="Espresso Machine Maintenance"
                  loading="lazy"
                />

                <img
                  src="/img/CoffeeMachinesImages/coffee-machine-repairs-service.avif"
                  className="img-fluid rounded shadow"
                  alt="Coffee Machine Repairs Service"
                  loading="lazy"
                />
              </div>
            </div>
        </div>
        </section>

        {!isLoading && brandsLogo_data.length > 0 && (
          <BrandsSliderSection
            brandsData={brandsLogo_data}
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

export default CoffeeMachineServiceCenterInDubaiDetail;