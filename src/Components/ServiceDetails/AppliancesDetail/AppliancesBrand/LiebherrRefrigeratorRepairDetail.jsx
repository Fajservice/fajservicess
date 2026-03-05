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
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";
import PriceCardHomeCat from '../../../Services/homeappliances/PriceCardHomeappCat.jsx';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const LiebherrRefrigeratorRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {

  // For SEO
  const metatitle = String(titleSeo || "Liebherr Fridge Repair | LiebherrFreezer Service in Dubai");
  const metadescription = String(description || "With professional & warranty Liebherr fridge repair. Call 043300002 for Liebherr appliance, fridge, refrigerator freezer maintenance service near you Dubai");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/The-Most-Common-Reasons-for-Appliance-Breakdowns/public");
  const metaKeyword = String(Keyword || "Liebherr refrigerator repair, Liebherr fridge repair, Liebherr freezer maintenance service, Liebherr appliance repair Dubai, Liebherr washing machine repair Dubai, Liebherr cooker repair Dubai, Liebherr dishwasher repair Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/brands/liebherr/");
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Liebherr Home Appliances Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/brands/liebherr/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "3331",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Home Appliances Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Appliance Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Washing Machine Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fridge Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Freezer Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Appliance Service Center" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dishwasher Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cooking Range and Oven Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dryer Repair and Service" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oven Repair" } }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Narges" },
          "reviewBody": "Mr.Abdullah and Tarin come to fix our built in dishwasher and they were very helpful on the matter. Fixed our issue within 10 mins and also with a reasonable price!",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Stefanie Giersch" },
          "reviewBody": "Thanks to abdullah i can cook and go wild in my kitchen, knowing my dishwasher is set and ready. More importantly, me being german, he arrived as scheduled on time everytime. Friendly, efficient, and my pup stevie was very happy with him. That says alot to me as a dog mom. Thanks abdullah 👌💪🏻",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "GHASIF SAJID" },
          "reviewBody": "I had an excellent experience with FAJ! They came to repair my washing machine and also serviced my AC in The Greens. ABDULLAH was professional, punctual, and explained everything clearly. The washing machine was fixed quickly, and my AC is now running smoothly and cooling much better. Really impressed with their efficiency and customer service. Highly recommend FAJ for reliable home appliance repairs and AC servicing!",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "DUNJA LAZOVIC" },
          "reviewBody": "Fast and reliable services. Our washing machine broke down, the team came same day, on day 2 we got the quote for the repair, approved it, and on day 3 the machine was delivered back to us. Thank you to Mr. Abdullah for fast reinstallation.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "CHRISTDAI ALBURO" },
          "reviewBody": "I was so pleased with the service I received from FAJ Technical Service. They went above and beyond to help me fix my washing machine! Thanks to Ms. Regina from customer service, she was very helpful and explained what was needed. The team arrived in less than an hour and fixed the machine without any delay. Thank you so much Kazeem from the technician. Highly recommend their quality and fast service! Thank you FAJ! one of my favorites!!! :)",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "KARTHIKA" },
          "reviewBody": "These guys are fast! Came to check my broken washing machine the very same day I messaged them. In a week it was fixed and brought back to me. Abdullah was the one who assisted me and he was very helpful and patient.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "LEENU JACOB" },
          "reviewBody": "I am very satisfied with the washing machine service. The team responded quickly to my request and identified the problem without delay. The repair was done efficiently, and now the machine is working perfectly. I really appreciate the prompt response and successful service.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Farah B" },
          "reviewBody": "Abdullah did a great job fixing our fridge. Very professional services",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "USMAN ALI" },
          "reviewBody": "Abdullah from FAJ did a great job fixing our fridge and washing machine here in Arabian Ranches. He came on time, was super friendly, and got everything working again without any hassle. Really professional but also easy to deal with. If you ever need appliance repairs around the Ranches, I’d definitely recommend calling him!",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/home-appliances-repair/brands/liebherr/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.fajservices.ae/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.fajservices.ae/services/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Home Appliances Repair",
          "item": "https://www.fajservices.ae/services/home-appliances-repair/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Brands",
          "item": "https://www.fajservices.ae/services/home-appliances-repair/brands/"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Liebherr",
          "item": "https://www.fajservices.ae/services/home-appliances-repair/brands/liebherr/"
        }
      ]
    }
  ]
}

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
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">
        {/* intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Liebherr Fridge Repair and Liebherr Freezer Service in Dubai</h1>

            <p>Liebherr refrigerators are the best among the other brands out there. Still, products of the best brands do not last forever. <br/>You can fix minor issues, but mostly, you cannot. So why worry? We are the best Liebherr fridge repair and freezer service provider in Dubai. We are the most experienced drive experts, serving since 2010 in Dubai. With hands-on experience with all Liebherr refrigerator maintenance, you can expect successful and swift repairs from us. Liebherr Fridge repair in Dubai. So, contact us today to get your Liebherr built-in fridge freezer repair appointment. Enjoy superior Liebherr appliance repair with <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7">FAJ Technical Services L.L.C</a>.</p>

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
                <h3 className="cs_fs_24 mb-1">Liebherr Fridge Service Near You </h3>

                <p className="mb-2">
                  Is your Liebherr fridge or freezer not cooling properly? Has your food spoiled?
                  <br />
                  You can easily book Liebherr fridge and freezer repair services online with FAJ Experts in Dubai and Sharjah. We offer same-day repairs for Liebherr refrigerators and freezers at affordable prices. Choose a convenient time slot that works best for you!
                </p>

                <h3 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "21px" }}>Fast and Reliable Liebherr Appliances Service</h3>
                <p className="mb-2">
                  At FAJ Technical Services L.L.C, we understand that appliance breakdowns, especially with Liebherr products, never occur at a convenient time. That’s why our trained and qualified Liebherr technicians are here to offer you reliable <a href="https://www.fajservices.ae/services/home-appliances-repair/appliances-repair-service/" className="fw-bold">appliance repair services</a>. With our assistance, you can avoid the cost of purchasing a new appliance and get your Liebherr appliance up and running again before you have a chance to worry about it.
                </p>

              </div>

              <div className="col-md-6 ">

                <img className="bordered-img w-100" src={getImageSrc('techfridge')} alt="Liebherr Fridge Repair" />
              </div>
            </div>
            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>

        {/* Why is Appliance Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30">
          <div className="container">

            <h3 className="cs_fs_30">Why is Liebherr Fridge Maintenance Service Important in Dubai?</h3>
            <p className="">
              Proper Liebherr fridge maintenance is essential for extending its lifespan and improving efficiency, especially given Dubai's climate. Here are the key benefits:
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('dishwasher-repair-service')}  alt="Liebherr Fridge Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Liebherr Refrigerator Extended Lifespan: </strong> Regular maintenance helps prolong the life of your refrigerator, ultimately saving you money on replacement costs. </li>
                  <li> <strong> Liebherr Fridge Freezer Improved Efficiency: </strong> A well-maintained refrigerator operates more efficiently, consuming less energy and leading to lower utility bills, which is especially important in Dubai. </li>
                  <li> <strong> Liebherr Fridge Preventing Costly Repairs: </strong> Addressing minor issues promptly can prevent them from escalating into expensive repairs. </li>
                  {/* <li> <strong> Preserving Appliance Integrity: </strong> Routine cleaning prevents dust buildup, which can negatively affect performance. </li> */}
                  <li> <strong> Liebherr Freezer Early Problem Detection: </strong> Regular checks help identify potential issues before they become significant problems. </li>
                  <li> <strong> Liebherr Refrigerator Cost-Effectiveness: </strong> Maintenance costs are usually lower than early replacements or major repairs. Investing in refrigerator care in Dubai ensures safety and efficiency.</li>
                  <li> <strong> Liebherr Refrigerator Energy Efficiency: </strong> Routine maintenance can boost your Fridge’s energy efficiency, helping you save money in the long run. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">The Most Common Problems with the Liebherr Fridge and Freezer </h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fridge Not Cooling Properly</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A common problem with fridges is their failure to reach the desired cooling temperature, which can be caused by several different internal or external factors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Water Leaking from Fridge</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A common problem with fridges is water leakage, usually caused by a blocked defrost drain or a damaged or loose water supply line.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Refrigerator Freezing Food</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your refrigerator is freezing food, it could be due to a faulty temperature control thermostat that improperly regulates the cooling system.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fridge Overheating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your refrigerator is freezing food, it could be due to a faulty temperature control thermostat that improperly regulates the cooling system.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Defective Thermostat</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Make sure to check thermostat carefully, as someone might have accidentally bumped or adjusted it without your knowledge or proper intention or awareness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fridge Running Constantly</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your fridge is constantly running, there could be several reasons for this, including dirty coils, faulty sensors, or poor ventilation and airflow issues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Dirty Condenser Coils</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Make sure to keep these coils clean, as dirt and grime can impact cooling efficiency, forcing the fridge to work harder and consume more energy over time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Door Seal Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A worn door seal can lead to temperature fluctuations and energy waste. Regularly inspect the seal to ensure it is functioning properly.
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
            <h3 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR THE LIEBHERR REFRIGERATOR</h3>

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
                <p className='mb-0'>We specialize in all types of built-in refrigerators, including fridge freezers.</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Liebherr Refrigerator Installation: </strong> Professional installation services for a variety of refrigerator types, ensuring optimal performance and energy efficiency. </li>
                  <li> <strong> Liebherr Refrigerator Diagnostics: </strong> We perform comprehensive diagnostics to effectively identify issues. Additionally, we offer eligibility assessments and detailed quotes to address any concerns regarding your system. </li>
                  <li> <strong> Liebherr Refrigerator Repair Service: </strong> Prompt and effective repair services for all fridge freezer components, addressing issues like leaks, electrical failures, and system malfunctions. </li>
                  <li> <strong> Liebherr Refrigerator Annual Maintenance Contract: </strong> This contract details the terms and services included in the annual maintenance of your refrigerator. </li>
                  <p className="mb-0">
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for optimal refrigerator performance, efficiency, and longevity.
                  </p>
                </ul>
              </div>

            </div>
          </div>
        </section >

        {/* The Benefits Of Appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h3 className="cs_fs_30 mb-0">The Benefits Of Refrigerator Service Dubai </h3>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h3>
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
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16"> Optimal Performance </h3>
                      <p className="small">
                        Regular maintenance helps your refrigerator run smoothly and efficiently, delivering the best results every time.
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
                        Energy efficient refrigerator translate to monthly savings on utility bills, putting more money back in your pocket.
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
                        Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.
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
                        Proper care and timely servicing can significantly increase life of your refrigerator, delaying the need for replacements
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
                      <h4 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                      </h4>
                      <p className="small">
                        Knowing your refrigerator is in top condition gives you confidence and removes the stress of unexpected failures.
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
                    <img src={getImageSrc('icon/fast-reliable')}  alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')}  alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your refrigerator runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>
                      Choose a day and time for your refrigerator repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                    </p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1')}  alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>
                      We are experts in refrigerator repair this is why most major brands trust us to handle their service and maintenance needs.
                    </p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two refrigerators at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled refrigerator technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('fajteam')}  alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* We are specialise in Appliances services for the following brands */}
        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <DaiganosisCharges
              appliancebrand="Liebherr Appliance"
              feeRange="ranging from AED 157 to 280"
            />
            <div className="row">
              <div className="col-12">
                <h4 className="mt-3">We offer service for Liebherr appliances in the Dubai area</h4>
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

export default LiebherrRefrigeratorRepairDetail;
