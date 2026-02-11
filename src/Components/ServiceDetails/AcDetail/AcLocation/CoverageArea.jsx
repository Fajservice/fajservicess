
import { useEffect, useRef, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import loadBackgroudImages from '../../../Common/loadBackgroudImages';
// import BlogCoffeeMachine from '../../../Blog/BlogCoffeeMachine';
import '../../../../assets/main.css';
import Testimonial1 from '../../../Testimonial/Testimonial1';
import BlogCoffeeMachine from '../../../Services/coffeemachine/BlogCoffeeMachine';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';
const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const CoverageArea = ({ subtitle, title, reviewsbg, titleSeo, description, Author, URL }) => {
  const metatitle = String(titleSeo || "Coverage Area | Near Me | for the Best AC Services in Dubai | FAJ");
  const metadescription = String(description || "We proudly provide Air Conditioning installation & services in all areas, including  Dubai Marina, Jumeirah, Business Bay, Al Barsha, JLT, Dubai Sports City.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/");
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
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFAQs/AcServiceFAQs.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonials/AcServiceTestimonials.json`)
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
          <meta name="description" content="Reliable & quality in ac maintenance Dubai, We are experts in HVAC, split, central cooling, VRV, VRF air con maintenance & ac fix Call 043300002"></meta>
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
            <h1 className="cs_fs_30">In which areas does FAJ Air Conditioning Services operate in Dubai?</h1>
            <p>At FAJ Technical Services L.L.C, one of the most common questions we hear is, “Which areas of Dubai do you serve?” We are proud to serve over 100 locations throughout Dubai and nearby areas for homes, offices and business places. Our AC expert teams delivers repair, maintenance, and servicing directly to your location, whether in the city center or the outskirts.
            </p>
          </div>
        </section>
        
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Where Does FAJ Operate in Dubai? <br />Comprehensive Coverage Across Prime Dubai Locations</h1>
            <p>We have successfully maintained, repaired, and serviced our premium air conditioning systems in a wide variety of properties throughout Dubai. Our service areas include <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-quoz/">Al Quoz</a> , <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-barsha/">Al Barsha</a>, <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-marina/">Dubai Marina</a>, <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/palm-jumeirah/">Palm Jumeirah</a>, <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali/">Jebel Ali</a>, <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dip/">DIP</a>, <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jafza/">JAFZA</a>, <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/business-bay/">Business Bay</a>, <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-hills-estate/">Dubai Hills</a>, <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-springs/">The Springs</a>, <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/damac-hills/">Damac Hills</a>, <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-silicon-oasis/">Dubai Silicon Oasis</a>, <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-sports-city/">Sports City</a>, <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/motor-city/">Motor City</a>, and more.
              These neighbourhoods have become hotspots for homeowners and business owners looking to enhance their indoor comfort with discreet, high-performance air conditioning. This is especially important for modern flats, luxury apartments, villas, and listed buildings where external units are not permitted.

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
                  <img src={getImageSrc('acmaintenanceindubai')} alt="AC Maintenance Service Process" />
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
              <h2>Common Issues in AC Maintenance in Dubai, UAE</h2>
              <p>We have encountered thousands of AC systems and identified common issues.</p>
              <p className="ac_issues_sub_text">Here are the mistakes that people frequently make:</p>
            </div>

            <div className="ac_issues_grid_container">
              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Gas Burner Ignition Problems maintenance</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>Your air conditioner has been inactive for months. When summer arrives and you turn it on suddenly, there may be faults or errors arising.</p>
                  <h4>Better procedure:</h4>
                  <p>Turning on your air conditioner 1-2 April before summer starts, this provides better availability, lower errors (no emergency plumbing), and a functioning product when summer arrives.</p>
                </div>
              </div>

              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Only contact when something fails</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>Reactive maintenance is significantly more expensive than preventive maintenance. A typical example is most people call after getting a 1800 AED emergency repair.</p>
                  <h4>Better procedure:</h4>
                  <p>Routine checkups and maintenance typically are annual, helps identify problems before they turn into costly emergencies.</p>
                </div>
              </div>

              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Selecting the cheapest option</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>Is that company offering AC service for 50 to 100 AED? They might be selling corners or skipping parts to stay that low. What you save now, you'll pay for in your home.</p>
                  <h4>Better procedure:</h4>
                  <p>Work with reputable service companies. Typically, you get what you pay for.</p>
                </div>
              </div>

              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Allowing unqualified individuals to work on your AC</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>That handyman who claims he can check your AC (though?) He might make it worse.</p>
                  <h4>Better procedure:</h4>
                  <p>Hire HVAC technicians who are experienced, for technical checks, knowledgeable, are skilled in HVAC.</p>
                </div>
              </div>

              <div className="ac_issue_single_card">
                <div className="ac_issue_card_header">
                  <h3>Ignoring warning signs</h3>
                </div>
                <div className="ac_issue_card_content">
                  <p>Strange noises, weak cooling, water leakage, and high electricity bills indicate that your AC is signaling there's a problem.</p>
                  <h4>Better procedure:</h4>
                  <p>Address minor issues before they escalate into major emergencies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* beniift */}
        <section className="benefits_section cs_py_60 bg-light-gray">
          <div className="container">
            <h2 className="benefits_title">The Benefits of Professional AC Repairing</h2>
            <div className='paragraph_sec'>
              <p>While some homeowners or business owners may try DIY repairs, air conditioning systems are complex or offices and require professional expertise to ensure safe and effective repair. Here’s why you should trust FAJ Technical Services L.L.C:</p>
            </div>
            <div className="benefits_grid">
              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Safety-First')} alt="Comprehensive Services" />
                </div>
                <h3>Safety First</h3>
                <p>Air conditioning systems have unsafe electrical parts and refrigerants. Our qualified technicians safely repair and maintain these systems to reduce the risk of injury and damage.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Real-Diagnosis')} alt="Comprehensive Services" />
                </div>
                <h3>Real Diagnosis</h3>
                <p>Diagnosing air conditioning problems requires skill and tools. Our experts quickly identify issues and provide effective solutions, saving you time and frustration.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Warranty-Protection')} alt="Comprehensive Services" />
                </div>
                <h3>Warranty Protection</h3>
                <p>Many AC systems have warranties that require professional servicing. Choose FAJ Technical Services L.L.C to protect your warranty.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Long-Term-Reliability')} alt="Comprehensive Services" />
                </div>
                <h3>Long-Term Reliability</h3>
                <p>Our professional repairs ensure lasting results by addressing the root causes of your AC issues, preventing future problems and enhancing reliability.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Energy-Savings')} alt="Comprehensive Services" />
                </div>
                <h3>Energy Savings</h3>
                <p>By restoring your system’s efficiency, professional repairs can significantly reduce your energy consumption and lower your monthly utility bills.</p>
              </div>

              <div className="benefit_card">
                <div className="benefit_icon">
                  <img src={getImageSrc('Protects-Property')} alt="Comprehensive Services" />
                </div>
                <h3>Protects Property</h3>
                <p>Protects electronics from damage and prevents effects from warping due to extreme heat and moisture.</p>
              </div>
            </div>
          </div>
        </section>

        {/*  Why Important */}
        <section className="ac_inspection_importance_section cs_py_60">
          <div className="container">
            <h2 className="ac_inspection_main_title">The Importance of AC Inspection</h2>

            {/* First Block - Why It's Necessary? */}
            <div className="ac_inspection_content_block">
              <div className="ac_inspection_text_wrapper">
                <h3 className="ac_inspection_sub_heading">Why It's Necessary?</h3>
                <p className="ac_inspection_description">
                  While some homeowners may not necessarily request for UV light repairs, air conditioning systems are complex in nature and require professional expertise to ensure safe and efficient repair. Here's why you should trust FAJ Technical Services L.L.C
                </p>

                <h4 className="ac_inspection_section_title">TIMELY DETECTION OF TECHNICAL INSPECTION</h4>
                <p className="ac_inspection_details">
                  The AC technical specialist has developed an eye that brings performance to a remarkable change in the Dubai homes. This has the assurance that the function of the central device air AC has been just in fresh, improved, typically is very specialized by the furnace will. It critically reduces the probability of unexpected emergencies.
                </p>
              </div>

              <div className="ac_inspection_image_wrapper">
                <img src={getImageSrc('acinspection')} alt="AC Inspection Service" className="ac_inspection_image" />
              </div>
            </div>

            {/* Second Block - Why Is AC Service Important? */}
            <div className="ac_inspection_content_block ac_inspection_reverse">
              <div className="ac_inspection_image_wrapper">
                <img src={getImageSrc('acimportant')} alt="AC Service Importance" className="ac_inspection_image" />
              </div>

              <div className="ac_inspection_text_wrapper">
                <h3 className="ac_inspection_sub_heading">Why Is AC Service Important?</h3>
                <p className="ac_inspection_description">
                  AC service ensures longevity, checking refrigerant levels, and ensuring all components work well. Regular maintenance boosts efficiency, lowers energy bills, and prevents breakdowns.
                </p>

                <h4 className="ac_inspection_section_title">TIMELY AND CONSISTENT AC CLEANING SERVICE</h4>
                <p className="ac_inspection_details">
                  Besides the use of your AC unit, Dubai's sandy and dusty environment will mean sand and grit accumulation in the unit. This is a key AC service component that ensures good flow. Duct filters, condenser fins, evaporator coils and blowers are all kept cleaned so that air flow and comfort are improved in Dubai. AC unit will run almost perfectly AC, dust and pollutants FAJ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="ac_pricing_table_section cs_py_60 bg-light-gray">
          <div className="container">
            <div className="ac_pricing_table_wrapper">
              <table className="ac_pricing_table">
                <thead className="ac_pricing_table_head">
                  <tr>
                    <th className="ac_pricing_th">AC Type</th>
                    <th className="ac_pricing_th">Service</th>
                    <th className="ac_pricing_th">Description</th>
                    <th className="ac_pricing_th">Price</th>
                    <th className="ac_pricing_th">Warranty</th>
                  </tr>
                </thead>
                <tbody className="ac_pricing_table_body">
                  {/* Window AC 1.5 to 2.5 Ton */}
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td ac_pricing_type" rowSpan="4">Window AC 1.5 to 2.5 Ton</td>
                    <td className="ac_pricing_td">Inspection</td>
                    <td className="ac_pricing_td">On-site technical inspection Fee</td>
                    <td className="ac_pricing_td">120 to 220 AED</td>
                    <td className="ac_pricing_td">No Warranty</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Deep Cleaning Service</td>
                    <td className="ac_pricing_td">Deep Cleaning Service and Gas top-up</td>
                    <td className="ac_pricing_td">300 to 350 AED</td>
                    <td className="ac_pricing_td">2 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Repair</td>
                    <td className="ac_pricing_td">After the Inspection, advise will be quoted based on the technical inspection report provided by our expert</td>
                    <td className="ac_pricing_td">2 to 5 Hours</td>
                    <td className="ac_pricing_td">3 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Part Replacement</td>
                    <td className="ac_pricing_td">All warranty for spare part replacement should be valid for 3 month</td>
                    <td className="ac_pricing_td">-</td>
                    <td className="ac_pricing_td">3 Month</td>
                  </tr>


                  {/* Split AC 1.5 to 2.5 Ton */}
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td ac_pricing_type" rowSpan="5">Split AC 1.5 to 2.5 Ton</td>
                    <td className="ac_pricing_td">Inspection</td>
                    <td className="ac_pricing_td">There is a callout fee that applies each diagnosis.</td>
                    <td className="ac_pricing_td">195 AED +VAT</td>
                    <td className="ac_pricing_td">-</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Basic Service</td>
                    <td className="ac_pricing_td">Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas
                      top-up As per to AC requirements.</td>
                    <td className="ac_pricing_td">285 to 320 AED+VAT</td>
                    <td className="ac_pricing_td">2 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Deep Cleaning Service</td>
                    <td className="ac_pricing_td">Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and machine, gas top up/ minor Gas leak recommends</td>
                    <td className="ac_pricing_td">300 to 350 AED</td>
                    <td className="ac_pricing_td">3 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Repair</td>
                    <td className="ac_pricing_td">After the Inspection, advise will be quoted based on the technical inspection report provided by our expert</td>
                    <td className="ac_pricing_td">2 to 5 Hours</td>
                    <td className="ac_pricing_td">3 Month</td>
                  </tr>
                  <tr className="ac_pricing_row ac_pricing_row_last">
                    <td className="ac_pricing_td">Part Replacement</td>
                    <td className="ac_pricing_td">All warranty for spare part replacement should be valid for 3 month</td>
                    <td className="ac_pricing_td">-</td>
                    <td className="ac_pricing_td">3 Month</td>
                  </tr>


                  {/* Central AC 1.5 to 2.5 Ton */}
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td ac_pricing_type" rowSpan="5">Central AC 1.5 to 2.5 Ton</td>
                    <td className="ac_pricing_td">Inspection</td>
                    <td className="ac_pricing_td">There is a callout fee that applies each diagnosis.</td>
                    <td className="ac_pricing_td">195 AED +VAT</td>
                    <td className="ac_pricing_td">-</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Basic Service</td>
                    <td className="ac_pricing_td">Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas
                      top-up As per to AC requirements.</td>
                    <td className="ac_pricing_td">285 to 320 AED+VAT</td>
                    <td className="ac_pricing_td">2 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Deep Cleaning Service</td>
                    <td className="ac_pricing_td">Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and machine, gas top up/ minor Gas leak recommends</td>
                    <td className="ac_pricing_td">300 to 350 AED</td>
                    <td className="ac_pricing_td">3 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Repair</td>
                    <td className="ac_pricing_td">After the Inspection, advise will be quoted based on the technical inspection report provided by our expert</td>
                    <td className="ac_pricing_td">2 to 5 Hours</td>
                    <td className="ac_pricing_td">3 Month</td>
                  </tr>
                  <tr className="ac_pricing_row ac_pricing_row_last">
                    <td className="ac_pricing_td">Part Replacement</td>
                    <td className="ac_pricing_td">All warranty for spare part replacement should be valid for 3 month</td>
                    <td className="ac_pricing_td">-</td>
                    <td className="ac_pricing_td">3 Month</td>
                  </tr>

                  {/* Central AC 3.0 to 5.0 Ton */}
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td ac_pricing_type" rowSpan="5">Central AC 3.0 to 5.0 Ton</td>
                    <td className="ac_pricing_td">Inspection</td>
                    <td className="ac_pricing_td">There is a callout fee that applies each diagnosis.</td>
                    <td className="ac_pricing_td">220 to 320 AED+VAT</td>
                    <td className="ac_pricing_td">-</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Basic Service</td>
                    <td className="ac_pricing_td">Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas
                      top-up As per to AC requirements.</td>
                    <td className="ac_pricing_td">380 to 475 AED+VAT</td>
                    <td className="ac_pricing_td">2 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Deep Cleaning Service</td>
                    <td className="ac_pricing_td">Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and machine, gas top up/ minor Gas leak recommends</td>
                    <td className="ac_pricing_td">420 to 520 AED +VAT</td>
                    <td className="ac_pricing_td">2 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Repair</td>
                    <td className="ac_pricing_td">After the Inspection, advise will be quoted based on the technical inspection report provided by our expert</td>
                    <td className="ac_pricing_td">-</td>
                    <td className="ac_pricing_td">2 to 3 Month</td>
                  </tr>
                  <tr className="ac_pricing_row ac_pricing_row_last">
                    <td className="ac_pricing_td">Part Replacement</td>
                    <td className="ac_pricing_td">All warranty for spare part replacement should be valid for 3 month</td>
                    <td className="ac_pricing_td">-</td>
                    <td className="ac_pricing_td">3 Month</td>
                  </tr>

                  {/* Chiller Water FCU 1.5 TO 3.5 */}
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td ac_pricing_type" rowSpan="5">Central AC 1.5 to 3.5 Ton</td>
                    <td className="ac_pricing_td">Inspection</td>
                    <td className="ac_pricing_td">There is a callout fee that applies each diagnosis.</td>
                    <td className="ac_pricing_td">195 AED +VAT</td>
                    <td className="ac_pricing_td">-</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Basic Service</td>
                    <td className="ac_pricing_td">Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas
                      top-up As per to AC requirements.</td>
                    <td className="ac_pricing_td">285 to 320 AED +VAT</td>
                    <td className="ac_pricing_td">2 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Deep Cleaning Service</td>
                    <td className="ac_pricing_td">Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and machine, gas top up/ minor Gas leak recommends</td>
                    <td className="ac_pricing_td">320 to 430 AED +VAT</td>
                    <td className="ac_pricing_td">2 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Repair</td>
                    <td className="ac_pricing_td">After the Inspection, advise will be quoted based on the technical inspection report provided by our expert</td>
                    <td className="ac_pricing_td">-</td>
                    <td className="ac_pricing_td">2 to 3 Month</td>
                  </tr>
                  <tr className="ac_pricing_row ac_pricing_row_last">
                    <td className="ac_pricing_td">Part Replacement</td>
                    <td className="ac_pricing_td">All warranty for spare part replacement should be valid for 3 month</td>
                    <td className="ac_pricing_td">-</td>
                    <td className="ac_pricing_td">3 Month</td>
                  </tr>

                  {/* Intverter and VRV & VRF 2.5 TO  5.0 tON */}
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td ac_pricing_type" rowSpan="5">Central AC 2.5 to 5.0 Ton</td>
                    <td className="ac_pricing_td">Inspection</td>
                    <td className="ac_pricing_td">There is a callout fee that applies each diagnosis.</td>
                    <td className="ac_pricing_td">220 to 320 AED +VAT</td>
                    <td className="ac_pricing_td">-</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Basic Service</td>
                    <td className="ac_pricing_td">Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas
                      top-up As per to AC requirements.</td>
                    <td className="ac_pricing_td">380 to 475 AED +VAT</td>
                    <td className="ac_pricing_td">2 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Deep Cleaning Service</td>
                    <td className="ac_pricing_td">Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and machine, gas top up/ minor Gas leak recommends</td>
                    <td className="ac_pricing_td">485 to 585 AED +VAT</td>
                    <td className="ac_pricing_td">2 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Repair</td>
                    <td className="ac_pricing_td">After the Inspection, advise will be quoted based on the technical inspection report provided by our expert</td>
                    <td className="ac_pricing_td">-</td>
                    <td className="ac_pricing_td">2 to 3 Month</td>
                  </tr>
                  <tr className="ac_pricing_row ac_pricing_row_last">
                    <td className="ac_pricing_td">Part Replacement</td>
                    <td className="ac_pricing_td">All warranty for spare part replacement should be valid for 3 month</td>
                    <td className="ac_pricing_td">-</td>
                    <td className="ac_pricing_td">3 Month</td>
                  </tr>
                  {/* Package Unit HVAC 5.0 TO 20.0 TON */}
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td ac_pricing_type" rowSpan="5">Package Unit HVAC 5.0 TO 20.0 TON</td>
                    <td className="ac_pricing_td">Inspection</td>
                    <td className="ac_pricing_td">There is a callout fee that applies each diagnosis.</td>
                    <td className="ac_pricing_td">320 to 480 AED +VAT</td>
                    <td className="ac_pricing_td">-</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Basic Service</td>
                    <td className="ac_pricing_td">Cleaning service with water pressure pump of outdoor coils, air filter, and drain line, gas
                      top-up As per to AC requirements.</td>
                    <td className="ac_pricing_td">530 to 730 AED +VAT</td>
                    <td className="ac_pricing_td">2 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Deep Cleaning Service</td>
                    <td className="ac_pricing_td">Cleaning service with water pressure pump of outdoor coils, indoor coils, air filter, and machine, gas top up/ minor Gas leak recommends</td>
                    <td className="ac_pricing_td">730 to 830 AED +VAT</td>
                    <td className="ac_pricing_td">2 Month</td>
                  </tr>
                  <tr className="ac_pricing_row">
                    <td className="ac_pricing_td">Repair</td>
                    <td className="ac_pricing_td">After the Inspection, advise will be quoted based on the technical inspection report provided by our expert</td>
                    <td className="ac_pricing_td">-</td>
                    <td className="ac_pricing_td">2 to 3 Month</td>
                  </tr>
                  <tr className="ac_pricing_row ac_pricing_row_last">
                    <td className="ac_pricing_td">Part Replacement</td>
                    <td className="ac_pricing_td">All warranty for spare part replacement should be valid for 3 month</td>
                    <td className="ac_pricing_td">-</td>
                    <td className="ac_pricing_td">3 Month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Servcies Area */}
        <section className="service_areas_dubai_section cs_py_60">
          <div className="container">
            <h2 className="service_areas_main_heading">Our Service Areas Across Dubai</h2>
            <p className="service_areas_intro_text">We offer dependable air conditioning maintenance services across Dubai, including:</p>

            <h3 className="service_areas_sub_heading">Popular Areas:</h3>

            <div className="service_areas_tags_container">
              <span className="service_area_tag"><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-marina/">Dubai Marina</a></span>
              <span className="service_area_tag">JBR (Jumeirah Beach Residence)</span>
              <span className="service_area_tag">The Meadows</span>
              <span className="service_area_tag">Downtown Dubai</span>
              <span className="service_area_tag"><a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/business-bay/">Business Bay</a></span>
              <span className="service_area_tag">Arabian Ranches</span>
              <span className="service_area_tag">Motor City</span>
              <span className="service_area_tag">The Springs</span>
              <span className="service_area_tag">JLT</span>
              <span className="service_area_tag">JLT (Jumeirah Lake Towers)</span>
              <span className="service_area_tag">Dubai Hills Estate</span>
              <span className="service_area_tag">Palm Jumeirah</span>
              <span className="service_area_tag">Silicon Oasis</span>
              <span className="service_area_tag">JVC (Jumeirah Village Circle)</span>
              <span className="service_area_tag">Discovery Gardens</span>
              <span className="service_area_tag">Sports City</span>
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

        <BlogCoffeeMachine />

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
      </div>
    </>
  )
}

export default CoverageArea