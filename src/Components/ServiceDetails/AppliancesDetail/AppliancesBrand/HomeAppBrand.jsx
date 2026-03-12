
import { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import loadBackgroudImages from '../../../Common/loadBackgroudImages';
import '../../../../assets/main.css';
import Testimonial1 from '../../../Testimonial/Testimonial1';
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import BlogHomeAppliances from '../../../Blog/BlogHomeAppliances';
import WhatsappIconButton from '../../../Buttons/WhatsappIconButton';
import ApplianceCategories from '../../../Services/homeappliances/ApplianceCategories';
import Gallery from '../../../Svg/Gallery';
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
                        <h1 className="cs_fs_30">Top Brand Home Appliances Service Center <br /> and Repair in Dubai</h1>
                        <p>
                            Looking for a reliable home appliance service center? We specialize in the repair of appliances from major brands, including <a href="/services/home-appliances-repair/brands/lg/">LG</a>, <a href="/services/home-appliances-repair/brands/aeg/">AEG</a>, <a href="/services/home-appliances-repair/brands/ariston/">Ariston</a>, <a href="/services/home-appliances-repair/brands/beko/">Beko</a>, <a href="/services/home-appliances-repair/brands/la-germania/">La Germina</a>, <a href="/services/home-appliances-repair/brands/electrolux/">Electrolux</a>, <a href="/services/home-appliances-repair/brands/siemens/">Siemens</a>, <a href="/services/home-appliances-repair/brands/neff/">neff</a>, <a href="/services/home-appliances-repair/brands/teka/">Teka</a>, <a href="/services/home-appliances-repair/brands/whirlpool/">Whirlpool</a>, <a href="/services/home-appliances-repair/brands/samsung/">Samsung</a>, <a href="/services/home-appliances-repair/brands/viking/">Viking</a>, <a href="/services/home-appliances-repair/brands/subzero/">Sub Zero</a>,  <a href="/services/home-appliances-repair/brands/daewoo/">Daewoo</a>, <a href="/services/home-appliances-repair/brands/gaggenau/">gaggenau</a>, <a href="/services/home-appliances-repair/brands/haier/">Haier</a>, <a href="/services/home-appliances-repair/brands/hitachi/">Hitachi</a>, <a href="/services/home-appliances-repair/brands/sanyo/">Sanyo</a>, <a href="/services/home-appliances-repair/brands/midea/">Midea</a>, <a href="/services/home-appliances-repair/brands/aftron/">Aftron</a>, <a href="/services/home-appliances-repair/brands/maytag/">Maytag</a>, <a href="/services/home-appliances-repair/brands/wolf/">Wolf</a>, <a href="/services/home-appliances-repair/brands/frigidaire/">Frigidaire</a>, <a href="/services/home-appliances-repair/brands/admiral/">Admiral</a>, <a href="#">Speed Queen</a>, <a href="/services/home-appliances-repair/brands/smeg/">Smeg</a>, <a href="/services/home-appliances-repair/brands/miele/">Miele</a>, and Sharp.<br />
                            Our experienced technicians offer fast and affordable repair services for all types of home appliances, such as washing machines, dryers, refrigerators, fridge freezers, ovens, stoves, dishwashers, cooker, hood and more.<br />
                            We are committed to providing quick and efficient repair solutions so your appliances are up and running in no time.

                        </p>
                    </div>
                </section>


                <section className="section cs_py_30">
                    <div className="container">
                        <h2 className="cs_fs_30">Kitchen Appliance Repairs Dubai and Sharjah, UAE</h2>
                        <p>
                            Welcome to FAJ Technical Services L.L.C, a reliable kitchen appliance repair and maintenance service company dedicated to going the extra mile for our customers. Established in 2010, our team of highly experienced technicians is available on call and undergoes regular training on new products and methods. We specialise in repairs, installations, and annual maintenance contracts (AMC) for a type freestading and built-in appliances and top brands of kitchen appliances across Dubai and Sharjah, UAE.
                        </p>
                    </div>
                </section>
                <div className='bg-light-gray'>
                    <ApplianceCategories />
                </div>
                {/* why choose */}
                <section className="section cs_py_30 bg-light-white ">
                    <div className="container border-1 p-0">
                        <h2 className="cs_fs_30 text-center mb-4">Why Choose FAJ Appliance Repair Service? Trusted & Reliable Home <br></br> Appliance Repairs</h2>
                        <p>When you require home appliance repair, it's essential to choose a reliable service center provider that offers quality repairs, quick service, and appliance technicians. At FAJ Technical Services L.L.C. we ensure that your appliances will be repaired promptly, efficiently, and at an affordable price, all while maintaining the highest standards of service.</p>
                        <h3>We are Home Appliance Repair Service Centers</h3>
                        <p>We repair all brands and models of Home appliances including washing machines, fridge freezers, dishwashers, tumble dryers, washer dryers, cookers, ovens, hobs. All our repairs are performed by trained technicians. We are experts in appliance repair, and our technicians have successfully handled multiple repairs inculding washing machines, fridge freezers, dishwashers, tumble dryers, washer dryers, cookers, ovens, hobs. Whether it is your Washing Machine, Fridge, freezer, Cooker, Dishwasher or Tumble Dryer. We will quickly fix any faults that develop, and all our repair are guaranteed. You can book online at any time.
                        </p>
                        <div className="row align-items-center g-0 border border-dark rounded overflow-hidden">
                            <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                                <div className="shop-ac-image-wrapper">
                                    <img
                                        src={`${CDN}/techfridge/public`}
                                        alt="Commercial Air Conditioning Maintenance Services in Dubai - FAJ Technical Services L.L.C"
                                        title="Commercial AC Maintenance Service in Dubai"
                                        width="500"
                                        height="400"
                                        loading="lazy"
                                        decoding="async"
                                        className="service-image"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            display: 'block',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="col-12 col-lg-7 px-3">
                                <div className="shop-ac-bullet-list">
                                    <div className="shop-ac-bullet-col">
                                        <ul className='m-1'>
                                            <li><b>Expert Technicians:</b> Our technicians are trained and experienced in resolving appliance issues across all major brands.</li>
                                            <li><b>Comprehensive Services:</b> We provide a wide range of services for home appliances, from minor fixes to major repair.</li>
                                            <li><b>Warranty Repair:</b> Using genuine parts in coffee machines, equipment, and vending machines.</li>
                                            <li><b>Timely Booking:</b> Our online booking system is available seven days a week, allowing you to schedule repairs at your convenience.</li>
                                            <li><b>Quick Support:</b> We recognize the importance of functional appliances in our daily lives and work hard to deliver prompt and efficient repair services.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="d-flex justify-content-center align-items-center gap-3">
                                <WhatsappIconButton />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Issue Ac Maintenance */}
                <section className="ac_common_issues_section cs_py_60 bg-light-gray">
                    <div className="container">
                        <div className="ac_issues_header_wrapper">
                            <h2>Common Appliance Repair Issues We Fix</h2>
                            <p>At <b>FAJ Technical Services L.L.C</b> , we offer expert home appliance repair services for a variety of issues. If you’re experiencing any of the following problems, <br /> our skilled technicians are ready to assist you.</p>
                        </div>

                        <div className="ac_issues_grid_container">
                            <div className="ac_issue_single_card">
                                <div className="text-center text-white bgdarkblue">
                                    <h3>Washing Machine Repair</h3>
                                </div>
                                <div className="ac_issue_card_content">
                                    <p>Drum not rotating, door locked, power or display error, unusual noise during operation, drain blockage and water leakage, no spinning or excessive vibration. </p>
                                </div>
                            </div>

                            <div className="ac_issue_single_card">
                                <div className="text-center text-white bgdarkblue">
                                    <h3>Tumble Dryer Repair</h3>
                                </div>
                                <div className="ac_issue_card_content">
                                    <p>No water intake, soap dispenser not working, no steam during wash cycles, white patches left on utensils, and bad odor inside the dishwasher.</p>
                                </div>
                            </div>

                            <div className="ac_issue_single_card">
                                <div className="text-center text-white bgdarkblue">
                                    <h3>Dishwasher Repair</h3>
                                </div>
                                <div className="ac_issue_card_content">
                                    <p>No water intake, soap dispenser not working, no steam during wash cycles, white patches left on utensils, and bad odor inside the dishwasher.</p>
                                </div>
                            </div>

                            <div className="ac_issue_single_card">
                                <div className="text-center text-white bgdarkblue">
                                    <h3>Refrigerator Repair</h3>
                                </div>
                                <div className="ac_issue_card_content">
                                    <p>No power Not cooling properly Excessive ice formation Loud compressor noise.</p>
                                </div>
                            </div>

                            <div className="ac_issue_single_card">
                                <div className="text-center text-white bgdarkblue">
                                    <h3>Washer Dryer Repair</h3>
                                </div>
                                <div className="ac_issue_card_content">
                                    <p>Issues: Drum rotation failure, error messages displayed, clothes not drying properly, unusual noise, and excessive vibration.</p>
                                </div>
                            </div>
                             <div className="ac_issue_single_card">
                                <div className="text-center text-white bgdarkblue">
                                    <h3>Freezer Repair</h3>
                                </div>
                                <div className="ac_issue_card_content">
                                    <p>No power, not cooling efficiently; ice buildup and frost issues; compressor is making loud noises.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 px-4">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
                </section>

                {/* Gallery */}
                <section className="section gallery_section bg-light-white cs_py_30">
                    <div className="container">
                        <h2>Gallery  <Gallery /></h2>
                        <div className="row gx-3 gy-2">
                            <div className="col-md-4 col-6">
                                <img src={`${CDN}/homeappliances/galleryimghome/public`} alt="" />
                            </div>
                            <div className="col-md-4 col-6">
                                <img src={`${CDN}/galleryimghome2/public`} alt="" />
                            </div>
                            <div className="col-md-4 col-6">
                                <img src={`${CDN}/homeappliances/galleryimg3/public`} alt="" />
                            </div>
                            <div className="col-md-4 col-6">
                                <img src={`${CDN}/homeappliances/galleryimg4/public`} alt="" />
                            </div>
                            <div className="col-md-4 col-6">
                                <img src={`${CDN}/homeappliances/galleryimg5/public`} alt="" />
                            </div>
                            <div className="col-md-4 col-6">
                                <img src={`${CDN}/homeappliances/galleryimg6/public`} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                {!isLoading && testimonial_data.length > 0 && (
                    <Testimonial1
                        subtitle="What Our Clients Say"
                        title="Customer <span>Reviews</span>"
                        bgImg="testimonialbg"
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