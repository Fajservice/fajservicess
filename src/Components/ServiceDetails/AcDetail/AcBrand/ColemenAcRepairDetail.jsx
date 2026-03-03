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
import Testimonial1 from '../../../Testimonial/Testimonial1';
import PriceCard from "../AcLocation/PriceCard";
import BeforeAfter from "../../../BeforeAfter/BeforeAfter";
import AcBrandBenifit from "./ACBrandComponents/ACBrandBenifit";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const ColemenAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Coleman Ac Repair in Dubai, Coleman Air Conditioner Maintenance, Coleman AC Service, Coleman AC Fix, Coleman Air Condition Repair, Coleman Air Condition Maintenance, Coleman AC Service in Dubai, Coleman Air Conditioner Repair in Dubai, Coleman Air Conditioner Service in Dubai, Coleman AC Repair Dubai, Coleman AC Service Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/brands/coleman/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public");

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
      "name": "Coleman AC Repair Services in Dubai - FAJ Technical Services",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/air-conditioning-repair/brands/coleman/",
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
        "name": "Coleman AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Coleman AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Coleman Split AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Coleman Central AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Coleman AC Maintenance" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Coleman AC Gas Refilling" }
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
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/coleman/#faq",
      "mainEntity": [{
        "@type": "Question",
        "name": "How to maintain a Coleman air conditioner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For single-zone mini-split systems, change the air filter every 3 to 6 months, clean both indoor and outdoor coils, check and clean the drain pan and line, inspect refrigerant levels, and schedule an annual tune-up."
        }
      },{
        "@type": "Question",
        "name": "How to save energy in a Coleman Air Conditioner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In COOL mode, press 'TEMP' and 'CLOCK' together to activate the energy-saving function. The display will show 'SE', and the system will automatically optimize the temperature for energy efficiency."
        }
      },{
        "@type": "Question",
        "name": "What is the best setting for Coleman AC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Set the thermostat to 78°F (26°C) during summer for comfort and energy efficiency. Use the timer feature to schedule cooling around your daily routine."
        }
      },{
        "@type": "Question",
        "name": "Does Coleman AC consume less electricity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coleman ACs are designed with advanced technology to use less power compared to other brands while still offering effective cooling. Their inverter systems are particularly energy-efficient."
        }
      },{
        "@type": "Question",
        "name": "Why does my Coleman AC keep turning off?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your unit may be overheating due to compressor grime, or there could be a refrigerant leak. A faulty thermostat, damaged wiring, or an electrical issue might also cause repeated shut-offs."
        }
      },{
        "@type": "Question",
        "name": "What is the code E1 on Coleman AC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "E1 indicates high pressure in the system, often caused by dirty coils, restrictions, or overcharging. Check the coils and fans first. If the issue persists, a technician should inspect the high-pressure switch and refrigerant levels."
        }
      },{
        "@type": "Question",
        "name": "What is the error code E3 on a Coleman?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "E3 signals a low pressure protection alert. If the low-pressure switch stays off for 30 seconds while the unit is on or in standby, the system triggers this fault. After three such faults in 30 minutes, the system stops auto-resetting."
        }
      },{
        "@type": "Question",
        "name": "What is the error code E2, E4, and E5 on Coleman AC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "E2: Indicates frosting on the indoor unit radiator. E4: Signals high-temperature protection due to compressor tube overheating. E5: Triggers over-current protection caused by high or unstable voltage."
        }
      },{
        "@type": "Question",
        "name": "Why is my Coleman air conditioner not cooling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check for a dirty air filter and clean it if necessary. Ensure that the temperature is correctly set and that all required doors and windows are closed for optimal cooling."
        }
      },{
        "@type": "Question",
        "name": "What does temperature mean in a Coleman AC remote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pressing the TEMP button lets you cycle between viewing the set temperature, indoor ambient temperature, and outdoor ambient temperature on the display of the indoor unit."
        }
      }]
    },
 {
  "@type": "BreadcrumbList",
  "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/coleman/#breadcrumb",
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
      "name": "Coleman",
      "item": "https://www.fajservices.ae/services/air-conditioning-repair/brands/coleman/"
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
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcBrand/ColemenAcRepairfaq.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/ColemenAcServiceTestimonials.json`)
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
          <title>Coleman Air Conditioning Cleaning and Maintenance Service</title>
          <meta name="description" content="Relax with Residential And Commercial Coleman Air Conditioning. We are experts in HVAC and central air conditioner repair, maintenance service Dubai" />
          <meta name="keywords" content={metaKeyword} />
          <meta name="author" content={metaAuthor} />
          <meta name="robots" content="index, follow" />

          <link rel="canonical" href={metaURL} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="Coleman Air Conditioning Cleaning and Maintenance Service" />
          <meta property="og:description" content="Relax with Residential And Commercial Coleman Air Conditioning. We are experts in HVAC and central air conditioner repair, maintenance service Dubai" />
          <meta property="og:url" content={metaURL}/>
          <meta property="og:image" content={metaImage} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Coleman Air Conditioning Cleaning and Maintenance Service" />
          <meta name="twitter:description" content="Relax with Residential And Commercial Coleman Air Conditioning. We are experts in HVAC and central air conditioner repair, maintenance service Dubai" />
          <meta name="twitter:image" content={metaImage} />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
          
        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">
        {/* intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Coleman Air Conditioner Repair and Maintenance Service in Dubai</h1>
            <p><a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7">FAJ Technical Services L.L.C</a>,  established in 2010, boasts an experienced facilities team specializing in Coleman HVAC repair, maintenance, and installation in Dubai and Sharjah for both residential and commercial units.
              <br /> A Coleman air conditioner is essential for maintaining a comfortable indoor environment year-round. Regular AMC servicing is key to optimal performance, and we offer professional Coleman air conditioner servicing in Dubai to ensure your system runs smoothly and efficiently.
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
            <div className="row gx-md-5 expert_section_wrapper">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left" style={{ fontSize: "24px" }}>Coleman Ac Maintenance and Servicing </h2>

                <p className="mb-2">
                  To ensure effective Coleman air conditioning repair, it is essential to engage a qualified technician for residential and commercial needs.
                  <br />At <a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ</a>, we specialize in the repair, servicing, and maintenance of Coleman AC units throughout Dubai and Sharjah, committed to providing year-round comfort for our clients.
                </p>

                <h2 className="cs_fs_24 mb-1 pt-0 mt-0 text-align-left" style={{ fontSize: "24px" }}>Top Common Signs That You Need Coleman AC Maintenance</h2>
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
                <img className="bordered-img w-100" src={getImageSrc('acfilterinner')}  alt="coleman AC Service" />
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

            <h2 className="cs_fs_30">Why is Coleman AC Maintenance Service Important in Dubai?</h2>
            <p className="">
              Regular maintenance of Coleman air conditioners (AC) in Dubai is essential for optimal performance. FAJ provides comprehensive services to ensure your system operates efficiently. With our proactive approach, you can be confident that your Coleman AC is functioning at its best. If you need Coleman <a href="/services/air-conditioning-repair/ac-service/"> AC maintenance near you</a>, please contact us.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('ac amc')}  alt="coleman Airconditioner Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li> <strong> Extreme Weather: </strong> In the summer, temperatures can exceed 40°C (104°F). Routine maintenance helps ensure that Coleman  AC SYSTEMS operate efficiently in these conditions.</li>
                  <li> <strong> Energy Efficiency: </strong> A well-maintained Coleman  AC unit functions more efficiently, conserving energy and reducing electricity bills.</li>
                  <li> <strong> Longevity of Equipment: </strong> Regular AC maintenance of your Coleman  air conditioner unit can extend its lifespan, reduce the need for costly repairs and replacements, and ultimately save you money.</li>
                  <li> <strong> Improved Air Quality: </strong> Regular maintenance prevents the accumulation of dust and allergens, which helps to ensure cleaner air.</li>
                  <li> <strong> Enhanced Comfort: </strong> Regular Coleman AC servicing in Dubai ensures comfort, efficiency, and consistent cooling daily.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Common Coleman AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you notice decreased airflow from your vents, it may signal an issue with your coleman  AC system, such as a <a href="https://www.youtube.com/watch?v=qnByeIsc3lY">blocked filter</a> or a faulty fan.
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
                      If your coleman  AC is blowing warm or room temperature air instead of cold, it may indicate issues with the compressor, refrigerant, or ductwork.

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
                      Strange sounds such as grinding, squeaking, or banging from your coleman  AC unit can indicate mechanical issues that need attention.

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
                      Musty odors from the vents may signal mold or mildew in the system and should be addressed promptly.


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
                      The inability to maintain desired temperatures may indicate issues such as dirty filters, low refrigerant levels, or a faulty thermostat.
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
                      A coleman  air conditioner that doesn’t effectively lower humidity may have cooling capacity issues or be operating improperly.
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
                      Water pooling around the coleman  AC or dripping from vents may indicate a blocked condensate drain, frozen coils, or other issues.

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
                      High energy bills without increased usage may indicate coleman  AC inefficiency from dirty filters, duct leaks, or other issues.
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
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR COLEMAN AC SYSTEMS</h2>

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
                <p className='mb-0'>We specialize in various types and brands of HVAC systems, including Fresh Air Handling Units (FAHU).</p>
                <p className='mb-0'><strong>Our services include:</strong></p>
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Coleman AC Installation: </strong> Professional installation of various Coleman AC systems for peak performance. </li>
                  <li> <strong> Coleman AC Diagnostics: </strong> Comprehensive fault finding to accurately diagnose issues. We offer eligibility assessments and detailed quotes to address any concerns with your system. </li>
                  <li> <strong> Coleman AC Repair Service: </strong> Prompt and effective repair services for all Coleman AC components, addressing issues like leaks, electrical failures, and system malfunctions. Contact us for specific services or any questions you may have! </li>
                  <li> <strong> Coleman AC Annual Maintenance Contract: </strong> This contract details the terms and services for annual maintenance of Coleman air conditioner units. </li>
                </ul>
                <p className="mb-0"><a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is crucial for the optimal performance, efficiency, and longevity of your air conditioning system.</p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <AcBrandBenifit brandName="Coleman AC"/>

        {/* CHOOSE US  */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR  NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')}  alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')}  alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With <a href="/services/air-conditioning-repair/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your Coleman AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
                    </p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">

                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('ACServicescomponent')}  alt="Ac Maintenance Services" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')}  alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in Coleman AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')}  alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')}  alt="FAJ icon service" />
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
              <img className="blue-border-2 w-100" src={getImageSrc('ACServicescomponent')}  alt="Ac Maintenance Services" />
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
           


            <h3 className="cs_fs_24 text-align-left">We specialise in Coleman AC services for the following types</h3>
            <div className="row">
              <div className="col-12">
                <p className="mb-0"> <strong>  Coleman Split Air Conditioner Service: </strong> FAJ provides dependable repair and maintenance services for Coleman AC units in Dubai. Our team consists of professionals who are experts in Coleman split systems, Coleman VRF, and Coleman central air conditioning units. </p>
                <p className="mb-0"> <strong>  Coleman Central Air Conditioner Repair and Service: </strong> Located in Dubai, FAJ is your premier choice for Coleman AC repair services. We specialise in Coleman air conditioning systems and provide a range of comprehensive services, from repairs to regular maintenance. </p>
                <p className="mb-0"> <strong>  Coleman VRF (Variable Refrigerant Flow) System Service and Repair: </strong> The Coleman VRF (Variable Refrigerant Flow) System service guarantees you peace of mind because you are in the right place. Indeed, FAJ prioritises efficiency and reliability. </p>
                <p className="mb-0"> <strong>  Coleman Inverter Air Conditioner Maintenance: </strong> Rely on our expert team to quickly fix any problems with your Coleman air conditioner and restore its full functionality. </p>
                <p className="mb-0"> <strong>  Coleman HVAC Repair: </strong> With in-depth expertise in Coleman air conditioning systems, we offer reliable repairs to ensure your unit operates efficiently. </p>
                <p className="mb-0"> <strong>  Coleman Ceiling AC Service and Repair: </strong> No matter what the issue is with your Coleman air conditioner, our experts can accurately diagnose and fix it. </p>
                <p className="mb-0"> <strong>  Coleman AC Service and Maintenance: </strong> Is your AC not working? Don’t endure uncomfortable temperatures and stuffy air, or risk damage to your equipment—FAJ can get your Coleman air conditioning functioning again in no time! </p>
                <p className="mb-0"> <strong>  Coleman Ducted Split AC Service and Repair: </strong> Coleman ducted split AC service in Dubai requires expert assistance, as only specialists know how to address air conditioning issues. We provide a hassle-free Coleman air conditioning repair service and fix errors. </p>
                <p className=""> <strong>  Coleman Wall-Mounted Air Conditioner Service and Repair: </strong> Looking for relief from the scorching heat? Discover how to keep your Coleman AC running smoothly in Dubai! Our expert Coleman AC services ensure your unit remains cool and efficient, providing comfort and peace of mind. </p>

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

export default ColemenAcRepair;