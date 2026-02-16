
import { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import loadBackgroudImages from '../../../Common/loadBackgroudImages';
import '../../../../assets/main.css';
import Testimonial1 from '../../../Testimonial/Testimonial1';
import PriceCard from '../../AcDetail/AcLocation/PriceCard';
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import BlogHomeAppliances from '../../../Blog/BlogHomeAppliances';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const getImageSrc = (imgPath) => {
    if (!imgPath) return '';
    if (imgPath.startsWith('https')) return imgPath;
    return `${CDN}/${imgPath}/public`;
};

const EyeIcon = () => (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V14M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const EyeSlashIcon = () => (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const HomeAppBrand = ({ subtitle, title, reviewsbg, titleSeo, description, Author, URL }) => {
    const metatitle = String(titleSeo || "Top Brand Home Appliances Repair & Maintenance Service Dubai");
    const metadescription = String(description || "FAJ provides top-brand home appliance repair, including refrigerator, fridge, washing machine, dryer, dishwasher, oven & stove service center Dubai.");
    const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
    const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/brands/");
    const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac%20filter/public");

    subtitle = "Testimonial"
    title = "What our clients say About Us"
    reviewsbg = getImageSrc('testimonialbg')

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State for fetched data
    const [data, setData] = useState([]);
    const [testimonial_data, setTestimonialData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const openModal = useCallback((e) => {
        e.preventDefault();
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    }, []);
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
                    fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/FreestandingHomeAppliancesRepairServiceTestimonials.json`),
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
                    <meta name="author" content={metaAuthor} />
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={metaURL} />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:title" content={metatitle} />
                    <meta property="og:description" content={metadescription} />
                    <meta property="og:image" content={metaImage} />
                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={metatitle} />
                    <meta name="twitter:description" content={metadescription} />
                    <meta name="twitter:image" content={metaImage} />

                </Helmet>
            </HelmetProvider>


            <div className="cs_service_details">
                <section className="section cs_py_30">
                    <div className="container">
                        <h1 className="cs_fs_30">Top Brand Home Appliances Service Center and Repair in Dubai</h1>
                        <p>
                            Looking for a reliable home appliance service center? We specialize in the repair of appliances from major brands, including <a href="/services/home-appliances-repair/brands/lg/">LG</a>, <a href="/services/home-appliances-repair/brands/aeg/">AEG</a>, <a href="/services/home-appliances-repair/brands/ariston/">Ariston</a>, <a href="/services/home-appliances-repair/brands/beko/">Beko</a>, <a href="/services/home-appliances-repair/brands/la-germania/">La Germina</a>, <a href="/services/home-appliances-repair/brands/electrolux/">Electrolux</a>, <a href="/services/home-appliances-repair/brands/siemens/">Siemens</a>, <a href="/services/home-appliances-repair/brands/neff/">neff</a>, <a href="/services/home-appliances-repair/brands/teka/">Teka</a>, <a href="/services/home-appliances-repair/brands/whirlpool/">Whirlpool</a>, <a href="/services/home-appliances-repair/brands/samsung/">Samsung</a>, <a href="/services/home-appliances-repair/brands/viking/">Viking</a>, <a href="/services/home-appliances-repair/brands/subzero/">Sub Zero</a>,  <a href="/services/home-appliances-repair/brands/daewoo/">Daewoo</a>, <a href="/services/home-appliances-repair/brands/daewoo/">gaggenau</a>, <a href="/services/home-appliances-repair/brands/haiser/">Haier</a>, <a href="/services/home-appliances-repair/brands/hitachi/">Hitachi</a>, <a href="/services/home-appliances-repair/brands/sanyo/">Sanyo</a>, <a href="/services/home-appliances-repair/brands/midea/">Midea</a>, <a href="/services/home-appliances-repair/brands/aftron/">Aftron</a>, <a href="/services/home-appliances-repair/brands/maytag/">Maytag</a>, <a href="/services/home-appliances-repair/brands/wolf/">Wolf</a>, <a href="/services/home-appliances-repair/brands/frigidaire/">Frigidaire</a>, <a href="/services/home-appliances-repair/brands/admiral/">Admiral</a>, <a href="#">Speed Queen</a>, <a href="/services/home-appliances-repair/brands/smeg/">Smeg</a>, <a href="#">Speed Queen</a>, <a href="/services/home-appliances-repair/brands/miele/">Miele</a>, and Sharp.
                            Our experienced technicians offer fast and affordable repair services for all types of home appliances, such as washing machines, dryers, refrigerators, fridge freezers, ovens, stoves, dishwashers, cooker, hood and more.
                            We are committed to providing quick and efficient repair solutions so your appliances are up and running in no time.

                        </p>
                    </div>
                </section>

                <PriceCard />

                <section className="section cs_py_30">
                    <div className="container">
                        <h1 className="cs_fs_30">Kitchen Appliance Repairs Dubai and Sharjah, UAE</h1>
                        <p>
                            Welcome to FAJ Technical Services L.L.C, a reliable kitchen appliance repair and maintenance service company dedicated to going the extra mile for our customers. Established in 2010, our team of highly experienced technicians is available on call and undergoes regular training on new products and methods. We specialise in repairs, installations, and annual maintenance contracts (AMC) for a type freestading and built-in appliances and top brands of kitchen appliances across Dubai and Sharjah, UAE.
                        </p>
                        <div className="ac_service_tags_container">
                            <a href="/services/home-appliances-repair/hob-repair-service/"><span className="ac_service_tag">Hob Repair</span></a>
                            <a href="/services/home-appliances-repair/oven-repair-service/"><span className="ac_service_tag">Oven Repair</span></a>
                            <a href="/services/home-appliances-repair/gas-cooker-repair-service/"><span className="ac_service_tag">Gas Range Repair</span></a>
                            <a href="/services/home-appliances-repair/refrigerator-repair-service/"><span className="ac_service_tag">Refrigerator Repair</span></a>
                            <a href="/services/home-appliances-repair/dishwasher-repair-service/"><span className="ac_service_tag">Dishwasher Repair</span></a>
                            <a href="/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai"><span className="ac_service_tag">BBQ Repair Service</span></a>
                            <a href="/services/home-appliances-repair/cigar-humidor-repair/"><span className="ac_service_tag">Cigar Humdior Repair</span></a>
                            <a href="/services/home-appliances-repair/robot-vacuum-cleaner-repair/"><span className="ac_service_tag">Vacuume Repair</span></a>
                            <a href="/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/"><span className="ac_service_tag">Small Appliances Repair</span></a>
                            <a href="/services/home-appliances-repair/washing-machine-repair-service-dubai/"><span className="ac_service_tag">Washing Machine Repair</span></a>
                            <a href="/services/home-appliances-repair/built-in-appliances-repair-service/"><span className="ac_service_tag">Integrated Appliances Repair</span></a>
                            <a href="/services/home-appliances-repair/appliances-repair-service/"><span className="ac_service_tag">Free Standing Appliances Repair</span></a>
                            <a href="/services/home-appliances-repair/appliances-amc-service/"><span className="ac_service_tag">AMC Contract</span></a>
                        </div>
                    </div>
                </section>
                <section className="section cs_py_30 bg-light-white">
                    <div className="container">
                        <h1 className="cs_fs_30">Why Choose Top Brand FAJ Appliance Repair Service? – Trusted & Reliable Home Appliance Repairs</h1>
                        <p>
                            When you need home appliance repair, it's essential to select a reliable service provider that offers quality repairs and quick service with skilled technicians. At FAJ Technical Services L.L.C, we ensure that your appliances are repaired promptly, efficiently, and at an affordable price, all while upholding the highest standards of service.
                        </p>
                    </div>
                </section>

                <section className="section cs_py_30 bg-light-gray">
                    <div className="container">

                        <h3 className="cs_fs_30">We are Home Appliance Service Center in Dubai , Shrarjah UAE</h3>
                        <p>We repair top brands and models of home appliances, including washing machines, fridge freezers, dishwashers, tumble dryers, washer dryers, cookers, ovens, and hobs.All our repairs are carried out by trained technicians who are experts in appliance repair center.</p>
                        <div className="row align-items-start">
                            <div className="col-md-6">
                                <img className="blue-border" src={getImageSrc('dishwasher-repair-service')} alt="Admiral Washing Machine Repair" />
                            </div>
                            <div className="col-md-6">
                                <ul className="mb-0">
                                    <p> Our team has successfully handled numerous repairs across various appliances.
                                        Whether you need assistance with your washing machine, fridge freezer, cooker, dishwasher, or tumble dryer, we will quickly fix any faults that arise. All of our repairs are guaranteed for your peace of mind. You can conveniently book our services online at any time.
                                    </p>
                                    <li><strong>  Expert Appliances Technicians: </strong> Our technicians are skilled and experienced in troubleshooting and fixing appliance issues for all major brands. </li>
                                    <li><strong> Comprehensive Services: </strong> We offer a comprehensive range of services for home appliances, including minor repairs and major fixes. </li>
                                    <li><strong> Warranty Repair: </strong> It's important to use genuine spare parts in coffee machines, equipment, and vending machines for optimal performance and longevity. </li>
                                    <li><strong> Timely Booking:</strong>  Our online booking system is available every day of the week, allowing you to schedule repair at your convenience. </li>
                                    <li><strong> Quick Support: </strong> We realise the importance of functional appliances in our daily lives. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Issue Ac Maintenance */}
                <section className="ac_common_issues_section cs_py_60 bg-light-white">
                    <div className="container">
                        <div className="ac_issues_header_wrapper">
                            <h2>Common Appliance Repair Issues We Fix</h2>
                            <p>At FAJ Technical Services L.L.C,  we offer expert home appliance repair services for a variety of issues. If you’re experiencing any of the following problems, our skilled technicians are ready to assist you.</p>
                        </div>

                        <div className="ac_issues_grid_container">
                            <div className="ac_issue_single_card">
                                <div className="ac_issue_card_header">
                                    <h3>Washing Machine Repair</h3>
                                </div>
                                <div className="ac_issue_card_content">
                                    <p>Drum not rotating, door locked, power or display error, unusual noise during operation, drain blockage and water leakage, no spinning or excessive vibration.</p>
                                </div>
                            </div>

                            <div className="ac_issue_single_card">
                                <div className="ac_issue_card_header">
                                    <h3>Tumble Dryer Repair</h3>
                                </div>
                                <div className="ac_issue_card_content">
                                    <p>No water intake, soap dispenser not working, no steam during wash cycles, white patches left on utensils, and bad odor inside the dishwasher.</p>
                                </div>
                            </div>

                            <div className="ac_issue_single_card">
                                <div className="ac_issue_card_header">
                                    <h3>Refrigerator Repair</h3>
                                </div>
                                <div className="ac_issue_card_content">
                                    <p>No power Not cooling properly Excessive ice formation Loud compressor noise</p>
                                </div>
                            </div>

                            <div className="ac_issue_single_card">
                                <div className="ac_issue_card_header">
                                    <h3>Washer Dryer Repair</h3>
                                </div>
                                <div className="ac_issue_card_content">
                                    <p>Issues: Drum rotation failure, error messages displayed, clothes not drying properly, unusual noise, and excessive vibration.</p>
                                </div>
                            </div>

                            <div className="ac_issue_single_card">
                                <div className="ac_issue_card_header">
                                    <h3>Freezer Repair</h3>
                                </div>
                                <div className="ac_issue_card_content">
                                    <p>No power, not cooling efficiently; ice buildup and frost issues; compressor is making loud noises.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {!isLoading && testimonial_data.length > 0 && (
                    <Testimonial1
                        subtitle="What Our Clients Say"
                        title="Customer <span>Reviews</span>"
                        bgImg="img/testimonialbg.jpg"
                        testimonialData={testimonial_data}
                        sectionId="home-testimonials"
                    />
                )}
                <section className="ac_brands_services_section cs_py_60 bg-light-white">
                    <BlogHomeAppliances />
                </section>

                <section className="section cs_py_30 bg-dark-blue text-light">
                    <Serviceappointemnt
                        subtitle2="Contact us"
                        title2="Book An Appointment"
                    />
                </section>

                {/* Faqs */}
                <section className="section cs_py_30 text-black">
                    <div className="container">
                        <h3 className="cs_fs_30">FAQ's</h3>
                        <div className="cs_accordians_wrapper cs_style_1 p-0">
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`}
                                >
                                    <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                                        <span className="cs_fs_16 cs_semibold mb-0">{item.title}</span>
                                        <span className="cs_accordian_toggle">
                                            <i className="bi bi-eye"><EyeIcon /></i>
                                            <i className="bi bi-eye-slash"><EyeSlashIcon /></i>
                                        </span>
                                    </div>
                                    <div className="cs_accordian_body" ref={accordionContentRef}>
                                        <p
                                            className="mb-0"
                                            dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default HomeAppBrand