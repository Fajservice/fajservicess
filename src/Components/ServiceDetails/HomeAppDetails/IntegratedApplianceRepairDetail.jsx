import { useEffect, useRef, useState, useCallback, Suspense } from "react";
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
import PriceCardHomeCat from '../../Services/homeappliances/PriceCardHomeappCat';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const IntegratedApplianceRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  const metaTitle = String(
    titleSeo || "Built in Appliances Repair and Service Center Near You, Dubai"
  );

  const metaDescription = String(
    description || "FAJ provide the best built-in appliance repair in Dubai, with expert technicians of the integrated home appliances service center and maintenance contract"
  );

  const metaAuthor = String(
    Author || "FAJ Technical Services L.L.C"
  );

  const metaKeyword = String(
    Keyword || "Built-in appliances repair Dubai, Built-in refrigerator service, Built-in washing machine repair, Built-in dishwasher fix, Built-in stove cooktop oven service, Built-in appliance repair near me"
  );

  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/built-in-appliances-repair-service/"
  );

  const metaImage = String(
    Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/oven-repair-service.avif/public"
  );
  const schema={
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Built In Home Appliances Repair and Maintenance Service in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/home-appliances-repair/built-in-appliances-repair-service/",
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
        "name": "Built-In Appliance Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Appliance Repair",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cooking Range Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Oven Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fridge Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dishwasher Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coffee Machine Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Washing Machine Repair" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Annual Maintenance Contracts (AMC Dubai)" } }
            ]
          }
        ]
      },
        "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Anna Wolf" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Very happy with my air conditioning system maintenance, very professional and friendly guys Muhammad Azeem and Adnan, best price offered, not a rip off company, will recommend it to everyone..."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Malik DuBAi" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "...amazingly quick and efficient service provided by Masoom and Adnan, a delightful experience."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Muhammad Haseeb" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Technician was prompt, polite and remarkably efficient, offering great value."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Virendra Lal" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Praised Shakeer for repairing a device and thanked Neha for quick assistance."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Hanzla Hunny" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Quick and efficient emergency AC repair."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Usman Ali" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Abdullah from FAJ did a great job fixing our fridge and washing machine here in Arabian Ranches. He came on time, was super friendly, and got everything working again without any hassle. Really professional but also easy to deal with. If you ever need appliance repairs around the Ranches, I’d definitely recommend calling him!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ghasif Sajid" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "I had an excellent experience with FAJ! They came to repair my washing machine and also serviced my AC in The Greens. ABDULLAH was professional, punctual, and explained everything clearly. The washing machine was fixed quickly, and my AC is now running smoothly and cooling much better. Really impressed with their efficiency and customer service. Highly recommend FAJ for reliable home appliance repairs and AC servicing!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Maria Malik" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "I highly recommend this place if your home appliances is broken. I gave them to fix a robot vacuum cleaner (roborock s 5 max). First they did diagnostics, identified the problem. The repair was done flawlessly, moreover, they returned the vacuum cleaner to me in a clean condition, for which I did not pay extra. I really liked the support service, the guys are very nice and answer all questions immediately. Thanks again."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Narges" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Mr.Abdullah and Tarin come to fix our built in dishwasher and they were very helpful on the matter. Fixed our issue within 10 mins and also with a reasonable price!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Dunja Lazovic" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Fast and reliable services. Our washing machine broke down, the team came same day, on day 2 we got the quote for the repair, approved it, and on day 3 the machine was delivered back to us. Thank you to Mr. Abdullah for fast reinstallation."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Syed Shah" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "I was really impressed with their quick response time and the professionalism of their technicians, we hired them to repair and fix our Commercial Coffee machine and coffee Grinder in Dubai Marina. They know exactly what they're doing and get the job done efficiently. If you're looking for top-notch AC repair services in Dubai, this team is definitely one of the best. Highly recommended!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Farah B" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Abdullah did a great job fixing our fridge. Very professional services."
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "Appliances Repair in Dubai | Appliances Maintenance Service in Dubai | FAJ Technical Services LLC",
      "description": "Count on FAJ Technical Services LLC for expert Built-In Appliance Repair in Dubai. With our skilled technicians and dedication to quality, we'll have your appliances running smoothly in no time. Trust us to keep your built-in appliances performing at their best",
      "thumbnailUrl": "https://img.youtube.com/vi/9T9CIvMIsfw/maxresdefault.jpg",
      "uploadDate": "2024-01-29T11:59:20Z",
      "duration": "PT1M50S",
      "contentUrl": "https://www.youtube.com/watch?v=9T9CIvMIsfw",
      "hasPart": [
        {
          "@type": "Clip",
          "name": "Kitchen and Home Appliance Usage",
          "startOffset": 0,
          "endOffset": 45,
          "url": "https://www.youtube.com/watch?v=9T9CIvMIsfw&t=0s"
        },
        {
          "@type": "Clip",
          "name": "Common Cooking Range and Oven Issues",
          "startOffset": 46,
          "endOffset": 59,
          "url": "https://www.youtube.com/watch?v=9T9CIvMIsfw&t=46s"
        },
        {
          "@type": "Clip",
          "name": "Fridge and Dishwasher Troubleshooting",
          "startOffset": 60,
          "endOffset": 107,
          "url": "https://www.youtube.com/watch?v=9T9CIvMIsfw&t=60s"
        },
        {
          "@type": "Clip",
          "name": "Coffee Machine and Washing Machine Repair",
          "startOffset": 108,
          "endOffset": 119,
          "url": "https://www.youtube.com/watch?v=9T9CIvMIsfw&t=108s"
        },
        {
          "@type": "Clip",
          "name": "FAJ Repair and Maintenance Services",
          "startOffset": 120,
          "endOffset": 139,
          "url": "https://www.youtube.com/watch?v=9T9CIvMIsfw&t=120s"
        },
        {
          "@type": "Clip",
          "name": "Annual Maintenance Contracts (AMC) Dubai",
          "startOffset": 140,
          "endOffset": 150,
          "url": "https://www.youtube.com/watch?v=9T9CIvMIsfw&t=140s"
        }
      ],
      "publisher": {
        "@type": "Organization",
        "name": "FAJ Technical Services L.L.C",
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
          "name": "Can integrated appliances be used freestanding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Freestanding kitchen appliances are not attached to walls or floors, allowing for easy movement."
          }
        },
        {
          "@type": "Question",
          "name": "Can you put integrated appliances next to each other?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To ensure proper support for the worktop above an integrated appliance, it is essential to have two units on either side of it. If you have more than two integrated appliances placed next to each other, we recommend adding an end panel to provide additional support for the worktop above."
          }
        },
        {
          "@type": "Question",
          "name": "Are integrated appliances more expensive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, integrated appliances are usually more expensive than freestanding models, although this can vary based on the specific make and model you select."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best material for appliances?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stainless steel appliances are popular in kitchens due to their timeless and versatile style, which complements both modern and traditional designs. Their neutral color and sleek appearance can blend seamlessly with almost any color scheme. Additionally, the durability of stainless steel makes it perfect for heavy usage, as it is resistant to rust, heat, and damage."
          }
        },
        {
          "@type": "Question",
          "name": "Which appliance costs most in electricity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The largest electricity consumers in an average household are heating and cooling appliances. Central air conditioners and heaters use significant amounts of energy to maintain the desired temperature in your home."
          }
        },
        {
          "@type": "Question",
          "name": "What are built-in appliances called?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Built-in and integrated appliances are similar as they are fixed directly into cabinetry that is designed to meet the exact specifications of the appliance; however, integrated appliances provide a more seamless look."
          }
        },
        {
          "@type": "Question",
          "name": "How many watts is a refrigerator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The average home refrigerator typically uses between 350 and 780 watts. Some models are more energy-efficient than others, so it's a good idea to check the label on yours or look it up online to determine its power consumption."
          }
        },
        {
          "@type": "Question",
          "name": "Can a normal fridge be integrated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typical refrigerators aren’t meant for built-in installation, but with some creativity, you can modify them. Ensuring proper airflow is crucial to prevent overheating, so you may need to create vents or gaps in the cabinetry."
          }
        },
        {
          "@type": "Question",
          "name": "Are all integrated appliances the same size?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The answer is both yes and no. All built-in ovens are designed to fit into standard housing units, which are typically 60 cm wide. However, some single oven housing units can be 90 cm wide. As a result, most ovens have similar widths and depths."
          }
        },
        {
          "@type": "Question",
          "name": "What does appliance installation include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your appliances will be installed in place, levelled, and connected to the appropriate power source. We will also conduct tests to ensure they are ready for use. Installation includes connecting the new appliance to water, electricity, and gas."
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
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/IntegratedAppliancesRepairServiceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/IntegratedAppliancesRepairServiceTestimonials.json`),
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
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={metaURL} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:image" content={metaImage} />
          <meta property="og:image:alt" content="Built-in Appliances Repair Dubai" />
          <meta property="og:site_name" content="FAJ Technical Services L.L.C" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={metaImage} />
          <meta name="twitter:image:alt" content="Built-in Appliances Repair Dubai" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="language" content="English" />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Top Built In Home Appliances Repair and Service Center Near You in Dubai</h1>
            <p>
              FAJ Technical Services L.L.C has been providing reliable and quality services, including installation, repair, and maintenance of built-in appliances, since 2010. We have completed projects in Dubai, Sharjah, and Abu Dhabi.
              <br />
              Home appliances are essential in our daily lives, but regular use can lead to issues that require professional assistance.
              As a trusted provider of built-in appliance repair service, we are committed to delivering high-quality and prompt support to residents in the area.
              Our team is available year-round to fix or maintain your appliances for immediate service.

            </p>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>
        <PriceCardHomeCat />
        {/* heading 1 */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Home Appliance Repair Service Near You</h2>

                <p className="mb-2">
                  If you need integrated appliance repair, we've got you covered! Choose FAJ for fast and affordable service.
                  Whether your built-in washing machine won&apos;t drain, your fridge isn&apos;t working, your oven isn&apos;t heating, or your dishwasher won&apos;t turn on, our expert repair team in Dubai and Sharjah is ready to assist you. We are in your area and can quickly resolve any issues you may have.
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
                  src="https://www.youtube.com/embed/9T9CIvMIsfw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

              </div>
            </div>
            <AppliancesAppointmentCol />
          </div>
        </section>


        {/* Why is  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is Built-in Appliance Maintenance Service Important in Dubai? </h2>
            <p>
              Proper integrated appliance maintenance is essential for extending lifespan and enhancing efficiency, especially in Dubai's climate.
              Here are the main benefits:
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('oven-repair-service')} alt="built-in appliances repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Appliances Extended Lifespan: </strong> Regular maintenance helps appliances last longer, saving on replacement costs. </li>
                  <li> <strong> Appliances Improved Efficiency: </strong> Well-maintained appliances use less energy, leading to lower utility bills, which is essential in Dubai. </li>
                  <li> <strong> Appliances Preventing Costly Repair: </strong> Catching minor issues early prevents them from escalating into expensive repair. </li>
                  <li> <strong> Appliances Preserving Appliance Integrity: </strong> Regular cleaning prevents dust buildup that affects performance. </li>
                  <li> <strong> Appliances Early Problem Detection: </strong> Routine checks help identify potential issues before they become serious. </li>
                  <li> <strong> Appliances Cost-Effective: </strong> Maintenance costs are lower than early replacements or major repairs. Investing in appliance care ensures safety and efficiency and is a smart economic choice in Dubai. </li>
                  <li> <strong> Appliances Energy Efficiency: </strong> Regularly maintaining your integrated appliances can improve their efficiency and save you money. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>



        {/* Problems */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center"> The Most Common Problems with Home Appliances  </h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Refrigerator Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Most built-in fridge malfunctions are related to cooling issues, including problems with the defrost system, fan motor, compressor, or coils.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Dishwashers Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The most issues with integrated dishwashers are bad cleaning and drying. Common water leaks and drainage. Some electrical issues or PCB failures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Washing Machine Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A common issue with integrated washing machines is drainage problems, leaks, and PCB faulty. Also, a broken belt or faulty door switch or drum from spinning.

                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Tumble Dryer Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Built-in dryers may stop spinning or make noise without drying clothes properly, often due to a broken heating element or faulty control board.
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Stove Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Uneven heating or flame issues, such as a broken burner element, bad switch, or electric gas, are the most common problems with built-in stoves.


                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Ovens Problems</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Most integrated ovens face common issues such as poor heating, burner ignition failure, broken knobs, and faulty controllers or gas valves.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Freezer Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Common issues with an integrated freezer include water leaks, no ice, a malfunctioning ice maker, a malfunctioning PCB, motor, or compressor, and less cooling.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Coffee Machine Problem</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Whether they are drip or single-serve integrated coffee makers, there are a few reasons why water flow in coffee makers is often slow or nonexistent.
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
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR BUILT-IN HOME APPLIANCES      </h2>


            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('builtin-in-appliances-repair')} alt="built-in appliances repair" />

              </div>

              <div className="col-xl-6">
                <p className="mb-0">We specialise in all types and brands of integrated home appliances, including built-in units.
                </p>
                <p className='mb-0'><strong>Our services include:</strong></p>

                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">

                  <li> <strong> Appliance Installation: </strong> Expert installation of various types and brands of home appliances, ensuring optimal performance and efficiency. </li>
                  <li> <strong> Appliance Diagnostics: </strong> Comprehensive fault-finding services to effectively diagnose issues. We provide eligibility assessments and detailed quotations to address any concerns with your system. </li>
                  <li> <strong> Appliance Repair Service: </strong> Efficient repair services for all appliance components, ensuring a quick resolution to issues such as leaks, electrical failures, and system malfunctions. Feel free to reach out if you need specific services or have any questions! </li>
                  <li> <strong> Appliances Annual Maintenance Contract: </strong> This contract outlines the terms and services covered for the annual maintenance of your appliances. </li>


                  <p className="mb-0">
                    <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for optimal performance, efficiency, and longevity of your home appliances.
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
              <h2 className="cs_fs_30 mb-0 text-light">The Benefits of Built in appliances Service Dubai
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
                      <p className="small">Regular maintenance helps your built in appliances run smoothly and efficiently, delivering the best results every time.
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
                      <p className="small">Energy efficient built in appliances translate to monthly savings on utility bills, putting more money back in your pocket.</p>
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
                      <p className="small">Proper care and timely servicing can significantly increase life of your home built in appliances, delaying the need for replacements.</p>

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
                      <p className="small">Knowing your built in appliances are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* CHOOSE US */}
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
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two built in appliances at the same location in Dubai.</p>
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

        {/* We specialise   */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3> We are specialise in Appliances services for the following brands </h3>
            <div className="row">
              <div className="col-12">

                <ul className="mb-0">
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/lg/"><strong>LG Appliance Repair and Service</strong></a>: FAJ is here to support you when things go wrong. We understand that your LG appliances are essential for daily life, keeping your food fresh and meals cooked. Contact us for LG washing machine repair, LG refrigerator repair near me, LG dishwasher, LG fridge, and LG dryer repair and service near you.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/samsung/"><strong>Samsung Appliance Repair and Service</strong></a>: If you are facing any problems with your Samsung refrigerator, washer dryer, or dishwasher, we here support your Samsung washer dryer repair, Samsung refrigerator repair, Samsung fridge service, and Samsung dishwasher repair service near by you in Dubai.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/electrolux/"><strong>Electrolux Appliance Repair and Service</strong></a>: When you need Electrolux appliance repair in Dubai, we have a team of professional and qualified technicians available throughout the Dubai. Get same day service by FAJ team for your Electrolux washing machine repair, Electrolux dishwasher repair, Electrolux refrigerator repair and washer dryer repair near me service in Dubai.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/"><strong>Bosch Appliance Repair and Service</strong></a>: If you are looking for the best Bosch refrigerator repair in Dubai, FAJ is the ideal choice. They are known for providing exceptional service for all Bosch home appliance repair and are recognized as the leading Bosch cooking range repair, washing machine repair, refrigerator service provider in the area in Dubai.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/viking/"><strong>Viking Appliance Repair and Service</strong></a>: Your Viking appliance repair or maintenance and we can help. For high-quality Viking refrigerator repairs, gas range service, fix dishwasher, oven repair in Dubai, rely on FAJ.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/daewoo/"><strong>Daewoo Appliance Repair and Service</strong></a>: We provide expert services for Daewoo appliance repair in Dubai. Our skilled technicians have the knowledge and expertise to diagnose and fix issues with repair Daewoo refrigerator, fixing dishwasher, repairing dryer and more.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/siemens/"><strong>Siemens Appliance Repair and Service</strong></a>: Are you concerned about your Siemens washing machine malfunctioning and searching for a reliable Siemens appliances service in Dubai? Contact us for same-day Siemens washing machine repair, Siemens refrigerator repair, Siemens dishwasher repair, Siemens oven and cooker repair and service near by you in Dubai.</li>
                  <li><a className='text-decoration-underline' href="https://www.fajservices.ae/services/home-appliances-repair/brands/teka/"><strong>Teka Appliance Repair and Service</strong></a>: If you're searching for the best Teka appliances repair in Dubai, FAJ is the ideal choice. They are renowned for delivering exceptional service for Teka refrigerator repair, Teka washing machine repair, Teka gas stove repair, Teka hood repair and Teka oven repairs. FAJ is recognized as the leading Teka appliance service provider in the area.</li>
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

export default IntegratedApplianceRepairDetail;