import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../Contact/Serviceappointemnt';
import CallNowButton from '../Buttons/CallNowButton';
import GetQuoteButton from "../Buttons/GetQuoteButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import MaintenanceContract from "../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import HeaderForm from "../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../ApplianceCommons/AppliancesAppointmentCol";
import Testimonial1 from "../Testimonial/Testimonial1";

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
  </svg>
);
const EyeSlashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
  </svg>
);

const ElectricalServiceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metaImage = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/professional-electricians-at-work/public";
  const metatitle = String(titleSeo || "Electrical Work Services in Dubai | Electrician for Maintenance");
  const metadescription = String(description || "Professional electrician services in Dubai. We're ready to assist with wiring installation, electrical repair, switchboard upgrades, lighting solutions, & socket ");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Electrical services in dubai, Electrical work near me, water leak fixing, water pump repair, water pump replacement, Electrical maintenance, emergency Electrical services, affordable Electrical services");
  const metaURL = String(URL || "https://www.fajservices.ae/services/electrical-services-in-dubai/");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  // State for fetched data
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

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  // Fetch JSON data
   useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/ElectricalServiceFAQs.json`),
           fetch(`${import.meta.env.BASE_URL}data/ElectricalServicesTestimonials.json`),
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
            <h1 className="cs_fs_30">Professional Electrical Services in Dubai</h1>
            <p>Finding suitable electrician services in Dubai can be hard. Whether you need to replace an electrical socket or install new lighting, it’s important to hire an electrician who is exactly qualified and fully suitable for electrical wiring installation, electrical repair, switchboard, breaker upgrades, lighting solutions, and socket installations.<br />At <a href="https://maps.app.goo.gl/UFTqwSPQkRc58smU8">FAJ Technical Services L.L.C</a>, we take a different approach to electrical work in Dubai. Our experts are available to handle complex diagnoses, enabling us to identify potential issues during the initial phone call. This means our technicians arrive well-prepared for the job at hand.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5 align-items-center">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 text-left mt-0">Why choose FAJ Technical Services L.L.C for electrical services?</h2>
                <p className="mb-1"><strong>You are in trustworthy hands.</strong></p>
                <p className="mb-0">Our skilled <a href="https://www.facebook.com/FAJTechnicalServicesLLC/">technicians</a> are fully trained in Dubai circuitry to ensure compatibility with UAE systems, so your safety is never compromised.</p>
               <p className="mb-1"><strong>We provide a complete warranty on all services and parts.</strong></p>
                <p className="mb-0">We have an outstanding <a href="https://www.fajservices.ae/our-portfolio/">track record</a> for our electrical services, backed by a warranty and a commitment to quality assurance.</p>
                <p className="mb-1"><strong>We are one of the fastest in the area for booking and completing services.</strong></p>
                <p className="mb-0">Our large teams and committed parts storage greatly reduce your wait time.</p>
              </div>

              <div className="col-md-6 ">

                <img className="bordered-img w-100" src={getImageSrc('professional-electricians-at-work')} alt="professional electricians at work" />

              </div>
            </div>

            <AppliancesAppointmentCol />
          </div>
        </section>
        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">BENEFITS OF ELECTRICAL SERVICES</h2>
              <p className="mb-2 text-light">Our expert electrical <a href="https://www.fajservices.ae/">services</a> ensure that your home operates safely and efficiently.</p>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-3 mb-2 mt-2">
                  <div className="benifit-box-container pt-2">
                      <h3 className="text-uppercase mb-2 cs_fs_16">Health and Safety Compliance</h3>
                      <p className="small">Electrical installation and repair performed by skilled, experienced technicians reduces the risk of injury or fire.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2 mt-2">
                    <div className="benifit-box-container pt-2">
                      <h3 className="text-uppercase mb-2 cs_fs_16">Economic Usage</h3>
                      <p className="small"><a href="https://www.fajservices.ae/">Prompt repair</a> can help prevent the surprise of unexpected utility bills.</p>
                  </div>
                </div>
                <div className="col-md-3 mb-2 mt-2">
                    <div className="benifit-box-container pt-2">
                        <h3 className="text-uppercase mb-2 cs_fs_16">Safeguards Your Appliances</h3>
                        <p className="small">Feel assured that your electrical load aligns with system quality.</p>
                      </div>
                </div>

                <div className="col-md-3 mb-2 mt-2">
                    <div className="benifit-box-container pt-2">
                      <h3 className="text-uppercase mb-2 cs_fs_16">System Reliability</h3>
                      <p className="small">Regular <a href="https://www.instagram.com/fajtechnicalservicesllc/">maintenance</a> will help ensure that your household's electrical needs are met efficiently for an extended period.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Most Common Electrical Problems</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Tripped Circuit Breakers</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">This happens when a circuit is overloaded with too many appliances or devices, causing the breaker to trip as a safety measure. It is one of the most common issues, especially in older homes or offices.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Faulty Outlets or Light Switches</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Non-working outlets, loose switches, or sparking can show internal wiring issues, wear and tear, or poor installation—all common problems that should be fixed promptly.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Frequent Light Bulb Burnouts or Flickering</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">This may be caused by loose wiring, poor connections, defective transformers, or the use of incorrect bulbs. Continued flickering could also indicate more serious electrical issues that necessitate professional attention.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Power Outages in Specific Areas</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">When some areas of a home lose power while others remain functional, it often indicates wiring issues, damaged circuits, or faulty breakers.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Overloaded Power Strips and Extension Cords</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Excessive use of multi-plug adaptors can lead to overheating, fire hazards, and long-term damage to electrical circuits. Electricians are frequently called to install additional outlets or safely rewire existing ones.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Electrical Shocks</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Even a mild shock when plugging in a device can indicate faulty wiring or grounding issues, and it's important not to ignore it. This can also happen with <a href="https://www.fajservices.ae/services/">appliances</a> like washing machines or dishwashers if they are defective or if the grounding wire hasn't been connected properly.</p>

                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Sounds of Buzzing Coming from Electrical Outlets or Fixtures.</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Buzzing or humming sounds are not normal. They can indicate loose wiring, poor connections, defective electrical components, or even arcing, which can pose a serious fire hazard.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Warm or Discoloured Wall</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If an opening or switch plate feels warm to the touch or shows signs of discolouration, it may indicate overheating behind the scenes. This could be caused by overloaded circuits, faulty wiring, or poor connections. It's essential to have a professional inspect these issues before they lead to dangerous situations.</p>
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
        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
        <section className="section cs_py_30 bg-light-gray mb-4">
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
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1-new')} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
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

        
        {/* Maintenance Contract */}
        <MaintenanceContract />

        {/* testimobial section */}
        {/* {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg="testimonialbg"
            testimonialData={testimonial_data}
            sectionId="home-testimonials"
          />
        )} */}
         <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
          subtitle2="Contact us"
            title2="Book An Appointment"
          />

        </section>
        {/* FAQ&apos;s */}
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

       

      </div >
    </>

  );
};

export default ElectricalServiceDetail;