import { useEffect, useRef, useState, useCallback, memo, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HeaderForm from "../Headeform/HeaderForm";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import BookingFormModal from '../BookingFormModal';
const CallNowButton = lazy(() => import('../Buttons/CallNowButton'));
const BenefitAcMaintenance = lazy(() => import("../BenefitAcMaintenance/BenefitAcMaintenance"));
const QuickGuide = lazy(() => import("../QuickGuide/QuickGuide"));
const ACWhyChooseUs = lazy(() => import("../WhyChooseUS/ACWhyChooseUs"));
const MaintenanceContract = lazy(() => import("../MaintenanceContract/MaintenanceContract"));
const Practicaltip = lazy(() => import("../Common/Practicaltip"));
const AcProperties = lazy(() => import("../Common/AcProperties"));
const FAJACPrice = lazy(() => import("../Miscellaneous/FAJACPrice"));
const GetQuoteButton = lazy(() => import("../Buttons/GetQuoteButton"));
const Blog2 = lazy(() => import("../Blog/Blog2"));
const Testimonial1 = lazy(() => import("../Testimonial/Testimonial1"));
const BeforeAfter = lazy(() => import("../BeforeAfter/BeforeAfter"));
const Serviceappointemnt = lazy(() => import('../Contact/Serviceappointemnt'));


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

const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { rootMargin: "200px", ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

const LazySection = memo(({ children, fallback = null }) => {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref}>
      {isInView ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : fallback}
    </div>
  );
});

const AcServiceInDubai = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  // SEO Meta
  const metatitle = String(titleSeo || "Best AC Service in Dubai | Air Conditioning Repair & Maintenance");
  const metadescription = String(description || "Looking for reliable AC service in Dubai? Get quick repairs and professional AC cleaning to help your cooling system work smoothly. Call FAJ today!");
  const metaAuthor = String(Author || "FAJ Technical Services L.L.C");
  const metaKeyword = String(Keyword || "AC Service, Air Con Service, AC Service in Dubai, Air Conditioning Service");
  const metaURL = String(URL || "https://www.fajservices.ae/ac-service-in-dubai/");
  const metaImage = "https://www.fajservices.ae/img/What-is-covered-in-an-AC-Maintenance-Contract.avif";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [faqData, setFaqData] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [openItemIndex, setOpenItemIndex] = useState(0);

  const [faqRef, faqInView] = useInView();
  const [testimonialRef, testimonialInView] = useInView();

  const openModal = useCallback((e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const handleItemClick = useCallback((index) => {
    setOpenItemIndex(prev => prev === index ? -1 : index);
  }, []);

  useEffect(() => {
    const loadBgImages = async () => {
      const { default: loadBackgroudImages } = await import("../Common/loadBackgroudImages");
      loadBackgroudImages();
    };
    loadBgImages();
  }, []);

  useEffect(() => {
    if (!faqInView || faqData.length > 0) return;

    fetch(`${import.meta.env.BASE_URL}data/AcData/AcFaqs/AcServiceInDubaiFaqs.json`)
      .then(res => res.json())
      .then(data => setFaqData(data))
      .catch(err => console.error('Error fetching FAQ data:', err));
  }, [faqInView, faqData.length]);


  useEffect(() => {
    if (!testimonialInView || testimonialData.length > 0) return;

    fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/AcServiceTestimonials.json`)
      .then(res => res.json())
      .then(data => setTestimonialData(data))
      .catch(err => console.error('Error fetching testimonial data:', err));
  }, [testimonialInView, testimonialData.length]);

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
          <meta property="og:url" content={metaURL} />
          <meta property="og:image" content={metaImage} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metatitle} />
          <meta name="twitter:description" content={metadescription} />
          <meta name="twitter:image" content={metaImage} />
          <meta name="twitter:url" content={metaURL} />

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much is AC service in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AC service in Dubai typically costs between AED 230 to AED 765 depending on the type of service. Prices vary based on the unit's size and condition, as well as the service provider."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is my AC not cooling in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your AC may not be cooling due to dirty filters, low refrigerant levels, or a malfunctioning compressor. A professional technician can diagnose and resolve the issue quickly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is AC repair so expensive?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AC repairs can be expensive due to the high cost of parts (like compressors or coils) and specialized labor. The complexity of the repairs and Dubai's climate, which demands frequent AC use, also adds to the cost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is my AC giving cool air but not cooling?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If your AC is blowing cool air but not cooling the room, it could be due to issues like low refrigerant or clogged filters. A technician can fix this with a proper inspection and maintenance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should AC be cleaned in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AC units in Dubai should be cleaned every 3-6 months due to high dust levels in the environment. More frequent cleaning may be necessary for homes in dusty areas or with heavy AC use."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which company is best for central AC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FAJ Technical Services L.L.C. is one of the best companies for central AC services in Dubai. We offer reliable, professional services to ensure your system runs efficiently."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What maintenance is needed for AC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AC maintenance includes tasks like cleaning or replacing air filters, checking refrigerant levels, and cleaning coils and drain lines. Regular upkeep ensures your system runs efficiently and prolongs its lifespan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I maintain my AC?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Maintain your AC by regularly cleaning or replacing filters, checking for airflow issues, and scheduling professional servicing every 6 months. This helps to improve performance and prevent costly repairs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is routine AC maintenance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Routine AC maintenance typically involves cleaning filters, inspecting the refrigerant, cleaning the coils, and checking the system's overall performance. Regular maintenance keeps your AC running smoothly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I fix my air conditioner that is not cooling?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To fix an AC not cooling, check the thermostat, clean or replace the air filter, and ensure the outdoor unit is clear. If issues persist, inspect refrigerant levels, ice buildup, or compressor issues—contact a professional if needed."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should an air conditioner be serviced?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An air conditioner should be serviced at least once a year to maintain optimal performance. In hot climates like Dubai, servicing every 6 months is recommended to ensure efficiency and extend the unit's lifespan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is AC duct cleaning important in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AC duct cleaning is important in Dubai as it improves indoor air quality, increases system efficiency, and prevents the build-up of dust and allergens. Regular cleaning helps your AC perform better."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is AC duct cleaning worth it?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AC duct cleaning is worth it because it enhances air quality, improves the performance of your system, and helps extend the life of your AC unit. It's a cost-effective investment for long-term benefits."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How often should AC ducts be cleaned?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AC ducts should be cleaned every 2-3 years, or more frequently if you notice dust accumulation, poor airflow, or a musty smell. Regular cleaning ensures better air quality and system efficiency."
                  }
                }
              ]
            })}
          </script>

        </Helmet>
      </HelmetProvider>

      <HeaderForm />

      <div className="cs_service_details">
        {/* Hero Section */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">AC Service in Dubai | Air Conditioning Repair & Maintenance</h1>
            <p>Good-bye to sticky summer days, stuffy nights, and allergens. Welcome to year-round comfort, refreshing clean air, and improved sleep. Cool, right?<br /><a href="https://maps.app.goo.gl/FrdktEqUSR6cgX876">FAJ Technical Services L.L.C</a> has been in operation since 2010. Our dedicated facilities team has extensive experience in AC cleaning service, AC maintenance, AC repair, AC service near me, and AC installation of various residential and commercial air conditioning units in Dubai and Sharjah.</p>

            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
                <BookingFormModal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>
        </section>

        {/* Experts Section */}
        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <div className="row gx-md-5">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1">Experts AC Service and Maintenance</h2>
                <p className="mb-1">When considering AC service in Dubai, it is vital to hire a qualified and reliable AC technician who can effectively address your needs at home or in your business place.</p>
                <p className="mb-1"><a href="https://www.facebook.com/FAJTechnicalServicesLLC">FAJ Experts</a> in comprehensive air conditioning service near me, and AC fixing and AC cleaning service in Dubai, ensuring that you receive the highest quality care for your cooling systems.</p>
                <h2 className="cs_fs_24 mb-1 pt-3 border-small-top">Signs You Need An AC Service</h2>
                <p className="mb-2">If you notice any of these signs, please contact us via WhatsApp. We are here to assist your AC cooling system in achieving optimal efficiency.</p>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Higher electricity bills</li>
                      <li>Air is not blowing cold</li>
                      <li>Drips from your air conditioner</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="mb-0">
                      <li>Loss of AC performance</li>
                      <li>Poor AC airflow, making noises</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  width={534}
                  height={324}
                  className="bordered-img w-100"
                  src={`${import.meta.env.BASE_URL}img/Experts-AC-Service-and-Maintenance.avif`}
                  alt="Experts AC Service and Maintenance"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="appointment-col border-small-top pt-3">
              <p>If you require a same-day visit, please book before 12 PM. Appointments made after 12 PM will be scheduled for the next day based on availability. For technical inspection/callout fees, AC service near you, repair, or maintenance, please click below. To book an appointment, you can call or reach us on WhatsApp at +971 50 746 4712.</p>
              <div id="get-quote" className="mt-3">
                <div className="container d-flex justify-content-center align-items-center gap-3">
                  <WhatsappIconButton />
                  <Suspense fallback={<ButtonPlaceholder />}>
                    <CallNowButton />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lazy loaded sections */}
        <LazySection>
          <FAJACPrice />
        </LazySection>

        {/* Why is AC Maintenance Important */}
        <LazySection>
          <section className="section cs_py_30 bg-light-gray">
            <div className="container">
              <h2 className="cs_fs_30">Why is AC Maintenance Service Important in Dubai?</h2>
              <p>Regular air conditioner (AC) maintenance service in Dubai is essential for optimal performance. FAJ offers comprehensive services to keep your system running efficiently. With our proactive approach, you can feel confident that AC is functioning at its best. If you need <a href="https://www.fajservices.ae/ac-maintenance-dubai/">AC maintenance</a> and air conditioning service near you, contact us.</p>

              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    className="blue-border"
                    src={`${import.meta.env.BASE_URL}img/What-is-covered-in-an-AC-Maintenance-Contract.avif`}
                    alt="Ac Maintenance in dubai"
                    loading="lazy"
                  />
                </div>
                <div className="col-md-6">
                  <ul className="mb-0">
                    <li><strong>Extreme Weather:</strong> Experiences high temperatures over 40°C (104°F) in summer. Regular maintenance keeps air conditioner systems efficient during these conditions.</li>
                    <li><strong>Energy Efficiency:</strong> A well-maintained AC unit operates more efficiently, using less energy and lowering both electricity bills.</li>
                    <li><strong>Longevity of Equipment:</strong> Regular maintenance can extend your air condition unit's lifespan, reducing the need for costly repairs and replacements, ultimately saving you money.</li>
                    <li><strong>Improved Air Quality:</strong> Regular maintenance keeps dust and allergens from building up, ensuring cleaner air.</li>
                    <li><strong>Enhanced Comfort:</strong> Regular <a href="https://www.youtube.com/watch?v=pkO_jobGdBo" className="fw-bold text-decoration-underline">AC servicing</a> in Dubai ensures comfort, efficiency, and consistent cooling daily.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* Common AC Problems */}
        <LazySection>
          <CommonACProblems />
        </LazySection>

        <LazySection>
          <QuickGuide />
        </LazySection>

        <LazySection>
          <BenefitAcMaintenance />
        </LazySection>

        <LazySection>
          <ACWhyChooseUs />
        </LazySection>

        <LazySection>
          <BeforeAfter
            title="Recent Completed Service"
            subTitle="Before & After Service"
            bgImg="img/background-image-2.avif"
            beforeImg="img/after_img_1.avif"
            afterTitle="After"
            afterImg="img/before_img_1.avif"
            beforeTitle="Before"
          />
        </LazySection>

        {/* AC Brands Section */}
        <LazySection>
          <ACBrandsSection />
        </LazySection>

        <LazySection>
          <Practicaltip />
        </LazySection>

        <LazySection>
          <AcProperties />
        </LazySection>

        <LazySection>
          <MaintenanceContract />
        </LazySection>

        {/* Testimonials */}
        <div ref={testimonialRef}>
          {testimonialInView && testimonialData.length > 0 && (
            <Suspense fallback={<SectionPlaceholder height="400px" />}>
              <Testimonial1
                subtitle="What Our Clients Say"
                title="Customer <span>Reviews</span>"
                bgImg="img/testimonialbg.jpg"
                testimonialData={testimonialData}
                sectionId="ac-service-testimonials"
              />
            </Suspense>
          )}
        </div>

        <LazySection>
          <Blog2 />
        </LazySection>

        {/* FAQ Section */}
        <div ref={faqRef}>
          {faqInView && (
            <Suspense fallback={<SectionPlaceholder height="300px" />}>
              <FAQSection
                data={faqData}
                openItemIndex={openItemIndex}
                onItemClick={handleItemClick}
              />
            </Suspense>
          )}
        </div>

        <LazySection>
          <section className="section cs_py_30">
            <Serviceappointemnt
              subtitle2="Contact us"
              title2="Book An Appointment"
            />
          </section>
        </LazySection>
      </div>
    </>
  );
};

// Extracted components for better code splitting

const CommonACProblems = memo(() => {
  const problems = [
    { title: "Weak Airflow", desc: 'If you notice <a href="https://www.youtube.com/watch?v=qnByeIsc3lY"><b>reduced airflow</b></a> coming from your vents, it could indicate a problem with your AC system, such as a clogged filter or malfunctioning fan.' },
    { title: "Warm Air", desc: "If your AC blows warm or room temperature air instead of cold, it could indicate compressor, refrigerant, or ductwork issues needing repair." },
    { title: "Strange Noises", desc: "Unusual sounds like grinding, squealing, or banging coming from your AC unit can indicate mechanical problems that require attention." },
    { title: "Foul Odors", desc: "Musty or foul odors emanating from the vents could suggest mold or mildew growth within the system, which needs to be addressed quickly." },
    { title: "Frequent Cycling", desc: "It may signal difficulty maintaining desired temperatures due to issues like dirty filters, low refrigerant levels, or a faulty thermostat." },
    { title: "High Humidity Levels", desc: "An air conditioner that fails to adequately reduce indoor humidity levels may indicate issues with its cooling capacity or improper operation." },
    { title: "Leaking Water", desc: "Water pooling around AC or dripping from vents could indicate blocked condensate drain, frozen coils, or other serious hidden issues." },
    { title: "Increased Energy Bills", desc: "High energy bills without increase in usage could indicate the inefficiency of your AC due to dirty filters, duct leaks, or other problems." }
  ];

  return (
    <section className="section cs_py_30">
      <div className="container">
        <h2 className="text-center">Common AC Problems That May Require Maintenance</h2>
        <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
          {problems.map((problem, i) => (
            <div key={i} className="col-12 col-md-4 col-lg-3">
              <div className="box-content-container rounded border shadow">
                <div className="text-center">
                  <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">{problem.title}</h3>
                </div>
                <div className="inner-apcs-feat-desc">
                  <p className="p-2 mb-0" dangerouslySetInnerHTML={{ __html: problem.desc }} />
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
  );
});

const ACBrandsSection = memo(() => (
  <section className="section cs_py_30 bg-light-gray">
    <div className="container">
      <h3 className="mb-1 pt-3">EXPRESS & EMERGENCY AC REPAIR SERVICE</h3>
      <p className="mb-2"><b>Terms & Conditions:</b> There is a callout fee that applies, ranging from AED 195 to 320 depending on capacity, for each diagnosis. Same-day visits are available for bookings made before *12:00 PM. For bookings made after 12:00 PM, next-day visits may be arranged, subject to availability.</p>
      <p className="pt-3 border-small-top">
        <strong>CHOOSE FAJ FOR YOUR PEACE OF MIND</strong><br />
        <b>We provide 2-month service warranty</b><br />
        and <small>3-month parts warranty</small> as standard.
      </p>
      <h3>We specialise in air conditioning services for the following brands</h3>

      <ul className="mb-3">
        <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/daikin-ac-repair-in-dubai-daikin-ac-maintenance-in-dubai-daikin-ac-fix-in-dubai-daikin-ac-service-in-dubai-daikin-air-condition-repair-in-dubai-daikin-air-condition-maintenance-in-dubai-daikin-air-con/">Daikin Air Conditioner Maintenance</a>:</strong> Daikin, a Japanese manufacturer, claims to be "the world's number one air conditioning company." Founded in 1924, it has developed a strong international presence through its focus on quality, innovation, and effective communication. We work with Daikin air conditioning products because the company continuously invests in research and development.</li>
        <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/gree-ac-repair-in-dubai/">Gree AC Repair Service and Maintenance</a>:</strong> Gree Electric Appliances, Inc., founded in 1991 in Zhuhai, is a key player in the global air conditioning market. Starting with air conditioners, Gree has expanded its product line to include various home appliances and became China's largest air conditioner manufacturer by 2000.</li>
        <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/o-general-ac-repair-in-dubai-o-general-ac-maintenance-in-dubai-o-general-ac-fix-in-dubai-o-general-ac-service-in-dubai-o-general-air-condition-repair-in-dubai-o-general-air-condition-maintenance-in-du/">O General AC Service and Repair</a>:</strong> O General, a brand of Fujitsu General, is renowned for its Japanese engineering and high-quality air conditioning solutions.</li>
        <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/mitsubishi-ac-repair-in-dubai/">Mitsubishi Air Conditioner Service and Repair</a>:</strong> Founded in 1954, Mitsubishi Air Conditioning has been producing air conditioning systems for nearly 75 years and is renowned for its reliability and energy efficiency.</li>
        <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/samsung-ac-repair-in-dubai/">Samsung AC Repair and Service</a>:</strong> Samsung is a globally recognized name, known for pushing boundaries. Since 1969, they have continued to shape the future with innovative air conditioning technology.</li>
        <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/york-ac-repair-in-dubai-york-ac-maintenance-in-dubai-york-ac-fix-in-dubai-york-ac-service-in-dubai-york-air-condition-repair-in-dubai-york-air-condition-maintenance-in-dubai-york-air-condition-mainten/">York AC Service and Repair</a>:</strong> YORK® has been an industry leader since our founding in 1874.</li>
        <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/lg-ac-repair-in-dubai/">LG AC Service and Repair</a>:</strong> LG's history in air conditioning began in 1968 with the launch of its first unit.</li>
        <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/trane-ac-repair-in-dubai-trane-ac-maintenance-in-dubai-trane-ac-fix-in-dubai-trane-ac-service-in-dubai-trane-air-condition-repair-in-dubai-trane-air-condition-maintenance-in-dubai-trane-air-condition/">Trane HVAC Repair</a>:</strong> Trane developed its first air conditioning unit in 1931.</li>
        <li><strong>Carrier AC Repair and Service in Dubai:</strong> Since 1902, Carrier has cultivated a history of proven innovation in the heating, air-conditioning and refrigeration industries.</li>
        <li><strong><a className='text-decoration-underline' href="https://www.fajservices.ae/panasonic-ac-repair-in-dubai-panasonic-ac-maintenance-in-dubai-panasonic-ac-fix-in-dubai-panasonic-ac-service-in-dubai-panasonic-air-condition-repair-in-dubai-panasonic-air-condition-maintenance-in-du/">Panasonic AC Service and Repair</a>:</strong> Panasonic was established in 1918 by its founder, Konosuke Matsushita.</li>
      </ul>

      <BrandLinks />

      <div id="get-quote" className="mt-3">
        <div className="container d-flex justify-content-center align-items-center gap-3">
          <Suspense fallback={<ButtonPlaceholder />}>
            <GetQuoteButton />
          </Suspense>
          <Suspense fallback={<ButtonPlaceholder />}>
            <CallNowButton />
          </Suspense>
        </div>
      </div>
    </div>
  </section>
));

const BrandLinks = memo(() => {
  const brands = [
    { name: "Rheem AC Service", url: "/rheem-ac-maintenance-in-dubai/" },
    { name: "SKM AC Service Dubai", url: "/skm-ac-repair-in-dubai-skm-ac-maintenance-in-dubai-skm-ac-fix-in-dubai-skm-ac-service-in-dubai-skm-air-condition-repair-in-dubai-skm-air-condition-maintenance-in-dubai-skm-air-condition-maintenance-in/" },
    { name: "Carrier AC Service", url: "#" },
    { name: "Lennox Air Conditioning Services", url: "/lennox-ac-repair-in-dubai-lennox-ac-maintenance-in-dubai-lennox-ac-fix-in-dubai-lennox-ac-service-in-dubai-lennox-air-condition-repair-in-dubai-lennox-air-condition-maintenance-in-dubai-lennox-air-con/" },
    { name: "Aftron AC Maintenance", url: "/aftron-ac-repair-maintenance-service-in-dubai-2/" },
    { name: "Bryant AC Service Dubai", url: "/bryant-ac-repair-in-dubai-bryant-ac-maintenance-in-dubai-bryant-ac-fix-in-dubai-bryant-ac-service-in-dubai-bryant-air-condition-repair-in-dubai-bryant-air-condition-maintenance-in-dubai-bryant-air-con/" },
    { name: "Blue Star", url: "/blue-star-ac-repair-in-dubai-blue-star-ac-maintenance-in-dubai-blue-star-ac-fix-in-dubai-blue-star-ac-service-in-dubai-blue-star-air-condition-repair-in-dubai-blue-star-air-condition-maintenance-in-du/" },
    { name: "Supra AC Service", url: "/supra-ac-repair-in-dubai-supra-ac-maintenance-in-dubai-supra-ac-fix-in-dubai-supra-ac-service-in-dubai-supra-air-condition-repair-in-dubai-supra-air-condition-maintenance-in-dubai-supra-air-condition/" },
    { name: "Toshiba AC Service", url: "/toshiba-ac-repair-in-dubai-toshiba-ac-maintenance-in-dubai-toshiba-ac-fix-in-dubai-toshiba-ac-service-in-dubai-toshiba-air-condition-repair-in-dubai-toshiba-air-condition-maintenance-in-dubai-toshiba/" },
    { name: "Super General AC Service", url: "/super-general-ac-repair-in-dubai-super-general-ac-maintenance-in-dubai-super-general-ac-fix-in-dubai-super-general-ac-service-in-dubai-super-general-air-condition-repair-in-dubai-super-general-air-con/" },
    { name: "Hitachi AC Service", url: "/hitachi-ac-repair-in-dubai-hitachi-ac-maintenance-in-dubai-hitachi-ac-fix-in-dubai-hitachi-ac-service-in-dubai-hitachi-air-condition-repair-in-dubai-hitachi-air-condition-maintenance-in-dubai-hitachi/" },
    { name: "Whirlpool AC Service", url: "/whirlpool-air-condition-repair-in-dubai-ac-maintenance-in-dubai-air-conditioning-fix-repairs-service-in-dubai/" },
    { name: "Daewoo AC Service Dubai", url: "/daewoo-ac-repair-in-dubai-daewoo-ac-maintenance-in-dubai-daewoo-ac-fix-in-dubai-daewoo-ac-service-in-dubai-daewoo-air-condition-repair-in-dubai-daewoo-air-condition-maintenance-in-dubai-daewoo-air-con/" }
  ];

  return (
    <p className="mt-2 mb-0">
      {brands.map((brand, i) => (
        <span key={i}>
          <Link to={brand.url}>{brand.name}</Link>
          {i < brands.length - 1 && <span>&nbsp;-&nbsp;</span>}
        </span>
      ))}
    </p>
  );
});

const FAQSection = memo(({ data, openItemIndex, onItemClick }) => {
  const accordionContentRef = useRef(null);

  if (!data || data.length === 0) {
    return <FAQPlaceholder />;
  }

  return (
    <section className="section cs_py_30 bg-dark-blue text-light">
      <div className="container">
        <h3 className="cs_fs_30 text-light">FAQ's</h3>
        <div className="cs_accordians_wrapper cs_style_1 p-0">
          {data.map((item, index) => (
            <div
              key={index}
              className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`}
            >
              <div className="cs_accordian_head" onClick={() => onItemClick(index)}>
                <span className="cs_fs_16 text-light cs_semibold mb-0">{item.title}</span>
                <span className="cs_accordian_toggle">
                  <Suspense fallback={null}>
                    <i className="bi bi-eye text-light"><EyeIcon /></i>
                    <i className="bi bi-eye-slash text-light"><EyeSlashIcon /></i>
                  </Suspense>
                </span>
              </div>
              <div className="cs_accordian_body" ref={accordionContentRef}>
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
  );
});


const SectionPlaceholder = memo(({ height = "200px" }) => (
  <div style={{ height, background: "#f5f5f5" }} />
));

const ButtonPlaceholder = memo(() => (
  <div style={{ width: 120, height: 44, background: "#e0e0e0", borderRadius: 8 }} />
));

const FAQPlaceholder = memo(() => (
  <section className="section cs_py_30 bg-dark-blue text-light">
    <div className="container">
      <h3 className="cs_fs_30 text-light">FAQ's</h3>
      <div style={{ height: 200 }} />
    </div>
  </section>
));

export default memo(AcServiceInDubai);