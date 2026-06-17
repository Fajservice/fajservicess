import { useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../../Common/loadBackgroudImages";
import HeaderForm from "../../../Headeform/HeaderForm";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import CallNowButton from "../../../Buttons/CallNowButton";
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
const BlackAndDeckerRepairDetail = ({ subtitle, title, reviewsbg, titleSeo , description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(titleSeo || "Black & Decker Household Appliances Repair and Service Dubai");
  const metadescription = String(description || "Top-Rated Black & Decker appliance repair in Dubai. Call us for best service on microwave, fryer, Black & Decker, rice cooker, toaster, vacuum, tools.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Black & Decker appliance repair Dubai, Black & Decker microwave repair, Black & Decker fryer repair, Black & Decker Black & Decker repair, Black & Decker rice cooker repair, Black & Decker toaster repair, Black & Decker vacuum repair, Black & Decker tools repair, Black & Decker appliance service Dubai, Black & Decker appliance maintenance Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/brands/black-and-decker-repair-service-in-dubai/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/blackdecker-vacuum-cleaner-repair/public");

  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
   const blackdeckerServicesData = [
    {
      id: 1,
      image: getImageSrc('blackdecker-vacuum-cleaner-repair'),
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
      image: getImageSrc('blackdecker-oven-repair'),
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
                      fetch(`${import.meta.env.BASE_URL}data/AppliancesData/AppliancesFaqs/BlackAndDeckerFaqs.json`),
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
            <h1 className="cs_fs_30">Trusted Black & Decker Kitchen Appliances Repair and Service Center</h1>
            {/* 
          <h2 className="cs_fs_30">CHOOSE APPLIANCE SERVICE CENTER FOR SAME-DAY REPAIRS IN DUBAI</h2> */}
            <p>Black & Decker is a globally recognised leader in power tools, home improvement solutions, and household appliances. Known for innovation and user-friendly design, the company has built a strong reputation among DIY enthusiasts and professionals. Their extensive product range includes Black + Decker vacuum cleaners, mixers,  fryers, blenders, juicers, choppers, food processors, coffee and espresso makers, grills, griddles, kettles, mixers, slow cookers, rice cookers, sandwich makers, speciality appliances, steamers, toasters, toaster ovens, and microwaves, all designed to make everyday tasks easier and more efficient.<br/>Since 2010, FAJ Technical Services L.L.C has been providing service and repair for Black & Decker kitchen appliances and power tools in Dubai.</p>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>
        <PriceCardHomeCat  services={blackdeckerServicesData}/>
{/* Best Home Appliance Service Center */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5 align-items-center">
              <div className="col-md-6">
                <h3 className="cs_fs_24 mb-1 mt-0 text-align-left">Same-Day Black & Decker Kitchen Appliance Repair Service</h3>
                <p className="mb-2">When your Black & Decker kitchen appliances break down, it can disrupt your daily routine. FAJ offers fast and efficient repair services for Black & Decker appliances near you.</p>
                <p className="mb-2">We specialize in repairing a wide range of Black & Decker products, including vacuum cleaners, air fryers, blenders, juicers, choppers, food processors, Black & Decker and espresso makers, grills, griddles, kettles, mixers, slow cookers, rice cookers, sandwich makers, specialty appliances, steamers, toasters, toaster ovens, microwaves, steam irons, humidors, power tools, water pressure pumps, and hair dryers repair at affordable prices, along with Black & Decker repair and spare parts warranty.< br/>Let us help you get your appliance back in shape!</p>
              </div>
              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('air-fryer-repair-services')} alt="Black & Decker repair" />
              </div>
            </div>
            <div className="appointment-col border-small-top pt-3 mt-2">
                <p className="appointment-col">If you need repair or cleaning service for your Black & Decker kitchen appliances and power tools, please contact us. The <a href="https://www.google.com/maps/dir//Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/@25.1105958,55.1452595,22158m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94!2m2!1d55.227661!2d25.1106186?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank"
                >FAJ workshop</a> is conveniently located near both Al Khail Road and Sheikh Zayed Road.<br/>When you drop off your appliance at the workshop, you will receive a discount on the technical inspection fee and other services.</p>
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
            <h3 className="cs_fs_30">Key Reasons Maintenance is Important for Black & Decker Kitchen Appliances:</h3>
            
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('blackdecker-vacuum-cleaner-repair')}  alt="Black & Decker repair" />
              </div>
              <div className="col-md-6">
                <p className="mb-2">Properly maintaining Black & Decker kitchen appliances like blender, toaster, coffee maker, and vacuum is essential for prolonging their lifespan and ensuring safety and performance.</p>
                <ul className="mb-0">
                  <li><strong>Extended Lifespan:</strong> Caring for your appliances keeps them in good condition and extends their lifespan, protecting your investment.</li>
                    <li><strong>Energy Efficiency: </strong>Regular service helps to identify problems early, which reduces energy consumption and lowers electricity costs.</li>
                    <li><strong>Avoids Costly Repairs:</strong> Routine servicing fixes minor problems before appliance become major damage.</li>
                    <li><strong>Expert Technician:</strong> Black &amp; Decker provides service and repair center for specialised care, ensuring repairs are made with genuine parts.</li>
                    <li><strong>Warranty Protection:</strong> Regular maintenance ensures compliance with warranty conditions, as defects must result from normal use, not neglect.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">Here are 8 Common Problems with Black & Decker Kitchen Appliances</h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Blender Motor Overheating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Many Black & Decker blenders will automatically shut off the motor if it overheats while blending thick mixtures after some time used.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Toaster Oven "No Heat"</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A common issue with Black & Decker toaster ovens is that the heating elements may not turn on, often due to a faulty part or PCB.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Blender Blade Suction/Sticking:</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The blender jar's base often sticks to the motor unit due to food residue or suction, making it hard to remove for cleaning.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Iron Not Steaming</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Black & Decker irons may lose steam due to clogged steam holes from mineral buildup or issues with the Smart Steam pump.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Vacuum Cleaner Low Suction</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Black & Decker vacuum cleaners may lose suction due to a dirty filter or a blockage in the intake nozzle.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Toaster Oven Start Knob</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Toaster ovens often have issues where the "Start/Toast" button won't stay down, usually due to a faulty Zener diode or the lock.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Air Fryer Won't Turn On</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The air fryer may fail to turn on due to a faulty safety switch that sees if the basket is securely inserted, or thermal fuse.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Microwave Fails to Heat</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The unit powers on but does not heat. This may be due to a faulty magnetron, high-voltage diode, or a damaged door switch.</p>
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
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of Black & Decker Service in Dubai</h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')}   alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h3>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16"> Optimal Performance </h3>
                      <p className="small">Regular maintenance helps your Black & Deckers run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')}   alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                      <p className="small">Energy-efficient Black & Deckers translate to monthly savings on utility bills, putting more money back in your pocket.</p>
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
                      <h4 className="text-uppercase mb-2 cs_fs_16">Black & Decker Lifespan</h4>
                      <p className="small">Proper care and timely servicing can significantly increase life of your Black & Deckers, delaying the need for replacements.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')}   alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                      </h4>
                      <p className="small">Knowing your Black & Deckers are in top condition gives you confidence and removes the stress of unexpected failures.</p>
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
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your Black & Decker runs smoothly and providing peace of mind.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')}   alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your Black & Decker repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
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
                    <p>We are experts in Black & Decker repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two Black & Deckers at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our skilled Black & Decker technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
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
            <h3>Cost-Effective Black and Decker Appliances and Electric Tools Repair Services Near You</h3>
                <div className="row">
                    <div className="col-12">
                      <p className="mb-0"><strong>Black and Decker Kitchen Appliances Service:</strong> FAJ is here to assist you when things go wrong. We understand that your Black and Decker kitchen appliance is essential for daily life, helping to keep your food fresh and your meals prepared.</p>
                      <p className="mb-0">We offer a variety of Black + Decker products repair and fix service, including vacuum cleaners, mixers, fryers, blenders, juicers, choppers, food processors, coffee and espresso makers, grills, griddles, kettles, slow cookers, rice cookers, sandwich makers, specialty appliances, steamers, toasters, toaster ovens, and microwave ovens.</p>
                      <p className="mb-0">All of these appliances are designed to make everyday tasks easier and more efficient.</p>
                      <p className="mb-0"><strong>Black and Decker Power Tools &amp; Hand Tools Repair :</strong> If you are having problems with your Black &amp; Decker tools, such as drills, dust management systems, grinders and polishers, multi-function tools, automotive tools, saws, screwdrivers and screwguns, hand tools, mixed tool sets, ratchets and sockets, or hex keys, please reach out to the FAJ team for same-day repair service in Dubai.</p>
                      <p className="mb-0">Contact us for reliable Black &amp; Decker tool servicing near your location in Dubai.</p>
                      <p className="mb-0"><strong>Black and Decker Outdoor Living and Hand Electric Tools Repair :&nbsp;</strong></p>
                      <p className="mb-0">When you need Black and Decker shears, pruning tools, lawn and garden tools, or outdoor living hand tools, we provide a variety of services. Our offerings include electric garden tools, car washers, water pressure pumps, and different types of corded pressure washers maintenance and repair center near you, in Dubai, UAE</p>
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
      </div >
      
    </>
  )
  
}

export default BlackAndDeckerRepairDetail;
