import { useEffect, useRef, useState, useCallback, memo, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HeaderForm from "../Headeform/HeaderForm";
import WhatsappIconButton from "../Buttons/WhatsappIconButton";
import BookingFormModal from '../BookingFormModal';
import Serviceappointemnt  from '../Contact/Serviceappointemnt';
const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const EyeIcon = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V14M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EyeSlashIcon = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const useInView = (rootMargin = "200px") => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.disconnect(); } },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, isInView];
};

const LazySection = memo(({ children, minHeight = "200px" }) => {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref} style={{ minHeight: isInView ? undefined : minHeight }}>
      {isInView && (
        <Suspense fallback={<div style={{ minHeight }} />}>
          {children}
        </Suspense>
      )}
    </div>
  );
});


const ButtonPlaceholder = memo(() => (
  <div style={{ width: '120px', height: '44px', background: "#e0e0e0", borderRadius: '8px', display: 'inline-block' }} />
));
const FAQSection = memo(({ data, openItemIndex, onItemClick }) => {
  if (!data?.length) return <div style={{ minHeight: '300px' }} />;
  return (
    <section className="section cs_py_30 text-black">
      <div className="container">
        <h3 className="cs_fs_30">FAQ's</h3>
        <div className="cs_accordians_wrapper cs_style_1 p-0">
          {data.map((item, index) => (
            <div
              key={index}
              className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? "active" : ""}`}
            >
              <div className="cs_accordian_head" onClick={() => onItemClick(index)}>
                <span className="cs_fs_16 cs_semibold mb-0">{item.title}</span>
                <span className="cs_accordian_toggle">
                  <i className="bi bi-eye"><EyeIcon /></i>
                  <i className="bi bi-eye-slash"><EyeSlashIcon /></i>
                </span>
              </div>
              <div className="cs_accordian_body">
                <p className="mb-0" dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

const AcServiceInDubai = ({ subtitle, title, reviewsbg, titleSeo, description, Author, Keyword, URL }) => {
  const metatitle       = String(titleSeo    || "Best Electronic PCB Repair | Printed Circuit Board Services Dubai");
  const metadescription = String(description || "Get expert electronic PCB repair in Dubai, including for appliances, AC, industrial equipment, AC / DC drives. Call us for PCB board service near you");
  const metaAuthor      = String(Author  || "FAJ Technical Services L.L.C");
  const metaURL         = String(URL     || "https://www.fajservices.ae/services/pcb-repair-services/");
  const metaImage       = "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/What-is-covered-in-an-AC-Maintenance-Contract/public";

  const [isModalOpen,     setIsModalOpen]     = useState(false);
  const [faqData,         setFaqData]         = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [openItemIndex,   setOpenItemIndex]   = useState(0);

  const [faqSectionRef,         faqSectionInView]         = useInView();
  const [testimonialSectionRef, testimonialSectionInView] = useInView();

  const openModal  = useCallback((e) => { e.preventDefault(); setIsModalOpen(true);  document.body.style.overflow = 'hidden'; }, []);
  const closeModal = useCallback(()  => { setIsModalOpen(false); document.body.style.overflow = ''; }, []);
  const handleItemClick = useCallback((index) => {
    setOpenItemIndex(prev => prev === index ? -1 : index);
  }, []);

  useEffect(() => {
    import("../Common/loadBackgroudImages").then(({ default: loadBg }) => loadBg());
  }, []);

  useEffect(() => {
    if (!faqSectionInView || faqData.length > 0) return;
    const controller = new AbortController();
    fetch(`${import.meta.env.BASE_URL}data/pcbrepairfaqs.json`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => setFaqData(data))
      .catch(err => { if (err.name !== 'AbortError') console.error('FAQ fetch error:', err); });
    return () => controller.abort();
  }, [faqSectionInView, faqData.length]);

  useEffect(() => {
    if (!testimonialSectionInView || testimonialData.length > 0) return;
    const controller = new AbortController();
    fetch(`${import.meta.env.BASE_URL}data/AcData/AcTestimonial/AcServiceTestimonials.json`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => setTestimonialData(data))
      .catch(err => { if (err.name !== 'AbortError') console.error('Testimonial fetch error:', err); });
    return () => controller.abort();
  }, [testimonialSectionInView, testimonialData.length]);

  return (
    <>
      <Helmet>
        <title>{metatitle}</title>
        <meta name="description"         content={metadescription} />
        <meta name="author"              content={metaAuthor} />
        <meta name="robots"              content="index, follow" />
        <link rel="canonical"            href={metaURL} />
        <meta property="og:type"         content="website" />
        <meta property="og:locale"       content="en_US" />
        <meta property="og:title"        content={metatitle} />
        <meta property="og:description"  content={metadescription} />
        <meta property="og:url"          content={metaURL} />
        <meta property="og:image"        content={metaImage} />
        <meta name="twitter:title"       content={metatitle} />
        <meta name="twitter:description" content={metadescription} />
        <meta name="twitter:image"       content={metaImage} />
        <link rel="preconnect" href="https://imagedelivery.net" />
        <link rel="dns-prefetch" href="https://imagedelivery.net" />
        <link rel="preconnect" href="https://img.youtube.com" />
      <style>{`
        /* custom-pcb-cards grid */
        .custom-pcb-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .custom-pcb-cards .card {
          background: #ffffff;
          border-radius: 1.75rem;
          overflow: hidden;
          box-shadow: 0 0 30px 14px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .custom-pcb-cards .card-img img{
          border: 0px;
          max-height: 100%;
        }
        .custom-pcb-cards .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.1);
        }

        /* image area - each card gets a unique illustrative image */
        .custom-pcb-cards .card-img {
          width: 100%;
          background: #f0f6fa;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .custom-pcb-cards .card-img svg {
          width: 100%;
          max-width: 200px;
          height: auto;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.08));
        }

        /* card text area */
        .custom-pcb-cards .card-text {
          padding: 1.5rem 1.8rem 2rem 1.8rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* main heading (Industrial, Commercial, Consumer) */
        .custom-pcb-cards .main-heading {
          font-size: 1.9rem;
          font-weight: 800;
          color: #0c5a6b;
          letter-spacing: -0.02em;
          border-left: 5px solid #2c9aaf;
          padding-left: 0.9rem;
          margin-bottom: 0.25rem;
          text-align: left;
          margin: 4px 0px;
        }

        /* subheading — the descriptive line right under main heading */
        .custom-pcb-cards .subheading {
          font-size: 1rem;
          font-weight: 600;
          color: #2a6e7e;
          background: #eef3f8;
          display: inline-block;
          padding: 0.3rem 1rem;
          border-radius: 40px;
          width: fit-content;
          text-align: left;
          margin: 4px 0px 15px;
        }
        .custom-pcb-cards .card-text ul li p{
          margin-bottom: 0px;
        }

        /* responsive */
        @media (max-width: 950px) {
          .custom-pcb-cards .custom-pcb-cards {
            gap: 1.5rem;
          }
        }

        @media (max-width: 780px) {
          .custom-pcb-cards .custom-pcb-cards {
            grid-template-columns: 1fr;
            max-width: 550px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
      </Helmet>

      <HeaderForm />

      <div className="cs_service_details">

        {/* Hero */}
        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Top-Quilaity Electronic PCB Repair and AC / DC PCB  Board Service Near You, in Dubai</h1>
            <p>We provide expert electronic PCB board repair services for both AC and DC drives boards, Power Devices, Machine controllers, Soft Starters, PLCs & Modules, and Servo & Stepper Drives repairs. Our repair services save you the high cost of replacing your existing PCB board.</p>
            <div className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <WhatsappIconButton />
                <BookingFormModal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>
        </section>

        {/* Our AC Repair & Service */}
        <section className="section bg-light-gray cs_py_30 pb-3">
          <div className="container">
            <div className="row gx-md-5 expert_section_wrapper align-items-center">
              <div className="col-md-6">
                <h2 className="cs_fs_24 mb-1 mt-0 text-align-left">Affordable Electronics PCB Repair and Servo Drive Services in Dubai, UAE</h2>
                <p className="mb-1">We are the highest provider of electronic <a href="https://www.fajservices.ae/services/">PCB repair and servo drive repair services in Dubai</a>, dedicated to reviving and extending the life of your electronic equipment. appliances PCB, AC PCB and all Printed Circuit Boards repair near you.</p>
                <p className="mb md-1">When it comes to printed circuit boards (PCBs), even minor faults can disrupt your electronics' performance. <a href="https://maps.app.goo.gl/qSMC1s6pnKz5YK9cA">FAJ Technical Services L.L.C</a> acknowledges the important role of PCBs in modern technology, which is why we offer comprehensive repair services for issues ranging from minor defects to complex damage.</p>
              </div>
              <div className="col-md-6">
                 <img
                    className="blue-border"
                    src={getImageSrc('pcb-repair-services')}
                    alt="PCB Repair Services in Dubai"
                    loading="lazy"
                    width="600" height="400"
                    style={{ width: '100%', height: 'auto' }}
                  />
              </div>
            </div>
          </div>
        </section>

        {/* Why AC Maintenance Important */}
        <LazySection minHeight="400px">
          <section className="section cs_py_30 pb-3" style={{ contain: 'layout style' }}>
            <div className="container">
             
              
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    className="blue-border"
                    src={getImageSrc('pcb-repair')}
                    alt="PCB Repair in Dubai"
                    loading="lazy"
                    width="600" height="400"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="col-md-6">
                   <h2 className="cs_fs_24 mb-1 mt-0 text-align-left">Why Choose Our PCB Repair Services?</h2>
                  <ul className="mb-0">
                    <li><strong>Skilled PCB Technicians: </strong>Our team consists of highly skilled technicians who excel in diagnosing and repairing PCBs of varying complexities.</li>
                    <li><strong>Cutting-Edge Equipment: </strong>We support the most advanced diagnostic and repair equipment to guarantee precision and reliability.</li>
                    <li><strong>Quick Turnaround:</strong> We recognise the importance of reducing downtime and provide quick turnaround times to ensure your electronics are back in action.</li>
                    <li><strong>Quality Assurance: </strong>Our strict quality control processes ensure that repaired PCBs meet or exceed industry standards.</li>
                    <li><strong>Significant Savings: </strong>Repairing a PCB is usually more economical than purchasing new, particularly for specialized or obsolete industrial equipment.</li>
                    <li><strong>Environmental Responsibility: </strong>FAJ help reduce electronic waste (e-waste) by extending the lifespan of your existing components.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* How to use FAJ */}
        <section className="section cs_py_30 bg-light-blue-section" style={{ contain: 'layout style' }}>
          <div className="container">
            <h2 className="cs_fs_28">Our Repair Process</h2>
            <p className="cs-fs_14">At <a href="https://maps.app.goo.gl/2R9PzXMdN9ysmemcA"><strong>FAJ Technical Services L.L.C</strong></a> our repair process is transparent and efficient:</p>
            <div className="row g-3 justify-content-center">
              <div className=" col-md-4 col-sm-6">
                <div className="service-card-item"><h3>PCB Diagnosis</h3><p className="cs_fs_14">We begin by diagnosing the issue with your PCB or servo drive and identifying the root cause of the problem.</p></div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="service-card-item"><h3>PCB Repair</h3><p className="cs_fs_14">Our expert technicians perform necessary repairs, utilising high-quality components and adhering to industry best practices.</p></div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="service-card-item"><h3>PCB Testing</h3><p className="cs_fs_14">Every repaired component is thoroughly tested to ensure it operates perfectly.</p></div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="service-card-item"><h3>PCB Quality Assurance</h3><p className="cs_fs_14">We enforce rigorous quality control to ensure the reliability and durability of the repaired components.</p></div>
              </div>
              <div className=" col-md-4 col-sm-6">
                <div className="service-card-item"><h3>PCB Delivery</h3><p className="cs_fs_14">After your PCB or servo drive is repaired and successfully tested, we will promptly return it to you, ready for use.</p></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section cs_py_30 pb-3" style={{ contain: 'layout style' }}>
            <div className="container">
                <h2 className="cs_fs_24">Get Your Electronics Working Again! with FAJ Electronics PCB Repair Specialists</h2>
                <div className="custom-pcb-cards row">
                  <div>
                    <div className="card">
                      <div className="card-img">
                        <img
                          className="blue-border"
                          src={getImageSrc('pcb-repair')}
                          alt="PCB Repair"
                          loading="lazy"
                          width="600" height="400"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                      <div className="card-text">
                        <h3 className="main-heading">Industrial PCB Board</h3>
                        <h4 className="subheading">Manufacturing & Renewable Energy Machinery</h4>
                        <ul>
                          <li><p>When essential components on the PCB fail, it can cause costly downtime and disrupt manufacturing operations.</p></li>
                          <li><p>If these machines fail due to PCB faults, our PCB technician will accurately diagnose the faulty component on the PCBs and replace it to restore functionality.</p></li>
                          <li><p>PCB repair is a valuable skill that extends the lifespan of electronic devices. At FAJ Electronic Services in Dubai, we specialise in restoring faulty PCB boards, offering solutions from minor fixes to complete overhauls. Contact us today to see how we can help!</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card">
                      <div className="card-img">
                        <img
                          className="blue-border"
                          src={getImageSrc('commercialpcbrepair')}
                          alt="Commercial PCB Repair Services in Dubai"
                          loading="lazy"
                          width="600" height="400"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                      <div className="card-text">
                        <h3 className="main-heading">Commercial</h3>
                        <h4 className="subheading">Commercial & Professional Equipment’s</h4>
                        <ul>
                          <li><p>Commercial & Professional Equipment’s. Automation PCB board, transportation PCB, logistics PCB, healthcare PCB, hospitality PCB, automobiles electronic circuit board PCB, and networking PCB.</p></li>
                          <li><p>When necessary components on a PCB (printed circuit board) fail, it can result in costly downtime and disrupt your business operations. If machines cease functioning due to a PCB fault, FAJ PCB technicians can accurately diagnose the faulty component. They will then replace it with a new one, fixing the machine to operational status.</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card">
                      <div className="card-img">
                        <img
                          className="blue-border"
                          src={getImageSrc('consumerpcbrepair')}
                          alt="Consumer PCB Repair Services in Dubai"
                          loading="lazy"
                          width="600" height="400"
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </div>
                      <div className="card-text">
                        <h3 className="main-heading">Consumer</h3>
                        <h4 className="subheading">Consumer Durable Equipment’s</h4>
                        <ul>
                          <li><p>When required components on the PCB board fail, it can disrupt your daily life.</p></li>
                          <li><p>If the equipment stops working due to a PCB fault, PCB technicians can accurately diagnose the faulty component on the PCBs and replace it to repair functionality.</p></li>
                          <li><p>When your air conditioner, appliances, or kitchen equipment such as refrigerators, washing machines, dryer, ice maker & chillers suddenly stop working, it’s often due to a malfunctioning PCB (Printed Circuit Board). The FAJ team offers reliable & fast repair services for electronic boards.</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </section>
        {/* <div ref={testimonialSectionRef} style={{ minHeight: '400px' }}>
          {testimonialSectionInView && testimonialData.length > 0 && (
            <Suspense fallback={<div style={{ height: '400px', background: '#f5f5f5' }} />}>
              <Testimonial1
                subtitle="What Our Clients Say"
                title="Customer <span>Reviews</span>"
                bgImg={`${CDN}/testimonialbg/public`}
                testimonialData={testimonialData}
                sectionId="ac-service-testimonials"
              />
            </Suspense>
          )}
        </div> */}

        {/* <LazySection minHeight="300px"><Blog2 /></LazySection> */}

        {/* Book Appointment */}
        <LazySection minHeight="200px">
          <section className="section cs_py_30 bg-dark-blue text-light">
            <Serviceappointemnt subtitle2="Contact us" title2="Book An Appointment" />
          </section>
        </LazySection>
        <div ref={faqSectionRef} style={{ minHeight: '300px' }}>
          {faqSectionInView && (
            <FAQSection
              data={faqData}
              openItemIndex={openItemIndex}
              onItemClick={handleItemClick}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default memo(AcServiceInDubai);
