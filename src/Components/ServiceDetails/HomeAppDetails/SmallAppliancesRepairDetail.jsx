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

const SmallAppliancesRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Small Home Appliances Repair & Service Center Near You, Dubai");
  const metadescription = String(description || "Best small home appliances service center in Dubai. FAJ expert in mixer fix, microwave, air fryer, iron, grinder, & garment steamers repair shop nearby");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "mixer repair, steam iron repair, toaster repair, microwave oven repair, air fryer repair, water dispenser repair, small home appliances service, household appliance repair near me");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/");
  const metaImage = Image || getImageSrc('small-mixer-service');
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Small Home Appliance Repair Service in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/small-home-appliances-service-center-in-dubai/",
      "telephone": "+971 4 330 0002",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3420",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Small Home Appliance Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Appliance Repair",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coffee Machine Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stand Mixer Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vacuum Cleaner Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microwave Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "KitchenAid Stand Mixer Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Robot Vacuum Repair" } }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Looney Rayco" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "I appreciate the assistance of Mr. Fasalu for the safe delivery and for the repair of the Coffee Machine. Highly recommended."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Virendra Lal" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Technician Shakeer done a good job. Satisfied with the repair work and the way it was handled. I'm also thankful to Ms. Neha for her follow-up and quick response."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Anand K" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "I had a great experience with FAJ Technical Services. They repaired my microwave oven quickly and at a reasonable price. Special thanks to Fasalu for his expertise."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Diana Dalaty" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "FAJ repaired our fryer and oven quickly. Their commercial cooking equipment service is professional and reliable."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Linda Michel" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "FAJ repaired my cooktop, dishwasher and replaced broken refrigerator shelves! Their service was outstanding, great communication! Regina was on top of everything."
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "Small Appliance Repair Service in Dubai | DIY Fix | FAJ Technical Services LLC",
      "description": "Welcome to our Small Appliance Repair Services! We understand the frustration of having your everyday household appliances break down unexpectedly. Whether it's your trusty toaster, coffee maker, blender, or any other small appliance, we've got you covered. Our team of expert technicians is here to ensure that you can enjoy the convenience and efficiency of your small appliances once again. We specialize in diagnosing and fixing a wide range of issues, from malfunctioning heating elements to electrical problems and everything in between.",
      
      "thumbnailUrl": "https://img.youtube.com/vi/nkqs5jeMQl0/maxresdefault.jpg",
      "uploadDate": "2023-10-20T06:42:10Z",
      "duration": "PT2M6S",
      "embedUrl": "https://www.youtube.com/embed/nkqs5jeMQl0",
     
      "hasPart": [
        {
          "@type": "Clip",
          "name": "Introduction to Small Appliance Repair",
          "startOffset": 0,
          "endOffset": 30,
          "url": "https://www.youtube.com/watch?v=nkqs5jeMQl0&t=0s"
        },
        {
          "@type": "Clip",
          "name": "Common Issues with Coffee Makers and Blenders",
          "startOffset": 31,
          "endOffset": 75,
          "url": "https://www.youtube.com/watch?v=nkqs5jeMQl0&t=31s"
        },
        {
          "@type": "Clip",
          "name": "Vacuum Cleaners and Robot Vacuum Troubleshooting",
          "startOffset": 76,
          "endOffset": 110,
          "url": "https://www.youtube.com/watch?v=nkqs5jeMQl0&t=76s"
        },
        {
          "@type": "Clip",
          "name": "Microwave Oven Repairs and DIY Fix Tips",
          "startOffset": 111,
          "endOffset": 136,
          "url": "https://www.youtube.com/watch?v=nkqs5jeMQl0&t=111s"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the important household appliances?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Major appliances, commonly referred to as white goods, include essential household items such as air conditioners, dishwashers, clothes dryers, drying cabinets, freezers, refrigerators, kitchen stoves, water heaters, washing machines, trash compactors, microwave ovens, and induction cookers."
          }
        },
        {
          "@type": "Question",
          "name": "Which supply is used in home appliances?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alternating current (AC) power is the standard for residential electrical systems in many regions. The electricity supplied by utility companies is primarily AC, and homes are usually equipped with AC outlets and appliances designed to operate on AC power."
          }
        },
        {
          "@type": "Question",
          "name": "Which appliances use the least electricity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hair dryers, ovens, and space heaters consume very few kilowatt hours, and even refrigerators are energy efficient. This is particularly true for newer refrigerators, which use only 30 kilowatt hours per month."
          }
        },
        {
          "@type": "Question",
          "name": "What are major appliances for home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Essential appliances include refrigerators, washers & dryers, freezers, dishwashers, oven & ranges, and range hoods."
          }
        },
        {
          "@type": "Question",
          "name": "Are household appliances AC or DC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most homes and commercial buildings use alternating current (AC), which is often referred to as 'household electricity.' However, modern appliances and consumer electronics, such as computers and smartphones, actually operate on direct current (DC). This is primarily because transistors, which are essential components in these devices, require DC to function."
          }
        },
        {
          "@type": "Question",
          "name": "How do household appliances work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Electricity provides the energy needed to operate small appliances and other electrical devices. Current travels to the device through the hot wire, which is typically black, and returns through the neutral wire, usually white. The force that drives the current is known as voltage."
          }
        },
        {
          "@type": "Question",
          "name": "Do small appliances need a dedicated circuit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Any equipment that operates on 220-volt power needs its own circuit. Dedicated circuits are necessary to prevent excessive electrical loads that could overheat wiring and potentially cause an electrical fire."
          }
        },
        {
          "@type": "Question",
          "name": "How do appliances short circuit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Short circuits can occur due to damaged insulation, overloading, loose connections, faulty appliances, or power cords. They pose risks such as overheating, electrical burns, and fires."
          }
        },
        {
          "@type": "Question",
          "name": "How do I stop my appliance from tripping the power?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use appliances sequentially: Only operate one high-wattage appliance at a time. For instance, if the microwave is causing the breaker to trip, finish using other appliances before turning it on. Install dedicated circuits: Consider hiring a professional to install dedicated circuits for high-power appliances."
          }
        },
        {
          "@type": "Question",
          "name": "How do I adjust my kitchen to any kind of weather/season?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Slate, travertine, and concrete are excellent options for both appearance and slip resistance, as well as durability. Installing a roof or overhang can help protect your outdoor kitchen from rain and sun damage. Be sure to weatherproof your appliances with fitted outdoor kitchen covers, and consider adding electricity and heating if you live in a colder region."
          }
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

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse, brandsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/SmallAppliancesFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/SmallAppliancesRepairTestimonials.json`),
          fetch(`${import.meta.env.BASE_URL}data/AppliancesBrandsLogo.json`)
        ]);

        const faqsData = await faqsResponse.json();
        const testimonialsData = await testimonialsResponse.json();
        const brandsData = await brandsResponse.json();

        setData(faqsData);
        setTestimonialData(testimonialsData);
        setBrandsLogoData(brandsData);
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
          <meta name="description" content={metadescription} />
          <meta name="keywords" content={metaKeyword} />
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
          <script type="application/ld+json">{JSON.stringify(schema)}</script>

        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Best Small Home Appliances Service Center and Household Appliance Repair Near You, Dubai</h1>
            <p>
              Do you need small appliance repair? If you&apos;re looking for a reliable and trusted service, look no further than FAJ Technical Services L.L.C, established in 2010.
              We understand the inconvenience caused by a malfunctioning appliance, which is why we offer fast and professional small home appliance repair services in your area.
              <br />Our skilled technicians quickly diagnose and repair electrical appliances, getting them back to optimal performance in no time.
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>


        {/* heading 1 */}

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Small Appliance Repair and Maintenance</h2>

                <p className="mb-2">
                  Small appliances are important for daily use, and if they are damaged, it can affect your routine. FAJ provides expert service for kitchen appliances such as stand mixers, blenders, kettles, toasters, air fryers, microwave ovens, ice crushers, food processors, vacuum cleaners, cigar cabinet fridges, steam irons, and other electronic appliance repairs and fixes nearby in Dubai.
                </p>

                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Fast and Reliable Appliances Service
                </h2>
                <p className="mb-2">At <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7"><b>FAJ Technical Services L.L.C</b></a> we understand that appliance breakdowns never happen at a convenient time. That's why our trained and qualified technicians are here to provide you with reliable appliance repair services. With our help, you can avoid the expense of purchasing a new appliance and get your appliance up and running again before you even have a chance to stress about it.</p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/nkqs5jeMQl0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

              </div>
            </div>
            <AppliancesAppointmentCol />
          </div>
        </section>


        {/* Why is */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Kitchen Appliances Maintenance Service Important in Dubai?</h2>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('small-mixer-service')} alt="Small Appliances Repair" />
              </div>
              <div className="col-md-6">
                <p>
                  Regular maintenance helps identify and resolve minor issues before they escalate into major problems, thereby reducing the risk of breakdowns, electrical fires, or gas leaks.
                  Here&apos;s a more detailed look at why maintenance is important:
                </p>
                <ul className="mb-0">
                  <li> <strong>  Safety: </strong> Faulty appliances can lead to serious safety risks like fires, gas leaks, and water damage. Regular maintenance can help identify and resolve these issues early. </li>
                  <li> <strong>  Longevity: </strong> Regular maintenance prevents wear and tear, prolonging appliance lifespan. Routine technician check-ups can catch minor issues before they escalate.  </li>
                  <li> <strong>  Convenience: </strong> In the busy city of Dubai, a reliable appliance repair service is essential for prompt solutions to malfunctions. Regular maintenance can prevent breakdowns, reducing urgent repairs and downtime. </li>
                  <li> <strong>  Efficiency: </strong> Regular cleaning can improve appliance efficiency. For example, cleaning refrigerator coils enhances cooling and reduces energy use. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">Common Kitchen Appliance Problems That May Require Maintenance    </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Small Appliances </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Small appliances can cause house fires. Even kettles may catch fire if they are poorly made or have faulty parts, and they can also lead to electric shocks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Failure to Heat </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Heating appliances like microwaves and ovens may not heat properly due to a faulty heating element, interlock system malfunction, or control panel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0"> Control Panel Problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Unresponsive displays or buttons may signal a failing control panel, seriously affecting the appliance's overall functionality and performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0"> Excessive Noise </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Loud or unusual noises coming from appliances may indicate worn-out parts, loose components, hidden blockages, or internal motor issues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0"> Specific Function Failures</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Microwaves, ovens, and mixers often show common issues like improper heating or ineffective cleaning due to various internal factors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0"> Electrical Problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Small or large appliances not turning on may be due to a blown fuse, wiring issues, power supply problems, or faulty internal components.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0"> Malfunctioning Components</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Appliance components, like the oven's heating element or the washing machine's motor, can fail and cause serious operational malfunctions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Extension Leads </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Extension leads can be a fire hazard when used with unsuitable appliances. If your fuse box trips often or you smell burning, unplug the extension lead immediately.
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

        {/* HERE ARE  */}
        <section className="section cs_py_30 ">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR SMALL HOME APPLIANCES</h2>
            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('small-mixer-repair')} alt="Small Appliances Repair" />

              </div>

              <div className="col-xl-6">
                <p className='mb-0'>The search results indicate that the company primarily offers repair and maintenance services for household appliances such as stand mixers, blenders, kettles, toasters, air fryers, microwave ovens, ice crushers, food processors, vacuum cleaners, cigar cabinet fridges, steam irons, and other electronic appliance
                </p>

                <p className='mb-0'><strong>Our services include: </strong></p>

                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong>Repair Services: </strong> FAJ specialises in repairing household appliances, with skilled technicians available to diagnose and fix issues across brands.</li>
                  <li> <strong>Specific Appliance Repairs: </strong> They may specialize in repairing specific appliances, such as mixers, blenders, steam irons, cigar fridges, air fryers, and ice makers.</li>
                  <li> <strong>Possible Additional Services: </strong> FAJ primarily focuses on repairs but may also offer maintenance services, like inspections and minor fixes, to keep appliances running smoothly. For specific details on their services and availability, it would be helpful to.</li>
                  <li> <strong>Contact them directly: </strong> They probably have a contact number or email listed on their website for inquiries about specific services.</li>

                </ul>
              </div>


            </div>
          </div>
        </section >

        {/* The Benefits Of Appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of Appliances Service Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h3>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Optimal Performance
                      </h3>
                      <p className="small">Regular maintenance helps your appliances run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                      <p className="small">Energy efficient appliances translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Saving Money on Repair</h3>
                      <p className="small">Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.</p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/extending')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Extending Appliance Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your home appliances, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                      </h3>
                      <p className="small">Knowing your appliances are in top condition gives you confidence and removes the stress of unexpected failures.</p>
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
                    <img src={getImageSrc('icon/fast-reliable')} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>	You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your appliance runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your appliance repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
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
                    <h3>We Are Experts</h3>
                    <p>We are experts in appliance repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our skilled appliance technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('fajteam')} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        {/* We specialise  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY SMALL APPLIANCE REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 50 to 280 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month repair warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h3>We specialize in small appliance services for the following types </h3>
            <div className="row">
              <div className="col-12">
                <ul>
                  <li><strong>Vacuum Cleaner Repair and Service: </strong>Is your vacuum cleaner not performing as it should? Our vacuum cleaner repair near me services can help! We fix vacuum cleaner all issues, including motor problems, faulty switches, and clogged hoses.</li>
                  <li><strong>Hair Dryer Repair and Service: </strong>Welcome to FAJ Technical Services L.L.C, your go-to for hair dryer repair and the best hair dryer service near you. We specialize in fixing issues and restoring your appliance. Contact us for reliable service today!</li>
                  <li><strong>Coffee Maker Repair Me: </strong>Get reliable coffee maker repair near you in Dubai. We fix coffee machine leaks, power issues, and brewing faults for all major brands. Fast, affordable service by expert technicians.</li>
                  <li><strong>Juicer Blender Repair Near Me: </strong>Is your juicer noisy or not working properly? We offer affordable Juicer repair shop near me, juice kit repair and blender repair and services near you in Dubai. Our experts can fix juicer issues like jammed mechanisms and electrical glitches. Trust us to restore your appliances quickly!</li>
                  <li><strong>Steam Iron Box Repair Near Me: </strong>If your electric iron isn&rsquo;t working properly, we provide Steam iron repair shop near me, iron repair and iron services in Dubai. Our expertise includes fixing iron heating elements, thermostats, and faulty wiring, so you can enjoy wrinkle-free clothes again.</li>
                  <li><strong>Toaster Repair Near Me: </strong>Is your toaster not heating or burning toast? We offer expert toaster repair in Dubai. Our technicians fix heating elements, timers, and wiring to restore your toaster to full working order.</li>
                  <li><strong>Kitchen Stand Mixer Repairs Near Me: </strong>Welcome to premium kitchen stand mixer repair and services! Since 2010, we&rsquo;ve been providing expert KitchenAid stand mixer repair, Kenwood stand mixer repairing, Cuisinart precision stand mixer repairs, Philips stand repair near me, Jano stand mixer repair near you mixer repair, Black and Decker stand mixer repairing and for stand and hand mixer service in Dubai. Let us help you get your mixer working again and keep your space tidy!</li>
                  <li><strong>Water Dispenser Repair Near Me: </strong>We provide expert water dispenser repair and service to restore your hot showers. Don&rsquo;t let a broken dispenser dampen your spirits&mdash;let us help get it working perfectly again!</li>
                  <li><strong>Microwave Oven Repair Near Me: </strong>We specialize in repairing small home appliances, including microwave repair near me and service in Dubai. Our mission is to deliver quality repairs at affordable prices, fixed as quickly as possible. Enjoy hot pizzas and reheated coffee with our efficient microwave repair services!</li>
                  <li><strong>Electric Kettle Repair: </strong>If your electric kettle isn&rsquo;t heating properly, you need a reliable electric kettle repair and service in Dubai. Our experts specialize in diagnosing and fixing issues like faulty heating elements and power switches, quickly restoring your kettle&rsquo;s functionality.</li>
                </ul>
              </div>
            </div>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>

          </div>
        </section >

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

export default SmallAppliancesRepairDetail;