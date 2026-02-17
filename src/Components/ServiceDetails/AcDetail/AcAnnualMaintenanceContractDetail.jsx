import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Serviceappointemnt from '../../Contact/Serviceappointemnt';
import CallNowButton from '../../Buttons/CallNowButton';
import GetQuoteButton from "../../Buttons/GetQuoteButton";
import WhatsappIconButton from "../../Buttons/WhatsappIconButton";
import BenefitAcMaintenance from "../../BenefitAcMaintenance/BenefitAcMaintenance";
import QuickGuide from "../../QuickGuide/QuickGuide";
import ACWhychooseUs from "../../WhyChooseUS/ACWhyChooseUs";
import loadBackgroudImages from "../../Common/loadBackgroudImages";
import MaintenanceContract from "../../MaintenanceContract/MaintenanceContract";
import HeaderForm from "../../Headeform/HeaderForm";
import FAJACPrice from "../../Miscellaneous/FAJACPrice";
import Practicaltip from "../../Common/Practicaltip";
import AcProperties from "../../Common/AcProperties";
import Testimonial1 from "../../Testimonial/Testimonial1";
import BeforeAfter from "../../BeforeAfter/BeforeAfter";
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};
const EyeIcon = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V14M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

);
const EyeSlashIcon = () => (
   <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

);


const AcAnnualMaintenanceContractDetail = ({
  titleSeo,
  description,
  Author,
  Keyword,
  URL
}) => {

  const metatitle = String(titleSeo || "Best AC Annual Maintenance Contract in Dubai | AC AMC Services");
  const metadescription = String(description || "FAJ has been offering AC annual maintenance contract in Dubai. A regular maintenance agreement (AMC) service saves costs in your yearly budget.");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "AC Annual Maintenance Contract Service Dubai");
  const metaURL = String(URL || "https://www.fajservices.ae/services/air-conditioning-repair/ac-annual-maintenance-contract/");
  const metaImage = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/What-is-covered-in-an-AC-Maintenance-Contract.avif";

  const [openItemIndex, setOpenItemIndex] = useState(0);
  const [data, setData] = useState([]);
  const [testimonial_data, setTestimonialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleItemClick = (index) => {
    setOpenItemIndex(prevIndex => prevIndex === index ? -1 : index);
  };

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsResponse, testimonialsResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AMCFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/AcAmcTestimonials.json`)
        ]);

        if (!faqsResponse.ok || !testimonialsResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const [faqsData, testimonialsData] = await Promise.all([
          faqsResponse.json(),
          testimonialsResponse.json()
        ]);

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
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AC Annual Maintenance Contract, AC AMC Dubai, Annual AC Service Contract, AC Maintenance Agreement, Air Conditioning Maintenance Contract, AC Servicing Contract, Preventive AC Maintenance, AC Tune Up Contract, HVAC Maintenance Contract, Best AC AMC in Dubai, AC Maintenance Plan, Annual Maintenance Contract AC, AC Service Contract Dubai, Chiller Maintenance Contract, AC Routine Maintenance",
              "image": ["https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/FajLogo1/public"],
              "url": "https://www.fajservices.ae/services/air-conditioning-repair/ac-annual-maintenance-contract/",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "3452",
                "bestRating": "5"
              }
            })}
          </script>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is an annual maintenance contract (AMC)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An AC AMC usually involves a set of maintenance services for a specific period, such as a year. These services may include HVAC, maintenance and electrical repair on your property. The contract’s specifics will vary depending on the service provider, but it will typically include regular testing, cleanings, and repairs to make sure that the systems are in good working order."
                }
              }, {
                "@type": "Question",
                "name": "How many types of AMC are there?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Annual Maintenance Contracts (AMCs) are classified into two types: comprehensive and non-comprehensive/call-based. Comprehensive AMCs cover the repair and replacement of faulty equipment parts for one flat fee. Non-inclusive/Call-based AMCs, on the other hand, only provide maintenance services as needed, with each service request billed separately."
                }
              }, {
                "@type": "Question",
                "name": "Is it worth getting your AMC contract?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With the FAJ Technical Service LLC Annual Maintenance Contract (AMC), you receive a range of customized services at a reasonable price. Enjoy peace of mind for an entire year as we streamline maintenance and provide high-quality support results"
                }
              }, {
                "@type": "Question",
                "name": "What are the benefits of an AC AMC contract?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The FAJ Team's Annual Maintenance Contract for AC units guarantees optimal performance and longevity through proactive care, significantly reducing the risk of costly repairs and maximizing energy efficiency; our seasoned professionals provide comprehensive services including AC filter and AC coil cleaning, Air conditioner, and system optimization, ensuring your peace of mind and consistent comfort throughout the year."
                }
              }, {
                "@type": "Question",
                "name": "Why Choose Affordable Annual AC Service Contracts in Dubai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For affordable and prompt AC service in Dubai, choose our experienced team. We offer tailored maintenance solutions, exceptional customer support, emergency repairs, and transparent pricing with no hidden fees. Trust us for expertise across all AC brands and models."
                }
              }, {
                "@type": "Question",
                "name": "What is an AMC annual maintenance contract?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An Annual Maintenance Contract (AMC) is a specific type of service agreement that ensures ongoing maintenance and support for designated equipment or assets. This contract is designed to keep the equipment in optimal working condition through regular servicing and inspections, thereby minimizing the risk of unexpected breakdowns and enhancing overall performance."
                }
              }, {
                "@type": "Question",
                "name": "Does an AC unit need to be serviced every year?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, annual servicing keeps your AC efficient, lowers energy bills, and prevents unexpected breakdowns."
                }
              }, {
                "@type": "Question",
                "name": "Why Do You Need an AMC in Dubai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In Dubai’s harsh climate, an AMC ensures your AC runs efficiently year-round, preventing costly repairs and discomfort."
                }
              }, {
                "@type": "Question",
                "name": "What is typically covered under an AMC for an AC unit?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An AMC for an AC unit usually covers regular inspections, cleaning, servicing, and minor repairs. It may also include replacing certain parts, such as filters, and priority support for emergency breakdowns."
                }
              }, {
                "@type": "Question",
                "name": "What are the advantages of the AMC contract?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An AMC ensures regular maintenance, reducing repair costs and extending the equipment’s lifespan with professional service."
                }
              }
              ]
            })}
          </script>
        </Helmet>
      <HeaderForm />

      <div className="cs_service_details">

        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Best AC Annual Maintenance Contract Services in Dubai</h1>
            <p>
              At FAJ Technical Services L.L.C, customer satisfaction is our top priority. We offer a straightforward and cost-effective annual maintenance contract that covers all essential maintenance for your home and business.
              Our contract includes year-round AC servicing, along with qualified support for plumbing and electrical repairs (MEP). We believe our essential maintenance contract is one of the best maintenance packages available in Dubai.
              <br />Our highly skilled team of fully qualified and specialized technicians is ready to provide the same level of service and workmanship that our customers have come to expect from FAJ. Additionally, we offer emergency assistance 365 days a year.
            </p>
            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5 align-items-center">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1" style={{ fontSize: "24px" }}>Annual AC Maintenance Contract - AMC</h2>
                <p className="mb-2">
                  Ensure consistent efficiency for your AC system with an Annual Maintenance Contract (AMC).
                  <br /> Keep your AC functioning optimally throughout the year with our reliable maintenance contract in Dubai and Sharjah, UAE.
                  <br />This will help maintain excellent cooling performance and prevent costly malfunctions!
                  <br />
                  Keeping an AC AMC in place can help you avoid unexpected costs, improve energy efficiency, and ensure a comfortable indoor environment.
                  <br /> It's essential to select a reputable service provider to get the most out of your contract.
                </p>
              </div>

              <div className="col-md-6">
                <iframe
                  className="bordered-img blue-border"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/sxBhB1_gxYA?si=96yf5hxyAA3bct8w"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="appointment-col border-small-top mt-3 pt-3">
              <h2 className="cs_fs_24 mb-1 mt-3" style={{ fontSize: "24px" }}>
                Planned Preventive Maintenance (PPM) Services
              </h2>
              <p>
                Our air conditioning technician can create a customised Planned Preventive Maintenance Package for your home or business. This package is designed to keep your space cool, comfortable, and running efficiently. By taking a proactive approach, you can reduce the likelihood of unexpected breakdowns and their associated costs.
                <br />
                Our Planned Preventive Maintenance Package includes repair, maintenance, and testing, making it ideal for any air conditioning system in buildings, apartments, villas, offices and warehouses. This package ensures that your air conditioning system operates smoothly and helps prevent breakdowns.
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
        <FAJACPrice />

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">Peace of Mind with Annual Maintenance Contracts</h2>
            <p>
              Your air conditioner is an essential part of your home or office comfort, especially during the scorching summer months. Like any other air conditioning unit, it requires regular maintenance to operate efficiently and to prevent breakdowns.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  className="blue-border"
                  src={getImageSrc('Peace-of-Mind-with-Annual-Maintenance-Contracts')}
                  alt="Annual Maintenance Contracts with peace of mind"
                  loading="lazy"
                />
              </div>
              <div className="col-md-6">
                <p className="mb-0">
                  FAJ offers comprehensive AC annual maintenance contracts (AMC) to keep your air conditioner unit running smoothly throughout the year. With our AC AMC services, you can enjoy consistent cooling and comfort in your space!
                  Experience exceptional peace of mind as we take care of your air conditioner system, ensuring optimal performance, energy efficiency, and longevity.
                  <br />
                  Our comprehensive maintenance contract package enables you to bid farewell to unexpected breakdowns. Routine inspections and maintenance of your air conditioning system are crucial for maintaining efficiency. Our qualified technicians service all types, makes, models, and sizes of residential and commercial systems, including HVAC, VRV, VRF, AHU, FAHU, Central, Ducted Split, Package Unit AC, Centralised, FCU, Cassette, Split AC, Ceiling AC, and Multi-Split AC.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="text-center">Common AC Problems That May Require Maintenance</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
              {[
                { title: "Weak Airflow", desc: 'If you notice <a href="https://www.youtube.com/watch?v=qnByeIsc3lY"><b>reduced airflow</b></a> coming from your vents, it could indicate a problem with your AC system, such as a clogged filter or malfunctioning fan.' },
                { title: "Warm Air", desc: "If your AC blows warm or room temperature air instead of cold, it could indicate compressor, refrigerant, or ductwork issues." },
                { title: "Strange Noises", desc: "Unusual sounds like grinding, squealing, or banging coming from your AC unit can indicate mechanical problems that require attention." },
                { title: "Foul Odors", desc: "Musty or foul odors emanating from the vents could suggest mold or mildew growth within the system, which needs to be addressed quickly." },
                { title: "Frequent Cycling", desc: "It may signal difficulty maintaining desired temperatures due to issues like dirty filters, low refrigerant levels, or a faulty thermostat." },
                { title: "High Humidity Levels", desc: "An air conditioner that fails to adequately reduce indoor humidity levels may indicate issues with its cooling capacity or improper operation." },
                { title: "Leaking Water", desc: "Water pooling around AC or dripping from vents could indicate blocked condensate drain, frozen coils, or other issues." },
                { title: "Increased Energy Bills", desc: "High energy bills without increase in usage could indicate the inefficiency of your AC due to dirty filters, duct leaks, or other problems." }
              ].map((problem, index) => (
                <div key={index} className="col-12 col-md-4 col-lg-3">
                  <div className="box-content-container rounded border shadow">
                    <div className="text-center">
                      <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">
                        {problem.title}
                      </h3>
                    </div>
                    <div className="inner-apcs-feat-desc">
                      <p
                        className="p-2 mb-0"
                        dangerouslySetInnerHTML={{ __html: problem.desc }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div id="get-quote" className="mb-0 mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
              </div>
            </div>
          </div>
        </section>

        <QuickGuide />
        <BenefitAcMaintenance />
        <ACWhychooseUs />

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30">The Importance of AC Maintenance Contract Service</h2>
            <div className="row">
              <div className="col-xl-6">
                <img
                  className="bordered-img w-100"
                  src={getImageSrc('ac-repair-2')}
                  alt="Air conn maintenance"
                  loading="lazy"
                />
              </div>
              <div className="col-xl-6">
                <ul>
                  <li>
                    Maintaining your air conditioning (AC) system is essential for ensuring optimal performance, energy efficiency, and longevity. In the sweltering summer heat, a well-functioning AC unit is not just a luxury; it is necessary for creating a comfortable living environment.
                  </li>
                  <li>
                    Homeowners and business owners often overlook the importance of a regular AC maintenance contract, which can lead to unexpected breakdowns, higher energy bills, and costly repairs. Without proper maintenance, your AC system may become less efficient, resulting in increased energy consumption and utility costs.
                  </li>
                  <li>
                    Over time, the AC components can wear down, resulting in <a href="https://www.youtube.com/watch?v=qnByeIsc3lY" className="fw-bold text-decoration-underline">reduced airflow</a>, insufficient cooling, and even complete system failure. This situation can be particularly challenging during the summer months, when requests for cooling are at their highest.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30">What is included in an AC Maintenance Contract?</h2>
            <p className="mb-0">
              When considering air conditioner maintenance, it's essential to understand what an AC contract should encompass. While many AC contractor packages offer these services, the details can vary.
            </p>

            <div className="row align-items-center">
              <div className="col-md-6">
                <p>
                  We'll explore the key components of AC maintenance, their importance, and why <a href="https://www.linkedin.com/company/faj-technical-services-llc">Regular maintenance</a> is essential for your system's longevity.
                </p>
                <ul className="acsvs-exp-spl-para tick-ul mb-0">
                  <li>Priority service for repair calls</li>
                  <li>Get a 10% discount on service work</li>
                  <li>Receive a 10% discount on labor charges</li>
                  <li>Get 10% discount on replacement of part</li>
                  <li>Major and minor service with AC repair work</li>
                  <li>No trip charge for regular AC repair during normal working hours</li>
                  <li>Enjoy a 10% discount on materials and parts not covered by warranty</li>
                  <li>A guarantee is provided from the date of repair for all customer-ordered repairs</li>
                </ul>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <img
                  className="blue-border"
                  src={getImageSrc('The-Importance-of-AC-Maintenance-Contract-Service')}
                  alt="Ac Service and maintenance contract"
                  loading="lazy"
                />
              </div>
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

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h3>WE SPECIALISE IN AIR CONDITIONER SERVICES FOR THE FOLLOWING BRANDS</h3>
            <div className="row">
              <div className="col-12">
                <ul className="mb-0">
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/lg-ac-repair-in-dubai/">LG Air Conditioner Maintenance</a>:</strong> FAJ offers reliable LG AC Maintenance, and services in Dubai. With professionals, who are experts in split, vrf and central air conditioning units.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/services/air-conditioning-repair/brands/samsung/">Samsung Air Conditioner Maintenance and Service</a>:</strong> Based in Dubai, FAJ is your go-to destination for Samsung AC Maintenance in Dubai. Specializing in Samsung air conditioner systems, we offer comprehensive services ranging from repairs to Maintenance.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/services/air-conditioning-repair/brands/york/">York AC Maintenance and Service</a>:</strong> The York AC Maintenance service ensures you don&rsquo;t need to worry because you are in the right place. Yes, FAJ is where efficiency and reliability are prioritized.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/services/air-conditioning-repair/brands/daikin/">Daikin Air Conditioner Maintenance</a>:</strong> Trust our skilled team to efficiently resolve all issues with your Daikin air conditioner and restore its functionality.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/services/air-conditioning-repair/brands/trane/">Trane HVAC Maintenance</a>:</strong> With extensive knowledge of Trane air conditioning systems, we provide effective repairs to keep your unit running smoothly.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/">Panasonic AC Maintenance and Service</a>:</strong> No matter the issue with your Panasonic air conditioner, our experts can accurately diagnose and fix it.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/services/air-conditioning-repair/brands/gree/">Gree AC Maintenance and Service</a>:</strong> Has your AC stopped working? No need to endure unpleasant temperatures and stuffy air or suffer losses due to damaged equipment (broken gree air conditioning in a room, for example, can be a disaster!) &ndash; FAJ get your gree air conditioning back up and running in no time!</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/services/air-conditioning-repair/brands/o-general/">O General AC Maintenance and Service</a>:</strong> O General AC maintenance in Dubai requires expert help because only specialized ones know how to address aircon issues. We are a hassle-free air condition Maintenance service provider.</li>
                  <li><strong><a className='text-decoration-underline' href="https://fajservices.ae/mitsubishi-ac-repair-in-dubai/">Mitsubishi Air Conditioner Maintenance and Service</a>:</strong> Seeking relief from scorching heat? Discover the secret to keeping your Mitsubishi AC running smoothly in Dubai! Our expert Mitsubishi AC services ensure your AC stays cool and efficient, providing comfort and peace of mind.</li>
                </ul>
                <br />

                <p className="mb-0">
                  <Link to="/services/air-conditioning-repair/brands/sanyo/">Sanyo AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/rheem/">Rheem Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/skm/">SKM AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/daewoo/">Daewoo AC Maintenance Dubai</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/midea/">Midea Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/lennox/">Lennox Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/goodman/">Goodman Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/coleman-ac-repair-in-dubai-coleman-ac-maintenance-in-dubai-coleman-ac-fix-in-dubai-coleman-ac-service-in-dubai-coleman-air-condition-repair-in-dubai-coleman-air-condition-maintenance-in-dubai-coleman/">Coleman AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/westpoint/">Westpoint Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/aftron/">Aftron AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/crafft/">Crafft Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/bryant/">Bryant AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/ruud/">Ruud Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/mcquay-ac-repair-in-dubai-mcquay-ac-maintenance-in-dubai-mcquay-ac-fix-in-dubai-mcquay-ac-service-in-dubai-mcquay-air-condition-repair-in-dubai-mcquay-air-condition-maintenance-in-dubai-mcquay-air-con/">McQuay Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/blue-star/">Blue Star Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/supra/">Supra AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/toshiba/">Toshiba Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/whirlpool/">Whirlpool Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/super-general/">Super General AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/hitachi/">Hitachi AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/o-general/">O General Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/cooline/">Cooline Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/white-westinghouse/">White Westinghouse AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/">Panasonic Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/daikin/">Daikin AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/daikool/">Daikool Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/fujitsu/">Fujitsu Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/gree/">Gree AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/haier/">Haier Air Condition</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/lg-ac-repair-in-dubai/">LG Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/nikai/">Nikai AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/samsung/">Samsung Air Conditioning</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/trane/">Trane Air Conditioner</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/sub-zero/">Sub Zero AC</Link>
                  <span>&nbsp;-&nbsp;</span>
                  <Link to="/services/air-conditioning-repair/brands/york/">York Air Conditioning</Link>
                </p>
              </div>
            </div>

            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <GetQuoteButton />
                <CallNowButton />
              </div>
            </div>
          </div>
        </section>

        <Practicaltip />
        <AcProperties />
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
          />
        </section>
        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">FAQ&apos;s</h3>
            <div className="cs_accordians_wrapper cs_style_1 p-0">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`}
                >
                  <div
                    className="cs_accordian_head"
                    onClick={() => handleItemClick(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleItemClick(index)}
                    aria-expanded={index === openItemIndex}
                  >
                    <span className="cs_fs_16cs_semibold mb-0">{item.title}</span>
                    <span className="cs_accordian_toggle">
                      <i className="bi bi-eye"><EyeIcon /></i>
                      <i className="bi bi-eye-slash"><EyeSlashIcon /></i>
                    </span>
                  </div>
                  <div
                    className="cs_accordian_body"
                    style={{
                      maxHeight: index === openItemIndex ? '1000px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease-out'
                    }}
                  >
                    <p
                      className="mb-0"
                      dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }}
                    />
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

export default AcAnnualMaintenanceContractDetail;