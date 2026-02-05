import { useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
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
const FaberAppliancesServiceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {

    // For SEO
    const metatitle = String(titleSeo || "Faber Appliances Service | Faber Oven Repair in Dubai");
    const metadescription = String(description || "Faber Appliance Service FAJ offers reliable repair for oven, cooking range, hood, dishwasher, washing machine, and refrigerator in Dubai.");
    const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
    const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/The-Most-Common-Reasons-for-Appliance-Breakdowns/public");
    const metaKeyword = String(Keyword || "Faber Appliances Service, Faber Oven Repair, Faber Dishwasher Repair, Faber Washing Machine Repair, Faber Fridge Repair, Faber Cooker Repair, Faber Hood Repair, Faber Appliance Maintenance Dubai");
    const metaURL = String(URL || "https://www.fajservices.ae/faber-appliances-service/").replace(/\/?$/, '/');
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
                    
                </Helmet>
            </HelmetProvider>
            <HeaderForm />

            <div className="cs_service_details">
                {/* intro */}
                <section className="section cs_py_30">
                    <div className="container">
                        <h1 className="cs_fs_30">Faber Appliances Service and Faber Oven Repair in Dubai</h1>
                        <p>
                            Having trouble finding a local technician who specializes in Faber kitchen appliances?
                            <br />At <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876">FAJ Technical Services L.L.C</a>, we’ve been offering dependable and cost-effective services since 2010. We work with a wide network of experienced, qualified, and carefully vetted professionals. Whenever possible, we’ll send a technician who understands your specific Faber appliance to ensure you receive accurate and efficient repair service.
                        </p>

                        <div id="get-quote" className=" mt-3">
                            <div className="container d-flex justify-content-center align-items-center gap-3">
                                <WhatsappIconButton />
                            </div>
                        </div>

                    </div>
                </section>

                {/* Best Home Appliance Service Center */}
                <section className="section cs_py_30 bg-light-gray">
                    <div className="container">
                        <div className="row gx-md-5">
                            <div className="col-md-6">
                                <h2 className="cs_fs_24 mb-1">Faber Washing Machine Repair Near You</h2>
                                <p className="mb-2">
                                    If you need repair services for your Faber appliances, FAJ is here to help! Rely on us for fast, affordable, and professional service.
                                    Whether your built-in Faber washer won’t drain, your fridge isn’t cooling, your oven won’t heat, or your dishwasher won’t start, our expert repair team in Dubai and Sharjah is ready to assist.
                                    As your trusted local technicians, we’ll fix the issue promptly and efficiently.
                                </p>

                                <h2 className="cs_fs_20 mb-1 pt-3 border-small-top">Fast and Reliable Faber Appliances Service</h2>
                                <p className="mb-2">
                                    At FAJ Technical Services L.L.C, we understand that appliance breakdowns, especially involving Faber products, rarely happen at a convenient time. That’s why our skilled Faber technicians are ready to provide dependable <a href="https://www.fajservices.ae/services/home-appliances-repair/appliances-repair-service/">appiance repair services</a>. With our help, you can avoid the high cost of replacement and have your Faber appliance restored to full working condition before it becomes a bigger concern.
                                </p>

                            </div>

                            <div className="col-md-6 ">
                                <img className="bordered-img w-100" src={getImageSrc('The-Most-Common-Reasons-for-Appliance-Breakdowns')}  alt="Faber Washing Machine Repair" />
                            </div>
                        </div>
                        <AppliancesAppointmentCol></AppliancesAppointmentCol>
                    </div>
                </section>

                {/* Why is Appliance Maintenance Service Important in Dubai? */}
                <section className="section cs_py_30">
                    <div className="container">

                        <h3 className="cs_fs_30">Why is Faber Appliance Maintenance Service Important in Dubai?</h3>
                        <p>
                            Our comprehensive repair services encompass diagnosis, repairs, installations, and maintenance. This is why we are the leading provider of Faber appliance maintenance in Dubai.
                        </p>

                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img className="blue-border" src={getImageSrc('dishwasher-repair-service')}  alt="Faber Washing Machine Repair" />
                            </div>
                            <div className="col-md-6">
                                <ul className="mb-0">
                                    <li> <strong> Faber Washing Machine Repair in Dubai: </strong> Regular maintenance can extend the lifespan of your washing machine, ultimately saving you money on replacement costs. </li>
                                    <li> <strong> Faber Fridge Repair in Dubai: </strong> We are fully confident that we can get your Faber refrigerator running again in no time. </li>
                                    <li> <strong> Faber Stove / Oven Repair in Dubai: </strong> Identifying minor issues early helps prevent them from developing into costly repairs. </li>
                                    <li> <strong> Faber Dishwasher Repair in Dubai: </strong> Consistent maintenance helps reduce potential issues and enhances overall performance. </li>
                                    <li> <strong> Early Problem Detection: </strong> Routine checks help identify potential issues before they become serious. </li>
                                    <li> <strong> Cost-Effective: </strong> Maintaining appliances is cheaper than replacements or major repairs, making it smart choice for safety and efficiency in Dubai. </li>
                                    <li> <strong> Energy Efficiency: </strong> Regular maintenance of your Faber appliances can improve their efficiency and help you save money. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Most Common Problems with Home Appliances */}
                <section className="section cs_py_30 bg-light-gray">
                    <div className="container">
                        <h3 className="text-center">The Most Common Problems with Faber Appliances </h3>
                        <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faber Refrigerator</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">
                                            Common malfunctions of Faber refrigerators often involve cooling issues, such as problems with the defrost, fan motor, compressor, or coils.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faber Dishwasher</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">
                                            Common issues with Faber dishwasher include poor cleaning and drying, water leaks, drainage problems, and occasional electrical or PCB failures.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faber Washing Machine</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">
                                            Faber washing machines include drainage problems, leaks, faulty PCBs, and issues with the belt, door switch, or drum spinning.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faber Tumble Dryer</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">
                                            Faber dryers may stop spinning and make noise while failing to dry clothes. Common issues include a faulty heating element or control board.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faber Cooker / Stove</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">
                                            Common issues with Faber stoves include uneven heating and flame problems, such as a broken burner element, faulty switch, or an electric gas malfunction.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faber Oven</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">
                                            Faber ovens often have issues like improper heating, unignited burners, ignition problems in gas models, and faulty knobs or controls.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faber Freezer</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">
                                            Common Faber freezer include frequent water leaks, consistently low ice production, a faulty ice maker, and noticeably reduced cooling efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 col-lg-3">
                                <div className=" box-content-container rounded border shadow">
                                    <div className="text-center">
                                        <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Coffee Machine Problem</h3>
                                    </div>
                                    <div className="inner-apcs-feat-desc">
                                        <p className="p-2 mb-0">
                                            There are several possible reasons why water flow in coffee makers, whether drip or single-serve, is often unusually slow or completely absent.
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

                {/* HERE ARE THE SERVICES WE OFFER FOR HOME APPLIANCES */}
                <section className="section cs_py_30">
                    <div className="container">
                        <h2 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR Faber APPLIANCES</h2>

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
                                <p className='mb-0'>We specialise in all types of Faber appliances, including built-in Faber appliances.</p>
                                <p className='mb-0'><strong>Our services include:</strong></p>
                                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                                    <li> <strong> Faber Appliance Installation: </strong> Professional installation of various types of Faber home appliances ensures optimal performance and efficiency. </li>
                                    <li> <strong> Faber Appliance Diagnostics: </strong> We provide expert diagnostics and eligibility assessments, along with detailed quotes for Faber appliance issues. </li>
                                    <li> <strong> Faber Appliance Repair Service: </strong> We provide fast and effective repair services for Faber appliances, quickly addressing leaks, electrical issues, and malfunctions. Contact us for details on specific services or any questions you may have! </li>
                                    <li> <strong> Faber Appliance Annual Maintenance Contract: </strong> This contract details the terms for annual maintenance of your Faber appliances, ensuring they operate smoothly all year. Enjoy peace of mind with expert care. </li>
                                </ul>
                                <p className="mb-0">
                                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a>  is crucial for ensuring your Faber home appliances perform optimally, run efficiently, and last longer.
                                </p>
                            </div>

                        </div>
                    </div>
                </section >

                {/* The Benefits Of Appliances Service Dubai */}
                <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h2 className="cs_fs_30 mb-0">The Benefits of Faber Appliances Service Dubai</h2>
                            <div className="row gx-3 gy-5 mt-0">
                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={getImageSrc('icon/Ensuring-Safety')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 cs_fs_18">Ensuring Safety</h3>
                                            <p className="small">
                                                Regular inspections are vital for preventing electrical faults, gas leaks, and other hazards, ensuring the safety of your premises.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 cs_fs_18"> Optimal Performance </h3>
                                            <p className="small">
                                                Regular maintenance helps your Faber appliances run smoothly and efficiently, delivering the best results every time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={getImageSrc('icon/Lower-Energy-Bills')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 cs_fs_18">Lower Energy Bills</h3>
                                            <p className="small">
                                                Energy-efficient Faber appliances lead to monthly savings on utility bills, allowing you to keep more money in your pocket.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={getImageSrc('icon/Saving-Money-on-Repair')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 cs_fs_18">Saving Money on Repair</h3>
                                            <p className="small">
                                                Preventive services identify issues early, minimizing breakdowns and repairs while extending the lifespan of Faber appliances.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={getImageSrc('icon/extending')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 cs_fs_18">Extending Appliance Lifespan</h3>
                                            <p className="small">
                                                Proper maintenance and timely servicing can greatly extend the lifespan of your Faber appliances, postponing the need for replacements.
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-4 mb-2">
                                    <div className="">
                                        <div className="benifit-box-container">
                                            <div className="icon-img-block">
                                                <img src={getImageSrc('icon/Peace-of-Mind')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                                            </div>
                                            <h3 className="text-uppercase mb-2 cs_fs_18">Peace of Mind</h3>
                                            <p className="small">
                                                Ensuring your Faber appliances are functioning well boosts your confidence and reduces the stress of unexpected failures.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
                < section className="section cs_py_30" >
                    <div className="container container-md container-sm">
                        <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>

                        <div className="usps align-items-center	">
                            {/* <!-- First Column --> */}
                            <div className="uspcol col-1">
                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img src={getImageSrc('icon/fast-reliable')}  alt="Fast, Reliable Service" />

                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Reliable, Priority, and Quick</h3>
                                        <p>You can rely on prompt service! Our same-day repairs or next-day service visits ensure your needs are addressed swiftly.</p>
                                    </div>
                                </div>

                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img src={getImageSrc('icon/experts')}  alt="We Are Experts" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Feeling Of Calm</h3>
                                        <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>,  you get year-round service to keep your Faber appliance running smoothly and reliably.</p>
                                    </div>
                                </div>


                                <div className="uspitem mb-0">
                                    <div className="uspicon">
                                        <img src={getImageSrc('icon/full-control')}  alt="FAJ icon service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">You Are in Control</h3>
                                        <p>Choose a day and time for your Faber appliance repair in Dubai or Sharjah, allowing a 3-4 hour window for our technician's arrival.</p>
                                    </div>
                                </div>

                            </div>

                            {/* <!-- Delimit Section --> */}
                            <div className="uspdelimit col-2 d-none d-xl-block">
                                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1')}  alt="FAJ icon service" />
                            </div>

                            {/* <!-- Second Column --> */}
                            <div className="uspcol col-3">
                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">We Are Experts</h3>
                                        <p> We are specialists in Faber appliance repair, which is why major brands trust us to manage their service and maintenance.</p>
                                    </div>
                                </div>
                                <div className="uspitem">
                                    <div className="uspicon">
                                        <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Great Value</h3>
                                        <p>Inspection fee includes diagnosis, transport, and reinstallation up to two Faber appliances at the same location in Dubai.</p>
                                    </div>
                                </div>
                                <div className="uspitem mb-0">
                                    <div className="uspicon">
                                        <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                                    </div>
                                    <div className="usptext">
                                        <h3 className="">Trustworthy</h3>
                                        <p>Our skilled technicians specialise in Faber appliances and provide outstanding service across major appliances.</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Delimit mobile --> */}
                            <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                                <img src={getImageSrc('fajteam')}  alt="FAJ icon service" />
                            </div>
                        </div>
                    </div>
                </section >

                {/* We are specialise in Appliances services for the following brands */}
                <section className="section cs_py_30 bg-light-gray mb-4">
                    <div className="container">
                        <DaiganosisCharges
                            appliancebrand="Faber Appliance"
                            feeRange="ranging from AED 157 to 280"
                        />
                        <h3>We specialize in Faber appliance services of the following types</h3>
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-0"> <b> Faber Washing Machine Repair Near You in Dubai: </b>  FAJ is here to support you when things go wrong. We understand that your Faber washing machine is essential for daily life, keeping your laundry clean.</p>
                                <p className="mb-0"> <b> Faber Fridge Repair Near You in Dubai: </b> If you are experiencing issues with your Faber refrigerator, please contact the FAJ team for same-day Faber <a href="https://www.fajservices.ae/refrigerator-repair-service/">refrigerator repair</a> service in Dubai.</p>
                                <p className="mb-0"> <b> Faber Freezer Repair Near You in Dubai: </b> For Faber freezer repair and service in Dubai and Sharjah, our team of qualified technicians is available. </p>
                                <p className="mb-0"> <b> Faber Home Appliance Service Center Near You: </b> If you are looking for the best repair service for Faber washer dryer in Dubai, FAJ is an excellent choice.
                                    They are renowned for their outstanding service in repairing Faber fridge freezer and are recognized as the leading provider for the repair of Faber cooking ranges, stove fixes, induction, cooktop fixes, washing machines repair, and refrigerator repairs in the area.
                                </p>
                                <p className="mb-0"> <b> Faber Dishwasher Repair Near You in Dubai: </b> Your Faber dishwasher may need repair or maintenance. For high-quality integrated Faber <a href="https://www.fajservices.ae/dishwasher-repair-service/">dishwasher repair</a> and service center in Dubai, rely on FAJ.</p>
                                <p className="mb-0"> <b> Faber Cooking Range and Oven Repair Near You: </b> We offer expert repair services for Faber cooking ranges and ovens in Dubai. Our skilled technicians are knowledgeable and experienced in diagnosing and fixing issues with Faber refrigerators, dishwashers, dryers, and more. </p>
                                <p className="mb-0"> <b> Faber Dryer Repair and Service Near You: </b> Are you worried about your Faber dryer not working properly? Looking for a reliable Faber laundry machine company in Dubai? Contact us for same-day service!</p>
                                <p className="mb-0"> <b> Faber Oven Repair Near Me Dubai: </b>  If you are looking for the best company for Faber oven repairs in Dubai, FAJ is the perfect choice. They are well-known for providing exceptional service for Faber <a href="https://www.fajservices.ae/services/home-appliances-repair/oven-repair-service/">oven repairs</a>. FAJ is recognized as the leading service center for Faber ovens in the area.</p>

                                <h4 className="mt-3">We offer service for Faber appliances in the Dubai area</h4>
                                <p>

                                    <a href="https://www.fajservices.ae/appliances-services-in-business-bay/">Business Bay</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-dubai-marina/">Dubai Marina</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-palm-jumeirah/">Palm Jumeirah</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-dubai-hills-estate/">Dubai Hills Estate</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-damac-hills/">Damac Hills</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-al-barari/">Al Barari</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-al-barsha/">Al Barsha</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-al-safa/">Al Safa</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-arabian-ranches/">Arabian Ranches</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-dubai-silicon-oasis/">Dubai Silicon Oasis</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-dubai-investments-park/">Dubai Investments Park</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-dip/">DIP</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-dubai-production-city/">Dubai Production City</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-impzy/">IMPZ</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-dubai-sports-city/">Dubai Sports City</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-dubai-studio-city/">Dubai Studio City</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-jbr/">JBR</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-beach-residence/">Jumeirah Beach Residence</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-jlt/">JLT</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-lake-towers/">Jumeirah Lake Towers</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-jvc/">JVC</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-village-circle/">Jumeirah Village Circle</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-jvt/">JVT</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-village-triangle/">Jumeirah Village Triangle</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-jebel-ali-village/">Jebel Ali Village</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-jumeirah/">Jumeirah</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-golf-estates/">Jumeirah Golf Estates</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-the-meadows/">Meadows</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-dubai-motor-city/">Motor City</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-town-square/">Town Square</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/ac-services-in-emirates-hills/">Emirates Hills</a>
                                    <span>&nbsp;|&nbsp;</span>

                                    <a href="https://www.fajservices.ae/appliances-services-in-umm-suqeim/">Umm Suqeim</a>

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

export default FaberAppliancesServiceDetail;
