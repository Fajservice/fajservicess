import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/AcRepairInDip.json';
import { HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../Contact/Serviceappointemnt';
import BenefitAcMaintenance from "../BenefitAcMaintenance/BenefitAcMaintenance";
import GetQuoteButton from "../Buttons/GetQuoteButton";
import CallNowButton from "../Buttons/CallNowButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import FAJACPrice from "../Miscellaneous/FAJACPrice";
import QuickGuide from "../QuickGuide/QuickGuide";

const AcRepairInDiscoveryGardensDetail = () => {
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
        <title>AC Services In Discovery Gardens - Air Conditioner Repairs 1</title>
        <meta name="description" content="Are you finding for AC Services in Discovery Gardens Dubai? Contact us 043300002 for air conditioner repair & maintenance near by in dubai Fix ac"></meta>
    </HelmetProvider>

    <div className="cs_service_details">
        {/* The FAJ experts can help you make your home or place of business more comfortable */}
        <section className="section cs_py_48">
            <div className="container">
                {/* <img src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance.jpeg`} alt="Service Banner" /> */}
                <h2 className="cs_fs_30">THE FAJ EXPERTS ARE HERE TO MAKE THE BEST COOLING FOR YOUR PLACE </h2>
                <p>FAJ Technical Services LLC is your top choice for AC services in Dubai. With over 15 years of experience, we provide trusted AC repair and maintenance in Dubai and Sharjah.<br></br>Our skilled AC technicians can handle all types, brands, and models of air conditioner units to keep your home or business cool and comfortable throughout the year.</p>

                <div id="get-quote" className=" mt-3">

                    <div className="container d-flex justify-content-center align-items-center">
                        {/* <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#0D6EFD" }}>Get A Free Quote</a>
                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex border border-outline align-items-center" href="tel:+971507464712">Call Now</a> */}
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
                        <h3 className="cs_fs_24 mb-1 mt-3">Best AC Repair in Discovery Gardens</h3>
                        <p>When it comes to <Link to="/ac-repair-dubai/"><b>AC repair</b></Link>  in Discovery Gardens, it’s essential to hire a professional and trustworthy <Link to="/ac-maintenance-dubai/"><b>AC technician</b></Link> for your home or office.</p>
                        <p>We specialize in air conditioner (AC) repair, service, and maintenance in Dubai. The FAJ team is dedicated to ensuring a comfortable temperature all year round.</p>
                    </div>

                    <div className="col-md-6 border-small-left">
                        <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}/img/indoor-ac-servicing.jpg`} alt="Post Image" />
                        <h3 className="cs_fs_24 mb-1 mt-3">Signs You Need An AC Service</h3>
                        <p>If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.</p>
                        <ul>
                            <li>Higher electricity bills / Loss of AC performance</li>
                            <li>Air is not blowing cold / Poor AC airflow, making noises</li>
                            <li>Drips from your air conditioner</li>
                        </ul>
                    </div>
                </div>

                <div className="appointment-col border-small-top pt-3">
                    <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.<b /> <b />For technical inspection / callout of <Link to="/ac-service-in-dubai/"><b>AC cleaning service</b></Link> , repair, or maintenance. Please click below. To book an appointment, you can call or reach us on WhatsApp at +971 50 746 4712.</p>
                    <div id="get-quote" className=" mt-3">
                        <div className="container d-flex justify-content-center align-items-center gap-3">
                            <WhatsappIconButton />
                            <CallNowButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* How much does it cost Premier AC Cleaning Service, AC Repair and AC Maintenance? */}
        <section className="section cs_py_48">
            <div className="container">
                <FAJACPrice />
            </div>
        </section>
        {/* Why is AC Maintenance Service Important in Dubai? */}
        <section className="section cs_py_48 bg-light-gray">
            <div className="container">
                <h3 className="cs_fs_30">Why is AC Maintenance Service Important in Dubai?</h3>
                <p>
                    Regular air conditioning (AC) maintenance service in Dubai is essential for optimal performance. FAJ offers comprehensive services to keep your system running efficiently.
                    With our proactive approach, you can feel confident that your AC is functioning at its best. If you need AC Repair near you, contact us.
                </p>

                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img className="blue-border" src={`${import.meta.env.BASE_URL}/img/indoor-ac-servicing.jpg`} alt="Post Image" />
                    </div>
                    <div className="col-md-6">
                        <ul className="mb-0">
                            <li> <strong> Extreme Weather:</strong> Experiences high temperatures over 40°C (104°F) in summer. Regular maintenance keeps air conditioning systems efficient during these conditions.</li>
                            <li> <strong> Energy Efficiency:</strong> A well-maintained AC unit operates more efficiently, using less energy and lowering both electricity bills. </li>
                            <li> <strong> Longevity of Equipment:</strong>  Regular maintenance can extend your air conditioning system’s lifespan, reducing the need for costly repairs and replacements, ultimately saving you money.</li>
                            <li> <strong>Improved Air Quality:</strong> Regular maintenance keeps dust and allergens from building up, ensuring cleaner air.</li>
                            <li> <strong>Prevention of Breakdowns:</strong> Proactive maintenance catches minor issues early, preventing costly repairs and unexpected AC failures</li>
                            <li> <strong> Enhanced Comfort:</strong> Regular servicing of your AC system ensures consistent temperatures, which is vital for comfort in hot climates. In a city like Dubai, investing in AC maintenance is essential for both comfort and efficiency in daily life.</li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Common Signs Your AC May Need Maintenanc */}
        <section className="section cs_py_48">
            <div className="container">
                <h3 className="text-center">Common AC Problems That May Require Maintenance
                </h3>
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

        {/* A Quick Tour to Your AC Problems and Fixing*/}
        <QuickGuide />

        <BenefitAcMaintenance />

        {/*Why Choose F A J Technical Services L.L.C? */}
        <section className="section cs_py_48 ">
            <div className="container">
                <h3 className="cs_fs_30">Why Choose F A J Technical Services L.L.C?</h3>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h4 className="cs_fs_24">We provide quick, efficient service and peace of mind</h4>
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
                        <img className="blue-border" src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance-in-Dubai.jpeg`} alt="Post Image" />
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
                            <Link to="/lg-ac-repair-in-dubai/"><b>LG Air Conditioner Service</b></Link>: FAJ offers reliable LG AC repair, and services in Dubai. With professionals, who are experts in split, VRF and central air conditioning units.
                        </p>
                        <p className="mb-0">
                            <Link to="/samsung-ac-repair-in-dubai/"><b>Samsung Air Conditioner Repair and Service</b></Link>: Based in Dubai, FAJ is your go-to destination for Samsung AC repair in Dubai. Specializing in Samsung air conditioner systems, we offer comprehensive services ranging from repairs to maintenance.
                        </p>
                        <p className="mb-0">
                            <Link to="/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/"><b>York AC Service and Repair</b></Link>: The York AC service ensures you don’t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritized.
                        </p>
                        <p className="mb-0">
                            <Link to="/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/"><b>Daikin Air Conditioner Maintenance</b></Link>: Trust our skilled team to efficiently resolve all issues with your Daikin air conditioner and restore its functionality.
                        </p>
                        <p className="mb-0">
                            <Link to="/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/"><b>Trane HVAC Repair</b></Link>: With extensive knowledge of Trane air conditioning systems, we provide effective repairs to keep your unit running smoothly.
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
                            <Link to="/mitsubishi-ac-repair-in-dubai/"><b>Mitsubishi Air Conditioner Service and Repair</b></Link>: Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai! Our expert Mitsubishi AC services ensure your AC stays cool and efficient, providing comfort and peace of mind.
                        </p>
                        <br />

                        <p className="mb-0">
                            <Link to="/sanyo-ac-repair-in-dubai-sanyo-ac-maintenance-in-dubai-sanyo-ac-fix-in-dubai-sanyo-ac-service-in-dubai-sanyo-air-condition-repair-in-dubai-sanyo-air-condition-maintenance-in-dubai-sanyo-air-condition/">Sanyo AC Service Dubai</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/rheem-ac-maintenance-in-dubai/">Rheem AC Repair</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/">SKM AC Service Dubai</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/">Daewoo AC Maintenance Dubai</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="#">Carrier AC Service</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/midea-ac-installation-maintenance-repair-fix-service-in-dubai/">Midea Air Conditioner Service Near Me</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/"> Lennox Air Conditioning maintenance</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/goodman-ac-repair-in-dubai-goodman-ac-maintenance-in-dubai-goodman-ac-fix-in-dubai-goodman-ac-service-in-dubai-goodman-air-condition-repair-in-dubai-goodman-air-condition-maintenance-in-dubai-goodman/">Goodman AC Repair Dubai </Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/">Coleman AC Services</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/westpoint-ac-repair-in-dubai-westpoint-ac-maintenance-in-dubai-westpoint-ac-fix-in-dubai-westpoint-ac-service-in-dubai-west-point-air-condition-repair-in-dubai-west-point-air-condition-maintenance-in/">Westpoint Service</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/aftron-ac-repair-maintenance-service-in-dubai-2/">Aftron AC maintenance Service Near Me</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/crafft-ac-repair-in-dubai-crafft-ac-maintenance-in-dubai-crafft-ac-fix-in-dubai-crafft-ac-service-in-dubai-crafft-air-condition-repair-in-dubai-crafft-air-condition-maintenance-in-dubai-crafft-air-con/">Crafft AC Service</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/">Bryant AC Repair Dubai</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/ruud-ac-repair-in-dubai-ruud-ac-maintenance-in-dubai-ruud-ac-fix-in-dubai-ruud-ac-service-in-dubai-ruud-air-condition-repair-in-dubai-ruud-air-condition-maintenance-in-dubai-ruud-air-condition-mainten/">Ruud Air Conditioner Service</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/">McQuay Air Conditioning Service</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/">Blue Star</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/supra-ac-repair-in-dubai-supra-ac-maintenance-in-dubai-supra-ac-fix-in-dubai-supra-ac-service-in-dubai-supra-air-condition-repair-in-dubai-supra-air-condition-maintenance-in-dubai-supra-air-condition/">Supra AC Service</Link>
                            <span>&nbsp;-&nbsp;</span>

                            <Link to="/toshiba-ac-repair-in-dubai-toshiba-ac-maintenance-in-dubai-toshiba-ac-fix-in-dubai-toshiba-ac-service-in-dubai-toshiba-air-condition-repair-in-dubai-toshiba-air-condition-maintenance-in-dubai-toshiba/">Toshiba AC Service</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/">Whirlpool AC Maintenance</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/super-general-ac-repair-in-dubai-super-general-ac-maintenance-in-dubai-super-general-ac-fix-in-dubai-super-general-ac-service-in-dubai-super-general-air-condition-repair-in-dubai-super-general-air-con/">Super General AC Repair</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi/">Hitachi AC Service</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/">O General Air Conditioning Service</Link>
                            <span>&nbsp;-&nbsp;</span>
                            <Link to="/cooline-ac-repair-in-dubai-cooline-ac-maintenance-in-dubai-cooline-ac-fix-in-dubai-cooline-ac-service-in-dubai-cooline-air-condition-repair-in-dubai-cooline-air-condition-maintenance-in-dubai-cooline/">Cooline Air Conditioner Repair Near Me</Link>
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
        {/* Practical Tips to Improve Energy Efficiency */}
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

        {/* cooling */}
        <section className="section cs_py_48">
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

export default AcRepairInDiscoveryGardensDetail
