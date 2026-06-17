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
const IceCreamMachineRepairDetail = ({ subtitle, title, reviewsbg, titleSeo , description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(titleSeo || "Best Ice Cream Machine Repair and Maintenance Services Dubai");
  const metadescription = String(description || "Trusted commercial ice cream machine repair and service near you, in Dubai. Get fast fixing soft ice cream, shake and slush machines maintenance UAE");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Ice Cream Machine Repair, Soft Ice Cream Machine Service, Shake Machine Maintenance, Slush Machine Repair, Commercial Ice Cream Machine Service Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/brands/ice-cream-machine-repair-and-service-in-dubai/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ice-cream-machine-repair/public");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const IceCreamMachineRepairData = [
    {
      id: 1,
      image: getImageSrc('icream-machine-repair'),
      title: 'Inspection / Check-Up Cost',
      icon: getImageSrc('calloutcard'),
      price: 'AED320',
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
      image: getImageSrc('ice-cream-machine-service'),
      warranty: '50- Days Warranty',
      title: 'Appliance Cleaning',
      icon: getImageSrc('cleaningcard'),
      price: 'AED1180',
      arrow: getImageSrc('iconreadmore'),
      description: 'Book reliable appliance cleaning professionals for your equipment. Our teams offer competitive pricing & limited-time availability across Dubai.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=Basic%20ACCleaning',
      popupTitle: 'Cleaning Appliances',
      sections: [
        {
          heading: 'Depending on quantities, capacity, type, model, and area.',
          items: [
            'Ice Cream Machine Cleaning',
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
                      fetch(`${import.meta.env.BASE_URL}data/AppliancesData/AppliancesFaqs/IceCreamMachineFaqs.json`),
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
            <h1 className="cs_fs_30">Top-Rated Ice Cream Machine Repair and Maintenance Service in Dubai</h1>
            <p>When your ice cream machine breaks down, it usually happens at the worst time, impacting your busiest season and revenue.< br/>Since 2010, FAJ Technical Services L.L.C. has been offering reliable ice cream machine repair and maintenance services in Dubai, UAE. Our skilled technicians service all types of soft ice cream, shake, and slush machine repair and servicing near you.< br/>We customise our maintenance contracts (AMC) to fit your business needs. Most machine issues arise from inadequate training and lack of preventative maintenance. Our package includes an annual agreement, regular tune-ups, training, and phone support, ensuring that inspections / check up happen only when needed. We also provide winter service and steam cleaning.</p>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>
        <PriceCardHomeCat  services={IceCreamMachineRepairData}/>
        {/* Best Home Appliance Service Center */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5 align-items-center">
              <div className="col-md-6">
                <h2 className="cs_fs_20 mb-1 mt-0 text-align-left">Best Commercial Ice Cream Machine Repair and Maintenance in Dubai</h2>
                <p className="mb-2">If you are in search of a reliable and affordable team to assist with repairs for your commercial ice cream maker, soft serve ice cream, and yogurt machines, you've come to the right place. We have the skills and experience necessary to ensure that your soft serve machines are functioning correctly, from initial repair to any maintenance and servicing you may require.</p>
                <h3 className="cs_fs_20 mb-1 mt-0 text-align-left">Fast Soft Serve Ice Cream Machine , Shake, & Slush Machine Maintenance</h3>
                <p className="mb-2">Get top-quality service for all your ice cream machines, including soft serve, shake, and slush machine repair and maintenance in Dubai, UAE. Rely on us for regular maintenance—our FAJ experts work on most brands, ensuring your machines operate smoothly for years.< br/>Proper maintenance is key for optimal performance, so trust professionals to repair your soft serve machines. This way, you’ll delight your customers and boost your profits!</p>
              </div>
              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('icream-machine-repair-service')} alt="Ice Cream Machine repair" />
              </div>
            </div>
            <div className="appointment-col border-small-top pt-3 mt-2">
                <p className="appointment-col">If you need repair or cleaning service for your Ice Cream Maker Machine, please contact us. The <a href="https://www.google.com/maps/dir//Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/@25.1105958,55.1452595,22158m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94!2m2!1d55.227661!2d25.1106186?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank"
                >FAJ workshop</a> is conveniently located near both Al Khail Road and Sheikh Zayed Road.When you drop off your appliance at the workshop, you will receive a discount on the technical inspection fee and other services.</p>
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
            <h3 className="cs_fs_30">HERE ARE THE KEY REASONS WHY MAINTENANCE IS ESSENTIAL FOR ICE MAKER MACHINES:</h3>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('icream-machine-repair')}  alt="Ice Cream Machine repair" />
              </div>
              <div className="col-md-6">
                
                <ul className="mb-0">
                  <li><strong>Food Safety and Health Compliance:</strong> Ice cream is classified as food. Regular cleaning and sanitizing remove bacteria, mold, and pathogens, preventing foodborne illnesses and ensuring compliance with health standards.</li>
                  <li><strong>Preventing Costly Repairs and Downtime: </strong>Regular servicing detects issues like faulty sensors or leaks early, preventing costly repairs and reducing downtime during busy times.</li>
                  <li><strong>Optimal Performance and Efficiency:</strong> Cleaning service of condenser coils and replacing the water filters prevents the ice cream machine from overworking, ensuring high rates of ice production and preventing smaller, slower-forming ice cubes.</li>
                  <li><strong>Energy and Cost Savings:</strong> A properly maintained ice maker functions more effectively, utilizing less energy and water, which results in reduced utility bills.</li>
                  <li><strong>Extended Equipment Lifespan:</strong> Regular descaling effectively removes mineral deposits, preventing corrosion and wear, and maximizing return on investment.</li>
                  <li><strong>Improved Ice Quality:</strong> Regular maintenance eliminates scale buildup, preventing dirty, cloudy, or odd-tasting ice, and ensuring the final product is clean, clear, and odor-free.</li>
                </ul>
                <p className="mb-2">Tips: Professional maintenance should be conducted every 3 to 6 months, which includes replacing water filters and cleaning service the condenser.</p>
              </div>
            </div>
          </div>
        </section>
        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">Based on Common User Experiences and Maintenance of Ice Cream Machine</h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">No Ice Production</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Commonly caused by a blocked water filter, an inactive water supply, or a halted ice-making cycle.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Small or Hollow Ice Cubes</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">This usually indicates low water pressure or a clogged filter, preventing the mold from filling properly.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Water Leaks</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The issue may be caused by an unlevel machine, high water pressure, or a damaged water inlet valve.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Frozen Water Line</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The fill tube that delivers water to the mold can freeze, blocking water entry and halting production.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Ice Stuck in the Mold</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If the ejector arm does not turn or if the temperature is too low, ice cubes may remain stuck in the tray, preventing new ice from forming.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Bad-Tasting or Smelly Ice</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ice cream issues are usually due to infrequent use, a dirty bin, or an old water filter that may need replacing.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Excessive Noise</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A loud grinding, buzzing, or clicking noise typically indicates a failing motor, fan, or a mechanism that is frozen while trying to turn.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Machine Does Not Stop Making Ice</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A faulty sensor or broken metal control arm can fail to detect when the ice bucket is full, which may cause overflowing ice cream.</p>
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
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of Ice Cream Machine Service in Dubai</h2>
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
                    <p className="small">Regular maintenance helps your Ice Cream Machine run smoothly and efficiently, delivering the best results every time.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <img src={getImageSrc('icon/Lower-Energy-Bills')}   alt="Cooling Efficiency" className="icon-img-block-icon" />
                    </div>
                    <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                    <p className="small">Energy-efficient Ice Cream Machine translate to monthly savings on utility bills, putting more money back in your pocket.</p>
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
                    <h4 className="text-uppercase mb-2 cs_fs_16">Ice Cream Machine Lifespan</h4>
                    <p className="small">Proper care and timely servicing can significantly increase life of your Ice Cream Machine, delaying the need for replacements.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <img src={getImageSrc('icon/Peace-of-Mind')}   alt="Cooling Efficiency" className="icon-img-block-icon" />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                    </h4>
                    <p className="small">Knowing your Ice Cream Machine are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
       

        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">   
            <h3>Cost-Effectivec Ice Cream Maker Machine Repair Service Near You, in UAE</h3>
            <p><b>Professsional Ice Cream Machine Maintenance and Servicing:</b> If you're searching for the best commericial ice cream machine repair and service company in Dubai, FAJ is an excellent choice. They are well-known for providing exceptional service.<br/>FAJ specializes in expert maintenance for a variety of ice cream maker equipment, including hard ice cream freestanding machines, single flavor soft ice cream machines, and soft ice cream tabletop machines. They also offer repair services and annual maintenance contracts (AMC) for different types and modles of machines across the UAE.< br/>We understand that breakdowns can happen with soft ice cream machines, cold beverage dispensers, milkshake makers, Santos spindle drink mixers, and commercial juice dispensers. FAJ provides reliable repair and cleaning services near you in Dubai, Sharjah, and Abu Dhabi.</p>
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

export default IceCreamMachineRepairDetail;
