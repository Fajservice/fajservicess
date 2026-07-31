import { useEffect, useRef, useState, useCallback, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol";
import HeaderForm from "../../Headeform/HeaderForm";
import BlogFridge from "../../Blog/BlogFridge";
import BrandsSliderSection from "../../BrandsSliderSection";
import Testimonial1 from "../../Testimonial/Testimonial1";
import PriceCardHomeCat from "../../Services/homeappliances/PriceCardHomeappCat";
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
const RefrigeratorRepairInDubaiDetails = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(titleSeo || "Refrigerator Repair | Best Fridge Service Center in Dubai");
  const metadescription = String(description || "Same day refrigerator repair and service in Dubai. Call FAJ experts for fridge repair & maintenance near you and freezer fixing خدمات صيانة وتصليح ثلاجات في دبي");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Refrigerator repair, Fridge repair, Refrigerator service, Freezer repair, Dubai refrigerator repair, Fridge service Dubai, Appliance repair Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/refrigerator-repair-service/").replace(/\/?$/, '/');
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/fridgerepair/public");
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/home-appliances-repair/refrigerator-repair-service/#breadcrumb",
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
          "name": "Refrigerator Repair",
          "item": "https://www.fajservices.ae/services/home-appliances-repair/refrigerator-repair-service/"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "name": "Refrigerator Repair & Freezer Service Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/refrigerator-repair-service/",
      "telephone": "+971 4 330 0002",
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
        "name": "Refrigerator & Freezer Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Refrigerator Maintenance & Repair",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Condenser Coil Cleaning" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Compressor & Cooling System Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thermostat & Temperature Control Fix" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Line & Ice Maker Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Door Seal & Gasket Replacement" } }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "USMAN ALI" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Abdullah from FAJ did a great job fixing our fridge and washing machine here in Arabian Ranches. He came on time, was super friendly, and got everything working again without any hassle. Really professional but also easy to deal with. If you ever need appliance repairs around the Ranches, I’d definitely recommend calling him!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Vita Zheng" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Mr. Fasalu is amazing. A lot of people checked my fridge and couldn’t find the problem. He found it easily and fixed it. Best service in town!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Khalid Walid" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "FAJ technical services fixed our fridge. Everyone we dealt with was professional and helpful. Highly impressed."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rukmini Mitra" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Special thanks to Mark for his outstanding support. Prompt response and professional approach for our fridge repair in Dubai."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Muhammad Haseeb" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "I’m more than satisfied. He was prompt, polite and very efficient. The engineer arrived quickly and fixed the issue with my fridge freezer."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Nameesh A. Abdul Rasheed" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "My freezer is working perfectly now after getting help with the right spare parts from FAJ."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Shehan Chanaka" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Fixed my refrigerator for a limited price. Technical person Adnan is very good person with good technical knowledge."
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "Refrigerator Repair and Maintenance Service in Dubai | Common Refrigerator/Freezer Problems | FAJ",
      "description": "If you're in need of hassle-free refrigerator repair service in Dubai, you're in the right place. We understand that a malfunctioning refrigerator can disrupt your daily life and cause inconvenience. That's why we offer reliable and efficient refrigerator repair services to get your appliance back in working order quickly and with minimal hassle. Our team of skilled technicians is experienced in repairing all major refrigerator brands and models. Whether you have a traditional top-freezer refrigerator, a side-by-side model, a French door refrigerator, or a specialized wine cooler, we have the expertise to diagnose and fix the problem. We offer Prompt Response, Experienced Technicians, Quality Parts, Transparent Pricing, Convenient Scheduling, Guaranteed Satisfaction, and Emergency Services.",
      
      "thumbnailUrl": "https://img.youtube.com/vi/VAmZ-qKWkjw/maxresdefault.jpg",
      "uploadDate": "2023-10-03T00:00:00Z",
      "duration": "PT1M13S",
      "embedUrl": "https://www.youtube.com/embed/VAmZ-qKWkjw",
     
      "hasPart": [
        {
          "@type": "Clip",
          "name": "Introduction to Refrigerator Repair Service",
          "startOffset": 0,
          "endOffset": 15,
          "url": "https://www.youtube.com/watch?v=VAmZ-qKWkjw&t=0s"
        },
        {
          "@type": "Clip",
          "name": "Common Fridge and Freezer Problems",
          "startOffset": 16,
          "endOffset": 40,
          "url": "https://www.youtube.com/watch?v=VAmZ-qKWkjw&t=16s"
        },
        {
          "@type": "Clip",
          "name": "Expert Diagnosis for All Brands & Models",
          "startOffset": 41,
          "endOffset": 58,
          "url": "https://www.youtube.com/watch?v=VAmZ-qKWkjw&t=41s"
        },
        {
          "@type": "Clip",
          "name": "Scheduling Inspection and Contact Information",
          "startOffset": 59,
          "endOffset": 73,
          "url": "https://www.youtube.com/watch?v=VAmZ-qKWkjw&t=59s"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/home-appliances-repair/refrigerator-repair-service/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a safe temperature for a fridge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The safe temperature for a refrigerator is 40°F (4°C) or below. Keeping foods at the proper temperatures slows bacteria growth. Freezer should be set at 0°F (-18°C)."
          }
        },
        {
          "@type": "Question",
          "name": "What are the rules for a new refrigerator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Once the refrigerator is in your home, leave it to sit for 3 hours. Then plug it in and turn it on. Allow it to stabilize overnight before placing fresh food inside."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a refrigerator last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most refrigerators last between 10 and 20 years. If your fridge is over ten years old and experiencing issues, replacing it may save money in the long run."
          }
        },
        {
          "@type": "Question",
          "name": "How to control fridge temperature?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Locate the temperature controls on the interior or exterior panel. Adjust dials, sliders, or digital displays per manufacturer instructions to reach 35°F to 38°F for fridge and -18°F or below for freezer."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take for a fridge to cool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A running refrigerator starts cooling within a few hours, but it may take up to 24 hours to reach optimal temperature. Wait at least 24 hours for new fridges before loading perishable items."
          }
        },
        {
          "@type": "Question",
          "name": "How to know if a fridge is working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seven warning signs of malfunctioning fridge: 1) Not cold enough 2) Food spoiling quickly 3) Condensation inside 4) Ice buildup 5) Hot motor 6) Loud noises 7) Water on the floor."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my fridge not cooling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Causes include dirty condenser coils, poor ventilation, improper installation, faulty gaskets, disorganized food, appliance placement, or malfunctioning internal parts."
          }
        },
        {
          "@type": "Question",
          "name": "Does a fridge cool faster when empty or full?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Optimal filling is about three-quarters full, allowing sufficient air circulation while keeping enough food to help cool neighboring items."
          }
        },
        {
          "@type": "Question",
          "name": "How to check the fridge thermostat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Disconnect fridge from power, use a multimeter on ohms setting to test thermostat terminals. At room temperature, reading should be 0-1 ohm. Faulty readings indicate replacement needed."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my refrigerator cooling less?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dust and debris on condenser coils reduce cooling efficiency. Clean coils with a brush attachment or coil cleaning brush to restore performance."
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
  const refrigeratorServicesData = [
    {
      id: 1,
      image: getImageSrc('techfridge'),
      title: 'Refrigerator Inspection Fee',
      icon: getImageSrc('calloutcard'),
      price: 'AED100',
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
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 100, callout fee applies based on the type, brand, capacity of the appliance unit, and location for each diagnosis.'
        },
      ]
    },
    {
      id: 2,
      image: getImageSrc('appliancescleaninghome'),
      warranty: '50- Days Warranty',
      title: 'Refrigerator Cleaning Price',
      icon: getImageSrc('cleaningcard'),
      price: 'AED230',
      arrow: getImageSrc('iconreadmore'),
      description: 'Book reliable refrigerator cleaning professionals for your equipment. Our teams offer competitive pricing & limited-time availability across Dubai.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=Basic%20ACCleaning',
      popupTitle: 'Cleaning Appliances',
      sections: [
        {
          heading: 'Depending on quantities, capacity, type, model, and area.',
          items: [
            'Refrigerator Cleaning',
            'Fridge Cleaning',
          ]
        },
        {
          paragraph: '**Excluded:** <br> Cost for any repair work, procurement cost, cost of any new parts and installation, if required.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 230 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.'
        },
      ]
    },
    {
      id: 3,
      image: getImageSrc('fridgerepair'),
      title: 'Refrigerator Installation Charge',
      icon: getImageSrc('installationcard'),
      price: 'AED280',
      arrow: getImageSrc('iconreadmore'),
      description: 'FAJ expert technicians will provide assistance to install home appliances. Upgrade your kitchen with professional appliance installations!',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=AC Maintenance',
      popupTitle: 'Appliances Installation',
      sections: [
        {
          heading: 'Depending on quantities, capacity, type, model, and area.',
          items: [
            'Refrigerator Installation',
            'Fridge Installation',
          ]
        },
        {
          paragraph: '**Excluded:** <br> Costs related to MEP, carpentry, gypsum ceilings, painting, repair work, procurement-related installation parts / materials, and installation as needed.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 280 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.'
        },
      ]
    },
  ];
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
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/HomeappRefrigeratorServicefaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/RefrigeratorTestimonials.json`),
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
            <h1 className="cs_fs_30">Trusted Fridge Repair, Freezer Maintenance and Refrigerator Service in Dubai</h1>
            <p>
              Since 2010, FAJ has established itself as the go-to reference for refrigerator repair, freezer maintenance and fridge repair near me in Dubai and Sharjah. We prioritise <a href="https://www.facebook.com/reel/754451204389736">refrigerator repair</a> near you over replacements, helping you save money and avoid the bother of buying a new fridge or freezer. Rely on our experienced experts for fast and reliable <a href="https://www.instagram.com/reels/DW8Nd38AotP/">refrigerator maintenance</a> in Dubaia!
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        <PriceCardHomeCat  services={refrigeratorServicesData}/>

        {/* Refrigerator Repair & Service Near You */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Refrigerator Repair & Service Near You</h2>
                <p className="mb-2">Is your fridge or freezer not cooling properly? Has your food spoiled?
                  You can easily book online <a href="https://pin.it/52HhyXkKZ">fridge repair</a> and freezer repair in Dubai / Sharjah near me service with FAJ Experts.
                  We repair most major brands of refrigerators and freezers, offering same-day fridge service at affordable prices. Choose a time slot that works best for you!
                </p>
                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top" style={{ fontSize: "24px" }}>Fast and Reliable Appliances Service
                </h2>
                <p className="mb-2">At <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7"><b>FAJ Technical Services L.L.C</b></a>, we understand that appliance breakdowns never happen at a convenient time. That's why our trained and qualified technicians are here to provide you with reliable appliance repair services. With our help, you can avoid the expense of purchasing a new appliance and get your appliance up and running again before you even have a chance to stress about it.</p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/VAmZ-qKWkjw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

              </div>
            </div>
            <AppliancesAppointmentCol />
          </div>
        </section>


        {/*why */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Refrigerator Maintenance Service Important in Dubai? </h2>
            <p>Proper refrigerator maintenance is essential for extending its lifespan and improving efficiency, especially given Dubai's climate. Here are the key benefits:
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('techfridge')} alt="Fridge repair" />
              </div>
              <div className="col-md-6">

                <ul className="mb-0">

                  <li> <strong> Refrigerator Extended Lifespan: </strong> Regular maintenance helps prolong life of your refrigerator, ultimately saving you money on replacement costs. </li>
                  <li> <strong> Fridge Freezer Improved Efficiency: </strong> A well-maintained refrigerator operates more efficiently, consuming less energy and leading to lower utility bills, which is especially important in Dubai. </li>
                  <li> <strong> Refrigerator Preventing Costly Repairs: </strong> Addressing minor issues promptly can prevent them from escalating into expensive repairs. </li>
                  <li> <strong> Preserving Appliance Integrity: </strong> Routine cleaning prevents dust buildup, which can negatively affect performance. </li>
                  <li> <strong> Refrigerator Early Problem Detection: </strong> Regular checks help identify potential issues before they become significant problems. </li>
                  <li> <strong> Refrigerator Energy Efficiency: </strong> Routine maintenance can boost your refrigerator's energy efficiency, helping you save money in the long run. </li>


                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems with the Refrigerator and Freezer</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fridge Not Cooling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If the refrigerator coils are hot but the fridge isn't cooling, there may be a problem with the gas, thermostat, or the fridge coils.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Water Leaking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A common issue with refrigerators is water leakage, often caused by a blocked defrost drain or a faulty water supply line.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Refrigerator Freezing Food</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your refrigerator is freezing food, it's likely due to a faulty temperature control thermostat that regulates the cooling voltage.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fridge Overheating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Fridge overheating can damage the compressor and other parts of your refrigerator. It is essential to address this issue promptly.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Defective Thermostat</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Defective temperature control thermostat, PCB, and compressor issues usually require a repair technician to address.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Fridge Running Always</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If your fridge runs constantly, a faulty thermostat, relay, or sensor might prevent it from reaching the desired temperature as set.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Dirty Condenser Coils</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Ensure that these condensing coils are clean, as this can affect the compressor's operation, impacting cooling and compressor efficiency.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Door Seal Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A worn door seal can cause temperature fluctuations and energy waste. Inspect the seal regularly to ensure proper function.</p>
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


        {/* HERE ARE THE SERVICES */}
        <section className="section cs_py_30 ">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR THE REFRIGERATOR  </h2>
            <p></p>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('fridgerepair')} alt="Fridge repair" />
              </div>

              <div className="col-xl-6">

                <p className='mb-0'>We specialise in all types and brands of refrigerators, including fridge freezers.
                </p>
                <p className='mb-0'><strong>Our services include:</strong></p>

                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li><strong> Refrigerator Installation: </strong> Expert installation for various types and brands of refrigerators, ensuring optimal performance and efficiency. </li>
                  <li><strong> Refrigerator Diagnostics: </strong> We conduct thorough diagnostics to identify issues effectively. We also provide eligibility assessments and detailed quotations to address any concerns with your system. </li>
                  <li><strong> Refrigerator Repair Service: </strong> Efficient repair services for all fridge freezer components, ensuring a quick resolution to issues such as leaks, electrical failures, and system malfunctions. </li>
                  <li><strong> Refrigerator Annual Maintenance Contract: </strong> This contract outlines the terms and services covered for annual maintenance of your refrigerator. </li>

                  <p className="mb-0">
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for optimal refrigerator performance, efficiency, and longevity.

                  </p>
                </ul>


              </div>


            </div>
          </div>
        </section >

        {/* The Benefits  */}
        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of Refrigerator Service Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')} alt="Ensuring-Safety" className="icon-img-block-icon" />
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
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Optimal-Performance" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Optimal Performance
                      </h3>
                      <p className="small">Regular maintenance helps your refrigerator run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Lower-Energy-Bills" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                      <p className="small">Energy efficient refrigerator translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair')} alt="Saving-Money-on-Repair" className="icon-img-block-icon" />
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
                        <img src={getImageSrc('icon/extending')} alt="extending" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Extending refrigerator Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your refrigerator, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')} alt="Peace-of-Mind" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                      </h3>
                      <p className="small">Knowing your refrigerator are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHOOSE US  */}
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
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your refrigerator runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your refrigerator repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
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
                    <p>We are experts in refrigerator repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two refrigerator at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our skilled refrigerator technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
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
            <h3>We specialise in Refrigerator services for the following brands</h3>
            <div className="row">
              <div className="col-12">
                <ul className="mb-0">
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/lg/"><strong>LG Refrigerator Repair</strong></a><strong>: </strong>FAJ is here to support you when things go wrong. We understand that your LG refrigerator is essential for daily life, preserving your food and ensuring your meals are always prepared. FAJ is here for refrigerator repair near me and fridge freezer maintenance service in Dubai and Sharjah.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/samsung/"><strong>Samsung Refrigerator Repair</strong></a><strong>:</strong> If you are facing any problems with your Samsung refrigerator repair, Samsung fridge freezer service, fix washer dryer, or dishwasher, contact the FAJ team for same day fridge repair near me service in Dubai.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/electrolux/"><strong>Electrolux Refrigerator Repair</strong></a><strong>:</strong> When you need Electrolux refrigerator repair near me in Dubai, we have a team of professional and qualified fridge technicians available throughout Dubai. Call us now for freezer maintenance, fridge repair service near you in Dubai</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/"><strong>Bosch Refrigerator Repair</strong></a><strong>: </strong>If you are looking for the best Bosch fridge repair near me service in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch appliance service provider in the area. FAJ is here to help with refrigerator repair near by you, freezer fridge maintenance service near me in Dubai</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/"><strong>Viking Fridge Freezer Repair</strong></a><strong>: </strong>Your Viking appliances may require repair or maintenance and we can help. For high-quality Viking Fridge Freezer repair near me service in Dubai, rely on FAJ. Get same day refrigerator repair near me and built in refrigerator service and fix refrigerator error by FAJ.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/daewoo/"><strong>Daewoo Refrigerator Repair</strong></a><strong>: </strong>We provide expert Daewoo fridge repair near me service in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator repair, washing machine repair, dryer repair service and more. Book now fridge repair in Sharjah and Dubai Area.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/siemens/"><strong>Siemens Refrigerator Repair</strong></a><strong>:</strong> Are you concerned about your Siemens appliance malfunctioning and searching for a reliable Siemens refrigerator repair services near me in Dubai? Contact us for same-day fridge repair near me service in your location Dubai and Sharjah!</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/teka/"><strong>Teka Refrigerator Repair</strong></a>: If you're searching for the best Teka appliance repair company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerator maintenance and Teka refrigerator repair near me service, washing machine repair, and oven repairs. Freezer repair and freezer maintenance service. FAJ is recognized as the leading Teka appliance service provider in the area.</li>
                </ul>

                <p className="mb-0">
                  <Link to="/services/home-appliances-repair/brands/aeg/">AEG</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/ariston/">Ariston</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/beko/">Beko</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/blomberg/">Blomberg</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/faber/">Faber</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/fagor/">Fagor</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/fisher-paykel/">Fisher and Paykel</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/foster/">Foster</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/gaggenau/">Gaggenau</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/hitachi/">Hitachi</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/hoover/">Hoover</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/indesit/">Indesit</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/lg/">LG</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/neff/">Neff</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/smeg/">Smeg</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/sub-zero/">Sub Zero</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/terim/">Terim</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/whirlpool/">Whirlpool</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/zanussi/">Zanussi</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/de-dietrich/">De Dietrich</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/baumatic/">Baumatic</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/bertazzoni/">Bertazzoni</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/bompani/">Bompani</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/boston/">Boston</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/brandt/">Brandt</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/gibson/">Gibson</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/gorenje/">Gorenje</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/hisense/">Hisense</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/kelvinator/">Kelvinator</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/kenmore/">Kenmore</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/panasonic/">Panasonic</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/sanyo/">Sanyo</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/sears/">Sears</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/wolf/">Wolf</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/haier/">Haier</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/elica/">Elica</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/marvel/">Marvel</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/miele/">Miele</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/maytag/">Maytag</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/toshiba/">Toshiba</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/thermador/">Thermador</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/sharp/">Sharp</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/admiral/">Admiral</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/aftron/">Aftron</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/home-appliances-repair/brands/unimac/">Unimac</Link>
                </p>
              </div>
            </div>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
                <WhatsappIconButton />
                <CallNowButton />
              </div>
            </div>

          </div>
        </section>

        {/* Brands section */}
        <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
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
        </Suspense>

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
        <BlogFridge />
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
  );
};

export default RefrigeratorRepairInDubaiDetails;