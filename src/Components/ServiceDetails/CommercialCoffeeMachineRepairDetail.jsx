import { useEffect, useRef, useState, useCallback } from "react";
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
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);
const EyeSlashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
  </svg>
);
const CommercialCoffeeMachineRepairDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(titleSeo || "Commercial Coffee Machine Repairs & Maintenance in Dubai");
  const metadescription = String(description || "FAJ Expert Commercial Coffee Machine repairs in Dubai, coffee equipment, Vending, Espresso, Automatic coffee machines maintenance service near me");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Commercial COffee Machine repair, 3 Group Coffee Machine Repair");
  const metaURL = String(URL || "https://www.fajservices.ae/coffee-machine-repairs/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/Coffee-machine-servicing-title-image/public");

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
          fetch(`${import.meta.env.BASE_URL}data/commercialcoffeemachinesrepairFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/CoffeeMAchineReapairTestimonials.json`),
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
          

          <script type="application/ld+json">
            {JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "How much power does a commercial espresso machine use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "On average, commercial coffee machines consume between 1,500 to 3,500 watts per hour. This means that a machine running for 8 hours a day would use approximately 12,000 to 28,000 watt-hours per day, equating to around 360 to 840 kilowatt-hours per month."
                  }
                }, {
                  "@type": "Question",
                  "name": "How long does a commercial espresso machine last?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Typically, a well-maintained commercial coffee machine can last anywhere from 5 to 15 years. The lifespan varies due to differences in brands, models, and, most importantly, the level of maintenance and servicing it receives over time."
                  }
                }, {
                  "@type": "Question",
                  "name": "Do commercial espresso machines need a drain?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, commercial espresso machines often require drain lines. These machines generate condensation and have liquid lines designed to direct excess water into the drain."
                  }
                }, {
                  "@type": "Question",
                  "name": "What pressure do commercial espresso machines use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Espresso is primarily brewed at around 9 bars of pressure. However, some machines, particularly specialized espresso makers, can reach pressures of up to 20 bars. This higher pressure helps ensure consistent extraction, especially in compact or portable devices."
                  }
                }, {
                  "@type": "Question",
                  "name": "What is the flow rate of an espresso machine?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The pump in espresso machines delivers a maximum water flow, referred to as water debit. There are two types of pumps commonly used: vibration and rotary. Vibration pumps typically yield flow rates of 8 mL/s, while rotary pumps can achieve up to 30 mL/s."
                  }
                }, {
                  "@type": "Question",
                  "name": "How often should a commercial espresso machine be cleaned?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cleaning should occur daily and weekly. it's important to clean your espresso machine daily with backflush chemicals, along with brushing down and removing any accumulated coffee grounds or oils. This maintenance significantly extends the machine's lifespan."
                  }
                }, {
                  "@type": "Question",
                  "name": "How does a commercial espresso machine work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Key components include a pump that draws water from the reservoir, a boiler, and the portafilter, which is part of the group head. Most machines use an electric pump to force water through the compacted coffee in the portafilter."
                  }
                }, {
                  "@type": "Question",
                  "name": "What is a common problem with coffee machines?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Insufficient water flow can be a major issue. If your coffee machine is producing weak or slow water flow, it may be due to a clogged water line or filter. Check the water reservoir for debris or mineral buildup that could be obstructing flow, and inspect the water filter, replacing it if necessary."
                  }
                }, {
                  "@type": "Question",
                  "name": "What temperature should a commercial coffee maker be?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The optimal brewing temperature for coffee is between 195 degrees and 205 degrees Fahrenheit. This temperature range is crucial for ensuring the best extraction, depending on your grind consistency."
                  }
                }, {
                  "@type": "Question",
                  "name": "Should commercial coffee machines be turned off at night?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is important to allow the temperatures, particularly in your brew groups, to stabilize to ensure proper brewing. If your commercial espresso machine does not have a programmed on/off feature, it is recommended that you leave it on when not in use."
                  }
                }, {
                  "@type": "Question",
                  "name": "What happens if a coffee machine is not cleaned regularly?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Disregarding to clean machines regularly can lead to poor-tasting coffee and puts the machine at risk of damage. Most machines have a microporous steel filter, and the buildup of coffee tannins over time can clog this filter, causing jams and potential breakdowns."
                  }
                }, {
                  "@type": "Question",
                  "name": "Is descaling a coffee machine necessary?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Regular descaling of your coffee machine is essential to produce the best quality coffee. The frequency of descaling depends on how often the machine is used and the hardness of the water in your area."
                  }
                }, {
                  "@type": "Question",
                  "name": "Do coffee machines need servicing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, coffee machines experience significant wear and tear over time. Regular servicing can help identify any parts that need replacement or repair, potentially preventing major breakdowns in the future."
                  }
                }
                ]
              })}
          </script>

        </Helmet>
      </HelmetProvider>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Commercial Coffee Machine Repairs & Maintenance Service in Dubai</h1>
            <p>
              FAJ Company, established in 2010, offers international standard services for the installation and repair of commercial appliances and coffee machines.
              We provide planned maintenance contracts (AMC) for coffee machines, espresso machines, and vending machines used in cafes, restaurants, and catering services.
              <br /> At Commercial Coffee Machine Repairs, we are committed to helping you achieve your ideal cup of coffee efficiently. Whether installing, repairing, we prioritise quality and professionalism.
            </p>
          </div>
        </section>

        {/* Coffee Machine Repair & Maintenance  */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Coffee Machine Repair & Maintenance </h2>

                <p className="mb-2">
                  If you&apos;re searching for the best coffee machine repairs in Dubai for both businesses and residents, you&apos;ve come to the right place.
                  <br />Our knowledgeable and dedicated team can handle any coffee machine issues you may encounter.
                  With experience across various brands and models, we know how to get your machine running smoothly again.
                  <br />
                  So why wait? Give us a call, and we&apos;ll have your coffee machine back on your kitchen counter in no time, ready to be part of your daily routine.
                </p>

                <h2 className="cs_fs_20 mb-1 pt-3 border-small-top" style={{ fontSize: "22px" }}>Coffee Machine Servicing and AMC Contract </h2>
                <p className="mb-0">
                  Whatever you need, we've got you covered. A scheduled commercial coffee machine de-casing, cleaning service, or maintenance contract for your professional coffee machine is essential for ensuring smooth operation throughout the year, including necessary cleaning and descaling.
                  <br />
                  Regular maintenance is vital for any coffee machine, whether it's in an office, café, or restaurant. We're here to make your life easier.
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
                <br />Timing: Mon-Sat 8:00 AM to 6:00 PM - Sunday 12:00 PM to 6:00 PM. To book an appointment, you can call or reach us on WhatsApp at +971 50 746 4712.

              </p>

              <p className="appointment-col border-small-top pt-3" >The <a href="https://www.google.com/maps/dir//Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/@25.1105958,55.1452595,22158m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94!2m2!1d55.227661!2d25.1106186?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D" > FAJ workshop</a> is conveniently located near both Al Khail Road and Sheikh Zayed Road. When you drop off your coffee machine at the workshop, you will receive a <strong>discount</strong> on the technical inspection fee and other services.
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

        {/* What is the Importance of Coffee Machine Maintenance in Dubai? */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">What is the Importance of Coffee Machine Maintenance in Dubai?</h3>
            <p className="">
              Regular maintenance of coffee machines is crucial for businesses in Dubai, where quality coffee matters.
              It ensures consistent beverage quality, extends machine lifespan, and reduces downtime and repair costs, ultimately enhancing customer satisfaction.

            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('coffee-machine-service')} alt="Post Image" />
              </div>
              <div className="col-md-6">
                <ul className="mb-0">

                  <li> <strong> Importance in Commercial Kitchens: </strong> In the UAE, reliable maintenance of coffee machines is important for providing high-quality beverage service.</li>
                  <li> <strong> Professional Service for Commercial Use: </strong> Commercial coffee machines require specialised maintenance to ensure safety and performance.</li>
                  <li> <strong> Preventing Breakdowns: </strong> Routine maintenance, including cleaning and descaling, minimises the likelihood of costly repairs and downtime, which can negatively impact revenue.</li>
                  <li> <strong> Extending Lifespan: </strong> Regular maintenance helps prolong the life of the machines, leading to savings on replacement costs.</li>
                  <li> <strong> Lowering Maintenance Costs: </strong> Addressing minor issues early can prevent larger, more expensive repairs.</li>
                  <li> <strong> Maintaining Efficiency: </strong> Consistent upkeep ensures optimal performance and reduces energy consumption, making operations more cost-effective. </li>
                  <li> <strong> Restaurant Use: </strong> Regular maintenance boosts coffee quality and extends machine lifespan while ensuring safety and reliability for businesses.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The Most Common Problems with Espresso Machines */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3 className="text-center">The Most Common Problems with Espresso Machines   </h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Water Leaking</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Leaking is common in commercial coffee machines, usually from worn seals or loose fittings. Check the seals to begin troubleshooting.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Excessive Steam Release</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Steam escaping from unexpected areas of your coffee machine can be concerning and often needs attention.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Poor Espresso Extraction</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If your espresso shots are consistently under-extracted or over-extracted, it can affect the flavor and quality of your coffee.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Espresso Machine Issues</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Espresso machines can experience various problems that affect their functionality and the quality of the coffee produced
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Machine Not Running On</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Make sure your coffee machine is plugged in and the outlet is working. A loose connection might be the issue.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Coffee Tastes Bad</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Clean the machine regularly to prevent residue buildup that affects the taste, aroma, and quality of your coffee.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Coffee Grinder Malfunctions</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      In machines with built-in grinders, malfunctions can disrupt coffee production, especially if the grinder stops working.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Brewing Quality Coffee</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">

                      A coffee machine that isn't brewing may have an empty water reservoir. Check that it is filled and properly seated.

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

        {/* HERE ARE THE SERVICES WE OFFER FOR COFFEE AND ESPRESSO MACHINES  */}
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30"> HERE ARE THE SERVICES WE OFFER FOR COFFEE AND ESPRESSO MACHINES </h3>

            <div className="row align-items-center">
              <div className="col-xl-6">
                <img className="bordered-img w-100" src={getImageSrc('What-is-the-Importance-of-Coffee-Machine-Maintenance-in-Dubai')} alt="Post Image" />

              </div>

              <div className="col-xl-6">
                <p className='mb-0'>We specialise in all types and brands of coffee makers and espresso machines, including:
                </p>
                {/* <p className='mb-0'><strong>Our services include: </strong></p> */}
                <ul className="cs_list cs_style_ cs_fs_16 cs_mp_ mb-0">
                  <li> <strong> Installation: </strong> We provide professional installation for various coffee and espresso machines, ensuring optimal performance. </li>
                  <li> <strong> Cleaning and Maintenance: </strong> Proper maintenance of your espresso or coffee machine is essential for brewing great coffee and ensuring a long service life. </li>
                  <li> <strong> Descaling Espresso Machine: </strong> Descaling your espresso machine or coffee machine when prompted is essential. Removing limescale is necessary to maintain the machine&apos;s performance. </li>
                  <li> <strong> Coffee Equipment: </strong> We offer coffee grinders, descalers, coffee brewers, and coffee roaster services.  </li>
                  <li> <strong> Repair Service: </strong> We provide efficient repair services for all coffee machine components, quickly resolving leaks, errors, electrical failures, and malfunctions. </li>
                  <li> <strong> Annual Maintenance Contract: </strong> This contract details the annual maintenance terms for your espresso machine. Regular maintenance is essential for optimal performance and longevity.

                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section >

        {/* The Benefits Of Appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray ">
          <div className="container">
            <div className="row justify-content-center">
              <h3 className="cs_fs_30 mb-0">The Benefits Of Coffee Machines Service Dubai
              </h3>
              <div className="row gx-3 gy-5 mt-0">
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Ensuring-Safety')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">Ensuring Safety</h4>
                      <p className="small">Routine checks reduce the risk of electrical faults, gas leaks, and other hazards, keeping your home and family safe.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">Optimal Performance
                      </h4>
                      <p className="small">Regular maintenance helps your coffee machines run smoothly and efficiently, delivering the best results every time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">Lower Energy Bills</h4>
                      <p className="small">Energy efficient coffee machine translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Lower-Energy-Bills')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">Saving Money on Repair</h4>
                      <p className="small">Preventive maintenance catches issues early, reducing the risk of major breakdowns and expensive repair costs.</p>
                    </div>

                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Saving-Money-on-Repair')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">Coffee Machines Lifespan</h4>
                      <p className="small">Proper care and timely servicing can significantly increase life of your coffee machine, delaying the need for replacements.</p>

                    </div>

                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/Peace-of-Mind')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h4 className="text-uppercase mb-2 cs_fs_18">Peace of Mind
                      </h4>
                      <p className="small">Knowing your coffee machines are in top condition gives you confidence and removes the stress of unexpected failures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS! */}
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
                    <p>With a <Link to="/appliances-amc-service/"> maintenance contract</Link>, you get a full year of service, ensuring your coffee machine runs smoothly and providing peace of mind.</p>
                  </div>
                </div>


                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your coffee machine repair in Dubai or Sharjah. With a 3-4 hour window for when our technician will arrive.</p>
                  </div>
                </div>

              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('Coffee-Machine-Repair-&-Maintenance')} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">We Are Experts</h3>
                    <p>We are experts in coffee machine repair this is why most major brands trust us to handle their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>Inspection fee includes diagnosis, transport, and reinstallation upto two coffee machine at the same location in Dubai.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our skilled coffee machine technicians are highly trained, and we provide excellent service for a variety of major brands.</p>
                  </div>
                </div>
              </div>

              {/* <!-- Delimit mobile --> */}
              <div className="col-12 uspdelimit w-100 text-center d-block d-md-none">
                <img className="blue-border-2" src={getImageSrc('Coffee-Machine-Repair-&-Maintenance')} alt="FAJ icon service" />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray custom-css-box">
          <div className="container">
            <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY Coffee MAchine REPAIR SERVICE</h3>
            <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 157 to 280 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
            <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
              <b>We provide 2-month repair warranty</b><br />
              and <small>3-month parts warranty</small> as standard.</p>
            <h3 className="text-center">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h3>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Ascaso Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Maintenance and cleaning services for Ascaso espresso coffee machine in Dubai and Sharjah.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Lelit Coffee Machine Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Professional Lelit coffee machine repair, maintenance, and descaling services are available in your area.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Conti Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Find Conti espresso and coffee machine descaling and cleaning services near your location.

                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Jura Coffee Machine Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We provide Jura coffee machine maintenance services and espresso maker repair in Dubai.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Dr Coffee Machine Repairs</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">You can locate professional Dr Coffee machine maintenance and descaling services near you.</p>
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
                      Professional maintenance and cleaning for LA Marzocco espresso machine, including AMC services.
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
                      We provide espresso machine repair, including cleaning services, to keep machine in top shape.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">ECM Coffee Machine Servicing</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Reach out to us for maintenance and repair services for ECM coffee machine descaling.</p>
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
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">FRANKE Espresso Machine Fix</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      You can rely FAJ for the best Franke coffee machine repair, servicing, and descaling in Dubai
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Gaggia Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Look for a Gaggia espresso machine maintenance and cleaning service in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Vending Machine Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Coffee vending machine maintenance service and annual maintenance service in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Commercial Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Reliable coffee machine service, Espresso machine maintenance, and cleaning in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Vending Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Our team specializes in coffee vending machine maintenance and cleaning services in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Zulay Magia Coffee Machine Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      The offer in Dubai is for espresso machine repair and maintenance, and providing descaling service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Melitta Coffee Machine Servicing</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We are providing Melitta coffee maker repair in Dubai, offering sameday fixing coffee machine.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Farenheit Epsilon Coffee Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We provide reliable Farenheit Epsilon coffee machine repairing and servicing in your area.
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
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Built-in Coffee Machine Fix</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Express coffee machine repairs and servicing - Call now for a no-obligation quote!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
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
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Rocket Espresso Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Reliable Rocket Espresso Machine maintenance service at affordable prices - specialists you can trust.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Astoria Loft Espresso Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We are offering trained Astoria Loft coffee machine repair and maintenance services in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Magister Espresso Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">FAJ technicians help with Magister espresso machine maintenance and service near your location.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Orhcestrale Espresso Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">We are offering repair, cleaning, and descaling services for coffee machines & espresso machines.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Illy Saeco Royal Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">FAJ services and repairs of espresso machine and offers annual maintenance contracts.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Cafematic Automatic Coffee Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Automatic coffee machine and espresso machine yearly service agreement in Dubai, UAE</p>
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
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Isomac Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you are looking Isomac coffee machine repair, coffee machine service is available near you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Professional Coffee Machine Cleaning</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Range of espresso machine servicing and repair, as well as coffee maker repair in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Rancilio Volumetric Espresso Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">FAJ is providing fast volumetric espresso machine maintenance and repair services near you.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Coffee Machine Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We provide repairs and servicing of coffee machines in Dubai, as well as maintaining coffee equipment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Nuova Simonelli Appia Life</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Contact us today for Nuova Simonelli espresso machine service, maintenance, and descaling near me.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Victoria Arduino Espresso Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      FAJ offers maintenance and cleaning services for Victoria Arduino coffee machines in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Slayer Espresso Machine Service</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Call us for coffee machine repair or espresso machine descaling, annual agreement services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Profitec Ride Espresso Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      We provide Profitec Ride espresso machine servicing and repair, and service agreements in Dubai.
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
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Faema Automatic Coffee Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      FAJ offers expert repair and maintenance services for Faema automatic coffee machines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">CAYE Automatic Coffee Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      If you need a repair service for your Gaye automatic espresso machine, please contact us today
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Lavazza Office Vending Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Expert Lavazza coffee machine service and repair, and coffee vending machine maintenance near you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">NECTA Krea Espresso Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Call now for coffee machine technician and best coffee maker repair and cleaning service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">FRACINO Romano Espresso Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      FAJ skilled technicians offer Fracino Romano coffee machine repair and AMC services in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Synesso Espresso Machine</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Book your coffee machine repair, cleaning, and maintenance today.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">Jetinno Coffee Machine Repair</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Get Fast Jentinno coffee machine service, with repairs, descaling, and maintenance in Dubai.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_12 m-0 bg-dark-blue rounded-top text-light py-2 py-md-1">San Marco Coffee Machine Maintenance</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      Dubai&apos;s #1 coffee machine repair, cleaning service, and maintenance service contract.
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
        {/* Gallery */}
        <section className="section cs_py_30 gallery-section">
          <div className="container">
            <h3 className="mb-4 text-center">Gallery</h3>
            <div className="row g-4">

              <div className="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('CoffeeMachinesImages/commercial-coffee-machine-repairs')}
                  className="img-fluid rounded shadow mb-4"
                  alt="Coffee Machine Repair in Dubai"
                />

                <img
                  src={getImageSrc('CoffeeMachinesImages/coffee-machine-repair-gallery')}
                  className="img-fluid rounded shadow"
                  alt="Coffee Machine Repair"
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('CoffeeMachinesImages/commercial-coffee-machine-repair-service')}
                  className="img-fluid rounded shadow mb-4"
                  alt="Coffee Machine Repair Service"
                />

                <img
                  src={getImageSrc('CoffeeMachinesImages/commercial-coffee-machine-repairs-service')}
                  className="img-fluid rounded shadow"
                  alt="Commercial Coffee Machine Service"
                />
              </div>

              <div className="col-lg-4 col-md-6">
                <img
                  src={getImageSrc('CoffeeMachinesImages/commercial-coffee-machines-repairs')}
                  className="img-fluid rounded shadow mb-4"
                  alt="Espresso Machine Maintenance"
                />

                <img
                  src={getImageSrc('CoffeeMachinesImages/coffee-machine-repairs-service')}
                  className="img-fluid rounded shadow"
                  alt="Coffee Machine Repairs Service"
                />
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

        {/* testimobial section */}
        {!isLoading && testimonial_data.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg="img/testimonialbg.jpg"
            testimonialData={testimonial_data}
            sectionId="home-testimonials"
          />
        )}

        {/* FAQ&apos;s */}
        <section className="section cs_py_30  bg-dark-blue text-light">
          <div className="container">
            <h3 className="cs_fs_30 text-light">FAQ&apos;s</h3>

            <div className="cs_accordians_wrapper cs_style_1 p-0">

              {data.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`} >
                  <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                    <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye text-light"><EyeIcon /></i>
                      <i className="bi bi-eye-slash text-light"><EyeSlashIcon /></i>
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

        <section className="section cs_py_30">
          <Serviceappointemnt
            subtitle2="Contact us"
            title2="Book An Appointment"
          ></Serviceappointemnt>

        </section>

      </div >
    </>
  );
};

export default CommercialCoffeeMachineRepairDetail;