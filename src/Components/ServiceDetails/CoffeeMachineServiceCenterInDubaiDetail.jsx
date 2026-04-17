import { useEffect, useRef, useState, useCallback, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../Contact/Serviceappointemnt';
import CallNowButton from '../Buttons/CallNowButton';
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import MaintenanceContract from "../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import HeaderForm from "../Headeform/HeaderForm";
import Testimonial1 from "../Testimonial/Testimonial1";
import BrandsSliderSection from "../BrandsSliderSection";
import BeforeAfter from "../BeforeAfter/BeforeAfter";
import PriceCardHomeCat from "../Services/homeappliances/PriceCardHomeappCat";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const CoffeeMachineServiceCenterInDubaiDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  const metatitle = String(titleSeo || "Coffee Machine Service Center | Best Coffee Machine Repair UAE");
  const metadescription = String(description || "Top-Rated Coffee Machine service centre near you. Call us for home / office espresso repair & coffee maker maintenance Dubai. خدمات صيانة وإصلاح آلات القهو");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C.");
  const metaKeyword = String(Keyword || "Coffee Machine Repair, Coffee Machine Service, Coffee Machine Descaling, Coffee Machine Service Center");
  const metaURL = String(URL || "https://www.fajservices.ae/services/coffee-machine/coffee-machine-service-center/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Coffee-machine-servicing-title-image/public");
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Get Professional Coffee Machine Service & Repair Across Dubai, Sharjah, and Abu Dhabi",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/coffee-machine/coffee-machine-service-center/",
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
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Haris M" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "We're facing the issue with our franke coffee machine and we reached the correct service centre FAJ done a good job now the coffee machine is working fine thank you team FAJ and technician Que"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Janson Miller" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "I had my nine year Jura Z6 coffee machine repaired by Q. He was super friendly and knowledgeable and repaired my machine with no problem. I highly recommend FAJ."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Bassam SH" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "I am very satisfied with their prompt, efficient & cordial service from Technician Abdullah, as he was very professional, on time, responsive and reasonably priced. I would definitely recommend them & specially Mr Abdullah to my mother if needed. Thank you for a great job all together."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Gintarė Sutkauskaitė" },
          "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
          "reviewBody": "Technician Que was fantastic, fixed both of my coffee machines and been very thorough in explaining what preventative actions to take in the future, highly recommend their service!"
        }
      ]
    },
    {
      "@type": "VideoObject",
      "@id": "https://www.fajservices.ae/services/coffee-machine/coffee-machine-service-center/#video",
      "name": "COFFEE MACHINE - Complete SERVICE /CLEANING/REPAIRING | Commercial Coffee Machines | FAJ Dubai",
      "description": "Celebrate coffee moments with us! Experience the magic of perfectly brewed coffee, sip by sip. Our expert team in UAE is dedicated to ensuring your coffee machine is always at its best. Say goodbye to coffee machine troubles and hello to hassle-free mornings. Ready to enjoy your daily brew without worries? Contact us today for top-notch coffee machine repair and maintenance services",
      "thumbnailUrl": "https://img.youtube.com/vi/IjckdZLs_Qg/maxresdefault.jpg",
      "uploadDate": "2023-10-02T12:19:33Z",
      "duration": "PT1M26S",
      "embedUrl": "https://www.youtube.com/embed/IjckdZLs_Qg",
      "hasPart": [
        { "@type": "Clip", "name": "Introduction and Morning Coffee Ritual", "startOffset": 0, "endOffset": 30, "url": "https://www.youtube.com/watch?v=IjckdZLs_Qg&t=0s" },
        { "@type": "Clip", "name": "Common Coffee Machine Issues (Leakage & Error Messages)", "startOffset": 31, "endOffset": 50, "url": "https://www.youtube.com/watch?v=IjckdZLs_Qg&t=31s" },
        { "@type": "Clip", "name": "Professional Maintenance and Repair Services", "startOffset": 51, "endOffset": 59, "url": "https://www.youtube.com/watch?v=IjckdZLs_Qg&t=51s" },
        { "@type": "Clip", "name": "Descaling and Calibration for Quality Performance", "startOffset": 60, "endOffset": 86, "url": "https://www.youtube.com/watch?v=IjckdZLs_Qg&t=60s" }
      ],
      "publisher": {
        "@id": "https://www.fajservices.ae/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/coffee-machine/coffee-machine-service-center/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of coffee machines do you repair?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We service espresso machines, drip coffee makers, single-serve brewers, and other types of coffee appliances. Smeg, Black and Decker, Beko, Nobel, Espresso, Delonghi, Melitta, Electrolux, Breville, and Philips are among the popular brands we repair."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a coffee machine repair typically take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The time required for the repair is determined by the complexity of the problem. Minor repairs can often be done in a matter of hours, however, more serious repairs may take longer. Our specialists work hard to provide quick service while also ensuring that the repair is done correctly."
          }
        },
        {
          "@type": "Question",
          "name": "What if my coffee machine cannot be repaired?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In the rare situation that your coffee machine is beyond repair, our professionals will also offer you an honest assessment. So, we can also help you look into other possibilities, such as suggesting a replacement or advising you on how to buy a new coffee machine."
          }
        },
        {
          "@type": "Question",
          "name": "Is your coffee machine service center located in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we have a coffee machine servicing center in Dubai. Customers looking for coffee machine repair services in the region can simply find us."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide on-site coffee machine repair service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we do on-site coffee machine repair in Dubai. Our professionals may come to your site to diagnose and repair your coffee machine, making service at your door handy."
          }
        },
        {
          "@type": "Question",
          "name": "Can you service Delonghi coffee machines in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely! We specialize in repairing Delonghi coffee machines as a coffee machine service facility in Dubai."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/coffee-machine/coffee-machine-service-center/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fajservices.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.fajservices.ae/services/" },
        { "@type": "ListItem", "position": 3, "name": "Coffee Machine", "item": "https://www.fajservices.ae/services/coffee-machine/" },
        { "@type": "ListItem", "position": 4, "name": "Coffee Machine Service Center", "item": "https://www.fajservices.ae/services/coffee-machine/coffee-machine-service-center/" }
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

  const [data, setData] = useState([]);
  const [testimonial_data, setTestimonialData] = useState([]);
  const [brandsLogo_data, setBrandsLogoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
const coffeemachineServicesData = [
     {
      id: 1,
      image: getImageSrc('coffee-machine-service'),
 
      title: 'Coffee Machine Call-out',
      icon: getImageSrc('calloutcard'),
      price: 'AED100',
      arrow: getImageSrc('iconreadmore'),
      description: 'Just tell us about your faulty coffee machine, and we will provide a quote for repair / parts. Our technician will arrive at a time that is suitable for you.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=Home%20Appliances%20Call-Out',
      popupTitle: 'Coffee Machine Call-out  scope of work',
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
            'The same call-out fee applies for diagnosing the coffee machine.'
          ]
        },
        {
          paragraph: '**Excluded:** <br> Cost for any repair work, procurement cost, cost of any new parts and installation, if required.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED 100, callout fee applies based on the type, brand, capacity of the coffee machine unit, and location for each diagnosis.'
        },
        
      ]
    },

    {
      id: 2,
      image: getImageSrc('CoffeeMachinesImages/coffee-machines-repair-8'),
      warranty: '50- Days Warranty',
      title: 'Coffee Machine Cleaning',
      icon: getImageSrc('coffeemachinecleaning'),
      price: 'AED230',
      arrow: getImageSrc('iconreadmore'),
      description: 'Book reliable coffee machine cleaning professionals for your equipment. Our teams offer competitive pricing & limited-time availability across Dubai.',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=Basic%20Home%20Appliances%20Cleaning',
      popupTitle: 'Coffee Machine Cleaning',
      sections: [
        {
          heading: 'Depending on Capacity, Based on Type, Model, and Area',
          items: [
            'Coffee Maker',
            'Coffee Brewer',
            'Coffee Grinder',
            'Coffee Machine',
            'Vending Machine',
            'Espresso Machine',
            'Automatic Coffee Machine',
            'Commercial Coffee Machine',
          ]
        },
        {
          paragraph: '**Excluded:** <br> Cost for any repair work, procurement cost, cost of any new parts and installation, if required.'
        },
         {
          paragraph: '**Terms & Conditions:** <br> *Starting from AAED 230 fee applies based on the Capacity: Based on Type, Model, and Area for each unit.'
        },
      ]
    },

    {
      id: 3,
      image: getImageSrc('What-is-the-Importance-of-Coffee-Machine-Maintenance-in-Dubai'),

      title: 'Coffee Machine Installation',
      icon: getImageSrc('installationcard'),
      price: 'AEDXXX',
      arrow: getImageSrc('iconreadmore'),
      description: 'FAJ expert technicians will provide assistance to install coffee machines. Upgrade your kitchen with professional coffee machine installations!',
      buyLink: 'https://api.whatsapp.com/send?phone=+971507464712&text=Home%20Appliances%20Maintenance',
      popupTitle: 'Coffee Machine Installation',
      sections: [
        {
          heading: 'Depending on quantities, capacity, type, model, and area.',
          items: [
            'Coffee Maker Installation',
            'Coffee Brewer Installation',
            'Coffee Grinder Installation',
            'Coffee Machine Installation',
            'Vedning Machine Installation',
            'Automatic Coffee Machine Installation',
            'Commercial Coffee Machine Installation',
          ]
        },
        {
          paragraph: '**Excluded:** <br> Costs related to MEP, carpentry, gypsum ceilings, painting, repair work, procurement-related installation parts / materials, and installation as needed.'
        },
        {
          paragraph: '**Terms & Conditions:** <br> *Starting from AED XXX fee applies based on the Capacity: Based on Type, Model, and Area for each unit.'
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse, brandsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/coffeemachinesserviceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/CommercialCoffeeMAchineReapairTestimonials.json`),
          fetch(`${import.meta.env.BASE_URL}data/coffeemachineServicebrand.json`)
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
            <h1 className="cs_fs_30">Trusted Coffee Machine Service Center and Repair Near You in Dubai, Sharjah & Abu Dhabi, UAE</h1>
            <p>Since 2010, FAJ has been providing reliable and trusted expertise in installation, coffee machine service and maintenance, specializing in coffee machine repair in Dubai, serving home coffee machine service, office coffee machine repair, restaurant coffee machine maintenance, and cafes.<br />We work with a variety of coffee equipment, including tea &amp; coffee vending machine repair, espresso machine maintenance, coffee grinders servicing, professional coffee machine, and automatic coffee machine error fix.&nbsp;<br />Our dedicated team understands the importance of functioning coffee machine servicing, and we prioritise timely maintenance.&nbsp;<br />As specialists in espresso machines, we are committed to managing and maintaining your equipment throughout its lifespan, ensuring that you enjoy reliable, great-tasting coffee every day.</p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        <PriceCardHomeCat  services={coffeemachineServicesData}/>
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left" style={{ fontSize: "24px" }} >Coffee Machine Repair and Service</h2>

                <p className="mb-2">When your coffee machine breaks down or stops working, it can disrupt your daily   routine.
                  <br />
                  That's where our expert technician comes in. FAJ expert offers fast and efficient services near you to restore optimal performance. We handle issues like coffee machine descaling, cleaning service, water leakage, Steam wand, noise, poor coffee quality, and grinding problems. Let us help get your coffee machine back on track.
                </p>
                <h2 className="cs_fs_24 mb-1 pt-1 mt-0 text-align-left">
                  Coffee Machine Servicing and Maintenance Contract
                </h2>
                <p className="mb-0">
                  Whatever you need, whenever you need it. A scheduled AMC service contract for your coffee machine, which includes cleaning and descaling, is essential for smooth operation throughout the year.
                  <br />
                  Regular maintenance is key whether your coffee machine is for home, commercial use, an office, café shop, or a restaurant—be it an espresso machine, automatic coffee machine, coffee maker, or coffee grinder. We are always here to help make life easier for you.

                </p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/IjckdZLs_Qg"
                  title="FAJ Videos"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

              </div>
            </div>

            <div className="appointment-col border-small-top pt-3">
              <p>
                If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability.
                <br />
                Timing: Mon-Sat 8:00 AM to 6:00 PM - Sunday 12:00 PM to 6:00 PM. To book an appointment, you can call or reach us on WhatsApp at +971 50 746 4712.
              </p>

              <p className="appointment-col border-small-top pt-3" >The <a href="https://www.google.com/maps/dir//Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/@25.1105958,55.1452595,22158m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94!2m2!1d55.227661!2d25.1106186?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" > FAJ workshop</a> is conveniently located near both Al Khail Road and Sheikh Zayed Road. When you drop off your coffee machine at the workshop, you will receive a <strong>discount</strong> on the technical inspection fee and other services.
              </p>

              <div id="get-quote" className=" mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3">
                  <WhatsappIconButton />
                  <CallNowButton />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why Coffee Machine Maintenance Important in Dubai?
            </h2>
            <p>
              Regular maintenance of coffee machine is essential for business. It ensures the quality of coffee, extends the machine's lifespan, and reduces repair costs.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('coffee-machine-service')} alt="Post Image" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Preventing Breakdowns: </strong> Routine maintenance, including cleaning and descaling, reduces costly repairs and downtime, impacting revenue. </li>
                  <li> <strong> Extending Lifespan: </strong> Regular maintenance prolongs machine life, saving on replacement costs. </li>
                  <li> <strong> Lowering Maintenance Costs: </strong> Addressing minor issues early can prevent larger, more expensive repairs. </li>
                  <li> <strong> Maintaining Efficiency: </strong> Consistent upkeep ensures optimal performance and reduces energy consumption. </li>
                  <li> <strong> Professional Service for Commercial Use: </strong> Commercial machines need specialized maintenance for safety and performance </li>
                  <li> <strong> Importance in Commercial Kitchens: </strong> In the UAE, reliable maintenance of coffee machines is crucial for beverage service. </li>
                  <li> <strong> Home Use: </strong> Regular maintenance improves coffee machine quality and lifespan. Professional servicing benefits home and business users in Dubai.  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems of Coffee Machines   </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Water Leaking </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Coffee Machine / espresso machine water leakage issues can be caused by worn-out seals, loose connections, or cracks in the water reservoir or tubing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Machine Descaling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Regular coffee machine descaling performed with a descaling solution can remove mineral buildup, a common cause of clogs and leaks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Machine Cleaning </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Regular coffee machine cleaning service of the filter basket, coffee grinder, and other parts can prevent clogs and improve the coffee taste.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Bad Coffee Taste</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0"> Poor quality beans, improper brewing parameters (such as grind size and ratio), or case machine's internal components can result in bad-tasting coffee.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Loud or Unusual Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      Noise from the coffee machine, Low water levels, the espresso machine being placed on a hard surface, or heating issues can lead to unexpected noises.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Brewing Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Weak Coffee is often a common problem, typically due to improper grind size, over-extraction, under-extraction, or using stale espresso machine coffee beans.
                    </p>

                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Slow Coffee Flow</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      This issue of coffee machine or espresso or automatic coffee machine can stem from clogs, incorrect grind size, or problems with the coffee machine's pump.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Professional Help</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      For more complex issues or if you are unable to troubleshoot the problem yourself, contact FAJ qualified coffee machine repair technician for maintenance.
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

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR COFFEE MACHINES AND ESPRESSO MACHINES  </h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                                <img className="bordered-img w-100" src={getImageSrc('Coffee-machine-servicing-title-image')} alt="Post Image" />
              </div>

              <div className="col-xl-6">
                <p className='mb-0'>We specialise in all types and brands of Coffee Machines, including espresso machine </p>
                <p className='mb-0'><strong>Our services include: </strong></p>
                <ul className="mb-0">
                  <li> <strong>  Installation: </strong> Expert installation of various types and brands of coffee machines, ensuring optimal performance and efficiency.</li>

                  <li> <strong> Diagnostics: </strong> Thorough fault finding to diagnose issues effectively. We provide eligibility assessments and detailed quotations to address any concerns with your system. </li>

                  <li> <strong> Repair Service: </strong> Efficient repair services for all coffee machine components, ensuring quick resolution of any issues, such as leaks, electrical failures, and system malfunctions.</li>

                  <li> <strong> Annual Maintenance Contract: </strong> This contract outlines the terms and services covered for the annual maintenance of the espresso machine. </li>
                  <p className="mb-0">
                    Regular maintenance is essential for optimal performance, efficiency, and longevity of your coffee machine.
                  </p>
                </ul>
              </div>

            </div>
          </div>
        </section >

        <section className="section cs_py_30 appliances-benifit-sec bg-dark-blue">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits Of Coffee Machines Service Dubai
              </h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h3>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
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
                      <p className="small">Regular maintenance helps your coffee machines run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                      <p className="small">Energy efficient coffee machines translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Saving Money on Repair</h3>
                      <p className="small">Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                   <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/extending')} className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Coffee Machine Lifespan</h3>
                      <p className="small">Proper care and timely servicing can significantly increase life of your coffee machines, delaying the need for replacements.</p>

                    </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Peace of Mind
                      </h3>
                      <p className="small">Knowing your coffee machines are in top condition gives you confidence and removes the stress of unexpected failures.</p>
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
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your coffee machine runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your coffee machine repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('Coffee-Machine-Repair-&-Maintenance')} alt="FAJ icon service" />
              </div>

              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We are experts in coffee machine repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two coffee machines at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our skilled coffee machine technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img src={getImageSrc('Coffee-Machine-Repair-&-Maintenance')} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray custom-css-box">
          <div className="container">
            <h2 className="text-center">CHOOSE  DOMESTIC OR PROFESSIONAL COFFEE MACHINE REPAIR SERVICE</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Ascaso Coffee Machine Repair </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Ascaso espresso coffee machine maintenance and cleaning services in Dubai and Sharjah.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Lelit Coffee Machine Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Expert Lelit coffee machines repair, maintenance, and descaling are available near you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Conti Coffee Machine Repair </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Get Conti espresso & coffee machine descaling and cleaning services near your location.</p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Jura Coffee Machine Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We offer Jura coffee machine and espresso descaling and maintenance services in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dr Coffee Machine Repairs</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      You can find professional Dr Coffee machine maintenance and descaling services near you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">La Marzocco Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Premier maintenance and cleaning for LA Marzocco espresso machine, including AMC services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">La Pavoni Espresso Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We offer espresso machine repair, including cleaning services, to keep machine in top shape.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">ECM Coffee Machine Servicing</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Contact us for ECM coffee machine maintenance, repair, including descaling service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 custom-css-box">
          <div className="container">
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">FRANKE Espresso Machine Fix</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      You can trust FAJ for the best Franke coffee machine repair, servicing, and descaling in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Gaggia Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Find nearby Gaggia espresso machine maintenance and cleaning service in Dubai
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Bosch Coffee Machine Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Fast Bosch coffee machine service and Bosch coffee maker repair near your location.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Delonghi Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      DeLonghi coffee machine service & DeLonghi espresso machine maintenance and cleaning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Breville Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Our team specializes in Breville coffee machine maintenance and cleaning service in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Sage Coffee Machine Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Expert Sage coffee machine repair and maintenance, with descaling in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Melitta Coffee Machine Servicing</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We provide Melitta coffee maker repair in Dubai, offering sameday fix coffee machine.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Farenheit Epsilon Coffee Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We offer reliable Farenheit Epsilon coffee machine repairing and servicing in your area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray custom-css-box">
          <div className="container">
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Bezzera Espresso Machine Repairs</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We are Dubai&apos;s leading specialists in Bezzera coffee machine repair, offering same-day service.
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Built-in Teka Coffee Machine Fix</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Emergency coffee machine repairs and servicing - Call now for a no-obligation quote!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Rocket Espresso Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Best Rocket Espresso Machine maintenance service at affordable prices - specialists you can trust.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Astoria Loft Espresso Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We provide trained Astoria Loft coffee machine repair and maintenance services in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Magister Espresso Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The technician helps with Magister espresso machine maintenance service near your location.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Orchestrale Espresso Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We provide reliable repair, cleaning, and descaling services for coffee machines and espresso machines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Illy Saeco Royal Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      FAJ services and repair espresso machine and offers annual maintenance contracts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Cafematic Automatic Coffee Machine
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Automatic coffee machine and espresso machine AMC service in Dubai, UAE.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 custom-css-box">
          <div className="container">
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Isomac Coffee Machine Repair
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you need Isomac coffee machine repair, coffee machine service is available near you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Siemens Coffee Machine Cleaning
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Coverage of Siemens espresso machine servicing and repair, as well as coffee maker.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Rancilio Volumetric Espresso Machine
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We specialize in reliable volumetric espresso machine maintenance and repair services in your area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Zulay Magia Coffee Machine Service
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We specialise in coffee machine repair and servicing in Dubai, and coffee equipment maintenance.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Nuova Simonelli Appia Life</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Book now Nuova Simonelli espresso machine maintenance service and descaling near you.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_14 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Victoria Arduino Espresso Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      FAJ provides maintenance and cleaning services for Victoria Arduino coffee machines in Dubai.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Slayer Espresso Machine Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Contact us for espresso machine descaling, coffee machine repair, and PPM service agreement.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Profitec Ride Espresso Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We offer Profitec Ride espresso machine servicing, repair, and AMC services in Dubai.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray custom-css-box">
          <div className="container">
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Faema Automatic Coffee Machine

                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      FAJ provides expert repair and maintenance services for Faema automatic coffee machines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">CAYE Automatic Coffee Machine

                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you need to book a repair service for your Gaye automatic espresso machine, please contact us today
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Lavazza Office Vending Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Expert Lavazza coffee machine service and repair. Coffee vending machine maintenance in Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">NECTA Krea Espresso Machine </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Book a coffee machine technician now for the coffee machine repair and cleaning service.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">FRACINO Romano Espresso Machine </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Our skilled technicians offer Fracino Romano coffee machine repair and AMC services in Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Smeg Coffee Machine Service

                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Schedule your Smeg coffee machine repair, cleaning, and maintenance today.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Jetinno Coffee Machine Repair

                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Get express services for Jentinno coffee machines, with descaling and maintenance in Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Beko Coffee Machine Maintenance

                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Dubai&apos;s number one Beko coffee machine repair, cleaning service, and maintenance service contract.
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
        <BeforeAfter
          title="Recent Completed Repair & Service"
          subTitle="Before & after"
          bgImg={`${CDN}/background-image-2/public`}
          beforeImg={`${CDN}/coffee-machine-before-image/public`}
          afterTitle="After"
          afterImg={`${CDN}/coffee-machine-after-image/public`}
          beforeTitle="Before"
        />

        <section className="section cs_py_30 gallery-section bg-light-gray">
          <div className="container">
            <h3 className="mb-4 text-center">Gallery</h3>
            <div className="row g-4">

              <div className="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('CoffeeMachinesImages/coffee-machines-repair-1')}
                  className="img-fluid rounded shadow mb-4"
                  alt="Coffee Machine Repair in Dubai"
                  loading="lazy"
                />

                <img
                  src={getImageSrc('CoffeeMachinesImages/coffee-machine-repair-gallery')}
                  className="img-fluid rounded shadow"
                  alt="Coffee Machine Repair"
                  loading="lazy"
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('CoffeeMachinesImages/coffee-machine-repair-service-gallery')}
                  className="img-fluid rounded shadow mb-4"
                  alt="Coffee Machine Repair Service"
                  loading="lazy"
                />

                <img
                  src={getImageSrc('CoffeeMachinesImages/coffee-machines-repair-7')}
                  className="img-fluid rounded shadow"
                  alt="Commercial Coffee Machine Service"
                  loading="lazy"
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('CoffeeMachinesImages/coffee-machines-repair-8')}
                  className="img-fluid rounded shadow mb-4"
                  alt="Espresso Machine Maintenance"
                  loading="lazy"
                />

                <img
                  src={getImageSrc('CoffeeMachinesImages/coffee-machine-repairs-service')}
                  className="img-fluid rounded shadow"
                  alt="Coffee Machine Repairs Service"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

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

        <MaintenanceContract />

        {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg={`${CDN}/testimonialbg/public`}
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

export default CoffeeMachineServiceCenterInDubaiDetail;