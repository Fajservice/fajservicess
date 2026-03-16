import { useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../../Contact/Serviceappointemnt';
import CallNowButton from '../../../Buttons/CallNowButton';
import WhatsappIconButton from "../../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../../MaintenanceContract/MaintenanceContract";
import GetQuoteButton from "../../../Buttons/GetQuoteButton";
import HeaderForm from "../../../Headeform/HeaderForm";
import AcProperties from "../../../Common/AcProperties";
import Practicaltip from "../../../Common/Practicaltip";
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

const DaikinAcRepair = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {

  // For SEO
  const metatitle = String(titleSeo || "Best Daikin AC Repair & Daikin AC Maintenance Services in Dubai");
  const metadescription = String(description || "FAJ technicians specialise in Daikin Air Conditioning repair and Daikin AC VRV systems service, as well as ducted split maintenance for all repairs in Dubai");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Daikin AC Repair in Dubai, Daikin Air Conditioner Maintenance, Daikin AC Service, Daikin Air Conditioning Repair, Daikin AC Fix, Daikin Air Conditioner Service, Daikin AC Cleaning, Daikin Air Conditioner Installation");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/daikin-ac-repair/public");
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
      "name": "Daikin AC Repair Services in Dubai - FAJ Technical Services L.L.C",
      "image": [
        "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"
      ],
      "url": "https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/",
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
        "name": "Daikin AC Repair Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Daikin AC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Daikin Split AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Daikin Central AC Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Daikin VRV / VRF Repair" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Daikin AC Maintenance" }
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
      "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/#faq",
      "mainEntity": [{
        "@type": "Question",
        "name": "How do I clear Daikin AC error code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple Steps to Reset Your Daikin Air Conditioning Unit Find the On/Off button on your Daikin air conditioner's remote. Press and hold this button for two seconds. Release the button, then press it once more. Finally, press it a third time. Your Daikin air conditioner should reset and start running again."
        }
      },{
        "@type": "Question",
        "name": "What is E3 code on Daikin AC VRV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "E3 – High pressure is excessively high (HPS activation) – The condenser may have short-circuited or overloaded, or the heat exchanger may be dirty."
        }
      },{
        "@type": "Question",
        "name": "How do I troubleshoot my Daikin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Daikin aircon troubleshooting—the full list If the on/off button is off. If the operation lamp is flashing (green flashing light) Double check the temperature on your remote. Check that the air filters are clean. Check that the air con is clear of obstructions. Check your doors and windows. Check that the sensor is working."
        }
      },{
        "@type": "Question",
        "name": "What is Daikin AC Error codes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AA0 External protection device activated A1 Malfunction of indoor unit PCB A3 Drain Level Control System Abnormality A4 Malfunction of freezing protection A5 High pressure control in heating, freeze-up protection control in cooling E0 Protection devices activated (unified) E1 Protection devices activated (unified) E3 Actuation of high pressure switch (HPS) E3 System No.1 Actuation of high pressure switch (HPS) E4 Actuation of low pressure switch (LPS) E5 Inverter compressor motor or overheat J1 Malfunction of pressure sensor J2 Malfunction of current sensor of compressor J3 Malfunction of discharge pipe thermistor J4 Malfunction of low pressure equivalent saturated temperature sensor system J5 Malfunction of suction pipe thermistor"
        }
      },{
        "@type": "Question",
        "name": "How often should a Daikin air conditioner be serviced?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While regular maintenance checks are not mandatory, they can be beneficial. Even if there are no visible issues, we suggest having your air conditioner inspected at least once a year to ensure optimal performance."
        }
      },{
        "@type": "Question",
        "name": "What is the common problem of Daikin air conditioner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The seven most common Daikin inverter problems that require air conditioning repair are: air conditioner not starting due to a blown fuse, refrigerant leaks, and dirty air filters causing the air conditioner to work slowly."
        }
      },{
        "@type": "Question",
        "name": "Why is my Daikin AC running but not cooling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check and adjust the thermostat: Ensure the thermostat is set to 'AUTO' instead of 'ON' so the fan operates only during cooling cycles. If changing the settings doesn’t solve the problem, replace the thermostat batteries."
        }
      },{
        "@type": "Question",
        "name": "Can I change AC Gas R410A to Gas R32?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Changing the refrigerant would directly violate the manufacturer's instructions and invalidate any associated warranty. Additionally, it would cause the system to be non-compliant with CE marking and the Pressure Equipment Directive, potentially leading to insurance issues."
        }
      },{
        "@type": "Question",
        "name": "How many times Daikin AC needs to be serviced in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is generally advisable to have your air conditioner serviced at least 2 times in year, particularly at the start of summer. This ensures that the unit operates efficiently when you need it the most. Air conditioners are made up of various complex electronic components that require regular maintenance to function optimally."
        }
      },{
        "@type": "Question",
        "name": "What happens if you Don't get aircon serviced every 3 months in Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you neglect regular maintenance of your air conditioner, dust, rust, and other debris can accumulate in the system, leading to decreased functionality. Your air conditioner will not operate as efficiently as a new one."
        }
      }]
    },
   {
  "@type": "BreadcrumbList",
  "@id": "https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/#breadcrumb",
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
      "name": "Daikin",
      "item": "https://www.fajservices.ae/services/air-conditioning-repair/brands/daikin/"
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
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcBrand/DaikinAcRepairfaq.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/DaikinAcServiceTestimonials.json`)
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
        <Helmet >
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
        <meta property="og:url" content={metaURL} />
        <meta property="og:image" content={metaImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metatitle} />
        <meta name="twitter:description" content={metadescription} />
        <meta name="twitter:image" content={metaImage} />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet >

      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">
        {/* intro */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">High-Rated Daikin Air Conditioning Repair and Maintenance Service Specialists in Dubai</h1>
            <p>Are you looking for a Daikin air conditioning maintenance provider for your home or business? We can help!<br/><a href="https://maps.app.goo.gl/soNMACLuaHwdCzKx7">FAJ Technical Services L.L.C</a> offers complete services for Daikin air conditioning systems throughout Dubai, including regular repair, maintenance, and installation.<br/>Our team of Daikin AC professionals is highly skilled and knowledgeable, ensuring they meet the highest industry standards. They will arrive at your residence or commercial premises fully equipped to handle any maintenance task related to Daikin air conditioning. Additionally, we offer tailored service and maintenance packages to suit your business needs.
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


        {/* col 2 */}
        <section className="section cs_py_30">
          <div className="container">
            <div className="row gx-md-5 align-items-center expert_section_wrapper">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left" >Daikin ac Maintenance and Servicing</h2>

                <p className="mb-2">
                  When it comes to Daikin air conditioner repairs, it&apos;s vital to choose a professional and dependable technician for your home or office.
                  <br />

                  We are the experts in Daikin <a href="/services/air-conditioning-repair/ac-service/">AC repair</a>, service, and maintenance across Dubai and Sharjah.
                  Count the FAJ team to deliver exceptional service and ensure your comfort throughout the year.

                </p>


                <h2 className="cs_fs_24 mb-1 pt-1 mt-0 text-align-left" >Top Common Signs That You Need Daikin AC Maintenance</h2>
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
                  src={getImageSrc('daikin-ac-repair')}
                  alt="Crafft Airconditioner Repair"
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

            <h2 className="cs_fs_30">Why is Daikin AC Maintenance Service Important in Dubai?</h2>
            <p className="">
              To keep your Daikin air conditioner running efficiently in Dubai, regular <a href="https://www.fajservices.ae/services/air-conditioning-repair/ac-service/"> AC maintenance</a> is key. At FAJ, our experienced team is here to ensure your comfort.
              <br />For convenient AC maintenance in your area, contact us!

            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('ac amc')} alt="daikin Airconditioner Repair" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">

                  <li> <strong> Extreme Weather: </strong>  During summer, temperatures can reach over 40°C (104°F). Regular maintenance ensures that Daikin air conditioning systems operate efficiently in these conditions.</li>
                  <li> <strong> Energy Efficiency: </strong>  A well-maintained Daikin air conditioning unit operates more efficiently, helping to save energy and reduce electricity bills.</li>
                  <li> <strong> Longevity of Equipment: </strong> Regular maintenance for your Daikin air conditioner service can extend its lifespan, reduce the need for costly repairs and replacements, and ultimately save you money. </li>
                  <li> <strong> Improved Air Quality: </strong> Regular of Daikin AC maintenance services units prevents dust and allergens, ensuring cleaner air.</li>
                  <li> <strong> Enhanced Comfort: </strong> Regular of Daikin air conditioning maintenance in Dubai is essential for ensuring daily comfort, efficiency, and consistent cooling.</li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problems  */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Common Daikin AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Weak Airflow
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you notice <a href="https://www.youtube.com/watch?v=qnByeIsc3lY"><b>reduced airflow</b></a> from your vents, it may indicate an issue with your Daikin AC system, such as a clogged filter or a malfunctioning fan.
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
                      If your Daikin AC is blowing warm or room temperature air instead of cold air, there may be issues with the compressor, gas levels, or ductwork.
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
                      Unusual sounds such as grinding, squeaking, or banging from your Daikin AC unit may indicate mechanical issues that need attention.
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
                      Foul odours from the vents may indicate mold or mildew in the system and should be addressed immediately.
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
                      The inability to maintain the desired temperatures could indicate issues such as dirty filters, low refrigerant levels, or a malfunctioning thermostat.
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
                      A Daikin air conditioner that is not effectively reducing humidity may have issues with its cooling capacity or may not be functioning properly.
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
                      Water pooling around the Daikin AC or dripping from the vents may indicate a blocked condensate drain, frozen coils, or other issues.
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
                      High energy bills without an increase in usage may indicate inefficiency in the Daikin AC due to dirty filters, duct leaks, or other issues.
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
            <h2 className="cs_fs_30 text-uppercase">HERE ARE THE SERVICES WE OFFER FOR DAIKIN AC SYSTEMS</h2>

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
                  <li> <strong> Daikin AC Installation: </strong> Professional installation of various Daikin air conditioning systems to guarantee optimal performance. </li>
                  <li> <strong> Daikin AC Diagnostics: </strong> Comprehensive fault diagnosis to accurately identify issues. We offer eligibility assessments and detailed quotes to address any concerns regarding your system. </li>
                  <li> <strong> Daikin AC Repair Service: </strong> We provide prompt and effective repair services for all Daikin AC components, addressing issues such as leaks, electrical failures, and system malfunctions. Contact us for specific services or any questions you may have! </li>
                  <li> <strong> Daikin AC Annual Maintenance Contract: </strong> This contract details the terms and services for Daikin AC annual maintenance. </li>
                </ul>
                <p className="mb-0">
                  <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> of Daikin AC systems (AMC / PPM) is essential for ensuring optimal performance, efficiency, and longevity.
                </p>
              </div>

            </div>
          </div>
        </section >

        {/*  Benefits */}
        <AcBrandBenifit brandName=" Daikin AC"/>

        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
        <section className="section cs_py_30">
          <div className="container container-md container-sm">
            <h2 className="my-3 why-choose-h2 text-center mb-3">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR  NEEDS!</h2>
            <div className="usps align-items-center	">
              {/* <!-- First Column --> */}
              <div className="uspcol col-1">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/fast-reliable')} alt="Fast, Reliable Service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Reliable, Priority, and Quick</h3>
                    <p>You can count on <a href="https://www.instagram.com/fajtechnicalservicesllc/"><b>efficient service</b></a>! Our same-day repair or next-day service visits ensure that your needs are met quickly.</p>
                  </div>
                </div>

                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/experts')} alt="We Are Experts" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Feeling Of Calm</h3>
                    <p>With <a href="/services/air-conditioning-repair/ac-annual-maintenance-contract/">annual maintenance contract</a>, you get a full year of service, ensuring your AC runs smoothly and providing peace of mind.
                    </p>
                  </div>
                </div>

                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your Daikin AC repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.
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
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in Daikin AC repair. This is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>We are dedicated to ensuring customer satisfaction with timely service, prompt issue resolution, and affordable prices.</p>

                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
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
           
            <h3 className="cs_fs_24 text-align-left">We specialise in Daikin ac services for the following types</h3>
            <div className="row">
              <div className="col-12">

                <p className="mb-0"> <strong> Daikin Split Air Conditioner Service: </strong> FAJ provides dependable Daikin AC repair and maintenance services in Dubai. Our team consists of professionals specializing in Daikin split systems, Daikin VRV, and Daikin central air conditioning units. </p>
                <p className="mb-0"> <strong> Daikin Central Air Conditioner Repair and Service: </strong> FAJ is a Dubai-based service provider specializing in Daikin AC repair services. The company focuses on Daikin air conditioning systems and offers a range of services, including repairs and regular maintenance. </p>
                <p className="mb-0"> <strong> Daikin AC Service and Repair: </strong> Daikin AC service offers peace of mind with skilled professionals. At FAJ, we prioritize efficiency and reliability in all our work. Our expert team ensures that your air conditioning system operates at its best, whether you require maintenance, repairs, or installation. Trust us with your HVAC needs—your comfort is our highest priority. </p>
                <p className="mb-0"> <strong> Daikin Inverter Air Conditioner Maintenance: </strong> Rely on our expert team to swiftly address any issues with your Daikin air conditioner and restore its full functionality. </p>
                <p className="mb-0"> <strong> Daikin HVAC Repair: </strong> We have extensive knowledge of Daikin air conditioning systems, providing reliable repairs to ensure your unit operates efficiently. </p>
                <p className="mb-0"> <strong> Daikin Ceiling AC Service and Repair: </strong> Our experts can accurately diagnose and fix any issues with your Daikin air conditioner. </p>
                <p className="mb-0"> <strong> Daikin VRV (Variable Refrigerant Volume) System Service and Repair: </strong> The Daikin VRV (Variable Refrigerant Volume) System repair and service ensures your peace of mind because you are in the right place. FAJ prioritizes efficiency and reliability. </p>
                <p className="mb-0"> <strong> Daikin Ducted Split AC Service and Repair: </strong> Daikin ducted split AC service in Dubai requires specialist assistance, as only experts can effectively address air conditioning issues. We provide hassle-free Daikin air conditioning repair services. </p>
                <p className="mb-0"> <strong> Daikin Wall-Mounted Air Conditioner Service and Repair: </strong> Beat the scorching heat with optimal Daikin AC cleaning service and fixing error in Dubai! Our professional Daikin AC services ensure your unit operates efficiently, providing comfort and peace of mind. </p>

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
                <GetQuoteButton />
                <CallNowButton />
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

export default DaikinAcRepair;