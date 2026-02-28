import { useCallback, useEffect, useMemo, useState } from 'react';
import Testimonial1 from '../../Testimonial/Testimonial1';
import CoffeeMachineButton from '../../Buttons/CoffeeMachineButton';
import CommCoffeeMachineButton from '../../Buttons/CommCoffeeMachineButton';
import { Helmet } from 'react-helmet-async';
import WhatsappIconButton from '../../Buttons/WhatsappIconButton';
import loadBackgroudImages from '../../Common/loadBackgroudImages';
import BlogCoffeeMachine from './BlogCoffeeMachine';

const CDN = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const getImageSrc = (imgPath) => {
  if (!imgPath) return '';
  if (imgPath.startsWith('https')) return imgPath;
  return `${CDN}/${imgPath}/public`;
};

const SERVICE_IMAGE_STYLE = {
  width: '100%',
  height: 'auto',
  display: 'block',
  border: '4px solid #030303',
  borderRadius: '8px',
  objectFit: 'cover',
};

const SHOP_LINKS = [
  { href: 'https://www.fajtradingllc.com/collections/professional-espresso-machines', label: 'Professional Espresso Machines' },
  { href: 'https://www.fajtradingllc.com/collections/automatic-coffee-machine', label: 'Automatic Coffee Machine' },
  { href: 'https://www.fajtradingllc.com/collections/office-coffee-machines', label: 'Office Coffee Machines' },
  { href: 'https://www.fajtradingllc.com/collections/home-coffee-machines', label: 'Home Coffee Machines' },
  { href: 'https://www.fajtradingllc.com/collections/capsule-coffee-machines', label: 'Capsule Coffee Machines' },
  { href: 'https://www.fajtradingllc.com/collections/coffee-grinders', label: 'Coffee Grinders' },
  { href: 'https://www.fajtradingllc.com/collections/coffee-brewers', label: 'Coffee Brewers' },
  { href: 'https://www.fajtradingllc.com/collections/blender', label: 'Blender' },
  { href: 'https://www.fajtradingllc.com/collections/water-boiler', label: 'Water Boiler' },
  { href: 'https://www.fajtradingllc.com/collections/milk-frother', label: 'Milk Frother' },
  { href: 'https://www.fajtradingllc.com/collections/ice-crusher', label: 'Ice Crusher' },
  { href: 'https://www.fajtradingllc.com/collections/beverage-cooler', label: 'Beverage Cooler' },
];

const COMMON_PROBLEMS = [
  { title: 'Grinder Malfunctions', desc: 'Most Likely Causes: Dull blades, motor issues, or a jammed grinder.' },
  { title: 'Slow Brewing', desc: 'Hard water can lead to a buildup of minerals and clogged filters.' },
  { title: 'Portafilter Problems', desc: 'The gasket is worn out and not sealing properly, and the filter basket is clogged.' },
  { title: 'Machine Not Turning On', desc: 'Issues such as a defective power cord, a faulty switch, or an internal electrical failure may be present.' },
  { title: 'Water Leaks', desc: 'Seals are broken, water reservoirs are cracked, and pipes are blocked.' },
  { title: 'Poor Coffee Quality', desc: 'Possible issues include a clogged filter, an incorrect grind size, or an improper brewing temperature.' },
  { title: 'Noisy Operation', desc: 'The pump is worn out, there are issues with the motor, and some components are loose.' },
  { title: 'Milk Frothier Issues', desc: 'Blocks, a malfunctioning frother motor, and temperature-related issues.' },
  { title: 'Inconsistent Temperature', desc: 'A malfunctioning thermostat, burnt-out heating elements, or defective temperature-regulating components.' },
  { title: 'Weak or Watery Coffee', desc: 'Possible causes include an incorrect coffee-to-water ratio, insufficient coffee quantity, and brewing errors.' },
  { title: 'Machine Shuts Off Mid-Brew', desc: 'Possible Causes: Overheating, electrical malfunctions, and faulty sensors.' },
  { title: 'Display Malfunctions', desc: 'Issues identified include a defective control board, wiring problems, and software bugs.' },
  { title: 'Water Not Heating', desc: 'The heating element is broken, there are issues with the thermostat, and there are electrical faults.' },
  { title: 'Excessive Steam or No Steam', desc: 'Issues with the steam wand include malfunctioning, pressure problems, and blocked steam nozzles.' },
  { title: 'Coffee Grounds in Cup', desc: 'The filter is damaged and misaligned, and there are too many grounds in the basket.' },
];

const BULLET_LIST_CSS = `
  .service-bullet-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .service-bullet-list li {
    position: relative;
    padding-left: 24px;
    font-size: 15px;
    color: #000000;
  }
  .service-bullet-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 10px;
    height: 10px;
    background-color: #1a3a4a;
    border-radius: 50%;
  }
  @media (max-width: 576px) {
    .service-bullet-list {
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
    .service-bullet-list li {
      font-size: 13px;
      padding-left: 18px;
    }
    .service-bullet-list li::before {
      width: 8px;
      height: 8px;
      top: 6px;
    }
  }
`;

const ServiceImage = ({ src, alt, title }) => (
  <div className="service-image-wrapper">
    <img
      src={src}
      alt={alt}
      title={title}
      width="500"
      height="400"
      loading="lazy"
      decoding="async"
      className="service-image"
      style={SERVICE_IMAGE_STYLE}
    />
  </div>
);

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2V14M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 8H14" stroke="#1E1E1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CoffeeMachineCatg = ({ titleSeo, description, Author, URL }) => {
  const metatitle = titleSeo || 'Coffee Machine Repair Service in Dubai - FAJ Technical Services L.L.C';
  const metadescription = description || 'Coffee Machine Repair and Maintenance Services in Dubai';
  const metaAuthor = Author || 'FAJ Technical Services L.L.C';
  const metaURL = URL || 'https://www.fajservices.ae/services/coffee-machine/';
  const metaImage = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA/ac filter/public';


  const [openItemIndex, setOpenItemIndex] = useState(0);
  const [faqs, setFaqs] = useState([]);
  const [testimonialData, setTestimonialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const handleItemClick = useCallback((index) => {
    setOpenItemIndex((prev) => (prev === index ? -1 : index));
  }, []);


  useEffect(() => {
    loadBackgroudImages();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqsRes, testimonialsRes] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}data/coffeemachinesserviceFaqs.json`),
          fetch(`${import.meta.env.BASE_URL}data/CoffeeMAchineReapairTestimonials.json`),
        ]);
        const [faqsData, testimonialsData] = await Promise.all([faqsRes.json(), testimonialsRes.json()]);
        setFaqs(faqsData);
        setTestimonialData(testimonialsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);


  const problemCards = useMemo(() =>
    COMMON_PROBLEMS.map(({ title, desc }) => (
      <div key={title} className="col-12 col-md-4 col-lg-3">
        <div className="box-content-container rounded border shadow">
          <div className="text-center">
            <h3 className="cs_fs_18 mt-0 mb-0 bg-dark-blue rounded-top text-light py-2 py-md-1">{title}</h3>
          </div>
          <div className="inner-apcs-feat-desc">
            <p className="p-2 mb-0">{desc}</p>
          </div>
        </div>
      </div>
    )), []);

  const shopLinks = useMemo(() =>
    SHOP_LINKS.map(({ href, label }) => (
      <li key={href}><a href={href}>{label}</a></li>
    )), []);

  const faqItems = useMemo(() =>
    faqs.map((item, index) => (
      <div
        key={index}
        className={`cs_accordian cs_style_1 cs_type_1 ${index === openItemIndex ? 'active' : ''}`}
      >
        <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
          <span className="cs_fs_16 cs_semibold mb-0">{item.title}</span>
          <span className="cs_accordian_toggle">
            {index === openItemIndex ? <MinusIcon /> : <PlusIcon />}
          </span>
        </div>
        <div className="cs_accordian_body">
          <p
            className="mb-0"
            dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }}
          />
        </div>
      </div>
    )), [faqs, openItemIndex, handleItemClick]);


  return (
    <>
      <style>{BULLET_LIST_CSS}</style>

      <Helmet>
        <title>{metatitle}</title>
        <meta name="description" content={metadescription} />
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
      </Helmet>

      <div className="cs_service_details">


        <section className="section cs_py_30">
          <div className="container">
            <h1 className="cs_fs_30">Exceptional Coffee Machine Maintenance Services Since 2010</h1>
            <p>
              Brewing Quality and Expertise, one cup at a time. FAJ Technical Services L.L.C. provides high-quality
              coffee and espresso machines maintenance, installation, descaling, and cleaning services and annual
              maintenance contract (agreement) services in Dubai.
            </p>
            <p>
              Keep your coffee flowing with our professional repair and maintenance services. We specialise in servicing
              all types of coffee equipment and tools, including vending machines, espresso machines, grinders, brewers,
              steamers, and café accessories, with genuine coffee machine spare parts in Dubai.
            </p>
            <div id="get-quote" className="mt-3">
              <div className="container d-flex justify-content-center align-items-center gap-3">
                <CoffeeMachineButton />
                <CommCoffeeMachineButton />
              </div>
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Technical Services to Keep Your Coffee Flowing</h2>
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <ServiceImage
                  src={`${CDN}/coffee-flowing/public`}
                  alt="Coffee Machine Technical Services in Dubai - FAJ Technical Services"
                  title="Coffee Machine Technical Service in Dubai"
                />
              </div>
              <div className="col-12 col-lg-7">
                <p>Ensuring smooth coffee operations through quick and efficient service and repair solutions.</p>
                <p><b>Quick Response Time:</b> We provide phone or in-person assistance to minimise downtime.</p>
                <p><b>Flexible Scheduling:</b> Repairs are completed at the earliest comfort based on client confirmation.</p>
                <p><b>No-Cost:</b> Eligible breakdowns during the warranty period are cost-free for the same part or service.</p>
                <p><b>Trained Technicians:</b> Our technicians are experts in troubleshooting issues with all types & brands of coffee machines.</p>
              </div>
            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center gap-3">
              <WhatsappIconButton />
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-white">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Annual Maintenance Contract (AMC)</h2>
            <div className="row align-items-center">
              <div className="col-12 col-lg-7">
                <p>Ensuring smooth coffee operations through quick and efficient service and repair solutions.</p>
                <p><b>Quick Response Time:</b> We provide phone or in-person assistance to minimise downtime.</p>
                <p><b>Flexible Scheduling:</b> Repairs are completed at the earliest comfort based on client confirmation.</p>
                <p><b>No-Cost:</b> Eligible breakdowns during the warranty period are cost-free for the same part or service.</p>
                <p><b>Trained Technicians:</b> Our technicians are experts in troubleshooting issues with all types & brands of coffee machines.</p>
              </div>
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <ServiceImage
                  src={`${CDN}/coffeemachinewhy/public`}
                  alt="Coffee Machine AMC Services in Dubai - FAJ Technical Services"
                  title="Coffee Machine AMC Service in Dubai"
                />
              </div>
            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center gap-3">
              <WhatsappIconButton />
            </div>
          </div>
        </section>

        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Shop for Coffee Machines, Equipment, and Accessories</h2>
            <div className="row align-items-center">
              <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                <ServiceImage
                  src={`${CDN}/shoppart/public`}
                  alt="Coffee Machine Parts and Accessories in Dubai - FAJ Technical Services"
                  title="Coffee Machine Parts Shop in Dubai"
                />
              </div>
              <div className="col-12 col-lg-8">
                <p>If you need to buy a new coffee machine, espresso machine, vending machine, coffee equipment, or replacement parts and accessories, we deliver quickly to any location.</p>
                <ul className="service-bullet-list">{shopLinks}</ul>
              </div>
            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center gap-3">
              <WhatsappIconButton />
            </div>
          </div>
        </section>

        <section className="section cs_py_30">
          <div className="container">
            <h2 className="cs_fs_30 text-center mb-4">Why Choose Our Coffee Machine Maintenance Services</h2>
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                <div className="shop-ac-image-wrapper">
                  <img
                    src={`${CDN}/coffeemachinechoose/public`}
                    alt="Why Choose FAJ Coffee Machine Services in Dubai"
                    title="Coffee Machine Maintenance Service in Dubai"
                    width="500"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="shop-ac-image"
                    style={SERVICE_IMAGE_STYLE}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="shop-ac-bullet-list">
                  <div className="shop-ac-bullet-col">
                    <ul>
                      <li><b>Expert Technicians:</b> Trained on leading different brands and types, including vending machines, espresso machines, coffee machines, and coffee equipment for home, office, restaurant and cafe.</li>
                      <li><b>Quick Turnaround:</b> We offer same-day inspections, and most repairs are completed within 48 to 72 hours.</li>
                      <li><b>Genuine Spare Parts:</b> Using genuine parts in coffee machines, equipment, and vending machines.</li>
                      <li><b>UAE Coverage:</b> Service is available in Dubai, Abu Dhabi, Sharjah, and throughout all the Emirates.</li>
                      <li><b>Warranty Support:</b> For machines that are covered by a service warranty.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 d-flex justify-content-center align-items-center gap-3">
              <WhatsappIconButton />
            </div>
          </div>
        </section>


        <section className="section cs_py_30 bg-light-gray">
          <div className="container">
            <h2 className="text-center">The Most Common Problems of Coffee Machines</h2>
            <div className="row gx-2 gx-lg-3 gy-3 gy-lg-4 justify-content-center">
              {problemCards}
            </div>
            <div id="get-quote" className="mb-0 mt-3 d-flex justify-content-center align-items-center gap-3">
              <WhatsappIconButton />
            </div>
          </div>
        </section>

 
        {!isLoading && testimonialData.length > 0 && (
          <Testimonial1
            subtitle="What Our Clients Say"
            title="Customer <span>Reviews</span>"
            bgImg={getImageSrc('testimonialbg')}
            testimonialData={testimonialData}
            sectionId="home-testimonials"
          />
        )}

        <BlogCoffeeMachine />

        <section className="section cs_py_30">
          <div className="container">
            <h3 className="cs_fs_30">FAQ&apos;s</h3>
            <div className="cs_accordians_wrapper cs_style_1 p-0">
              {faqItems}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default CoffeeMachineCatg;