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
const BryantAcRepair = ({ subtitle, title, reviewsbg, description, Author, Keyword, URL }) => {

  // For SEO
  <title>Bryant Air Conditioning | Bryant Repair and Services in Dubai </title>
  const metadescription = String(description || "Home and Commercial · Bryant (AC) Air Conditioning Repair in Dubai. Same-day HVAC, central, chiller AC, & FCU A/C maintenance services near you.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Bryant AC Repair in Dubai, Bryant AC Maintenance in Dubai, Bryant AC Fix in Dubai, Bryant AC Service in Dubai, Bryant Air Condition Repair in Dubai, Bryant Air Condition Maintenance in Dubai, Bryant Air Con Repair in Dubai, Bryant Air Con Maintenance in Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/brands/bryant/");
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
      "name": "Bryant AC Repair Services in Dubai - FAJ Technical Services",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/air-conditioning-repair/brands/bryant/",
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
        "name": "Bryant AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Bryant AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Bryant Split AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Bryant Central AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Bryant AC Maintenance" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Bryant AC Gas Refilling" }
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
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/bryant/#faq",
      "mainEntity": [{
        "@type": "Question",
        "name": "How to read Bryant AC model numbers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bryant uses two styles of model number identification: Style 1: Starts with a letter indicating the manufacturing location, followed by two digits representing the year of manufacture (from 2000 onward). Example: 'C12A00152' means it was made at the Clarksville Plant in 2012. Style 2: Starts with numbers, where the first two digits indicate the year of manufacture."
        }
      },{
        "@type": "Question",
        "name": "How to tell the tonnage of a Bryant AC unit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for a sticker or plaque on the AC unit. Tonnage is shown as an even two-digit number between 18 and 60 in or near the model number. Divide this number by 12 to get the tonnage."
        }
      },{
        "@type": "Question",
        "name": "How long does a Bryant air conditioner last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bryant air conditioners typically last 15 to 20 years with proper care. Lower-end systems may only last about 10 years and often need costly repairs."
        }
      },{
        "@type": "Question",
        "name": "Why won't my Bryant thermostat change temperature?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your thermostat might be locked. To unlock it, press the '+' and '–' buttons simultaneously for 3–4 seconds. Then try adjusting the temperature again."
        }
      },{
        "@type": "Question",
        "name": "How to maintain a Bryant AC unit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Steps to maintain your AC: 1. Shut off power. 2. Remove debris. 3. Clean and straighten fins. 4. Clear the area around the unit. 5. Level the unit. 6. Clean the evaporator coil. 7. Clean the evaporator drain."
        }
      },{
        "@type": "Question",
        "name": "How do I reset a Bryant air conditioner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To reset your Bryant AC: 1. Turn off the unit. 2. Locate the circuit breaker. 3. Identify and switch off the AC breaker. 4. Wait 30 seconds. 5. Switch it back on."
        }
      },{
        "@type": "Question",
        "name": "How often should Bryant AC filters be changed in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Change the air filter every 90 days (3 months), or more frequently in dusty environments, homes with pets, or if the system is older."
        }
      },{
        "@type": "Question",
        "name": "Do air conditioners need regassing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, not unless there’s a refrigerant leak. Properly installed ACs don’t require re-gassing. If cooling drops, have a technician check for leaks."
        }
      },{
        "@type": "Question",
        "name": "How to reset Bryant AC thermostat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Turn off the thermostat/HVAC breaker for 20–30 seconds, then switch it back on. Wait several minutes for the system to reboot."
        }
      },{
        "@type": "Question",
        "name": "What is error 79 on Bryant thermostat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Error 79 means the low-pressure switch has detected low suction pressure, triggering a hard lockout. This protects your HVAC system from potential compressor damage."
        }
      }]
    },
   {
  "@type": "BreadcrumbList",
  "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/bryant/#breadcrumb",
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
      "name": "Bryant",
      "item": "https://www.fajservices.ae/services/air-conditioning-repair/brands/bryant/"
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
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcBrand/BryantAcRepairfaq.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/BryantAcServiceTestimonials.json`)
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
          <title>Bryant Air Conditioning | Bryant Repair and Services in Dubai </title>
          <meta name="description" content={metadescription} />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href="https://www.fajservices.ae/services/air-conditioning-repair/brands/bryant/ " />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="Bryant Air Conditioning | Bryant Repair and Services in Dubai " />
          <meta property="og:description" content="Home and Commercial · Bryant (AC) Air Conditioning Repair in Dubai. Same-day HVAC, central, chiller AC, & FCU A/C maintenance services near you." />
          <meta property="og:url" content={metaURL} />
          <meta property="og:image" content={metaImage} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Bryant Air Conditioning | Bryant Repair and Services in Dubai " />
          <meta name="twitter:description" content="Home and Commercial · Bryant (AC) Air Conditioning Repair in Dubai. Same-day HVAC, central, chiller AC, & FCU A/C maintenance services near you." />
          <meta name="twitter:image" content={metaImage} />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
          
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">
        {/* intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Bryant Air Conditioning – Bryant AC Repair and  Service Dubai</h1>
            <p>
              To ensure optimal comfort throughout the year, it is imperative to address challenges such as elevated humidity levels, warm nights, and indoor allergens.
              <br />Established in 2010, <a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7">FAJ Technical Services L.L.C</a> is a reputable provider of Bryant air conditioning solutions in Dubai and Sharjah.
              <br />Our team of professionals specializes in Bryant AC repairs, cleaning service, and maintenance, as well as installation services for both residential and commercial units. We are dedicated to ensuring the efficient operation of your air conditioning system, thereby enhancing overall indoor comfort.
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

        {/* 2 col */}
        <section className="section cs_py_30">
          <div className="container">
            <div className="row gx-md-5 align-items-center expert_section_wrapper">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left" style={{ fontSize: "24px" }}>Bryant Ac Maintenance and Servicing</h2>

                <p className="mb-2">
                  In Dubai, choosing skilled technicians for Bryant <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/">AC repair</a> is essential to keep your space comfortable year-round.
                  <br />Our dedicated team excels in servicing Bryant AC systems, prioritizing efficiency to ensure you enjoy the perfect climate control, no matter the season!
                </p>

                <h2 className="cs_fs_24 mb-1 pt-1 mt-0 text-align-left" style={{ fontSize: "24px" }}>Top Common Signs That You Need Bryant AC Maintenance</h2>
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
                </div></div>

              <div className="col-md-6 ">
                <img className="bordered-img w-100"  src={getImageSrc('Experts-AC-Service-and-Maintenance')} alt="Bryant AC Service" />
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

            <h2 className="cs_fs_30">Why is Bryant AC Maintenance Service Important in Dubai?</h2>
            <p className="">
              To ensure the efficient operation of Bryant air conditioners in Dubai&apos;s extreme heat, regular servicing is essential. <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ</a> offers professional AC services designed to provide optimal cooling and comfort throughout the year.
              Our team is dedicated to maximizing your system&apos;s performance.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border"  src={getImageSrc('ac amc')} alt="Bryant Airconditioner Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong>  Extreme Weather: </strong> During hot summer months, temperatures can exceed 40°C (104°F). It’s vital to ensure your Bryant air conditioning systems are functioning efficiently to maintain comfort and safety. </li>
                  <li> <strong>  Energy Efficiency: </strong> A properly maintained Bryant air conditioner operates efficiently, resulting in significant energy savings and decreased DEWA electricity costs. </li>
                  <li> <strong>  Longevity of Equipment: </strong> Regular maintenance of Bryant AC systems is essential for optimal performance and efficiency, as it reduces repair costs and saves money for both residential and commercial properties. </li>
                  <li> <strong>  Improved Air Quality: </strong> Routine Bryant AC cleaning services prevent dust and allergens from entering our spaces, improve the air quality we breathe, and promote a healthier environment. </li>
                  <li> <strong>  Enhanced Comfort: </strong> For optimal comfort and efficiency, regular maintenance of Bryant AC systems in Dubai is essential. This ensures enhanced performance and a pleasant indoor climate. </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Common Bryant AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      <a href="https://www.youtube.com/watch?v=qnByeIsc3lY">Reduced airflow</a> from Bryant AC ducts may signal a blocked filter or faulty motor. Timely action is essential for efficient cooling and system longevity.
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
                      If your Bryant AC is blowing warm air, it may have problems with the compressor, gas levels, or ductwork.
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
                      Unusual sounds like grinding, squeaking, or banging from your Bryant AC may indicate mechanical issues that require attention.
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
                      A Bryant air conditioner that does not reduce humidity may have cooling capacity issues or may not be operating properly.
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
                      Water pooling around the Bryant AC or dripping from the vents may indicate a blocked drain or frozen coils.
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
                      High energy bills without increased usage may indicate inefficiencies in Bryant air conditioning due to dirty filters or duct leaks.
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

        {/* SERVICES WE OFFER  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR BRYANT AC SYSTEMS</h2>

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
                <p className='mb-0'>We offer central ducted split systems, FAHU units, and package units, along with all major services in the UAE.</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">

                  <li> <strong> Bryant AC Installation: </strong> The professional installation of various Bryant air conditioning systems ensures optimal performance. </li>
                  <li> <strong> Bryant AC Inspection: </strong> We provide precise fault diagnosis to identify system issues, along with detailed quotes and eligibility assessments to address your concerns. </li>
                  <li> <strong> Bryant AC Repair Service: </strong> We offer fast repair services for Bryant air conditioners, addressing leaks, electrical problems, and malfunctions. Contact us for more information! </li>
                  <li> <strong> Bryant AC Annual Maintenance Contract: </strong> The contract details the annual maintenance requirements for Bryant AC.</li>

                </ul>
                <p className="mb-0"><a href="https://www.linkedin.com/company/faj-technical-services-llc"><b>Regular maintenance</b></a>, including Annual Maintenance Contracts (AMC) and Planned Preventive Maintenance (PPM), is essential for ensuring optimal performance and longevity.</p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <AcBrandBenifit brandName="Bryant AC"/>

        {/* CHOOSE US  */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR  NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={getImageSrc('icon/fast-reliable')} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With <a href="/services/air-conditioning-repair/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your Bryant AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                    </p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">

                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('ACServicescomponent')} alt="Ac Maintenance Services" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={getImageSrc('icon/value')}  alt="Ac Maintenance Services" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in Bryant AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img className="" src={getImageSrc('icon/confidence-guarantee')} alt="Ac Maintenance Services" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img className="" src={getImageSrc('icon/trustworthy')} alt="Ac Maintenance Services" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our <a href="https://www.facebook.com/acrepairservices"><b>skilled AC technicians</b></a> are highly trained, and we provide excellent service for a variety of major AC brands efficiently.
                    </p>
                  </div>
                </div>
              </div>


            </div>
            {/* <!-- Delimit mobile --> */}
            <div className="col-12 uspdelimit w-100 text-center d-block d-none-1199 Xd-xl-none">
              <img className="blue-border-2 w-100" src={getImageSrc('ACServicescomponent')} alt="Ac Maintenance Services" />
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
           


            <h3 className="cs_fs_24 text-align-left">We specialise in Bryant ac services for the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"> <strong>  Bryant Split Air Conditioner Service: </strong> FAJ is a reputable provider of Bryant air conditioning cleaning services and maintenance in Dubai. Our team of skilled technicians specializes in Bryant VRF central air conditioning units, ensuring they operate at optimal levels. Whether you require routine <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/">AC maintenance</a> or immediate repairs, we are committed to delivering tailored services that prioritize your comfort.</p>
                <p className="mb-0"> <strong>  Bryant Central Air Conditioner Repair and Service: </strong> FAJ is a leading service provider for Bryant air conditioner repair and maintenance in Dubai. Committed to excellence, the company meets the diverse needs of its clients through routine maintenance and urgent repairs. With skilled technicians and a focus on high-quality service, FAJ ensures customer satisfaction while enhancing the performance and longevity of Bryant systems.</p>
                <p className="mb-0"> <strong>  Bryant AC Service and Repair: </strong> At Bryant AC Service, we’re dedicated to providing you with peace of mind through our skilled team of experienced technicians. At FAJ, we focus on delivering efficient and reliable maintenance, repair, and installation services for Bryant AC systems. You can count on our knowledgeable team to keep your Bryant HVAC system running smoothly, ensuring your comfort all year round!</p>
                <p className="mb-0"> <strong>  Bryant Inverter Air Conditioner Maintenance: </strong> Trust on our dedicated team to quickly address and resolve any issues with your Bryant air conditioner maintenance, ensuring it is restored to optimal performance without delay!</p>
                <p className="mb-0"> <strong>  Bryant HVAC Repair: </strong> We specialize in Bryant cassette AC and package unit AC systems, offering reliable repairs to ensure your unit operates efficiently.</p>
                <p className="mb-0"> <strong>  Bryant Ceiling AC Service and Repair: </strong> Our specialists can quickly diagnose and resolve any issues with your Bryant ceiling AC repair and ducted split AC service.</p>
                <p className="mb-0"> <strong>  Bryant VRF (Variable Refrigerant Flow) System Service and Repair: </strong> FAJ&apos;s Bryant Variable Refrigerant Flow (VRF) repair and maintenance services offer tailored HVAC solutions. Our skilled team emphasizes customer comfort and satisfaction, guaranteeing reliable service for your climate control requirements.</p>
                <p className="mb-0"> <strong>  Bryant Ducted Split AC Service and Repair: </strong> For dependable Bryant air conditioning repair and maintenance services in Dubai, our experienced technicians are prepared to assist you. With a strong proficiency in diagnosing various issues and interpreting error codes, we guarantee minimal disruption to your comfort. Rely on our prompt service to provide the cooling relief you require.</p>
                <p className="mb-0"> <strong>  Bryant Wall-Mounted Air Conditioner Service and Repair: </strong> In Dubai, UAE, where extreme heat is prevalent, maintaining a relaxing indoor climate is essential. Our Bryant package unit AC repair and maintenance, cleaning services assure optimal unit performance, helping you stay cool and comfortable even in high temperatures.</p>

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

export default BryantAcRepair;