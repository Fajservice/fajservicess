import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../Contact/Serviceappointemnt';
import CallNowButton from '../Buttons/CallNowButton';
import GetQuoteButton from "../Buttons/GetQuoteButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import BenefitAcMaintenance from "../BenefitAcMaintenance/BenefitAcMaintenance";
import MaintenanceContract from "../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Testimonial1 from "../Testimonial/Testimonial1";


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
const RefrigeratorRepairServiceDetails = ({ subtitle, title, bgImg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO

  const metatitle = String(titleSeo || "AC Repair Dubai - Reliable AC Fixing - AC Repair Near Me");
  const metadescription = String(description || "If your air conditioner not cooling! It is time to contact FAJ to get fix split or central AC Repair Dubai. Book 043300002 emergency AC repair");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Electrical Plumbing Services, Dubai, Faj Technical Services, Plumbing, Electrical Services, Home Maintenance");
  const metaURL = String(URL || "https://www.fajservices.ae/electrical-plumbing-service/");
  const metaImage = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/banners/electrical-service.jpg";


  subtitle = "Testimonial"
  title = "What our clients say About Us"
  bgImg = "testimonialbg"
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
          fetch(`${import.meta.env.BASE_URL}data/AcRepairFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcServiceTestimonials.json`)
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

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">THE <a href="https://www.facebook.com/FAJTechnicalServicesLLC"><b>FAJ Experts</b></a> ARE HERE TO MAKE THE BEST COOLING FOR YOUR PLACE</h2>
            <p><a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7"><b>FAJ Technical Services L.L.C.</b></a> is a leading AC repair company in Dubai, providing reliable air conditioner services tailored to the UAE's hot climate.
              <br />
              Our trained professionals ensure a comfortable environment for living, learning, working, and playing.
              When your air conditioning system fails, we're here to help. Choose FAJ for all your AC repair needs in Dubai.
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>

        {/* Maintenance Contract */}
        <MaintenanceContract />

        {/* Select Air Conditioner Repair & Service */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/ac-repair.avif`} alt="FAJ Technical Services L.L.C" />
                <h3 className="cs_fs_24 mb-1 mt-3">Select Air Conditioner Repair & Service</h3>
                <p>We understand the urgency of responding promptly when an air conditioner failure impacts your critical cooling system, especially when people depend on it. Our expert and experienced AC technicians are dedicated to delivering the best AC repair and service in Dubai.</p>
                <p>Choose FAJ for professional AC repair and maintenance for both residential and commercial units in your area.</p>
              </div>

              <div className="col-md-6 border-small-left">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/ac-repair-2.avif`} alt="FAJ Technical Services L.L.C" />
                <h3 className="cs_fs_24 mb-1 mt-3">Top Signs Need An AC Repair in Dubai</h3>
                <p>When you realize your air conditioner isn't working well in the summer, it can be frustrating. Minor signs are often overlooked, but they can lead to major problems that require repairs, especially in Dubai's heat.</p>
                <ul>
                  <li>Insufficient Cooling / AC blowing warm air</li>
                  <li>Strange Noises Coming From The AC</li>
                  <li>Leaks of gas or water around your AC unit</li>
                </ul>
              </div>
            </div>

            <div className="appointment-col border-small-top pt-3">
              <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability. For technical inspection/callout fees, AC service near you, repair, or maintenance, please click below. To book an appointment, you can call or reach us on WhatsApp at +971 50 746 4712.</p>
              <div id="get-quote" className=" mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                  <WhatsappIconButton />
                  <CallNowButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*FAJ: Creating the Perfect Temperature All Year Round */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="cs_fs_30">5 Reasons Your AC Might Need Repairs This Summer </h3>
            <p>Air conditioning issues are quite common during the summer months. If you&apos;re experiencing AC issues this season, it&apos;s important to understand what might be happening with your system. Identifying the problem early can prevent it from worsening and ensure your place remains comfortable during the heat. </p>



            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/ac-repair-3.avif`} alt="FAJ Technical Services L.L.C" />
              </div>
              <div className="col-md-6">

                <ul className="mb-0">
                  <li> <strong>Insufficient Cooling:</strong> May be due to a refrigerant leak, blocked filter, or compressor issues.</li>
                  <li> <strong>Strange Noises:</strong> Sounds like banging or hissing could indicate damaged parts.</li>
                  <li> <strong>Increased Energy Bills:</strong> A spike in bills often means your AC is working inefficiently.</li>
                  <li> <strong>Frequent Cycling:</strong> Constantly turning on and off might suggest a faulty thermostat or oversized system.</li>
                  <li> <strong>Poor Airflow:</strong> Weak airflow can result from a clogged filter or issues with the ducts.
                    Stay alert for these signs to maintain your AC. If you notice any issues, consult a professional technician for help.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common AC Problems That May Require Maintenance */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="text-center">Common AC Problems That May Require Maintenance</h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Weak Airflow</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If you notice <a href="https://www.youtube.com/watch?v=qnByeIsc3lY"><b>reduced airflow</b></a> coming from your vents, it could indicate a problem with your AC system, such as a clogged filter or malfunctioning fan.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Warm Air</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your AC blows warm or room temperature air instead of cold, it could indicate compressor, refrigerant, or ductwork issues.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Unusual sounds like grinding, squealing, or banging coming from your AC unit can indicate mechanical problems that require attention.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Foul Odors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Musty or foul odors emanating from the vents could suggest mold or mildew growth within the system, which needs to be addressed quickly.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Frequent Cycling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">It may signal difficulty maintaining desired temperatures due to issues like dirty filters, low refrigerant levels, or a faulty thermostat.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">High Humidity Levels</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">An air conditioner that fails to adequately reduce indoor humidity levels may indicate issues with its cooling capacity or improper operation.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Water pooling around AC or dripping from vents could indicate blocked condensate drain, frozen coils, or other issues.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Increased Energy Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">High energy bills without increase in usage could indicate the inefficiency of your AC due to dirty filters, duct leaks, or other problems.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="get-quote" className="mb-0 mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>

          </div>
        </section>

        {/* A Quick Guide to Understanding and Fixing Your AC Problems*/}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="cs_fs_30">A Quick Guide to Understanding and Fixing Your AC Problems</h3>
            <div className="row">
              <div className="col-xl-6">
                <iframe className="bordered-img blue-border" width="100%" height="350" src="https://www.youtube.com/embed/prUR0-lZlzg?si=96yf5hxyAA3bct8w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
              <div className="col-xl-6">
                <p>Take a look at this video to understand the possible problems your AC might face. This will help you to ensure that the professionals you hire are completing the right checks.</p>
                <p><strong>We specialize in:</strong></p>
                <div className="row">
                  <div className="col">
                    <ul className="cs_list cs_style_1 cs_fs_16 cs_mp_0">
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Cleaning or replacing the air filter</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Recharging refrigerant levels</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Checking and tightening electrical connections</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Ac coil cleaning</span>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <ul className="cs_list cs_style_1 cs_fs_16 cs_mp_0">
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Unclogging drain lines</span>
                      </li>

                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Inspecting and repairing ductwork</span>
                      </li>

                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Fixing leaks refrigerant, water, or duct leaks</span>
                      </li>

                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Regular maintenance</span>
                      </li>



                    </ul>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>

        <BenefitAcMaintenance />

        {/*Select FAJ for Quick Service, Efficienc  */}
        <section className="section cs_py_30 ">
          <div className="container">
            <h3 className="cs_fs_30">Why Choose FAJ Technical Services L.L.C?</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <h4 className="cs_fs_24">We provide quick, <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a> and peace of mind</h4>
                <ul className="acsvs-exp-spl-para tick-ul mb-0">
                  <li><b>We get the job done on time</b> thanks to our larger team and dedicated parts warehouse</li>
                  <li><b>All our AC technicians are fully qualified</b> and extensively trained by us to address all types of AC issues.</li>
                  <li><b>We help prevent future breakdowns</b> by only using locally produced, highest quality refrigerant gas.</li>
                  <li><b>From routine maintenance to complex repairs</b> we offers all type of AC repair and maintenance services.</li>
                  <li><b>We only use genuine parts</b> to give you peace of mind.</li>
                  <li><b>We give service warranty</b> to make sure you are relax.</li>
                  <li><b>We look after the environment</b> by always recycling our gas.</li>
                </ul>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/Ac-Maintenance-in-Dubai.avif`} alt="FAJ Technical Services L.L.C" />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise in air conditioning Repair services for the following brands */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3>We specialise in air conditioning Repair services for the following brands</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0">
                  <Link to="/services/air-conditioning-repair/brands/lg/"><b>LG Air Conditioner Repair</b></Link>: FAJ offers reliable LG AC repair, and services in Dubai. With professionals, who are experts in split, vrf and central air conditioning units.
                </p>
                <p className="mb-0">
                  <Link to="/services/air-conditioning-repair/brands/samsung/"><b>Samsung Air Conditioner Repair and Service</b></Link>: Based in Dubai, FAJ is your go-to destination for Samsung AC Repair in Dubai. Specializing in Samsung air conditioner systems, we offer comprehensive services ranging from maintenance to repair.
                </p>
                <p className="mb-0">
                  <Link to="/services/air-conditioning-repair/brands/york/"><b>York AC Service and Repair</b></Link>: The York AC repair service ensures you don't need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritized.
                </p>
                <p className="mb-0">
                  <Link to="/services/air-conditioning-repair/brands/daikin/"><b>Daikin Air Conditioner Repair</b></Link>: Trust our skilled team to efficiently resolve all issues with your Daikin air conditioner and restore its functionality.
                </p>
                <p className="mb-0">
                  <Link to="/services/air-conditioning-repair/brands/trane/"><b>Trane HVAC Repair</b></Link>: With extensive knowledge of Trane air conditioning systems, we provide effective repairs to keep your unit running smoothly.
                </p>
                <p className="mb-0">
                  <Link to="/services/air-conditioning-repair/brands/panasonic/"><b>Panasonic AC Repair and Service</b></Link>: No matter the issue with your Panasonic air conditioner, our experts can accurately diagnose and fix it.
                </p>
                <p className="mb-0">
                  <Link to="/services/air-conditioning-repair/brands/gree/"><b>Gree AC Repair and Service</b></Link>: Has your AC stopped working? No need to endure unpleasant temperatures and stuffy air or suffer losses due to damaged equipment (broken gree air conditioning in a room, for example, can be a disaster!) – FAJ get your gree air conditioning back up and running in no time!
                </p>
                <p className="mb-0">
                  <Link to="/services/air-conditioning-repair/brands/o-general/"><b>O General AC Repair and Service</b></Link>: O General AC repair in Dubai requires expert help because only specialized ones know how to address aircon issues. We are a hassle-free air condition repair service provider.
                </p>
                <p className="mb-0">
                  <Link to="/mitsubishi-ac-repair-in-dubai/"><b>Mitsubishi Air Conditioner Repair and Service</b></Link>: Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai! Our expert Mitsubishi AC services ensure your AC stays cool and efficient, providing comfort and peace of mind.
                </p>
                <br />

                <p className="mb-0">
                  <Link to="/services/air-conditioning-repair/brands/sanyo/">Sanyo AC Repair Dubai</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/rheem/">Rheem AC Repair</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/skm/">SKM AC Repair Dubai</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/daewoo/">Daewoo AC Repair Dubai</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="#">Carrier AC Repair</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/midea/">Midea Air Conditioner Repair Service Near Me</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/lennox/">Lennox Air Conditioning Repair</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/goodman/">Goodman AC Repair Dubai</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/coleman/">Coleman AC Reapair Services</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/westpoint/">Westpoint Repair</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/aftron/">Aftron AC Repair Service Near Me</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/crafft/">Crafft AC Repair</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/bryant/">Bryant AC Repair</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/ruud/">Ruud Air Conditioner Repair Service</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/mcquay/">McQuay Air Conditioning Repair</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/blue-star/">Blue Star</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/supra/">Supra AC Repair</Link>
                  <span>&nbsp;-&nbsp;</span>

                  <Link to="/services/air-conditioning-repair/brands/toshiba/">Toshiba AC Repair</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/whirlpool/">Whirlpool AC Repair</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/super-general/">Super General AC Repair</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/hitachi/">Hitachi AC Repair</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/o-general/">O General Air Conditioning Repair</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/cooline/">Cooline Air Conditioner Repair Service Near Me</Link>
                </p>
              </div>

            </div>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>

          </div>
        </section>

        <section className="section cs_py_30 bg-dark-blue text-light">
          <div className="container text-center">
            <h3 className="cs_fs_30 text-light">Practical Tips to Improve Energy Efficiency</h3>
            <p>Learn easy and proven ways to save energy with your AC. Find tips to cut the cost and stay cool all summers!</p>

            <a>href="https://www.fajservices.ae/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf"
              className="btn-green-yellow"
              target="_blank"
              rel="noopener noreferrer"
              Click Here to Save on Energy Bills
            </a>

          </div>
        </section>

        {/* white section with AC image */}
        <section className="section cs_py_30">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-4">
                <div className="acsvs-sec-prefoot-sec-cone">
                  <h3 className="cs_fs_20 mb-0">COOLING &amp; HEATING</h3>
                  <span className="mb-5">Stay comfortable all year round</span>
                  <div className="mb-5"></div>
                  <h3 className="cs_fs_20 mb-0">BETTER AIR QUALITY</h3>
                  <span className="mb-5">Reduce humidity, pollen and dust</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="acsvs-sec-prefoot-sec-ctwo">

                  <img src={getImageSrc('benafit-acimg')} alt="FAJ Technical Services L.L.C" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="acsvs-sec-prefoot-sec-cthree">
                  <h3 className="cs_fs_20 mb-0">PROTECT YOUR PROPERTY</h3>
                  <span className="mb-5">Prevent damage to electronics and furnishings</span>
                  <div className="mb-5"></div>
                  <h3 className="cs_fs_20 mb-0">QUIET AND SECURE</h3>
                  <span className="mb-5">No need to leave windows open</span>
                </div>
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
            bgImg="/img/home-testimonial-bg.jpg"
            testimonialData={testimonial_data}
          />
        )}

        {/* FAQ&apos;s */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye"><EyeIcon /></i>
                      <i className="bi bi-eye-slash "><EyeSlashIcon /></i>
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

        <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
          subtitle2="Contact us"
            title2="Book An Appointment"
          />

        </section>
      </div>
    </>
  );
};

export default RefrigeratorRepairServiceDetails;