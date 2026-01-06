import { useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";

import loadBackgroudImages from "../../../Common/loadBackgroudImages";
import HeaderForm from "../../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../../ApplianceCommons/AppliancesAppointmentCol";
import DaiganosisCharges from "../AppliancesLocation/ApplianceSpecialise/Daiganosischarges";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import CallNowButton from "../../../Buttons/CallNowButton";
import Testimonial1 from "../../../Testimonial/Testimonial1";

const UnimacWashingMachineRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
 // For SEO
 const metatitle = String(titleSeo || "Unimac Washing Machine Repair & Washer Dryer AMC Services");
 const metadescription = String(description || "FAJ is offering Unimac Washing Machine Repair in Dubai, including Unimac Washer Dryer, laundry machine maintenance contract Services. Contact Us.");
 const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
 const metaImage = String(Image || "https://www.fajservices.ae/img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif");
 const metaKeyword = String(Keyword || "unimac washing machine repair in Dubai, Unimac dryer repair in Dubai, Unimac washer dryer repair in Dubai, Unimac maintenance in Dubai, Unimac laundry service in Dubai, Unimac Dubai");
 const metaURL = String(URL || "https://www.fajservices.ae/unimac-washing-machine-repair-in-dubai-unimac-dryer-repair-in-dubai-unimac-washer-dryer-repair-in-dubai-unimac-maintenance-in-dubai-unimac-laundry-service-in-dubai-unimac-dubai/").replace(/\/?$/, '/');

 subtitle = "Testimonial"
 title = "What our clients say About Us"
 reviewsbg = "img/testimonialbg.jpg"
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
                     fetch(`${import.meta.env.BASE_URL}data/AppliancesData/AppliancesFaqs/AppliancesFaqs.json`),
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

 const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,

  responsive: [
   {
    breakpoint: 1399,
    settings: {
     slidesToShow: 2,
    }
   },
   {
    breakpoint: 1199,
    settings: {
     slidesToShow: 2,
    }
   }, {
    breakpoint: 768,
    settings: {
     slidesToShow: 1,
    }
   }
  ]
 };


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
     <meta name="twitter:url" content={metaURL} />
    </Helmet>
   </HelmetProvider>

   <HeaderForm />

   <div className="cs_service_details">
    {/* intro */}
    <section className="section cs_py_30">
     <div className="container">
      <h1 className="cs_fs_30">Unimac Washing Machine Repair, Washer Dryer Maintenance Contract Services in Dubai</h1>

      <p>
       At <a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876">FAJ Technical Services L.L.C</a>, we provide comprehensive services for UniMac commercial washing machines, dryers, and laundry equipment. Our team specialises in the installation, maintenance, and repair of all UniMac models, including heavy-duty washers, tumble dryers, and stack washer/dryer units, ensuring your laundry operations run smoothly and efficiently.
       <br />
       Whether you require scheduled maintenance or urgent repairs for your hotel, hospital, or commercial laundry facility, our experienced technicians are committed to delivering prompt and practical solutions. Trust us to keep your UniMac laundry equipment performing at its best and enjoy the peace of mind that comes with dependable service. Contact us today!
      </p>

      <div id="get-quote" className=" mt-3">
       <div className="container d-flex justify-content-center align-items-center gap-3">
        <WhatsappIconButton />
       </div>
      </div>
      {/*  */}
     </div>
    </section>

    {/* Best Home Appliance Service Center */}
    <section className="section cs_py_30 bg-light-gray">
     <div className="container">
      <div className="row gx-md-5">
       <div className="col-md-6">
        <h3 className="cs_fs_24 mb-1">UniMac Washing Machine Repair Service </h3>

        <p className="mb-2">

         We understand the essential role commercial washing machines play in your business operations. That’s why we offer dependable repair and maintenance services for UniMac washers and dryers in Dubai and Sharjah. Our skilled technicians are committed to delivering expert support for all types of UniMac laundry equipment, from heavy-duty washers to high-capacity dryers.
         <br />
         With our professional UniMac washer and dryer repair services, we ensure your commercial laundry machines continue running at peak performance for years to come.
        </p>

        <h3 className="cs_fs_24 mb-1 pt-3 border-small-top">Fast and Reliable UniMac Appliances Service</h3>
        <p className="mb-2">
         At FAJ Technical Services L.L.C, we know that UniMac appliance issues can occur without warning. That’s why our skilled technicians offer dependable UniMac <a href="https://www.fajservices.ae/appliances-repair-service/">appliance repair services</a> across Dubai and Sharjah. With our professional support, you can avoid costly replacements and have your laundry equipment restored to peak performance in no time.
        </p>
       </div>

       <div className="col-md-6 ">

        <img className="bordered-img w-100" src={`${import.meta.env.BASE_URL}img/The-Most-Common-Reasons-for-Appliance-Breakdowns.avif`}  alt="Post Image" />
       </div>
      </div>
      <AppliancesAppointmentCol></AppliancesAppointmentCol>
     </div>
    </section>

    {/* Why is Appliance Maintenance Service Important in Dubai? */}
    <section className="section cs_py_30">
     <div className="container">

      <h3 className="cs_fs_30">Why is UniMac Appliances Maintenance Service Important in Dubai?</h3>
      <p className="">
       Washing machine maintenance is vital in Dubai to ensure optimal performance and reliability. Regular servicing of UniMac commercial laundry appliances helps prevent issues and extends the life of your equipment. Here’s why it matters:
      </p>

      <div className="row align-items-center">
       <div className="col-md-6">
        <img className="blue-border" src={`${import.meta.env.BASE_URL}img/dishwasher-repair-service.avif`}  alt="Post Image" />
       </div>
       <div className="col-md-6">
        <ul className="mb-0">

         <li> <strong> UniMac Washing Machines Save Energy & Water: </strong> Regular servicing boosts efficiency, reduces energy and water usage, lowers operating costs, and supports eco-friendly laundry operations. </li>
         <li> <strong> Washers and Dryers Prevent Breakdowns: </strong> Routine maintenance detects minor issues in UniMac washer-dryer units before they escalate into major problems and expensive repairs. </li>
         <li> <strong> Commercial Laundry Equipment Improves Efficiency: </strong> For hotels, hospitals, laundromats, and other businesses using UniMac machines, regular servicing ensures smooth operations and minimises downtime. </li>
         <li> <strong> Washing Machines Extend Lifespan: </strong> Proper maintenance reduces wear and tear, keeps parts clean, and helps prevent premature failures, maximising your equipment’s lifespan. </li>
         <li> <strong> Washers Ensure Hygienic Laundry: </strong> Cleaning drums, detergent drawers, and filters regularly prevents mould, odours, and residue, keeping laundry fresh and sanitary. </li>
         <li> <strong> Washer Dryer Safety: </strong> Inspections help identify hazards such as leaks, electrical issues, and overheating, keeping your facility safe. </li>


        </ul>
       </div>
      </div>
     </div>
    </section>

    {/* The Most Common Problems with Home Appliances */}
    <section className="section cs_py_30 bg-light-gray">
     <div className="container">
      <h3 className="text-center">The Most Common Problems with Unimac Home Appliances </h3>
      <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

       <div className="col-12 col-md-4 col-lg-3">
        <div className=" box-content-container rounded border shadow">
         <div className="text-center">
          <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0"> Worn or Damaged Hoses</h3>
         </div>
         <div className="inner-apcs-feat-desc">
          <p className="p-2 mb-0">
           Check the UniMac washer’s drain line and fill hoses for cracks, loose inlet connections, internal leaks, or damaged pipe hoses.
          </p>
         </div>
        </div>
       </div>

       <div className="col-12 col-md-4 col-lg-3">
        <div className=" box-content-container rounded border shadow">
         <div className="text-center">
          <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0"> Loose Connections</h3>
         </div>
         <div className="inner-apcs-feat-desc">
          <p className="p-2 mb-0">
           Ensure all water connections on your UniMac appliance are secure, especially around the water inlet valve or machine inlet.
          </p>
         </div>
        </div>
       </div>

       <div className="col-12 col-md-4 col-lg-3">
        <div className=" box-content-container rounded border shadow">
         <div className="text-center">
          <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faulty Door Seals or Gaskets </h3>
         </div>
         <div className="inner-apcs-feat-desc">
          <p className="p-2 mb-0">
           Inspect the door seals and rubber gaskets of your UniMac washing machine for cracks, wear, or potential water leaks.
          </p>
         </div>
        </div>
       </div>

       <div className="col-12 col-md-4 col-lg-3">
        <div className=" box-content-container rounded border shadow">
         <div className="text-center">
          <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Faulty Drain Pump </h3>
         </div>
         <div className="inner-apcs-feat-desc">
          <p className="p-2 mb-0">
           A defective drain pump in your UniMac washer can stop proper water drainage. Inspect it carefully for faults that could affect performance.
          </p>
         </div>
        </div>
       </div>

       <div className="col-12 col-md-4 col-lg-3">
        <div className=" box-content-container rounded border shadow">
         <div className="text-center">
          <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0"> Clogged Drain Hose or Pump</h3>
         </div>
         <div className="inner-apcs-feat-desc">
          <p className="p-2 mb-0">
           Regularly clean your UniMac washing machine’s drain hose and check for blockages in the drain pump or inlet filter.
          </p>
         </div>
        </div>
       </div>

       <div className="col-12 col-md-4 col-lg-3">
        <div className=" box-content-container rounded border shadow">
         <div className="text-center">
          <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0"> Loud Noises</h3>
         </div>
         <div className="inner-apcs-feat-desc">
          <p className="p-2 mb-0">
           Grinding, rumbling, or humming sounds from a UniMac washer may signal problems with the motor, drum spider, or worn bearings.
          </p>
         </div>
        </div>
       </div>

       <div className="col-12 col-md-4 col-lg-3">
        <div className=" box-content-container rounded border shadow">
         <div className="text-center">
          <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0"> Drum Doesn’t Rotate</h3>
         </div>
         <div className="inner-apcs-feat-desc">
          <p className="p-2 mb-0">
           If your UniMac washing machine’s drum won’t spin, the cause might be a faulty PCB, damaged motor, or worn carbon brushes.
          </p>
         </div>
        </div>
       </div>

       <div className="col-12 col-md-4 col-lg-3">
        <div className=" box-content-container rounded border shadow">
         <div className="text-center">
          <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0"> Door & Lid Switch Issues
          </h3>
         </div>
         <div className="inner-apcs-feat-desc">
          <p className="p-2 mb-0">
           A malfunctioning door or lid switch in a UniMac washer can stop the machine from starting or cause it to halt mid-cycle.
          </p>
         </div>
        </div>
       </div>


      </div>

      <div id="get-quote" className="mb-0 mt-3">
       <div className="container d-flex justify-content-center align-items-center gap-3">
        <WhatsappIconButton />
       </div>
      </div>
     </div>
    </section>



    {/* HERE ARE THE SERVICES WE OFFER FOR HOME APPLIANCES */}
    <section className="section cs_py_30">
     <div className="container">
      <h3 className="cs_fs_30">HERE ARE THE SERVICES WE OFFER FOR UNIMAC APPLIANCES</h3>

      <div className="row align-items-center">
       <div className="col-xl-6">
        <iframe
         className="bordered-img blue-border"
         width="100%"
         height="350"
         src="https://www.youtube.com/embed/45IUOnKHjKw?si=2x6Q4RPxVZUtOVKy"
         title="YouTube video player"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen
        ></iframe>
       </div>

       <div className="col-xl-6">
        <p className='mb-0'>We specialise in all types of UniMac appliances, including commercial washing machines, dryers, and heavy-duty laundry equipment.</p>
        <p className='mb-0'><strong>Our services include:</strong></p>
        <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
         <li> <strong> UniMac Appliance Installation: </strong> Professional installation of all UniMac commercial laundry machines to ensure peak performance, efficiency, and safety. </li>
         <li> <strong> UniMac Appliance Diagnostics: </strong> We offer expert diagnostics and eligibility assessments, along with detailed quotes for any issues with your UniMac appliances. </li>
         <li> <strong> UniMac Appliance Repair Service: </strong> Our quick and reliable repair services address leaks, electrical faults, and performance issues for your UniMac machines. Contact us for details on specific services or with any questions you may have! </li>
         <li> <strong> UniMac Appliance AMC: </strong> Our annual maintenance contracts ensure your UniMac equipment remains operational throughout the year, minimising downtime and extending its lifespan. </li>

         <p className="mb-0">
          Regular maintenance is essential for keeping your UniMac appliances operating efficiently, performing at their best, and lasting longer.
         </p>
        </ul>
       </div>

      </div>
     </div>
    </section >

    {/* The Benefits Of appliances Service Dubai */}
    <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
     <div className="container">
      <div className="row justify-content-center">
       <h3 className="cs_fs_30 mb-0">The Benefits of UniMac Appliances Service in Dubai
       </h3>
       <div className="row gx-3 gy-5 mt-0">
        <div className="col-md-4 mb-2">
         <div className="">
          <div className="benifit-box-container">
           <div className="icon-img-block">
            <img src={`${import.meta.env.BASE_URL}img/icons/Ensuring-Safety.svg`}  alt="Cooling Efficiency" className="icon-img-block-icon" />
           </div>
           <h3 className="text-uppercase mb-2 cs_fs_18">Ensuring Safety</h3>
           <p className="small">
            Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.
           </p>
          </div>
         </div>
        </div>
        <div className="col-md-4 mb-2">
         <div className="">
          <div className="benifit-box-container">
           <div className="icon-img-block">
            <img src={`${import.meta.env.BASE_URL}img/icons/Optimal-Performance.svg`}  alt="Cooling Efficiency" className="icon-img-block-icon" />
           </div>
           <h3 className="text-uppercase mb-2 cs_fs_18">Optimal Performance</h3>
           <p className="small">
            Regular maintenance helps your UniMac appliances run smoothly and efficiently, delivering top performance every time.
           </p>
          </div>
         </div>
        </div>
        <div className="col-md-4 mb-2">
         <div className="">
          <div className="benifit-box-container">
           <div className="icon-img-block">
            <img src={`${import.meta.env.BASE_URL}img/icons/Lower-Energy-Bills.svg`}  alt="Cooling Efficiency" className="icon-img-block-icon" />
           </div>
           <h3 className="text-uppercase mb-2 cs_fs_18">Lower Energy Bills</h3>
           <p className="small">
            Energy-efficient UniMac washing machines translate to monthly savings on utility bills, putting more money back in your pocket.
           </p>
          </div>
         </div>
        </div>

        <div className="col-md-4 mb-2">
         <div className="">
          <div className="benifit-box-container">
           <div className="icon-img-block">
            <img src={`${import.meta.env.BASE_URL}img/icons/Saving-Money-on-Repair.svg`}  alt="Cooling Efficiency" className="icon-img-block-icon" />
           </div>
           <h3 className="text-uppercase mb-2 cs_fs_18">Saving Money on Repair</h3>
           <p className="small">
            Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.
           </p>
          </div>

         </div>
        </div>
        <div className="col-md-4 mb-2">
         <div className="">
          <div className="benifit-box-container">
           <div className="icon-img-block">
            <img src={`${import.meta.env.BASE_URL}img/icons/extending.svg`}  alt="Cooling Efficiency" className="icon-img-block-icon" />
           </div>
           <h3 className="text-uppercase mb-2 cs_fs_18">Extending Appliance Lifespan</h3>
           <p className="small">
            Proper care and timely servicing can significantly increase life of your UniMac washer and dryer, delaying the need for replacements.
           </p>
          </div>

         </div>
        </div>

        <div className="col-md-4 mb-2">
         <div className="">
          <div className="benifit-box-container">
           <div className="icon-img-block">
            <img src={`${import.meta.env.BASE_URL}img/icons/Peace-of-Mind.svg`}  alt="Cooling Efficiency" className="icon-img-block-icon" />
           </div>
           <h3 className="text-uppercase mb-2 cs_fs_18">Peace of Mind</h3>
           <p className="small">
            Knowing your UniMac laundry equipment is in top condition gives you confidence and removes the stress of unexpected failures.
           </p>
          </div>
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
          <img className="" src={`${import.meta.env.BASE_URL}img/icons/fast-reliable.png`}  alt="Fast, Reliable Service" />

         </div>
         <div className="usptext">
          <h3 className="">Reliable, Priority, and Quick</h3>
          <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
         </div>
        </div>

        <div className="uspitem">
         <div className="uspicon">
          <img className="" src={`${import.meta.env.BASE_URL}img/icons/experts.png`}  alt="We Are Experts" />
         </div>
         <div className="usptext">
          <h3 className="">Feeling Of Calm</h3>
          <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.</p>
         </div>
        </div>


        <div className="uspitem mb-0">
         <div className="uspicon">
          <img className="" src={`${import.meta.env.BASE_URL}img/icons/full-control.webp`}  alt="FAJ icon service" />
         </div>
         <div className="usptext">
          <h3 className="">You Are in Control</h3>
          <p>Choose a day and time for your UniMac appliance repair in Dubai or Sharjah, with a 3-4 hour window for technician arrival.</p>
         </div>
        </div>

       </div>

       {/* <!-- Delimit Section --> */}
       <div className="uspdelimit col-2 d-none d-xl-block">
        <img className="blue-border-2 w-100 why-choose-img" src={`${import.meta.env.BASE_URL}img/fajteam-1.avif`}  alt="FAJ icon service" />
       </div>

       {/* <!-- Second Column --> */}
       <div className="uspcol col-3">
        <div className="uspitem">
         <div className="uspicon">
          <img className="" src={`${import.meta.env.BASE_URL}img/icons/value.png`}  alt="FAJ icon service" />
         </div>
         <div className="usptext">
          <h3 className="">We Are Experts</h3>
          <p>We are experts in UniMac appliance repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
         </div>
        </div>
        <div className="uspitem">
         <div className="uspicon">
          <img className="" src={`${import.meta.env.BASE_URL}img/icons/confidence-guarantee.png`}  alt="FAJ icon service" />

         </div>
         <div className="usptext">
          <h3 className="">Great Value</h3>
          <p>Inspection fee includes diagnosis, transport, and reinstallation up to two UniMac appliances at the same location in Dubai.</p>
         </div>
        </div>
        <div className="uspitem mb-0">
         <div className="uspicon">
          <img className="" src={`${import.meta.env.BASE_URL}img/icons/trustworthy.png`}  alt="FAJ icon service" />
         </div>
         <div className="usptext">
          <h3 className="">Trustworthy</h3>
          <p>Our skilled UniMac appliance technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
         </div>
        </div>
       </div>

       {/* <!-- Delimit mobile --> */}
       <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
        <img className="" src={`${import.meta.env.BASE_URL}img/fajteam.avif`}  alt="FAJ icon service" />
       </div>
      </div>
     </div>
    </section>

    {/* We are specialise in Appliances services for the following brands */}
    <section className="section cs_py_30 bg-light-gray mb-4">
     <div className="container">
      <DaiganosisCharges
       appliancebrand=" UNIMAC APPLIANCE"
       feeRange="ranging from AED 157 to 280"
      />
      <h3>We specialize in  UNIMAC APPLIANCE services of the following types</h3>
      <div className="row">
       <div className="col-12">
        <p className="mb-0"> <strong> UniMac Top-Load Washing Machines: </strong> If your UniMac top-load washer is giving you trouble, the expert technicians at FAJ provide reliable repairs to keep your laundry routine running smoothly. </p>
        <p className="mb-0"> <strong> UniMac Front-Load Washing Machines: </strong> Our team at FAJ understands the unique mechanics of UniMac front-load washers. We deliver prompt, efficient repairs to keep your operations uninterrupted. </p>
        <p className="mb-0"> <strong> UniMac Electric Dryers: </strong> Facing issues with your UniMac electric dryer? FAJ offers quick diagnostics and effective repairs to restore peak performance. </p>
        <p className="mb-0"> <strong> UniMac Gas Dryers: </strong> For UniMac gas dryers, our experienced FAJ technicians ensure safe and efficient repair and maintenance services so your equipment runs reliably. </p>
        <p className="mb-0"> <strong> UniMac Stacked Washer-Dryer Units: </strong> If your stacked unit isn’t functioning correctly, FAJ provides specialised repair services to keep these space-saving machines operating efficiently. </p>
        <p className="mb-0"> <strong> UniMac Commercial Washers: </strong> At FAJ, we understand downtime costs money. Our fast and dependable commercial washer repairs minimise disruptions to your business. </p>
        <p className="mb-0"> <strong> UniMac Commercial Dryers: </strong> Just like our washer service, FAJ ensures your UniMac commercial dryers are running at maximum efficiency to handle heavy workloads. </p>
        <p className="mb-0"> <strong> Coin & Card Operated Laundry Machines: </strong> FAJ delivers responsive repair services for UniMac coin and card-operated machines, ensuring user convenience and smooth operation. </p>
        <p className="mb-0"> <strong> Multi-Housing Laundry Equipment: </strong> Managing multi-housing laundry facilities? FAJ keeps your UniMac equipment in top shape for consistent performance. </p>
        <p className="mb-0"> <strong> Industrial Laundry Systems: </strong> We service UniMac industrial laundry systems with prompt, effective solutions to reduce downtime and maintain operational flow.
         <br />
         For all UniMac appliance needs, trust FAJ for expert repairs, professional installations, and ongoing maintenance tailored to your requirements.</p>

        <h4 className="mt-3">WE OFFER SERVICE FOR UNIMAC APPLIANCES IN THE DUBAI AREA</h4>
        <p>

         <a href="https://www.fajservices.ae/appliances-services-in-business-bay/">Business Bay</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-dubai-marina/">Dubai Marina</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-palm-jumeirah/">Palm Jumeirah</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-dubai-hills-estate/">Dubai Hills Estate</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-damac-hills/">Damac Hills</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-al-barari/">Al Barari</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-al-barsha/">Al Barsha</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-al-safa/">Al Safa</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-arabian-ranches/">Arabian Ranches</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-dubai-silicon-oasis/">Dubai Silicon Oasis</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-dubai-investments-park/">Dubai Investments Park</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-dip/">DIP</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-dubai-production-city/">Dubai Production City</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-impzy/">IMPZ</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-dubai-sports-city/">Dubai Sports City</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-dubai-studio-city/">Dubai Studio City</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-jbr/">JBR</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-beach-residence/">Jumeirah Beach Residence</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-jlt/">JLT</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-lake-towers/">Jumeirah Lake Towers</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-jvc/">JVC</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-village-circle/">Jumeirah Village Circle</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-jvt/">JVT</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-village-triangle/">Jumeirah Village Triangle</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-jebel-ali-village/">Jebel Ali Village</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-jumeirah/">Jumeirah</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-jumeirah-golf-estates/">Jumeirah Golf Estates</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-the-meadows/">Meadows</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-dubai-motor-city/">Motor City</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-town-square/">Town Square</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/ac-services-in-emirates-hills/">Emirates Hills</a>
         <span>&nbsp;|&nbsp;</span>

         <a href="https://www.fajservices.ae/appliances-services-in-umm-suqeim/">Umm Suqeim</a>

        </p>

       </div>
      </div>

      <div id="get-quote" className=" mt-3">
       <div className="container d-flex justify-content-center align-items-center gap-3">
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
          bgImg="img/testimonialbg.jpg"
          testimonialData={testimonial_data}
          sectionId="home-testimonials"
        />

    {/* FAQ&apos;s */}
    <section className="section cs_py_30  bg-dark-blue text-light">
     <div className="container">
      <h3 className="cs_fs_30 text-light">FAQ&apos;s</h3>

      <div className="cs_accordians_wrapper cs_style_1 p-0">

       {data.map((item, index) => (
        <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
         <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
          <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
          <span className="cs_accordian_toggle">
           <i className="bi bi-eye text-light"></i>
           <i className="bi bi-eye-slash text-light"></i>
          </span>
         </div>
         <div className="cs_accordian_body" ref={accordionContentRef}>
          {/* <p className="mb-0">{item.desc.replace(/\n/g, '<br>')}</p> */}
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

   </div >
  </>
 )
}

export default UnimacWashingMachineRepairDetail;
