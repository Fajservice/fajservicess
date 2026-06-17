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
const DysonRepairDetail = ({ subtitle, title, reviewsbg, titleSeo , description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(titleSeo || "Book Dyson Vacuum Cleaner Repair and Service Near You, Dubai");
  const metadescription = String(description || "Top-Rated Dyson vacuum cleaner repair.  Get cordless vacuum robot, wet & dry vacuum, hair dryer air purifier & humidifier service center near you in Dubai");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Dyson appliance repair Dubai, Dyson microwave repair, Dyson fryer repair, Dyson Dyson repair, Dyson rice cooker repair, Dyson toaster repair, Dyson vacuum repair, Dyson tools repair, Dyson appliance service Dubai, Dyson appliance maintenance Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/brands/dyson-vacuum-cleaner-repair-and-service-in-dubai/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/dyson-vacuum-cleaner-repair/public");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
   const dysonServicesData = [
    {
      id: 1,
      image: getImageSrc('dyson-vacuum-cleaner-repair'),
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
      image: getImageSrc('dyson-vacuum-cleaner-repairs'),
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
                      fetch(`${import.meta.env.BASE_URL}data/AppliancesData/AppliancesFaqs/DysonFaqs.json`),
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
            <h1 className="cs_fs_30">Dyson Vacuum Service & Repair Near You!</h1>
            <h2 className="cs_fs_24">Have a Faulty Dyson Vacuum Cleaner? Need It Fixed, Serviced or Repaired?</h2>
            <p>If your Dyson vacuum cleaner is making strange noises, losing suction, or simply not performing as it used to, we understand how frustrating that can be. At FAJ Technical Services L.L.C, our team of Dyson technicians is here to support. We offer comprehensive in-home services that will fix your Dyson vacuum cleaner to peak performance, making it run like new again.<br/>Imagine having your Dyson vacuum fully dismantled, deep cleaned, and inspected for wear. If necessary, we will rebuild it with new Dyson spare parts. This Dyson service not only saves you the cost of buying a new machine but also provides peace of mind, knowing that your Dyson is operating efficiently and reliably when you need it most.<br/>Book your Dyson service with FAJ today and get your Dyson vacuum cleaner back to its best. Contact us now to schedule a convenient appointment!</p>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>
        <PriceCardHomeCat  services={dysonServicesData}/>
{/* Best Home Appliance Service Center */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5 align-items-center">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left">Dyson Vacuum Cleaner Repair and Service in Dubai</h2>
                <p className="mb-2">We will schedule an appointment at a time that is convenient for you, either at your home or FAJ workshop. We will confirm the exact appointment time so that you won't have to wait around all day. Get FAJ expert for maintenance of Dyson cordless vacuum cleaners, Fix Dyson robot vacuum cleaners, Dyson wet and dry vacuums repairing, wet floor cleaners servicing, and cordless vacuum repair and cleaning services in Dubai.</p>
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left">Same Day Dyson Appliance Service Nearby</h2>
                <p className="mb-2">We understand that breakdowns of Dyson appliances never occur at a convenient time. This includes Dyson hair care products such as hair dryers, hair stylers, hair straighteners, as well as air treatment products like air purifiers, purifier-humidifiers, heaters repair, and Dyson lighting fix service Dubai, UAE</p>
              </div>
              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('dyson-vacuum-cleaner-services')} alt="Dyson repair" />
              </div>
            </div>
            <div className="appointment-col border-small-top pt-3 mt-2">
                <p className="appointment-col">If you need repair or cleaning service for your Dyson service, please contact us. The <a href="https://www.google.com/maps/dir//Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/@25.1105958,55.1452595,22158m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94!2m2!1d55.227661!2d25.1106186?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank"
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
            <h3 className="cs_fs_30">Key Reasons Maintenance is Important for Dyson Appliances:</h3>
            
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('dyson-vacuum-cleaner-repair')}  alt="Dyson repair" />
              </div>
              <div className="col-md-6">
                <p className="mb-2">Proper maintenance of Dyson appliances, which includes vacuum cleaners, hair care like hair dryers, stylers, and straighteners, as well as air treatment products such as air purifiers, purifier-humidifiers, and heaters, is essential for ensuring safety, optimal performance, and extended longevity.</p>
                <ul className="mb-0">
                  <li><strong>Extended Lifespan:</strong> Properly managing your Dyson appliances helps maintain their condition and extends their lifespan, thus protecting your investment.</li>
                  <li><strong>Energy Efficiency: </strong>Regular maintenance of Dyson appliances is key to spotting issues early, helping to reduce energy use and lower bills.</li>
                  <li><strong>Avoids Costly Repairs: </strong>Regular maintenance helps identify and address minor appliance issues before they grow into significant problems.</li>
                  <li><strong>Expert Technician:</strong> Dyson offers a specialized service and repair center, ensuring that all repairs are completed with genuine parts.</li>
                  <li><strong>Warranty Protection:</strong> Proper maintenance of Dyson products is essential to meet warranty requirements, as defects should stem from normal use, not negligence.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">Based on Common User Experiences and Maintenance of Dyson Appliances</h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Loss of Suction Power</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">This issue is often caused by a dirty filter that either needs to be cleaned or replaced.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Sudden Shutdown</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Battery drain often occurs due to excessive use of "Boost" mode, not because of a battery defect.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Brush Bar Not Turning</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Hair, threads, or debris can wrap around the brush bar, causing it to stop spinning.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Blockages or Airway</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Debris builds up in the hose, especially if the vacuum is used when overfilled, which leads to decreased suction.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Pulsing Suction</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">When the machine pulses quickly, it usually indicates a severe blockage or completely clogged filters.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Overheating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The vacuum automatically shuts down if it overheats due to a blockage or a full bin obstructing airflow.</p>
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
                    <p className="p-2 mb-0">In cordless models, the trigger mechanism may fail, or the battery might stop charging altogether.</p>
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
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of Dyson Service in Dubai</h2>
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
                    <p className="small">Regular maintenance helps your Dyson run smoothly and efficiently, delivering the best results every time.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <img src={getImageSrc('icon/Lower-Energy-Bills')}   alt="Cooling Efficiency" className="icon-img-block-icon" />
                    </div>
                    <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                    <p className="small">Energy-efficient Dyson translate to monthly savings on utility bills, putting more money back in your pocket.</p>
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
                    <h4 className="text-uppercase mb-2 cs_fs_16">Dyson Lifespan</h4>
                    <p className="small">Proper care and timely servicing can significantly increase life of your Dyson, delaying the need for replacements.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                    <div className="icon-img-block">
                      <img src={getImageSrc('icon/Peace-of-Mind')}   alt="Cooling Efficiency" className="icon-img-block-icon" />
                    </div>
                    <h4 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                    </h4>
                    <p className="small">Knowing your Dyson are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')}   alt="Fast, Reliable Service" />
                  </div>
                  <div className="usptext">
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')}   alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your Dyson runs smoothly and providing peace of mind.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')}   alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your Dyson repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>
              </div>
              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1-new')}   alt="FAJ icon service" />
              </div>
              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We are experts in Dyson repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two Dyson at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our skilled Dyson technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>
              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('fajteam')}   alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">   
            <h3>Cost-Effective Dyson Appliances Repair Service Near You, in Dubai</h3>
                <div className="row">
                    <div className="col-12">
                      <p className="mb-0"><strong>Dyson Appliances Repair and Service:</strong> If you're searching for the best Dyson vacuum service company in Dubai, FAJ is the perfect choice. They are well-known for delivering exceptional service. FAJ offers expert maintenance for Dyson cordless vacuum cleaners, repairs for Dyson robot vacuum cleaners, servicing for Dyson wet and dry vacuums, and cleaning services for cordless vacuums in Dubai.<br/>We understand that breakdowns of Dyson appliances rarely happen at a convenient time. This includes issues with Dyson hair care products, such as hair dryers, hair stylers, and hair straighteners, as well as air treatment products like air purifiers, purifier-humidifiers, and heaters. Additionally, FAJ provides Dyson lighting repair services in Dubai, UAE.</p>
                    </div>
                </div>
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

export default DysonRepairDetail;
