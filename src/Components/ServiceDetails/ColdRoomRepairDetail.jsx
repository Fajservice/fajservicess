import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import HeaderForm from "../Headeform/HeaderForm";

const ColdRoomRepair = () => {

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);

    // State for fetched data
    const [data, setData] = useState([]);
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
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/coldroomfaq.json`);
                const faqsData = await response.json();
                setData(faqsData);
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
                <title>Cold Room Repair - Walk in Cooler Maintenance Service Dubai</title>
                <meta name="description" content="Get reliable cold room repair in Dubai. Expert service & maintenance contract for cold storage & refrigeration systems. Call FAJ 04 3300002"></meta>
            </HelmetProvider>
            <HeaderForm />
            <section>
                <div className="cs_height_80 cs_height_lg_80"></div>
                <div className="container">
                    <div className="row cs_row_gap_30 cs_gap_y_60">
                        <div className="col-xl-8 col-lg-7">
                            <div className="cs_service_details">
                              
                                <h2 className="cs_fs_30">Cold Room Repair</h2>
                                <p>Is your existing cold room getting old or acting wary? You might be thinking of a replacement but it might cost a fortune. This is where FAJ comes in. Need not to worry, as our diverse and experienced range of services has got you covered. Confused about "cold room service near me", then you've landed on the right page. Give us a call to book our technicians for your freezer repair inspection so we can carry out cold room repair, refurbishment and maintenance services. Being used in super markets, restaurants, butcheries, hotels, hospitals, etc it is essential to conduct periodic maintenance. With our decades of experience in UAE and Dubai, we ensure that all your cold room repair and service solutions are resolved under the same roof. With our highly skilled and trained team of cold room technicians, you can trust our services with complete trust and reliability.</p>
                                <div id="get-quote" className="mb-5 mt-3">
                                    <div className="container d-flex justify-content-center align-items-center">
                                        <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                        <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={`${import.meta.env.BASE_URL}img/Cold-Room-Door-Repair.avif`} alt="FAJ Technical Services L.L.C" />
                                        <h3 className="cs_fs_24">Cold Room Door Repair</h3>
                                        <p>With a focus on Cold Room Door Repair, FAJ Technical Services provides quick and effective solutions to guarantee the best possible performance from your cold storage units. Our knowledgeable technicians are proficient in identifying and resolving problems with cold room doors, including malfunctioning hinges, seals, or electrical parts. In order to reduce temperature swings and protect the integrity of stored goods, we place a high priority on timely repairs. You can rely on us to provide dependable service that will enhance the smooth functioning of your cold rooms and preserve the product quality and safety. Cold rooms are designed to maintain temperature ranges between 15°C to – 40°C, therefore any failure could cause havoc.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={`${import.meta.env.BASE_URL}img/Cold-Room-Repairs-and-Maintenance-Services.avif`} alt="FAJ Technical Services L.L.C" />
                                        <h3 className="cs_fs_24">Cold Room Repairs and Maintenance Services</h3>
                                        <p>Let us guide you on why cold room repairs and maintenance is essential for optimal cooling and freezing operations. A cold room repair process involves recognizing any issues that are causing the temperature deviations from the desired range. If not done timely, it might lead to issues such as PCB failures, low or no cooling, over cooling, gas leakages, mechanical malfunctions, door hinge breakages or losing and revenue loss. In addition, an unserviced cold room will lead to a lower operational life and increased energy usage. UAE and Dubai being energy efficient states, we will ensure that your cold room freezer and chillers keep working in top notch conditions.</p>
                                    </div>
                                </div>
                                <div id="get-quote" className="mb-5 mt-3">
                                    <div className="container d-flex justify-content-center align-items-center">
                                        <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                        <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <img src={`${import.meta.env.BASE_URL}img/cold-room.avif`} alt="FAJ Technical Services L.L.C" />
                                        
                                        <p>Majority of service providers in this field are either inexperienced or way too expensive. Without compromising quality, we provide the most cost effective cold room maintenance solutions to our valued clients. Our highly trained technicians are fully equipped with extensive knowledge, experience and vital tools to carry out extremely complex and all kinds of cold room repairs. In order to offer cold room repair services, one must deeply understand cold room refrigeration systems.</p>
                                    </div>
                                    <div className="col-xl-6">
                                        <h3 className="cs_fs_24">Why choose FAJ for cold room maintenance services?</h3>
                                        <p>Our teams will ensure the efficiency and enhance the aesthetics of your <strong> walk in chiller room</strong> or your <strong>cold room <a href="chiller-repair">chiller unit</a></strong>. We believe in customer satisfaction and we are proud to deliver a 100% on it. Only OEM and original parts to carry out cold room repair and maintenance service with a valid warranty. In addition, we give free inspections to our Annual Maintenance Contract (AMC) clients.</p>
                                        <p>Our range of <strong>cold room services</strong> include but are not limited to professional servicing of cold room, <strong>cold room door repairs</strong>, cold room freezers, cold room in hospital, cold room in restaurant, cold room chillers, service works, maintenance and cold room repair works to existing installations. Get in touch to book your inspections. We make sure our cold room repair technician is at your doorstep with all the necessary parts and tools within a few hours. For the convenience and customer's peace of mind, we operate on weekends to ensure uninterrupted <strong>cold room fix</strong> services.</p>
                                        
                                    </div>
                                </div>
                                <div id="get-quote" className="mb-5 mt-3">
                                    <div className="container d-flex justify-content-center align-items-center">
                                        <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="https://api.whatsapp.com/send?phone=+971507464712&amp;text=Hello" style={{ backgroundColor: "#06d755" }}>Get A Free Quote</a>
                                        <a data-anim-type="fade-in-up" className="mx-2 btn btn-custom d-flex align-items-center menu-menu-btn" href="tel:+971507464712">Call Now</a>
                                    </div>
                                </div>
                                <h3 className="cs_fs_24">Reliable Solution to every type of cold room</h3>
                                <p>In case of a breakdown, malfunctioning or an improper functioning cold room unit feel free to reach us through our helplines, Whatsapp or contact form. Our team works 7 days a week to ensure timely, efficient and swift responses to all types of cold room.</p>
                                <img src={`${import.meta.env.BASE_URL}img/Reliable-Solution-to-every-type-of-cold-room.avif`} alt="FAJ Technical Services L.L.C" />

                                <h4 className="cs_fs_20">Walk in cooler</h4>
                                <p>FAJ Technical Services ensures the seamless operation of your walk-in cooler with expert repairs. Our technicians address issues promptly, preserving the optimal temperature for your stored goods. Trust us for efficient and reliable walk-in cooler repairs, contributing to the longevity and efficiency of your cooling unit.</p>

                                <h4 className="cs_fs_20">Walk in cooler freezer</h4>
                                <p>Count on FAJ Technical Services for comprehensive repairs and maintenance of your walk-in cooler freezer. Our skilled technicians specialize in diagnosing and fixing issues specific to these combined units, ensuring precise temperature control. Experience reliable service that keeps your walk-in cooler freezer operating at its best.</p>

                                <h4 className="cs_fs_20">Walk in freezer</h4>
                                <p>FAJ Technical Services is an expert at walk-in freezer repairs; they quickly fix issues to keep temperatures constant. Our technicians offer effective solutions that guarantee your unit runs flawlessly because they recognize the vital role walk-in freezers play in the preservation of goods. Count on us for professional repairs catered to the particular needs of your walk-in freezer.</p>

                                <h4 className="cs_fs_20">Freezer room</h4>
                                <p>Use the skilled repair services provided by FAJ Technical Services to guarantee the dependability of your freezer room. Our technicians take care of problems quickly and keep the temperature at the ideal level for storage. You can rely on us to handle freezer room issues quickly, extending the life and effectiveness of your cold storage unit.</p>

                                <h4 className="cs_fs_20">Storage cold room</h4>
                                <p>Storage cold room repair and maintenance are FAJ Technical Services's areas of expertise. Our knowledgeable technicians take care of problems quickly, making sure that your stored goods are kept in the best possible condition. You can rely on us to provide dependable and effective storage cold room repairs, extending the life and effectiveness of your cold storage unit.</p>

                                <h4 className="cs_fs_20">Cold room refrigeration</h4>
                                <p>For thorough repairs of cold room refrigeration, trust on FAJ Technical Services. Our knowledgeable specialists take care of issues quickly and effectively, guaranteeing that your refrigeration system operates as it should. You can rely on us to provide dependable service that protects the quality of your stored items and keeps your cold room refrigeration operating at peak performance.</p>

                                <h4 className="cs_fs_20">Cold room refrigeration system</h4>
                                <p>Cold room refrigeration system repair and maintenance are provided by FAJ Technical Services. Our technicians ensure ideal cooling conditions by quickly resolving system problems. You can prolong the life and effectiveness of your refrigeration unit by putting your trust in us for effective and dependable repairs of cold room refrigeration systems.</p>

                                <h4 className="cs_fs_20">Cold room freezer room</h4>
                                <p>For knowledgeable maintenance and repairs of your cold room freezer room, count on FAJ Technical Services. Our technicians ensure accurate temperature control for ideal storage by quickly resolving problems. Put your trust in us for dependable and effective freezer room repairs that will prolong the life and functionality of your cold storage unit.</p>

                                <h4 className="cs_fs_20">Commercial freezer room</h4>
                                <p>Commercial freezer room maintenance and repair are areas in which FAJ Technical Services shines. Our knowledgeable technicians take care of problems quickly and maintain the ideal temperature for product preservation. Put your trust in us for dependable and effective commercial freezer room repairs that will extend the life and performance of your cold storage unit.</p>

                                <h4 className="cs_fs_20">Cold room freezer</h4>
                                <p>With the skilled repair services provided by FAJ Technical Services, you can be sure that your cold room freezer is reliable. Our technicians take care of problems quickly and keep the temperature at the ideal level for storage. You can rely on us to handle cold room freezer issues quickly, extending the life and effectiveness of your cold storage unit.</p>

                                <h4 className="cs_fs_20">Modular freezer room</h4>
                                <p>You can rely on FAJ Technical Services to maintain and repair your modular freezer room thoroughly. Our knowledgeable technicians are adept at identifying and resolving problems unique to modular units, guaranteeing accurate temperature control. Get dependable service that maintains the peak performance of your modular freezer room.</p>

                                <h4 className="cs_fs_20">Restaurant freezer room</h4>
                                <p>FAJ Technical Services is an expert in maintaining constant temperatures in restaurant freezer rooms by fixing problems quickly. Our technicians offer effective solutions that guarantee your unit runs flawlessly because they recognize the crucial role restaurant freezer room play. Put your trust in us for professional repairs catered to the particular needs of your restaurant freezer room.</p>

                                <h4 className="cs_fs_20">Walk in freezer room</h4>
                                <p>When it comes to thorough upkeep and repairs for your walk-in freezer room, rely on FAJ Technical Services. Our knowledgeable technicians take care of problems quickly and accurately to maintain the ideal storage temperature. You can rely on us to provide dependable and effective walk-in freezer room repairs, extending the life and effectiveness of your cold storage unit.</p>
                            </div>
                            <div className="cs_height_20 cs_height_lg_20"></div>
                            <div className="cs_accordians_wrapper cs_style_1 p-0">

                                {data.map((item, index) => (
                                    <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                                        <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                                            <h2 className="cs_fs_18 cs_semibold mb-0">{item.title}</h2>
                                            <span className="cs_accordian_toggle">
                                                <i className="bi bi-eye"></i>
                                                <i className="bi bi-eye-slash"></i>
                                            </span>
                                        </div>
                                        <div className="cs_accordian_body" ref={accordionContentRef}>
                                            <p className="mb-0">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <aside className="col-xl-4 col-lg-5">
                            <div className="cs_sidebar cs_style_1">
                                <div className="cs_sidebar_widget cs_accent_bg_light position-relative">
                                    <div className="cs_separator"></div>
                                    <h3 className="cs_sidebar_title cs_fs_30 cs_mb_43">All Services</h3>
                                    <ul className="cs_categories cs_fs_16 cs_mb_20">
                                        <li><a href="/services/air-conditioning-repair/ac-service/">
                                            <span>Washing Machine Repair</span>
                                            <span><i className="fa-solid fa-arrow-right-long"></i></span>
                                        </a></li>
                                        <li><a href="/services/air-conditioning-repair/ac-service/">
                                            <span>Refrigerator Repair</span>
                                            <span><i className="fa-solid fa-arrow-right-long"></i></span>
                                        </a></li>
                                        <li><a href="/services/air-conditioning-repair/ac-service/">
                                            <span>BBQ Service &amp; Repair</span>
                                            <span><i className="fa-solid fa-arrow-right-long"></i></span>
                                        </a></li>
                                        <li><a href="/services/air-conditioning-repair/ac-service/">
                                            <span>Coffee Machine Repair</span>
                                            <span><i className="fa-solid fa-arrow-right-long"></i></span>
                                        </a></li>
                                        <li><a href="/services/air-conditioning-repair/ac-service/">
                                            <span>Vacuum Cleaner Repair</span>
                                            <span><i className="fa-solid fa-arrow-right-long"></i></span>
                                        </a></li>
                                    </ul>
                                </div>
                                <div className="cs_sidebar_widget cs_accent_bg">
                                    <div className="cs_card cs_style_6">
                                        <h3 className="cs_fs_30 cs_white_color cs_mb_30">Emergency AC Repair Services</h3>
                                        <div className="cs_card_icon cs_center cs_mb_32">
                                            <img src={`${import.meta.env.BASE_URL}img/icons/phone-call_2.svg`} alt="Phone Icon" />
                                        </div>
                                        <p className="cs_white_color cs_mb_5">Requesting A Call</p>
                                        <a href="tel:+971507464712" className="cs_call_text cs_fs_30 cs_bold cs_heading_font cs_mb_23">(+971) 4 330 0002</a>
                                        <p className="cs_card_subtitle cs_white_color cs_mb_33">If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.</p>
                                        <Link to="/about-us/" className="cs_card_btn">
                                            <span>Read more</span>
                                            <span><i className="bi bi-arrow-right"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
                <div className="cs_height_80 cs_height_lg_80"></div>
            </section>
        </>
    );
};

export default ColdRoomRepair;