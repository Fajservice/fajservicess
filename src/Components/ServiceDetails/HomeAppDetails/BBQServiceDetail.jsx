import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import HeaderForm from "../../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import BrandsSliderSection from "../../BrandsSliderSection";
import Testimonial1 from "../../Testimonial/Testimonial1";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const BBQServiceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {

  // For SEO
  const metatitle = String(titleSeo || "Barbeque Repair in Dubai | BBQ Grill Cleaning Service Near Me");
  const metadescription = String(description || "Get Barbeque Repair in Dubai. Book now for your BBQ grill cleaning, built in gas grill burner, oven & electric BBQ deep service & maintenance near you");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "BBQ Repair, BBQ Grill Cleaning Service, Barbeque Repair Dubai, Weber Repair, Electric BBQ Grill Repair Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Barbeque-Repair/public");
  const schema ={
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Barbeque Repair | Gas & Electric BBQ Grill Cleaning Service Dubai- FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3450",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Barbeque Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "BBQ Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Gas BBQ Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Charcoal BBQ Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "BBQ Maintenance" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Infrared BBQ Repair" }
              }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Gunnar Paul" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "It looked like an old Boretti BBQ grill when I brought it to these guys, believe me when I tell you it has been in a closet with all grease and dust for a year. I was expecting a judgmental look, but the team was so sweet. They told me it will take a day to get it back to life and they did. It was spotless with no grease. The response time was fast and they had texted me when my barbeque grill was cleaned and ready to be picked up. These guys would be my go-to for BBQ grill cleaning and if you are looking for BBQ grill repair in Dubai, I would recommend them!"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are 3 rules for using the grill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Always ensure that the lid of your gas grill is open before lighting it. Keep children and pets at least three feet away from the grilling area. If you're using starter fluid for charcoal grilling, make sure to use only charcoal starter fluid. Never add charcoal fluid or any other flammable liquids to an existing fire."
          }
        },
        {
          "@type": "Question",
          "name": "How does a barbecue grill work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The fuel used in your grill is funneled through small pores in the ceramic brick of the side burner. When the gas ignites, it burns and heats the ceramic until it glows with heat. When food is placed near the fire, on lit charcoal, or at the infrared sear station, the heat directly reaches the food."
          }
        },
        {
          "@type": "Question",
          "name": "How do you maintain a BBQ grill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "How to Properly Clean and Maintain a BBQ or Grill: Cleaning the Burner. The burner and gas tubes are the most important part of the grill. Clean the Inside of Your BBQ. Burn Off the Grease. Clean the Grates. Clean the Outside of the BBQ. Check and Clean the Gas Feed Pipe. Keep Propane Tanks in Good Condition."
          }
        },
        {
          "@type": "Question",
          "name": "What is the safest type of grill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When considering the safest grilling option, it's important to note that no type of grill is entirely free of health risks. However, gas grills tend to have lower risks associated with carcinogen exposure compared to charcoal grills. While electric grills are less popular, they present the lowest risk among the three options, as they do not produce open flames or smoke."
          }
        },
        {
          "@type": "Question",
          "name": "What is the first rule of grilling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patience is essential for successful grilling. Preheat your grill, sear confidently, keep the lid closed, and flip carefully. Avoid handling your food too much, and let it rest before serving."
          }
        },
        {
          "@type": "Question",
          "name": "What do you need for BBQ grill?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This guide will help you understand the essential BBQ equipment for beginners, enabling you to grill like a professional. Grill. Your BBQ journey begins with a grill. Tongs and Spatula. A sturdy set of grill tongs and a spatula are essential. Meat Thermometer. Grill Brush. Chimney Starter. Basting Brush. Grill Gloves. BBQ Skewers."
          }
        },
        {
          "@type": "Question",
          "name": "Do you keep the grill open or closed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When the grill lid is raised, the heat doesn't accumulate and intensify as it would with the lid closed. Foods like thin pork chops, shrimp, and burgers cook quickly when the lid is up. However, leaving the grill lid open will slow down the cooking process by lowering the temperature around the meat. For thicker cuts, it’s best to close the lid to maintain a high and even temperature."
          }
        },
        {
          "@type": "Question",
          "name": "What grill type is best?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gas grills, like the Char-Broil Commercial three-burner, are great for switching between high heat for searing and lower heat for steady cooking. However, if you want to cook meats such as whole chickens or racks of ribs for several hours, you will achieve better results with a charcoal grill, pellet grill, or smoker."
          }
        },
        {
          "@type": "Question",
          "name": "What does BBQ include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The fare includes barbecue sandwiches, brisket, barbecue chicken, pulled pork, pork shoulder, pork ribs, beef ribs, beef steak, and various other foods. Side dishes such as baked beans, macaroni and cheese, coleslaw, and corn on the cob are typically available."
          }
        },
        {
          "@type": "Question",
          "name": "What temperature to grill steak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ideal temperature for grilling steak is high heat, between 450°F and 550°F. To achieve the perfect steak, there are two main cooking methods: the direct-heat method and the reverse-searing method."
          }
        },
        {
          "@type": "Question",
          "name": "What is the temperature of a BBQ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BBQ is a cooking method that uses low and slow, indirect heat. These moderate cooking temperatures range from 200 to 300°F (93 to 149°C), which is significantly lower than the high temperatures used in grilling."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/#breadcrumb",
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
          "name": "Barbeque Repair & BBQ Maintenance Dubai",
          "item": "https://www.fajservices.ae/services/home-appliances-repair/barbeque-repair-in-dubai-barbeque-maintenance-in-dubai-bbq-service-in-dubai/"
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "Barbeque Repair in Dubai | Gas & Electric BBQ Grill Cleaning Service",
      "description": "In Dubai and dealing with a malfunctioning BBQ grill? Look no further! Our top-rated Barbeque Repair Service in Dubai is here to rescue your grill and get it back to sizzling perfection. Whether your BBQ needs a minor tune-up or a complete overhaul, our expert technicians are ready to restore your grill today.",
      "keywords": "BBQ Grill Repair Dubai, Barbeque Grill Rebuild, Gas Grill Burner Replacement, FAJ Technical Services LLC, Advanced gas barbecue grill repair, Gas leakage repair, Ignition system problems, Built-in barbecue grills, Freestanding barbecue grills, Appliance inspection service",
      "thumbnailUrl": "https://img.youtube.com/vi/-9QrAXOJkRY/maxresdefault.jpg",
      "uploadDate": "2023-10-30T10:01:08Z",
      "duration": "PT1M48S",
      "embedUrl": "https://www.youtube.com/embed/-9QrAXOJkRY"
    }
  ]
}

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
  const [brandsLogo_data, setBrandsLogoData] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse, brandsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/BBQServiceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/BBQServiceTestimonials.json`),
          fetch(`${import.meta.env.BASE_URL}data/bbqBrandsLogo.json`),
        ]);

        const faqsData = await faqsResponse.json();
        const testimonialsData = await testimonialsResponse.json();
        const brandsLogoData = await brandsResponse.json();

        setData(faqsData);
        setTestimonialData(testimonialsData);
        setBrandsLogoData(brandsLogoData);
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
          <meta property="og:image" content={metaImage} />
          <meta property="og:site_name" content="FAJ Technical Services L.L.C" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:image" content={metaImage} />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">High Rated Barbeque Repair and Gas & Electric BBQ Grill Cleaning Service Near You</h1>
            <p>FAJ has been providing reliable barbecue grill repair, maintenance, and cleaning services in Dubai and Sharjah since 2010. Our quick barbeque grill repair service near you helps you get your BBQ grill back in working order so you can enjoy cooking your favourite meals. If your barbecue is malfunctioning, please contact our customer service. The gas or electric barbecue grill may require repairs due to performance issues that affect cooking quality or pose safety risks.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>


        {/* Cooking Range Repair Nearby You */}

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>BBQ Repair - BBQ Grill Cleaning Service</h2>

                <p className="mb-2">We are knowledgeable about all major brands of BBQ grill equipment, including both high-end luxury models and free-standing or built-in BBQ grills. As a result, we offer BBQ grill repair services for gas and electric grills of any brand, with a special focus on quality and effectiveness.</p>
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>BBQ Technical Inspection Fee</h2>
                <p>The technical inspection fee covers diagnosis, transportation, and reinstallation at your location in Dubai. Please note that this fee is non-refundable. This flat rate applies to 1 or 2 appliances located in the same place. However, it does not include the cost of any parts. If you need repairs for a coffee machine, stand mixer, or robot vacuum cleaner, please contact us. </p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/-9QrAXOJkRY?si=Godeo3hC2uCVihx8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

              </div>
            </div>
            <AppliancesAppointmentCol />
          </div>
        </section>


        {/* Why is Oven Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is BBQ Grill Regular Maintenance Service Important in Dubai?</h2>
            <p>Grilling is more than just cooking; it&apos;s a lifestyle. To fully enjoy barbecued delights, proper grill maintenance is essential, as a well-kept grill is key to a perfect barbecue.</p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('bbq-repair-service')} alt="BBQ Repair Service" />
              </div>
              <div className="col-md-6">
                <ul>
                  <li><strong>Benefits of Regular Cleaning: </strong>Regular grill cleaning boosts performance by removing residue, ensuring even heat distribution, and preventing flare-ups. It also reduces bacterial contamination for a healthier dining experience.</li>
                  <li><strong>Seasonal Check-ups for Longevity:</strong> As seasons change, your grill's needs do too. Seasonal check-ups, like inspecting burners and gas lines, ensure optimal performance and longevity.</li>
                  <li><strong>Extending the Lifespan of Grill Parts:</strong> Each part is essential for grilling. Oiling hinges and tightening bolts can extend your grill's life.</li>
                  <li><strong>Safety First:</strong> Clean Grills Prevent Accidents. A clean grill is a safe grill. Regular maintenance prevents flare-ups and ensures safe grilling.</li>
                  <li><strong>Importance of Using Quality Cleaning Products:</strong> Not all cleaning products are the same. Use high-quality, grill-friendly cleaners that cut through grease without damaging your grill.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>



        {/* The Most Common Problems With Oven */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Barbecue Grill Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">The grill is not heating up</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Does the grill start but not heat above 200-250 degrees? This often relates to a safety feature in gas grills.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Uneven heating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Uneven Heating. Does your grill have hot and cold spots? This issue is often caused by clogged or damaged burners.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">BBQ Yellow or orange flame
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      For a gas grill, the flame should be blue with yellow tips. Yellow or orange flames suggest a poor gas and air mixture.
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Leaking gas</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Check burners of your gas grill for corrosion or blockages, as these can cause uneven heating. Ensure ignition system works properly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Ignition problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ignition Issues. If your grill won't light, it's likely due to the ignition system, possibly needing a new battery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Defective grill</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A defective barbecue grill can cause serious injuries, such as burns and carbon monoxide poisoning.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Low flame from burners</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A common service issue is low flame output from grill burners, reducing heat, cooking efficiency, and overall grilling performance.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Regulator problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Blockage in the regulator hose: A reader reported issues with his Uniflame 5-burner grill, though everything else worked.</p>
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

        {/* HERE ARE THE SERVICES WE OFFER FOR THE OVEN */}
        <section className="section cs_py_30 ">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR BARBECUE GRILLS.</h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('Barbeque-Repair')} alt="BBQ Repair Service" />
              </div>

              <div className="col-xl-6">

                <p className='mb-0'>We specialize in all types and brands of BBQ grills, including built-in models.</p>
                <p className="mb-0"><strong>Our services include:</strong></p>
                <ul>
                  <li><strong>BBQ Grill Installation: </strong>Professional installation of various BBQ grill brands for optimal performance.</li>
                  <li><strong>BBQ Grill Diagnostics:</strong> We conduct thorough fault finding to effectively diagnose issues. Our services include eligibility assessments and detailed quotations to address concerns with your BBQ.</li>
                  <li><strong>BBQ Grill Repair Service:</strong> Efficient repair services for all barbecue grill components, ensuring quick resolution of issues such as leaks, electrical failures, and system malfunctions. Feel free to reach out if you need specific services or have any questions!</li>
                  <li><strong>BBQ Grill Annual Maintenance Contract:</strong> This contract outlines the terms and services provided for the annual maintenance of your barbeque grill. <a href="https://www.linkedin.com/company/faj-technical-services-llc" style={{ textDecoration: 'underline' }}><b>Regular maintenance</b></a> is essential for ensuring optimal performance, efficiency, and longevity of your barbeque.</li>
                </ul>
              </div>
            </div>
          </div>
        </section >

        {/* The Benefits Of Appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">Tips for Preparing for Your BBQ</h2>
              <ul className="text-light" style={{ paddingLeft: '20px' }}>
                <li><strong>Clean the grill:&nbsp;</strong>Inspect and clean your barbecue if it&apos;s been outside for a while. Even after use, it&apos;s a good idea to clean and dry it. Always follow the manufacturer's maintenance instructions.</li>
                <li><strong>Cooking on Charcoal:&nbsp;</strong>If using charcoal instead of gas, make sure the coals are glowing red with a grey, powdery surface before cooking.</li>
                <li><strong>Defrosting Meat:&nbsp;</strong>Frozen meat can cook unevenly on a BBQ. For best results, defrost it overnight in a lipped dish in the fridge. If you&apos;re short on time, use the microwave's defrost setting. Cook and eat the meat within 24 hours of defrosting.</li>
                <li><strong>Check the Use-by Dates:&nbsp;</strong>The use-by date on food packaging is important for safety, as consuming food past this date can cause illness. Best before dates indicate quality; while food is safe to eat after this date, it may not taste as good.</li>
                <li><strong>Cook BBQ Meat Properly:&nbsp;</strong>Properly cooking food at the right temperature and time is crucial to eliminate harmful bacteria. Different meats have specific cooking requirements.</li>
                <li><strong>Serving Food Safely at a BBQ:&nbsp;</strong>To ensure food safety, use separate raw meat, cooked meat, and ready-to-eat foods, such as salads. Store these items in the fridge or in a cool bag with ice packs until it&apos;s time to serve. Keep any cool items out of direct sunlight until serving.</li>
                <li><strong>Bacteria and Cross Contamination:&nbsp;</strong>Leftover food on your grill poses serious risks. Bacteria can grow on old residue and contaminate new food. Additionally, cross-contamination with allergenic foods, like last night&rsquo;s fish, could lead to severe consequences, such as anaphylactic shock..</li>
                <li><strong>Rust Prevention:&nbsp;</strong>Your grills are made of metal, so if you don&rsquo;t clean them often, they will rust&mdash;especially cast iron. Regular cleaning will help prolong their lifespan.</li>
              </ul>
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
                    <img src={getImageSrc('icon/fast-reliable')} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your BBQ runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your BBQ repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1-new')} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in BBQ repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two BBQ at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled BBQ technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('icon/fajteam')} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise in Oven services for the following brands  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY BBQ REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 157 to 280 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month repair warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h3>We specialise in Barbecue repair services for the following brands</h3>
            <ul className="ml-5">
              <li> <strong>  Char Broil Gas Grill Service and Repair: </strong> FAJ offers reliable Char Broil gas BBQ grill cleaning service near me repair in Dubai, with professionals who are experts in freestanding and built-in Char Broil electric barbeque grill repair and char broil gas grill repair near me home service near you in Dubai and Sharjah. </li>
              <li> <strong>  Weber Genesis Barbeque Gas Burner Repair and Service: </strong> Located in Dubai, FAJ is your premier destination for Weber Genesis BBQ grill repair. Or BBQ grill cleaning service. We specialize in Weber Genesis barbecue maintenance and service, offering comprehensive services that include barbecue cleaning and repair. We also offer Weber Genesis BBQ repair and service near me in Dubai. </li>
              <li> <strong>  Barbecue Napoleon Prestige BBQ Grill Servicing: </strong> The Barbecue Napoleon Prestige BBQ Grill repair service, Electric BBQ grill repair in Dubai, ensures your worries are addressed because you are in the right place. FAJ prioritizes efficiency and reliability in built in Napoleon BBQ Service near me and barbeque gas grill repair services in Dubai. </li>
              <li> <strong>  Napoleon BBQ Grill Maintenance Service: </strong> Trust our expert team to efficiently handle all problems with your Napoleon BBQ grill cleaning and best gas barbecue maintenance service near me, restoring its functionality with FAJ. Call us today for your Napoleon grill service near me and gas grill repair and cleaning near me. </li>
              <li> <strong>  Broil King Regal Gas BBQ Grill Cleaning Service: </strong> With extensive knowledge of the Broil King Regal Gas BBQ Grill, we provide effective repair to ensure your unit runs smoothly. Contact us for your Broil King burner grill repair and Broil King Regal BBQ grill repair services near you. </li>
              <li> <strong>  Lynx Professional Built-In Natural Gas Grill Repair Service: </strong> No matter the issue with your Lynx Professional Built-In Natural Gas Barbecue Grill, our experts can accurately diagnose and fix it. Lynx grill repair service near me, and integrated BBQ cleaning service and repair in Dubai. </li>
              <li> <strong>  Boretti Imperatore Gas BBQ Burner Repair: </strong> Is your Boretti Imperatore gas BBQ burner not working? A malfunctioning Boretti Imperatore gas BBQ burner can be a hassle! FAJ offers your Boretti Imperatore gas BBQ maintenance and cleaning service quickly! You can find a Boretti Imperatore gas BBQ burner repair service near me in Dubai. </li>
              <li> <strong>  Cal Flame BBQ Built In Grills Repairs: </strong>  Cal Flame - BBQ Built-In Grill Cleaning and Maintenance Services require specialized expertise, as only trained professionals can effectively handle these tasks. We offer a hassle-free service for Cal Flame BBQ built in grill cleaning service and cal flame bbq repair and maintenance near me. </li>
              <li> <strong>  Broilmaster Built-In Gas Grill BBQ Repair and Service: </strong> Unlock the key to maintaining your Broilmaster Built-In Gas BBQ Grill for optimal performance in Dubai! Our expert services for Broilmaster Built In Gas Grills ensure that your grill operates efficiently, providing you with comfort and peace of mind. You can contact us for Broilmaster built-in BBQ repair services near you. </li>

            </ul>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>
          </div>
        </section>

        {/* Brands section */}
        {!isLoading && brandsLogo_data.length > 0 && (
          <BrandsSliderSection
            brandsData={brandsLogo_data.map(item => ({
              ...item,
              logo: getImageSrc(item.logo)
            }))}
            sectionId="home-brands"
            logoMaxHeight="60px"
            logoMaxWidth="120px"
            containerHeight="100px"
          />
        )}
        {/* Gallery */}
        <section className="section cs_py_30 gallery-section bg-light-gray mb-4">
          <div className="container">
            <h3 className="mb-4 text-center">Gallery</h3>
            <div className="row g-4">

              <div className="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('bbq-repair')}
                  className="img-fluid rounded shadow mb-4"
                  alt="BBQ Grill Repair Service Dubai"
                />

                <img
                  src={getImageSrc('bbq-repairs-service')}
                  className="img-fluid rounded shadow"
                  alt="BBQ Grill Cleaning Service Dubai"
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('bbq-repairs')}
                  className="img-fluid rounded shadow mb-4"
                  alt="BBQ Grill Service"
                />

                <img
                  src={getImageSrc('bbq-repair-service')}
                  className="img-fluid rounded shadow"
                  alt="BBQ Grill Repair"
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('BBQ-Repair-Services')}
                  className="img-fluid rounded shadow mb-4"
                  alt="BBQ Grill Repair Service"
                />

                <img
                  src={getImageSrc('bbq-repairs-services')}
                  className="img-fluid rounded shadow"
                  alt="BBQ Grill Cleaning Service"
                />
              </div>
            </div>
          </div>
        </section>

         {!isLoading && brandsLogo_data.length > 0 && (
          <BrandsSliderSection
            brandsData={brandsLogo_data.map(item => ({
              ...item,
              logo: getImageSrc(item.logo)
            }))}
            sectionId="home-brands"
            logoMaxHeight="60px"
            logoMaxWidth="120px"
            containerHeight="100px"
          />
        )}

        {/* Maintenance Contract */}
        <MaintenanceContract />
        {/* testimobial section */}
        {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg="testimonialbg"
            testimonialData={testimonial_data}
            sectionId="home-testimonials"
          />
        )}

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
  );
};

export default BBQServiceDetail;