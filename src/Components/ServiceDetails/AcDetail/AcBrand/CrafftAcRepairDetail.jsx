import { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import HeaderForm from "../../../Headeform/HeaderForm";
import Practicaltip from "../../../Common/Practicaltip";
import AcProperties from "../../../Common/AcProperties";
import AcAppointmentCol from "../../../Common/AcAppointmentCol";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import Testimonial1 from "../../../Testimonial/Testimonial1.jsx";
import AcBrandBenifit from "./ACBrandComponents/ACBrandBenifit.jsx";
import PriceCard from "../AcLocation/PriceCard.jsx";
import BeforeAfter from "../../../BeforeAfter/BeforeAfter.jsx";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const CrafftAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "Affordable Crafft Air Conditioning Repair and Maintenance Dubai");
  const metadescription = String(description || "Need fast and affordable Crafft AC repair in Dubai? Get expert A/C installation, service & emergency repairs today. Trusted by thousands – Book now");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Crafft AC Repair, Crafft AC Maintenance, Crafft Air Conditioner Service, Crafft Air Conditioner Repair, Crafft Air Conditioner Maintenance, Crafft Air Conditioner Fix, Crafft Air Conditioner Installation, Crafft Air Conditioner Cleaning Service");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/brands/crafft/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public");
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Crafft AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/air-conditioning-repair/brands/crafft/",
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
        "name": "Crafft AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Crafft AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Crafft Split AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Crafft Central AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Crafft AC Maintenance" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Crafft AC Gas Refilling" }
              }
            ]
          }
        ]
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Omar U." },
          "reviewBody": "I am extremely impressed with the OG AC repair service I received for my O General AC in my villa in Al Barsha. The technician, Rehman, was prompt, professional, and knowledgeable. He quickly diagnosed the issue and provided a clear explanation of the necessary aircon repairs. The work was completed efficiently and at a fair price for the AC cleaning service. I appreciated the communication throughout the process, from scheduling to follow-up. The team's attention to detail and commitment to customer satisfaction was evident. Now, my O General AC is running smoothly, and I couldn't be happier. I highly recommend this company for any air conditioning needs. They truly deserve a 5-star rating!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Max R." },
          "reviewBody": "I recently had the pleasure of using FAJ Gree AC Repair and Maintenance company for my home in Damac Hills, and I must say they were exceptionally efficient. From the moment they arrived, their professionalism was evident. They quickly assessed the situation and went to work, wasting no time. What stood out was their precision and attention to detail in fixing the Gree AC. The technicians left no mess behind, and the final result was a neatly executed cooling system. It's clear that FAJ takes pride in its work and ensures customer satisfaction. I highly recommend their AC services for anyone in need of reliable and tidy Gree air conditioning solutions."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ahsan R." },
          "reviewBody": "We recently faced an urgent situation when our Daikin VRV air conditioning unit malfunctioned, continuously blowing hot air into our home. With two elderly adults in the household who both have medical conditions, this became a serious concern. Upon contacting FAJ Daikin Central AC Repair and Services at Jumeirah Golf Estate, we experienced exceptional understanding and empathy from their team."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Aleem A." },
          "reviewBody": "FAJ Technical Services LLC will be handling the air conditioning repairs at our new restaurant in Business Bay Dubai. The entire process, from the initial stages to the maintenance service, was straightforward. The team was friendly and accommodating, making the experience pleasant."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Mohsin S." },
          "reviewBody": "My AC broke on a Thursday when temperatures reached 35 degrees. I called FAJ Technical Services LLC, and within an hour, their AC technicians arrived in our JVC area. They provided quick and affordable AC cleaning and repair services for my LG air conditioner. The job was neat and tidy; they didn't leave a speck of mess behind. I would rate their service 10/10 and highly recommend Joe and the FAJ team!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Anonymous (via 2GIS)" },
          "reviewBody": "Very happy with my air conditioning system maintenance, very professional and friendly guys Muhammad Azeem and Adnan, best price offered, not a rip off company, will recommend it to everyone. Job was done on Saturday morning, guys cleaned up after, checked to make sure all working fine. Big thanks!"
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Anonymous (via 2GIS)" },
          "reviewBody": "It's rare to find a business that 'delights' you as a customer. Only that can describe my experience start to finish with Masoom and Adnan. From the initial contact to the actual diagnostic/regas itself. So very accommodating, amazingly quick and efficient, my air condition was up and running again before I even knew it."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Hanzla H. (via 2GIS)" },
          "reviewBody": "Their emergency AC repair service is quick and efficient. Also, their annual maintenance contract (AMC) gives peace of mind. Best AC service in Dubai."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Anonymous (via FAJ website)" },
          "reviewBody": "An efficient team who could diagnose the fault and rectify the problem. They washed the indoor unit with water and took all the care not to mess up our office."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Mr. Adnan (mentioned by customer, via FAJ website)" },
          "reviewBody": "Mr Adnan give us the best service for AC Servicing. And he also repaired our AC and Refrigerator in limited price. Keep it up 👍👍"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/crafft/#faq",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is the lifespan of a Crafft air conditioner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With proper maintenance, which includes regular cleaning, inspections, and timely repair by FAJ's professionals, a Crafft air conditioner can last 15 years or more. However, its lifespan can also be affected by factors such as usage patterns, environmental conditions, and the quality of installation."
        }
      },{
        "@type": "Question",
        "name": "What is involved in servicing a Crafft air conditioner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The technician will inspect both units to ensure they operate smoothly. They will clean the filters and coils of the indoor unit, remove any dirt or dust, and check for proper airflow."
        }
      },{
        "@type": "Question",
        "name": "How do you know Crafft AC needs servicing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your air conditioning unit is blowing warm air or not cooling properly, it's a clear sign that it needs maintenance. You may need to replace the air filters, refill the refrigerant, or have the Crafft AC coils professionally cleaned by a team from FAJ."
        }
      },{
        "@type": "Question",
        "name": "What is included in aircon servicing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FAJ Professional Air Conditioning Servicing Include: Cleaning or Replacement of AC Air Filters Checking and Cleaning the AC Evaporator Coils Cleaning and Checking of AC Condenser Coil Inspection of AC Refrigerant Levels Checking of the AC Electrical Connections Inspection of AC Fan and Blower Motor Cleaning the AC Drainage System"
        }
      },{
        "@type": "Question",
        "name": "What is the most common Crafft AC repair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Common Crafft Air-Conditioning Problems and repair: Most Common Air Conditioning Repair – Bad Capacitor. Most Common Air Conditioning Repair – Low Gas. Most Common Air Conditioning Repair – Clogged Condensate Drain Line. Most Common Air Conditioning Repair – Failing Blower Motor"
        }
      },{
        "@type": "Question",
        "name": "How to know if a Crafft AC capacitor is bad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The short answer is that you may have a failing AC capacitor if you are experiencing any of the following symptoms: Your AC system isn't blowing cold air. You hear a humming noise coming from the outdoor or indoor unit. Your monthly Dewa bills are rising unexpectedly. Your air conditioner will shut off unexpectedly."
        }
      },{
        "@type": "Question",
        "name": "What are the error codes for Crafft air conditioners (AC)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "E 1 or 21: Defect in the room temperature sensor E 1 or 22: Defect in the heat exchanger temperature sensor E1 or 54: Defect in fan motor or capacitor E1 or 63: Defect in the EEPROM E5: Short of indoor heat exchanger sensor E6: Short of the outdoor heat exchanger sensor E7: Short of the heater temperature sensor"
        }
      }]
    },
  {
  "@type": "BreadcrumbList",
  "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/crafft/#breadcrumb",
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
      "name": "Air Conditioning Repair",
      "item": "https://www.fajservices.ae/services/air-conditioning-repair/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Brands",
      "item": "https://www.fajservices.ae/services/air-conditioning-repair/brands/"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Crafft",
      "item": "https://www.fajservices.ae/services/air-conditioning-repair/brands/crafft/"
    }
  ]
}

  ]
}
 
  subtitle = "Testimonial"
  title = "What our clients say <br> About Us"
  reviewsbg = getImageSrc('testimonialbg')
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const [data, setData] = useState([]);
  const [testimonial_data, setTestimonialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcBrand/CrafftAcRepairfaq.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/CrafftAcServiceTestimonials.json`)
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
          <meta property="og:title" content="Affordable Crafft Air Conditioning Repair and Maintenance Dubai" />
          <meta property="og:description" content="Need fast and affordable Crafft AC repair in Dubai? Get expert A/C installation, service & emergency repairs today. Trusted by thousands – Book now" />
          <meta property="og:url" content={metaURL} />
          <meta property="og:image" content={metaImage} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Affordable Crafft Air Conditioning Repair and Maintenance Dubai" />
          <meta name="twitter:description" content="Need fast and affordable Crafft AC repair in Dubai? Get expert A/C installation, service & emergency repairs today. Trusted by thousands – Book now" />
          <meta name="twitter:image" content={metaImage} />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
          
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">
        {/* intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Top-Quality Crafft Air Conditioning Repair and Maintenance Service in Dubai</h1>
            <p>Achieving comfort throughout the year requires addressing challenges like summer humidity, elevated nighttime temperatures, and indoor allergens.
              <br />Since its inception in 2010, <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7">FAJ Technical Services L.L.C</a> has established itself as a trustworthy provider of Crafft air conditioning solutions in the Dubai and Sharjah regions.
              Our skilled team is proficient in a comprehensive range of services, including Crafft AC repair, cleaning service, maintenance and installation for both residential and commercial units. We are committed to optimizing the performance of your air conditioning system, thereby enhancing your indoor comfort.</p>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>

        <PriceCard />

        {/* 2 col */}
        <section className="section cs_py_30">
          <div className="container">
            <div className="row gx-md-5 align-items-center expert_section_wrapper">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left">Crafft AC Maintenance and Servicing</h2>

                <p className="mb-2">
                  In Dubai, professional services are available for repairing Crafft air conditioning systems, so it&apos;s important to hire a qualified AC technician.
                  <br />Our specialized team services Crafft AC systems in Dubai and Sharjah, ensuring year-round comfort and optimal efficiency.

                </p>

                <h2 className="cs_fs_24 pt-1 mb-1 mt-0 text-align-left">Top Common Signs That You Need Crafft AC Maintenance</h2>
                <p className="mb-2">If you notice any of these AC signs, please contact us via phone or WhatsApp chat. We are here to assist your AC cooling system in getting optimal efficiency.</p>
                 <div className="row">
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>AC Not Cooling Signs</li>
                      <li>AC Motor not working</li>
                      <li>AC Thermostat not working</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Water Leaking from your AC</li>
                      <li>AC compressor is not cooling</li>
                      <li><a href="https://www.dewa.gov.ae/en/consumer/sustainability/sustainability-and-conservation/cooling"><b>High AC electricity (DEWA) bills</b></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <img
                  className="bordered-img w-100"
                  src={getImageSrc('acfilterinner')}
                  alt="Crafft AC Service"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <AcAppointmentCol></AcAppointmentCol>
          </div>
        </section>

        {/* AC Price Section */}
        <FAJACPrice></FAJACPrice>

        {/* Why*/}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">

            <h2 className="cs_fs_30">Why is Crafft AC Maintenance Service Important in Dubai?</h2>
            <p>
              To ensure your Crafft central air conditioner runs smoothly in Dubai&apos;s heat, regular aircon maintenance is essential. At FAJ, we offer expert AC services to ensure optimal cooling and comfort year-round. We&apos;re here to help your system perform at its best!
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  className="bordered-img w-100"
                  src={getImageSrc('ac amc')}
                  alt="Crafft Airconditioner Repair"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong>  Extreme Weather: </strong> During the excessively warm summer months, temperatures may exceed 40°C (104°F), creating an uncomfortable environment. It is imperative to ensure that your Crafft air conditioning systems are operating at optimal performance. </li>
                  <li> <strong>  Energy Efficiency: </strong> A well-maintained Crafft air conditioner operates efficiently, resulting in significant energy savings and lower DEWA electricity costs. </li>
                  <li> <strong>  Longevity of Equipment: </strong> Regular maintenance of Crafft AC units is crucial for optimal performance and efficiency, reducing repair costs and saving money for both homes and businesses. </li>
                  <li> <strong>  Improved Air Quality: </strong> Routine Crafft air conditioner cleaning service prevents dust and allergens from getting in, resulting in improved air quality. </li>
                  <li> <strong>  Enhanced Comfort: </strong> Regular maintenance of Crafft air conditioners in Dubai is essential for optimal comfort and efficiency, creating a pleasant indoor environment every day. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Common Crafft AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      <a href="https://www.youtube.com/watch?v=qnByeIsc3lY">Reduced airflow</a> from Crafft AC vents may indicate a problem, such as a clogged filter or a faulty fan, which should be addressed to ensure efficient cooling.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Warm Air</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your Crafft AC is blowing warm air, it may have problems with the compressor, gas levels, or ductwork.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Unusual sounds like grinding, squeaking, or banging from your Crafft AC may indicate mechanical issues that require attention.
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Foul Odors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Unpleasant odors coming from the vents may indicate mold or mildew in the system and should be addressed immediately.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Frequent Cycling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The failure to maintain desired temperatures may indicate problems such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">High Humidity Levels</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      A Crafft air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Leaking Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Water pooling around the Crafft AC or dripping from the vents may indicate a blocked drain or frozen coils.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Increased Energy Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      High energy bills without increased usage may indicate inefficiencies in Crafft air conditioning due to dirty filters or duct leaks.
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

        {/* HERE  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR Crafft AC SYSTEMS</h2>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/sxBhB1_gxYA?si=Fk3OIwPHCHAsktx-"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-xl-6">
                <p className='mb-0'>We offer a variety of HVAC systems, particularly advanced Fresh Air Handling Units (FAHU).</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong>  Crafft AC Installation: </strong> The professional installation of various Crafft air conditioning systems ensures optimal performance. </li>
                  <li> <strong>  Crafft AC Inspection: </strong> We offer accurate fault diagnosis to pinpoint system issues, along with comprehensive quotes and eligibility assessments to address your concerns. </li>
                  <li> <strong>  Crafft AC Repair Service: </strong> We offer fast repair services for Crafft air conditioners, addressing leaks, electrical problems, and malfunctions. Contact us for further details or inquiries! </li>
                  <li> <strong>  Crafft AC Annual Maintenance Contract: </strong> The contract specifies the annual maintenance terms for Crafft air conditioners. </li>
                </ul>
                <p className="mb-0"> <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a>, including Annual Maintenance Contracts (AMC) and Planned Preventive Maintenance (PPM), is vital for optimal performance and durability.</p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <AcBrandBenifit brandName="Crafft AC"/>

        {/* CHOOSE US  */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR  NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img
                      className="bordered-img w-100"
                      src={getImageSrc('icon/fast-reliable')}
                      alt="Fast,Reliable Service"
                      loading="lazy"
                      decoding="async"
                    />

                  </div>
                  <div className="usptext">
                    <h3>Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img
                      className="bordered-img w-100"
                      src={getImageSrc('icon/experts')}
                      alt="We Are Experts"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="usptext">
                    <h3>Feeling Of Calm</h3>
                    <p>With <a href="/services/air-conditioning-repair/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img
                      className="bordered-img w-100"
                      src={getImageSrc('icon/full-control')}
                      alt="We Are Experts"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your Crafft AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img
                  className="blue-border-2 w-100 why-choose-img"
                  src={getImageSrc('ACServicescomponent-New')}
                  alt="Ac Maintenance Services"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img
                      className="bordered-img w-100"
                      src={getImageSrc('icon/value')}
                      alt="Ac Maintenance Services"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We are experts in Crafft AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img
                      className="bordered-img w-100"
                      src={getImageSrc('icon/confidence-guarantee')}
                      alt="Ac Maintenance Services"
                      loading="lazy"
                      decoding="async"
                    />

                  </div>
                  <div className="usptext">
                    <h3>Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img
                      className="bordered-img w-100"
                      src={getImageSrc('icon/trustworthy')}
                      alt="Ac Maintenance Services"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="usptext">
                    <h3>Trustworthy</h3>
                    <p>Our <a href="https://www.facebook.com/acrepairservices"><b>skilled AC technicians</b></a> are highly trained, and we provide excellent service for a variety of major AC brands efficiently.
                    </p>
                  </div>
                </div>
              </div>


            </div>
            {/* <!-- Delimit mobile --> */}
            <div className="col-12 uspdelimit w-100 text-center d-block d-none-1199 Xd-xl-none">
              <img
                className="bordered-img w-100"
                src={getImageSrc('ACServicescomponent-New')}
                alt="Ac Maintenance Services"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
        <BeforeAfter
            title="Recent Completed Service"
            subTitle="Before & After Service"
            bgImg={`${CDN}/background-image-2/public`}
            beforeImg={`${CDN}/after_img_1/public`}
            afterTitle="After"
            afterImg={`${CDN}/before_img_1/public`}
            beforeTitle="Before"
          />
        {/* We specialise  */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_24 text-align-left">We specialise in Crafft AC services for the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"> <strong>  Crafft Split Air Conditioner Service: </strong> <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ</a> is a trusted provider of Crafft split air conditioner repair and maintenance in Dubai. Our skilled technicians specialize in Crafft VRF systems and central AC units, ensuring optimal performance. Whether for routine maintenance or urgent repair, we are dedicated to delivering exceptional service tailored to your needs.</p>
                <p className="mb-0"> <strong>  Crafft Central Air Conditioner Repair and Service: </strong> FAJ is a premier service provider specializing in the repair and maintenance of Crafft air conditioner in Dubai. The company is committed to addressing the diverse needs of its clientele, whether they require routine <a href="/services/air-conditioning-repair/ac-service/">AC maintenance</a> or urgent repair. With a focus on professionalism and expertise, FAJ ensures high-quality service and customer satisfaction.</p>
                <p className="mb-0"> <strong>  Crafft AC Service and Repair: </strong> Crafft AC Service provides peace of mind with our skilled technicians. At FAJ, we specialize in efficient and reliable Crafft AC maintenance, repair, and installation. You can trust our expert team to keep your HVAC system running smoothly and ensure your comfort throughout the year!</p>
                <p className="mb-0"> <strong>  Crafft Inverter Air Conditioner Maintenance: </strong> Count on our dedicated team to promptly resolve any concerns with your Crafft air conditioner maintenance and bring it back to peak performance!</p>
                <p className="mb-0"> <strong>  Crafft HVAC Repair: </strong> We have extensive expertise in Crafft cassette and package unit AC systems, providing reliable repair to ensure your unit operates efficiently.</p>
                <p className="mb-0"> <strong>  Crafft Ceiling AC Service and Repair: </strong> Our specialists can quickly diagnose and resolve any issues with your Crafft ceiling AC repair and service.</p>
                <p className="mb-0"> <strong>  Crafft VRF (Variable Refrigerant Flow) System Service and Repair: </strong> FAJ's Crafft Variable Refrigerant Flow (VRF) repair and maintenance services provide efficient HVAC solutions tailored to your needs. Our expert team prioritizes your comfort and satisfaction, ensuring reliable service and peace of mind in managing your climate control requirements.</p>
                <p className="mb-0"> <strong>  Crafft Ducted Split AC Service and Repair: </strong> For reliable Crafft AC repair and maintenance in Dubai, our experienced technicians are ready to assist you. With expertise in diagnosing a variety of Crafft AC issues and resolving error codes, we guarantee minimal disruption to your comfort. Trust us for prompt and effective service that delivers the cooling relief you need.</p>
                <p> <strong>  Crafft Wall-Mounted Air Conditioner Service and Repair: </strong> Stay cool in the extreme heat of Dubai with our professional Crafft air conditioning repair and maintenance services. We are dedicated to ensuring your unit operates at its best, helping you maintain a comfortable indoor environment even when outdoor temperatures soar.</p>

                <p>
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-barsha/">Al Barsha</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali/">Jebel Ali</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jafza/">JAFZA</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali-free-zone/">Jebel Ali Free Zone</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/palm-jumeirah/">Palm Jumeirah</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-hills-estate/">Dubai Hills Estate</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/damac-hills/">Damac Hills</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-barari/">Al Barari</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-barsha-south/">Al Barsha South</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/al-safa/">Al Safa</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/arabian-ranches/">Arabian Ranches</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-silicon-oasis/">Dubai Silicon Oasis</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dip/">Dubai Investments Park</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dip/">DIP</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-production-city/">Dubai Production City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/impz/">IMPZ</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-sport-city/">Dubai Sports City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/dubai-studio-city/">Dubai Studio City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jbr/">JBR</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-beach-residence/">Jumeirah Beach Residence</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jlt/">JLT</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-lake-towers/">Jumeirah Lake Towers</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvc/">JVC</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvc/">Jumeirah Village Circle</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvt/">JVT</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jvt/">Jumeirah Village Triangle</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jebel-ali-village/">Jebel Ali Village</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah/">Jumeirah</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/jumeirah-golf-estates/">Jumeirah Golf Estates</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/the-meadows/">Meadows</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/motor-city/">Motor City</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/town-square/">Town Square</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/emirates-hills/">Emirates Hills</a> &nbsp;|&nbsp;
                  Townhouses &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/umm-suqeim/">Umm Suqeim</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/ras-al-khor-industrial-area/">Ras Al Khor</a> &nbsp;|&nbsp;
                  <a href="https://www.fajservices.ae/services/air-conditioning-repair/coverage-area/deira/">Deira</a>
                </p>
              </div>

            </div>

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton></GetQuoteButton>
                <CallNowButton></CallNowButton>
              </div>
            </div>

          </div>
        </section>

        <Practicaltip></Practicaltip>
        <AcProperties></AcProperties>

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

         {/* Contact */}
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

export default CrafftAcRepair;