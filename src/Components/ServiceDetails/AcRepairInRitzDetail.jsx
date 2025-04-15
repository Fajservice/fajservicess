import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/AcRepairInRitz';
import { HelmetProvider } from "react-helmet-async";
import FAJACPrice from '../Miscellaneous/FAJACPrice';
import Serviceappointemnt from "../Contact/Serviceappointemnt";
import BenefitAcMaintenance from "../BenefitAcMaintenance/BenefitAcMaintenance";
import GetQuoteButton from "../Buttons/GetQuoteButton";
import CallNowButton from "../Buttons/CallNowButton";


const AcRepairInRitzDetail = () => {
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
                <title>FAJ / AC Repair Dubai - AC Service in The Ritz Carlton DIFC</title>
                <meta name="description" content="FAJ Established in 2010, / We offer professional AC Repair, Freezer, Refrigerator, Fridge, Washing Machine Maintenance Service Company Dubai"></meta>
            </HelmetProvider>

            <div className="cs_service_details">
                {/* The FAJ experts can help you make your home or place of business more comfortable */}
                <section className="section cs_py_48">
                    <div className="container">
                        {/* <img src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance.jpeg`} alt="Service Banner" /> */}
                        <h2 className="cs_fs_30">The FAJ experts can help you make your home or place of business more comfortable</h2>
                        <p>FAJ Technical Services LLC is your premier choice for quality AC Service In Dubai. With 14 years of experience in AC repairing, maintenance, and servicing, we are the most trusted air conditioning service company in Dubai, UAE.<br />FAJ is providing AC repair and maintenance services to all areas of Dubai. Our AC technicians are skilled and specialize in repairing all AC types, brands, and models. Experience reliable AC repair and maintenance to keep your home or business cool and comfortable.</p>
                        
                        <div id="get-quote" class=" mt-3">
                            
                            <div class="container d-flex justify-content-center align-items-center">
                                {/* <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#0D6EFD" }}>Get A Free Quote</a>
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex border border-outline align-items-center" href="tel:+971507464712">Call Now</a> */}
                                <CallNowButton /> <GetQuoteButton />
                            </div>

                        </div>
                    </div>
                </section>
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
                {/* How much does it cost Premier AC Cleaning Service, AC Repair and AC Maintenance? */}
                <section className="section cs_py_48">
                    <div className="container">
                        <FAJACPrice></FAJACPrice>
                    </div>
                </section>
                {/* Ready to Beat the Heat? Find the Best AC Repair in Dubai */}
                <section className="section cs_py_48 bg-dark-blue text-light">
                    <div className="container">
                        <h3 class="cs_fs_30 text-light">Make Your AC Cool Faster – Beat the Summer Heat!</h3>
                        <p>Ready to Beat the Heat? Look no further! Find the best AC Repair in Dubai and keep yourself cool all summer long. Our expert AC technicians ensure fast, reliable services to get your AC up and running.Our service guarantees a comfortable home or office environment, even during the scorching heat of Dubai. Plus, with our affordable rates and transparent pricing, you can trust that you're getting the best value for your money.Don't suffer through another day of sweltering temperatures. Click below to schedule your AC repair and maintenance now and experience instant relief! Stay cool, Dubai!</p>
                    </div>
                </section>

                {/* Choose FAJ for Speed, Efficiency and Peace of Mind */}
                <section className="section cs_py_48">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <img className="border border-4 border-info rounded" src={`${import.meta.env.BASE_URL}/img/choosefajspeed.jpg`} alt="Post Image" />
                            </div>
                            <div className="col-xl-6">
                                <h3 class="cs_fs_30">Choose FAJ for Speed, Efficiency and Peace of Mind</h3>
                                <p>When the temperature soars and you have air conditioner system faults, we are here to save your day. We have trained and professional technical teams to serve you..

                                    Routine inspections of your Air Condition Installation, AC repair Dubai, AC maintenance & repairs, fix service is extremely important to ensure your unit’s efficiency, we are trained and qualified to maintain all type, makes, model and sizes Domestic Ac & Commercial air conditioner & Ventilation System in Dubai. FAJ, an AC Repair Dubai Company.
                                    When it comes to Air Conditioner installation service, You Only Want to Bring Professional, Trustworthy Servicemen into Your Home or Place of Business.</p>
                                <div id="get-quote" class=" mt-4">
                                    <div class="container d-flex justify-content-center align-items-center">
                                    <CallNowButton /> <GetQuoteButton />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>

                <BenefitAcMaintenance />

                {/* AC Services Section - 1 Row 2 Column Layout */}
                <section className="section cs_py_48 text-black">
                    <div className="container">
                        <div className="row g-4">
                            {/* Column 1: AC Cleaning Services */}
                            <div className="col-md-6 pe-md-4">
                                <h3 className="cs_fs_30 text-black mb-3">AC Cleaning Services</h3>
                                <p>In Dubai, maintaining a comfortable and healthy indoor environment is essential, and that's where AC cleaning services come into play. When it comes to split AC cleaning and AC deep cleaning services, residents rely on the expertise of professionals. These specialized services ensure your air conditioning units function efficiently and keep the air in your space clean and safe. Choose AC cleaning services in Dubai for a breath of fresh, purified air in your home or office. Prepare your air conditioning system for the hot summer months with our efficient AC deep cleaning services. Trust us for AC filter cleaning Dubai and Corporate AC cleaning Dubai as we excel in providing services in both commercial and residential areas.</p>
                            </div>

                            {/* Column 2: FAJ Services Offer Expert AC Technician */}
                            <div className="col-md-6 ps-md-4">
                                <h3 className="cs_fs_30 text-black mb-3">FAJ Services Offer Expert AC Technician Near You</h3>
                                <p>In the intense heat of Dubai, when you need emergency AC cleaner services, it's critical to find a professional AC mechanic near me for immediate assistance. Look no farther than FAJ if you need a reliable and skilled AC mechanic in Dubai. For all of your cooling needs, our air conditioning specialists work throughout Dubai to deliver efficient solutions and timely service. Hire FAJ services to get an AC technician near me who can handle all of your AC-related issues.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reasons To Count On An AC Maintenance Company In Dubai */}
                <section className="section cs_py_48 bg-light-gray">
                    <div className="container">
                        <h3 class="cs_fs_30">Reasons To Count On An AC Maintenance Company In Dubai</h3>
                        <p>100% satisfaction. With the support of our AC service in Dubai you can ensure your air conditioning system operates at peak performance even during the hottest months of the year. Reliable AC care in Dubai Caring for your AC system is essential in Dubais hot climate, and our AC maintenance Dubai services have been designed to keep your cooling units running smoothly.</p>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img className="border border-4 border-info rounded" src={`${import.meta.env.BASE_URL}/img/indoor-ac-servicing.jpg`} alt="Post Image" />
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li>Reliable Technician: Our professional HVAC servicing Dubai team is dedicated to keeping your cooling system in top shape.</li>
                                    <li>Indoor comfort assurance: Our regular air conditioning service maintains system efficiency and indoor comfort.</li>
                                    <li>Efficiency and longevity: Our Regular air conditioning service is essential to ensure that your AC unit functions efficiently and lasts longer.</li>
                                    <li>Your comfort partner: To ensure year-round indoor comfort, air conditioning service Dubai is your go-to option.</li>
                                    <li>AC maintenance for everyone: Our AC maintenance service is designed to suit both residential and commercial clients.</li>
                                    <li>Fast AC solutions in Dubai: Looking for AC Repair in Dubai? You ve come to the right place, where we repair all types of AC systems, including central and split units.Are you searching for affordable air conditioner service Dubai? Our company is offering the best AC services and is just a phone call away.</li>

                                </ul>
                            </div>
                        </div>
                        <p>Regular AC maintenance services in Dubai are necessary to keep your air conditioning system operating at peak efficiency. To guarantee that your AC unit is performing at its best, FAJ offers comprehensive AC maintenance services. With our proactive maintenance approach, you may always feel comfortable and at ease knowing that your air conditioning system is operating at peak efficiency. You can rely on us if you’re seeking for “AC maintenance near me” or “AC maintenance companies.”</p>
                    </div>
                </section>

                {/* AC Services Section - 1 Row 2 Column Layout */}
                <section className="section cs_py_48 text-black">
                    <div className="container">
                        <div className="row g-4 mb-4">
                            {/* Column 1: Get In Touch With Us */}
                            <div className="col-md-4 pe-md-3">
                                <h3 className="cs_fs_30 text-black mb-3 text-center">Get In Touch With Us To Get An Amazing AC Repair Service</h3>
                                <p className="text-center">Experience amazing AC repair service from our dedicated team at FAJ. We strive for perfection in everything we do, so you can be sure your air conditioning system will receive the best maintenance and Air conditioning repair services. Whether we are doing precise repairs or diagnosing complex issues, our AC unit repair services may deliver outstanding outcomes. We are dedicated to going above and beyond to meet the needs of our clients by providing superior, long-lasting commercial air conditioning repair service.</p>
                            </div>

                            {/* Column 2: Center Image - Smaller on mobile */}
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <div className="text-center">
                                    <img
                                        src={`${import.meta.env.BASE_URL}/img/image.png`}
                                        alt="AC Repair Services"
                                        className="img-fluid rounded shadow-sm"
                                        style={{ maxHeight: "400px", objectFit: "contain" }}
                                    />
                                    <p className="mt-3 text-center fw-bold d-none d-md-block">Professional AC Services in Dubai</p>
                                </div>
                            </div>

                            {/* Column 3: AC Fixing Dubai */}
                            <div className="col-md-4 ps-md-3">
                                <h3 className="cs_fs_30 text-black mb-3 text-center">AC Fixing Dubai: Now Available At Reasonable Prices</h3>
                                <p className="text-center">You may get your AC fixing Dubai done without going over budget with FAJ's upfront and fair charges. We offer reasonable costs for our AC leak fix because we understand how crucial it is to maintain a comfortable home environment without going over budget. Because our pricing is transparent and cheap, you can fix central AC with confidence. When your Air conditioner breaks down, the first thing you search is "What is the reasonable AC fix near me or fix my AC service" nearby? Dont worry any more. FAJ Professional never compromise on quality or service standards, so even at our reasonable costs, you can be confident that the air conditioning solutions we offer will be durable.</p>
                            </div>
                        </div>

                        {/* Buttons centered below all columns */}
                        <div id="get-quote" className="row">
                            <div className="col-12 d-flex justify-content-center">
                            <CallNowButton /> <GetQuoteButton />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Select FAJ For Air Conditioner Repairs in Dubai */}
                <section className="section cs_py_48 bg-dark-blue text-light">
                    <div className="container">
                        <h3 class="cs_fs_30 text-light">Select FAJ For Air Conditioner Repairs in Dubai</h3>
                        <p>When it comes to air conditioner repairs, reliability is crucial. For all of your AC needs, our team is committed to provide durable air conditioner maintenance service. You can count on our house air conditioner repair near me to locate the problem and complete repairs promptly, regardless of how minor or major the failure is. We ensure maximum and accurate performance of your AC by our extensive air conditioner service and repair. You can trust FAJ if you need a skilled air conditioner technician near me.</p>
                    </div>
                </section>

                {/* Hire The Number 1 AC Service Company in Dubai*/}
                <section className="section cs_py_48 text-black">
                    <div className="container">
                        <h3 class="cs_fs_30 text-black">Hire The Number 1 AC Service Company in Dubai</h3>
                        <p>Our experienced technicians operate all over the city and neighborhood sectors as Dubai’s leading AC repair and maintenance service providers. All of our clients receive one-of-a-kind, highly professional services at an unbeatable price.
                            FAJ Technical Services LLC, Number 1 AC Service Company in Dubai specializes in the installation, after-sales repairs, and maintenance of portable and installed air conditioning units in both commercial and residential settings. We provide ongoing AC service and maintenance, including emergency repairs, at a great value.
                            All of our technicians are professionals with years of industry experience who will treat your property with extreme care and precision as if it were their own.</p>
                    </div>
                    <div id="get-quote" class=" mt-4">
                        <div class="container d-flex justify-content-center align-items-center">
                            <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" style={{ backgroundColor: "#0D6EFD" }}>Get A Free Quote</a>
                            <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex border border-outline align-items-center" href="tel:+97143300002">Call Now</a>
                        </div>
                    </div>
                </section>

                {/* We specialise in air conditioning services for the following brands.*/}
                <section className="section cs_py_48 text-black">
                    <div className="container">
                        <h3 class="cs_fs_30 text-black">We specialise in air conditioning services for the following brands.</h3>
                        <p><strong>LG Air Conditioner Service: </strong>FAJ offers reliable LG AC repair, and services in Dubai. With professionals, who are experts in split, vrf and central air conditioning units.</p>
                        <p><strong>Samsung Air Conditioner Service: </strong>Based in Dubai, FAJ is your go-to destination for Samsung AC Services in Dubai. Specializing in Samsung air conditioner systems, we offer comprehensive services ranging from maintenance to repair.</p>
                        <p><strong>York AC Service and Repair: </strong>The York AC service ensures you don’t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritized.</p>
                        <p><strong>Daikin Air Conditioner Service: </strong>Trust our skilled team to efficiently resolve all issues with your Daikin air conditioner and restore its functionality.</p>
                        <p><strong>Trane HVAC Service: </strong>With extensive knowledge of Trane air conditioning systems, we provide effective maintenance to keep your unit running smoothly.</p>
                        <p><strong>Panasonic AC Service and Repair: </strong>No matter the issue with your Panasonic air conditioner, our experts can accurately diagnose and fix it.</p>
                        <p><strong>Gree AC Service and Maintenance: </strong>Has your AC stopped working? No need to endure unpleasant temperatures and stuffy air or suffer losses due to damaged equipment (broken Gree air conditioning in a room, for example, can be a disaster!) – FAJ gets your Gree air conditioning back up and running in no time!</p>
                        <p><strong>O General AC Service and Repair: </strong>O General AC service in Dubai requires expert help because only specialized ones know how to address aircon issues. We are a hassle-free air conditioning service provider.</p>
                        <p><strong>Mitsubishi Air Conditioner Service and Repair: </strong>Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai! Our expert Mitsubishi AC services ensure your AC stays cool and efficient, providing comfort and peace of mind.</p>
                        <p><a href="https://www.fajservices.ae/sanyo-ac-repair-in-dubai-sanyo-ac-maintenance-in-dubai-sanyo-ac-fix-in-dubai-sanyo-ac-service-in-dubai-sanyo-air-condition-repair-in-dubai-sanyo-air-condition-maintenance-in-dubai-sanyo-air-condition/">Sanyo AC Service Dubai</a> | <a href="https://www.fajservices.ae/rheem-ac-maintenance-in-dubai/"> Rheem AC Service</a> |
                            <a href="https://www.fajservices.ae/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/">SKM AC Service Dubai</a> | <a href="https://www.fajservices.ae/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/">Daewoo AC Service Dubai</a> | <a href="https://www.fajservices.ae/ac-service-in-dubai">Carrier AC Service</a> | <a href="https://www.fajservices.ae/midea-ac-installation-maintenance-repair-fix-service-in-dubai/"> Midea Air Conditioner Service Near Me</a> | <a href="https://www.fajservices.ae/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/">Lennox Air Conditioning Service</a> | <a href="https://www.fajservices.ae/goodman-ac-repair-in-dubai-goodman-ac-maintenance-in-dubai-goodman-ac-fix-in-dubai-goodman-ac-service-in-dubai-goodman-air-condition-repair-in-dubai-goodman-air-condition-maintenance-in-dubai-goodman/">Goodman AC Service Dubai</a> | <a href="https://www.fajservices.ae/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/">Coleman AC Services</a> | <a href="https://www.fajservices.ae/westpoint-ac-repair-in-dubai-westpoint-ac-maintenance-in-dubai-westpoint-ac-fix-in-dubai-westpoint-ac-service-in-dubai-west-point-air-condition-repair-in-dubai-west-point-air-condition-maintenance-in/"> Westpoint Service</a> | <a href="https://www.fajservices.ae/westpoint-ac-repair-in-dubai-westpoint-ac-maintenance-in-dubai-westpoint-ac-fix-in-dubai-westpoint-ac-service-in-dubai-west-point-air-condition-repair-in-dubai-west-point-air-condition-maintenance-in/">Aftron AC Service Near Me</a> | <a href="https://www.fajservices.ae/crafft-ac-repair-in-dubai-crafft-ac-maintenance-in-dubai-crafft-ac-fix-in-dubai-crafft-ac-service-in-dubai-crafft-air-condition-repair-in-dubai-crafft-air-condition-maintenance-in-dubai-crafft-air-con/">Crafft AC Service</a> | <a href="https://www.fajservices.ae/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/"> Bryant AC Service</a> | <a href="https://www.fajservices.ae/ruud-ac-repair-in-dubai-ruud-ac-maintenance-in-dubai-ruud-ac-fix-in-dubai-ruud-ac-service-in-dubai-ruud-air-condition-repair-in-dubai-ruud-air-condition-maintenance-in-dubai-ruud-air-condition-mainten/">Ruud Air Conditioner Service </a> | <a href="https://www.fajservices.ae/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/">McQuay Air Conditioning Service </a> | <a href="https://www.fajservices.ae/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/"> Blue Star</a> | <a href="https://www.fajservices.ae/supra-ac-repair-in-dubai-supra-ac-maintenance-in-dubai-supra-ac-fix-in-dubai-supra-ac-service-in-dubai-supra-air-condition-repair-in-dubai-supra-air-condition-maintenance-in-dubai-supra-air-condition/"> Supra AC Service</a> |  <a href="https://www.fajservices.ae/toshiba-ac-repair-in-dubai-toshiba-ac-maintenance-in-dubai-toshiba-ac-fix-in-dubai-toshiba-ac-service-in-dubai-toshiba-air-condition-repair-in-dubai-toshiba-air-condition-maintenance-in-dubai-toshiba/"> Toshiba AC Service</a> | <a href="https://www.fajservices.ae/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/">Whirlpool AC Service</a> | <a href="https://www.fajservices.ae/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/"> Super General</a> | <a href="https://www.fajservices.ae/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi/"> Hitachi AC Service</a> | <a href="https://www.fajservices.ae/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/">O General Air Conditioning Service</a> | <a href="https://www.fajservices.ae/cooline-ac-repair-in-dubai-cooline-ac-maintenance-in-dubai-cooline-ac-fix-in-dubai-cooline-ac-service-in-dubai-cooline-air-condition-repair-in-dubai-cooline-air-condition-maintenance-in-dubai-cooline/">Cooline Air Conditioner Service Near Me</a></p>

                    </div>
                </section>

                <div className="section cs_py_48 bg-dark-blue text-light">
                    <div className="container">
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
                                        <p className="mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <section className="section cs_py_48">
                    <Serviceappointemnt
                        subtitle2="Contact us"
                        title2="Book and Appointment"
                    ></Serviceappointemnt>
                </section>

            </div>
        </>
    )
}

export default AcRepairInRitzDetail