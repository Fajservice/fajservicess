import { useCallback, useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import HeaderForm from "../../Headeform/HeaderForm";
import FAJACPrice from "../../Miscellaneous/FAJACPrice";
import { Link } from "react-router-dom";
import Testimonial1 from "../../Testimonial/Testimonial1";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const AcRepairNearMeDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "AC Repair Near Me - Expert AC Maintenance Near Me - FAJ");
  const metadescription = String(description || "Looking for AC repair near me in Dubai? Contact us at 043300002 for AC maintenance. Get same-day air conditioner repair service near me, Sharjah");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "AC Repair Near Me, AC Service Near Me, Air Conditioner Repair Near Me, Air Conditioner Service Near Me, AC Maintenance Near Me, Split AC Repair Near Me, Split AC Service Near Me, Central AC Repair Near Me, Central AC Service Near Me");
  const metaURL = String(URL || "https://www.fajservices.ae/dubai/ac-repair-near-me/");
  const metaImage = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Experts-AC-Service-and-Maintenance/public";

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
          fetch(`${import.meta.env.BASE_URL}data/DubaiData/FAQs/RefrigeratorRepairNearMeFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/DubaiData/Testmonials/RefrigeratorRepairNearMeTestimonial.json`),
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
            <h1 className="cs_fs_30">AC Repair Near Me </h1>
            <p>As one of Dubai's leading air conditioning companies, we possess the skills and experience necessary to support your air conditioning system. Our team of AC technicians provides comprehensive coverage across Dubai for AC installation, AC servicing, and AC repair.
              <br />
              We provide services for all types of air conditioning systems in Dubai and Sharjah, ensuring high quality.
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>
        {/* Select Air Conditioner Repair & Service*/}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">

            <div className="row gx-md-5">
              <div className="col-md-6">

                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }} >AC Repair and AC Servicing Near Me</h2>

                <p className="mb-1">When you need air conditioning repair near you, it&apos;s important to select a skilled technician.<br />
                  Our dedicated team specialises in AC servicing and maintenance throughout Dubai and Sharjah. At FAJ, we are committed to providing reliable solutions that improve your indoor comfort year-round while ensuring your system operates efficiently.
                </p>

                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>EXPRESS & EMERGENCY AC REPAIR SERVICE</h2>
                <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 195 to 320, depending on the capacity for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
                <h3 className="cs_fs_24 mb-1 pt-3 border-small-top">CHOOSE FAJ FOR YOUR PEACE OF MIND</h3>
                <p><b>We provide 2-month service warranty</b><br />
                  and 3-month parts warranty as standard.
                </p>

              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('ac-repair-2')} alt="AC Repair In Dubai" />

              </div>
            </div>

            <div className="appointment-col border-small-top pt-3">
              <div id="get-quote" className=" mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3">
                  <WhatsappIconButton />
                  <CallNowButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* price section                */}
        <FAJACPrice />
        {/*FAJ: Creating the Perfect Temperature All Year Round */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">Understanding AC Service in Dubai</h2>
            <p>Are you tired of searching for "AC Service near me" or "AC servicing"? Welcome to FAJ Company's AC Service in Dubai, where comfort meets convenience! Let's take a closer look at what we offer:</p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('ac-repairing')} alt="AC Repairing" />
              </div>
              <div className="col-md-6">

                <ul className="mb-0">
                  <li> <strong>Emergency Assistance:</strong> Breakdowns can happen at any time, but we're here to help. Our team will respond quickly to get your air conditioning unit up and running again.</li>
                  <li> <strong>Expertise and Experience:</strong> You can trust that our professionals are highly trained and experienced in AC service. Each AC technician has a minimum of three years of experience, enabling them to handle even the most complex AC issues with confidence.</li>
                  <li> <strong>AC Inspection and Diagnosis:</strong> Our skilled technicians will start by conducting a thorough inspection and diagnosis of your AC unit. Whether you're experiencing strange noises or poor cooling performance, no issue is too big or too small for our experts.</li>
                  <li> <strong>Routine AC Maintenance:</strong> Keep your AC in peak condition with regular check-ups and AC filter cleanings. Routine AC maintenance is essential for optimal performance and longevity of your system.
                    <br />
                    At FAJ Company, we are dedicated to providing reliable AC services that meet your needs.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Of Regular AC Service and Maintenance Dubai */}
        <section className="section cs_py_30 ac_benifit_blue">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="cs_fs_30 text-light">Benefits of FAJ Company's AC Service in Dubai</h2>
                <p>Are you considering FAJ Company's AC service in Dubai? Here are some compelling benefits to keep in mind</p>
                <div className="row mt-4 gx-4 gy-4">
                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/cooling1')} alt="Cooling Efficiency" className="img-fluid rounded-circle border border-4 border-info" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">Optimal AC Performance</h3>
                      <p className="small">Regular maintenance ensures that your AC operates at peak performance, keeping you cool and comfortable throughout the year.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/disinfection')} alt="Disinfect Components" className="img-fluid rounded-circle border border-4 border-warning" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">Improved Air Quality</h3>
                      <p className="small"> Clean filters and vents ensure fresher, healthier air circulates in your home, free from dust, allergens, and pollutants.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/fan')} alt="Fan Assessment" className="img-fluid rounded-circle border border-4 border-success" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">FAN ASSESSMENT</h3>
                      <p className="small">We ensure the fan works correctly with no blockages in the evaporator coil.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/thermo')} alt="Thermostat Check" className="img-fluid rounded-circle border border-4 border-primary" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">Extended AC Lifespan</h3>
                      <p className="small">Proper care and maintenance can significantly extend the lifespan of your AC unit, helping you save money on premature replacements.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/airflow')} alt="Airflow Balance" className="img-fluid rounded-circle border border-4 border-danger" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">Energy Efficiency</h3>
                      <p className="small">A well-maintained AC consumes less energy, which leads to lower utility bills and a reduced environmental impact.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/customer')} alt="Customer Feedback" className="img-fluid rounded-circle border border-4 border-secondary" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">Peace of Mind</h3>
                      <p className="small">With FAJ Company's AC Service in Dubai, you can enjoy peace of mind knowing your cooling needs are in expert hands.</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-4">
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
        <section className="section cs_py_30  bg-light-gray mb-4">
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
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
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
                    <p>We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

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

        <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
          subtitle2="Contact us"
            title2="Book An Appointment"
          />

        </section>
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

        

      </div >
    </>
  );
};

export default AcRepairNearMeDetail;