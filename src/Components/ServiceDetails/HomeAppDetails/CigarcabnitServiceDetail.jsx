import { useEffect, useRef, useState, useCallback } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import HeaderForm from "../../Headeform/HeaderForm";
import Testimonial1 from "../../Testimonial/Testimonial1";
import BrandsSliderSection from "../../BrandsSliderSection";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const CigarcabnitServiceDetail = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL, Image }) => {
  // For SEO
  const metatitle = String(titleSeo || "Cigar Humiodor Repair in Dubai | Dehumidifier Maintenance");
  const metadescription = String(description || "FAJ is an expert in Cigar humidor repair in Dubai. Call us for de humidor, fridge cooler & electric humidor maintenance & service center near me");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "Cigar Cabinet Humidifier Repair, Dehumidifier Service, Cigar Fridge Repair, Cigar Cooler Service, Electric Humidor Maintenance Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/home-appliances-repair/cigar-humidor-repair/");
  const metaImage = String(Image || "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/cigarcabnitrepair/public");

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
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/FAQs/CigarcabnitServiceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/HomeAppData/Testmonials/GasRangeRepairServiceTestimonial.json`),
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

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:image" content={metaImage} />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Cigar Humidor Repair, Humidor Maintenance Dubai, Cigar Humidor Service, Humidor not maintaining humidity, Humidor Temperature Issue, Humidor Seal Repair, Humidor Hygrometer Calibration, Humidor Humidifier Replacement, Cigar Cabinet Repair, Humidor Restoration, Cigar Storage Repair, Commercial Humidor Repair, Humidor Technician Dubai, Humidor Fixing Service",
              "image": ["https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"],
              "url": "https://www.fajservices.ae/services/home-appliances-repair/cigar-humidor-repair/",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "3452",
                "bestRating": "5"
              }
            })}
          </script>
        </Helmet>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Cigar Humidor Repair in Dubai | De Humidor Service Center</h1>
            <p>Since 2010, FAJ has been providing expert repair and maintenance for top cigar humidors and professional cigar storage. If your cigar cabinet humidor is not working, don't buy a new one!<br />
              FAJ is an authorized service center for <a href="https://afidanoshop.com/collections/all">Afidano Cigar Humidors</a>, providing in warranty and out-of-warranty repair, maintenance service in Dubai, Sharjah, and Abu Dhabi since 2024.<br />
              Our experienced team can fix problems like broken sensors, uneven humidity, and power problems, restoring your humidor to like-new condition. We use genuine spare parts and high-quality tools, focusing on repairs rather than replacements.</p>
            <div id="get-quote" className=" mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
            {/*  */}
          </div>
        </section>



        {/* Cooking Range Repair Nearby You */}

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Cigar Humidor Repair Service Nearby</h2>
                <p className="mb-2">Experience excellent service of cigar humidors with us. We offer reliable repair to ensure your humidors are functioning at their best.
                  Whether you have a walk-in humidor, a freestanding unit, or a built-in cigar humidor, we are here to assist you.</p>
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>
                  Express Cigar Cabinet Repair Service
                </h2>
                <p><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 365 to 530 depending on unit, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p> <p className="pt-3 border-small-top"><strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
                  <b>We provide 2-month repair warranty</b><br />
                  and <small>3-month parts warranty</small>as standard.</p>
              </div>

              <div className="col-md-6 ">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/boj7h-gOf7M?si=0HYuG6UENnnUN6ze"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

              </div>
            </div>
            <div className="appointment-col border-small-top pt-3">
              <p className="appointment-col">The <a href="https://www.google.com/maps/dir//Warehouse+No+-+S-02+Gate+35+Street+18b+-+Al+Quoz+-+Al+Quoz+Industrial+Area+4+-+Dubai+-+United+Arab+Emirates/@25.1105958,55.1452595,22158m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3e5f699a600aceeb:0xa6121b25d557aa94!2m2!1d55.227661!2d25.1106186?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank"
              >FAJ workshop</a> is conveniently located near both Al Khail Road and Sheikh Zayed Road. When you drop off your appliance at the workshop, you will receive a <strong>discount</strong> on the technical inspection fee and other services.
              </p>
              <div id="get-quote" className="mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3">
                  <WhatsappIconButton />
                  <CallNowButton />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Why is Oven Maintenance Service Important in Dubai? */}
        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">Why is it important to maintain a cigar humidor in Dubai?</h2>
            <p>Regular maintenance of a cigar humidor is essential for your use. It ensures the quality of the cigars, extends the lifespan of the cigar cabinet fridge, and reduces repair costs.</p>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="blue-border" src={getImageSrc('cigarcabnitrepairservice')} alt="Cigarcabnit Repair Service" />
              </div>
              <div className="col-md-6">
                <ul>
                  <li><strong>Cigar Humidor Preventing Breakdowns: </strong>Regular maintenance, which includes cleaning and descaling, helps minimize expensive repairs and reduces downtime.</li>
                  <li><strong>Cigar Humidor Extending Lifespan: </strong>Regular maintenance extends the lifespan of a cigar cabinet, which helps save on replacement costs.</li>
                  <li><strong>Cigar Humidor Lowering Maintenance Costs: </strong>Addressing small issues early can help prevent larger and more costly repairs later on.</li>
                  <li><strong>Cigar Humidor Maintaining Efficiency: </strong>Regular maintenance ensures optimal performance and helps reduce energy consumption.</li>
                  <li><strong>Cigar Humidor Home Use: </strong>Regular maintenance enhances the quality and lifespan of cigar cabinet refrigerators. Professional servicing is beneficial for both home and business users in Dubai.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>



        {/* The Most Common Problems With Oven */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems of Cigar Cabinet Humidor</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Ignoring Humidity Levels</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">After seasoning your humidor, keep humidity steady. Many owners "set and forget", causing dry or mouldy cigars.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Overcrowding the Humidor</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">
                      While it&apos;s tempting to fill your humidor completely with cigars, it&apos;s best to avoid overcrowding, as it can cause various issues.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Incorrect Cigar Storage
                    </h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">The location of your humidor is crucial for maintaining cigar quality. Many store it in unsuitable places, harming the cigars&apos; taste.
                    </p>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Wrong Humidification Solution</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Not all humidification solutions are equal. Using the wrong type can cause flavor issues or even damage your humidor.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Humidor Monitoring Neglect</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Setting up your humidor is just the first step. Regularly check the internal environment to keep your cigars in top condition.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">OHumidor Door Open Too Often</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">it&apos;s tempting to show off or admire your cigars, but frequent opening of your humidor can lead to problems.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className=" box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Improper Cigar Packaging</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Cigar enthusiasts often mistakenly remove cigars from their original packaging before storing them in a humidor.</p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-3">
                <div className="box-content-container rounded border shadow">
                  <div className="text-center">
                    <h3 className="cs_fs_16 my-0 bg-dark-blue rounded-top text-light py-2 py-md-1 mt-0">Not Seasoning Cigar Humidor</h3>
                  </div>
                  <div className="inner-apcs-feat-desc">
                    <p className="p-2 mb-0">Seasoning is a crucial step in setting up a new humidor. Skipping this process can lead to dry cigars or unpleasant tastes.</p>
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

        {/* HERE ARE   */}
        <section className="section cs_py_30 ">
          <div className="container">
            <h2 className="cs_fs_30">Here Are The Services We offer For All Cigar Humidors</h2>
            <p className='mb-0'>We specialise in all types and brands of Cigar cabinet humidor, including cigar walk in chiller:</p>
            <div className="row align-items-center">
              <div className="col-xl-6">
              <img className="bordered-img w-100" src={getImageSrc('cigarcabnitrepair')} alt="Cigarcabnit Repair Service" />

              </div>

              <div className="col-xl-6">
                <p className="mb-1"><strong>Our services include:</strong></p>
                <ul>
                  <li><strong>Cigar Cabinet Humidor Installation: </strong>Expert installation of various types and brands of cigar walk-in chillers and spare parts, ensuring optimal performance and efficiency.</li>
                  <li><strong>Cigar Cabinet Humidor Diagnostics: </strong>We thoroughly diagnose issues and offer eligibility assessments with detailed quotes for your built-in cigar refrigerator.</li>
                  <li><strong>Cigar Cabinet Humidor Repair Service: </strong>Efficient repair services for all cigar humidifier components, ensuring quick resolution of issues such as leaks, electrical failures, and system malfunctions.</li>
                  <li><strong>Cigar Cabinet Humidor Annual Maintenance Contract: </strong>This contract outlines the terms and services covered for the annual maintenance of the built-in cigar humidor, cigar walk-in chiller, and cigar refrigerator.</li>
                </ul>
              </div>
            </div>
          </div>
        </section >

        {/* The Benefits Of Appliances Service Dubai */}
        <section className="section cs_py_30 appliances-benifit-sec bg-light-gray">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className="cs_fs_30 mb-0">The Benefits Of Cigar Cabinet Service Dubai
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
                        <img src={getImageSrc('icon/Optimal-Performance')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Optimal Performance
                      </h3>
                      <p className="small">Regular maintenance ensures your cigar cabinet humidor operates efficiently, providing optimal results every time.
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
                      <h3 className="text-uppercase mb-2 cs_fs_16">Lower Energy Bills</h3>
                      <p className="small">Energy-efficient cigar humidors translate to monthly savings on utility bills, putting more money back in your pocket.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-2">
                  <div className="">
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
                  <div className="">
                    <div className="benifit-box-container">
                      <div className="icon-img-block">
                        <img src={getImageSrc('icon/extending')} alt="Cooling Efficiency" className="icon-img-block-icon" />
                      </div>
                      <h3 className="text-uppercase mb-2 cs_fs_16">Cigar Humidor Lifespan</h3>
                      <p className="small">Timely servicing and proper care can greatly extend the life of your cigar humidor, postponing the need for replacements.</p>
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
                      <p className="small">Knowing that your cigar humidor is in top condition gives you confidence and removes the stress of unexpected failures.</p>
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

            <h2 className="cs_fs_30">CHOOSE US FOR RELIABLE, EXCEPTIONAL SERVICE TAILORED TO YOUR NEEDS!</h2>

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
                    <h3 className="">Confidence</h3>
                    <p>With a maintenance contract, you get a year of service, ensuring your cigar humidor operates smoothly and providing peace of mind.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/trustworthy')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">Trustworthy</h3>
                    <p>Our experienced technicians for cigar humidors provide exceptional service for several leading top brands.</p>
                  </div>
                </div>


              </div>

              {/* <!-- Delimit Section --> */}
              <div className="uspdelimit col-2 d-none d-xl-block">
                <img className="blue-border-2 w-100 why-choose-img" src={getImageSrc('fajteam-1')} alt="FAJ icon service" />
              </div>

              {/* <!-- Second Column --> */}
              <div className="uspcol col-3">
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/value')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3>We Are Experts</h3>
                    <p>We specialize in repairing cigar humidor cabinets, which is why major brands trust us for their service and maintenance needs.</p>
                  </div>
                </div>
                <div className="uspitem">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/confidence-guarantee')} alt="FAJ icon service" />

                  </div>
                  <div className="usptext">
                    <h3 className="">Great Value</h3>
                    <p>The inspection fee covers diagnosis, transport, and reinstallation of cigar humidors in Dubai and Sharjah.</p>
                  </div>
                </div>
                <div className="uspitem mb-0">
                  <div className="uspicon">
                    <img src={getImageSrc('icon/full-control')} alt="FAJ icon service" />
                  </div>
                  <div className="usptext">
                    <h3 className="">You Are in Control</h3>
                    <p>Choose a day and time for your cigar humidor repair in Dubai or Sharjah, with a 3-4 hour window for when our technician will arrive.</p>
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


        <section className="section cs_py_30 bg-light-gray mb-4">
          <div className="container">
            <h3>We specialise in Cigar Cabinet services for the following brands</h3>
            <ul>
              <li><strong>Afidano Electric Cigar Humidor Service Center in Dubai: </strong>Afidano specializes in cigar humidor repair, fixing electric cigar humidor, cigar refrigerator repairs, and cigar cooler maintenance. FAJ is the official Afidano electric cigar humidor service center in Dubai, UAE.</li>
              <li><strong>Airo Fridgador Cabinet Repair Service</strong>: FAJ offers reliable Airo fridgador cabinet repair and services in Dubai, with professionals who are experts in Airo fridgador cigar cabinet maintenance. Contact us for Airo cigar cabinet repair near me and cigar humidor maintenance in Dubai.</li>
              <li><strong>Raching Cigar Humidor Repair and Service</strong>: Located in Dubai, FAJ is your trusted destination for raching electric cigar humidor services. We specialize in electronic humidor repairs and maintenance, offering comprehensive solutions to meet your needs. Get same day Raching cigar humidor cabinet electronic maintenance near me and service in Dubai</li>
              <li><strong>Liebherr Cigar Humidor Maintenance Service</strong>: The Liebherr cigar cabinet humidor service and repair ensures you won&rsquo;t have to worry because you are in the right place. FAJ prioritizes efficiency and reliability. FAJ offers Liebherr humidor electric repair and professional cigar storage maintenance service near you in Dubai</li>
              <li><strong>Hemingway Premium Electric Cigar Humidor Repair and Service</strong>: Rely on our expert team to promptly resolve any issues with your Hemingway Electric Cigar Humidor repair service and restore its functionality.&nbsp;Hemingway Cigar Cabinet Repair Dubai. Call us for a humidor repair technician near me service in Dubai, Abu Dhabi and Sharjah.</li>
              <li><strong>Electric Cigar Humidor Service and Repair:</strong> With extensive knowledge of electric cigar humidor repairing and servicing, we provide effective cigar repair to keep your unit running smoothly. Contact us today for Cigar refrigerator repair near me, cigar fridge maintenance service in Dubai</li>
              <li><strong>Vevor Electric Cigar Humidor Service and Repair</strong>: No matter the problem with your Vevor Electric Cigar Humidor repair and service, our experts can diagnose and fix it accurately. Reach us for cigar humidor cabinet repair near Dubai and best humidor maintenance and service near your location.</li>
              <li><strong>Humidor Cigar Cabinet Refrigerator and Maintenance</strong>: Is your Humidor Cigar Cabinet Refrigerator not working properly? Don't suffer through uncomfortable temperatures or risk losses due to faulty equipment. FAJ can restore your humidor cigar cabinet refrigerator repair and service quickly! Contact us for fix cigar fridge or cigar refrigerator service and maintenance.</li>
            </ul>
          </div>
        </section >

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

export default CigarcabnitServiceDetail;