import { useEffect, useRef, useState, useCallback } from "react";
import { Link, parsePath } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../Contact/Serviceappointemnt';
import CallNowButton from '../Buttons/CallNowButton';
import GetQuoteButton from "../Buttons/GetQuoteButton";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import MaintenanceContract from "../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import HeaderForm from "../Headeform/HeaderForm";
import AppliancesAppointmentCol from "../ApplianceCommons/AppliancesAppointmentCol";
import Testimonial1 from "../Testimonial/Testimonial1";
import BrandsSliderSection from "../BrandsSliderSection";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const CommercialDishwasherServicesDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Commercial Dishwasher Repair & Maintenance Service Near You");
  const metadescription = String(description || "Top-Quality Commercial dishwasher repair & services in Dubai. FAJ offers maintenance for Fagor, Electrolux, Meiko, Elettrobar, Hobart near you & AMC");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Commercial Dishwasher Repair, Commercial Dishwasher Maintenance Service");
  const metaURL = String(URL || "https://www.fajservices.ae/services/commercial-dishwasher-repair/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/commercial-dishwasher-service/public");
  const schema ={
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Commercial Dishwasher Repair and Maintenance Service in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/commercial-dishwasher-repair/",
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
        "name": "Commercial Dishwasher Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Dishwasher Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Commercial Dishwasher Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Industrial Dishwasher Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Dishwasher Maintenance" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Dishwasher Leak Repair" }
              }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Stefanie Giersch" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Thanks to Abdullah I can cook and go wild in my kitchen, knowing my dishwasher is set and ready. More importantly, me being German, he arrived as scheduled on time every time. Friendly, efficient, and my pup Stevie was very happy with him."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Muhammad Haseeb" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "I was more than satisfied with the service provided in repair service my washing machine, refrigerator freezer and dishwasher machine. The engineer was prompt, polite and remarkably efficient."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Narges" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Mr. Abdullah and Tarin came to fix our built-in dishwasher and they were very helpful. Fixed our issue within 10 mins and with a reasonable price."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/commercial-dishwasher-repair/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I determine whether my business dishwasher requires maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A commercial dishwasher that isn't cleaning properly or keeps leaking might make strange noises or display error codes. it's best to get professional repair services if you see any of these problems."
          }
        },
        {
          "@type": "Question",
          "name": "Which commercial dishwasher brands do you repair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer repair services for a variety of commercial dishwasher brands at FAJ Technical Services L.L.C. Our skilled technicians have handled a variety of makes and models."
          }
        },
        {
          "@type": "Question",
          "name": "In what time frame can you reply to a request for commercial dishwasher repair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aiming to minimize downtime for your business, we usually respond to repair requests in a timely manner."
          }
        },
        {
          "@type": "Question",
          "name": "Are the professionals you send to fix commercial dishwashers certified?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely, our technicians are qualified and experienced in fixing commercial dishwashers. They accurately diagnose problems and put effective solutions in place."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/commercial-dishwasher-repair/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fajservices.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.fajservices.ae/services/" },
        { "@type": "ListItem", "position": 3, "name": "Commercial Dishwasher Repair", "item": "https://www.fajservices.ae/services/commercial-dishwasher-repair/" }
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
            fetch(`${import.meta.env.BASE_URL}data/CommercialDishwasherServiceFaqs.json`),
            fetch(`${import.meta.env.BASE_URL}data/KitchenEquipments/Testmonials/KitchenEquipmentsAMCTestimonials.json`),
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
            <h1 className="cs_fs_30">Top Quality Commercial Dishwasher Repair and Maintenance Services Near You, in Dubai, UAE</h1>
            <p>
              Since 2010, FAJ has been a trusted name in dishwasher repair and service in Dubai and Sharjah. Our skilled professionals are ready to assist with any brand, using high-quality tools for effective service.
              <br /> We prioritise repairs over replacements, helping you save money and avoid the hassle of buying a new dishwasher. Rely on our experienced experts for fast and reliable dishwasher maintenance in Dubai!
            </p>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Dishwasher Repair and Service Near You</h2>

                <p className="mb-2">
                  Has your dishwasher stopped working completely? Or is it running, but your dishes and cutlery aren't coming out as clean as they should?
                  At FAJ, we understand that a machine breakdown is always inconvenient. that&apos;s why our team of experts is here to provide dishwasher repair and service appointments near you in Dubai and Sharjah.

                </p>


                <h2 className="cs_fs_24 mb-1 mt-0 pt-2 border-small-top" style={{ fontSize: "24px" }}>Dishwasher Technical Inspection Fee </h2>
                <p className="mb-md-0">
                  We have a standard technical inspection fee starting from AED 157 to 320 (depending on the appliance) that covers diagnosis, transportation, and reinstallation of the same appliance.
                  <br />Please note that this fee is non-refundable. This flat rate applies to 1 or 2 appliances located in the same place. However, it does not include the cost of any repair/parts. Also, get repairs from us for your coffee machine, stand mixer, or robot vacuum.
                </p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/Cye_OFTAT3E"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <AppliancesAppointmentCol />
          </div>
        </section>

        {/* Why  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Dishwasher Maintenance Service Important in Dubai?</h2>
            <p>
              Proper dishwasher maintenance is essential for extending its lifespan and enhancing efficiency, especially in Dubai’s climate. Here are the main benefits:
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('commercial-dishwasher-repair')} alt="Commercial Dishwasher Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Dishwasher Extended Lifespan: </strong> Regular maintenance helps the dishwasher last longer, saving on replacement costs. </li>
                  <li> <strong> Dishwasher Improved Efficiency: </strong> A well-maintained dishwasher uses less energy, leading to lower utility bills, which is essential in Dubai. </li>
                  <li> <strong> Dishwasher Preventing Costly Repair: </strong> Catching minor issues early prevents them from escalating into expensive repairs. </li>
                  <li> <strong> Dishwasher Preserving induction hob Integrity: </strong> Regular cleaning prevents dust buildup that affects performance. </li>
                  <li> <strong> Dishwasher Early Problem Detection: </strong> Routine checks help identify potential issues before they become serious. </li>
                  <li> <strong> Dishwasher Cost-Effective: </strong> Maintenance costs are lower than early replacements or significant repairs. Investing in dishwasher care ensures safety and efficiency and is a wise economic choice in Dubai. </li>
                  <li> <strong> Dishwasher Energy Efficiency: </strong> Regularly maintaining your dishwasher can improve efficiency and save you money. </li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems with Dishwashers  </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Drainage Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Dishwasher machine water is pooling in the bottom of your dishwasher at the end of every cycle.
                    </p>
                  </div>
                </div>
              </div>



              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Cycle Won’t Start</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      When you press “start”, nothing happens. Your cycle doesn’t begin, and your dishwasher doesn’t seem to respond, despite the display panel appearing normal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Water Leaks </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      You have noticed water leaking or pooling around your dishwasher when it runs, causing damage to your flooring and the surrounding area.

                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Excessive Suds                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      Your dishwasher fills with excess suds when you use it. You may also notice suds remaining in the bottom of the dishwasher after the cycle is finished and excessive residue on your dishes.


                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Door Not Closing</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      The dishwasher door isn’t closing properly, preventing the cycle from starting.

                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Not Filling With Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      When you start the dishwasher cycle, the interior doesn’t fill with water, or only fills a small amount.


                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Heating Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      Your dishwasher is not heating the water sufficiently, leading to cold washes and improperly cleaned dishes. Hot water is needed to properly activate the dishwasher detergent.


                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dishes Not Drying</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Your dishes come out of the dishwasher still wet, requiring manual drying after every load.

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

        {/*HERE ARE THE SERVICES */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR THE DISHWASHER </h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('commercial-dishwasher-service')} alt="Commercial Dishwasher Repair" />
              </div>

              <div className="col-xl-6">
                <p className="mb-0">
                  We specialise in all types and brands of dishwashers, including dishwasher machines.
                </p>

                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Dishwasher Installation: </strong>  Expert installation of various types and brands of dishwashers, ensuring optimal performance and efficiency. </li>
                  <li> <strong> Dishwasher Diagnostics: </strong>  We conduct thorough fault finding to diagnose issues effectively. We also provide eligibility assessments and detailed quotations to address any concerns with your system. </li>

                  <li> <strong> Dishwasher Repair Service: </strong>  Efficient repair services for all dishwasher machine components, ensuring quick resolution of any issues, such as leaks, electrical failures, and system malfunctions. </li>

                  <li> <strong> Dishwasher Annual Maintenance Contract: </strong>  This contract outlines the terms and services covered for the dishwasher's annual maintenance. </li>



                  <p className="mb-0">
                    Regular maintenance is essential for optimal performance, efficiency, and longevity of your dishwasher.

                  </p>
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
        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <h3>We specialise in dishwasher services for the following brands </h3>
            <div className="row">
              <div className="col-12">

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/smeg/">
                    <b>LG Dishwasher Repair</b>
                  </Link>: FAJ is here to support you when things go wrong. We understand that your LG cooker or induction are essential for daily life, helping you prepare meals efficiently and on time.
                </p>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/siemens/">
                    <b>Samsung Dishwasher Repair</b>
                  </Link>
                  : If you are facing any problems with your Samsung dishwasher, contact the FAJ team for same-day repair service in Dubai.

                </p>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/la-germania/">
                    <b> Electrolux Dishwasher Repair</b>
                  </Link>:  When you need Electrolux dishwasher repair in Dubai, we have a team of professional and qualified technicians available throughout the UAE.
                </p>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/">
                    <b> Bosch Dishwasher Repair</b>
                  </Link>: If you are looking for the best Bosch dishwasher repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch dishwasher service provider in the area.

                </p>


                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/viking/">
                    <b> Viking Dishwasher Repair</b>
                  </Link>: Your Viking dishwasher may require repair or maintenance and we can help. For high-quality Viking dishwashers in Dubai, rely on FAJ.

                </p>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/daewoo/">
                    <b> Daewoo Dishwasher Repair</b>
                  </Link>: We provide expert services for Daewoo dishwasher repair in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator, dishwasher, dryer and more.

                </p>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/neff/">
                    <b> Siemens Dishwasher Repair</b>
                  </Link>: Are you concerned about your Siemens dishwasher malfunctioning and searching for a reliable Siemens dishwasher repair company in Dubai? Contact us for same-day service!


                </p>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/teka/">
                    <b> Teka Dishwasher Repair</b>
                  </Link>: If you&apos;re searching for the best Teka dishwasher repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka dishwashers, refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area.

                </p>


                <br />

                <p><a href="/services/home-appliances-repair/brands/aeg/">AEG</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/ariston/">Ariston</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/beko/">Beko</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/blomberg/">Blomberg</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/electrolux/">Electrolux</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/faber/">Faber</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/fagor/">Fagor</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/fisher-paykel/">Fisher and Paykel</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/foster/">Foster</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/gaggenau/">Gaggenau</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/hitachi/">Hitachi</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/hoover/">Hoover</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/indesit/">Indesit </a>
                  |<a href="/services/home-appliances-repair/brands/lg/"> LG</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/sub-zero/">Sub Zero</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/terim/">Terim</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/whirlpool/">Whirlpool</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/zanussi/">Zanussi</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/de-dietrich/">De Dietrich</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/baumatic/">Baumatic</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/bertazzoni/">Bertazzoni</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/bompani/">Bompani</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/boston/">Boston</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/brandt/">Brandt</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/gibson/">Gibson</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/gorenje/">Gorenje</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/hisense/">Hisense</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/kelvinator/">Kelvinator</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/kenmore/">Kenmore</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/panasonic/">Panasonic</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/sanyo/">Sanyo</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/sears/">Sears</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/wolf/">Wolf</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/haier/">Haier</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/elica/">Elica</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/marvel/">Marvel</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/miele/">Miele</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/maytag/">Maytag</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/toshiba/">Toshiba</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/thermador/">Thermador</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/sharp/">Sharp</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/admiral/">Admiral</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/aftron/">Aftron</a>

                  <span>&nbsp;-&nbsp;</span>

                  <a href="/services/home-appliances-repair/brands/unimac/">Unimac</a>
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
  );
};

export default CommercialDishwasherServicesDetail;