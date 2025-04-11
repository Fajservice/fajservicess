import { useEffect, useRef, useState } from "react";
import data from '../../Data/AcRepairInSiliconOasis';
import { HelmetProvider } from "react-helmet-async";
import FAJACPrice from '../Miscellaneous/FAJACPrice';
import Serviceappointemnt from "../Contact/Serviceappointemnt";
const AcRepairInSiliconOasisDetail = () => {
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
                <title>FAJ / AC Repair Dubai - AC Service in Dubai Silicon Oasis</title>
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
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+97143300002">Call Now</a>
                            </div>

                        </div>
                        {/*  */}
                    </div>
                </section>
                {/* Best AC Repair in Silicon Oasis */}
                <section className="section cs_py_48 bg-light-gray">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">

                                <h3 class="cs_fs_30">Best AC Repair in Silicon Oasis</h3>
                                <p>When it comes to AC repair in Dubai Silicon Oasis, it's essential to hire professional and trustworthy AC technician for your home or business place.

                                    We specialize in air conditioner (AC) repair, service, and maintenance in Dubai. The FAJ team is dedicated to ensuring a comfortable temperature all year round.</p>
                            </div>
                            <div className="col-md-6">
                                <img src={`${import.meta.env.BASE_URL}/img/reem-ac-service.jpg`} alt="Post Image" />

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
                {/* Signs You Need An AC Service */}
                <section className="section cs_py_48 bg-light-gray">
                    <div className="container">
                        <h3 class="cs_fs_30">Signs You Need An AC Service</h3>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img src={`${import.meta.env.BASE_URL}/img/indoor-ac-servicing.jpg`} alt="Post Image" />
                            </div>
                            <div className="col-md-6">
                                <p>IIf you notice any of these signs, don't hesitate to contact us via WhatsApp. We're here to help you get your AC cooling system back to optimal efficiency.</p>
                                <ul>
                                    <li>Loss of AC performance</li>
                                    <li>Poor AC airflow, making noises</li>
                                    <li>Rising DEWA expenses</li>
                                    <li>Drips from your air conditioner</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="section cs_py_48">
                    <div className="container">
                        <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.
                            For technical inspection / callout of AC cleaning service, repair, or maintenance, please click here.
                            To book an appointment, you can call +971 4 330 0002 or reach us on WhatsApp at +971 50 746 4712</p>
                        <div id="get-quote" class="mb-3 mt-3">
                            <div class="container d-flex justify-content-center align-items-center">
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+97143300002">Call Now</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Ready to Beat the Heat? Find the Best AC Repair in Dubai */}
                <section className="section cs_py_48 bg-dark-blue text-light">
                    <div className="container">
                        <h3 class="cs_fs_30 text-light">Ready to Beat the Heat? Find the Best AC Repair in Dubai</h3>
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
                                <h3 class="cs_fs_30">Choose FAJ for Speed, Efficiency and Peace of Mind</h3>
                                <p>When the temperature soars and you have air conditioner system faults, we are here to save your day. We have trained and professional technical teams to serve you..

                                    Routine inspections of your Air Condition Installation, AC repair Dubai, AC maintenance & repairs, fix service is extremely important to ensure your unit’s efficiency, we are trained and qualified to maintain all type, makes, model and sizes Domestic Ac & Commercial air conditioner & Ventilation System in Dubai. FAJ, an AC Repair Dubai Company.
                                    When it comes to Air Conditioner installation service, You Only Want to Bring Professional, Trustworthy Servicemen into Your Home or Place of Business.</p>
                                <div id="get-quote" class=" mt-4">
                                    <div class="container d-flex justify-content-center align-items-center">
                                        <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+97143300002&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                        <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+97143300002">Call Now</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>

                {/* The Benefits Of Regular AC Maintenance Dubai Service */}
                <section className="section cs_py_48" style={{ backgroundColor: "#00334E", color: "white" }}>
                    <div className="container text-center">
                        <h3 className="cs_fs_30 text-light mb-4">The Benefits Of Regular AC Maintenance Dubai Service</h3>
                        <p className="mb-5">Enjoy cooler air for longer. The We Will Fix It procedure is rigorous and unrivalled, with steps including the following:</p>

                        <div className="row mt-5">
                            <div className="col-md-6 mb-5">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="rounded-circle bg-transparent border border-white d-flex align-items-center justify-content-center mb-4" style={{ width: "70px", height: "70px" }}>
                                        <i className="bi bi-check text-white" style={{ fontSize: "30px" }}></i>
                                    </div>
                                    <h4 className="text-uppercase mb-3 text-white">What does AC maintenance dubai include?</h4>
                                    <p>The AC Maintenance Services in Dubais usually include checking, cleaning, adjusting and/or changing various parts of your HVAC (Heating, Ventilation, and Air Conditioning) equipment.</p>
                                </div>
                            </div>

                            <div className="col-md-6 mb-5">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="rounded-circle bg-transparent border border-white d-flex align-items-center justify-content-center mb-4" style={{ width: "70px", height: "70px" }}>
                                        <i className="bi bi-check text-white" style={{ fontSize: "30px" }}></i>
                                    </div>
                                    <h4 className="text-uppercase mb-3 text-white">Is it necessary to service AC every year?</h4>
                                    <p>Yes, Ac requires Service minimize one maximum of three in a year. An air conditioner, just like a car, needs regular maintenance and service to run efficiently. … You should do this in the Spring to ensure that your unit will run with the most efficiency during the hottest Summer months.</p>
                                </div>
                            </div>

                            <div className="col-md-6 mb-5">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="rounded-circle bg-transparent border border-white d-flex align-items-center justify-content-center mb-4" style={{ width: "70px", height: "70px" }}>
                                        <i className="bi bi-check text-white" style={{ fontSize: "30px" }}></i>
                                    </div>
                                    <h4 className="text-uppercase mb-3 text-white">FAN AND EVAPORATOR ASSESSMENT</h4>
                                    <p>We ensure the fan is working correctly and that there are no blockages in the evaporator coil.</p>
                                </div>
                            </div>

                            <div className="col-md-6 mb-5">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="rounded-circle bg-transparent border border-white d-flex align-items-center justify-content-center mb-4" style={{ width: "70px", height: "70px" }}>
                                        <i className="bi bi-check text-white" style={{ fontSize: "30px" }}></i>
                                    </div>
                                    <h4 className="text-uppercase mb-3 text-white">THERMOSTAT CHECK</h4>
                                    <p>We use a laser temperature gauge to ensure thermostats are operating correctly and accurately to keep your home at an optimal temperature.</p>
                                </div>
                            </div>

                            <div className="col-md-6 mb-5">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="rounded-circle bg-transparent border border-white d-flex align-items-center justify-content-center mb-4" style={{ width: "70px", height: "70px" }}>
                                        <i className="bi bi-check text-white" style={{ fontSize: "30px" }}></i>
                                    </div>
                                    <h4 className="text-uppercase mb-3 text-white">AIRFLOW BALANCE ASSESSMENT</h4>
                                    <p>We ensure you get optimal air flow around each room and divert air to different vents where this is needed.</p>
                                </div>
                            </div>

                            <div className="col-md-6 mb-5">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="rounded-circle bg-transparent border border-white d-flex align-items-center justify-content-center mb-4" style={{ width: "70px", height: "70px" }}>
                                        <i className="bi bi-check text-white" style={{ fontSize: "30px" }}></i>
                                    </div>
                                    <h4 className="text-uppercase mb-3 text-white">FEEDBACK TO CUSTOMER</h4>
                                    <p>At the end of the service, our team provide vital feedback on the health of your AC, the work carried out and any further work or repairs needed.</p>
                                </div>
                            </div>
                        </div>

                        <p className="mt-3 mb-5">Contact us now to get a free AC service quote for your home or business.</p>

                        <div className="text-center">
                            <a href="https://api.whatsapp.com/send?phone=+971507464712&text=Hello" className="btn btn-outline-light btn-lg text-uppercase px-5">GET A FREE QUOTE</a>
                        </div>
                    </div>
                </section>

                {/* Ready to Beat the Heat? Find the Best AC Repair in Dubai */}
                <section className="section cs_py_48 text-black">
                    <div className="container">
                        <h3 class="cs_fs_30 text-black">Keep your home or Business Place Comfortable with Air Conditioning Cooling</h3>
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

export default AcRepairInSiliconOasisDetail
