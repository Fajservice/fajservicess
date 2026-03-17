import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";

import loadBackgroudImages from "../../../Common/loadBackgroudImages";
import HeaderForm from "../../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../../ApplianceCommons/AppliancesAppointmentCol";
import GetQuoteButton from '../../../Buttons/GetQuoteButton';
import CallNowButton from '../../../Buttons/CallNowButton';
import DaiganosisCharges from "../AppliancesLocation/ApplianceSpecialise/Daiganosischarges";
import Testimonial1 from '../../../Testimonial/Testimonial1';
import PriceCardHomeCat from '../../../Services/homeappliances/PriceCardHomeappCat.jsx';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const FagorFridgeRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(titleSeo || "Fagor Fridge Repair | Dishwasher | Ice Machine Service Dubai");
  const metadescription = String(description || "At Fagor Professional, FAJ offers reliable Fagor refrigerator, washing machine, dryer, dishwasher, ice maker, oven repair & maintenance service in Dubai");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/The-Most-Common-Reasons-for-Appliance-Breakdowns/public");
  const metaKeyword = String(Keyword || "Fagor Fridge Repair, Fagor Washing Machine Repair, Fagor Cooker Repair, Fagor Oven Repair, Fagor Appliances Maintenance, Fagor Refrigerator Fix, Fagor Appliance Service");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/brands/fagor/");
  subtitle = "Testimonial"
  title = "What our clients say About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Fagor Home Appliances Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/brands/fagor/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3200",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Fagor Home Appliances Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Fagor Appliances Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fagor Washing Machine Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fagor Fridge Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fagor Freezer Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fagor Dishwasher Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fagor Dryer Repair and Service" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fagor Oven Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fagor Cooker Hood Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fagor Coffee Machine Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fagor General Home Appliance Repair" } }
            ]
          }
        ]
      },
      "review": [
        { "@type": "Review", "author": { "@type": "Person", "name": "Narges" }, "reviewBody": "Mr.Abdullah and Tarin come to fix our built in dishwasher and they were very helpful on the matter. Fixed our issue within 10 mins and also with a reasonable price!", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Stefanie Giersch" }, "reviewBody": "Thanks to abdullah i can cook and go wild in my kitchen, knowing my dishwasher is set and ready. More importantly, me being german, he arrived as scheduled on time everytime. Friendly, efficient, and my pup stevie was very happy with him. That says alot to me as a dog mom. Thanks abdullah 👌💪🏻", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "GHASIF SAJID" }, "reviewBody": "I had an excellent experience with FAJ! They came to repair my washing machine and also serviced my AC in The Greens. ABDULLAH was professional, punctual, and explained everything clearly. The washing machine was fixed quickly, and my AC is now running smoothly and cooling much better. Really impressed with their efficiency and customer service. Highly recommend FAJ for reliable home appliance repairs and AC servicing!", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "DUNJA LAZOVIC" }, "reviewBody": "Fast and reliable services. Our washing machine broke down, the team came same day, on day 2 we got the quote for the repair,approved it, and on day 3 the machine was delivered back to us. Thank you to Mr. Abdullah for fast reinstallation.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "CHRISTDAI ALBURO" }, "reviewBody": "I was so pleased with the service I received from FAJ Technical Service. They went above and beyond to help me fix my washing machine! Thanks to Ms. Regina from customer service, she was very helpful and explained what was needed. The team arrived in less than an hour and fixed the machine without any delay. Thank you so much Kazeem from the technician. Highly recommend their quality and fast service! Thank you FAJ! one of my favorites!!! :)", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "KARTHIKA" }, "reviewBody": "These guys are fast! Came to check my broken washing machine the very same day I messaged them. In a week it was fixed and brought back to me. Abdullah was the one who assisted me and he was very helpful and patient.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "LEENU JACOB" }, "reviewBody": "I am very satisfied with the washing machine service. The team responded quickly to my request and identified the problem without delay. The repair was done efficiently, and now the machine is working perfectly. I really appreciate the prompt response and successful service.", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Farah B" }, "reviewBody": "Abdullah did a great job fixing our fridge. Very professional services", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "USMAN ALI" }, "reviewBody": "Abdullah from FAJ did a great job fixing our fridge and washing machine here in Arabian Ranches. He came on time, was super friendly, and got everything working again without any hassle. Really professional but also easy to deal with. If you ever need appliance repairs around the Ranches, I’d definitely recommend calling him!", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } },
        { "@type": "Review", "author": { "@type": "Person", "name": "Rawad Jaber" }, "reviewBody": "I had issues with my robot vacuum cleaner and hand hoover. Shakeer did an amazing job! Great services", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/home-appliances-repair/brands/fagor/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fajservices.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.fajservices.ae/services/" },
        { "@type": "ListItem", "position": 3, "name": "Home Appliances Repair", "item": "https://www.fajservices.ae/services/home-appliances-repair/" },
        { "@type": "ListItem", "position": 4, "name": "Brands", "item": "https://www.fajservices.ae/services/home-appliances-repair/brands/" },
        { "@type": "ListItem", "position": 5, "name": "Fagor", "item": "https://www.fajservices.ae/services/home-appliances-repair/brands/fagor/" }
      ]
    }
  ]
}

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
          <script type="application/ld+json">{JSON.stringify(schema)}</script>s
          
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">
        {/* intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Top-Rated Professional Fagor Appliances Repair and Laundry Machine Services</h1>
            <p>Fagor Home Appliance Repair and Maintenance Service in Dubai. Are you working to find a trustworthy technician for your Fagor appliances? At <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7">FAJ Technical Services L.L.C</a> we have been providing reliable and affordable services since 2010.<br />Our skilled technicians are fully equipped to Fagor appliance service and repair all Fagor appliances, including Fagor washing machines, Fagor cookers, Fagor refrigerators and freezers, and Fagor tumble dryers. After each repair, we conduct a safety check and offer a warranty on all parts and labor. <br />As an official Fagor appliance service center, we ensure prompt and professional service, with a warranty on all work performed.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>

          </div>
        </section>

        <PriceCardHomeCat />
{/* Best Home Appliance Service Center */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5 align-items-center">
              <div className="col-md-6">
                <h2 className="cs_fs_20 mb-1 mt-0 text-align-left">Specialised Fagor Washing Machine Repair and Dryer Service in Dubai</h2>
                <p className="mb-1">Handling a malfunctioning Fagor washer dryer can be very frustrating, especially when you're relying on clean clothes. Common issues often arise, such as the machine refusing to power on or spin properly, leaving you in a bind.<br />We specialize in fixing these problems, along with repairing faulty displays and timers. Contact us today, and we will send a qualified technician to address your Fagor washing machine and dryer issues on the same day. <br />Rather of incurring the cost of replacement, our goal is to extend the lifespan of your Fagor appliances through our reliable Fagor washing machine repair and Fagor dryer service in Dubai.</p>

                <h2 className="cs_fs_20 mb-1 pt-1 mt-0">Fagor Fridge Repair and Freezer Service in Dubai</h2>
                <p className="mb-2">The importance of the Fagor fridge freezer is usually ignored. If you notice food spoiling quickly or if your Fagor refrigerator is making unusual noises, it is essential to seek professional assistance promptly. <br />At FAJ, our experienced Fagor technicians are ready to provide support at your home. We specialize in Fagor refrigerators and are equipped to address different issues, usually with the necessary spare parts on hand. <br />We offer same-day Fagor fridge repair and Fagor freezer service, ensuring your food stays fresh and your Fagor appliance operates efficiently. Your happiness and comfort are our top priorities, and we strive to restore your Fagor refrigerator's optimal performance with minimal disruption to your routine.</p>

              </div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100" src={getImageSrc('The-Most-Common-Reasons-for-Appliance-Breakdowns')}  alt="Fagor Washing Machine Repair" />
              </div>
            </div>
            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>

        {/* Why is Appliance Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30">
          <div className="container">

            <h3 className="cs_fs_30">Why is Fagor Appliance Maintenance Service Important in Dubai?</h3>
            <p className="mb-0">
              Our comprehensive repair services encompass diagnosis, repairs, installations, and maintenance. This is why we are the leading provider of Fagor appliance maintenance in Dubai.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('dishwasher-repair-service')}  alt="Fagor Washing Machine Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Fagor Washing Machine Repair in Dubai: </strong> Regular maintenance can extend the lifespan of your washing machine, ultimately saving you money on replacement costs. </li>
                  <li> <strong> Fagor Fridge Repair in Dubai: </strong> We are fully confident that we can get your Fagor refrigerator running again in no time. </li>
                  <li> <strong> Fagor Stove / Oven Repair in Dubai: </strong> Identifying minor issues early helps prevent them from developing into costly repairs. </li>
                  <li> <strong> Fagor Dishwasher Repair in Dubai: </strong> Consistent maintenance helps reduce potential issues and enhances overall performance. </li>
                  <li> <strong> Early Problem Detection: </strong> Routine checks help identify potential issues before they become serious. </li>
                  <li> <strong> Cost-Effective: </strong> Maintaining appliances is cheaper than replacements or major repairs, making it smart choice for safety and efficiency in Dubai. </li>
                  <li> <strong> Energy Efficiency: </strong> Regular maintenance of your Fagor appliances can improve their efficiency and help you save money. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">The Most Common Problems with Fagor Appliances </h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fagor Refrigerator</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Common malfunctions of Fagor refrigerators often involve cooling issues, such as problems with the defrost, fan motor, compressor, or coils.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fagor Dishwasher</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Common issues with Fagor dishwasher include poor cleaning and drying, water leaks, drainage problems, and occasional electrical or PCB failures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fagor Washing Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Fagor washing machines include drainage problems, leaks, faulty PCBs, and issues with the belt, door switch, or drum spinning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fagor Tumble Dryer</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Fagor dryers may stop spinning and make noise while failing to dry clothes. Common issues include a faulty heating element or control board.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fagor Cooker / Stove</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Common issues with Fagor stoves include uneven heating and flame problems, such as a broken burner element, faulty switch, or an electric gas malfunction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fagor Oven</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Fagor ovens often have issues like improper heating, unignited burners, ignition problems in gas models, and faulty knobs or controls.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fagor Freezer</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Common Fagor freezer include frequent water leaks, consistently low ice production, a faulty ice maker, and noticeably reduced cooling efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Coffee Machine Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      There are several possible reasons why water flow in coffee makers, whether drip or single-serve, is often unusually slow or completely absent.
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
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR Fagor APPLIANCES</h2>

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
                <p className='mb-0'>We specialise in all types of Fagor appliances, including built-in Fagor appliances.</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Fagor Appliance Installation: </strong> Professional installation of various types of Fagor home appliances ensures optimal performance and efficiency. </li>
                  <li> <strong> Fagor Appliance Diagnostics: </strong> We provide expert diagnostics and eligibility assessments, along with detailed quotes for Fagor appliance issues. </li>
                  <li> <strong> Fagor Appliance Repair Service: </strong> We provide fast and effective repair services for Fagor appliances, quickly addressing leaks, electrical issues, and malfunctions. Contact us for details on specific services or any questions you may have! </li>
                  <li> <strong> Fagor Appliance Annual Maintenance Contract: </strong> This contract details the terms for annual maintenance of your Fagor appliances, ensuring they operate smoothly all year. Enjoy peace of mind with expert care. </li>
                </ul>
                <p className="mb-0">
                  <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a>  is crucial for ensuring your Fagor home appliances perform optimally, run efficiently, and last longer.
                </p>
              </div>

            </div>
          </div>
        </section >

        {/* The Benefits Of Appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of Fagor Appliances Service Dubai</h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h3>
                      <p className="small">
                        Regular inspections are vital for preventing electrical faults, gas leaks, and other hazards, ensuring the safety of your premises.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16"> Optimal Performance </h3>
                      <p className="small">
                        Regular maintenance helps your Fagor appliances run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                      <p className="small">
                        Energy-efficient Fagor appliances lead to monthly savings on utility bills, allowing you to keep more money in your pocket.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Saving Money on Repair</h3>
                      <p className="small">
                        Preventive services identify issues early, minimizing breakdowns and repairs while extending the lifespan of Fagor appliances.
                      </p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/extending')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Extending Appliance Lifespan</h3>
                      <p className="small">
                        Proper maintenance and timely servicing can greatly extend the lifespan of your Fagor appliances, postponing the need for replacements.
                      </p>
                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Peace of Mind</h3>
                      <p className="small">
                        Ensuring your Fagor appliances are functioning well boosts your confidence and reduces the stress of unexpected failures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
        < section className="section cs_py_30" >
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>

            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')}  alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>You can rely on prompt service! Our same-day repairs or next-day service visits ensure your needs are addressed swiftly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')}  alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>,  you get year-round service to keep your Fagor appliance running smoothly and reliably.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your Fagor appliance repair in Dubai or Sharjah, allowing a 3-4 hour window for our technician's arrival.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1-new')}  alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p> We are specialists in Fagor appliance repair, which is why major brands trust us to manage their service and maintenance.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation up to two Fagor appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled technicians specialise in Fagor appliances and provide outstanding service across major appliances.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('fajteam')}  alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section >

        {/* We are specialise in Appliances services for the following brands */}
        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <DaiganosisCharges
                appliancebrand="Fagor Appliance"
                feeRange="ranging from AED 157 to 280"
            />
            <h3>We specialize in Fagor appliance services of the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"> <b> Fagor Washing Machine Repair Near You in Dubai: </b>  FAJ is here to support you when things go wrong. We understand that your Fagor washing machine is essential for daily life, keeping your laundry clean.</p>
                <p className="mb-0"> <b> Fagor Fridge Repair Near You in Dubai: </b> If you are experiencing issues with your Fagor refrigerator, please contact the FAJ team for same-day Fagor <a href="https://www.fajservices.ae/services/home-appliances-repair/refrigerator-repair-service/">refrigerator repair</a> service in Dubai.</p>
                <p className="mb-0"> <b> Fagor Freezer Repair Near You in Dubai: </b> For Fagor freezer repair and service in Dubai and Sharjah, our team of qualified technicians is available. </p>
                <p className="mb-0"> <b> Fagor Home Appliance Service Center Near You: </b> If you are looking for the best repair service for Fagor washer dryer in Dubai, FAJ is an excellent choice.
                  They are renowned for their outstanding service in repairing Fagor fridge freezer and are recognized as the leading provider for the repair of Fagor cooking ranges, stove fixes, induction, cooktop fixes, washing machines repair, and refrigerator repairs in the area.
                </p>
                <p className="mb-0"> <b> Fagor Dishwasher Repair Near You in Dubai: </b> Your Fagor dishwasher may need repair or maintenance. For high-quality integrated Fagor <a href="https://www.fajservices.ae/services/home-appliances-repair/dishwasher-repair-service/">dishwasher repair</a> and service center in Dubai, rely on FAJ.</p>
                <p className="mb-0"> <b> Fagor Cooking Range and Oven Repair Near You: </b> We offer expert repair services for Fagor cooking ranges and ovens in Dubai. Our skilled technicians are knowledgeable and experienced in diagnosing and fixing issues with Fagor refrigerators, dishwashers, dryers, and more. </p>
                <p className="mb-0"> <b> Fagor Dryer Repair and Service Near You: </b> Are you worried about your Fagor dryer not working properly? Looking for a reliable Fagor laundry machine company in Dubai? Contact us for same-day service!</p>
                <p className="mb-0"> <b> Fagor Oven Repair Near Me Dubai: </b>  If you are looking for the best company for Fagor oven repairs in Dubai, FAJ is the perfect choice. They are well-known for providing exceptional service for Fagor <a href="https://www.fajservices.ae/services/home-appliances-repair/oven-repair-service/">oven repairs</a>. FAJ is recognized as the leading service center for Fagor ovens in the area.</p>

                <h4 className="mt-3">We offer service for Fagor appliances in the Dubai area</h4>
                <p>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/business-bay/">Business Bay</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-marina/">Dubai Marina</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/palm-jumeirah/">Palm Jumeirah</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-hills-estate/">Dubai Hills Estate</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/damac-hills/">Damac Hills</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-barari/">Al Barari</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-barsha/">Al Barsha</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/al-safa/">Al Safa</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/arabian-ranches/">Arabian Ranches</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-silicon-oasis/">Dubai Silicon Oasis</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-investments-park/">Dubai Investments Park</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dip/">DIP</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-production-city/">Dubai Production City</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/impzy/">IMPZ</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-sports-city/">Dubai Sports City</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-studio-city/">Dubai Studio City</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jbr/">JBR</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-beach-residence/">Jumeirah Beach Residence</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jlt/">JLT</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-lake-towers/">Jumeirah Lake Towers</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jvc/">JVC</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-village-circle/">Jumeirah Village Circle</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jvt/">JVT</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-village-triangle/">Jumeirah Village Triangle</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jebel-ali-village/">Jebel Ali Village</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah/">Jumeirah</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/jumeirah-golf-estates/">Jumeirah Golf Estates</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/the-meadows/">Meadows</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/dubai-motor-city/">Motor City</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/town-square/">Town Square</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/emirates-hills/">Emirates Hills</a>
                  <span>&nbsp;|&nbsp;</span>

                  <a href="https://www.fajservices.ae/services/home-appliances-repair/coverage-area/umm-suqeim/">Umm Suqeim</a>

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

export default FagorFridgeRepairDetail;
