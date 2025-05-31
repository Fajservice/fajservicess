import { useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
import data from '../../../../Data/AppliancesData/AppliancesFaqs/AppliancesFaqs.json';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt.jsx';
import CallNowButton from '../../../Buttons/CallNowButton.jsx';
import GetQuoteButton from "../../../Buttons/GetQuoteButton.jsx";
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton.jsx";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract.jsx";
// import AppliancesTechnicalInspectionFee from "../../ApplianceCommons/AppliancesTechnicalInspectionFee.jsx";
import AppliancesAppointmentCol from "../../../ApplianceCommons/AppliancesAppointmentCol.jsx";

import Slider from "react-slick";
import testimonial_data from '../../../../Data/HomeAppData/Testmonials/FreestandingHomeAppliancesRepairServiceTestimonials.json';
import brandsLogo_data from '../../../../Data/AppliancesBrandsLogo.json';
import loadBackgroudImages from "../../../Common/loadBackgroudImages.jsx";
import parse from 'html-react-parser';
import HeaderForm from "../../../Headeform/HeaderForm.jsx";
import ApplianceSpecialise from "./Appliance specialise/ApplianceSpecialise.jsx";

const ApplianceServiceInJumeriahHeightsDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
    // For SEO
    const metatitle = String(titleSeo || "Appliances Services in Jumeirah Heights - Fridge Repair");
    const metadescription = String(description || "Get appliance services in Jumeirah Heights. FAJ offers fridge repair near me in Dubai. Call 043300002 for dishwasher, oven, washing machine.");
    const metaAuthor = String(Author || "Faj Technical Services");
    const metaKeyword = String(Keyword || "Repair Services in Jumeirah Heights ");
    const metaURL = String(URL || "https://www.fajservices.ae/appliances-services-in-jumeirah-heights");

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

    const settingBrands = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        arrows: false,

        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
                </Helmet>
            </HelmetProvider>
            <HeaderForm />

            <div className="cs_service_details">

                <section className="section cs_py_30">
                    <div className="container">
                        <h1 className="cs_fs_30">Home Appliance Service in Jumerirah Heights</h1>
                        {/* <h2 className="cs_fs_30">CHOOSE APPLIANCE SERVICE CENTER FOR SAME-DAY REPAIRS IN DUBAI</h2> */}
                        <p>
                            Since 2010, we have been providing reliable appliance repair services. We understand that appliances can break down unexpectedly, which is why we offer quality and affordable solutions. Our trained technicians are available throughout Dubai, Sharjah, and Abu Dhabi to repair large appliances at your location.
                        </p>

                        <div id="get-quote" className=" mt-3">
                            <div className="container d-flex justify-content-center align-items-center gap-3">
                                <WhatsappIconButton />
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </section>

                {/* Best Home Appliance Service Center */}
                <section className="section cs_py_30 bg-light-gray">
                    <div className="container">
                        <div className="row gx-md-5">
                            <div className="col-md-6">
                                <h3 className="cs_fs_24 mb-1">Best Home Appliance Service in Dubai</h3>

                                <p className="mb-2">
                                    If you need appliance repair, FAJ is your best choice for fast and affordable service in Jumeirah Heights Dubai and Sharjah.
                                    <br /> Our expert team is ready to tackle any issue, whether it’s a washing machine that won’t drain, refrigerator that's not working, an oven that isn’t heating, or a dishwasher that won’t switch on.
                                    <br /> We're nearby and can get your appliances fixed quickly and efficiently.
                                </p>

                                <h3 className="cs_fs_20 mb-1 pt-3 border-small-top">Fast and Reliable Appliances Service
                                </h3>
                                <p className="mb-2">At <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876"><b>FAJ Technical Services LLC</b></a>, we understand that appliance breakdowns never happen at a convenient time. That’s why our trained and qualified technicians are here to provide you with reliable appliance repair services. With our help, you can avoid the expense of purchasing a new appliance and get your appliance up and running again before you even have a chance to stress about it.</p>
                            </div>

                            <div className="col-md-6 ">
                                <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif`}  loading="lazy" alt="Post Image" />
                            </div>
                        </div>
                        <AppliancesAppointmentCol></AppliancesAppointmentCol>
                    </div>
                </section>

                {/* The Most Common Problems with Home Appliances */}
                <section className="section cs_py_30">
                    <div className="container">
                        <h3 className="text-center">The Most Common Problems with Home Appliances   </h3>
                        <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Refrigerator Problem</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Most fridge malfunctions are related to cooling issues, including problems with the defrost system, fan motor, compressor, or coils.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dishwashers Problem</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">The most issues with dishwashers are bad cleaning and drying. Common water leaks and drainage. Some electrical issues or PCB failures.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Washing Machine Problem
                                        </h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">A common issue with washing machines is drainage problems, leaks, and PCB faulty. Also, broken belt or faulty door switch or drum from spinning.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Tumble Dryer Problem</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Dryers can stop the drum from spinning and often make noise without drying clothes properly. Common issues are a broken heating element or control board.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Stove Problem</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Uneven heating or flame issues, such as a broken burner element, bad switch, or electric gas, are the most common problems with stoves.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Ovens Problems</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Most ovens have common problems like not heating properly, burners not igniting, ignition issues on gas models, broken knobs, and faulty controllers or valves.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Freezer Problem</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Common issues with a freezer include water leaks, no ice, a malfunctioning ice maker, a malfunctioning PCB, motor, or compressor, and less cooling.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Machine Problem</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Whether they are drip or single-serve coffee makers, there are a few reasons why water flow in coffee makers is often slow or nonexistent.</p>
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

                {/* Why is Appliance Maintenance Service Important in Dubai? */}
                <section className="section cs_py_30 bg-light-gray">
                    <div className="container">
                        <h3 className="cs_fs_30">Why is Appliance Maintenance Service Important in Dubai?</h3>
                        <p className="">
                            Proper appliance maintenance is essential for extending lifespan and enhancing efficiency, especially in Dubai’s climate. Here are the main benefits:
                        </p>

                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img className="blue-border" src={`${import.meta.env.BASE_URL}img/dishwasher-repair-service.avif`}  loading="lazy" alt="Post Image" />
                            </div>
                            <div className="col-md-6">
                                <ul className="mb-0">
                                    <li> <strong>  Extended Lifespan: </strong> Regular maintenance helps appliances last longer, saving on replacement costs.</li>
                                    <li> <strong>  Improved Efficiency: </strong> Well-maintained appliances use less energy, leading to lower utility bills, which is essential in Dubai. </li>
                                    <li> <strong>  Preventing Costly Repair: </strong> Catching minor issues early prevents them from escalating into expensive repair. </li>
                                    <li> <strong>  Preserving Appliance Integrity: </strong> Regular cleaning prevents dust buildup that affects performance. </li>
                                    <li> <strong>  Early Problem Detection: </strong> Routine checks help identify potential issues before they become serious.</li>
                                    <li> <strong>  Cost-Effective: </strong> Maintenance costs are lower than early replacements or major repair. Investing in appliance care ensures safety and efficiency and is a smart economic choice in Dubai.</li>
                                    <li> <strong>  Energy Efficiency: </strong> Regularly maintaining your appliances, can improve their efficiency and save you money.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Benefits Of appliances Service Dubai */}
                <section className="section cs_py_30 appliances-benifit-sec">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h3 className="cs_fs_30 mb-0">The Benefits Of appliances Service Dubai
                            </h3>
                            <div className="row gx-3 gy-5 mt-0">
                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.png`}  loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h4 className="text-uppercase mb-2 cs_fs_18">Ensuring Safety</h4>
                                            <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={`${import.meta.env.BASE_URL}img/icons/Optimal-Performance.png`}  loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h4 className="text-uppercase mb-2 cs_fs_18">Optimal Performance
                                            </h4>
                                            <p className="small">Regular maintenance helps your appliances run smoothly and efficiently, delivering the best results every time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={`${import.meta.env.BASE_URL}img/icons/Lower-Energy-Bills.png`}  loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h4 className="text-uppercase mb-2 cs_fs_18">Lower Energy Bills</h4>
                                            <p className="small">Energy efficient appliances translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={`${import.meta.env.BASE_URL}img/icons/Saving-Money-on-Repair.png`}  loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h4 className="text-uppercase mb-2 cs_fs_18">Saving Money on Repair</h4>
                                            <p className="small">Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={`${import.meta.env.BASE_URL}img/icons/Extending-Appliance-Lifespan.png`}  loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h4 className="text-uppercase mb-2 cs_fs_18">Extending Appliance Lifespan</h4>
                                            <p className="small">Proper care and timely servicing can significantly increase life of your home appliances, delaying the need for replacements.</p>

                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={`${import.meta.env.BASE_URL}img/icons/Peace-of-Mind.png`}  loading="lazy" alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h4 className="text-uppercase mb-2 cs_fs_18">Peace of Mind
                                            </h4>
                                            <p className="small">Knowing your appliances are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HERE ARE THE SERVICES WE OFFER FOR HOME APPLIANCES */}
                <section className="section cs_py_30 bg-light-gray">
                    <div className="container">
                        <h3 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR HOME APPLIANCES</h3>

                        <div className="row align-items-center">
                            <div className="col-xl-6">
                                <p className='mb-0'>We specialize in all types and brands of home appliances, including built-in units.</p>
                                <p className='mb-0'><strong>Our services include:</strong></p>
                                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                                    <li> <strong>  Installation: </strong> Expert installation of various types and brands of home appliances, ensuring optimal performance and efficiency. </li>
                                    <li> <strong> Diagnostics: </strong> Comprehensive fault-finding services to effectively diagnose issues. We provide eligibility assessments and detailed quotations to address any concerns with your system. </li>
                                    <li> <strong> Repair Service: </strong> Efficient repair services for all appliance components, ensuring a quick resolution to issues such as leaks, electrical failures, and system malfunctions. Feel free to reach out if you need specific services or have any questions! </li>
                                    <li> <strong> Annual Maintenance Contract: </strong> This contract outlines the terms and services covered for
                                        the annual maintenance of your appliances. </li>
                                    <p className="mb-0">
                                        <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for optimal performance, efficiency, and longevity of your home appliances.
                                    </p>
                                </ul>
                            </div>
                            <div className="col-xl-6">
                                <iframe
                                    className="bordered-img blue-border"
                                    width="100%"
                                    height="350"
                                    src="https://www.youtube.com/embed/45IUOnKHjKw?si=2x6Q4RPxVZUtOVKy"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section >

                {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
                <section className="section cs_py_30">
                    <div className="container container-md container-sm">
                        <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>

                        <div className="usps align-items-center	">
                            {/* <!-- First Column --> */}
                            <div className="uspcol col-1">
                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`}  loading="lazy" alt="Fast, Reliable Service" />

                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Reliable, Priority, and Quick</h3>
                                        <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                                    </div>
                                </div>

                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`}  loading="lazy" alt="We Are Experts" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Feeling Of Calm</h3>
                                        <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.</p>
                                    </div>
                                </div>


                                <div className="uspitem mb-0">
                                    <div className="uspicon">
                                        <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`}  loading="lazy" alt="FAJ icon service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">You Are in Control</h3>
                                        <p>Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                                    </div>
                                </div>

                            </div>

                            {/* <!-- Delimit Section --> */}
                            <div className="uspdelimit col-2 d-none d-xl-block">
                                <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/fajteam-1.avif`}  loading="lazy" alt="FAJ icon service" />
                            </div>

                            {/* <!-- Second Column --> */}
                            <div className="uspcol col-3">
                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`}  loading="lazy" alt="FAJ icon service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">We Are Experts</h3>
                                        <p>We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                                    </div>
                                </div>
                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`}  loading="lazy" alt="FAJ icon service" />

                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Great Value</h3>
                                        <p>Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.</p>
                                    </div>
                                </div>
                                <div className="uspitem mb-0">
                                    <div className="uspicon">
                                        <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`}  loading="lazy" alt="FAJ icon service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Trustworthy</h3>
                                        <p>Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Delimit mobile --> */}
                            <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                                <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`}  loading="lazy" alt="FAJ icon service" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* We are specialise in Appliances services for the following brands */}
                <ApplianceSpecialise />

                {/* Brands section */}
                <section className="cs_slider cs_style_1 cs_slider_gap_30 cs_bg_filed position-relative cs_py_30">
                    <div className="container">

                        <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"
                            data-variable-width="0" data-xs-slides="1" data-sm-slides="1" data-md-slides="1" data-lg-slides="2"
                            data-add-slides="2" data-slides-per-view="responsive">
                            <div className="cs_slider_wrapper">
                                <Slider {...settingBrands}>
                                    {brandsLogo_data.map((item, index) => (
                                        <div key={index} className="cs_slide wow fadeInLeft">

                                            <div className="brandslogo-slide-container">
                                                <div className="brnadlogo">
                                                    <img className="w-100" src={`${import.meta.env.BASE_URL}${item.logo}`}  loading="lazy" alt="Avatar" />
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </Slider>

                            </div>
                        </div>
                    </div>
                    {/* <div className="cs_height_80 cs_height_lg_80"></div> */}
                </section>


                {/* Maintenance Contract */}
                <MaintenanceContract />
                {/* testimobial section */}
                <section className="cs_slider cs_style_1 cs_slider_gap_30 cs_bg_filed position-relative cs_py_30" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${reviewsbg})` }}>
                    {/* <div className="cs_height_80 cs_height_lg_80"></div> */}
                    <div className="container">
                        <div className="cs_section_heading cs_style_1 cs_mb_47 text-center">
                            <h3 className="cs_section_subtitle cs_fs_18 text-black cs_semibold text-uppercase cs_mb_12 wow fadeInDown">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                                </svg>{subtitle}<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9367 5.9528C12.1626 6.01733 12.3783 6.07787 12.7693 6.07787C13.5946 6.07787 14.4218 5.73787 15.0389 5.1208C15.8285 4.33093 16.1661 3.19973 15.9199 2.16827C15.9089 2.12215 15.8858 2.07981 15.8529 2.04563C15.82 2.01146 15.7786 1.98668 15.733 1.97387C15.6874 1.96077 15.6391 1.96016 15.5931 1.97213C15.5472 1.98409 15.5053 2.00818 15.4719 2.04187L14.8413 2.67253C14.6394 2.87413 14.3706 2.98533 14.0839 2.98533C13.7973 2.98533 13.5285 2.8744 13.3269 2.67253C13.1262 2.47155 13.0136 2.19918 13.0136 1.9152C13.0136 1.63122 13.1262 1.35885 13.3269 1.15787L13.9573 0.527466C13.9909 0.493964 14.015 0.452081 14.027 0.406152C14.039 0.360223 14.0385 0.311916 14.0256 0.266232C14.0127 0.220547 13.9878 0.179144 13.9535 0.146308C13.9192 0.113471 13.8768 0.0903949 13.8306 0.0794661C12.7991 -0.166934 11.6682 0.170933 10.8783 0.960533C10.1042 1.7344 9.71058 2.888 10.0463 4.06267L7.99858 6.11013L5.95218 4.06373C6.28712 2.89093 5.89565 1.73573 5.12018 0.960533C4.33058 0.170666 3.19938 -0.167467 2.16818 0.0794661C2.12214 0.0906185 2.07989 0.113812 2.04576 0.146671C2.01163 0.179529 1.98685 0.220871 1.97396 0.266459C1.96107 0.312048 1.96054 0.360243 1.97241 0.406108C1.98428 0.451972 2.00813 0.493855 2.04152 0.527466L2.67192 1.15787C2.87254 1.35885 2.98522 1.63122 2.98522 1.9152C2.98522 2.19918 2.87254 2.47155 2.67192 2.67253C2.47032 2.8744 2.20152 2.98533 1.91485 2.98533C1.62818 2.98533 1.35938 2.87413 1.15752 2.67253L0.527118 2.0416C0.493597 2.00804 0.451734 1.98404 0.405844 1.97205C0.359953 1.96007 0.311697 1.96054 0.26605 1.97342C0.220403 1.9863 0.179016 2.01112 0.146158 2.04532C0.113299 2.07952 0.0901572 2.12187 0.079118 2.168C-0.167015 3.19947 0.170585 4.33067 0.960185 5.12053C1.57778 5.73787 2.40552 6.07813 3.22952 6.07813C3.61965 6.07813 3.85512 6.012 4.06312 5.95227L6.10978 7.99867L4.06232 10.0461C2.89138 9.71227 1.73725 10.1013 0.960185 10.8781C0.170585 11.668 -0.167015 12.7992 0.079118 13.8307C0.0901342 13.8768 0.113271 13.9191 0.146136 13.9533C0.179001 13.9875 0.2204 14.0123 0.266051 14.0251C0.358851 14.0509 0.458851 14.0251 0.527118 13.9571L1.15778 13.3264C1.35886 13.1261 1.63114 13.0136 1.91498 13.0136C2.19883 13.0136 2.47111 13.1261 2.67218 13.3264C2.87405 13.5283 2.98498 13.7973 2.98498 14.0837C2.98498 14.3701 2.87378 14.6392 2.67218 14.8411L2.04178 15.4715C2.00815 15.505 1.98407 15.5469 1.97205 15.5928C1.96004 15.6387 1.96051 15.687 1.97343 15.7327C1.98634 15.7784 2.01123 15.8198 2.04552 15.8526C2.07981 15.8855 2.12225 15.9085 2.16845 15.9195C2.39138 15.9728 2.61912 15.9987 2.84685 15.9987C3.67272 15.9987 4.50178 15.6576 5.12072 15.0384C5.89485 14.2645 6.28845 13.1109 5.95272 11.9363L8.00045 9.8888L10.0469 11.9352C9.71192 13.108 10.1034 14.2632 10.8789 15.0384C11.4981 15.6573 12.3269 15.9987 13.1527 15.9987C13.3805 15.9987 13.6082 15.9728 13.8311 15.9195C13.8772 15.9083 13.9194 15.8851 13.9535 15.8523C13.9877 15.8194 14.0124 15.7781 14.0253 15.7325C14.0382 15.6869 14.0388 15.6387 14.0269 15.5928C14.015 15.547 13.9912 15.5051 13.9578 15.4715L13.3274 14.8411C13.1255 14.6392 13.0146 14.3701 13.0146 14.0837C13.0146 13.7973 13.1258 13.5283 13.3274 13.3264C13.5285 13.1261 13.8007 13.0136 14.0846 13.0136C14.3684 13.0136 14.6407 13.1261 14.8418 13.3264L15.4725 13.9571C15.506 13.9905 15.5479 14.0143 15.5938 14.0262C15.6396 14.0381 15.6878 14.0376 15.7334 14.0247C15.779 14.0119 15.8203 13.9871 15.8532 13.953C15.886 13.9189 15.9093 13.8767 15.9205 13.8307C16.1666 12.7992 15.829 11.668 15.0394 10.8781C14.2663 10.1053 13.1109 9.70933 11.9365 10.0464L9.88978 8L11.9373 5.95253L11.9367 5.9528ZM11.2557 1.33733C11.7741 0.819199 12.465 0.533066 13.1506 0.533066H13.1967L12.9498 0.780266C12.6463 1.08373 12.4791 1.4864 12.4791 1.91467C12.4791 2.34293 12.6463 2.7456 12.9498 3.04907C13.2533 3.35253 13.6551 3.51813 14.0842 3.51813C14.5133 3.51813 14.9159 3.35147 15.2186 3.04907L15.4655 2.80187C15.4786 3.50293 15.1917 4.21333 14.6618 4.7432C14.0042 5.4008 13.0666 5.68293 12.2095 5.4784C11.7917 5.38533 11.425 5.18373 11.1202 4.87867C10.8154 4.5736 10.6133 4.20693 10.5194 3.78507C10.3159 2.93253 10.5981 1.9944 11.2557 1.3368V1.33733ZM3.78578 5.48C2.93325 5.68373 1.99512 5.40133 1.33752 4.74373C0.807651 4.21387 0.520718 3.50347 0.533785 2.8024L0.780718 3.0496C1.08338 3.352 1.48632 3.51867 1.91512 3.51867C2.34392 3.51867 2.74712 3.352 3.04925 3.0496C3.35272 2.74613 3.51992 2.34347 3.51992 1.9152C3.51992 1.48693 3.35272 1.08427 3.04925 0.780799L2.80232 0.533599C3.51058 0.525866 4.21352 0.807733 4.74365 1.3376C5.40125 1.9952 5.68338 2.93307 5.47912 3.78987C5.38632 4.20747 5.18445 4.57387 4.87912 4.8792C4.57378 5.18453 4.20765 5.38587 3.78578 5.48ZM4.60365 5.73867C4.84373 5.61088 5.06362 5.44832 5.25618 5.25627C5.44814 5.06361 5.61068 4.84374 5.73858 4.60373L7.62205 6.48693L6.48712 7.62187L4.60365 5.73867ZM4.74365 14.6621C4.21378 15.1917 3.51192 15.4752 2.80232 15.4661L3.04925 15.2189C3.35165 14.9163 3.51832 14.5133 3.51832 14.0845C3.51832 13.6557 3.35165 13.2528 3.04925 12.9501C2.74823 12.6497 2.3403 12.4809 1.91498 12.4809C1.48967 12.4809 1.08174 12.6497 0.780718 12.9501L0.533785 13.1973C0.520718 12.4963 0.807651 11.7859 1.33752 11.256C1.99538 10.5987 2.93325 10.3168 3.78978 10.5208C4.20765 10.6139 4.57432 10.8155 4.87912 11.1205C5.18392 11.4256 5.38605 11.7923 5.47992 12.2141C5.68338 13.0667 5.40125 14.0045 4.74365 14.6621ZM5.25618 10.7435C5.06331 10.5513 4.84317 10.3885 4.60285 10.2605L10.2605 4.60293C10.3884 4.84331 10.551 5.06354 10.7431 5.25653C10.936 5.44873 11.1561 5.61146 11.3965 5.73947L5.73885 11.3971C5.61092 11.1567 5.44829 10.9365 5.25618 10.7435ZM12.7711 10.4549C13.4562 10.4549 14.1455 10.7395 14.6621 11.256C15.1919 11.7859 15.4789 12.4963 15.4658 13.1973L15.2189 12.9501C14.9178 12.6497 14.5099 12.4809 14.0846 12.4809C13.6593 12.4809 13.2513 12.6497 12.9503 12.9501C12.8011 13.0989 12.6828 13.2757 12.6023 13.4704C12.5217 13.6651 12.4806 13.8738 12.4813 14.0845C12.4806 14.2952 12.5217 14.504 12.6023 14.6987C12.6828 14.8934 12.8011 15.0702 12.9503 15.2189L13.1973 15.4661C12.4935 15.4736 11.7861 15.192 11.2559 14.6621C10.5983 14.0045 10.3162 13.0667 10.5205 12.2099C10.611 11.7964 10.8194 11.418 11.1205 11.1205C11.5711 10.6699 12.1623 10.4549 12.7711 10.4549ZM11.3959 10.2611C11.1558 10.3889 10.936 10.5514 10.7434 10.7435C10.5514 10.9361 10.3889 11.156 10.261 11.396L8.37752 9.5128L9.51245 8.37787L11.3959 10.2611Z" fill="currentColor" />
                                </svg></h3>
                            <h2 className="cs_section_title cs_fs_50 text-black mb-0 wow fadeInUp">{parse(title)}</h2>
                        </div>
                        <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0"
                            data-variable-width="0" data-xs-slides="1" data-sm-slides="1" data-md-slides="1" data-lg-slides="2"
                            data-add-slides="2" data-slides-per-view="responsive">
                            <div className="cs_slider_wrapper">
                                <Slider {...settings}>
                                    {testimonial_data.map((item, index) => (
                                        <div key={index} className="cs_slide wow fadeInLeft">
                                            <div className="cs_testimonial cs_style_1 position-relative">
                                                <div className="cs_testimonial_content cs_white_bg position-relative">
                                                    <div className="cs_testimonial_header cs_mb_35">
                                                        <div className="cs_testimonial_thumbnail">
                                                            <img src={`${import.meta.env.BASE_URL}${item.img1}`}  loading="lazy" alt="Avatar" />
                                                        </div>
                                                        <div className="cs_testimonial_info">
                                                            <div className="rating-area" >
                                                                <i className="bi bi-star-fill"></i>
                                                                <i className="bi bi-star-fill"></i>
                                                                <i className="bi bi-star-fill"></i>
                                                                <i className="bi bi-star-fill"></i>
                                                                <i className="bi bi-star-fill"></i>
                                                            </div>
                                                            <h3 className="cs_fs_24 cs_mb_1">{item.title}</h3>
                                                            {/* <p className="cs_fs_14 cs_heading_color mb-0">{item.subTitle}</p> */}
                                                        </div>
                                                    </div>
                                                    <blockquote className="cs_fs_16">{item.desc}</blockquote>
                                                    <div className="cs_quote_icon position-absolute">
                                                        <img src={`${import.meta.env.BASE_URL}img/icons/quote_1_blue.svg`}  loading="lazy" alt="Quote Icon" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>

                            </div>
                        </div>
                    </div>
                    {/* <div className="cs_height_80 cs_height_lg_80"></div> */}
                </section>

                {/* FAQ's */}
                <section className="section cs_py_30  bg-dark-blue text-light">
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

                <section className="section cs_py_30">
                    <Serviceappointemnt
                        subtitle2="Contact us"
                        title2="Book An Appointment"
                    ></Serviceappointemnt>

                </section>

            </div >
        </>
    )
}

export default ApplianceServiceInJumeriahHeightsDetail
