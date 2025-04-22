import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from '../../Data/AcRepairInJebelAliFreeZone.json';
import { HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../Contact/Serviceappointemnt';
import BenefitAcMaintenance from "../BenefitAcMaintenance/BenefitAcMaintenance";
import GetQuoteButton from "../Buttons/GetQuoteButton";
import CallNowButton from "../Buttons/CallNowButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import FAJACPrice from "../Miscellaneous/FAJACPrice";
import QuickGuide from "../QuickGuide/QuickGuide";



const AcRepairInJebelAliFreeZoneDetail = () => {
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
                <title>FAJ / AC Repair Dubai - AC Service in Jebel Ali Free Zone</title>
                <meta name="description" content="FAJ Established in 2010, / We offer professional AC Repair, Freezer, Refrigerator, Fridge, Washing Machine Maintenance Service Company Dubai"></meta>
            </HelmetProvider>

            <div className="cs_service_details">
                {/* The FAJ experts can help you make your home or place of business more comfortable */}
                <section className="section cs_py_48">
                    <div className="container">
                        {/* <img src={`${import.meta.env.BASE_URL}/img/Ac-Maintenance.jpeg`} alt="Service Banner" /> */}
                        <h2 className="cs_fs_30">The FAJ experts can help you make your home or place of business more comfortable</h2>
                        <p>FAJ Technical Services LLC is your premier choice for quality AC Service In Dubai. With 14 years of experience in AC repairing, maintenance, and servicing, we are the most trusted air conditioning service company in Dubai, UAE.<br />FAJ is providing AC repair and maintenance services to all areas of Dubai. Our AC technicians are skilled and specialize in repairing all AC types, brands, and models. Experience reliable AC repair and maintenance to keep your home or business cool and comfortable.</p>
                        <div id="get-quote" className=" mt-3">
                            <div className="container d-flex justify-content-center align-items-center">
                                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section cs_py_48 bg-light-gray">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-md-6">

                                <h3 className="cs_fs_30">Best AC Repair in Jebel Ali Free Zone</h3>
                                <p>When it comes to AC repair in Jebel Ali Free Zone, Dubai, it’s essential to hire professional and trustworthy AC technician for your home or business place.

                                    We specialize in air conditioner (AC) repair, service, and maintenance in Dubai. The FAJ team is dedicated to ensuring a comfortable temperature all year round.</p>
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
                        <h3 className="cs_fs_30">Signs You Need An AC Service</h3>
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
                        <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.
                            For technical inspection / callout of AC cleaning service, repair, or maintenance, please click here.
                            To book an appointment, you can call +971 50 7464 712 or reach us on WhatsApp at +971 50 746 4712</p>
                        <div id="get-quote" className="mb-3 mt-3">
                            <div className="container d-flex justify-content-center align-items-center">
                                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Ready to Beat the Heat? Find the Best AC Repair in Dubai */}
                <section className="section cs_py_48 bg-dark-blue text-light">
                    <div className="container">
                        <h3 className="cs_fs_30 text-light">Ready to Beat the Heat? Find the Best AC Repair in Dubai</h3>
                        <p>Ready to Beat the Heat? Look no further! Find the best AC Repair in Dubai and keep yourself cool all summer long. Our expert AC technicians ensure fast, reliable services to get your AC up and running.Our service guarantees a comfortable home or office environment, even during the scorching heat of Dubai. Plus, with our affordable rates and transparent pricing, you can trust that you're getting the best value for your money.Don't suffer through another day of sweltering temperatures. Click below to schedule your AC repair and maintenance now and experience instant relief! Stay cool, Dubai!</p>
                    </div>
                </section>

                {/* Choose FAJ for Speed, Efficiency and Peace of Mind */}
                <section className="section cs_py_48">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <img src={`${import.meta.env.BASE_URL}/img/Faj-for-speed.jpg`} alt="Post Image" />
                            </div>
                            <div className="col-xl-6">
                                <h3 className="cs_fs_30">Choose FAJ for Speed, Efficiency and Peace of Mind</h3>
                                <p>When the temperature soars and you have air conditioner system faults, we are here to save your day. We have trained and professional technical teams to serve you..
                                    Routine inspections of your Air Condition Installation, AC repair Dubai, AC maintenance & repairs, fix service is extremely important to ensure your units efficiency, we are trained and qualified to maintain all type, makes, model and sizes Domestic Ac & Commercial air conditioner & Ventilation System in Dubai. FAJ, an AC Repair Dubai Company.
                                    When it comes to Air Conditioner installation service, You Only Want to Bring Professional, Trustworthy Servicemen into Your Home or Place of Business.</p>
                                <div id="get-quote" className=" mt-4">
                                    <div className="container d-flex justify-content-center align-items-center">
                                        <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                        <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                                        <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                        <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
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
                <section className="section cs_py_48 bg-light-gray">
                    <div className="container">
                        <h3 className="cs_fs_30">A Quick Guide to Understanding and Fixing Your AC Problems</h3>
                        <div className="row">
                            <div className="col-xl-6">
                                <iframe className="bordered-img blue-border" width="100%" height="350" src="https://www.youtube.com/embed/sxBhB1_gxYA?si=96yf5hxyAA3bct8w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen=""></iframe>
                            </div>
                            <div className="col-xl-6">
                                <p>Watch this video to learn about the common issues your air conditioning unit may experience.
                                This knowledge will help you ensure that the professionals you hire are performing the appropriate checks and maintenance.</p>
                                <p><strong>We specialize in:</strong></p>
                                <div className="row">
                                    <div className="col">
                                        <ul className="cs_list cs_style_1 cs_fs_16 cs_mp_0">
                                            <li>
                                                <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                                    <i className="bi bi-check"></i></span>
                                                <span>AC coil cleaning</span>
                                            </li>
                                            <li>
                                                <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                                    <i className="bi bi-check"></i></span>
                                                <span>Recharging refrigerant levels</span>
                                            </li>
                                            <li>
                                                <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                                    <i className="bi bi-check"></i></span>
                                                <span>Cleaning or replacing the air filtes</span>
                                            </li>
                                            <li>
                                                <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                                    <i className="bi bi-check"></i></span>
                                                <span>Checking and tightening electrical connections</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col">
                                        <ul className="cs_list cs_style_1 cs_fs_16 cs_mp_0">
                                            <li>
                                                <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                                    <i className="bi bi-check"></i></span>
                                                <span>Regular maintenance</span>
                                            </li>
                                            <li>
                                                <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                                    <i className="bi bi-check"></i></span>
                                                <span>Unclogging drain lines</span>
                                            </li>
                                            <li>
                                                <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                                    <i className="bi bi-check"></i></span>
                                                <span>Inspecting and AC installation
                                                </span>
                                            </li>

                                            <li>
                                                <span className="cs_list_icon cs_center cs_accent_bg cs_white_color cs_radius_50">
                                                    <i className="bi bi-check"></i></span>
                                                <span>Fixing leaks refrigerant, water, or duct leaks</span>
                                            </li>

                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
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
                        <h3 className="cs_fs_30 text-black">Keep your home or Business Place Comfortable with Air Conditioning Cooling</h3>
                        <p>We are expert in Central Ac | Ducted Split Ac Maintenance| HVAC | Package unit Ac | Centralize Ac | CHW FCU Fan Coil Unit Ac | Window Ac | Cassette Type Ac | Portable Ac | Wall Mounted Ac Maintenance | Split Ac Maintenance | Ceiling Ac Maintenance| VRV Variable Refrigerant Volume Ac | VRF Variable refrigerant flow Ac | Multi Split | AHU | FAHU</p>
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

export default AcRepairInJebelAliFreeZoneDetail
