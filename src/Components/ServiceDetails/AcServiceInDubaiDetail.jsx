import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/acfaq.json';
import { HelmetProvider } from "react-helmet-async";
import FAJACPrice from '../Miscellaneous/FAJACPrice';
import Serviceappointemnt from '../Contact/Serviceappointemnt';
import CallNowButton from '../Buttons/CallNowButton';
import GetQuoteButton from "../Buttons/GetQuoteButton";
import ContactUsButton from "../Buttons/ContactUsButton";

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
            {/* <img className="bordered-img blue-border" src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance.jpeg`} alt="Service Banner" /> */}
            <h2 className="cs_fs_30">The FAJ experts can help you make your home or place of business more comfortable</h2>
            <p>FAJ Technical Services LLC is your top choice for AC service in Dubai. With 15 years of experience, we are a trusted provider for AC repair and maintenance across all areas of the city.
              <br />
              Our skilled AC technicians can handle all types, brands, and models of air conditioning units, ensuring your home or business stays cool and comfortable.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>
{/* 
        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
            <div className="row g-5">
              <div className="col-md-6">
                <img className="bordered-img blue-border w-100  " src={`${import.meta.env.BASE_URL}/img/reem-ac-service.jpg`} alt="Post Image" />
                <h3 className="cs_fs_25 mb-1 mt-3">Professional AC Service and Maintenance</h3>
                <p>When considering AC service in Dubai, it is vital to hire a qualified and reliable AC technician who can effectively address your needs at home or in your business place.</p>
                <p>FAJ Experts in comprehensive air conditioner (AC) service, and maintenance, ensuring that you receive the highest quality care for your cooling systems.</p>
              </div>

              <div className="col-md-6 border-small-left">
                <img className="bordered-img blue-border w-100" src={`${import.meta.env.BASE_URL}/img/indoor-ac-servicing.jpg`} alt="Post Image" />
                <h3 className="cs_fs_25 mb-1 mt-3">Signs You Need An AC Service</h3>
                <p>If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.</p>
                <ul>
                  <li>Higher electricity bills / Loss of AC performance</li>
                  <li>Air is not blowing cold / Poor AC airflow, making noises</li>
                  <li>Drips from your air conditioner</li>
                </ul>
              </div>

            </div>

            <div className="appointment-col border-small-top pt-3">
              <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.<b /> <b />For technical inspection/callout fees, AC service near you, repair, or maintenance, please click below.To book an appointment, you can call +971 50 7464 712 or reach us on WhatsApp at +971 50 746 4712.</p>

              <div id="get-quote" className=" mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3">
                  <GetQuoteButton />
                  <CallNowButton />
                </div>
              </div>

            </div>
          </div>
        </section> */}

<section className="section cs_py_48 bg-light-gray">
  <div className="container">
    <div className="row g-5">
      <div className="col-md-6">
        <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}/img/reem-ac-service.jpg`} alt="Post Image" />
        <h3 className="cs_fs_25 mb-1 mt-3">Experts AC Service and Maintenance</h3>
        <p>When considering AC service in Dubai, it is vital to hire a qualified and reliable AC technician who can effectively address your needs at home or in your business place.</p>
        <p>FAJ Experts in comprehensive air conditioner (AC) service, and maintenance, ensuring that you receive the highest quality care for your cooling systems.</p>
      </div>

      <div className="col-md-6 border-small-left">
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

    <div className="appointment-col border-small-top pt-3">
      <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.<b /> <b />For technical inspection/callout fees, AC service near you, repair, or maintenance, please click below. To book an appointment, you can call +971 50 7464 712 or reach us on WhatsApp at +971 50 746 4712.</p>
      <div id="get-quote" className=" mt-3">
        <div className="container d-flex justify-content-center align-items-center gap-3">
          <GetQuoteButton />
          <CallNowButton />
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
            <h3 className="cs_fs_30 text-light">Beat the Summer Heat with Quick AC Repair and Service!</h3>
            <p>
              Ready to stay cool in Dubai? Our expert AC technicians offer fast and reliable air conditioner repair services to ensure your Air Conditioner is running smoothly.
              <br />
              With affordable rates and transparent pricing, you’ll get the best value. Don’t suffer through the heat—schedule your AC repair and maintenance now for instant relief! Stay cool, Dubai!
            </p>

          </div>

          <div id="get-quote" className=" mt-">
            <div className="container d-flex justify-content-center align-items-center gap-3">              
              <ContactUsButton/>
            </div>
          </div>

        </section>

        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
            <h3 className="cs_fs_30">A Quick Tour to Your AC Problems and Fixing</h3>
            <div className="row">
              <div className="col-xl-6">
                <iframe className="bordered-img blue-border" width="100%" height="350" src="https://www.youtube.com/embed/sxBhB1_gxYA?si=96yf5hxyAA3bct8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
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
                <h3 className="cs_fs_30 text-light mb-3 mt-4">The Benefits Of Regular AC Service</h3>
                <div className="row mt-4 gx-4 gy-4">
                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}/img/Improved AC Cooling.svg`} alt="Cooling Efficiency" className="img-fluid rounded-circle border border-4 border-info" />
                      </div>
                      <h5 className="text-uppercase mb-2 fs-6 text-white">COOLING EFFICIENCY</h5>
                      <p className="small">We carry out a complete assessment of the cooling efficiency using a temperature gun.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}/img/Energy Efficient.svg`} alt="Disinfect Components" className="img-fluid rounded-circle border border-4 border-warning" />
                      </div>
                      <h5 className="text-uppercase mb-2 fs-6 text-white">DISINFECT COMPONENTS</h5>
                      <p className="small">All hardware components are tested and disinfected, including filters and vents.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}/img/Extended Lifespan.svg`} alt="Fan Assessment" className="img-fluid rounded-circle border border-4 border-success" />
                      </div>
                      <h5 className="text-uppercase mb-2 fs-6 text-white">FAN ASSESSMENT</h5>
                      <p className="small">We ensure the fan works correctly with no blockages in the evaporator coil.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}/img/No Costly Repairs.svg`} alt="Thermostat Check" className="img-fluid rounded-circle border border-4 border-primary" />
                      </div>
                      <h5 className="text-uppercase mb-2 fs-6 text-white">THERMOSTAT CHECK</h5>
                      <p className="small">We use a laser temperature gauge to ensure thermostats operate correctly.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}/img/Reliability.svg`} alt="Airflow Balance" className="img-fluid rounded-circle border border-4 border-danger" />
                      </div>
                      <h5 className="text-uppercase mb-2 fs-6 text-white">AIRFLOW BALANCE</h5>
                      <p className="small">We ensure you get optimal air flow around each room as needed.</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div className="d-flex flex-column align-items-center px-2">
                      <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                        <img src={`${import.meta.env.BASE_URL}/img/Reliability.svg`} alt="Customer Feedback" className="img-fluid rounded-circle border border-4 border-secondary" />
                      </div>
                      <h5 className="text-uppercase mb-2 fs-6 text-white">CUSTOMER FEEDBACK</h5>
                      <p className="small">Our team provides vital feedback on your AC's health and any needed repairs.</p>
                    </div>
                  </div>
                </div>
                {/* <p className="mt-4 mb-4">Contact us now to get a free AC service quote.</p> */}
                
                <div id="get-quote" className=" mt-3 mb-3">
                  <div className="container d-flex justify-content-center align-items-center gap-3">
                    <GetQuoteButton />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Why is AC Maintenance Service Important in Dubai? */}
        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
            <h3 class="cs_fs_30">Why is AC Maintenance Service Important in Dubai?</h3>
            <p>
              Regular air conditioning (AC) maintenance service in Dubai is essential for optimal performance. FAJ offers comprehensive services to keep your system running efficiently.
              With our proactive approach, you can feel confident that your AC is functioning at its best. If you need <Link to="/ac-maintenance-dubai/">AC maintenance</Link> near you, contact us.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={`${import.meta.env.BASE_URL}/img/indoor-ac-servicing.jpg`} alt="Post Image" />
              </div>
              <div className="col-md-6">
                <ul>

                  <li> <strong> Extreme Weather :</strong> Experiences high temperatures over 40°C (104°F) in summer. Regular maintenance keeps air conditioning systems efficient during these conditions.</li>

                  <li> <strong> Energy Efficiency :</strong> A well-maintained AC unit operates more efficiently, using less energy and lowering both electricity bills. </li>

                  <li> <strong> Longevity of Equipment :</strong>  Regular maintenance can extend your air conditioning system’s lifespan, reducing the need for costly repairs and replacements, ultimately saving you money.</li>


                  <li> <strong>Improved Air Quality :</strong> Regular maintenance keeps dust and allergens from building up, ensuring cleaner air.</li>

                  <li> <strong>Prevention of Breakdowns :</strong> Proactive maintenance catches minor issues early, preventing costly repairs and unexpected AC failures</li>

                  <li> <strong> Enhanced Comfort :</strong> Regular servicing of your AC system ensures consistent temperatures, which is vital for comfort in hot climates. In a city like Dubai, investing in AC maintenance is essential for both comfort and efficiency in daily life.</li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Select FAJ for Quick Service, Efficiency, and Peace of Mind */}
        <section className="section cs_py_48 bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 sky-blue-font">Select FAJ for Quick Service, Efficiency, and Peace of Mind</h3>
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
                <img className="blue-border" src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance-in-Dubai.jpeg`} alt="Post Image" />
              </div>
            </div>
          </div>
        </section>


        {/* Searching For HVAC Companies Near Me */}
        <section className="section cs_py_48 text-black">
          <div className="container">
            <div className="row g-4 mb-4 align-items-center">
              {/* Column 1: Get In Touch With Us */}
              <div className="col-md-4 pe-md-3">
                <h3 className="cs_fs_30 text-black mb-3 text-center">Commercial AC Service and Repair! </h3>

                <p className="" style={{ 'text-align': 'justify' }}>
                  Is your workplace hot and stuffy? Whether for your employees or customers, creating a comfortable environment is essential for maximizing productivity. Contact us today and receive service on the same day!
                </p>
              </div>
              {/* Column 2: Center Image - Smaller on mobile */}
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <img
                    // src={`${import.meta.env.BASE_URL}/img/image.png`}
                    src={`${import.meta.env.BASE_URL}/img/Commercial-AC-Service-and-Repair!.jpg`}
                    alt="AC Repair Services"
                    className="blue-border"
                    style={{ maxHeight: "400px", objectFit: "contain" }}
                  />
                  {/* <p className="mt-3 text-center fw-bold d-none d-md-block">Professional AC Services in Dubai</p> */}
                </div>
              </div>
              {/* Column 3: AC Fixing Dubai */}
              <div className="col-md-4 ps-md-3">
                <h3 className="cs_fs_30 text-black mb-3 text-center">Domestic AC Service and Maintenance</h3>
                <p className="" style={{ 'text-align': 'justify' }}>
                  The warm room will affect your ability to live and sleep. If your air conditioner suddenly stops cooling, don’t delay in contacting us for the same AC repair service nearby.</p>
              </div>
            </div>
            {/* Buttons centered below all columns */}
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <CallNowButton />
              </div>
            </div>

          </div>
        </section>



        {/* We specialise in air conditioning services for the following brands */}
        <section className="section cs_py_48 bg-light-gray">
          <div className="container">
            <h3>We specialise in air conditioning services for the following brands</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0">
                  <Link to="/lg-ac-repair-in-dubai/"><b>LG Air Conditioner Service</b></Link>: FAJ offers reliable LG AC repair, and services in Dubai. With professionals, who are experts in split, vrf and central air conditioning units.
                </p>
                <p className="mb-0">
                  <Link to="/samsung-ac-repair-in-dubai/"><b>Samsung Air Conditioner Service</b></Link>: Based in Dubai, FAJ is your go-to destination for Samsung AC Services in Dubai. Specializing in Samsung air conditioner systems, we offer comprehensive services ranging from maintenance to repair.
                </p>
                <p className="mb-0">
                  <Link to="/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/"><b>York AC Service and Repair</b></Link>: The York AC service ensures you don’t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritized.
                </p>
                <p className="mb-0">
                  <Link to="/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/"><b>Daikin Air Conditioner Service</b></Link>: Trust our skilled team to efficiently resolve all issues with your Daikin air conditioner and restore its functionality.
                </p>
                <p className="mb-0">
                  <Link to="/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/"><b>Trane HVAC Service</b></Link>: With extensive knowledge of Trane air conditioning systems, we provide effective maintenance to keep your unit running smoothly.
                </p>
                <p className="mb-0">
                  <Link to="/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/"><b>Panasonic AC Service and Repair</b></Link>: No matter the issue with your Panasonic air conditioner, our experts can accurately diagnose and fix it.
                </p>
                <p className="mb-0">
                  <Link to="/gree-ac-repair-in-dubai/"><b>Gree AC Service and Maintenance</b></Link>: Has your AC stopped working? No need to endure unpleasant temperatures and stuffy air or suffer losses due to damaged equipment – FAJ gets your Gree air conditioning back up and running in no time!
                </p>
                <p className="mb-0">
                  <Link to="/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/"><b>O General AC Service and Repair</b></Link>: O General AC service in Dubai requires expert help because only specialized ones know how to address aircon issues. We are a hassle-free air conditioning service provider.
                </p>
                <p className="mb-0">
                  <Link to="/mitsubishi-ac-repair-in-dubai/"><b>Mitsubishi Air Conditioner Service and Repair</b></Link>: Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai!
                </p>
                <br />

                <p className="mb-0">
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

                  <Link to="/toshiba-ac-repair-in-dubai-toshiba-ac-maintenance-in-dubai-toshiba-ac-fix-in-dubai-toshiba-ac-service-in-dubai-toshiba-air-condition-repair-in-dubai-toshiba-air-condition-maintenance-in-dubai-toshiba/">Toshiba AC Service</Link>
<span>&nbsp;-&nbsp;</span>
<Link to="/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/">Whirlpool AC Service</Link>
<span>&nbsp;-&nbsp;</span>
<Link to="/super-general-ac-repair-in-dubai-super-general-ac-maintenance-in-dubai-super-general-ac-fix-in-dubai-super-general-ac-service-in-dubai-super-general-air-condition-repair-in-dubai-super-general-air-con/">Super General</Link>
<span>&nbsp;-&nbsp;</span>
<Link to="/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi/">Hitachi AC Service</Link>
<span>&nbsp;-&nbsp;</span>
<Link to="/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/">O General Air Conditioning Service</Link>
<span>&nbsp;-&nbsp;</span>
<Link to="/cooline-ac-repair-in-dubai-cooline-ac-maintenance-in-dubai-cooline-ac-fix-in-dubai-cooline-ac-service-in-dubai-cooline-air-condition-repair-in-dubai-cooline-air-condition-maintenance-in-dubai-cooline/">Cooline Air Conditioner Service Near Me</Link>
                  
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


        <section className="section cs_py_48 bg-dark-blue text-light">
          <div className="container">
            <h3 className="text-center sky-blue-font">AC Cleaning Services</h3>
            <p>
              In Dubai, maintaining a healthy indoor environment is crucial, and AC cleaning services are essential. Residents rely on professionals for central, HVAC or split AC and deep cleaning to ensure efficiency and clean air. Choose our AC cleaning services for fresh air in your home or office. Prepare your system for summer with our effective deep cleaning and trust us for AC filter and corporate cleaning in both residential and commercial settings.
            </p>
            <br />

            <h3 className="text-center sky-blue-font">FAJ Services Offer Expert AC Technician Near Me</h3>
            <p>In the heat of Dubai, finding a reliable AC technician for emergencies is essential.<br/>
FAJ offers skilled AC technicians throughout the city, providing efficient solutions and timely AC service for all your cooling needs. <br />
Contact us for an AC technician who can quickly resolve your AC issues.
</p>
            <br />
            <h3 className="cs_fs_30 sky-blue-font">Select FAJ For Air Conditioner Repairs In Dubai
            </h3>
            <p>When it comes to air conditioner repairs, reliability is crucial. For all of your AC needs, our team is committed to provide durable air conditioner maintenance service. You can count on our house air conditioner repair near me to locate the problem and complete repairs promptly, regardless of how minor or major the failure is. We ensure maximum and accurate performance of your AC by our extensive air conditioner service and repair. You can trust FAJ if you need a skilled air conditioner technician near me.</p>
            <br />
            <h3 className="cs_fs_30 sky-blue-font">Hire The Number 1 AC Service Company In Dubai
            </h3>
            <p>Hire the Number 1 AC Service Company in Dubai! <a href="https://www.google.com/maps/place/FAJ+Technical+Services+L.L.C+-+Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94?utm_source=mstt_1&entry=gps&lucs=47068615&g_ep=CAESCTExLjkxLjMwMhgAINeCAyoINDcwNjg2MTVCAlBL">
              FAJ Technical Services LLC</a> offers expert AC repair and maintenance across the city and neighborhoods. Specializing in installation, after-sales repairs, and maintenance of portable and installed air conditioning units, we serve both commercial and residential clients.
              <br />
              Our experienced technicians provide reliable ongoing service, emergency repairs, and exceptional value. With years of industry experience, our professionals handle your property with care and precision, ensuring the best results at unbeatable prices.
            </p>
            <div id="get-quote" className=" mt-">
              <div className="container d-flex justify-content-center align-items-center gap-3">              
                <ContactUsButton/>
              </div>
            </div>
          </div>
        </section>


        <section className="section cs_py_48">
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
        </section>

        {/* Our AC Repair & Maintenance Services */}
        <section className="section cs_py_48 bg-light-gray">
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
            <p>For a comfortable environment, you need reliable air conditioning repair. We use modern equipment to provide efficient services, whether it’s a simple repair or complex commercial aircon servicing.
             <br />
             Trust FAJ for timely solutions that meet your needs. If you’re looking for dependable air conditioning services near you, we’ve got you covered.</p>

            <h3>Get Professional Air Conditioning Servicing in Dubai and Sharjah</h3>
            <p>Take advantage of regular air conditioning maintenance from FAJ in your area. Our comprehensive air conditioning servicing is designed to ensure optimal performance of your AC, providing you with comfort and efficiency. With our air conditioning servicing deals, you can save money on repairs and enjoy reliable cooling all year long.</p>
            <br />

            <h3>Get In Touch With Us To Get An Amazing AC Repair Service</h3>
            <p>Experience amazing AC repair service from our dedicated team at FAJ. We strive for perfection in everything we do, so you can be sure your air conditioning system will receive the best maintenance and Air conditioning repair services. Whether we are doing precise repairs or diagnosing complex issues, our AC unit repair services may deliver outstanding outcomes. We are dedicated to going above and beyond to meet the needs of our clients by providing superior, long-lasting commercial air conditioning repair service.</p>
            <br />



            <h3>Trust Us for All Your AC Service Needs in Dubai </h3>
            <p>The Healthy Home provides premium and professional air conditioning services in the UAE. Our AC service professionals can resolve your AC problems. Full AC cleaning, AC chemical cleaning, AC coil cleaning, AC repair services, and regular AC maintenance are all part of AC servicing.
              <br />
              When you live in a hot and humid climate like the UAE, you may notice that you require regular AC services. This is primarily because you run your air conditioner almost constantly throughout the year. As a result, you will need to have your air conditioner serviced more frequently than people who live in colder climates.

              Because of the dustier environment, you will need regular AC filter cleaning, especially if you suffer from asthma or allergies. Because of the high usage, AC repair and maintenance are performed regularly. Our skilled AC technicians provide excellent repair services. We also provide annual maintenance contracts (AMC) to make sure that your air conditioner is always in good working order.
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>

          </div>
        </section>

        {/* <section className="section cs_py_48">
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
        </section> */}






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