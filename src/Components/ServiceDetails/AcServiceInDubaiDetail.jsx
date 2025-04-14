import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/acfaq.json';
import { HelmetProvider } from "react-helmet-async";
import FAJACPrice from '../Miscellaneous/FAJACPrice';
import Serviceappointemnt from '../Contact/Serviceappointemnt';

const AcServiceInDubai = () => {

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

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


  return (
    <>
      <HelmetProvider>
        <title>FAJ / AC Repair In Dubai - Freezer Service Appliances Fix</title>
        <meta name="description" content="FAJ Established in 2010, / We offer professional AC Repair, Freezer, Refrigerator, Fridge, Washing Machine Maintenance Service Company Dubai"></meta>
      </HelmetProvider>

      <div className="cs_service_details">
        <section className="section cs_py_48">
          <div className="container">
            {/* <img className="bordered-img" src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance.jpeg`} alt="Service Banner" /> */}
            <h2 className="cs_fs_30">The FAJ experts can help you make your home or place of business more comfortable</h2>
            <p>FAJ Technical Services LLC is your premier choice for quality AC Service In Dubai. With 14 years of experience in AC repairing, maintenance, and servicing, we are the most trusted air conditioning service company in Dubai, UAE.<br />FAJ is providing AC repair and maintenance services to all areas of Dubai. Our AC technicians are skilled and specialize in repairing all AC types, brands, and models. Experience reliable AC repair and maintenance to keep your home or business cool and comfortable.</p>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center">
                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#0d6efd" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center border border-outline" href="tel:+971507464712">Call Now</a>
              </div>

            </div>
            {/*  */}
          </div>
        </section>
{/* 
        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6 border-end">
                <img className="bordered-img w-100  " src={`${import.meta.env.BASE_URL}/img/reem-ac-service.jpg`} alt="Post Image" />
                <h3 className="cs_fs_25 mb-1 mt-3">Experts AC Service and Repair</h3>
                <p>When considering AC service in Dubai, it is vital to hire a qualified and reliable AC technician who can effectively address your needs at home or in your business place.</p>
                <p>FAJ Experts in comprehensive air conditioner (AC) service, and maintenance, ensuring that you receive the highest quality care for your cooling systems.</p>
              </div>

              <div className="col-md-6">
                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}/img/indoor-ac-servicing.jpg`} alt="Post Image" />
                <h3 className="cs_fs_25 mb-1 mt-3">Signs You Need An AC Service</h3>
                <p>If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.</p>
                <ul>
                  <li>Higher electricity bills / Loss of AC performance</li>
                  <li>Air is not blowing cold / Poor AC airflow, making noises</li>
                  <li>Drips from your air conditioner</li>
                </ul>
              </div>

            </div>

            <div className="appointment-col">
              <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.<b /> <b />For technical inspection/callout fees, AC service near you, repair, or maintenance, please click here.To book an appointment, you can call +971 50 7464 712 or reach us on WhatsApp at +971 50 746 4712.</p>
              <div id="get-quote" className=" mt-3">
                <div className="container d-flex justify-content-center align-items-center">
                  <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#0d6efd" }}>Get A Free Quote</a>
                  <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center border border-outline" href="tel:+971507464712">Call Now</a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

<section className="section cs_py_48 bg-light-gray">
  <div className="container">
    <div className="row g-5 border">
      <div className="col-md-6 border-end-lg">
        <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}/img/reem-ac-service.jpg`} alt="Post Image" />
        <h3 className="cs_fs_25 mb-1 mt-3">Experts AC Service and Repair</h3>
        <p>When considering AC service in Dubai, it is vital to hire a qualified and reliable AC technician who can effectively address your needs at home or in your business place.</p>
        <p>FAJ Experts in comprehensive air conditioner (AC) service, and maintenance, ensuring that you receive the highest quality care for your cooling systems.</p>
      </div>

      <div className="col-md-6">
        <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}/img/indoor-ac-servicing.jpg`} alt="Post Image" />
        <h3 className="cs_fs_25 mb-1 mt-3">Signs You Need An AC Service</h3>
        <p>If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.</p>
        <ul>
          <li>Higher electricity bills / Loss of AC performance</li>
          <li>Air is not blowing cold / Poor AC airflow, making noises</li>
          <li>Drips from your air conditioner</li>
        </ul>
      </div>
    </div>

    <div className="appointment-col">
      <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.<b /> <b />For technical inspection/callout fees, AC service near you, repair, or maintenance, please click here.To book an appointment, you can call +971 50 7464 712 or reach us on WhatsApp at +971 50 746 4712.</p>
      <div id="get-quote" className=" mt-3">
        <div className="container d-flex justify-content-center align-items-center">
          <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#0d6efd" }}>Get A Free Quote</a>
          <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center border border-outline" href="tel:+971507464712">Call Now</a>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="section cs_py_48">
          <div className="container">
            <FAJACPrice></FAJACPrice>
          </div>
        </section>

        <section className="section cs_py_48 bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">Make Your AC Cool Faster – Beat the Summer Heat!</h3>
            <p>Ready to Beat the Heat? Look no further! Find the best AC Repair in Dubai and keep yourself cool all summer long. Our expert AC technicians ensure fast, reliable services to get your AC up and running.  Our service guarantees a comfortable home or office environment, even during the scorching heat of Dubai. Plus, with our affordable rates and transparent pricing, you can trust that you're getting the best value for your money. Don't suffer through another day of sweltering temperatures. Click below to schedule your AC repair and maintenance now and experience instant relief! Stay cool, Dubai!</p>

          </div>
          <div id="get-quote" className="mt-3">
            <div className="container d-flex justify-content-center align-items-center">

              <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Contact Us</a>
            </div>
          </div>
        </section>

        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
            <h3 className="cs_fs_30">A Quick Tour to Your AC Problems and Fixing</h3>
            <div className="row">
              <div className="col-xl-6">
                <iframe className="bordered-img" width="100%" height="350" src="https://www.youtube.com/embed/sxBhB1_gxYA?si=96yf5hxyAA3bct8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
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
                        <span>Condenser coil and evaporator unit cleaning</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Regular maintenance</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Recharging refrigerant levels</span>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <ul className="cs_list cs_style_1 cs_fs_16 cs_mp_0">
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Checking and tightening electrical connections</span>
                      </li>
                      <li>
                        <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                          <i className="bi bi-check"></i></span>
                        <span>Fixing leaks refrigerant, water, or duct leaks</span>
                      </li>
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

                    </ul>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="section d-none">
          <div className="container">
            <div id="get-quote" className="my-3">
              <div className="container d-flex justify-content-center align-items-center">
                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
              </div>
            </div>
          </div>
        </section>

        {/* BENIFIT OLD */}
        {/* <section className="section cs_py_48">
          <div className="container">
            <h3 className="text-center">Benefits of Regular AC Servicing</h3>
            <div className="row d-flex justify-content-between text-center flex-wrap">
              <div className="col px-2">
                <img className="cs_mb_10" src={`${import.meta.env.BASE_URL}/img/Improved AC Cooling.svg`} alt="Improved AC Cooling" />
                <h3 className="acsvs-int-new-h4 cs_fs_20 mb-0">Improved Cooling</h3>
                <p className="acsvs-int-new-p">Regular AC maintenance and servicing improve the cooling capacity of your AC.</p>
              </div>
              <div className="col px-2">
                <img className="cs_mb_10" src={`${import.meta.env.BASE_URL}/img/Energy Efficient.svg`} alt="Energy Efficient" />

                <h3 className="acsvs-int-new-h4 cs_fs_20 mb-0">Energy Efficiency</h3>
                <p className="acsvs-int-new-p">Dirty AC units have to work much harder to cool your home, leading to higher energy consumption and bigger bills</p>
              </div>
              <div className="col px-2">
                <img className="cs_mb_10" src={`${import.meta.env.BASE_URL}/img/Extended Lifespan.svg`} alt="Extended Lifespan" />
                <h3 className="acsvs-int-new-h4 cs_fs_20 mb-0">Extended Lifespan</h3>
                <p className="acsvs-int-new-p">Regular AC Service every 4 months prolong the life of your AC unit by 40%</p>
              </div>
              <div className="col px-2">
                <img className="cs_mb_10" src={`${import.meta.env.BASE_URL}/img/No Costly Repairs.svg`} alt="No Costly Repairs" />

                <h3 className="acsvs-int-new-h4 cs_fs_20 mb-0">No Costly Repairs</h3>
                <p className="acsvs-int-new-p">Regular AC maintenance helps catching the potential problems, saving your time and money.</p>
              </div>
              <div className="col px-2">
                <img className="cs_mb_10" src={`${import.meta.env.BASE_URL}/img/Reliability.svg`} alt="Reliability" />

                <h3 className="acsvs-int-new-h4 cs_fs_20 mb-0">Reliability</h3>
                <p className="acsvs-int-new-p">Identify potential AC problems before they can negatively impact the safe and effective running of your AC unit.</p>
              </div>
            </div>
          </div>
        </section> */}
        {/* The Benefits Of Regular AC Maintenance Dubai Service */}
        <section className="section cs_py_40" style={{ backgroundColor: "#00334E", color: "white" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h3 className="cs_fs_30 text-light mb-3 mt-4">The Benefits Of Regular AC Maintenance Dubai Service</h3>

                <div className="row mt-4 gx-4 gy-4">
                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="rounded-circle bg-transparent border border-4 border-info d-flex align-items-center justify-content-center mb-3" style={{ width: "55px", height: "55px" }}>
                        <i className="bi bi-check text-white" style={{ fontSize: "24px" }}></i>
                      </div>
                      <h5 className="text-uppercase mb-2 fs-6 text-white">COOLING EFFICIENCY</h5>
                      <p className="small">We carry out a complete assessment of the cooling efficiency using a temperature gun.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="rounded-circle bg-transparent border border-4 border-warning d-flex align-items-center justify-content-center mb-3" style={{ width: "55px", height: "55px" }}>
                        <i className="bi bi-check text-white" style={{ fontSize: "24px" }}></i>
                      </div>
                      <h5 className="text-uppercase mb-2 fs-6 text-white">DISINFECT COMPONENTS</h5>
                      <p className="small">All hardware components are tested and disinfected, including filters and vents.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="rounded-circle bg-transparent border border-4 border-success d-flex align-items-center justify-content-center mb-3" style={{ width: "55px", height: "55px" }}>
                        <i className="bi bi-check text-white" style={{ fontSize: "24px" }}></i>
                      </div>
                      <h5 className="text-uppercase mb-2 fs-6 text-white">FAN ASSESSMENT</h5>
                      <p className="small">We ensure the fan works correctly with no blockages in the evaporator coil.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="rounded-circle bg-transparent border border-4 border-primary d-flex align-items-center justify-content-center mb-3" style={{ width: "55px", height: "55px" }}>
                        <i className="bi bi-check text-white" style={{ fontSize: "24px" }}></i>
                      </div>
                      <h5 className="text-uppercase mb-2 fs-6 text-white">THERMOSTAT CHECK</h5>
                      <p className="small">We use a laser temperature gauge to ensure thermostats operate correctly.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="rounded-circle bg-transparent border border-4 border-danger d-flex align-items-center justify-content-center mb-3" style={{ width: "55px", height: "55px" }}>
                        <i className="bi bi-check text-white" style={{ fontSize: "24px" }}></i>
                      </div>
                      <h5 className="text-uppercase mb-2 fs-6 text-white">AIRFLOW BALANCE</h5>
                      <p className="small">We ensure you get optimal air flow around each room as needed.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="rounded-circle bg-transparent border border-4 border-secondary d-flex align-items-center justify-content-center mb-3" style={{ width: "55px", height: "55px" }}>
                        <i className="bi bi-check text-white" style={{ fontSize: "24px" }}></i>
                      </div>
                      <h5 className="text-uppercase mb-2 fs-6 text-white">CUSTOMER FEEDBACK</h5>
                      <p className="small">Our team provides vital feedback on your AC's health and any needed repairs.</p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 mb-4">Contact us now to get a free AC service quote.</p>

                <div className="text-center mb-4">
                  <a href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" className="btn btn-primary btn-md text-uppercase px-4">GET A FREE QUOTE</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* AC Cleaning Services */}
        <section className="section cs_py_48 text-black">
          <div className="container">
            <h3 class="cs_fs_30 text-black">AC Cleaning Services</h3>
            <p>In Dubai, maintaining a comfortable and healthy indoor environment is essential, and that’s where AC cleaning services come into play. When it comes to split AC cleaning and AC deep cleaning services, residents rely on the expertise of professionals. These specialized services ensure your air conditioning units function efficiently and keep the air in your space clean and safe. Choose AC cleaning services in Dubai for a breath of fresh, purified air in your home or office. Prepare your air conditioning system for the hot summer months with our efficient AC deep cleaning services. Trust us for AC filter cleaning Dubai and Corporate AC cleaning Dubai as we excel in providing services in both commercial and residential areas.</p>
          </div>
        </section>

        {/* <section className="section cs_py_48 bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">Choose FAJ for Speed, Efficiency and Peace of Mind</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <ul className="acsvs-exp-spl-para tick-ul">
                  <li><b>We get the job done on time</b> thanks to our larger team and dedicated parts warehouse</li>
                  <li><b>All our AC technicians are fully qualified</b> and extensively trained by us to address all types of AC issues.</li>
                  <li><b>We help prevent future breakdowns</b> by only using locally produced, highest quality refrigerant gas.</li>
                  <li><b>From routine maintenance to complex repairs</b> we offers all type of AC repair and maintenance services.</li>
                  <li><b>We only use genuine parts</b> to give you peace of mind.</li>
                  <li><b>We give service and parts warranty</b> to make sure you are relax.</li>
                  <li><b>We look after the environment</b> by always recycling our gas.</li>
                </ul>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <img className="bordered-img" src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance-in-Dubai.jpeg`} alt="Post Image" />
              </div>
            </div>
          </div>
        </section> */}

        {/* Searching section */}

        <section className="section cs_py_48">
          <div className="container">
            <h3 className="text-center">Searching For HVAC Companies Near Me</h3>
            <p>We stand out from other “HVAC companies near me” with our commitment to customer satisfaction and top-notch service. Our reliable HVAC service ensures that every customer receives personalized attention and residential HVAC service tailored to their specific demands. Our expert HVAC service technician wants to build long-lasting relationships built on mutual respect and trust, therefore we place a high priority on being honest and upfront in all of our interactions. FAJ is a partner that truly cares about your comfort and well-being, so you can rely on them for more than just simple industrial HVAC services and HVAC duct repair.</p>
            <br />
            <h3 className="text-center">Trust Us For All Of Your AC Services In Dubai Needs</h3>
            <p>The Healthy Home provides premium and professional air conditioning services in the UAE. Our AC service professionals can resolve your AC problems. Full AC cleaning, AC chemical cleaning, AC coil cleaning, AC repair services, and regular AC maintenance are all part of AC servicing.

              When you live in a hot and humid climate like the UAE, you may notice that you require regular AC services. This is primarily because you run your air conditioner almost constantly throughout the year. As a result, you will need to have your air conditioner serviced more frequently than people who live in colder climates.

              Because of the dustier environment, you will need regular AC filter cleaning, especially if you suffer from asthma or allergies. Because of the high usage, AC repair and maintenance are performed regularly. Our skilled AC technicians provide excellent repair services. We also provide annual maintenance contracts (AMC) to make sure that your air conditioner is always in good working order.</p>

          </div>
        </section>

        {/* We specialise in air conditioning services for the following brands */}
        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
            <h3>We specialise in air conditioning services for the following brands</h3>
            <div className="row">
              <div className="col-12">
                <p>
                  <Link to="/lg-ac-repair-in-dubai/"><b>LG Air Conditioner Service</b></Link>: FAJ offers reliable LG AC repair, and services in Dubai. With professionals, who are experts in split, vrf and central air conditioning units.
                </p>
                <p>
                  <Link to="/samsung-ac-repair-in-dubai/"><b>Samsung Air Conditioner Service</b></Link>: Based in Dubai, FAJ is your go-to destination for Samsung AC Services in Dubai. Specializing in Samsung air conditioner systems, we offer comprehensive services ranging from maintenance to repair.
                </p>
                <p>
                  <Link to="/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/"><b>York AC Service and Repair</b></Link>: The York AC service ensures you don’t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritized.
                </p>
                <p>
                  <Link to="/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/"><b>Daikin Air Conditioner Service</b></Link>: Trust our skilled team to efficiently resolve all issues with your Daikin air conditioner and restore its functionality.
                </p>
                <p>
                  <Link to="/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/"><b>Trane HVAC Service</b></Link>: With extensive knowledge of Trane air conditioning systems, we provide effective maintenance to keep your unit running smoothly.
                </p>
                <p>
                  <Link to="/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/"><b>Panasonic AC Service and Repair</b></Link>: No matter the issue with your Panasonic air conditioner, our experts can accurately diagnose and fix it.
                </p>
                <p>
                  <Link to="/gree-ac-repair-in-dubai/"><b>Gree AC Service and Maintenance</b></Link>: Has your AC stopped working? No need to endure unpleasant temperatures and stuffy air or suffer losses due to damaged equipment – FAJ gets your Gree air conditioning back up and running in no time!
                </p>
                <p>
                  <Link to="/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/"><b>O General AC Service and Repair</b></Link>: O General AC service in Dubai requires expert help because only specialized ones know how to address aircon issues. We are a hassle-free air conditioning service provider.
                </p>
                <p>
                  <Link to="/mitsubishi-ac-repair-in-dubai/"><b>Mitsubishi Air Conditioner Service and Repair</b></Link>: Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai!
                </p>

                <p>
                  <Link to="/sanyo-ac-repair-in-dubai-sanyo-ac-maintenance-in-dubai-sanyo-ac-fix-in-dubai-sanyo-ac-service-in-dubai-sanyo-air-condition-repair-in-dubai-sanyo-air-condition-maintenance-in-dubai-sanyo-air-condition/">Sanyo AC Service Dubai</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/rheem-ac-maintenance-in-dubai/">Rheem AC Service</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/">SKM AC Service Dubai</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/">Daewoo AC Service Dubai</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="#">Carrier AC Service</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/midea-ac-installation-maintenance-repair-fix-service-in-dubai/">Midea Air Conditioner Service Near Me</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/">Lennox Air Conditioning Service</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/goodman-ac-repair-in-dubai-goodman-ac-maintenance-in-dubai-goodman-ac-fix-in-dubai-goodman-ac-service-in-dubai-goodman-air-condition-repair-in-dubai-goodman-air-condition-maintenance-in-dubai-goodman/">Goodman AC Service Dubai</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/">Coleman AC Services</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/westpoint-ac-repair-in-dubai-westpoint-ac-maintenance-in-dubai-westpoint-ac-fix-in-dubai-westpoint-ac-service-in-dubai-west-point-air-condition-repair-in-dubai-west-point-air-condition-maintenance-in/">Westpoint Service</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/aftron-ac-repair-maintenance-service-in-dubai-2/">Aftron AC Service Near Me</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/crafft-ac-repair-in-dubai-crafft-ac-maintenance-in-dubai-crafft-ac-fix-in-dubai-crafft-ac-service-in-dubai-crafft-air-condition-repair-in-dubai-crafft-air-condition-maintenance-in-dubai-crafft-air-con/">Crafft AC Service</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/">Bryant AC Service</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/ruud-ac-repair-in-dubai-ruud-ac-maintenance-in-dubai-ruud-ac-fix-in-dubai-ruud-ac-service-in-dubai-ruud-air-condition-repair-in-dubai-ruud-air-condition-maintenance-in-dubai-ruud-air-condition-mainten/">Ruud Air Conditioner Service</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/">McQuay Air Conditioning Service</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/">Blue Star</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/supra-ac-repair-in-dubai-supra-ac-maintenance-in-dubai-supra-ac-fix-in-dubai-supra-ac-service-in-dubai-supra-air-condition-repair-in-dubai-supra-air-condition-maintenance-in-dubai-supra-air-condition/">Supra AC Service</Link>
                </p>
              </div>

            </div>

            <div id="get-quote" className="mb-3 mt-3">
              <div className="container d-flex justify-content-center align-items-center">
                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#0d6efd" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center border border-outline" href="tel:+971507464712">Call Now</a>
              </div>
            </div>
          </div>
        </section>


        {/* <section className="section cs_py_48 bg-dark-blue text-light">
          <div className="container">
            <h3 className="text-center text-light">AC Cleaning Services</h3>
            <p>In Dubai, maintaining a comfortable and healthy indoor environment is essential, and that's where AC cleaning services come into play. When it comes to split AC cleaning and AC deep cleaning services, residents rely on the expertise of professionals. These specialized services ensure your air conditioning units function efficiently and keep the air in your space clean and safe. Choose AC cleaning services in Dubai for a breath of fresh, purified air in your home or office. Prepare your air conditioning system for the hot summer months with our efficient AC deep cleaning services. Trust us for AC filter cleaning Dubai and Corporate AC cleaning Dubai as we excel in providing services in both commercial and residential areas.</p>
            <br />

            <h3 className="text-center text-light">FAJ Services Offer Expert AC Technician Near Me</h3>
            <p>In the intense heat of Dubai, when you need emergency AC cleaner services, it's critical to find a professional AC mechanic near me for immediate assistance. Look no farther than FAJ if you need a reliable and skilled AC mechanic in Dubai. For all of your cooling needs, our air conditioning specialists work throughout Dubai to deliver efficient solutions and timely service. Hire FAJ services to get an AC technician near me who can handle all of your AC-related issues.</p>
            <br />
            <h3 className="cs_fs_30 text-light">Restore Your AC With FAJ’s Air Conditioning Service</h3>
            <p>You need efficient air conditioning repair service to get your home or place of work comfortable. We use modern equipment to provide air conditioning service so we can assist our client in the best way possible. Whether it's a simple repair or a complex commercial air conditioning servicing, we're committed to provide timely, effective solutions for industrial air conditioning systems that meet your expectations. If you're looking for trustworthy air conditioning near me, you can trust FAJ.</p>

          </div>
        </section> */}


        {/* <section className="section cs_py_48">
          <div className="container">
            <h3 className="text-center">Common Signs Your AC May Need Maintenance</h3>
            <div className="row gx-lg-3 gy-lg-4">
              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">Weak Airflow</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If you notice reduced airflow coming from your vents, it could indicate a problem with your AC system, such as a clogged filter or malfunctioning fan.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">Warm Air</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your AC blows warm or room temperature air instead of cold, it could indicate compressor, refrigerant, or ductwork issues.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Unusual sounds like grinding, squealing, or banging coming from your AC unit can indicate mechanical problems that require attention.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">Foul Odors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Musty or foul odors emanating from the vents could suggest mold or mildew growth within the system, which needs to be addressed quickly.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">Frequent Cycling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">It may signal difficulty maintaining desired temperatures due to issues like dirty filters, low refrigerant levels, or a faulty thermostat.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">High Humidity Levels</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">An air conditioner that fails to adequately reduce indoor humidity levels may indicate issues with its cooling capacity or improper operation.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">Leaking Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Water pooling around AC or dripping from vents could indicate blocked condensate drain, frozen coils, or other issues.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">Increased Energy Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">High energy bills without increase in usage could indicate the inefficiency of your AC due to dirty filters, duct leaks, or other problems.</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section> */}

        <section className="section cs_py_48">
          <div className="container">
            <h3 className="text-center">Our AC Repair & Maintenance Services</h3>
            <div className="row gx-lg-3 gy-lg-4">

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">AC Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Get your AC back to optimal performance with our expert AC repair services in Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">AC Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ensure smooth operation and longevity for your AC with our AC maintenance solutions.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">AC Servicing</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Experience unparalleled comfort with our professional air conditioning servicing tailored to your needs.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">AC Cleaning</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Refresh and revitalize your AC system for improved air quality with our thorough AC cleaning services.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">AC Tune-Up</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Maximize efficiency and performance with our precision tune-up for your AC unit.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">AC Inspection
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We identify and address potential issues before they escalate with our reliable AC inspections.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">AC Troubleshooting
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Trust our skilled technicians to diagnose and resolve any AC issues swiftly and effectively.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1">Emergency AC Repair
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Stay cool and comfortable around the clock with our reliable emergency AC repair in Dubai.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_48 bg-dark-blue text-light">
          <div className="container text-center">
            <h3 className="cs_fs_30 text-light">Practical Tips to Improve Energy Efficiency</h3>
            <p>Learn easy and proven ways to save energy with your AC. Find tips to cut the cost and stay cool all summers!</p>
            <a
              href="public/files/Practical Tips to Improve Energy Efficiency of Your AC Infographic.pdf"
              className="btn-green-yellow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here to Save on Energy Bills
            </a>

          </div>
        </section>

        <section className="section cs_py_48">
          <div className="container text-center">
            <div class="row">
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

                  <img className="" src={`${import.meta.env.BASE_URL}/img/benafit-acimg.jpg`} alt="Post Image" />
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

        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
            <h3>Restore Your AC With FAJ’s Air Conditioning Service</h3>
            <p>You need efficient air conditioning repair service to get your home or place of work comfortable. We use modern equipment to provide air conditioning service so we can assist our client in the best way possible. Whether it's a simple repair or a complex commercial air conditioning servicing, we're committed to provide timely, effective solutions for industrial air conditioning systems that meet your expectations. If you're looking for trustworthy air conditioning near me, you can trust FAJ.</p>

            <br />

            <h3>Get Professional Air Con Servicing In Your Town</h3>
            <p>Avail the advantages of regular air con maintenance from FAJ in your neighborhood. Our comprehensive air con servicing is designed to maintain optimal performance of your AC, resulting in optimal comfort and efficiency. You can save money on repairs and have reliable cooling all year long with our aircon servicing deals.</p>

          </div>
        </section>

        <section className="section cs_py_48">
          <div className="container">
            <h3 className="text-center">Reasons To Count On An AC Maintenance Company In Dubai</h3>
            <p>100% satisfaction. With the support of our AC service in Dubai you can ensure your air conditioning system operates at peak performance even during the hottest months of the year. Reliable AC care in Dubai Caring for your AC system is essential in Dubais hot climate, and our AC maintenance Dubai services have been designed to keep your cooling units running smoothly.</p>
            <ul style={{ 'margin-left': '15px', 'padding-top': '12px' }}>
              <li>
                <p class="acsvs-int-new-p"><strong>Reliable Technician:</strong> Our professional aircon servicing Dubai team is dedicated to keeping your cooling system in top shape.</p></li><li>					<p class="acsvs-int-new-p"><strong>Indoor comfort assurance:</strong> Our regular air conditioning service maintains system efficiency and indoor comfort.</p></li>
              <li>
                <p class="acsvs-int-new-p"><strong>Efficiency and longevity:</strong> Our Regular aircon service is essential to ensure that your AC unit functions efficiently and lasts longer.</p></li>
              <li>
                <p class="acsvs-int-new-p"><strong>Your comfort partner:</strong> To ensure year-round indoor comfort, air conditioning service Dubai is your go-to option.</p></li>
              <li>
                <p class="acsvs-int-new-p"><strong>AC maintenance for everyone:</strong> Our AC maintenance service is designed to suit both residential and commercial clients.</p></li>
              <li>
                <p class="acsvs-int-new-p"><strong>Fast AC solutions in Dubai:</strong> Looking for AC Repair in Dubai? Youve come to the right place, where we repair all types of AC systems, including central and split units.Are you searching for affordable aircon service Dubai? Our company is offering the best AC services and is just a phone call away.</p></li>
            </ul>
            <p>Regular AC maintenance services in Dubai are necessary to keep your air conditioning system operating at peak efficiency. To guarantee that your AC unit is performing at its best, FAJ offers comprehensive AC maintenance services. With our proactive maintenance approach, you may always feel comfortable and at ease knowing that your air conditioning system is operating at peak efficiency. You can rely on us if you're seeking for "AC maintenance near me" or "AC maintenance companies."</p>
            <br />

            <h3 className="text-center">Get In Touch With Us To Get An Amazing AC Repair Service
            </h3>
            <p>Experience amazing AC repair service from our dedicated team at FAJ. We strive for perfection in everything we do, so you can be sure your air conditioning system will receive the best maintenance and Air conditioning repair services. Whether we are doing precise repairs or diagnosing complex issues, our AC unit repair services may deliver outstanding outcomes. We are dedicated to going above and beyond to meet the needs of our clients by providing superior, long-lasting commercial air conditioning repair service.</p>
            <br />

            <h3>AC Fixing Dubai: Now Available At Reasonable Rates
            </h3>
            <p>You may get your AC fixing Dubai done without going over budget with FAJ's upfront and fair charges. We offer reasonable costs for our AC leak fix because we understand how crucial it is to maintain a comfortable home environment without going over budget. Because our pricing is transparent and cheap, you can fix central AC with confidence. When your Air conditioner breaks down, the first thing you search is “What is the reasonable AC fix near me or fix my AC service” nearby? Dont worry any more. FAJ Professional never compromise on quality or service standards, so even at our reasonable costs, you can be confident that the air conditioning solutions we offer will be durable.</p>
            <br />

            <h3>Select FAJ For Air Conditioner Repairs In Dubai
            </h3>
            <p>When it comes to air conditioner repairs, reliability is crucial. For all of your AC needs, our team is committed to provide durable air conditioner maintenance service. You can count on our house air conditioner repair near me to locate the problem and complete repairs promptly, regardless of how minor or major the failure is. We ensure maximum and accurate performance of your AC by our extensive air conditioner service and repair. You can trust FAJ if you need a skilled air conditioner technician near me.</p>
            <br />

            <h3>Hire The Number 1 AC Service Company In Dubai</h3>
            <p>Our experienced technicians operate all over the city and neighborhood sectors as Dubai’s leading AC repair and maintenance service providers. All of our clients receive one-of-a-kind, highly professional services at an unbeatable price.
              <br />
              <a href="https://www.google.com/maps/place/FAJ+Technical+Services+L.L.C+-+Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94?utm_source=mstt_1&amp;entry=gps&amp;lucs=47068615&amp;g_ep=CAESCTExLjkxLjMwMhgAINeCAyoINDcwNjg2MTVCAlBL">FAJ Technical Services LLC</a>, Number 1 AC Service Company in Dubai specializes in the installation, after-sales repairs, and maintenance of portable and installed air conditioning units in both commercial and residential settings. We provide ongoing AC service and maintenance, including emergency repairs, at a great value.
              <br />
              All of our technicians are professionals with years of industry experience who will treat your property with extreme care and precision as if it were their own.
            </p>
          </div>
        </section>




        <section className="section cs_py_48  bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">FAQ's</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye text-light"></i>
                      <i className="bi bi-eye-slash text-light"></i>
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

        <section className="section cs_py_48">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book and Appointment"
          ></Serviceappointemnt>

        </section>

      </div>
    </>
  );
};

export default AcServiceInDubai;