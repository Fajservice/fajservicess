import { useEffect, useRef, useState } from "react";
import data from '../../Data/AcRepairInMetha.json';
import { HelmetProvider } from "react-helmet-async";
import FAJACPrice from '../Miscellaneous/FAJACPrice';
import Serviceappointemnt from '../Contact/Serviceappointemnt';
const AcRepairInMethaDetail = () => {
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
                <title>FAJ / AC Repair Dubai - Best AC Repair in Mehta</title>
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
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
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

                                <h3 class="cs_fs_30">Best AC Repair in The Ritz Carlton DIFC</h3>
                                <p>When it comes to AC repair in Mehta, Dubai, it’s essential to hire professional and trustworthy AC technician for your home or business place.

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
                            To book an appointment, you can call +971 50 7464 712 or reach us on WhatsApp at +971 50 746 4712</p>
                        <div id="get-quote" class="mb-3 mt-3">
                            <div class="container d-flex justify-content-center align-items-center">
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
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


                                    At the outset, air conditioning is an indispensable part of daily life and our comfort and productivity heavily depend upon this appliance. The Oud Metha area of Dubai features numerous apartments, flats, and villas. Shops, hospitals, schools, and several other industrial sites. And, all these places fully rely on efficient functioning of air conditioning systems because the weather changes highly affect the indoor environment. Furthermore, to acquire excellent AC services in Oud Metha, never wait until your air condition completely breaks down. Because sometimes severe damage to internal components gets arduous to repair and the only option left is replacement. Therefore, without delaying further, place a call today.


                                    When it comes to Air Conditioner installation service, You Only Want to Bring Professional, Trustworthy Servicemen into Your Home or Place of Business.</p>
                                <div id="get-quote" class=" mt-4">
                                    <div class="container d-flex justify-content-center align-items-center">
                                        <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                        <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                                        <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                        <a data-anim-type="fade-in-up" class="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
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
                                    <h4 className="text-uppercase mb-3 text-white">Is Your Air Conditioner Healthy?</h4>
                                    <p>Just like your car, your air con needs regular optimum servicing to ensure they are operative at its absolute best. This helps to ensure your A/c unit is working with high efficiency without any hindrance. In addition to it, setting up routine visits by a specialist swiftly prolongs the lifespan of your climate control. To make sure your Ac engine is healthy, schedule AC services in Oud Metha and let us handle the situation. Our skillful experts do all which is tailored to the needs of your air con. If you want to opt for a preventive maintenance program we are available to deliver you that as well. Keeping coils clean from debris and dirt is the most important thing in preventive maintenance and servicing. Moreover, keeping them free from biological growth is even more necessary. Need technical proficient support staff for immediate help? Connect with us.</p>
                                </div>
                            </div>

                            <div className="col-md-6 mb-5">
                                <div className="d-flex flex-column align-items-center">
                                    <div className="rounded-circle bg-transparent border border-white d-flex align-items-center justify-content-center mb-4" style={{ width: "70px", height: "70px" }}>
                                        <i className="bi bi-check text-white" style={{ fontSize: "30px" }}></i>
                                    </div>
                                    <h4 className="text-uppercase mb-3 text-white">Get Quality & Affordability In One!</h4>
                                    <p>If you are in search of top-quality and highly affordable AC services in Oud Metha then FAJ is your right choice. Our team is well-versed in handling air conditioners that can withstand the city’s weather fluctuations. Count on us for reliable solutions that keep you, and your employees cool and comfortable all year round. Additionally, for any type of cooling system you own we can fix any complexity it has. Be it your centralized air conditioning, inverter, HVAC, split, ducted, ceiling air con, or window A/c we are capable enough to address all. Schedule your appointment today with us at +971507464712 or email info@fajservices.ae Our experts, fully equipped, reach your doorstep to assist you on an appointed day and time.</p>
                                    <p>If you are in search of top-quality and highly affordable AC services in Oud Metha then FAJ is your right choice. Our team is well-versed in handling air conditioners that can withstand the city’s weather fluctuations. Count on us for reliable solutions that keep you, and your employees cool and comfortable all year round. Additionally, for any type of cooling system you own we can fix any complexity it has. Be it your centralized air conditioning, inverter, HVAC, split, ducted, ceiling air con, or window A/c we are capable enough to address all. Schedule your appointment today with us at +971507464712 or email info@fajservices.ae Our experts, fully equipped, reach your doorstep to assist you on an appointed day and time.</p>
                                </div>
                            </div>
                        </div>

                        <p className="mt-3 mb-5">Contact us now to get a free AC service quote for your home or business.</p>

                        <div className="text-center">
                            <a href="https://api.whatsapp.com/send?phone=+971507464712&text=Hello" className="btn btn-outline-light btn-lg text-uppercase px-5">GET A FREE QUOTE</a>
                        </div>
                    </div>
                </section>

                {/* AC Cleaning Services */}
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

export default AcRepairInMethaDetail
