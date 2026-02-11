
import { useEffect, useRef, useState } from 'react';
import Testimonial1 from '../../Testimonial/Testimonial1';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import loadBackgroudImages from '../../Common/loadBackgroudImages';
import '../../../assets/main.css';
import BlogKitchenEquipmentCatg from '../../Blog/BlogKitchenEquipmentCatg';
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const KitchenEquipmentCatg = ({ subtitle, title, reviewsbg, titleSeo, description, Author, URL }) => {
  const metatitle = String(titleSeo || "Kitchen Equipment Maintenance Service Company in Dubai");
  const metadescription = String(description || "Best kitchen equipment maintenance! FAJ offers installation and servicing for restaurant, hotel, schools in Dubai, including cooking ranges, fryers, ovens.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaURL = String(URL || "https://www.fajservices.ae/services/kitchen-equipment-maintenance/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac%20filter/public");

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
          fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/FAQs/kitchenequipmentfaqcatg.json`),
          fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/Testmonials/KitchenEquipmentRepairTestimonials.json`)
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
          <meta name="description" content="Best kitchen equipment maintenance! FAJ offers installation and servicing for restaurant, hotel, schools in Dubai, including cooking ranges, fryers, ovens."></meta>
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.fajservices.ae/services/kitchen-equipment-maintenance/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="Kitchen Equipment Maintenance Service Company in Dubai" />
          <meta property="og:url" content={metaURL}></meta>
          <meta property="og:description" content={metadescription} />
          <meta property="og:image" content={metaImage} />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Kitchen Equipment Maintenance Service Company in Dubai" />
          <meta name="twitter:description" content="Best kitchen equipment maintenance! FAJ offers installation and servicing for restaurant, hotel, schools in Dubai, including cooking ranges, fryers, ovens." />
          <meta name="twitter:image" content={metaImage} />

        </Helmet>
      </HelmetProvider>

      <div className="cs_service_details">
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Professional Kitchen Equipment Maintenance and Servicing in Dubai</h1>
            <p>FAJ Technical Services L.L.C has been serving the kitchen equipment needs of Dubai since 2010. We provide comprehensive solutions for all types of commercial kitchen equipment.
              Our services encompass installation, maintenance, and repair, catering to a diverse range of clients, including hospitality outlets, hotels, restaurants, cafes, catering services, and residential homes and villas. Additionally, we serve industrial facilities, corporate offices, and shopping centers.
            </p>
          </div>
        </section>
        {/* Technical Services to Keep Your Coffee Flowing */}
        <section className="b2b_section cs_py_60 bg-light-gray">
          <div className="container">
            <h2 className="b2b_title">Kitchen Maintenance Services and Solutions for Business-to-Business (B2B)</h2>

            <div className="b2b_content_wrapper">
              <div className="b2b_images">
                <img src={getImageSrc('kitchenmaintenansceservice')} alt="Kitchen Maintenance Service" />
              </div>

              <div className="b2b_text">
                <p>Since 2010, FAJ Technical L.L.C has established itself as the leading service provider of commercial kitchen maintenance solutions in Dubai, UAE. We are committed to delivering exceptional service and expertise, ensuring your kitchen operates at height performance. Trust us to meet your kitchen maintenance needs with confidence.</p>
              </div>
            </div>
          </div>
        </section>
        {/* icons boxxxxxxx */}
        <section className="services_features cs_py_60 bg-light-gray">
          <div className="container">
            <div className="services_grid">
              <div className="service_card">
                <div className="service_icon">
                  <img src={getImageSrc('comprehensiveandprofessional')} alt="Comprehensive Services" />
                </div>
                <div className="service_content">
                  <h3>Comprehensive and</h3>
                  <p>Professional Services</p>
                </div>
              </div>

              <div className="service_card">
                <div className="service_icon">
                  <img src={getImageSrc('annualmaintenanceagreement')} alt="Comprehensive Services" />
                </div>
                <div className="service_content">
                  <h3>Annual Maintenance</h3>
                  <p>Agreement Services</p>
                </div>
              </div>

              <div className="service_card">
                <div className="service_icon">
                  <img src={getImageSrc('accesstokitchenequipment')} alt="Comprehensive Services" />
                </div>
                <div className="service_content">
                  <h3>Access to Kitchen Equipment</h3>
                  <p>Spare Parts</p>
                </div>
              </div>

              <div className="service_card">
                <div className="service_icon">
                  <img src={getImageSrc('customersupport')} alt="Comprehensive Services" />
                </div>
                <div className="service_content">
                  <h3>Customer Support</h3>
                  <p>7-Day Call Outs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="maintenance_importance cs_py_60 bg-light-white">
          <div className="container">
            <div className="importance_header">
              <h2>Why Is Commercial Kitchen Equipment Maintenance Important?</h2>
              <p>All kitchen equipment requires care, but some need specific maintenance for safe food handling and a good working environment. Below are key items and their maintenance needs:</p>
            </div>

            <div className="importance_content">
              <div className="importance_image">
                <img src={getImageSrc('whykitchenequipment')} alt="Commercial Kitchen Equipment" />
              </div>

              <div className="importance_list">
                <div className="importance_item">
                  <p><b>Cooking & Baking Equipment:</b> Cooking range, cookers, ovens, stove tops and fryer are basic kitchen equipment that must be cleaned regularly to avoid buildup and ensure even cooking. Fryers also need proper oil management to maintain food quality.</p>
                </div>

                <div className="importance_item">
                  <p><b>Refrigeration Equipment:</b> Refrigerators and freezers should be cleaned regularly to remove buildup and require temperature monitoring. Checking and adjusting the temperature is vital for food storage and freshness.</p>
                </div>

                <div className="importance_item">
                  <p><b>Food Preparation Equipment:</b> Mixers, slicers, and blenders have specific functionality and deep, making thorough cleaning essential to prevent contamination, especially with raw meats. Regular lubrication of moving parts is also necessary to avoid straining the motor.</p>
                </div>

                <div className="importance_item">
                  <p><b>Dishwashing Equipment:</b> Inspect dishwashers and sinks for leaks and drainage to ensure effective washing. Regular descaling is essential to remove food debris buildup that can affect safety and performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits_section cs_py_60 bg-light-gray">
          <div className="container">
            <h2 className="benefits_title">Top Benefits of Preventive Maintenance for Kitchen Equipment</h2>

            <div className="benefits_grid">
              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('improvedequipment')} alt="Comprehensive Services" />
                </div>
                <h3>Improved Equipment Lifespan</h3>
                <p>Regular maintenance can extend the life of kitchen equipment, helping you avoid costly parts replacements.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('improvedefficiy')} alt="Comprehensive Services" />
                </div>
                <h3>Improved Efficiency</h3>
                <p>Well-maintained equipment operates more efficiently, leading to reduced energy consumption and lower utility bills.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('consistentperformance')} alt="Comprehensive Services" />
                </div>
                <h3>Consistent Performance</h3>
                <p>Preventive maintenance ensures that all kitchen equipment functions reliably, minimising the risk of unexpected repair work during trading hours.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('foodsafetycompliance')} alt="Comprehensive Services" />
                </div>
                <h3>Food Safety Compliance</h3>
                <p>Keeping equipment in good condition helps meet health and safety standards, ensuring that food is prepared and stored safely.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('repaircostsavings')} alt="Comprehensive Services" />
                </div>
                <h3>Repair Cost Savings</h3>
                <p>By addressing minor issues before they escalate, you can save money on important repairs and avoid downtime.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('peaceofmind')} alt="Comprehensive Services" />
                </div>
                <h3>Peace of Mind</h3>
                <p>Knowing that your kitchen equipment is regularly maintained gives you confidence in its performance and reduces stress during busy periods.</p>
              </div>
            </div>
          </div>
        </section>


        {/* common problem */}
        <section className="common_problems cs_py_60">
          <div className="container">
            <h2 className="problems_title">Most Common Problems with Commercial Kitchen Equipment</h2>

            <div className="problems_grid">
              <div className="problem_card">
                <div className="problem_icon_wrapper">
                  <img src={getImageSrc('gasburnerIgnitionroblems')} alt="Comprehensive Services" />
                </div>
                <h3>Gas Burner Ignition Problems</h3>
                <p>Gas stove burners that won't ignite can disrupt kitchen operations, affecting food quality. This is often due to clogged gas lines, faulty ignition switches, or dirty pilot lights.</p>
              </div>

              <div className="problem_card">
                <div className="problem_icon_wrapper">
                  <img src={getImageSrc('ovennotheating')} alt="Comprehensive Services" />
                </div>
                <h3>Oven not Heating</h3>
                <p>Conflicting oven heating can cause food to be undercooked or overcooked, affecting food quality. This issue often results from faulty heating elements, calibration errors, or worn thermostats.</p>
              </div>

              <div className="problem_card">
                <div className="problem_icon_wrapper">
                  <img src={getImageSrc('deepfryerbreakdowns')} alt="Comprehensive Services" />
                </div>
                <h3>Deep Fryer Breakdowns</h3>
                <p>Electric or Gas deep fryers can get oil, leading to blocked parts, uneven heating, and higher fire risks. Poor maintenance may also cause thermostat and heating element or gas burner failures.</p>
              </div>

              <div className="problem_card">
                <div className="problem_icon_wrapper">
                  <img src={getImageSrc('equipmentnotworking')} alt="Comprehensive Services" />
                </div>
                <h3>Equipment not Working</h3>
                <p>Kitchen equipment like mixers, blenders, processors, mixers, juicers, and coffee makers can overheat from dirty filters, blocked vents, or faulty thermostats, leading to possible damage and safety risks.</p>
              </div>

              <div className="problem_card">
                <div className="problem_icon_wrapper">
                  <img src={getImageSrc('refrigerationfailures')} alt="Comprehensive Services" />
                </div>
                <h3>Refrigeration Failures</h3>
                <p>Uneven temperatures or total refrigeration loss can cause food spoilage and health violations. Common issues include dirty condenser coils, worn door seals that let cold air escape, and failing compressors.</p>
              </div>

              <div className="problem_card">
                <div className="problem_icon_wrapper">
                  <img src={getImageSrc('icemachineblockages')} alt="Comprehensive Services" />
                </div>
                <h3>Ice Machine Blockages</h3>
                <p>Mineral deposits and clogged filters in ice makers can block water flow and reduce ice production, affecting beverage service and customer satisfaction.</p>
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

        <BlogKitchenEquipmentCatg />

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
      </div>
    </>
  )
}

export default KitchenEquipmentCatg