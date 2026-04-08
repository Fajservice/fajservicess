import { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import HeaderForm from "../../../Headeform/HeaderForm";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import Practicaltip from "../../../Common/Practicaltip";
import AcProperties from "../../../Common/AcProperties";
import AcAppointmentCol from "../../../Common/AcAppointmentCol";
import FAJACPrice from "../../../Miscellaneous/FAJACPrice";
import Testimonial1 from "../../../Testimonial/Testimonial1";
import AcBrandBenifit from "./ACBrandComponents/ACBrandBenifit";
import PriceCard from "../AcLocation/PriceCard";
import BeforeAfterSlider from "@johanaarstein/react-before-after-slider-component";
import BeforeAfter from "../../../BeforeAfter/BeforeAfter";

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const AftronAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metaTitle = String(titleSeo || "Best Aftron Split AC Repair, Maintenance Service Dubai");
  const metaDescription = String(description || "Looking for top-quality Aftron air conditioning repair this summer? Call 043300002 for Aftron AC repair & maintenance service near you in Dubai");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Aftron AC Repair, Aftron AC Maintenance, Aftron AC Service, Aftron Air Conditioner Repair Dubai, Aftron Air Conditioner Service Dubai, Aftron Air Conditioner Maintenance Dubai, Aftron Air Conditioner Installation Dubai, Aftron Air Conditioner Cleaning Dubai, Aftron AC Repair Dubai, Aftron AC Service Dubai, Aftron AC Maintenance Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/brands/aftron/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/What-is-covered-in-an-AC-Maintenance-Contract/public");


  subtitle = "Testimonial"
  title = "What our clients say <br> About Us"
  reviewsbg = getImageSrc('testimonialbg')
  
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);
  const [data, setData] = useState([]);
  const [testimonial_data, setTestimonialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Aftron AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/air-conditioning-repair/brands/aftron/",
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
        "name": "Aftron AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Aftron AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Aftron Split AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Aftron Central AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Aftron AC Maintenance" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Aftron AC Gas Refilling" }
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
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/aftron/#faq",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is the lifespan of a Aftron air conditioner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With proper maintenance, which includes regular cleaning, inspections, and timely repairs by FAJ's professionals, a Aftron air conditioner can last 15 years or more. However, its lifespan can also be affected by factors such as usage patterns, environmental conditions, and the quality of installation."
        }
      },{
        "@type": "Question",
        "name": "What is involved in servicing a Aftron air conditioner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The technician will inspect both units to ensure they operate smoothly. They will clean the filters and coils of the indoor unit, remove any dirt or dust, and check for proper airflow."
        }
      },{
        "@type": "Question",
        "name": "How do you know Aftron AC needs servicing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your air conditioning unit is blowing warm air or not cooling properly, it's a clear sign that it needs maintenance. You may need to replace the air filters, refill the refrigerant, or have the Aftron AC coils professionally cleaned by a team from FAJ."
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
        "name": "Is it necessary to service AC every year?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While regular aircon maintenance checks are not mandatory, they are advisable. We recommend having your air conditioner serviced at least once a year, even in the absence of noticeable defects, to ensure optimal performance."
        }
      },{
        "@type": "Question",
        "name": "What is the most common Aftron AC repair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Common Aftron Air Conditioning Problems and Repairs Most Common Air Conditioning Repair – Bad Capacitor. Most Common Air Conditioning Repair – Low Gas. Most Common Air Conditioning Repair – Clogged Condensate Drain Line. Most Common Air Conditioning Repair – Failing Blower Motor"
        }
      },{
        "@type": "Question",
        "name": "How to know if a Aftron AC capacitor is bad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The short answer is that you may have a failing AC capacitor if you are experiencing any of the following symptoms: Your AC system isn't blowing cold air. You hear a humming noise coming from the outdoor or indoor unit. Your monthly Dewa bills are rising unexpectedly. Your air conditioner will shut off unexpectedly."
        }
      },{
        "@type": "Question",
        "name": "What is E2 error on Aftron inverter AC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your air conditioning system displays an E2 error, it indicates an issue with the outdoor unit sensor. You can identify this error by a small LED light on your air conditioner. This problem occurs when the evaporation temperature is lower than the temperature in cooling or dry mode."
        }
      },{
        "@type": "Question",
        "name": "Why Aftron AC is not working?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If the Aftron AC is not cooling, the problem may lie with the compressor. The compressor is a motor that compresses the refrigerant and circulates it through the evaporator and condenser coils. When the compressor malfunctions, the cooling cycle cannot initiate, causing the Aftron AC to fail in cooling effectively."
        }
      }]
    },
 {
  "@type": "BreadcrumbList",
  "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/aftron/#breadcrumb",
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
      "name": "Aftron",
      "item": "https://www.fajservices.ae/services/air-conditioning-repair/brands/aftron/"
    }
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

  // Fetch JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcBrand/AftronAcRepairfaq.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/AftronAcServiceTestimonials.json`)
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
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:url" content={metaURL} />
          <meta property="og:image" content={metaImage} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta name="twitter:image" content={metaImage} />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
          
        </Helmet>
      </HelmetProvider>
      <HeaderForm />
      <div className="cs_service_details">
        <section className="section cs_py_30">
          <div className="container">
            
              <h1 className="cs_fs_30">Choose the leading Aftron AC Repair and Maintenance Services in Dubai</h1>
              <p>Year-round indoor comfort helps us overcome challenges like summer humidity, warm nights, and indoor allergens, turning our spaces into havens of serenity and well-being.
                <br />
                Founded in 2010, <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7">FAJ Technical Services L.L.C</a> has been a trusted provider of Aftron Air Conditioner solutions in Dubai and Sharjah. Our experienced team specializes in a range of services, including cleaning, repair, maintenance, and installation of Aftron AC units for both residential and commercial properties.
                <br />We are committed to optimizing the performance of your air conditioning system to enhance indoor comfort effectively.
              </p>
           

            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>

        <PriceCard />

        {/* 2 cols*/}
        <section className="section cs_py_30">
          <div className="container">
            <div className="row gx-md-5 align-items-center expert_section_wrapper">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left" style={{ fontSize: "24px" }}>Aftron AC Maintenance and Services </h2>

                <p className="mb-0">
                  If you&apos;re in Dubai and require reliable Aftron <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/"> air conditioner repair</a>, look no further than FAJ! Our expert team guarantees that your AC systems will operate at peak performance in both Dubai and Sharjah.
                  We provide trusted solutions to provide your indoor comfort year-round. Enjoy a cool, refreshing setting with our exceptional service!
                </p>

                <h2 className="cs_fs_24 mb-1 pt-1 mt-0 text-align-left" style={{ fontSize: "24px" }}>Top Common Signs That You Need Aftron AC Maintenance</h2>
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

              <div className="col-md-6">
                <img
                  className="bordered-img w-100"
                  src={getImageSrc('Experts-AC-Service-and-Maintenance')}
                  alt="Aftron AC Repair"
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

        {/* Why  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">Why is Aftron AC Maintenance Service Important in Dubai?</h2>
            <p className="mb-0">To guarantee your Aftron central air conditioner functions efficiently in Dubai&apos;s intense heat, regular <a href="/services/air-conditioning-repair/ac-service/">AC maintenance</a> is essential. At FAJ, we offer expert aircon services designed to enhance your system’s performance and comfort year-round. Trust us to keep your air conditioner operating at its best.
            </p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  className="bordered-img w-100"
                  src={getImageSrc('indoor-ac-servicing')}
                  alt="Aftron AC Repair"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Extreme Weather: </strong> As summer approaches, we can expect temperatures to soar above 40°C (104°F), creating discomfort. It&apos;s essential to ensure that your Aftron air conditioning systems are primed for optimal performance. </li>
                  <li> <strong> Energy Efficiency: </strong> A well-maintained Aftron air conditioner operates efficiently, resulting in significant energy savings and lower DEWA electricity costs. </li>
                  <li> <strong> Longevity of Equipment: </strong> Keeping up with the Aftron AC maintenance is really important for getting the best performance and efficiency. It helps lower repair costs and can save money for both homes and businesses. </li>
                  <li> <strong> Improved Air Quality: </strong> Routine Aftron air conditioner cleaning service prevents dust and allergens from getting in, resulting in improved air quality. </li>
                  <li> <strong> Enhanced Comfort: </strong> Regular air conditioner maintenance in Dubai is vital for optimal efficiency and a comfortable indoor environment. </li>
                </ul>
              </div>
            </div>

          </div>
        </section>
        {/* problems */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center"> Common Aftron AC Problems That May Require Maintenance </h2>
            <div className="row gx-lg-3 gy-lg-4">
              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Weak Airflow</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      <a href="https://www.youtube.com/watch?v=qnByeIsc3lY"><b>Reduced airflow</b></a> from an Aftron air conditioner may indicate a clogged filter or faulty fan, which should be fixed for efficient cooling.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Warm Air</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your Aftron AC is blowing warm air, it may be experiencing issues with the compressor, refrigerant levels, or ductwork.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Strange Noises</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Unusual sounds like grinding, squeaking, or banging from your Aftron AC may indicate mechanical issues that require attention.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Foul Odors</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Unpleasant odors coming from the vents may indicate mold or mildew in the system and should be addressed immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Frequent Cycling</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The failure to maintain desired temperatures may indicate problems such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">High Humidity Levels</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Aftron air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Leaking Water</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Water pooling around the Aftron AC or dripping from the vents may indicate a blocked drain or frozen coils.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_18 mb-0 bg-dark-blue rounded-top text-light py-1 mt-0">Increased Energy Bills</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      High energy bills without increased usage may indicate inefficiencies in Aftron air conditioning due to dirty filters or duct leaks.
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </section>

        {/* HERE  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR AFTRON AC SYSTEMS</h2>

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
                <p className='mb-0'>Effective air conditioning systems are essential for maintaining a comfortable and effective environment in commercial environments.
                </p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong>  Aftron AC Installation: </strong> The professional installation of various Aftron air conditioning systems ensures optimal performance. </li>
                  <li> <strong>  Aftron AC Inspection: </strong> We offer accurate fault diagnosis to pinpoint system issues, along with comprehensive quotes and eligibility assessments to address your concerns. </li>
                  <li> <strong>  Aftron AC Repair Service: </strong> We offer fast repair services for Aftron air conditioners, addressing leaks, electrical problems, and malfunctions. Contact us for further details or inquiries! </li>
                  <li> <strong>  Aftron AC Annual Maintenance Contract: </strong> The contract specifies the annual maintenance terms for Aftron air conditioners. </li>
                </ul>
                <p className="mb-0"><a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a>, including Annual Maintenance Contracts (AMC) and Planned Preventive Maintenance (PPM), is vital for optimal performance and durability.
                </p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <AcBrandBenifit brandName="Aftron AC"/>

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
                      className="blue-border"
                      src={getImageSrc('icon/fast-reliable')}
                      alt="Ac Maintenance Services"
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
                      className="blue-border"
                      src={getImageSrc('icon/experts')}
                      alt="Ac Maintenance Services"
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
                      className="blue-border"
                      src={getImageSrc('icon/full-control')}
                      alt="Ac Maintenance Services"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="usptext">
                    <h3>You Are in Control</h3>
                    <p>Choose a day and time for your Aftron AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
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
                      className="blue-border"
                      src={getImageSrc('icon/value')}
                      alt="Ac Maintenance Services"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We are experts in Aftron AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img
                      className="blue-border"
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
                      className="blue-border"
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
                className="blue-border"
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
           


            <h3 className="cs_fs_24 text-align-left">We specialise in Aftron AC services for the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"><strong> Aftron Air Conditioner Installation Service in Dubai: </strong>  A comprehensive solution for your cooling needs. We specialize in high-quality <a href="https://www.google.com/search?q=faj+technical+service+llc&rlz=1C1GCEU_en-GBPK1161PK1162&oq=faj+technical+service+llc&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQg3Mzg1ajBqN6gCCLACAfEF5bSBoZc-GIs&sourceid=chrome&ie=UTF-8#lpc=lpc&prid=-8538718177430601680">Aftron AC installation</a> services in Dubai and Sharjah. Our consultation process helps you choose the right model based on your space and budget. Our experts assess factors like room size and AC insulation to recommend the best unit for optimal performance.</p>

                <p className="mb-0"><strong> Our installation services include:</strong></p>
                <p className="mb-0"> <strong> Climate Check: </strong> Understanding your unique requirements based on the local climate and your building&apos;s features. </p>
                <p className="mb-0"> <strong> Expert AC Installation: </strong> Our skilled AC technicians ensure that the AC installation is performed to the highest standards, adhering to all safety protocols. </p>
                <p className="mb-0"> <strong> Post-Installation Support: </strong> We provide advice on operating your new air conditioner, including tips on energy efficiency and maintenance. </p>
                <p className="mb-0"> <strong> Warranty and Service Packages: </strong> To ensure your peace of mind, we offer warranty options and additional service packages for maintenance and repair in Dubai and Sharjah. </p>
                <p className="mb-0"> <strong> Aftron AC AMC Services in Dubai: </strong> We offer comprehensive air conditioning AMC (Annual Maintenance Contract) and PPM (Planned Preventive Maintenance) services, along with repair support, throughout the year for both contract and non-contract customers. While we are dedicated to serving all our clients, please note that those with service contracts may receive priority assistance. </p>
                <p className="mb-0"> <strong> Aftron Air Conditioner Repair in Dubai: </strong> Stay cool during the hot Dubai summer with our expert Aftron inverter AC repair in Dubai and Sharjah. Our team provides efficient and reliable cooling solutions tailored to your needs. We guide you through the selection and installation process for optimal comfort. Contact us today to schedule your installation and beat the heat! </p>
                <p className="mb-0"> <strong> Aftron AC Cleaning Service in Dubai: </strong> AC Deep cleaning your air conditioner brings several key benefits: </p>
                <p className="mb-0"> <strong> Improved Air Quality: </strong> It removes dust, allergens, and bacteria, leading to healthier air, especially for those with allergies. </p>
                <p className="mb-0"> <strong> Reduced Energy Consumption: </strong> A clean unit operates more efficiently, lowering your electricity bills.</p>
                <p className="mb-0"> <strong> Extended Lifespan: </strong> Regular AC maintenance prevents wear and tear, prolonging the life of your AC and minimising costly repairs. </p>
                <p className="mb-0"> <strong> Odour Elimination: </strong> It eliminates mold and mildew, resulting in fresher indoor air. </p>
                <p className="mb-0"> <strong> Reduced Mold Growth: </strong> Regular cleaning prevents the growth of mold and bacteria, which is crucial in humid climates. </p>
                <p>     <strong> Better Breathing: </strong> Cleaner air improves overall well-being. In short, deep cleaning your AC is an investment in your health, comfort, and energy efficiency. </p>


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

        <div className="section">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>

        </div>
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

        
      </div>



    </>
  );
};

export default AftronAcRepair;