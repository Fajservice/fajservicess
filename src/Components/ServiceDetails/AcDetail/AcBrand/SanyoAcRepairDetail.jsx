import { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import ACWhyChooseUs from "../../../WhyChooseUS/ACWhyChooseUs";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import HeaderForm from "../../../Headeform/HeaderForm";
import Practicaltip from "../../../Common/Practicaltip";
import AcProperties from "../../../Common/AcProperties";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import AcAppointmentCol from "../../../Common/AcAppointmentCol";
import Testimonial1 from "../../../Testimonial/Testimonial1";
import PriceCard from "../AcLocation/PriceCard";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const SanyoAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "Sanyo Air Conditioning Repair & Maintenance Services in Dubai");
  const metadescription = String(description || "FAJ Professional offers Sanyo AC repair and services in Dubai. Get in central and split air conditioner maintenance and cleaning. Call us at 043300002.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Sanyo Ac Repair in Dubai, Sanyo Air Conditioner Service, Sanyo AC Maintenance, Sanyo AC Fix, Sanyo AC Service, Sanyo Air Condition Repair, Sanyo Air Condition Maintenance, Sanyo Air Condition");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/brands/sanyo/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/What-is-covered-in-an-AC-Maintenance-Contract/public");

  subtitle = "Testimonial"
  title = "What our clients say <br> About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  //start fetching
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

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcBrand/SanyoAcRepairfaq.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/SanyoAcServiceTestimonials.json`)
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
          <meta name="description" content={metadescription} />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />


          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={metatitle} />
          <meta property="og:description" content={metadescription} />
          <meta property="og:url" content={metaURL} />
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
            <h1 className="cs_fs_30">Sanyo Air Conditioning Repair and Maintenance Services in Dubai</h1>
            <p>Sanyo air conditioning units are a great choice for homes and commercial spaces, offering reliable summer cooling. With a universal range of models, they meet diverse needs and are a smart investment for year-round climate control.<br/> At <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7">FAJ Technical Services L.L.C</a>, established in 2010, we specialise in Sanyo AC repair and maintenance, providing cost-effective solutions to keep your cooling systems efficient. Our experienced team takes repairs and replacements, particularly for Sanyo units, which are common during this season.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>

        <PriceCard />


        {/* Experts AC Service and Maintenance */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1">Sanyo AC Maintenance and Services</h2>
                <p className="mb-2">If you are in Dubai and require Sanyo <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/">AC repair</a>, FAJ offers services for this need. The team specializes in ensuring air conditioning systems operate efficiently in Dubai and Sharjah, delivering reliable solutions for maintaining indoor comfort throughout the year. Services aim to enhance the indoor environment.</p>
                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top">Top Common Signs That You Need Sayno AC Maintenance</h2>
                <p className="mb-2">If you notice any of these AC signs, please contact us via phone or WhatsApp chat. We are here to assist your AC cooling system in getting optimal efficiency.</p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>AC Not Cooling Signs</li>
                      <li>AC Motor not working</li>
                      <li>AC Thermostat not working</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Water Leaking from your AC</li>
                      <li>AC compressor is not cooling</li>
                      <li><a href="https://www.dewa.gov.ae/en/consumer/sustainability/sustainability-and-conservation/cooling"><b>High AC electricity (DEWA) bills</b></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <img className="bordered-img w-100" src={getImageSrc('Experts-AC-Service-and-Maintenance')} alt="Sanyo Ac Repair" />

              </div>
            </div>
            <AcAppointmentCol></AcAppointmentCol>


          </div>
        </section>

        {/* AC Price Section */}
        <FAJACPrice></FAJACPrice>

        {/* Why is AC Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">Why is Sanyo AC Maintenance Service Important in Dubai?</h2>
            <p className="mb-2">To guarantee your Sanyo central air conditioner functions efficiently in Dubai's intense heat, regular AC maintenance is essential. At <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ</a>, we offer expert aircon services designed to enhance your system&rsquo;s performance and comfort year-round. Trust us to keep your air conditioner operating at its best.</p>
            <div className="row align-items-center">

              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('fujitsu-ac-service')} alt="Sanyo Ac Repair" />
              </div>

              <div className="col-md-6">
                <ul className="mb-0">
                  <li><strong>Extreme Weather: </strong>As summer approaches, we can expect temperatures to soar above 40&deg;C (104&deg;F), creating discomfort. It's essential to ensure that your Sanyo air conditioning systems are primed for optimal performance.</li>
                  <li><strong>Energy Efficiency: </strong>A well-maintained Sanyo air conditioner operates efficiently, resulting in significant energy savings and lower DEWA electricity costs.</li>
                  <li><strong>Longevity of Equipment: </strong>Keeping up with the Sanyo <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/" className="fw-bold text-decoration-underline">AC maintenance</a> is really important for getting the best performance and efficiency. It helps lower repair costs and can save money for both homes and businesses.</li>
                  <li><strong>Improved Air Quality: </strong>Routine Sanyo air conditioner cleaning service prevents dust and allergens from getting in, resulting in improved air quality.</li>
                  <li><strong>Enhanced Comfort: </strong>Regular air conditioner maintenance in Dubai is vital for optimal efficiency and a comfortable indoor environment.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Common Signs Your AC May Need Maintenanc */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Common AC Problems That May Require Maintenance
            </h2>
            <div className="row gx-lg-3 gy-lg-4">
              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Weak Airflow</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0"><a href="https://www.youtube.com/watch?v=qnByeIsc3lY">Reduced airflow</a> from a Sanyo air conditioner may indicate a clogged filter or faulty fan, which should be fixed for efficient cooling.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Warm Air</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your Sanyo AC is blowing warm air, it may be experiencing issues with the compressor, refrigerant levels, or ductwork.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Unusual sounds like grinding, squeaking, or banging from your Sanyo AC may indicate mechanical issues that require attention.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Foul Odors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Unpleasant odors coming from the vents may indicate mold or mildew in the system and should be addressed immediately.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Frequent Cycling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The failure to maintain desired temperatures may indicate problems such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">High Humidity Levels</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A Sanyo air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Leaking Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Water pooling around the Sanyo AC or dripping from the vents may indicate a blocked drain or frozen coils.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Increased Energy Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">High energy bills without increased usage may indicate inefficiencies in Sanyo air conditioning due to dirty filters or duct leaks.</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>
        {/* A Quick Guide to Understanding and Fixing Your AC Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR Sanyo AIR CONDITIONER SYSTEMS</h2>
            <p className='mb-2'>Effective air conditioning systems are essential for maintaining a comfortable and effective environment in commercial environments.</p>
            <div className="row">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/sxBhB1_gxYA?si=96yf5hxyAA3bct8w"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="col-xl-6">
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-1">
                  <li><strong>Sanyo AC Installation: </strong>The professional installation of various Sanyo air conditioning systems ensures optimal performance.</li>
                  <li><strong>Sanyo AC Inspection: </strong>We offer accurate fault diagnosis to pinpoint system issues, along with comprehensive quotes and eligibility assessments to address your concerns.</li>
                  <li><strong>Sanyo AC Repair Service: </strong>We offer fast repair services for Sanyo air conditioners, addressing leaks, electrical problems, and malfunctions. Contact us for further details or inquiries!</li>
                  <li><strong>Sanyo AC Annual Maintenance Contract: </strong>The contract specifies the annual maintenance terms for Sanyo air conditioners.</li>
                </ul>
                <p className="mb-0">
                  <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a>, including Annual Maintenance Contracts (AMC) and Planned Preventive Maintenance (PPM), is vital for optimal performance and durability.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* The Benefits Of Regular AC Service*/}
        <section className="section cs_py_30" style={{ backgroundColor: "#00334E", color: "white" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="cs_fs_30 text-light">Benefits of Regular Sanyo AC Service and Maintenance in Dubai</h2>

                <div className="row mt-4 gx-4 gy-4">
                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/cooling1')} alt="Cooling Efficiency" className="img-fluid rounded-circle border border-4 border-info" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">COOLING EFFICIENCY</h3>
                      <p className="small">We conduct a thorough evaluation of cooling efficiency using a temperature gun.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/disinfection')} alt="Disinfect Components" className="img-fluid rounded-circle border border-4 border-warning" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">DISINFECT COMPONENTS</h3>
                      <p className="small">All hardware components have been tested and disinfected, including filters and vents.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/fan')} alt="Fan Assessment" className="img-fluid rounded-circle border border-4 border-success" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">FAN ASSESSMENT</h3>
                      <p className="small">We make sure fan operates properly and there are no blockages in evaporator coil.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/thermo')} alt="Thermostat Check" className="img-fluid rounded-circle border border-4 border-primary" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">THERMOSTAT CHECK</h3>
                      <p className="small">We use a laser temperature gauge to verify that the thermostats are operating correctly.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/airflow')} alt="Airflow Balance" className="img-fluid rounded-circle border border-4 border-danger" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">AIRFLOW BALANCE</h3>
                      <p className="small">We make sure that each room receives the optimal airflow it needs.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={getImageSrc('icon/customer')} alt="Customer Feedback" className="img-fluid rounded-circle border border-4 border-secondary" />
                      </div>
                      <h3 className="text-uppercase mb-2 fs-6 text-white">CUSTOMER FEEDBACK</h3>
                      <p className="small">Our team provides vital feedback on your Sanyo AC's health and any needed repairs.</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-4">
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Why Choose FAJ Technical Services L.L.C? */}
        <ACWhyChooseUs />

        {/* We specialise  */}
        <section className="section cs_py_30 bg-light-gray ">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY AC REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 195 to 320 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month service warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h3>We specialise in Sanyo air conditioning services for the following:</h3>
            <div className="row">
              <div className="col-12">
                <h3><strong></strong></h3>
                <p className="mb-0"><strong>Sanyo Air Conditioner Installation Service in Dubai: </strong>A comprehensive solution for your cooling needs. We specialize in high-quality Sanyo AC installation services in Dubai and Sharjah. Our consultation process helps you choose the right model based on your space and budget. Our experts assess factors like room size and AC insulation to recommend the best unit for optimal performance.</p>
                <p className="mb-0"><strong>Our installation services include:</strong></p>
                <p className="mb-0"><strong>Climate Check: </strong>Understanding your unique requirements based on the local climate and your building's features.</p>
                <p className="mb-0"><strong>Expert AC Installation: </strong>Our skilled AC technicians ensure that the AC installation is performed to the highest standards, adhering to all safety protocols.</p>
                <p className="mb-0"><strong>Post-Installation Support: </strong>We provide advice on operating your new air conditioner, including tips on energy efficiency and maintenance.</p>
                <p className="mb-0"><strong>Warranty and Service Packages:</strong> To ensure your peace of mind, we offer warranty options and additional service packages for maintenance and repair in Dubai and Sharjah.</p>
                <p className="mb-0"><strong>Sanyo AC AMC Services in Dubai:</strong> We offer comprehensive air conditioning AMC (Annual Maintenance Contract) and PPM (Planned Preventive Maintenance) services, along with repair support, throughout the year for both contract and non-contract customers. While we are dedicated to serving all our clients, please note that those with service contracts may receive priority assistance.</p>
                <p className="mb-0"><strong>Sanyo Air Conditioner Repair in Dubai:</strong> Stay cool during the hot Dubai summer with our expert Sanyo inverter AC repair in Dubai and Sharjah. Our team provides efficient and reliable cooling solutions tailored to your needs. We guide you through the selection and installation process for optimal comfort. Contact us today to schedule your installation and beat the heat!</p>
                <p className="mb-0"><strong>Sanyo AC Cleaning Service in Dubai:</strong> AC Deep cleaning your air conditioner brings several key benefits:</p>
                <p className="mb-0"><strong>Improved Air Quality:</strong> It removes dust, allergens, and bacteria, leading to healthier air, especially for those with allergies.</p>
                <p className="mb-0"><strong>Reduced Energy Consumption:</strong> A clean unit operates more efficiently, lowering your electricity bills.</p>
                <p className="mb-0"><strong>Extended Lifespan:</strong> Regular AC maintenance prevents wear and tear, prolonging the life of your AC and minimising costly repairs.</p>
                <p className="mb-0"><strong>Odour Elimination: </strong>It eliminates mold and mildew, resulting in fresher indoor air.</p>
                <p className="mb-0"><strong>Reduced Mold Growth:</strong> Regular cleaning prevents the growth of mold and bacteria, which is crucial in humid climates.</p>
                <p className=""><strong>Better Breathing:</strong> Cleaner air improves overall well-being. In short, deep cleaning your AC is an investment in your health, comfort, and energy efficiency.</p>

                <p>
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-barsha/">Al Barsha</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali/">Jebel Ali</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jafza/">JAFZA</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali-free-zone/">Jebel Ali Free Zone</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/palm-jumeirah/">Palm Jumeirah</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-hills-estate/">Dubai Hills Estate</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/damac-hills/">Damac Hills</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-barari/">Al Barari</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-barsha-south/">Al Barsha South</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-safa/">Al Safa</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/arabian-ranches/">Arabian Ranches</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-silicon-oasis/">Dubai Silicon Oasis</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dip/">Dubai Investments Park</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dip/">DIP</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-production-city/">Dubai Production City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/impz/">IMPZ</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-sport-city/">Dubai Sports City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-studio-city/">Dubai Studio City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jbr/">JBR</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-beach-residence/">Jumeirah Beach Residence</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jlt/">JLT</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-lake-towers/">Jumeirah Lake Towers</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvc/">JVC</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvc/">Jumeirah Village Circle</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvt/">JVT</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvt/">Jumeirah Village Triangle</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali-village/">Jebel Ali Village</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah/">Jumeirah</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-golf-estates/">Jumeirah Golf Estates</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-meadows/">Meadows</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/motor-city/">Motor City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/town-square/">Town Square</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/emirates-hills/">Emirates Hills</a> &nbsp;|&nbsp;
                  Townhouses &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/umm-suqeim/">Umm Suqeim</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/ras-al-khor-industrial-area/">Ras Al Khor</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/deira/">Deira</a>
                </p>
              </div>
            </div>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton />
                <CallNowButton></CallNowButton>
              </div>
            </div>

          </div>
        </section>

        {/* Practical Tips to Improve Energy Efficiency */}
        <Practicaltip></Practicaltip>

        <AcProperties></AcProperties>

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

        <div className="section cs_py_30">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>

        </div>


      </div>



    </>
  );
};

export default SanyoAcRepair;