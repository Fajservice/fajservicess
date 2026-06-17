import { useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt.jsx';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton.jsx";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract.jsx";
import loadBackgroudImages from "../../../Common/loadBackgroudImages.jsx";
import HeaderForm from "../../../Headeform/HeaderForm.jsx";
import GetQuoteButton from "../../../Buttons/GetQuoteButton.jsx";
import CallNowButton from "../../../Buttons/CallNowButton.jsx";
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";
import PriceCardHomeCat from '../../../Services/homeappliances/PriceCardHomeappCat.jsx';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  let variant = 'mobile';
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    const realWidth = width;
    if (realWidth > 1200) {
      variant = 'large';
    } else if (realWidth > 768) {
      variant = 'desktop';
    } else if (realWidth > 480) {
      variant = 'tablet';
    } else {
      variant = 'mobile';
    }
  }
  return `${CDN}/${imgPath}/${variant}`;
};
const KarcherVacuumRepairDetail = ({ subtitle, title, reviewsbg, titleSeo , description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(titleSeo || "Top Karcher Vacuum Cleaner Repair and Service Near You, Dubai");
  const metadescription = String(description || "Trusted Karcher vacuum cleaner repair in Dubai. Get pressure washer pump, robot vacuum, water dispenser & air purifier maintenance service near you");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Karcher vacuum cleaner repair, Karcher pressure washer pump repair, Karcher robot vacuum maintenance, Karcher water dispenser service, Karcher air purifier repair, Karcher appliance service Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/brands/karcher-vacuum-cleaner-repair-and-service-in-dubai/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/karcher-vacuum-cleaner-repair/public");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
   const KarcherVacuumServicesData = [
    {
      id: 1,
      image: getImageSrc('karcher-vacuum-cleaner-repair'),
      title: 'Inspection / Check-Up Cost',
      icon: getImageSrc('calloutcard'),
      price: 'AED50',
      arrow: getImageSrc('iconreadmore'),
      description: 'Just tell us about your faulty appliance, and we will provide a quote for repair / parts. Our technician will arrive at a time that is suitable for you.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=AC%20Call-Out',
      popupTitle: 'Inspection / Check-Up Cost  scope of work:',
      sections: [
        {
          items: [
            'Inspection visit fee',
            'Rectification of faults',
            'Cost of minor repair work',
            'Transportation pricing for services',
            'Technical inspection onsite or workshop',
            'Pick-up, drop-off, and reinstallation onsite',
            'A quotation can be provided via call, WhatsApp, or email if needed.',
            'The same call-out fee applies for diagnosing either one or two appliances at the same place.'
          ]
        },
        {
          paragraph: '**Excluded:** <br> Cost for any repair work, procurement cost, cost of any new parts and installation, if required.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 50, callout fee applies based on the type, brand, capacity of the appliance unit, and location for each diagnosis.'
        },
      ]
    },
    {
      id: 2,
      image: getImageSrc('karcher-vacuum-cleaner-service'),
      warranty: '50- Days Warranty',
      title: 'Appliance Cleaning',
      icon: getImageSrc('cleaningcard'),
      price: 'AED170',
      arrow: getImageSrc('iconreadmore'),
      description: 'Book reliable appliance cleaning professionals for your equipment. Our teams offer competitive pricing & limited-time availability across Dubai.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=Basic%20ACCleaning',
      popupTitle: 'Cleaning Appliances',
      sections: [
        {
          heading: 'Depending on quantities, capacity, type, model, and area.',
          items: [
            'Hob Cleaning',
            'Oven Cleaning',
            'Freezer Cleaning',
            'Gas Range Cleaning',
            'Dishwasher Cleaning',
            'Refrigerator Cleaning',
            'Hood / Chimney Cleaning',
            'Washing Machine Cleaning',
          ]
        },
        {
          paragraph: '**Excluded:** <br> Cost for any repair work, procurement cost, cost of any new parts and installation, if required.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 170 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.'
        },
      ]
    },
    {
      id: 3,
      image: getImageSrc('b2bportfolio'),
      title: 'Business to Business Service Agreements',
      icon: getImageSrc('installationcard'),
      price: 'AEDXX',
      arrow: getImageSrc('iconreadmore'),
      description: 'If you are an insurance company, manufacturer, wholesaler, or dealer who has come across our website because you are seeking an alternative to your current Service Support Network,',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=AC Maintenance',
      popupTitle: 'Appliances Installation',
      sections: [
        {
          heading: 'Depending on quantities, capacity, type, model, and area.',
          items: [
            'What can we offer you?',
            'If you are an insurance company, manufacturer, wholesaler, or dealer who has come across our website because you are seeking an alternative to your current Service Support Network, or if you simply need assistance with a repair, please feel free to reach out to us below, and one of our team members will get in touch with you.',
          ]
        },
        {
          paragraph: ''
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED XX fee applies based on the Capacity: Based on Type, Model, and Area for each unit.'
        },
      ]
    },
  ];
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
                      fetch(`${import.meta.env.BASE_URL}data/AppliancesData/AppliancesFaqs/KarcherVacuumFaqs.json`),
                      fetch(`${import.meta.env.BASE_URL}data/AppliancesData/AppliancesTestimonial/AppliancesTestimonials.json`)
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
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={metatitle} />
          <meta property="og:description" content={metadescription} />
           <meta property="og:url" content={metaURL} />
          <meta property="og:image" content={metaImage} />
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:image" content={metaImage} />
        </Helmet>
      </HelmetProvider>
      <HeaderForm />
      <div className="cs_service_details">
        {/* intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Best Karcher Vacuum Repair and Maintenance Service Near You!</h1>
            <p>If your Karcher vacuum cleaner is making strange noises or losing suction, we understand your frustration. At FAJ Technical Services L.L.C, our Karcher technicians offer in-home services to restore your vacuum to peak performance. We'll make it function like new again.<br/>Imagine having your Karcher vacuum fully dismantled, deep cleaned, and inspected for wear. If necessary, we will rebuild it with new Karcher spare parts. This Karcher service not only saves you the cost of buying a new machine but also provides peace of mind, knowing that your Karcher is operating efficiently and reliably when you need it most.<br/>Book your Karcher service with FAJ today and get your Karcher vacuum cleaner back to its best. Contact us now to schedule a convenient appointment!</p>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>
        <PriceCardHomeCat  services={KarcherVacuumServicesData}/>
{/* Best Home Appliance Service Center */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5 align-items-center">
              <div className="col-md-6">
                <h2 className="cs_fs_20 mb-1 mt-0 text-align-left">Top Karcher Vacuum Cleaner Repair and Service in Dubai</h2>
                <p className="mb-2">We will schedule an appointment at a time that is suitable for you, either at your home or FAJ workshop. We will confirm the exact appointment time so that you won't have to wait around all day. Get FAJ expert of Karcher water pressure pump, vacuum cleaner, fix robot vacuums & mops, Steam cleaners, cordless window vacs, electric wiping mop, air treatment, floor Cleaner, Vacuum mop, watering systems, push sweepers, mobile cleaning, garden Tools, High-pressure cleaners, floor scrubber driers, wet and dry vacuum cleaners, cleaning robots repair and services near you, in Dubai</p>
                <h3 className="cs_fs_20 mb-1 mt-0 text-align-left">Same Day Karcher Professional Appliances Maintenance Service</h3>
                <p className="mb-2">We understand that breakdowns of Karcher professional appliances never occur at a convenient time. This includes Karcher Window & surface vacuum cleaner, carpet cleaner, sweepers & vacuum sweepers, municipal equipment, vehicle wash systems, steam vacuum cleaners, disinfection systems, dry ice cleaning, drinking water treatment, water dispenser, container cleaning, Air Purifier maintenance service Dubai, UAE</p>
              </div>
              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('karcher-vacuum-cleaner-repair-service')} alt="Karcher Vacuum repair" />
              </div>
            </div>
            <div className="appointment-col border-small-top pt-3 mt-2">
                <p className="appointment-col">If you need repair or cleaning service for your Karcher service, please contact us. The <a href="https://www.google.com/maps/dir//Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/@25.1105958,55.1452595,22158m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94!2m2!1d55.227661!2d25.1106186?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank"
                >FAJ workshop</a>  is conveniently located near both Al Khail Road and Sheikh Zayed Road. When you drop off your appliance at the workshop, you will receive a discount on the technical inspection fee and other services.</p>
                <div id="get-quote" className="mt-3">
                    <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                        <WhatsappIconButton />
                        <CallNowButton />
                    </div>
                </div>
            </div>
          </div>
        </section>
         {/* Why is Appliance Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30 ">
          <div className="container">
            <h3 className="cs_fs_30">Key Reasons Maintenance is Important for Karcher Vacuum Cleaner:</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('karcher-vacuum-cleaner-repair')}  alt="Karcher Vacuum repair" />
              </div>
              <div className="col-md-6">
                <p className="mb-2">Proper maintenance of Karcher vacuum cleaners, which includes water pressure pump, robot vacuum and Karcher garden tools, is essential for ensuring safety, optimal performance, and extended longevity.</p>
                <ul className="mb-0">
                  <li><strong>Extended Lifespan:</strong> Properly managing your Karcher vacuum cleaner helps maintain its condition and extends its lifespan, thus protecting your investment.</li>
                  <li><strong>Energy Efficiency: </strong>Regular maintenance of K&auml;rcher professional tools is key to spotting issues early, helping reduce energy use and lower bills.</li>
                  <li><strong>Avoids Costly Repairs: </strong>Regular maintenance helps identify and address minor vacuum issues before they grow into significant problems.</li>
                  <li><strong>Expert Technician:</strong> Dyson offers a specialised service and Karcher repair center, ensuring that all repairs are completed with genuine parts.</li>
                  <li><strong>Warranty Protection:</strong> Proper maintenance of Karcher products is essential to meet warranty requirements, as defects should stem from normal use, not negligence.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">Based on Common User Experiences and Maintenance of Karcher Vacuum Cleaners</h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Loss of Suction Power</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">This issue is often caused by a vacuum dirty filter that either needs to be cleaned or replaced.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Sudden Shutdown</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Battery drain often occurs due to excessive use of "Boost" mode, not because of a vacuum battery defect.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Brush Bar Not Turning</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Vacuum, threads, or debris can wrap around the brush bar, causing it to stop spinning.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Blockages or Airway</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Debris builds up in the hose of the vacuum, especially if the vacuum is used when overfilled, which leads to decreased suction.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Pulsing Suction</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">When the vacuum pulses quickly, it usually indicates a severe blockage or completely clogged filters.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Overheating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Karcher vacuum automatically shuts down if it overheats due to a blockage or a full bin obstructing airflow.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Bin Emptying Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Dirt can get trapped in the cyclone assembly, preventing release, or the bin seal may not close properly.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Electrical Failure</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">In cordless models, the trigger mechanism may fail, or the vacuum battery might stop charging altogether.</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="get-quote" className="mb-0 mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        {/* The Benefits Of Appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of Karcher Vacuum Service in Dubai</h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <img src={getImageSrc('icon/Ensuring-Safety')}   alt="Cooling Efficiency" className="icon-img-block-icon" />
                    </div>
                    <h3 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h3>
                    <p className="small">Routine checks reduce the risk of electrical faults and other hazards, keeping your home and family safe.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <img src={getImageSrc('icon/Optimal-Performance')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                    </div>
                    <h3 className="text-uppercase mb-2 cs_fs_16"> Optimal Performance </h3>
                    <p className="small">Regular maintenance helps your Karcher Vacuum run smoothly and efficiently, delivering the best results every time.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <img src={getImageSrc('icon/Lower-Energy-Bills')}   alt="Cooling Efficiency" className="icon-img-block-icon" />
                    </div>
                    <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                    <p className="small">Energy-efficient Karcher Vacuum translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <img src={getImageSrc('icon/Saving-Money-on-Repair')}   alt="Cooling Efficiency" className="icon-img-block-icon" />
                    </div>
                    <h3 className="text-uppercase mb-2 cs_fs_16">Saving Money on Repair</h3>
                    <p className="small">Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <img src={getImageSrc('icon/extending')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Karcher Vacuum Lifespan</h4>
                    <p className="small">Proper care and timely servicing can significantly increase life of your Karcher Vacuum, delaying the need for replacements.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <img src={getImageSrc('icon/Peace-of-Mind')}   alt="Cooling Efficiency" className="icon-img-block-icon" />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                    </h4>
                    <p className="small">Knowing your Karcher Vacuum are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
       

        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">   
            <h3>Cost-Effective Karcher Vacuum Cleaner Repair Service Near You, in Dubai</h3>
            <p><b>Best Karcher Professsional Vacuum Cleaner Repair and Service:</b> If you are looking for the best Karcher vacuum service company in Dubai, FAJ is an excellent choice. They are renowned for providing exceptional service.< br/>FAJ specializes in expert maintenance for a variety of cleaning equipment, including window and surface vacuum cleaners, carpet cleaners, sweepers, vacuum sweepers, municipal equipment, vehicle wash systems, steam cleaners, steam vacuum cleaners, disinfection systems, dry ice cleaning, drinking water treatment, water dispensers, container cleaning, and air purifiers.< br/>We understand that breakdowns can occur with Karcher pressure washers, multi-functional vacuum cleaners, robot vacuums and mops, steam cleaners, cordless window vacs, electric wiping mops, air treatment systems, floor cleaners, vacuum mops, watering systems, pumps, push sweepers, mobile cleaning equipment, garden tools, high-pressure cleaners, floor scrubbers, wet and dry vacuum cleaners, and cleaning robots.Additionally, FAJ also offers Karcher lighting repair services in Dubai, UAE.</p>
              <div id="get-quote" className=" mt-3">
                  <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                      <GetQuoteButton />
                      <CallNowButton />
                  </div>
              </div>
            </div>
        </section>
        {/* Maintenance Contract */}
        <MaintenanceContract />

         {/* testimobial section */}
        <Testimonial1
          subtitle="What Our Clients Say"
          title="Customer <span>Reviews</span>"
          bgImg={reviewsbg}
          testimonialData={testimonial_data}
          sectionId="home-testimonials"
        />
        {/* Faqs */}
        <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>
        </section>
       
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
<path d="M8 2V14M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
<path d="M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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

export default KarcherVacuumRepairDetail;
