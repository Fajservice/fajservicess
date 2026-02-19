
import { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import loadBackgroudImages from '../../../Common/loadBackgroudImages';
import '../../../../assets/main.css';
import Testimonial1 from '../../../Testimonial/Testimonial1';
import BlogAppliances from '../../../Blog/BlogAppliances';
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const HomeCoverageArea = ({ subtitle, title, reviewsbg, titleSeo, description, Author, URL }) => {
  const metatitle = String(titleSeo || "Coverage Area | Near Me | Home Appliances Service Center Dubai");
  const metadescription = String(description || "We proudly provide Home Appliances installation & services in all areas, including Dubai Marina, Jumeirah, Business Bay, Al Barsha, JLT, Dubai Hills");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliance-repair/coverage-area/");
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
        {/* Technical Services to Keep Your Coffee Flowing */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">In which areas does FAJ Home Appliances Repair operate in Dubai?</h1>
            <p>At FAJ Technical Services L.L.C, one of the most common questions we receive is, “Which areas of Dubai do you serve?” We are proud to serve over 100 locations throughout Dubai and its surrounding areas, catering to homes, offices, and businesses. Our expert teams in home appliance services provide installations, repairs, maintenance, and annual maintenance contracts directly at your location, whether in the city center or the outskirts.
            </p>
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Where Does FAJ Operate in Dubai? <br />Comprehensive Coverage Across Prime Dubai Locations</h1>
            <p>We have successfully maintained, repaired, and serviced premium home appliances across a diverse range of properties throughout Dubai. Our service areas include <a href="/services/home-appliances-repair/coverage-area/al-barsha/">Al Barsha</a>, <a href="/services/home-appliances-repair/coverage-area/dubai-marina/">Dubai Marina</a>, <a href="/services/home-appliances-repair/coverage-area/palm-jumeirah/">Palm Jumeirah</a>, <a href="/services/home-appliances-repair/coverage-area/jebel-ali/">Jebel Ali</a>, <a href="/services/home-appliances-repair/coverage-area/dip/">DIP</a>, <a href="/services/home-appliances-repair/coverage-area/jafza/">JAFZA</a>, <a href="/services/home-appliances-repair/coverage-area/business-bay/">Business Bay</a>, <a href="/services/home-appliances-repair/coverage-area/dubai-hills-estate/">Dubai Hills</a>, <a href="/services/home-appliances-repair/coverage-area/the-springs/">The Springs</a>, <a href="/services/home-appliances-repair/coverage-area/damac-hills/">Damac Hills</a>, <a href="/services/home-appliances-repair/coverage-area/dubai-silicon-oasis/">Dubai Silicon Oasis</a>, <a href="/services/home-appliances-repair/coverage-area/dubai-sports-city/">Sports City</a>, <a href="/services/home-appliances-repair/coverage-area/dubai-motor-city/">Motor City</a>, and more.
              These areas have become popular among homeowners and business owners seeking to enhance their indoor comfort with discreet, high-performance appliances. We installed these appliances in modern flats, luxury apartments, and villas.

            </p>
          </div>
        </section>

        <section className="our_process cs_py_60 bg-light-gray">
          <div className="container">
            <div className="process_wrapper">
              <div className="process_header">
                <h2>Our Process Quick and Efficient</h2>
                <p>Our service process, while detailed, primarily consists of the following key steps:</p>
              </div>

              <div className="process_content">
                <div className="process_image">
                  <img src={getImageSrc('diswasherrr')} alt="AC Maintenance Service Process" />
                </div>

                <div className="process_list">
                  <div className="process_item">
                    <p><b>Initial Consultation:</b> Contact us today to discuss your air conditioning needs. We will gather information about your situation and schedule a convenient time for an inspection.</p>
                  </div>

                  <div className="process_item">
                    <p><b>Inspection and Diagnosis:</b> This section outlines the process of identifying problems. A thorough technical inspection is essential for accurate diagnosis, pinpointing issues are understood before any repair are made.</p>
                  </div>

                  <div className="process_item">
                    <p><b>Transparent Quotation:</b> We offer clear and detailed quotations for all our services. Our pricing encompasses all parts and labor, ensuring no hidden costs.</p>
                  </div>

                  <div className="process_item">
                    <p><b>Efficient Repair or Maintenance:</b> Our skilled technicians will work efficiently to minimize disruption to your daily routine. We value your time and property, ensuring a clean and effective service.</p>
                  </div>

                  <div className="process_item">
                    <p><b>Final Review and Customer Satisfaction:</b> Your satisfaction is our highest priority. We aim to provide high-quality work and outstanding service.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issue Ac Maintenance */}
        <section className="ac_common_issues_section cs_py_60 bg-light-white">
          <div className="container">
            <div className="ac_issues_header_wrapper">
              <h2>Common Issues in Home Appliances Maintenance in Dubai, UAE</h2>
              <p>We have encountered numerous home appliances and identified common issues.</p>
              <p className="ac_issues_sub_text">Here are the mistakes that people often make:</p>
            </div>

            <div className="ac_issues_grid_container">
              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Schedule maintenance for appliances before they break down</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>Your home appliance is not used for months and when you turn it on in summer, it is not working properly. Now, you are also waiting for emergency home appliance service. </p>
                  <h4>Better procedure:</h4>
                  <p>Schedule maintenance in March or April before summer starts. This ensures better availability, lower prices, & provides peace of mind.</p>
                </div>
              </div>

              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Only contact when something fails</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>Reactive maintenance is much more costly than preventive maintenance. A 99 AED service visit could have prevented a 1250 AED emergency repair.</p>
                  <h4>Better procedure:</h4>
                  <p>Routine maintenance, whether annually or biannually, helps to identify issues before they escalate into expensive emergencies.</p>
                </div>
              </div>

              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Selecting the cheapest option</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>Is that company offering home appliance service for 50 to 100 AED? They might be cutting corners or planning to aggressively upsell you once they're in your home.</p>
                  <h4>Better procedure:</h4>
                  <p>Seek competitive pricing from trusted companies. Generally, you tend to receive quality in proportion to the amount you spend.</p>
                </div>
              </div>

              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Allowing unqualified individuals to work on your home appliance</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>That handyman who claims he can repair your home appliances cheaply might actually make the issue worse.</p>
                  <h4>Better procedure:</h4>
                  <p> Choose a licensed company with experienced home appliance technicians who are skilled and knowledgeable in their work.</p>
                </div>
              </div>

              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Ignoring warning signs</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>Signs of damage, electrical faults, and high bills indicate problems with your home appliance.</p>
                  <h4>Better procedure:</h4>
                  <p>Address minor issues promptly to stop them from escalating into major emergencies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* beniift */}
        <section className="benefits_section cs_py_60 bg-light-gray">
          <div className="container">
            <h2 className="benefits_title">The Benefits of Professional Home Appliances Services</h2>
            <div className='paragraph_sec'>
              <p>While some homeowners or business owners may attempt DIY repairs, home appliances are complex and require professional expertise to ensure safe and effective repairs. Here’s why you should trust FAJ Technical Services L.L.C.</p>
            </div>
            <div className="benefits_grid">
              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Safety-First')} alt="Comprehensive Services" />
                </div>
                <h3>Safety First</h3>
                <p>Home appliances have unsafe electrical components and refrigerants. Our qualified technicians safely repair and maintain these systems to minimise the risk of injury and damage.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Real-Diagnosis')} alt="Comprehensive Services" />
                </div>
                <h3>Real Diagnosis</h3>
                <p>Diagnosing problems with home appliances requires both skill and tools. Our experts quickly identify issues and offer effective solutions, saving you time and frustration.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Warranty-Protection')} alt="Comprehensive Services" />
                </div>
                <h3>Warranty Protection</h3>
                <p>Many home appliances come with warranties requiring professional servicing. Choose FAJ Technical Services L.L.C. to ensure your warranty is protected.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Long-Term-Reliability')} alt="Comprehensive Services" />
                </div>
                <h3>Long-Term Reliability</h3>
                <p>Our expert repair provides lasting solutions by addressing the root causes of your home appliance issues, preventing future problems, and enhancing reliability.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Energy-Savings')} alt="Comprehensive Services" />
                </div>
                <h3>Energy Savings</h3>
                <p>Professional repair can enhance your system's efficiency, significantly reducing energy consumption and lowering your monthly utility bills.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Protects-Property')} alt="Comprehensive Services" />
                </div>
                <h3>Protects Property</h3>
                <p>Safeguards electronics against damage and prevents warping from heat and moisture.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  Why Important */}
        <section className="ac_inspection_importance_section cs_py_60">
          <div className="container">
            <h2 className="ac_inspection_main_title">The Importance of Home Appliances Inspection</h2>

            {/* First Block - Why It's Necessary? */}
            <div className="ac_inspection_content_block">
              <div className="ac_inspection_text_wrapper">
                <h3 className="text-start">Why It's Necessary?</h3>
                <p className="ac_inspection_description">
                  Regular inspections of home appliances identify potential issues early, ensuring optimal performance and extending the lifespan of your units. They enhance energy efficiency, lower energy bills, and improve quality by removing hazards, creating a healthier environment.

                </p>


              </div>

              <div className="ac_inspection_image_wrapper">
                <img src={getImageSrc('necesaryhomecov')} alt="AC Inspection Service" className="ac_inspection_image" />
              </div>

            </div>
            <h4 className="text-start mb-0">TERMS AND CONDITIONS OF TECHNICAL INSPECTION</h4>
            <p className="ac_inspection_details termservice">
              The fee for the home appliances technical inspection includes an on-site visit from our technical team, as well as transportation charges to the Dubai location.
              This fee will be deducted from the final invoice if the customer requests any home appliance services, such as repair, maintenance, cleaning, or part replacement, during the same visit. Please note that a separate fee will apply for <br /> any additional visits. <br />
              Additionally, the inspection fee is non-refundable and does not cover carpentry work, access to gypsum ceilings, or any home appliance repairs. After the inspection, FAJ will provide the customer with a quotation.
            </p>
            {/* Second Block - Why Is AC Service Important? */}
            <div className="ac_inspection_content_block ac_inspection_reverse">
              <div className="ac_inspection_image_wrapper">
                <img src={getImageSrc('importcoveragehome')} alt="AC Service Importance" className="ac_inspection_image" />
              </div>

              <div className="ac_inspection_text_wrapper">
                <h3 className="text-start">Why is Home Appliances Service Important?</h3>
                <p className="ac_inspection_description">
                  Home appliance service involves cleaning, checking for faults, and ensuring all components function properly. Regular maintenance enhances efficiency, reduces energy costs, and prevents breakdowns.
                </p>
              </div>
            </div>
            <h4 className="text-start mb-0">TERMS AND CONDITIONS OF TECHNICAL INSPECTION</h4>
            <p className="ac_inspection_details termservice">
              The Home Appliances service fee includes an on-site visit from our technical team and transportation to Dubai. This fee is non-refundable.<br />
              The service does not cover carpentry, gypsum ceiling access, repairs, maintenance, installation, or spare part replacement. Any additional work needed for faulty home appliances will be quoted separately, with details provided by FAJ.
            </p>
          </div>
        </section>

        {/* Servcies Area */}
        <section className="service_areas_dubai_section cs_py_60">
          <div className="container">
            <h2 className="service_areas_main_heading">Our Service Areas Across Dubai</h2>
            <p className="service_areas_intro_text">We offer dependable air conditioning maintenance services across Dubai, including:</p>

            <h3 className="service_areas_sub_heading">Popular Areas:</h3>

            <div className="service_areas_tags_container">
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/dubai-marina/">Dubai Marina</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/palm-jumeirah/">Palm Jumeirah</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/jbr/">JBR - JLT</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/academy-city/">Academy City</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/al-bada/">Al Bada</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/al-barsha/">Al Barsha</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/dubai-silicon-oasis/">Dubai Silicon Oasis</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/dubai-internet-city/">Dubai Internet City</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/al-barsha-south/">Al Barsha South</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/al-furjan/">Al Furjan</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/al-jafiliya/">Jafiliya</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/al-karama/">Al Karama</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/appliances-repair-service/">Al Khawaneej</a></span>        
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/al-mamzar/">Al Mamzar</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/dubai-hills-estate/">Dubai Hills Estate</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/downtown/">Downtown Dubai</a></span>
              <span className="service_area_tag"><a href="/services/air-conditioning-repair/coverage-area/difc/">DifC</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/al-manara/">Al Manara</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/al-quoz/">Al Quoz</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/appliances-repair-service/">Al Quusais</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/deira/">Deira </a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/al-sufouh/">Al Sufoh </a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/al-safa/">Al Safa</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/appliances-repair-service/">Al Warqa</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/dubai-hills-estate/">Emirates Hills</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/discovery-gardens/">Discovery Garden</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/al-wasl/">Al Wasl</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/arabian-ranches/">Arabian Ranches</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/business-bay/">Business Bay</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/damac-hills/">Damac Hills</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/the-meadows/">The Meadows</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/the-springs/">The Springs</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/jumeirah-islands/">Jumierah Island</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/jumeirah-park/">Jumierah Park</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/jvc/">JVC</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/appliances-repair-service/">Mirdif</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/dubai-sport-city/">Sports City</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/dubai-studio-city/">Dubai Studio City</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/jebel-ali/">Jebel Ali</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/dubai-hills-estate/">Dubai Hills</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/jumeirah-golf-estates/">Jumeirah Golf Estes</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/jumeirah-village-triangle/">JVT</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/dubai-motor-city/">Dubai Motor City</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/jvc/">JVC (Jumeirah Village Circle)</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/appliances-repair-service/">Ras Al khor</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/the-greens/">The Greens</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/the-villa/">The Villas</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/umm-al-sheif/">Umm Al Sheif</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/umm-suqeim/">Umm Ramool Umm Suqeim</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/victory-heights/">Victory Heights</a></span>
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/jlt/">JLt</a></span>
              
              
              
              <span className="service_area_tag"><a href="/services/home-appliances-repair/coverage-area/discovery-gardens/">Discovery Gardens</a></span>
              
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

        <BlogAppliances />

        <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          />
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
                        <path d="M8 2V14M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
                        <path d="M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
      </div>
    </>
  )
}

export default HomeCoverageArea