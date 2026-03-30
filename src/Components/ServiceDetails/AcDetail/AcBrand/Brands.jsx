
import { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import loadBackgroudImages from '../../../Common/loadBackgroudImages';
import '../../../../assets/main.css';
import BlogCategoryHomePage from '../../../Blog/BlogCategoryHomePage';
import Testimonial1 from '../../../Testimonial/Testimonial1';
import PriceCard from '../AcLocation/PriceCard';
import Practicaltip from '../../../Common/Practicaltip';
import AcProperties from '../../../Common/AcProperties';
import MaintenanceContract from '../../../MaintenanceContract/MaintenanceContract';
import Gallery from '../../../Svg/Gallery';
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
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
const Brands = ({ subtitle, title, reviewsbg, titleSeo, description, Author, URL }) => {
  const metatitle = String(titleSeo || "Top Brands AC Maintenance Dubai | AC Cleaning & AC Repairing");
  const metadescription = String(description || "We provide top brand HVAC maintenance, installation & services across Dubai, including Samsung, LG, O General, Rheem, Mitsubishi, Carrier & Daikin.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/brands/");
  const metaImage = String(Image || "https://imagedelivery.net/diswasherrr/public");

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
        const [faqsResponse, testimonialsResponse, brandsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/categorybrandsfaqs.json`),
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
            <h1 className="cs_fs_30">FAJ Providing Top Brands AC Maintenance and Servicing in Dubai</h1>
            <p>
              Expert HVAC maintenance when you need it most for your home or business.
              FAJ Technical Services L.L.C. is ready to help when your system experiences issues. Our team of skilled HVAC technicians specialises in top-brand air conditioning maintenance. We are on call to quickly diagnose and fix errors or any problems, confirming your space remains cool, comfortable, and running smoothly.
            </p>
          </div>
        </section>

        <PriceCard />

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Comprehensive AC Repair and Services for All Major Brands Across Dubai Locations.</h2>
            <p>
              We have successfully maintained, repaired, and serviced premium air conditioning systems across a wide variety of properties throughout Dubai. Our expertise includes brands such as Daikin AC, Rheem AC, Mitsubishi AC, Carrier AC, O General AC, Samsung AC, LG AC, Trane AC, SKM AC, Gree AC, York AC, and more AC brands.
              These top brands have become popular choices for homeowners and business owners seeking to improve their indoor comfort with discreet and high-performance air conditioning. This is especially important for modern flats, luxury apartments, villas, and listed buildings where external units are not allowed.
            </p>
          </div>
        </section>

        <section className="our_process cs_py_60 bg-light-gray">
          <div className="container">
            <div className="process_wrapper">
              <div className="process_header">
                <h2>Our AC Repair and Maintenance Process Quick and Efficient</h2>
                <p>Our service process, though comprehensive, primarily includes the following key steps:</p>
              </div>

              <div className="process_content">
                <div className="process_image">
                  <img src={getImageSrc('acmaintenanceindubai')} alt="AC Maintenance Service Process" />
                </div>

                <div className="process_list">
                  <div className="process_item">
                    <p><b>Initial Consultation:</b> Contact us today to discuss your air conditioning needs. We will gather information about your situation and schedule a convenient time for an inspection.</p>
                  </div>

                  <div className="process_item">
                    <p><b>Initial appointment:</b> Contact us today to discuss your air conditioning requirements. We will collect details about your condition and arrange a suitable time for an inspection.</p>
                  </div>

                  <div className="process_item">
                    <p><b>Technical Inspection & Diagnosis</b> This section explains how to identify problems. A thorough technical inspection is required for proper diagnosis, ensuring issues are understood before repair.</p>
                  </div>

                  <div className="process_item">
                    <p><b>Transparent Quotation:</b>  We provide clear and detailed quotes for all our services. Our quotes include all parts and labor, ensuring there are no hidden costs.</p>
                  </div>

                  <div className="process_item">
                    <p><b>Efficient Repair or Services:</b> Our technicians work efficiently to minimize upsets and ensure a clean, effective service.</p>
                  </div>
                  <div className="process_item">
                    <p><b>Final Inspection and Client Satisfaction: </b> Your happiness is our top priority. We strive to deliver high-quality work and excellent service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issue AC Maintenance */}
        <section className="ac_common_issues_section cs_py_60 bg-light-white">
          <div className="container">
            <div className="ac_issues_header_wrapper">
              <h2>Common Problems of AC Maintenance Service in Dubai, UAE</h2>
              <p>We have encountered thousands of AC systems and identified common issues.
                Here are the errors that people frequently make:</p>
            </div>

            <div className="ac_issues_grid_container">
              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Waiting until Dubai hot summer to get maintenance</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>Your air conditioning has been off for months. When summer arrives and you turn it on, it fails to work correctly. Now you’re among thousands waiting daytimes for emergency AC service.</p>
                  <h4>Better procedure:</h4>
                  <p>Schedule AC maintenance in March or April to provide better availability, lower prices, and peace of mind for your AC before hot summer.</p>
                </div>
              </div>

              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Only touch when something fails</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>Reactive HVAC maintenance is quite more expensive than preventive maintenance. A 199 AED service visit could have prevented an 1,850 AED emergency AC repair.</p>
                  <h4>Better procedure:</h4>
                  <p>Regular maintenance, whether performed annually or biannually, helps to identify problems before they escalate into costly emergencies.</p>
                </div>
              </div>

              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Selecting the cheapest option</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>Is that company offering AC service for 50 to 100 AED? They might be cutting crossings or planning to upsell you aggressively once they are in your home.</p>
                  <h4>Better procedure:</h4>
                  <p>Always seek fair pricing from reputable companies. Generally, you get what you pay for.</p>
                </div>
              </div>

              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Allowing unqualified individuals to work on your home appliance</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>That handyman who claims he can check your AC inexpensively? He might actually make it worse.</p>
                  <h4>Better procedure:</h4>
                  <p> Choose a licensed company with professional AC technicians who are skilled and familiar.</p>
                </div>
              </div>

              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Ignoring warning signs</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>Unusual sounds, poor cooling, water leaks, and rising electricity Dewa bills mean that your AC is showing a problem.</p>
                  <h4>Better procedure:</h4>
                  <p>Handle minor issues before they escalate into major troubles.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to use FAJ AC Service and AC Repair in Dubai? */}
        <section className="faj_ac_services_section cs_py_60 bg-light-gray">
          <div className="container">
            <h2 className="faj_services_main_heading">How to use FAJ AC Service and AC Repair in Dubai?</h2>
            <p className="faj_services_intro_text">
              Are you searching for reliable air conditioning services in Dubai? FAJ Technical Services L.L.C provides excellent AC repair and AC cleaning service right at your doorstep. Our team of experts is committed to providing your comfort with excellent service.
            </p>

            <div className="faj_services_grid_container">
              <div className="faj_service_box">
                <h3 className="faj_service_box_title">AC Repair in Dubai for Improved Performance</h3>
                <p className="faj_service_box_text">
                  Your AC not cooling effectively? Our AC technicians can diagnose and fix AC errors.
                </p>
              </div>

              <div className="faj_service_box">
                <h3 className="faj_service_box_title">Regular AC Cleaning for Maximum Efficiency</h3>
                <p className="faj_service_box_text">
                  For optimal performance, keep your AC clean and AC cleaning. We offer AC duct cleaning and filters for fresh.
                </p>
              </div>

              <div className="faj_service_box">
                <h3 className="faj_service_box_title">Essential AC Maintenance Service Dubai</h3>
                <p className="faj_service_box_text">
                  Regular AC maintenance is necessary. Our services help prepare your AC for the summer heat.
                </p>
              </div>

              <div className="faj_service_box">
                <h3 className="faj_service_box_title">Assistance with New AC Installation</h3>
                <p className="faj_service_box_text">
                  Upgrading to a new AC unit? Let our AC experts handle the detection, installation, and testing!
                </p>
              </div>

              <div className="faj_service_box">
                <h3 className="faj_service_box_title">Emergency AC Repair in Dubai</h3>
                <p className="faj_service_box_text">
                  Experiencing unexpected AC malfunction? Our 7-day emergency AC repairs is available to provide quick service.
                </p>
              </div>

              <div className="faj_service_box">
                <h3 className="faj_service_box_title">AC Service Dubai Available Near Me Before Summer</h3>
                <p className="faj_service_box_text">
                  Get ready for summer! Schedule your AC tune up to ensure comfort during the heat.
                </p>
              </div>
            </div>

            <div className="faj_cta_section">
              <h3 className="faj_cta_heading">Schedule your FAJ AC Cleaning, AC Repair & Maintenance Services today!</h3>
              <p className="faj_cta_text">
                For reliable AC service and repair in Dubai, choose FAJ. Our experienced technicians deliver exceptional service every time. Book now by calling, emailing, chatting on WhatsApp, or visiting our website to experience the difference!
              </p>
            </div>
          </div>
        </section>

        {/* beniift */}
        <section className="benefits_section cs_py_60 bg-light-white">
          <div className="container">
            <h2 className="benefits_title">Benefits of Professional AC Repair and Maintenance</h2>
            <div className='paragraph_sec'>
              <p>While some may consider DIY air conditioning repair, these tasks can be complex and require technical knowledge. Wrong repairs can lead to safety hazards and increased costs. Skilled technicians can accurately diagnose issues and ensure safe, effective repairs that maximize your system’s performance. Trusting their expertise is a smart choice for the longevity of your air conditioning unit. FAJ Technical Services L.L.C. is ready to assist.</p>
            </div>
            <div className="benefits_grid">
              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Safety-First')} alt="Comprehensive Services" />
                </div>
                <h3>Safety First</h3>
                <p>Our professional repair deliver lasting results by targeting the root causes of your AC issues, stopping future issues and improving reliability.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Real-Diagnosis')} alt="Comprehensive Services" />
                </div>
                <h3>Real Diagnosis</h3>
                <p>Diagnosing air conditioning problems requires skill and specialized tools. Our experts quickly identify problems and provide effective solutions, saving you both time and frustration.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Warranty-Protection')} alt="Comprehensive Services" />
                </div>
                <h3>Warranty Protection</h3>
                <p>Many air conditioning systems come with warranties that require professional servicing. Choose FAJ Technical Services L.L.C. to ensure your warranty remains covered.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Long-Term-Reliability')} alt="Comprehensive Services" />
                </div>
                <h3>Long-Term Reliability</h3>
                <p>Our professional repair deliver lasting results by targeting the root causes of your AC issues, stopping future issues and improving reliability.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Energy-Savings')} alt="Comprehensive Services" />
                </div>
                <h3>Energy Savings</h3>
                <p>Professional repair can improve your system's efficiency, greatly reducing energy consumption and reducing your monthly utility bills.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Protects-Property')} alt="Comprehensive Services" />
                </div>
                <h3>Protects Property</h3>
                <p>Protects electronics from damage and prevents distortion caused by hot summer extreme heat and moisture.</p>
              </div>
            </div>
          </div>
        </section>

        {/* import */}
        <section className="air_conditioning_inspection_section cs_py_60 bg-light-gray">
          <div className="container">
            <h2 className="inspection_main_heading">Importance of Air Conditioning Inspection</h2>

            <div className="inspection_content_grid">
              <div className="inspection_text_column">
                <h3 className="inspection_sub_heading">Why It's Necessary?</h3>
                <p className="inspection_description">
                  Regular inspections of AC systems help identify potential issues early, ensuring optimal performance and extending the lifespan of your AC unit. They improve energy efficiency, reduce energy bills, and improve AC indoor air quality by removing dust and mold, making a healthier climate.
                </p>
              </div>

              <div className="inspection_image_column">
                <img
                  src={getImageSrc('importbrand')}
                  alt="AC Inspection Service"
                  className="inspection_main_image"
                />
              </div>
            </div>

            <div className="inspection_note_section">
              <p className="inspection_note_text">
                The AC technical inspection fee covers an on-site visit from our team and transportation to Dubai. If the customer requests services like repair, maintenance, cleaning, or part replacement during the visit, this fee will be deducted from the total service cost.
              </p>
              <p className="inspection_note_text">
                Please note that the inspection fee is non-refundable and does not include carpentry work, gypsum cutting actions, or AC repairs. Following the inspection, FAJ will provide a quotation.
              </p>
            </div>
          </div>
        </section>


        <Practicaltip />
        <AcProperties />
        <MaintenanceContract />

        <section className="section gallery_section bg-light-gray cs_py_30">
          <div className="container">
            <h2>Gallery  <Gallery /></h2>
            <div className="row gx-3 gy-2">
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide1/public`} alt="" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide2/public`} alt="" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide3/public`} alt="" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide4/public`} alt="" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide5/public`} alt="" />
              </div>
              <div className="col-md-4 col-6">
                <img src={`${CDN}/AcService/slide6/public`} alt="" />
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
        <section className="ac_brands_services_section cs_py_60 bg-light-gray">
          <BlogCategoryHomePage />
        </section>
        {/* we specilized */}

        <section className="ac_brands_services_section cs_py_60">
          <div className="container">
            <h2 className="ac_brands_main_heading">We specialise in air conditioning services for the following brands</h2>

            <div className="ac_brands_list_wrapper">
              <ul className="ac_brands_bullet_list">
                <li className="ac_brand_item">
                  <a href="/services/air-conditioning-repair/brands/daikin/"><strong>Daikin Air Conditioning Services:</strong></a> Daikin, a Japanese manufacturer, claims to be "the world's number one air conditioning company." Founded in 1924, it has developed a strong internationalization strategy focused on quality, innovation, and effective commercialization. We work with Daikin air conditioning products.
                </li>
                <li className="ac_brand_item">
                  <a href="/services/air-conditioning-repair/brands/gree/"><strong>Gree AC Repair and Service:</strong></a> Gree Electric Appliances, Inc., founded in 1991 in Zhuhai, is a key player in the global air conditioning market. Starting with air conditioners, Gree has expanded its product lines to include various home appliances and became China's largest air conditioner manufacturer.
                </li>
                <li className="ac_brand_item">
                  <a href="/services/air-conditioning-repair/brands/o-general/"><strong>O General AC Repair and Maintenance:</strong></a> O General AC, a brand of Fujitsu General, is renowned for its Japanese engineering and high-quality air conditioner solutions.
                </li>
                <li className="ac_brand_item">
                  <a href="/services/air-conditioning-repair/brands/mitsubishi/"><strong>Mitsubishi AC Service and Repair:</strong></a> Founded in 1954, Mitsubishi Air Conditioning has been producing air conditioning systems for nearly 70 years and is renowned for its reliability and energy efficiency.
                </li>
                <li className="ac_brand_item">
                  <a href="/services/air-conditioning-repair/brands/samsung/"><strong>Samsung AC Maintenance Service:</strong></a> Samsung AC is a globally recognized name, known for pushing boundaries. Since 1969, they have continued to shape and lead innovations in air conditioning technology.
                </li>
                <li className="ac_brand_item">
                  <a href="/services/air-conditioning-repair/brands/york/"><strong>York AC Servicing and Repair:</strong></a> YORK® has been an industry leader since our founding in 1874.
                </li>
                <li className="ac_brand_item">
                  <a href="/services/air-conditioning-repair/brands/lg/"><strong>LG Air Maintenance and Service:</strong></a> LG began its air conditioning business in 1968 with the launch of its first unit.
                </li>
                <li className="ac_brand_item">
                  <a href="/services/air-conditioning-repair/brands/trane/"><strong>Trane HVAC Repair and Maintenance:</strong></a> Trane developed its first air conditioning unit in 1931.
                </li>
                <li className="ac_brand_item">
                  <strong>Carrier AC Repair and Service in Dubai:</strong> Carrier AC, Regular and Servicing in Dubai. Since 1902, Carrier HVAC has pioneered a legacy of innovation in the heating, air conditioning and refrigeration industries.
                </li>
                <li className="ac_brand_item">
                  <a href="/services/air-conditioning-repair/brands/rheem/"><strong>Rheem AC Repair and Service Near Me:</strong></a> Rheem AC was founded in 1925 in California, initially making steel drums. It rapidly transitioned to manufacturing water heaters and, in the 1940s and 1950s, expanded into furnaces, split, and central air conditioning systems to meet the growing demand for home comfort. Today, Rheem is a leading global HVAC provider known for its innovation and diverse heating and cooling solutions.
                </li>
              </ul>
            </div>

            <div className="ac_service_tags_container">
               <a href="/services/air-conditioning-repair/brands/skm/"><span className="ac_service_tag">SKM AC Maintenance Dubai</span></a>
              <a href="/services/air-conditioning-repair/brands/york/"><span className="ac_service_tag">York AC Repair and Service Dubai</span></a>
              <a href="/services/air-conditioning-repair/brands/lennox/"><span className="ac_service_tag">Lennox Air Conditioning Maintenance Service</span></a>
              <a href="/services/air-conditioning-repair/brands/aftron/"><span className="ac_service_tag">Aftron AC Maintenance Service</span></a>
              <a href="/services/air-conditioning-repair/brands/bryant/"><span className="ac_service_tag">Bryant AC Repair Service Dubai</span></a>
              <a href="/services/air-conditioning-repair/brands/blue-star/"><span className="ac_service_tag">Blue Star AC Repair</span></a>
              <a href="/services/air-conditioning-repair/brands/toshiba/"><span className="ac_service_tag">Toshiba AC Fix</span></a>
              <a href="/services/air-conditioning-repair/brands/supra/"><span className="ac_service_tag">Supera AC Maintenance</span></a>
              <a href="/services/air-conditioning-repair/brands/super-general/"><span className="ac_service_tag">Super General AC Repair and Services in Dubai</span></a>
              <a href="/services/air-conditioning-repair/brands/hitachi/"><span className="ac_service_tag">Hitachi AC Service</span></a>
              <a href="/services/air-conditioning-repair/brands/whirlpool/"><span className="ac_service_tag">Whirlpool AC Repair</span></a>
              <a href="/services/air-conditioning-repair/brands/daewoo/"><span className="ac_service_tag">Daewoo AC Cleaning</span></a>
              <a href="/services/air-conditioning-repair/brands/coleman/"><span className="ac_service_tag">Cooleman Air Condition Services</span></a>
              <a href="/services/air-conditioning-repair/brands/cooline/"><span className="ac_service_tag">Cooline Air Condition Maintenance</span></a>
              <a href="/services/air-conditioning-repair/brands/crafft/"><span className="ac_service_tag">Craft Aircon Maintenance Servicing Dubai</span></a>
              <a href="/services/air-conditioning-repair/brands/daikool/"><span className="ac_service_tag">Daikool AC Repairing Dubai</span></a>
              <a href="/services/air-conditioning-repair/brands/fujitsu/"><span className="ac_service_tag">Fujitsu AC Maintenance Service Dubai</span></a>
              <a href="/services/air-conditioning-repair/brands/goodman/"><span className="ac_service_tag">Goodman AC Services</span></a>
              <a href="/services/air-conditioning-repair/brands/haier/"><span className="ac_service_tag">Haier AC Repair and Service</span></a>
              <a href="/services/air-conditioning-repair/brands/mcquay/"><span className="ac_service_tag">McQuay AC Conditioning Repair</span></a>
              <a href="/services/air-conditioning-repair/brands/midea/"><span className="ac_service_tag">Midea AC Service and Repair</span></a>
              <a href="/services/air-conditioning-repair/brands/panasonic/"><span className="ac_service_tag">Panasonic Air Conditioning Services</span></a>
              <a href="/services/air-conditioning-repair/brands/ruud/"><span className="ac_service_tag">Ruud Air Conditioner Maintenance Servicing</span></a>
              <a href="/services/air-conditioning-repair/brands/westpoint/"><span className="ac_service_tag">West Point AC Repair and Service</span></a>
            </div>
          </div>
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

export default Brands