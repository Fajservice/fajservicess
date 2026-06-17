import { useEffect, useRef, useState } from "react";
import { Link, parsePath } from "react-router-dom";
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
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";
import PriceCardHomeCat from '../../../Services/homeappliances/PriceCardHomeappCat.jsx';
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
const KitchenaidRefrigeratorRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(titleSeo || "Best KitchenAid Home Appliances Repair and Fridge Service Dubai");
  const metadescription = String(description || "Expert Kitchenaid home appliances repair, including washing machine, dishwasher, oven, and cooker service centre near you in Dubai. Book now");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/The-Most-Common-Reasons-for-Appliance-Breakdowns/public");
  const metaKeyword = String(Keyword || "Kitchenaid Refrigerator Repair, Kitchenaid Fridge Repair, Kitchenaid Freezer Maintenance, Kitchenaid Washing Machine Repair, Kitchenaid Dishwasher Repair, Kitchenaid Cooker Oven Repairs, KitchenAid Appliance Service Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/brands/kitchenaid/").replace(/\/?$/, '/');

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
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "KitchenAid Home Appliances Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/brands/kitchenaid/",
      "telephone": "+971 4 330 0002",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "3500",
        "bestRating": "5"
      },
      "areaServed": [
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Abu Dhabi" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "KitchenAid Home Appliance Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "KitchenAid Appliance Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "KitchenAid Refrigerator Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "KitchenAid Dishwasher Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "KitchenAid Oven Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "KitchenAid Washing Machine Repair" } }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Adil M." },
          "reviewBody": "My KitchenAid refrigerator stopped cooling properly. FAJ technician diagnosed the compressor issue and repaired it efficiently. Excellent service.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Noura S." },
          "reviewBody": "Very professional KitchenAid dishwasher repair. The technician fixed the drainage problem and tested everything before leaving.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Kamran A." },
          "reviewBody": "KitchenAid oven was not heating evenly. FAJ team replaced the faulty element and now it works perfectly.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Hiba R." },
          "reviewBody": "Quick response for my KitchenAid washing machine repair. Technician was punctual, knowledgeable, and completed the job neatly.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Saeed K." },
          "reviewBody": "Reliable KitchenAid appliance repair in Dubai. Professional team and fair pricing. Would definitely recommend.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.fajservices.ae/services/home-appliances-repair/brands/kitchenaid/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fajservices.ae/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.fajservices.ae/services/" },
        { "@type": "ListItem", "position": 3, "name": "Home Appliances Repair", "item": "https://www.fajservices.ae/services/home-appliances-repair/" },
        { "@type": "ListItem", "position": 4, "name": "Brands", "item": "https://www.fajservices.ae/services/home-appliances-repair/brands/" },
        { "@type": "ListItem", "position": 5, "name": "KitchenAid", "item": "https://www.fajservices.ae/services/home-appliances-repair/brands/kitchenaid/" }
      ]
    }
  ]
}

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
            <h1 className="cs_fs_30">Premium Quality KitchenAid Home Appliances Repair Center and Service</h1>
            <p>
              Having trouble finding a reliable local technician for your Kitchenaid kitchen appliances?
              At <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7">FAJ Technical Services L.L.C</a>, we've been providing dependable and cost-effective appliance repair services since 2010. Our extensive network of experienced, thoroughly vetted technicians ensures that, whenever possible, we send a specialist who knows your specific Kitchenaid appliance inside and out.

            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
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
                <h2 className="cs_fs_24 mb-1">Kitchenaid Appliance Repair and Service </h2>

                <p className="mb-2">
                  Need reliable repair services for your Kitchenaid appliances? FAJ is here to help with quick and affordable solutions.
                  Whether it’s a built-in Kitchenaid washing machine that won’t drain, a fridge that isn’t cooling, an oven that won’t heat, or a dishwasher that refuses to start,  our skilled technicians in Dubai and Sharjah are ready to assist. As your trusted local service provider, we ensure prompt response times to restore your appliances efficiently.
                </p>

                <h2 className="cs_fs_20 mb-1 pt-1 mt-0 text-align-left" style={{ fontSize: "20px" }}>Fast and Reliable Kitchenaid Appliances Service</h2>
                <p className="mb-2">
                  At FAJ Technical Services L.L.C, we understand that appliance breakdowns, especially with Kitchenaid products, rarely happen at a convenient time. That’s why our trained Kitchenaid technicians are ready to provide reliable <a href="https://www.fajservices.ae/services/home-appliances-repair/appliances-repair-service/">appliance repair service</a> when you need it most. With our help, you can avoid the high cost of replacement and get your Kitchenaid appliance running smoothly again in no time.
                </p>

              </div>

              <div className="col-md-6 ">

                <img className="bordered-img w-100" src={getImageSrc('The-Most-Common-Reasons-for-Appliance-Breakdowns')}  alt="Kitchenaid Washing Machine Repair" />
              </div>
            </div>
            <AppliancesAppointmentCol></AppliancesAppointmentCol>
          </div>
        </section>

        {/* Why is Appliance Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30">
          <div className="container">

            <h3 className="cs_fs_28">Why is Kitchenaid Appliance Maintenance Service Important in Dubai?</h3>
            <p className="mb-0">
              Our extensive repair services include diagnosis, repairs, installations, and maintenance. This positions us as the leading provider of Kitchenaid appliance maintenance in Dubai.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('dishwasher-repair-service')}  alt="Kitchenaid Washing Machine Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li><strong>  Kitchenaid Washing Machine Repair in Dubai: </strong> Regular maintenance can prolong your Kitchenaid washing machine's lifespan, saving you money. </li>
                  <li><strong>  Kitchenaid Fridge Repair in Dubai: </strong> We are confident that we can quickly get your Kitchenaid refrigerator up and running again. </li>
                  <li><strong>  Kitchenaid Stove / Oven Repair in Dubai: </strong> Catching minor issues early can help prevent them from escalating into expensive repairs. </li>
                  <li><strong>  Kitchenaid Dishwasher Repair in Dubai: </strong> Regular maintenance helps minimise potential problems and improves overall performance. </li>
                  <li><strong>  Early Problem Detection: </strong> Regular inspections can help identify potential problems before they escalate into serious issues. </li>
                  <li><strong>  Cost-Effective: </strong> Maintaining appliances is more cost-effective than replacing or making major repairs, ensuring safety and efficiency in Dubai. </li>
                  <li><strong>  Energy Efficiency: </strong> Regular maintenance of your Kitchenaid appliances can enhance efficiency and save you money. </li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Most Common Problems with Home Appliances */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">The Most Common Problems with Kitchenaid Appliances </h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Kitchenaid Refrigerator</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Kitchenaid refrigerator may have cooling problems, usually related to the defrost, motor, compressor, or PCB. Let's reach out to FAJ for potential solutions.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Kitchenaid Dishwasher</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Common issues with Kitchenaid dishwasher include poor cleaning and drying, water leaks, drainage issues, and a few electrical or PCB malfunctions.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Kitchenaid Washing Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Kitchenaid washing machines include problems with drainage, leaks, faulty PCBs, and issues related to the belt, door switch, or drum spinning.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Kitchenaid Tumble Dryer</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Kitchenaid dryer may stop spinning and make unusual noises without properly drying clothes, often due to a faulty heating element or control board.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Kitchenaid Cooker / Stove</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Common issues with Kitchenaid stove include uneven heating and flame problems, such as a broken burner element, a faulty switch, or an electrical gas malfunction.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Kitchenaid Oven</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Kitchenaid ovens often experience issues such as improper heating, unignited burners, ignition problems in gas models, and faulty knobs or controls.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Kitchenaid Freezer</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Common issues with Kitchenaid freezer include water leaks, insufficient ice production, malfunctioning ice makers, and decreased cooling efficiency.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Coffee Machine Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Water flow in coffee makers, whether drip or single-serve, can often become unusually slow or stop entirely due to several possible reasons.</p>
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

        {/* HERE ARE THE SERVICES WE OFFER FOR HOME APPLIANCES */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR Kitchenaid APPLIANCES</h2>

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
                <p className='mb-0'>We specialize in all types of Kitchenaid appliances, including built-in models.</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Kitchenaid Appliance Installation: </strong> Expert installation of various types and brands of Kitchenaid home appliances to ensure their optimal performance and efficiency. </li>
                  <li> <strong> Kitchenaid Appliance Diagnostics: </strong> We offer expert diagnostics and eligibility assessments, along with detailed quotes for issues related to Kitchenaid appliances. </li>
                  <li> <strong> Kitchenaid Appliance Repair Service: </strong> We offer fast and effective repair service for Kitchenaid appliances, quickly addressing leaks, electrical issues, and malfunctions. Contact us for details about specific services or any questions you may have! </li>
                  <li> <strong> Kitchenaid Appliance Annual Maintenance Contract: </strong> This contract outlines the terms for the annual maintenance of your Kitchenaid appliances, ensuring they function smoothly throughout the year. Enjoy peace of mind with professional care. </li>
                  <p className="mb-0">
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for keeping your Kitchenaid home appliances operating efficiently, performing well, and lasting longer.
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
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of Kitchenaid Appliances Service Dubai</h2>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Ensuring Safety</h3>
                      <p className="small">
                        Regular inspections are essential for preventing electrical faults, gas leaks, and other hazards, which ensures the safety of your premises.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16"> Optimal Performance </h3>
                      <p className="small">
                        Regular maintenance helps your Kitchenaid appliances run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                      <p className="small">
                        Energy-efficient Kitchenaid appliances help you save on utility bills, allowing you to keep more money in your pocket each month.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Saving Money on Repair</h3>
                      <p className="small">
                        Preventive services help identify issues early, reducing breakdowns and repairs while enhancing the lifespan of Kitchenaid appliances.
                      </p>
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
                      <p className="small">
                        Regular maintenance and prompt servicing can significantly prolong the lifespan of your Kitchenaid appliances, delaying the need for replacements.
                      </p>
                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div>
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')}  alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Peace of Mind</h3>
                      <p className="small">
                        Keeping your Kitchenaid appliances in good working order enhances your confidence and minimizes the stress of unexpected breakdowns.
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
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>You can count on quick service! Our same-day repairs and next-day service visits ensure your needs are met promptly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')}  alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>With a <Link to="/services/home-appliances-repair/appliances-amc-service/"> maintenance contract</Link>,  you get year-round service to keep your Kitchenaid appliance running smoothly and reliably.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Schedule a day and time for your Kitchenaid appliance repair in Dubai or Sharjah, allowing a 3-4 hour window for the technician's arrival.</p>
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
                    <h3>We Are Experts</h3>
                    <p>We specialize in Kitchenaid appliance repair, which is why major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation up to two Kitchenaid appliances at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our skilled technicians specialise in Kitchenaid appliances and provide outstanding service across major appliances.</p>
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
              appliancebrand="Kitchenaid Appliance"
              feeRange="ranging from AED 157 to 280"
            />
            <h3 className="cs_fs_28">We specialize in Kitchenaid appliance services of the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"> <b> Kitchenaid Washing Machine Repair Near You in Dubai: </b> FAJ is here to support you when issues arise. We understand that your Kitchenaid washing machine is vital for daily life, ensuring your laundry stays clean. Contact us for the best Kitchenaid <a href="https://www.fajservices.ae/services/home-appliances-repair/washing-machine-repair-service-dubai/">washing machine service center</a> near me in Dubai. </p>
                <p className="mb-0"> <b> Kitchenaid Fridge Repair Near You in Dubai: </b> If you are having problems with your Kitchenaid refrigerator, please contact the FAJ team for same-day Kitchenaid <a href="https://www.fajservices.ae/services/home-appliances-repair/refrigerator-repair-service/">refrigerator repair service</a> in Dubai. </p>
                <p className="mb-0"> <b> Kitchenaid Freezer Repair Near You in Dubai: </b> Our team of qualified technicians is available for Kitchenaid freezer repair and service in Dubai and Sharjah. </p>
                <p className="mb-0"> <b> Kitchenaid Home Appliance Service Center Near You: </b> If you are seeking the best repair service Kitchenaid washer dryer in Dubai, FAJ is an excellent choice. They are well-known for their exceptional service in repairing Kitchenaid fridge freezer and are recognized as the leading provider for repairs of fix Kitchenaid cooking range, stove fixes, induction cooktops, repair Kitchenaid washing machines, and Kitchenaid refrigerator in the area. </p>
                <p className="mb-0"> <b> Kitchenaid Dishwasher Repair Near You in Dubai: </b> If you're experiencing issues with your Kitchenaid dishwasher, it might be time for some repair or maintenance. For reliable and top-notch service, consider FAJ's Kitchenaid service center in Dubai, which specializes in integrated Kitchenaid dishwasher repairs. They offer expert assistance to ensure your appliance functions optimally. </p>
                <p className="mb-0"> <b> Kitchenaid Cooking Range and Oven Repair Near You: </b> We provide expert repair service Kitchenaid cooking range and ovens in Dubai. Our skilled technicians are experienced in diagnosing and fixing issues with Kitchenaid refrigerator repair, fix Kitchenaid dishwasher, Kitchenaid dryer fixer, and more. </p>
                <p className="mb-0"> <b> Kitchenaid Dryer Repair and Service Near You: </b> Is your Kitchenaid dryer not working properly? Looking for a reliable Kitchenaid dryer service in Dubai? Contact us for same-day assistance! </p>
                <p className="mb-0"> <b> Kitchenaid Oven Repair Near Me Dubai: </b> If you're searching for the best company for Kitchenaid <a href="https://www.fajservices.ae/services/home-appliances-repair/oven-repair-service/">oven repair</a> in Dubai, FAJ is an excellent choice. They are renowned for providing exceptional service specifically for Kitchenaid ovens. FAJ is recognized as the leading service center for Kitchenaid oven repair and maintenance in Dubai. </p>

                <h4 className="mt-3">We offer service for Kitchenaid appliances in the Dubai area</h4>
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
              <div className="container d-flex justify-content-center align-items-center gap-3 flex-wrap">
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

export default KitchenaidRefrigeratorRepairDetail;
