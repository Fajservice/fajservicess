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
import BrandsSliderSection from "../../BrandsSliderSection";
import Testimonial1 from "../../Testimonial/Testimonial1";
import AppliancesAppointmentCol from "../../ApplianceCommons/AppliancesAppointmentCol.jsx";
import PriceCardHomeCat from "../../Services/homeappliances/PriceCardHomeappCat.jsx";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const HobRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  const metatitle = String(titleSeo || "Ceramic Hob Repair & Service in Dubai | Stove Repairs");
  const metadescription = String(description || "Having issues with your hob repair in Dubai? Book with us for gas or electric Induction stove, cooking range centre near me with a warranty of parts.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Electric Hob Repair, Gas Hob Repair, Gas Hob Service");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/hob-repair-service/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Hob-Repair-Service-in-Dubai-UAE/public");
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Hob Repair & Service | Gas & Electric Stove Repairs in Dubai - FAJ Technical Services",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/hob-repair-service/",
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
        "name": "Hob & Stove Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Gas & Electric Hob Repair",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas Burner Repair & Replacement" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ignition Switch & Spark Module Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Induction Hob Power Board Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Glass Top Replacement" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Thermostat & Control Knob Repair" } }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Linda Michel" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "FAJ repaired my cooktop, dishwasher and replaced broken refrigerator shelves! Their service was outstanding, great communication! Regina was on top of everything and kept me updated"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ram Kanta" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "fixing kitchen hood in my home. good installation and excellent Well recommended"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Diana Dalaty" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "FAJ repaired our fryer and oven quickly. Their commercial cooking equipment service is professional and reliable"
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
          "name": "Hob Repair",
          "item": "https://www.fajservices.ae/services/home-appliances-repair/hob-repair-service/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do induction hobs work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Induction hobs generate a magnetic field that heats the cookware directly, rather than heating the hob itself."
          }
        },
        {
          "@type": "Question",
          "name": "What cookware is needed for induction hobs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You will need cookware made of ferrous metals, such as cast iron or stainless steel, that can be attracted to a magnet."
          }
        },
        {
          "@type": "Question",
          "name": "Are there any downsides to induction hobs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You might need to buy new cookware, and some users find induction hobs noisy, especially at high temperatures."
          }
        },
        {
          "@type": "Question",
          "name": "How long do induction hobs last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With proper maintenance, induction hobs can last between 10 to 15 years."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I use a non-compatible pan on an induction hob?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you use a pan that is not compatible, nothing will happen; the hob will not heat the pan unless it has a magnetic base."
          }
        },
        {
          "@type": "Question",
          "name": "How do I clean an induction hob?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Induction hobs are generally easy to clean. Many models come with a quick clean feature, allowing you to wipe away spills and stains before they set."
          }
        },
        {
          "@type": "Question",
          "name": "What cannot be cooked on induction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aluminium or aluminium-clad, copper or copper-clad, aluminium foil, glass/ceramic, and some stainless steel products cannot be used because they will not attract and hold a magnet."
          }
        },
        {
          "@type": "Question",
          "name": "Can I leave the induction hob on overnight?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As previously explained, without a pan, there is no heat; you can't leave an induction hob on unintentionally unless you also leave the pan in place."
          }
        },
        {
          "@type": "Question",
          "name": "Can we boil eggs on an induction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Place the eggs in a pot and cover with cold water by an inch. Bring to a gentle boil over medium-high heat. Setting number 6 is good if you're using induction."
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
  const hobServicesData = [
    {
      id: 1,
      image: getImageSrc('hob-repair-service'),
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
      image: getImageSrc('Hob-Repair-Service-in-Dubai-UAE'),
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
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/HobRepairFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/HobrepairTestimonials.json`),
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

  const settingBrands = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    arrows: false,

    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
          <meta property="og:image" content={metaImage} />
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
            <h1 className="cs_fs_30">Hob Repair & Service | Gas & Electric Stove Repairs in Dubai</h1>
            <p>Since 2010, we have been providing reliable electric hob repair services.<br />We recognise that hobs can break down unexpectedly, so we provide high-quality and affordable cooker hob repair. Our trained technicians are available throughout Dubai and Sharjah to repair your electric or gas hob and stove service at your location.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        <PriceCardHomeCat  services={hobServicesData}/>
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Same Day Cooking Range Repair & Service</h2>

                <p className="mb-2">
                  It's pretty standard to experience issues with cooking appliances from time to time.
                  Whether your induction hob suddenly stops working, your gas stove won't stay lit when you need it, or your electric hob keeps turning on and off, it's essential to manage these problems promptly.
                  <br />
                  FAJ offers fast Services and can assist you in arranging a professional gas range repair to fix your faulty cooker.

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

            <AppliancesAppointmentCol />
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Induction Hob Maintenance Service Important in Dubai?</h2>
            <p>
              Proper induction hob maintenance is essential for extending its lifespan and enhancing efficiency, especially in Dubai's climate. Here are the main benefits:
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('hob-repair-service')} alt="Hob Repair Servcie" loading="lazy" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong>  Hob Extended Lifespan: </strong> Regular maintenance helps the induction hob last longer, saving on replacement costs. </li>
                  <li> <strong>  Stove Improved Efficiency: </strong> A well-maintained induction hob uses less energy, leading to lower utility bills, which is essential in Dubai. </li>
                  <li> <strong>  Hob Preventing Costly Repair: </strong> Catching minor issues early prevents them from escalating into expensive repairs. </li>
                  <li> <strong>  Stove Preserving induction hob Integrity: </strong> Regular cleaning prevents dust buildup that affects performance. </li>
                  <li> <strong>  Cooker Early Problem Detection: </strong> Routine checks help identify potential issues before they become serious. </li>
                  <li> <strong>  Hob Cost-Effective: </strong> Maintenance costs are lower than early replacements or major repairs.  Investing in induction hob care ensures safety and efficiency and is a smart economic choice in Dubai. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems with Induction / Hob   </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">E8 Error Code</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This indicates a communication issue in the stove/hob, often related to loose wiring or a faulty control board (PCB).</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Incorrect Cookware</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Induction electric hobs require magnetic cookware to function correctly, and non-magnetic cookware may not heat properly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Burner Discoloration
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This can be caused by burnt-on food from the induction hob, stubborn cookware residue, or unsightly heat marks.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Error Code</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Difficulty Sharing Power Between Burners: This may be indicated by an E8 error code and could mean a blown fuse on the main board.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Flashing "E" Symbol</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This often indicates a stuck PCB electronic board, switch or button. Also, check the electrical wiring from inside the unit.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Hob Not Responsive</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If the hob doesn't respond to touch, it could be due to a blown or tripped switch affecting the power supply or an inside wiring issue.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Hob Not Heating Properly</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This can occur if the cookware is not sufficiently magnetic or sits unevenly on the cooking zone or hot plate.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Hob Overheating</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      This can happen if the heat is not circulated properly or if tHere&apos;s a problem with the fan or heating thermostat.</p>
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

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR INDUCTION HOB   </h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('Hob-Repair-Service-in-Dubai-UAE')} alt="Hob Repair Servcie" loading="lazy" />
              </div>

              <div className="col-xl-6">
                <p className="mb-0">
                  We specialise in all types and brands of induction hobs, including built-in units.
                </p>

                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong>Hob Installation: </strong>We provide professional installation of various types and brands of induction hobs to ensure optimal performance and efficiency.</li>
                  <li> <strong>Hob Diagnostics: </strong>Our team offers comprehensive fault-finding services to diagnose any issues effectively. We conduct eligibility assessments and provide detailed quotations to resolve any concerns with your system.</li>
                  <li> <strong>Hob Repair Service: </strong>We offer efficient repair services for all cooking hob components. Our team quickly addresses leaks, electrical failures, and system malfunctions.</li>
                  <li> <strong>Hob Annual Maintenance Contract: </strong>This contract outlines the terms and services covered for the yearly maintenance of your induction hob.</li>

                  <p className="mb-0">
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for the optimal performance, efficiency, and longevity of your hob. Feel free to reach out if you need specific services or have any questions!
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section >

        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">The Benefits Of Hob Service Dubai
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
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Optimal-Performance" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Optimal Performance
                      </h3>
                      <p className="small">Regular maintenance helps your hob run smoothly and efficiently, consistently delivering the best results every time.
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
                      <p className="small">Energy efficient induction hob translate to monthly savings on utility bills, putting more money back in your pocket.</p>
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
                      <h3 className="text-uppercase mb-2 cs_fs_16">Extending Hob Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your hob, delaying the need for replacements.</p>
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
                      <p className="small">Knowing your hobs are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>

            <div className="usps align-items-center	">
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
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your hob runs smoothly and providing peace of mind.</p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your hob repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>
              </div>

              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1')} alt="FAJ icon service" loading="lazy" />
              </div>

              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in hob repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two hob at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled hob technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('fajteam')} alt="FAJ icon service" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray ">
          <div className="container">
            
            <h3>We specialise in Hob services for the following brands </h3>
            <div className="row">
              <div className="col-12">
                <ul className="mb-0">
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/smeg/"><strong>Smeg Hob Repair</strong></a><strong>: </strong>FAJ is here to support you when things go wrong. We understand that your Smeg induction hob is essential for daily life, helping you prepare meals quickly and efficiently. We are here to help you with electric and gas hob repairs near me in Dubai and Sharjah.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/siemens/"><strong>Siemens Induction Hob Repair</strong></a><strong>: </strong>If you are facing any problems with your Siemens hob, oven, stove, refrigerator, washer dryer, or dishwasher, contact the FAJ team for induction hob repair near me and service in Dubai.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/la-germania/"><strong>La Germania Hob Repair</strong></a><strong>: </strong>When you need La Germania hob repair in Dubai, we have a team of professional and qualified technicians to provide hob repair near me service, and gas stove repair services are available throughout the Dubai.&nbsp;</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/"><strong>Bosch Hob Repair</strong></a><strong>:</strong> If you are looking for the best Bosch induction hob repair company in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance and are recognized as the leading Bosch hob service provider in the area.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/"><strong>Viking Gas Range Repair</strong></a><strong>:</strong> Your Viking appliances repair or maintenance, and we can help. For high-quality Viking gas range repair, Viking fridge freezer service, and oven maintenance in Dubai, rely on FAJ.&nbsp;</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/daewoo/"><strong>Daewoo Hob Repair</strong></a><strong>: </strong>We provide expert services for Daewoo electric hob repair near me in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with Daewoo gas hob service, cooking range fix, refrigerator, washing machine, dryer, and more.&nbsp;</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/neff/"><strong>Neff Gas Hob Repair</strong></a><strong>:</strong> Are you concerned about your Neff induction hob malfunctioning and searching for a reliable Neff induction hob repair and service company in Dubai? Contact us for same-day gas cooker service and cooker hob repair in Dubai!</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/teka/"><strong>Teka Induction Hob Repair</strong></a><strong>:</strong> If you're searching for the best Teka induction hob repair in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka gas stove service and repair, refrigerators, washing machines, and oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area.</li>
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

        <MaintenanceContract />

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

export default HobRepairDetail;