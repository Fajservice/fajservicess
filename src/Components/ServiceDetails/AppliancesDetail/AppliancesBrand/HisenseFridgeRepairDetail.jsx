
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";

import loadBackgroudImages from "../../../Common/loadBackgroudImages";
import HeaderForm from "../../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../../ApplianceCommons/AppliancesAppointmentCol";
import GetQuoteButton from '../../../Buttons/GetQuoteButton';
import CallNowButton from '../../../Buttons/CallNowButton';
import DaiganosisCharges from "../AppliancesLocation/ApplianceSpecialise/Daiganosischarges";
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const HisenseFridgeRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {

    // For SEO
    <title>Hisense Fridge Repair In Dubai | Washing Machine Service Near</title>
    const metadescription = String(description || "Need assistance with your Hisense appliance service? FAJ offers Hisense fridge repair, washing machine, dishwasher, cooker, & dryer repair center.");
    const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
    const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/The-Most-Common-Reasons-for-Appliance-Breakdowns/public");
    const metaKeyword = String(Keyword || "Hisense fridge repair in Dubai, Hisense washing machine repair in Dubai, Hisense cooker repair in Dubai, Hisense oven repair in Dubai, Hisense appliances maintenance in Dubai, Hisense refrigerator fix repair in Dubai");
    const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/brands/hisense/");

    subtitle = "Testimonial"
    title = "What our clients say About Us"
    reviewsbg = getImageSrc('testimonialbg')
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
                    fetch(`${import.meta.env.BASE_URL}data/AppliancesData/AppliancesFaqs/AppliancesFaqs.json`),
                    fetch(`${import.meta.env.BASE_URL}data/AppliancesData/AppliancesTestimonial/AppliancesTestimonials.json`)
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
                    <title>Hisense Fridge Repair In Dubai | Washing Machine Service Near</title>
                    <meta name="description" content="Need assistance with your Hisense appliance service? FAJ offers Hisense fridge repair, washing machine, dishwasher, cooker, & dryer repair center."></meta>
                    <meta name="keywords" content={metaKeyword} />
                    <meta name="author" content={metaAuthor} />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={metaURL} />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:title" content="Hisense Fridge Repair In Dubai | Washing Machine Service Near" />
                    <meta property="og:description" content="Need assistance with your Hisense appliance service? FAJ offers Hisense fridge repair, washing machine, dishwasher, cooker, & dryer repair center." />
                    <meta property="og:url" content={metaURL} />
                    <meta property="og:image" content={metaImage} />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Hisense Fridge Repair In Dubai | Washing Machine Service Near" />
                    <meta name="twitter:description" content="Need assistance with your Hisense appliance service? FAJ offers Hisense fridge repair, washing machine, dishwasher, cooker, & dryer repair center." />
                    <meta name="twitter:image" content={metaImage} />
                    
                </Helmet>
            </HelmetProvider>
            <HeaderForm />

            <div className="cs_service_details">
                {/* intro */}
                <section className="section cs_py_30">
                    <div className="container">
                        <h1 className="cs_fs_30">Hisense Fridge Repair and Hisense Washing Machine Service in Dubai</h1>
                        <p>
                            Looking for a reliable local expert to repair your Hisense appliances? You're in the right place.
                            Since 2010, <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7">FAJ Technical Services L.L.C</a> has been a trusted name for affordable and efficient home appliance solutions.
                            <br />We connect you with experienced and professionals who specialize in Hisense appliance repairs and understand the specific needs of your devices. Whether in Dubai or Sharjah, we aim to ensure you receive expert service tailored to your appliance. Your satisfaction is always our top concern.

                        </p>

                        <div id="get-quote" className=" mt-3">
                            <div className="container d-flex justify-content-center align-items-center gap-3">
                                <WhatsappIconButton />
                            </div>
                        </div>

                    </div>
                </section >

                {/* Best Home Appliance Service Center */}
                < section className="section cs_py_30 bg-light-gray" >
                    <div className="container">
                        <div className="row gx-md-5">
                            <div className="col-md-6">
                                <h2 className="cs_fs_24 mb-1">Hisense Washing Machine Repair Near You</h2>
                                <p className="mb-2">
                                    Having trouble with your Hisense appliances? FAJ is here to help with fast, affordable repair solutions! Whether it’s a Hisense washing machine that won’t drain, a fridge that’s not cooling, an oven that won’t heat, or a dishwasher that won’t start, our expert team can fix it.
                                    <br /> Count on us for dependable Hisense <a href="https://www.fajservices.ae/services/home-appliances-repair/appliances-repair-service/">appliance repair</a> in Dubai and Sharjah, delivering trusted service for all your appliance issues.
                                </p>

                                <h2 className="cs_fs_20 mb-1 pt-3 border-small-top">Fast and Reliable Hisense Appliances Service</h2>
                                <p className="mb-2">
                                    At FAJ Technical Services L.L.C, appliance breakdowns can happen when you least expect them, especially with your trusted Hisense products. That’s why our expert Hisense technicians are ready to deliver dependable repairs you can count on. Let us help you save money and restore your appliance quickly so you can return to your routine without stress.
                                </p>

                            </div>

                            <div className="col-md-6 ">

                                <img className="bordered-img w-100" src={getImageSrc('The-Most-Common-Reasons-for-Appliance-Breakdowns')} alt="Hisense Washing Machine Repair" />
                            </div>
                        </div>
                        <AppliancesAppointmentCol></AppliancesAppointmentCol>
                    </div>
                </section >

                {/* Why is Appliance Maintenance Service Important in Dubai? */}
                < section className="section cs_py_30" >
                    <div className="container">

                        <h3 className="cs_fs_30">Why is Hisense Appliance Maintenance Service Important in Dubai?</h3>
                        <p>
                            Our extensive repair services include diagnosis, repairs, installations, and maintenance. This positions us as the leading provider of Hisense appliance maintenance in Dubai.
                        </p>

                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img className="blue-border" src={getImageSrc('dishwasher-repair-service')} alt="Hisense Washing Machine Repair" />
                            </div>
                            <div className="col-md-6">
                                <ul className="mb-0">

                                    <li><strong>  Hisense Washing Machine Repair in Dubai: </strong> Regular maintenance can prolong your Hisense washing machine's lifespan, saving you money. </li>
                                    <li><strong>  Hisense Fridge Repair in Dubai: </strong> We are confident that we can quickly get your Hisense refrigerator up and running again. </li>
                                    <li><strong>  Hisense Stove / Oven Repair in Dubai: </strong> Catching minor issues early can help prevent them from escalating into expensive repairs. </li>
                                    <li><strong>  Hisense Dishwasher Repair in Dubai: </strong> Regular maintenance helps minimise potential problems and improves overall performance. </li>
                                    <li><strong>  Early Problem Detection: </strong> Regular inspections can help identify potential problems before they escalate into serious issues. </li>
                                    <li><strong>  Cost-Effective: </strong> Maintaining appliances is more cost-effective than replacing or making major repairs, ensuring safety and efficiency in Dubai. </li>
                                    <li><strong>  Energy Efficiency: </strong> Regular maintenance of your Hisense appliances can enhance efficiency and save you money. </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </section >

                {/* The Most Common Problems with Home Appliances */}
                < section className="section cs_py_30 bg-light-gray" >
                    <div className="container">
                        <h3 className="text-center">The Most Common Problems with Hisense Appliances </h3>
                        <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Hisense Refrigerator</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Hisense refrigerator may have cooling problems, usually related to the defrost, motor, compressor, or PCB. Let's reach out to FAJ for potential solutions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Hisense Dishwasher</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Common issues with Hisense dishwasher include poor cleaning and drying, water leaks, drainage issues, and a few electrical or PCB malfunctions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Hisense Washing Machine</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Hisense washing machines include problems with drainage, leaks, faulty PCBs, and issues related to the belt, door switch, or drum spinning.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Hisense Tumble Dryer</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Hisense dryer may stop spinning and make unusual noises without properly drying clothes, often due to a faulty heating element or control board.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Hisense Cooker / Stove</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Common issues with Hisense stove include uneven heating and flame problems, such as a broken burner element, a faulty switch, or an electrical gas malfunction.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Hisense Oven</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Hisense ovens often experience issues such as improper heating, unignited burners, ignition problems in gas models, and faulty knobs or controls.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Hisense Freezer</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Common issues with Hisense freezer include water leaks, insufficient ice production, malfunctioning ice makers, and decreased cooling efficiency.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Coffee Machine Problem</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">Water flow in coffee makers, whether drip or single-serve, can often become unusually slow or stop entirely due to several possible reasons.</p>
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
                </section >

                {/* HERE ARE THE SERVICES WE OFFER FOR HOME APPLIANCES */}
                < section className="section cs_py_30" >
                    <div className="container">
                        <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR Hisense APPLIANCES</h2>

                        <div className="row align-items-center">
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

                            <div className="col-xl-6">
                                <p className='mb-0'>We specialize in all types of Hisense appliances, including built-in models.</p>
                                <p className='mb-0'><strong>Our services include:</strong></p>
                                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                                    <li> <strong> Hisense Appliance Installation: </strong> Expert installation of various types and brands of Hisense home appliances to ensure their optimal performance and efficiency. </li>
                                    <li> <strong> Hisense Appliance Diagnostics: </strong> We offer expert diagnostics and eligibility assessments, along with detailed quotes for issues related to Hisense appliances. </li>
                                    <li> <strong> Hisense Appliance Repair Service: </strong> We offer fast and effective repair service for Hisense appliances, quickly addressing leaks, electrical issues, and malfunctions. Contact us for details about specific services or any questions you may have! </li>
                                    <li> <strong> Hisense Appliance Annual Maintenance Contract: </strong> This contract outlines the terms for the annual maintenance of your Hisense appliances, ensuring they function smoothly throughout the year. Enjoy peace of mind with professional care. </li>
                                    <p className="mb-0">
                                        <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for keeping your Hisense home appliances operating efficiently, performing well, and lasting longer.
                                    </p>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section >

                {/* The Benefits Of Appliances Service Dubai */}
                < section className="section cs_py_30 appliances-benifit-sec bg-light-gray" >
                    <div className="container">
                        <div className="row justify-content-center">
                            <h2 className="cs_fs_30 mb-0">The Benefits of Hisense Appliances Service Dubai</h2>
                            <div className="row gx-3 gy-5 mt-0">
                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={getImageSrc('icon/Ensuring-Safety')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h3>
                                            <p className="small">
                                                Regular inspections are essential for preventing electrical faults, gas leaks, and other hazards, which ensures the safety of your premises.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={getImageSrc('icon/Optimal-Performance')}alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 cs_fs_16"> Optimal Performance </h3>
                                            <p className="small">
                                                Regular maintenance helps your Hisense appliances run smoothly and efficiently, delivering the best results every time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                                            <p className="small">
                                                Energy-efficient Hisense appliances help you save on utility bills, allowing you to keep more money in your pocket each month.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={getImageSrc('icon/Saving-Money-on-Repair')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 cs_fs_16">Saving Money on Repair</h3>
                                            <p className="small">
                                                Preventive services help identify issues early, reducing breakdowns and repairs while enhancing the lifespan of Hisense appliances.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={getImageSrc('icon/extending')}alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 cs_fs_16">Extending Appliance Lifespan</h3>
                                            <p className="small">
                                                Regular maintenance and prompt servicing can significantly prolong the lifespan of your Hisense appliances, delaying the need for replacements.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={getImageSrc('icon/Peace-of-Mind')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 cs_fs_16">Peace of Mind</h3>
                                            <p className="small">
                                                Keeping your Hisense appliances in good working order enhances your confidence and minimizes the stress of unexpected breakdowns.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
                < section className="section cs_py_30" >
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
                                        <p>You can count on quick service! Our same-day repairs and next-day service visits ensure your needs are met promptly.</p>
                                    </div>
                                </div>

                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Feeling Of Calm</h3>
                                        <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>,  you get year-round service to keep your Hisense appliance running smoothly and reliably.</p>
                                    </div>
                                </div>


                                <div className="uspitem mb-0">
                                    <div className="uspicon">
                                        <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">You Are in Control</h3>
                                        <p>Schedule a day and time for your Hisense appliance repair in Dubai or Sharjah, allowing a 3-4 hour window for the technician's arrival.</p>
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
                                        <img src={getImageSrc('icon/value')}alt="FAJ icon service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">We Are Experts</h3>
                                        <p>We specialize in Hisense appliance repair, which is why major brands trust us to handle their service and maintenance needs.</p>
                                    </div>
                                </div>
                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img src={getImageSrc('icon/confidence-guarantee')}alt="FAJ icon service" />

                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Great Value</h3>
                                        <p>Inspection fee includes diagnosis, transport, and reinstallation up to two Hisense appliances at the same location in Dubai.</p>
                                    </div>
                                </div>
                                <div className="uspitem mb-0">
                                    <div className="uspicon">
                                        <img src={getImageSrc('icon/trustworthy')}alt="FAJ icon service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Trustworthy</h3>
                                        <p>Our skilled technicians specialise in Hisense appliances and provide outstanding service across major appliances.</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Delimit mobile --> */}
                            <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                                <img src={getImageSrc('fajteam')} alt="FAJ icon service" />
                            </div>
                        </div>
                    </div>
                </section >

                {/* We are specialise in Appliances services for the following brands */}
                < section className="section cs_py_30 bg-light-gray mb-4" >
                    <div className="container">
                        <DaiganosisCharges
                            appliancebrand="Hisense Appliance"
                            feeRange="ranging from AED 157 to 280"
                        />
                        <h3>We specialize in Hisense appliance services of the following types</h3>
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-0"> <b> Hisense Washing Machine Repair Near You in Dubai: </b> FAJ is here to support you when issues arise. We understand that your Hisense washing machine is vital for daily life, ensuring your laundry stays clean. Contact us for the best Hisense <a href="https://www.fajservices.ae/services/home-appliances-repair/washing-machine-repair-service-dubai/">washing machine service center</a> near me in Dubai. </p>
                                <p className="mb-0"> <b> Hisense Fridge Repair Near You in Dubai: </b> If you are having problems with your Hisense refrigerator, please contact the FAJ team for same-day Hisense <a href="https://www.fajservices.ae/refrigerator-repair-service/">refrigerator repair service</a> in Dubai. </p>
                                <p className="mb-0"> <b> Hisense Freezer Repair Near You in Dubai: </b> Our team of qualified technicians is available for Hisense freezer repair and service in Dubai and Sharjah. </p>
                                <p className="mb-0"> <b> Hisense Home Appliance Service Center Near You: </b> If you are seeking the best repair service Hisense washer dryer in Dubai, FAJ is an excellent choice. They are well-known for their exceptional service in repairing Hisense fridge freezer and are recognized as the leading provider for repairs of fix Hisense cooking range, stove fixes, induction cooktops, repair Hisense washing machines, and Hisense refrigerator in the area. </p>
                                <p className="mb-0"> <b> Hisense Dishwasher Repair Near You in Dubai: </b> If you're experiencing issues with your Hisense dishwasher, it might be time for some repair or maintenance. For reliable and top-notch service, consider FAJ's Hisense service center in Dubai, which specializes in integrated Hisense dishwasher repairs. They offer expert assistance to ensure your appliance functions optimally. </p>
                                <p className="mb-0"> <b> Hisense Cooking Range and Oven Repair Near You: </b> We provide expert repair service Hisense cooking range and ovens in Dubai. Our skilled technicians are experienced in diagnosing and fixing issues with Hisense refrigerator repair, fix Hisense dishwasher, Hisense dryer fixer, and more. </p>
                                <p className="mb-0"> <b> Hisense Dryer Repair and Service Near You: </b> Is your Hisense dryer not working properly? Looking for a reliable Hisense dryer service in Dubai? Contact us for same-day assistance! </p>
                                <p className="mb-0"> <b> Hisense Oven Repair Near Me Dubai: </b> If you're searching for the best company for Hisense <a href="https://www.fajservices.ae/services/home-appliances-repair/oven-repair-service/">oven repair</a> in Dubai, FAJ is an excellent choice. They are renowned for providing exceptional service specifically for Hisense ovens. FAJ is recognized as the leading service center for Hisense oven repair and maintenance in Dubai. </p>

                                <h4 className="mt-3">We offer service for Hisense appliances in the Dubai area</h4>
                                <p>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/business-bay/">Business Bay</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-marina/">Dubai Marina</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/palm-jumeirah/">Palm Jumeirah</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-hills-estate/">Dubai Hills Estate</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/damac-hills/">Damac Hills</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-barari/">Al Barari</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-barsha/">Al Barsha</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-safa/">Al Safa</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/arabian-ranches/">Arabian Ranches</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-silicon-oasis/">Dubai Silicon Oasis</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-investments-park/">Dubai Investments Park</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dip/">DIP</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-production-city/">Dubai Production City</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/impzy/">IMPZ</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-sports-city/">Dubai Sports City</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-studio-city/">Dubai Studio City</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jbr/">JBR</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-beach-residence/">Jumeirah Beach Residence</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jlt/">JLT</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-lake-towers/">Jumeirah Lake Towers</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jvc/">JVC</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-village-circle/">Jumeirah Village Circle</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jvt/">JVT</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-village-triangle/">Jumeirah Village Triangle</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jebel-ali-village/">Jebel Ali Village</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah/">Jumeirah</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-golf-estates/">Jumeirah Golf Estates</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/the-meadows/">Meadows</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-motor-city/">Motor City</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/town-square/">Town Square</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/emirates-hills/">Emirates Hills</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/umm-suqeim/">Umm Suqeim</a>

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
                </section >

                {/* Maintenance Contract */}
                < MaintenanceContract />
                {/* testimobial section */}
                <Testimonial1
                    subtitle="What Our Clients Say"
                    title="Customer <span>Reviews</span>"
                    bgImg={reviewsbg}
                    testimonialData={testimonial_data}
                    sectionId="home-testimonials"
                />

                <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
          
                        subtitle2="Contact us"
                        title2="Book An Appointment"
                    ></Serviceappointemnt>

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
    )
}

export default HisenseFridgeRepairDetail
