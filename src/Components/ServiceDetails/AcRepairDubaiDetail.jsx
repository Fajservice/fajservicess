import { useEffect, useRef, useState, useCallback } from "react";
import data from '../../Data/AcData/AcFaqs/AcRepairFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../Contact/Serviceappointemnt';
import CallNowButton from '../Buttons/CallNowButton';
import GetQuoteButton from "../Buttons/GetQuoteButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import BenefitAcMaintenance from "../BenefitAcMaintenance/BenefitAcMaintenance";
import ACWhyChooseUs from "../WhyChooseUS/ACWhyChooseUs";
import MaintenanceContract from "../MaintenanceContract/MaintenanceContract";
import testimonial_data from '../../Data/AcData/AcTestimonial/AcRepairTestimonials.json';
import loadBackgroudImages from "../Common/loadBackgroudImages";
import BookingFormModal from '../BookingFormModal';
import { RxArrowTopRight } from 'react-icons/rx';
import HeaderForm from "../Headeform/HeaderForm";
import FAJACPrice from "../Miscellaneous/FAJACPrice";
import Practicaltip from "../Common/Practicaltip";
import AcProperties from "../Common/AcProperties";
import Blog2 from "../Blog/Blog2";
import Testimonial1 from "../Testimonial/Testimonial1";


const AcRepairDubaiDetails = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Best AC Repair Dubai | HVAC Maintenance Near Me | Since 2010");
  const metadescription = String(description || "Keep your home / office cool with FAJ expert AC repair in Dubai. We offer fast, reliable air conditioner maintenance near you. Call us 04 3300002");
  const metaAuthor = String(Author || "Faj Technical Services");
  const metaKeyword = String(Keyword || "Ac Repair, Ac Repair In Dubai, Ac Repair Service, Ac Repair Near Me, Ac Repair Dubai, Air Conditioner Repair, Air Conditioner Repair In Dubai, Air Conditioner Repair Service, Air Conditioner Repair Near Me, Air Conditioner Repair Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/ac-repair-dubai/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://www.fajservices.ae/img/What-is-covered-in-an-AC-Maintenance-Contract.avif");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = "img/testimonialbg.jpg"
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <meta property="og:url" content={metaURL} />
          <meta property="og:image" content={metaImage} />


          {/* Twitter Card */}
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
            <h1 className="cs_fs_30">AC Repair Dubai - AC Maintenance and Service Available Near You</h1>
            <p>Good-bye to sticky summer days, stuffy nights, and allergens. Welcome to year-round comfort, refreshing clean air, and improved sleep. Cool, right?<br />
              <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"><b>F A J Technical Services L.L.C</b></a> has been in operation since 2010. Our dedicated facilities team has extensive experience in <a href="https://www.youtube.com/watch?v=pkO_jobGdBo"><b>AC servicing</b></a>, maintaining, repairing, and installing various residential and commercial air conditioning units in Dubai and Sharjah.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
                <button onClick={openModal} className="cs_btn cs_style_1 d-md-none" aria-label="Book Now">
                  <span>Book Now</span>
                  <RxArrowTopRight />
                </button>
                <BookingFormModal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>
        </section>

        {/* Select Air Conditioner Repair & Service*/}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }} >Select Air Conditioner Repair & Service</h2>
                <p className="mb-1">We understand the urgency of responding promptly when an air conditioner failure impacts your critical cooling system, especially when people depend on it. Our expert and experienced AC technicians are dedicated to delivering the best AC repair and service in Dubai.</p>
                <p className="mb-1">Choose FAJ for professional AC repair and maintenance for both residential and commercial units in your area.</p>
                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Signs You Need An AC Service</h2>
                <p className="mb-2">If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.</p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Higher electricity bills </li>
                      <li>Air is not blowing cold</li>
                      <li>Drips from your air conditioner</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Loss of AC performance</li>
                      <li>Poor AC airflow, making noises</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/ac-repair-2.avif`} alt="AC Repair In Dubai" loading="lazy" />

              </div>
            </div>

            <div className="appointment-col border-small-top pt-3">
              <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.<b /> <b />For technical inspection/callout fees, AC service near you, repair, or maintenance, please click below. To book an appointment, you can call or reach us on WhatsApp at +971 50 746 4712.</p>
              <div id="get-quote" className=" mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3">
                  <WhatsappIconButton />
                  <CallNowButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAJACPrice />

        {/*FAJ: Creating the Perfect Temperature All Year Round */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">5 Reasons Your AC Might Need Repairs This Summer </h2>
            <p>Air conditioning issues are quite common during the summer months. If you&apos;re experiencing AC issues this season, it&apos;s important to understand what might be happening with your system. Identifying the problem early can prevent it from worsening and ensure your place remains comfortable during the heat. </p>



            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/ac-repairing.avif`} alt="AC Repairing" loading="lazy" />
              </div>
              <div className="col-md-6">

                <ul className="mb-0">
                  <li> <strong>Poor Airflow:</strong> Weak airflow can result from a clogged filter or issues with the ducts.</li>
                  <li> <strong>Strange Noises:</strong> Sounds like banging or hissing could indicate damaged parts.</li>
                  <li> <strong>Frequent Cycling:</strong> Constantly turning on and off might suggest a faulty thermostat or oversized system.</li>
                  <li> <strong>Insufficient Cooling:</strong> May be due to a refrigerant leak, blocked filter, or compressor issues.</li>
                  <li> <strong>Increased Energy Bills:</strong> A spike in bills often means your AC is working inefficiently.</li>
                </ul>
                <p>
                  Stay alert for these signs to maintain your AC. If you notice any issues, consult a professional technician for help.

                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Most Common Problems of AC Repair */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30 text-center">Most Common Problems of AC Repair</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Air Filter Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Many Dubai homeowners forget to change air filters, causing clogs and restricted airflow that can damage the entire HVAC system.
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Refrigerant Refill</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This usually happens after a leak. Your compressor and the rest of your AC system can&apos;t run without refrigerant.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Capacitor Replacement</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The capacitors in your AC system can fail suddenly, which could cause other components to fail afterward.

                    </p>
                  </div>
                </div>
              </div>



              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Compressor Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Years of wear and tear (or a few months of neglect) can cause your AC compressor to break down suddenly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Condensation Drain Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The condensation drain hose can often become clogged, typically due to a buildup of debris, mold, mildew, or algae.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Thermostat Replacement</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      When this unit fails, it’s nearly impossible to maintain the comfort levels you desire in your home, affecting your daily routine.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Blower Fan Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A faulty blower fan results in little to no airflow, making your AC system inefficient and unable to cool properly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">PCB Board Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A malfunctioning PCB disrupts AC communication, causing issues. Timely repair or replacement ensures efficient performance.
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

        {/* Here are 10 easy ways to troubleshoot common AC problems*/}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">Here are 10 easy ways to troubleshoot common AC problems</h2>
            <div className="row align-items-center">
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
                <div className="row ">
                  <div className="col">

                    <ol type="1">
                      <li> The AC fan isn’t working </li>
                      <li> The AC control panel is faulty </li>
                      <li> The air conditioner never turns off </li>
                      <li> The air conditioner won’t switch on </li>
                      <li> Your air conditioner is blowing hot air </li>
                      <li> The AC unit is making strange noises </li>
                      <li> There is no AC air flow from the registers </li>
                      <li> The air conditioner sets off the trip switch </li>
                      <li> The air conditioner isn’t cooling even though it’s running </li>
                      <li>The air conditioner is leaking, or it’s not reducing humidity </li>
                    </ol>
                  </div>


                  <p className="mb-0">
                    If none of these steps resolve the issue, it may be time to call FAJ professional AC technician for a thorough diagnosis and repair.

                  </p>

                </div>

              </div>
            </div>
          </div>
        </section>

        <BenefitAcMaintenance />

        <ACWhyChooseUs />

        {/* We specialise in air conditioning Repair services for the following brands */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY AC REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 195 to 320 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month service warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h3>We specialise in air conditioning repair & maintenance for all types</h3>
            <div className="row">
              <div className="col-12">
                <p>At F A J Technical Services L.L.C, we provide expert AC repair and maintenance for all types of cooling systems, from compact units to large-scale installations. Our skilled team ensures fast, reliable service to keep your air conditioning performing at its best.</p>
                <ul className="mb-0">
                  <li><strong>Central Air Conditioning System:</strong> Central AC systems are designed to cool entire buildings, making them essential for villas, offices, and commercial complexes. They operate through ductwork to deliver even temperature control. FAJ offers comprehensive AC repair service in Dubai for central systems, including duct cleaning, airflow balancing, and advanced diagnostics. Our technicians ensure smooth operation and consistent comfort. This makes us a trusted choice for large-scale AC maintenance.</li>
                  <li><strong>Cassette AC Repair Dubai:</strong> Cassette ACs are mounted on the ceiling, blending with interiors while delivering uniform air distribution. They&rsquo;re commonly found in shops, restaurants, and open-plan offices. Our Air Conditioner repair in Dubai for cassette units covers water leakage fixes, poor airflow correction, and motor replacements. FAJ&rsquo;s skilled team ensures minimal downtime and maximum efficiency. With our help, your cassette AC will operate like new.</li>
                  <li><strong>Ducted Air Conditioning System:</strong> Ducted systems are perfect for multi-room cooling, using concealed ducts for a neat and efficient setup. They are popular in luxury homes and premium offices. FAJ offers specialised AC repair services for ducted systems, handling everything from motor replacement to duct sealing. We focus on improving airflow and energy efficiency. With us, your ducted AC remains reliable year after year.</li>
                  <li><strong>VRF / VRV Air Conditioning System:</strong> VRF / VRV systems offer advanced, energy-efficient climate control for large buildings. They can adjust cooling capacity based on demand, making them cost-effective. FAJ&rsquo;s AC repair in Dubai covers control system errors, sensor faults, and refrigerant management for VRF/VRV setups. Our technicians use advanced tools to keep your system optimised. This ensures steady comfort with minimal disruption.</li>
                  <li><strong>Packaged Air Conditioner Repairing Service:</strong> Packaged AC units combine all components into one housing, making them ideal for warehouses, factories, and event halls. They&rsquo;re designed for heavy-duty cooling performance. We provide expert AC repair services for packaged units, tackling compressor repairs, coil cleaning, and performance testing. FAJ ensures durability and consistent cooling. With our service, your packaged AC runs at its best.</li>
                  <li><strong>Ductless Air Conditioner Repair Near Me:</strong> Ductless AC systems are quick to install and perfect for areas without ductwork. They deliver targeted cooling through wall-mounted units. FAJ&rsquo;s Air Conditioner repair in Dubai includes leak repair, electronic control replacement, and routine maintenance for ductless systems. We focus on delivering smooth and efficient operations. You can trust us for dependable comfort solutions.</li>
                  <li><strong>Rooftop AC Repair in Dubai:</strong> Rooftop AC units save indoor space and deliver strong cooling for commercial spaces. They house all components in one weather-resistant unit. FAJ offers professional Air Conditioner repair in Dubai for rooftop systems, solving fan issues, electrical faults, and refrigerant leaks. Our goal is to maximise cooling output while extending unit life. Businesses count on us for reliable performance.</li>
                  <li><strong>Window Air Conditioner Repair in Dubai:</strong> Perfect for cooling small to medium spaces, window AC units are often used in apartments, offices, and single rooms. They combine all components into one convenient system, making them simple to install. FAJ provides expert Air Conditioner repair in Dubai for window units, addressing compressor issues, thermostat malfunctions, and cooling inefficiencies. We work quickly to get your AC back to full performance. With our prompt service, you won&rsquo;t have to deal with long periods of discomfort.</li>
                  <li><strong>Fan Coil Unit (FCU) System:</strong> Fan coil units are vital for delivering room-by-room cooling and maintaining indoor comfort in commercial and residential spaces. They use chilled water or refrigerant to condition air efficiently. FAJ&rsquo;s professional AC repair in Dubai services cover FCU motor repairs, coil cleaning, valve replacements, and performance tuning. We ensure your FCUs operate quietly and effectively, providing consistent comfort with minimal downtime. With our expertise, your FCU system remains in peak working condition.</li>
                  <li><strong>Split AC Repair Dubai:</strong> Known for their quiet operation and sleek look, split ACs are a top choice for homes and workplaces. They consist of indoor and outdoor units, delivering efficient and targeted cooling. Our AC repair in Dubai team handles refrigerant refills, leak detection, and faulty component replacement for split systems. We focus on restoring maximum cooling while reducing energy consumption. With FAJ, you can rely on performance that lasts.</li>
                  <li><strong>Portable Air Conditioner Repair in Dubai:</strong> Portable ACs provide movable cooling for homes, offices, or temporary setups like events. They are easy to set up and relocate, making them a flexible option. When they fail, our AC repairing services address issues such as refrigerant leaks, fan failures, and electrical faults. FAJ technicians work efficiently to restore cooling capacity. We make sure your portable AC delivers the performance you expect.</li>
                </ul>
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

        <Practicaltip></Practicaltip>

        <AcProperties></AcProperties>

        {/* Maintenance Contract */}
        <MaintenanceContract />

        {/* testimobial section */}
         <Testimonial1
                subtitle="What Our Clients Say"
                title="Customer <span>Reviews</span>"
                bgImg="/img/home-testimonial-bg.jpg"
                testimonialData={testimonial_data}
                sectionId="home-testimonials"
              />

          <Blog2 />
        
        {/* FAQ&apos;s */}
        <section className="section cs_py_30  bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye text-light"><FaEye /></i>
                      <i className="bi bi-eye-slash text-light"><FaEyeSlash /></i>
                    </span>
                  </div>
                  <div className="cs_accordian_body" ref={accordionContentRef}>
                    {/* <p className="mb-0">{item.desc.replace(/\n/g, '<br>')}</p> */}
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
      </div>

    </>
  );
};

export default AcRepairDubaiDetails;