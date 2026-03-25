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
import PriceCardHomeCat from "../../Services/homeappliances/PriceCardHomeappCat";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const GasRangeRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(titleSeo || "Gas Cooker Repair in Dubai | Cooking Range Service Near Me");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metadescription = String(description || "Are you looking for gas cooker repair in Dubai? Book with us for electric stove service. Get FAJ fast fixing cooking range, induction repairs near me");
  const metaKeyword = String(Keyword || "Gas Cooker Repair, Gas Stove Repair, Cooking Range Service, Induction Repair, Dubai, Sharjah");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/gas-cooker-repair-service/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/gas-cooker-repair-services/public");
  const schema ={
  "@context": "https://schema.org",
  "@graph": [
   
    {
      "@type": "LocalBusiness",
      "name": "Gas Cooker Repair | Electric Stove and Cooking Range Service in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/gas-cooker-repair-service/",
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
        "name": "Gas Cooker & Cooking Range Repair Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Gas Stove & Gas Burner Repair" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Electric Cooktop & Stove Repair" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Ceramic Hob & Glass Top Repair" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Induction Range & Hob Service" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Cooking Range Maintenance" }
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Linda Michel" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Praised the service for fixing a cooktop, dishwasher, and fridge, specifically mentioning Regina for keeping them updated."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Vita Zheng" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Highlighted Mr. Fasalu for expertly fixing a hob that others could not repair."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Looney Rayco" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Commended Fasalu for safe delivery and repair of a coffee machine."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Virendra Lal" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Appreciated Shakeer for quality repair work and Ms. Neha for prompt administrative help."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ram Kanta" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Recommended the team for kitchen hood installation, specifically thanking Fasalu."
        }
      ]
    },
     {
      "@type": "BreadcrumbList",
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
          "name": "Gas Cooker Repair",
          "item": "https://www.fajservices.ae/services/home-appliances-repair/gas-cooker-repair-service/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the benefits of using a gas stove?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gas stoves offer instant heat control, cost-effectiveness with natural gas, and consistent heat for even cooking."
          }
        },
        {
          "@type": "Question",
          "name": "How do I clean a gas stove?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regular cleaning involves wiping the surface with a damp cloth and mild detergent. For tougher stains, use a specialised stove cleaner and scrub the grates and burners."
          }
        },
        {
          "@type": "Question",
          "name": "How often should I check my gas stove for leaks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It’s advisable to check for leaks annually or whenever you smell gas near the stove."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I smell gas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do not light any matches or turn on any electrical switches. Open windows to ventilate, turn off the gas supply if possible, and call a professional."
          }
        },
        {
          "@type": "Question",
          "name": "What’s the difference between a conventional and a convection gas stove?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Convection stoves have fans that circulate hot air, cooking food more evenly and quickly than conventional stoves."
          }
        },
        {
          "@type": "Question",
          "name": "How do I convert my gas stove from natural gas to propane?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You need a conversion kit, and to ensure safety, a qualified technician should perform the conversion."
          }
        },
        {
          "@type": "Question",
          "name": "Can I install a gas stove myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It’s recommended to have your gas stove installed by an expert professional to ensure it meets safety standards."
          }
        },
        {
          "@type": "Question",
          "name": "Do gas stoves provide better temperature control than electric stoves?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, gas stoves allow for precise and immediate temperature adjustments while cooking."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best way to clean the burners on a gas stove?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Remove the burners, soak them in warm water and detergent, then scrub with a non-abrasive brush."
          }
        },
        {
          "@type": "Question",
          "name": "What types of gas stoves are available on the market?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Options include freestanding ranges, slide-in ranges, and built-in cooktops."
          }
        },
        {
          "@type": "Question",
          "name": "How can I improve the efficiency of my gas stove?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Regularly clean burners and use the correct size pots with lids to conserve heat."
          }
        },
        {
          "@type": "Question",
          "name": "Can I cook on a gas stove during a gas leak?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, cooking or even turning on the stove is extremely dangerous if you suspect a gas leak."
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
  const gasrangeServicesData = [
    {
      id: 1,
      image: getImageSrc('gas-cooker-repair-service'),
      title: 'Appliance Call-out',
      icon: getImageSrc('calloutcard'),
      price: 'AED157',
      arrow: getImageSrc('iconreadmore'),
      description: 'Just tell us about your faulty appliance, and we will provide a quote for repair / parts. Our technician will arrive at a time that is suitable for you.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=AC%20Call-Out',
      popupTitle: 'Appliance Call-out  scope of work:',
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
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 157, callout fee applies based on the type, brand, capacity of the appliance unit, and location for each diagnosis.'
        },
      ]
    },
    {
      id: 2,
      image: getImageSrc('gas-cooker-repair-services'),
      warranty: '50- Days Warranty',
      title: 'Appliance Cleaning',
      icon: getImageSrc('cleaningcard'),
      price: 'AED395',
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
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 395 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.'
        },
      ]
    },
    {
      id: 3,
      image: getImageSrc('ovenhomecard'),
      title: 'Home Appliances Installation',
      icon: getImageSrc('installationcard'),
      price: 'AED365',
      arrow: getImageSrc('iconreadmore'),
      description: 'FAJ expert technicians will provide assistance to install home appliances. Upgrade your kitchen with professional appliance installations!',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=AC Maintenance',
      popupTitle: 'Appliances Installation',
      sections: [
        {
          heading: 'Depending on quantities, capacity, type, model, and area.',
          items: [
            'Refrigerator Installation',
            'Dish Washer Installation',
            'Electric Cooker Installation',
            'Hood / Chimney Installation',
            'Washing Machine Installation',
            'Built-in Microwave Installation',
            'Built-in Dishwasher Installation',
          ]
        },
        {
          paragraph: '**Excluded:** <br> Costs related to MEP, carpentry, gypsum ceilings, painting, repair work, procurement-related installation parts / materials, and installation as needed.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 365 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.'
        },
      ]
    },
  ];
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
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/GasRangeRepairServiceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/GasRangeRepairServiceTestimonial.json`),
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
          <meta property="og:title" content="Gas Cooker Repair in Dubai | Cooking Range Service Near Me" />
          <meta property="og:description" content="Are you looking for gas cooker repair in Dubai? Book with us for electric stove service. Get FAJ fast fixing cooking range, induction repairs near me" />
          <meta property="og:image" content={metaImage} />
          <meta property="og:url" content={metaURL} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Gas Cooker Repair in Dubai | Cooking Range Service Near Me" />
          <meta name="twitter:description" content="Are you looking for gas cooker repair in Dubai? Book with us for electric stove service. Get FAJ fast fixing cooking range, induction repairs near me" />
          <meta name="twitter:image" content={metaImage} />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
          
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Top Gas Cooker Repair, Electric Stove and Cooking Range Service Center Near You</h1>
            <p>
              Since 2010, F A J has supported you when things go wrong. We understand that your cooking appliances are essential for daily life.
              The induction cooktop, stove, or range is often key to an enjoyable cooking experience in a modern kitchen. After all, home-cooked meals are an excellent way to bring family and friends together. When your cooker breaks down, it can be both inconvenient and frustrating.
              <br /> Let F A J technicians in your area help you get those quality meals back on the table with our reliable repair services.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        <PriceCardHomeCat  services={gasrangeServicesData}/>
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Reliable Cooking Range Repair & Service</h2>

                <p className="mb-2">
                  Gas stoves are essential in our kitchens, helping us create delicious meals every day. When a cooking range stops working, it can throw our routines off balance.
                  <br /> That&apos;s why finding a trustworthy cooktop repair specialist nearby is crucial, whether you're in the vibrant cities of Dubai or Sharjah. We&apos;re here to help you get back to cooking confidently and easily!
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
                  src="https://www.youtube.com/embed/SLGpswtzn-w"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

              </div>
            </div>

            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>



        {/* Why is Cooking Range Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Cooking Range Maintenance Service Important in Dubai?</h2>
            <p>
              Proper gas range maintenance is essential for extending its lifespan and enhancing efficiency, especially in Dubai's climate. Here are the main benefits:

            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('gas-cooker-repair-service')} alt="gas cooker repair service" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Gas Range Extended Lifespan: </strong> Regular maintenance helps the gas stove last longer, saving on replacement costs. </li>
                  <li> <strong> Cooker Improved Efficiency: </strong> A well-maintained cooking range uses less energy, leading to lower utility bills, which is essential in Dubai. </li>
                  <li> <strong> Stove Preventing Costly Repair: </strong> Catching minor issues early prevents them from escalating into expensive repairs. </li>
                  <li> <strong> Cooking Range Preserving induction hob Integrity: </strong> Regular cleaning prevents dust buildup that affects performance. </li>
                  <li> <strong> Range Early Problem Detection: </strong> Routine checks help identify potential issues before they become serious. </li>
                  <li> <strong> Range Cost-Effective: </strong> Maintenance costs are lower than early replacements or major repairs. Investing in an electric stove cover ensures safety and efficiency and is a smart economic choice in Dubai. </li>
                  <li> <strong> Cooker Energy Efficiency: </strong> Regularly maintaining your cooker can improve its efficiency and save you money. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">THE MOST COMMON PROBLEMS WITH THE COOKING RANGE </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Gas Burner Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This is another gas cooker problem. The burner has an issue where the flames are uneven or only partly ignited. They also tend to get blocked.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Noisy Burners</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Noisy burner flames may result from too much air or gas flow through valves, which can be hazardous and affect safe operation.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Low Gas Flame</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Whether you have a gas stove or cooktop, slow heating can be frustrating and time-consuming when preparing food or cooking meals.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Gas leaks</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Gas leaks are serious and must not be ignored. If you smell gas even when the cooker is turned off, it may indicate a dangerous leak in the gas line or connection.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Broken Door Seal</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A broken door seal can cause heat to escape, leading to inefficient cooking, higher energy use, and potential damage to control knobs and surfaces.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Ignition Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A common issue is when the burner won&apos;t ignite despite the igniter being activated. Other gas cooker problems also arise in Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Gas Smell</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Gas leaks can occur from lines or pipes, posing serious safety risks. Before attempting any repairs, check if the burners are working correctly.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Gas Supply Disruption</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">To resolve issues, open the gas supply valve, reset the circuit breakers, and clean the burner heads. Also, check the igniter electrodes and spark ignitions.</p>
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
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR THE COOKING RANGE </h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('gas-cooker-repair-services')} alt="Gas Cooker repair" />

              </div>

              <div className="col-xl-6">
                <p className="mb-0">
                  We specialise in all types and brands of gas/electric cookers, including built-in units.
                </p>

                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">

                  <li> <strong> Cooker Installation:</strong> Expert installation of various types and brands of stoves, ensuring optimal performance and efficiency. </li>
                  <li> <strong> Stove Diagnostics:</strong> Comprehensive fault-finding services to effectively diagnose issues. We provide eligibility assessments and detailed quotations to address any concerns with your system. </li>
                  <li> <strong> Gas Range Repair Service:</strong> Efficient repair services for all appliance components, ensuring a quick resolution to leaks, electrical failures, and system malfunctions. Feel free to reach out if you need specific services or have any questions! </li>
                  <li> <strong> Stove Annual Maintenance Contract:</strong> This contract outlines the terms and services covered for the annual maintenance of your cooking range. </li>



                  <p className="mb-0">
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for optimal cooking range performance, efficiency, and longevity.

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
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of cooking range Service Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
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
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Optimal Performance
                      </h3>
                      <p className="small">Regular maintenance helps your cooking range run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                      <p className="small">Energy efficient cooking range translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
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
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/extending')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">cooking range Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your cooking range, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                      </h3>
                      <p className="small">Knowing your cooking range are in top condition gives you confidence and removes the stress of unexpected failures.</p>
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
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your cooking range runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your cooking range repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
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
                    <p>We are experts in cooking range repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two cooking range at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled cooking range technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
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
        <section className="section cs_py_30 bg-light-gray ">
          <div className="container">
           
            <h3>We specialise in Gas Cooker services for the following brands </h3>
            <div className="row">
              <div className="col-12">
                <ul className="mb-0">
                  <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/lg/">LG Stove Repair</a></strong><strong>:</strong> FAJ is here to support you when things go wrong. We understand that your LG cooker or induction is essential for daily life, helping you prepare meals efficiently and on time.</li>
                  <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/samsung/">Samsung Cooker Repair</a></strong><strong>:</strong> If you are facing any problems with your Samsung cooker, stove, washer, dryer, or dishwasher, contact the FAJ team for same-day repair service in Dubai.</li>
                  <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/electrolux/">Electrolux Gas Stove Repair</a></strong><strong>:</strong> When you need Electrolux gas stove repair in Dubai, we have a team of professional and qualified technicians available throughout the UAE.&nbsp;</li>
                  <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/">Bosch Stove Repair</a></strong><strong>:</strong> If you are looking for the best Bosch stove repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch stove service provider in the area.</li>
                  <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/">Viking Gas Range Repair</a></strong><strong>:</strong> Your Viking appliances may require repair or maintenance, and we can help. For high-quality Viking cooking range or oven repair in Dubai, rely on FAJ.&nbsp;</li>
                  <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/daewoo/">Daewoo Cooking Range Repair</a></strong><strong>:</strong> We provide expert services for Daewoo gas cooking range repair and electric cooker service in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with fix Daewoo gas stove, refrigerator, washing machine, dryer and more.&nbsp;</li>
                  <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/siemens/">Siemens Stove Repair</a></strong><strong>:</strong> Are you concerned about your Siemens stove malfunctioning and searching for a reliable Siemens cooker and stove repair and electrical cooker service company in Dubai? Contact us for same-day service!</li>
                  <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/teka/">Teka Gas Cooker Repair</a></strong><strong>:</strong> If you're searching for the best Teka cooking range repair and gas range service company in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka cookers, refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area.</li>
                </ul>

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
        {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg={reviewsbg}
            testimonialData={testimonial_data}
            sectionId="home-testimonials"
          />
        )}
        <section className="section cs_py_30 bg-dark-blue text-light">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>

        </section>
        {/* Faqs */}
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

export default GasRangeRepairDetail;