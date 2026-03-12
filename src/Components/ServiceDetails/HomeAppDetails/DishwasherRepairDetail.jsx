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

const DishwasherRepairDetailDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // For SEO
  const metatitle = String(titleSeo || "Dishwasher Repair Dubai | Dishwasher Service Near Me");
  const metadescription = String(description || "Reliable Dishwasher Repair and Service in Dubai. Book with us for built in dishwasher repairs, error fixing service center & best glass washer maintenance");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Dishwasher Repair Service, Dishwasher Repair Dubai, Dishwasher Service Dubai, Dishwasher Fix Dubai, Dishwasher Maintenance Dubai, Dishwasher Machine Repair Dubai, Dishwasher Machine Service Dubai, Dishwasher Machine Fix Dubai, Dishwasher Machine Maintenance Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/dishwasher-repair-service/");
  const metaImage = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/dishwasher-repair/public";
  const schema ={
  "@context": "https://schema.org",
  "@graph": [
    
    {
      "@type": "LocalBusiness",
      "name": "Dishwasher Repair | Dishwasher Maintenance Service in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/dishwasher-repair-service/",
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
        "name": "Dishwasher Repair & Maintenance Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Dishwasher Not Draining Repair" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Dishwasher Water Leakage Fix" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Dishwasher Door & Latch Repair" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Dishwasher Noise Troubleshooting" }
          },
          {
            "@type": "Offer",
            "itemOffered": { "@type": "Service", "name": "Dishwasher General Maintenance & Cleaning" }
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Narges" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Mr.Abdullah and Tarin come to fix our built in dishwasher and they were very helpful on the matter. Fixed our issue within 10 mins and also with a reasonable price!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Stefanie Giersch" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Thanks to abdullah i can cook and go wild in my kitchen, knowing my dishwasher is set and ready. More importantly, me being german, he arrived as scheduled on time everytime. Friendly, efficient, and my pup stevie was very happy with him. That says alot to me as a dog mom. Thanks abdullah 👌💪🏻"
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
          "name": "Dishwasher Repair",
          "item": "https://www.fajservices.ae/services/home-appliances-repair/dishwasher-repair-service/"
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "Dishwasher Repair and Maintenance Service in Dubai | How To Fix Dishwasher | Dishwasher Cleaning",
      "description": "In this video, we're here to help you Fix Dishwasher Fast and enjoy a hassle-free service from your trusted appliance. Whether your dishwasher is giving you trouble or you want to ensure it keeps running smoothly, you're in the right place. We cover troubleshooting made easy, home appliance maintenance, and increased efficiency. Our highly skilled FAJ technicians are here to resolve issues like water leakage, drainage problems, ineffective cleaning, unusual noises, and door malfunctions. Take advantage of our special appliance inspection offers in Dubai and get your dishwasher back in action today!",
      
      "thumbnailUrl": "https://img.youtube.com/vi/Cye_OFTAT3E/maxresdefault.jpg",
      "uploadDate": "2023-10-05T11:53:06Z",
      "duration": "PT1M23S",
      "contentUrl": "https://www.youtube.com/watch?v=Cye_OFTAT3E",
      "embedUrl": "https://www.youtube.com/embed/Cye_OFTAT3E",
      "potentialAction": {
        "@type": "WatchAction",
        "target": "https://www.youtube.com/watch?v=Cye_OFTAT3E"
      },
      "publisher": {
        "@type": "Organization",
        "name": "FAJ Technical Services LLC",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.fajservices.ae/img/FajLogo.svg",
          "width": 250,
          "height": 60
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the three most important rules when using a dishwasher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First, make sure to use every inch of space to maximize efficiency and avoid wasting water. However, be careful not to overfill it. Second, avoid placing certain materials in the dishwasher, such as specific metals, wood, thin plastic, and other delicate items. Finally, try to use the eco-mode whenever possible to conserve energy."
          }
        },
        {
          "@type": "Question",
          "name": "What cannot be washed in a dishwasher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While most everyday dishes are generally safe to wash in a dishwasher, there are items that are best washed by hand. Wood, certain pots and pans, crystal, and knives can be damaged by dishwasher detergent and high heat."
          }
        },
        {
          "@type": "Question",
          "name": "What is the most common problem with dishwashers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most common issues with dishwashers stem from user misunderstandings and blockages. Installation problems, such as kinked or crushed hoses, restricted outlet connections, and power outlet issues, also account for a significant percentage of service calls within the first few weeks."
          }
        },
        {
          "@type": "Question",
          "name": "How long can a dishwasher sit without being used?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your dishwasher can remain unused for a while without any issues. However, if left completely unused for more than a year, it may develop problems. To keep it in good condition, it's best to run your dishwasher a few times throughout the year."
          }
        },
        {
          "@type": "Question",
          "name": "What is the safe temperature for a dishwasher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For dishwashers that use chemicals for sanitizing, the wash and rinse cycles should reach at least 120ºF (49ºC). High-temperature machines should have a sanitizing rinse temperature of at least 165ºF (74ºC) for stationary rack, single-temperature machines, and 180ºF (82ºC) for all other machines."
          }
        },
        {
          "@type": "Question",
          "name": "How to make a dishwasher last longer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Here are some tips for extending the life of your dishwasher: - Use it regularly. - Clean it on a regular basis. - Allow it to air out. - Remove buildup as needed. - Use the correct detergent. - Be mindful of what you place in your dishwasher. - Clean the filter screens."
          }
        },
        {
          "@type": "Question",
          "name": "Can nonstick cookware go in the dishwasher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nonstick-coated pans may be placed in the dishwasher if they are made by reputable manufacturers and the care instructions permit it. Always check the manufacturer's guidelines to be sure."
          }
        },
        {
          "@type": "Question",
          "name": "Can bacteria survive in a dishwasher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Up to 74 species of bacteria can be found in a dirty dishwasher, including Gram-positive bacteria like Stenotrophomonas maltophilia and Escherichia coli. Some of these bacteria can be drug-resistant, cause diarrhea, and pose a serious risk to immunocompromised individuals."
          }
        },
        {
          "@type": "Question",
          "name": "Does a dishwasher clean without detergent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can run a dishwasher without detergent, but it won't clean your dishes effectively. Initially, the impact might be minimal, but over time, it could compromise the hygiene of your kitchenware."
          }
        },
        {
          "@type": "Question",
          "name": "What is a good lifespan for a dishwasher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The average lifespan of a dishwasher is about 10 years, according to manufacturers surveyed by Consumer Reports. However, issues tend to arise within the first five years of use."
          }
        },
        {
          "@type": "Question",
          "name": "Can I open the dishwasher during a cycle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the machine is in the washing or rinsing phase, steam or hot water may escape, so it’s advisable to open it slowly. Opening during the drying phase might release heat, but it won’t disrupt the cleaning process. Keep in mind that certain cycles, like sanitizing or intense drying, may be very hot inside."
          }
        },
        {
          "@type": "Question",
          "name": "Can you wash pots in the dishwasher?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can put pots and pans in a dishwasher to help streamline cleanup and save you time in the kitchen. Checking to make sure your cookware is labeled “dishwasher safe” before beginning a wash cycle can help you get the most out of this helpful kitchen appliance."
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
  const dishwasherServicesData = [
    {
      id: 1,
      image: getImageSrc('dishwasher-repair-service'),
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
      image: getImageSrc('dishwasher-repair'),
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
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/DishwasherRepairFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/DishwasherRepairTestimonial.json`),
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
            <h1 className="cs_fs_30">Dishwasher Repair | Dishwasher Maintenance Service in Dubai</h1>
            <p>
              Since 2010, FAJ has been a trusted name in dishwasher repair and service in Dubai and Sharjah. Our skilled professionals are ready to assist with any brand, using high-quality tools for effective service.
              <br /> We prioritise repairs over replacements, helping you save money and avoid the hassle of buying a new dishwasher. Rely on our experienced experts for fast and reliable dishwasher maintenance in Dubai!
            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        <PriceCardHomeCat  services={dishwasherServicesData}/>
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Dishwasher Repair and Service Near You </h2>

                <p className="mb-2">
                  Has your dishwasher stopped working completely? Or is it running, but your dishes and cutlery aren't coming out as clean as they should?
                  <br />
                  At FAJ, we understand that a machine breakdown is always inconvenient. that&apos;s why our team of experts is here to provide dishwasher repair and service appointments near you in Dubai and Sharjah.
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
                  src="https://www.youtube.com/embed/Cye_OFTAT3E"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>

        {/* Why  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Dishwasher Maintenance Service Important in Dubai?</h2>
            <p>
              Proper dishwasher maintenance is essential for extending its lifespan and enhancing efficiency, especially in Dubai's climate. Here are the main benefits:
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('dishwasher-repair-service')} alt="Dishwasher Repair" />
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
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dishwasher not Draining</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">A pool of water at the bottom of your dishwasher indicates drainage issues. Always ensure that there are no blockages in the drain hose.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dishwasher Leaks</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Dishwasher leaks can inflict serious damage to your kitchen and need immediate repairs, often due to cracks in the dishwasher's components.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dishwasher not Starting</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The dishwasher won't start unless the door is properly closed, and any door seal or latch issues will prevent wash cycles from beginning.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dirty Dishes</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">This usually occurs because you either overloaded the dishwasher or stacked the dishes incorrectly before starting the wash cycle, causing poor cleaning results.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Excessive Suds</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Your dishwasher may fill with excess suds during use, leaving suds in the bottom and residue on your dishes after cycle ends, causing poor cleaning.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Smelly Dishwasher</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Bad dishwasher odors often come from stale, wet food trapped inside. Clean the bottom screen regularly to keep odors fresh and away.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Food Crumbs</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">If you find food particles on your dishes after washing, check the filter assembly to see if it is blocked. If it is, remove the filter and clean it.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Heating Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Your dishwasher isn't heating water, leading to cold washes and ineffective cleaning. Hot water is essential for activating the detergent.</p>
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
                <img className="bordered-img w-100" src={getImageSrc('dishwasher-repair')} alt="Dishwasher Repair" />
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
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for optimal performance, efficiency, and longevity of your dishwasher.
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
              <h2 className="cs_fs_30 mb-0">The Benefits Of Dishwasher Service Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
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
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Optimal-Performance" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Optimal Performance
                      </h3>
                      <p className="small">Regular maintenance helps your dishwasher run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Lower-Energy-Bills" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                      <p className="small">Energy efficient dishwasher translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
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
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/extending')} alt="extending" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Extending dishwasher Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your dishwasher, delaying the need for replacements.</p>
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
                      <p className="small">Knowing your dishwasher are in top condition gives you confidence and removes the stress of unexpected failures.</p>
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
                    <img src={getImageSrc('icon/fast-reliable')} alt="Fast,Reliable Service" />
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
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your dishwasher runs smoothly and providing peace of mind.</p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your dishwasher repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1')} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="value" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in dishwasher repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="confidence-guarantee" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two dishwasher at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon servicetrustworthy" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled dishwasher technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
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

        {/* We specialise  */}
        <section className="section cs_py_30 bg-light-gray ">
          <div className="container">
            <h3>We specialise in dishwasher services for the following brands </h3>
            <div className="row">
              <div className="col-12">
                <ul className="mb-0">
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/lg/"><strong>LG Dishwasher Repair</strong></a><strong>: </strong>FAJ is here to support you when issues arise. We understand that your LG dishwasher is essential for daily life, keeping your dishes clean and ready for every meal. Call FAJ for expert dishwasher repair near me and fix dishwasher errors.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/samsung/"><strong>Samsung Dishwasher Repair</strong></a><strong>: </strong>If you are experiencing issues with your Samsung dishwasher, contact the FAJ team for same-day dishwasher repair service in Dubai. We offer dishwasher maintenance and dishwasher cleaning services in Dubai.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/electrolux/"><strong>Electrolux Dishwasher Repair</strong></a><strong>: </strong>When you need Electrolux dishwasher repair in Dubai, we have a team of professional and qualified technicians available throughout Dubai and Sharjah. Contact us for dishwasher repair near me service and dishwasher maintenance in Dubai and Sharjah.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/"><strong>Bosch Dishwasher Repair</strong></a><strong>: </strong>If you are looking for the best Bosch dishwasher repair in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch appliance repair and are recognized as the leading Bosch dishwasher repair and service provider in the area.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/"><strong>Viking Dishwasher Repair</strong></a><strong>: </strong>If you are looking for Viking dishwasher repair or maintenance and we can help. For high-quality Viking dishwasher maintenance service in Dubai, rely on FAJ.&nbsp;</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/daewoo/"><strong>Daewoo Dishwasher Repair</strong></a><strong>: </strong>We provide expert services for Daewoo dishwasher repair near you in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo refrigerator, dishwasher, dryer repair and more.&nbsp;</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/siemens/"><strong>Siemens Dishwasher Repair</strong></a><strong>: </strong>Are you concerned about your Siemens dishwasher malfunctioning and searching for a reliable Siemens dishwasher repair company in Dubai? Contact us for same-day service!</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/teka/"><strong>Teka Dishwasher Repair</strong></a><strong>: </strong>If you're searching for the best Teka dishwasher repair near me service in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for fix Teka dishwasher, built in dishwasher repair services, refrigerators, washing machines, and oven repair. FAJ is recognized as the leading Teka appliance service provider in the area.</li>
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

        {/* Testimonial section */}
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
        {/* FAQs Section - FIXED */}
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

export default DishwasherRepairDetailDetail;