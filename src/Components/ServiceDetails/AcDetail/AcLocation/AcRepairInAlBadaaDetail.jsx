import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../../../Data/AcData/AcFaqs/AcLocation/AcRepairInAlBadaa.json';
import { HelmetProvider, Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import 'swiper/swiper-bundle.css';
import testimonial_data from '../../../../Data/AcData/AcTestimonial/AcServiceTestimonials.json';
import loadBackgroudImages from "../../../Common/loadBackgroudImages";
import HeaderForm from "../../../Headeform/HeaderForm";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import LocationKeyword from "./LocationKeyword";
import Testimonial1 from "../../../Testimonial/Testimonial1";

const AcRepairInAlBadaaDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

    // For SEO
    const metatitle = String(titleSeo || "Best AC Service Al Badaa - Air Conditioning Repair Near Me");
    const metadescription = String(description || "Call an 043300002 AC Services in Al Badaa Dubai. FAJ here help in split & central AC (Air Conditioner) cleaning service near me Dubai Fixing aircon");
    const metaAuthor = String(Author || "Faj Technical Services");
    const metaKeyword = String(Keyword || "AC Service Al Badaa, AC Repair Al Badaa, Air Conditioning Service Al Badaa, Air Conditioner Repair Al Badaa, Split AC Service Al Badaa, Central AC Service Al Badaa, Aircon Cleaning Al Badaa, Air Conditioner Maintenance Al Badaa");
    const metaURL = String(URL || "https://www.fajservices.ae/ac-services-in-al-badaa/").replace(/\/?$/, '/');
    const metaImage = "https://www.fajservices.ae/img/ac%20filter.avif";
    subtitle = "Testimonial"
    title = "What our clients say About Us"
    reviewsbg = "img/testimonialbg.jpg"
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
                        <h1 className="cs_fs_30">AC Service in Al Badaa</h1>
                       
                        <p>Good-bye to sticky summer days, stuffy nights, and allergens. Welcome to year-round comfort, refreshing clean air, and improved sleep. Cool, right?<br />
                            <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"><b>F A J Technical Services L.L.C</b></a> has been in operation since 2010. Our dedicated facilities team has extensive experience in <a href="https://www.youtube.com/watch?v=pkO_jobGdBo"><b>AC service</b></a>, AC maintenance, AC repair near me Al Badaa, and AC installation of various residential and commercial air conditioning units in Dubai and Sharjah.</p>

                        <div id="get-quote" className=" mt-3">
                            <div className="container d-flex justify-content-center align-items-center gap-3">
                                <WhatsappIconButton />
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </section>

                {/* Experts AC Service and Maintenance */}
                <section className="section cs_py_30 bg-light-gray">
                    <div className="container">
                        <div className="row gx-md-5">
                            <div className="col-md-6">
                                <h2 className="cs_fs_24 mb-1">Best AC Repair in Al Badaa</h2>
                                <p className="mb-2">When it comes to <Link to="/ac-repair-dubai/"><b>AC repair</b></Link> near me in Al Badaa, it’s essential to hire a professional and trustworthy <Link to="/ac-maintenance-dubai/"><b>AC technician</b></Link> near me for your home AC or office AC.</p>

                                <p>We specialise in air conditioner (AC) repair, service, and maintenance near me in Al Badaa Dubai. The <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ team</a> is dedicated to ensuring a comfortable temperature all year round.</p>
                                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top">Signs You Need An AC Service</h2>
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
                                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/Experts-AC-Service-and-Maintenance.avif`} alt="AC Repair in Al Badaa" />

                            </div>
                        </div>

                        <div className="appointment-col border-small-top pt-3">
                            <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.<b /> <b />For technical inspection / callout of <Link to="/ac-service-in-dubai/"><b>AC cleaning service</b></Link>, air conditioning repair, or AC maintenance near me in Al Badaa. To book an appointment, you can call or reach us on WhatsApp at +971 50 746 4712.</p>
                            <div id="get-quote" className=" mt-3">
                                <div className="container d-flex justify-content-center align-items-center gap-3">
                                    <WhatsappIconButton />
                                    <CallNowButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AC Price Section */}
                <FAJACPrice></FAJACPrice>

                {/* Why is AC Maintenance Service Important in Dubai? */}
                <section className="section cs_py_30 bg-light-gray">
                    <div className="container">
                        <h2 className="cs_fs_30">Why is AC Maintenance Service Important in Al Badaa?</h2>
                        <p>
                            Regular air conditioner (AC) maintenance service in Al Badaa is essential for optimal performance. FAJ offers comprehensive services to keep your system running efficiently. With our proactive approach, you can feel confident that AC is functioning at its best. If you need <Link to="/ac-maintenance-dubai/">AC maintenance</Link> near you in Al Badaa, contact us.
                        </p>

                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/What-is-covered-in-an-AC-Maintenance-Contract.avif`} alt="Air Conditioning Service in Al Badaa" />
                            </div>
                            <div className="col-md-6">
                                <ul className="mb-0">
                                    <li> <strong> Extreme Weather: </strong> Experiences high temperatures over 40°C (104°F) in summer. Regular maintenance keeps air conditioner systems efficient during these conditions.</li>

                                    <li> <strong> Energy Efficiency: </strong> A well-maintained AC unit operates more efficiently, using less energy and lowering both electricity bills.</li>

                                    <li> <strong> Longevity of Equipment: </strong> Regular maintenance can extend your air conditioning unit’s lifespan, reducing the need for costly repairs and replacements, ultimately saving you money.</li>
                                    <li> <strong> Improved Air Quality: </strong> Regular maintenance keeps dust and allergens from building up, ensuring cleaner air.</li>
                                    <li> <strong> Enhanced Comfort: </strong> Regular AC cleaning service in Al Badaa Dubai ensures comfort, efficiency, and consistent cooling daily.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common AC Problems That May Require Maintenance */}
                <section className="section cs_py_30">
                    <div className="container">
                        <h2 className="text-center">Benefits Of Regular AC Service and Maintenance in Al Badaa</h2>
                        <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Weak Airflow</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">If you notice <a href="https://www.youtube.com/watch?v=qnByeIsc3lY"><b>reduced airflow</b></a> coming from your vents, it could indicate a problem with your A/C system, such as a clogged filter or malfunctioning fan.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Warm Air</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">If your aircon blows warm or room temperature air instead of cold, it could indicate compressor, refrigerant, or ductwork issues.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Strange Noises</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Unusual sounds like grinding, squealing, or banging coming from your air conditioner unit can indicate mechanical problems that require attention.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Foul Odors</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Musty or foul odors emanating from the vents could suggest mold or mildew growth within the system, which needs to be addressed quickly.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Frequent Cycling</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">It may signal difficulty maintaining desired temperatures due to issues like dirty filters, low refrigerant levels, or a faulty thermostat.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">High Humidity Levels</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">An air conditioner that fails to adequately reduce indoor humidity levels may indicate issues with its cooling capacity or improper operation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Leaking Water</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Water pooling around AC or dripping from vents could indicate blocked condensate drain, frozen coils, or other issues.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Increased Energy Bills</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">High energy bills without increase in usage could indicate the inefficiency of your AC due to dirty filters, duct leaks, or other problems.</p>
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

                {/* HERE ARE THE */}
                <section className="section cs_py_30 bg-light-gray">
                    <div className="container">
                        <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR AIR CONDITIONING SYSTEMS</h2>
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
                                <p className='mb-0'>We specialise in all types and brands of air conditioning systems, HVAC and FAHU.</p>
                                <p className='mb-0'><strong>Our services include:</strong></p>
                                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-1">

                                    <li>
                                        <strong>Installation:</strong> Expert installation of various types and brands of central AC cooling systems, ensuring optimal performance and efficiency.
                                    </li>

                                    <li>
                                        <strong>Diagnostics:</strong> Thorough fault finding to diagnose issues effectively. We provide eligibility assessments and detailed quotations to address any concerns with your system.
                                    </li>

                                    <li>
                                        <strong>Repair Service:</strong> Efficient repair services for all air conditioner components, ensuring quick resolution of any issues, such as leaks, electrical failures, and system malfunctions. Feel free to reach out if you need specific services or have any questions!
                                    </li>

                                    <li>
                                        <strong>Annual Maintenance Contract:</strong> This contract outlines the terms and services covered for the air conditioner annual maintenance contract in Al Badaa. Regular maintenance is essential for optimal performance, efficiency, and longevity of your air conditioning system.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Benefits Of Regular AC Service*/}
                <section className="section cs_py_30 ac_benifit_blue">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <h2 className="cs_fs_30 text-light">Benefits Of Regular AC Service and Maintenance in Al Badaa</h2>

                                <div className="row mt-4 gx-4 gy-4">
                                    <div className="col-md-4 mb-2">
                                        <div className="d-flex flex-column align-items-center px-2">
                                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                                <img src={`${import.meta.env.BASE_URL}img/icons/cooling1.jpg`} alt="Cooling Efficiency" className="img-fluid rounded-circle border border-4 border-info" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 fs-6 text-white">COOLING EFFICIENCY</h3>
                                            <p className="small">We carry out a complete assessment of the cooling efficiency using a temperature gun.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-2">
                                        <div className="d-flex flex-column align-items-center px-2">
                                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                                <img src={`${import.meta.env.BASE_URL}img/icons/disinfection.jpg`} alt="Disinfect Components" className="img-fluid rounded-circle border border-4 border-warning" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 fs-6 text-white">DISINFECT COMPONENTS</h3>
                                            <p className="small">All hardware components are tested and disinfected, including filters and vents.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-2">
                                        <div className="d-flex flex-column align-items-center px-2">
                                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                                <img src={`${import.meta.env.BASE_URL}img/icons/fan.jpg`} alt="Fan Assessment" className="img-fluid rounded-circle border border-4 border-success" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 fs-6 text-white">FAN ASSESSMENT</h3>
                                            <p className="small">We ensure the fan works correctly with no blockages in the evaporator coil.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-2">
                                        <div className="d-flex flex-column align-items-center px-2">
                                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                                <img src={`${import.meta.env.BASE_URL}img/icons/thermo.jpg`} alt="Thermostat Check" className="img-fluid rounded-circle border border-4 border-primary" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 fs-6 text-white">THERMOSTAT CHECK</h3>
                                            <p className="small">We use a laser temperature gauge to ensure thermostats operate correctly.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-2">
                                        <div className="d-flex flex-column align-items-center px-2">
                                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                                <img src={`${import.meta.env.BASE_URL}img/icons/airflow.jpg`} alt="Airflow Balance" className="img-fluid rounded-circle border border-4 border-danger" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 fs-6 text-white">AIRFLOW BALANCE</h3>
                                            <p className="small">We ensure you get optimal air flow around each room as needed.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-2">
                                        <div className="d-flex flex-column align-items-center px-2">
                                            <div className="mb-3" style={{ width: "80px", height: "80px" }}>
                                                <img src={`${import.meta.env.BASE_URL}img/icons/customer.jpg`} alt="Customer Feedback" className="img-fluid rounded-circle border border-4 border-secondary" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 fs-6 text-white">CUSTOMER FEEDBACK</h3>
                                            <p className="small">Our team provides vital feedback on your AC&apos;s health and any needed air con repair.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mb-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Why choose us AC */}
                <section className="section cs_py_30">
                    <div className="container container-md container-sm">
                        <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>
                        <div className="usps align-items-center	">
                            {/* <!-- First Column --> */}
                            <div className="uspcol col-1">
                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`} alt="Fast, Reliable Service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Reliable, Priority, and Quick</h3>
                                        <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day AC repair or next-day AC service visits ensure that your needs are met quickly. </p>
                                    </div>
                                </div>

                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`} alt="We Are Experts" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Feeling Of Calm</h3>
                                        <p>With <a href="/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                                        </p>
                                    </div>
                                </div>

                                <div className="uspitem mb-0">
                                    <div className="uspicon">
                                        <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`} alt="FAJ icon service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">You Are in Control</h3>
                                        <p>Choose a day and time for your AC repair near me, Al Badaa Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* <!-- Delimit Section --> */}
                            <div className="uspdelimit col-2 d-none d-xl-block">

                                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/ACServicescomponent.avif`} alt="Ac Maintenance Services" />
                            </div>

                            {/* <!-- Second Column --> */}
                            <div className="uspcol col-3">
                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`} alt="FAJ icon service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">We Are Experts</h3>
                                        <p>We are experts in AC service in Al Badaa. This is why most major brands trust us to handle their service and maintenance needs.</p>
                                    </div>
                                </div>
                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`} alt="FAJ icon service" />

                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Great Value</h3>
                                        <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

                                    </div>
                                </div>
                                <div className="uspitem mb-0">
                                    <div className="uspicon">
                                        <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`} alt="FAJ icon service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Trustworthy</h3>
                                        <p>Our <a href="https://www.facebook.com/ACRepairUAE"><b>skilled AC technicians</b></a> are highly trained, and we provide excellent service for a variety of major AC brands efficiently.
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/* <!-- Delimit mobile --> */}
                        <div className="col-12 uspdelimit w-100 text-center d-block d-none-1199 Xd-xl-none">
                            <img className="blue-border-2 w-100" src={`${import.meta.env.BASE_URL}img/ACServicescomponent.avif`} alt="Ac Maintenance Services" />
                        </div>
                    </div>
                </section>

                <section className="section cs_py_30 bg-light-gray">
                    <div className="container">

                        <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY AC REPAIR SERVICE</h3>

                        <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 195 to 320 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>

                        <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
                            <b>We provide 2-month service warranty</b><br />
                            and <small>3-month parts warranty</small> as standard.</p>

                        <h3>We specialise in air conditioning services for the following brands</h3>

                        <ul className="mb-3">
                            <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/lg-ac-repair-in-dubai/">LG Air Conditioner Service</a>:</strong> FAJ offers reliable LG AC repair and services near me in Al Badaa. With professionals who are experts in split, vrf, and central air conditioning units. Get reliable and fast AC service near you, including AC repair and maintenance in Al Badaa Dubai.</li>

                            <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/samsung-ac-repair-in-dubai/">Samsung Air Conditioner Repair and Service</a>:</strong> Based in Dubai, FAJ is your go-to destination for Samsung AC repair in Dubai Al Badaa. Specialising in Samsung air conditioning repair service near me, we offer comprehensive air conditioning service ranging from AC fixing to AC cleaning service and AC maintenance in Al Badaa Dubai.</li>

                            <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/">York AC Service and Repair</a>:</strong> The York AC repair and service in Al Badaa Dubai, ensures you don’t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritised, providing air conditioning service near me, Al Badaa, AC cleaning service, and AC fixing.</li>

                            <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/">Daikin Air Conditioner Maintenance</a>:</strong> Count on our experienced team to promptly and effectively address any challenges you may encounter with your Daikin air conditioning unit. We specialise in AC cleaning service and AC repairing in Al Badaa Dubai, to ensure it operates at optimal functionality, providing you with a cool and comfortable environment when you need it most.</li>

                            <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/">Trane HVAC Repair</a>:</strong> With in-depth expertise in the repair of Trane air conditioning systems, we offer comprehensive Al Badaa AC repair near me and AC cleaning services designed to ensure your unit operates at peak efficiency. Our specialized Trane AC maintenance and repair service in Al Badaa Dubai, is conveniently available in your area, providing timely and effective solutions to keep your air conditioning system running smoothly and reliably. Whether you need routine home air conditioner repair near me or office AC service and maintenance in Al Badaa or urgent repair, we are here to help you maintain a comfortable environment in your home or business.</li>

                            <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/">Panasonic AC Service and Repair</a>:</strong> No matter the issue with your Panasonic air conditioner, our skilled AC technicians in Al Badaa Dubai and Sharjah can quickly diagnose and fix it. We offer reliable air conditioning services near me in Al Badaa Dubai, and AC repair right in your Al Badaa area, ensuring your system runs smoothly again. </li>

                            <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/gree-ac-repair-in-dubai/">Gree AC Service and Maintenance</a>:</strong> Is your air conditioning unit not functioning properly, or are you seeing a Gree AC error displayed on the screen? You don’t have to struggle with uncomfortable temperatures or stale air any longer. At FAJ, we specialise in quickly restoring your Gree air conditioning to optimal performance. Our reliable air conditioning repair and maintenance services ensure that your system operates efficiently and effectively, preventing any further damage and discomfort. Whether you need emergency air conditioning repair near me in Al Badaa, air conditioning service near me and routine ac maintenance services, or comprehensive air conditioning cleaning services in Dubai, we’ve got you covered. Enjoy a refreshing and cool environment once again with our professional solutions!</li>

                            <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/">O General AC Service and Repair</a>:</strong> For air conditioning cleaning services in Dubai, specialized help is crucial for effectively managing aircon issues. Our company provides hassle-free villa AC repair / office AC cleaning service or home AC maintenance services in Al Badaa, conveniently available in both Dubai and Sharjah. Trust us to keep your home comfortable all year round.</li>

                            <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/mitsubishi-ac-repair-in-dubai/">Mitsubishi Air Conditioner Service and Repair</a>:</strong> Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai! Our expert Mitsubishi Air Conditioning cleaning service and AC repairing ensure your AC stays cool and efficient, providing comfort and peace of mind. Expert Air conditioning cleaning service near me in Al Badaa Dubai and Sharjah, aircon fixing and ac maintenance service in Al Badaa Dubai. </li>

                            <li><strong>Carrier AC Repair and Service in Dubai</strong>: We understand how essential Carrier air conditioning is for your home or business. FAJ provides fast and reliable Carrier air conditioner maintenance services in Al Badaa Dubai, that are both efficient and dependable. Typically, regular cleaning service of your Carrier VRF (Variable Refrigerant Flow), central, split, package unit, or cassette type units in Al Badaa Dubai and Sharjah is sufficient to keep your system running smoothly. However, if your Carrier air conditioning system experiences a breakdown, fault, or malfunction, it can negatively affect your indoor environment.</li>
                        </ul>

                        <LocationKeyword />

                        <div id="get-quote" className=" mt-3">
                            <div className="container d-flex justify-content-center align-items-center gap-3">
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
                        <a
                            href="https://www.fajservices.ae/dist/files/Practical%20Tips%20to%20Improve%20Energy%20Efficiency%20of%20Your%20AC%20Infographic.pdf"
                            className="btn-green-yellow"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Click Here to Save on Energy Bills
                        </a>

                    </div>
                </section>

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

                                    <img className="" src={`${import.meta.env.BASE_URL}img/benafit-acimg.jpg`} alt="Air Con Maintenance & AC Installation in Al Badaa" />
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
                <Testimonial1
          subtitle="What Our Clients Say"
          title="Customer <span>Reviews</span>"
          bgImg="img/testimonialbg.jpg"
          testimonialData={testimonial_data}
          sectionId="home-testimonials"
        />

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
    )
}

export default AcRepairInAlBadaaDetail
